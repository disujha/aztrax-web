'use client';

import React, { useState } from 'react';
import { AlertCircle, Radio, ShieldAlert } from 'lucide-react';

interface Scenario {
  id: string;
  title: string;
  environment: string;
  asset: string;
  tagPosition: string;
  alertText: string;
  alertColor: string;
  description: string;
  spec: {
    boundary: string;
    detectionTime: string;
    protocol: string;
  };
}

const scenarios: Scenario[] = [
  {
    id: 'welding-yard',
    title: 'Scenario 01: EPC Laydown Yard',
    environment: 'Industrial Fabrication & EPC Project Site',
    asset: 'Inverter Welding Power Source',
    tagPosition: 'Secured to chassis frame via industrial magnetic mount',
    alertText: 'Asset moved beyond designated zone',
    alertColor: '#16B9E8',
    description:
      'A portable multi-process welding machine is staged in Bay 4. Between shifts at 21:40, the asset is wheeled toward the perimeter fence. The tag detects displacement; the gateway logs the event before the unit reaches the outer boundary.',
    spec: {
      boundary: 'Bay 4 Workcell (40m radius)',
      detectionTime: '< 3 seconds',
      protocol: 'Continuous beacon + motion interrupt',
    },
  },
  {
    id: 'telecom-shelter',
    title: 'Scenario 02: Remote Telecom Tower',
    environment: 'Unmanned Tower Base Station & Shelter',
    asset: 'Remote Radio Unit (RRU) & Lithium Bank',
    tagPosition: 'Bracket tamper-detect tag fastened to backplane',
    alertText: 'Equipment removed from mount',
    alertColor: '#16B9E8',
    description:
      'An RRU fastened to the tower structure is detached. The AZTRAX tag identifies mechanical detachment and immediate signal attenuation from the site gateway, dispatching an immediate event to the regional O&M coordinator.',
    spec: {
      boundary: 'Shelter & Tower Gantry',
      detectionTime: 'Immediate on detachment',
      protocol: 'Tamper switch + RSSI gradient check',
    },
  },
  {
    id: 'ev-cables',
    title: 'Scenario 03: Public EV Charging Hub',
    environment: 'Highway Fast Charging Plaza',
    asset: 'High-Current Liquid-Cooled CCS2 Gun & Dispenser',
    tagPosition: 'Embedded collar tag on heavy cable junction',
    alertText: 'Charging gun removed after hours',
    alertColor: '#16B9E8',
    description:
      'At 02:15, a dispenser holster is tampered with and the cable assembly is cut or pulled off-cradle when no vehicle is authorised for charging. The gateway alerts the station operations dashboard while the incident is occurring.',
    spec: {
      boundary: 'Dispenser Bay Holster',
      detectionTime: '< 2 seconds',
      protocol: 'Holster proximity + 3-axis motion',
    },
  },
  {
    id: 'motorcycle-bay',
    title: 'Scenario 04: Commuter Transit Parking',
    environment: 'Commercial Transit Parking Yard',
    asset: 'Commuter Two-Wheeler / Fleet Vehicle',
    tagPosition: 'Concealed under-seat low-profile tag',
    alertText: 'Unexpected vehicle motion',
    alertColor: '#16B9E8',
    description:
      'A motorcycle parked for the day is rolled out of its designated parking aisle while the commuter is away. The site-level gateway triggers an alert to the parking management desk and notifies the vehicle owner.',
    spec: {
      boundary: 'Aisle C Staging Area',
      detectionTime: '< 4 seconds',
      protocol: 'Perimeter gateway boundary check',
    },
  },
];

export function IndustrialScenarios() {
  const [activeScenario, setActiveScenario] = useState<string>(scenarios[0].id);
  const current = scenarios.find((s) => s.id === activeScenario) || scenarios[0];

  return (
    <section className="az-section" style={{ background: '#0C111A' }}>
      <div className="az-container">
        {/* Header */}
        <div className="mb-4">
          <span className="az-badge">Field Operational Scenarios</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 items-end">
          <div>
            <h2
              style={{
                color: '#F5F7F8',
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 700,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Real operational scenarios.{' '}
              <span style={{ color: '#16B9E8' }}>Observed in practice.</span>
            </h2>
          </div>
          <p style={{ color: '#8A9AB0', fontSize: '1rem', lineHeight: 1.7 }}>
            AZTRAX is built specifically for assets that live in controlled physical environments.
            Explore how the tag and gateway respond across typical industrial site topologies.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
          {scenarios.map((s, idx) => {
            const isActive = s.id === activeScenario;
            return (
              <button
                key={s.id}
                onClick={() => setActiveScenario(s.id)}
                className="text-left p-3.5 rounded transition-all cursor-pointer"
                style={{
                  background: isActive ? '#101820' : '#080C10',
                  border: `1px solid ${isActive ? '#16B9E8' : 'rgba(255, 255, 255, 0.06)'}`,
                  borderLeft: `3px solid ${isActive ? '#16B9E8' : 'rgba(90, 110, 136, 0.3)'}`,
                }}
              >
                <div
                  style={{
                    color: isActive ? '#16B9E8' : '#5A6E88',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                  }}
                >
                  0{idx + 1} // CASE
                </div>
                <div
                  style={{
                    color: isActive ? '#F5F7F8' : '#8A9AB0',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {s.title.split(': ')[1]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Scenario Technical Visualisation Panel */}
        <div
          style={{
            background: '#101820',
            border: '1px solid rgba(22, 185, 232, 0.18)',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          {/* Top telemetry bar */}
          <div
            className="flex flex-wrap items-center justify-between px-6 py-3"
            style={{
              background: '#080C10',
              borderBottom: '1px solid rgba(22, 185, 232, 0.1)',
            }}
          >
            <div className="flex items-center gap-2">
              <span className="az-status-dot bg-[#16B9E8] animate-az-pulse" />
              <span style={{ color: '#8A9AB0', fontSize: '0.75rem', fontFamily: 'monospace' }}>
                MONITORING_CHANNEL: 2.4 GHz ISM / CH-11 // SITE_GW_ACTIVE
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span
                style={{
                  color: '#16B9E8',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                {current.environment}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 lg:p-8">
            {/* Left: Industrial Technical CAD / Circuit Wireframe Diagram */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div
                className="relative rounded border flex items-center justify-center p-6 min-h-[300px]"
                style={{
                  background: '#080C10',
                  borderColor: 'rgba(22, 185, 232, 0.12)',
                  backgroundImage:
                    'linear-gradient(rgba(22, 185, 232, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(22, 185, 232, 0.03) 1px, transparent 1px)',
                  backgroundSize: '32px 32px',
                }}
              >
                {/* SVG Technical Site Schematics */}
                <svg viewBox="0 0 520 280" className="w-full h-auto max-h-[260px]">
                  {/* Grid perimeter / Boundary Line */}
                  <rect
                    x="30"
                    y="30"
                    width="460"
                    height="220"
                    fill="none"
                    stroke="#182030"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <text x="36" y="48" fill="#3A4E68" fontSize="10" fontFamily="monospace" letterSpacing="0.1em">
                    DESIGNATED OPERATING PERIMETER // ZONE_01
                  </text>

                  {/* Gateway Station */}
                  <g transform="translate(420, 60)">
                    <rect x="-24" y="-24" width="48" height="48" rx="4" fill="#101820" stroke="#16B9E8" strokeWidth="1.5" />
                    <circle cx="0" cy="0" r="4" fill="#16B9E8" />
                    {/* Concentric radar rings */}
                    <circle cx="0" cy="0" r="16" stroke="#16B9E8" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
                    <circle cx="0" cy="0" r="32" stroke="#16B9E8" strokeWidth="1" strokeDasharray="3 3" opacity="0.2" />
                    <text x="-32" y="38" fill="#8A9AB0" fontSize="9" fontFamily="monospace" fontWeight="600">
                      AZTRAX GATEWAY
                    </text>
                  </g>

                  {/* Asset Original Position */}
                  <g transform="translate(140, 150)">
                    <rect x="-30" y="-30" width="60" height="60" rx="4" fill="#182030" stroke="#3A4E68" strokeWidth="1.5" />
                    <text x="-24" y="-36" fill="#5A6E88" fontSize="9" fontFamily="monospace">
                      RESTING_STATION
                    </text>
                    {/* Inner mechanical symbol */}
                    <line x1="-15" y1="0" x2="15" y2="0" stroke="#5A6E88" strokeWidth="2" />
                    <line x1="0" y1="-15" x2="0" y2="15" stroke="#5A6E88" strokeWidth="2" />
                  </g>

                  {/* Motion Trajectory Vector */}
                  <path
                    d="M 170 150 C 230 150, 270 210, 310 210"
                    fill="none"
                    stroke="#16B9E8"
                    strokeWidth="2"
                    strokeDasharray="6 4"
                  />
                  <polygon points="316,210 306,205 306,215" fill="#16B9E8" />

                  {/* Asset Current Detected Position */}
                  <g transform="translate(320, 210)">
                    <rect x="-32" y="-32" width="64" height="64" rx="4" fill="#101820" stroke="#16B9E8" strokeWidth="2" />
                    {/* Tag badge */}
                    <rect x="10" y="-26" width="18" height="18" rx="2" fill="#16B9E8" />
                    <circle cx="19" cy="-17" r="3" fill="#080C10" />
                    {/* Machinery wireframe */}
                    <rect x="-20" y="-12" width="40" height="24" rx="2" fill="#182030" stroke="#5A6E88" />
                    <circle cx="-10" cy="18" r="5" fill="#3A4E68" />
                    <circle cx="10" cy="18" r="5" fill="#3A4E68" />
                    <text x="-40" y="44" fill="#F5F7F8" fontSize="9.5" fontWeight="700" fontFamily="monospace">
                      TAGGED PHYSICAL ASSET
                    </text>
                  </g>

                  {/* Dynamic Alert Callout */}
                  <g transform="translate(230, 90)">
                    <rect x="0" y="0" width="180" height="34" rx="3" fill="#0C111A" stroke="#16B9E8" strokeWidth="1" />
                    <circle cx="16" cy="17" r="5" fill="#16B9E8" />
                    <text x="28" y="16" fill="#F5F7F8" fontSize="9" fontWeight="700" fontFamily="monospace">
                      MOTION_INTERRUPT_TRIGGER
                    </text>
                    <text x="28" y="27" fill="#16B9E8" fontSize="8" fontFamily="monospace">
                      {current.alertText.toUpperCase()}
                    </text>
                  </g>
                </svg>

                {/* Floating Alert Pill */}
                <div
                  className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded"
                  style={{
                    background: 'rgba(16, 24, 32, 0.95)',
                    border: '1px solid rgba(22, 185, 232, 0.4)',
                    backdropFilter: 'blur(4px)',
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <ShieldAlert size={18} style={{ color: '#16B9E8', flexShrink: 0 }} />
                    <span style={{ color: '#F5F7F8', fontSize: '0.85rem', fontWeight: 600 }}>
                      Event: <span style={{ color: '#16B9E8' }}>{current.alertText}</span>
                    </span>
                  </div>
                  <span
                    style={{
                      background: 'rgba(22, 185, 232, 0.15)',
                      color: '#16B9E8',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      padding: '2px 8px',
                      borderRadius: '2px',
                      fontFamily: 'monospace',
                    }}
                  >
                    STATUS: DISPATCHED
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Technical specifications and scenario details */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Radio size={14} style={{ color: '#16B9E8' }} />
                  <span style={{ color: '#5A6E88', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    Asset Profile & Mounting
                  </span>
                </div>
                <h3 style={{ color: '#F5F7F8', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>
                  {current.asset}
                </h3>
                <p style={{ color: '#8A9AB0', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {current.description}
                </p>

                {/* Specification Table */}
                <div
                  style={{
                    background: '#080C10',
                    borderRadius: '6px',
                    border: '1px solid rgba(22, 185, 232, 0.08)',
                    padding: '1.25rem',
                  }}
                >
                  <div className="space-y-3">
                    <div>
                      <div style={{ color: '#5A6E88', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Physical Attachment
                      </div>
                      <div style={{ color: '#B8C4D0', fontSize: '0.85rem', fontWeight: 500, marginTop: '2px' }}>
                        {current.tagPosition}
                      </div>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '10px' }}>
                      <div style={{ color: '#5A6E88', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Configured Boundary
                      </div>
                      <div style={{ color: '#B8C4D0', fontSize: '0.85rem', fontWeight: 500, marginTop: '2px' }}>
                        {current.spec.boundary}
                      </div>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '10px' }}>
                      <div style={{ color: '#5A6E88', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        Alert Latency
                      </div>
                      <div style={{ color: '#16B9E8', fontSize: '0.85rem', fontWeight: 600, marginTop: '2px', fontFamily: 'monospace' }}>
                        {current.spec.detectionTime}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom operational callout */}
              <div
                className="mt-6 p-3.5 rounded flex items-center gap-3"
                style={{
                  background: 'rgba(22, 185, 232, 0.04)',
                  border: '1px solid rgba(22, 185, 232, 0.1)',
                }}
              >
                <AlertCircle size={16} style={{ color: '#16B9E8', flexShrink: 0 }} />
                <span style={{ color: '#8A9AB0', fontSize: '0.75rem', lineHeight: 1.5 }}>
                  Notice: No GPS lock required. Detection operates purely through RF site-level presence and accelerometer interruption.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
