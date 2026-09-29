import React from 'react';
import Image from 'next/image';
import { Cpu, Radio, Globe } from 'lucide-react';

const components = [
  {
    id: 'tag',
    icon: Cpu,
    name: 'AZTRAX Tag',
    role: 'Attached to the asset',
    specs: [
      'Compact wireless device',
      'Motion and removal sensing',
      'Battery powered',
      'Designed for attachment to physical assets',
    ],
    note: 'One tag per asset. Low cost by design.',
  },
  {
    id: 'gateway',
    icon: Radio,
    name: 'AZTRAX Gateway',
    role: 'Defines the protected area',
    specs: [
      'Receives signals from registered tags',
      'Creates the protected-area boundary',
      'Connects events to the cloud or local network',
      'Supports site-level monitoring',
    ],
    note: 'One gateway can cover multiple assets across a defined area.',
  },
  {
    id: 'platform',
    icon: Globe,
    name: 'AZTRAX Platform',
    role: 'Detection and alert layer',
    specs: [
      'Event detection and classification',
      'Alerts to named responsible persons',
      'Asset identification',
      'Pilot analytics and reporting',
    ],
    note: 'Cloud-connected. Designed for simple deployment and operation.',
  },
];

export function TechnologySection() {
  return (
    <section
      className="az-section"
      style={{ background: '#0c111a' }}
    >
      <div className="az-container">
        <div className="mb-4">
          <span className="az-badge">Technology</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <h2
            style={{
              color: '#f5f7f8',
              fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            Simple hardware.{' '}
            <span style={{ color: '#16b9e8' }}>Useful signal.</span>
          </h2>
          <p
            style={{
              color: '#5a6e88',
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              alignSelf: 'end',
            }}
          >
            AZTRAX is not a complex system. The hardware is designed to do one thing
            reliably: detect when an asset moves when it shouldn't.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {components.map((comp) => {
            const Icon = comp.icon;
            return (
              <div
                key={comp.id}
                style={{
                  background: '#101820',
                  border: '1px solid rgba(22,185,232,0.12)',
                  borderRadius: '8px',
                  padding: '2rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    background: 'rgba(22,185,232,0.08)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem',
                    border: '1px solid rgba(22,185,232,0.15)',
                    overflow: 'hidden',
                  }}
                >
                  {comp.id === 'tag' ? (
                    <Image
                      src="/main_icon.png"
                      alt="AZTRAX Tag Hardware"
                      width={38}
                      height={38}
                      className="object-contain"
                    />
                  ) : (
                    <Icon size={22} style={{ color: '#16b9e8' }} />
                  )}
                </div>

                <h3
                  style={{
                    color: '#f5f7f8',
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    marginBottom: '0.25rem',
                  }}
                >
                  {comp.name}
                </h3>
                <p
                  style={{
                    color: '#16b9e8',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    marginBottom: '1.5rem',
                  }}
                >
                  {comp.role}
                </p>

                <ul className="flex flex-col gap-2.5 mb-4">
                  {comp.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-start gap-2.5"
                      style={{
                        color: '#8a9ab0',
                        fontSize: '0.875rem',
                        lineHeight: 1.5,
                      }}
                    >
                      <div
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: '50%',
                          background: '#16b9e8',
                          flexShrink: 0,
                          marginTop: '6px',
                          opacity: 0.6,
                        }}
                      />
                      {spec}
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(22,185,232,0.06)',
                    color: '#5a6e88',
                    fontSize: '0.8rem',
                    fontStyle: 'italic',
                    lineHeight: 1.5,
                  }}
                >
                  {comp.note}
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: '2.5rem',
            padding: '1.25rem 1.5rem',
            background: 'rgba(22,185,232,0.04)',
            border: '1px solid rgba(22,185,232,0.1)',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '1rem',
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#5a6e88', flexShrink: 0, marginTop: '7px' }} />
          <p
            style={{
              color: '#5a6e88',
              fontSize: '0.875rem',
              lineHeight: 1.6,
            }}
          >
            Technical specifications, RF details and integration documentation will be available
            for qualified pilot partners. The marketing site intentionally focuses on the operational
            use case rather than the underlying electronics.
          </p>
        </div>
      </div>
    </section>
  );
}
