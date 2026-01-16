import { getProject, getAllProjectSlugs } from "@/lib/projects";
import { CaseStudyClient } from "./CaseStudyClient";

export async function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return slugs.map((slug) => ({ slug }));
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
    const project = getProject(params.slug);

    if (!project) return <div>Project not found</div>;

    return <CaseStudyClient project={project} />;
}
