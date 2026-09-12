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
    title: 'Global Logistics Company & Freight Forwarding Services | SkyLink Global',
    description:
      'SkyLink Global is a leading global logistics company providing international shipping, ocean & air freight forwarding, customs clearance, and supply chain solutions.',
    primaryKeyword: 'global logistics company',
    secondaryKeywords: [
      'international logistics company',
      'freight forwarding services',
      'freight forwarding company',
      'international shipping services',
      'global logistics solutions',
      'logistics and supply chain solutions',
      'air freight services',
      'ocean freight services',
      'sea freight services',
      'customs clearance services',
      'cargo transportation services',
      'import export logistics',
      'end-to-end logistics services',
      'multimodal transportation services',
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
    keywords: [
      'global logistics company',
      'international logistics company',
      'freight forwarding services',
      'freight forwarding company',
      'international shipping services',
      'global logistics solutions',
      'logistics and supply chain solutions',
      'air freight services',
      'ocean freight services',
      'sea freight services',
      'customs clearance services',
      'cargo transportation services',
      'import export logistics',
      'end-to-end logistics services',
      'multimodal transportation services',
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
    title: 'About SkyLink Global | Global Logistics Company & Supply Chain Partner',
    description:
      'SkyLink Global is a premier global logistics company providing international shipping, overseas logistics, freight forwarding, and global supply chain management.',
    primaryKeyword: 'global logistics company',
    secondaryKeywords: [
      'international logistics company',
      'global logistics',
      'global logistics solutions',
      'global logistics services',
      'international shipping company',
      'international freight forwarding company',
      'global supply chain management',
      'global transportation',
      'overseas logistics',
    ],
    keywords: [
      'global logistics company',
      'international logistics company',
      'global logistics',
      'global logistics solutions',
      'global logistics services',
      'international shipping company',
      'international freight forwarding company',
      'global supply chain management',
      'global transportation',
      'overseas logistics',
    ],
    ogTitle: 'About SkyLink Global | Global Logistics Company & Supply Chain Partner',
    ogDescription:
      'SkyLink Global is a premier global logistics company providing international shipping, overseas logistics, freight forwarding, and global supply chain management.',
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
    title: 'The SkyLink Advantage | Leading Global Logistics Company & Freight Forwarder',
    description:
      'Discover why enterprises choose SkyLink Global: a premier international logistics company delivering global logistics solutions and freight forwarding services.',
    primaryKeyword: 'global logistics solutions',
    secondaryKeywords: [
      'global logistics company',
      'international freight forwarding',
      'freight forwarding company',
      'global logistics',
      'freight forwarding service',
      'global transportation',
      'overseas logistics',
      'international logistics company',
      'global logistics services',
    ],
    keywords: [
      'global logistics solutions',
      'global logistics company',
      'international freight forwarding',
      'freight forwarding company',
      'global logistics',
      'freight forwarding service',
      'global transportation',
      'overseas logistics',
      'international logistics company',
      'global logistics services',
    ],
    ogTitle: 'The SkyLink Advantage | Leading Global Logistics Company & Freight Forwarder',
    ogDescription:
      'Discover why enterprises choose SkyLink Global: a premier international logistics company delivering global logistics solutions and freight forwarding services.',
  },

  whyTraditionalVsSkyLink: {
    path: '/why-choose-us/traditional-vs-skylink',
    title: 'Traditional Logistics vs SkyLink | Customs Clearance & Freight Forwarding Benchmark',
    description:
      'Compare traditional forwarding with SkyLink Global: expert customs clearance services, import export consulting, fast-track customs house agent services, and compliance.',
    primaryKeyword: 'customs clearance',
    secondaryKeywords: [
      'import export consulting',
      'customs clearance services',
      'import export consulting services',
      'customs and clearing agents',
      'customs house agent services',
      'import customs clearance',
      'freight customs clearance',
      'export compliance services',
      'customs clearance and freight forwarding',
    ],
    keywords: [
      'customs clearance',
      'import export consulting',
      'customs clearance services',
      'import export consulting services',
      'customs and clearing agents',
      'customs house agent services',
      'import customs clearance',
      'freight customs clearance',
      'export compliance services',
      'customs clearance and freight forwarding',
    ],
    ogTitle: 'Traditional Logistics vs SkyLink | Customs Clearance & Freight Forwarding Benchmark',
    ogDescription:
      'Compare traditional forwarding with SkyLink Global: expert customs clearance services, import export consulting, fast-track customs house agent services, and compliance.',
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
    title: 'Freight Forwarder Collaboration | International Freight Forwarding Services',
    description:
      'Partner with SkyLink Global: connect your freight forwarding company with steady enterprise cargo logistics, trade lane allocations, and competitive rates.',
    primaryKeyword: 'freight forwarding services',
    secondaryKeywords: [
      'freight forwarding company',
      'international freight forwarding',
      'cargo logistics',
      'cargo forwarding services',
      'freight and forwarding companies',
      'international freight forwarding companies',
      'international freight forwarding services',
      'logistics and freight forwarding',
      'shipping and freight forwarding',
    ],
    keywords: [
      'freight forwarding services',
      'freight forwarding company',
      'international freight forwarding',
      'cargo logistics',
      'cargo forwarding services',
      'freight and forwarding companies',
      'international freight forwarding companies',
      'international freight forwarding services',
      'logistics and freight forwarding',
      'shipping and freight forwarding',
    ],
    ogTitle: 'Freight Forwarder Collaboration | International Freight Forwarding Services',
    ogDescription:
      'Partner with SkyLink Global: connect your freight forwarding company with steady enterprise cargo logistics, trade lane allocations, and competitive rates.',
  },

  collaborateEnquiry: {
    path: '/collaborate/enquiry',
    title: 'Freight Forwarder Collaboration Enquiry | SkyLink Global Services',
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
