'use client';

import React from 'react';
import { HardHat, Radio, Zap, Package, Factory, Bike } from 'lucide-react';

const useCases = [
  {
    id: 'epc-construction',
    icon: HardHat,
    title: 'EPC & Construction Equipment',
    tagline: 'Protect equipment between the work area and the gate.',
    description:
      'Expensive portable equipment on construction and EPC sites regularly disappears between shifts, during shutdown periods or in the course of normal site activity. When a welding machine, compressor or testing instrument goes missing, the discovery is often delayed until the next job requires it.',
    examples: ['Welding machines', 'Generators', 'Compressors', 'Specialised tools', 'Testing instruments'],
    cta: "If it is expensive, portable and shouldn't leave the site unnoticed, it may be a candidate for AZTRAX.",
    status: 'Priority pilot use case',
    statusColor: '#16b9e8',
  },
  {
    id: 'telecom',
    icon: Radio,
    title: 'Telecom Infrastructure',
    tagline: 'Detect removal of valuable equipment from remote sites.',
    description:
      'Telecom sites contain high-value equipment including radio units, batteries and related infrastructure. Many sites operate with minimal physical security and are visited only on scheduled maintenance cycles—meaning equipment removal may not be discovered until the next visit.',
    examples: ['Radio equipment', 'Site batteries', 'Tower equipment', 'Network hardware'],
    cta: 'A potential pilot application for telecom O&M operators and tower companies.',
    status: 'Pilot application being evaluated',
    statusColor: '#5a6e88',
  },
  {
    id: 'ev-charging',
    icon: Zap,
    title: 'EV Charging Infrastructure',
    tagline: 'Know when charging equipment is removed from its position.',
    description:
      'EV charging stations increasingly face removal of charging guns, cables and station equipment—particularly at unattended or lightly supervised locations. Replacement costs and customer disruption make early detection valuable.',
    examples: ['Charging guns', 'Removable cables', 'Selected station equipment'],
    cta: 'An early-stage pilot opportunity for EV charging operators.',
    status: 'Pilot opportunity under discussion',
    statusColor: '#5a6e88',
  },
  {
    id: 'warehouse',
    icon: Package,
    title: 'Warehouses & CFA Operations',
    tagline: 'Protect selected high-value reusable assets—not every SKU.',
    description:
      'Warehouse and CFA environments manage large quantities of goods using RFID, barcode systems and inventory management software. AZTRAX is not designed to replace these systems. It is designed to monitor a smaller set of assets—equipment cages, handling equipment, specialised tools—that are valuable, reusable and frequently at risk.',
    examples: ['Equipment cages', 'Handling equipment', 'Specialised tools', 'Valuable reusable assets'],
    cta: 'AZTRAX complements rather than replaces RFID, barcode and CCTV systems.',
    status: 'Pilot application being evaluated',
    statusColor: '#5a6e88',
  },
  {
    id: 'industrial',
    icon: Factory,
    title: 'Industrial & Facility Equipment',
    tagline: 'Detect unexpected movement of normally stationary equipment.',
    description:
      'Industrial facilities operate generators, pumps, compressors and specialised equipment that is expected to remain in position. Unexpected movement—even within the site—can indicate misuse, misplacement or removal. Early detection reduces disruption.',
    examples: ['Generators', 'Pumps', 'Compressors', 'Equipment cabinets', 'Mobile plant'],
    cta: 'For facility and plant managers who need to know when stationary equipment moves.',
    status: 'Pilot application being evaluated',
    statusColor: '#5a6e88',
  },
  {
    id: 'commuter-parking',
    icon: Bike,
    title: 'Commuter Bike Parking',
    tagline: 'Protect a parked motorcycle while its owner is away.',
    description:
      'A commuter parks a motorcycle in the morning and returns later. AZTRAX can potentially alert if the bike moves unexpectedly during the day. A potential distribution model: the parking operator hosts the gateway, the vehicle owner uses the tag.',
    examples: ['Motorcycles', 'Scooters', 'Parked two-wheelers'],
    cta: 'A secondary application. AZTRAX is an industrial system—this is one use case among several.',
    status: 'Secondary use case',
    statusColor: '#3a4e68',
  },
];

export function UseCases() {
  return (
    <section
      id="use-cases"
      className="az-section"
      style={{ background: '#101820' }}
    >
      <div className="az-container">
        <div className="mb-4">
          <span className="az-badge">Use Cases</span>
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
            Built for the assets{' '}
            <span style={{ color: '#16b9e8' }}>that matter.</span>
          </h2>
          <p
            style={{
              color: '#5a6e88',
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              alignSelf: 'end',
            }}
          >
            These are pilot applications and use cases we are currently exploring—not
            deployments we already have at scale. AZTRAX is in the validation phase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc) => {
            const Icon = uc.icon;
            return (
              <div
                key={uc.id}
                style={{
                  background: '#0c111a',
                  border: '1px solid rgba(22,185,232,0.1)',
                  borderRadius: '8px',
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = 'rgba(22,185,232,0.25)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = 'rgba(22,185,232,0.1)')
                }
              >
                {/* Icon + status row */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      background: 'rgba(22,185,232,0.08)',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={20} style={{ color: '#16b9e8' }} />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <div
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        background: uc.statusColor,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        color: uc.statusColor,
                        fontSize: '0.6rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {uc.status}
                    </span>
                  </div>
                </div>

                <h3
                  style={{
                    color: '#f5f7f8',
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                    marginBottom: '0.375rem',
                  }}
                >
                  {uc.title}
                </h3>
                <p
                  style={{
                    color: '#16b9e8',
                    fontSize: '0.8125rem',
                    marginBottom: '0.875rem',
                    lineHeight: 1.4,
                  }}
                >
                  {uc.tagline}
                </p>
                <p
                  style={{
                    color: '#8a9ab0',
                    fontSize: '0.875rem',
                    lineHeight: 1.65,
                    marginBottom: '1.25rem',
                    flex: 1,
                  }}
                >
                  {uc.description}
                </p>

                {/* Examples */}
                <div
                  style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(22,185,232,0.06)',
                    marginBottom: '1rem',
                  }}
                >
                  <div
                    style={{
                      color: '#3a4e68',
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      marginBottom: '0.625rem',
                    }}
                  >
                    Examples
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {uc.examples.map((ex) => (
                      <span
                        key={ex}
                        style={{
                          background: '#182030',
                          color: '#8a9ab0',
                          fontSize: '0.7rem',
                          padding: '0.2rem 0.5rem',
                          borderRadius: '3px',
                          border: '1px solid rgba(22,185,232,0.07)',
                        }}
                      >
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA note */}
                <p
                  style={{
                    color: '#5a6e88',
                    fontSize: '0.8rem',
                    lineHeight: 1.5,
                    fontStyle: 'italic',
                  }}
                >
                  {uc.cta}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
