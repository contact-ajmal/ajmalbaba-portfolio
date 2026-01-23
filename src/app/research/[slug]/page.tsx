import { getResearchProject, getAllResearchSlugs } from "@/lib/research-projects";
import { ResearchDetailClient } from "./ResearchDetailClient";

export async function generateStaticParams() {
    const slugs = getAllResearchSlugs();
    return slugs.map((slug) => ({ slug }));
}

export default async function ResearchProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getResearchProject(slug);

    if (!project) return <div>Research project not found</div>;

    return <ResearchDetailClient project={project} />;
}
