// -----------------------------------------------------------------------------
// Footer.tsx — site-wide footer.
// Author: Maria Martina Carballo Diaz
// -----------------------------------------------------------------------------

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg/60">
      <div className="max-w-content mx-auto px-5 py-4 flex flex-wrap justify-between gap-4 text-muted text-sm">
        <span>
          © {currentYear} Maria Martina Carballo Diaz. All rights reserved.
        </span>

        <span>Built with React + Vite + Tailwind.</span>
      </div>
    </footer>
  );
}
