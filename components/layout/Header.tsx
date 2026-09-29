'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Problem', href: '#problem' },
  { label: 'Not Every Asset Needs GPS', href: '#concept' },
  { label: 'Situations', href: '#situations' },
  { label: 'Architecture', href: '#architecture' },
  { label: '30-Day Pilot', href: '#pilot' },
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
            ? 'shadow-[0_4px_24px_rgba(0,0,0,0.35)]'
            : ''
        }`}
        style={{
          background: '#121417',
          borderBottom: '1px solid #232730',
          height: '64px',
        }}
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
          style={{ height: '64px' }}
        >
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5 select-none group"
            style={{ color: '#ffffff', textDecoration: 'none' }}
            aria-label="AZTRAX Home"
          >
            <Image
              src="/main_icon.png"
              alt="AZTRAX"
              width={28}
              height={28}
              className="object-contain transition-transform group-hover:scale-105"
              priority
            />
            <span
              style={{
                color: '#ffffff',
                fontSize: '1.15rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                fontFamily: "'Akira', var(--font-sans), sans-serif",
                lineHeight: 1,
              }}
            >
              aztrax
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-[13px] font-medium tracking-wider uppercase transition-colors duration-150 cursor-pointer"
                style={{
                  color: '#9aa0ac',
                  fontFamily: 'var(--font-sans)',
                  background: 'none',
                  border: 'none',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9aa0ac')}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick('#pilot')}
              className="hidden sm:inline-flex items-center justify-center font-medium tracking-wide transition-all duration-150 cursor-pointer"
              style={{
                background: '#f7f6f2',
                color: '#121417',
                fontSize: '0.8125rem',
                padding: '0.5rem 1.125rem',
                borderRadius: '2px',
                border: '1px solid #ffffff',
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0ea5e9';
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.borderColor = '#0ea5e9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#f7f6f2';
                e.currentTarget.style.color = '#121417';
                e.currentTarget.style.borderColor = '#ffffff';
              }}
            >
              Start a 30-day pilot →
            </button>

            <button
              className="lg:hidden flex items-center justify-center p-2 text-[#f7f6f2] cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              style={{ background: 'none', border: 'none' }}
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
          style={{ background: '#121417', paddingTop: '64px' }}
        >
          <nav
            className="flex flex-col gap-0 p-6"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left py-4 text-sm font-medium tracking-wider uppercase transition-colors duration-150"
                style={{
                  color: '#c2c7d0',
                  background: 'none',
                  border: 'none',
                  borderBottom: '1px solid #232730',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#pilot')}
              className="mt-6 font-semibold"
              style={{
                background: '#0ea5e9',
                color: '#ffffff',
                fontSize: '0.9375rem',
                padding: '0.875rem',
                borderRadius: '2px',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
                fontFamily: 'var(--font-sans)',
              }}
            >
              Start a 30-day pilot →
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
