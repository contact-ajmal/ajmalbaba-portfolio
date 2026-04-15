import { Cpu, Shield, Layers, Database, Brain, Microscope, Activity } from "lucide-react";

export interface ResearchProjectData {
    id: string;
    slug: string;
    title: string;
    tagline: string;
    status: "Active" | "Prototype" | "Published";
    description: string;
    researchAreas: string[];
    icon: string; // Icon name as string for serialization
    liveUrl?: string;
    githubUrl?: string;
    hasDetailPage?: boolean;
    architectureImage?: string;
    // Extended fields for detail page
    fullDescription?: string;
    detailedSections?: {
        title: string;
        content: string;
    }[];
    keyComponents?: {
        title: string;
        description: string;
        color: string;
    }[];
    codeAvailability?: string;
    year?: string;
}

export const researchProjectsData: ResearchProjectData[] = [
    {
        id: "genome-ai",
        slug: "genome-ai",
        title: "Genome×AI",
        tagline: "Decoding Humanity - AI × Human GENOME",
        status: "Active",
        description: "Investigating the intersection of artificial intelligence and genomic science. Building interactive simulations to visualize how deep learning models interpret DNA sequences and variant pathogenicity.",
        researchAreas: ["Genomics", "Deep Learning", "Bioinformatics", "Education"],
        icon: "Microscope",
        liveUrl: "https://genome-ai.pages.dev/",
        hasDetailPage: false
    },
    {
        id: "genemapr",
        slug: "genemapr",
        title: "GeneMapr",
        tagline: "Genomic Variant Interpretation Platform",
        status: "Active",
        description: "Building a clinical-grade platform for genomic variant interpretation. Combines VCF parsing with multi-database annotation (ClinVar, gnomAD, Ensembl) and Google DeepMind's AlphaGenome for AI-powered variant effect predictions and pharmacogenomic profiling.",
        researchAreas: ["Genomics", "AlphaGenome", "Clinical AI", "Pharmacogenomics", "Bioinformatics", "FastAPI"],
        icon: "Layers",
        liveUrl: "https://genemapr.pages.dev/",
        githubUrl: "https://github.com/contact-ajmal/GeneMapr"
    },
    {
        id: "verticore",
        slug: "verticore",
        title: "VertiCore",
        tagline: "Enterprise Agent Architecture Framework",
        status: "Active",
        description: "Designing a production-grade agentic AI framework that combines LangGraph's reasoning capabilities with Temporal's durable execution for enterprise-scale autonomous systems with built-in security, compliance, and human oversight.",
        researchAreas: ["Agentic AI", "LangGraph", "Temporal", "Enterprise Security", "Workflow Orchestration"],
        icon: "Cpu",
        hasDetailPage: true,
        year: "2024-2025",
        fullDescription: `VertiCore is an enterprise-grade agentic AI architecture designed for production deployments where reliability, security, and compliance are non-negotiable. The framework addresses the critical gap between experimental AI agents and enterprise-ready autonomous systems.

The architecture uniquely combines LangGraph for sophisticated reasoning and tool orchestration with Temporal for bullet-proof workflow durability. This hybrid approach enables agents that can reason through complex multi-step tasks while guaranteeing exactly-once execution semantics, automatic retries, and complete audit trails.`,
        detailedSections: [
            {
                title: "Reasoning Framework Optionality",
                content: "VertiCore decouples the reasoning engine from the execution runtime. While LangGraph is the primary driver for agentic loops, the architecture supports pluggable reasoning modules. This allows teams to switch between different cognitive architectures (e.g., ReAct, Plan-and-Solve, or custom state machines) without rewriting the underlying orchestration logic. The 'Intelligence Plane' handles the cognitive load, while the 'Control Plane' enforces policy."
            },
            {
                title: "The Hybrid Execution Model",
                content: "A core innovation of VertiCore is its hybrid execution model. Standard agent frameworks often fail in production due to transient errors or context window limits. VertiCore wraps LangGraph nodes within Temporal activities. This means every step of the agent's reasoning—every tool call, every LLM thought—is a durable, checkpointed event. If an agent crashes mid-thought, it resumes exactly where it left off, ensuring zero data loss and high reliability."
            },
            {
                title: "Security & Governance",
                content: "Security is treated as a first-class citizen, not an afterthought. The architecture implements a 'PII Vault' pattern where sensitive data is redacted before entering the LLM context and rehydrated only at the final output stage. A granular policy engine enforces role-based access control (RBAC) on tool execution, ensuring that agents can only perform actions they are explicitly authorized to do. Human-in-the-loop gates are integrated directly into the workflow state, pausing execution until a human operator provides approval."
            }
        ],
        keyComponents: [
            {
                title: "Control Plane",
                description: "Tenant management, policy engine, and PII vault for multi-tenant enterprise deployments with zero-trust security.",
                color: "#22c55e"
            },
            {
                title: "Intelligence Plane",
                description: "LangGraph-powered reasoning engine with tool executor, PII redaction/rehydration, and output validation.",
                color: "#a855f7"
            },
            {
                title: "Temporal Orchestration",
                description: "Durable workflow engine with persistent state, history logging, and guaranteed execution semantics.",
                color: "#f59e0b"
            },
            {
                title: "Memory Systems",
                description: "Short-term scratchpad store for session context and long-term vector database for knowledge retrieval.",
                color: "#3b82f6"
            },
            {
                title: "Human Review",
                description: "Workflow pause/resume capabilities for human-in-the-loop approval of sensitive operations.",
                color: "#ef4444"
            },
            {
                title: "Audit & Logging",
                description: "Comprehensive audit logs and analytics for compliance, debugging, and performance monitoring.",
                color: "#06b6d4"
            }
        ],
        codeAvailability: "This is a proprietary research project. Source code can be shared for academic and research purposes upon request."
    },
    {
        id: "pathoassist",
        slug: "pathoassist",
        title: "PathoAssist",
        tagline: "AI-Powered Pathology Analysis",
        status: "Active",
        description: "Researching the application of MedGemma (Google's medical AI model) to assist pathologists in analyzing tissue samples. Exploring multimodal prompting, structured report generation, and confidence scoring for clinical workflows.",
        researchAreas: ["Medical AI", "Computer Vision", "MedGemma", "Pathology", "Multimodal LLMs"],
        icon: "Microscope",
        liveUrl: "https://pathoassist.pages.dev/",
        githubUrl: "https://github.com/contact-ajmal/pathoassist-ui"
    },
    {
        id: "opendde",
        slug: "opendde",
        title: "OpenDDE",
        tagline: "Open-source AI-Powered Drug Design",
        status: "Active",
        description: "Researching the application of AlphaFold 3 and computational docking tools to democratise drug discovery. Exploring how open-source tools (P2Rank, RDKit, CHEMBL) can be unified into a single end-to-end pipeline from protein target identification to molecular prediction.",
        researchAreas: ["Drug Discovery", "AlphaFold 3", "Computational Biology", "Molecular Docking", "Bioinformatics"],
        icon: "Cpu",
        liveUrl: "https://opendde.pages.dev/",
        githubUrl: "https://github.com/contact-ajmal/OpenDDE"
    },
    {
        id: "genexplor",
        slug: "genexplor",
        title: "GeneXplor",
        tagline: "Genomic Discovery Platform",
        status: "Active",
        description: "A comprehensive platform unifying genomic coordinates, clinical assertions, and predictive structural biology (AlphaFold) to accelerate clinical genetic interpretation.",
        researchAreas: ["Genomics", "Structural Biology", "AlphaFold", "Clinical AI", "Data Integration"],
        icon: "Activity",
        liveUrl: "https://genexplor.pages.dev/",
        githubUrl: "https://github.com/contact-ajmal/geneXplor"
    },
    {
        id: "sports-analytics",
        slug: "sports-analytics",
        title: "Sports Intelligence Platforms",
        tagline: "Data Architecture for 20+ Sports",
        status: "Active",
        description: "At Hawk-Eye Innovations, researching scalable data architectures for real-time sports analytics. Areas include ML-driven predictive insights, biomechanics tracking for athletes, and automated broadcast visualizations.",
        researchAreas: ["Data Lakes", "Real-time Streaming", "ML Pipelines", "Sports Analytics", "Generative AI"],
        icon: "Database"
    },
    {
        id: "whatsgoingonai",
        slug: "whatsgoingonai",
        title: "AI Intelligence Aggregation",
        tagline: "Research-Grade News Synthesis",
        status: "Prototype",
        description: "Exploring techniques to aggregate, deduplicate, and synthesize AI news from multiple sources (ArXiv, Hacker News, Techmeme, YouTube). Research includes content ranking algorithms and semantic clustering.",
        researchAreas: ["Information Retrieval", "Content Aggregation", "NLP", "Web Scraping", "RAG"],
        icon: "Brain",
        liveUrl: "https://whatsgoingonai.com",
        githubUrl: "https://github.com/contact-ajmal/whats-going-on-ai"
    }
];

export function getResearchProject(slug: string): ResearchProjectData | undefined {
    return researchProjectsData.find(p => p.slug === slug);
}

export function getAllResearchSlugs(): string[] {
    return researchProjectsData.filter(p => p.hasDetailPage).map(p => p.slug);
}

export function getResearchProjectsWithDetailPages(): ResearchProjectData[] {
    return researchProjectsData.filter(p => p.hasDetailPage);
}
