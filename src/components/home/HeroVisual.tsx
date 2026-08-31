'use client';

import React from 'react';
import Image from 'next/image';
import { Ship, ShieldCheck, TrendingDown, Radio } from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

export function HeroVisual() {
  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[1/1] max-w-xl mx-auto lg:max-w-none">
      {/* Ambient background glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/20 via-[#0284C7]/20 to-blue-400/10 rounded-3xl filter blur-2xl -z-10 animate-pulse-glow" />

      {/* Main Container Image Card with Image Reveal Animation */}
      <ScrollReveal effect="scale-up" delay={450} duration={850} className="h-full w-full">
        <div className="relative h-full w-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#07192D]">
          {/* Next.js Image with zoom transition */}
          <Image
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1400&auto=format&fit=crop"
            alt="SkyLink Global international container cargo vessel operating across maritime trade corridors"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
            className="object-cover object-center transition-transform duration-1000 hover:scale-105"
          />

          {/* Gradient blend overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07192D] via-transparent to-[#07192D]/40 pointer-events-none" />

          {/* Animated SVG Flight & Maritime Route Arc overlay */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 50 420 Q 220 180 440 260"
              stroke="url(#hero-line-gradient)"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              className="animate-dash-flow"
            />
            <path
              d="M 80 180 Q 280 320 460 120"
              stroke="#38BDF8"
              strokeOpacity="0.4"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              className="animate-dash-flow"
            />

            <circle cx="50" cy="420" r="5" fill="#38BDF8" className="animate-ping" />
            <circle cx="50" cy="420" r="4" fill="#FFFFFF" />

            <circle cx="440" cy="260" r="5" fill="#10B981" />
            <circle cx="440" cy="260" r="10" stroke="#10B981" strokeWidth="1.5" className="animate-ping" />

            <defs>
              <linearGradient id="hero-line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="50%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#34D399" />
              </linearGradient>
            </defs>
          </svg>

          {/* Top Floating Status Pill */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
            <div className="glass-panel-dark px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-2 backdrop-blur-md shadow-lg">
              <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono font-bold text-white tracking-wide">
                LIVE MULTIMODAL CORRIDOR
              </span>
            </div>
            <div className="glass-panel-dark px-3 py-1.5 rounded-full border border-white/20 text-[11px] font-bold text-sky-300">
              NHAVA SHEVA &rarr; ROTTERDAM
            </div>
          </div>

          {/* Bottom Image Overlay Tag */}
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <div className="glass-panel-dark p-3.5 rounded-2xl border border-white/20 backdrop-blur-md">
              <span className="text-[10px] uppercase font-bold text-sky-400 block tracking-wider">
                Carrier Volume Network
              </span>
              <div className="text-xs sm:text-sm font-bold text-white mt-0.5">
                Direct Tier-1 Maritime &amp; Air Line Allocation
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Floating Info Card 1: Top Right (Global Logistics) with Staggered Delay */}
      <ScrollReveal effect="fade-left" delay={750} duration={700} className="hidden sm:block absolute -top-5 -right-6 lg:-right-8 z-20">
        <div className="glass-panel-dark p-4 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-lg animate-float-slow max-w-[210px]">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/40 text-sky-300 flex items-center justify-center shrink-0">
              <Ship className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Global Logistics</div>
              <div className="text-[11px] text-neutral-300 mt-0.5 leading-snug">
                End-to-End Trade Facilitation
              </div>
              <span className="inline-block mt-1.5 text-[9px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-500/30">
                100% VISIBILITY
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Floating Info Card 2: Bottom Left (Trade Compliance) with Staggered Delay */}
      <ScrollReveal effect="fade-right" delay={950} duration={700} className="hidden sm:block absolute -bottom-6 -left-6 lg:-left-8 z-20">
        <div className="glass-panel-dark p-4 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-lg animate-float-reverse max-w-[220px]">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Trade Compliance</div>
              <div className="text-[11px] text-neutral-300 mt-0.5 leading-snug">
                DGFT • Customs • GST Advisory
              </div>
              <span className="inline-block mt-1.5 text-[9px] font-mono font-bold text-sky-400 bg-sky-950/60 px-1.5 py-0.5 rounded border border-sky-500/30">
                ZERO PENALTIES
              </span>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Floating Info Card 3: Mid Right (Competitive Freight) */}
      <ScrollReveal effect="fade-left" delay={1150} duration={700} className="hidden lg:block absolute top-1/2 -right-10 transform -translate-y-1/2 z-20">
        <div className="glass-panel-dark p-3.5 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-lg animate-float-slow max-w-[190px]">
          <div className="flex items-start gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
              <TrendingDown className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Freight Solutions</div>
              <div className="text-[10px] text-neutral-300 mt-0.5">
                15-20% Tariffs Optimized
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
