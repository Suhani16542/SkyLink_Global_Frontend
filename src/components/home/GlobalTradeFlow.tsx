'use client';

import React, { useEffect, useRef, useState } from 'react';
import {
  MapPin,
  Anchor,
  Ship,
  FileCheck2,
  Globe2,
  Sparkles,
} from 'lucide-react';

interface TradeStage {
  step: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  color: string;
}

const tradeStages: TradeStage[] = [
  {
    step: '01',
    label: 'INDIA ORIGIN',
    sublabel: 'Manufacturing & Export Hubs',
    icon: MapPin,
    color: '#38BDF8', // Sky
  },
  {
    step: '02',
    label: 'PORT GATEWAY',
    sublabel: 'Customs Staging & Drayage',
    icon: Anchor,
    color: '#0284C7', // SkyLink Blue
  },
  {
    step: '03',
    label: 'GLOBAL SHIPPING',
    sublabel: 'Ocean Vessel & Air Transit',
    icon: Ship,
    color: '#0EA5E9', // Cyan Blue
  },
  {
    step: '04',
    label: 'CUSTOMS CLEARANCE',
    sublabel: 'Green-Channel EDI Release',
    icon: FileCheck2,
    color: '#10B981', // Emerald Green
  },
  {
    step: '05',
    label: 'GLOBAL DESTINATION',
    sublabel: 'Final Consignee in 25+ Markets',
    icon: Globe2,
    color: '#6366F1', // Indigo Accent
  },
];

export function GlobalTradeFlow() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [linePercentage, setLinePercentage] = useState(0); // 0% to 100% continuous line
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const elem = sectionRef.current;
    if (elem) observer.observe(elem);

    return () => {
      if (elem) observer.unobserve(elem);
    };
  }, []);

  // Balanced 3.5–3.8s Continuous Looping Journey Animation
  useEffect(() => {
    if (!isInView) return;

    let isMounted = true;
    let timeoutIds: NodeJS.Timeout[] = [];

    const runJourneyLoop = () => {
      if (!isMounted) return;

      // 1. Initial State: Step 1 active, line at 0%
      setIsResetting(false);
      setActiveStep(1);
      setLinePercentage(0);

      // 2. Line travels to Step 2 (0% -> 25% over ~700ms)
      const t1 = setTimeout(() => {
        if (!isMounted) return;
        setLinePercentage(25);
      }, 100);

      // 3. Step 2 reveals as line reaches it (at 850ms)
      const t2 = setTimeout(() => {
        if (!isMounted) return;
        setActiveStep(2);
      }, 850);

      // 4. Line travels to Step 3 (25% -> 50% over ~700ms)
      const t3 = setTimeout(() => {
        if (!isMounted) return;
        setLinePercentage(50);
      }, 980);

      // 5. Step 3 reveals as line reaches it (at 1700ms)
      const t4 = setTimeout(() => {
        if (!isMounted) return;
        setActiveStep(3);
      }, 1700);

      // 6. Line travels to Step 4 (50% -> 75% over ~700ms)
      const t5 = setTimeout(() => {
        if (!isMounted) return;
        setLinePercentage(75);
      }, 1830);

      // 7. Step 4 reveals as line reaches it (at 2550ms)
      const t6 = setTimeout(() => {
        if (!isMounted) return;
        setActiveStep(4);
      }, 2550);

      // 8. Line travels to Step 5 (75% -> 100% over ~700ms)
      const t7 = setTimeout(() => {
        if (!isMounted) return;
        setLinePercentage(100);
      }, 2680);

      // 9. Step 5 reveals as line reaches it (at 3400ms)
      const t8 = setTimeout(() => {
        if (!isMounted) return;
        setActiveStep(5);
      }, 3400);

      // 10. Short ~350ms pause after Step 5, then seamless restart!
      const t9 = setTimeout(() => {
        if (!isMounted) return;
        setIsResetting(true);
        setLinePercentage(0);
        setActiveStep(1);

        // Immediate next loop restart
        const tNext = setTimeout(() => {
          runJourneyLoop();
        }, 120);
        timeoutIds.push(tNext);
      }, 3750);

      timeoutIds.push(t1, t2, t3, t4, t5, t6, t7, t8, t9);
    };

    runJourneyLoop();

    return () => {
      isMounted = false;
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-18 bg-[#07192D] text-white relative overflow-hidden border-b border-white/10 select-none"
    >
      {/* Subtle World Map Ambient Contours & Graticule Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading & Subtitle (Compact Spacing) */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-10 sm:mb-12">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-xs font-bold text-sky-300 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>How SkyLink Connects Global Trade</span>
            </span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Connecting Businesses to Global Markets
            </h2>
          </div>

          <div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl mx-auto">
              From origin to destination, SkyLink helps businesses navigate the complexities of international trade, logistics and compliance.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: ONE COMPLETE CONTINUOUS LINE CONNECTING 01 TO 05 */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative py-4">
          {/* 1. Base Continuous Background Track (Center of Step 1 to Center of Step 5) */}
          <div className="absolute top-[35px] left-[10%] right-[10%] h-1 bg-white/10 rounded-full z-0 pointer-events-none">
            {/* 2. ONE Single Continuously Growing Progress Line (0% to 100%) */}
            <div
              className={`h-full bg-gradient-to-r from-sky-400 via-sky-500 to-emerald-400 rounded-full ${
                isResetting ? 'transition-none opacity-0' : 'transition-all duration-700 ease-out opacity-100'
              }`}
              style={{
                width: `${linePercentage}%`,
              }}
            />
          </div>

          {/* 5 Milestone Nodes in a 5-Column Grid */}
          <div className="grid grid-cols-5 gap-4 relative z-10">
            {tradeStages.map((stage, idx) => {
              const IconComp = stage.icon;
              const isVisible = activeStep >= idx + 1;

              return (
                <div
                  key={stage.step}
                  className="flex flex-col items-center text-center"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible
                      ? 'translateY(0px) scale(1)'
                      : 'translateY(12px) scale(0.94)',
                    visibility: isVisible ? 'visible' : 'hidden',
                    transition: isResetting
                      ? 'none'
                      : 'opacity 280ms ease-out, transform 280ms ease-out',
                  }}
                >
                  {/* Glowing Node Circle Beacon */}
                  <div className="relative mb-4 group">
                    <div
                      className="w-13 h-13 rounded-2xl bg-[#0A2540] border-2 flex items-center justify-center text-white shadow-xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        borderColor: stage.color,
                        boxShadow: isVisible ? `0 0 18px ${stage.color}40` : 'none',
                      }}
                    >
                      <IconComp className="w-5 h-5" style={{ color: stage.color }} />
                    </div>

                    {/* Step Number Badge */}
                    <span className="absolute -top-2 -right-2 bg-[#07192D] border border-white/20 text-[10px] font-mono font-bold text-sky-300 px-1.5 py-0.5 rounded-full shadow-xs">
                      {stage.step}
                    </span>
                  </div>

                  {/* Node Title */}
                  <h3 className="text-sm font-black text-white tracking-wide uppercase">
                    {stage.label}
                  </h3>

                  {/* Node Subtitle */}
                  <p className="text-xs text-neutral-400 mt-1 max-w-[160px] leading-relaxed">
                    {stage.sublabel}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET VIEW: ONE CONTINUOUS VERTICAL LINE FLOW */}
        {/* ========================================================================= */}
        <div className="lg:hidden relative pl-4 sm:pl-6 space-y-6 my-2">
          {/* Continuous Vertical Base Track */}
          <div className="absolute top-6 bottom-6 left-10 sm:left-12 w-0.5 bg-white/10 z-0 pointer-events-none">
            {/* Growing Vertical Line */}
            <div
              className={`w-full bg-gradient-to-b from-sky-400 to-emerald-400 ${
                isResetting ? 'transition-none opacity-0' : 'transition-all duration-700 ease-out opacity-100'
              }`}
              style={{
                height: `${linePercentage}%`,
              }}
            />
          </div>

          {tradeStages.map((stage, idx) => {
            const IconComp = stage.icon;
            const isVisible = activeStep >= idx + 1;

            return (
              <div
                key={stage.step}
                className="flex items-start gap-4 relative z-10"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible
                    ? 'translateX(0px) scale(1)'
                    : 'translateX(-12px) scale(0.94)',
                  visibility: isVisible ? 'visible' : 'hidden',
                  transition: isResetting
                    ? 'none'
                    : 'opacity 280ms ease-out, transform 280ms ease-out',
                }}
              >
                {/* Node Circle */}
                <div
                  className="w-11 h-11 rounded-xl bg-[#0A2540] border-2 flex items-center justify-center shrink-0 shadow-lg"
                  style={{
                    borderColor: stage.color,
                    boxShadow: isVisible ? `0 0 15px ${stage.color}40` : 'none',
                  }}
                >
                  <IconComp className="w-5 h-5" style={{ color: stage.color }} />
                </div>

                {/* Text Block */}
                <div className="pt-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-sky-400">
                      STEP {stage.step}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                    {stage.label}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">
                    {stage.sublabel}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Plain Typography Bottom Micro-Content Line (Compact Spacing) */}
        <div className="mt-8 sm:mt-10 text-center">
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
