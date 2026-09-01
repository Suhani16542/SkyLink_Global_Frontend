'use client';

import React, { useEffect, useRef, useState } from 'react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { Globe2, ShieldCheck, Ship, TrendingDown, Clock, CheckCircle2 } from 'lucide-react';

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  highlightTag: string;
  icon: React.ElementType;
}

const stats: StatItem[] = [
  {
    value: 2500,
    suffix: '+',
    label: 'Shipments Facilitated',
    sublabel: 'Zero demurrage holds across global maritime & air lanes',
    highlightTag: 'Zero Demurrage',
    icon: Ship,
  },
  {
    value: 25,
    suffix: '+',
    label: 'Global Trade Corridors',
    sublabel: 'Active multi-port desks linking India with EU, GCC, US & APAC',
    highlightTag: 'Multi-Port Network',
    icon: Globe2,
  },
  {
    value: 20,
    suffix: '%+',
    label: 'Landed Freight Savings',
    sublabel: 'Achieved via direct Tier-1 carrier volume contracting',
    highlightTag: 'Tier-1 Contracting',
    icon: TrendingDown,
  },
  {
    value: 100,
    suffix: '%',
    label: 'Statutory Compliance',
    sublabel: 'DGFT, ICEGATE, and GDP/FDA life sciences regulatory adherence',
    highlightTag: 'AEO Green Channel',
    icon: ShieldCheck,
  },
];

export function StatsCounterSection() {
  const [counted, setCounted] = useState(false);
  const [displayValues, setDisplayValues] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted) {
          setCounted(true);
          const duration = 1600;
          const steps = 40;
          const stepTime = duration / steps;

          let step = 0;
          const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setDisplayValues(
              stats.map((stat) => Math.round(stat.value * easeOut))
            );

            if (step >= steps) {
              clearInterval(timer);
              setDisplayValues(stats.map((s) => s.value));
            }
          }, stepTime);
        }
      },
      { threshold: 0.15 }
    );

    const elem = sectionRef.current;
    if (elem) observer.observe(elem);

    return () => {
      if (elem) observer.unobserve(elem);
    };
  }, [counted]);

  // Repeated list for continuous seamless infinite marquee
  const repeatedStats = [...stats, ...stats, ...stats];

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 bg-gradient-to-b from-[#07192D]/5 via-sky-50/40 to-white border-y border-sky-100/80 relative overflow-hidden select-none"
    >
      {/* Background World Map Graticule Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0284c70a_1px,transparent_1px),linear-gradient(to_bottom,#0284c70a_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-75" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-sky-400/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 mb-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <ScrollReveal effect="fade-down" delay={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-sky-200/80 text-xs font-bold text-[#0284C7] uppercase tracking-wider shadow-xs backdrop-blur-xs">
              <Clock className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Proven Operational Track Record</span>
            </span>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={80}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
              Precision Execution in Cross-Border Trade
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={140}>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-normal">
              Measurable cost optimization, zero-delay customs clearance, and global freight velocity delivered for leading enterprises.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* INFINITE SMOOTH HORIZONTAL MOVING MARQUEE TRACK (RIGHT TO LEFT) */}
      {/* ========================================================================= */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)] py-4">
        <div className="animate-marquee-rtl flex gap-6 sm:gap-8 cursor-grab active:cursor-grabbing">
          {repeatedStats.map((stat, idx) => {
            const originalIndex = idx % stats.length;
            const IconComp = stat.icon;
            const currentValue = counted ? displayValues[originalIndex] : stat.value;

            return (
              <div
                key={idx}
                className="w-[280px] sm:w-[320px] lg:w-[340px] shrink-0 rounded-3xl p-6 sm:p-7 bg-white border border-neutral-200/80 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden select-none"
              >
                {/* Top Glowing Accent Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0284C7] via-sky-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Row: Icon Capsule + Highlight Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0A2540] to-[#0284C7] text-white flex items-center justify-center shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200/60">
                      {stat.highlightTag}
                    </span>
                  </div>

                  {/* Big Number Display */}
                  <div className="text-4xl sm:text-5xl font-black text-[#0A2540] tracking-tight font-mono leading-none flex items-baseline">
                    <span>{stat.prefix || ''}</span>
                    <span>{currentValue.toLocaleString()}</span>
                    <span className="text-[#0284C7] font-sans text-3xl sm:text-4xl ml-0.5 font-bold">
                      {stat.suffix}
                    </span>
                  </div>

                  {/* Metric Title */}
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 mt-3.5 group-hover:text-[#0284C7] transition-colors">
                    {stat.label}
                  </h3>

                  {/* Metric Subtitle */}
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 leading-relaxed font-normal">
                    {stat.sublabel}
                  </p>
                </div>

                {/* Bottom Verified Status Indicator */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
                  <span className="font-medium text-xs">SkyLink Verified</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
