'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface HeroSlide {
  id: string;
  themeName: string;
  badge: string;
  heading: string;
  subtext: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
  videoLocal: string;
  videoCdn: string;
  fallbackPoster: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'slide-shipping',
    themeName: 'Ocean Freight',
    badge: 'Global Shipping & Cargo',
    heading: 'Connecting Global Trade.',
    subtext: 'Reliable freight solutions across borders.',
    primaryCta: { text: 'Explore Services', href: '/services' },
    secondaryCta: { text: 'Request Consultation', href: '/request-consultation' },
    videoLocal: '/videos/video1-shipping.mp4',
    videoCdn: 'https://assets.mixkit.co/videos/35869/35869-720.mp4',
    fallbackPoster:
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 'slide-employee-factory',
    themeName: 'Enterprise Operations',
    badge: 'Operations & Trade Compliance',
    heading: 'Logistics Built Around Your Business.',
    subtext: 'Reliable operations that keep your supply chain moving.',
    primaryCta: { text: 'Our Solutions', href: '/services' },
    secondaryCta: { text: 'Consult Specialist', href: '/contact' },
    videoLocal: '/videos/video2-employee-factory.mp4',
    videoCdn: 'https://assets.mixkit.co/videos/4705/4705-720.mp4',
    fallbackPoster:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 'slide-warehouse',
    themeName: 'Warehousing',
    badge: 'Hub Storage & Distribution',
    heading: 'Smarter Logistics. Seamless Operations.',
    subtext: 'Efficient warehousing and supply chain solutions.',
    primaryCta: { text: 'Discover More', href: '/about' },
    secondaryCta: { text: 'Get In Touch', href: '/contact' },
    videoLocal: '/videos/video3-warehouse.mp4',
    videoCdn: 'https://assets.mixkit.co/videos/23011/23011-720.mp4',
    fallbackPoster:
      'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 'slide-air-express',
    themeName: 'Air & Express',
    badge: 'Global Freight Routing',
    heading: 'Moving Your Business Forward.',
    subtext: 'Reliable transportation for every shipment.',
    primaryCta: { text: 'Explore Logistics', href: '/services/logistics-shipping' },
    secondaryCta: { text: 'Track Shipment', href: '/services/logistics-shipping' },
    videoLocal: '/videos/video4-truck.mp4',
    videoCdn: 'https://assets.mixkit.co/videos/28000/28000-720.mp4',
    fallbackPoster:
      'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1920&auto=format&fit=crop',
  },
  {
    id: 'slide-port-containers',
    themeName: 'Import & Export',
    badge: 'Port Terminals & Customs',
    heading: 'Powering Global Trade.',
    subtext: 'Seamless import and export solutions across markets.',
    primaryCta: { text: 'Learn More', href: '/services' },
    secondaryCta: { text: 'Trade Advisory', href: '/request-consultation' },
    videoLocal: '/videos/video5-port-containers.mp4',
    videoCdn: 'https://assets.mixkit.co/videos/30979/30979-720.mp4',
    fallbackPoster:
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1920&auto=format&fit=crop',
  },
];

const SLIDE_DURATION = 6500; // 6.5s per video
const PLAYBACK_RATE = 1.15; // 1.15x energetic playback speed

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Automatic slide rotation
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Ensure active video is playing and preheat upcoming video
  useEffect(() => {
    const activeVideo = videoRefs.current[currentIndex];
    if (activeVideo) {
      activeVideo.muted = isMuted;
      activeVideo.playbackRate = PLAYBACK_RATE;
      if (!isPaused) {
        const playPromise = activeVideo.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            activeVideo.muted = true;
            activeVideo.play().catch(() => {});
          });
        }
      }
    }

    // Pre-buffer next video
    const nextIdx = (currentIndex + 1) % HERO_SLIDES.length;
    const nextVideo = videoRefs.current[nextIdx];
    if (nextVideo && nextVideo.paused && !isPaused) {
      nextVideo.muted = true;
      nextVideo.playbackRate = PLAYBACK_RATE;
      nextVideo.play().catch(() => {});
    }
  }, [currentIndex, isPaused, isMuted]);

  const togglePlayPause = () => {
    const activeVideo = videoRefs.current[currentIndex];
    if (!activeVideo) return;
    if (isPaused) {
      activeVideo.play().catch(() => {});
      setIsPaused(false);
    } else {
      activeVideo.pause();
      setIsPaused(true);
    }
  };

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    videoRefs.current.forEach((vid) => {
      if (vid) vid.muted = newMuted;
    });
  };

  const activeSlide = HERO_SLIDES[currentIndex];

  return (
    <section className="relative w-full min-h-[85vh] sm:min-h-[88vh] lg:min-h-[90vh] flex flex-col justify-between overflow-hidden bg-neutral-950 text-white select-none">
      
      {/* ========================================================================= */}
      {/* 1. BRIGHT, PURE LOGISTICS BACKGROUND VIDEOS (Crossfade Carousel) */}
      {/* ========================================================================= */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-[1]' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Fallback image */}
            <div className="absolute inset-0">
              <Image
                src={slide.fallbackPoster}
                alt={slide.heading}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>

            {/* Pure logistics video element - clear, bright, uninterrupted at 1.15x speed */}
            <video
              ref={(el) => {
                videoRefs.current[idx] = el;
              }}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="auto"
              poster={slide.fallbackPoster}
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={slide.videoLocal} type="video/mp4" />
              <source src={slide.videoCdn} type="video/mp4" />
            </video>
          </div>
        );
      })}

      {/* ========================================================================= */}
      {/* 2. SUBTLE, ULTRA-LIGHT READABILITY GRADIENTS (Video stays clear and bright) */}
      {/* ========================================================================= */}
      {/* Soft directional gradient only over text area, keeping 80% of canvas 100% natural */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent z-[2] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15 z-[2] pointer-events-none" />

      {/* ========================================================================= */}
      {/* 3. MINIMAL HERO CONTENT (Balanced spacing, fully visible on all viewports) */}
      {/* ========================================================================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center pt-14 pb-8 sm:pt-16 sm:pb-12 lg:pt-20 lg:pb-14">
        <div className="max-w-3xl text-left">
          
          <div
            key={`hero-content-${currentIndex}`}
            className="space-y-4 sm:space-y-5 animate-in fade-in slide-in-from-bottom-3 duration-500 fill-mode-forwards"
          >
            {/* Authority Badge */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/25 border border-sky-300/40 px-3.5 py-1 text-xs font-semibold text-sky-100 backdrop-blur-md shadow-md">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>{activeSlide.badge}</span>
              </span>
            </div>

            {/* Short Heading (2-4 lines, perfectly sized across viewports) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12] drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
              {activeSlide.heading}
            </h1>

            {/* One Short Supporting Sentence */}
            <p className="text-base sm:text-lg lg:text-xl text-white/95 max-w-2xl font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {activeSlide.subtext}
            </p>

            {/* 2 CTA Buttons */}
            <div className="pt-2 sm:pt-3 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href={activeSlide.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-sm text-white bg-[#0284C7] hover:bg-[#0369A1] shadow-xl shadow-sky-600/40 hover:shadow-sky-600/60 hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 cursor-pointer drop-shadow-md"
              >
                <span>{activeSlide.primaryCta.text}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href={activeSlide.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-semibold text-sm text-white bg-white/20 hover:bg-white/30 border border-white/40 hover:border-white/70 hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 cursor-pointer backdrop-blur-md shadow-lg shadow-black/20 drop-shadow-md"
              >
                <span>{activeSlide.secondaryCta.text}</span>
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. CLEAN MINIMAL BOTTOM DOCK & PAGINATION */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full pb-6 pt-3 px-4 sm:px-6 lg:px-8 bg-gradient-to-t from-black/50 to-transparent">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-3 sm:gap-4">
          
          {/* 5 Video Theme Indicators */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-wrap">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`group flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full transition-all duration-300 cursor-pointer backdrop-blur-md ${
                    isActive
                      ? 'bg-white/25 border border-white/60 text-white shadow-md'
                      : 'bg-black/30 border border-white/20 text-white/70 hover:bg-white/15 hover:text-white'
                  }`}
                  aria-label={`Go to ${slide.themeName}`}
                >
                  <span
                    className={`h-2 rounded-full transition-all duration-300 ${
                      isActive ? 'w-4 sm:w-5 bg-[#0284C7]' : 'w-2 bg-white/50 group-hover:bg-white/80'
                    }`}
                  />
                  <span className="text-[11px] sm:text-xs font-semibold tracking-wide hidden sm:inline">
                    {slide.themeName}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Controls: Prev/Next & Play/Mute */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white transition-all duration-200 cursor-pointer backdrop-blur-md"
              aria-label="Previous Video"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white transition-all duration-200 cursor-pointer backdrop-blur-md"
              aria-label="Next Video"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={togglePlayPause}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white transition-all duration-200 cursor-pointer backdrop-blur-md ml-1"
              aria-label={isPaused ? 'Play' : 'Pause'}
              title={isPaused ? 'Play' : 'Pause'}
            >
              {isPaused ? <Play className="w-4 h-4 text-sky-400" /> : <Pause className="w-4 h-4" />}
            </button>

            <button
              onClick={toggleMute}
              className="p-2 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white transition-all duration-200 cursor-pointer backdrop-blur-md"
              aria-label={isMuted ? 'Unmute' : 'Mute'}
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-neutral-400" /> : <Volume2 className="w-4 h-4 text-sky-400" />}
            </button>
          </div>

        </div>
      </div>

    </section>
  );
}
