'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Factory,
  Ship,
  Scale,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Users2,
  Boxes,
  ArrowUpRight,
  Sparkles,
  Globe2,
} from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { StaggerContainer } from '@/components/animation/StaggerContainer';

interface PillarItem {
  title: string;
  tag: string;
  icon: React.ElementType;
  description: string;
  badge: string;
}

const pillars: PillarItem[] = [
  {
    title: 'Manufacturer-to-Buyer Corridors',
    tag: 'Direct Trade Linkage',
    icon: Factory,
    description:
      'Direct factory-to-destination corridors connecting Indian manufacturers with international buyers across 25+ countries with FOB/CIF assurance.',
    badge: 'Direct SLA',
  },
  {
    title: 'Statutory Customs & DGFT Core',
    tag: 'Regulatory Compliance',
    icon: Scale,
    description:
      'Green-channel customs EDI clearance, Advance Authorisations, EPCG licenses, and RoDTEP claims handled by certified trade specialists.',
    badge: '100% Compliant',
  },
  {
    title: 'Multimodal Ocean & Air Freight',
    tag: 'Guaranteed Capacity',
    icon: Ship,
    description:
      'Secured vessel and cargo allocations for ocean FCL/LCL, chartered air freight, and active IoT reefer cold chain transport.',
    badge: '25+ Seaports',
  },
  {
    title: 'Single-Window Trade Governance',
    tag: 'Control Tower',
    icon: ShieldCheck,
    description:
      'One dedicated trade desk and account director managing live milestone telemetry, unified billing, and audit-proof compliance.',
    badge: '99.4% On-Time',
  },
];

export function BuiltToBridgeSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-neutral-50 via-white to-neutral-50/70 border-y border-neutral-200/90 relative overflow-hidden">
      {/* Subtle Background Geometry */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c708_1px,transparent_1px),linear-gradient(to_bottom,#0284c708_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-sky-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-80 h-80 bg-[#0284C7]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center justify-center space-y-3 mb-10 sm:mb-14">
          <ScrollReveal effect="fade-down" delay={0} className="w-full flex justify-center text-center">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-50 border border-sky-200/90 text-xs font-bold text-[#0284C7] uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span>Institutional Trade Infrastructure</span>
            </span>
          </ScrollReveal>

          <ScrollReveal effect="fade-up" delay={60} className="w-full text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight leading-tight text-balance mx-auto">
              Built to Bridge Businesses and Global Markets
            </h2>
          </ScrollReveal>

          <ScrollReveal effect="fade-up" delay={120} className="w-full flex justify-center text-center">
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal max-w-2xl mx-auto text-center">
              SkyLink Global synchronizes Indian manufacturing powerhouses, international buyers, multimodal freight carriers, and statutory customs authorities into a single, high-velocity trade ecosystem.
            </p>
          </ScrollReveal>
        </div>

        {/* ========================================================================= */}
        {/* MAIN BALANCED GRID: Primary Visual Montage + 4 Compact Pillar Cards */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* ----------------------------------------------------------------------- */}
          {/* LEFT 5 COLS: High-Impact Generated Imagery Composition */}
          {/* ----------------------------------------------------------------------- */}
          <ScrollReveal effect="fade-right" delay={150} duration={700} className="lg:col-span-5 relative">
            <div className="relative">
              
              {/* Primary Image: Leaders Reviewing Global Trade Over Port */}
              <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-neutral-200/90 bg-neutral-900 group">
                <Image
                  src="/images/home/trade-bridge-leaders.jpg"
                  alt="SkyLink Global international trade collaboration and executive cargo logistics coordination"
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover object-center group-hover:scale-104 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/85 via-transparent to-transparent" />
                
                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0A2540]/90 backdrop-blur-md border border-white/15 text-white flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-300">
                      <Users2 className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Cross-Border Trade Desk</p>
                      <p className="text-[10px] text-neutral-300">Manufacturers &amp; Global Buyers</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/90 px-2 py-0.5 rounded-md border border-emerald-500/30">
                    Active
                  </span>
                </div>
              </div>

              {/* Secondary Floating Port Image */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#07192D] group">
                <div className="relative aspect-[16/10]">
                  <Image
                    src="/images/home/trade-bridge-port.jpg"
                    alt="Automated deep-water container terminal and intermodal cargo ship berths"
                    fill
                    sizes="25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 px-2 py-1 rounded-md bg-[#07192D]/90 backdrop-blur-md border border-white/20 text-[10px] font-mono font-bold text-white text-center flex items-center justify-center gap-1.5">
                    <Ship className="w-3 h-3 text-sky-400" />
                    <span>25+ GLOBAL PORTS</span>
                  </div>
                </div>
              </div>

              {/* Tertiary Floating Metric Badge */}
              <div className="hidden sm:flex absolute -top-4 -left-4 bg-white px-3.5 py-2.5 rounded-2xl shadow-lg border border-neutral-200 items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#0A2540]">99.4% On-Time</p>
                  <p className="text-[10px] text-neutral-500 font-medium">Verified Dispatch SLA</p>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* ----------------------------------------------------------------------- */}
          {/* RIGHT 7 COLS: 4 Compact, Sleek Pillar Cards */}
          {/* ----------------------------------------------------------------------- */}
          <StaggerContainer
            staggerDelay={80}
            baseDelay={120}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-xs hover:shadow-lg hover:border-sky-300 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle Top Accent on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0284C7] to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                  <div>
                    {/* Icon & Badge Row */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0A2540] to-[#0284C7] text-white flex items-center justify-center shadow-sm shadow-sky-500/20 group-hover:scale-105 transition-transform">
                        <IconComp className="w-4.5 h-4.5 text-sky-300" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200/70">
                        {pillar.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-sm sm:text-base font-bold text-[#0A2540] group-hover:text-[#0284C7] transition-colors leading-snug">
                      {pillar.title}
                    </h3>

                    {/* Concise Description */}
                    <p className="mt-1.5 text-xs text-neutral-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Micro Footer Tag */}
                  <div className="mt-3 pt-2.5 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-medium text-neutral-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{pillar.tag}</span>
                  </div>
                </div>
              );
            })}
          </StaggerContainer>

        </div>

        {/* ========================================================================= */}
        {/* COMPACT BOTTOM CALL-TO-ACTION BAR */}
        {/* ========================================================================= */}
        <ScrollReveal effect="fade-up" delay={220} className="mt-10 sm:mt-12">
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-50 via-white to-sky-50 border border-sky-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-[#0A2540] text-white flex items-center justify-center shrink-0 shadow-sm">
                <Boxes className="w-5 h-5 text-sky-300" />
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0A2540]">
                  Ready to optimize your global export corridors?
                </h4>
                <p className="text-[11px] sm:text-xs text-neutral-600">
                  Connect with our senior logistics desk for custom freight rates and customs advisory.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0 justify-end">
              <Link
                href="/request-consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0284C7] text-white text-xs font-bold shadow-xs hover:bg-[#0369A1] transition-all duration-150 group"
              >
                <span>Consult Our Logistics Desk</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="hidden sm:inline-flex items-center justify-center gap-1 px-3.5 py-2.5 rounded-xl bg-white border border-neutral-300 text-neutral-700 text-xs font-semibold hover:bg-neutral-50 transition-all duration-150"
              >
                <span>Services</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
