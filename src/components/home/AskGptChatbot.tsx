'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  X,
  ArrowRight,
  Ship,
  Calculator,
  FileText,
  Warehouse,
  Bot,
  Send,
} from 'lucide-react';

export function AskGptChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const suggestionCards = [
    {
      icon: Ship,
      title: 'Ocean & Air Freight Rates',
      prompt: 'How can I optimize freight costs and ocean shipping transit times?',
    },
    {
      icon: Calculator,
      title: 'GST Refunds & LUT Filing',
      prompt: 'What are the statutory requirements for filing GST refunds on zero-rated exports?',
    },
    {
      icon: FileText,
      title: 'Customs Documentation',
      prompt: 'What documents are required for ICEGATE filing and Certificate of Origin?',
    },
    {
      icon: Warehouse,
      title: 'Bonded Warehousing',
      prompt: 'How does Section 65 MOOWR bonded storage help defer customs duties?',
    },
  ];

  const handleCardClick = (promptText: string) => {
    setInputValue(promptText);
  };

  return (
    <>
      {/* ========================================================================= */}
      {/* 1. FLOATING "Ask our GPT" PILL / BUTTON (Right Side of Hero) */}
      {/* ========================================================================= */}
      <div className="absolute right-4 sm:right-8 lg:right-10 top-1/2 -translate-y-1/2 z-20">
        {!isOpen && (
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open Ask our GPT Chatbot"
            className="group relative flex items-center gap-2.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#07192D]/90 hover:bg-[#0A2540] border border-sky-400/50 hover:border-sky-300 text-white backdrop-blur-xl shadow-2xl shadow-sky-500/25 hover:shadow-sky-400/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer ring-1 ring-white/20 animate-in fade-in zoom-in-95"
          >
            {/* Ambient Pulse Glow */}
            <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-sky-400 to-blue-600 opacity-40 group-hover:opacity-75 blur-sm transition-opacity duration-300 -z-10" />

            <div className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300 group-hover:text-white group-hover:bg-[#0284C7] transition-colors">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            </div>

            <span className="text-xs sm:text-sm font-bold tracking-wide text-white drop-shadow-sm">
              Ask our GPT
            </span>

            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
          </button>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 2. LARGE CHATBOT PANEL (Right Side Slide-Over, DP World Inspired) */}
      {/* ========================================================================= */}
      {isOpen && (
        <>
          {/* Backdrop on mobile */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs z-30 lg:hidden"
            aria-hidden="true"
          />

          <div
            className="fixed sm:absolute right-0 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-40 w-full sm:w-[420px] md:w-[460px] lg:w-[480px] h-full sm:h-[86vh] max-h-[720px] rounded-none sm:rounded-3xl border border-sky-400/30 bg-gradient-to-b from-[#07192D]/98 via-[#0A2540]/96 to-[#07192D]/98 backdrop-blur-2xl text-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] flex flex-col justify-between overflow-hidden animate-in fade-in slide-in-from-right-8 duration-300 ring-1 ring-white/15"
          >
            {/* Top Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 p-0.5 flex items-center justify-center shadow-md shadow-sky-500/30">
                  <div className="w-full h-full bg-[#07192D] rounded-[10px] flex items-center justify-center">
                    <Bot className="w-4 h-4 text-sky-300" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-black text-white tracking-tight">
                      Ask our GPT
                    </h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300 bg-sky-500/20 px-2 py-0.5 rounded-full border border-sky-400/30">
                      AI Assistant
                    </span>
                  </div>
                  <p className="text-[11px] text-neutral-400 font-normal">
                    SkyLink Global EXIM Intelligence
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close Chatbot"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-neutral-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer border border-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Middle Content Area */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-center space-y-5 overflow-y-auto">
              <div className="space-y-1 text-left">
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  How can I help you today?
                </h2>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                  Explore instant insights on cross-border logistics, customs tariffs, documentation, and trade compliance.
                </p>
              </div>

              {/* 4 Attractive Suggestion Cards (2x2 Grid) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 pt-1">
                {suggestionCards.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleCardClick(card.prompt)}
                      className="group p-3.5 rounded-2xl bg-white/[0.05] hover:bg-sky-500/15 border border-white/10 hover:border-sky-400/50 text-left transition-all duration-200 cursor-pointer flex flex-col justify-between h-[100px] shadow-sm hover:shadow-sky-500/20 hover:-translate-y-0.5"
                    >
                      <div className="flex items-center justify-between w-full">
                        <div className="w-7 h-7 rounded-lg bg-sky-500/20 text-sky-300 group-hover:bg-[#0284C7] group-hover:text-white flex items-center justify-center transition-colors">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-sky-300 group-hover:translate-x-0.5 transition-all" />
                      </div>
                      <span className="text-xs font-bold text-white group-hover:text-sky-200 transition-colors line-clamp-2 leading-snug">
                        {card.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Message Input Area */}
            <div className="p-4 sm:p-5 border-t border-white/10 bg-white/[0.02] space-y-2">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask a question about trade, shipping or compliance..."
                  className="w-full bg-white/[0.08] hover:bg-white/[0.12] focus:bg-white/[0.12] border border-white/20 focus:border-sky-400 rounded-2xl px-4 py-3 pr-12 text-xs sm:text-sm text-white placeholder-neutral-400 focus:outline-none transition-all shadow-inner"
                />
                <button
                  type="button"
                  aria-label="Send Message"
                  className="absolute right-2 w-8 h-8 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white flex items-center justify-center shadow-md shadow-sky-500/30 transition-all cursor-pointer hover:scale-105 active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[10.5px] text-neutral-400 text-center font-normal">
                SkyLink GPT UI Preview • Responses will be integrated with trade models
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
