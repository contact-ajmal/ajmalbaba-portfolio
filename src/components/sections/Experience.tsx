"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Role {
    company: string;
    title: string;
    duration: string;
    location: string;
    description: string;
    skills: string[];
}

const roles: Role[] = [
    {
        company: "Hawk-Eye Innovations Ltd",
        title: "Architect – Data & Analytics Platforms",
        duration: "May 2024 – Present",
        location: "London, UK (Hybrid)",
        description: "Leading implementation of scalable data systems for sports intelligence across 20+ sports (NBA, IPL, ATP, MLB, NHL, NFL). Integrating ML/Generative AI for predictive insights, biomechanics tracking, and automated visualizations to enhance fan experiences and team analytics.",
        skills: ["Data Architecture", "Data Lakes", "Machine Learning", "Generative AI", "Big Data"]
    },
    {
        company: "Atos",
        title: "Cloud & Data Architect",
        duration: "Aug 2022 – May 2024 (1 yr 10 mos)",
        location: "London, UK (Hybrid)",
        description: "Delivered enterprise cloud and AI solutions including ML-powered Product Fitting Systems, multi-language chatbots, and data lakes. Led cloud migrations, security architecture (IAM), and DevSecOps integrations using AWS global network architectures.",
        skills: ["AWS SageMaker", "AWS Data Lake", "MLOps", "AWS Landing Zone", "Generative AI"]
    },
    {
        company: "Qatar Public Sector",
        title: "Systems Engineering Architect",
        duration: "Oct 2012 – Apr 2023 (10 yrs 7 mos)",
        location: "Doha, Qatar",
        description: "Architected and deployed scalable multi-platform datacenter and cloud infrastructure for the Qatar 2022 World Cup. Led DevOps adoption, secure storage, and high-availability solutions in collaboration with major tech vendors.",
        skills: ["Private Cloud", "VMware", "System Design", "High Availability", "DevOps"]
    },
    {
        company: "Sapient",
        title: "Senior Lead Infrastructure Engineer",
        duration: "Jan 2012 – Oct 2012 (10 mos)",
        location: "Bangalore, India",
        description: "Managed global enterprise IT resources, delivered identity management solutions (Active Directory federation), and authored system design and operational documentation.",
        skills: ["Active Directory", "Identity Management", "System Design", "Documentation"]
    }
];

export function Experience() {
    return (
        <section className="py-24 px-4 md:px-8 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-mono tracking-tighter mb-6">
                        PROFESSIONAL <span className="text-[var(--accent)]">PATH</span>
                    </h2>
                    <p className="text-lg text-[var(--fg-muted)] max-w-2xl">
                        Over a decade of engineering automated, high-scale systems for global enterprises and major sporting events.
                    </p>
                </motion.div>

                <div className="relative border-l border-[var(--border)] ml-3 md:ml-6 space-y-12 pl-8 md:pl-12">
                    {roles.map((role, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[41px] md:-left-[57px] top-2 w-5 h-5 bg-[#0a0a0a] border border-[var(--accent)] rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-[var(--accent)] rounded-full" />
                            </div>

                            <div className="group border border-[var(--border)] bg-white/5 p-6 md:p-8 rounded-sm hover:border-[var(--accent)]/50 transition-colors duration-300">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[var(--accent)] transition-colors">
                                            {role.company}
                                        </h3>
                                        <p className="text-lg font-medium text-[var(--fg)]">{role.title}</p>
                                    </div>
                                    <div className="flex flex-col gap-2 text-sm font-mono text-[var(--fg-muted)] whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} />
                                            {role.duration}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={14} />
                                            {role.location}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-[var(--fg-muted)] leading-relaxed mb-6">
                                    {role.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {role.skills.map((skill, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-mono border border-[var(--border)] bg-black/50 rounded-full text-[var(--fg-muted)] group-hover:text-[var(--accent)] group-hover:border-[var(--accent)] transition-all">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
