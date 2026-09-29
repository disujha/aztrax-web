import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms of Use & Pilot Charter | AZTRAX',
  description: 'AZTRAX Industrial Asset Detection Terms of Use and Pilot Charter',
};

export default function TermsPage() {
  return (
    <div style={{ background: '#0C111A', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="az-container max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[#16B9E8] mb-8 hover:underline"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        <h1
          style={{
            color: '#F5F7F8',
            fontSize: '2.5rem',
            fontWeight: 800,
            marginBottom: '1rem',
          }}
        >
          Terms of Use &amp; Pilot Charter
        </h1>
        <p style={{ color: '#8A9AB0', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
          Last updated: September 2026
        </p>

        <div className="space-y-6 text-[#B8C4D0] text-sm leading-relaxed">
          <section>
            <h2 className="text-white text-lg font-bold mb-2">1. Pilot Validation Phase</h2>
            <p>
              AZTRAX hardware and software are currently provided under a structured pilot evaluation framework.
              Participation in an AZTRAX pilot does not constitute a guaranteed commercial service level agreement
              or long-term maintenance contract until formal commercial terms are executed.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-2">2. Hardware Ownership</h2>
            <p>
              All prototype tags, evaluation gateways, and test apparatus provided during a free pilot remain
              the exclusive property of AZTRAX. Upon conclusion of the pilot period, hardware shall either be
              returned in working order or transitioned to a commercial arrangement.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-2">3. Site Safety and Hazardous Areas</h2>
            <p>
              AZTRAX devices are strictly designated for approved non-hazardous industrial areas. Installation must
              adhere to customer site safety regulations. Customers shall not deploy prototype tags in classified
              explosive or hazardous atmospheres without explicit written authorization and certification.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-2">4. Contact Information</h2>
            <p>
              For legal inquiries or pilot contract agreements, please contact{' '}
              <a href="mailto:legal@aztrax.in" className="text-[#16B9E8] underline">
                legal@aztrax.in
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
