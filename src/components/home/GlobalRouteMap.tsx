'use client';

import React, { useState } from 'react';
import { Globe2, Ship, Plane, ShieldCheck, ArrowRight, Anchor, Navigation } from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

interface TradeCorridor {
  id: string;
  name: string;
  origin: string;
  destination: string;
  oceanTransit: string;
  airTransit: string;
  keyPorts: string;
  incotermsCommon: string;
  description: string;
}

const tradeCorridors: TradeCorridor[] = [
  {
    id: 'europe',
    name: 'India ↔ Europe Corridor',
    origin: 'Nhava Sheva / Mundra / Chennai',
    destination: 'Rotterdam / Antwerp / Hamburg / Felixstowe',
    oceanTransit: '18–24 Days',
    airTransit: '24–48 Hours',
    keyPorts: 'Jawaharlal Nehru Port (JNPT), Rotterdam Maasvlakte, Frankfurt CargoCity',
    incotermsCommon: 'FOB, CIF, CIP, DDP',
    description:
      'Direct weekly maritime sailings and daily scheduled air charters servicing EU manufacturing, life sciences, and automotive engineering supply chains.',
  },
  {
    id: 'middle-east',
    name: 'India ↔ Middle East & GCC Hub',
    origin: 'Nhava Sheva / Mundra / Cochin',
    destination: 'Jebel Ali / Khalifa / Dammam / Hamad',
    oceanTransit: '3–6 Days',
    airTransit: 'Same-Day / 12 Hours',
    keyPorts: 'Jebel Ali Port (DP World), Dubai World Central (DWC), Dammam King Abdulaziz',
    incotermsCommon: 'FOB, CIF, CFR, DAP',
    description:
      'High-frequency feeder services and regional transshipment consolidation facilitating rapid perishable, pharmaceutical, and construction material flows.',
  },
  {
    id: 'americas',
    name: 'India ↔ North America Corridors',
    origin: 'Nhava Sheva / Mundra / Hazira',
    destination: 'New York/NJ • Savannah • Houston • Long Beach',
    oceanTransit: '24–32 Days',
    airTransit: '36–48 Hours',
    keyPorts: 'Port of New York & New Jersey, Houston Ship Channel, Port of Los Angeles',
    incotermsCommon: 'FCA, FOB, CIF, DDP',
    description:
      'End-to-end multimodal logistics linking industrial manufacturing belts with US East Coast and Gulf Coast gateway terminals under bonded tariff regimes.',
  },
  {
    id: 'east-asia',
    name: 'India ↔ East Asia & ASEAN Network',
    origin: 'Chennai / Visakhapatnam / Kolkata',
    destination: 'Singapore • Shanghai • Busan • Port Klang',
    oceanTransit: '8–14 Days',
    airTransit: '18–24 Hours',
    keyPorts: 'PSA Singapore, Shanghai Yangshan, Port Klang Northport, Busan New Port',
    incotermsCommon: 'EXW, FCA, CIF, CPT',
    description:
      'Deep-water direct services and regional Free Trade Agreement (AITIGA/CEPA) preferential tariff documentation for electronics and industrial commodities.',
  },
];

const tradeHubs = [
  {
    name: 'India (Central Hub)',
    role: 'HQ & Port Gateways',
    coords: 'Nhava Sheva • Mundra • Chennai',
    x: '67%',
    y: '56%',
    code: 'IN',
  },
  {
    name: 'Middle East Hub',
    role: 'Jebel Ali Transshipment',
    coords: 'Dubai • Abu Dhabi • Doha',
    x: '59%',
    y: '50%',
    code: 'UAE',
  },
  {
    name: 'European Gateways',
    role: 'Rotterdam & Antwerp Logistics',
    coords: 'Rotterdam • Hamburg • Antwerp',
    x: '48%',
    y: '34%',
    code: 'EU',
  },
  {
    name: 'ASEAN & East Asia',
    role: 'Manufacturing & Tech Hub',
    coords: 'Singapore • Shanghai • Busan',
    x: '82%',
    y: '49%',
    code: 'APAC',
  },
  {
    name: 'North America',
    role: 'East & West Coast Terminals',
    coords: 'New York • Houston • Long Beach',
    x: '24%',
    y: '42%',
    code: 'US',
  },
];

export function GlobalRouteMap() {
  const [activeCorridorId, setActiveCorridorId] = useState<string>('europe');

  const currentCorridor =
    tradeCorridors.find((c) => c.id === activeCorridorId) || tradeCorridors[0];

  return (
    <section className="py-20 sm:py-28 bg-[#07192D] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#0284C7]/12 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading with ScrollReveal */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <ScrollReveal effect="fade-down" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 border border-sky-400/30 px-3.5 py-1.5 text-xs font-semibold text-sky-300">
              <Globe2 className="w-4 h-4 text-sky-400" />
              <span>International Trade Corridors</span>
            </div>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={80}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Global Connectivity Across Active Trade Lanes
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={160}>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              SkyLink coordinates direct Tier-1 maritime carrier allocations and scheduled air freight paths linking Indian manufacturing clusters with premier international gateway ports.
            </p>
          </ScrollReveal>
        </div>

        {/* Corridor Selection Tabs */}
        <ScrollReveal effect="fade-up" delay={200} className="flex justify-center mb-8">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            {tradeCorridors.map((corridor) => {
              const isSelected = activeCorridorId === corridor.id;
              return (
                <button
                  key={corridor.id}
                  onClick={() => setActiveCorridorId(corridor.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-[#0284C7] text-white shadow-lg shadow-sky-500/25 scale-[1.02]'
                      : 'text-neutral-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Navigation className={`w-3.5 h-3.5 ${isSelected ? 'text-sky-200' : 'text-sky-400'}`} />
                  <span>{corridor.name.split('↔')[1]?.trim() || corridor.name}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Interactive World Route Visual Map Canvas */}
        <ScrollReveal effect="scale-up" delay={260} duration={800}>
          <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[440px] sm:min-h-[520px] rounded-3xl border border-white/15 bg-gradient-to-b from-[#0A2540]/90 via-[#07192D]/95 to-[#07192D] p-6 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col justify-between">
            {/* Subtle Coordinate Graticule Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none opacity-50" />

            {/* Stylized Vector World Map Silhouettes & Animated Routes */}
            <svg
              className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
              viewBox="0 0 1000 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Continental Contours */}
              {/* North America */}
              <path
                d="M120 140 Q 180 110 240 160 T 260 260 T 170 300 T 130 220 Z"
                fill="#0ea5e9"
                fillOpacity="0.15"
              />
              {/* South America */}
              <path
                d="M230 310 Q 280 320 290 380 T 240 460 T 210 390 Z"
                fill="#0ea5e9"
                fillOpacity="0.12"
              />
              {/* Europe & UK */}
              <path
                d="M440 130 Q 510 110 540 160 T 500 230 T 430 210 Z"
                fill="#0ea5e9"
                fillOpacity="0.16"
              />
              {/* Africa */}
              <path
                d="M470 240 Q 540 250 560 330 T 510 440 T 450 340 Z"
                fill="#0ea5e9"
                fillOpacity="0.12"
              />
              {/* Asia / India / China */}
              <path
                d="M590 140 Q 750 120 860 200 T 820 330 T 670 330 T 620 230 Z"
                fill="#0ea5e9"
                fillOpacity="0.18"
              />
              {/* Australia */}
              <path
                d="M780 350 Q 860 340 880 400 T 820 450 T 770 410 Z"
                fill="#0ea5e9"
                fillOpacity="0.12"
              />

              {/* Connecting Maritime & Air Trade Lane Arcs with Dash Animation */}
              {/* India -> Europe Arc */}
              <path
                d="M 670 280 Q 570 170 480 170"
                stroke="#38BDF8"
                strokeWidth={activeCorridorId === 'europe' ? '3.5' : '1.5'}
                strokeDasharray="6 6"
                className="animate-dash-flow"
                opacity={activeCorridorId === 'europe' ? 1 : 0.4}
              />
              {/* India -> Middle East Arc */}
              <path
                d="M 670 280 Q 630 260 590 250"
                stroke="#34D399"
                strokeWidth={activeCorridorId === 'middle-east' ? '3.5' : '1.5'}
                strokeDasharray="6 6"
                className="animate-dash-flow"
                opacity={activeCorridorId === 'middle-east' ? 1 : 0.4}
              />
              {/* Middle East -> Europe Arc */}
              <path
                d="M 590 250 Q 530 190 480 170"
                stroke="#60A5FA"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="animate-dash-flow"
                opacity={0.4}
              />
              {/* India -> East Asia Arc */}
              <path
                d="M 670 280 Q 745 255 820 245"
                stroke="#F59E0B"
                strokeWidth={activeCorridorId === 'east-asia' ? '3.5' : '1.5'}
                strokeDasharray="6 6"
                className="animate-dash-flow"
                opacity={activeCorridorId === 'east-asia' ? 1 : 0.4}
              />
              {/* Europe -> North America Transatlantic Arc */}
              <path
                d="M 480 170 Q 360 130 240 210"
                stroke="#38BDF8"
                strokeWidth={activeCorridorId === 'americas' ? '3.5' : '1.5'}
                strokeDasharray="6 6"
                className="animate-dash-flow"
                opacity={activeCorridorId === 'americas' ? 1 : 0.4}
              />
            </svg>

            {/* Top Corridor Dynamic Live Banner */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl glass-panel-dark border border-white/20 backdrop-blur-md">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono uppercase font-bold text-sky-300">
                    Active Multimodal Corridor
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {currentCorridor.name}
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs">
                <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-neutral-400 block text-[10px] uppercase font-bold">Ocean Transit</span>
                  <span className="text-sky-300 font-bold font-mono">{currentCorridor.oceanTransit}</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-neutral-400 block text-[10px] uppercase font-bold">Air Express</span>
                  <span className="text-emerald-400 font-bold font-mono">{currentCorridor.airTransit}</span>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-neutral-400 block text-[10px] uppercase font-bold">Incoterms</span>
                  <span className="text-amber-300 font-bold font-mono">{currentCorridor.incotermsCommon}</span>
                </div>
              </div>
            </div>

            {/* Floating Hub Points on Map */}
            <div className="relative flex-1 w-full my-4">
              {tradeHubs.map((hub, idx) => (
                <div
                  key={idx}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
                  style={{ left: hub.x, top: hub.y }}
                >
                  {/* Radar Ping */}
                  <span className="absolute -inset-2 rounded-full bg-sky-400/30 animate-ping" />
                  {/* Core Node */}
                  <div className="relative w-4 h-4 rounded-full bg-[#0284C7] border-2 border-white shadow-lg flex items-center justify-center group-hover:scale-125 transition-transform">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  {/* Tooltip Card */}
                  <div className="absolute left-1/2 bottom-full mb-3 -translate-x-1/2 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-200 z-30">
                    <div className="glass-panel-dark px-3.5 py-2 rounded-xl border border-white/25 shadow-xl whitespace-nowrap text-center">
                      <div className="text-xs font-extrabold text-white flex items-center justify-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>{hub.name}</span>
                      </div>
                      <div className="text-[10px] text-sky-300 font-mono mt-0.5">{hub.role}</div>
                      <div className="text-[9px] text-neutral-400 mt-0.5">{hub.coords}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Overlay Metrics in Bottom Bar */}
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3 p-3.5 rounded-2xl glass-panel-dark border border-white/15 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center shrink-0">
                  <Ship className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">Ocean Carrier Desks</span>
                  <span className="text-xs font-bold text-white">Direct FCL/LCL Vessel Space</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                  <Plane className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">Air Cargo Network</span>
                  <span className="text-xs font-bold text-white">Scheduled &amp; Charter Flights</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">Customs Liaison</span>
                  <span className="text-xs font-bold text-white">Pre-Arrival Green Channel Filing</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

