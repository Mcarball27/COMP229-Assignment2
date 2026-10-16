// -----------------------------------------------------------------------------
// ProjectDetails.tsx — individual project details page.
// Author: Maria Martina Carballo Diaz
// -----------------------------------------------------------------------------

import { Link, useParams } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((entry) => entry.id === id);

  // Show a fallback if the project ID does not exist.
  if (!project) {
    return (
      <section className="max-w-3xl">
        <h1 className="section-title">Project not found</h1>

        <p className="lead">
          The project you tried to open doesn't exist or was renamed.
        </p>

        <p>
          <Link className="btn" to="/projects">
            ← Back to projects
          </Link>
        </p>
      </section>
    );
  }

  return (
    <article className="max-w-3xl">

      {/* Back navigation */}
      <p className="mb-4 text-sm">
        <Link
          to="/projects"
          className="text-muted no-underline hover:text-accent hover:underline"
        >
          ← Back to projects
        </Link>
      </p>

      {/* Project heading */}
      <header className="grid gap-1 mb-5">
        <h1 className="m-0 text-3xl leading-tight">
          {project.title}
        </h1>

        <p className="m-0 text-accent font-semibold">
          {project.role}
        </p>

        <p className="m-0 text-muted text-sm">
          {project.timeline}
        </p>
      </header>

      {/* Project image */}
      <div className="flex justify-center mb-5">
        <img
          src={project.image}
          alt={project.imageAlt}
          className="max-w-full max-h-[280px] w-auto h-auto object-contain rounded-md bg-surface-2"
        />
      </div>

      {/* Project description */}
      <div className="grid gap-4 text-text leading-7 mb-6">
        {project.description.map((paragraph, index) => (
          <p key={index} className="m-0">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Technologies used */}
      <section className="mb-6">
        <h2 className="m-0 mb-2 text-base text-muted font-semibold uppercase tracking-wider">
          Tech Stack
        </h2>

        <ul className="list-none p-0 m-0 flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {/* Optional project links */}
      {(project.liveUrl || project.repoUrl) && (
        <section className="flex flex-wrap gap-2.5">

          {project.liveUrl && (
            <a
              className="btn"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Live Site ↗
            </a>
          )}

          {project.repoUrl && (
            <a
              className="btn btn-secondary"
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              Source Code ↗
            </a>
          )}

        </section>
      )}

    </article>
  );
}