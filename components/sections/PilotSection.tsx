import React from 'react';
import { PilotForm } from './PilotForm';
import { CheckCircle, ShieldCheck, ArrowRight, Clock } from 'lucide-react';

const whatYouGet = [
  'AZTRAX prototype tags configured for your assets',
  'On-site or guided gateway placement',
  'Defined protected area boundary calibration',
  'Real-time movement and removal alerts',
  'Pilot monitoring and continuous RF diagnostics',
  'Structured end-of-pilot results review',
];

const whatWeAsk = [
  'Access to a suitable non-hazardous industrial test area',
  '1–2 weeks of operational field testing',
  'A named operational or site lead responsible for feedback',
  'Mutual agreement on measurable success criteria',
];

export function PilotSection() {
  return (
    <section id="pilot" className="az-section" style={{ background: '#0C111A' }}>
      <div className="az-container">
        {/* Section Header */}
        <div className="mb-4">
          <span className="az-badge">Validation Cohort</span>
        </div>
        <div className="max-w-3xl mb-12">
          <h2
            style={{
              color: '#F5F7F8',
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            Try AZTRAX <span style={{ color: '#16B9E8' }}>before you buy it.</span>
          </h2>
          <p style={{ color: '#8A9AB0', fontSize: '1.15rem', lineHeight: 1.7 }}>
            We are currently offering a limited number of free pilot deployments to industrial operators,
            EPC contractors, telecom O&amp;M teams, and equipment managers.
          </p>
        </div>

        {/* 2-Column Layout: Pilot Terms vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Pilot Terms & Deliverables */}
          <div className="lg:col-span-5 space-y-8">
            {/* What you get */}
            <div
              className="p-6 rounded-lg border"
              style={{
                background: '#101820',
                borderColor: 'rgba(22, 185, 232, 0.15)',
              }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <CheckCircle size={18} style={{ color: '#16B9E8' }} />
                <h3 style={{ color: '#F5F7F8', fontSize: '1.05rem', fontWeight: 700 }}>
                  What you get
                </h3>
              </div>
              <ul className="space-y-3">
                {whatYouGet.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#16B9E8',
                        marginTop: '8px',
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ color: '#B8C4D0', fontSize: '0.875rem', lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What we ask */}
            <div
              className="p-6 rounded-lg border"
              style={{
                background: '#101820',
                borderColor: 'rgba(255, 255, 255, 0.08)',
              }}
            >
              <div className="flex items-center gap-2.5 mb-4">
                <Clock size={18} style={{ color: '#8A9AB0' }} />
                <h3 style={{ color: '#F5F7F8', fontSize: '1.05rem', fontWeight: 700 }}>
                  What we ask
                </h3>
              </div>
              <ul className="space-y-3">
                {whatWeAsk.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#5A6E88',
                        marginTop: '8px',
                        flexShrink: 0,
                      }}
                    />
                    <span style={{ color: '#8A9AB0', fontSize: '0.875rem', lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What happens after */}
            <div
              className="p-6 rounded-lg border"
              style={{
                background: '#080C10',
                borderColor: 'rgba(22, 185, 232, 0.2)',
              }}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <ShieldCheck size={18} style={{ color: '#16B9E8' }} />
                <h3 style={{ color: '#F5F7F8', fontSize: '1.05rem', fontWeight: 700 }}>
                  What happens after
                </h3>
              </div>
              <p style={{ color: '#8A9AB0', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
                If AZTRAX solves a real problem on your site, we discuss the appropriate production deployment and commercial tag volume.
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold" style={{ color: '#16B9E8' }}>
                <span>• No pressure</span>
                <span>• No upfront payment</span>
                <span>• Clear measurable criteria</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive B2B Pilot Form */}
          <div className="lg:col-span-7">
            <PilotForm />
          </div>
        </div>
      </div>
    </section>
  );
}
