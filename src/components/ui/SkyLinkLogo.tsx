import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export interface SkyLinkLogoProps {
  variant?: 'light' | 'dark';
  showTagline?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'navbar' | 'footer';
  href?: string;
  priority?: boolean;
}

export function SkyLinkLogo({
  variant = 'dark',
  className = '',
  size = 'navbar',
  href = '/',
  priority = true,
}: SkyLinkLogoProps) {
  const isLight = variant === 'light';

  // Responsive sizing ensuring the logo is prominent, perfectly proportioned, and fits cleanly in the navbar
  const sizeClasses = {
    sm: 'h-10 sm:h-12 w-auto max-h-12',
    md: 'h-12 sm:h-14 md:h-16 w-auto max-h-16',
    lg: 'h-20 sm:h-24 md:h-28 w-auto max-h-28',
    xl: 'h-28 sm:h-36 md:h-44 w-auto max-h-44',
    navbar: 'h-14 sm:h-16 md:h-[62px] lg:h-[66px] w-auto max-h-[66px]',
    footer: 'h-12 sm:h-14 md:h-16 w-auto max-h-[64px]',
  };

  const selectedSizeClass = sizeClasses[size] || sizeClasses.navbar;

  const content = (
    <div
      className={`relative inline-flex items-center transition-transform duration-300 group-hover:scale-[1.02] ${
        isLight
          ? 'bg-white rounded-xl p-2 sm:p-2.5 shadow-md border border-white/20'
          : ''
      }`}
    >
      <Image
        src="/logos/skylink-logo.png"
        alt="SkyLink Global Services"
        width={427}
        height={378}
        priority={priority}
        className={`${selectedSizeClass} object-contain`}
        quality={100}
        unoptimized
      />
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`inline-flex items-center group select-none shrink-0 ${className}`}
        aria-label="SkyLink Global Services Home"
      >
        {content}
      </Link>
    );
  }

  return <div className={`inline-flex ${className}`}>{content}</div>;
}

