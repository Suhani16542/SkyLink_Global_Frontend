import React from 'react';
import Link from 'next/link';
import { SkyLinkLogo } from '@/components/ui/SkyLinkLogo';
import { siteConfig } from '@/config/site';
import { Mail, Phone, Clock, MapPin, ArrowRight, ShieldCheck, Globe, Anchor, FileCheck } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { title: 'Licensing & Registrations', href: '/services/licensing-registrations' },
    { title: 'Export Incentives & Schemes', href: '/services/export-incentives' },
    { title: 'Documentation & Liaison', href: '/services/documentation-liaison' },
    { title: 'Logistics & Shipping', href: '/services/logistics-shipping' },
    { title: 'Customs & Compliance', href: '/services/customs-compliance' },
    { title: 'Cold Chain Solutions', href: '/services/cold-chain-solutions' },
    { title: 'Tax & GST Advisory', href: '/services/tax-gst-advisory' },
    { title: 'Trade Risk Management', href: '/services/trade-risk-management' },
  ];

  const industryLinks = [
    { title: 'Pharmaceuticals & Life Sciences', href: '/industries' },
    { title: 'Seafood & Marine Exports', href: '/industries' },
    { title: 'Perishables & Agriculture', href: '/industries' },
    { title: 'Heavy Manufacturing & Automotive', href: '/industries' },
    { title: 'General Cargo & Consumer Retail', href: '/industries' },
  ];

  return (
    <footer className="mt-auto bg-[#07192D] text-neutral-300 border-t border-white/10">
      {/* High-Impact Consultation Banner */}
      <div className="border-b border-white/10 bg-gradient-to-r from-[#0A2540] via-[#0B3156] to-[#0A2540] py-6 sm:py-7">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="text-center md:text-left">
            <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400">
              International Trade Advisory
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
              Ready to streamline your import-export operations?
            </h3>
            <p className="text-xs sm:text-[13px] text-neutral-300 mt-0.5 max-w-xl">
              Connect with our EXIM specialists for tariff optimization, customs clearance, and global freight solutions.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href="/request-consultation"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#0284C7] px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-[#0369A1] transition-all hover:scale-105"
            >
              Request Consultation
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Contact Team
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-3.5">
            <SkyLinkLogo variant="light" size="footer" />
            <p className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed max-w-sm font-normal">
              {siteConfig.description}
            </p>
            <div className="pt-1 space-y-2 text-xs sm:text-[13px] text-neutral-300">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{siteConfig.contact.supportHours}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>{siteConfig.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <FileCheck className="w-3.5 h-3.5 text-sky-400" />
              EXIM & Services
            </h4>
            <ul className="mt-3 space-y-2 text-xs sm:text-[13px]">
              {servicesLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-neutral-300 hover:text-white transition-colors font-normal">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h4 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Anchor className="w-3.5 h-3.5 text-sky-400" />
              Sectors Served
            </h4>
            <ul className="mt-3 space-y-2 text-xs sm:text-[13px]">
              {industryLinks.map((item) => (
                <li key={item.title}>
                  <Link href={item.href} className="text-neutral-300 hover:text-white transition-colors font-normal">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate & Operations */}
          <div>
            <h4 className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              Portal & Resources
            </h4>
            <ul className="mt-3 space-y-2 text-xs sm:text-[13px]">
              <li>
                <Link href="/about" className="text-neutral-300 hover:text-white transition-colors font-normal">
                  About SkyLink
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-neutral-300 hover:text-white transition-colors font-normal">
                  Trade Intelligence Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-white transition-colors font-normal">
                  Inquiry & Support Desk
                </Link>
              </li>
              <li>
                <Link href="/request-consultation" className="text-neutral-300 hover:text-white transition-colors font-normal">
                  B2B Trade Audit
                </Link>
              </li>
              <li className="pt-1.5">
                <Link
                  href="/admin/login"
                  className="inline-flex items-center gap-1.5 rounded bg-sky-950/60 border border-sky-800/60 px-2.5 py-1 text-[11px] font-semibold text-sky-300 hover:bg-sky-900 transition-colors"
                >
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  Client / Admin Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-8 border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-neutral-400">
          <p>© {currentYear} SkyLink Global Services. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <span>Connecting Markets. Delivering Opportunities.</span>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
