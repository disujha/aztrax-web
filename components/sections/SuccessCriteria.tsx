import React from 'react';
import { Target, Timer, BellOff, BatteryCharging, Radio, Workflow } from 'lucide-react';

const criteriaList = [
  {
    icon: Target,
    title: 'Detection Reliability',
    question: 'How often does the system detect a staged movement?',
    metric: 'Target: > 98% detection on physical displacement beyond boundary',
    description:
      'We run controlled physical movement trials with site personnel to establish true positive trigger performance in real industrial RF environments.',
  },
  {
    icon: Timer,
    title: 'Alert Latency',
    question: 'How quickly does the alert reach the responsible person?',
    metric: 'Target: < 5-10 seconds from physical displacement to notification',
    description:
      'Alert speed determines whether action can be taken while the asset is still on-site, rather than hours or shifts later.',
  },
  {
    icon: BellOff,
    title: 'False Alert Suppression',
    question: 'How often does normal baseline activity trigger unwanted alerts?',
    metric: 'Target: Minimal nuisance alerts during normal operating vibrations',
    description:
      'Industrial assets experience vibration, engine idle, and routine nearby activity. We tune filtering thresholds during the pilot to eliminate noise.',
  },
  {
    icon: BatteryCharging,
    title: 'Battery Performance',
    question: 'How long does the tag operate under the pilot conditions?',
    metric: 'Target: Multi-month / multi-year autonomous tag lifespan validation',
    description:
      'We verify power consumption under site temperature conditions and broadcast intervals so operators do not face frequent battery swap overhead.',
  },
  {
    icon: Radio,
    title: 'RF Coverage & Penetration',
    question: 'Does the gateway reliably hear the tag across the protected area?',
    metric: 'Target: Consistent link margin through structural steel, equipment & fencing',
    description:
      'Industrial yards are dense with metallic structures. We measure RSSI and packet delivery across the perimeter boundary.',
  },
  {
    icon: Workflow,
    title: 'Operational Fit',
    question: 'Does the system integrate into the customer’s daily workflow?',
    metric: 'Target: Zero friction for regular site operations and gate personnel',
    description:
      'A system that creates administrative burden will be abandoned. We evaluate how site heads, stores managers, and safety staff interact with alerts.',
  },
];

export function SuccessCriteria() {
  return (
    <section className="az-section" style={{ background: '#F5F7F8' }}>
      <div className="az-container">
        {/* Badge & Heading */}
        <div className="mb-4">
          <span className="az-badge az-badge-light">Pilot Methodology</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 items-end">
          <div>
            <h2
              style={{
                color: '#101820',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              A pilot should produce evidence,{' '}
              <span style={{ color: '#16B9E8' }}>not just excitement.</span>
            </h2>
          </div>
          <p style={{ color: '#5A6E88', fontSize: '1.05rem', lineHeight: 1.7 }}>
            Because AZTRAX is in its validation phase, every pilot is treated as a rigorous technical test.
            We agree on measurable criteria before deployment and evaluate the data transparently together.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criteriaList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                style={{
                  background: '#FFFFFF',
                  border: '1px solid rgba(16, 24, 32, 0.08)',
                  borderRadius: '8px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '6px',
                        background: 'rgba(22, 185, 232, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Icon size={20} style={{ color: '#16B9E8' }} />
                    </div>
                    <span
                      style={{
                        fontFamily: 'monospace',
                        color: '#8A9AB0',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                      }}
                    >
                      0{idx + 1}
                    </span>
                  </div>

                  <h3
                    style={{
                      color: '#101820',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      marginBottom: '0.35rem',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      color: '#16B9E8',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      marginBottom: '0.75rem',
                      lineHeight: 1.4,
                    }}
                  >
                    {item.question}
                  </p>

                  <p
                    style={{
                      color: '#5A6E88',
                      fontSize: '0.875rem',
                      lineHeight: 1.6,
                      marginBottom: '1.25rem',
                    }}
                  >
                    {item.description}
                  </p>
                </div>

                <div
                  style={{
                    background: '#F5F7F8',
                    border: '1px solid rgba(16, 24, 32, 0.06)',
                    borderRadius: '4px',
                    padding: '0.6rem 0.75rem',
                  }}
                >
                  <span
                    style={{
                      color: '#3A4E68',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      fontFamily: 'monospace',
                    }}
                  >
                    {item.metric}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note on pilot qualification */}
        <div
          className="mt-8 p-4 rounded text-center"
          style={{
            background: '#FFFFFF',
            border: '1px solid rgba(16, 24, 32, 0.08)',
          }}
        >
          <span style={{ color: '#5A6E88', fontSize: '0.85rem' }}>
            If the pilot meets these criteria and proves its operational value on your site, we discuss a commercial rollout.
            If it does not, you owe nothing and we take our hardware back.
          </span>
        </div>
      </div>
    </section>
  );
}
