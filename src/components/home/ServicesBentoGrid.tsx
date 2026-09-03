'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Ship,
  Scale,
  FileCheck2,
  ThermometerSnowflake,
  Building2,
  Coins,
  Layers,
} from 'lucide-react';
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

interface ServiceMeta {
  category: 'freight' | 'customs' | 'schemes';
  tag: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  statBadge: string;
  icon: React.ElementType;
}

const serviceMetaMap: Record<string, ServiceMeta> = {
  'logistics-shipping': {
    category: 'freight',
    tag: 'Core Infrastructure',
    badgeBg: 'bg-sky-500/15',
    badgeText: 'text-sky-300',
    badgeBorder: 'border-sky-400/30',
    statBadge: 'Tier-1 Ocean & Air Carrier Rates',
    icon: Ship,
  },
  'cold-chain-solutions': {
    category: 'freight',
    tag: 'Cold-Chain Telemetry',
    badgeBg: 'bg-cyan-500/15',
    badgeText: 'text-cyan-300',
    badgeBorder: 'border-cyan-400/30',
    statBadge: '-25°C to +25°C Active IoT Monitoring',
    icon: ThermometerSnowflake,
  },
  'warehousing-distribution': {
    category: 'freight',
    tag: '3PL & Distribution',
    badgeBg: 'bg-blue-500/15',
    badgeText: 'text-blue-300',
    badgeBorder: 'border-blue-400/30',
    statBadge: 'Customs Bonded & Non-Bonded Hubs',
    icon: Building2,
  },
  'customs-compliance': {
    category: 'customs',
    tag: 'Customs Brokerage',
    badgeBg: 'bg-emerald-500/15',
    badgeText: 'text-emerald-300',
    badgeBorder: 'border-emerald-400/30',
    statBadge: 'ICEGATE Pre-Arrival EDI Filing',
    icon: ShieldCheck,
  },
  'licensing-registrations': {
    category: 'customs',
    tag: 'Statutory Licensing',
    badgeBg: 'bg-teal-500/15',
    badgeText: 'text-teal-300',
    badgeBorder: 'border-teal-400/30',
    statBadge: 'IEC • RCMC • AEO Certification',
    icon: Scale,
  },
  'tax-gst-advisory': {
    category: 'customs',
    tag: 'EXIM Tax Advisory',
    badgeBg: 'bg-emerald-500/15',
    badgeText: 'text-emerald-300',
    badgeBorder: 'border-emerald-400/30',
    statBadge: 'SVB Defense & GST Input Reconciliation',
    icon: Scale,
  },
  'export-incentives': {
    category: 'schemes',
    tag: 'Statutory Remissions',
    badgeBg: 'bg-amber-500/15',
    badgeText: 'text-amber-300',
    badgeBorder: 'border-amber-400/30',
    statBadge: 'RoDTEP • RoSCTL • EPCG Redemptions',
    icon: Coins,
  },
  'documentation-liaison': {
    category: 'schemes',
    tag: 'Liaison & LC Vetting',
    badgeBg: 'bg-indigo-500/15',
    badgeText: 'text-indigo-300',
    badgeBorder: 'border-indigo-400/30',
    statBadge: 'UCP 600 Letter of Credit Vetting',
    icon: FileCheck2,
  },
  'trade-risk-management': {
    category: 'schemes',
    tag: 'Risk & Insurance',
    badgeBg: 'bg-rose-500/15',
    badgeText: 'text-rose-300',
    badgeBorder: 'border-rose-400/30',
    statBadge: 'All-Risk Marine Cargo Indemnity',
    icon: ShieldCheck,
  },
};

const categoryTabs = [
  { id: 'all', label: 'All Capabilities' },
  { id: 'freight', label: 'Freight & Logistics' },
  { id: 'customs', label: 'Customs & DGFT' },
  { id: 'schemes', label: 'Incentives & Trade Advisory' },
];

export function ServicesBentoGrid({ services }: ServicesBentoGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [spotlightSlug, setSpotlightSlug] = useState<string>(
    services[0]?.slug || 'logistics-shipping'
  );

  const filteredServices = useMemo(() => {
    if (activeCategory === 'all') return services;
    return services.filter((s) => {
      const meta = serviceMetaMap[s.slug];
      return meta && meta.category === activeCategory;
    });
  }, [services, activeCategory]);

  const spotlightService = useMemo(() => {
    return (
      services.find((s) => s.slug === spotlightSlug) ||
      filteredServices[0] ||
      services[0]
    );
  }, [services, spotlightSlug, filteredServices]);

  const spotlightMeta =
    serviceMetaMap[spotlightService?.slug] || serviceMetaMap['logistics-shipping'];

  const SpotlightIcon = spotlightMeta.icon;

  return (
    <section className="py-20 sm:py-28 bg-neutral-50 border-t border-neutral-200 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
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
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
              From statutory DGFT authorizations to refrigerated ocean freight allocations and customs brokerage, we orchestrate every dimension of cross-border commerce.
            </p>
          </ScrollReveal>
        </div>

        {/* Interactive Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            const count =
              tab.id === 'all'
                ? services.length
                : services.filter((s) => serviceMetaMap[s.slug]?.category === tab.id).length;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveCategory(tab.id);
                  const firstOfCategory =
                    tab.id === 'all'
                      ? services[0]?.slug
                      : services.find((s) => serviceMetaMap[s.slug]?.category === tab.id)?.slug;
                  if (firstOfCategory) setSpotlightSlug(firstOfCategory);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0A2540] text-white shadow-md shadow-sky-950/15 ring-2 ring-[#0284C7]/40'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:text-neutral-900 hover:border-neutral-300 hover:bg-neutral-100/60'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-sky-200' : 'bg-neutral-100 text-neutral-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Split Layout: Sticky Featured Spotlight (Desktop) + Interactive Service Cards Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* ========================================================================= */}
          {/* LEFT: STICKY FEATURED SPOTLIGHT SHOWCASE (Desktop) */}
          {/* ========================================================================= */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-[114px]">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#0A2540] via-[#07192D] to-[#040D1A] p-6 sm:p-7 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between">
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 space-y-5">
                {/* Visual Image Banner with smooth transition */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-lg">
                  <Image
                    src={serviceImages[spotlightService?.slug] || serviceImages['logistics-shipping']}
                    alt={spotlightService?.title || 'SkyLink Global Service'}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center transition-all duration-700 hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/95 via-[#07192D]/40 to-transparent" />

                  {/* Top Category Tag */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-md ${spotlightMeta.badgeBg} ${spotlightMeta.badgeText} ${spotlightMeta.badgeBorder}`}
                    >
                      <SpotlightIcon className="w-3 h-3" />
                      <span>{spotlightMeta.tag}</span>
                    </span>
                  </div>

                  {/* Bottom Image Headline */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-[11px] font-mono text-sky-300 font-semibold block uppercase">
                      {spotlightMeta.statBadge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight mt-0.5">
                      {spotlightService?.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  {spotlightService?.shortDescription}
                </p>

                {/* Key Bullet Features */}
                <div className="space-y-2 pt-1 border-t border-white/10">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-400 block">
                    Core Milestone Scope
                  </span>
                  <div className="space-y-1.5">
                    {spotlightService?.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="relative z-10 pt-5 mt-5 border-t border-white/10 flex items-center justify-between gap-3">
                <Button
                  href={`/services/${spotlightService?.slug}`}
                  variant="primary"
                  size="sm"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  className="w-full justify-center"
                >
                  Explore Complete Service Scope
                </Button>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT: SCROLLABLE SERVICE CARDS FEED */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7 space-y-4">
            {filteredServices.map((srv, idx) => {
              const meta = serviceMetaMap[srv.slug] || serviceMetaMap['logistics-shipping'];
              const SrvIcon = meta.icon;
              const isSelected = spotlightSlug === srv.slug;

              return (
                <div
                  key={srv.id}
                  onMouseEnter={() => setSpotlightSlug(srv.slug)}
                  onClick={() => setSpotlightSlug(srv.slug)}
                  className={`rounded-2xl sm:rounded-3xl border p-5 sm:p-6 transition-all duration-300 group cursor-pointer ${
                    isSelected
                      ? 'bg-white border-sky-400 shadow-xl shadow-sky-500/10 ring-2 ring-sky-400/30'
                      : 'bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-md hover:bg-neutral-50/50'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    {/* Left: Icon & Title Block */}
                    <div className="flex items-start gap-3.5 flex-1">
                      <div
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border transition-colors ${
                          isSelected
                            ? 'bg-[#0A2540] text-sky-400 border-sky-500/30 shadow-sm'
                            : 'bg-sky-50 text-[#0284C7] border-sky-100 group-hover:bg-[#0A2540] group-hover:text-white group-hover:border-[#0A2540]'
                        }`}
                      >
                        <SrvIcon className="w-5 h-5" />
                      </div>

                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200">
                            {meta.tag}
                          </span>
                          <span className="text-[10px] font-mono text-neutral-400">
                            PRACTICE 0{idx + 1}
                          </span>
                        </div>

                        <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#0284C7] transition-colors leading-snug">
                          <Link href={`/services/${srv.slug}`}>{srv.title}</Link>
                        </h3>

                        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-2 pt-0.5">
                          {srv.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Right: Quick Action Arrow */}
                    <div className="shrink-0 sm:self-center pl-2">
                      <Link
                        href={`/services/${srv.slug}`}
                        className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all ${
                          isSelected
                            ? 'bg-[#0284C7] text-white border-[#0284C7]'
                            : 'bg-neutral-100 text-neutral-500 border-neutral-200 group-hover:bg-[#0284C7] group-hover:text-white group-hover:border-[#0284C7]'
                        }`}
                        aria-label={`View ${srv.title}`}
                      >
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Feature Badges Strip */}
                  <div className="mt-4 pt-3.5 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-neutral-600 font-medium">
                      {srv.features.slice(0, 2).map((feat, fIdx) => (
                        <span
                          key={fIdx}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-neutral-100 text-neutral-700"
                        >
                          <CheckCircle2 className="w-3 h-3 text-[#0284C7]" />
                          <span className="truncate max-w-[200px] sm:max-w-none">{feat}</span>
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/services/${srv.slug}`}
                      className="text-xs font-bold text-[#0284C7] hover:text-[#0369A1] inline-flex items-center gap-1 shrink-0 ml-auto"
                    >
                      <span>Service Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Directory Action Strip */}
        <div className="mt-14 pt-8 border-t border-neutral-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-600">
            <Layers className="w-4 h-4 text-[#0284C7]" />
            <span>Structured single-window execution across all 9 commercial practices.</span>
          </div>
          <Button href="/services" variant="secondary" size="sm" rightIcon={<ArrowRight className="w-4 h-4" />}>
            View Complete Services Directory
          </Button>
        </div>
      </div>
    </section>
  );
}
