"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/projects";
import { X, ExternalLink, Github } from "lucide-react";
import { useEffect } from "react";

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/75 dark:bg-black/85 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[var(--bg-card)] border border-[var(--border)] w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-lg flex flex-col relative shadow-2xl"
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-[var(--bg-card)]/95 backdrop-blur z-10 border-b border-[var(--border)] p-6 flex justify-between items-start">
                                <div>
                                    <span className="text-[var(--accent)] text-xs font-mono uppercase tracking-widest block mb-2 font-semibold">
                                        {project.category} — {project.year}
                                    </span>
                                    <h2 className="text-2xl font-bold leading-none text-[var(--fg)]">{project.title}</h2>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-[var(--bg-subtle)] rounded-full transition-colors text-[var(--fg-muted)] hover:text-[var(--fg)] cursor-pointer"
                                    aria-label="Close modal"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="p-6 space-y-8">

                                {/* Tagline */}
                                <p className="text-[var(--fg-muted)] text-sm italic border-l-2 border-[var(--accent)] pl-4">
                                    {project.tagline}
                                </p>

                                {/* Problem & Solution Grid */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-[var(--fg)] text-sm font-semibold uppercase tracking-wide mb-3">The Challenge</h3>
                                        <p className="text-[var(--fg-muted)] text-xs leading-relaxed">
                                            {project.problem}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-[var(--fg)] text-sm font-semibold uppercase tracking-wide mb-3">The Solution</h3>
                                        <p className="text-[var(--fg-muted)] text-xs leading-relaxed">
                                            {project.solution}
                                        </p>
                                    </div>
                                </div>

                                {/* Features */}
                                <div>
                                    <h3 className="text-[var(--fg)] text-sm font-semibold uppercase tracking-wide mb-3">Key Features</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2 text-[var(--fg-muted)] text-xs">
                                                <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full mt-1 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div className="pt-6 border-t border-[var(--border)]">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map(tech => (
                                            <span key={tech} className="px-2.5 py-1 bg-[var(--bg-subtle)] border border-[var(--border)] rounded text-[10px] font-mono text-[var(--fg-muted)] uppercase tracking-wider">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            {/* Footer / Actions */}
                            <div className="p-6 bg-[var(--bg-subtle)] border-t border-[var(--border)] flex flex-wrap gap-4">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[var(--fg)] text-[var(--bg)] text-xs font-semibold uppercase tracking-widest hover:bg-[var(--accent)] hover:text-black transition-colors rounded"
                                    >
                                        <ExternalLink size={14} /> Visit Live Site
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-3 border border-[var(--border)] bg-[var(--bg-card)] text-[var(--fg)] text-xs font-semibold uppercase tracking-widest hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors rounded"
                                    >
                                        <Github size={14} /> View Code on GitHub ↗
                                    </a>
                                )}
                            </div>

                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
