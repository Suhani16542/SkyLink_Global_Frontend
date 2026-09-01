'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import type { EnrichedIndustry } from '@/data/industries';

interface IndustriesMosaicProps {
  industries: EnrichedIndustry[];
}

const industryImages: Record<string, string> = {
  pharmaceuticals:
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop',
  seafood:
    'https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=800&auto=format&fit=crop',
  perishables:
    'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=800&auto=format&fit=crop',
  manufacturing:
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop',
  'general-cargo':
    'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop',
};

export function IndustriesMosaic({ industries }: IndustriesMosaicProps) {
  const pharma =
    industries.find((i) => i.slug === 'pharmaceuticals') || industries[0];
  const seafood =
    industries.find((i) => i.slug === 'seafood') || industries[1];
  const otherIndustries = industries.filter(
    (i) => i.slug !== 'pharmaceuticals' && i.slug !== 'seafood'
  );

  return (
    <section className="py-20 sm:py-28 bg-[#07192D] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0284C7]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <ScrollReveal effect="fade-down" delay={0}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs font-semibold text-sky-300">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>Tailored Vertical Expertise</span>
            </span>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={80}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Sector-Specific Cross-Border Solutions
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={160}>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Every industry faces unique regulatory mandates, temperature sensitivities, and tariff classifications. We deliver customized logistics architecture tailored to each commodity profile.
            </p>
          </ScrollReveal>
        </div>

        {/* Top Tier Mosaic (7 cols + 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Card 1: Large Featured Pharma (7 cols) */}
          <ScrollReveal
            effect="fade-right"
            delay={100}
            duration={750}
            className="lg:col-span-7 rounded-3xl border border-white/15 bg-gradient-to-b from-[#0A2540] to-[#07192D] overflow-hidden shadow-2xl flex flex-col justify-between group hover-lift"
          >
            <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden bg-neutral-900">
              <Image
                src={industryImages['pharmaceuticals']}
                alt="Pharmaceutical cold chain logistics and life sciences compliance"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07192D] via-[#07192D]/40 to-transparent" />
              <span className="absolute top-4 left-4 text-[10px] font-mono font-bold uppercase tracking-wider text-sky-300 bg-[#07192D]/90 px-3 py-1 rounded-full border border-white/15 backdrop-blur-md">
                HIGH-PRECISION VERTICAL
              </span>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-mono uppercase text-sky-300 font-bold block">
                  GDP &amp; US FDA Compliant
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {pharma.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {pharma.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {pharma.keyHighlights.map((hl, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-bold mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Validated</span>
                    </div>
                    <span className="text-neutral-200 text-[11px] leading-snug block">{hl}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-sky-300 font-bold">API • Biologicals • Clinical Trials</span>
                <Link
                  href={`/industries#${pharma.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300"
                >
                  <span>Explore Pharma Desk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Seafood (5 cols) */}
          <ScrollReveal
            effect="fade-left"
            delay={160}
            duration={750}
            className="lg:col-span-5 rounded-3xl border border-white/15 bg-gradient-to-b from-[#0A2540] to-[#07192D] overflow-hidden shadow-2xl flex flex-col justify-between group hover-lift"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
              <Image
                src={industryImages['seafood']}
                alt="Seafood and marine exports cold chain"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07192D] via-[#07192D]/40 to-transparent" />
              <span className="absolute top-4 left-4 text-[10px] font-mono font-bold uppercase tracking-wider text-sky-300 bg-[#07192D]/90 px-3 py-1 rounded-full border border-white/15 backdrop-blur-md">
                DEEP FREEZE LOGISTICS
              </span>
              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-xs font-mono uppercase text-sky-300 font-bold block">
                  -25°C to -40°C Reefer Transit
                </span>
                <h3 className="text-xl font-extrabold text-white">
                  {seafood.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                {seafood.description}
              </p>

              <div className="space-y-2 pt-2">
                {seafood.keyHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-neutral-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-neutral-400 font-mono">MPEDA &amp; EIA Compliant</span>
                <Link
                  href={`/industries#${seafood.slug}`}
                  className="font-bold text-sky-400 inline-flex items-center gap-1 hover:text-sky-300"
                >
                  <span>View Solutions</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Tier: 3 Remaining Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherIndustries.map((ind, idx) => (
            <ScrollReveal
              key={ind.id}
              effect="fade-up"
              delay={120 + idx * 70}
              duration={650}
              className="rounded-3xl border border-white/15 bg-[#0A2540]/80 overflow-hidden shadow-xl flex flex-col justify-between group hover-lift h-full"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={industryImages[ind.slug] || industryImages['manufacturing']}
                  alt={`${ind.title} logistics`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-[10px] font-mono font-bold uppercase tracking-wider text-sky-300 bg-[#07192D]/85 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-md">
                  VERTICAL
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-3">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <Link
                    href={`/industries#${ind.slug}`}
                    className="inline-flex items-center gap-1 font-bold text-sky-400 hover:text-sky-300"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
