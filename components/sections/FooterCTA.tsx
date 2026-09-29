'use client';

import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';

export function FooterCTA() {
  const scrollToPilot = () => {
    const el = document.getElementById('pilot');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      style={{
        background: '#080C10',
        borderTop: '1px solid rgba(22, 185, 232, 0.15)',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="py-20 lg:py-28"
    >
      {/* Subtle background circuit / grid pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(22, 185, 232, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(22, 185, 232, 0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          pointerEvents: 'none',
        }}
      />

      <div className="az-container relative z-10 text-center max-w-3xl mx-auto">
        <span
          className="az-badge mb-6"
          style={{
            background: 'rgba(22, 185, 232, 0.08)',
            borderColor: 'rgba(22, 185, 232, 0.3)',
          }}
        >
          Industrial Pilot Opportunity
        </span>

        <h2
          style={{
            color: '#F5F7F8',
            fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
            fontWeight: 800,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}
        >
          Have an asset that shouldn&apos;t move{' '}
          <span style={{ color: '#16B9E8' }}>without someone knowing?</span>
        </h2>

        <p
          style={{
            color: '#8A9AB0',
            fontSize: '1.25rem',
            fontWeight: 500,
            marginBottom: '2.5rem',
          }}
        >
          Let&apos;s test it.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToPilot}
            className="w-full sm:w-auto font-semibold transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer"
            style={{
              background: '#16B9E8',
              color: '#080C10',
              fontSize: '0.95rem',
              padding: '0.875rem 2.25rem',
              borderRadius: '4px',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#4DCEF0')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#16B9E8')}
          >
            <span>Request a Free Pilot</span>
            <ArrowUpRight size={18} />
          </button>

          <a
            href="mailto:hello@aztrax.in"
            className="w-full sm:w-auto font-semibold transition-all duration-150 flex items-center justify-center gap-2"
            style={{
              background: 'transparent',
              color: '#F5F7F8',
              fontSize: '0.95rem',
              padding: '0.875rem 2rem',
              borderRadius: '4px',
              border: '1px solid rgba(245, 247, 248, 0.2)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(22, 185, 232, 0.5)';
              e.currentTarget.style.color = '#16B9E8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(245, 247, 248, 0.2)';
              e.currentTarget.style.color = '#F5F7F8';
            }}
          >
            <Mail size={16} />
            <span>Talk to AZTRAX</span>
          </a>
        </div>

        <p
          style={{
            color: '#5A6E88',
            fontSize: '0.8rem',
            marginTop: '2rem',
          }}
        >
          Pilot first. Measure the result. Decide what to deploy.
        </p>
      </div>
    </section>
  );
}
