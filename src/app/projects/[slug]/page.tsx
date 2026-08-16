import { getProject, getAllProjectSlugs } from "@/lib/projects";
import { CaseStudyClient } from "./CaseStudyClient";

export async function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return slugs.map((slug) => ({ slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) return <div>Project not found</div>;

    return <CaseStudyClient project={project} />;
}
