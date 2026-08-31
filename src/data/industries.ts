import type { Industry } from '@/types';

export interface EnrichedIndustry extends Industry {
  challenges: string[];
  skylinkSolutions: string[];
  keyHighlights: string[];
}

export const industriesData: EnrichedIndustry[] = [
  {
    id: 'pharmaceuticals',
    title: 'Pharmaceuticals & Healthcare',
    slug: 'pharmaceuticals',
    description:
      'GDP and FDA-compliant temperature-controlled cold-chain logistics, zero-delay customs clearance, and specialized statutory approvals for APIs, biologicals, vaccines, and formulations.',
    challenges: [
      'Strict regulatory penalties for temperature excursions during multimodal transit',
      'Complex documentation requirements (Drug Controller approvals, US FDA 510(k), EU GMP)',
      'Port clearance delays causing shelf-life degradation of time-sensitive life science shipments',
      'High risk of cargo theft or counterfeit interception in cross-border corridors',
    ],
    skylinkSolutions: [
      'Validated active & passive temperature-controlled packaging (-20°C, 2°C to 8°C, 15°C to 25°C)',
      'Continuous IoT temperature, humidity, and location logging with automated excursion alerts',
      'Dedicated ADC (Assistant Drug Controller) port liaison for instant customs release',
      'End-to-end GDP compliant SOPs and validated carrier partner allocations',
    ],
    keyHighlights: [
      'Zero Thermal Excursion Guarantee',
      'Expedited Port Green-Channel Release',
      'Global GDP & US FDA Protocol Adherence',
    ],
    seoTitle: 'Pharmaceutical EXIM & Cold Chain Logistics | SkyLink Global Services',
    seoDescription:
      'GDP compliant pharmaceutical freight forwarding, active cold chain monitoring, and regulatory trade clearance solutions.',
  },
  {
    id: 'seafood',
    title: 'Seafood & Marine Exports',
    slug: 'seafood',
    description:
      'Ultra-low temperature deep freeze logistics (-25°C to -40°C), MPEDA compliance, health certification liaison, and direct reefer container ocean freight for seafood exporters.',
    challenges: [
      'Rapid cargo spoilage if unbroken deep-freeze chain is disrupted',
      'Stringent antibiotic residue testing and rejection risks by EU & US FDA import authorities',
      'Port container plug-in delays and escalating reefer electricity surcharges',
      'Fluctuating ocean freight container availability during harvest peaks',
    ],
    skylinkSolutions: [
      'Pre-tripped and validated Super-Freezer and standard Reefer container allocation',
      'MPEDA (Marine Products Export Development Authority) and EIA health certificate facilitation',
      'Priority berthing and guaranteed shore-power reefer plug-in coordination at loading ports',
      'Direct shipping line contracts ensuring vessel space availability during peak harvesting runs',
    ],
    keyHighlights: [
      '-25°C to -40°C Deep Freeze Transit',
      'Priority Port Reefer Plug-In Monitoring',
      'EIA & Health Certificate Facilitation',
    ],
    seoTitle: 'Seafood & Marine Products Export Logistics | SkyLink Global Services',
    seoDescription:
      'Reefer container freight, deep freeze temperature control, and statutory export compliance for seafood and aquaculture producers.',
  },
  {
    id: 'perishables',
    title: 'Perishables & Fresh Produce',
    slug: 'perishables',
    description:
      'Atmosphere-controlled ocean reefer transport, express air cargo charters, and APEDA compliance for fruits, vegetables, flowers, and processed agricultural commodities.',
    challenges: [
      'Extremely short commercial shelf life demanding swift transit execution',
      'Phytosanitary inspection hurdles and sudden import quarantine barriers overseas',
      'Seasonal rate volatility and severe air cargo capacity shortages during harvest seasons',
      'Inadequate pre-cooling leading to post-harvest decay during maritime transit',
    ],
    skylinkSolutions: [
      'Controlled Atmosphere (CA) reefer container logistics regulating O2 and CO2 levels',
      'Direct plant quarantine liaison for fast Phytosanitary Certificate (PSC) issuance',
      'Block space agreements on premier air freight carriers for urgent seasonal perishables',
      'Cold storage consolidation and farm-gate to airport refrigerated drayage',
    ],
    keyHighlights: [
      'Controlled Atmosphere (CA) Containerization',
      'Air Cargo Block Space Guarantees',
      'Phytosanitary & Quarantine Clearance Liaison',
    ],
    seoTitle: 'Perishables & Agricultural Export Logistics | SkyLink Global Services',
    seoDescription:
      'Controlled atmosphere reefer shipping, express air cargo, and APEDA trade compliance for agricultural and fresh produce exporters.',
  },
  {
    id: 'manufacturing',
    title: 'Heavy Manufacturing & Automotive',
    slug: 'manufacturing',
    description:
      'Just-in-time (JIT) multimodal supply chain management, EPCG machinery import clearances, and project cargo forwarding for heavy machinery and automotive OEMs.',
    challenges: [
      'Severe production shutdowns if imported raw materials or spare parts are delayed at ports',
      'Complicated customs valuation and SVB proceedings for related-party component imports',
      'Over-Dimensional Cargo (ODC) handling requiring specialized trailers and route surveys',
      'Managing massive export obligations (EO) under EPCG and Advance Authorisation licenses',
    ],
    skylinkSolutions: [
      'Zero-delay customs clearance under pre-arrival Bill of Entry filing and AEO protocols',
      'Specialized Project Cargo forwarding with flat rack, open top, and heavy-haul trailers',
      'Comprehensive EPCG / Advance Authorisation lifecycle management and EODC redemption',
      'Customs bonded warehousing (MOOWR) for deferred duty on capital machinery and inputs',
    ],
    keyHighlights: [
      'Over-Dimensional Project Cargo Handling',
      'MOOWR Scheme Duty Deferment Advisory',
      'Just-In-Time (JIT) Port Logistics Flow',
    ],
    seoTitle: 'Automotive & Heavy Manufacturing EXIM Logistics | SkyLink Global Services',
    seoDescription:
      'Project cargo handling, EPCG machinery customs clearances, and JIT automotive supply chain logistics solutions.',
  },
  {
    id: 'general-cargo',
    title: 'General Cargo & Consumer Goods',
    slug: 'general-cargo',
    description:
      'Cost-optimized FCL/LCL ocean freight, RoDTEP incentive maximization, e-commerce cross-border logistics, and customs clearance for consumer retail and industrial goods.',
    challenges: [
      'High logistics overheads eroding slim profit margins in competitive global consumer markets',
      'Inaccurate HS classification leading to customs valuation disputes and penalties',
      'LCL cargo consolidation delays and unexpected origin handling destination fees',
      'Unclaimed export incentives due to complex statutory filing requirements',
    ],
    skylinkSolutions: [
      'Aggregated volume freight rates providing significant savings on standard ocean container lanes',
      'Accurate GRI-based HS code mapping guaranteeing zero customs detention',
      'Scheduled, dependable LCL consolidation routes with transparent all-in pricing',
      'Automated RoDTEP, RoSCTL, and Duty Drawback filing and e-BRC realization tracking',
    ],
    keyHighlights: [
      'Direct FCL/LCL Volume Freight Savings',
      'End-to-End RoDTEP Incentive Maximization',
      'Zero Hidden Destination Fee Guarantees',
    ],
    seoTitle: 'General Cargo & Consumer Goods Freight Forwarding | SkyLink Global Services',
    seoDescription:
      'Reliable FCL/LCL freight forwarding, customs clearance, and export incentive optimization for consumer goods and general merchandise.',
  },
];

export async function getAllIndustries(): Promise<EnrichedIndustry[]> {
  return industriesData;
}

export async function getIndustryBySlug(slug: string): Promise<EnrichedIndustry | undefined> {
  return industriesData.find((industry) => industry.slug === slug);
}
