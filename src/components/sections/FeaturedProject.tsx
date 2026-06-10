"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layers, GitBranch, Cloud, BarChart3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const architectureLayers = [
    "Lakehouse",
    "Data Mesh",
    "Data Fabric",
    "Lambda",
    "Kappa",
    "GenAI / RAG",
    "Agentic",
];

const highlights = [
    {
        icon: <Layers size={20} />,
        label: "20+ Patterns",
        description: "Scored & ranked",
    },
    {
        icon: <Cloud size={20} />,
        label: "Cloud-Adaptive",
        description: "AWS · Azure · GCP",
    },
    {
        icon: <GitBranch size={20} />,
        label: "Deterministic",
        description: "No black box",
    },
    {
        icon: <BarChart3 size={20} />,
        label: "Exportable",
        description: "SVG · PNG · PDF",
    },
];

export function FeaturedProject() {
    return (
        <section className="py-24 px-[var(--container-padding)] relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500 opacity-[0.04] blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <span className="text-[var(--accent)] font-mono text-sm tracking-widest uppercase">
                        Featured — Built from the Architect's Seat
                    </span>
                </motion.div>

                {/* Main card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="group relative rounded-2xl border border-[var(--border)] bg-white/[0.03] backdrop-blur-sm overflow-hidden hover:border-cyan-500/40 transition-colors duration-500"
                >
                    <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-0">
                        {/* Left — Content */}
                        <div className="p-8 md:p-12 flex flex-col justify-between">
                            <div>
                                {/* Title block */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                                        <Layers size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                                            ArchitectFlow
                                        </h3>
                                        <span className="text-sm text-[var(--fg-muted)] font-mono">
                                            The data & AI architecture studio
                                        </span>
                                    </div>
                                </div>

                                <p className="text-lg text-[var(--fg-muted)] leading-relaxed mb-6 max-w-xl">
                                    After years of designing data platforms and leading architecture decisions across sports, healthcare, and enterprise — I built the tool I wished existed.{" "}
                                    <span className="text-[var(--fg)]">
                                        ArchitectFlow turns real-world constraints into a scored, auditable architecture recommendation
                                    </span>{" "}
                                    with cloud-adaptive diagrams you can export and defend.
                                </p>

                                {/* Architecture pattern pills */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {architectureLayers.map((layer, i) => (
                                        <motion.span
                                            key={layer}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 + i * 0.05 }}
                                            className="px-3 py-1.5 text-xs font-mono rounded-full border border-cyan-500/25 bg-cyan-500/10 text-cyan-300 tracking-wide"
                                        >
                                            {layer}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Stat highlights */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                                    {highlights.map((h, i) => (
                                        <motion.div
                                            key={h.label}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + i * 0.08 }}
                                            className="p-3 rounded-lg bg-white/[0.03] border border-[var(--border)]"
                                        >
                                            <div className="text-cyan-400 mb-2">{h.icon}</div>
                                            <div className="text-sm font-semibold text-[var(--fg)]">{h.label}</div>
                                            <div className="text-xs text-[var(--fg-muted)]">{h.description}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-wrap items-center gap-4">
                                <a
                                    href="https://architectflow.pages.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-colors text-sm"
                                >
                                    Design Your Architecture
                                    <ArrowUpRight size={16} />
                                </a>
                                <Link
                                    href="/projects/architectflow"
                                    className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] rounded-full text-sm font-medium text-[var(--fg-muted)] hover:text-[var(--fg)] hover:border-[var(--fg-muted)] transition-colors"
                                >
                                    View Project Details
                                </Link>
                            </div>
                        </div>

                        {/* Right — Preview Image */}
                        <div className="relative hidden lg:block">
                            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[var(--bg)]/80 z-10" />
                            <Image
                                src="/projects/architectflow.png"
                                alt="ArchitectFlow — data architecture studio"
                                fill
                                className="object-cover object-left-top"
                            />
                            {/* Bottom fade */}
                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg)] to-transparent z-10" />
                        </div>
                    </div>

                    {/* Subtle glow on hover */}
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-cyan-500/0 via-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/5 group-hover:via-transparent group-hover:to-cyan-500/5 transition-all duration-700 pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
