import React from 'react';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SkyLinkAnimatedLogo } from '@/components/ui/SkyLinkAnimatedLogo';
import {
  ShieldCheck,
  Globe2,
  Users,
  Target,
  Eye,
  CheckCircle2,
  Scale,
} from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'About Us | SkyLink Global Services — B2B Trade & Logistics Leadership',
  description:
    'Discover SkyLink Global Services: our vision, mission, DGFT and customs regulatory expertise, and our global logistics coordination network.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Strip */}
      <section className="bg-[#0A2540] text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { name: 'Home', item: '/' },
              { name: 'About Us', item: '/about' },
            ]}
            className="text-neutral-400"
          />
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/30">
              Corporate Overview
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Built to Bridge Businesses and Global Markets
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              SkyLink Global Services is an institutional partner in cross-border trade facilitation, delivering end-to-end EXIM consultancy, international freight logistics, and statutory trade compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Motion Identity Section */}
      <section className="py-16 sm:py-20 bg-[#07192D] text-white border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/30">
                Brand &amp; Purpose
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                The Symbol of Seamless Global Commerce
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                The SkyLink emblem unites the globe with a golden orbital arc, a high-velocity transport aircraft, and a maritime container vessel—representing our commitment to uniting domestic manufacturers with international buyers through zero-defect compliance.
              </p>
              <div className="pt-2">
                <Button href="/brand" variant="secondary" size="sm">
                  Explore Motion Architecture &rarr;
                </Button>
              </div>
            </div>

            <div className="lg:col-span-7 flex justify-center">
              <SkyLinkAnimatedLogo
                variant="transparent"
                size="hero"
                showControls={true}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="bordered" className="p-8 bg-gradient-to-br from-white to-sky-50/40 border-neutral-200 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-[#0A2540] text-white flex items-center justify-center mb-5 shadow-sm">
                <Eye className="w-6 h-6 text-sky-400" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">Our Vision</h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
                To be the world&apos;s most dependable, transparent, and compliant B2B trade facilitation partner—empowering enterprises of all scales to connect markets, eliminate border friction, and unlock sustainable global commerce.
              </p>
            </Card>

            <Card variant="bordered" className="p-8 bg-gradient-to-br from-white to-sky-50/40 border-neutral-200 hover-lift">
              <div className="w-12 h-12 rounded-xl bg-[#0284C7] text-white flex items-center justify-center mb-5 shadow-sm">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-neutral-900">Our Mission</h2>
              <p className="mt-3 text-sm sm:text-base text-neutral-600 leading-relaxed">
                To simplify international trade through zero-defect statutory compliance, aggressive freight rate optimization, direct shipping line connectivity, and state-of-the-art temperature-controlled logistics.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Excellence */}
      <section className="py-16 sm:py-20 bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Institutional Strengths"
            title="The Four Pillars of SkyLink"
            subtitle="How we maintain operational excellence across complex cross-border corridors."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              {
                title: 'Regulatory Expertise',
                desc: 'DGFT, customs, and GST advisory handled by seasoned statutory trade specialists with decades of combined legal experience.',
                icon: Scale,
              },
              {
                title: 'Dedicated Team',
                desc: 'Tailored account managers providing single-point accountability for exporters, manufacturers, and importers.',
                icon: Users,
              },
              {
                title: 'Global Network',
                desc: 'Strategic coordination across premier shipping lines, air cargo carriers, bonded warehouses, and customs brokers worldwide.',
                icon: Globe2,
              },
              {
                title: 'Trusted Process',
                desc: 'Transparent, proactive, and zero-defect execution ensuring full statutory incentive recovery and on-time cargo delivery.',
                icon: ShieldCheck,
              },
            ].map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <Card key={idx} variant="bordered" className="p-6 bg-white hover-lift">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-4 border border-sky-100">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900">{pillar.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-neutral-600 leading-relaxed">{pillar.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Businesses Trust SkyLink */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                Proven Reliability
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                Why Global Enterprises Trust SkyLink
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed">
                International trade is fraught with hidden liabilities: sudden port detentions, unredeemed government incentives, documentation rejections, and cargo spoilage.
              </p>
              <p className="text-base text-neutral-600 leading-relaxed">
                SkyLink acts as your corporate shield and logistics accelerator. We ensure your business captures every rupee of government export remissions while your cargo moves seamlessly across international borders.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  '100% Statutory Customs & DGFT Compliance',
                  'Direct Ocean & Air Freight Rate Negotiation',
                  'GDP & FDA Validated Cold Chain Protection',
                  'Dedicated Single-Window Account Management',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-neutral-800 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button href="/request-consultation" variant="secondary" size="md">
                  Request an EXIM Consultation &rarr;
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#0A2540] text-white p-6 flex flex-col justify-between shadow-sm">
                <div className="text-3xl sm:text-4xl font-black text-sky-400">99.4%</div>
                <div className="mt-4 text-xs sm:text-sm text-neutral-300">
                  On-Time Customs Green Channel Clearance
                </div>
              </div>
              <div className="rounded-2xl bg-[#0284C7] text-white p-6 flex flex-col justify-between shadow-sm">
                <div className="text-3xl sm:text-4xl font-black text-white">20%+</div>
                <div className="mt-4 text-xs sm:text-sm text-sky-100">
                  Average Logistics Cost Reduction for Clients
                </div>
              </div>
              <div className="rounded-2xl bg-neutral-100 text-neutral-900 p-6 border border-neutral-200 flex flex-col justify-between shadow-xs">
                <div className="text-3xl sm:text-4xl font-black text-[#0A2540]">Zero</div>
                <div className="mt-4 text-xs sm:text-sm text-neutral-600">
                  Demurrage Liability on Managed Accounts
                </div>
              </div>
              <div className="rounded-2xl bg-neutral-100 text-neutral-900 p-6 border border-neutral-200 flex flex-col justify-between shadow-xs">
                <div className="text-3xl sm:text-4xl font-black text-[#0284C7]">24/7</div>
                <div className="mt-4 text-xs sm:text-sm text-neutral-600">
                  Global Trade Operations &amp; Telemetry Monitoring
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-[#07192D] text-white text-center">
        <div className="mx-auto max-w-3xl px-4 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            Ready to partner with a leader in international trade?
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Let our compliance advisors evaluate your trade corridors and statutory incentives today.
          </p>
          <div className="pt-4">
            <Button href="/request-consultation" variant="secondary" size="md">
              Start Free Trade Evaluation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
