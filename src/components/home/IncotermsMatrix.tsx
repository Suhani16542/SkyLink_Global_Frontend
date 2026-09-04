'use client';

import React, { useState } from 'react';
import { Ship, Plane, Layers } from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

export interface IncotermSummary {
  code: string;
  name: string;
  category: 'multimodal' | 'maritime';
  tag: string;
}

export const INCOTERMS_LIST: IncotermSummary[] = [
  { code: 'FOB', name: 'Free On Board', category: 'maritime', tag: 'Common' },
  { code: 'CIF', name: 'Cost, Insurance & Freight', category: 'maritime', tag: 'Common' },
  { code: 'CFR', name: 'Cost and Freight', category: 'maritime', tag: 'Sea' },
  { code: 'FCA', name: 'Free Carrier', category: 'multimodal', tag: 'Multi' },
  { code: 'DDP', name: 'Delivered Duty Paid', category: 'multimodal', tag: 'Common' },
  { code: 'DAP', name: 'Delivered at Place', category: 'multimodal', tag: 'Multi' },
  { code: 'CPT', name: 'Carriage Paid To', category: 'multimodal', tag: 'Multi' },
  { code: 'CIP', name: 'Carriage & Insurance Paid', category: 'multimodal', tag: 'Multi' },
  { code: 'EXW', name: 'Ex Works', category: 'multimodal', tag: 'Multi' },
  { code: 'DPU', name: 'Delivered at Place Unloaded', category: 'multimodal', tag: 'Multi' },
];

export function IncotermsMatrix() {
  const [selectedCode, setSelectedCode] = useState<string>('FOB');
  const [filterMode, setFilterMode] = useState<'all' | 'maritime' | 'multimodal'>('all');

  const filteredTerms = INCOTERMS_LIST.filter((term) => {
    if (filterMode === 'all') return true;
    return term.category === filterMode;
  });

  return (
    <section className="py-16 sm:py-24 bg-[#07192D] text-white relative overflow-hidden border-t border-white/10">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-[#0284C7]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-50" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <ScrollReveal effect="fade-down" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 border border-sky-400/30 px-3.5 py-1.5 text-xs font-semibold text-sky-300">
              <Layers className="w-4 h-4 text-sky-400" />
              <span>International Trade Advisory</span>
            </div>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={80}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Incoterms® Risk &amp; Responsibility Matrix
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={160}>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Choosing the right International Commercial Term defines risk allocation, freight liability, and statutory customs obligations between buyer and seller. Explore our interactive operational guide below.
            </p>
          </ScrollReveal>
        </div>

        {/* Filter Pills */}
        <ScrollReveal effect="fade-up" delay={200} className="flex justify-center mb-7">
          <div className="inline-flex p-1 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-[#0284C7] text-white shadow-md'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              All 10 Core Terms
            </button>
            <button
              onClick={() => setFilterMode('maritime')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                filterMode === 'maritime'
                  ? 'bg-[#0284C7] text-white shadow-md'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              <Ship className="w-3.5 h-3.5" />
              <span>Ocean &amp; Waterway</span>
            </button>
            <button
              onClick={() => setFilterMode('multimodal')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                filterMode === 'multimodal'
                  ? 'bg-[#0284C7] text-white shadow-md'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              <Plane className="w-3.5 h-3.5" />
              <span>Multimodal / Any Mode</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Incoterm Quick Select Bar */}
        <ScrollReveal effect="fade-up" delay={240}>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {filteredTerms.map((term) => {
              const isSelected = selectedCode === term.code;
              return (
                <button
                  key={term.code}
                  onClick={() => setSelectedCode(term.code)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold font-mono transition-all flex items-center gap-2 border cursor-pointer ${
                    isSelected
                      ? 'bg-sky-500 text-white border-sky-400 shadow-lg shadow-sky-500/30 scale-105'
                      : 'bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  <span>{term.code}</span>
                  <span className="text-[10px] opacity-70 font-sans font-normal hidden sm:inline">
                    ({term.tag})
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
