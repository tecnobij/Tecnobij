import type { Project } from "./projects";

export function ProjectMockup({ project, detail = false }: { project: Project; detail?: boolean }) {
  return (
    <div className={`project-visual project-visual-${project.theme} ${detail ? "project-visual-detail" : ""}`}>
      <img className="project-real-image" src={project.image} alt={project.imageAlt} />
      <div className="project-image-shade" aria-hidden="true"></div>
      <div className="project-visual-label" aria-hidden="true"><b>{project.title}</b><small>Tecnobij project</small></div>
    </div>
  );
}
