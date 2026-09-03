'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ThermometerSnowflake,
  ShieldCheck,
  Layers,
} from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import type { EnrichedIndustry } from '@/data/industries';

interface IndustriesMosaicProps {
  industries: EnrichedIndustry[];
}

const industryImages: Record<string, string> = {
  pharmaceuticals:
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
  seafood:
    'https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=800&auto=format&fit=crop',
  perishables:
    'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=800&auto=format&fit=crop',
  manufacturing:
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
  'general-cargo':
    'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop',
};

const industryBadges: Record<string, { badge: string; highlight: string }> = {
  pharmaceuticals: {
    badge: 'GDP & FDA COLD CHAIN',
    highlight: '+2°C to +8°C Active Telemetry',
  },
  seafood: {
    badge: 'DEEP FREEZE REEFER',
    highlight: '-25°C to -40°C Super-Freezer',
  },
  perishables: {
    badge: 'CONTROLLED ATMOSPHERE',
    highlight: 'O2/CO2 Shelf-Life Extension',
  },
  manufacturing: {
    badge: 'JIT & PROJECT CARGO',
    highlight: 'EPCG & MOOWR Duty Deferment',
  },
  'general-cargo': {
    badge: 'EXIM CONSOLIDATION',
    highlight: 'RoDTEP & Drawback Optimization',
  },
};

export function IndustriesMosaic({ industries }: IndustriesMosaicProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll boundary
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [industries]);

  // Scroll to a specific card index
  const scrollToIndex = useCallback((index: number) => {
    if (scrollContainerRef.current) {
      const cards = scrollContainerRef.current.children;
      const targetCard = cards[index] as HTMLElement;
      if (targetCard) {
        scrollContainerRef.current.scrollTo({
          left: targetCard.offsetLeft - 24,
          behavior: 'smooth',
        });
        setActiveIndex(index);
      }
    }
  }, []);

  // When cursor is hovered over the section, advance cards one-by-one
  useEffect(() => {
    if (!isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % industries.length;
        scrollToIndex(next);
        return next;
      });
    }, 2400);

    return () => clearInterval(interval);
  }, [isHovered, industries.length, scrollToIndex]);

  const handleScroll = (direction: 'left' | 'right') => {
    const newIdx =
      direction === 'left'
        ? Math.max(0, activeIndex - 1)
        : Math.min(industries.length - 1, activeIndex + 1);
    scrollToIndex(newIdx);
  };

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] py-12 sm:py-16 bg-neutral-900 text-white overflow-hidden flex flex-col justify-between border-y border-white/20 select-none group"
    >
      {/* High-definition Vibrant Background Image - Cursor Controlled Zoom In / Zoom Out */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop"
          alt="Global transportation, logistics vessel, and container corridor"
          fill
          priority={false}
          sizes="100vw"
          className={`object-cover object-center transition-transform duration-1000 ease-out ${
            isHovered ? 'scale-112' : 'scale-100'
          }`}
        />
        {/* Minimal light gradients so background colors & white details remain fully visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/90 via-transparent to-black/35" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between">
        {/* Top Header Row with Only Bold Heading & Badges & Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6 sm:mb-10">
          {/* Left Column: Badges & DP World-Style Large Bold Heading */}
          <div className="space-y-3 max-w-3xl">
            <ScrollReveal effect="fade-down" delay={0}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/60 border border-sky-400/50 text-xs font-bold text-sky-300 backdrop-blur-md shadow-md">
                  <ThermometerSnowflake className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>SPECIALIZED COLD CHAIN &amp; VERTICALS</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/60 border border-emerald-400/50 text-xs font-semibold text-emerald-300 backdrop-blur-md shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>GDP / US FDA VALIDATED</span>
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal effect="fade-up" delay={60}>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none drop-shadow-xl">
                Sector-Specific Solutions
              </h2>
            </ScrollReveal>
          </div>

          {/* Right Column: Navigation Controls & Indicators */}
          <ScrollReveal effect="fade-left" delay={100} className="flex items-center gap-3 shrink-0 self-start md:self-center">
            {/* Step Indicators */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full bg-black/50 border border-white/20 backdrop-blur-md">
              {industries.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === i ? 'w-6 bg-sky-400' : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous Industry"
              className={`p-3 rounded-full border backdrop-blur-md transition-all duration-300 ${
                canScrollLeft
                  ? 'bg-black/60 hover:bg-sky-500 text-white border-white/40 hover:border-sky-400 shadow-xl cursor-pointer hover:scale-105 active:scale-95'
                  : 'bg-black/30 text-neutral-500 border-white/10 cursor-not-allowed opacity-40'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Next Industry"
              className={`p-3 rounded-full border backdrop-blur-md transition-all duration-300 ${
                canScrollRight
                  ? 'bg-black/60 hover:bg-sky-500 text-white border-white/40 hover:border-sky-400 shadow-xl cursor-pointer hover:scale-105 active:scale-95'
                  : 'bg-black/30 text-neutral-500 border-white/10 cursor-not-allowed opacity-40'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/60 hover:bg-sky-500 border border-sky-400/50 text-xs font-bold text-sky-300 hover:text-white transition-all shadow-xl backdrop-blur-md"
            >
              <Layers className="w-4 h-4" />
              <span>All Verticals</span>
            </Link>
          </ScrollReveal>
        </div>

        {/* Bottom Horizontal Elongated ("Lamba") Landscape Cards Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-4 pt-2 px-1 no-scrollbar scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {industries.map((ind, idx) => {
            const badgeInfo = industryBadges[ind.slug] || {
              badge: 'CUSTOM COMMODITY DESK',
              highlight: '100% Statutory Compliance',
            };
            const imageUrl =
              industryImages[ind.slug] ||
              'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop';
            const isActive = activeIndex === idx;

            return (
              <Link
                key={ind.id || idx}
                href={`/industries#${ind.slug}`}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`w-[320px] sm:w-[420px] md:w-[480px] lg:w-[520px] h-[190px] sm:h-[210px] shrink-0 snap-start rounded-2xl relative overflow-hidden group/card border transition-all duration-500 flex flex-col justify-between p-4 sm:p-5 shadow-2xl ${
                  isActive
                    ? 'border-sky-400 shadow-sky-500/40 scale-[1.02]'
                    : 'border-white/30 hover:border-sky-400/80 shadow-black/60'
                }`}
              >
                {/* Background Image of the Card */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-neutral-900">
                  <Image
                    src={imageUrl}
                    alt={`${ind.title} trade solutions`}
                    fill
                    sizes="(max-width: 768px) 320px, 520px"
                    className="object-cover object-center group-hover/card:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Card Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 group-hover/card:via-black/45 transition-colors duration-500" />
                </div>

                {/* Card Top: Category Badge & Arrow */}
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-sky-300 bg-black/80 px-3 py-1 rounded-full border border-white/25 backdrop-blur-md shadow-sm">
                    {badgeInfo.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 group-hover/card:bg-sky-500 flex items-center justify-center text-white transition-all duration-300 group-hover/card:scale-110 shadow-md">
                    <ArrowRight className="w-4 h-4 group-hover/card:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                {/* Card Bottom: Highlight & Title & Description */}
                <div className="relative z-10 space-y-1">
                  <div className="text-[10px] sm:text-[11px] font-mono text-cyan-300 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>{badgeInfo.highlight}</span>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-white group-hover/card:text-sky-200 transition-colors line-clamp-1 leading-snug drop-shadow-md">
                    {ind.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-neutral-300 line-clamp-1 leading-relaxed opacity-95 group-hover/card:opacity-100">
                    {ind.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
