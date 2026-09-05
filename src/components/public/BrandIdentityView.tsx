'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { SkyLinkAnimatedLogo } from '@/components/ui/SkyLinkAnimatedLogo';
import { Sparkles, ArrowLeft } from 'lucide-react';

export function BrandIdentityView() {
  const [variant, setVariant] = useState<'dark' | 'light' | 'transparent'>('dark');

  return (
    <div className={`min-h-screen transition-colors duration-300 ${variant === 'light' ? 'bg-neutral-100' : 'bg-[#07192D]'}`}>
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
        {/* Top Navigation */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/"
            className={`inline-flex items-center gap-2 text-xs font-bold transition-colors ${
              variant === 'light' ? 'text-neutral-700 hover:text-neutral-900' : 'text-neutral-300 hover:text-white'
            }`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to SkyLink Global Services</span>
          </Link>

          {/* Mode Switchers */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setVariant('dark')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                variant === 'dark'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-white/10 text-neutral-300 hover:bg-white/20'
              }`}
            >
              Corporate Navy Mode
            </button>
            <button
              onClick={() => setVariant('transparent')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                variant === 'transparent'
                  ? 'bg-sky-600 text-white shadow-sm'
                  : 'bg-white/10 text-neutral-300 hover:bg-white/20'
              }`}
            >
              Transparent Vector
            </button>
            <button
              onClick={() => setVariant('light')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                variant === 'light'
                  ? 'bg-[#0A2540] text-white shadow-sm'
                  : 'bg-white/10 text-neutral-300 hover:bg-white/20'
              }`}
            >
              Editorial Light Mode
            </button>
          </div>
        </div>

        {/* Title Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 px-3.5 py-1 text-xs font-bold text-sky-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Official Identity &amp; Motion Architecture</span>
          </div>
          <h1 className={`text-2xl sm:text-4xl font-extrabold ${variant === 'light' ? 'text-neutral-900' : 'text-white'}`}>
            SkyLink Global Services — Motion Logo
          </h1>
          <p className={`text-xs sm:text-sm max-w-xl mx-auto ${variant === 'light' ? 'text-neutral-600' : 'text-neutral-400'}`}>
            Sophisticated vector motion sequence featuring the globe, golden orbital arc, jet aircraft, cargo vessel, tagline, and three statutory business pillars.
          </p>
        </div>

        {/* Animated Logo Canvas Stage */}
        <div className="flex justify-center items-center py-6">
          <SkyLinkAnimatedLogo
            variant={variant}
            size="hero"
            autoPlay={true}
            showControls={true}
            className="w-full"
          />
        </div>

        {/* Sequence Highlights Card */}
        <div className={`p-6 rounded-2xl border ${variant === 'light' ? 'bg-white border-neutral-200 text-neutral-800' : 'bg-white/5 border-white/10 text-neutral-300'} space-y-4 text-xs`}>
          <h3 className={`text-sm font-bold uppercase tracking-wider ${variant === 'light' ? 'text-neutral-900' : 'text-white'}`}>
            12-Stage Motion Sequence Breakdown
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { num: '01', title: 'Globe Genesis', desc: 'Subtle light glow and latitude meridian reveal.' },
              { num: '02', title: 'Golden Orbital Arc', desc: 'Drawing 360° global trade connectivity path.' },
              { num: '03', title: 'Aviation Dynamics', desc: 'Airplane tracking along high-velocity orbital lane.' },
              { num: '04', title: 'Maritime Vessel', desc: 'Cargo container ship cruising across water waves.' },
              { num: '05', title: 'Wordmark Reveal', desc: 'Smooth left-to-right emergence of SKYLINK.' },
              { num: '06', title: 'Subtext & Tagline', desc: 'GLOBAL SERVICES & Connecting Markets fade-in.' },
              { num: '07', title: 'Pillar 1: EXIM Consultancy', desc: 'DGFT, customs & statutory advisory badge.' },
              { num: '08', title: 'Pillar 2: Global Logistics', desc: 'Multimodal ocean & air freight allocation.' },
              { num: '09', title: 'Pillar 3: Trade Compliance', desc: 'Statutory GST & cargo risk management.' },
            ].map((step, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-black/10 border border-white/5 space-y-1">
                <div className="font-mono font-bold text-sky-400">{step.num}. {step.title}</div>
                <div className="text-[11px] text-neutral-400">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
