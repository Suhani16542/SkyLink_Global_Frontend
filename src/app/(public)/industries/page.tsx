import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getPageMetadata } from '@/lib/seo/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { getAllIndustries } from '@/data/industries';
import { OtherIndustriesSection } from '@/components/industries/OtherIndustriesSection';
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  ThermometerSnowflake,
  Anchor,
  HeartPulse,
} from 'lucide-react';

export const metadata: Metadata = getPageMetadata('industries');

const industryIcons: Record<string, React.ReactNode> = {
  pharmaceuticals: <HeartPulse className="w-6 h-6 text-sky-400" />,
  pharma: <HeartPulse className="w-6 h-6 text-sky-400" />,
  seafood: <Anchor className="w-6 h-6 text-sky-400" />,
  seafoods: <Anchor className="w-6 h-6 text-sky-400" />,
  perishables: <ThermometerSnowflake className="w-6 h-6 text-sky-400" />,
  'specialty-chemicals-agro-fertilizers-perishables': (
    <ThermometerSnowflake className="w-6 h-6 text-sky-400" />
  ),
};

const industryImages: Record<string, string> = {
  pharmaceuticals:
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop',
  pharma:
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop',
  seafood:
    'https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=1200&auto=format&fit=crop',
  seafoods:
    'https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=1200&auto=format&fit=crop',
  perishables:
    'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1200&auto=format&fit=crop',
  'specialty-chemicals-agro-fertilizers-perishables':
    'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1200&auto=format&fit=crop',
};

export default async function IndustriesPage() {
  const industries = await getAllIndustries();

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#0A2540] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { name: 'Home', item: '/' },
              { name: 'Industries', item: '/industries' },
            ]}
            className="text-neutral-400 mb-6"
          />
          <div className="max-w-3xl space-y-4">
            <ScrollReveal effect="fade-down" delay={0}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3.5 py-1 rounded-full border border-sky-400/30">
                  Sector-Specific Expertise &amp; USPs
                </span>
                <a
                  href="#other-industries"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-300 hover:text-sky-300 bg-white/10 px-3 py-1 rounded-full border border-white/15 transition-colors"
                >
                  <span>14+ Other Industries</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={80}>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight text-balance">
                Industries We Serve
              </h1>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={160}>
              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 leading-relaxed font-normal text-pretty">
                Every industry faces unique regulatory barriers, cargo preservation protocols, and customs classifications. SkyLink delivers tailored cross-border logistics engineered for your specific product vertical.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3 Core Highlighted USP Industry Deep Dive Cards */}
      <section className="py-20 sm:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="border-b border-neutral-200 pb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
              Core Strengths &amp; Specializations
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 mt-1">
              Highlighted Industry Solutions
            </h2>
          </div>

          {industries.map((ind, idx) => {
            const detailHref = ind.href || `/industries/${ind.slug}`;

            return (
              <ScrollReveal
                key={ind.id}
                effect="fade-up"
                delay={idx * 60}
                duration={750}
                className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10 shadow-sm scroll-mt-28 hover-lift transition-all space-y-8"
              >
                <div id={ind.slug}>
                  {/* Header with Title and Icon */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-[#0A2540] text-white flex items-center justify-center shadow-sm shrink-0">
                        {industryIcons[ind.slug] || industryIcons[ind.id] || (
                          <ShieldCheck className="w-6 h-6 text-sky-400" />
                        )}
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                          Primary USP Vertical 0{idx + 1}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
                          {ind.title}
                        </h2>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {ind.keyHighlights.map((hl, hlIdx) => (
                        <span
                          key={hlIdx}
                          className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-[#0284C7] border border-sky-200"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visual + Description Split */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-8">
                    <div className="lg:col-span-5 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
                      <Image
                        src={
                          industryImages[ind.slug] ||
                          industryImages[ind.id] ||
                          'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop'
                        }
                        alt={`${ind.title} sector logistics`}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/70 via-transparent to-transparent" />
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                      <p className="text-base text-neutral-700 leading-relaxed">
                        {ind.description}
                      </p>
                      <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Specialized SOPs &amp; Statutory Green-Channel Clearance Ready</span>
                      </div>
                    </div>
                  </div>

                  {/* Challenges vs SkyLink Solutions Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 mt-8 border-t border-neutral-100">
                    {/* Challenges */}
                    <div className="rounded-2xl bg-red-50/60 border border-red-100 p-6 space-y-3">
                      <div className="flex items-center gap-2 text-red-700 font-bold text-sm">
                        <AlertTriangle className="w-4 h-4 shrink-0" />
                        <span>Key Sector Bottlenecks &amp; Risks</span>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                        {ind.challenges.map((c, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2">
                            <span className="text-red-500 font-bold">•</span>
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solutions */}
                    <div className="rounded-2xl bg-sky-50/60 border border-sky-100 p-6 space-y-3">
                      <div className="flex items-center gap-2 text-[#0284C7] font-bold text-sm">
                        <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                        <span>SkyLink Tailored Solution</span>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-neutral-700">
                        {ind.skylinkSolutions.map((s, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-6 flex flex-wrap items-center justify-end gap-3">
                    <Link
                      href={detailHref}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#0A2540] bg-neutral-100 hover:bg-neutral-200 transition-colors"
                    >
                      <span>Explore {ind.title.split('&')[0]} Hub</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Button
                      href={`/request-consultation?industry=${encodeURIComponent(ind.title)}`}
                      variant="secondary"
                      size="md"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                    >
                      Request Consultation
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Other Industries Dropdown / Multi-Sector Section */}
      <OtherIndustriesSection />

      {/* CTA Strip */}
      <section className="py-20 bg-[#07192D] text-white text-center">
        <div className="mx-auto max-w-3xl px-4 space-y-4">
          <ScrollReveal effect="fade-up" delay={0}>
            <h2 className="text-2xl sm:text-4xl font-bold text-white">
              Operate in a specialized industry vertical?
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={80}>
            <p className="text-sm sm:text-base text-neutral-300">
              Our trade engineers design customized SOPs, HS classifications, and customs templates for any commercial enterprise.
            </p>
          </ScrollReveal>
          <ScrollReveal effect="scale-up" delay={160} className="pt-4">
            <Button href="/request-consultation" variant="secondary" size="md">
              Request Consultation
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

