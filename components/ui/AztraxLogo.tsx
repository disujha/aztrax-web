import React from 'react';
import Image from 'next/image';

interface AztraxLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'image' | 'vector' | 'icon';
  showSubtitle?: boolean;
}

export function AztraxLogo({
  className = '',
  size = 'md',
  variant = 'image',
  showSubtitle = true,
}: AztraxLogoProps) {
  // If variant is icon-only (using main_icon.png)
  if (variant === 'icon') {
    const dim = size === 'sm' ? 28 : size === 'md' ? 36 : 48;
    return (
      <div className={`relative flex items-center justify-center flex-shrink-0 select-none ${className}`}>
        <Image
          src="/main_icon.png"
          alt="AZTRAX Icon"
          width={dim}
          height={dim}
          className="object-contain"
          priority
        />
      </div>
    );
  }

  // If variant is the official rectangle text plus icon image (aztrax_icon_256.png)
  if (variant === 'image') {
    // 256x57 aspect ratio is approx 4.49:1
    const dims = {
      sm: { width: 140, height: 31 },
      md: { width: 165, height: 37 },
      lg: { width: 215, height: 48 },
    };

    const currentDim = dims[size];

    return (
      <div className={`flex items-center select-none ${className}`}>
        <Image
          src="/aztrax_icon_256.png"
          alt="AZTRAX Industrial Wireless Asset Detection"
          width={currentDim.width}
          height={currentDim.height}
          className="object-contain"
          priority
        />
      </div>
    );
  }

  // Fallback vector mode
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Geometric Industrial Emblem */}
      <svg
        width={size === 'sm' ? '28' : size === 'md' ? '34' : '44'}
        height={size === 'sm' ? '28' : size === 'md' ? '34' : '44'}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          d="M20 3L35 11.5V28.5L20 37L5 28.5V11.5L20 3Z"
          fill="#101820"
          stroke="#16B9E8"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M12 21C13.8 17.5 26.2 17.5 28 21"
          stroke="#16B9E8"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.8"
        />
        <path
          d="M8 17C11.5 13 28.5 13 32 17"
          stroke="#16B9E8"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.4"
        />
        <circle cx="20" cy="24" r="3" fill="#16B9E8" />
        <circle cx="20" cy="24" r="5.5" stroke="#16B9E8" strokeWidth="0.8" strokeDasharray="1.5 1.5" />
      </svg>

      <div className="flex flex-col justify-center">
        <div className="flex items-center leading-none">
          <span
            style={{
              color: '#F5F7F8',
              fontSize: size === 'sm' ? '1.1rem' : size === 'md' ? '1.35rem' : '1.75rem',
              fontWeight: 900,
              letterSpacing: '0.14em',
            }}
          >
            AZTR
          </span>
          <span
            style={{
              color: '#16B9E8',
              fontSize: size === 'sm' ? '1.1rem' : size === 'md' ? '1.35rem' : '1.75rem',
              fontWeight: 900,
              letterSpacing: '0.14em',
            }}
          >
            AX
          </span>
          <span
            style={{
              display: 'inline-block',
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              backgroundColor: '#16B9E8',
              marginLeft: '3px',
              marginBottom: size === 'sm' ? '7px' : '9px',
            }}
          />
        </div>
        {showSubtitle && size !== 'sm' && (
          <span
            style={{
              color: '#5A6E88',
              fontSize: '0.55rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginTop: '2px',
            }}
          >
            WIRELESS ASSET DETECTION
          </span>
        )}
      </div>
    </div>
  );
}
