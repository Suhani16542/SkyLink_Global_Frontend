'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  Scale,
  Ship,
  Sparkles,
  ArrowRight,
  Radio,
  CheckCircle2,
  TrendingUp,
  FileCheck2,
  Thermometer,
  Anchor,
  Globe2,
} from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

export function StrategicPartnerSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#07192D] text-white relative overflow-hidden border-b border-white/10">
      {/* Background Graticule Grid Lines & Ambient World Map Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-50" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[400px] bg-sky-500/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#0284C7]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER: High-Impact Corporate Heading */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <ScrollReveal effect="fade-down" delay={0}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs font-bold text-sky-300 uppercase tracking-wider shadow-sm">
              <TrendingUp className="w-3.5 h-3.5 text-sky-400" />
              <span>Strategic Trade &amp; EXIM Partner</span>
            </span>
          </ScrollReveal>
          
          <ScrollReveal effect="fade-up" delay={80}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.12]">
              Your Trusted Partner in Global Commerce
            </h2>
          </ScrollReveal>

          <ScrollReveal effect="fade-up" delay={140}>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto">
              Bridging statutory foreign trade policy mandates with wholesale commercial logistics, enabling enterprises to move cross-border cargo with guaranteed compliance and predictable freight velocity.
            </p>
          </ScrollReveal>
        </div>

        {/* ========================================================================= */}
        {/* BENTO ARCHITECTURE: 4 Distinct Asymmetric Capability Modules */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* ------------------------------------------------------------------------- */}
          {/* MODULE 1: DGFT & EXIM Advisory (Left Column, 4 Cols) */}
          {/* ------------------------------------------------------------------------- */}
          <ScrollReveal effect="fade-up" delay={100} className="md:col-span-12 lg:col-span-4 flex">
            <div className="w-full rounded-3xl p-7 bg-[#0A2540]/80 border border-white/15 backdrop-blur-md flex flex-col justify-between group hover:border-sky-400/50 hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-sky-400/5 rounded-full blur-2xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-sky-400 to-[#0284C7] text-white flex items-center justify-center shadow-lg shadow-sky-500/25 group-hover:scale-105 transition-transform duration-300">
                    <Scale className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30">
                    100% Policy Adherence
                  </span>
                </div>

                <h3 className="text-xl font-black text-white tracking-tight mb-2 group-hover:text-sky-300 transition-colors">
                  DGFT &amp; Statutory EXIM Advisory
                </h3>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  Comprehensive trade facilitation spanning Advance Authorizations, EPCG capital goods scrips, and RoDTEP export incentive realization with zero audit non-compliance.
                </p>

                {/* Micro Checklist */}
                <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-neutral-300 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Advance Authorization &amp; EPCG Scrips</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Harmonized HS Code Classification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Duty Drawback &amp; RoDTEP Monetization</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-sky-300 font-semibold group-hover:text-white transition-colors">
                <span>Explore DGFT Advisory</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </ScrollReveal>

          {/* ------------------------------------------------------------------------- */}
          {/* MODULE 2: Tier-1 Carrier Freight Velocity (Center Visual Hub, 4 Cols) */}
          {/* ------------------------------------------------------------------------- */}
          <ScrollReveal effect="fade-up" delay={200} className="md:col-span-12 lg:col-span-4 flex">
            <div className="w-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative bg-[#07192D] group flex flex-col justify-between min-h-[420px]">
              
              {/* High-Resolution Background Imagery of Ocean Container Port */}
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
                alt="Direct Tier-1 ocean vessel space and automated container cargo terminal"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 brightness-105"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07192D] via-[#07192D]/70 to-[#07192D]/40 pointer-events-none" />

              {/* Top Status Bar Inside Card */}
              <div className="relative z-10 p-6 flex items-center justify-between">
                <div className="glass-panel-dark px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-2 backdrop-blur-md shadow-md">
                  <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold text-white tracking-wider">
                    DIRECT CARRIER CONTRACTS
                  </span>
                </div>
                <div className="glass-panel-dark px-2.5 py-1 rounded-full border border-white/20 text-[10px] font-mono font-bold text-sky-300">
                  TIER-1
                </div>
              </div>

              {/* Bottom Content Area Inside Card */}
              <div className="relative z-10 p-6 space-y-3">
                <h3 className="text-xl font-black text-white tracking-tight">
                  Multimodal Freight Velocity
                </h3>
                <p className="text-xs text-neutral-200 leading-relaxed">
                  Contracted volume allocations across Maersk, MSC, and CMA CGM maritime lanes with integrated CFS inland hub connectivity and zero space roll-overs.
                </p>

                {/* Floating Corridor Pill */}
                <div className="glass-panel-dark p-3 rounded-xl border border-white/20 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-white font-bold">
                    <Anchor className="w-3.5 h-3.5 text-sky-400" />
                    <span>25+ Global Trade Desks</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-400">
                    2,500+ TEUs
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ------------------------------------------------------------------------- */}
          {/* MODULE 3 & 4: Stacked Customs & Cold Chain Cards (Right Column, 4 Cols) */}
          {/* ------------------------------------------------------------------------- */}
          <div className="md:col-span-12 lg:col-span-4 flex flex-col gap-6">
            
            {/* Card 3: Customs Green-Channel */}
            <ScrollReveal effect="fade-up" delay={250} className="flex-1 flex">
              <div className="w-full rounded-3xl p-6 bg-[#0A2540]/80 border border-white/15 backdrop-blur-md flex flex-col justify-between group hover:border-sky-400/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-[#0284C7] text-white flex items-center justify-center shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform duration-300">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-300 bg-sky-950/80 px-2.5 py-0.5 rounded-full border border-sky-400/30">
                    AEO T2 Green Channel
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                    Zero-Demurrage Customs Clearance
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                    Rapid ICEGATE EDI pre-arrival filings and bonded CFS staging, eliminating port hold-ups and terminal demurrage penalties.
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>ICEGATE Paperless Clearance</span>
                  <span className="text-emerald-400 font-bold">100% On-Time</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 4: GDP Cold Chain Integrity */}
            <ScrollReveal effect="fade-up" delay={300} className="flex-1 flex">
              <div className="w-full rounded-3xl p-6 bg-[#0A2540]/80 border border-white/15 backdrop-blur-md flex flex-col justify-between group hover:border-sky-400/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400 to-[#0284C7] text-white flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-400/30">
                    -25°C to +25°C
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                    GDP Cold Chain &amp; Risk Integrity
                  </h3>
                  <p className="text-xs text-neutral-300 mt-1 leading-relaxed">
                    High-precision pharmaceutical reefer logistics with active continuous IoT temperature logging and all-risk cargo indemnity.
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                  <span>Live IoT Telemetry Stream</span>
                  <span className="text-cyan-400 font-bold">GDP Certified</span>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* EXECUTIVE TRUST ACTION BAR */}
        {/* ========================================================================= */}
        <ScrollReveal effect="fade-up" delay={350} className="mt-14 sm:mt-16 text-center">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#0A2540]/60 border border-white/10 backdrop-blur-md max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="text-left space-y-1">
              <div className="text-base font-bold text-white">
                Ready to accelerate your cross-border trade operations?
              </div>
              <div className="text-xs sm:text-sm text-neutral-300">
                Consult with our senior EXIM advisors and get a custom trade assessment today.
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link
                href="/request-consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#0284C7] hover:bg-[#0369A1] shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <span>Request Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 cursor-pointer"
              >
                <span>Our Foundation</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
