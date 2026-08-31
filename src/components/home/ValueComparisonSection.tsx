'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Check, X, ShieldCheck, BarChart3 } from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

const comparisonMetrics = [
  {
    category: 'Export Logistics Cost',
    traditional: 'High markups via multiple sub-brokers & NVOCC layers',
    traditionalScore: 40,
    skylink: 'Direct Tier-1 volume shipping contracts with 15–20% baseline savings',
    skylinkScore: 95,
  },
  {
    category: 'Freight Rate Optimization',
    traditional: 'Rigid spot tariffs with hidden destination terminal charges (DTHC)',
    traditionalScore: 45,
    skylink: 'Transparent all-in fixed tariffs, multi-carrier bidding & route modeling',
    skylinkScore: 92,
  },
  {
    category: 'Documentation Accuracy',
    traditional: 'Frequent clerical errors causing ICEGATE holds & bank query rejections',
    traditionalScore: 50,
    skylink: 'Zero-defect statutory pre-checks & direct DGFT liaison audits',
    skylinkScore: 99,
  },
  {
    category: 'Response Time & Visibility',
    traditional: 'Manual email updates with blind transit points and slow escalation',
    traditionalScore: 35,
    skylink: 'Dedicated single point of contact with 24/7 telemetry monitoring',
    skylinkScore: 94,
  },
  {
    category: 'Incentive Maximization',
    traditional: 'Freight forwarding only; unassisted RoDTEP/EPCG incentive recovery',
    traditionalScore: 25,
    skylink: 'Integrated statutory recovery (RoDTEP, RoSCTL, Duty Drawback, Advance Auth)',
    skylinkScore: 98,
  },
  {
    category: 'Cold Chain Compliance',
    traditional: 'Passive loggers without real-time thermal excursion notification',
    traditionalScore: 40,
    skylink: 'GDP & FDA certified active IoT thermal telemetry with pre-arrival customs priority',
    skylinkScore: 96,
  },
];

export function ValueComparisonSection() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const raf = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    const elem = sectionRef.current;
    if (elem) observer.observe(elem);

    return () => {
      if (elem) observer.unobserve(elem);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 bg-neutral-50 border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header with ScrollReveal */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <ScrollReveal effect="fade-down" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 border border-sky-200 px-3.5 py-1.5 text-xs font-bold text-[#0284C7]">
              <BarChart3 className="w-4 h-4 text-[#0284C7]" />
              <span>Comparative Operational Benchmark</span>
            </div>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={80}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A2540] tracking-tight">
              Traditional Shipping Agent vs. SkyLink Global
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={160}>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              See how combining licensed statutory EXIM trade consulting with direct carrier logistics infrastructure provides superior risk protection and cost reduction.
            </p>
          </ScrollReveal>
        </div>

        {/* Comparison Table Grid */}
        <ScrollReveal effect="scale-up" delay={200} duration={750}>
          <div className="rounded-3xl border border-neutral-200 bg-white shadow-xl overflow-hidden">
            {/* Header Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#0A2540] text-white py-5 px-6 sm:px-8 items-center">
              <div className="lg:col-span-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-300">
                Operational &amp; Financial Metric
              </div>
              <div className="lg:col-span-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-300 mt-2 lg:mt-0">
                Traditional Shipping Agent
              </div>
              <div className="lg:col-span-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-sky-300 mt-2 lg:mt-0 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>SkyLink Global Services</span>
              </div>
            </div>

            {/* Metric Rows */}
            <div className="divide-y divide-neutral-200 text-sm">
              {comparisonMetrics.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 lg:grid-cols-12 p-6 sm:p-8 items-center gap-6 hover:bg-neutral-50/70 transition-colors"
                >
                  {/* Metric Name */}
                  <div className="lg:col-span-4 space-y-1">
                    <span className="text-xs font-bold text-neutral-400 block uppercase tracking-wider">
                      Metric 0{idx + 1}
                    </span>
                    <div className="text-base font-bold text-neutral-900">{row.category}</div>
                  </div>

                  {/* Traditional Agent */}
                  <div className="lg:col-span-4 space-y-2 p-4 rounded-xl bg-neutral-50 border border-neutral-200">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{row.traditional}</span>
                    </div>
                    {/* Visual Progress Bar (Animated from 0 -> value) */}
                    <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-neutral-400 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: inView ? `${row.traditionalScore}%` : '0%' }}
                      />
                    </div>
                  </div>

                  {/* SkyLink Advantage */}
                  <div className="lg:col-span-4 space-y-2 p-4 rounded-xl bg-sky-50/70 border border-sky-200">
                    <div className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-[#0A2540]">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{row.skylink}</span>
                    </div>
                    {/* Visual Progress Bar (Animated from 0 -> value) */}
                    <div className="w-full bg-sky-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-[#0284C7] h-full rounded-full shadow-xs transition-all duration-1000 ease-out"
                        style={{ width: inView ? `${row.skylinkScore}%` : '0%' }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
