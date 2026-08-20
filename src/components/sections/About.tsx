"use client";

import Image from "next/image";

export function About() {
    return (
        <section id="about" className="py-32 px-[var(--container-padding)] bg-[var(--bg-subtle)] border-y border-[var(--border)] transition-colors duration-300">
            <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 items-center">

                {/* Image Side */}
                <div className="lg:col-span-5 relative">
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-[var(--border)] shadow-md">
                        <Image
                            src="/ajmal-dark.png"
                            alt="Ajmal Baba"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-[var(--border)] rounded-br-lg pointer-events-none" />
                </div>

                {/* Content Side */}
                <div className="lg:col-span-7">
                    <span className="block font-mono text-sm text-[var(--accent)] mb-6 uppercase tracking-wider font-semibold">About Me</span>

                    <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-8 font-bold text-[var(--fg)]">
                        Enterprise Data Architect<br />
                        <span className="text-[var(--fg-muted)]">& Research Enablement</span>
                    </h2>

                    <div className="space-y-6 text-lg text-[var(--fg-muted)] max-w-2xl leading-relaxed mb-12">
                        <p>
                            I have <span className="text-[var(--fg)] font-medium">12+ years of experience</span> designing and governing large-scale data platforms that enable research, analytics, and AI-driven discovery. Currently, I define the <span className="text-[var(--fg)] font-medium">enterprise data strategy at Hawk-Eye Innovations</span>, architecting standardized, scalable, and secure data ecosystems used across <span className="text-[var(--fg)] font-medium">20+ major global sports platforms</span>.
                        </p>
                        <p>
                            Within Hawk-Eye’s Biomechanics division, I work closely with biomechanics researchers and data science teams, enabling advanced research on high-frequency skeletal motion data. I focus on transforming raw tracking and computer vision data into trusted, analytics-ready datasets.
                        </p>
                        <p>
                            This allows researchers to experiment, derive new performance and injury-related metrics, and operationalize insights—an approach well aligned with mission-driven research organizations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 border-t border-[var(--border)] pt-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-[var(--fg)]">Education & Certifications</h3>
                            <ul className="space-y-3 text-[var(--fg-muted)]">
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--accent)] mt-1.5 font-bold">•</span>
                                    <span>AWS Certified Solutions Architect – Professional</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--accent)] mt-1.5 font-bold">•</span>
                                    <span>AWS Certified DevOps Engineer – Professional</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--accent)] mt-1.5 font-bold">•</span>
                                    <span>PG Diploma in Business Administration – Symbiosis</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--accent)] mt-1.5 font-bold">•</span>
                                    <span>Bachelor of Science – University of Kashmir</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-4 text-[var(--fg)]">Community & Leadership</h3>
                            <ul className="space-y-3 text-[var(--fg-muted)]">
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--accent)] mt-1.5 font-bold">•</span>
                                    <span>AWS Community Builder Leader – Data & Storage</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--accent)] mt-1.5 font-bold">•</span>
                                    <span>AWS User Group Leader – Qatar</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
