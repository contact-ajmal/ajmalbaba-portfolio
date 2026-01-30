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
        slug: "biomotionpro",
        title: "BioMotionPro",
        tagline: "Professional Biomechanics Analysis for macOS",
        description: "An open-source, professional-grade biomechanics analysis tool built natively for macOS using Swift and Metal.",
        category: "Native Application",
        year: "2024",
        image: "/projects/biomotionpro.png",
        color: "#22c55e",
        technologies: ["Swift", "Metal", "SwiftUI", "Python", "Apple Silicon"],
        liveUrl: "https://biomotionpro.pages.dev",
        githubUrl: "https://github.com/contact-ajmal/BioMotionPro",
        problem: "Existing biomechanics tools are outdated, don't work on modern macOS, or are prohibitively expensive for researchers.",
        solution: "Created a native macOS application using Swift and Metal for hardware-accelerated 3D rendering at 60fps+.",
        features: [
            "Real-time 3D skeleton visualization",
            "C3D, TRC, MOT file format support",
            "Kinematics analysis tools",
            "Apple Silicon optimization",
            "MIT License - 100% free"
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
    }
];

export function getProject(slug: string): Project | undefined {
    return projects.find(p => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return projects.map(p => p.slug);
}
