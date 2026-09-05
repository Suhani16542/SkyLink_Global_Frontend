import type { PageSeoEntry } from '@/types';

/**
 * Central Page SEO Registry
 * 
 * Every public route in the application has a dedicated SEO configuration entry here.
 * When you are ready to input researched keywords, fill in `primaryKeyword`, `secondaryKeywords`,
 * and optionally adjust `title`, `description`, or OpenGraph fields for each page below.
 */
export const pageSeoRegistry: Record<string, PageSeoEntry> = {
  home: {
    path: '/',
    title: 'SkyLink Global | B2B Logistics Company & Freight Forwarding Provider',
    description:
      'SkyLink Global is a premier B2B logistics company and freight forwarding provider. End-to-end logistics services, international supply chain management, cargo transportation, customs clearance, and warehousing.',
    primaryKeyword: 'logistics company',
    secondaryKeywords: [
      'logistics services',
      'logistics provider',
      'freight forwarding',
      'shipping company',
      'supply chain management and logistics',
      '3pl logistics',
      'cargo freight forwarders',
      'cargo transportation',
      'international logistics',
      'warehousing',
    ],
    keywords: [
      'logistics company',
      'logistics services',
      'logistics provider',
      'freight forwarding',
      'shipping company',
      'supply chain management and logistics',
      '3pl logistics',
      'cargo freight forwarders',
      'cargo transportation',
      'international logistics',
      'warehousing',
    ],
    ogTitle: 'SkyLink Global | Premier B2B Logistics Company & Freight Forwarding',
    ogDescription:
      'Connecting global markets with end-to-end logistics services, international freight forwarding, cargo transportation, customs clearance, and warehousing solutions.',
  },


  about: {
    path: '/about',
    title: 'About Us | SkyLink Global Services — B2B Trade & Logistics Leadership',
    description:
      'Discover SkyLink Global Services: our vision, mission, DGFT and customs regulatory expertise, and our global logistics coordination network.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  aboutOverview: {
    path: '/about/overview',
    title: 'Corporate Overview & Governance | SkyLink Global Services',
    description:
      'Learn about SkyLink Global Services leadership, global infrastructure, trade compliance standards, and our vision for streamlined international commerce.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  whySkyLinkAdvantage: {
    path: '/why-choose-us/skylink-advantage',
    title: 'The SkyLink Advantage | Integrated EXIM & Logistics Excellence',
    description:
      'Explore why leading enterprises choose SkyLink Global for strategic customs planning, duty optimization, transparent freight operations, and rapid transit.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  whyTraditionalVsSkyLink: {
    path: '/why-choose-us/traditional-vs-skylink',
    title: 'Traditional Logistics vs SkyLink Global Services | Comparative Analysis',
    description:
      'Compare traditional freight forwarding with SkyLink Global integrated EXIM model: lower dwell times, reduced demurrage risk, and strategic compliance.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  services: {
    path: '/services',
    title: 'EXIM & Global Logistics Services Portfolio | SkyLink Global Services',
    description:
      'Explore SkyLink Global comprehensive services: international freight forwarding, customs brokerage, bonded warehousing, cold-chain solutions, and trade compliance.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  servicesLogisticsShipping: {
    path: '/services/logistics-shipping',
    title: 'Logistics & Shipping: Freight Negotiation, Route Optimization & Insurance',
    description:
      'End-to-end logistics and shipping management: carrier rate negotiation, multimodal route optimization, container consolidations, Incoterms advisory, and marine insurance.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  servicesWarehousingSolutions: {
    path: '/services/warehousing-solutions',
    title: 'Warehousing Solutions for Exporters | Bonded & Non-Bonded Storage',
    description:
      'Strategic warehousing solutions for international trade: bonded and non-bonded storage, advanced WMS tracking, custom packaging, and distribution logistics.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  servicesWarehousingDistribution: {
    path: '/services/warehousing-distribution',
    title: 'Warehousing & Distribution Services | SkyLink Global Services',
    description:
      'Integrated bonded storage, temperature-controlled facilities, and nationwide distribution network tailored for import-export cargo.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  servicesDocumentationLiaison: {
    path: '/services/documentation-liaison',
    title: 'Documentation & Regulatory Liaison: ICEGATE, Shipping Bills & CoO',
    description:
      'End-to-end export documentation support: customs invoices, shipping bills, Certificate of Origin (CoO), ICEGATE filings, AD Code registrations, and agency liaison.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  servicesTaxGstCompliance: {
    path: '/services/tax-gst-compliance',
    title: 'Export Tax, GST Compliance & Refund Advisory | SkyLink Global Services',
    description:
      'Comprehensive tax and GST advisory for exporters: LUT filings, IGST refund processing, ITC refunds, and inverted duty structure audits.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  servicesTaxGstAdvisory: {
    path: '/services/tax-gst-advisory',
    title: 'Trade Tax & GST Advisory Solutions | SkyLink Global Services',
    description:
      'Expert foreign trade tax planning, GST refund management under Rule 96/89, and regulatory alignment for Indian exporters.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  servicesRiskManagement: {
    path: '/services/risk-management',
    title: 'Trade Risk Management: Regulatory, Financial & Geopolitical Protection',
    description:
      'Protect global transactions with comprehensive risk mitigation: country risk assessments, currency hedging strategies, Incoterms liability, and marine cargo safety.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  servicesTradeRiskManagement: {
    path: '/services/trade-risk-management',
    title: 'Global Trade Risk Management & Cargo Security | SkyLink Global Services',
    description:
      'Strategic risk frameworks mitigating maritime delays, demurrage, payment defaults, and cross-border regulatory liabilities.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  industries: {
    path: '/industries',
    title: 'Industry Solutions | Specialized EXIM & Logistics Support',
    description:
      'Tailored trade logistics and regulatory compliance frameworks for pharmaceuticals, seafood & aquaculture, specialty chemicals, agro-fertilizers, and perishables.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  industriesPharma: {
    path: '/industries/pharma',
    title: 'Pharmaceutical EXIM & Cold Chain Logistics | SkyLink Global Services',
    description:
      'GDP-compliant cold chain logistics, temperature-controlled air & ocean freight, and expedited customs clearance for pharmaceutical exports.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  industriesSeafoods: {
    path: '/industries/seafoods',
    title: 'Seafood & Marine Products Export Logistics | SkyLink Global Services',
    description:
      'Ultra-low temperature reefer container management, MPEDA documentation, EIA health certification, and rapid green-channel customs clearance for seafood exports.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  industriesChemicalsAgro: {
    path: '/industries/specialty-chemicals-agro-fertilizers-perishables',
    title: 'Specialty Chemicals, Agro-Fertilizers & Perishables Logistics | SkyLink Global',
    description:
      'Hazchem handling (IMDG code), fertilizer movement regulatory support, and humidity-controlled transit for perishable agro-commodities.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  sustainabilityAeoGreen: {
    path: '/sustainability/aeo-green',
    title: 'AEO Green Channel Accreditation & Compliance | SkyLink Global Services',
    description:
      'Accelerate customs clearances, reduce bank guarantees, and achieve Tier 1/2/3 Authorized Economic Operator (AEO) status with our accreditation advisory.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  sustainabilityEcoRoute: {
    path: '/sustainability/eco-route',
    title: 'Eco-Route & Sustainable Green Logistics | SkyLink Global Services',
    description:
      'Decarbonize your supply chain with multimodal route optimization, carbon footprint tracking, and energy-efficient logistics workflows.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  collaborateFreightForwarders: {
    path: '/collaborate/freight-forwarders',
    title: 'Partner with Us | Freight Forwarders & Carrier Collaboration',
    description:
      'Join the SkyLink Global partner network: co-load opportunities, regulatory agency support in India, and nationwide logistics infrastructure.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  collaborateEnquiry: {
    path: '/collaborate/enquiry',
    title: 'Strategic Partnership Enquiry | SkyLink Global Services',
    description:
      'Connect with our global alliances desk to explore freight forwarding partnerships, agency agreements, and cross-border trade cooperation.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  newsBlogs: {
    path: '/news/blogs',
    title: 'Global Trade Insights & EXIM Blogs | SkyLink Global Services',
    description:
      'Read expert analysis, regulatory updates from DGFT and CBIC, maritime shipping trends, and strategic advice for international trade.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  newsArticles: {
    path: '/news/articles',
    title: 'Trade Intelligence & Industry Articles | SkyLink Global Services',
    description:
      'In-depth whitepapers and articles covering customs tariff revisions, supply chain resilience, free trade agreements, and global market dynamics.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  blog: {
    path: '/blog',
    title: 'Trade Insights & EXIM Knowledge Base | SkyLink Global Services',
    description:
      'Latest insights on international trade compliance, customs regulations, global freight trends, and export strategies from SkyLink Global experts.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  contact: {
    path: '/contact',
    title: 'Contact SkyLink Global Services | B2B Trade & Logistics Advisory',
    description:
      'Get in touch with our global trade advisory team. Schedule a consultation or reach our offices in India for freight, customs, and compliance support.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  requestConsultation: {
    path: '/request-consultation',
    title: 'Request an EXIM Consultation & Freight Quote | SkyLink Global Services',
    description:
      'Submit your shipment parameters or trade compliance requirements to receive a customized strategic advisory proposal from our specialists.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },

  brand: {
    path: '/brand',
    title: 'Brand Identity & Assets | SkyLink Global Services',
    description:
      'Official brand assets, typography, color systems, and corporate identity guidelines for SkyLink Global Services.',
    primaryKeyword: '',
    secondaryKeywords: [],
    keywords: [],
  },
};

/**
 * Helper to retrieve page SEO config by registry key
 */
export function getPageSeo(key: keyof typeof pageSeoRegistry | string): PageSeoEntry | undefined {
  return pageSeoRegistry[key];
}

/**
 * Helper to retrieve page SEO config by pathname
 */
export function getPageSeoByPath(path: string): PageSeoEntry | undefined {
  const normalized = path.replace(/\/$/, '') || '/';
  return Object.values(pageSeoRegistry).find((entry) => {
    const entryNormalized = entry.path.replace(/\/$/, '') || '/';
    return entryNormalized === normalized;
  });
}
