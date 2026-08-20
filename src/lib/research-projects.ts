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
        id: "genarchitect",
        slug: "genarchitect",
        title: "GenArchitect",
        tagline: "Field Guide to Enterprise RAG & AWS AgentCore",
        status: "Active",
        description: "Investigating enterprise RAG patterns and autonomous agent orchestration across 9 architectural stages — exploring Bedrock Knowledge Bases, hybrid retrieval with cross-encoder rerankers, Neptune Analytics GraphRAG, and AgentCore Gateway / Runtime deployment.",
        researchAreas: ["Enterprise RAG", "AWS AgentCore", "Bedrock", "Strands SDK", "GraphRAG", "Multi-Agent Systems", "Security & ACLs"],
        icon: "Layers",
        liveUrl: "https://gen-architect.pages.dev/",
        githubUrl: "https://github.com/contact-ajmal/GenArchitect",
        hasDetailPage: true,
        year: "2025",
        fullDescription: `GenArchitect is an interactive architectural field guide designed to guide engineering teams from naive RAG prototypes to hardened enterprise-grade AI platforms. Grounded in the real-world Meridian enterprise scenario, it deconstructs the 9 architectural evolutions required to operate AI assistants in regulated production environments.

The guide demonstrates production patterns using Amazon Bedrock, AWS AgentCore (Gateway, Runtime, Memory, Observability), OpenSearch Serverless, Neptune Analytics, and the Strands Agents SDK.`,
        detailedSections: [
            {
                title: "From Naive Top-K to Hybrid Precision + Cross-Encoder Reranking",
                content: "Pure vector similarity frequently misses precise keywords (policy codes, product IDs, legal clauses) while pure keyword search misses semantic meaning. GenArchitect demonstrates hybrid retrieval over OpenSearch Serverless (combining BM25 and dense embeddings) over-fetching ~25 candidates, followed by cross-encoder reranking via Bedrock to prune down to the top-5 highest-precision citations."
            },
            {
                title: "GraphRAG: Relationship Traversal with Neptune Analytics",
                content: "When answers require multi-hop entity traversal (e.g. connecting internal controls to regulatory mandates and specific products), flat vector search fails. GenArchitect maps how Bedrock extracts entities and relationships during ingestion into an Amazon Neptune Analytics graph, enabling graph traversal query resolution."
            },
            {
                title: "Separation of Memory vs. Source of Truth (Memory-Augmented RAG)",
                content: "AgentCore Memory provides user continuity (role, preferences, recent questions) but must never be treated as an authoritative source of facts. GenArchitect details the architectural discipline of wiring personal memory and document retrieval as distinct tools with explicit prompt boundaries to eliminate hallucinated policy drift."
            },
            {
                title: "AgentCore Gateway, Multi-Agent Supervisors & Guardrailed Security",
                content: "Production deployment requires decoupling: AgentCore Gateway exposes disparate knowledge bases as MCP tools with centralized IAM and identity scoping. A Strands supervisor coordinates specialist agents (retrieval, synthesis, compliance review gate), hosted serverlessly on AgentCore Runtime with Bedrock Guardrails, document-level ACL filtering, OpenTelemetry CloudWatch tracing, and regression evaluations."
            }
        ],
        keyComponents: [
            {
                title: "9 Evolution Stages",
                description: "Interactive architectural diagrams and data flows from Naive RAG to Guardrailed Secure RAG.",
                color: "#6366f1"
            },
            {
                title: "AWS AgentCore Gateway & Runtime",
                description: "MCP tool exposition, centralized IAM auth, and serverless session-isolated runtime hosting.",
                color: "#0ea5e9"
            },
            {
                title: "Hybrid Reranker Pipeline",
                description: "BM25 + dense vector fusion with cross-encoder reranking for maximum retrieval precision.",
                color: "#14b8a6"
            },
            {
                title: "GraphRAG Knowledge Engine",
                description: "Entity & relationship extraction backed by Amazon Neptune Analytics graph traversal.",
                color: "#ec4899"
            },
            {
                title: "Memory vs. Truth Separation",
                description: "AgentCore long-term user memory paired with strict authoritative document grounding.",
                color: "#f59e0b"
            },
            {
                title: "Guardrails & Observability",
                description: "Document-level ACL filtering, Bedrock Guardrails, OpenTelemetry CloudWatch traces, and evaluation suites.",
                color: "#dc2626"
            }
        ],
        codeAvailability: "GenArchitect is available live as an interactive studio at gen-architect.pages.dev and on GitHub."
    },
    {
        id: "cortexshield",
        slug: "cortexshield",
        title: "CortexShield",
        tagline: "Enterprise LLM Safeguards & Telemetry",
        status: "Active",
        description: "Researching adversarial attack detection and mitigation for enterprise LLM applications. Developing novel approaches for dynamic language confidence scaling, stateful multi-turn escalation defense, Sybil campaign clustering via TF-IDF, and agentic tool-call chain validation to secure production AI workloads.",
        researchAreas: ["LLM Safety", "Prompt Injection", "Sybil Detection", "Agentic Security", "Adversarial ML", "NLP"],
        icon: "Shield",
        liveUrl: "https://cortexshield.pages.dev/",
        hasDetailPage: true,
        year: "2025",
        fullDescription: `CortexShield is a research-driven enterprise LLM safety platform that addresses the critical blind spots in current AI guardrail systems. Traditional safety classifiers are stateless, English-centric, and blind to coordinated multi-account attacks. CortexShield introduces four novel research methodologies — dynamic language confidence scaling, stateful session escalation tracking, agglomerative TF-IDF Sybil campaign clustering, and agentic state transition validation — to create a comprehensive defense layer for production LLM deployments.

The platform operates as a telemetric pipeline: intercepting LLM interactions at the API gateway, running parallel enrichment scoring, and enforcing policy decisions in real-time without adding latency to the model serving path.`,
        detailedSections: [
            {
                title: "The Low-Resource Language & Code-Switching Blind Spot",
                content: "Traditional safety classifiers are trained almost exclusively on English and high-resource languages. Adversarial prompts translated into low-resource languages (Hindi, Arabic, Swahili) or mixed via code-switching routinely bypass safety checkpoints. CortexShield introduces a dynamic language_confidence coefficient that dampens the safety classifier's confidence score when code-switching or low-resource language signatures are detected, automatically forcing the system into strict enforcement mode."
            },
            {
                title: "Stateful Multi-Turn Session Escalation",
                content: "Single-turn safety checks are stateless. Adversaries exploit this by constructing multi-turn interactions — beginning with benign queries to establish context, then incrementally adjusting or escalating their prompts until the model complies. CortexShield tracks state across conversational turns, logging repeat attempts, query reformulations, and conversational transitions. The evaluation engine integrates a session context penalty that dynamically amplifies the threat score based on escalation aggressiveness."
            },
            {
                title: "Coordinated Sybil Campaign Clustering",
                content: "Large-scale bad actors execute coordinated campaigns using hundreds of unique accounts to conduct distributed red-teaming. Traditional rate-limiters are blind to this because each user generates low-volume traffic. CortexShield's analytics engine groups prompt semantic vectors in real-time using TF-IDF vectorization and agglomerative clustering algorithms. When the volume of a semantic cluster spikes (measured by z-score anomaly detection), the system flags it as a coordinated campaign and raises alerts."
            },
            {
                title: "Agentic State Transition Safeguards",
                content: "As LLMs are integrated as autonomous agents with tool-calling capabilities, they become vulnerable to indirect prompt injections embedded in external data. CortexShield inspects agentic tool plans before dispatch, constructing a dynamic state transition graph and checking for dangerous transitions — for example, if an agent attempts to read sensitive user context (emails) and transition directly to an outbound mutation (Slack post, HTTP call), the scoring engine intercepts and flags an injection risk."
            }
        ],
        keyComponents: [
            {
                title: "Enrichment Scoring Pipeline",
                description: "Parallel analysis against deterministic rules, heuristics, and semantic embeddings for real-time threat classification.",
                color: "#5eead4"
            },
            {
                title: "Sybil Campaign Detector",
                description: "TF-IDF vectorization with agglomerative clustering and z-score anomaly detection for distributed attack identification.",
                color: "#a855f7"
            },
            {
                title: "Agentic Plan Validator",
                description: "Dynamic state transition graph analysis intercepting dangerous tool-call sequences before external dispatch.",
                color: "#f59e0b"
            },
            {
                title: "Language Confidence Engine",
                description: "Dynamic confidence coefficient scaling for low-resource language and code-switching evasion defense.",
                color: "#3b82f6"
            },
            {
                title: "Session Escalation Tracker",
                description: "Stateful multi-turn tracking with context penalty amplification for progressive steerage attacks.",
                color: "#ef4444"
            },
            {
                title: "Policy Sandbox",
                description: "Interactive testing environment for custom enforcement rules and threshold tuning against adversarial scenarios.",
                color: "#d97757"
            }
        ],
        codeAvailability: "CortexShield is an open research project. The platform and policy sandbox are available at cortexshield.pages.dev."
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
        githubUrl: "https://github.com/teamverticore/verticore",
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
