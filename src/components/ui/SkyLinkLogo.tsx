import React from 'react';
import Link from 'next/link';

interface SkyLinkLogoProps {
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

export function SkyLinkLogo({
  variant = 'dark',
  showTagline = false,
  className = '',
  size = 'md',
  href = '/',
}: SkyLinkLogoProps) {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const subtitleSizes = {
    sm: 'text-[8px]',
    md: 'text-[9px]',
    lg: 'text-[11px]',
  };

  const content = (
    <div className={`flex items-center gap-2.5 group select-none ${className}`}>
      {/* Brand Icon Badge */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center rounded-lg shadow-sm transition-transform duration-300 group-hover:scale-105 ${
          isLight
            ? 'bg-white/10 ring-1 ring-white/20'
            : 'bg-gradient-to-br from-[#0A2540] to-[#0284C7] shadow-[#0284C7]/20 ring-1 ring-[#0284C7]/30'
        }`}
      >
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1.5"
        >
          {/* Globe Latitude & Longitude lines */}
          <circle
            cx="20"
            cy="20"
            r="16"
            stroke={isLight ? '#38BDF8' : '#38BDF8'}
            strokeWidth="1.75"
            strokeDasharray="2 2"
            opacity="0.6"
          />
          <ellipse
            cx="20"
            cy="20"
            rx="8"
            ry="16"
            stroke={isLight ? '#E0F2FE' : '#93C5FD'}
            strokeWidth="1.5"
            opacity="0.75"
          />
          {/* Aerodynamic Global Logistics Flight / Route Arc */}
          <path
            d="M6 26C12 12 28 8 34 16"
            stroke={isLight ? '#FFFFFF' : '#FFFFFF'}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Forward Arrow / Aircraft Node */}
          <polygon
            points="34,16 29,14 31,19"
            fill={isLight ? '#38BDF8' : '#38BDF8'}
          />
          {/* Central Connecting Node */}
          <circle cx="20" cy="20" r="3" fill={isLight ? '#38BDF8' : '#0284C7'} />
          <circle cx="20" cy="20" r="1.5" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline leading-none">
          <span
            className={`font-black tracking-tight ${titleSizes[size]} ${
              isLight ? 'text-white' : 'text-[#0A2540]'
            }`}
          >
            Sky<span className={isLight ? 'text-[#38BDF8]' : 'text-[#0284C7]'}>Link</span>
          </span>
        </div>
        <span
          className={`font-bold tracking-[0.22em] uppercase leading-none mt-1 ${subtitleSizes[size]} ${
            isLight ? 'text-neutral-300' : 'text-neutral-500'
          }`}
        >
          GLOBAL SERVICES
        </span>
        {showTagline && (
          <span
            className={`text-[9px] font-medium tracking-normal mt-0.5 ${
              isLight ? 'text-sky-200/80' : 'text-neutral-400'
            }`}
          >
            Connecting Markets. Delivering Opportunities.
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} aria-label="SkyLink Global Services Home">
        {content}
      </Link>
    );
  }

  return content;
}
