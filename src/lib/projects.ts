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
