"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ResearchProjectData } from "@/lib/research-projects";
import { ArrowLeft, Lock, Linkedin, Cpu, Shield, Brain, Database, Clock, FileSearch } from "lucide-react";

const componentIcons: { [key: string]: React.ReactNode } = {
    "Control Plane": <Shield size={24} />,
    "Intelligence Plane": <Brain size={24} />,
    "Temporal Orchestration": <Clock size={24} />,
    "Memory Systems": <Database size={24} />,
    "Human Review": <FileSearch size={24} />,
    "Audit & Logging": <Cpu size={24} />
};

export function ResearchDetailClient({ project }: { project: ResearchProjectData }) {
    return (
        <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">

            {/* Back Navigation */}
            <div className="fixed top-8 left-8 z-50 mix-blend-difference">
                <Link
                    href="/research"
                    className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider hover:text-[var(--accent)] transition-colors"
                >
                    <ArrowLeft size={16} /> Back to Research
                </Link>
            </div>

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-[var(--container-padding)] max-w-[1600px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[var(--border)] pb-8">
                        <div>
                            <div className="flex items-center gap-4 mb-4">
                                <span className={`px-3 py-1 text-xs font-mono rounded-full border ${project.status === "Active"
                                    ? "border-green-500/50 text-green-400 bg-green-500/10"
                                    : project.status === "Published"
                                        ? "border-blue-500/50 text-blue-400 bg-blue-500/10"
                                        : "border-yellow-500/50 text-yellow-400 bg-yellow-500/10"
                                    }`}>
                                    {project.status}
                                </span>
                                {project.year && (
                                    <span className="text-[var(--fg-muted)] font-mono text-sm">
                                        {project.year}
                                    </span>
                                )}
                            </div>
                            <h1 className="text-[clamp(3rem,6vw,6rem)] leading-none mb-4">{project.title}</h1>
                            <p className="text-xl text-[var(--fg-muted)] max-w-2xl">{project.tagline}</p>
                        </div>
                    </div>

                    {/* Research Areas */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        {project.researchAreas.map((area, i) => (
                            <span
                                key={i}
                                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-[var(--fg-muted)]"
                            >
                                {area}
                            </span>
                        ))}
                    </div>

                    {/* Code Availability Notice */}
                    {project.codeAvailability && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mb-12 p-6 bg-[#0a0a0a] border border-[var(--accent)]/30 rounded-lg flex items-start gap-4"
                        >
                            <Lock className="text-[var(--accent)] mt-1 flex-shrink-0" size={20} />
                            <div>
                                <h4 className="font-bold mb-2">Code Availability</h4>
                                <p className="text-[var(--fg-muted)] text-sm leading-relaxed">
                                    {project.codeAvailability}
                                </p>
                                <a
                                    href="https://linkedin.com/in/ajmalnazirbaba/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 mt-4 text-sm text-[var(--accent)] hover:underline"
                                >
                                    <Linkedin size={14} />
                                    Request Access
                                </a>
                            </div>
                        </motion.div>
                    )}

                    {/* Architecture Diagram */}
                    {project.architectureImage && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="relative w-full rounded-lg overflow-hidden bg-white p-4 md:p-8 mb-16"
                        >
                            <Image
                                src={project.architectureImage}
                                alt={`${project.title} Architecture`}
                                width={1920}
                                height={1080}
                                className="w-full h-auto object-contain"
                                priority
                            />
                            <p className="text-center text-gray-600 text-sm mt-4 font-mono">
                                {project.title} End-to-End System Architecture
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </section>

            {/* Content Section */}
            <section className="py-24 px-[var(--container-padding)] max-w-[1600px] mx-auto">
                <div className="grid lg:grid-cols-3 gap-16">

                    {/* Full Description & Detailed Sections */}
                    <div className="lg:col-span-2 space-y-16">
                        {/* Overview */}
                        <div>
                            <h2 className="text-3xl font-bold mb-8">Overview</h2>
                            <div className="prose prose-invert max-w-none">
                                {project.fullDescription?.split('\n\n').map((paragraph, i) => (
                                    <p key={i} className="text-lg text-[var(--fg-muted)] leading-relaxed mb-6">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Detailed Sections */}
                        {project.detailedSections?.map((section, index) => (
                            <div key={index}>
                                <h3 className="text-2xl font-bold mb-6 text-[var(--fg)]">{section.title}</h3>
                                <p className="text-lg text-[var(--fg-muted)] leading-relaxed">
                                    {section.content}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Sidebar Info */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-8">
                            <div className="p-6 bg-[#0a0a0a] border border-[var(--border)] rounded-lg">
                                <h3 className="text-lg font-bold mb-4">Project Details</h3>
                                <dl className="space-y-4 text-sm">
                                    <div>
                                        <dt className="text-[var(--fg-muted)]">Status</dt>
                                        <dd className="font-mono">{project.status}</dd>
                                    </div>
                                    {project.year && (
                                        <div>
                                            <dt className="text-[var(--fg-muted)]">Timeline</dt>
                                            <dd className="font-mono">{project.year}</dd>
                                        </div>
                                    )}
                                    <div>
                                        <dt className="text-[var(--fg-muted)]">Focus Areas</dt>
                                        <dd className="font-mono">{project.researchAreas.length} domains</dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Components */}
            {project.keyComponents && project.keyComponents.length > 0 && (
                <section className="py-24 px-[var(--container-padding)] max-w-[1600px] mx-auto border-t border-[var(--border)]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">Key Components</h2>
                        <p className="text-[var(--fg-muted)] text-lg max-w-2xl">
                            The architecture is built around these core systems, each designed for specific responsibilities in the agentic workflow.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {project.keyComponents.map((component, index) => (
                            <motion.div
                                key={component.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-6 bg-[#0a0a0a] border border-[var(--border)] rounded-lg hover:border-opacity-50 transition-all duration-300"
                                style={{ borderColor: `${component.color}30` }}
                            >
                                <div
                                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                                    style={{ backgroundColor: `${component.color}20`, color: component.color }}
                                >
                                    {componentIcons[component.title] || <Cpu size={24} />}
                                </div>
                                <h3 className="text-xl font-bold mb-2" style={{ color: component.color }}>
                                    {component.title}
                                </h3>
                                <p className="text-[var(--fg-muted)] text-sm leading-relaxed">
                                    {component.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* Footer Navigation */}
            <section className="py-32 border-t border-[var(--border)] text-center">
                <Link href="/research" className="inline-block group">
                    <span className="block text-[var(--fg-muted)] mb-2 text-sm uppercase tracking-widest">Back to</span>
                    <span className="text-4xl md:text-6xl font-medium group-hover:text-[var(--accent)] transition-colors">
                        All Research
                    </span>
                </Link>
            </section>

        </div>
    );
}
