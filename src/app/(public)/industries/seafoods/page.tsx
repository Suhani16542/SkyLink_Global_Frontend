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
import {
  Fish,
  ThermometerSnowflake,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Anchor,
  Zap,
  Ship,
  FileCheck2,
} from 'lucide-react';

export const metadata: Metadata = getPageMetadata('industriesSeafoods');


export default function SeafoodsIndustryPage() {
  const seafoodFeatures = [
    {
      title: '-25°C to -40°C Super-Freezer Control',
      desc: 'Validated deep-freeze reefer containers preventing lipid oxidation, ice crystal formation, and texture loss in high-value shrimp, tuna, and cephalopods.',
      icon: ThermometerSnowflake,
    },
    {
      title: 'MPEDA & EIA Regulatory Facilitation',
      desc: 'Expert statutory liaison for Export Inspection Agency (EIA) health certificates, catch certificates, and antibiotic residue zero-tolerance clearance.',
      icon: FileCheck2,
    },
    {
      title: 'Priority Shore-Power Plug-In',
      desc: 'Proactive terminal coordination ensuring zero-delay container electrical connections at loading ports to prevent temperature spikes and surcharges.',
      icon: Zap,
    },
    {
      title: 'Direct Ocean Reefer Space Allocation',
      desc: 'Contracted reefer container availability with premier maritime carriers during peak seasonal harvest runs, guaranteeing vessel space.',
      icon: Ship,
    },
  ];

  const marineCommodities = [
    { name: 'Vannamei & Black Tiger Shrimp', temp: '-20°C to -25°C', market: 'USA, EU, China, Japan' },
    { name: 'Sashimi-Grade Yellowfin Tuna', temp: '-35°C to -50°C', market: 'Japan, EU, North America' },
    { name: 'Squid, Cuttlefish & Octopus', temp: '-20°C to -25°C', market: 'Mediterranean, Southeast Asia' },
    { name: 'Surimi & Value-Added Fish Fillets', temp: '-18°C to -22°C', market: 'East Asia, Middle East' },
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
                { name: 'Seafoods & Marine Exports', item: '/industries/seafoods' },
              ]}
              className="text-neutral-400 mb-6"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal effect="fade-up" delay={80}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3.5 py-1.5 rounded-full border border-sky-400/30">
                  <Fish className="w-3.5 h-3.5" />
                  Marine &amp; Aquaculture
                </span>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={140}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] text-balance">
                  Ultra-Low Deep Freeze &amp; MPEDA-Compliant Marine Logistics
                </h1>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={200}>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-2xl text-pretty font-normal">
                  Safeguarding premium seafood cargo with unbroken super-freezer cold chains (-25°C to -40°C), EIA health certification liaison, and direct carrier reefer allocations.
                </p>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={260}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button href="/request-consultation" variant="secondary" size="md">
                    Book Reefer Space Audit
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                  <Button href="/contact" variant="outline-light" size="md">
                    Connect With Marine Desk
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal effect="fade-left" delay={200}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-neutral-900 group">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=1200&auto=format&fit=crop"
                      alt="Seafood export and maritime cold chain reefer container"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-5 bg-[#07192D]/90 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-neutral-300">
                      <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
                        <ThermometerSnowflake className="w-4 h-4 text-sky-400" />
                        -25°C to -40°C Unbroken Deep Freeze
                      </span>
                      <span className="font-mono text-white">MPEDA / EIA Certified</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CORE CAPABILITIES */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Specialized Capabilities"
            title="Engineered for Marine & Seafood Exporters"
            subtitle="Eliminating cargo spoilage, antibiotic testing delays, and container demurrage."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {seafoodFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <Card
                  key={idx}
                  variant="bordered"
                  className="p-6 bg-gradient-to-br from-white to-sky-50/30 border-neutral-200 hover-lift shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-5 border border-sky-100">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">{feat.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{feat.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. COMMODITY TABLE */}
      <section className="py-16 sm:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Commodity Portfolio"
            title="Marine Commodities Handled"
            subtitle="Tailored thermal regimens and compliance protocols across major seafood categories."
          />

          <div className="overflow-x-auto mt-10 rounded-2xl border border-neutral-200 bg-white shadow-xs">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-[#0A2540] text-white">
                  <th className="py-4 px-6 font-semibold">Commodity Vertical</th>
                  <th className="py-4 px-6 font-semibold">Required Transit Temperature</th>
                  <th className="py-4 px-6 font-semibold">Primary Export Destinations</th>
                  <th className="py-4 px-6 font-semibold">Compliance Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {marineCommodities.map((item, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50/80 transition-colors">
                    <td className="py-4 px-6 font-bold text-neutral-900 flex items-center gap-2">
                      <Fish className="w-4 h-4 text-[#0284C7] shrink-0" />
                      {item.name}
                    </td>
                    <td className="py-4 px-6 font-mono font-semibold text-[#0284C7]">{item.temp}</td>
                    <td className="py-4 px-6 text-neutral-600">{item.market}</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        EIA &amp; MPEDA
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-16 sm:py-20 bg-[#07192D] text-white text-center">
        <div className="mx-auto max-w-3xl px-4 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Eliminate Reefer Space Shortages for Your Next Catch
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Secure pre-tripped reefer containers and priority shore-power plug-in at loading terminals.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Button href="/request-consultation" variant="secondary" size="md">
              Request Marine Reefer Space
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button href="/contact" variant="outline-light" size="md">
              Speak to Seafood Specialist
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
