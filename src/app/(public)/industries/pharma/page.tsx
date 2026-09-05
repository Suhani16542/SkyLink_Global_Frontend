import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getPageMetadata } from '@/lib/seo/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { StaggerContainer } from '@/components/animation/StaggerContainer';
import {
  HeartPulse,
  ThermometerSnowflake,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Clock,
  FileCheck2,
  Layers,
  Radio,
  Lock,
} from 'lucide-react';

export const metadata: Metadata = getPageMetadata('industriesPharma');


export default function PharmaIndustryPage() {
  const temperatureRanges = [
    { range: '2°C to 8°C', label: 'Refrigerated Cold Chain', desc: 'Vaccines, biological APIs, injectables, and diagnostic reagents requiring strict uninterrupted chill control.' },
    { range: '15°C to 25°C', label: 'Controlled Room Temp (CRT)', desc: 'Tablets, capsules, syrups, and formulations sensitive to tropical heat waves and humidity fluctuations.' },
    { range: '-20°C to -80°C', label: 'Ultra-Deep Freeze', desc: 'Cell cultures, genetic therapies, specialized APIs, and dry-ice validated consignments.' },
  ];

  const challengesAndSolutions = [
    {
      challenge: 'Severe financial loss and regulatory rejection resulting from unexpected temperature excursions during ramp transfers or customs hold.',
      solution: 'Validated active/passive packaging with continuous cellular/satellite IoT thermal logging, excursion alarms, and pre-tripped reefer containers.',
    },
    {
      challenge: 'Complex statutory documentation hurdles involving Assistant Drug Controller (ADC), US FDA 510(k), and EU GMP compliance.',
      solution: 'Dedicated in-house ADC port liaison desk ensuring pre-arrival paperless inspection filing and immediate green-channel customs clearance.',
    },
    {
      challenge: 'High risk of cargo compromise, counterfeit interception, or unauthorized container opening during multimodal ocean/air transit.',
      solution: 'Tamper-evident GPS electronic smart seals, geofenced corridor alerts, light sensor intrusion telemetry, and bonded armed transit options.',
    },
  ];

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
                { name: 'Pharmaceuticals & Healthcare', item: '/industries/pharma' },
              ]}
              className="text-neutral-400 mb-6"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal effect="fade-up" delay={80}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3.5 py-1.5 rounded-full border border-sky-400/30">
                  <HeartPulse className="w-3.5 h-3.5" />
                  Life Sciences &amp; Healthcare
                </span>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={140}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] text-balance">
                  GDP-Compliant Pharmaceutical Cold-Chain Logistics
                </h1>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={200}>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-2xl text-pretty font-normal">
                  End-to-end temperature preservation, real-time IoT telemetry, and zero-delay ADC customs clearance engineered to protect critical life-science shipments across global corridors.
                </p>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={260}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button href="/request-consultation" variant="secondary" size="md">
                    Schedule Pharma Logistics Audit
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                  <Button href="/contact" variant="outline-light" size="md">
                    Connect With Pharma Desk
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal effect="fade-left" delay={200}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-neutral-900 group">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop"
                      alt="Pharmaceutical laboratory cold chain logistics packaging"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
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
                      <span className="font-mono text-white">GDP &amp; US FDA Protocol</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TEMPERATURE CAPABILITIES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Thermal Control"
            title="Validated Temperature Ranges"
            subtitle="Precision environmental control tailored to pharmaceutical product specifications."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {temperatureRanges.map((item, idx) => (
              <Card
                key={idx}
                variant="bordered"
                className="p-8 bg-gradient-to-br from-white to-sky-50/40 border-neutral-200 hover-lift shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 text-sm font-black font-mono text-[#0284C7] bg-sky-50 px-3.5 py-1.5 rounded-xl border border-sky-200 mb-4">
                    <ThermometerSnowflake className="w-4 h-4" />
                    {item.range}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.label}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-emerald-600">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Validated SOP Guaranteed</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CHALLENGES & SOLUTIONS */}
      <section className="py-16 sm:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Pharma Risk Governance"
            title="Overcoming Life-Science Export Hurdles"
            subtitle="How SkyLink eliminates compliance risks and thermal excursions for pharmaceutical exporters."
          />

          <div className="space-y-6 mt-12">
            {challengesAndSolutions.map((item, idx) => (
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

      {/* 4. CTA */}
      <section className="py-16 sm:py-20 bg-[#07192D] text-white text-center">
        <div className="mx-auto max-w-3xl px-4 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Secure Your Pharmaceutical Supply Chain Today
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Consult with our life-sciences trade team for validated packaging, ADC clearance, and direct air/ocean cold-chain bookings.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Button href="/request-consultation" variant="secondary" size="md">
              Request Life-Sciences Consultation
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button href="/services/cold-chain-solutions" variant="outline-light" size="md">
              Explore Cold Chain Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
