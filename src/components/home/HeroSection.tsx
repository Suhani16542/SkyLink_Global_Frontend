'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ShieldCheck,
  Ship,
  Scale,
  Sparkles,
  Radio,
  TrendingDown,
  Anchor,
  Plane,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface SlideData {
  id: string;
  badge: string;
  headlinePrefix: string;
  headlineHighlight: string;
  description: string;
  pillarPills: { label: string; icon: React.ElementType }[];
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
  corridor: {
    route: string;
    mode: string;
    status: string;
    carrier: string;
  };
  floatingBadgeTop: { title: string; subtitle: string; icon: React.ElementType };
  floatingBadgeBottom: { title: string; subtitle: string; icon: React.ElementType };
  image: string;
  imageAlt: string;
}

const heroSlides: SlideData[] = [
  {
    id: 'slide-1',
    badge: 'DGFT & Customs Authorized EXIM Facilitation',
    headlinePrefix: 'Connecting Markets.',
    headlineHighlight: 'Delivering Opportunities.',
    description:
      'SkyLink Global Services empowers enterprises with statutory foreign trade policy advisory, direct Tier-1 carrier allocations (Maersk, MSC, CMA CGM), zero-error ICEGATE customs clearance, and GDP-compliant cold chain solutions across all major global corridors.',
    pillarPills: [
      { label: 'EXIM Consultancy', icon: Scale },
      { label: 'Global Logistics', icon: Ship },
      { label: 'Trade Compliance', icon: ShieldCheck },
    ],
    primaryCta: { text: 'Request Trade Consultation', href: '/request-consultation' },
    secondaryCta: { text: 'Explore Capabilities', href: '/services' },
    corridor: {
      route: 'Nhava Sheva (IN) ➔ Rotterdam (NL)',
      mode: 'Ocean Freight • 18-22 Days',
      status: 'Direct Tier-1 Allocation Active',
      carrier: 'Maersk / MSC Weekly Vessel',
    },
    floatingBadgeTop: {
      title: 'DGFT & ICEGATE',
      subtitle: '100% Audit Readiness',
      icon: ShieldCheck,
    },
    floatingBadgeBottom: {
      title: 'Wholesale Freight',
      subtitle: 'Zero Broker Markups',
      icon: TrendingDown,
    },
    image:
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'International ocean container cargo vessel operating at deep-water seaport terminal',
  },
  {
    id: 'slide-2',
    badge: 'Global Freight Forwarding & Multimodal Network',
    headlinePrefix: 'Moving Business.',
    headlineHighlight: 'Across Global Borders.',
    description:
      'Securing contracted carrier capacity, direct ocean vessel space, optimized air cargo routing, and inland CFS hub connectivity to eliminate global transit bottlenecks and keep your cross-border supply chain moving on schedule.',
    pillarPills: [
      { label: 'Ocean Freight', icon: Ship },
      { label: 'Air Express', icon: Plane },
      { label: 'Port Drayage', icon: Anchor },
    ],
    primaryCta: { text: 'Explore Logistics Desk', href: '/services/logistics-shipping' },
    secondaryCta: { text: 'Request Freight Quote', href: '/request-consultation' },
    corridor: {
      route: 'Mundra (IN) ➔ Jebel Ali (UAE)',
      mode: 'Ocean Express • 3-5 Days',
      status: 'Daily Direct Sailing',
      carrier: 'CMA CGM / Hapag-Lloyd Allocation',
    },
    floatingBadgeTop: {
      title: 'Direct Space',
      subtitle: 'Tier-1 Contract Rates',
      icon: Ship,
    },
    floatingBadgeBottom: {
      title: 'Real-Time Telemetry',
      subtitle: '24/7 Port Milestone Tracking',
      icon: Radio,
    },
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'Modern container terminal and multimodal intermodal freight shipping operations',
  },
  {
    id: 'slide-3',
    badge: 'End-to-End Import & Export Trade Advisory',
    headlinePrefix: 'Simplifying',
    headlineHighlight: 'International Trade.',
    description:
      'From statutory DGFT licensing, EPCG authorization, and RoDTEP duty incentives to precision cross-border customs documentation, we streamline every procedural stage to accelerate clearance and protect trade profitability.',
    pillarPills: [
      { label: 'DGFT Licensing', icon: Scale },
      { label: 'Customs Clearance', icon: ShieldCheck },
      { label: 'Duty Drawback', icon: TrendingDown },
    ],
    primaryCta: { text: 'Explore EXIM Solutions', href: '/services/export-incentives' },
    secondaryCta: { text: 'Consult Trade Specialist', href: '/contact' },
    corridor: {
      route: 'Chennai (IN) ➔ New York (US)',
      mode: 'Ocean & Air Charter • 24-28 Days',
      status: 'AEO Fast-Track Clearance',
      carrier: 'Direct Trans-Atlantic Routing',
    },
    floatingBadgeTop: {
      title: 'AEO Certified',
      subtitle: 'Green Channel Clearance',
      icon: ShieldCheck,
    },
    floatingBadgeBottom: {
      title: 'Incentive Recovery',
      subtitle: '100% RoDTEP / EPCG Realization',
      icon: TrendingDown,
    },
    image:
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'Deep-water cargo container ship loading at international port terminal',
  },
  {
    id: 'slide-4',
    badge: 'GDP Cold Chain & Comprehensive Risk Integrity',
    headlinePrefix: 'Trade With Confidence.',
    headlineHighlight: 'Stay Compliant.',
    description:
      'High-precision GDP-compliant cold chain logistics, pharmaceutical reefer monitoring with continuous IoT thermal logging, all-risk marine cargo insurance, and statutory export compliance for zero-defect international delivery.',
    pillarPills: [
      { label: 'GDP Cold Chain', icon: Sparkles },
      { label: 'Marine Insurance', icon: ShieldCheck },
      { label: '24/7 Telemetry', icon: Radio },
    ],
    primaryCta: { text: 'Talk to a Trade Expert', href: '/request-consultation' },
    secondaryCta: { text: 'View Cold Chain Specs', href: '/services/customs-compliance' },
    corridor: {
      route: 'Hyderabad Air (IN) ➔ Frankfurt (DE)',
      mode: 'Active GDP Cold Chain • 24-48 Hrs',
      status: 'Temperature -25°C to +25°C',
      carrier: 'Lufthansa Cargo / Emirates SkyCargo',
    },
    floatingBadgeTop: {
      title: 'GDP Certified',
      subtitle: 'Pharma Cold Chain Precision',
      icon: ShieldCheck,
    },
    floatingBadgeBottom: {
      title: 'IoT Data Logger',
      subtitle: 'Live Temperature Stream',
      icon: Radio,
    },
    image:
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop',
    imageAlt: 'International air cargo and multimodal cross-border freight aircraft terminal',
  },
];

const AUTO_SLIDE_DURATION = 3500; // 3.5s smooth transition

export function HeroSection() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Automatic slide rotation
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, AUTO_SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [nextSlide]);

  const activeSlide = heroSlides[currentSlideIndex];
  const TopIcon = activeSlide.floatingBadgeTop.icon;
  const BottomIcon = activeSlide.floatingBadgeBottom.icon;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#07192D] via-[#0A2540] to-[#07192D] text-white pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-white/10 select-none">
      {/* Subtle Background Graticule Grid Lines & Ambient Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#0284C7]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT 7 COLUMNS: Clean, Smooth Animated Editorial Content */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <div
              key={`hero-left-content-${currentSlideIndex}`}
              className="space-y-5 animate-in fade-in slide-in-from-bottom-2 duration-300 fill-mode-forwards"
            >
              {/* 1. Authority Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 border border-sky-400/40 px-4 py-1.5 text-xs font-semibold text-sky-300 backdrop-blur-md shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="font-bold tracking-wide">{activeSlide.badge}</span>
              </div>

              {/* 2. Main High-Impact Heading */}
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
                  {activeSlide.headlinePrefix}{' '}
                  <span className="text-gradient-sky block sm:inline">
                    {activeSlide.headlineHighlight}
                  </span>
                </h1>
              </div>

              {/* 3. 3 Business Pillars Row */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs sm:text-sm font-bold text-sky-300">
                {activeSlide.pillarPills.map((pill, idx) => {
                  const IconComp = pill.icon;
                  return (
                    <span
                      key={idx}
                      className="bg-sky-950/80 px-3.5 py-1.5 rounded-xl border border-sky-400/30 backdrop-blur-xs flex items-center gap-1.5 shadow-xs"
                    >
                      <IconComp className="w-4 h-4 text-sky-400" />
                      <span>{pill.label}</span>
                    </span>
                  );
                })}
              </div>

              {/* 4. Rich Authoritative Description */}
              <p className="text-sm sm:text-base lg:text-lg text-neutral-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                {activeSlide.description}
              </p>

              {/* 5. Trust Statement */}
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-neutral-300 font-medium">
                <Sparkles className="w-4 h-4 text-sky-400 shrink-0" />
                <span>End-to-end single-window execution for manufacturers, exporters, and importers.</span>
              </div>

              {/* 6. Hero CTAs with Fixed Non-White Hover */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
                <Link
                  href={activeSlide.primaryCta.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-[#0284C7] hover:bg-[#0369A1] shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 cursor-pointer"
                >
                  <span>{activeSlide.primaryCta.text}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href={activeSlide.secondaryCta.href}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-white/10 hover:bg-[#0284C7]/25 border border-white/30 hover:border-sky-400 hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 cursor-pointer backdrop-blur-xs"
                >
                  <span>{activeSlide.secondaryCta.text}</span>
                </Link>
              </div>
            </div>

            {/* 7. Slide Navigation Selector Dots / Progress */}
            <div className="pt-6 flex items-center justify-center lg:justify-start gap-3">
              <div className="flex items-center gap-2">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlideIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === currentSlideIndex
                        ? 'w-8 bg-[#0284C7] shadow-sm shadow-sky-400'
                        : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1 ml-3">
                <button
                  onClick={prevSlide}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Next"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <span className="text-xs font-mono font-bold text-neutral-400 ml-1">
                0{currentSlideIndex + 1}/0{heroSlides.length}
              </span>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT 5 COLUMNS: Layered Live Maritime Visual & Dynamic Route Hub */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Outer Visual Container */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[1/1] w-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#07192D] group">
                
                {/* 4 Rotating Banner Images */}
                {heroSlides.map((slide, idx) => {
                  const isActive = idx === currentSlideIndex;
                  return (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                        isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                      }`}
                    >
                      <Image
                        src={slide.image}
                        alt={slide.imageAlt}
                        fill
                        priority={idx === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 brightness-105"
                      />
                    </div>
                  );
                })}

                {/* Subtle Gradient Blend Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/95 via-transparent to-[#07192D]/40 pointer-events-none z-10" />

                {/* Animated SVG Flight & Maritime Route Arc overlay */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none opacity-80 z-10"
                  viewBox="0 0 500 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 50 420 Q 220 180 440 260"
                    stroke="url(#hero-line-grad)"
                    strokeWidth="2.5"
                    strokeDasharray="6 6"
                    className="animate-dash-flow"
                  />
                  <path
                    d="M 80 180 Q 280 320 460 120"
                    stroke="#38BDF8"
                    strokeOpacity="0.5"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="animate-dash-flow"
                  />
                  <circle cx="50" cy="420" r="5" fill="#38BDF8" className="animate-ping" />
                  <circle cx="50" cy="420" r="4" fill="#FFFFFF" />
                  <circle cx="440" cy="260" r="5" fill="#10B981" />
                  <circle cx="440" cy="260" r="10" stroke="#10B981" strokeWidth="1.5" className="animate-ping" />
                  <defs>
                    <linearGradient id="hero-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38BDF8" />
                      <stop offset="50%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#34D399" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Top Status Pill Bar */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
                  <div className="glass-panel-dark px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-2 backdrop-blur-md shadow-lg">
                    <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                    <span className="text-[10px] font-mono font-bold text-white tracking-wide">
                      LIVE CORRIDOR TELEMETRY
                    </span>
                  </div>
                  <div className="glass-panel-dark px-3 py-1 rounded-full border border-white/20 text-[10px] font-mono font-bold text-sky-300">
                    24/7 MULTI-PORT DESK
                  </div>
                </div>

                {/* Bottom Interactive Corridor Info Inside Visual */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div
                    key={`corridor-${currentSlideIndex}`}
                    className="glass-panel-dark p-3.5 rounded-2xl border border-white/25 backdrop-blur-md shadow-xl animate-in fade-in duration-300"
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono font-bold uppercase text-sky-300 mb-1">
                      <span>{activeSlide.corridor.mode}</span>
                      <span className="text-emerald-400">{activeSlide.corridor.status}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                      <Anchor className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{activeSlide.corridor.route}</span>
                    </div>
                    <div className="text-[11px] text-neutral-300 mt-1">
                      Allocations: <span className="text-white font-medium">{activeSlide.corridor.carrier}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Top Right (Synchronized) */}
              <div
                key={`badge-top-${currentSlideIndex}`}
                className="hidden sm:flex absolute -top-5 -right-5 z-30 glass-panel-dark p-3.5 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-lg items-center gap-3 animate-in fade-in duration-300 max-w-[200px]"
              >
                <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center border border-sky-400/40 shrink-0">
                  <TopIcon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">
                    {activeSlide.floatingBadgeTop.title}
                  </div>
                  <div className="text-[10px] text-neutral-300 mt-0.5">
                    {activeSlide.floatingBadgeTop.subtitle}
                  </div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left (Synchronized) */}
              <div
                key={`badge-bottom-${currentSlideIndex}`}
                className="hidden sm:flex absolute -bottom-5 -left-5 z-30 glass-panel-dark p-3.5 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-lg items-center gap-3 animate-in fade-in duration-300 max-w-[210px]"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center border border-emerald-400/40 shrink-0">
                  <BottomIcon className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">
                    {activeSlide.floatingBadgeBottom.title}
                  </div>
                  <div className="text-[10px] text-neutral-300 mt-0.5">
                    {activeSlide.floatingBadgeBottom.subtitle}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
