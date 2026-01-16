"use client";

import { motion } from "framer-motion";

const services = [
    {
        id: "01",
        title: "Cloud Architecture",
        description: "Scalable, serverless infrastructure on AWS."
    },
    {
        id: "02",
        title: "AI Integrations",
        description: "LLMs, RAG pipelines, and intelligent agents."
    },
    {
        id: "03",
        title: "Full-Stack Development",
        description: "Next.js, React, and high-performance APIs."
    },
    {
        id: "04",
        title: "Technical Strategy",
        description: "Roadmapping, feasibility & MVP planning."
    }
];

export function Services() {
    return (
        <section className="py-24 px-[var(--container-padding)] relative">
            <div className="max-w-[1600px] mx-auto grid lg:grid-cols-2 gap-16">

                <div className="sticky top-32 h-fit">
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] mb-8">Technical<br />Expertise</h2>
                    <p className="max-w-md text-[var(--fg-muted)] text-lg">
                        I combine deep engineering capabilities with architectural foresight to build systems that last.
                    </p>
                </div>

                <div className="flex flex-col border-t border-[var(--border)]">
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            className="group border-b border-[var(--border)] py-12 cursor-pointer relative"
                            whileHover={{ paddingLeft: '2rem' }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex items-baseline justify-between">
                                <h3 className="text-3xl font-medium group-hover:text-[var(--accent)] transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <span className="font-mono text-sm text-[var(--fg-muted)]">{service.id}</span>
                            </div>
                            <p className="mt-2 text-[var(--fg-muted)] max-w-sm group-hover:text-[var(--fg)] transition-colors duration-300">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
