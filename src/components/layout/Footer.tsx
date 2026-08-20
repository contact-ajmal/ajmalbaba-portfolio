"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    const email = "ajmalnazirbaba@gmail.com";

    return (
        <footer id="contact" className="py-20 px-[var(--container-padding)] border-t border-[var(--border)] bg-[var(--bg-subtle)] relative overflow-hidden transition-colors duration-300">
            <div className="max-w-[1200px] mx-auto relative z-10">

                {/* Top Section: CTA & Email */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight mb-2 text-[var(--fg)]">Let's Build together</h2>
                        <p className="text-[var(--fg-muted)] text-lg">Have a project in mind?</p>
                    </div>

                    <a
                        href={`mailto:${email}`}
                        className="group flex items-center gap-4 px-8 py-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-full hover:bg-[var(--accent)] hover:text-black hover:border-[var(--accent)] transition-all duration-300 shadow-sm"
                    >
                        <span className="text-lg font-medium tracking-wide">{email}</span>
                        <ArrowUpRight size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[var(--border)] mb-12" />

                {/* Bottom Section: Details */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">

                    {/* Location */}
                    <div className="space-y-4">
                        <h3 className="text-[var(--fg-muted)] font-mono uppercase tracking-widest text-xs">Location</h3>
                        <p className="text-[var(--fg)] font-medium text-base">London, UK</p>
                    </div>

                    {/* Socials */}
                    <div className="space-y-4">
                        <h3 className="text-[var(--fg-muted)] font-mono uppercase tracking-widest text-xs">Socials</h3>
                        <div className="flex gap-6">
                            <SocialLink href="https://linkedin.com/in/ajmalnazirbaba/" icon={<Linkedin size={18} />} label="LinkedIn" />
                            <SocialLink href="https://github.com/contact-ajmal" icon={<Github size={18} />} label="GitHub" />
                            <SocialLink href="https://x.com/ajmalbaba" icon={<Twitter size={18} />} label="X" />
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="space-y-4">
                        <h3 className="text-[var(--fg-muted)] font-mono uppercase tracking-widest text-xs">Sitemap</h3>
                        <nav className="flex flex-col gap-2 font-mono text-xs">
                            <FooterLink href="/" label="Home" />
                            <FooterLink href="/professional-projects" label="Professional Projects" />
                            <FooterLink href="/projects" label="Personal Projects" />
                            <FooterLink href="/research" label="Research" />
                            <FooterLink href="/about" label="About" />
                        </nav>
                    </div>

                    {/* Copyright */}
                    <div className="space-y-4 md:text-right">
                        <h3 className="text-[var(--fg-muted)] font-mono uppercase tracking-widest text-xs">Copyright</h3>
                        <p className="text-[var(--fg-muted)]">© {new Date().getFullYear()} Ajmal Baba</p>
                    </div>

                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors"
            aria-label={label}
        >
            {icon}
        </a>
    );
}

function FooterLink({ href, label }: { href: string, label: string }) {
    return (
        <a href={href} className="text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors w-fit">
            {label}
        </a>
    );
}
