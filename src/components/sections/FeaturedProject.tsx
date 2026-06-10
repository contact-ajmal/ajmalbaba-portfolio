"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Layers, GitBranch, Cloud, BarChart3, Search, Database, Link2, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

/* ── Project data ─────────────────────────────────────────── */

interface FeaturedProjectData {
    slug: string;
    title: string;
    tagline: string;
    narrative: ReactNode;
    pills: string[];
    highlights: { icon: ReactNode; label: string; description: string }[];
    image: string;
    liveUrl: string;
    ctaLabel: string;
    accent: {
        text: string;
        bg: string;
        border: string;
        pill: string;
        pillBg: string;
        pillBorder: string;
        btnBg: string;
        btnHover: string;
        glowFrom: string;
        glowTo: string;
        hoverBorder: string;
        glow: string;
    };
}

const featuredProjects: FeaturedProjectData[] = [
    {
        slug: "architectflow",
        title: "ArchitectFlow",
        tagline: "The data & AI architecture studio",
        narrative: (
            <>
                After years of designing data platforms and leading architecture decisions across sports, healthcare, and enterprise — I built the tool I wished existed.{" "}
                <span className="text-[var(--fg)]">
                    ArchitectFlow turns real-world constraints into a scored, auditable architecture recommendation
                </span>{" "}
                with cloud-adaptive diagrams you can export and defend.
            </>
        ),
        pills: ["Lakehouse", "Data Mesh", "Data Fabric", "Lambda", "Kappa", "GenAI / RAG", "Agentic"],
        highlights: [
            { icon: <Layers size={20} />, label: "20+ Patterns", description: "Scored & ranked" },
            { icon: <Cloud size={20} />, label: "Cloud-Adaptive", description: "AWS · Azure · GCP" },
            { icon: <GitBranch size={20} />, label: "Deterministic", description: "No black box" },
            { icon: <BarChart3 size={20} />, label: "Exportable", description: "SVG · PNG · PDF" },
        ],
        image: "/projects/architectflow.png",
        liveUrl: "https://architectflow.pages.dev/",
        ctaLabel: "Design Your Architecture",
        accent: {
            text: "text-cyan-400",
            bg: "bg-cyan-500/15",
            border: "border-cyan-500/30",
            pill: "text-cyan-300",
            pillBg: "bg-cyan-500/10",
            pillBorder: "border-cyan-500/25",
            btnBg: "bg-cyan-500",
            btnHover: "hover:bg-cyan-400",
            glowFrom: "group-hover:from-cyan-500/5",
            glowTo: "group-hover:to-cyan-500/5",
            hoverBorder: "hover:border-cyan-500/40",
            glow: "bg-cyan-500",
        },
    },
    {
        slug: "datacrawlr",
        title: "Datacrawlr",
        tagline: "The dataset and model intelligence layer",
        narrative: (
            <>
                Building ML systems means choosing the right data — but the ecosystem is fragmented across HuggingFace, Kaggle, GitHub, and dozens of government portals.{" "}
                <span className="text-[var(--fg)]">
                    Datacrawlr unifies every dataset and every model into a single searchable index
                </span>{" "}
                with semantic search, AI synthesis, and model-dataset lineage graphs.
            </>
        ),
        pills: ["HuggingFace", "Kaggle", "GitHub", "Gov Portals", "AI Synthesis", "Lineage Graphs", "Benchmarks"],
        highlights: [
            { icon: <Search size={20} />, label: "Semantic Search", description: "AI-powered" },
            { icon: <Database size={20} />, label: "9+ Sources", description: "Unified index" },
            { icon: <Link2 size={20} />, label: "Lineage Graphs", description: "Model ↔ Dataset" },
            { icon: <Sparkles size={20} />, label: "AI Synthesis", description: "Cards & citations" },
        ],
        image: "/projects/datacrawlr.png",
        liveUrl: "https://datacrawlr.pages.dev/",
        ctaLabel: "Explore Datasets & Models",
        accent: {
            text: "text-teal-400",
            bg: "bg-teal-500/15",
            border: "border-teal-500/30",
            pill: "text-teal-300",
            pillBg: "bg-teal-500/10",
            pillBorder: "border-teal-500/25",
            btnBg: "bg-teal-500",
            btnHover: "hover:bg-teal-400",
            glowFrom: "group-hover:from-teal-500/5",
            glowTo: "group-hover:to-teal-500/5",
            hoverBorder: "hover:border-teal-500/40",
            glow: "bg-teal-500",
        },
    },
];

/* ── Reusable card ────────────────────────────────────────── */

function FeaturedCard({ project, index }: { project: FeaturedProjectData; index: number }) {
    const { accent } = project;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`group relative rounded-2xl border border-[var(--border)] bg-white/[0.03] backdrop-blur-sm overflow-hidden ${accent.hoverBorder} transition-colors duration-500`}
        >
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-0">
                {/* Left — Content */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                    <div>
                        {/* Title block */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`w-10 h-10 rounded-lg ${accent.bg} ${accent.border} border flex items-center justify-center ${accent.text}`}>
                                {project.slug === "architectflow" ? <Layers size={20} /> : <Database size={20} />}
                            </div>
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                                    {project.title}
                                </h3>
                                <span className="text-sm text-[var(--fg-muted)] font-mono">
                                    {project.tagline}
                                </span>
                            </div>
                        </div>

                        <p className="text-lg text-[var(--fg-muted)] leading-relaxed mb-6 max-w-xl">
                            {project.narrative}
                        </p>

                        {/* Pills */}
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.pills.map((pill, i) => (
                                <motion.span
                                    key={pill}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                    className={`px-3 py-1.5 text-xs font-mono rounded-full border ${accent.pillBorder} ${accent.pillBg} ${accent.pill} tracking-wide`}
                                >
                                    {pill}
                                </motion.span>
                            ))}
                        </div>

                        {/* Stat highlights */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {project.highlights.map((h, i) => (
                                <motion.div
                                    key={h.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.08 }}
                                    className="p-3 rounded-lg bg-white/[0.03] border border-[var(--border)]"
                                >
                                    <div className={`${accent.text} mb-2`}>{h.icon}</div>
                                    <div className="text-sm font-semibold text-[var(--fg)]">{h.label}</div>
                                    <div className="text-xs text-[var(--fg-muted)]">{h.description}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-6 py-3 ${accent.btnBg} text-black font-bold rounded-full ${accent.btnHover} transition-colors text-sm`}
                        >
                            {project.ctaLabel}
                            <ArrowUpRight size={16} />
                        </a>
                        <Link
                            href={`/projects/${project.slug}`}
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
                        src={project.image}
                        alt={`${project.title} — ${project.tagline}`}
                        fill
                        className="object-cover object-left-top"
                    />
                    {/* Bottom fade */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg)] to-transparent z-10" />
                </div>
            </div>

            {/* Subtle glow on hover */}
            <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br from-transparent via-transparent to-transparent ${accent.glowFrom} group-hover:via-transparent ${accent.glowTo} transition-all duration-700 pointer-events-none`} />
        </motion.div>
    );
}

/* ── Section ──────────────────────────────────────────────── */

export function FeaturedProject() {
    return (
        <section className="py-24 px-[var(--container-padding)] relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-[30%] left-[40%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500 opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[20%] right-[30%] w-[600px] h-[600px] bg-teal-500 opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section eyebrow */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <span className="text-[var(--accent)] font-mono text-sm tracking-widest uppercase">
                        Featured Projects
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-3">
                        Built from the <span className="text-[var(--accent)]">Architect&apos;s Seat</span>
                    </h2>
                    <p className="text-lg text-[var(--fg-muted)] mt-3 max-w-2xl leading-relaxed">
                        Tools born from real-world data platform leadership — solving problems I&apos;ve faced designing systems at scale.
                    </p>
                </motion.div>

                {/* Project cards */}
                <div className="space-y-10">
                    {featuredProjects.map((project, index) => (
                        <FeaturedCard key={project.slug} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
