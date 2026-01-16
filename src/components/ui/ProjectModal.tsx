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
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#0a0a0a] border border-[#333] w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-sm flex flex-col relative shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                        >
                            {/* Header */}
                            <div className="sticky top-0 bg-[#0a0a0a]/95 backdrop-blur z-10 border-b border-[#222] p-6 flex justify-between items-start">
                                <div>
                                    <span className="text-[var(--accent)] text-xs font-mono uppercase tracking-widest block mb-2">
                                        {project.category} — {project.year}
                                    </span>
                                    <h2 className="text-2xl font-medium leading-none">{project.title}</h2>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 hover:bg-[#222] rounded-full transition-colors"
                                >
                                    <X size={20} className="text-[#666]" />
                                </button>
                            </div>

                            {/* Body - Small Font as requested */}
                            <div className="p-6 space-y-8">

                                {/* Tagline */}
                                <p className="text-[#888] text-sm italic border-l-2 border-[var(--accent)] pl-4">
                                    {project.tagline}
                                </p>

                                {/* Problem & Solution Grid */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-white text-sm font-medium uppercase tracking-wide mb-3 opacity-90">The Challenge</h3>
                                        <p className="text-[#888] text-xs leading-relaxed">
                                            {project.problem}
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-white text-sm font-medium uppercase tracking-wide mb-3 opacity-90">The Solution</h3>
                                        <p className="text-[#888] text-xs leading-relaxed">
                                            {project.solution}
                                        </p>
                                    </div>
                                </div>

                                {/* Features */}
                                <div>
                                    <h3 className="text-white text-sm font-medium uppercase tracking-wide mb-3 opacity-90">Key Features</h3>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-2 text-[#888] text-xs">
                                                <span className="w-1 h-1 bg-[var(--accent)] rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div className="pt-6 border-t border-[#222]">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map(tech => (
                                            <span key={tech} className="px-2 py-1 bg-[#151515] border border-[#333] rounded text-[10px] text-[#888 uppercase tracking-wider">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </div>

                            {/* Footer / Actions */}
                            <div className="p-6 bg-[#0f0f0f] border-t border-[#222] flex gap-4">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[var(--fg)] text-[var(--bg)] text-xs font-medium uppercase tracking-widest hover:bg-[var(--accent)] transition-colors"
                                    >
                                        <ExternalLink size={14} /> Visit Live Site
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 py-3 border border-[#333] text-[#888] text-xs font-medium uppercase tracking-widest hover:text-white hover:border-white transition-colors"
                                    >
                                        <Github size={14} /> View Code
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
