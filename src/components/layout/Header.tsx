'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SkyLinkLogo } from '@/components/ui/SkyLinkLogo';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import { Mail, Phone, Clock, Menu, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top Utility Contact Bar */}
      <div className="hidden lg:block bg-[#07192D] text-neutral-300 text-xs py-2 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>{siteConfig.contact.email}</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <div className="flex items-center gap-1.5 text-neutral-400">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>{siteConfig.contact.supportHours}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/brand"
              className="flex items-center gap-1.5 text-amber-300 hover:text-amber-200 transition-colors font-medium"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Motion Identity</span>
            </Link>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-1.5 text-sky-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>DGFT &amp; Customs Authorized</span>
            </div>
            <span className="text-white/20">|</span>
            <Link
              href="/admin/login"
              className="text-neutral-300 hover:text-white transition-colors"
            >
              Client / Admin Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-neutral-200/80 py-2.5'
            : 'bg-white border-b border-neutral-200 py-3.5'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <SkyLinkLogo size={isScrolled ? 'sm' : 'md'} showTagline={!isScrolled} />

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-semibold text-neutral-700"
          >
            {siteConfig.mainNav.map((item) => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#0284C7] font-bold'
                      : 'text-neutral-700 hover:text-[#0A2540]'
                  }`}
                >
                  {item.title}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0284C7] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              href="/request-consultation"
              variant="secondary"
              size="sm"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Request Consultation
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden rounded-lg p-2 text-neutral-700 hover:bg-neutral-100 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slide-Over Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[61px] bottom-0 bg-white/95 backdrop-blur-lg border-b border-neutral-200 z-50 p-6 flex flex-col justify-between overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="space-y-4">
              {siteConfig.mainNav.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`block text-base font-semibold py-2 px-3 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-sky-50 text-[#0284C7]'
                        : 'text-neutral-800 hover:bg-neutral-50'
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              })}
              <Link
                href="/brand"
                onClick={closeMobileMenu}
                className="block text-base font-semibold py-2 px-3 rounded-lg text-amber-600 bg-amber-50"
              >
                Motion Logo Showcase
              </Link>
            </nav>

            <div className="mt-8 pt-6 border-t border-neutral-200 space-y-4">
              <Button
                href="/request-consultation"
                variant="secondary"
                size="md"
                className="w-full justify-center"
                onClick={closeMobileMenu}
              >
                Request a Consultation
              </Button>
              <div className="space-y-2 text-xs text-neutral-600">
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-sky-600" />
                  <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-sky-600" />
                  <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
                </p>
              </div>
              <div className="pt-2">
                <Link
                  href="/admin/login"
                  onClick={closeMobileMenu}
                  className="block text-center text-xs font-semibold text-neutral-500 hover:text-neutral-800"
                >
                  Internal Client / Admin Login &rarr;
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
