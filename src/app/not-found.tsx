import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { constructMetadata } from '@/lib/seo/metadata';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { Compass, Home, ArrowRight, HelpCircle } from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: '404 - Page Not Found | SkyLink Global Services',
  description: 'The requested page could not be located. Explore SkyLink Global trade services, EXIM advisory, or contact our support desk.',
  noIndex: true,
  path: '/404',
});

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Visual Indicator */}
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-[#0A2540] text-sky-400 shadow-xl shadow-sky-950/20">
            <Compass className="w-12 h-12 animate-pulse" />
          </div>

          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0284C7] bg-sky-100/80 px-3.5 py-1.5 rounded-full">
              Error 404 &bull; Route Out of Range
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-[#0A2540]">
              Shipment / Route Not Located
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 max-w-lg mx-auto leading-relaxed">
              The trade corridor, advisory page, or resource you requested may have been moved, updated, or does not exist.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              href="/"
              variant="primary"
              size="md"
              leftIcon={<Home className="w-4 h-4" />}
            >
              Return to Homepage
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="md"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Services Catalog
            </Button>
            <Button
              href="/contact"
              variant="ghost"
              size="md"
              leftIcon={<HelpCircle className="w-4 h-4" />}
            >
              Contact Support
            </Button>
          </div>

          {/* Quick Helpful Links */}
          <div className="pt-8 border-t border-neutral-200 text-xs text-neutral-500">
            <div className="font-semibold text-neutral-700 mb-2">Popular Trade Desks:</div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-[#0284C7]">
              <Link href="/services/logistics-shipping" className="hover:underline">Logistics &amp; Shipping</Link>
              <Link href="/services/warehousing-solutions" className="hover:underline">Warehousing</Link>
              <Link href="/services/tax-gst-compliance" className="hover:underline">GST &amp; Duty Advisory</Link>
              <Link href="/request-consultation" className="hover:underline">Request Consultation</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
