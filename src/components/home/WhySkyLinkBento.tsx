'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  TrendingDown,
  Scale,
  ThermometerSnowflake,
  ArrowRight,
} from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

export function WhySkyLinkBento() {
  const advantages = [
    {
      icon: ShieldCheck,
      badge: 'SINGLE-WINDOW CONTROL',
      title: 'End-to-End Trade Governance',
      desc: 'One unified contract covering DGFT licensing, customs clearance, and multimodal freight—eliminating third-party broker layers and handoff delays.',
      isHighlighted: true,
    },
    {
      icon: TrendingDown,
      badge: 'RATE TRANSPARENCY',
      title: 'Direct Shipping Line Tariffs',
      desc: 'Contracted volume agreements with premier ocean and air carriers (Maersk, MSC, CMA CGM) ensuring fixed all-in pricing with no hidden destination fees.',
      isHighlighted: false,
    },
    {
      icon: Scale,
      badge: 'STATUTORY CORE',
      title: 'Duty Recovery & Fast Clearance',
      desc: 'Pre-arrival ICEGATE filing for green-channel port release alongside 100% statutory export incentive monetization (RoDTEP, Drawback, EPCG).',
      isHighlighted: false,
    },
    {
      icon: ThermometerSnowflake,
      badge: '24/7 OPERATIONS',
      title: 'Active Cold Chain & Port Desk',
      desc: 'Precision reefer solutions (-25°C to +25°C) with real-time IoT temperature telemetry and active milestone liaison across major global container terminals.',
      isHighlighted: false,
    },
  ];

  return (
    <section id="why-skylink" className="py-14 sm:py-20 bg-white border-t border-neutral-200 relative overflow-hidden scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header matching screenshot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl space-y-3">
            <ScrollReveal effect="fade-up" delay={0}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A2540] tracking-tight leading-[1.18] text-balance">
                Why Global Logistics Partner like SkyLink?
              </h2>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={60}>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal text-pretty max-w-xl">
                We bridge statutory foreign trade advisory and direct carrier execution to protect your export margins, ensure zero customs holds, and deliver predictable international transit.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal effect="fade-left" delay={120} className="shrink-0">
            <Link
              href="/request-consultation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0A2540] hover:bg-[#07192D] text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:scale-95 group"
            >
              <span>Explore Trade Benefits</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        {/* 4 Clean Modern Cards Grid matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {advantages.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <ScrollReveal
                key={idx}
                effect="fade-up"
                delay={idx * 60}
                duration={500}
                className={`rounded-2xl p-6 sm:p-7 bg-white border transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                  item.isHighlighted
                    ? 'border-neutral-200/90 shadow-sm ring-1 ring-emerald-400/40'
                    : 'border-neutral-200/90 shadow-xs hover:border-sky-300 hover:shadow-md'
                }`}
              >
                {/* Top Accent Line for first card / hover */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-opacity duration-300 ${
                    item.isHighlighted
                      ? 'bg-gradient-to-r from-[#0284C7] to-emerald-400 opacity-100'
                      : 'bg-gradient-to-r from-[#0284C7] to-emerald-400 opacity-0 group-hover:opacity-100'
                  }`}
                />

                <div>
                  {/* Top Row: Icon + Mono Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        item.isHighlighted
                          ? 'bg-[#0A2540] text-white shadow-xs'
                          : 'bg-sky-50/80 border border-sky-100/80 text-[#0284C7] group-hover:bg-[#0A2540] group-hover:text-white'
                      }`}
                    >
                      <IconComp
                        className={`w-5 h-5 ${
                          item.isHighlighted
                            ? 'text-white'
                            : 'text-[#0284C7] group-hover:text-white transition-colors'
                        }`}
                      />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-neutral-500 bg-neutral-100/80 px-2.5 py-1 rounded-md border border-neutral-200/70">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-5">
                    <h3
                      className={`text-base sm:text-lg font-bold leading-snug text-balance ${
                        item.isHighlighted
                          ? 'text-[#0284C7]'
                          : 'text-[#0A2540] group-hover:text-[#0284C7] transition-colors'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-[13px] text-neutral-600 leading-relaxed font-normal text-pretty">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
