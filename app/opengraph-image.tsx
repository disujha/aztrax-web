import { ImageResponse } from 'next/og';

export const alt = 'AZTRAX | Industrial Asset Movement & Removal Detection';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#080C10',
          padding: '60px 80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Subtle background grid pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'radial-gradient(circle at 80% 20%, rgba(22, 185, 232, 0.15) 0%, transparent 50%)',
          }}
        />

        {/* Top Header: Brand Emblem & Tagline */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Geometric Hexagon Shield Icon */}
            <svg width="48" height="48" viewBox="0 0 40 40" fill="none">
              <path
                d="M20 3L35 11.5V28.5L20 37L5 28.5V11.5L20 3Z"
                fill="#101820"
                stroke="#16B9E8"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />
              <path d="M12 21C13.8 17.5 26.2 17.5 28 21" stroke="#16B9E8" strokeWidth="2" strokeLinecap="round" />
              <circle cx="20" cy="24" r="3.5" fill="#16B9E8" />
            </svg>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#F5F7F8', fontSize: '32px', fontWeight: 900, letterSpacing: '0.14em' }}>AZTR</span>
              <span style={{ color: '#16B9E8', fontSize: '32px', fontWeight: 900, letterSpacing: '0.14em' }}>AX</span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid rgba(22, 185, 232, 0.4)',
              borderRadius: '4px',
              padding: '8px 16px',
              backgroundColor: 'rgba(22, 185, 232, 0.08)',
            }}
          >
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#16B9E8' }} />
            <span style={{ color: '#16B9E8', fontSize: '14px', fontWeight: 700, letterSpacing: '0.12em' }}>
              FREE INDUSTRIAL PILOT
            </span>
          </div>
        </div>

        {/* Center: Core Positioning Statement */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '900px' }}>
          <h1
            style={{
              color: '#F5F7F8',
              fontSize: '52px',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              margin: 0,
            }}
          >
            Know when something valuable moves <span style={{ color: '#16B9E8' }}>when it shouldn&apos;t.</span>
          </h1>
          <p
            style={{
              color: '#8A9AB0',
              fontSize: '22px',
              lineHeight: 1.5,
              margin: 0,
            }}
          >
            Wireless asset movement and removal detection for industrial sites, equipment yards, telecom infrastructure, and EV charging.
          </p>
        </div>

        {/* Bottom Status Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '24px',
          }}
        >
          <div style={{ display: 'flex', gap: '24px', color: '#5A6E88', fontSize: '15px', fontWeight: 600 }}>
            <span>• NOT A GPS TRACKER</span>
            <span>• LOW-COST WIRELESS TAGS</span>
            <span>• INSTANT MOVEMENT ALERTS</span>
          </div>
          <span style={{ color: '#16B9E8', fontSize: '16px', fontWeight: 700, fontFamily: 'monospace' }}>
            aztrax.in
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
