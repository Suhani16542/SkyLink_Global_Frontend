'use client';

import React, { useState } from 'react';
import {
  Globe2,
  Ship,
  Plane,
  ShieldCheck,
  ArrowRight,
  Anchor,
  Navigation,
  MapPin,
  Compass,
  ExternalLink,
} from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

interface TradeCorridor {
  id: string;
  name: string;
  badge: string;
  origin: string;
  destination: string;
  oceanTransit: string;
  airTransit: string;
  keyPorts: string;
  incotermsCommon: string;
  description: string;
  routeColor: string;
  googleMapsUrl: string;
}

const tradeCorridors: TradeCorridor[] = [
  {
    id: 'europe',
    name: 'India ↔ Europe Corridor',
    badge: 'European Gateway',
    origin: 'Nhava Sheva / Mundra / Chennai',
    destination: 'Rotterdam / Antwerp / Hamburg / Felixstowe / London',
    oceanTransit: '18–24 Days',
    airTransit: '24–48 Hours',
    keyPorts: 'Jawaharlal Nehru Port (JNPT), Rotterdam Maasvlakte, Frankfurt CargoCity, London Gateway',
    incotermsCommon: 'FOB, CIF, CIP, DDP',
    description:
      'Direct weekly maritime sailings and daily scheduled air charters servicing EU manufacturing, life sciences, and automotive engineering supply chains.',
    routeColor: '#0284C7',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+Rotterdam+Netherlands',
  },
  {
    id: 'middle-east',
    name: 'India ↔ Middle East & GCC Hub',
    badge: 'Gulf Transshipment',
    origin: 'Nhava Sheva / Mundra / Cochin',
    destination: 'Jebel Ali / Khalifa / Dammam / Hamad / Doha',
    oceanTransit: '3–6 Days',
    airTransit: 'Same-Day / 12 Hours',
    keyPorts: 'Jebel Ali Port (DP World), Dubai World Central (DWC), Dammam King Abdulaziz',
    incotermsCommon: 'FOB, CIF, CFR, DAP',
    description:
      'High-frequency feeder services and regional transshipment consolidation facilitating rapid perishable, pharmaceutical, and construction material flows.',
    routeColor: '#059669',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jebel+Ali+Port+Dubai+UAE',
  },
  {
    id: 'americas',
    name: 'India ↔ North America Corridors',
    badge: 'Transatlantic & Gulf',
    origin: 'Nhava Sheva / Mundra / Hazira',
    destination: 'New York/NJ • Savannah • Houston • Los Angeles',
    oceanTransit: '24–32 Days',
    airTransit: '36–48 Hours',
    keyPorts: 'Port of New York & New Jersey, Houston Ship Channel, Port of Los Angeles',
    incotermsCommon: 'FCA, FOB, CIF, DDP',
    description:
      'End-to-end multimodal logistics linking industrial manufacturing belts with US East Coast and Gulf Coast gateway terminals under bonded tariff regimes.',
    routeColor: '#4F46E5',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+New+York+and+New+Jersey',
  },
  {
    id: 'east-asia',
    name: 'India ↔ East Asia & ASEAN Network',
    badge: 'ASEAN & Far East',
    origin: 'Chennai / Visakhapatnam / Kolkata',
    destination: 'Singapore • Shanghai • Tokyo • Busan • Port Klang',
    oceanTransit: '8–14 Days',
    airTransit: '18–24 Hours',
    keyPorts: 'PSA Singapore, Shanghai Yangshan, Port Klang Northport, Busan New Port, Tokyo Port',
    incotermsCommon: 'EXW, FCA, CIF, CPT',
    description:
      'Deep-water direct services and regional Free Trade Agreement (AITIGA/CEPA) preferential tariff documentation for electronics and industrial commodities.',
    routeColor: '#D97706',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=PSA+Singapore+Port',
  },
];

interface TradeHubLocation {
  id: string;
  name: string;
  shortLabel: string;
  country: string;
  flag: string;
  role: string;
  ports: string;
  x: number;
  y: number;
  pinColor: string;
  isOrigin?: boolean;
  corridorId?: string;
  googleMapsUrl: string;
}

const tradeHubLocations: TradeHubLocation[] = [
  // 1. Origin Central HQ
  {
    id: 'india',
    name: 'India Central Trade Gateway',
    shortLabel: 'INDIA (HQ)',
    country: 'India',
    flag: '🇮🇳',
    role: 'Central Export Origin & EXIM Desk',
    ports: 'Nhava Sheva (JNPT) • Mundra • Chennai • Delhi',
    x: 67.5,
    y: 53.0,
    pinColor: '#EF4444',
    isOrigin: true,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jawaharlal+Nehru+Port+Trust+Mundra+India',
  },
  // 2. Middle East & GCC
  {
    id: 'uae',
    name: 'United Arab Emirates',
    shortLabel: 'DUBAI / JEBEL ALI',
    country: 'UAE',
    flag: '🇦🇪',
    role: 'Middle East Transshipment Hub',
    ports: 'Jebel Ali Port • Dubai World Central • Khalifa',
    x: 58.5,
    y: 47.0,
    pinColor: '#059669',
    corridorId: 'middle-east',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jebel+Ali+Port+Dubai+UAE',
  },
  {
    id: 'saudi',
    name: 'Saudi Arabia',
    shortLabel: 'DAMMAM / GCC',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    role: 'Gulf Industrial Logistics Terminal',
    ports: 'King Abdulaziz Port • Riyadh Dry Port',
    x: 55.5,
    y: 49.0,
    pinColor: '#059669',
    corridorId: 'middle-east',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=King+Abdulaziz+Port+Dammam+Saudi+Arabia',
  },
  // 3. Europe Gateways
  {
    id: 'netherlands',
    name: 'Netherlands',
    shortLabel: 'ROTTERDAM',
    country: 'Netherlands',
    flag: '🇳🇱',
    role: 'Primary European Sea Gateway',
    ports: 'Port of Rotterdam • Maasvlakte Terminal',
    x: 48.5,
    y: 29.0,
    pinColor: '#0284C7',
    corridorId: 'europe',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+Rotterdam+Netherlands',
  },
  {
    id: 'germany',
    name: 'Germany',
    shortLabel: 'HAMBURG / FRANKFURT',
    country: 'Germany',
    flag: '🇩🇪',
    role: 'European Air Cargo & Rail Freight',
    ports: 'Hamburg Port • Frankfurt CargoCity',
    x: 50.5,
    y: 27.0,
    pinColor: '#0284C7',
    corridorId: 'europe',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+Hamburg+Germany',
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    shortLabel: 'LONDON / FELIXSTOWE',
    country: 'UK',
    flag: '🇬🇧',
    role: 'British Commercial Maritime Hub',
    ports: 'Port of Felixstowe • London Gateway • Southampton',
    x: 45.5,
    y: 28.0,
    pinColor: '#0284C7',
    corridorId: 'europe',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+Felixstowe+London+Gateway+UK',
  },
  // 4. North America
  {
    id: 'us-east',
    name: 'United States (East Coast)',
    shortLabel: 'NEW YORK / NJ',
    country: 'USA',
    flag: '🇺🇸',
    role: 'US East Coast Gateway Terminal',
    ports: 'Port of New York & New Jersey • Savannah',
    x: 24.5,
    y: 36.0,
    pinColor: '#4F46E5',
    corridorId: 'americas',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+New+York+and+New+Jersey',
  },
  {
    id: 'us-gulf',
    name: 'United States (Gulf Coast)',
    shortLabel: 'HOUSTON',
    country: 'USA',
    flag: '🇺🇸',
    role: 'Gulf Coast Energy & Industrial Corridor',
    ports: 'Houston Ship Channel • Port of Mobile',
    x: 20.0,
    y: 43.0,
    pinColor: '#4F46E5',
    corridorId: 'americas',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+Houston+Texas+USA',
  },
  {
    id: 'us-west',
    name: 'United States (West Coast)',
    shortLabel: 'LOS ANGELES',
    country: 'USA',
    flag: '🇺🇸',
    role: 'Transpacific Gateway Port',
    ports: 'Port of Los Angeles • Port of Long Beach',
    x: 15.5,
    y: 39.0,
    pinColor: '#4F46E5',
    corridorId: 'americas',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+Los+Angeles+California+USA',
  },
  // 5. Asia & Pacific
  {
    id: 'singapore',
    name: 'Singapore',
    shortLabel: 'SINGAPORE',
    country: 'Singapore',
    flag: '🇸🇬',
    role: 'Global Transshipment & Bunkering Hub',
    ports: 'PSA Singapore • Jurong Port • Changi Cargo',
    x: 77.5,
    y: 58.0,
    pinColor: '#D97706',
    corridorId: 'east-asia',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=PSA+Singapore+Port',
  },
  {
    id: 'china',
    name: 'China',
    shortLabel: 'SHANGHAI',
    country: 'China',
    flag: '🇨🇳',
    role: 'Far East Manufacturing Gateway',
    ports: 'Shanghai Yangshan • Ningbo-Zhoushan • Shenzhen',
    x: 82.5,
    y: 42.0,
    pinColor: '#D97706',
    corridorId: 'east-asia',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+Shanghai+Yangshan+China',
  },
  {
    id: 'japan',
    name: 'Japan & South Korea',
    shortLabel: 'TOKYO / BUSAN',
    country: 'Japan & Korea',
    flag: '🇯🇵',
    role: 'High-Tech Industrial Corridors',
    ports: 'Port of Tokyo • Yokohama • Busan New Port',
    x: 87.5,
    y: 38.0,
    pinColor: '#D97706',
    corridorId: 'east-asia',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+Tokyo+Japan',
  },
  {
    id: 'australia',
    name: 'Australia',
    shortLabel: 'SYDNEY / MELBOURNE',
    country: 'Australia',
    flag: '🇦🇺',
    role: 'Oceania Trade Corridors',
    ports: 'Port Botany (Sydney) • Port of Melbourne',
    x: 87.0,
    y: 78.0,
    pinColor: '#0891B2',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+Botany+Sydney+Australia',
  },
  {
    id: 'south-africa',
    name: 'South Africa',
    shortLabel: 'DURBAN',
    country: 'South Africa',
    flag: '🇿🇦',
    role: 'Southern African Trade Gateway',
    ports: 'Port of Durban • Cape Town Port',
    x: 54.0,
    y: 76.0,
    pinColor: '#0D9488',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+Durban+South+Africa',
  },
  {
    id: 'brazil',
    name: 'Brazil',
    shortLabel: 'SANTOS / SÃO PAULO',
    country: 'Brazil',
    flag: '🇧🇷',
    role: 'Latin America Maritime Hub',
    ports: 'Port of Santos • Rio de Janeiro',
    x: 31.0,
    y: 74.0,
    pinColor: '#0284C7',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+Santos+Brazil',
  },
];

export function GlobalRouteMap() {
  const [activeCorridorId, setActiveCorridorId] = useState<string>('europe');
  const [hoveredHub, setHoveredHub] = useState<string | null>(null);

  const currentCorridor =
    tradeCorridors.find((c) => c.id === activeCorridorId) || tradeCorridors[0];

  return (
    <section className="py-14 sm:py-20 bg-[#07192D] text-white relative overflow-hidden border-t border-white/10 select-none">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#0284C7]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-8 sm:mb-10">
          <ScrollReveal effect="fade-down" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 border border-sky-400/30 px-3.5 py-1 text-xs font-semibold text-sky-300 backdrop-blur-md shadow-sm">
              <Globe2 className="w-3.5 h-3.5 text-sky-400" />
              <span>International Trade Corridors</span>
            </div>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={60}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Global Connectivity Across Active Trade Lanes
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={120}>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl mx-auto">
              Direct premier maritime carrier allocations and scheduled air freight paths linking Indian manufacturing clusters with 15+ global gateway ports. Click any hub pin to view live location on Google Maps.
            </p>
          </ScrollReveal>
        </div>

        {/* Corridor Selection Pills */}
        <ScrollReveal effect="fade-up" delay={180} className="flex justify-center mb-6 sm:mb-7">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md shadow-xl">
            {tradeCorridors.map((corridor) => {
              const isSelected = activeCorridorId === corridor.id;
              return (
                <button
                  key={corridor.id}
                  onClick={() => setActiveCorridorId(corridor.id)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0284C7] text-white shadow-md shadow-sky-500/40 scale-[1.02]'
                      : 'text-neutral-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Navigation
                    className={`w-3.5 h-3.5 transition-transform ${
                      isSelected ? 'text-sky-200 rotate-45' : 'text-sky-400'
                    }`}
                  />
                  <span>{corridor.name.split('↔')[1]?.trim() || corridor.name}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* GOOGLE MAPS STYLE CLEAN LIGHT CANVAS CARD */}
        {/* ========================================================================= */}
        <ScrollReveal effect="scale-up" delay={240} duration={750}>
          <div className="rounded-3xl border-2 border-white/20 bg-[#F4F7FA] text-neutral-900 shadow-2xl overflow-hidden">
            
            {/* Google Maps Style Header Bar */}
            <div className="px-4 py-3 sm:px-5 sm:py-3.5 bg-white border-b border-neutral-200 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 text-[#0284C7] flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase font-bold text-sky-700">
                      LIVE GOOGLE MAP TELEMETRY
                    </span>
                    <span className="text-neutral-300">•</span>
                    <span className="text-[10px] font-bold text-neutral-500">
                      15 Global Ports Connected
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900">
                    {currentCorridor.name}
                  </h3>
                </div>
              </div>

              {/* Transit Metrics Chips */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <div className="px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-200/80 flex items-center gap-1.5">
                  <Ship className="w-3.5 h-3.5 text-sky-600" />
                  <span className="text-[10px] text-neutral-600 font-medium">Ocean:</span>
                  <strong className="text-sky-800 font-mono text-xs">{currentCorridor.oceanTransit}</strong>
                </div>

                <div className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center gap-1.5">
                  <Plane className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-[10px] text-neutral-600 font-medium">Air:</span>
                  <strong className="text-emerald-800 font-mono text-xs">{currentCorridor.airTransit}</strong>
                </div>

                <div className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200/80 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-[10px] text-neutral-600 font-medium">Terms:</span>
                  <strong className="text-amber-800 font-mono text-xs">{currentCorridor.incotermsCommon}</strong>
                </div>

                <a
                  href={currentCorridor.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-neutral-900 hover:bg-[#0284C7] text-white transition-colors flex items-center gap-1.5 text-[11px] font-bold shadow-xs cursor-pointer"
                  title="Open live Google Maps view for this trade corridor"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>

            {/* Google Maps White/Light Map Canvas Area */}
            <div className="relative w-full aspect-[16/8.5] min-h-[340px] sm:min-h-[400px] bg-[#EBF3F8] overflow-hidden flex items-center justify-center">
              
              {/* Subtle Map Grid Lat/Long Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

              {/* High-Resolution SVG Continents & Vivid Route Arcs */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 1000 480"
                preserveAspectRatio="xMidYMid meet"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Glowing Route Shadow Filter */}
                  <filter id="route-shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#0284C7" floodOpacity="0.4" />
                  </filter>
                </defs>

                {/* ========================================================================= */}
                {/* 1. CRISP GOOGLE-MAPS CONTINENT LANDMASSES */}
                {/* ========================================================================= */}
                {/* North America */}
                <path
                  d="M100 130 C 130 90, 220 80, 270 120 C 290 150, 280 230, 240 280 C 200 300, 160 270, 130 230 C 110 200, 90 160, 100 130 Z"
                  fill="#D6E4EE"
                  stroke="#A8C4D8"
                  strokeWidth="1.5"
                />
                {/* South America */}
                <path
                  d="M210 290 C 240 285, 270 320, 285 370 C 295 420, 260 465, 225 460 C 200 440, 195 380, 200 330 Z"
                  fill="#D6E4EE"
                  stroke="#A8C4D8"
                  strokeWidth="1.5"
                />
                {/* Europe */}
                <path
                  d="M430 110 C 470 90, 530 95, 545 140 C 555 175, 520 220, 480 220 C 445 210, 420 180, 425 140 Z"
                  fill="#D6E4EE"
                  stroke="#A8C4D8"
                  strokeWidth="1.5"
                />
                {/* Africa */}
                <path
                  d="M450 235 C 500 225, 555 240, 565 310 C 575 380, 540 445, 495 440 C 455 425, 435 340, 440 275 Z"
                  fill="#D6E4EE"
                  stroke="#A8C4D8"
                  strokeWidth="1.5"
                />
                {/* Asia / China / Far East */}
                <path
                  d="M570 120 C 670 95, 830 110, 870 180 C 890 230, 860 300, 800 325 C 750 330, 690 320, 640 250 C 610 200, 575 160, 570 120 Z"
                  fill="#D6E4EE"
                  stroke="#A8C4D8"
                  strokeWidth="1.5"
                />
                {/* Australia */}
                <path
                  d="M770 360 C 830 345, 875 375, 870 425 C 850 460, 790 460, 765 420 Z"
                  fill="#D6E4EE"
                  stroke="#A8C4D8"
                  strokeWidth="1.5"
                />

                {/* ========================================================================= */}
                {/* 2. HIGH-CONTRAST GOOGLE MAPS VIBRANT ROUTE ARCS */}
                {/* ========================================================================= */}
                {/* India -> Europe Route */}
                <path
                  d="M 675 260 C 590 220, 530 170, 485 145"
                  stroke="#0284C7"
                  strokeWidth={activeCorridorId === 'europe' ? '4' : '2'}
                  strokeDasharray={activeCorridorId === 'europe' ? '8 4' : '4 4'}
                  className={activeCorridorId === 'europe' ? 'animate-dash-flow' : ''}
                  opacity={activeCorridorId === 'europe' ? 1 : 0.35}
                />

                {/* India -> Middle East Route */}
                <path
                  d="M 675 260 C 640 245, 610 235, 585 230"
                  stroke="#059669"
                  strokeWidth={activeCorridorId === 'middle-east' ? '4' : '2'}
                  strokeDasharray={activeCorridorId === 'middle-east' ? '8 4' : '4 4'}
                  className={activeCorridorId === 'middle-east' ? 'animate-dash-flow' : ''}
                  opacity={activeCorridorId === 'middle-east' ? 1 : 0.35}
                />

                {/* Middle East -> Europe Bridge */}
                <path
                  d="M 585 230 C 535 185, 510 165, 485 145"
                  stroke="#0284C7"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity={0.35}
                />

                {/* India -> East Asia Route */}
                <path
                  d="M 675 260 C 735 255, 775 245, 825 210"
                  stroke="#D97706"
                  strokeWidth={activeCorridorId === 'east-asia' ? '4' : '2'}
                  strokeDasharray={activeCorridorId === 'east-asia' ? '8 4' : '4 4'}
                  className={activeCorridorId === 'east-asia' ? 'animate-dash-flow' : ''}
                  opacity={activeCorridorId === 'east-asia' ? 1 : 0.35}
                />

                {/* India -> Singapore -> Far East */}
                <path
                  d="M 675 260 C 720 270, 750 280, 775 290"
                  stroke="#D97706"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity={0.4}
                />

                {/* Europe -> North America Transatlantic Route */}
                <path
                  d="M 485 145 C 370 120, 290 150, 245 180"
                  stroke="#4F46E5"
                  strokeWidth={activeCorridorId === 'americas' ? '4' : '2'}
                  strokeDasharray={activeCorridorId === 'americas' ? '8 4' : '4 4'}
                  className={activeCorridorId === 'americas' ? 'animate-dash-flow' : ''}
                  opacity={activeCorridorId === 'americas' ? 1 : 0.35}
                />

                {/* India -> Australia Corridor */}
                <path
                  d="M 675 260 C 770 320, 830 350, 870 390"
                  stroke="#0891B2"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity={0.25}
                />

                {/* India -> South Africa Corridor */}
                <path
                  d="M 675 260 C 620 310, 570 340, 540 380"
                  stroke="#0D9488"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  opacity={0.25}
                />
              </svg>

              {/* ========================================================================= */}
              {/* 3. 15 GOOGLE MAPS STYLE CLICKABLE LOCATION PINS & CITY TAGS */}
              {/* ========================================================================= */}
              {tradeHubLocations.map((hub) => {
                const isSelected =
                  hub.isOrigin ||
                  (hub.corridorId && hub.corridorId === activeCorridorId);
                const isHovered = hoveredHub === hub.id;

                return (
                  <a
                    key={hub.id}
                    href={hub.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20 cursor-pointer focus:outline-none"
                    style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
                    onMouseEnter={() => setHoveredHub(hub.id)}
                    onMouseLeave={() => setHoveredHub(null)}
                    onClick={(e) => {
                      if (hub.corridorId) {
                        setActiveCorridorId(hub.corridorId);
                      }
                    }}
                    title={`Click to open ${hub.name} on Google Maps`}
                  >
                    {/* Pulsing Radar Ring for Active/Origin Hubs */}
                    {isSelected && (
                      <span
                        className="absolute -inset-2.5 rounded-full animate-ping opacity-75"
                        style={{ backgroundColor: hub.pinColor }}
                      />
                    )}

                    {/* Google Maps Style Vibrant Pin Marker */}
                    <div
                      className={`relative flex items-center justify-center rounded-full border-2 border-white shadow-lg transition-all duration-300 ${
                        hub.isOrigin
                          ? 'w-6 h-6 sm:w-7 sm:h-7 bg-red-600 scale-125 z-30 ring-2 ring-red-400/60'
                          : isSelected
                          ? 'w-5 h-5 sm:w-6 sm:h-6 scale-115 z-20'
                          : 'w-4 h-4 sm:w-4.5 sm:h-4.5 opacity-90 group-hover:scale-125 group-hover:opacity-100 z-10'
                      }`}
                      style={{
                        backgroundColor: hub.isOrigin ? '#DC2626' : hub.pinColor,
                      }}
                    >
                      {hub.isOrigin ? (
                        <Anchor className="w-3.5 h-3.5 text-white" />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-white shadow-xs" />
                      )}
                    </div>

                    {/* Google Maps Style Floating Pill Label */}
                    <div className="absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none">
                      <span
                        className={`px-1.5 sm:px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-extrabold font-mono tracking-tight shadow-md border transition-all flex items-center gap-1 ${
                          hub.isOrigin
                            ? 'bg-red-600 text-white border-red-700 shadow-red-500/30 scale-110'
                            : isSelected
                            ? 'bg-neutral-900 text-white border-neutral-950 shadow-black/30'
                            : 'bg-white/95 text-neutral-800 border-neutral-300 group-hover:bg-neutral-900 group-hover:text-white group-hover:border-neutral-950'
                        }`}
                      >
                        <span>{hub.flag}</span>
                        <span>{hub.shortLabel}</span>
                      </span>
                    </div>

                    {/* Rich Google Maps Detail Card Popover on Hover */}
                    <div
                      className={`absolute left-1/2 bottom-full mb-3 -translate-x-1/2 transition-all duration-200 z-40 ${
                        isHovered
                          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                          : 'opacity-0 translate-y-1 scale-95 pointer-events-none'
                      }`}
                    >
                      <div className="bg-white p-3 rounded-xl border border-neutral-200 shadow-2xl whitespace-nowrap text-left text-neutral-900 min-w-[220px]">
                        <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-neutral-100">
                          <div className="flex items-center gap-1.5 font-extrabold text-xs text-neutral-900">
                            <span className="text-base">{hub.flag}</span>
                            <span>{hub.name}</span>
                          </div>
                          <span className="px-1.5 py-0.5 rounded text-[8px] font-mono font-bold bg-sky-50 text-sky-700 border border-sky-200">
                            MAP PIN
                          </span>
                        </div>
                        <div className="text-[10px] font-bold text-sky-700 mt-1.5">
                          {hub.role}
                        </div>
                        <div className="text-[9px] text-neutral-500 mt-0.5 leading-tight">
                          {hub.ports}
                        </div>
                        <div className="mt-2 pt-2 border-t border-neutral-100 flex items-center justify-between text-[10px] font-bold text-red-600">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>View on Google Maps</span>
                          </span>
                          <ExternalLink className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}

              {/* Map Corner Navigation Compass */}
              <div className="absolute top-3 right-3 hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/90 border border-neutral-200 shadow-sm text-[10px] font-mono font-bold text-neutral-600 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>ACTIVE GOOGLE MAPS NETWORK</span>
              </div>
            </div>

            {/* Bottom Scope & Action Bar */}
            <div className="p-3.5 sm:p-4.5 bg-white border-t border-neutral-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-700 flex items-center gap-1.5">
                    <Anchor className="w-3.5 h-3.5 text-sky-600" />
                    <span>Selected Corridor Operational Scope</span>
                  </span>
                  <p className="text-xs text-neutral-700 leading-relaxed max-w-2xl font-medium">
                    {currentCorridor.description}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <a
                    href={currentCorridor.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl font-bold text-xs text-white bg-neutral-900 hover:bg-neutral-800 shadow-sm transition-all duration-200 cursor-pointer"
                  >
                    <MapPin className="w-3.5 h-3.5 text-red-400" />
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                  <a
                    href="/services/logistics-shipping"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-bold text-xs text-white bg-[#0284C7] hover:bg-[#0369A1] shadow-md shadow-sky-600/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                  >
                    <span>Check Freight Rates</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="/request-consultation"
                    className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl font-semibold text-xs text-neutral-700 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 transition-all duration-200"
                  >
                    <span>Consultation</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom 3 Capability Highlights (Light Theme) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-neutral-200 border-t border-neutral-200">
              <div className="flex items-center gap-2.5 p-3 bg-neutral-50 text-xs">
                <div className="w-7 h-7 rounded-lg bg-sky-100 text-[#0284C7] flex items-center justify-center shrink-0">
                  <Ship className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold text-neutral-500 block leading-tight">Ocean Carrier Desks</span>
                  <span className="text-xs font-bold text-neutral-900">Direct FCL/LCL Vessel Space</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 bg-neutral-50 text-xs">
                <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Plane className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold text-neutral-500 block leading-tight">Air Cargo Network</span>
                  <span className="text-xs font-bold text-neutral-900">Scheduled &amp; Charter Charters</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 bg-neutral-50 text-xs">
                <div className="w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="text-[9px] uppercase font-bold text-neutral-500 block leading-tight">Customs Liaison</span>
                  <span className="text-xs font-bold text-neutral-900">Pre-Arrival Green Channel</span>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
