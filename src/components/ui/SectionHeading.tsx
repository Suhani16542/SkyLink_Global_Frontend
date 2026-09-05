'use client';

import React from 'react';
import { cn } from '@/lib/utils/cn';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const isCentered = align === 'center';

  return (
    <div
      className={cn(
        'max-w-3xl mb-12 sm:mb-16',
        isCentered ? 'mx-auto text-center' : 'text-left',
        className
      )}
    >
      {badge && (
        <ScrollReveal effect="fade-down" delay={0} duration={600}>
          <span
            className={cn(
              'inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-xs',
              light
                ? 'bg-sky-500/10 text-sky-300 border border-sky-400/30 backdrop-blur-md'
                : 'bg-sky-50 text-[#0284C7] border border-sky-200'
            )}
          >
            {badge}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal effect="fade-up" delay={80} duration={650}>
        <h2
          className={cn(
            'text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] sm:leading-[1.18] text-balance',
            light ? 'text-white' : 'text-[#0A2540]'
          )}
        >
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal effect="fade-up" delay={160} duration={700}>
          <p
            className={cn(
              'mt-3.5 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed font-normal text-pretty max-w-2xl',
              isCentered ? 'mx-auto text-center' : 'text-left',
              light ? 'text-neutral-300' : 'text-neutral-600'
            )}
          >
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
