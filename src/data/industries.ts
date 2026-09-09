import type { Industry } from '@/types';

export interface EnrichedIndustry extends Industry {
  challenges: string[];
  skylinkSolutions: string[];
  keyHighlights: string[];
  href?: string;
}

export interface OtherIndustry {
  id: string;
  name: string;
  category: string;
  description: string;
  tag: string;
  iconName: string;
}

/**
 * Skylink's 3 Key USP Highlighted Industries
 */
export const industriesData: EnrichedIndustry[] = [
  {
    id: 'pharmaceuticals',
    title: 'Pharmaceuticals & Healthcare',
    slug: 'pharma',
    href: '/industries/pharma',
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
    slug: 'seafoods',
    href: '/industries/seafoods',
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
    id: 'specialty-chemicals-agro-perishables',
    title: 'Specialty Chemicals, Agro Fertilizers & Perishables',
    slug: 'specialty-chemicals-agro-fertilizers-perishables',
    href: '/industries/specialty-chemicals-agro-fertilizers-perishables',
    description:
      'Atmosphere-controlled reefer shipping, dangerous goods (Hazmat/IMO) compliance, express air cargo charters, and APEDA statutory clearances for temperature-sensitive perishables and specialty chemicals.',
    challenges: [
      'Extremely short commercial shelf life demanding swift transit execution for fresh commodities',
      'Complex IMDG / Hazmat classification and port safety documentation for specialty chemicals',
      'Phytosanitary inspection hurdles and seasonal air cargo capacity shortages during harvest',
      'Stringent humidity and atmospheric balance requirements preventing cargo deterioration',
    ],
    skylinkSolutions: [
      'Controlled Atmosphere (CA) reefer container logistics regulating O2 and CO2 levels',
      'Certified Dangerous Goods (DGR) handling with ISO tank and specialized chemical container allocations',
      'Direct APEDA / plant quarantine liaison for fast Phytosanitary Certificate (PSC) issuance',
      'Dedicated green-channel customs clearance with 24/7 real-time IoT condition telemetry',
    ],
    keyHighlights: [
      'Controlled Atmosphere (CA) Containers',
      'Certified Hazmat & ISO Tank Transport',
      'APEDA & Phytosanitary Liaison',
    ],
    seoTitle: 'Specialty Chemicals, Agro Fertilizers & Perishables Logistics | SkyLink Global Services',
    seoDescription:
      'Controlled atmosphere reefer shipping, Hazmat chemical forwarding, and APEDA trade compliance for agricultural and chemical exporters.',
  },
];

/**
 * 14 Other Industries Catered by SkyLink
 */
export const otherIndustriesData: OtherIndustry[] = [
  {
    id: 'automotive',
    name: 'Automotive & Auto Components',
    category: 'Manufacturing & Mobility',
    description:
      'Just-in-Time (JIT) line-side feeding, Tier 1/2 OEM component logistics, and zero-delay customs clearance for assemblies, engines, and spare parts.',
    tag: 'JIT Line Feeding',
    iconName: 'Car',
  },
  {
    id: 'engineering-manufacturing',
    name: 'Engineering & Manufacturing',
    category: 'Heavy Industry',
    description:
      'Over-Dimensional Cargo (ODC) handling, EPCG machinery import clearances, and turnkey project logistics for heavy equipment and plant machinery.',
    tag: 'EPCG & Project Cargo',
    iconName: 'Factory',
  },
  {
    id: 'electronics-electrical',
    name: 'Electronics & Electrical',
    category: 'High-Tech',
    description:
      'High-security air freight corridors, anti-static climate-controlled handling, and expedited BIS, WPC, and EPR statutory trade compliance.',
    tag: 'BIS & Secure Transit',
    iconName: 'Cpu',
  },
  {
    id: 'textiles-apparel',
    name: 'Textiles & Apparel',
    category: 'Consumer & Fashion',
    description:
      'Garment-on-Hanger (GOH) container solutions, time-critical fashion seasonal air charters, and duty drawback / RoSCTL incentive maximization.',
    tag: 'GOH & RoSCTL Benefits',
    iconName: 'Shirt',
  },
  {
    id: 'food-beverages',
    name: 'Food & Beverages',
    category: 'FMCG & Consumables',
    description:
      'FSSAI statutory import/export clearance, multi-temperature containerization, and rapid shelf-life preservation for packaged and bulk foods.',
    tag: 'FSSAI Port Clearance',
    iconName: 'UtensilsCrossed',
  },
  {
    id: 'agriculture-agro',
    name: 'Agriculture & Agro Products',
    category: 'Commodities',
    description:
      'Bulk agricultural commodity forwarding, APEDA compliance, plant quarantine inspection liaison, and certified fumigation coordination.',
    tag: 'APEDA & Bulk Grain',
    iconName: 'Sprout',
  },
  {
    id: 'chemicals-petrochemicals',
    name: 'Chemicals & Petrochemicals',
    category: 'Process Industry',
    description:
      'Hazmat (IMO/IMDG) certified multi-modal forwarding, dedicated ISO tank container fleets, and toxic substance customs documentation verification.',
    tag: 'Hazmat & ISO Tanks',
    iconName: 'FlaskConical',
  },
  {
    id: 'retail-consumer-goods',
    name: 'Retail & Consumer Goods',
    category: 'Consumer Goods',
    description:
      'Multi-vendor LCL/FCL ocean freight consolidation, barcode labeling, cross-docking, and end-to-end retail distribution to fulfillment hubs.',
    tag: 'LCL/FCL Consolidation',
    iconName: 'ShoppingBag',
  },
  {
    id: 'construction-infrastructure',
    name: 'Construction & Infrastructure',
    category: 'Infrastructure',
    description:
      'Breakbulk vessel chartering, heavy-haul flat rack transportation, and direct site delivery for construction steel, cement, and earthmovers.',
    tag: 'Breakbulk & Heavy-Haul',
    iconName: 'HardHat',
  },
  {
    id: 'renewable-energy',
    name: 'Renewable Energy',
    category: 'Clean Tech',
    description:
      'Photovoltaic solar module ocean freight, oversized wind turbine blade route surveys, and green customs fast-tracking protocols.',
    tag: 'Solar & Wind Logistics',
    iconName: 'Sun',
  },
  {
    id: 'mining-metals',
    name: 'Mining & Metals',
    category: 'Raw Materials',
    description:
      'Charter vessel bulk mineral freight, steel coil specialized stowage, and heavy port handling equipment management for ore and metals.',
    tag: 'Bulk Ore & Steel Coils',
    iconName: 'Pickaxe',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    category: 'Cross-Border Digital',
    description:
      'Cross-border B2C/B2B parcel express, bonded warehouse storage, CSB-V courier clearance, and automated reverse logistics workflows.',
    tag: 'CSB-V Express Clearance',
    iconName: 'ShoppingCart',
  },
  {
    id: 'industrial-equipment',
    name: 'Industrial Equipment',
    category: 'Machinery',
    description:
      'Machine tool forwarding, spare parts AOG/urgent courier logistics, and MOOWR customs bonded duty deferral advisory.',
    tag: 'MOOWR Duty Deferral',
    iconName: 'Wrench',
  },
  {
    id: 'other',
    name: 'Other Industries',
    category: 'Specialized Verticals',
    description:
      'Bespoke multi-modal freight forwarding, customized HS code classification, and dedicated trade liaison for unique or niche industries.',
    tag: 'Bespoke Trade Solutions',
    iconName: 'Sparkles',
  },
];

export async function getAllIndustries(): Promise<EnrichedIndustry[]> {
  return industriesData;
}

export async function getOtherIndustries(): Promise<OtherIndustry[]> {
  return otherIndustriesData;
}

export async function getIndustryBySlug(slug: string): Promise<EnrichedIndustry | undefined> {
  return industriesData.find((industry) => industry.slug === slug || industry.id === slug);
}
