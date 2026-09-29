import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | AZTRAX',
  description: 'AZTRAX Industrial Asset Detection Privacy Policy',
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p style={{ color: '#8A9AB0', fontSize: '0.9rem', marginBottom: '2.5rem' }}>
          Last updated: September 2026
        </p>

        <div className="space-y-6 text-[#B8C4D0] text-sm leading-relaxed">
          <section>
            <h2 className="text-white text-lg font-bold mb-2">1. Industrial Pilot Information</h2>
            <p>
              AZTRAX collects business contact and site operational parameters submitted voluntarily via our
              Free Pilot Application form. This includes names, work email addresses, corporate telephone numbers,
              and site operational descriptions. We do not sell or rent this data to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-2">2. Telemetry and RF Detection Data</h2>
            <p>
              During authorized site pilots, AZTRAX gateways process localized radio-frequency beacons,
              accelerometer status packets, and signal strength (RSSI) metrics emitted by AZTRAX hardware tags.
              This telemetry is utilized solely to calibrate detection thresholds and evaluate movement alerts.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-2">3. Non-Tracking Architecture</h2>
            <p>
              AZTRAX devices do not incorporate global GPS tracking coordinates for consumer monitoring. All data is
              scoped to defined site-level industrial parameters agreed upon in the pilot charter.
            </p>
          </section>

          <section>
            <h2 className="text-white text-lg font-bold mb-2">4. Contact</h2>
            <p>
              Questions regarding privacy practices or pilot data governance may be addressed to{' '}
              <a href="mailto:privacy@aztrax.in" className="text-[#16B9E8] underline">
                privacy@aztrax.in
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
