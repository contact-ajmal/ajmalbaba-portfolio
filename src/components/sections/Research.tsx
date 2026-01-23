"use client";

import { motion } from "framer-motion";
import { Microscope, Brain, Activity, Database, Cpu } from "lucide-react";
import Link from "next/link";
import { researchProjectsData } from "@/lib/research-projects";

const iconMap: { [key: string]: React.ReactNode } = {
    Microscope: <Microscope size={28} />,
    Brain: <Brain size={28} />,
    Activity: <Activity size={28} />,
    Database: <Database size={28} />,
    Cpu: <Cpu size={28} />
};

export function Research() {
    return (
        <section className="py-24 px-4 md:px-8 relative min-h-screen">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <span className="text-[var(--accent)] font-mono text-sm tracking-widest uppercase mb-4 block">
                        Research & Exploration
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold font-mono tracking-tighter mb-8">
                        SOLVING <span className="text-[var(--accent)]">PROBLEMS</span>
                    </h2>
                    <p className="text-xl text-[var(--fg-muted)] max-w-2xl mx-auto leading-relaxed">
                        Every project begins with a question. These are the problems I'm actively researching —
                        exploring AI, data, and software to find solutions that matter.
                    </p>
                </motion.div>

                {/* Research Projects Grid */}
                <div className="space-y-8">
                    {researchProjectsData.map((project, index) => {
                        const cardClassName = `group relative bg-[#0a0a0a] border border-[var(--border)] p-8 md:p-10 rounded-sm hover:border-[var(--accent)]/50 transition-all duration-300 block ${project.hasDetailPage ? "cursor-pointer" : ""}`;

                        const cardContent = (
                            <>
                                {/* Status Badge */}
                                <div className="absolute top-6 right-6 flex items-center gap-3">
                                    {project.hasDetailPage && (
                                        <span className="px-3 py-1 text-xs font-mono rounded-full border border-[var(--accent)]/50 text-[var(--accent)] bg-[var(--accent)]/10">
                                            View Details →
                                        </span>
                                    )}
                                    <span className={`px-3 py-1 text-xs font-mono rounded-full border ${project.status === "Active"
                                        ? "border-green-500/50 text-green-400 bg-green-500/10"
                                        : project.status === "Published"
                                            ? "border-blue-500/50 text-blue-400 bg-blue-500/10"
                                            : "border-yellow-500/50 text-yellow-400 bg-yellow-500/10"
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>

                                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                                    {/* Icon */}
                                    <div className="text-[var(--accent)] opacity-60 group-hover:opacity-100 transition-opacity">
                                        {iconMap[project.icon] || <Cpu size={28} />}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-[var(--fg-muted)] font-mono text-sm mb-4">
                                            {project.tagline}
                                        </p>
                                        <p className="text-[var(--fg-muted)] leading-relaxed mb-6">
                                            {project.description}
                                        </p>

                                        {/* Research Areas */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.researchAreas.map((area, i) => (
                                                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs font-mono text-[var(--fg-muted)] group-hover:text-[var(--fg)] group-hover:border-[var(--accent)]/30 transition-all">
                                                    {area}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Links */}
                                        {!project.hasDetailPage && (project.liveUrl || project.githubUrl) && (
                                            <div className="flex gap-4">
                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-sm text-[var(--accent)] hover:underline"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        View Project
                                                    </a>
                                                )}
                                                {project.githubUrl && (
                                                    <a
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-2 text-sm text-[var(--fg-muted)] hover:text-white"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        Source Code
                                                    </a>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </>
                        );

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {project.hasDetailPage ? (
                                    <Link href={`/research/${project.slug}`} className={cardClassName}>
                                        {cardContent}
                                    </Link>
                                ) : (
                                    <div className={cardClassName}>
                                        {cardContent}
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <p className="text-[var(--fg-muted)] mb-6">
                        Interested in collaborating on research?
                    </p>
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--accent)] text-black font-bold rounded-full hover:bg-white transition-colors"
                    >
                        Let's Connect
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
