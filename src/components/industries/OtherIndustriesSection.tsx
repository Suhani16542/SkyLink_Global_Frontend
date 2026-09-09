'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  Building2,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  SlidersHorizontal,
  Car,
  Factory,
  Cpu,
  Shirt,
  UtensilsCrossed,
  Sprout,
  FlaskConical,
  ShoppingBag,
  HardHat,
  Sun,
  Pickaxe,
  ShoppingCart,
  Wrench,
  Sparkles,
} from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import { otherIndustriesData, type OtherIndustry } from '@/data/industries';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Car,
  Factory,
  Cpu,
  Shirt,
  UtensilsCrossed,
  Sprout,
  FlaskConical,
  ShoppingBag,
  HardHat,
  Sun,
  Pickaxe,
  ShoppingCart,
  Wrench,
  Sparkles,
};

export function OtherIndustriesSection() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const set = new Set<string>();
    otherIndustriesData.forEach((item) => set.add(item.category));
    return ['All', ...Array.from(set)];
  }, []);

  const filteredIndustries = useMemo(() => {
    return otherIndustriesData.filter((item) => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="other-industries" className="py-16 sm:py-20 bg-white border-t border-neutral-200 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header & Toggle */}
        <ScrollReveal effect="fade-up" delay={0}>
          <div className="rounded-3xl border border-neutral-200 bg-gradient-to-br from-neutral-900 to-[#0A2540] text-white p-6 sm:p-10 shadow-xl overflow-hidden relative">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/40 text-xs font-bold text-sky-300">
                    <Building2 className="w-3.5 h-3.5 text-sky-400" />
                    <span>Broad Multi-Sector Capability</span>
                  </span>
                  <span className="text-xs font-mono font-bold text-neutral-300 bg-white/10 px-2.5 py-1 rounded-full">
                    14 Other Industry Verticals
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Other Industries We Serve
                </h2>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Beyond our 3 primary cold chain and statutory specializations, SkyLink executes multimodal freight forwarding, tariff engineering, and green-channel customs clearance across a comprehensive spectrum of global industries.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-sm shadow-lg shadow-sky-500/30 transition-all cursor-pointer shrink-0 self-start lg:self-center"
              >
                <span>{isExpanded ? 'Collapse Industry Grid' : 'Expand All 14 Industries'}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Expandable Grid Section */}
        {isExpanded && (
          <div className="space-y-6 animate-in fade-in-0 duration-300">
            {/* Search & Category Filter Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by sector (e.g. Automotive, Solar, Hazmat, Textiles)..."
                  className="w-full pl-10 pr-4 py-2 bg-white border border-neutral-200 rounded-xl text-xs sm:text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
              </div>

              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                <span className="text-xs text-neutral-500 mr-1 flex items-center gap-1 shrink-0 font-medium">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  <span>Category:</span>
                </span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#0A2540] text-white shadow-sm'
                        : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of 14 Other Industries */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredIndustries.map((item: OtherIndustry) => {
                const IconComp = iconMap[item.iconName] || Sparkles;
                const consultationUrl = `/request-consultation?industry=${encodeURIComponent(item.name)}`;

                return (
                  <div
                    key={item.id}
                    className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-xs hover:shadow-xl hover:border-sky-300 hover-lift transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 group-hover:bg-[#0284C7] group-hover:text-white transition-colors flex items-center justify-center shadow-xs">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-1 rounded-full border border-sky-200/60">
                          {item.tag}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-neutral-900 group-hover:text-[#0284C7] transition-colors leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-xs text-neutral-600 mt-1.5 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                      <span className="text-[11px] font-medium text-neutral-400">
                        {item.category}
                      </span>
                      <Link
                        href={consultationUrl}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors"
                      >
                        <span>Consult Desk</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {filteredIndustries.length === 0 && (
              <div className="py-12 text-center text-neutral-500 space-y-2 bg-neutral-50 rounded-2xl border border-neutral-200">
                <p className="text-sm">No sectors found matching &quot;{searchQuery}&quot;.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                  className="text-xs font-bold text-[#0284C7] hover:underline cursor-pointer"
                >
                  Reset filters and view all 14 sectors
                </button>
              </div>
            )}

            {/* Custom SOP Bottom Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-50 via-blue-50 to-white border border-sky-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0A2540] text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">
                    Need customized logistics SOPs for your unique commodity?
                  </h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    Our trade advisory team prepares dedicated customs routes, HS code validation, and bonded warehouse plans for any cargo vertical.
                  </p>
                </div>
              </div>
              <Link
                href="/request-consultation"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0A2540] hover:bg-[#0284C7] text-white text-xs font-bold transition-all shrink-0 shadow-md"
              >
                <span>Request Custom Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
