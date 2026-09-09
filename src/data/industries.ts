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
  href?: string;
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
    seoTitle: 'Pharma & Healthcare Cold-Chain Logistics | SkyLink Global Services',
    seoDescription:
      'GDP compliant temperature-controlled air & ocean freight for life sciences, pharmaceuticals, and active drug formulations.',
  },
  {
    id: 'seafood',
    title: 'Marine & Processed Seafood',
    slug: 'seafoods',
    href: '/industries/seafoods',
    description:
      'Ultra-low sub-zero (-25°C to -40°C) reefer container solutions, EIA and MPEDA health certification liaison, and express port loading for frozen shrimp, fish, and cephalopods.',
    challenges: [
      'Protein degradation, black spot (melanosis), and bacterial bloom from cold-chain temperature spikes',
      'Mandatory pre-export testing (antibiotic residues, microbiology) by Export Inspection Council (EIC)',
      'High port detention risks leading to compromised shelf life and heavy container plug-in electricity demurrage',
      'Stringent destination import regulations (US FDA HACCP, EU residue monitoring, Japanese quarantine)',
    ],
    skylinkSolutions: [
      'Super-freezer (-40°C) and controlled atmosphere reefer container positioning at coastal hubs',
      'Direct liaison with MPEDA / EIA accredited testing laboratories for fast-track health certificate sign-off',
      'Priority vessel berthing and direct-to-reefer plug-in guarantees across all major container terminals',
      'Continuous remote reefer telematics reporting pulp and supply air temperature logs every 15 minutes',
    ],
    keyHighlights: [
      'Super-Freezer (-40°C) Tech',
      'EIA & MPEDA Statutory Liaison',
      'Pre-Tripped Verified Reefers',
    ],
    seoTitle: 'Seafood Cold Chain & Reefer Container Logistics | SkyLink Global Services',
    seoDescription:
      'Sub-zero cold chain logistics, super-freezer reefer shipping, and MPEDA regulatory clearance for frozen marine seafood exporters.',
  },
  {
    id: 'perishables',
    title: 'Specialty Chemicals, Agro & Perishables',
    slug: 'specialty-chemicals-agro-fertilizers-perishables',
    href: '/industries/specialty-chemicals-agro-fertilizers-perishables',
    description:
      'Controlled atmosphere reefer shipping, Hazmat chemical forwarding, and APEDA trade compliance for agricultural and chemical exporters.',
    challenges: [
      'Hazardous material (IMO/IMDG) compliance and complex DG declaration workflows',
      'Phytosanitary certificate (PSC) clearance bottlenecks and quarantine inspection holds',
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
    href: '/industries/automotive',
  },
  {
    id: 'engineering-manufacturing',
    name: 'Engineering & Manufacturing',
    category: 'Heavy Industry',
    description:
      'Over-Dimensional Cargo (ODC) handling, EPCG machinery import clearances, and turnkey project logistics for heavy equipment and plant machinery.',
    tag: 'EPCG & Project Cargo',
    iconName: 'Factory',
    href: '/industries/engineering-manufacturing',
  },
  {
    id: 'electronics-electrical',
    name: 'Electronics & Electrical',
    category: 'High-Tech',
    description:
      'High-security air freight corridors, anti-static climate-controlled handling, and expedited BIS, WPC, and EPR statutory trade compliance.',
    tag: 'BIS & Secure Transit',
    iconName: 'Cpu',
    href: '/industries/electronics-electrical',
  },
  {
    id: 'textiles-apparel',
    name: 'Textiles & Apparel',
    category: 'Consumer & Fashion',
    description:
      'Garment-on-Hanger (GOH) container solutions, time-critical fashion seasonal air charters, and duty drawback / RoSCTL incentive maximization.',
    tag: 'GOH & RoSCTL Benefits',
    iconName: 'Shirt',
    href: '/industries/textiles-apparel',
  },
  {
    id: 'food-beverages',
    name: 'Food & Beverages',
    category: 'FMCG & Consumables',
    description:
      'FSSAI statutory import/export clearance, multi-temperature containerization, and rapid shelf-life preservation for packaged and bulk foods.',
    tag: 'FSSAI Port Clearance',
    iconName: 'UtensilsCrossed',
    href: '/industries/food-beverages',
  },
  {
    id: 'agriculture-agro',
    name: 'Agriculture & Agro Products',
    category: 'Commodities',
    description:
      'Bulk agricultural commodity forwarding, APEDA compliance, plant quarantine inspection liaison, and certified fumigation coordination.',
    tag: 'APEDA & Bulk Grain',
    iconName: 'Sprout',
    href: '/industries/agriculture-agro',
  },
  {
    id: 'chemicals-petrochemicals',
    name: 'Chemicals & Petrochemicals',
    category: 'Process Industry',
    description:
      'Hazmat (IMO/IMDG) certified multi-modal forwarding, dedicated ISO tank container fleets, and toxic substance customs documentation verification.',
    tag: 'Hazmat & ISO Tanks',
    iconName: 'FlaskConical',
    href: '/industries/chemicals-petrochemicals',
  },
  {
    id: 'retail-consumer-goods',
    name: 'Retail & Consumer Goods',
    category: 'Consumer Goods',
    description:
      'Multi-vendor LCL/FCL ocean freight consolidation, barcode labeling, cross-docking, and end-to-end retail distribution to fulfillment hubs.',
    tag: 'LCL/FCL Consolidation',
    iconName: 'ShoppingBag',
    href: '/industries/retail-consumer-goods',
  },
  {
    id: 'construction-infrastructure',
    name: 'Construction & Infrastructure',
    category: 'Infrastructure',
    description:
      'Breakbulk vessel chartering, heavy-haul flat rack transportation, and direct site delivery for construction steel, cement, and earthmovers.',
    tag: 'Breakbulk & Heavy-Haul',
    iconName: 'HardHat',
    href: '/industries/construction-infrastructure',
  },
  {
    id: 'renewable-energy',
    name: 'Renewable Energy',
    category: 'Clean Tech',
    description:
      'Photovoltaic solar module ocean freight, oversized wind turbine blade route surveys, and green customs fast-tracking protocols.',
    tag: 'Solar & Wind Logistics',
    iconName: 'Sun',
    href: '/industries/renewable-energy',
  },
  {
    id: 'mining-metals',
    name: 'Mining & Metals',
    category: 'Raw Materials',
    description:
      'Charter vessel bulk mineral freight, steel coil specialized stowage, and heavy port handling equipment management for ore and metals.',
    tag: 'Bulk Ore & Steel Coils',
    iconName: 'Pickaxe',
    href: '/industries/mining-metals',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce',
    category: 'Cross-Border Digital',
    description:
      'Cross-border B2C/B2B parcel express, bonded warehouse storage, CSB-V courier clearance, and automated reverse logistics workflows.',
    tag: 'CSB-V Express Clearance',
    iconName: 'ShoppingCart',
    href: '/industries/ecommerce',
  },
  {
    id: 'industrial-equipment',
    name: 'Industrial Equipment',
    category: 'Machinery',
    description:
      'Machine tool forwarding, spare parts AOG/urgent courier logistics, and MOOWR customs bonded duty deferral advisory.',
    tag: 'MOOWR Duty Deferral',
    iconName: 'Wrench',
    href: '/industries/industrial-equipment',
  },
  {
    id: 'other',
    name: 'Other Industries',
    category: 'Specialized Verticals',
    description:
      'Bespoke multi-modal freight forwarding, customized HS code classification, and dedicated trade liaison for unique or niche industries.',
    tag: 'Bespoke Trade Solutions',
    iconName: 'Sparkles',
    href: '/industries/other',
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

export async function getOtherIndustryById(id: string): Promise<OtherIndustry | undefined> {
  return otherIndustriesData.find((item) => item.id === id);
}

export { otherIndustriesDetailData, type OtherIndustryDetail } from '@/data/otherIndustriesDetail';
