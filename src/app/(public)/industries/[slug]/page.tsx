import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { otherIndustriesDetailData } from '@/data/otherIndustriesDetail';
import {
  Car,
  Factory,
  Cpu,
  Shirt,
  UtensilsCrossed,
  Sprout,
  FlaskConical,
  ShoppingBag,
  HardHat,
  Sun,
  Pickaxe,
  ShoppingCart,
  Wrench,
  Sparkles,
  Radio,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Layers,
  Clock,
  Zap,
} from 'lucide-react';

import { constructMetadata } from '@/lib/seo/metadata';

interface Props {
  params: Promise<{ slug: string }>;
}

const iconRegistry: Record<string, React.ComponentType<{ className?: string }>> = {
  Car,
  Factory,
  Cpu,
  Shirt,
  UtensilsCrossed,
  Sprout,
  FlaskConical,
  ShoppingBag,
  HardHat,
  Sun,
  Pickaxe,
  ShoppingCart,
  Wrench,
  Sparkles,
  ShieldCheck,
  Layers,
  Clock,
  Zap,
};

export async function generateStaticParams() {
  return Object.keys(otherIndustriesDetailData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const detail = otherIndustriesDetailData[slug];

  if (!detail) {
    return constructMetadata({
      title: 'Industry Not Found | SkyLink Global Services',
      description: 'The requested industry logistics specification could not be found.',
      noIndex: true,
      path: `/industries/${slug}`,
    });
  }

  return constructMetadata({
    title: detail.seoTitle,
    description: detail.seoDescription,
    path: `/industries/${slug}`,
    image: detail.heroImage,
    ogTitle: detail.seoTitle,
    ogDescription: detail.seoDescription,
  });
}

export default async function OtherIndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const detail = otherIndustriesDetailData[slug];

  if (!detail) {
    notFound();
  }

  const HeaderIcon = iconRegistry[detail.capabilities[0]?.iconName] || Sparkles;
  const deskButtonLabel = `Connect With ${detail.title.split('&')[0].trim()} Desk`;

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#07192D] via-[#0A2540] to-[#07192D] text-white py-16 sm:py-24 border-b border-white/10 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal effect="fade-down" delay={0}>
            <Breadcrumbs
              items={[
                { name: 'Home', item: '/' },
                { name: 'Industries', item: '/industries' },
                { name: detail.title, item: `/industries/${slug}` },
              ]}
              className="text-neutral-400 mb-6"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal effect="fade-up" delay={80}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3.5 py-1.5 rounded-full border border-sky-400/30">
                  <HeaderIcon className="w-3.5 h-3.5" />
                  {detail.badge}
                </span>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={140}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] text-balance">
                  {detail.heroTitle}
                </h1>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={200}>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-2xl text-pretty font-normal">
                  {detail.heroDescription}
                </p>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={260}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button href="/request-consultation" variant="secondary" size="md">
                    Request Consultation
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                  <Button href="/contact" variant="outline-light" size="md">
                    {deskButtonLabel}
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal effect="fade-left" delay={200}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-neutral-900 group">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={detail.heroImage}
                      alt={detail.heroImageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      priority
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-5 bg-[#07192D]/90 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-neutral-300">
                      <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
                        <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                        Active Telemetry Enabled
                      </span>
                      <span className="font-mono text-white text-[11px] sm:text-xs">
                        {detail.telemetryProtocol}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SPECIFICATIONS & CAPABILITIES (Exact Pharma Layout) */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={detail.capabilitiesBadge}
            title={detail.capabilitiesTitle}
            subtitle={detail.capabilitiesSubtitle}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {detail.capabilities.map((item, idx) => {
              const CardIcon = iconRegistry[item.iconName] || HeaderIcon;
              return (
                <Card
                  key={idx}
                  variant="bordered"
                  className="p-8 bg-gradient-to-br from-white to-sky-50/40 border-neutral-200 hover-lift shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-sm font-black font-mono text-[#0284C7] bg-sky-50 px-3.5 py-1.5 rounded-xl border border-sky-200 mb-4">
                      <CardIcon className="w-4 h-4" />
                      {item.badge}
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Validated SOP Guaranteed</span>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. RISK GOVERNANCE: CHALLENGES & SOLUTIONS (Exact Pharma Layout) */}
      <section className="py-16 sm:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge={detail.challengesBadge}
            title={detail.challengesTitle}
            subtitle={detail.challengesSubtitle}
          />

          <div className="space-y-6 mt-12">
            {detail.challengesAndSolutions.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-xs hover:shadow-md transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
              >
                <div className="lg:col-span-5 space-y-2">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>Industry Challenge</span>
                  </div>
                  <p className="text-sm sm:text-base text-neutral-800 font-medium leading-relaxed">
                    {item.challenge}
                  </p>
                </div>

                <div className="lg:col-span-2 hidden lg:flex justify-center text-neutral-300">
                  <ArrowRight className="w-6 h-6 text-[#0284C7]" />
                </div>

                <div className="lg:col-span-5 space-y-2">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>SkyLink Solution</span>
                  </div>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA (Exact Pharma Layout) */}
      <section className="py-16 sm:py-20 bg-[#07192D] text-white text-center">
        <div className="mx-auto max-w-3xl px-4 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            {detail.ctaTitle}
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            {detail.ctaDescription}
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Button href="/request-consultation" variant="secondary" size="md">
              Request Consultation
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button href="/services/logistics-shipping" variant="outline-light" size="md">
              Explore Logistics Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
