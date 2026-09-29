import React from 'react';
import { Tag, Radio, Zap, Bell } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Tag,
    title: 'Tag',
    subtitle: 'Attach to the asset',
    description:
      'An AZTRAX tag is attached to the asset that needs protection. The tag is compact, battery-powered and designed for attachment to physical equipment, tools and infrastructure.',
    detail: 'Compact · Battery powered · Wireless',
  },
  {
    number: '02',
    icon: Radio,
    title: 'Define',
    subtitle: 'Establish the protected area',
    description:
      'The AZTRAX gateway is placed within or adjacent to the protected area. It creates the detection boundary and listens continuously for signals from registered tags.',
    detail: 'Site-level · Defined boundary · Always listening',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Detect',
    subtitle: 'System detects unexpected movement',
    description:
      'When a tagged asset moves unexpectedly—crossing the boundary of the protected area or being removed—the system detects the event based on signal changes at the gateway.',
    detail: 'Movement · Removal · Boundary crossing',
  },
  {
    number: '04',
    icon: Bell,
    title: 'Alert',
    subtitle: 'Responsible person is notified',
    description:
      'The responsible person receives an alert and can investigate immediately—while the event is still actionable rather than after the next scheduled inspection.',
    detail: 'Immediate · Named contact · Actionable',
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="az-section"
      style={{ background: '#f5f7f8' }}
    >
      <div className="az-container">
        <div className="mb-4">
          <span className="az-badge az-badge-light">How It Works</span>
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
            Four steps.
            <br />
            <span style={{ color: '#16b9e8' }}>One clear outcome.</span>
          </h2>
          <p
            style={{
              color: '#5a6e88',
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              alignSelf: 'end',
            }}
          >
            The AZTRAX system is designed to be straightforward. Tag the asset,
            define the area, let the system detect, and receive the alert.
          </p>
        </div>

        {/* Flow diagram */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0',
            marginBottom: '3rem',
            flexWrap: 'wrap',
          }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={step.number}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      background: '#101820',
                      border: '1px solid rgba(22,185,232,0.25)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={22} style={{ color: '#16b9e8' }} />
                  </div>
                  <span style={{ color: '#101820', fontSize: '0.8rem', fontWeight: 600 }}>{step.title}</span>
                </div>
                {idx < steps.length - 1 && (
                  <div
                    style={{
                      flex: 1,
                      minWidth: '2rem',
                      maxWidth: '4rem',
                      height: '1px',
                      background: 'linear-gradient(90deg, rgba(22,185,232,0.4), rgba(22,185,232,0.1))',
                      margin: '0 0.5rem',
                      marginBottom: '1.5rem',
                    }}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Step cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                style={{
                  background: '#ffffff',
                  border: '1px solid rgba(16,24,32,0.08)',
                  borderRadius: '8px',
                  padding: '1.75rem',
                  position: 'relative',
                }}
              >
                {/* Step number */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.25rem',
                    color: '#e0e6ec',
                    fontSize: '1.5rem',
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: 'rgba(22,185,232,0.08)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.25rem',
                  }}
                >
                  <Icon size={20} style={{ color: '#16b9e8' }} />
                </div>

                <h3
                  style={{
                    color: '#101820',
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                    marginBottom: '0.25rem',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    color: '#5a6e88',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.03em',
                    marginBottom: '0.875rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {step.subtitle}
                </p>
                <p
                  style={{
                    color: '#8a9ab0',
                    fontSize: '0.875rem',
                    lineHeight: 1.65,
                    marginBottom: '1rem',
                  }}
                >
                  {step.description}
                </p>
                <div
                  style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(16,24,32,0.06)',
                    color: '#16b9e8',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                  }}
                >
                  {step.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
