"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const links = [
    { href: "/", label: "Home" },
    { href: "/professional-projects", label: "Professional Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Personal Projects" },
    { href: "/research", label: "Research" },
    { href: "/expertise", label: "Expertise" },
    { href: "/about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export function Navigation() {
    const pathname = usePathname();

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
            <nav className="glass-nav rounded-full px-2 py-1.5 pointer-events-auto flex items-center gap-1.5 max-w-full overflow-x-auto scrollbar-hide shadow-lg">
                <div className="flex items-center gap-1">
                    {links.map((link) => {
                        const isActive = pathname === link.href || (link.href !== "/" && pathname.includes(link.href));

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="relative px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium transition-colors hover:text-[var(--fg)] text-[var(--fg-muted)] whitespace-nowrap flex-shrink-0"
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-[var(--nav-pill)] rounded-full border border-[var(--border)]"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className={`relative z-10 ${isActive ? "text-[var(--fg)] font-semibold" : ""}`}>
                                    {link.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>

                {/* Divider */}
                <div className="w-px h-5 bg-[var(--border)] my-auto mx-1 flex-shrink-0" />

                {/* Theme Toggle */}
                <ThemeToggle />
            </nav>
        </div>
    );
}
