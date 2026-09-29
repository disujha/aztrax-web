import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PilotSection } from '@/components/redesign/PilotSection';

export const metadata = {
  title: 'Start a 30-Day Pilot | AZTRAX',
  description:
    'Evaluate Aztrax movement detection on your stationary or semi-stationary industrial assets. 10 assets, 1 gateway, 1 defined area, 30 days.',
};

export default function PilotPage() {
  return (
    <div className="bg-[#f7f6f2] min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#737a87] hover:text-[#121417] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back to Site Overview</span>
        </Link>
      </div>

      <PilotSection />
    </div>
  );
}
