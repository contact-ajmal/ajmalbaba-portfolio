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
                        I don't build systems.<br />
                        <span className="text-[var(--fg-muted)]">I solve problems.</span>
                    </h2>

                    <div className="space-y-6 text-lg text-[var(--fg-muted)] max-w-2xl leading-relaxed">
                        <p>
                            Every project starts with a question: <span className="text-white">What's broken, and why?</span>
                            I research deeply, understand the root cause, and then architect a solution.
                            Code is just the final step.
                        </p>
                        <p>
                            I believe AI is the most powerful enabler humanity has ever created — a tool that will
                            allow us to solve problems once thought impossible. I want to be at the frontier of
                            solutions that genuinely <span className="text-white">change lives for the better</span>.
                        </p>
                        <p>
                            Based in London, I work with startups and enterprises to implement Generative AI,
                            optimize cloud architectures, and ship products that define categories.
                        </p>
                    </div>

                    <div className="mt-12 flex gap-12 border-t border-[var(--border)] pt-8">
                        <div>
                            <span className="block text-3xl font-medium mb-1">5+</span>
                            <span className="text-sm font-mono text-[var(--fg-muted)] uppercase">AWS Certs</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-medium mb-1">10+</span>
                            <span className="text-sm font-mono text-[var(--fg-muted)] uppercase">Shipped Projects</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-medium mb-1">3K+</span>
                            <span className="text-sm font-mono text-[var(--fg-muted)] uppercase">Followers</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
