// -----------------------------------------------------------------------------
// Navbar.tsx — site-wide navigation bar.
// Author: Maria Martina Carballo Diaz
// -----------------------------------------------------------------------------

import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';

type NavLinkItem = {
  to: string;
  label: string;
  end?: boolean;
};

const NAV_LINKS: NavLinkItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About Me' },
  { to: '/projects', label: 'Projects' },
  { to: '/education', label: 'Education' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact Me' }
];

const NAV_LINK_BASE =
  'px-3.5 py-2 rounded-md font-medium no-underline transition-colors hover:bg-white/5';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-20 backdrop-blur-md bg-bg/75 border-b border-border">
      <div className="relative max-w-content mx-auto px-5 py-3 flex items-center gap-4">

        {/* Portfolio logo and name */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="flex items-center gap-2.5 text-text no-underline font-bold tracking-wide hover:no-underline"
        >
          <Logo size={38} />
          <span className="text-[1.05rem]">Martina Carballo Diaz</span>
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="ml-auto md:hidden inline-flex flex-col gap-1 border border-border rounded-md px-2.5 py-2 cursor-pointer bg-transparent"
        >
          <span className="block w-[22px] h-0.5 bg-text rounded-sm" />
          <span className="block w-[22px] h-0.5 bg-text rounded-sm" />
          <span className="block w-[22px] h-0.5 bg-text rounded-sm" />
        </button>

        {/* Navigation links */}
        <nav
          className={[
            'md:ml-auto md:static md:flex md:flex-row md:items-center md:gap-1 md:flex-wrap md:bg-transparent md:border-0 md:p-0',
            'absolute left-0 right-0 top-full flex-col items-stretch gap-1 px-5 pt-3 pb-5 bg-bg/95 border-b border-border',
            isMobileMenuOpen ? 'flex' : 'hidden'
          ].join(' ')}
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                [
                  NAV_LINK_BASE,
                  isActive
                    ? 'text-[#2a171d] bg-gradient-to-br from-accent to-accent-strong hover:bg-transparent'
                    : 'text-muted hover:text-text'
                ].join(' ')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
}
