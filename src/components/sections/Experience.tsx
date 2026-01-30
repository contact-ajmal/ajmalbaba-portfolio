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
    keyProjects?: {
        name: string;
        description: string;
    }[];
}

const roles: Role[] = [
    {
        company: "Hawk-Eye Innovations (Sony Sports)",
        title: "Lead Data Architect – Enterprise Data Strategy & Biomechanics",
        duration: "May 2024 – Present",
        location: "London, UK",
        description: "Own and define the enterprise data strategy for Hawk-Eye Innovations, establishing standardized data architectures, governance models, and platform patterns adopted across all major global sports platforms. Lead the design of scalable Lakehouse data platforms supporting research, real-time analytics, and AI workflows across NFL, NHL, MLB, FIFA, NBA, and ICC programs. Act as the primary architectural partner to Biomechanics and Data Science research teams, enabling advanced research on skeletal motion and biomechanics data.",
        skills: ["Apache Iceberg", "Apache Kafka", "Apache Flink", "AWS Lake Formation", "SageMaker", "Data Governance"],
        keyProjects: [
            {
                name: "Real-Time Biomechanics Lakehouse",
                description: "Designed the Flink-Kafka-Iceberg backbone to process sub-second skeletal tracking (SkeleTRACK) and MLB pitch data for live broadcast."
            },
            {
                name: "Semi-Automated Offside Tech (SAOT)",
                description: "Architected the data pipeline powering FIFA’s offside detection, processing 29-point skeletal models in real-time across 900+ matches globally."
            },
            {
                name: "NHL Insights Platform",
                description: "Built the \"Insight Ports\" architecture that transforms live game telemetry into real-time visualizations for teams, fans, and broadcasters."
            },
            {
                name: "KinaTrax 3D Integration",
                description: "Led the data integration of markerless motion capture (Computer Vision) to drive NBA player development and shooting analytics."
            },
            {
                name: "SMART Video Review System",
                description: "Engineered the synchronized data/video capture framework used for VAR (Football) and DRS (Cricket) independent officiating."
            },
            {
                name: "Medical & Injury Review",
                description: "Developed the \"Injury Review\" data workflow, allowing medical teams to instantly tag, zoom, and archive multi-angle video for athlete safety."
            }
        ]
    },
    {
        company: "Atos (Cloudreach / Eviden)",
        title: "Senior Data & Cloud Architect",
        duration: "Aug 2022 – May 2024",
        location: "London, UK",
        description: "Designed and delivered a secure, enterprise-grade AWS data lake enabling analytics and AI workloads across global business units. Defined data models, metadata standards, and governance processes using AWS Lake Formation, Glue, and Informatica MDM. Architected ML and AI platforms using Amazon SageMaker and AWS Bedrock, supporting reproducible experimentation and model lifecycle management.",
        skills: ["AWS Data Lake", "AWS Bedrock", "Informatica MDM", "Security Architecture", "SageMaker"],
        keyProjects: [
            {
                name: "ATOS Data Lake & MLOps",
                description: "Architected a secure AWS Data Lake and GenAI platform (SageMaker/Bedrock), enabling global master data governance and rapid model deployment."
            }
        ]
    },
    {
        company: "Ministry of Interior – Government of Qatar",
        title: "Lead Systems & Data Infrastructure Architect",
        duration: "Oct 2012 – Aug 2022",
        location: "Doha, Qatar",
        description: "Led architecture for national-scale data platforms supporting security, logistics, and analytics initiatives, including FIFA World Cup 2022. Designed and managed hybrid data lake architectures, combining on-premise Hadoop ecosystems with AWS cloud storage for long-term analytics. Established data durability, lifecycle management, and disaster recovery strategies for petabyte-scale systems.",
        skills: ["Hybrid Data Lakes", "Hadoop", "Disaster Recovery", "National Scale Platforms", "FIFA World Cup 2022"],
        keyProjects: [
            {
                name: "FIFA World Cup 2022 Infrastructure",
                description: "Built the $200M hybrid data infrastructure (Hadoop/AWS) ensuring 100% uptime for national security and logistics during the event."
            }
        ]
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

                                {role.keyProjects && role.keyProjects.length > 0 && (
                                    <div className="mb-8">
                                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-[var(--border)] pb-2 inline-block">
                                            Key Projects & Initiatives
                                        </h4>
                                        <div className="grid gap-4">
                                            {role.keyProjects.map((project, i) => (
                                                <div key={i} className="relative pl-4 border-l-2 border-[var(--border)] hover:border-[var(--accent)] transition-colors">
                                                    <h5 className="text-white font-medium text-sm mb-1">{project.name}</h5>
                                                    <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                                                        {project.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
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
