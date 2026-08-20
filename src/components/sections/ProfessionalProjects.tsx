"use client";

import { motion } from "framer-motion";
import {
    Activity,
    BarChart3,
    Video,
    HeartPulse,
    Cloud,
    Globe,
    Crosshair,
    Move3d,
    Cpu,
    Building2,
    Layers,
    ArrowUpRight,
} from "lucide-react";
import { professionalProjects } from "@/lib/professional-projects";
import { useState } from "react";

const iconMap: { [key: string]: React.ReactNode } = {
    Activity: <Activity size={24} />,
    Crosshair: <Crosshair size={24} />,
    BarChart3: <BarChart3 size={24} />,
    Move3D: <Move3d size={24} />,
    Video: <Video size={24} />,
    HeartPulse: <HeartPulse size={24} />,
    Cloud: <Cloud size={24} />,
    Globe: <Globe size={24} />,
};

// Group projects by company
const groupedProjects = professionalProjects.reduce(
    (acc, project) => {
        if (!acc[project.company]) {
            acc[project.company] = [];
        }
        acc[project.company].push(project);
        return acc;
    },
    {} as Record<string, typeof professionalProjects>
);

const companyOrder = [
    "Hawk-Eye Innovations (Sony Sports)",
    "Atos (Cloudreach / Eviden)",
    "Ministry of Interior – Government of Qatar",
];

export function ProfessionalProjects() {
    const [expandedId, setExpandedId] = useState<string | null>(null);

    return (
        <section className="py-24 px-4 md:px-8 relative min-h-screen">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <span className="text-[var(--accent)] font-mono text-sm tracking-widest uppercase mb-4 block font-semibold">
                        Enterprise & Global Scale
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold font-mono tracking-tighter mb-8 text-[var(--fg)]">
                        PROFESSIONAL{" "}
                        <span className="text-[var(--accent)]">PROJECTS</span>
                    </h2>
                    <p className="text-xl text-[var(--fg-muted)] max-w-3xl mx-auto leading-relaxed">
                        Enterprise-grade systems I&apos;ve designed and
                        delivered — powering live broadcasts, officiating
                        decisions, and national-scale infrastructure across the
                        world&apos;s biggest sporting events.
                    </p>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
                >
                    {[
                        { label: "Projects Delivered", value: `${professionalProjects.length}+` },
                        { label: "Global Sports Platforms", value: "20+" },
                        { label: "Years of Engineering", value: "12+" },
                        { label: "Organisations", value: "3" },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="text-center p-6 border border-[var(--border)] bg-[var(--bg-card)] rounded-lg shadow-sm"
                        >
                            <div className="text-3xl md:text-4xl font-bold font-mono text-[var(--accent)] mb-2">
                                {stat.value}
                            </div>
                            <div className="text-xs font-mono text-[var(--fg-muted)] uppercase tracking-wider font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Projects by Company */}
                <div className="space-y-20">
                    {companyOrder.map((company, companyIndex) => {
                        const projects = groupedProjects[company];
                        if (!projects) return null;

                        return (
                            <motion.div
                                key={company}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: companyIndex * 0.1 }}
                            >
                                {/* Company Header */}
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="h-12 w-12 flex items-center justify-center border border-[var(--accent)]/30 bg-[var(--accent-muted)] rounded-lg text-[var(--accent)] shadow-sm">
                                        <Building2 size={22} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-[var(--fg)]">
                                            {company}
                                        </h3>
                                        <p className="text-sm font-mono text-[var(--fg-muted)]">
                                            {projects[0].role} · {projects.length} project{projects.length > 1 ? "s" : ""}
                                        </p>
                                    </div>
                                </div>

                                {/* Projects Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {projects.map((project, index) => {
                                        const isExpanded = expandedId === project.id;

                                        return (
                                            <motion.div
                                                key={project.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.05 }}
                                                layout
                                                className={`group relative bg-[var(--bg-card)] border border-[var(--border)] rounded-xl overflow-hidden hover:border-[var(--accent)]/40 transition-all duration-500 shadow-sm ${
                                                    isExpanded ? "md:col-span-2" : ""
                                                }`}
                                            >
                                                {/* Category Tag */}
                                                <div className="absolute top-4 right-4 z-10">
                                                    <span className="px-3 py-1 text-[10px] font-mono uppercase tracking-widest border border-[var(--border)] bg-[var(--bg-subtle)] rounded-full text-[var(--fg-muted)] group-hover:text-[var(--accent)] group-hover:border-[var(--accent)]/40 transition-all">
                                                        {project.category}
                                                    </span>
                                                </div>

                                                {/* Accent Line */}
                                                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent group-hover:via-[var(--accent)]/60 transition-all duration-700" />

                                                <div className="p-6 md:p-8">
                                                    <div className="flex items-start gap-4 mb-4">
                                                        {/* Icon */}
                                                        <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center border border-[var(--border)] bg-[var(--bg-subtle)] rounded-lg text-[var(--fg-muted)] group-hover:text-[var(--accent)] group-hover:border-[var(--accent)]/30 transition-all">
                                                            {iconMap[project.icon] || <Cpu size={24} />}
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <h4 className="text-xl font-bold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors mb-1 pr-20">
                                                                {project.name}
                                                            </h4>
                                                            <p className="text-xs font-mono text-[var(--fg-muted)]">
                                                                {project.company}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Description */}
                                                    <p className={`text-[var(--fg-muted)] text-sm leading-relaxed mb-5 ${
                                                        isExpanded ? "" : "line-clamp-3"
                                                    }`}>
                                                        {project.description}
                                                    </p>

                                                    {/* Impact Highlight */}
                                                    <div className="flex items-start gap-2 mb-6 p-3 bg-[var(--accent-muted)] border border-[var(--accent)]/20 rounded-lg">
                                                        <ArrowUpRight
                                                            size={14}
                                                            className="text-[var(--accent)] mt-0.5 flex-shrink-0"
                                                        />
                                                        <p className="text-xs text-[var(--accent)] font-medium leading-relaxed">
                                                            {project.impact}
                                                        </p>
                                                    </div>

                                                    {/* Tech Stack */}
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {project.techStack.map((tech, i) => (
                                                            <span
                                                                key={i}
                                                                className="px-2.5 py-1 text-[10px] font-mono border border-[var(--border)] bg-[var(--bg-subtle)] rounded-full text-[var(--fg-muted)] group-hover:text-[var(--fg)] group-hover:border-[var(--accent)]/20 transition-all"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {/* Expand/Collapse */}
                                                    <button
                                                        onClick={() =>
                                                            setExpandedId(
                                                                isExpanded ? null : project.id
                                                            )
                                                        }
                                                        className="text-[10px] font-mono uppercase tracking-widest text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors border-b border-transparent hover:border-[var(--accent)] cursor-pointer"
                                                    >
                                                        {isExpanded ? "[ Collapse ]" : "[ Read More ]"}
                                                    </button>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Divider */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 pt-12 border-t border-[var(--border)] text-center"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Layers size={16} className="text-[var(--accent)]" />
                        <span className="text-sm font-mono text-[var(--fg-muted)] uppercase tracking-widest">
                            Building the systems that power global sports
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
