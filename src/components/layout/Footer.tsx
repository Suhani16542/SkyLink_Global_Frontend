import React from 'react';
import Link from 'next/link';
import { SkyLinkLogo } from '@/components/ui/SkyLinkLogo';
import { siteConfig } from '@/config/site';
import { 
  Mail, 
  Phone, 
  Clock, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Globe, 
  Anchor, 
  FileCheck, 
  ChevronRight
} from 'lucide-react';

function LinkedInIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.9 0-1.62.72-1.62 1.62s.72 1.63 1.62 1.63 1.63-.73 1.63-1.63c0-.9-.73-1.62-1.63-1.62Z" />
    </svg>
  );
}

function TwitterXIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function WhatsAppIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24M8.53 7.33c-.2 0-.44.08-.66.32-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.13.17 1.73 2.65 4.21 3.72.59.25 1.05.41 1.41.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.07-.1-.24-.17-.5-.3-.26-.13-1.55-.76-1.79-.85-.24-.09-.42-.13-.6.13-.17.27-.69.85-.85 1.02-.15.18-.31.2-.57.07-.26-.13-1.1-.41-2.1-1.3-.77-.69-1.3-1.54-1.45-1.8-.15-.27-.02-.41.11-.54.12-.12.26-.31.39-.46.13-.16.17-.27.26-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.99-.22-.52-.45-.45-.62-.46-.16-.01-.35-.01-.54-.01Z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { title: 'Logistics & Shipping', href: '/services/logistics-shipping' },
    { title: 'Warehousing Solutions', href: '/services/warehousing-solutions' },
    { title: 'Cold Chain Solutions', href: '/services/cold-chain-solutions' },
    { title: 'Freight Cost Optimization', href: '/services/export-incentives' },
    { title: 'Tax & GST Compliance', href: '/services/tax-gst-compliance' },
    { title: 'Documentation & Liaison', href: '/services/documentation-liaison' },
    { title: 'Risk Management', href: '/services/risk-management' },
  ];

  const industryLinks = [
    { title: 'Pharmaceuticals & Life Sciences', href: '/industries' },
    { title: 'Seafood & Marine Exports', href: '/industries' },
    { title: 'Perishables & Agriculture', href: '/industries' },
    { title: 'Heavy Manufacturing & Automotive', href: '/industries' },
    { title: 'General Cargo & Consumer Retail', href: '/industries' },
  ];

  return (
    <footer className="mt-auto bg-[#07192D] text-neutral-300 border-t border-white/10 relative overflow-hidden">
      {/* High-Impact Consultation Banner */}
      <div className="border-b border-white/10 bg-gradient-to-r from-[#0A2540] via-[#0B3156] to-[#0A2540] py-6 sm:py-7 relative group/banner transition-all duration-500 hover:bg-opacity-95">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="text-center md:text-left">
            <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-sky-400 transition-all duration-300 hover:text-sky-300 hover:scale-105 cursor-default">
              International Trade Advisory
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5 transition-all duration-300 hover:text-sky-100 hover:translate-x-0.5 cursor-default">
              Ready to streamline your import-export operations?
            </h3>
            <p className="text-xs sm:text-[13px] text-neutral-300 mt-0.5 max-w-xl transition-colors duration-300 hover:text-neutral-100 cursor-default">
              Connect with our EXIM specialists for tariff optimization, customs clearance, and global freight solutions.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href="/request-consultation"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#0284C7] px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-[#0369A1] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25 active:scale-95 group/btn"
            >
              <span>Request Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/40 active:scale-95"
            >
              <span>Contact Team</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-3.5">
            <div className="inline-block transition-transform duration-300 hover:scale-105">
              <SkyLinkLogo variant="light" size="footer" />
            </div>
            <p className="text-xs sm:text-[13px] text-neutral-300 leading-relaxed max-w-sm font-normal transition-colors duration-300 hover:text-white cursor-default">
              {siteConfig.description}
            </p>
            <div className="pt-1 space-y-2 text-xs sm:text-[13px] text-neutral-300">
              <div className="group/item flex items-center gap-2 transition-all duration-300 hover:translate-x-1.5">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0 transition-transform duration-300 group-hover/item:scale-125 group-hover/item:text-sky-300" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4 decoration-sky-400/50">
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="group/item flex items-center gap-2 transition-all duration-300 hover:translate-x-1.5">
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0 transition-transform duration-300 group-hover/item:scale-125 group-hover/item:text-sky-300" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white transition-colors duration-300 hover:underline underline-offset-4 decoration-sky-400/50">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="group/item flex items-center gap-2 transition-all duration-300 hover:translate-x-1.5 cursor-default">
                <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0 transition-transform duration-300 group-hover/item:scale-125 group-hover/item:text-sky-300" />
                <span className="group-hover/item:text-white transition-colors duration-300">{siteConfig.contact.supportHours}</span>
              </div>
              <div className="group/item flex items-center gap-2 transition-all duration-300 hover:translate-x-1.5 cursor-default">
                <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 transition-transform duration-300 group-hover/item:scale-125 group-hover/item:text-sky-300" />
                <span className="group-hover/item:text-white transition-colors duration-300">{siteConfig.contact.address}</span>
              </div>
            </div>

            {/* Social & Direct Channels */}
            <div className="pt-2">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-sky-400/90 mb-2">
                Official Channels
              </span>
              <div className="flex items-center gap-2.5">
                {/* LinkedIn */}
                <a
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="Connect on LinkedIn"
                  className="group/soc flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#0A66C2]/40 active:scale-95"
                >
                  <LinkedInIcon className="w-4 h-4 transition-transform duration-300 group-hover/soc:scale-110" />
                </a>

                {/* Twitter / X */}
                <a
                  href={siteConfig.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  title="Follow on Twitter / X"
                  className="group/soc flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-neutral-800 hover:border-neutral-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/20 active:scale-95"
                >
                  <TwitterXIcon className="w-4 h-4 transition-transform duration-300 group-hover/soc:scale-110" />
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp Trade Desk"
                  title="Chat on WhatsApp"
                  className="group/soc flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#25D366]/40 active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 transition-transform duration-300 group-hover/soc:scale-110" />
                </a>

                {/* Email Direct */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  aria-label="Email Trade Advisory"
                  title="Send Direct Email"
                  className="group/soc flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:bg-[#0284C7] hover:border-[#0284C7] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#0284C7]/40 active:scale-95"
                >
                  <Mail className="w-4 h-4 transition-transform duration-300 group-hover/soc:scale-110" />
                </a>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="group/h text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white flex items-center gap-1.5 cursor-default transition-all duration-300 hover:text-sky-300">
              <FileCheck className="w-3.5 h-3.5 text-sky-400 transition-transform duration-300 group-hover/h:rotate-12 group-hover/h:scale-110" />
              <span>EXIM & Services</span>
            </h4>
            <ul className="mt-3 space-y-2 text-xs sm:text-[13px]">
              {servicesLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group/link flex items-center gap-1 text-neutral-300 hover:text-white transition-all duration-300 hover:translate-x-1.5 font-normal"
                  >
                    <ChevronRight className="w-3 h-3 text-sky-400/0 -ml-3 transition-all duration-300 group-hover/link:text-sky-400 group-hover/link:ml-0 opacity-0 group-hover/link:opacity-100" />
                    <span className="transition-colors duration-300 group-hover/link:text-sky-300">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h4 className="group/h text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white flex items-center gap-1.5 cursor-default transition-all duration-300 hover:text-sky-300">
              <Anchor className="w-3.5 h-3.5 text-sky-400 transition-transform duration-300 group-hover/h:rotate-12 group-hover/h:scale-110" />
              <span>Sectors Served</span>
            </h4>
            <ul className="mt-3 space-y-2 text-xs sm:text-[13px]">
              {industryLinks.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="group/link flex items-center gap-1 text-neutral-300 hover:text-white transition-all duration-300 hover:translate-x-1.5 font-normal"
                  >
                    <ChevronRight className="w-3 h-3 text-sky-400/0 -ml-3 transition-all duration-300 group-hover/link:text-sky-400 group-hover/link:ml-0 opacity-0 group-hover/link:opacity-100" />
                    <span className="transition-colors duration-300 group-hover/link:text-sky-300">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate & Operations */}
          <div>
            <h4 className="group/h text-xs sm:text-[13px] font-bold uppercase tracking-wider text-white flex items-center gap-1.5 cursor-default transition-all duration-300 hover:text-sky-300">
              <Globe className="w-3.5 h-3.5 text-sky-400 transition-transform duration-300 group-hover/h:rotate-12 group-hover/h:scale-110" />
              <span>Portal & Resources</span>
            </h4>
            <ul className="mt-3 space-y-2 text-xs sm:text-[13px]">
              <li>
                <Link
                  href="/about"
                  className="group/link flex items-center gap-1 text-neutral-300 hover:text-white transition-all duration-300 hover:translate-x-1.5 font-normal"
                >
                  <ChevronRight className="w-3 h-3 text-sky-400/0 -ml-3 transition-all duration-300 group-hover/link:text-sky-400 group-hover/link:ml-0 opacity-0 group-hover/link:opacity-100" />
                  <span className="transition-colors duration-300 group-hover/link:text-sky-300">About SkyLink</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="group/link flex items-center gap-1 text-neutral-300 hover:text-white transition-all duration-300 hover:translate-x-1.5 font-normal"
                >
                  <ChevronRight className="w-3 h-3 text-sky-400/0 -ml-3 transition-all duration-300 group-hover/link:text-sky-400 group-hover/link:ml-0 opacity-0 group-hover/link:opacity-100" />
                  <span className="transition-colors duration-300 group-hover/link:text-sky-300">Trade Intelligence Insights</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group/link flex items-center gap-1 text-neutral-300 hover:text-white transition-all duration-300 hover:translate-x-1.5 font-normal"
                >
                  <ChevronRight className="w-3 h-3 text-sky-400/0 -ml-3 transition-all duration-300 group-hover/link:text-sky-400 group-hover/link:ml-0 opacity-0 group-hover/link:opacity-100" />
                  <span className="transition-colors duration-300 group-hover/link:text-sky-300">Inquiry & Support Desk</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/request-consultation"
                  className="group/link flex items-center gap-1 text-neutral-300 hover:text-white transition-all duration-300 hover:translate-x-1.5 font-normal"
                >
                  <ChevronRight className="w-3 h-3 text-sky-400/0 -ml-3 transition-all duration-300 group-hover/link:text-sky-400 group-hover/link:ml-0 opacity-0 group-hover/link:opacity-100" />
                  <span className="transition-colors duration-300 group-hover/link:text-sky-300">B2B Trade Audit</span>
                </Link>
              </li>
              <li className="pt-1.5">
                <Link
                  href="/admin/login"
                  className="group/admin inline-flex items-center gap-1.5 rounded bg-sky-950/60 border border-sky-800/60 px-2.5 py-1 text-[11px] font-semibold text-sky-300 hover:bg-sky-900 hover:border-sky-600 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-sky-500/20"
                >
                  <ShieldCheck className="w-3 h-3 text-emerald-400 transition-transform duration-300 group-hover/admin:scale-125 group-hover/admin:rotate-12" />
                  <span className="transition-colors duration-300 group-hover/admin:text-white">Client / Admin Login</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-8 border-t border-white/10 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-neutral-400">
          <p className="transition-colors duration-300 hover:text-neutral-200 cursor-default">
            © {currentYear} SkyLink Global Services. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <span className="transition-all duration-300 hover:text-sky-300 hover:scale-105 cursor-default">
              Connecting Markets. Delivering Opportunities.
            </span>
            <div className="flex items-center gap-3 border-l border-white/10 pl-3">
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={siteConfig.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <TwitterXIcon className="w-3.5 h-3.5" />
              </a>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
              </a>
            </div>
            <Link
              href="/sitemap.xml"
              className="hover:text-white transition-all duration-300 hover:translate-x-0.5 hover:underline underline-offset-4 decoration-sky-400"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
