// // -----------------------------------------------------------------------------
// Projects.tsx — Projects page.
// Author: Maria Martina Carballo Diaz
// -----------------------------------------------------------------------------

import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

export default function Projects() {
  return (
    <section>
      <h1 className="section-title">Projects</h1>

      <p className="lead">
        A selection of projects I've completed or contributed to through my studies
        and hands-on experience. Each project highlights my role, the technologies
        involved, and what I learned from the process.
      </p>

      {/* Project cards */}
      <div className="grid gap-5 mt-6 grid-cols-1 md:grid-cols-3">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="card flex flex-col gap-2"
          >
            {/* Project image */}
            <div className="w-full h-40 flex items-center justify-center rounded-md bg-surface-2 overflow-hidden">
              <img
                src={project.image}
                alt={project.imageAlt}
                loading="lazy"
                className="max-w-[85%] max-h-[85%] object-contain rounded-md"
              />
            </div>

            {/* Project title */}
            <h3 className="mt-2 mb-0 text-text">
              <Link
                to={`/projects/${project.id}`}
                className="text-inherit no-underline hover:text-accent hover:underline"
              >
                {project.title}
              </Link>
            </h3>

            <p className="text-accent font-semibold text-[0.95rem] m-0">
              {project.role}
            </p>

            <p className="mt-1 mb-0">
              {project.outcome}
            </p>

            {/* Link to full project details */}
            <Link
              to={`/projects/${project.id}`}
              aria-label={`Read more about ${project.title}`}
              className="self-start mt-1 text-accent font-semibold no-underline hover:underline"
            >
              Details →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}