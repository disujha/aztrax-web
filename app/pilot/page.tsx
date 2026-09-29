import React from 'react';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Shield, Calendar, Target, FileText } from 'lucide-react';
import { PilotForm } from '@/components/sections/PilotForm';
import { SuccessCriteria } from '@/components/sections/SuccessCriteria';

export const metadata = {
  title: 'Request a Free Pilot | AZTRAX',
  description:
    'Evaluate AZTRAX on your high-value physical assets. We offer free pilot deployments to qualified industrial operators, EPC contractors, and telecom teams.',
};

export default function PilotPage() {
  return (
    <div style={{ background: '#0C111A', minHeight: '100vh', paddingTop: '90px' }}>
      {/* Top Banner */}
      <div className="az-container py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#16B9E8] mb-6 hover:underline"
        >
          <ArrowLeft size={16} />
          <span>Back to Overview</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Pilot Terms & Deliverables */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="az-badge mb-3">Validation Cohort</span>
              <h1
                style={{
                  color: '#F5F7F8',
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                }}
              >
                Request a Free <span style={{ color: '#16B9E8' }}>AZTRAX Pilot.</span>
              </h1>
              <p style={{ color: '#8A9AB0', fontSize: '1rem', lineHeight: 1.65 }}>
                We are currently validating our wireless asset movement and removal detection system on selected
                industrial sites, equipment yards, and telecom installations.
              </p>
            </div>

            {/* Quick Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div
                className="p-4 rounded border"
                style={{ background: '#101820', borderColor: 'rgba(22, 185, 232, 0.15)' }}
              >
                <Calendar size={18} style={{ color: '#16B9E8', marginBottom: '8px' }} />
                <div style={{ color: '#F5F7F8', fontSize: '0.85rem', fontWeight: 700 }}>1–2 Weeks</div>
                <div style={{ color: '#8A9AB0', fontSize: '0.75rem', marginTop: '2px' }}>
                  Target testing duration on your active site
                </div>
              </div>

              <div
                className="p-4 rounded border"
                style={{ background: '#101820', borderColor: 'rgba(22, 185, 232, 0.15)' }}
              >
                <Shield size={18} style={{ color: '#16B9E8', marginBottom: '8px' }} />
                <div style={{ color: '#F5F7F8', fontSize: '0.85rem', fontWeight: 700 }}>Zero Cost</div>
                <div style={{ color: '#8A9AB0', fontSize: '0.75rem', marginTop: '2px' }}>
                  Hardware and setup provided free during validation
                </div>
              </div>
            </div>

            {/* What you receive */}
            <div
              className="p-5 rounded-lg border"
              style={{ background: '#101820', borderColor: 'rgba(255, 255, 255, 0.08)' }}
            >
              <h3 style={{ color: '#F5F7F8', fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                Included in Your Pilot Package
              </h3>
              <ul className="space-y-2 text-sm text-[#8A9AB0]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} style={{ color: '#16B9E8', flexShrink: 0 }} />
                  <span>Evaluation tags configured for your high-value equipment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} style={{ color: '#16B9E8', flexShrink: 0 }} />
                  <span>On-site or guided gateway placement for protected zone</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} style={{ color: '#16B9E8', flexShrink: 0 }} />
                  <span>Real-time movement and boundary crossing alert routing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} style={{ color: '#16B9E8', flexShrink: 0 }} />
                  <span>End-of-pilot quantitative performance data review</span>
                </li>
              </ul>
            </div>

            {/* Note on non-hazardous areas */}
            <div
              className="p-4 rounded text-xs"
              style={{
                background: 'rgba(212, 160, 32, 0.08)',
                border: '1px solid rgba(212, 160, 32, 0.25)',
                color: '#D4A020',
                lineHeight: 1.5,
              }}
            >
              <strong>Safety Boundary:</strong> Initial pilots must be conducted in customer-approved non-hazardous
              zones. Deployments requiring hazardous-area certification (ATEX/PESO) will be addressed in future phases.
            </div>
          </div>

          {/* Right Column: Embedded Pilot Application Form */}
          <div className="lg:col-span-7">
            <PilotForm />
          </div>
        </div>
      </div>

      {/* Embedded Success Criteria Section */}
      <div className="mt-12 border-t border-[rgba(255,255,255,0.06)]">
        <SuccessCriteria />
      </div>
    </div>
  );
}
