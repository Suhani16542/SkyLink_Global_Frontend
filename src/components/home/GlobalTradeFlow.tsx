'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  MapPin,
  Anchor,
  Ship,
  FileCheck2,
  Globe2,
  Sparkles,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
} from 'lucide-react';

interface TradeStage {
  step: string;
  label: string;
  sublabel: string;
  details: string;
  icon: React.ElementType;
  color: string;
  badge: string;
}

const tradeStages: TradeStage[] = [
  {
    step: '01',
    label: 'INDIA ORIGIN',
    sublabel: 'Manufacturing & Export Hubs',
    details: 'Factory staging, export packaging & inland transport',
    icon: MapPin,
    color: '#38BDF8', // Sky
    badge: 'Origin',
  },
  {
    step: '02',
    label: 'PORT GATEWAY',
    sublabel: 'Customs Staging & 3PL Logistics',
    details: 'Bonded ICD warehousing & port container drayage',
    icon: Anchor,
    color: '#0284C7', // SkyLink Blue
    badge: 'Gateway',
  },
  {
    step: '03',
    label: 'CUSTOMS CLEARANCE',
    sublabel: 'Green-Channel EDI Release',
    details: 'ICEGATE pre-filing, duty assessment & compliance',
    icon: FileCheck2,
    color: '#10B981', // Emerald Green
    badge: 'Statutory',
  },
  {
    step: '04',
    label: 'GLOBAL SHIPPING',
    sublabel: 'Ocean & Air Freight Corridors',
    details: 'Tier-1 vessel space, tracking & cargo security',
    icon: Ship,
    color: '#0EA5E9', // Cyan Blue
    badge: 'Transit',
  },
  {
    step: '05',
    label: 'GLOBAL DESTINATION',
    sublabel: 'Consignee Delivery in 25+ Markets',
    details: 'Final port clearance, DPD & door-step fulfillment',
    icon: Globe2,
    color: '#6366F1', // Indigo Accent
    badge: 'Delivery',
  },
];

export function GlobalTradeFlow() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState(1);
  const [isInView, setIsInView] = useState(false);

  // Performance-optimized IntersectionObserver (no scroll thrashing)
  useEffect(() => {
    const elem = sectionRef.current;
    if (!elem) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(elem);
    return () => observer.disconnect();
  }, []);

  // Smooth step progression timer when in view (or interactive on hover/click)
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev >= 5 ? 1 : prev + 1));
    }, 2800);

    return () => clearInterval(interval);
  }, [isInView]);

  const handleStepClick = useCallback((stepIndex: number) => {
    setActiveStep(stepIndex);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-14 sm:py-20 lg:py-24 bg-[#07192D] text-white relative overflow-hidden border-b border-white/10 select-none contain-paint"
    >
      {/* Optimized Ambient Background (Hardware-accelerated, lightweight) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none transform-gpu" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* SECTION HEADER */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center justify-center space-y-3 mb-12 sm:mb-16">
          <div className="w-full flex justify-center text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-xs font-bold text-sky-300 uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>How SkyLink Connects Global Trade</span>
            </span>
          </div>

          <div className="w-full text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance text-center mx-auto">
              Connecting Businesses to Global Markets
            </h2>
          </div>

          <div className="w-full flex justify-center text-center">
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto text-center font-normal">
              From origin manufacturing hubs to final overseas destinations, our single-window logistics framework orchestrates every stage with precision and compliance.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP FLOWCHART VIEW (High-Performance CSS Transition, Zero Scroll Lag) */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative py-6">
          
          {/* Continuous Track Line Behind Nodes */}
          <div className="absolute top-[52px] left-[8%] right-[8%] h-1 bg-white/10 rounded-full z-0 pointer-events-none overflow-hidden">
            {/* Smooth hardware-accelerated animated progress line */}
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-sky-400 via-[#0284C7] to-emerald-400 rounded-full transition-all duration-500 ease-out transform-gpu"
              style={{
                width: `${((activeStep - 1) / 4) * 100}%`,
              }}
            />
          </div>

          {/* 5 Milestone Nodes in a 5-Column Flow Grid */}
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {tradeStages.map((stage, idx) => {
              const IconComp = stage.icon;
              const stepNum = idx + 1;
              const isActive = activeStep === stepNum;
              const isPassed = activeStep >= stepNum;

              return (
                <div
                  key={stage.step}
                  onClick={() => handleStepClick(stepNum)}
                  className="flex flex-col items-center text-center cursor-pointer group transition-transform duration-200"
                >
                  {/* Glowing Node Circle Beacon */}
                  <div className="relative mb-4">
                    {/* Active Pulsing Ring */}
                    {isActive && (
                      <span
                        className="absolute inset-0 rounded-2xl animate-ping opacity-30 pointer-events-none"
                        style={{ backgroundColor: stage.color }}
                      />
                    )}

                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white transition-all duration-300 shadow-md ${
                        isActive
                          ? 'bg-gradient-to-br from-[#0A2540] to-[#0284C7] scale-110 ring-2 ring-sky-400'
                          : isPassed
                          ? 'bg-[#0A2540] border-2 border-sky-400/80 hover:scale-105'
                          : 'bg-[#07192D] border border-white/20 opacity-70 hover:opacity-100 hover:scale-105'
                      }`}
                      style={{
                        borderColor: isPassed ? stage.color : undefined,
                        boxShadow: isActive ? `0 0 20px ${stage.color}50` : undefined,
                      }}
                    >
                      <IconComp
                        className={`w-6 h-6 transition-colors duration-200 ${
                          isActive ? 'text-white' : 'text-sky-300 group-hover:text-white'
                        }`}
                        style={{ color: isActive ? '#ffffff' : stage.color }}
                      />
                    </div>

                    {/* Step Number Badge */}
                    <span
                      className={`absolute -top-2 -right-2 text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full border shadow-2xs transition-colors duration-200 ${
                        isActive
                          ? 'bg-sky-500 text-white border-sky-300'
                          : 'bg-[#07192D] text-sky-300 border-white/20'
                      }`}
                    >
                      {stage.step}
                    </span>
                  </div>

                  {/* Node Badge Tag */}
                  <span
                    className={`text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded mb-1.5 transition-colors duration-200 ${
                      isActive
                        ? 'bg-sky-400/20 text-sky-200 border border-sky-400/40'
                        : 'bg-white/5 text-neutral-400 border border-white/10'
                    }`}
                  >
                    {stage.badge}
                  </span>

                  {/* Node Title */}
                  <h3
                    className={`text-sm font-bold tracking-wide uppercase transition-colors duration-200 ${
                      isActive ? 'text-sky-300' : 'text-white group-hover:text-sky-200'
                    }`}
                  >
                    {stage.label}
                  </h3>

                  {/* Node Subtitle */}
                  <p className="text-xs text-neutral-300 mt-1 max-w-[170px] leading-relaxed">
                    {stage.sublabel}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Active Stage Highlight Details Card */}
          <div className="mt-8 mx-auto max-w-xl p-4 rounded-2xl bg-[#0A2540]/90 border border-sky-500/30 backdrop-blur-md shadow-xl flex items-center justify-between gap-4 text-left transition-all duration-300">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${tradeStages[activeStep - 1].color}20` }}
              >
                {React.createElement(tradeStages[activeStep - 1].icon, {
                  className: 'w-5 h-5',
                  style: { color: tradeStages[activeStep - 1].color },
                })}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold text-sky-300 uppercase">
                    STAGE {tradeStages[activeStep - 1].step} OF 05
                  </span>
                  <span className="text-white/30">•</span>
                  <span className="text-xs font-bold text-white">
                    {tradeStages[activeStep - 1].label}
                  </span>
                </div>
                <p className="text-xs text-neutral-300 mt-0.5">
                  {tradeStages[activeStep - 1].details}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              {tradeStages.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => handleStepClick(dotIdx + 1)}
                  aria-label={`Jump to stage ${dotIdx + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer ${
                    activeStep === dotIdx + 1
                      ? 'w-6 bg-sky-400'
                      : 'bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET VIEW: Optimized Vertical Flow Stepper */}
        {/* ========================================================================= */}
        <div className="lg:hidden relative space-y-4 my-4">
          {tradeStages.map((stage, idx) => {
            const IconComp = stage.icon;
            const stepNum = idx + 1;
            const isActive = activeStep === stepNum;
            const isPassed = activeStep >= stepNum;

            return (
              <div
                key={stage.step}
                onClick={() => handleStepClick(stepNum)}
                className={`flex items-start gap-4 p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0A2540] border-sky-400/80 shadow-lg shadow-sky-500/10'
                    : isPassed
                    ? 'bg-[#07192D]/90 border-white/15'
                    : 'bg-[#07192D]/50 border-white/10 opacity-70'
                }`}
              >
                {/* Node Circle */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                    isActive
                      ? 'bg-sky-500/20 text-sky-300 border-sky-400'
                      : 'bg-[#0A2540] text-neutral-400 border-white/10'
                  }`}
                  style={{
                    borderColor: isPassed ? stage.color : undefined,
                  }}
                >
                  <IconComp className="w-5 h-5" style={{ color: isPassed ? stage.color : undefined }} />
                </div>

                {/* Text Block */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono font-bold text-sky-400">
                      STEP {stage.step} • {stage.badge}
                    </span>
                    {isPassed && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide mt-0.5">
                    {stage.label}
                  </h3>
                  <p className="text-xs text-neutral-300 mt-0.5 leading-relaxed">
                    {stage.sublabel}
                  </p>
                  {isActive && (
                    <p className="text-[11px] text-sky-200/90 mt-1.5 pt-1.5 border-t border-white/10">
                      {stage.details}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* BOTTOM METADATA PILLARS STRIP */}
        {/* ========================================================================= */}
        <div className="mt-10 sm:mt-12 text-center">
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-semibold text-neutral-400">
            <span className="text-sky-300">EXIM Consultancy</span>
            <span className="text-white/20">•</span>
            <span className="text-sky-300">Global Logistics</span>
            <span className="text-white/20">•</span>
            <span className="text-sky-300">Trade Compliance</span>
            <span className="text-white/20">•</span>
            <span className="text-sky-300">Supply Chain Orchestration</span>
          </div>
        </div>

      </div>
    </section>
  );
}
