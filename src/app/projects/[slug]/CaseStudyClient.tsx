"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/lib/projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";
import Lenis from "lenis";

export function CaseStudyClient({ project }: { project: Project }) {

    // Re-initialize Lenis for this page if needed, or rely on global layout.
    // Since we have global layout, we just need to make sure we don't break it.

    return (
        <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">

            {/* Back Navigation */}
            <div className="fixed top-8 left-8 z-50 mix-blend-difference">
                <Link
                    href="/projects"
                    className="flex items-center gap-2 text-sm font-mono uppercase tracking-wider hover:text-[var(--accent)] transition-colors"
                >
                    <ArrowLeft size={16} /> Back to Personal Projects
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
                            <h1 className="text-[clamp(3rem,6vw,6rem)] leading-none mb-4">{project.title}</h1>
                            <p className="text-xl text-[var(--fg-muted)] max-w-2xl">{project.tagline}</p>
                        </div>
                        <div className="flex gap-4">
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" className="flex items-center gap-2 px-6 py-3 border border-[var(--border)] rounded-full hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors">
                                    <ExternalLink size={18} /> Live Site
                                </a>
                            )}
                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" className="flex items-center gap-2 px-6 py-3 border border-[var(--border)] rounded-full hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors">
                                    <Github size={18} /> Code
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Meta Data */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-sm">
                        <div>
                            <span className="block text-[var(--fg-muted)] mb-1">Year</span>
                            <span>{project.year}</span>
                        </div>
                        <div>
                            <span className="block text-[var(--fg-muted)] mb-1">Category</span>
                            <span>{project.category}</span>
                        </div>
                        <div className="col-span-2">
                            <span className="block text-[var(--fg-muted)] mb-1">Tech Stack</span>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map(t => (
                                    <span key={t} className="px-2 py-1 bg-[var(--border)] rounded text-xs">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative aspect-video w-full rounded-sm overflow-hidden bg-[var(--border)]">
                        <Image
                            src={typeof project.image === 'string' ? project.image : project.image.src}
                            alt={project.title}
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                </motion.div>
            </section>

            {/* Content Grid */}
            <section className="py-24 px-[var(--container-padding)] max-w-[1600px] mx-auto">
                <div className="grid lg:grid-cols-3 gap-16">

                    {/* Sidebar / Context */}
                    <div className="lg:col-span-1 space-y-12">
                        <div>
                            <h3 className="text-2xl font-medium mb-4">The Challenge</h3>
                            <p className="text-[var(--fg-muted)] leading-relaxed">
                                {project.problem}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-medium mb-4">Key Features</h3>
                            <ul className="space-y-3 text-[var(--fg-muted)]">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex gap-2">
                                        <span className="text-[var(--accent)]">•</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <h3 className="text-2xl font-medium mb-4">The Solution</h3>
                        <p className="text-xl leading-relaxed text-[var(--fg-muted)] mb-12">
                            {project.solution}
                        </p>

                        <p className="text-[var(--fg-muted)]">
                            {project.description}
                        </p>

                        {/* Additional Image Placeholder if we had more context */}
                        <div className="mt-12 p-8 bg-[#0a0a0a] border border-[var(--border)] rounded-xl flex items-center justify-center min-h-[300px] text-[var(--fg-muted)] text-sm font-mono">
                            [ Detailed Architecture Diagram / Screen Flow ]
                        </div>
                    </div>

                </div>
            </section>

            {/* Footer Navigation */}
            <section className="py-32 border-t border-[var(--border)] text-center">
                <Link href="/projects" className="inline-block group">
                    <span className="block text-[var(--fg-muted)] mb-2 text-sm uppercase tracking-widest">Next</span>
                    <span className="text-4xl md:text-6xl font-medium group-hover:text-[var(--accent)] transition-colors">
                        View All Works
                    </span>
                </Link>
            </section>

        </div>
    );
}
