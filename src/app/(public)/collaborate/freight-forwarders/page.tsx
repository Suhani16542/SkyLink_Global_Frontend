import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import { getPageMetadata } from '@/lib/seo/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import {
  Handshake,
  Globe2,
  Ship,
  Users,
  ShieldCheck,
  TrendingUp,
  Building2,
  Scale,
  Award,
  Clock,
  Sparkles,
  Plane,
  Truck,
  DollarSign,
  Briefcase,
  Layers,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = getPageMetadata('collaborateFreightForwarders');

export default function FreightForwardersCollaborationPage() {
  const collaborationBenefits = [
    {
      title: 'Active Manufacturer & Enterprise Network',
      icon: Building2,
      desc: 'SkyLink acts as the dedicated single-window EXIM management desk for a diversified portfolio of manufacturers, exporters, and industrial corporations across key industrial hubs.',
    },
    {
      title: 'Opportunity for Competitive Freight Desks',
      icon: TrendingUp,
      desc: 'Because of our extensive enterprise network, freight forwarders, NVOCCs, and logistics agents gain direct access to ongoing containerized (FCL/LCL), air cargo, and multimodal demand.',
    },
    {
      title: 'Shipment Handling Through Your Desk',
      icon: Handshake,
      desc: 'When your agency provides a competitive, viable, and suitable commercial rate or superior transit solution on specific corridors, SkyLink actively considers routing and executing the shipment through your desk.',
    },
    {
      title: 'Merit-Based, Transparent & NDA Protected',
      icon: ShieldCheck,
      desc: 'All trade lane tariffs and operational terms are treated with complete confidentiality under bilateral NDA. Partner allocations are evaluated strictly on commercial merit and execution reliability.',
    },
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Rate & Route Proposal',
      desc: 'Forwarders share active trade lane rates, carrier space contracts, and equipment capabilities with our Alliances desk.',
    },
    {
      step: '02',
      title: 'Commercial Matchmaking',
      desc: 'Our operations desk evaluates your proposal against active manufacturer shipment schedules and target trade corridors.',
    },
    {
      step: '03',
      title: 'Shipment Allocation & Booking',
      desc: 'Upon commercial alignment, cargo bookings are confirmed and executed through your freight desk with dedicated operational liaison.',
    },
    {
      step: '04',
      title: 'Milestone Execution & Settlement',
      desc: 'Seamless milestone tracking, digital documentation clearance, and prompt settlement as per agreed commercial terms.',
    },
  ];

  const evaluationPillars = [
    {
      title: 'Direct Ocean & Air Space Allocation',
      desc: 'Guaranteed space allocations on tier-1 ocean shipping lines or express air freight carriers on high-demand EXIM corridors.',
      icon: Ship,
    },
    {
      title: 'Transparent All-In Commercials',
      desc: 'Clear freight rate breakdown with origin/destination surcharges, terminal handling charges (THC), and bunker adjustments.',
      icon: DollarSign,
    },
    {
      title: 'POD Detention / Free Days',
      desc: 'Competitive free-time allowances at destination ports to safeguard client commercial margins and reduce demurrage risk.',
      icon: Clock,
    },
    {
      title: 'Equipment Availability & Reliability',
      desc: 'Reliable equipment supply including dry vans, 40HC, super-freezer reefers (-40°C), open top, and flat rack availability.',
      icon: Truck,
    },
  ];

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#07192D] via-[#0A2540] to-[#07192D] text-white py-16 sm:py-24 border-b border-white/15 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="w-full flex justify-center text-center">
            <ScrollReveal effect="fade-down" delay={0} className="w-full flex justify-center text-center">
              <Breadcrumbs
                items={[
                  { name: 'Home', item: '/' },
                  { name: 'Why Collaborate With Us', item: '/collaborate/freight-forwarders' },
                  { name: 'Freight Forwarder & Logistics Agent Collaboration', item: '/collaborate/freight-forwarders' },
                ]}
                theme="dark"
                className="text-neutral-300 mb-6 justify-center text-center"
              />
            </ScrollReveal>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center space-y-5">
            <ScrollReveal effect="fade-up" delay={80} className="w-full flex justify-center text-center">
              <div className="flex flex-wrap items-center justify-center gap-2.5 mx-auto">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-300 bg-sky-400/10 px-3.5 py-1.5 rounded-full border border-sky-400/30">
                  <Handshake className="w-3.5 h-3.5 text-sky-400" />
                  Freight Forwarder / Agent Collaboration
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-400/30">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Merit-Based Commercial Routing</span>
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal effect="fade-up" delay={140} className="w-full text-center">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight text-balance text-center mx-auto">
                Freight Forwarder &amp; Logistics Agent Collaboration
              </h1>
            </ScrollReveal>

            <ScrollReveal effect="fade-up" delay={200} className="w-full flex justify-center text-center">
              <p className="text-base sm:text-lg text-neutral-200 leading-relaxed font-normal text-pretty max-w-3xl mx-auto text-center">
                Skylink has a strong network of manufacturers and businesses across diverse industries. When freight forwarders and logistics agents provide competitive and suitable commercial offers, Skylink actively routes and executes the relevant shipments through that freight partner.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. CORE COLLABORATION SECTION (BALANCED CONTENT + IMAGE PRESENTATION) */}
      <section id="collaboration-section" className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* LEFT COLUMN: Professional Content & Benefits */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>Strategic Logistics Alliance</span>
                </div>
                
                <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight leading-snug">
                  Connect Your Freight Desk to Steady Enterprise Cargo Flow
                </h2>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  SkyLink operates as the central EXIM logistics manager for an expanding network of industrial manufacturers, exporters, and trading enterprises across major manufacturing belts. Because of this robust network, freight forwarders and logistics agents have a direct opportunity to collaborate with SkyLink and present competitive freight proposals.
                </p>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  When a freight forwarder or NVOCC provides a better and suitable commercial freight offer or specialized routing solution on active corridors, SkyLink coordinates and handles the relevant shipments through that freight partner desk on transparent, agreed terms.
                </p>
              </div>

              {/* 4 Core Collaboration Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {collaborationBenefits.map((benefit, bIdx) => {
                  const BIcon = benefit.icon;
                  return (
                    <div
                      key={bIdx}
                      className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-xs hover:shadow-md hover:border-sky-300 transition-all space-y-2.5"
                    >
                      <div className="w-9 h-9 rounded-xl bg-[#0A2540] text-sky-400 flex items-center justify-center">
                        <BIcon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-neutral-900 leading-snug">
                        {benefit.title}
                      </h4>
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* RIGHT COLUMN: Professional Logistics Collaboration Image & Trust Card */}
            <div className="lg:col-span-6 space-y-5">
              {/* Main Collaboration Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/90 bg-neutral-900 group">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src="/images/freight-forwarder-agent-collaboration.png"
                    alt="Global freight forwarding and multimodal logistics operations with cargo ships, containers, trucks, and port handling"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07192D]/90 via-black/20 to-transparent" />
                </div>
                
                {/* Image Overlay Footer Badge */}
                <div className="p-4 sm:p-5 bg-[#07192D] border-t border-white/10 text-white flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-sky-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>100% Confidentiality &amp; Bilateral NDA Protected</span>
                  </div>
                  <span className="text-[11px] font-mono text-neutral-300">
                    Ocean • Air • Land • Port Operations
                  </span>
                </div>
              </div>

              {/* Commercial Partnership SLA & Governance Card */}
              <div className="p-6 rounded-3xl bg-white border border-neutral-200/90 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0284C7] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Evaluation Turnaround SLA</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                    24 Business Hours
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#0A2540]">
                  Objective &amp; Merit-Based Commercial Evaluation
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Every shared tariff and lane proposal is reviewed objectively against active manufacturer cargo schedules. If commercially aligned and backed by proven transit reliability, our freight coordinator initiates direct operational onboarding.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. EVALUATION CRITERIA: WHAT MAKES AN OFFER STAND OUT */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Offer Guidelines"
            title="What Makes a Commercial Offer Stand Out?"
            subtitle="We evaluate incoming forwarder proposals against active enterprise corridors based on clear commercial benchmarks."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {evaluationPillars.map((item, idx) => {
              const EIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-neutral-50/70 border border-neutral-200/90 p-6 shadow-xs hover:shadow-lg hover:border-sky-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-2xl bg-sky-100/80 text-[#0284C7] group-hover:bg-[#0284C7] group-hover:text-white transition-colors flex items-center justify-center shadow-xs">
                      <EIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#0284C7] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. STRUCTURED COLLABORATION WORKFLOW */}
      <section className="py-16 sm:py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Structured Process"
            title="How We Collaborate Step-by-Step"
            subtitle="A transparent, hassle-free framework for freight forwarders and logistics agencies to partner with SkyLink."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((stepItem, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-mono font-black text-[#0284C7] mb-3">
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

      {/* 5. FINAL CONTACT CTA */}
      <section className="py-16 sm:py-20 bg-[#07192D] text-white text-center">
        <div className="mx-auto max-w-3xl px-4 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Have Questions About Partnering With SkyLink?
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Our Commercial Partnerships Desk is available to discuss custom agency terms, bilateral NDA protocols, or volume corridor contracts.
          </p>
          <div className="pt-3 flex flex-wrap justify-center gap-4">
            <Button href="/contact" variant="secondary" size="md">
              Contact Commercial Desk
            </Button>
            <Button href="/request-consultation" variant="outline-light" size="md">
              Request Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
