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
  Wheat,
  FlaskConical,
  Sprout,
  ThermometerSnowflake,
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Wind,
  FileCheck2,
  AlertTriangle,
  Plane,
} from 'lucide-react';

export const metadata: Metadata = getPageMetadata('industriesChemicalsAgro');


export default function SpecialtyChemicalsAgroPage() {
  const practiceSectors = [
    {
      title: 'Perishables & Fresh Produce',
      icon: Sprout,
      badge: 'APEDA & PSC LIAISON',
      desc: 'Controlled Atmosphere (CA) ocean reefer transport and express air cargo charters regulating O2 and CO2 levels to retard ripening for fruits, vegetables, and floriculture.',
      points: [
        'Direct plant quarantine liaison for Phytosanitary Certificates (PSC)',
        'Farm-gate to airport refrigerated drayage & pre-cooling',
        'Block space agreements on premier air carriers for peak harvest runs',
      ],
    },
    {
      title: 'Agro Fertilizers & Soil Nutrients',
      icon: Wheat,
      badge: 'BULK & CONTAINERIZED',
      desc: 'Multimodal bulk vessel chartering, moisture-proof container liner systems, and FCO (Fertilizer Control Order) statutory compliance across port entry corridors.',
      points: [
        'Dedicated bulk vessel discharge & bagging operations at port berths',
        'Heavy-duty container liners preventing moisture ingress and caking',
        'Direct rail rake movement from discharge ports to regional inland hubs',
      ],
    },
    {
      title: 'Specialty Chemicals & Polymers',
      icon: FlaskConical,
      badge: 'IMO / HAZMAT COMPLIANCE',
      desc: 'Stringent IMDG Code hazardous cargo handling, ISO tank container operations, and DGFT Advance Authorisation lifecycle management for complex specialty chemicals.',
      points: [
        'Certified Dangerous Goods (DG) documentation & packaging validation',
        'ISO Tank leasing, heating, and specialized multi-compartment haulage',
        'Zero-delay customs clearance under pre-arrival Bill of Entry filing',
      ],
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
                { name: 'Specialty Chemicals, Agro & Perishables', item: '/industries/specialty-chemicals-agro-fertilizers-perishables' },
              ]}
              className="text-neutral-400 mb-6"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal effect="fade-up" delay={80}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3.5 py-1.5 rounded-full border border-sky-400/30">
                  <Wheat className="w-3.5 h-3.5" />
                  Agro, Perishables &amp; Chemicals
                </span>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={140}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] text-balance">
                  Perishables, Agro Fertilizers &amp; Specialty Chemicals
                </h1>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={200}>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-2xl text-pretty font-normal">
                  Controlled Atmosphere (CA) cold chains, APEDA export facilitation, bulk fertilizer vessel operations, and hazardous IMO chemical compliance.
                </p>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={260}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button href="/request-consultation" variant="secondary" size="md">
                    Schedule Sector Consultation
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                  <Button href="/contact" variant="outline-light" size="md">
                    Connect With Agro &amp; Chem Desk
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal effect="fade-left" delay={200}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-neutral-900 group">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=1200&auto=format&fit=crop"
                      alt="Fresh produce perishables and agricultural export logistics"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-5 bg-[#07192D]/90 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-neutral-300">
                      <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
                        <Wind className="w-4 h-4 text-sky-400" />
                        Controlled Atmosphere (CA)
                      </span>
                      <span className="font-mono text-white">APEDA / IMDG Compliant</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE THREE SECTOR VERTICALS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Tailored Engineering"
            title="Three Dedicated Sector Practices"
            subtitle="Customized handling standards designed for the biochemical, regulatory, and shelf-life demands of each commodity."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {practiceSectors.map((sector, idx) => {
              const IconComp = sector.icon;
              return (
                <Card
                  key={idx}
                  variant="bordered"
                  className="p-8 bg-gradient-to-br from-white to-sky-50/40 border-neutral-200 hover-lift shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-[#0A2540] text-sky-400 flex items-center justify-center shadow-sm">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200">
                        {sector.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900">{sector.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{sector.desc}</p>

                    <div className="space-y-2 pt-3 border-t border-neutral-100">
                      {sector.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. REGULATORY COMPLIANCE PROTOCOLS */}
      <section className="py-16 sm:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Statutory Standards"
            title="Mandatory Regulatory Frameworks Handled"
            subtitle="Ensuring 100% adherence to national export bodies and destination quarantine laws."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { title: 'APEDA Certification', desc: 'Agricultural and Processed Food Products Export Development Authority compliance and online trace-net registration.' },
              { title: 'Phytosanitary & PSC', desc: 'Plant quarantine inspection, fumigation certification, and fast-track clearance for international agricultural consignments.' },
              { title: 'IMDG & Hazmat', desc: 'International Maritime Dangerous Goods code documentation, placarding, class segregation, and terminal stowage approvals.' },
              { title: 'Fertilizer Control Order', desc: 'Statutory compliance for bulk and containerized fertilizer import, bagging, and domestic rail haulage.' },
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0284C7] flex items-center justify-center mb-3">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-neutral-900 mb-1.5">{item.title}</h4>
                <p className="text-xs text-neutral-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-16 sm:py-20 bg-[#07192D] text-white text-center">
        <div className="mx-auto max-w-3xl px-4 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Ensure Unbroken Quality for Your Agro &amp; Chemical Exports
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Speak to our specialized trade desk for Controlled Atmosphere reefers, air block space, and hazardous cargo logistics.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Button href="/request-consultation" variant="secondary" size="md">
              Request Specialized Trade Proposal
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button href="/contact" variant="outline-light" size="md">
              Contact Commodity Specialists
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
