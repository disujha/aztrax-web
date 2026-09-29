import React from 'react';

const assetExamples = [
  'Welding machine',
  'Generator',
  'Telecom equipment',
  'EV charging gun',
  'Specialised tool',
  'Equipment cage',
  'Compressor',
  'Testing instrument',
  'Parked motorcycle',
];

export function ProductConcept() {
  return (
    <section
      className="az-section"
      style={{ background: '#101820' }}
    >
      <div className="az-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <div className="mb-4">
              <span className="az-badge">Core Concept</span>
            </div>
            <h2
              style={{
                color: '#f5f7f8',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
                marginBottom: '1.5rem',
              }}
            >
              Protect the asset,{' '}
              <span style={{ color: '#16b9e8' }}>not the entire inventory.</span>
            </h2>

            <p
              style={{
                color: '#8a9ab0',
                fontSize: '1.0625rem',
                lineHeight: 1.75,
                marginBottom: '1.25rem',
              }}
            >
              You don&apos;t need to track everything.
            </p>

            <p
              style={{
                color: '#8a9ab0',
                fontSize: '1.0625rem',
                lineHeight: 1.75,
                marginBottom: '1.25rem',
              }}
            >
              AZTRAX is designed for the small number of assets that are expensive,
              portable, reusable, frequently exposed, and difficult to monitor continuously.
              A company doesn&apos;t need to put an active tag on every carton in a warehouse.
            </p>

            <p
              style={{
                color: '#8a9ab0',
                fontSize: '1.0625rem',
                lineHeight: 1.75,
              }}
            >
              Instead, a few tags on the assets that truly matter—the ones where
              unexpected movement could mean theft, misplacement, or an operational
              disruption—can provide an early warning that no other system offers.
            </p>

            <div
              style={{
                marginTop: '2rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(22,185,232,0.1)',
              }}
            >
              <blockquote
                style={{
                  color: '#16b9e8',
                  fontSize: '1.125rem',
                  fontWeight: 500,
                  fontStyle: 'italic',
                  lineHeight: 1.5,
                }}
              >
                &ldquo;You need to know when the valuable things move—not track everything.
                &rdquo;
              </blockquote>
            </div>
          </div>

          {/* Asset grid */}
          <div>
            <div
              style={{
                background: '#0c111a',
                border: '1px solid rgba(22,185,232,0.12)',
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
                  marginBottom: '1.25rem',
                }}
              >
                Examples of tagged assets
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {assetExamples.map((asset) => (
                  <div
                    key={asset}
                    style={{
                      background: '#182030',
                      border: '1px solid rgba(22,185,232,0.08)',
                      borderRadius: '6px',
                      padding: '0.75rem',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: '#16b9e8',
                        margin: '0 auto 0.5rem',
                        opacity: 0.7,
                      }}
                    />
                    <div style={{ color: '#b8c4d0', fontSize: '0.75rem', lineHeight: 1.4 }}>
                      {asset}
                    </div>
                  </div>
                ))}
              </div>

              <div
                style={{
                  marginTop: '1.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(22,185,232,0.06)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#16b9e8',
                    flexShrink: 0,
                    marginTop: '5px',
                  }}
                />
                <p style={{ color: '#5a6e88', fontSize: '0.8125rem', lineHeight: 1.6 }}>
                  If it is expensive, portable and shouldn&apos;t leave the site unnoticed,
                  it may be a candidate for AZTRAX.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
