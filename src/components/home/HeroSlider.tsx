'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Ship,
  Scale,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface HeroSlide {
  id: string;
  badge: string;
  badgeIcon: React.ElementType;
  headingPrefix: string;
  headingHighlight: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
  image: string;
  imageAlt: string;
}

const slides: HeroSlide[] = [
  {
    id: 'exim-consultancy',
    badge: 'GLOBAL TRADE & EXIM CONSULTANCY',
    badgeIcon: ShieldCheck,
    headingPrefix: 'Connecting Markets.',
    headingHighlight: 'Delivering Opportunities.',
    description:
      'Your trusted partner for EXIM consultancy, global logistics and trade compliance, helping businesses navigate international markets with confidence. From documentation and statutory compliance to logistics coordination and final delivery, we simplify every stage of your international trade journey while helping enterprises move smoothly across global borders.',
    primaryCta: {
      text: 'Talk to an Expert',
      href: '/request-consultation',
    },
    secondaryCta: {
      text: 'Our Services',
      href: '/services',
    },
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2000&auto=format&fit=crop',
    imageAlt:
      'Massive international ocean cargo container vessel sailing across maritime trade lanes',
  },
  {
    id: 'global-logistics',
    badge: 'GLOBAL LOGISTICS',
    badgeIcon: Ship,
    headingPrefix: 'Moving Your Business',
    headingHighlight: 'Across Global Borders.',
    description:
      'Reliable logistics coordination and end-to-end shipment support designed to keep international trade moving efficiently. We secure direct premier vessel space, optimize air cargo routing, and eliminate transit bottlenecks so your freight arrives on schedule every time.',
    primaryCta: {
      text: 'Explore Logistics',
      href: '/services/logistics-shipping',
    },
    secondaryCta: {
      text: 'Get a Quote',
      href: '/request-consultation',
    },
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop',
    imageAlt:
      'Major international container seaport with automated gantry cranes and container yard',
  },
  {
    id: 'import-export',
    badge: 'IMPORT & EXPORT',
    badgeIcon: Sparkles,
    headingPrefix: 'Simplifying',
    headingHighlight: 'International Trade.',
    description:
      'From documentation and customs coordination to import-export processes, we help simplify every stage of global trade. Our trade specialists manage DGFT licensing, statutory incentive scrips, and zero-defect customs clearance to protect your margins and accelerate cross-border turnaround.',
    primaryCta: {
      text: 'Explore EXIM Solutions',
      href: '/services/export-incentives',
    },
    secondaryCta: {
      text: 'Contact Specialist',
      href: '/contact',
    },
    image:
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2000&auto=format&fit=crop',
    imageAlt:
      'Deep-water port terminal and multimodal cargo transit operations',
  },
  {
    id: 'trade-compliance',
    badge: 'TRADE COMPLIANCE',
    badgeIcon: Scale,
    headingPrefix: 'Trade With Confidence.',
    headingHighlight: 'Stay Compliant.',
    description:
      'Professional trade documentation, compliance guidance and regulatory support for smoother international business operations. With GDP-compliant cold chain precision, all-risk marine insurance, and 24/7 active telemetry, we ensure complete shipment integrity across all major corridors.',
    primaryCta: {
      text: 'Talk to a Trade Expert',
      href: '/request-consultation',
    },
    secondaryCta: {
      text: 'View Compliance',
      href: '/services/customs-compliance',
    },
    image:
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop',
    imageAlt:
      'Modern commercial container vessel at port dock with container cranes',
  },
];

const SLIDE_DURATION = 3000; // Fast 3-second interval

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const goToNextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Fast 3-second auto-slide timer with progress line
  useEffect(() => {
    const intervalTime = 30;
    const increment = (intervalTime / SLIDE_DURATION) * 100;

    progressIntervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNextSlide();
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [goToNextSlide]);

  const activeSlide = slides[currentIndex];
  const BadgeIcon = activeSlide.badgeIcon;

  return (
    <section
      className="relative min-h-[540px] sm:min-h-[580px] lg:min-h-[620px] bg-[#07192D] text-white overflow-hidden flex flex-col justify-between select-none"
      aria-roledescription="carousel"
      aria-label="SkyLink Global Services Hero Carousel"
    >
      {/* ========================================================================= */}
      {/* 1. BACKGROUND IMAGES (Sharp, 100% Opacity with Fast 300ms Transition) */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-300 ease-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.imageAlt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center brightness-105 contrast-105"
              />
            </div>
          );
        })}

        {/* Balanced Center Overlay: Ensures Crisp Readability While Leaving Visuals Visible */}
        <div className="absolute inset-0 bg-[#07192D]/75 sm:bg-[#07192D]/70 z-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07192D] via-transparent to-[#07192D]/50 z-20" />
      </div>

      {/* ========================================================================= */}
      {/* 2. SYNCHRONIZED CENTERED HERO CONTENT (Fast 300ms Transition) */}
      {/* ========================================================================= */}
      <div className="relative z-30 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-14 sm:pt-16 sm:pb-18 lg:pt-18 lg:pb-20 w-full my-auto flex flex-col items-center justify-center">
        <div className="max-w-3xl lg:max-w-4xl text-center space-y-4 sm:space-y-5 mx-auto">
          {/* Synchronized Content Block with Fast In-Out Transition */}
          <div
            key={`slide-content-${currentIndex}`}
            className="space-y-4 sm:space-y-5 animate-in fade-in slide-in-from-bottom-3 duration-300 fill-mode-forwards flex flex-col items-center text-center"
          >
            {/* 1. Small Authority Badge (Centered) */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0A2540]/90 border border-sky-400/50 px-4 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur-md shadow-md">
              <BadgeIcon className="w-3.5 h-3.5 text-sky-400" />
              <span>{activeSlide.badge}</span>
            </div>

            {/* 2. Synchronized Headline (Centered) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] drop-shadow-lg">
              {activeSlide.headingPrefix}{' '}
              <span className="text-gradient-sky block sm:inline">
                {activeSlide.headingHighlight}
              </span>
            </h1>

            {/* 3. Synchronized Extended Description (Centered with max-w-2xl) */}
            <p className="text-sm sm:text-base lg:text-lg text-neutral-200 leading-relaxed max-w-2xl sm:max-w-3xl mx-auto drop-shadow-sm">
              {activeSlide.description}
            </p>

            {/* 4. Mini Supporting Information Row (Centered) */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-sky-300 pt-1">
              <span className="bg-sky-950/90 px-3 py-1 rounded-md border border-sky-400/30">
                EXIM Consultancy
              </span>
              <span className="text-white/30">•</span>
              <span className="bg-sky-950/90 px-3 py-1 rounded-md border border-sky-400/30">
                Global Logistics
              </span>
              <span className="text-white/30">•</span>
              <span className="bg-sky-950/90 px-3 py-1 rounded-md border border-sky-400/30">
                Trade Compliance
              </span>
              <span className="text-white/30">•</span>
              <span className="bg-sky-950/90 px-3 py-1 rounded-md border border-sky-400/30">
                Import &amp; Export
              </span>
            </div>

            {/* 5. Trust & Value Statement (Centered) */}
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-neutral-300 font-medium max-w-xl mx-auto">
              <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>
                End-to-end support for businesses navigating international trade, logistics and compliance.
              </span>
            </div>

            {/* 6. Centered CTAs with Fixed Non-White Hover Behavior */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 mx-auto w-full sm:w-auto">
              <Link
                href={activeSlide.primaryCta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-sm text-white bg-[#0284C7] hover:bg-[#0369A1] shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 cursor-pointer"
              >
                <span>{activeSlide.primaryCta.text}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={activeSlide.secondaryCta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm text-white bg-white/10 hover:bg-[#0284C7]/25 border border-white/30 hover:border-sky-400 hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 cursor-pointer backdrop-blur-xs"
              >
                <span>{activeSlide.secondaryCta.text}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. SLIDER CONTROLS & FAST PROGRESS INDICATOR */}
      {/* ========================================================================= */}
      <div className="relative z-30 bg-[#07192D]/85 border-t border-white/10 backdrop-blur-md py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* 4 Slide Selectors with Filling 3s Progress Line */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3 flex-1 max-w-xl">
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`text-left p-1.5 sm:p-2 rounded-lg transition-all relative overflow-hidden ${
                    isActive
                      ? 'bg-white/15 border border-sky-400/50 text-white'
                      : 'bg-white/5 border border-white/5 text-neutral-400 hover:bg-white/10 hover:text-white'
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${slide.badge}`}
                >
                  <div className="flex items-center justify-between mb-1 text-[10px] sm:text-xs font-mono font-bold">
                    <span>0{idx + 1}</span>
                    <span
                      className={`text-[9px] uppercase font-bold tracking-wider hidden sm:inline ${
                        isActive ? 'text-sky-300' : 'text-neutral-400'
                      }`}
                    >
                      {idx === 0
                        ? 'EXIM'
                        : idx === 1
                        ? 'Logistics'
                        : idx === 2
                        ? 'Trade'
                        : 'Compliance'}
                    </span>
                  </div>

                  {/* Filling Progress Line (3 seconds) */}
                  <div className="w-full h-1 bg-white/15 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#0284C7] transition-all duration-75 ease-linear rounded-full"
                      style={{
                        width: isActive ? `${progress}%` : idx < currentIndex ? '100%' : '0%',
                      }}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Previous / Next Controls */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={goToPrevSlide}
              className="p-1.5 sm:p-2 rounded-lg bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <span className="text-xs font-mono font-bold text-neutral-300 px-1">
              0{currentIndex + 1}/0{slides.length}
            </span>

            <button
              onClick={goToNextSlide}
              className="p-1.5 sm:p-2 rounded-lg bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
