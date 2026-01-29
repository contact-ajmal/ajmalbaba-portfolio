"use client";

import Image from "next/image";

export function About() {
    return (
        <section id="about" className="py-32 px-[var(--container-padding)] bg-[#080808]">
            <div className="max-w-[1600px] mx-auto grid lg:grid-cols-12 gap-12 items-center">

                {/* Image Side */}
                <div className="lg:col-span-5 relative">
                    <div className="relative aspect-[3/4] rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                        <Image
                            src="/ajmal-dark.png"
                            alt="Ajmal Baba"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r border-b border-[var(--border)]" />
                </div>

                {/* Content Side */}
                <div className="lg:col-span-7">
                    <span className="block font-mono text-sm text-[var(--accent)] mb-6 uppercase tracking-wider">About Me</span>

                    <h2 className="text-[clamp(2rem,4vw,3.5rem)] leading-tight mb-8">
                        Enterprise Data Architect<br />
                        <span className="text-[var(--fg-muted)]">& Research Enablement</span>
                    </h2>

                    <div className="space-y-6 text-lg text-[var(--fg-muted)] max-w-2xl leading-relaxed mb-12">
                        <p>
                            I have <span className="text-white">12+ years of experience</span> designing and governing large-scale data platforms that enable research, analytics, and AI-driven discovery. currently, I define the <span className="text-white">enterprise data strategy at Hawk-Eye Innovations</span>, architecting standardized, scalable, and secure data ecosystems used across <span className="text-white">20+ major global sports platforms</span>.
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
                            <h3 className="text-xl font-medium mb-4 text-white">Education & Certifications</h3>
                            <ul className="space-y-3 text-[var(--fg-muted)]">
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--accent)] mt-1.5">•</span>
                                    <span>AWS Certified Solutions Architect – Professional</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--accent)] mt-1.5">•</span>
                                    <span>AWS Certified DevOps Engineer – Professional</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--accent)] mt-1.5">•</span>
                                    <span>PG Diploma in Business Administration – Symbiosis</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--accent)] mt-1.5">•</span>
                                    <span>Bachelor of Science – University of Kashmir</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-medium mb-4 text-white">Community & Leadership</h3>
                            <ul className="space-y-3 text-[var(--fg-muted)]">
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--accent)] mt-1.5">•</span>
                                    <span>AWS Community Builder Leader – Data & Storage</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[var(--accent)] mt-1.5">•</span>
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
