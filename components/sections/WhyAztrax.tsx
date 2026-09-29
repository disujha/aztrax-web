import React from 'react';
import { DollarSign, MapPin, Layers, FlaskConical } from 'lucide-react';

const reasons = [
  {
    icon: DollarSign,
    title: 'Low-cost enough to protect selected assets',
    description:
      'Instead of instrumenting an entire inventory, AZTRAX is designed to be economical enough to deploy on the specific assets that matter—the ones where unexpected movement creates real operational or financial impact.',
  },
  {
    icon: MapPin,
    title: 'No GPS required for the core use case',
    description:
      'The core AZTRAX use case is not real-time location tracking. It is detection of movement within or removal from a defined site. GPS is not required for this—and avoiding GPS keeps the system simpler and more cost-effective.',
  },
  {
    icon: Layers,
    title: 'Works alongside existing security',
    description:
      'CCTV, security guards, access control and inventory systems remain useful and are not replaced by AZTRAX. The system is designed to add a specific detection capability that the existing systems do not provide.',
  },
  {
    icon: FlaskConical,
    title: 'Pilot before committing',
    description:
      'AZTRAX is currently in the validation phase. Rather than asking operators to commit to a deployment, the approach is to run a structured pilot with measurable success criteria—and let the results determine whether a production deployment makes sense.',
  },
];

export function WhyAztrax() {
  return (
    <section
      className="az-section"
      style={{ background: '#f5f7f8' }}
    >
      <div className="az-container">
        <div className="mb-4">
          <span className="az-badge az-badge-light">Why AZTRAX</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <h2
            style={{
              color: '#101820',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            A different layer{' '}
            <span style={{ color: '#16b9e8' }}>of physical security.</span>
          </h2>
          <p
            style={{
              color: '#5a6e88',
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              alignSelf: 'end',
            }}
          >
            AZTRAX is not a replacement for what already works. It is designed to fill
            a specific gap—the one between scheduled inspections and real-time knowledge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(16,24,32,0.08)',
                  borderRadius: '8px',
                  padding: '2rem',
                  display: 'flex',
                  gap: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: '#0c111a',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} style={{ color: '#16b9e8' }} />
                </div>
                <div>
                  <h3
                    style={{
                      color: '#101820',
                      fontSize: '1.0625rem',
                      fontWeight: 700,
                      lineHeight: 1.3,
                      marginBottom: '0.625rem',
                    }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    style={{
                      color: '#5a6e88',
                      fontSize: '0.9rem',
                      lineHeight: 1.7,
                    }}
                  >
                    {reason.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
