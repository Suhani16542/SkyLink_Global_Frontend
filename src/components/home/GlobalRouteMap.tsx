'use client';

import React from 'react';
import { Globe2, Ship, Plane, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

const tradeHubs = [
  {
    name: 'India (HQ)',
    role: 'Central EXIM Advisory & Port Gateways',
    coords: 'Mumbai • Nhava Sheva • Mundra • Chennai',
    x: '68%',
    y: '58%',
    active: true,
  },
  {
    name: 'Middle East',
    role: 'Jebel Ali Transshipment Hub',
    coords: 'Dubai • Abu Dhabi • Doha',
    x: '59%',
    y: '50%',
    active: true,
  },
  {
    name: 'Europe',
    role: 'Rotterdam & Hamburg Corridors',
    coords: 'Rotterdam • Antwerp • Frankfurt CargoCity',
    x: '48%',
    y: '34%',
    active: true,
  },
  {
    name: 'East Asia',
    role: 'Manufacturing & Tech Gateway',
    coords: 'Singapore • Shanghai • Busan',
    x: '82%',
    y: '48%',
    active: true,
  },
  {
    name: 'Americas',
    role: 'North American East & West Coast',
    coords: 'New York/NJ • Long Beach • Houston',
    x: '24%',
    y: '42%',
    active: true,
  },
];

export function GlobalRouteMap() {
  return (
    <section className="py-20 sm:py-28 bg-[#07192D] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#0284C7]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading with ScrollReveal */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <ScrollReveal effect="fade-down" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 border border-sky-400/30 px-3.5 py-1.5 text-xs font-semibold text-sky-300">
              <Globe2 className="w-4 h-4 text-sky-400" />
              <span>International Trade Corridors</span>
            </div>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={80}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Seamless Connectivity Across Global Trade Lanes
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={160}>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              SkyLink coordinates multi-carrier ocean schedules and direct air freight routes linking Indian manufacturing hubs with major markets in Europe, the Middle East, Asia, and the Americas.
            </p>
          </ScrollReveal>
        </div>

        {/* Interactive World Route Visual Map Canvas */}
        <ScrollReveal effect="scale-up" delay={240} duration={800}>
          <div className="relative w-full aspect-[16/9] min-h-[420px] sm:min-h-[500px] rounded-3xl border border-white/15 bg-gradient-to-b from-[#0A2540]/80 to-[#07192D]/95 p-6 shadow-2xl backdrop-blur-xl overflow-hidden flex items-center justify-center">
            {/* Subtle Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-40" />

            {/* Stylized Vector World Map Silhouettes / Coordinates */}
            <svg
              className="absolute inset-0 w-full h-full opacity-35"
              viewBox="0 0 1000 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Abstract continental landmass contours */}
              <path
                d="M150 180 Q 220 140 280 200 T 260 320 T 180 340 Z"
                fill="#0ea5e9"
                fillOpacity="0.12"
              />
              <path
                d="M450 140 Q 520 120 560 180 T 520 260 T 440 240 Z"
                fill="#0ea5e9"
                fillOpacity="0.12"
              />
              <path
                d="M620 160 Q 750 140 840 220 T 800 340 T 660 320 Z"
                fill="#0ea5e9"
                fillOpacity="0.12"
              />
              <path
                d="M660 320 Q 720 300 750 360 T 700 420 Z"
                fill="#0ea5e9"
                fillOpacity="0.1"
              />

              {/* Connecting Maritime & Air Trade Lane Arcs */}
              <path
                d="M 680 290 Q 580 180 480 170"
                stroke="#38BDF8"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="animate-dash-flow"
              />
              <path
                d="M 680 290 Q 635 270 590 250"
                stroke="#34D399"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="animate-dash-flow"
              />
              <path
                d="M 590 250 Q 530 200 480 170"
                stroke="#60A5FA"
                strokeWidth="2"
                strokeDasharray="4 4"
                className="animate-dash-flow"
              />
              <path
                d="M 680 290 Q 750 260 820 240"
                stroke="#F59E0B"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="animate-dash-flow"
              />
              <path
                d="M 480 170 Q 360 140 240 210"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="animate-dash-flow"
              />
            </svg>

            {/* Floating Hub Points on Map */}
            {tradeHubs.map((hub, idx) => (
              <div
                key={idx}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{ left: hub.x, top: hub.y }}
              >
                {/* Radar Ping */}
                <span className="absolute -inset-2 rounded-full bg-sky-400/30 animate-ping" />
                {/* Core Node */}
                <div className="relative w-4 h-4 rounded-full bg-[#0284C7] border-2 border-white shadow-lg flex items-center justify-center group-hover:scale-125 transition-transform">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>

                {/* Tooltip Card */}
                <div className="absolute left-1/2 bottom-full mb-3 -translate-x-1/2 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-200">
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

            {/* Live Overlay Metrics in Bottom Bar */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl glass-panel-dark border border-white/15 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-300 flex items-center justify-center">
                  <Ship className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">Ocean Corridors</span>
                  <span className="text-xs font-bold text-white">Direct Tier-1 Carrier Booking</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                  <Plane className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-neutral-400 block">Air Freight Desk</span>
                  <span className="text-xs font-bold text-white">Scheduled &amp; Charter Cargo</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-300 flex items-center justify-center">
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
