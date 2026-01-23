import { getResearchProject, getAllResearchSlugs } from "@/lib/research-projects";
import { ResearchDetailClient } from "./ResearchDetailClient";

export async function generateStaticParams() {
    const slugs = getAllResearchSlugs();
    return slugs.map((slug) => ({ slug }));
}

export default function ResearchProjectPage({ params }: { params: { slug: string } }) {
    const project = getResearchProject(params.slug);

    if (!project) return <div>Research project not found</div>;

    return <ResearchDetailClient project={project} />;
}
