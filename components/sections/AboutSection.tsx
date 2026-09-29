import React from 'react';

export function AboutSection() {
  return (
    <section
      id="about"
      className="az-section"
      style={{ background: '#101820' }}
    >
      <div className="az-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="mb-4">
              <span className="az-badge">About AZTRAX</span>
            </div>
            <h2
              style={{
                color: '#f5f7f8',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '2rem',
              }}
            >
              Built from a{' '}
              <span style={{ color: '#16b9e8' }}>simple observation.</span>
            </h2>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <p
                style={{
                  color: '#8a9ab0',
                  fontSize: '1.0625rem',
                  lineHeight: 1.75,
                }}
              >
                Valuable physical assets are often protected by layers of security
                that are excellent at recording what happened—but not necessarily
                at telling someone when something starts moving.
              </p>
              <p
                style={{
                  color: '#8a9ab0',
                  fontSize: '1.0625rem',
                  lineHeight: 1.75,
                }}
              >
                AZTRAX is being developed as a practical, low-cost detection layer
                for selected physical assets in industrial, telecom, EV charging
                and controlled environments.
              </p>
              <p
                style={{
                  color: '#8a9ab0',
                  fontSize: '1.0625rem',
                  lineHeight: 1.75,
                }}
              >
                We are currently validating the product with industrial operators,
                contractors and asset owners. This early-stage status is not
                something we hide—it is the reason we are offering structured
                pilots rather than asking for purchase commitments.
              </p>
            </div>
          </div>

          {/* Status card */}
          <div>
            <div
              style={{
                background: '#0c111a',
                border: '1px solid rgba(22,185,232,0.15)',
                borderRadius: '8px',
                padding: '2rem',
              }}
            >
              <div
                style={{
                  color: '#3a4e68',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '1.5rem',
                }}
              >
                Current status
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                {[
                  { label: 'Product stage', value: 'Prototype and pilot-ready', highlight: false },
                  { label: 'Deployment', value: 'Pilot deployments only—not yet at commercial scale', highlight: false },
                  { label: 'Target sectors', value: 'EPC, Telecom, EV Charging, Warehousing, Facilities', highlight: false },
                  { label: 'Pilot approach', value: 'Free pilot. Structured success criteria. No upfront commitment.', highlight: true },
                ].map(({ label, value, highlight }) => (
                  <div
                    key={label}
                    style={{
                      paddingBottom: '1.25rem',
                      borderBottom: '1px solid rgba(22,185,232,0.06)',
                    }}
                  >
                    <div
                      style={{
                        color: '#3a4e68',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginBottom: '0.375rem',
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        color: highlight ? '#16b9e8' : '#b8c4d0',
                        fontSize: '0.9375rem',
                        lineHeight: 1.5,
                      }}
                    >
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: '1.5rem',
                  padding: '1rem',
                  background: 'rgba(22,185,232,0.05)',
                  borderRadius: '6px',
                  border: '1px solid rgba(22,185,232,0.1)',
                }}
              >
                <p style={{ color: '#8a9ab0', fontSize: '0.8125rem', lineHeight: 1.6, fontStyle: 'italic' }}>
                  Making the early-stage status visible builds credibility rather than
                  weakening it. We are not claiming what we have not yet demonstrated.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
