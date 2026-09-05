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
  Handshake,
  Globe2,
  Ship,
  Users,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  Lock,
  Building2,
  FileCheck2,
} from 'lucide-react';

export const metadata: Metadata = getPageMetadata('collaborateFreightForwarders');


export default function FreightForwardersCollaborationPage() {
  const allianceBenefits = [
    {
      title: 'Neutral Statutory Trade Facilitation',
      icon: ShieldCheck,
      desc: 'We respect forwarder client confidentiality with strict Non-Disclosure Agreements (NDAs). We handle DGFT licensing, customs brokerage, and tax refunds purely as your technical back-end partner.',
    },
    {
      title: 'Volume Co-Loading & Space Access',
      icon: Ship,
      desc: 'Leverage our contracted tier-1 shipping line and air cargo space allocations across high-demand corridors to secure guaranteed container slots and competitive rates during peak shipping seasons.',
    },
    {
      title: 'Dedicated Port Liaison & DPD Delivery',
      icon: Zap,
      desc: 'Our ground teams at major gateway seaports (Nhava Sheva, Mundra, Chennai, Hazira) and air cargo complexes handle immediate cargo release, terminal plug-ins, and bonded transit.',
    },
    {
      title: 'Overseas Agency Representation',
      icon: Globe2,
      desc: 'Act as our international destination handling partner for inbound consignments, or rely on SkyLink as your exclusive pan-India customs and delivery partner.',
    },
  ];

  const partnershipWorkflow = [
    { step: '01', title: 'Agency NDA & Mutual Onboarding', desc: 'Execution of bilateral Non-Disclosure and agency partnership agreements guaranteeing client ring-fencing.' },
    { step: '02', title: 'Rate Integration & Co-Loading Allocation', desc: 'Integration of pre-negotiated carrier space quotas, tariff matrices, and special port handling rates.' },
    { step: '03', title: 'Single-Desk Operations & Telemetry', desc: 'Assignment of dedicated alliance coordinator with live digital milestone tracking and 24/7 port liaison.' },
    { step: '04', title: 'Seamless Billing & Volume Rebates', desc: 'Transparent all-in invoicing with predictable credit terms and quarterly volume growth incentives.' },
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
                { name: 'Why Collaborate With Us', item: '/collaborate/freight-forwarders' },
                { name: 'Freight Forwarders Collaboration', item: '/collaborate/freight-forwarders' },
              ]}
              className="text-neutral-400 mb-6"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal effect="fade-up" delay={80}>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-400/10 px-3.5 py-1.5 rounded-full border border-sky-400/30">
                  <Handshake className="w-3.5 h-3.5" />
                  Strategic Agency Alliance
                </span>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={140}>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                  Freight Forwarders &amp; Global Agency Collaboration
                </h1>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={200}>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
                  Expand your operational reach across India. Partner with SkyLink for neutral EXIM regulatory advisory, customs clearance, reefer cold chain, and tier-1 co-loading capacity.
                </p>
              </ScrollReveal>

              <ScrollReveal effect="fade-up" delay={260}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Button href="/collaborate/enquiry" variant="secondary" size="md">
                    Submit Partnership Enquiry
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                  <Button href="/contact" variant="outline-light" size="md">
                    Contact Alliance Manager
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal effect="fade-left" delay={200}>
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-neutral-900 group">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop"
                      alt="International business handshake and freight forwarders partnership"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-5 bg-[#07192D]/90 border-t border-white/10">
                    <div className="flex items-center justify-between text-xs text-neutral-300">
                      <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
                        <Lock className="w-4 h-4 text-emerald-400" />
                        100% Client Neutrality Guaranteed
                      </span>
                      <span className="font-mono text-white">Pan-India Port Coverage</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE 4 ALLIANCE PILLARS */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Partner Benefits"
            title="Why Forwarders Partner With SkyLink"
            subtitle="Enhance your service capabilities without capital overhead or regulatory risks."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {allianceBenefits.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <Card
                  key={idx}
                  variant="bordered"
                  className="p-8 bg-gradient-to-br from-white to-sky-50/40 border-neutral-200 hover-lift shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0A2540] text-sky-400 flex items-center justify-center shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PARTNERSHIP WORKFLOW */}
      <section className="py-16 sm:py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Onboarding Journey"
            title="How We Work Together"
            subtitle="A structured 4-step framework for seamless agency coordination."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {partnershipWorkflow.map((stepItem, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-mono font-black text-sky-600 mb-3">
                    {stepItem.step}
                  </div>
                  <h4 className="text-base font-bold text-neutral-900 mb-2">{stepItem.title}</h4>
                  <p className="text-xs text-neutral-600 leading-relaxed">{stepItem.desc}</p>
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
            Ready to Build a Strategic Logistics Alliance?
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Submit your agency profile or request a partnership discussion with our alliance management desk.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Button href="/collaborate/enquiry" variant="secondary" size="md">
              Submit Agency Enquiry
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Button>
            <Button href="/contact" variant="outline-light" size="md">
              Speak to Network Desk
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
