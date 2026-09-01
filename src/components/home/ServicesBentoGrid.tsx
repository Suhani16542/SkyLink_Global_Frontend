'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { Button } from '@/components/ui/Button';
import type { Service } from '@/types';

interface ServicesBentoGridProps {
  services: Service[];
}

const serviceImages: Record<string, string> = {
  'logistics-shipping':
    'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
  'export-incentives':
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop',
  'customs-compliance':
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
  'cold-chain-solutions':
    'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=800&auto=format&fit=crop',
  'warehousing-distribution':
    'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop',
  'documentation-liaison':
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
  'trade-risk-management':
    'https://images.unsplash.com/photo-1505705694340-019e1e335916?q=80&w=800&auto=format&fit=crop',
  'licensing-registrations':
    'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=800&auto=format&fit=crop',
  'tax-gst-advisory':
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
};

export function ServicesBentoGrid({ services }: ServicesBentoGridProps) {
  // Find key featured services
  const heroFreight =
    services.find((s) => s.slug === 'logistics-shipping') || services[0];
  const incentives =
    services.find((s) => s.slug === 'export-incentives') || services[1];
  const customs =
    services.find((s) => s.slug === 'customs-compliance') || services[2];

  const otherServices = services.filter(
    (s) =>
      s.slug !== 'logistics-shipping' &&
      s.slug !== 'export-incentives' &&
      s.slug !== 'customs-compliance'
  );

  return (
    <section className="py-20 sm:py-28 bg-neutral-50 border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <ScrollReveal effect="fade-down" delay={0}>
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-xs font-bold text-[#0284C7] uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Comprehensive EXIM Portfolio</span>
            </span>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={80}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
              End-to-End International Trade Capabilities
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={160}>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              From statutory DGFT authorizations to refrigerated ocean freight allocations and customs brokerage, we orchestrate every dimension of cross-border commerce.
            </p>
          </ScrollReveal>
        </div>

        {/* Top Tier: Bento Hero Row (7 cols + 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Card 1: Large Featured Logistics Hero (7 cols) */}
          <ScrollReveal
            effect="fade-right"
            delay={100}
            duration={750}
            className="lg:col-span-7 rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-sm flex flex-col justify-between group hover-lift relative"
          >
            {/* Visual Header with Real Image */}
            <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden bg-neutral-900">
              <Image
                src={serviceImages['logistics-shipping']}
                alt="International ocean freight vessel and container shipping logistics"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/90 via-[#07192D]/40 to-transparent" />

              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-300 bg-[#07192D]/90 px-3 py-1 rounded-full border border-white/15 backdrop-blur-md">
                  CORE INFRASTRUCTURE
                </span>
              </div>

              <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-xs font-mono uppercase text-sky-300 font-bold block">
                    Direct Tier-1 Carrier Allocation
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {heroFreight.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Content & Feature Highlights */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
                {heroFreight.shortDescription}
              </p>

              {/* Bullet Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {heroFreight.features.slice(0, 4).map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-neutral-800">
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span className="truncate">{feat}</span>
                  </div>
                ))}
              </div>

              {/* Footer CTA Strip */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs sm:text-sm font-bold text-sky-700">FCL • LCL • Air Charter • Incoterms Execution</span>
                <Link
                  href={`/services/${heroFreight.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors"
                >
                  <span>Explore Freight Desk</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: 2 Medium Featured Cards (5 cols stacked) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Medium Card 1: Export Incentives */}
            <ScrollReveal
              effect="fade-left"
              delay={150}
              duration={700}
              className="rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-sm flex flex-col justify-between group hover-lift flex-1"
            >
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-md border border-sky-200">
                      STATUTORY REMISSIONS
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-[#0284C7] transition-colors mt-2">
                      <Link href={`/services/${incentives.slug}`}>{incentives.title}</Link>
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center shrink-0 border border-sky-100">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-sm sm:text-[15px] text-neutral-600 leading-relaxed font-normal line-clamp-2">
                  {incentives.shortDescription}
                </p>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-neutral-500 font-medium">RoDTEP • RoSCTL • EPCG • Drawback</span>
                  <Link
                    href={`/services/${incentives.slug}`}
                    className="font-bold text-[#0284C7] inline-flex items-center gap-1 hover:text-[#0369A1]"
                  >
                    <span>View Scheme</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Medium Card 2: Customs Clearance */}
            <ScrollReveal
              effect="fade-left"
              delay={200}
              duration={700}
              className="rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-sm flex flex-col justify-between group hover-lift flex-1"
            >
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                      CUSTOMS BROKERAGE
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-[#0284C7] transition-colors mt-2">
                      <Link href={`/services/${customs.slug}`}>{customs.title}</Link>
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-sm sm:text-[15px] text-neutral-600 leading-relaxed font-normal line-clamp-2">
                  {customs.shortDescription}
                </p>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs sm:text-sm">
                  <span className="text-neutral-500 font-medium">ICEGATE EDI • HS Code • Faceless Assessment</span>
                  <Link
                    href={`/services/${customs.slug}`}
                    className="font-bold text-[#0284C7] inline-flex items-center gap-1 hover:text-[#0369A1]"
                  >
                    <span>View Clearance</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom Tier: 6 Integrated Specialized Services in 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServices.map((srv, idx) => (
            <ScrollReveal
              key={srv.id}
              effect="fade-up"
              delay={100 + idx * 60}
              duration={650}
              className="rounded-3xl border border-neutral-200 bg-white overflow-hidden shadow-sm flex flex-col justify-between group hover-lift h-full"
            >
              {/* Card Image Banner */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={serviceImages[srv.slug] || serviceImages['logistics-shipping']}
                  alt={`SkyLink ${srv.title} trade solution`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-mono font-bold uppercase tracking-wider text-sky-300 bg-[#07192D]/85 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-md">
                  PRACTICE 0{idx + 4}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-[#0284C7] transition-colors">
                    <Link href={`/services/${srv.slug}`}>{srv.title}</Link>
                  </h3>
                  <p className="mt-2 text-sm sm:text-[15px] text-neutral-600 leading-relaxed font-normal line-clamp-3">
                    {srv.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs sm:text-sm">
                  <Link
                    href={`/services/${srv.slug}`}
                    className="inline-flex items-center gap-1 font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors"
                  >
                    <span>Explore Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Full Catalog Button */}
        <ScrollReveal effect="fade-up" delay={200} className="mt-14 text-center">
          <Button href="/services" variant="primary" size="lg" className="shadow-lg shadow-sky-900/10">
            View Complete Services Directory &rarr;
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
}
