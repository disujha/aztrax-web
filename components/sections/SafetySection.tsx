import React from 'react';
import { ShieldCheck, AlertTriangle } from 'lucide-react';

export function SafetySection() {
  return (
    <section
      style={{ background: '#f5f7f8', paddingTop: '3.5rem', paddingBottom: '3.5rem' }}
    >
      <div className="az-container">
        <div
          style={{
            background: '#ffffff',
            border: '1px solid rgba(16,24,32,0.08)',
            borderRadius: '8px',
            padding: '2rem',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    background: 'rgba(22,185,232,0.08)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <ShieldCheck size={18} style={{ color: '#16b9e8' }} />
                </div>
                <h3
                  style={{
                    color: '#101820',
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                  }}
                >
                  Designed for controlled pilot environments
                </h3>
              </div>
              <p
                style={{
                  color: '#5a6e88',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                }}
              >
                Initial pilots are conducted only in areas approved by the customer
                and their safety team. We work within the customer&apos;s site access
                and safety protocols.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  style={{
                    width: 40,
                    height: 40,
                    background: 'rgba(212,160,32,0.08)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <AlertTriangle size={18} style={{ color: '#d4a020' }} />
                </div>
                <h3
                  style={{
                    color: '#101820',
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                  }}
                >
                  Non-hazardous areas only at this stage
                </h3>
              </div>
              <p
                style={{
                  color: '#5a6e88',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                }}
              >
                AZTRAX pilots are currently intended for suitable non-hazardous areas.
                Hazardous-area deployments require appropriate certification and site
                approval. We do not claim ATEX, IECEx or PESO certification at this
                stage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
