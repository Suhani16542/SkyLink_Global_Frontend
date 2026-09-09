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
  ChevronRight,
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
  Building2,
  Car,
  Factory,
  Cpu,
  Shirt,
  UtensilsCrossed,
  Sprout,
  ShoppingBag,
  HardHat,
  Sun,
  Pickaxe,
  Wrench,
  ShoppingCart,
  Layers,
  ArrowUpRight,
} from 'lucide-react';

interface NavDropdownItem {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  description?: string;
  isOtherTrigger?: boolean;
}

interface NavSection {
  title: string;
  href?: string;
  dropdown?: NavDropdownItem[];
}

const otherIndustriesList = [
  {
    title: 'Automotive & Auto Components',
    href: '/request-consultation?industry=Automotive%20%26%20Auto%20Components',
    icon: Car,
  },
  {
    title: 'Engineering & Manufacturing',
    href: '/request-consultation?industry=Engineering%20%26%20Manufacturing',
    icon: Factory,
  },
  {
    title: 'Electronics & Electrical',
    href: '/request-consultation?industry=Electronics%20%26%20Electrical',
    icon: Cpu,
  },
  {
    title: 'Textiles & Apparel',
    href: '/request-consultation?industry=Textiles%20%26%20Apparel',
    icon: Shirt,
  },
  {
    title: 'Food & Beverages',
    href: '/request-consultation?industry=Food%20%26%20Beverages',
    icon: UtensilsCrossed,
  },
  {
    title: 'Agriculture & Agro Products',
    href: '/request-consultation?industry=Agriculture%20%26%20Agro%20Products',
    icon: Sprout,
  },
  {
    title: 'Retail & Consumer Goods',
    href: '/request-consultation?industry=Retail%20%26%20Consumer%20Goods',
    icon: ShoppingBag,
  },
  {
    title: 'Construction & Infrastructure',
    href: '/request-consultation?industry=Construction%20%26%20Infrastructure',
    icon: HardHat,
  },
  {
    title: 'Renewable Energy',
    href: '/request-consultation?industry=Renewable%20Energy',
    icon: Sun,
  },
  {
    title: 'Mining & Metals',
    href: '/request-consultation?industry=Mining%20%26%20Metals',
    icon: Pickaxe,
  },
  {
    title: 'Industrial Equipment',
    href: '/request-consultation?industry=Industrial%20Equipment',
    icon: Wrench,
  },
  {
    title: 'E-commerce',
    href: '/request-consultation?industry=E-commerce',
    icon: ShoppingCart,
  },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isOtherIndustriesHovered, setIsOtherIndustriesHovered] = useState(false);
  const [mobileOpenSections, setMobileOpenSections] = useState<Record<string, boolean>>({});
  const [mobileOtherIndustriesOpen, setMobileOtherIndustriesOpen] = useState(false);

  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const nestedTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-close mobile menu when pathname changes
  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileOpenSections({});
    setMobileOtherIndustriesOpen(false);
  };

  const handleMouseEnter = (key: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
      setIsOtherIndustriesHovered(false);
    }, 200);
  };

  const handleNestedMouseEnter = () => {
    if (nestedTimeoutRef.current) clearTimeout(nestedTimeoutRef.current);
    setIsOtherIndustriesHovered(true);
  };

  const handleNestedMouseLeave = () => {
    nestedTimeoutRef.current = setTimeout(() => {
      setIsOtherIndustriesHovered(false);
    }, 200);
  };

  const toggleMobileSection = (key: string) => {
    setMobileOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  // Exact Boardmix Navigation Order with Enhanced Industries Dropdown
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
          description: 'Freight negotiation, cost optimization, route analytics & marine insurance',
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
          title: 'Operational Benchmark',
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
        {
          title: 'Other Industries',
          href: '/industries#other-industries',
          icon: Building2,
          description: 'Multimodal logistics & EXIM solutions across 12+ sectors',
          isOtherTrigger: true,
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
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
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
        className={`w-full transition-shadow duration-300 bg-white border-b border-neutral-200 py-1.5 sm:py-2 ${isScrolled ? 'shadow-md' : ''
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
              className={`transition-colors py-1 relative whitespace-nowrap ${pathname === '/'
                  ? 'text-[#0284C7] font-bold'
                  : 'text-neutral-700 hover:text-[#0A2540]'
                }`}
            >
              Home
              {pathname === '/' && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0284C7] rounded-full" />
              )}
            </Link>

            {/* Remaining Nav Items */}
            {navMenu.map((item) => {
              const hasDropdown = item.dropdown && item.dropdown.length > 0;
              const isOpen = openDropdown === item.title;
              const isIndustriesSection = item.title === 'Industries';
              const isSectionActive =
                item.href && item.href !== '/'
                  ? pathname === item.href || pathname.startsWith(`${item.href}/`)
                  : false;

              if (!hasDropdown) {
                return (
                  <Link
                    key={item.title}
                    href={item.href || '#'}
                    className={`transition-colors py-1 relative whitespace-nowrap ${isSectionActive
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
                    className={`inline-flex items-center gap-1 transition-colors py-1 relative whitespace-nowrap cursor-pointer ${isSectionActive || isOpen
                        ? 'text-[#0284C7] font-bold'
                        : 'text-neutral-700 hover:text-[#0A2540]'
                      }`}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#0284C7]' : 'text-neutral-400'
                        }`}
                    />
                    {isSectionActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0284C7] rounded-full" />
                    )}
                  </button>

                  {/* Dropdown Popover */}
                  {isOpen && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-2xl border border-neutral-200/90 p-3 z-50 animate-in fade-in-0 zoom-in-95 duration-150 ${isIndustriesSection
                          ? 'w-[360px] space-y-1.5'
                          : item.dropdown && item.dropdown.length > 4
                            ? 'w-[560px] grid grid-cols-2 gap-1.5'
                            : 'w-[320px] space-y-1'
                        }`}
                    >
                      {/* Special Industries Header Badge */}
                      {isIndustriesSection && (
                        <div className="px-2 py-1.5 mb-1 flex items-center justify-between border-b border-neutral-100">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200/60">
                            Key Specialized USPs
                          </span>
                          <span className="text-[10px] text-neutral-400 font-medium">
                            Core Strengths
                          </span>
                        </div>
                      )}

                      {/* Dropdown Items */}
                      {item.dropdown?.map((subItem) => {
                        const Icon = subItem.icon;
                        const isSubActive = pathname === subItem.href;

                        // Special rendering for "Other Industries" nested trigger in Industries section
                        if (isIndustriesSection && subItem.isOtherTrigger) {
                          return (
                            <div
                              key={subItem.title}
                              className="relative pt-1 border-t border-neutral-100"
                              onMouseEnter={handleNestedMouseEnter}
                              onMouseLeave={handleNestedMouseLeave}
                            >
                              <div
                                role="button"
                                tabIndex={0}
                                onClick={() => setIsOtherIndustriesHovered(!isOtherIndustriesHovered)}
                                className={`w-full flex items-start justify-between gap-2.5 p-2 rounded-xl transition-all cursor-pointer group ${isOtherIndustriesHovered
                                    ? 'bg-sky-50 text-[#0284C7] shadow-xs'
                                    : 'hover:bg-neutral-50 text-neutral-800'
                                  }`}
                              >
                                <div className="flex items-start gap-2.5">
                                  {Icon && (
                                    <div
                                      className={`p-1.5 rounded-lg transition-colors shrink-0 mt-0.5 ${isOtherIndustriesHovered
                                          ? 'bg-[#0284C7] text-white'
                                          : 'bg-sky-100/70 text-sky-700 group-hover:bg-[#0284C7] group-hover:text-white'
                                        }`}
                                    >
                                      <Icon className="w-3.5 h-3.5" />
                                    </div>
                                  )}
                                  <div>
                                    <div className="text-xs sm:text-[13px] font-bold text-neutral-900 group-hover:text-[#0284C7] transition-colors leading-snug flex items-center gap-1.5">
                                      <span>{subItem.title}</span>
                                      <span className="text-[9px] font-mono font-semibold text-sky-700 bg-sky-100/70 px-1.5 py-0.2 rounded">
                                        12+ Sectors
                                      </span>
                                    </div>
                                    {subItem.description && (
                                      <p className="text-[11px] text-neutral-500 line-clamp-1 mt-0.5 font-normal">
                                        {subItem.description}
                                      </p>
                                    )}
                                  </div>
                                </div>
                                <ChevronRight
                                  className={`w-4 h-4 mt-1 transition-transform text-neutral-400 group-hover:text-[#0284C7] ${isOtherIndustriesHovered ? 'translate-x-1 text-[#0284C7]' : ''
                                    }`}
                                />
                              </div>

                              {/* Nested Side Flyout Menu for Other Industries */}
                              {isOtherIndustriesHovered && (
                                <div
                                  className="absolute left-full bottom-[-12px] ml-2 w-[430px] bg-white rounded-2xl shadow-2xl border border-neutral-200/90 p-3.5 z-50 animate-in fade-in-0 slide-in-from-left-2 duration-150 before:absolute before:-left-3 before:top-0 before:bottom-0 before:w-4 before:content-['']"
                                  onMouseEnter={handleNestedMouseEnter}
                                  onMouseLeave={handleNestedMouseLeave}
                                >
                                  {/* Flyout Header */}
                                  <div className="pb-2 mb-2 border-b border-neutral-100 flex items-center justify-between">
                                    <div>
                                      <div className="text-xs font-bold text-neutral-900">
                                        Other Industries We Cater To
                                      </div>
                                      <p className="text-[10px] text-neutral-500">
                                        Multimodal logistics &amp; customs solutions
                                      </p>
                                    </div>
                                    <span className="text-[9px] font-mono font-bold uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                      Active EXIM Desks
                                    </span>
                                  </div>

                                  {/* 12 Other Industries 2-Column Grid */}
                                  <div className="grid grid-cols-2 gap-1.5 max-h-[290px] overflow-y-auto no-scrollbar pr-1">
                                    {otherIndustriesList.map((otherItem) => {
                                      const OtherIcon = otherItem.icon;
                                      return (
                                        <Link
                                          key={otherItem.title}
                                          href={otherItem.href}
                                          onClick={() => {
                                            setOpenDropdown(null);
                                            setIsOtherIndustriesHovered(false);
                                          }}
                                          className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-sky-50 text-neutral-800 hover:text-[#0284C7] transition-colors group/other"
                                        >
                                          <div className="p-1 rounded-md bg-neutral-100 text-neutral-600 group-hover/other:bg-[#0284C7] group-hover/other:text-white transition-colors shrink-0">
                                            <OtherIcon className="w-3 h-3" />
                                          </div>
                                          <span className="text-[11.5px] font-medium leading-tight line-clamp-1">
                                            {otherItem.title}
                                          </span>
                                        </Link>
                                      );
                                    })}
                                  </div>

                                  {/* Informative Note & Link to /industries */}
                                  <div className="mt-2.5 pt-2.5 border-t border-neutral-100 bg-neutral-50 -mx-3.5 -mb-3.5 p-3 rounded-b-2xl space-y-2">
                                    <p className="text-[10.5px] text-neutral-600 leading-tight">
                                      <strong className="text-neutral-900 font-semibold">Broad Multi-Sector Coverage:</strong> While Pharma, Seafood &amp; Perishables are Skylink&apos;s key USP strengths, we provide EXIM consultancy and global logistics across all commercial sectors.
                                    </p>
                                    <Link
                                      href="/industries#other-industries"
                                      onClick={() => {
                                        setOpenDropdown(null);
                                        setIsOtherIndustriesHovered(false);
                                      }}
                                      className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors"
                                    >
                                      <span>View All Sector Portfolios</span>
                                      <ArrowRight className="w-3 h-3" />
                                    </Link>
                                  </div>
                                </div>
                              )}
                            </div>
                          );
                        }

                        // Standard Dropdown Item (Pharma, Seafood, Chemicals)
                        return (
                          <Link
                            key={subItem.title}
                            href={subItem.href}
                            onClick={() => setOpenDropdown(null)}
                            className={`flex items-start gap-2.5 p-2 rounded-xl transition-colors group ${isSubActive
                                ? 'bg-sky-50 text-[#0284C7]'
                                : 'hover:bg-neutral-50 text-neutral-800'
                              }`}
                          >
                            {Icon && (
                              <div className="p-1.5 rounded-lg bg-sky-100/70 text-sky-700 group-hover:bg-[#0284C7] group-hover:text-white transition-colors shrink-0 mt-0.5 shadow-xs">
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

                      {/* Bottom All Industries Link in Industries Dropdown */}
                      {isIndustriesSection && (
                        <div className="pt-2 border-t border-neutral-100">
                          <Link
                            href="/industries"
                            onClick={() => setOpenDropdown(null)}
                            className="flex items-center justify-between p-2 rounded-xl bg-neutral-50 hover:bg-sky-50 text-neutral-700 hover:text-[#0284C7] transition-colors group"
                          >
                            <span className="text-xs font-bold flex items-center gap-1.5">
                              <Layers className="w-3.5 h-3.5 text-[#0284C7]" />
                              <span>Explore All Industries</span>
                            </span>
                            <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#0284C7] group-hover:translate-x-0.5 transition-all" />
                          </Link>
                        </div>
                      )}
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

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            className="xl:hidden flex items-center justify-center w-11 h-11 rounded-xl text-neutral-800 hover:bg-neutral-100 active:bg-sky-50 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors cursor-pointer select-none"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-neutral-900" />
            ) : (
              <Menu className="w-6 h-6 text-neutral-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Backdrop & Slide-Over Drawer */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay to prevent interaction with background content */}
            <div
              className="xl:hidden fixed inset-0 top-[64px] sm:top-[68px] bg-neutral-950/60 backdrop-blur-xs z-40 animate-in fade-in-0 duration-200"
              onClick={closeMobileMenu}
              aria-hidden="true"
            />

            {/* Mobile Drawer Content */}
            <div
              id="mobile-navigation-menu"
              className="xl:hidden fixed inset-x-0 top-[64px] sm:top-[68px] bottom-0 bg-white z-50 flex flex-col justify-between overflow-y-auto overscroll-contain shadow-2xl border-t border-neutral-200 p-4 sm:p-6 animate-in fade-in slide-in-from-top-2 duration-200 pb-10"
              style={{ maxHeight: 'calc(100dvh - 64px)' }}
            >
              <nav className="space-y-2">
                {/* Mobile: Home Link */}
                <Link
                  href="/"
                  onClick={closeMobileMenu}
                  className={`min-h-[44px] flex items-center text-[15px] font-bold py-2.5 px-3.5 rounded-xl transition-colors ${
                    pathname === '/'
                      ? 'bg-sky-50 text-[#0284C7]'
                      : 'text-neutral-900 hover:bg-neutral-50 active:bg-sky-50'
                  }`}
                >
                  Home
                </Link>

                {/* Mobile: Navigation Sections with Accordions */}
                {navMenu.map((item) => {
                  const hasDropdown = item.dropdown && item.dropdown.length > 0;
                  const isExpanded = !!mobileOpenSections[item.title];
                  const isIndustriesSection = item.title === 'Industries';
                  const isSectionActive =
                    item.href && item.href !== '/'
                      ? pathname === item.href || pathname.startsWith(`${item.href}/`)
                      : false;

                  if (!hasDropdown) {
                    return (
                      <Link
                        key={item.title}
                        href={item.href || '#'}
                        onClick={closeMobileMenu}
                        className={`min-h-[44px] flex items-center text-[15px] font-bold py-2.5 px-3.5 rounded-xl transition-colors ${
                          isSectionActive
                            ? 'bg-sky-50 text-[#0284C7]'
                            : 'text-neutral-900 hover:bg-neutral-50 active:bg-sky-50'
                        }`}
                      >
                        {item.title}
                      </Link>
                    );
                  }

                  return (
                    <div
                      key={item.title}
                      className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                        isExpanded
                          ? 'border-sky-200 bg-sky-50/30'
                          : 'border-transparent bg-neutral-50/60 hover:bg-neutral-100/70'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleMobileSection(item.title)}
                        aria-expanded={isExpanded}
                        className="w-full min-h-[48px] flex items-center justify-between text-[15px] font-bold py-3 px-3.5 text-neutral-900 transition-colors cursor-pointer select-none"
                      >
                        <span className={isExpanded ? 'text-[#0284C7]' : 'text-neutral-900'}>
                          {item.title}
                        </span>
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-all ${
                            isExpanded
                              ? 'bg-sky-100 text-[#0284C7] rotate-180'
                              : 'bg-neutral-200/70 text-neutral-600'
                          }`}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </div>
                      </button>

                      {isExpanded && (
                        <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-sky-100 animate-in fade-in-0 duration-150">
                          {/* Parent Section Overview link if applicable */}
                          {item.href && (
                            <Link
                              href={item.href}
                              onClick={closeMobileMenu}
                              className="min-h-[38px] flex items-center justify-between text-xs font-bold text-[#0284C7] bg-white border border-sky-200/80 px-3 py-2 rounded-xl hover:bg-sky-50 transition-colors mb-2 shadow-2xs"
                            >
                              <span>Explore All {item.title}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          )}

                          {item.dropdown?.map((subItem) => {
                            const SubIcon = subItem.icon;
                            const isSubActive = pathname === subItem.href;

                            if (isIndustriesSection && subItem.isOtherTrigger) {
                              return (
                                <div key={subItem.title} className="pt-1">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setMobileOtherIndustriesOpen(!mobileOtherIndustriesOpen)
                                    }
                                    className="w-full min-h-[42px] flex items-center justify-between text-xs font-bold text-sky-800 py-2 px-3 rounded-xl bg-sky-100/70 hover:bg-sky-100 border border-sky-200/60 transition-colors cursor-pointer"
                                  >
                                    <span className="flex items-center gap-2">
                                      <Building2 className="w-4 h-4 text-[#0284C7]" />
                                      <span>Other Industries (12+ Sectors)</span>
                                    </span>
                                    <ChevronDown
                                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                                        mobileOtherIndustriesOpen ? 'rotate-180' : ''
                                      }`}
                                    />
                                  </button>

                                  {mobileOtherIndustriesOpen && (
                                    <div className="mt-2 pl-2 border-l-2 border-sky-300 py-1 space-y-1 animate-in fade-in-0 duration-150">
                                      <p className="text-[10.5px] text-neutral-500 px-2 py-0.5 leading-tight">
                                        Skylink provides EXIM solutions across all commercial sectors:
                                      </p>
                                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-1">
                                        {otherIndustriesList.map((otherItem) => {
                                          const OtherIcon = otherItem.icon;
                                          return (
                                            <Link
                                              key={otherItem.title}
                                              href={otherItem.href}
                                              onClick={closeMobileMenu}
                                              className="min-h-[38px] flex items-center gap-2 text-xs font-medium text-neutral-700 py-1.5 px-2.5 rounded-lg hover:bg-sky-50 hover:text-[#0284C7] active:bg-sky-100 transition-colors"
                                            >
                                              <div className="p-1 rounded bg-neutral-100 text-neutral-600 shrink-0">
                                                <OtherIcon className="w-3 h-3" />
                                              </div>
                                              <span className="line-clamp-1">{otherItem.title}</span>
                                            </Link>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              );
                            }

                            return (
                              <Link
                                key={subItem.title}
                                href={subItem.href}
                                onClick={closeMobileMenu}
                                className={`min-h-[44px] flex items-center gap-3 py-2 px-2.5 rounded-xl transition-colors ${
                                  isSubActive
                                    ? 'bg-sky-100/80 text-[#0284C7] font-bold'
                                    : 'hover:bg-white text-neutral-800 active:bg-sky-50'
                                }`}
                              >
                                {SubIcon && (
                                  <div
                                    className={`p-1.5 rounded-lg shrink-0 ${
                                      isSubActive
                                        ? 'bg-[#0284C7] text-white'
                                        : 'bg-sky-100/70 text-sky-700'
                                    }`}
                                  >
                                    <SubIcon className="w-4 h-4" />
                                  </div>
                                )}
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs sm:text-[13px] font-semibold text-neutral-900 leading-snug">
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

                {/* Mobile: Brand Motion Identity Link */}
                <Link
                  href="/brand"
                  onClick={closeMobileMenu}
                  className="min-h-[44px] flex items-center justify-between text-xs sm:text-[13px] font-bold py-2.5 px-3.5 rounded-xl text-amber-900 bg-amber-50/80 border border-amber-200/80 hover:bg-amber-100 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>SkyLink Motion Logo Showcase</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
                </Link>
              </nav>

              {/* Bottom Drawer Actions */}
              <div className="mt-6 pt-5 border-t border-neutral-200 space-y-3.5">
                <Button
                  href="/request-consultation"
                  variant="secondary"
                  size="md"
                  className="w-full min-h-[48px] justify-center text-[15px] font-bold shadow-lg shadow-sky-500/20"
                  onClick={closeMobileMenu}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Request Consultation
                </Button>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-600 pt-1">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="min-h-[38px] flex items-center gap-2 p-2 rounded-lg bg-neutral-50 hover:bg-sky-50 hover:text-[#0284C7] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-sky-600 shrink-0" />
                    <span className="truncate">{siteConfig.contact.email}</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="min-h-[38px] flex items-center gap-2 p-2 rounded-lg bg-neutral-50 hover:bg-sky-50 hover:text-[#0284C7] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-sky-600 shrink-0" />
                    <span className="truncate">{siteConfig.contact.phone}</span>
                  </a>
                </div>

                <div className="pt-2 text-center">
                  <Link
                    href="/admin/login"
                    onClick={closeMobileMenu}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-[#0A2540] transition-colors py-1 px-3 rounded-md hover:bg-neutral-100"
                  >
                    <span>Client / Admin Login Portal</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

