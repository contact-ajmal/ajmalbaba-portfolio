"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Layers } from "lucide-react";

interface Role {
    company: string;
    title: string;
    duration: string;
    location: string;
    description: string;
    keyProjects?: {
        name: string;
        description: string;
    }[];
    skills: string[];
}

const roles: Role[] = [
    {
        company: "Hawk-Eye Innovations (Sony Sports)",
        title: "Data Platform Architect",
        duration: "2024 - Present",
        location: "London, UK",
        description: "Leading the data platform team at Hawk-Eye Innovations, architecting the analytical foundation for 20+ major sports (NBA, NFL, Premier League). Enabling biomechanics researchers and computer vision teams with scalable, real-time data infrastructure.",
        keyProjects: [
            {
                name: "Real-Time Biomechanics Lakehouse",
                description: "Architected Apache Iceberg + Flink streaming lakehouse processing millions of high-frequency skeletal tracking data points for automated officiating and injury analytics."
            },
            {
                name: "Multi-Sport Telemetry Platform",
                description: "Built unified streaming ingestion pipelines handling optical tracking, ball telemetry, and match metadata with sub-second latency across global sporting venues."
            }
        ],
        skills: ["Apache Iceberg", "Apache Kafka", "Apache Flink", "AWS", "Lake Formation", "Data Governance", "Python", "Streaming Architecture"]
    },
    {
        company: "Atos (Cloudreach / Eviden)",
        title: "Senior Cloud & Data Architect",
        duration: "2022 - 2024",
        location: "London, UK",
        description: "Led enterprise cloud data migrations, architected ML-powered analytics platforms, and designed secure multi-account AWS environments for global enterprise clients.",
        keyProjects: [
            {
                name: "Enterprise Data Modernization",
                description: "Designed and executed petabyte-scale data warehouse migrations to AWS Lakehouse architectures, reducing total cost of ownership by 40%."
            },
            {
                name: "Generative AI Platform",
                description: "Built enterprise RAG pipelines with Amazon Bedrock and OpenSearch, incorporating fine-grained security and compliance controls."
            }
        ],
        skills: ["AWS Solutions Architecture", "Amazon Bedrock", "Amazon SageMaker", "OpenSearch", "Terraform", "Security & IAM"]
    },
    {
        company: "Ministry of Interior – Qatar",
        title: "Systems & Data Infrastructure Architect",
        duration: "2012 - 2022",
        location: "Doha, Qatar",
        description: "Architected and managed national-scale data infrastructure, mission-critical systems, and hybrid cloud environments supporting major international events including the FIFA World Cup 2022.",
        keyProjects: [
            {
                name: "FIFA World Cup 2022 Command Center Infrastructure",
                description: "Architected high-availability data infrastructure ensuring 99.999% uptime for national security and event operations."
            }
        ],
        skills: ["Hybrid Cloud", "Data Infrastructure", "Disaster Recovery", "High Availability", "Distributed Systems"]
    }
];

export function Experience() {
    return (
        <section className="py-24 px-4 md:px-8 relative min-h-screen">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <span className="text-[var(--accent)] font-mono text-sm tracking-widest uppercase mb-4 block font-semibold">
                        Career Path
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bold font-mono tracking-tighter mb-8 text-[var(--fg)]">
                        WORK <span className="text-[var(--accent)]">EXPERIENCE</span>
                    </h2>
                    <p className="text-xl text-[var(--fg-muted)] max-w-2xl mx-auto leading-relaxed">
                        A decade of architecting mission-critical data systems, scaling streaming platforms, and leading engineering teams.
                    </p>
                </motion.div>

                <div className="relative border-l-2 border-[var(--border)] ml-4 md:ml-32 space-y-16">
                    {roles.map((role, index) => (
                        <motion.div
                            key={role.company}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative pl-6 md:pl-10"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-2 w-4 h-4 bg-[var(--bg-card)] border-2 border-[var(--accent)] rounded-full flex items-center justify-center shadow-sm">
                                <div className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full" />
                            </div>

                            <div className="group border border-[var(--border)] bg-[var(--bg-card)] p-6 md:p-8 rounded-xl hover:border-[var(--accent)]/50 transition-colors duration-300 shadow-sm">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-[var(--fg)] mb-1 group-hover:text-[var(--accent)] transition-colors">
                                            {role.company}
                                        </h3>
                                        <p className="text-lg font-medium text-[var(--accent)] font-mono">{role.title}</p>
                                    </div>
                                    <div className="flex flex-col gap-1.5 text-sm font-mono text-[var(--fg-muted)] whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <Calendar size={14} />
                                            <span>{role.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={14} />
                                            <span>{role.location}</span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-[var(--fg-muted)] leading-relaxed mb-6">
                                    {role.description}
                                </p>

                                {role.keyProjects && role.keyProjects.length > 0 && (
                                    <div className="mb-6">
                                        <h4 className="text-xs font-bold text-[var(--fg)] uppercase tracking-wider mb-3 font-mono border-b border-[var(--border)] pb-2 inline-block">
                                            Key Initiatives
                                        </h4>
                                        <div className="grid gap-3">
                                            {role.keyProjects.map((project, i) => (
                                                <div key={i} className="relative pl-3.5 border-l-2 border-[var(--border)] hover:border-[var(--accent)] transition-colors">
                                                    <h5 className="text-[var(--fg)] font-semibold text-sm mb-1">{project.name}</h5>
                                                    <p className="text-xs text-[var(--fg-muted)] leading-relaxed">
                                                        {project.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="flex flex-wrap gap-1.5 pt-2">
                                    {role.skills.map((skill, i) => (
                                        <span key={i} className="px-2.5 py-1 text-xs font-mono border border-[var(--border)] bg-[var(--bg-subtle)] rounded-full text-[var(--fg-muted)] group-hover:text-[var(--fg)] group-hover:border-[var(--accent)]/30 transition-all">
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
