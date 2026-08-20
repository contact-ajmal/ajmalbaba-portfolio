"use client";

import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/lib/projects";
import { useState } from "react";
import { ProjectModal } from "@/components/ui/ProjectModal";

export function WorkGrid() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <section id="work" className="py-24 px-[var(--container-padding)]">
            <div className="max-w-[1600px] mx-auto">
                {/* Section Header */}
                <div className="flex items-end justify-between mb-16 px-2">
                    <div>
                        <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-none mb-2 font-bold text-[var(--fg)]">Personal Projects</h2>
                        <span className="block text-[var(--fg-muted)] font-mono text-sm uppercase tracking-widest font-semibold">Creative Engineering / R&D</span>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {projects.map((project, idx) => {
                        const targetUrl = project.liveUrl || project.githubUrl;
                        const MainLink = targetUrl ? "a" : "div";
                        const mainLinkProps = targetUrl
                            ? { href: targetUrl, target: "_blank", rel: "noopener noreferrer" }
                            : { onClick: () => setSelectedProject(project), className: "cursor-pointer" };

                        return (
                            <div key={project.id} className={`group block relative ${idx === 1 ? "md:mt-24" : ""}`}>

                                {/* Main Card Content linked to External Site (if available) or Case Study Modal */}
                                <MainLink
                                    {...mainLinkProps}
                                    className="block"
                                >
                                    {/* Card Image */}
                                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-6 bg-[var(--bg-subtle)] border border-[var(--border)] shadow-sm">
                                        <Image
                                            src={typeof project.image === 'string' ? project.image : project.image.src}
                                            alt={project.title}
                                            fill
                                            className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
                                        />
                                        {/* Subtle theme-friendly overlay on hover only */}
                                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                        {/* Hover Visit Icon */}
                                        {targetUrl && (
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 pointer-events-none">
                                                <div className="h-14 w-14 flex items-center justify-center bg-[var(--bg-card)]/90 backdrop-blur border border-[var(--border)] rounded-full text-[var(--fg)] group-hover:bg-[var(--accent)] group-hover:text-black transition-colors font-sans text-xl shadow-lg">
                                                    ↗
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Card Info */}
                                    <div className="border-t border-[var(--border)] pt-4 flex justify-between items-start group-hover:border-[var(--accent)] transition-colors duration-500">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-1 text-[var(--fg)] group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                                            <p className="text-[var(--fg-muted)] text-sm">{project.tagline}</p>
                                        </div>
                                        <span className="text-xs font-mono text-[var(--fg-muted)] uppercase tracking-wider">{project.category}</span>
                                    </div>
                                </MainLink>

                                {/* Actions: GitHub Link & Summary Modal */}
                                <div className="mt-4 flex items-center justify-between">
                                    {project.githubUrl ? (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs font-mono uppercase tracking-widest text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors border-b border-transparent hover:border-[var(--accent)] flex items-center gap-1 font-medium"
                                        >
                                            [ GitHub Repo ↗ ]
                                        </a>
                                    ) : <span />}
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="text-xs font-mono uppercase tracking-widest text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors border-b border-transparent hover:border-[var(--accent)] text-left font-medium cursor-pointer"
                                    >
                                        [ Read Summary ]
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Project Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />

        </section>
    );
}
