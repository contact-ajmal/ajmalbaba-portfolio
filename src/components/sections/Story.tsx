"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Cpu, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";

const milestones = [
    {
        year: "2012",
        title: "The Foundation",
        description: "Started as a Systems & Data Infrastructure Architect, building enterprise infrastructure across the Middle East.",
        icon: <Cpu size={24} />,
    },
    {
        year: "2022",
        title: "Cloud & Data Architect",
        description: "Led global migrations, designed ML-powered systems, and embraced cloud-native architectures at Atos.",
        icon: <Zap size={24} />,
    },
    {
        year: "Now",
        title: "Founding Data & AI Architect",
        description: "Leading the data platform team at Hawk-Eye Innovations, architecting the analytical foundation for 20+ major sports (NBA, NFL, Premier League). We turn millions of real-time data points into predictive insights, integrating Generative AI to push the boundaries of sports analytics.",
        icon: <Sparkles size={24} />,
    },
];

export function Story() {
    return (
        <section className="py-32 px-[var(--container-padding)] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-[var(--accent)] opacity-[0.03] blur-[100px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-5%] w-[300px] h-[300px] bg-purple-500 opacity-[0.05] blur-[80px] rounded-full" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <span className="text-[var(--accent)] font-mono text-sm tracking-widest uppercase mb-4 block font-semibold">
                        The Philosophy
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-[var(--fg)]">
                        Data as Foundation.
                        <br />
                        <span className="text-[var(--fg-muted)]">AI as Catalyst.</span>
                    </h2>
                    <p className="text-xl text-[var(--fg-muted)] max-w-2xl leading-relaxed">
                        I don't just build pipelines — I build the <span className="text-[var(--fg)] font-medium">teams and platforms</span> that power them.
                        Every project starts with a deep understanding of the data landscape, enabling us to tackle analytical challenges once thought impossible.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[15px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border)] to-transparent" />

                    <div className="space-y-16 md:space-y-24">
                        {milestones.map((milestone, index) => (
                            <motion.div
                                key={milestone.year}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: index * 0.1 }}
                                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start md:items-center gap-8 md:gap-16`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-[30px] h-[30px] bg-[var(--bg-card)] border-2 border-[var(--accent)] rounded-full flex items-center justify-center z-10 shadow-sm">
                                    <div className="w-3 h-3 bg-[var(--accent)] rounded-full animate-pulse" />
                                </div>

                                {/* Content Card */}
                                <div className={`ml-12 md:ml-0 md:w-[calc(50%-3rem)] ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                                    <div className="group bg-[var(--bg-card)] border border-[var(--border)] p-6 md:p-8 rounded-lg hover:border-[var(--accent)]/50 transition-all duration-300 shadow-sm">
                                        <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                                            <span className="text-[var(--accent)] font-mono text-2xl font-bold">
                                                {milestone.year}
                                            </span>
                                            <div className="text-[var(--accent)] opacity-70 group-hover:opacity-100 transition-opacity">
                                                {milestone.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold mb-3 text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-[var(--fg-muted)] leading-relaxed">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Spacer for alternating layout */}
                                <div className="hidden md:block w-[calc(50%-3rem)]" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* AI Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 p-8 md:p-12 bg-gradient-to-br from-[var(--accent)]/10 via-purple-500/5 to-transparent border border-[var(--accent)]/30 rounded-xl relative overflow-hidden shadow-lg"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent)] opacity-10 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <Sparkles className="text-[var(--accent)] mb-6" size={40} />
                            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-[var(--fg)]">
                                AI Changed <span className="text-[var(--accent)]">Everything</span>
                            </h3>
                            <p className="text-lg text-[var(--fg-muted)] leading-relaxed mb-6">
                                What once took weeks now takes hours. AI Agents don't replace creativity —
                                they <span className="text-[var(--fg)] font-medium">amplify it</span>. I can prototype,
                                iterate, and ship at a pace that felt impossible just two years ago.
                            </p>
                            <p className="text-lg text-[var(--fg-muted)] leading-relaxed">
                                This portfolio? Built entirely with <span className="text-[var(--fg)] font-medium">Vibe Coding</span> —
                                an intuitive, AI-assisted flow where ideas become reality in real-time.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                { label: "Prototyping Speed", value: "10x Faster" },
                                { label: "Code Quality", value: "AI-Reviewed" },
                                { label: "Creative Output", value: "Unlimited Ideas" },
                            ].map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex justify-between items-center p-4 bg-[var(--bg-card)] border border-[var(--border)] rounded-lg shadow-sm"
                                >
                                    <span className="text-[var(--fg-muted)]">{stat.label}</span>
                                    <span className="text-[var(--accent)] font-mono font-bold">{stat.value}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-12 flex justify-center">
                        <Link
                            href="/projects"
                            className="group flex items-center gap-3 px-8 py-4 bg-[var(--accent)] text-black font-bold rounded-full hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors shadow-md"
                        >
                            See What I've Built
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
