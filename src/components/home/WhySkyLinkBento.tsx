'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  TrendingDown,
  ThermometerSnowflake,
  Scale,
  Network,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

export function WhySkyLinkBento() {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <ScrollReveal effect="fade-down" delay={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-xs font-bold text-[#0284C7] uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>The SkyLink Advantage</span>
            </span>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={80}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
              Why Global Enterprises Partner With SkyLink
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={160}>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal">
              We combine statutory foreign trade advisory with high-velocity freight logistics to protect your margins, eliminate customs bottlenecks, and accelerate international transit.
            </p>
          </ScrollReveal>
        </div>

        {/* Side-by-Side Composition: Sticky Left Blue Card + Scrolling Right Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Fixed / Sticky Blue Card */}
          <div className="lg:col-span-7 lg:sticky lg:top-[114px]">
            <div className="rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#0A2540] via-[#0B3156] to-[#07192D] text-white shadow-xl flex flex-col justify-between relative overflow-hidden group hover-lift">
              {/* Background Ambient Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl pointer-events-none -z-0" />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-xs font-bold text-sky-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Single-Window Governance</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  End-to-End EXIM Orchestration &amp; Direct Statutory Liaison
                </h3>
                <p className="text-sm sm:text-base text-neutral-200 leading-relaxed max-w-xl font-normal">
                  Unlike fragmented freight forwarders who hand off customs clearance to third-party sub-agents, SkyLink operates a single-window model: managing DGFT authorizations, ICEGATE filings, and Tier-1 carrier allocations with unified accountability.
                </p>

                {/* 3 Pillar Bullet Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs sm:text-sm font-bold text-white">Zero Broker Layers</div>
                    <div className="text-xs text-neutral-400 mt-0.5">Direct accountability</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs sm:text-sm font-bold text-white">Full Duty Recovery</div>
                    <div className="text-xs text-neutral-400 mt-0.5">RoDTEP, EPCG, Drawback</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xs sm:text-sm font-bold text-white">AEO Protocols</div>
                    <div className="text-xs text-neutral-400 mt-0.5">Customs green channel</div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-8 mt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-sky-300 font-bold">100% STATUTORY AUDIT READINESS</span>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white hover:text-sky-300 transition-colors"
                >
                  <span>Explore Methodology</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Stacked Scrolling Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Card 2: Cost Optimization */}
            <ScrollReveal
              effect="fade-up"
              delay={100}
              duration={600}
              className="rounded-3xl p-7 sm:p-8 bg-neutral-50/80 border border-neutral-200 flex flex-col justify-between hover-lift group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <TrendingDown className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  Cost Optimization
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 leading-tight">
                  15–20% Baseline Landed Freight Savings
                </h3>
                <p className="mt-3 text-sm sm:text-[15px] text-neutral-600 leading-relaxed font-normal">
                  By leveraging multi-client consolidated volume contracts directly with premier shipping lines (Maersk, MSC, CMA CGM), we bypass middlemen markups and provide transparent, all-in fixed tariffs.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-200/80 flex items-center justify-between text-xs sm:text-sm font-bold text-emerald-700">
                <span>Direct Tier-1 Carrier Contracting</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </ScrollReveal>

            {/* Card 3: GDP Cold Chain */}
            <ScrollReveal
              effect="fade-up"
              delay={150}
              duration={600}
              className="rounded-3xl p-7 bg-white border border-neutral-200 shadow-sm flex flex-col justify-between hover-lift group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-5 border border-sky-100 group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                  <ThermometerSnowflake className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] block mb-1">
                  Temperature Integrity
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 leading-tight">
                  GDP &amp; FDA Certified Cold-Chain
                </h3>
                <p className="mt-2.5 text-sm sm:text-[15px] text-neutral-600 leading-relaxed font-normal">
                  Reefer container solutions (-25°C to +25°C) with real-time active IoT telemetry monitoring for life sciences, pharmaceuticals, and perishable seafood.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 text-xs sm:text-sm font-bold text-[#0284C7] flex items-center justify-between">
                <span>Zero Thermal Excursions</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </ScrollReveal>

            {/* Card 4: Regulatory Mastery */}
            <ScrollReveal
              effect="fade-up"
              delay={200}
              duration={600}
              className="rounded-3xl p-7 bg-white border border-neutral-200 shadow-sm flex flex-col justify-between hover-lift group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-5 border border-sky-100 group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                  <Scale className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] block mb-1">
                  Statutory Authority
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 leading-tight">
                  DGFT, Customs &amp; GST Mastery
                </h3>
                <p className="mt-2.5 text-sm sm:text-[15px] text-neutral-600 leading-relaxed font-normal">
                  Accurate HS code GRI classification, SVB related-party valuation defense, and proactive management of statutory duty drawback claims.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 text-xs sm:text-sm font-bold text-[#0284C7] flex items-center justify-between">
                <span>ICEGATE Pre-Arrival Clearance</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </ScrollReveal>

            {/* Card 5: Global Telemetry Network */}
            <ScrollReveal
              effect="fade-up"
              delay={250}
              duration={600}
              className="rounded-3xl p-7 bg-white border border-neutral-200 shadow-sm flex flex-col justify-between hover-lift group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-5 border border-sky-100 group-hover:bg-[#0284C7] group-hover:text-white transition-colors">
                  <Network className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7] block mb-1">
                  24/7 Operations
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 leading-tight">
                  Global Multi-Port Operations Desk
                </h3>
                <p className="mt-2.5 text-sm sm:text-[15px] text-neutral-600 leading-relaxed font-normal">
                  Real-time milestone tracking across major ocean terminals (Nhava Sheva, Mundra, Rotterdam, Jebel Ali) ensuring zero demurrage exposure.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 text-xs sm:text-sm font-bold text-[#0284C7] flex items-center justify-between">
                <span>Zero-Demurrage Focus</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
