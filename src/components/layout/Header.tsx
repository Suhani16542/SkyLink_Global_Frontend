'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SkyLinkLogo } from '@/components/ui/SkyLinkLogo';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site';
import {
  Mail,
  Phone,
  Clock,
  Menu,
  X,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  ChevronDown,
  Ship,
  Warehouse,
  Snowflake,
  TrendingDown,
  Calculator,
  FileText,
  ShieldAlert,
  Compass,
  Scale,
  Pill,
  Fish,
  Wheat,
  Newspaper,
  Leaf,
  Award,
  Users,
  Handshake,
} from 'lucide-react';

interface NavDropdownItem {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  description?: string;
}

interface NavSection {
  title: string;
  href?: string;
  dropdown?: NavDropdownItem[];
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenSections, setMobileOpenSections] = useState<Record<string, boolean>>({});

  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileOpenSections({});
  };

  const handleMouseEnter = (key: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleMobileSection = (key: string) => {
    setMobileOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Exact Boardmix Navigation Order
  const navMenu: NavSection[] = [
    {
      title: 'About Us',
      href: '/about',
      dropdown: [
        {
          title: 'Overview',
          href: '/about/overview',
          icon: Compass,
          description: 'Our mission, heritage, and institutional foundation',
        },
      ],
    },
    {
      title: 'Our Services',
      href: '/services',
      dropdown: [
        {
          title: 'Logistics & Shipping',
          href: '/services/logistics-shipping',
          icon: Ship,
          description: 'Freight negotiation, route optimization, consolidations & marine insurance',
        },
        {
          title: 'Warehousing Solutions',
          href: '/services/warehousing-solutions',
          icon: Warehouse,
          description: 'Bonded storage, WMS inventory & value-added supply chain services',
        },
        {
          title: 'Cold Chain Solutions',
          href: '/services/cold-chain-solutions',
          icon: Snowflake,
          description: 'GDP-compliant reefer & 24/7 IoT telemetry',
        },
        {
          title: 'Freight Cost Optimization',
          href: '/services/export-incentives',
          icon: TrendingDown,
          description: 'Tariff advisory, direct carrier contracts & duty recovery',
        },
        {
          title: 'Tax & GST Compliance',
          href: '/services/tax-gst-compliance',
          icon: Calculator,
          description: 'GST refunds on zero-rated supplies, LUT filing & ITC reconciliation',
        },
        {
          title: 'Documentation & Liaison',
          href: '/services/documentation-liaison',
          icon: FileText,
          description: 'Custom invoices, shipping bills, CoO, ICEGATE & AD code registration',
        },
        {
          title: 'Risk Management',
          href: '/services/risk-management',
          icon: ShieldAlert,
          description: 'Marine cargo insurance, contingency planning & claims settlement support',
        },
      ],
    },
    {
      title: 'Why Choose Us',
      dropdown: [
        {
          title: 'Skylink Advantage',
          href: '/why-choose-us/skylink-advantage',
          icon: ShieldCheck,
          description: 'Single-window trade governance & direct carrier access',
        },
        {
          title: 'Traditional vs Skylink',
          href: '/why-choose-us/traditional-vs-skylink',
          icon: Scale,
          description: 'Operational efficiency comparison matrix',
        },
      ],
    },
    {
      title: 'Industries',
      href: '/industries',
      dropdown: [
        {
          title: 'Pharma',
          href: '/industries/pharma',
          icon: Pill,
          description: 'GDP cold chain & expedited ADC port clearance',
        },
        {
          title: 'Seafoods',
          href: '/industries/seafoods',
          icon: Fish,
          description: 'Ultra-low deep freeze (-25°C to -40°C) & MPEDA compliance',
        },
        {
          title: 'Specialty Chemicals, Agro Fertilizers & Perishables',
          href: '/industries/specialty-chemicals-agro-fertilizers-perishables',
          icon: Wheat,
          description: 'APEDA compliance & rapid green-channel transit',
        },
      ],
    },
    {
      title: 'News',
      href: '/news/blogs',
      dropdown: [
        {
          title: 'Blogs',
          href: '/news/blogs',
          icon: Newspaper,
          description: 'EXIM insights, global supply chain analysis & trade intelligence',
        },
        {
          title: 'Articles',
          href: '/news/articles',
          icon: FileText,
          description: 'Technical whitepapers, statutory circulars & regulatory advisories',
        },
      ],
    },
    {
      title: 'Sustainability',
      dropdown: [
        {
          title: 'Eco-Route',
          href: '/sustainability/eco-route',
          icon: Leaf,
          description: 'Carbon-efficient multimodal corridors & green logistics',
        },
        {
          title: 'AEO Green',
          href: '/sustainability/aeo-green',
          icon: Award,
          description: 'Authorized Economic Operator paperless green-channel protocols',
        },
      ],
    },
    {
      title: 'Why Collaborate With Us',
      dropdown: [
        {
          title: 'Freight Forwarders Collaboration',
          href: '/collaborate/freight-forwarders',
          icon: Handshake,
          description: 'Partner network, strategic co-loading & agency alliance',
        },
        {
          title: 'Collaboration Enquiry',
          href: '/collaborate/enquiry',
          icon: Users,
          description: 'Submit an institutional trade or logistics partnership request',
        },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
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

      {/* Main Header */}
      <div
        className={`w-full transition-shadow duration-300 bg-white border-b border-neutral-200 py-1.5 sm:py-2 ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 min-h-[64px] sm:min-h-[68px]">
          {/* Logo */}
          <SkyLinkLogo size="navbar" priority />

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center gap-3.5 2xl:gap-5 text-[13.5px] 2xl:text-[14px] font-semibold text-neutral-800"
          >
            {/* 1. Home */}
            <Link
              href="/"
              className={`transition-colors py-1 relative whitespace-nowrap ${
                pathname === '/'
                  ? 'text-[#0284C7] font-bold'
                  : 'text-neutral-700 hover:text-[#0A2540]'
              }`}
            >
              Home
              {pathname === '/' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0284C7] rounded-full" />
              )}
            </Link>

            {/* Remaining Boardmix Nav Items */}
            {navMenu.map((item) => {
              const hasDropdown = item.dropdown && item.dropdown.length > 0;
              const isOpen = openDropdown === item.title;
              const isSectionActive =
                item.href && item.href !== '/'
                  ? pathname === item.href || pathname.startsWith(`${item.href}/`)
                  : false;

              if (!hasDropdown) {
                return (
                  <Link
                    key={item.title}
                    href={item.href || '#'}
                    className={`transition-colors py-1 relative whitespace-nowrap ${
                      isSectionActive
                        ? 'text-[#0284C7] font-bold'
                        : 'text-neutral-700 hover:text-[#0A2540]'
                    }`}
                  >
                    {item.title}
                    {isSectionActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0284C7] rounded-full" />
                    )}
                  </Link>
                );
              }

              return (
                <div
                  key={item.title}
                  className="relative py-2"
                  onMouseEnter={() => handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 transition-colors py-1 relative whitespace-nowrap ${
                      isSectionActive || isOpen
                        ? 'text-[#0284C7] font-bold'
                        : 'text-neutral-700 hover:text-[#0A2540]'
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0284C7]' : 'text-neutral-400'
                      }`}
                    />
                    {isSectionActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0284C7] rounded-full" />
                    )}
                  </button>

                  {/* Dropdown Popover */}
                  {isOpen && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-2xl border border-neutral-200/90 p-3 z-50 animate-in fade-in-0 zoom-in-95 duration-150 ${
                        item.dropdown && item.dropdown.length > 4
                          ? 'w-[560px] grid grid-cols-2 gap-1.5'
                          : 'w-[320px] space-y-1'
                      }`}
                    >
                      {item.dropdown?.map((subItem) => {
                        const Icon = subItem.icon;
                        const isSubActive = pathname === subItem.href;
                        return (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onClick={() => setOpenDropdown(null)}
                            className={`flex items-start gap-2.5 p-2 rounded-lg transition-colors group ${
                              isSubActive
                                ? 'bg-sky-50 text-[#0284C7]'
                                : 'hover:bg-neutral-50 text-neutral-800'
                            }`}
                          >
                            {Icon && (
                              <div className="p-1.5 rounded-md bg-sky-100/70 text-sky-700 group-hover:bg-[#0284C7] group-hover:text-white transition-colors shrink-0 mt-0.5">
                                <Icon className="w-3.5 h-3.5" />
                              </div>
                            )}
                            <div>
                              <div className="text-xs sm:text-[13px] font-semibold text-neutral-900 group-hover:text-[#0284C7] transition-colors leading-snug">
                                {subItem.title}
                              </div>
                              {subItem.description && (
                                <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5 font-normal">
                                  {subItem.description}
                                </p>
                              )}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Header Action CTA Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Button
              href="/request-consultation"
              variant="secondary"
              size="sm"
              className="text-[13px] font-semibold px-3.5 py-2 shadow-xs"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Request Consultation
            </Button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="xl:hidden rounded-lg p-2 text-neutral-700 hover:bg-neutral-100 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slide-Over Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-x-0 top-full bottom-0 bg-white/98 backdrop-blur-lg border-b border-neutral-200 z-50 p-4 flex flex-col justify-between overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="space-y-1.5">
              {/* Mobile: Home */}
              <Link
                href="/"
                onClick={closeMobileMenu}
                className={`block text-sm font-semibold py-2 px-3 rounded-lg transition-colors ${
                  pathname === '/'
                    ? 'bg-sky-50 text-[#0284C7]'
                    : 'text-neutral-800 hover:bg-neutral-50'
                }`}
              >
                Home
              </Link>

              {/* Mobile: Boardmix Sections */}
              {navMenu.map((item) => {
                const hasDropdown = item.dropdown && item.dropdown.length > 0;
                const isExpanded = !!mobileOpenSections[item.title];

                if (!hasDropdown) {
                  return (
                    <Link
                      key={item.title}
                      href={item.href || '#'}
                      onClick={closeMobileMenu}
                      className="block text-sm font-semibold py-2 px-3 rounded-lg text-neutral-800 hover:bg-neutral-50"
                    >
                      {item.title}
                    </Link>
                  );
                }

                return (
                  <div key={item.title} className="rounded-lg">
                    <button
                      type="button"
                      onClick={() => toggleMobileSection(item.title)}
                      className="w-full flex items-center justify-between text-sm font-semibold py-2 px-3 rounded-lg text-neutral-800 hover:bg-neutral-50"
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-[#0284C7]' : 'text-neutral-400'
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="ml-3 pl-3 border-l-2 border-sky-200 py-1 space-y-1">
                        {item.dropdown?.map((subItem) => (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onClick={closeMobileMenu}
                            className="block text-xs font-medium text-neutral-700 py-1.5 px-2 rounded hover:bg-sky-50 hover:text-[#0284C7]"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Mobile: Brand Link */}
              <Link
                href="/brand"
                onClick={closeMobileMenu}
                className="block text-xs font-semibold py-2 px-3 rounded-lg text-amber-700 bg-amber-50"
              >
                Motion Logo Showcase
              </Link>
            </nav>

            <div className="mt-6 pt-4 border-t border-neutral-200 space-y-3">
              <Button
                href="/request-consultation"
                variant="secondary"
                size="md"
                className="w-full justify-center text-sm font-semibold"
                onClick={closeMobileMenu}
              >
                Request a Consultation
              </Button>
              <div className="space-y-1.5 text-xs text-neutral-600">
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-sky-600" />
                  <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-sky-600" />
                  <a href={`tel:${siteConfig.contact.phone}`}>{siteConfig.contact.phone}</a>
                </p>
              </div>
              <div className="pt-1">
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
      </div>
    </header>
  );
}
