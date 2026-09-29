'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AztraxLogo } from '@/components/ui/AztraxLogo';

const navLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'Pilot', href: '#pilot' },
  { label: 'About', href: '#about' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'shadow-[0_2px_20px_rgba(0,0,0,0.4)]'
            : ''
        }`}
        style={{
          background: '#101820',
          borderBottom: '1px solid rgba(22,185,232,0.12)',
          height: '64px',
        }}
      >
        <div
          className="az-container flex items-center justify-between"
          style={{ height: '64px' }}
        >
          {/* Logo */}
          <a
            href="/"
            className="flex items-center select-none"
            aria-label="AZTRAX Home"
          >
            <AztraxLogo size="sm" showSubtitle={false} />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-xs font-medium tracking-widest uppercase transition-colors duration-150"
                style={{ color: '#8a9ab0' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = '#f5f7f8')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = '#8a9ab0')
                }
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick('#pilot')}
              className="hidden md:flex items-center justify-center font-semibold transition-all duration-150"
              style={{
                background: '#16b9e8',
                color: '#060810',
                fontSize: '0.8125rem',
                padding: '0.5rem 1.25rem',
                borderRadius: '4px',
                letterSpacing: '0.02em',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = '#4dcef0')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = '#16b9e8')
              }
            >
              Request a Free Pilot
            </button>

            <button
              className="md:hidden flex items-center justify-center"
              style={{ color: '#f5f7f8', background: 'none', border: 'none', cursor: 'pointer', padding: '0.25rem' }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col"
          style={{ background: '#0c111a', paddingTop: '64px' }}
        >
          <nav
            className="flex flex-col gap-0 p-6"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-4 text-base font-medium tracking-widest uppercase transition-colors duration-150"
                style={{
                  color: '#b8c4d0',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid rgba(22,185,232,0.08)',
                  cursor: 'pointer',
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#pilot')}
              className="mt-6 font-semibold"
              style={{
                background: '#16b9e8',
                color: '#060810',
                fontSize: '0.9375rem',
                padding: '1rem',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              Request a Free Pilot
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
