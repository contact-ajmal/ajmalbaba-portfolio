"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-end px-[var(--container-padding)] pt-32 pb-20 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[var(--accent)] opacity-[0.08] blur-[120px] rounded-full pointer-events-none" />

            {/* Hero Image - Absolute Left, Large & Blending */}
            <div className="absolute bottom-0 left-0 w-[50vw] h-[90vh] xl:h-[95vh] z-0 hidden lg:block select-none pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative w-full h-full"
                >
                    <Image
                        src="/ajmal-dark.png"
                        alt="Ajmal Baba - AI & Data Architect"
                        fill
                        className="object-contain object-bottom"
                        priority
                    />
                    {/* Gradient Masks for seamless blend */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[var(--bg)]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
                </motion.div>
            </div>

            {/* Mobile Image (Stacked) */}
            <div className="lg:hidden absolute top-0 left-0 w-full h-[60vh] z-0 opacity-40">
                <Image
                    src="/ajmal-dark.png"
                    alt="Ajmal Baba - AI & Data Architect"
                    fill
                    className="object-cover object-top"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-transparent to-[var(--bg)]" />
            </div>

            {/* Text Content - Right Aligned */}
            <div className="max-w-[900px] w-full relative z-10 lg:pl-[20vw]">
                {/* Main Headline */}
                <h1 className="text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] font-[500] tracking-tight mb-12 text-right lg:text-left">
                    <motion.span
                        initial={{ y: "100%", clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
                        animate={{ y: 0, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="block"
                    >
                        Problem Solver
                    </motion.span>
                    <motion.span
                        initial={{ y: "100%", clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
                        animate={{ y: 0, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="block text-[var(--fg-muted)]"
                    >
                        AI & Data Architect
                    </motion.span>
                </h1>

                {/* Subtext & CTA */}
                <div className="flex flex-col md:flex-row justify-end items-start md:items-end gap-12 border-t border-[var(--border)] pt-8">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="max-w-xl text-lg md:text-xl text-[var(--fg-muted)] leading-relaxed text-right lg:text-left"
                    >
                        I research problems, architect <span className="text-[var(--fg)]">AI-powered solutions</span>,
                        and build data platforms that transform how industries operate.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 1 }}
                    >
                        <a href="/projects" className="group flex items-center gap-4 text-lg font-medium">
                            <span className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center group-hover:bg-[var(--fg)] group-hover:text-[var(--bg)] transition-all duration-300">
                                ↓
                            </span>
                            <span>Scroll for projects</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
