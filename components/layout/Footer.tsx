'use client';

import React from 'react';
import { Radio, Shield, Zap } from 'lucide-react';
import { AztraxLogo } from '@/components/ui/AztraxLogo';

const footerLinks = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pilot Programme', href: '#pilot' },
  { label: 'About AZTRAX', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
];

const capabilities = [
  { icon: Radio, label: 'Wireless Detection' },
  { icon: Shield, label: 'Asset Protection' },
  { icon: Zap, label: 'Instant Alerts' },
];

export function Footer() {
  return (
    <footer
      style={{
        background: '#060810',
        borderTop: '1px solid rgba(22,185,232,0.1)',
      }}
    >
      {/* Main footer grid */}
      <div className="az-container" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand column */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <AztraxLogo size="md" showSubtitle={false} />
            </div>
            <p style={{ color: '#5a6e88', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Industrial Asset Movement &amp; Removal Detection
            </p>
            <p style={{ color: '#8a9ab0', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '280px' }}>
              A low-cost wireless detection system designed for industrial operators,
              contractors and asset owners who need to know when something moves when it shouldn&apos;t.
            </p>

            <div className="flex flex-col gap-2 mt-6">
              {capabilities.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon size={12} style={{ color: '#16b9e8' }} />
                  <span style={{ color: '#5a6e88', fontSize: '0.75rem', letterSpacing: '0.05em' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links column */}
          <div>
            <h4 style={{ color: '#f5f7f8', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    style={{ color: '#5a6e88', fontSize: '0.875rem', transition: 'color 0.15s', textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#16b9e8')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#5a6e88')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pilot CTA column */}
          <div>
            <h4 style={{ color: '#f5f7f8', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Start a Pilot
            </h4>
            <p style={{ color: '#8a9ab0', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              We are currently offering a limited number of free pilot deployments
              to industrial operators and contractors.
            </p>
            <a
              href="#pilot"
              className="inline-flex items-center justify-center font-semibold transition-all duration-150"
              style={{
                background: '#16b9e8',
                color: '#060810',
                fontSize: '0.8125rem',
                padding: '0.625rem 1.25rem',
                borderRadius: '4px',
                textDecoration: 'none',
                display: 'inline-block',
                marginBottom: '1rem',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#4dcef0')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#16b9e8')}
            >
              Request a Free Pilot
            </a>
            <div style={{ marginTop: '0.75rem' }}>
              <a
                href="mailto:hello@aztrax.in"
                style={{ color: '#5a6e88', fontSize: '0.8125rem', transition: 'color 0.15s', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#16b9e8')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#5a6e88')}
              >
                hello@aztrax.in
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: '1px solid rgba(22,185,232,0.06)',
          paddingTop: '1.25rem',
          paddingBottom: '1.25rem',
        }}
      >
        <div className="az-container flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ color: '#3a4e68', fontSize: '0.75rem' }}>
            &copy; {new Date().getFullYear()} AZTRAX. All rights reserved.
          </p>
          <p style={{ color: '#2a3a50', fontSize: '0.7rem', letterSpacing: '0.05em' }}>
            Pilot-stage product &middot; Currently under development and validation
          </p>
        </div>
      </div>
    </footer>
  );
}
