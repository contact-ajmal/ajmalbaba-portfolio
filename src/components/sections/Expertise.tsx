"use client";

import { motion } from "framer-motion";
import { Cpu, Cloud, Code, Terminal, Database, Globe, Brain, Layers } from "lucide-react";

interface SkillCategory {
    id: string;
    title: string;
    icon: React.ReactNode;
    description: string;
    skills: string[];
}

const categories: SkillCategory[] = [
    {
        id: "data",
        title: "Data Architecture & Strategy",
        icon: <Database size={32} />,
        description: "Designing scalable data platforms for research and analytics.",
        skills: ["Apache Iceberg", "Apache Kafka", "Apache Flink", "Lakehouse", "Data Governance", "AWS Glue", "Data Modeling"]
    },
    {
        id: "ai",
        title: "AI & ML Enablement",
        icon: <Brain size={32} />,
        description: "Building platforms for predictive analytics and AI-driven discovery.",
        skills: ["Amazon SageMaker", "Feature Stores", "Predictive Analytics", "Computer Vision Datasets", "Generative AI", "MLOps"]
    },
    {
        id: "domain",
        title: "Biomechanics & Sports",
        icon: <Globe size={32} />,
        description: "Enablement of high-frequency skeletal motion data research.",
        skills: ["Skeletal Tracking", "Motion Capture", "Time-Series Data", "Injury Analytics", "Performance Metrics", "Research Pipelines"]
    },
    {
        id: "cloud",
        title: "Cloud & Security Service",
        icon: <Cloud size={32} />,
        description: "Architecting secure, cloud-native data ecosystems.",
        skills: ["AWS Solutions Architect", "IAM", "Lake Formation", "Security-by-Design", "Disaster Recovery", "Hybrid Cloud"]
    }
];

export function Expertise() {
    return (
        <section className="py-24 px-4 md:px-8 relative min-h-screen">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-5xl md:text-7xl font-bold font-mono tracking-tighter mb-8">
                        TECHNICAL <span className="text-[var(--accent)]">EXPERTISE</span>
                    </h2>
                    <p className="text-xl text-[var(--fg-muted)] max-w-2xl mx-auto">
                        A comprehensive toolkit built over years of solving complex engineering challenges.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-[#0a0a0a] border border-[var(--border)] p-8 md:p-10 rounded-sm hover:border-[var(--accent)] transition-all duration-300"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity text-[var(--accent)]">
                                {category.icon}
                            </div>

                            <div className="relative z-10">
                                <div className="mb-6 text-[var(--accent)]">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                                    {category.title}
                                </h3>
                                <p className="text-[var(--fg-muted)] mb-8 h-12">
                                    {category.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-sm text-[var(--fg-muted)] group-hover:text-[var(--fg)] group-hover:border-[var(--accent)]/30 transition-all">
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
