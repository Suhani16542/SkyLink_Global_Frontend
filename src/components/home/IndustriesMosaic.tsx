'use client';

import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ThermometerSnowflake,
  ShieldCheck,
  Layers,
  Search,
  Building2,
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
  ArrowUpRight,
  CheckCircle2,
  SlidersHorizontal,
} from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';
import type { EnrichedIndustry } from '@/data/industries';
import { otherIndustriesData, type OtherIndustry } from '@/data/industries';

interface IndustriesMosaicProps {
  industries: EnrichedIndustry[];
}

const industryImages: Record<string, string> = {
  pharmaceuticals:
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
  pharma:
    'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
  seafood:
    'https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=800&auto=format&fit=crop',
  seafoods:
    'https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=800&auto=format&fit=crop',
  perishables:
    'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=800&auto=format&fit=crop',
  'specialty-chemicals-agro-fertilizers-perishables':
    'https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=800&auto=format&fit=crop',
};

const industryBadges: Record<string, { badge: string; highlight: string }> = {
  pharmaceuticals: {
    badge: 'GDP & FDA COLD CHAIN',
    highlight: '+2°C to +8°C Active Telemetry',
  },
  pharma: {
    badge: 'GDP & FDA COLD CHAIN',
    highlight: '+2°C to +8°C Active Telemetry',
  },
  seafood: {
    badge: 'DEEP FREEZE REEFER',
    highlight: '-25°C to -40°C Super-Freezer',
  },
  seafoods: {
    badge: 'DEEP FREEZE REEFER',
    highlight: '-25°C to -40°C Super-Freezer',
  },
  perishables: {
    badge: 'CONTROLLED ATMOSPHERE',
    highlight: 'O2/CO2 Shelf-Life Extension',
  },
  'specialty-chemicals-agro-fertilizers-perishables': {
    badge: 'CONTROLLED ATMOSPHERE & HAZMAT',
    highlight: 'O2/CO2 & Hazmat Compliance',
  },
};

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

export function IndustriesMosaic({ industries }: IndustriesMosaicProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Other Industries dropdown state
  const [isOtherOpen, setIsOtherOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Filter 3 highlighted USP industries
  const highlightedIndustries = useMemo(() => {
    return industries.slice(0, 3);
  }, [industries]);

  // Categories for filter chips in Other Industries dropdown
  const categories = useMemo(() => {
    const set = new Set<string>();
    otherIndustriesData.forEach((item) => set.add(item.category));
    return ['All', ...Array.from(set)];
  }, []);

  // Filtered other industries
  const filteredOtherIndustries = useMemo(() => {
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

  // Check scroll boundary
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [highlightedIndustries]);

  // Scroll to a specific card index
  const scrollToIndex = useCallback((index: number) => {
    if (scrollContainerRef.current) {
      const cards = scrollContainerRef.current.children;
      const targetCard = cards[index] as HTMLElement;
      if (targetCard) {
        scrollContainerRef.current.scrollTo({
          left: targetCard.offsetLeft - 24,
          behavior: 'smooth',
        });
        setActiveIndex(index);
      }
    }
  }, []);

  // When cursor is hovered over the section, advance cards one-by-one (only if dropdown is closed)
  useEffect(() => {
    if (!isHovered || isOtherOpen) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % highlightedIndustries.length;
        scrollToIndex(next);
        return next;
      });
    }, 2800);

    return () => clearInterval(interval);
  }, [isHovered, isOtherOpen, highlightedIndustries.length, scrollToIndex]);

  const handleScroll = (direction: 'left' | 'right') => {
    const newIdx =
      direction === 'left'
        ? Math.max(0, activeIndex - 1)
        : Math.min(highlightedIndustries.length - 1, activeIndex + 1);
    scrollToIndex(newIdx);
  };

  const toggleDropdown = () => {
    setIsOtherOpen((prev) => !prev);
    if (!isOtherOpen) {
      setTimeout(() => {
        dropdownRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  };

  return (
    <section
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] py-12 sm:py-16 bg-neutral-950 text-white overflow-hidden flex flex-col justify-between border-y border-white/15 select-none group"
    >
      {/* High-definition Vibrant Background Image - Cursor Controlled Zoom In / Zoom Out */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop"
          alt="Global transportation, logistics vessel, and container corridor"
          fill
          priority={false}
          sizes="100vw"
          className={`object-cover object-center transition-transform duration-1000 ease-out ${
            isHovered ? 'scale-108' : 'scale-100'
          }`}
        />
        {/* Gradients to keep high readability and crisp contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07192D] via-black/40 to-black/60" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between space-y-8 sm:space-y-10">
        {/* Top Header Row with Heading & Badges & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          {/* Left Column: Badges & Section Heading */}
          <div className="space-y-3.5 max-w-3xl">
            <ScrollReveal effect="fade-down" delay={0}>
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/70 border border-sky-400/50 text-xs font-bold text-sky-300 backdrop-blur-md shadow-md">
                  <ThermometerSnowflake className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                  <span>Key Specializations &amp; Core USPs</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/70 border border-emerald-400/50 text-xs font-semibold text-emerald-300 backdrop-blur-md shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>GDP / US FDA / MPEDA / APEDA Validated</span>
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal effect="fade-up" delay={60}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-xl text-balance">
                Sector-Specific Solutions
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed">
                Precision cold chain, deep freeze, and atmospheric control engineered for specialized trade verticals.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: Navigation Controls & Indicators */}
          <ScrollReveal effect="fade-left" delay={100} className="flex items-center gap-3 shrink-0 self-start md:self-center">
            {/* Step Indicators */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-full bg-black/60 border border-white/20 backdrop-blur-md">
              {highlightedIndustries.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === i ? 'w-6 bg-sky-400' : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              aria-label="Previous Industry"
              className={`p-3 rounded-full border backdrop-blur-md transition-all duration-300 ${
                canScrollLeft
                  ? 'bg-black/60 hover:bg-sky-500 text-white border-white/40 hover:border-sky-400 shadow-xl cursor-pointer hover:scale-105 active:scale-95'
                  : 'bg-black/30 text-neutral-500 border-white/10 cursor-not-allowed opacity-40'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              aria-label="Next Industry"
              className={`p-3 rounded-full border backdrop-blur-md transition-all duration-300 ${
                canScrollRight
                  ? 'bg-black/60 hover:bg-sky-500 text-white border-white/40 hover:border-sky-400 shadow-xl cursor-pointer hover:scale-105 active:scale-95'
                  : 'bg-black/30 text-neutral-500 border-white/10 cursor-not-allowed opacity-40'
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/60 hover:bg-sky-500 border border-sky-400/50 text-xs font-bold text-sky-300 hover:text-white transition-all shadow-xl backdrop-blur-md"
            >
              <Layers className="w-4 h-4" />
              <span>All Verticals</span>
            </Link>
          </ScrollReveal>
        </div>

        {/* 3 Prominent Primary USP Highlighted Cards */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-2 pt-1 px-1 no-scrollbar scroll-smooth snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {highlightedIndustries.map((ind, idx) => {
            const badgeInfo = industryBadges[ind.slug] || industryBadges[ind.id] || {
              badge: 'CORE TRADE VERTICAL',
              highlight: '100% Statutory Compliance',
            };
            const imageUrl =
              industryImages[ind.slug] ||
              industryImages[ind.id] ||
              'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop';
            const isActive = activeIndex === idx;
            const targetHref = ind.href || `/industries/${ind.slug}`;

            return (
              <Link
                key={ind.id || idx}
                href={targetHref}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`w-[320px] sm:w-[420px] md:w-[480px] lg:w-[520px] h-[210px] sm:h-[230px] shrink-0 snap-start rounded-2xl relative overflow-hidden group/card border transition-all duration-500 flex flex-col justify-between p-5 sm:p-6 shadow-2xl ${
                  isActive
                    ? 'border-sky-400 shadow-sky-500/30 ring-2 ring-sky-400/40 scale-[1.01]'
                    : 'border-white/30 hover:border-sky-400/80 shadow-black/70'
                }`}
              >
                {/* Background Image of the Card */}
                <div className="absolute inset-0 z-0 overflow-hidden bg-neutral-900">
                  <Image
                    src={imageUrl}
                    alt={`${ind.title} trade solutions`}
                    fill
                    sizes="(max-width: 768px) 320px, 520px"
                    className="object-cover object-center group-hover/card:scale-110 transition-transform duration-700 ease-out"
                  />
                  {/* Card Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/35 group-hover/card:via-black/50 transition-colors duration-500" />
                </div>

                {/* Card Top: Category Badge & Arrow */}
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-300 bg-black/85 px-3 py-1 rounded-full border border-sky-400/40 backdrop-blur-md shadow-sm">
                    {badgeInfo.badge}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/20 group-hover/card:bg-sky-500 flex items-center justify-center text-white transition-all duration-300 group-hover/card:scale-110 shadow-md">
                    <ArrowRight className="w-4 h-4 group-hover/card:translate-x-0.5 transition-transform" />
                  </div>
                </div>

                {/* Card Bottom: Highlight & Title & Description */}
                <div className="relative z-10 space-y-1.5">
                  <div className="text-[10px] sm:text-[11px] font-mono text-cyan-300 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>{badgeInfo.highlight}</span>
                  </div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-white group-hover/card:text-sky-200 transition-colors line-clamp-1 leading-snug drop-shadow-md">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed opacity-95 group-hover/card:opacity-100">
                    {ind.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* "OTHER INDUSTRIES" OPTION / DROPDOWN SECTION */}
        {/* ========================================================================= */}
        <div ref={dropdownRef} className="pt-2">
          {/* Dropdown Trigger Bar */}
          <div
            className={`rounded-2xl border transition-all duration-300 overflow-hidden backdrop-blur-xl ${
              isOtherOpen
                ? 'bg-[#07192D]/95 border-sky-400/70 shadow-2xl shadow-sky-950/50'
                : 'bg-black/50 hover:bg-black/70 border-white/25 hover:border-sky-400/60 shadow-lg'
            }`}
          >
            <button
              type="button"
              onClick={toggleDropdown}
              aria-expanded={isOtherOpen}
              className="w-full p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left cursor-pointer transition-colors"
            >
              <div className="flex items-start sm:items-center gap-3.5">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-600/30 border border-sky-400/40 text-sky-400 flex items-center justify-center shrink-0 shadow-inner">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-sky-300">
                      Explore Other Industries We Serve
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-300 bg-sky-950/80 px-2.5 py-0.5 rounded-full border border-sky-500/40">
                      14+ Additional Sectors
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">
                    Beyond our primary cold chain USPs, SkyLink delivers compliant multimodal logistics across diverse global industries.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                <span className="text-xs font-semibold text-sky-400 hidden md:inline-block">
                  {isOtherOpen ? 'Collapse Industry List' : 'Browse All 14 Sectors'}
                </span>
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOtherOpen
                      ? 'bg-sky-500 text-white rotate-180 shadow-md shadow-sky-500/40'
                      : 'bg-white/15 text-white hover:bg-white/25'
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </div>
            </button>

            {/* Dropdown Collapsible Content */}
            {isOtherOpen && (
              <div className="p-4 sm:p-6 pt-0 border-t border-white/15 animate-in fade-in-0 duration-300 space-y-5">
                {/* Search & Filter Header Row */}
                <div className="pt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  {/* Search Input */}
                  <div className="relative flex-1 max-w-md">
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search sector (e.g. Automotive, Solar, Hazmat, Textiles)..."
                      className="w-full pl-10 pr-4 py-2 bg-neutral-900/90 border border-white/20 rounded-xl text-xs sm:text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                    />
                  </div>

                  {/* Filter Pills */}
                  <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
                    <span className="text-xs text-neutral-400 mr-1 flex items-center gap-1 shrink-0">
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                      <span>Category:</span>
                    </span>
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                          selectedCategory === cat
                            ? 'bg-sky-500 text-white shadow-sm'
                            : 'bg-white/10 text-neutral-300 hover:bg-white/20 hover:text-white'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 14 Other Industries Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5 max-h-[460px] overflow-y-auto pr-1 no-scrollbar">
                  {filteredOtherIndustries.map((item: OtherIndustry) => {
                    const IconComponent = iconMap[item.iconName] || Sparkles;
                    const consultationUrl = `/request-consultation?industry=${encodeURIComponent(item.name)}`;

                    return (
                      <div
                        key={item.id}
                        className="group/item p-4 rounded-xl bg-neutral-900/70 hover:bg-neutral-800/90 border border-white/15 hover:border-sky-400/70 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg hover:-translate-y-0.5"
                      >
                        <div className="space-y-2.5">
                          {/* Top: Icon + Capability Tag */}
                          <div className="flex items-center justify-between gap-2">
                            <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 group-hover/item:bg-sky-500 group-hover/item:text-white transition-colors flex items-center justify-center shrink-0">
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <span className="text-[10px] font-mono font-semibold uppercase text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded-md border border-cyan-800/40">
                              {item.tag}
                            </span>
                          </div>

                          {/* Title & Description */}
                          <div>
                            <h4 className="text-sm font-bold text-white group-hover/item:text-sky-300 transition-colors leading-snug">
                              {item.name}
                            </h4>
                            <p className="text-[11px] text-neutral-400 mt-1 line-clamp-2 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>

                        {/* Direct Action Link */}
                        <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between">
                          <span className="text-[10px] text-neutral-500 font-medium">
                            {item.category}
                          </span>
                          <Link
                            href={consultationUrl}
                            className="inline-flex items-center gap-1 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors group/link"
                          >
                            <span>Enquire</span>
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {filteredOtherIndustries.length === 0 && (
                  <div className="py-8 text-center text-neutral-400 space-y-2">
                    <p className="text-sm">No sectors found matching &quot;{searchQuery}&quot;.</p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('All');
                      }}
                      className="text-xs font-semibold text-sky-400 hover:underline cursor-pointer"
                    >
                      Clear filters and view all 14 sectors
                    </button>
                  </div>
                )}

                {/* Bottom Custom Sector Advisory Banner */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-sky-950/70 via-blue-950/50 to-neutral-900 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      <strong className="text-white font-semibold">Operating in a specialized niche?</strong> Our EXIM trade specialists configure customized HS classifications, duty optimization, and multi-modal transit SOPs for any commercial cargo.
                    </p>
                  </div>
                  <Link
                    href="/request-consultation"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white text-xs font-bold transition-all shrink-0 shadow-md shadow-sky-500/30"
                  >
                    <span>Request Custom Industry SOP</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

