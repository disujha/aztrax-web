import React from 'react';
import { Eye, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

const todayMethods = [
  'CCTV recording',
  'Security guards',
  'Manual registers',
  'Periodic inspections',
  'Gate checks',
  'Inventory reconciliation',
];

const aztraxCapabilities = [
  { label: 'Movement detected', icon: AlertTriangle },
  { label: 'Removal detected', icon: AlertTriangle },
  { label: 'Alert generated', icon: CheckCircle },
  { label: 'Action can begin immediately', icon: Clock },
];

export function ProblemSection() {
  return (
    <section
      id="solutions"
      className="az-section"
      style={{ background: '#f5f7f8' }}
    >
      <div className="az-container">
        {/* Section label */}
        <div className="mb-4">
          <span className="az-badge az-badge-light">The Problem</span>
        </div>

        {/* Heading */}
        <h2
          style={{
            color: '#101820',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            maxWidth: '680px',
            marginBottom: '1rem',
          }}
        >
          Security often tells you{' '}
          <span style={{ color: '#16b9e8' }}>what happened.</span>
          <br />
          AZTRAX tells you{' '}
          <span style={{ color: '#101820' }}>when it happens.</span>
        </h2>

        <p
          style={{
            color: '#5a6e88',
            fontSize: '1.0625rem',
            lineHeight: 1.7,
            maxWidth: '600px',
            marginBottom: '4rem',
          }}
        >
          Valuable physical assets in industrial environments are typically protected
          by security systems designed to record and report. They are excellent at
          documenting what happened. AZTRAX is designed to add a simple,
          low-cost detection layer—one that can trigger an alert at the moment
          something moves rather than after the next inspection.
        </p>

        {/* Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Today column */}
          <div
            style={{
              background: '#ffffff',
              border: '1px solid rgba(16,24,32,0.08)',
              borderRadius: '8px',
              padding: '2rem',
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '4px',
                  background: '#e7ebee',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Eye size={16} style={{ color: '#5a6e88' }} />
              </div>
              <div>
                <div style={{ color: '#3a4e68', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Today</div>
                <div style={{ color: '#101820', fontSize: '1rem', fontWeight: 600 }}>After-the-fact methods</div>
              </div>
            </div>

            <ul className="flex flex-col gap-3">
              {todayMethods.map((method) => (
                <li
                  key={method}
                  className="flex items-center gap-3"
                  style={{
                    color: '#5a6e88',
                    fontSize: '0.9375rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid rgba(16,24,32,0.05)',
                  }}
                >
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#c8d0d8', flexShrink: 0 }} />
                  {method}
                </li>
              ))}
            </ul>

            <p
              style={{
                color: '#8a9ab0',
                fontSize: '0.8125rem',
                lineHeight: 1.6,
                marginTop: '1.25rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(16,24,32,0.06)',
              }}
            >
              These methods can identify a loss after it has occurred. The asset is gone
              before anyone is notified.
            </p>
          </div>

          {/* AZTRAX column */}
          <div
            style={{
              background: '#101820',
              border: '1px solid rgba(22,185,232,0.2)',
              borderRadius: '8px',
              padding: '2rem',
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '4px',
                  background: 'rgba(22,185,232,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span style={{ color: '#16b9e8', fontSize: '0.875rem', fontWeight: 700 }}>AX</span>
              </div>
              <div>
                <div style={{ color: '#16b9e8', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>AZTRAX adds</div>
                <div style={{ color: '#f5f7f8', fontSize: '1rem', fontWeight: 600 }}>Real-time detection layer</div>
              </div>
            </div>

            <ul className="flex flex-col gap-3">
              {aztraxCapabilities.map(({ label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3"
                  style={{
                    color: '#b8c4d0',
                    fontSize: '0.9375rem',
                    paddingBottom: '0.75rem',
                    borderBottom: '1px solid rgba(22,185,232,0.08)',
                  }}
                >
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#16b9e8', flexShrink: 0 }} />
                  {label}
                </li>
              ))}
            </ul>

            <p
              style={{
                color: '#5a6e88',
                fontSize: '0.8125rem',
                lineHeight: 1.6,
                marginTop: '1.25rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(22,185,232,0.06)',
              }}
            >
              AZTRAX is not a replacement for CCTV or guards. It is designed as an
              additional detection layer—the one that acts before the next inspection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
