import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { getAllIndustries } from '@/data/industries';
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  ThermometerSnowflake,
  Anchor,
  Factory,
  Package,
  HeartPulse,
} from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Industries We Serve | SkyLink Global Services — Specialized Sector Trade Solutions',
  description:
    'Tailored EXIM consultancy, temperature-controlled cold chain logistics, and customs compliance for pharmaceuticals, seafood, perishables, automotive, and general cargo.',
  path: '/industries',
});

const industryIcons: Record<string, React.ReactNode> = {
  pharmaceuticals: <HeartPulse className="w-6 h-6 text-sky-400" />,
  seafood: <Anchor className="w-6 h-6 text-sky-400" />,
  perishables: <ThermometerSnowflake className="w-6 h-6 text-sky-400" />,
  manufacturing: <Factory className="w-6 h-6 text-sky-400" />,
  'general-cargo': <Package className="w-6 h-6 text-sky-400" />,
};

const industryImages: Record<string, string> = {
  pharmaceuticals: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop',
  seafood: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=1200&auto=format&fit=crop',
  perishables: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1200&auto=format&fit=crop',
  manufacturing: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
  'general-cargo': 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop',
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
            className="text-neutral-400"
          />
          <div className="max-w-3xl space-y-4">
            <ScrollReveal effect="fade-down" delay={0}>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/30">
                Sector-Specific Expertise
              </span>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={80}>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Industries We Serve
              </h1>
            </ScrollReveal>
            <ScrollReveal effect="fade-up" delay={160}>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
                Every industry faces unique regulatory barriers, cargo preservation protocols, and customs classifications. SkyLink delivers tailored cross-border logistics engineered for your specific product vertical.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Industry Deep Dive Cards */}
      <section className="py-20 sm:py-28 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {industries.map((ind, idx) => (
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
                      {industryIcons[ind.slug] || <ShieldCheck className="w-6 h-6 text-sky-400" />}
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                        Industry Vertical 0{idx + 1}
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
                      src={industryImages[ind.slug] || industryImages['manufacturing']}
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

                {/* Action Button */}
                <div className="pt-6 flex justify-end">
                  <Button
                    href="/request-consultation"
                    variant="secondary"
                    size="md"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                  >
                    Consult for {ind.title.split('&')[0]}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

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
              Our trade engineers can design customized SOPs and customs templates for your enterprise.
            </p>
          </ScrollReveal>
          <ScrollReveal effect="scale-up" delay={160} className="pt-4">
            <Button href="/request-consultation" variant="secondary" size="md">
              Request Industry Consultation
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
