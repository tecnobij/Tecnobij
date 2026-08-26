import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectMockup } from "../../project-mockup";
import { getProject, projects } from "../../projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found | Tecnobij Solutions" };
  return { title: `${project.title} | Tecnobij Solutions`, description: project.shortDescription };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="project-detail-page">
      <nav className="project-detail-nav container"><Link className="project-back" href="/#work">← Selected work</Link><Link className="project-detail-brand" href="/#hero">tecnobij<span>.</span></Link></nav>
      <section className="project-detail-hero">
        <div className="container project-detail-hero-grid">
          <div><span className="project-category">{project.category}</span><h1>{project.title}</h1><p>{project.shortDescription}</p><a className="button button-lime" href="/#contact">Start Your Project <span aria-hidden="true">→</span></a></div>
          <ProjectMockup project={project} detail />
        </div>
      </section>
      <section className="project-detail-content section-pad">
        <div className="container project-detail-content-grid"><div><span className="section-kicker">/  about the project</span><h2>Built for the work<br /><em>that matters.</em></h2></div><div><p className="project-detail-description">{project.description}</p><div className="project-focus"><span className="section-kicker">/  project focus</span><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div></div></div>
      </section>
      <section className="project-detail-cta"><div className="container"><span className="section-kicker">/  have a project in mind?</span><h2>Let&apos;s build something<br /><em>meaningful together.</em></h2><a className="button button-lime" href="/#contact">Start Your Project <span aria-hidden="true">→</span></a></div></section>
    </main>
  );
}
