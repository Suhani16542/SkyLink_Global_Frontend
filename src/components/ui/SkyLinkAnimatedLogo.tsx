'use client';

import React, { useState, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';

interface SkyLinkAnimatedLogoProps {
  variant?: 'dark' | 'transparent' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'hero';
  autoPlay?: boolean;
  loop?: boolean;
  showControls?: boolean;
  className?: string;
  onAnimationComplete?: () => void;
}

export function SkyLinkAnimatedLogo({
  variant = 'dark',
  size = 'hero',
  autoPlay = true,
  loop = false,
  showControls = false,
  className = '',
  onAnimationComplete,
}: SkyLinkAnimatedLogoProps) {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (autoPlay) {
      const timer = setTimeout(() => {
        if (onAnimationComplete) onAnimationComplete();
        if (loop) {
          setAnimationKey((prev) => prev + 1);
        }
      }, 4500);
      return () => clearTimeout(timer);
    }
  }, [autoPlay, loop, animationKey, onAnimationComplete]);

  const handleReplay = () => {
    setAnimationKey((prev) => prev + 1);
  };

  // Dimensions based on size
  const containerSizes = {
    sm: 'max-w-[320px] p-4',
    md: 'max-w-[480px] p-6',
    lg: 'max-w-[640px] p-8',
    hero: 'max-w-[800px] w-full p-6 sm:p-10',
  };

  const bgVariants = {
    dark: 'bg-gradient-to-b from-[#07192D] via-[#0A2540] to-[#07192D] border border-white/15 shadow-2xl rounded-3xl',
    transparent: 'bg-transparent',
    light: 'bg-white border border-neutral-200 shadow-xl rounded-3xl',
  };

  const isLight = variant === 'light';

  return (
    <div className={`relative flex flex-col items-center justify-center select-none ${containerSizes[size]} ${bgVariants[variant]} ${className}`}>
      {/* Dynamic Keyframed SVG Vector Artwork */}
      <div className="relative w-full aspect-[16/10] flex items-center justify-center">
        <svg
          key={animationKey}
          viewBox="0 0 800 500"
          className="w-full h-full drop-shadow-2xl overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Gradients */}
            <linearGradient id="skyGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>

            <linearGradient id="skyBlueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="50%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>

            <linearGradient id="globeGlow" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0284C7" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#07192D" stopOpacity="0.8" />
            </linearGradient>

            <linearGradient id="shimmerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Custom Keyframes embedded in SVG for deterministic 60fps execution */}
            <style>
              {`
                /* Step 2: Globe Reveal */
                @keyframes globeAppear {
                  0% { opacity: 0; transform: scale(0.7); filter: blur(6px); }
                  40% { opacity: 1; transform: scale(1.03); filter: blur(0px); }
                  100% { opacity: 1; transform: scale(1); filter: blur(0px); }
                }
                .anim-globe {
                  transform-origin: 400px 145px;
                  animation: globeAppear 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }

                /* Step 3: Golden Orbital Ring Drawing & Rotation */
                @keyframes orbitDraw {
                  0% { stroke-dashoffset: 600; opacity: 0; transform: rotate(-15deg); }
                  30% { opacity: 1; }
                  100% { stroke-dashoffset: 0; opacity: 1; transform: rotate(0deg); }
                }
                .anim-orbit {
                  stroke-dasharray: 600;
                  transform-origin: 400px 145px;
                  animation: orbitDraw 2.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
                  opacity: 0;
                }

                /* Step 4: Airplane Path Follow */
                @keyframes planeFlight {
                  0% { opacity: 0; transform: translate(-80px, 40px) scale(0.6) rotate(-25deg); }
                  20% { opacity: 1; }
                  70% { transform: translate(15px, -15px) scale(1.1) rotate(5deg); }
                  100% { opacity: 1; transform: translate(0px, 0px) scale(1) rotate(0deg); }
                }
                .anim-airplane {
                  transform-origin: 470px 95px;
                  animation: planeFlight 2.2s cubic-bezier(0.2, 0.8, 0.2, 1) 0.6s forwards;
                  opacity: 0;
                }

                /* Step 5: Cargo Vessel Sailing on Waves */
                @keyframes shipSail {
                  0% { opacity: 0; transform: translateX(-40px) translateY(10px); }
                  40% { opacity: 1; transform: translateX(5px) translateY(-2px); }
                  70% { transform: translateX(-2px) translateY(1px); }
                  100% { opacity: 1; transform: translateX(0px) translateY(0px); }
                }
                .anim-ship {
                  animation: shipSail 2s cubic-bezier(0.16, 1, 0.3, 1) 0.9s forwards;
                  opacity: 0;
                }

                @keyframes waveMotion {
                  0%, 100% { transform: translateX(0px); }
                  50% { transform: translateX(6px); }
                }
                .anim-waves {
                  animation: waveMotion 4s ease-in-out infinite 2s;
                }

                /* Step 6: Subtle Globe Rotation Latitudes */
                @keyframes gridFlow {
                  0% { stroke-dashoffset: 100; }
                  100% { stroke-dashoffset: 0; }
                }
                .anim-grid {
                  stroke-dasharray: 10 5;
                  animation: gridFlow 6s linear infinite;
                }

                /* Step 7 & 8: SKYLINK Wordmark Reveal from Left */
                @keyframes wordmarkReveal {
                  0% { clip-path: inset(0 100% 0 0); opacity: 0; transform: translateX(-15px); }
                  100% { clip-path: inset(0 0% 0 0); opacity: 1; transform: translateX(0); }
                }
                .anim-wordmark {
                  animation: wordmarkReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.5s forwards;
                  opacity: 0;
                }

                /* Step 9: GLOBAL SERVICES Fade in */
                @keyframes globalServicesReveal {
                  0% { opacity: 0; letter-spacing: 0.4em; transform: translateY(6px); }
                  100% { opacity: 1; letter-spacing: 0.28em; transform: translateY(0); }
                }
                .anim-subtext {
                  animation: globalServicesReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) 2.0s forwards;
                  opacity: 0;
                }

                /* Step 10: Tagline Fade in */
                @keyframes taglineReveal {
                  0% { opacity: 0; transform: translateY(8px); }
                  100% { opacity: 1; transform: translateY(0); }
                }
                .anim-tagline {
                  animation: taglineReveal 1.1s cubic-bezier(0.16, 1, 0.3, 1) 2.6s forwards;
                  opacity: 0;
                }

                /* Step 11: 3 Business Pillars Staggered Reveal */
                @keyframes pillar1 {
                  0% { opacity: 0; transform: translateY(6px) scale(0.95); }
                  100% { opacity: 1; transform: translateY(0) scale(1); }
                }
                .anim-pillar-1 {
                  animation: pillar1 0.8s cubic-bezier(0.16, 1, 0.3, 1) 3.1s forwards;
                  opacity: 0;
                }
                .anim-pillar-2 {
                  animation: pillar1 0.8s cubic-bezier(0.16, 1, 0.3, 1) 3.35s forwards;
                  opacity: 0;
                }
                .anim-pillar-3 {
                  animation: pillar1 0.8s cubic-bezier(0.16, 1, 0.3, 1) 3.6s forwards;
                  opacity: 0;
                }

                /* Step 12: Light Sweep Shimmer on Finish */
                @keyframes lightSweep {
                  0% { transform: translateX(-400px) skewX(-20deg); opacity: 0; }
                  30% { opacity: 0.6; }
                  100% { transform: translateX(800px) skewX(-20deg); opacity: 0; }
                }
                .anim-shimmer {
                  animation: lightSweep 1.8s ease-in-out 3.7s forwards;
                  opacity: 0;
                }
              `}
            </style>
          </defs>

          {/* ========================================================================= */}
          {/* 1. AMBIENT BACKGROUND GLOW */}
          {/* ========================================================================= */}
          <circle cx="400" cy="145" r="110" fill="url(#globeGlow)" opacity="0.35" />

          {/* ========================================================================= */}
          {/* 2. LOGO SYMBOL: GLOBE & PARALLELS */}
          {/* ========================================================================= */}
          <g className="anim-globe">
            {/* Outer Globe Sphere Ring */}
            <circle
              cx="400"
              cy="145"
              r="68"
              fill={isLight ? '#F0F9FF' : '#07192D'}
              stroke="#0284C7"
              strokeWidth="2.5"
              strokeOpacity="0.85"
            />

            {/* Latitude Ellipses */}
            <ellipse
              cx="400"
              cy="145"
              rx="68"
              ry="24"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="1.2"
              strokeOpacity="0.5"
              className="anim-grid"
            />
            <ellipse
              cx="400"
              cy="145"
              rx="68"
              ry="48"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="1.2"
              strokeOpacity="0.4"
              className="anim-grid"
            />

            {/* Longitude Ellipses (Globe Meridian Grid) */}
            <ellipse
              cx="400"
              cy="145"
              rx="28"
              ry="68"
              fill="none"
              stroke="#93C5FD"
              strokeWidth="1.5"
              strokeOpacity="0.6"
            />
            <line
              x1="400"
              y1="77"
              x2="400"
              y2="213"
              stroke="#38BDF8"
              strokeWidth="1.5"
              strokeOpacity="0.5"
            />

            {/* Core Node Center Indicator */}
            <circle cx="400" cy="145" r="4" fill="#0284C7" />
            <circle cx="400" cy="145" r="2" fill="#FFFFFF" />
          </g>

          {/* ========================================================================= */}
          {/* 3. GOLDEN ORBITAL RING */}
          {/* ========================================================================= */}
          <g className="anim-orbit">
            <ellipse
              cx="400"
              cy="145"
              rx="96"
              ry="38"
              transform="rotate(-18 400 145)"
              fill="none"
              stroke="url(#skyGoldGradient)"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* Secondary Golden Trajectory Trail */}
            <ellipse
              cx="400"
              cy="145"
              rx="92"
              ry="34"
              transform="rotate(-18 400 145)"
              fill="none"
              stroke="#FDE68A"
              strokeWidth="1"
              strokeOpacity="0.5"
              strokeDasharray="4 6"
            />
          </g>

          {/* ========================================================================= */}
          {/* 4. AIRPLANE SYMBOL (Following Golden Orbit Path) */}
          {/* ========================================================================= */}
          <g className="anim-airplane" transform="translate(470, 95)">
            {/* Jet Aircraft Path/Silhouette */}
            <path
              d="M0,0 L18,-8 L26,-4 L16,4 L24,14 L18,16 L12,8 L-4,10 L-8,6 L0,0 Z"
              fill="url(#skyGoldGradient)"
              stroke="#FFFFFF"
              strokeWidth="0.75"
              filter="drop-shadow(0 4px 6px rgba(0,0,0,0.4))"
            />
            {/* Jet Thruster Trail */}
            <circle cx="-6" cy="7" r="2" fill="#FBBF24" opacity="0.8" />
            <circle cx="-11" cy="9" r="1.2" fill="#38BDF8" opacity="0.6" />
          </g>

          {/* ========================================================================= */}
          {/* 5. CARGO VESSEL & NAUTICAL MARITIME WAVES */}
          {/* ========================================================================= */}
          <g className="anim-ship" transform="translate(355, 172)">
            {/* Ship Hull (Modern Container Vessel Bow) */}
            <path
              d="M0,18 L90,18 L82,30 L16,30 Z"
              fill={isLight ? '#0A2540' : '#FFFFFF'}
              stroke="#0284C7"
              strokeWidth="1.2"
            />
            {/* Ship Keel / Bulbous Bow Line */}
            <path
              d="M0,18 L14,24 L16,30"
              fill="none"
              stroke="#0284C7"
              strokeWidth="1"
            />
            {/* Cargo Containers Stacks (SkyLink Blue & Gold) */}
            <rect x="22" y="8" width="16" height="10" rx="1.5" fill="#0284C7" />
            <rect x="40" y="8" width="16" height="10" rx="1.5" fill="#F59E0B" />
            <rect x="58" y="8" width="14" height="10" rx="1.5" fill="#0369A1" />
            <rect x="30" y="0" width="16" height="8" rx="1.5" fill="#38BDF8" />
            <rect x="48" y="0" width="16" height="8" rx="1.5" fill="#D97706" />

            {/* Vessel Bridge / Superstructure */}
            <rect x="74" y="2" width="10" height="16" rx="1" fill={isLight ? '#0A2540' : '#E2E8F0'} />
            <rect x="76" y="5" width="6" height="3" fill="#38BDF8" />

            {/* Nautical Water Waves */}
            <g className="anim-waves">
              <path
                d="M -15,32 Q 5,28 25,32 T 65,32 T 105,32"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.8"
              />
              <path
                d="M -5,36 Q 15,33 35,36 T 75,36 T 115,36"
                fill="none"
                stroke="#93C5FD"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.5"
              />
            </g>
          </g>

          {/* ========================================================================= */}
          {/* 7 & 8. SKYLINK WORDMARK (Smooth Left-to-Right Reveal) */}
          {/* ========================================================================= */}
          <g className="anim-wordmark">
            <text
              x="400"
              y="285"
              textAnchor="middle"
              className="font-black font-sans"
              style={{
                fontSize: '54px',
                fontWeight: 900,
                letterSpacing: '-0.03em',
              }}
            >
              <tspan fill={isLight ? '#0A2540' : '#FFFFFF'}>Sky</tspan>
              <tspan fill="url(#skyBlueGradient)">Link</tspan>
            </text>
          </g>

          {/* ========================================================================= */}
          {/* 9. GLOBAL SERVICES SUBTITLE */}
          {/* ========================================================================= */}
          <g className="anim-subtext">
            <text
              x="400"
              y="322"
              textAnchor="middle"
              fill={isLight ? '#475569' : '#94A3B8'}
              style={{
                fontSize: '15px',
                fontWeight: 800,
                letterSpacing: '0.28em',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              GLOBAL SERVICES
            </text>
          </g>

          {/* Decorative Divider Line */}
          <g className="anim-subtext">
            <line
              x1="280"
              y1="340"
              x2="520"
              y2="340"
              stroke={isLight ? '#CBD5E1' : 'rgba(255,255,255,0.15)'}
              strokeWidth="1.5"
            />
            <circle cx="400" cy="340" r="3" fill="#F59E0B" />
          </g>

          {/* ========================================================================= */}
          {/* 10. TAGLINE: Connecting Markets. Delivering Opportunities. */}
          {/* ========================================================================= */}
          <g className="anim-tagline">
            <text
              x="400"
              y="370"
              textAnchor="middle"
              fill={isLight ? '#0284C7' : '#38BDF8'}
              style={{
                fontSize: '15px',
                fontWeight: 700,
                fontStyle: 'italic',
                letterSpacing: '0.02em',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              &ldquo;Connecting Markets. Delivering Opportunities.&rdquo;
            </text>
          </g>

          {/* ========================================================================= */}
          {/* 11. THREE BUSINESS PILLARS (Staggered Appearance) */}
          {/* ========================================================================= */}
          {/* Pillar 1: EXIM Consultancy */}
          <g className="anim-pillar-1" transform="translate(180, 415)">
            <rect
              x="0"
              y="0"
              width="130"
              height="28"
              rx="14"
              fill={isLight ? '#F0F9FF' : 'rgba(2, 132, 199, 0.15)'}
              stroke={isLight ? '#BAE6FD' : 'rgba(56, 189, 248, 0.35)'}
              strokeWidth="1"
            />
            <text
              x="65"
              y="18"
              textAnchor="middle"
              fill={isLight ? '#0369A1' : '#E0F2FE'}
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              EXIM Consultancy
            </text>
          </g>

          {/* Pillar 2: Global Logistics */}
          <g className="anim-pillar-2" transform="translate(335, 415)">
            <rect
              x="0"
              y="0"
              width="130"
              height="28"
              rx="14"
              fill={isLight ? '#FFFBEB' : 'rgba(245, 158, 11, 0.15)'}
              stroke={isLight ? '#FDE68A' : 'rgba(251, 191, 36, 0.35)'}
              strokeWidth="1"
            />
            <text
              x="65"
              y="18"
              textAnchor="middle"
              fill={isLight ? '#B45309' : '#FEF3C7'}
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              Global Logistics
            </text>
          </g>

          {/* Pillar 3: Trade Compliance */}
          <g className="anim-pillar-3" transform="translate(490, 415)">
            <rect
              x="0"
              y="0"
              width="130"
              height="28"
              rx="14"
              fill={isLight ? '#ECFDF5' : 'rgba(16, 185, 129, 0.15)'}
              stroke={isLight ? '#A7F3D0' : 'rgba(52, 211, 153, 0.35)'}
              strokeWidth="1"
            />
            <text
              x="65"
              y="18"
              textAnchor="middle"
              fill={isLight ? '#047857' : '#D1FAE5'}
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.04em',
                fontFamily: 'system-ui, -apple-system, sans-serif',
              }}
            >
              Trade Compliance
            </text>
          </g>

          {/* ========================================================================= */}
          {/* 12. SHIMMER / LIGHT SWEEP EFFECT ON FINISH */}
          {/* ========================================================================= */}
          <rect
            className="anim-shimmer pointer-events-none"
            x="0"
            y="0"
            width="240"
            height="500"
            fill="url(#shimmerGradient)"
          />
        </svg>
      </div>

      {/* Control Buttons */}
      {showControls && (
        <div className="mt-4 flex items-center justify-center gap-3">
          <button
            onClick={handleReplay}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold text-sky-300 bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer shadow-sm hover:scale-105"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Replay Logo Motion</span>
          </button>
        </div>
      )}
    </div>
  );
}
