export interface Project {
    id: string;
    slug: string;
    title: string;
    tagline: string;
    description: string;
    category: string;
    year: string;
    image: string | { src: string };
    color: string;
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
    problem: string;
    solution: string;
    features: string[];
}

export const projects: Project[] = [
    {
        id: "13",
        slug: "genarchitect",
        title: "GenArchitect",
        tagline: "Field Guide to Enterprise RAG & AWS AgentCore",
        description: "An interactive field guide to RAG architectures, the Meridian enterprise scenario, and building production agents with AWS Bedrock, AgentCore, and Strands Agents SDK.",
        category: "AI Architecture",
        year: "2025",
        image: "/projects/genarchitect.png",
        color: "#6366f1",
        technologies: ["React", "TypeScript", "AWS Bedrock", "AgentCore", "Strands SDK", "OpenSearch", "Neptune", "Tailwind CSS", "Vite", "Cloudflare Pages"],
        liveUrl: "https://gen-architect.pages.dev/",
        githubUrl: "https://github.com/contact-ajmal/GenArchitect",
        problem: "Moving AI assistants from prototype to enterprise production requires navigating 9 distinct architectural stages — from naive embeddings to multi-hop agent loops, hybrid retrieval, graph traversal, and document-level ACL enforcement.",
        solution: "Built an interactive visual field guide tracking the Meridian scenario through 9 architectural stages with component data flows, runnable Strands/Bedrock code samples, tradeoff analyses, and AgentCore deployment guides.",
        features: [
            "9 interactive architecture blueprints across RAG & AgentCore patterns",
            "Meridian enterprise scenario tracking evolution from prototype to production",
            "Verified code samples for Bedrock KB, Strands Agents SDK & AgentCore Runtime",
            "Hybrid retrieval + cross-encoder reranking precision pipeline visualizer",
            "GraphRAG relationship traversal with Amazon Neptune Analytics",
            "Guardrails, document-level ACLs, and AgentCore Observability / Evaluations"
        ]
    },
    {
        id: "10",
        slug: "architectflow",
        title: "ArchitectFlow",
        tagline: "The data & AI architecture studio",
        description: "ArchitectFlow interviews you about your constraints, scores every data and AI architecture pattern transparently, and hands back the winning design as a live, cloud-adaptive diagram plus a full document pack.",
        category: "Data Architecture",
        year: "2025",
        image: "/projects/architectflow.png",
        color: "#06b6d4",
        technologies: ["React", "TypeScript", "Zustand", "Framer Motion", "React Router", "Vite", "Cloudflare Pages"],
        liveUrl: "https://architectflow.pages.dev/",
        githubUrl: "https://github.com/contact-ajmal/ArchitectFlow",
        problem: "Choosing the right data architecture — Lakehouse, Mesh, Fabric, Lambda, Kappa, or a GenAI/vector stack — requires weighing dozens of constraints (volume, velocity, team shape, latency, compliance) that most teams evaluate informally or not at all.",
        solution: "Built a deterministic constraint-driven recommendation engine that runs an adaptive interview, scores every pattern with a transparent fit %, names the runner-up and the exact answers that would flip the call, then renders a cloud-adaptive architecture diagram with exportable blueprints.",
        features: [
            "Adaptive interview branching on volume, velocity, latency, compliance & team shape",
            "Deterministic scoring engine — every point traces to an answer, no black box",
            "Cloud-adaptive diagrams that relabel to AWS, Azure, GCP, or on-prem services",
            "Editable diagram nodes with drag-to-rearrange and component add/remove",
            "Exportable deliverable pack — architecture brief, tech-stack spec, cost sizing (SVG, PNG, Markdown, PDF)",
            "20+ architecture patterns across data platforms, mesh/fabric, streaming, and GenAI/agentic systems"
        ]
    },
    {
        id: "8",
        slug: "cortexshield",
        title: "CortexShield",
        tagline: "Enterprise LLM Safeguards & Telemetry Platform",
        description: "A developer-first telemetric pipeline that secures, monitors, and safeguards enterprise LLM applications against jailbreaks, prompt injections, coordinated Sybil campaigns, and agentic tool-call exploits.",
        category: "AI Security",
        year: "2025",
        image: "/projects/cortexshield.png",
        color: "#d97757",
        technologies: ["React", "TypeScript", "Python", "PostgreSQL", "TF-IDF Clustering", "Vite", "Cloudflare Pages"],
        liveUrl: "https://cortexshield.pages.dev/",
        problem: "Enterprise LLM applications are vulnerable to adversarial attacks — jailbreaks bypass alignment, coordinated Sybil campaigns probe for exploits across hundreds of accounts, and autonomous agents can be hijacked via indirect prompt injections embedded in external data.",
        solution: "Built an end-to-end telemetry and enforcement pipeline that intercepts LLM interactions in real-time, runs deterministic safety scoring with dynamic language confidence scaling, detects coordinated abuse campaigns via agglomerative TF-IDF clustering, and validates agentic tool-call chains against dangerous state transitions.",
        features: [
            "Real-time jailbreak detection with multi-turn escalation tracking",
            "Sybil campaign clustering via TF-IDF vectorization & z-score anomaly detection",
            "Agentic plan validation — intercepts dangerous tool-call transitions",
            "Dynamic language confidence scaling for multilingual & code-switching attacks",
            "Over-refusal optimization separating malicious from legitimate academic queries",
            "Policy sandbox for testing custom enforcement rules"
        ]
    },
    {
        id: "12",
        slug: "verticore",
        title: "VertiCore",
        tagline: "Enterprise Agent Architecture Framework",
        description: "A production-grade agentic AI framework that combines LangGraph's reasoning capabilities with Temporal's durable execution for enterprise-scale autonomous systems with built-in security, compliance, and human oversight.",
        category: "Agentic AI / Enterprise",
        year: "2024-2025",
        image: "/projects/verticore.png",
        color: "#a855f7",
        technologies: ["Python", "Go", "TypeScript", "LangGraph", "Temporal", "PostgreSQL", "Qdrant", "Docker", "OPA", "gRPC"],
        githubUrl: "https://github.com/teamverticore/verticore",
        problem: "Standard agent frameworks fail in production — transient errors lose context, there's no audit trail, no PII protection, and no way to enforce role-based access on tool execution. The gap between experimental AI agents and enterprise-ready autonomous systems is massive.",
        solution: "Designed a hybrid architecture that wraps LangGraph reasoning nodes within Temporal durable activities, giving every agent step exactly-once execution semantics, automatic retries, and complete audit trails. A separate Control Plane enforces RBAC, PII redaction, and human-in-the-loop gates.",
        features: [
            "LangGraph reasoning engine with pluggable cognitive architectures (ReAct, Plan-and-Solve)",
            "Temporal durable execution — every tool call is checkpointed with zero data loss",
            "PII Vault pattern — sensitive data redacted before LLM context, rehydrated at output",
            "Granular RBAC policy engine controlling which tools agents can execute",
            "Human-in-the-loop approval gates integrated into workflow state",
            "Multi-tenant Control Plane with comprehensive audit logging"
        ]
    },
    {
        id: "11",
        slug: "orbitaldatacenter",
        title: "AI1 Orbital Compute",
        tagline: "Interactive 3D simulation of SpaceX's orbital GPU constellation",
        description: "A real-time WebGL visualization of the AI1 orbital data center program — laser-linked compute satellites in sun-synchronous orbit, Starship deployment sequences, and a full telemetry HUD. Built with Three.js and real orbital mechanics.",
        category: "3D Visualization / Space",
        year: "2025",
        image: "/projects/orbitaldatacenter.png",
        color: "#22d3ee",
        technologies: ["React", "Three.js", "React Three Fiber", "Zustand", "Satellite.js", "Tailwind CSS", "Vite", "Cloudflare Pages"],
        liveUrl: "https://orbitaldatacenter.pages.dev/",
        githubUrl: "https://github.com/contact-ajmal/OrbitalDataCenter",
        problem: "SpaceX and xAI announced plans for a constellation of orbital data-center satellites — but there's no way to visualize how such a system would actually look, behave, or operate in orbit at scale.",
        solution: "Built an immersive real-time 3D simulation with physically accurate sun-synchronous orbital mechanics, Starship Pez-style deployment sequences, laser inter-satellite link mesh routing, and a mission-control HUD displaying live telemetry, compute load, power generation, and constellation status.",
        features: [
            "Photorealistic Earth with 8K/16K NASA textures (day, night, clouds, topography)",
            "Physically accurate sun-synchronous orbital mechanics at 97.5° inclination",
            "Starship V3 ascent & Pez-style satellite deployment animation",
            "Laser inter-satellite link mesh with real-time routing visualization",
            "Live telemetry HUD — altitude, velocity, compute load, power stats",
            "Photo mode with shareable permalink state & constellation economics panel"
        ]
    },
    {
        id: "7",
        slug: "datacrawlr",
        title: "Datacrawlr",
        tagline: "The dataset and model intelligence layer",
        description: "Datacrawlr indexes every dataset and every open or commercial model worth knowing about — schemas, licenses, benchmark scores, pricing, and the link between the two. Metadata only — we point you to the source.",
        category: "AI / ML Tooling",
        year: "2025",
        image: "/projects/datacrawlr.png",
        color: "#5eead4",
        technologies: ["Next.js", "TypeScript", "OpenSearch", "PostgreSQL", "Cloudflare Pages", "AI Synthesis"],
        liveUrl: "https://datacrawlr.pages.dev/",
        githubUrl: "https://github.com/datacrawlr/datacrawlr",
        problem: "The open ML ecosystem is fragmented — HuggingFace knows about HuggingFace, Kaggle knows about Kaggle, and every government portal knows about itself. There's no single place to ask which dataset to train on and which model to use it with.",
        solution: "Built the discovery layer that closes the loop — datasets and the models trained on them, in one searchable index. Semantic search with AI synthesis, model-dataset lineage graphs, and benchmark leaderboards across the entire open ML ecosystem.",
        features: [
            "Semantic search with AI synthesis cards and citations",
            "Model-dataset lineage graph (trained-on / fine-tuned-on / evaluated-on)",
            "Benchmark leaderboards (MMLU-Pro and more)",
            "9+ dataset sources (HuggingFace, Kaggle, GitHub, gov portals)",
            "Model directory with pricing, licensing, and benchmark scores",
            "Filters by modality, license, source, and freshness"
        ]
    },
    {
        id: "9",
        slug: "claudecodeplaybook",
        title: "ClaudeCode Playbook",
        tagline: "An independent interactive guide to Claude Code",
        description: "An interactive playbook for the Claude Code CLI. Every concept comes with something to toggle, drag, type, or trigger — because you remember what you operate, not what you read.",
        category: "Developer Education",
        year: "2025",
        image: "/projects/claudecodeplaybook.png",
        color: "#f59e0b",
        technologies: ["React", "TypeScript", "Framer Motion", "React Router", "Vite", "Cloudflare Pages"],
        liveUrl: "https://claudecodeplaybook.pages.dev/",
        githubUrl: "https://github.com/contact-ajmal/ClaudeCodePlaybook",
        problem: "Claude Code is a powerful agentic CLI, but its extensibility model — CLAUDE.md, subagents, hooks, MCP, plugins, and headless automation — is scattered across docs and hard to learn without hands-on experimentation.",
        solution: "Built a fully interactive documentation site where every concept has a live component: terminal emulators, config builders, hook pipeline visualizers, and a playground sandbox. Difficulty-tiered paths (Beginner → Power User) let developers learn at their own pace.",
        features: [
            "Live terminal emulators simulating real Claude Code sessions",
            "Interactive CLAUDE.md config builder with live preview",
            "Hook pipeline visualizer for lifecycle event chaining",
            "Subagent delegation patterns with visual workflows",
            "MCP server integration guides with interactive examples",
            "Progress tracking with checkpoint completion across all chapters"
        ]
    },
    {
        id: "6",
        slug: "opendde",
        title: "OpenDDE",
        tagline: "Open-source AI-powered drug design platform",
        description: "From protein target to druggable pocket to molecular prediction — in minutes, not months. Built on AlphaFold 3, P2Rank, and the latest open-source computational biology tools.",
        category: "Computational Biology",
        year: "2025",
        image: "/projects/opendde.png",
        color: "#22c55e",
        technologies: ["React", "TypeScript", "AlphaFold 3", "P2Rank", "CHEMBL", "RDKit", "OpenTargets", "Cloudflare Pages"],
        liveUrl: "https://opendde.pages.dev/",
        githubUrl: "https://github.com/contact-ajmal/OpenDDE",
        problem: "Drug discovery is slow, expensive, and siloed — it takes years to go from a protein target to a viable drug candidate, with researchers forced to use disparate tools across different databases.",
        solution: "Built an open-source platform that unifies the entire drug design pipeline: from protein structure prediction (AlphaFold 3) and pocket detection (P2Rank) to molecular docking and drug database integration — all in one workspace.",
        features: [
            "Protein structure prediction via AlphaFold 3",
            "Druggable pocket detection with P2Rank",
            "Integration with CHEMBL & OpenTargets drug databases",
            "Molecular prediction & docking workflows",
            "100% open-source MIT license"
        ]
    },
    {
        id: "4",
        slug: "genome-ai",
        title: "Genome×AI",
        tagline: "Decoding Humanity - AI × Human GENOME",
        description: "An educational journey through genomics and artificial intelligence. Learn how AI is revolutionizing our understanding of DNA and transforming medicine.",
        category: "Web Application / Education",
        year: "2024",
        image: "/projects/genome-ai.png",
        color: "#3b82f6",
        technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite", "Cloudflare Pages"],
        liveUrl: "https://genome-ai.pages.dev/",
        problem: "The intersection of AI and genomics is complex and often inaccessible to the general public, despite its growing importance in personalized medicine.",
        solution: "Created an interactive educational platform that visualizes genomic analysis pipelines, neural network processing of DNA, and variant impact scoring in an intuitive, engaging way.",
        features: [
            "Genomic Analysis Pipeline Simulation",
            "Neural Network Visualization",
            "Variant Impact Scoring",
            "Interactive Educational Modules",
            "Real-time Genomic Stats"
        ]
    },
    {
        id: "5",
        slug: "genemapr",
        title: "GeneMapr",
        tagline: "Genomic Variant Interpretation Platform",
        description: "A comprehensive platform to parse, annotate, and interpret genomic variants from VCF files. Integrates ClinVar, gnomAD, and Ensembl with AI-powered clinical summaries via Google DeepMind's AlphaGenome.",
        category: "Healthcare AI",
        year: "2025",
        image: "/projects/genemapr.png",
        color: "#06b6d4",
        technologies: ["React", "TypeScript", "Python", "FastAPI", "AlphaGenome", "PostgreSQL", "Docker"],
        liveUrl: "https://genemapr.pages.dev/",
        githubUrl: "https://github.com/contact-ajmal/GeneMapr",
        problem: "Clinical variant interpretation from VCF files is complex and time-consuming, requiring cross-referencing multiple genomic databases and manual analysis by specialists.",
        solution: "Built a unified platform that automates VCF parsing, multi-source annotation (ClinVar, gnomAD, Ensembl), pharmacogenomic profiling, and AI-driven clinical reporting powered by AlphaGenome.",
        features: [
            "VCF upload & high-performance parsing via pysam",
            "Multi-source annotation (ClinVar, gnomAD, Ensembl)",
            "AlphaGenome AI variant effect predictions",
            "Pharmacogenomic profiling & drug-gene interactions",
            "Automated risk scoring engine",
            "Clinical-grade report generation"
        ]
    },
    {
        id: "1",
        slug: "whatsgoingonai",
        title: "WhatsGoingOn.AI",
        tagline: "The Ultimate AI Intelligence Dashboard",
        description: "A futuristic, immersive platform designed to be the ultimate daily destination for AI enthusiasts, researchers, and engineers.",
        category: "Web Application",
        year: "2024",
        image: "/projects/whatsgoingonai.png",
        color: "#00d4ff",
        technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion"],
        liveUrl: "https://whatsgoingonai.com",
        githubUrl: "https://github.com/contact-ajmal/whats-going-on-ai",
        problem: "AI news, research, and updates are scattered across dozens of sources. Staying current requires visiting multiple websites daily.",
        solution: "Built a centralized intelligence dashboard that aggregates real-time content from Techmeme, Hacker News, ArXiv, Google DeepMind, YouTube, and job boards.",
        features: [
            "Real-time news aggregation from 10+ sources",
            "Research radar with ArXiv papers",
            "AI/ML job board with filtering",
            "WebGL particle animations",
            "Dark 'Neural' design system"
        ]
    },
    {
        id: "2",
        slug: "genexplor",
        title: "GeneXplor",
        tagline: "Accelerate Your Genomic Discoveries",
        description: "A comprehensive open-source platform for clinical geneticists and structural biologists, serving as a unified discovery layer for interpreting human genes and variants.",
        category: "Healthcare AI",
        year: "2024",
        image: "/projects/genexplor.png",
        color: "#cbd5e1",
        technologies: ["React", "TypeScript", "Tailwind CSS", "AlphaFold", "Cloudflare Pages"],
        liveUrl: "https://genexplor.pages.dev/",
        githubUrl: "https://github.com/contact-ajmal/geneXplor",
        problem: "Genomic data is fragmented across isolated databases, forcing researchers to manage dozens of browser tabs and tools to piece together clinical and structural information.",
        solution: "Built a centralized dashboard mapping human genes to clinical context, integrating Ensembl, ClinVar, gnomAD, and AlphaFold into a single workspace.",
        features: [
            "Smart Gene Search and HGNC symbol mapping",
            "Variant Explorer with pathogenic and frequency filtering",
            "3D Protein Architecture using AlphaFold",
            "Automated ACMG-formatted Clinical Reports",
            "Genomic Epidemiology across ancestral populations"
        ]
    },
    {
        id: "3",
        slug: "pathoassist",
        title: "PathoAssist",
        tagline: "AI-Powered Pathology Analysis",
        description: "An intelligent medical imaging assistant leveraging MedGemma to help pathologists analyze tissue samples.",
        category: "Healthcare AI",
        year: "2024",
        image: "/projects/pathoassist.png",
        color: "#a855f7",
        technologies: ["React", "TypeScript", "Python", "FastAPI", "MedGemma"],
        liveUrl: "https://pathoassist.pages.dev/",
        githubUrl: "https://github.com/contact-ajmal/pathoassist-ui",
        problem: "Pathology image analysis is time-consuming and requires specialized expertise, with growing demand and limited specialists.",
        solution: "Building an AI assistant that uses MedGemma to analyze pathology images and generate structured preliminary reports.",
        features: [
            "MedGemma model integration",
            "Multi-format image support",
            "Structured report generation",
            "Confidence scoring",
            "Pathologist review workflow"
        ]
    }
];

export function getProject(slug: string): Project | undefined {
    return projects.find(p => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return projects.map(p => p.slug);
}
