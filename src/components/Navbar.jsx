import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Quality Assurance', to: '/quality' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-surface border-b border-outline-variant transition-all duration-200 ${
        scrolled ? 'shadow-md h-16' : 'shadow-sm h-20'
      }`}
    >
      <nav className="flex items-center justify-between px-4 md:px-margin-desktop max-w-container-max mx-auto h-full">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src="/Horizontal%20Logo.svg" alt="Smruti Spintex Pvt Ltd" className="h-16 w-auto -my-2" />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `font-body-md text-body-md transition-colors py-1 ${
                  isActive
                    ? 'text-primary font-bold border-b-2 border-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate('/contact')}
          className="hidden md:block bg-primary text-on-primary px-6 py-2 rounded-lg font-label-sm text-label-sm hover:bg-primary-container transition-all uppercase tracking-widest"
        >
          Get a Quote
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-surface border-t border-outline-variant shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-2">
            {navLinks.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `font-body-md text-body-md py-3 px-2 border-b border-outline-variant/30 ${
                    isActive ? 'text-primary font-bold' : 'text-on-surface-variant'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <button
              onClick={() => { setMenuOpen(false); navigate('/contact'); }}
              className="mt-2 bg-primary text-on-primary py-3 rounded-lg font-label-sm text-label-sm uppercase tracking-widest"
            >
              Get a Quote
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
