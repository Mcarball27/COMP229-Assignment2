// -----------------------------------------------------------------------------
// Home.tsx — the landing page ("/").
// Author: Martina Carballo
// -----------------------------------------------------------------------------
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function Home() {
  return (
    <section>

      {/* Main welcome section */}
      <div className="grid gap-8 mb-10 items-center grid-cols-1 md:grid-cols-[1.4fr_1fr]">

        <div>
          <p className="uppercase tracking-[0.14em] text-accent font-semibold text-sm mb-2">
            Welcome
          </p>

          <h1>
            Hi, I'm Martina Carballo. This is my portfolio. Demo for COMP229 class.
          </h1>

          <p className="lead">
            I'm a Software Engineering Technician student interested in
            software development, web development, and creating practical
            applications that are simple and enjoyable to use.
          </p>

          <div className="flex flex-wrap gap-3 mt-5">
            <Link className="btn" to="/about">
              About Me
            </Link>

            <Link className="btn btn-secondary" to="/projects">
              View Projects
            </Link>
          </div>
        </div>

        {/* Decorative portfolio logo */}
        <div
          aria-hidden="true"
          className="flex items-center justify-center p-8 rounded-lg bg-[radial-gradient(circle_at_30%_30%,rgba(231,169,187,0.18),transparent_60%)]"
        >
          <Logo size={190} />
        </div>

      </div>

      {/* Mission statement */}
      <div className="card border-l-4 border-l-accent">
        <h2>Mission Statement</h2>

        <p>
            To build thoughtful, useful software with clean code and clear
            problem-solving, and to keep improving every project I create
            along the way.
        </p>
      </div>

    </section>
  );
}