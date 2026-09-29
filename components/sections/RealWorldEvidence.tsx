'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';

const incidents = [
  {
    category: 'Telecom Equipment',
    categoryColor: '#16b9e8',
    headline: 'Repeated theft of radio and battery equipment from tower sites',
    detail:
      'Multiple Indian telecom operators and tower companies have reported theft of RRUs, batteries and related equipment from remote sites. The incidents are often discovered during scheduled maintenance visits—sometimes days after removal.',
    assetType: 'Radio units, tower batteries, telecom hardware',
    relevance:
      'High-value equipment at low-supervision sites. Discovery delayed until the next site visit.',
    question: 'Could removal detection provide an earlier warning than the next scheduled inspection?',
    source: 'Various public reports — The Hindu, Business Standard, Times of India',
    sourceUrl: 'https://www.business-standard.com/technology/tech-news',
  },
  {
    category: 'EV Charging Equipment',
    categoryColor: '#16b9e8',
    headline: 'Theft of EV charging cables and guns at public stations',
    detail:
      'Incidents of EV charging cable and gun theft have been reported at public charging locations across India and internationally. The cables contain copper and valuable components. Replacement disrupts service and adds cost.',
    assetType: 'Charging guns, cables, station accessories',
    relevance:
      'High replacement cost. Service disruption. Often unattended locations.',
    question: 'Can the removal of a charging gun from its cradle trigger an immediate alert?',
    source: 'EVSE industry reports, EV charging operator communications',
    sourceUrl: 'https://economictimes.indiatimes.com',
  },
  {
    category: 'Construction & EPC Equipment',
    categoryColor: '#16b9e8',
    headline: 'Generator and equipment theft from construction sites',
    detail:
      'Generator theft from construction sites, industrial yards and remote project locations is a persistent operational problem. Equipment is often valued at several lakhs of rupees. Discovery is typically delayed until a team arrives for the next shift or the equipment is needed.',
    assetType: 'Generators, welding machines, compressors, tools',
    relevance:
      'High asset value. Delayed discovery. Project cost and schedule impact.',
    question: 'Does earlier detection change the outcome compared to discovery at the next shift?',
    source: 'Construction industry associations, public police reports',
    sourceUrl: 'https://www.thehindu.com',
  },
  {
    category: 'Industrial Equipment',
    categoryColor: '#16b9e8',
    headline: 'Pump and equipment removal from facilities and yards',
    detail:
      'Industrial facilities report incidents of pump theft, equipment removal from secure yards and tool loss that is often attributed to internal or opportunistic theft. Manual inventory processes mean the gap between removal and discovery can be measured in days.',
    assetType: 'Pumps, motors, industrial tools, equipment components',
    relevance:
      'Production disruption. Discovery lag measured in days. High replacement cost.',
    question: 'Is there operational value in knowing about removal immediately rather than days later?',
    source: 'Industry safety reports, operations management publications',
    sourceUrl: 'https://www.business-standard.com',
  },
];

export function RealWorldEvidence() {
  return (
    <section
      className="az-section"
      style={{ background: '#f5f7f8' }}
    >
      <div className="az-container">
        <div className="mb-4">
          <span className="az-badge az-badge-light">Problem Evidence</span>
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
            These are not{' '}
            <span style={{ color: '#16b9e8' }}>theoretical problems.</span>
          </h2>
          <div style={{ alignSelf: 'end' }}>
            <p
              style={{
                color: '#5a6e88',
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                marginBottom: '0.75rem',
              }}
            >
              Publicly reported incidents demonstrate the type of problem AZTRAX is designed to investigate.
            </p>
            <p
              style={{
                color: '#8a9ab0',
                fontSize: '0.8125rem',
                fontStyle: 'italic',
              }}
            >
              Note: None of these incidents were prevented by AZTRAX. They are cited as
              evidence of the underlying operational problem.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {incidents.map((inc) => (
            <div
              key={inc.category}
              style={{
                background: '#ffffff',
                border: '1px solid rgba(16,24,32,0.08)',
                borderRadius: '8px',
                padding: '1.75rem',
                borderLeft: `3px solid ${inc.categoryColor}`,
              }}
            >
              {/* Category */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                  marginBottom: '1rem',
                }}
              >
                <div
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: inc.categoryColor,
                  }}
                />
                <span
                  style={{
                    color: '#3a4e68',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}
                >
                  {inc.category}
                </span>
              </div>

              <h3
                style={{
                  color: '#101820',
                  fontSize: '1rem',
                  fontWeight: 700,
                  lineHeight: 1.3,
                  marginBottom: '0.75rem',
                }}
              >
                {inc.headline}
              </h3>

              <p
                style={{
                  color: '#5a6e88',
                  fontSize: '0.875rem',
                  lineHeight: 1.65,
                  marginBottom: '1.25rem',
                }}
              >
                {inc.detail}
              </p>

              {/* Asset type */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(16,24,32,0.06)',
                  marginBottom: '1rem',
                }}
              >
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: '#8a9ab0', fontSize: '0.75rem', fontWeight: 600, minWidth: '80px' }}>Asset type:</span>
                  <span style={{ color: '#5a6e88', fontSize: '0.75rem' }}>{inc.assetType}</span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <span style={{ color: '#8a9ab0', fontSize: '0.75rem', fontWeight: 600, minWidth: '80px' }}>Why it matters:</span>
                  <span style={{ color: '#5a6e88', fontSize: '0.75rem' }}>{inc.relevance}</span>
                </div>
              </div>

              {/* Question */}
              <div
                style={{
                  background: 'rgba(22,185,232,0.05)',
                  border: '1px solid rgba(22,185,232,0.12)',
                  borderRadius: '4px',
                  padding: '0.75rem',
                  marginBottom: '1rem',
                }}
              >
                <p
                  style={{
                    color: '#16b9e8',
                    fontSize: '0.8125rem',
                    lineHeight: 1.5,
                    fontStyle: 'italic',
                  }}
                >
                  {inc.question}
                </p>
                <p
                  style={{
                    color: '#8a9ab0',
                    fontSize: '0.7rem',
                    marginTop: '0.375rem',
                  }}
                >
                  That is the question AZTRAX pilots are designed to test.
                </p>
              </div>

              {/* Source */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.375rem',
                }}
              >
                <ExternalLink size={11} style={{ color: '#8a9ab0', flexShrink: 0 }} />
                <a
                  href={inc.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#8a9ab0',
                    fontSize: '0.7rem',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#16b9e8')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#8a9ab0')}
                >
                  {inc.source}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
