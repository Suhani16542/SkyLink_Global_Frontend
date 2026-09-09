export interface IndustryMetric {
  label: string;
  value: string;
  subtext: string;
}

export interface IndustryCapability {
  title: string;
  badge: string;
  description: string;
  highlights: string[];
  iconName: string;
}

export interface IndustryChallengeSolution {
  challenge: string;
  solution: string;
}

export interface CommoditySpec {
  commodity: string;
  hsCodeRange: string;
  keyRequirements: string;
  skylinkStandard: string;
}

export interface OtherIndustryDetail {
  id: string;
  title: string;
  badge: string;
  heroTitle: string;
  heroDescription: string;
  telemetryProtocol: string;
  heroImage: string;
  heroImageAlt: string;
  metrics: IndustryMetric[];
  capabilitiesBadge: string;
  capabilitiesTitle: string;
  capabilitiesSubtitle: string;
  capabilities: IndustryCapability[];
  challengesBadge: string;
  challengesTitle: string;
  challengesSubtitle: string;
  challengesAndSolutions: IndustryChallengeSolution[];
  complianceBadge: string;
  complianceTitle: string;
  complianceSubtitle: string;
  commodities: CommoditySpec[];
  ctaTitle: string;
  ctaDescription: string;
  seoTitle: string;
  seoDescription: string;
}

export const otherIndustriesDetailData: Record<string, OtherIndustryDetail> = {
  automotive: {
    id: 'automotive',
    title: 'Automotive & Auto Components',
    badge: 'Automotive & Mobility EXIM',
    heroTitle: 'Just-in-Time (JIT) & Line-Side Automotive Logistics',
    heroDescription:
      'Zero-downtime tier-1/tier-2 OEM component pipelines, expedited air charters for urgent tooling, and automated customs release engineered for precision manufacturing assembly plants.',
    telemetryProtocol: 'IATF 16949 & JIT Synchronous Protocol',
    heroImage:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Automotive robotic assembly line and precision component logistics',
    metrics: [
      { label: 'On-Time Line Delivery', value: '99.85%', subtext: 'Continuous JIT assembly line feeding' },
      { label: 'Critical Customs Clearance', value: '< 6 Hours', subtext: 'Green-channel automotive pre-filing' },
      { label: 'AOG / Critical Charters', value: '24/7 Desk', subtext: 'Immediate air charter response for tooling' },
    ],
    capabilitiesBadge: 'Production Assurance',
    capabilitiesTitle: 'Automotive Supply Chain Capabilities',
    capabilitiesSubtitle:
      'Synchronized multi-modal logistics tailored to strict OEM production schedules and lean manufacturing systems.',
    capabilities: [
      {
        title: 'JIT & JIS Line-Side Delivery',
        badge: 'Zero Plant Stoppage',
        description:
          'Direct sequencing and line-side container discharge designed to feed assembly conveyors without intermediate buffer stocking.',
        highlights: ['Synchronized sequencing (JIS)', 'Milk-run domestic collection', 'Returnable rack / dunnage handling'],
        iconName: 'Car',
      },
      {
        title: 'Tier 1/2 Cross-Border Sub-Assembly',
        badge: 'Multi-Country Consolidation',
        description:
          'Dedicated consolidation hubs across Asia and Europe grouping CKD (Completely Knocked Down) and SKD units under single customs declarations.',
        highlights: ['CKD/SKD specialized stuffing', 'Anti-corrosion VCI packaging', 'Consolidated Bill of Entry filing'],
        iconName: 'Layers',
      },
      {
        title: 'Urgent Tooling & Critical Air Charters',
        badge: 'Priority 1 Expedited',
        description:
          'Emergency hand-carry on-board courier (OBC) and dedicated aircraft charters to prevent million-dollar assembly line downtime.',
        highlights: ['Fast-track ramp transfers', 'Direct tarmac customs clearance', 'GPS real-time beacon tracking'],
        iconName: 'Clock',
      },
    ],
    challengesBadge: 'Automotive Risk Governance',
    challengesTitle: 'Overcoming Automotive Manufacturing Vulnerabilities',
    challengesSubtitle:
      'How SkyLink eliminates supply bottlenecks and plant idle risks across global automotive corridors.',
    challengesAndSolutions: [
      {
        challenge:
          'Assembly plant stoppage costing upwards of $20,000 per minute due to customs hold on critical microchips or stamping dies.',
        solution:
          'Advanced green-channel pre-clearance with AEO-certified preferential routing and 24/7 dedicated automotive customs liaison desks.',
      },
      {
        challenge:
          'Transit vibration and rust damage to high-precision machined engine blocks, transmissions, and painted exterior panels.',
        solution:
          'Moisture-controlled desiccants, shock-damped heavy palletization, and VCI-shielded atmospheric crating meeting OEM packaging standards.',
      },
      {
        challenge:
          'Complex inverted duty structures and tariff categorization under FTA / CEPA agreements across multi-tier auto component lines.',
        solution:
          'In-house automotive tariff engineering team ensuring exact HS code classification, RoDTEP claims, and optimized concessional duty benefits.',
      },
    ],
    complianceBadge: 'Automotive Commodities',
    complianceTitle: 'Handled Commodities & Technical Standards',
    complianceSubtitle: 'Rigorous compliance standards applied to Tier-1, OEM, and aftermarket shipments.',
    commodities: [
      {
        commodity: 'Engine Blocks, Transmissions & Powertrains',
        hsCodeRange: 'HS 8407 - 8409',
        keyRequirements: 'Zero-shock transit, dry nitrogen purge, certified rigging',
        skylinkStandard: 'Reinforced flat racks, calibrated lashing, 3-axis shock loggers',
      },
      {
        commodity: 'Automotive Microchips & ECU Modules',
        hsCodeRange: 'HS 8537 - 8542',
        keyRequirements: 'ESD anti-static control, CRT temperature control (15°-25°C)',
        skylinkStandard: 'Anti-static shielded packing, temperature-monitored air freight',
      },
      {
        commodity: 'EV Lithium-Ion Battery Packs & Modules',
        hsCodeRange: 'HS 8507',
        keyRequirements: 'UN 3480 / Class 9 Hazmat compliance, state-of-charge limits',
        skylinkStandard: 'Dangerous goods certified containers, thermal runaway insulation',
      },
      {
        commodity: 'Stamping Dies, Molds & Assembly Tooling',
        hsCodeRange: 'HS 8207 / 8480',
        keyRequirements: 'Over-dimensional cargo (ODC), immediate crane offloading',
        skylinkStandard: 'Low-bed hydraulic axles, pre-surveyed route clearance, 24h clearance',
      },
    ],
    ctaTitle: 'Synchronize Your Automotive Supply Line Today',
    ctaDescription:
      'Connect with our automotive logistics desk to design zero-stoppage JIT transport routes and optimized customs clearance protocols.',
    seoTitle: 'Automotive & Auto Components Logistics | SkyLink Global Services',
    seoDescription:
      'JIT line-side delivery, CKD/SKD automotive component forwarding, IATF 16949 compliance, and expedited customs clearance for global OEMs.',
  },

  'engineering-manufacturing': {
    id: 'engineering-manufacturing',
    title: 'Engineering & Heavy Manufacturing',
    badge: 'Heavy Engineering & Machinery',
    heroTitle: 'Project Cargo & Heavy Machinery Engineering Logistics',
    heroDescription:
      'Turnkey factory relocation, Over-Dimensional Cargo (ODC) multimodal shipping, and EPCG duty exemption management for capital goods and industrial infrastructure.',
    telemetryProtocol: 'EPCG & Heavy Lift Survey Protocol Active',
    heroImage:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Heavy engineering plant manufacturing machinery and industrial crane lifting',
    metrics: [
      { label: 'Heavy Lift Capacity', value: '500+ MT', subtext: 'Hydraulic multi-axle modular trailers' },
      { label: 'EPCG Exemption Rate', value: '100%', subtext: 'Zero-duty capital machinery customs import' },
      { label: 'Route Feasibility Surveys', value: 'Verified', subtext: 'Complete bridge load and civil sweep' },
    ],
    capabilitiesBadge: 'Engineering Precision',
    capabilitiesTitle: 'Project Cargo & Plant Machinery Capabilities',
    capabilitiesSubtitle:
      'Engineered lifting, ocean chartering, and regulatory compliance for mega-tonnage equipment.',
    capabilities: [
      {
        title: 'Breakbulk & Heavy-Lift Charters',
        badge: 'Oversized Marine Cargo',
        description:
          'Dedicated gear-fitted vessel chartering, hatch planning, and naval architecture calculations for oversized industrial components.',
        highlights: ['Naval stability analysis', 'Specialized marine rigging', 'Stevedoring supervisor on-dock'],
        iconName: 'Factory',
      },
      {
        title: 'Turnkey Factory Relocation',
        badge: 'Plant Decommissioning',
        description:
          'End-to-end dismantling, serial-number tagging, containerization, customs bonded transit, and on-site re-assembly positioning.',
        highlights: ['Itemized asset tagging', 'MOOWR bonded warehouse transit', 'Foundation-level delivery'],
        iconName: 'Layers',
      },
      {
        title: 'EPCG & MOOWR Customs Scheme Management',
        badge: 'Capital Duty Exemption',
        description:
          'Complete licensing assistance for Export Promotion Capital Goods (EPCG) zero-duty clearance and MOOWR customs duty deferment.',
        highlights: ['Bond execution & reconciliation', 'Chartered Engineer certificates', 'Installation audit compliance'],
        iconName: 'ShieldCheck',
      },
    ],
    challengesBadge: 'Engineering Risk Governance',
    challengesTitle: 'Mitigating Heavy Industrial Shipping Risks',
    challengesSubtitle:
      'How SkyLink neutralizes civil infrastructure bottlenecks, transit stress, and customs valuation delays.',
    challengesAndSolutions: [
      {
        challenge:
          'En-route bridge weight limits, overhead high-tension cables, and toll plaza clearances stalling multi-axle heavy trailers.',
        solution:
          'Physical route survey using 3D laser-sweep vehicles, bridge structural reinforcement permits, and coordinated state transit clearances.',
      },
      {
        challenge:
          'Customs valuation queries and delayed clearances for second-hand imported capital machinery and project equipment.',
        solution:
          'Accredited Chartered Engineer inspection pre-clearance certificates, verified depreciation calculations, and swift SVB approvals.',
      },
      {
        challenge:
          'Corrosive saltwater exposure and structural stress during deep-sea breakbulk ocean voyages.',
        solution:
          'Industrial shrink-wrapping with heavy desiccant matrices, welded seafastening stoppers, and calibrated dunnage load distribution.',
      },
    ],
    complianceBadge: 'Heavy Engineering Specifications',
    complianceTitle: 'Handled Industrial Commodities & Machinery',
    complianceSubtitle: 'Turnkey engineering transport standards for capital goods and infrastructure projects.',
    commodities: [
      {
        commodity: 'CNC Machining Centers & Lathes',
        hsCodeRange: 'HS 8456 - 8460',
        keyRequirements: 'Shock damping, zero condensation, precision center-of-gravity lashing',
        skylinkStandard: 'Vacuum-sealed foil barrier packaging, calibrated anchor turnbuckles',
      },
      {
        commodity: 'Turbines, Boilers & Pressure Vessels',
        hsCodeRange: 'HS 8402 - 8406',
        keyRequirements: 'Over-dimensional breakbulk (ODC), hydraulic multi-axle transit',
        skylinkStandard: 'Hydraulic trailer configurations, bridge bypass route engineering',
      },
      {
        commodity: 'Hydraulic Presses & Heavy Stamping Mills',
        hsCodeRange: 'HS 8462',
        keyRequirements: 'Up to 250 MT single-piece load, floor weight dispersion',
        skylinkStandard: 'Multi-axle pullers, dual-crane tandem lift protocol, structural dunnage',
      },
      {
        commodity: 'Complete Industrial Process Plants (Turnkey)',
        hsCodeRange: 'HS 9801 (Project Imports)',
        keyRequirements: 'EPCG concessional duty scheme, multi-shipment reconciliation',
        skylinkStandard: 'Single project import contract registration, unified customs clearance',
      },
    ],
    ctaTitle: 'Plan Your Heavy Industrial Cargo Project',
    ctaDescription:
      'Speak to our project cargo engineers for route feasibility surveys, breakbulk vessel bookings, and EPCG statutory exemptions.',
    seoTitle: 'Heavy Engineering & Project Cargo Logistics | SkyLink Global Services',
    seoDescription:
      'Over-Dimensional Cargo (ODC) shipping, breakbulk vessel chartering, EPCG zero-duty clearance, and turnkey factory relocation logistics.',
  },

  'electronics-electrical': {
    id: 'electronics-electrical',
    title: 'Electronics & High-Tech Electrical',
    badge: 'High-Tech & Semi-Conductor',
    heroTitle: 'Secure, Climate-Controlled High-Tech Electronics Logistics',
    heroDescription:
      'Anti-static ESD-controlled packaging, high-security bonded air corridors, and rapid BIS / WPC / EPR statutory clearance for semiconductors, consumer tech, and telecom hardware.',
    telemetryProtocol: 'ESD & Cleanroom Level 2 Protocol Active',
    heroImage:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Electronic printed circuit board motherboards and microchips in high-tech cleanroom',
    metrics: [
      { label: 'Security Track Record', value: '100% Zero-Loss', subtext: 'Armed escort & geofenced telematics' },
      { label: 'BIS Statutory Clearance', value: 'Fast-Tracked', subtext: 'Direct Bureau of Indian Standards liaison' },
      { label: 'Cleanroom Conditioning', value: 'Class 10k', subtext: 'Static-free moisture barrier protection' },
    ],
    capabilitiesBadge: 'High-Tech Integrity',
    capabilitiesTitle: 'High-Value Electronics Handling Standards',
    capabilitiesSubtitle:
      'Engineered security, electrostatic shielding, and regulatory licensing for high-value sensitive hardware.',
    capabilities: [
      {
        title: 'Anti-Static & Humidity Shielding',
        badge: 'ESD Compliant',
        description:
          'Specialized cleanroom packaging with Faraday cage anti-static bags, humidity indicator cards, and desiccant balance.',
        highlights: ['ANSI/ESD S20.20 certified handling', 'Dry pack moisture barrier', 'Non-vibrational transport'],
        iconName: 'Cpu',
      },
      {
        title: 'High-Security Bonded Corridors',
        badge: 'TAPA TSR Level 1',
        description:
          'Armored GPS-sealed container trucking, dual-driver non-stop routing, and remote biometric door locks for theft-prone shipments.',
        highlights: ['Real-time geo-fencing alarms', 'Light & door opening sensor alerts', 'Bonded airport warehouse escorts'],
        iconName: 'ShieldCheck',
      },
      {
        title: 'BIS, WPC & EPR Regulatory Liaison',
        badge: 'Zero-Hold Customs',
        description:
          'End-to-end statutory licensing management covering Compulsory Registration Scheme (CRS), Equipment Type Approval, and E-waste quotas.',
        highlights: ['BIS lab testing coordination', 'WPC ETA import license filing', 'EPR annual target credits'],
        iconName: 'CheckCircle2',
      },
    ],
    challengesBadge: 'Electronics Risk Governance',
    challengesTitle: 'Preventing Technological Supply Chain Disruptions',
    challengesSubtitle:
      'How SkyLink protects delicate electronic shipments against transit micro-fractures, moisture, and regulatory impoundment.',
    challengesAndSolutions: [
      {
        challenge:
          'Micro-cracking in sensitive silicon wafers and BGA solder joints caused by rough handling and transit shocks.',
        solution:
          'Calibrated air-ride suspension trucks, specialized molded foam dunnage, and tilt/impact smart sensor logging throughout transit.',
      },
      {
        challenge:
          'Lengthy customs testing delays and port seizures due to missing BIS CRS registration or WPC import licensing.',
        solution:
          'Pre-shipment verification of BIS marking labels, model matrix approvals, and direct customs documentation pre-entry clearance.',
      },
      {
        challenge:
          'High risk of hijack or high-value cargo theft during transit between manufacturing hubs and distribution centers.',
        solution:
          'TAPA Level 1 protocols: armed transit escorts, 24/7 geofenced operations room surveillance, and route-deviation automated vehicle kill switches.',
      },
    ],
    complianceBadge: 'Electronics Compliance',
    complianceTitle: 'Handled Electronic Categories & Technical Standards',
    complianceSubtitle: 'Precision logistics for semiconductors, telecommunications, and consumer high-tech.',
    commodities: [
      {
        commodity: 'Semiconductor Wafers & Microchips',
        hsCodeRange: 'HS 8542',
        keyRequirements: 'Class 100/1000 cleanroom, zero static, 20-24°C CRT control',
        skylinkStandard: 'Nitrogen sealed FOUP carriers, temperature dataloggers, priority tarmac load',
      },
      {
        commodity: 'Telecom Base Stations & 5G Hardware',
        hsCodeRange: 'HS 8517',
        keyRequirements: 'WPC Equipment Type Approval (ETA), import license adherence',
        skylinkStandard: 'Telecom regulatory desk clearance, shock-mounted crating, immediate dispatch',
      },
      {
        commodity: 'Lithium Battery Powered Consumer Electronics',
        hsCodeRange: 'HS 8517 / 8528',
        keyRequirements: 'Section II IATA DGR PI 966/967 adherence, UN 38.3 test summaries',
        skylinkStandard: 'Certified dangerous goods documentation, fire-retardant container liners',
      },
      {
        commodity: 'Solar Inverters & Power Conversion Units',
        hsCodeRange: 'HS 8504',
        keyRequirements: 'Heavy moisture barrier, dielectric isolation tests, BIS certification',
        skylinkStandard: 'Desiccant enriched barrier foil, AEO fast-track customs release',
      },
    ],
    ctaTitle: 'Safeguard Your High-Tech Cargo Movements',
    ctaDescription:
      'Consult our high-tech logistics specialists for anti-static packaging solutions, TAPA-certified transit security, and fast-track BIS compliance.',
    seoTitle: 'Electronics & High-Tech Logistics | SkyLink Global Services',
    seoDescription:
      'High-security air freight, anti-static ESD packaging, BIS and WPC trade compliance, and cold-chain electronics logistics.',
  },

  'textiles-apparel': {
    id: 'textiles-apparel',
    title: 'Textiles, Apparel & Garments',
    badge: 'Fashion & Global Apparel EXIM',
    heroTitle: 'Rapid Seasonal Fashion & Garment-on-Hanger (GOH) Logistics',
    heroDescription:
      'Wrinkle-free Garment-on-Hanger containerization, high-velocity seasonal air charters to European and American retail hubs, and optimized duty drawback / RoSCTL incentive maximization.',
    telemetryProtocol: 'GOH & RoSCTL Fast-Track Active',
    heroImage:
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Designer clothing racks and garment manufacturing export warehouse',
    metrics: [
      { label: 'Air Transit to EU/US', value: '48 - 72 Hrs', subtext: 'Dedicated apparel air cargo allocations' },
      { label: 'RoSCTL & Drawback', value: '100% Audit', subtext: 'Maximizing export duty incentives' },
      { label: 'GOH Container Capacity', value: '15,000+ pcs', subtext: 'Custom string and bar configurations' },
    ],
    capabilitiesBadge: 'Retail Velocity',
    capabilitiesTitle: 'End-to-End Apparel & Fabric Logistics',
    capabilitiesSubtitle:
      'Speed-to-shelf distribution models engineered to keep fast-fashion retailers ahead of seasonal demand.',
    capabilities: [
      {
        title: 'Garment-on-Hanger (GOH) Systems',
        badge: 'Store-Ready Delivery',
        description:
          'Converted ocean and air containers fitted with multi-tier bar and string systems allowing apparel to ship without pressing or folding.',
        highlights: ['Single & double tier bar configurations', 'Zero creasing / store ready', 'Anti-mildew moisture liners'],
        iconName: 'Shirt',
      },
      {
        title: 'Fast-Fashion Peak Season Charters',
        badge: 'Time-Critical Air',
        description:
          'Guaranteed space commitments and split-charter options during Autumn/Winter and Spring/Summer retail launch deadlines.',
        highlights: ['Direct-to-store hub routing', 'Priority tarmac boarding', 'Real-time carton-level tracking'],
        iconName: 'Clock',
      },
      {
        title: 'Duty Drawback & RoSCTL Advisory',
        badge: 'Export Incentive Desk',
        description:
          'Seamless management of Rebate of State and Central Taxes and Levies (RoSCTL), duty drawback filings, and Advance Authorizations.',
        highlights: ['Automated EDI drawback claim reconciliation', 'Advance Authorization closure audits', 'Zero tax leakage'],
        iconName: 'ShieldCheck',
      },
    ],
    challengesBadge: 'Textile Risk Governance',
    challengesTitle: 'Addressing Apparel Supply Chain Complexities',
    challengesSubtitle:
      'How SkyLink prevents humidity-induced mold, season-miss penalties, and customs documentation delays.',
    challengesAndSolutions: [
      {
        challenge:
          'Severe moisture, humidity bloom, and mold infestation during high-humidity ocean voyages causing retailer inventory write-offs.',
        solution:
          'Installation of container-wide high-absorption desiccant poles, breathable barrier membranes, and verified dry wood palletization.',
      },
      {
        challenge:
          'Missed retail promotional launch windows leading to heavy contractual chargebacks and markdown penalties from major department stores.',
        solution:
          'Sea-Air hybrid freight models cutting maritime transit times by 50% through Dubai/Colombo hubs at a fraction of pure airfreight cost.',
      },
      {
        challenge:
          'Complex rules-of-origin documentation for duty-free preferential tariff access under FTAs (e.g., India-UAE CEPA, India-Australia ECTA).',
        solution:
          'Dedicated export compliance desk managing digitized Certificate of Origin (e-CoO) issuances and origin-criterion compliance.',
      },
    ],
    complianceBadge: 'Textiles & Materials',
    complianceTitle: 'Handled Fabric & Garment Classifications',
    complianceSubtitle: 'Certified export packaging and classification standards for fabrics, yarns, and ready-made garments.',
    commodities: [
      {
        commodity: 'Ready-Made Garments (RMG) - Hanger Packed',
        hsCodeRange: 'HS 6101 - 6217',
        keyRequirements: 'Wrinkle-free GOH hanging, retail barcode segregation',
        skylinkStandard: 'Customized bar/string GOH conversion kits, sealed polybag protection',
      },
      {
        commodity: 'Raw Cotton, Greige Fabrics & Yarn',
        hsCodeRange: 'HS 5201 - 5208',
        keyRequirements: 'Moisture ingress prevention, fire-safe stowage, bale integrity',
        skylinkStandard: 'Dessicant-shielded dry containers, certified phytosanitary inspection',
      },
      {
        commodity: 'Technical Textiles & Protective Workwear',
        hsCodeRange: 'HS 5903 / 6210',
        keyRequirements: 'Flame-retardant certification, OEKO-TEX standard verification',
        skylinkStandard: 'Chemical spec verification, automated RoSCTL rebate filing',
      },
      {
        commodity: 'Home Furnishings, Carpets & Bedding',
        hsCodeRange: 'HS 5701 - 5705 / 9404',
        keyRequirements: 'High-density baling, water-tight packaging, pest fumigation',
        skylinkStandard: 'High-cube container volumetric optimization, ISPM-15 certified fumigation',
      },
    ],
    ctaTitle: 'Accelerate Your Apparel To Global Shelves',
    ctaDescription:
      'Contact our fashion logistics specialists for GOH ocean container bookings, seasonal air allocations, and export incentive optimization.',
    seoTitle: 'Textiles & Apparel Logistics | SkyLink Global Services',
    seoDescription:
      'Garment-on-Hanger (GOH) shipping, fashion air charters, RoSCTL and duty drawback compliance, and fast-fashion global distribution.',
  },

  'food-beverages': {
    id: 'food-beverages',
    title: 'Food & Beverages',
    badge: 'FMCG & Consumables EXIM',
    heroTitle: 'FSSAI-Compliant Food & Beverage Cold-Chain Logistics',
    heroDescription:
      'Multi-temperature reefer distribution, rapid FSSAI lab sampling liaison, and freshness preservation protocols for packaged foods, confectionery, dairy products, and beverages.',
    telemetryProtocol: 'FSSAI & HACCP Cold Protocol Active',
    heroImage:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Gourmet packaged food products and climate controlled distribution warehouse',
    metrics: [
      { label: 'FSSAI Release Speed', value: '48 Hours', subtext: 'Prioritized NABL laboratory testing' },
      { label: 'Temperature Range', value: '-25°C to +18°C', subtext: 'Multi-zone reefer container fleet' },
      { label: 'Shelf-Life Safeguard', value: 'Zero Spoilage', subtext: 'Pre-tripped reefers and continuous monitoring' },
    ],
    capabilitiesBadge: 'Freshness Assurance',
    capabilitiesTitle: 'Food Grade Supply Chain Capabilities',
    capabilitiesSubtitle:
      'HACCP-aligned logistics preserving flavor profile, nutritional integrity, and regulatory compliance.',
    capabilities: [
      {
        title: 'Multi-Temperature Reefer Freight',
        badge: 'Deep Freeze to Ambient',
        description:
          'State-of-the-art reefer units capable of maintaining precise sub-zero chocolate tempering, dairy chill, or dry ambient states.',
        highlights: ['Dual-temperature compartments', 'Pre-cooling audit certificates', '24/7 telematics power backup'],
        iconName: 'UtensilsCrossed',
      },
      {
        title: 'FSSAI Port Testing & Clearance',
        badge: 'Priority Port Lab Access',
        description:
          'Dedicated food port liaison managing Food Safety and Standards Authority of India (FSSAI) sample extraction and testing.',
        highlights: ['NABL accredited lab liaison', 'Pre-arrival document verification', 'Provisional clearance under Bond'],
        iconName: 'ShieldCheck',
      },
      {
        title: 'Shelf-Life Expiry Optimization',
        badge: 'FEFO Inventory Routing',
        description:
          'First-Expired-First-Out dispatch sequencing and green-channel port clearance to deliver products with maximum shelf validity.',
        highlights: ['Direct container-to-hub de-stuffing', 'Cold-chain cross docking', 'Date-code batch traceability'],
        iconName: 'Clock',
      },
    ],
    challengesBadge: 'Food Safety Risk Governance',
    challengesTitle: 'Preventing Spoilage & Regulatory Seizures',
    challengesSubtitle:
      'How SkyLink solves customs sampling delays, temperature spikes, and strict labeling rejections.',
    challengesAndSolutions: [
      {
        challenge:
          'Rejection of imported food shipments at sea ports due to non-compliant FSSAI labeling, nutritional panels, or shelf-life criteria.',
        solution:
          'Pre-shipment label vetting desk providing corrective over-stickering solutions at bonded warehouse facilities prior to inspection.',
      },
      {
        challenge:
          'Melting, fat bloom in chocolate, or spoilage in dairy items caused by port plug-point failures or delayed customs release.',
        solution:
          'Guaranteed reefer monitoring at port yards, clip-on diesel generator sets (gensets) during road transit, and urgent release protocol.',
      },
      {
        challenge:
          'Extended quarantine holding times for imported wines, spirits, and olive oils causing high container demurrage costs.',
        solution:
          'Pre-lodged customs entries and coordinated joint sampling visits reducing port dwell time from 10 days to under 48 hours.',
      },
    ],
    complianceBadge: 'Food & Beverage Specifications',
    complianceTitle: 'Handled Consumables & Regulatory Standards',
    complianceSubtitle: 'Strict adherence to international food safety and food grade packaging standards.',
    commodities: [
      {
        commodity: 'Confectionery, Chocolates & Cocoa Butter',
        hsCodeRange: 'HS 1806',
        keyRequirements: '+14°C to +18°C temperature control, max 55% relative humidity',
        skylinkStandard: 'Precision CRT reefer setting, anti-sweat lining, rapid airport de-vanning',
      },
      {
        commodity: 'Dairy Products, Cheeses & Butter',
        hsCodeRange: 'HS 0401 - 0406',
        keyRequirements: '+2°C to +4°C chill preservation, FSSAI sanitary import permit',
        skylinkStandard: 'Continuous IoT temperature data recorders, refrigerated cross-docking',
      },
      {
        commodity: 'Wines, Beers & Premium Spirits',
        hsCodeRange: 'HS 2203 - 2208',
        keyRequirements: 'Thermal insulation against freezing/heating, excise permit liaison',
        skylinkStandard: 'Insulated thermal foil container blankets, state excise bonded transport',
      },
      {
        commodity: 'Specialty Condiments, Sauces & Oils',
        hsCodeRange: 'HS 1509 / 2103',
        keyRequirements: 'Glass bottle break protection, FSSAI lab sampling, batch coding',
        skylinkStandard: 'Reinforced pallet wrapping, corner edge protectors, NABL expedited testing',
      },
    ],
    ctaTitle: 'Protect Your Food & Beverage Shelf-Life',
    ctaDescription:
      'Connect with our food logistics desk for temperature-controlled reefer bookings, FSSAI clearance, and bonded cold storage solutions.',
    seoTitle: 'Food & Beverage Logistics | SkyLink Global Services',
    seoDescription:
      'FSSAI customs clearance, temperature-controlled food reefer shipping, chocolate and wine logistics, and cold chain distribution.',
  },

  'agriculture-agro': {
    id: 'agriculture-agro',
    title: 'Agriculture & Agro Commodities',
    badge: 'Bulk Agro & Perishables EXIM',
    heroTitle: 'Global Agricultural Commodity Freight & APEDA Compliance',
    heroDescription:
      'Bulk grain vessel chartering, containerized pulse and spice exports, plant quarantine inspection coordination, and seamless APEDA / Phytosanitary certification for agribusiness leaders.',
    telemetryProtocol: 'APEDA & Phytosanitary Protocol Active',
    heroImage:
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Golden wheat and grain harvest agricultural commodities field',
    metrics: [
      { label: 'Bulk Vessel Charters', value: '50k+ MT', subtext: 'Handysize and Supramax chartering' },
      { label: 'Phyto Certificate Turnaround', value: 'Same Day', subtext: 'Direct plant quarantine liaison' },
      { label: 'Container Cleanliness', value: 'Food-Grade', subtext: 'Fumigated and silica-lined containers' },
    ],
    capabilitiesBadge: 'Commodity Flow',
    capabilitiesTitle: 'Agribusiness Freight Capabilities',
    capabilitiesSubtitle:
      'High-tonnage handling, multi-modal rail rakes, and statutory certification for raw agricultural exports.',
    capabilities: [
      {
        title: 'Bulk & Breakbulk Vessel Charters',
        badge: 'Chartering Desk',
        description:
          'Full and part-cargo chartering for bulk wheat, rice, corn, sugar, and soy meal with high-speed port grab discharge.',
        highlights: ['Supramax / Panamax chartering', 'Laytime & demurrage management', 'Stevedoring & draft surveys'],
        iconName: 'Sprout',
      },
      {
        title: 'Containerized Agri Freight & Liners',
        badge: 'Food-Grade Containers',
        description:
          'Heavy-duty liner bags and moisture-absorbing container blankets safeguarding containerized basmati rice, spices, and coffee beans.',
        highlights: ['Bulk dry liner installation', 'Kraft paper container lining', 'Pre-stuffing container odor wash'],
        iconName: 'Layers',
      },
      {
        title: 'APEDA, Plant Quarantine & Fumigation',
        badge: 'Statutory Liaison',
        description:
          'End-to-end processing of Phytosanitary Certificates (PSC), Methyl Bromide / Phosphine fumigation certificates, and APEDA clearance.',
        highlights: ['Certified pest management', 'Export inspection council compliance', 'Non-GMO traceability audits'],
        iconName: 'ShieldCheck',
      },
    ],
    challengesBadge: 'Agro Risk Governance',
    challengesTitle: 'Preventing Infestation & Grain Deterioration',
    challengesSubtitle:
      'How SkyLink overcomes insect infestation, sweating, and strict international phytosanitary quarantine restrictions.',
    challengesAndSolutions: [
      {
        challenge:
          'Consignment rejection at overseas destination ports due to live weevil or beetle infestation discovered inside containerized grain.',
        solution:
          'Strict pre-shipment Phosphine fumigation with calibrated degassing periods and verified phytosanitary officer clearance seals.',
      },
      {
        challenge:
          'Container sweat and condensation dripping onto grain bags during ocean voyages across differing climatic zones, causing rot.',
        solution:
          'Installation of moisture-absorbent ceiling blankets, continuous corrugated liner craft paper, and ventilated container options.',
      },
      {
        challenge:
          'Port congestion causing high demurrage on vessel charters and moisture buildup in open-berth raw sugar or grain stockpiles.',
        solution:
          'Mechanized conveyor belt loading, covered tarp barge operations, and guaranteed berthing priority agreements at major export ports.',
      },
    ],
    complianceBadge: 'Agro Commodities & Standards',
    complianceTitle: 'Handled Agricultural Export Categories',
    complianceSubtitle: 'Certified compliance for grains, spices, pulses, and oilseeds across key global export corridors.',
    commodities: [
      {
        commodity: 'Non-Basmati & Basmati Rice',
        hsCodeRange: 'HS 1006',
        keyRequirements: 'APEDA registration, maximum 12-14% moisture content, fumigation',
        skylinkStandard: 'Kraft paper lined dry containers, accredited lab moisture testing',
      },
      {
        commodity: 'Spices (Chilli, Cumin, Turmeric, Pepper)',
        hsCodeRange: 'HS 0904 - 0910',
        keyRequirements: 'Spices Board clearance, aflatoxin test limits, ethylene oxide compliance',
        skylinkStandard: 'Food-grade desiccants, lab pesticide residue verification, odor barriers',
      },
      {
        commodity: 'Oilseeds & Animal Feed Meals (Soybean, Rapeseed)',
        hsCodeRange: 'HS 1201 - 1208 / 2304',
        keyRequirements: 'Self-heating bulk safety certification, draft survey weight reports',
        skylinkStandard: 'Temperature probe monitoring, bulk carrier hold inspection certification',
      },
      {
        commodity: 'Pulses, Lentils & Beans',
        hsCodeRange: 'HS 0713',
        keyRequirements: 'Plant quarantine import permit, free from weed seeds',
        skylinkStandard: 'End-to-end phytosanitary inspection liaison, green-channel port clearance',
      },
    ],
    ctaTitle: 'Export Your Agricultural Produce With Confidence',
    ctaDescription:
      'Connect with our agribusiness trade desk for bulk vessel charter rates, containerized agro freight, and APEDA phytosanitary approvals.',
    seoTitle: 'Agriculture & Agro Commodities Logistics | SkyLink Global Services',
    seoDescription:
      'Bulk agricultural shipping, APEDA compliance, grain vessel charters, containerized spices freight, and phytosanitary certification.',
  },

  'chemicals-petrochemicals': {
    id: 'chemicals-petrochemicals',
    title: 'Chemicals & Petrochemicals',
    badge: 'Hazmat & Process Chemicals EXIM',
    heroTitle: 'Certified Dangerous Goods (DGR) & ISO Tank Logistics',
    heroDescription:
      'IMO-compliant hazmat forwarding, dedicated food-grade and chemical-grade ISO tank container fleets, and toxic substance customs clearances for chemical producers worldwide.',
    telemetryProtocol: 'IMDG Class 1-9 & ISO Tank Fleet Active',
    heroImage:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Chemical petrochemical refinery pipeline and industrial storage tanks',
    metrics: [
      { label: 'DGR Certified Team', value: 'IATA & IMO', subtext: 'Fully certified Dangerous Goods handlers' },
      { label: 'ISO Tank Fleet', value: 'Dedicated', subtext: 'T11/T14 baffle and heated tank containers' },
      { label: 'Safety Compliance', value: 'Zero Incident', subtext: 'Rigorous emergency response protocols' },
    ],
    capabilitiesBadge: 'Hazmat Precision',
    capabilitiesTitle: 'Specialized Chemical Handling Standards',
    capabilitiesSubtitle:
      'Rigorous adherence to international maritime dangerous goods codes and chemical containment safety.',
    capabilities: [
      {
        title: 'Dedicated ISO Tank Operations',
        badge: 'Bulk Liquid Logistics',
        description:
          'Modern fleet of T11, T14, and steam-heated ISO tank containers for high-purity liquid chemicals, acids, solvents, and specialty resins.',
        highlights: ['Steam heating & electrical trace heating', 'Periodic 2.5 & 5 year hydro-testing', 'Depot cleaning validation certificates'],
        iconName: 'FlaskConical',
      },
      {
        title: 'Hazmat IMO Classes 2, 3, 4, 5, 6, 8 & 9',
        badge: 'Certified DGR Forwarding',
        description:
          'Expert packaging, UN-spec labeling, segregation checking, and carrier dangerous goods approvals for flammable, toxic, and corrosive cargoes.',
        highlights: ['Dangerous Goods Declaration (DGD) issuance', 'IMDG segregation table audit', 'Port emergency response filing'],
        iconName: 'ShieldCheck',
      },
      {
        title: 'Regulatory & Toxic Substance Liaison',
        badge: 'Zero-Delay Compliance',
        description:
          'Customs clearance under Petroleum and Explosives Safety Organization (PESO), Chemical Weapons Convention (CWC), and REACH guidelines.',
        highlights: ['PESO license documentation', 'Material Safety Data Sheet (MSDS) validation', 'Bonded chemical warehouse storage'],
        iconName: 'CheckCircle2',
      },
    ],
    challengesBadge: 'Chemical Risk Governance',
    challengesTitle: 'Preventing Hazmat Leaks & Regulatory Impoundment',
    challengesSubtitle:
      'How SkyLink guarantees environmental containment, proper stowage compatibility, and smooth port acceptance.',
    challengesAndSolutions: [
      {
        challenge:
          'Shipping lines rejecting cargo bookings due to incorrect MSDS interpretation, conflicting IMO hazard classes, or uncertified packaging.',
        solution:
          'In-house DGR master specialists verify MSDS section 14 parameters, perform UN specification drum checks, and secure prior shipping line DG acceptance.',
      },
      {
        challenge:
          'Solidification or crystallization of viscosity-sensitive chemicals like phenol, fatty acids, or paraffin during cold winter transit.',
        solution:
          'Deployment of steam-heatable ISO tanks and pre-delivery heating at terminal depots to maintain optimum discharge viscosity.',
      },
      {
        challenge:
          'Stringent port restrictions and restricted anchorage waiting times for hazardous cargo containers leading to severe penalty demurrage.',
        solution:
          'Direct-to-hook truck-to-ship loading coordination eliminating intermediate port yard dwell and avoiding hazardous storage surcharges.',
      },
    ],
    complianceBadge: 'Chemical Classifications',
    complianceTitle: 'Handled Chemical Categories & Standards',
    complianceSubtitle: 'Strict safety standards applied to hazardous, non-hazardous, and petrochemical products.',
    commodities: [
      {
        commodity: 'Solvents, Thinners & Flammable Liquids',
        hsCodeRange: 'HS 2901 - 2915 (Class 3)',
        keyRequirements: 'Flashpoint documentation, UN certified steel drums, spark-free handling',
        skylinkStandard: 'Flammable cargo placards, grounding straps, carrier hazmat slot reservation',
      },
      {
        commodity: 'Corrosive Acids & Alkalis',
        hsCodeRange: 'HS 2806 - 2815 (Class 8)',
        keyRequirements: 'Acid-resistant ISO tank lining, emergency neutralization protocol',
        skylinkStandard: 'PTFE lined valves, secondary containment bunds, hazmat certified drivers',
      },
      {
        commodity: 'Specialty Polymers, Resins & Pigments',
        hsCodeRange: 'HS 3901 - 3914 / 3204',
        keyRequirements: 'Moisture barrier liner, non-contamination packaging, REACH compliance',
        skylinkStandard: 'Bulk container sea-bulk liners, pneumatic discharge coordination',
      },
      {
        commodity: 'Agrochemical Active Ingredients & Pesticides',
        hsCodeRange: 'HS 3808 (Class 6.1)',
        keyRequirements: 'Central Insecticides Board (CIB) registration, toxic hazard packaging',
        skylinkStandard: 'CIB import permit clearance, sealed tamper-evident GPS transit monitoring',
      },
    ],
    ctaTitle: 'Safely Ship Your Chemical & Hazmat Cargo',
    ctaDescription:
      'Consult our certified dangerous goods team for ISO tank allocations, IMDG classification reviews, and expedited port clearances.',
    seoTitle: 'Chemicals & Petrochemicals Logistics | SkyLink Global Services',
    seoDescription:
      'Hazmat freight forwarding, ISO tank container operations, IMDG Dangerous Goods compliance, and chemical customs clearance.',
  },

  'retail-consumer-goods': {
    id: 'retail-consumer-goods',
    title: 'Retail & Fast-Moving Consumer Goods',
    badge: 'FMCG & Retail Logistics',
    heroTitle: 'High-Velocity Multi-Vendor Consolidation & Retail Fulfillment',
    heroDescription:
      'End-to-end LCL/FCL ocean consolidation, cross-dock barcode labeling, bonded warehousing, and scheduled line-haul replenishment for global retail chains.',
    telemetryProtocol: 'EDI & Carton-Level Barcode Tracking Active',
    heroImage:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Modern automated retail distribution warehouse with stacked cargo pallets',
    metrics: [
      { label: 'Consolidation Hubs', value: 'Global', subtext: 'Key ports across Asia, Europe, and Middle East' },
      { label: 'Order Picking Accuracy', value: '99.9%', subtext: 'Automated barcode scanner validation' },
      { label: 'Port-to-DC Velocity', value: '24 - 48 Hrs', subtext: 'Rapid de-stuffing and cross-dock dispatch' },
    ],
    capabilitiesBadge: 'Omnichannel Precision',
    capabilitiesTitle: 'Retail Distribution Capabilities',
    capabilitiesSubtitle:
      'Agile supply chain architectures built to reduce inventory holding costs and prevent out-of-stock retail events.',
    capabilities: [
      {
        title: 'Multi-Vendor Buyer’s Consolidation',
        badge: 'Cost Optimization',
        description:
          'Gathering shipments from dozens of disparate factories into optimized full-container loads (FCL), drastically minimizing ocean freight expenses.',
        highlights: ['PO management & factory tracking', 'Volumetric container stuffing optimization', 'Single consolidated shipping invoice'],
        iconName: 'ShoppingBag',
      },
      {
        title: 'Cross-Docking & Value-Added Services',
        badge: 'Zero Storage Dwell',
        description:
          'Direct transfer of inbound cargo from ocean containers to outbound domestic trucks with palletization, ticketing, and store-ready kitting.',
        highlights: ['Price stickering & retail labeling', 'Security tagging & shrink wrapping', 'Automated sortation by retail zone'],
        iconName: 'Layers',
      },
      {
        title: 'Bonded Warehouse Distribution',
        badge: 'Duty Deferment',
        description:
          'Duty-deferred storage at bonded public warehouses, enabling payment of customs duty only when stock is dispatched to retail stores.',
        highlights: ['Cash flow duty deferral', 'Customs bonded re-packaging', 'Partial dispatch customs clearances'],
        iconName: 'ShieldCheck',
      },
    ],
    challengesBadge: 'Retail Risk Governance',
    challengesTitle: 'Eliminating Retail Supply Chain Inefficiencies',
    challengesSubtitle:
      'How SkyLink solves vendor dispatch delays, carton mislabeling, and peak season inventory bottlenecks.',
    challengesAndSolutions: [
      {
        challenge:
          'Dozens of small suppliers delivering late to port, causing partial container shipments or missed mother vessel sailings.',
        solution:
          'Dedicated Purchase Order (PO) tracking desk actively chasing supplier manufacturing milestones and managing buffer consolidation schedules.',
      },
      {
        challenge:
          'Cartons arriving without required retailer-specific GS1-128 barcode labels, triggering severe supplier retail chargebacks.',
        solution:
          'Automated barcode verification at our port origin consolidation depots with print-and-apply correction stations prior to container stuffing.',
      },
      {
        challenge:
          'Severe warehouse bottleneck and chassis shortages at destination container freight stations (CFS) during Black Friday / Diwali peaks.',
        solution:
          'Pre-allocated contracted chassis pools, off-dock direct transfer agreements, and scheduled night delivery appointments at DC ramps.',
      },
    ],
    complianceBadge: 'Retail Categories',
    complianceTitle: 'Handled Consumer Product Verticals',
    complianceSubtitle: 'High-speed distribution standards across personal care, home goods, footwear, and consumer goods.',
    commodities: [
      {
        commodity: 'Footwear & Sporting Goods',
        hsCodeRange: 'HS 6401 - 6405 / 9506',
        keyRequirements: 'Mold prevention, carton crush resistance, size/color SKU sortation',
        skylinkStandard: 'Anti-mold chip technology, heavy-duty edge protectors, SKU audit',
      },
      {
        commodity: 'Cosmetics, Skincare & Personal Care',
        hsCodeRange: 'HS 3304 - 3307',
        keyRequirements: 'CDSCO cosmetics registration, CRT temperature control, batch integrity',
        skylinkStandard: 'CDSCO statutory import clearance, insulated containers, lot segregation',
      },
      {
        commodity: 'Household Appliances & Kitchenware',
        hsCodeRange: 'HS 7323 / 8509 / 8516',
        keyRequirements: 'BIS quality control order (QCO) compliance, drop test standards',
        skylinkStandard: 'BIS conformity certification verification, palletized air cushion packing',
      },
      {
        commodity: 'Toys, Games & Baby Products',
        hsCodeRange: 'HS 9503',
        keyRequirements: 'Mandatory BIS ISI safety mark, non-toxic lab test certificates',
        skylinkStandard: 'Pre-shipment ISI mark audit, direct port lab liaison, zero customs hold',
      },
    ],
    ctaTitle: 'Optimize Your Retail Supply Chain Velocity',
    ctaDescription:
      'Partner with our retail logistics specialists for multi-vendor buyer consolidation, cross-docking, and duty-deferred bonded fulfillment.',
    seoTitle: 'Retail & Consumer Goods Logistics | SkyLink Global Services',
    seoDescription:
      'Buyer consolidation, retail cross-docking, bonded warehouse fulfillment, and FMCG supply chain management.',
  },

  'construction-infrastructure': {
    id: 'construction-infrastructure',
    title: 'Construction & Infrastructure',
    badge: 'Civil & Infrastructure EXIM',
    heroTitle: 'Heavy Civil Infrastructure & Construction Equipment Logistics',
    heroDescription:
      'Breakbulk chartering for structural steel, heavy-haul flat rack transportation for tunnel boring machines, and direct jobsite delivery for EPC mega-projects.',
    telemetryProtocol: 'ODC Civil Route Clearance Protocol Active',
    heroImage:
      'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Major construction civil infrastructure site with heavy cranes and structural steel',
    metrics: [
      { label: 'Single Piece Load', value: 'Up to 350 MT', subtext: 'Hydraulic low-bed multi-axles' },
      { label: 'Jobsite Direct Delivery', value: '100% Direct', subtext: 'Zero intermediate transshipment' },
      { label: 'Project Import Status', value: 'Section 9801', subtext: 'Unified project customs registration' },
    ],
    capabilitiesBadge: 'Infrastructure Scale',
    capabilitiesTitle: 'Civil Mega-Project Logistics Capabilities',
    capabilitiesSubtitle:
      'Coordinating ocean charters, port stevedoring, and heavy-haul trucking directly into active construction sites.',
    capabilities: [
      {
        title: 'Breakbulk & Heavy Flat-Rack Fleet',
        badge: 'Over-Dimensional Specialized',
        description:
          'Movement of crawler cranes, excavators, piling rigs, and tunnel boring components on specialized flat racks and breakbulk holds.',
        highlights: ['40ft high-payload flat racks', 'Heavy-duty maritime lashing certified', 'On-dock direct discharge to trailer'],
        iconName: 'HardHat',
      },
      {
        title: 'Project Cargo Customs & Section 9801',
        badge: 'Concessional Tariffs',
        description:
          'Managing Project Import Scheme registration under Chapter 9801 of the Customs Tariff for reduced single-rate duty assessments.',
        highlights: ['Ministry project recommendation liaison', 'Single tariff assessment across 100+ items', 'Final plant reconciliation bonds'],
        iconName: 'ShieldCheck',
      },
      {
        title: 'Last-Mile Jobsite Delivery Coordination',
        badge: 'Active Construction Sites',
        description:
          'Navigating narrow rural roads, temporary unpaved access ways, and steep gradients to deliver heavy materials directly into crane reach.',
        highlights: ['Mobile crane offloading coordination', 'Steel plate temporary roadway placement', 'Site safety supervisor supervision'],
        iconName: 'Clock',
      },
    ],
    challengesBadge: 'Infrastructure Risk Governance',
    challengesTitle: 'Overcoming Construction Logistics Obstacles',
    challengesSubtitle:
      'How SkyLink prevents project delay penalties (LDs), site access gridlocks, and heavy equipment transit damage.',
    challengesAndSolutions: [
      {
        challenge:
          'Construction contractors facing heavy liquidated damages (LDs) when key equipment like tunnel boring cutters or bridge girders arrive late.',
        solution:
          'Dedicated project taskforce monitoring critical-path machinery with priority vessel berths and multi-driver non-stop road convoys.',
      },
      {
        challenge:
          'Road transit permits rejected by state highway authorities due to extreme trailer axle loads causing pavement damage concerns.',
        solution:
          'Deployment of hydraulic multi-axle modular trailers distributing weight to under 12 MT per axle line, compliant with MoRTH norms.',
      },
      {
        challenge:
          'Corrosion and physical deformation of pre-engineered structural steel members during ocean transit and un-sheeted port storage.',
        solution:
          'Heavy-duty industrial vapor corrosion inhibitors (VCI), waterproof tarpaulin encasement, and elevated dunnage storage at port yards.',
      },
    ],
    complianceBadge: 'Construction Materials',
    complianceTitle: 'Handled Infrastructure Categories & Machinery',
    complianceSubtitle: 'Heavy transport and customs engineering for earthmoving, structural steel, and civil machinery.',
    commodities: [
      {
        commodity: 'Earthmoving & Piling Machinery (Excavators, Cranes)',
        hsCodeRange: 'HS 8426 - 8430',
        keyRequirements: 'Ro-Ro or flat-rack stowage, boom dismantling, road movement permits',
        skylinkStandard: 'Certified wire rope lashing, escort pilot cars, night road movement permissions',
      },
      {
        commodity: 'Structural Steel, Rebar & Bridge Girders',
        hsCodeRange: 'HS 7214 / 7308',
        keyRequirements: 'Breakbulk bundling, anti-rust coating, port heavy shore crane handling',
        skylinkStandard: 'Spreader beam tandem crane lifts, anti-slip dunnage, mill test certificate audit',
      },
      {
        commodity: 'Tunnel Boring Machines (TBMs) & Components',
        hsCodeRange: 'HS 8430 50',
        keyRequirements: 'Extreme dimensions (diameter > 6m), precision bearing preservation',
        skylinkStandard: 'Multi-axle hydraulic pullers, specialized low-bed modular trailers, turnkey rigging',
      },
      {
        commodity: 'Pre-Cast Concrete Elements & Pipe Culverts',
        hsCodeRange: 'HS 6810',
        keyRequirements: 'Vibration-free transit, crack prevention, synchronized site delivery',
        skylinkStandard: 'Padded timber chocking, air-cushioned transport, direct offload to trench',
      },
    ],
    ctaTitle: 'Mobilize Your Infrastructure Project',
    ctaDescription:
      'Contact our project cargo specialists for hydraulic trailer planning, breakbulk vessel quotes, and Chapter 9801 customs registration.',
    seoTitle: 'Construction & Infrastructure Logistics | SkyLink Global Services',
    seoDescription:
      'Project cargo logistics, Over-Dimensional Cargo (ODC) transport, construction machinery shipping, and Section 9801 customs clearance.',
  },

  'renewable-energy': {
    id: 'renewable-energy',
    title: 'Renewable Energy & Clean Tech',
    badge: 'Solar, Wind & Clean Energy EXIM',
    heroTitle: 'Turnkey Solar PV & Wind Power Infrastructure Logistics',
    heroDescription:
      'Dedicated ocean chartering for ultra-long wind turbine blades, high-cube container flows for photovoltaic solar modules, and concessional ALMM / BCD customs duty optimization.',
    telemetryProtocol: 'Clean Energy Fast-Track Protocol Active',
    heroImage:
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Large scale solar farm photovoltaic panels under blue sky with wind turbines',
    metrics: [
      { label: 'Solar Capacity Moved', value: '2.5+ GW', subtext: 'Modules and inverters handled' },
      { label: 'Wind Blade Length', value: 'Up to 85m', subtext: 'Specialized steerable blade trailers' },
      { label: 'ALMM / BCD Clearance', value: 'Zero-Hold', subtext: 'Approved List of Module Manufacturers audit' },
    ],
    capabilitiesBadge: 'Clean Energy Execution',
    capabilitiesTitle: 'Renewable Energy Supply Chain Capabilities',
    capabilitiesSubtitle:
      'Specialized engineering and policy compliance tailored to the high-velocity requirements of mega renewable parks.',
    capabilities: [
      {
        title: 'High-Volume Solar PV Module Logistics',
        badge: 'Massive Container Flows',
        description:
          'Managing thousands of 40ft High-Cube container arrivals per project with prioritized port terminal discharge and off-dock staging.',
        highlights: ['Vertical pallet vibration mitigation', 'Off-dock dedicated staging yard', 'Synchronized multi-truck site convoys'],
        iconName: 'Sun',
      },
      {
        title: 'Wind Turbine Generator (WTG) Transport',
        badge: 'Extreme ODC Haulage',
        description:
          'Transporting 70m to 85m blades, nacelles, and tower sections using specialized extendable trailers with hydraulic steerable dollies.',
        highlights: ['Extendable triple-telescopic trailers', 'Hydraulic blade lifters for tight mountain bends', 'Complete civil route clearance'],
        iconName: 'Layers',
      },
      {
        title: 'ALMM, BCD & Concessional Customs Advisory',
        badge: 'Regulatory Mastery',
        description:
          'Navigating Basic Customs Duty (BCD) exemptions, ALMM certification verification, and MNRE project import concessions.',
        highlights: ['MNRE project certificate liaison', 'Advance BCD duty optimization', 'Bonded warehouse project staging'],
        iconName: 'ShieldCheck',
      },
    ],
    challengesBadge: 'Renewable Risk Governance',
    challengesTitle: 'Preventing Micro-Cracking & Extreme Haulage Hurdles',
    challengesSubtitle:
      'How SkyLink neutralizes hidden cell micro-fractures, remote site bottlenecks, and changing duty regulations.',
    challengesAndSolutions: [
      {
        challenge:
          'Micro-cracking in photovoltaic cells caused by rough transit vibration, remaining invisible until on-site electroluminescence (EL) testing.',
        solution:
          'Rigid vertical crate packing, strict corner reinforcement, and shock-absorbent container lashing with continuous 3-axis G-force monitors.',
      },
      {
        challenge:
          'Turbine blades exceeding 75 meters unable to negotiate tight roundabout curves and sharp mountain turns leading to remote wind farms.',
        solution:
          'Deployment of hydraulic blade adapters that lift the blade up to 60 degrees in the air, clearing trees, electrical posts, and rock faces.',
      },
      {
        challenge:
          'Sudden tariff hikes or regulatory changes in Basic Customs Duty (BCD) and safeguard duty causing severe cash-flow crunches.',
        solution:
          'Bonded warehouse storage under Section 65 MOOWR scheme, deferring duty payments until the precise week modules are installed on site.',
      },
    ],
    complianceBadge: 'Clean Energy Components',
    complianceTitle: 'Handled Renewable Hardware & Specifications',
    complianceSubtitle: 'Handling standards for Tier-1 solar modules, wind generators, and battery energy storage systems.',
    commodities: [
      {
        commodity: 'Bifacial Solar PV Modules',
        hsCodeRange: 'HS 8541 43',
        keyRequirements: 'ALMM enlistment, zero micro-cracks, vertical crate stability',
        skylinkStandard: 'Pre-shipment EL test verification, vertical stowage kits, G-force telemetry',
      },
      {
        commodity: 'Wind Turbine Blades, Nacelles & Towers',
        hsCodeRange: 'HS 8412 / 8502',
        keyRequirements: 'Lengths up to 85m, weights up to 100 MT, specialized cradle fixtures',
        skylinkStandard: 'Extendable steerable trailers, customized blade cradles, escort pilot convoys',
      },
      {
        commodity: 'Utility-Scale Solar Central Inverters',
        hsCodeRange: 'HS 8504 40',
        keyRequirements: 'Weatherproof containerization, anti-condensation desiccant, crane rigging',
        skylinkStandard: 'Shock-mounted container transport, moisture-free nitrogen fill, immediate site offload',
      },
      {
        commodity: 'Battery Energy Storage Systems (BESS)',
        hsCodeRange: 'HS 8507 60',
        keyRequirements: 'Class 9 Hazmat, integrated cooling system validation, fire suppression',
        skylinkStandard: 'IMDG dangerous goods shipping, thermal management audits, site foundation placement',
      },
    ],
    ctaTitle: 'Energize Your Clean Tech Project Logistics',
    ctaDescription:
      'Consult our renewable energy logistics team for high-cube solar module allocations, wind blade route engineering, and BCD duty deferment.',
    seoTitle: 'Renewable Energy & Clean Tech Logistics | SkyLink Global Services',
    seoDescription:
      'Solar PV module ocean freight, wind turbine blade heavy-haul transport, ALMM customs clearance, and BESS energy storage logistics.',
  },

  'mining-metals': {
    id: 'mining-metals',
    title: 'Mining & Metals',
    badge: 'Bulk Minerals & Heavy Metals EXIM',
    heroTitle: 'Heavy Mineral Ore Freight & Specialized Steel Coil Stowage',
    heroDescription:
      'High-tonnage Supramax/Panamax chartering for raw mineral ores, zero-damage coil-well containerization for automotive-grade steel coils, and heavy port handling equipment management.',
    telemetryProtocol: 'Steel Coil Lashing & Bulk Draft Survey Active',
    heroImage:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Industrial steel manufacturing mill and metal coils storage yard',
    metrics: [
      { label: 'Bulk Mineral Tonnage', value: '1.2M+ MT', subtext: 'Annual dry bulk freight handled' },
      { label: 'Steel Coil Safety', value: 'Zero-Shift', subtext: 'Certified timber chocking and coil wells' },
      { label: 'Port Turnaround Time', value: '< 24 Hours', subtext: 'Mechanized conveyor and grab offloading' },
    ],
    capabilitiesBadge: 'Heavy Metal Flow',
    capabilitiesTitle: 'Bulk Minerals & Metals Handling Capabilities',
    capabilitiesSubtitle:
      'High-tonnage ocean charters and specialized container stowage engineering built to withstand extreme weight densities.',
    capabilities: [
      {
        title: 'Charter Vessel Bulk Dry Freight',
        badge: 'Handy / Supramax / Panamax',
        description:
          'Chartering full vessels for iron ore, bauxite, coal, and mineral sands with guaranteed load/discharge laycan management.',
        highlights: ['IMSBC code liquefaction test audit', 'Draft survey weight certification', 'Stevedoring & grab operations'],
        iconName: 'Pickaxe',
      },
      {
        title: 'Steel Coil Specialized Containerization',
        badge: 'Coil-Well Engineered',
        description:
          'Stowing high-density steel coils (up to 28 MT per coil) in reinforced containers fitted with specialized steel saddles and heavy timber chocking.',
        highlights: ['Engineered floor weight dispersion', 'Certified steel chain lashing', 'Moisture-absorbent barrier wraps'],
        iconName: 'Layers',
      },
      {
        title: 'Port Handling & Heavy Stockyard Staging',
        badge: 'Deep-Water Berth Access',
        description:
          'Dedicated port stockpile yards with front-end loaders, tipper fleets, and mechanized conveyor belts ensuring rapid ship turnaround.',
        highlights: ['Mechanized barge transfer', 'Customs bonded open yard storage', 'Moisture and contamination barriers'],
        iconName: 'HardHat',
      },
    ],
    challengesBadge: 'Mining & Metals Risk Governance',
    challengesTitle: 'Preventing Structural Failure & Cargo Shifts',
    challengesSubtitle:
      'How SkyLink prevents catastrophic container floor collapse, moisture rust on cold-rolled steel, and mineral liquefaction.',
    challengesAndSolutions: [
      {
        challenge:
          'Single heavy steel coils puncturing container wooden flooring or shifting violently during rough sea pitching, causing ship hull damage.',
        solution:
          'Engineered weight-distribution timber skids spreading load over primary cross-members, secured with ratchet-tensioned high-tensile steel chains.',
      },
      {
        challenge:
          'Cargo liquefaction of mineral ores (e.g. nickel ore, bauxite) during maritime voyages, destabilizing the entire vessel.',
        solution:
          'Mandatory pre-loading Transportable Moisture Limit (TML) and Flow Moisture Point (FMP) laboratory testing in accordance with the IMSBC code.',
      },
      {
        challenge:
          'White rust and surface oxidation on cold-rolled galvanized steel coils caused by condensation inside humid ocean containers.',
        solution:
          'Application of specialized VCI anti-corrosion barrier film, heavy desiccants, and container inner condensation drain liners.',
      },
    ],
    complianceBadge: 'Metals & Minerals',
    complianceTitle: 'Handled Metal & Mineral Commodities',
    complianceSubtitle: 'Heavy transport standards for prime metals, industrial alloys, and bulk minerals.',
    commodities: [
      {
        commodity: 'Hot-Rolled (HR) & Cold-Rolled (CR) Steel Coils',
        hsCodeRange: 'HS 7208 - 7212',
        keyRequirements: 'Coil weight up to 28 MT, zero shifting, rust prevention',
        skylinkStandard: 'Coil-well container positioning, heavy timber wedges, certified chain lashing',
      },
      {
        commodity: 'Aluminum Ingots, Billets & Cathodes',
        hsCodeRange: 'HS 7601',
        keyRequirements: 'Bundle strapping integrity, certified scale weight slips, zero contamination',
        skylinkStandard: 'Forklift-dunnage palletization, heavy floor strapping, high-payload 20ft containers',
      },
      {
        commodity: 'Iron Ore Fines, Pellets & Bauxite (Bulk)',
        hsCodeRange: 'HS 2601 - 2606',
        keyRequirements: 'IMSBC moisture testing, draft survey weight certs, grab offload',
        skylinkStandard: 'Charter vessel hold cleanliness inspection, mechanized hopper ship loading',
      },
      {
        commodity: 'Ferro-Alloys (Ferro-Silicon, Ferro-Chrome)',
        hsCodeRange: 'HS 7202',
        keyRequirements: 'Dangerous when wet precautions (Class 4.3), waterproof container liners',
        skylinkStandard: 'Desiccant-enriched hermetic bulk bag packaging, certified gas-vented containers',
      },
    ],
    ctaTitle: 'Optimize Your Mining & Metal Tonnage Freight',
    ctaDescription:
      'Speak to our heavy bulk and steel freight specialists for vessel charter rates, coil-well container allocations, and IMSBC compliance.',
    seoTitle: 'Mining & Metals Logistics | SkyLink Global Services',
    seoDescription:
      'Bulk mineral dry cargo chartering, steel coil container transport, IMSBC compliance, and mining raw material logistics.',
  },

  ecommerce: {
    id: 'ecommerce',
    title: 'E-commerce & Cross-Border Retail',
    badge: 'Cross-Border Digital Trade EXIM',
    heroTitle: 'Ultra-Fast Cross-Border B2C/B2B E-commerce Logistics',
    heroDescription:
      'Commercial CSB-V automated express courier clearance, global fulfillment hub integration, and end-to-end reverse logistics pipelines for high-growth e-commerce brands.',
    telemetryProtocol: 'CSB-V Automated EDI API Active',
    heroImage:
      'https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Cross border e-commerce parcel fulfillment center and sorting conveyor belt',
    metrics: [
      { label: 'Global Courier Transit', value: '3 - 5 Days', subtext: 'Express door-to-door air network' },
      { label: 'CSB-V Processing', value: '< 2 Hours', subtext: 'Automated EDI customs parcel clearance' },
      { label: 'Duty Drawback on Returns', value: 'Automated', subtext: 'Simplified reverse logistics workflows' },
    ],
    capabilitiesBadge: 'Digital Speed',
    capabilitiesTitle: 'Cross-Border E-commerce Capabilities',
    capabilitiesSubtitle:
      'API-integrated customs clearance and high-speed air networks built for global digital retail platforms.',
    capabilities: [
      {
        title: 'CSB-V Express Customs Automation',
        badge: 'Export Paperless',
        description:
          'Direct API-integration with the Indian Customs EDI system for automated Courier Shipping Bill (CSB-V) generation on retail orders up to ₹10,00,000.',
        highlights: ['Instant GST invoice integration', 'Automated eBRC certificate generation', 'Full eligibility for export incentives'],
        iconName: 'ShoppingCart',
      },
      {
        title: 'Global Fulfillment & Bonded Hubs',
        badge: 'FBA & 3PL Integration',
        description:
          'Staging inventory in bonded fulfillment centers in the US, Europe, UAE, and Southeast Asia for same-day local last-mile dispatch.',
        highlights: ['Amazon FBA prep & labeling', 'Multi-channel inventory synchronization', 'Section 321 US de-minimis duty-free clearance'],
        iconName: 'Layers',
      },
      {
        title: 'Hassle-Free Cross-Border Returns (RTO)',
        badge: 'Reverse Logistics',
        description:
          'Seamless returns processing enabling returned overseas customer orders to re-enter India without paying punitive import duties.',
        highlights: ['Automated identity matching of re-imported goods', 'Condition inspection & re-stocking', 'Zero double-taxation on returns'],
        iconName: 'ShieldCheck',
      },
    ],
    challengesBadge: 'E-commerce Risk Governance',
    challengesTitle: 'Overcoming Cross-Border E-commerce Hurdles',
    challengesSubtitle:
      'How SkyLink eliminates shipping bottlenecks, parcel customs seizures, and high return shipping friction.',
    challengesAndSolutions: [
      {
        challenge:
          'Individual consumer parcels held up at international customs due to missing HS codes, value discrepancies, or unclear product descriptions.',
        solution:
          'AI-powered automated HS code classification and invoice validation at checkout, ensuring 100% first-time customs clearance.',
      },
      {
        challenge:
          'Exorbitant air courier charges eating entire profit margins on low-to-medium value direct-to-consumer (D2C) shipments.',
        solution:
          'Direct line-haul consolidation: bulk shipping parcels via commercial airfreight with local postal injection at destination hubs.',
      },
      {
        challenge:
          'Returned customer goods (RTO) trapped in Indian customs facing high import duties as if they were brand new foreign imports.',
        solution:
          'Automated re-import customs filing linking the original CSB-V export tracking number, securing complete duty exemption on verified returns.',
      },
    ],
    complianceBadge: 'E-commerce Shipments',
    complianceTitle: 'Handled E-commerce Categories & Compliance',
    complianceSubtitle: 'Regulatory frameworks tailored to direct-to-consumer and marketplace commerce.',
    commodities: [
      {
        commodity: 'Fashion & Handcrafted Apparel (D2C)',
        hsCodeRange: 'HS 6101 - 6217',
        keyRequirements: 'CSB-V clearance, Section 321 US entry, fast return eligibility',
        skylinkStandard: 'Polybags with tear-resistant barcodes, 3-5 day global express delivery',
      },
      {
        commodity: 'Ayurvedic & Herbal Health Supplements',
        hsCodeRange: 'HS 3004 / 2106',
        keyRequirements: 'AYUSH certification, US FDA prior notice filing, clean ingredient labeling',
        skylinkStandard: 'Prior notice automated filing, batch testing documentation, air express',
      },
      {
        commodity: 'Handmade Jewelry & Gemstones',
        hsCodeRange: 'HS 7113 - 7117',
        keyRequirements: 'Precious cargo insurance, appraisal certificates, tamper-evident seals',
        skylinkStandard: 'Armored pickup, high-value vault air transit, signature confirmation',
      },
      {
        commodity: 'Home Decor, Handicrafts & Brassware',
        hsCodeRange: 'HS 4421 / 7419',
        keyRequirements: 'ISPM-15 wooden packaging compliance, volumetric weight optimization',
        skylinkStandard: 'Volumetric consolidation, honeycomb cardboard crating, drop-tested packing',
      },
    ],
    ctaTitle: 'Scale Your Global E-commerce Sales Today',
    ctaDescription:
      'Connect with our cross-border e-commerce team for CSB-V automated customs integration, global line-haul rates, and FBA prep solutions.',
    seoTitle: 'Cross-Border E-commerce Logistics | SkyLink Global Services',
    seoDescription:
      'CSB-V courier clearance, global Amazon FBA fulfillment, international parcel express, and seamless reverse logistics for e-commerce.',
  },

  'industrial-equipment': {
    id: 'industrial-equipment',
    title: 'Industrial Equipment & Machinery',
    badge: 'Industrial Machinery & Spares EXIM',
    heroTitle: 'Industrial Machine Tool Forwarding & Duty-Deferred MOOWR Advisory',
    heroDescription:
      'Precision machine tool forwarding, 24/7 Aircraft-on-Ground (AOG) and emergency plant spare parts couriers, and MOOWR customs bonded manufacturing duty deferral.',
    telemetryProtocol: 'MOOWR & Precision Rigging Active',
    heroImage:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Industrial automated robotic arms and precision factory machinery equipment',
    metrics: [
      { label: 'Emergency Spares Dispatch', value: '< 4 Hours', subtext: 'Immediate tarmac onboarding' },
      { label: 'MOOWR Duty Deferral', value: '100% Deferral', subtext: 'Zero upfront customs duty on imported machinery' },
      { label: 'Calibration Maintenance', value: 'Zero Shock', subtext: 'Air-ride suspension equipped fleet' },
    ],
    capabilitiesBadge: 'Industrial Continuity',
    capabilitiesTitle: 'Machinery Logistics Capabilities',
    capabilitiesSubtitle:
      'Precision transport for delicate electronics-integrated machinery and high-velocity critical spare parts.',
    capabilities: [
      {
        title: 'Precision Machine Tool Handling',
        badge: 'Calibrated Equipment',
        description:
          'Transporting laser cutting machines, robotic cells, and 5-axis CNC machines with shock-cushioned bases preventing calibration loss.',
        highlights: ['Air-ride suspension transport', 'Vibration telemetry logging', 'Cleanroom uncrating and positioning'],
        iconName: 'Wrench',
      },
      {
        title: 'Critical Spare Parts & Emergency Courier',
        badge: 'Mission-Critical Speed',
        description:
          'Rapid air shipment of replacement turbines, hydraulic valves, and electrical boards to resolve plant machinery breakdowns immediately.',
        highlights: ['Hand-carry on-board couriers (OBC)', 'Dedicated next-flight-out (NFO) booking', 'Tarmac priority customs clearance'],
        iconName: 'Clock',
      },
      {
        title: 'MOOWR Scheme Implementation',
        badge: 'Customs Duty Deferment',
        description:
          'End-to-end guidance under the Manufacture and Other Operations in Warehouse Regulations (MOOWR), eliminating upfront import duties on capital machinery.',
        highlights: ['MOOWR license application & bond filing', 'Customs bonded warehouse demarcation', 'Duty exemption on exported production'],
        iconName: 'ShieldCheck',
      },
    ],
    challengesBadge: 'Machinery Risk Governance',
    challengesTitle: 'Protecting Precision Calibration & Avoiding Shutdowns',
    challengesSubtitle:
      'How SkyLink prevents optical alignment distortion, hydraulic contamination, and customs classification disputes.',
    challengesAndSolutions: [
      {
        challenge:
          'Loss of precision alignment and optical sensor damage in high-precision Japanese/German machine tools during rough ocean transit.',
        solution:
          'Custom steel skid bases, shock-damped spring mountings, and continuous impact monitoring sensors ensuring warranty compliance.',
      },
      {
        challenge:
          'Customs authorities questioning tariff classification on multi-functional industrial machines and assessing higher punitive duties.',
        solution:
          'Detailed technical write-up submissions, Section Notes analysis under WCO Harmonized System guidelines, and advance ruling filings.',
      },
      {
        challenge:
          'Critical production line shut down for days waiting for an imported hydraulic seal or control valve stuck in airport customs.',
        solution:
          'Pre-cleared green channel import under urgent repair and return provisions with 24/7 airport customs runner delivery directly to the plant gate.',
      },
    ],
    complianceBadge: 'Machinery Categories',
    complianceTitle: 'Handled Industrial Equipment & Tooling',
    complianceSubtitle: 'Rigorous engineering standards for production machinery, power tools, and plant components.',
    commodities: [
      {
        commodity: '5-Axis CNC Milling & Turning Centers',
        hsCodeRange: 'HS 8457 - 8459',
        keyRequirements: 'Shock damping, nitrogen purge, precision level positioning',
        skylinkStandard: 'Air-ride flatbeds, calibrated turnbuckle lashing, cleanroom tarping',
      },
      {
        commodity: 'Laser Cutting & Industrial Plasma Machines',
        hsCodeRange: 'HS 8456 11',
        keyRequirements: 'Fiber laser source vibration protection, optical mirror security',
        skylinkStandard: 'Customized foam-in-place packaging, dedicated airfreight palletizing',
      },
      {
        commodity: 'Hydraulic Pumps, Valves & Cylinders',
        hsCodeRange: 'HS 8412 / 8413',
        keyRequirements: 'Anti-corrosion fluid fill, sealed port plugs, shock-proof boxing',
        skylinkStandard: 'Heavy-duty wooden box crating, desiccants, urgent courier fast-track',
      },
      {
        commodity: 'Plastic Injection Molding Machines',
        hsCodeRange: 'HS 8477 10',
        keyRequirements: 'Over-width/height breakbulk, high tonnage (30-80 MT)',
        skylinkStandard: 'Low-bed hydraulic trailers, port mobile crane handling, route civil permits',
      },
    ],
    ctaTitle: 'Secure Your Machinery Supply Line',
    ctaDescription:
      'Consult our industrial equipment specialists for MOOWR duty deferment advice, precision machinery shipping, and urgent spares logistics.',
    seoTitle: 'Industrial Equipment & Machinery Logistics | SkyLink Global Services',
    seoDescription:
      'Machine tool freight forwarding, MOOWR duty deferral scheme, urgent plant spare parts courier, and precision machinery transport.',
  },

  other: {
    id: 'other',
    title: 'Other Specialized Industries & Bespoke Trade',
    badge: 'Custom Logistics & Niche Verticals',
    heroTitle: 'Bespoke Multi-Modal Freight & Niche Trade Advisory',
    heroDescription:
      'Tailored freight forwarding architectures, customized HS code classification, and dedicated trade liaison for unique, emerging, or non-standard commercial cargo verticals.',
    telemetryProtocol: 'Bespoke Trade Protocol Active',
    heroImage:
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Global cargo container port terminal under dramatic sunset sky',
    metrics: [
      { label: 'Custom Trade Protocols', value: '100% Tailored', subtext: 'Customized SOPs for non-standard commodities' },
      { label: 'HS Classification Accuracy', value: 'Guaranteed', subtext: 'In-house customs legal team validation' },
      { label: 'Global Corridor Reach', value: '150+ Countries', subtext: 'Comprehensive partner agency network' },
    ],
    capabilitiesBadge: 'Bespoke Architecture',
    capabilitiesTitle: 'Custom Trade Engineering Capabilities',
    capabilitiesSubtitle:
      'Solving complex cross-border logistics challenges for innovative, highly regulated, or uncommon commercial goods.',
    capabilities: [
      {
        title: 'Bespoke Route & Stowage Engineering',
        badge: 'Non-Standard Cargo',
        description:
          'Designing tailored multi-modal transport configurations combining air, sea, rail, and road for cargo with unique dimensions or handling requirements.',
        highlights: ['Hybrid Sea-Air corridor routing', 'Customized container modifications', 'Dedicated transit insurance underwriting'],
        iconName: 'Sparkles',
      },
      {
        title: 'Tariff Engineering & Classification Advisory',
        badge: 'Legal Customs Defense',
        description:
          'Deep legal and technical analysis of complex multi-part goods to determine optimum HS codes, duty concessions, and statutory documentation.',
        highlights: ['Advance Ruling applications with customs authorities', 'Exemption notification optimization', 'Anti-dumping duty mitigation'],
        iconName: 'ShieldCheck',
      },
      {
        title: 'Turnkey Regulatory Liaison',
        badge: 'Government Desk',
        description:
          'Direct coordination with specialized regulatory bodies including DGFT, Wildlife Crime Control, Legal Metrology, and Atomic Energy Regulatory Board.',
        highlights: ['SCOMET dual-use license processing', 'Legal Metrology packaged commodity compliance', 'Carnet temporary import clearance'],
        iconName: 'CheckCircle2',
      },
    ],
    challengesBadge: 'Bespoke Risk Governance',
    challengesTitle: 'Navigating Unprecedented Cross-Border Challenges',
    challengesSubtitle:
      'How SkyLink creates new logistics pathways for commodities that standard freight forwarders decline.',
    challengesAndSolutions: [
      {
        challenge:
          'Shipping lines and airlines refusing to quote or accept unique, ambiguous, or non-standard cargo types.',
        solution:
          'Direct carrier negotiations backed by comprehensive packaging engineering data, hazard risk assessments, and specialized carrier liability underwriting.',
      },
      {
        challenge:
          'Customs detention at border points due to unlisted commodity descriptions or conflicting interpretations by field officers.',
        solution:
          'Pre-filing technical dossier preparation with laboratory test reports, international precedent rulings, and physical customs advocacy.',
      },
      {
        challenge:
          'Temporary import of high-value demonstration goods or exhibition materials facing full duty taxation and complicated refund claims.',
        solution:
          'Execution of ATA Carnet documentation permitting duty-free temporary international importation with zero commercial tax exposure.',
      },
    ],
    complianceBadge: 'Bespoke Categories',
    complianceTitle: 'Representative Niche Verticals & Commodities',
    complianceSubtitle: 'Custom operational procedures engineered for emerging and non-traditional trade sectors.',
    commodities: [
      {
        commodity: 'Exhibition & Event Display Cargo',
        hsCodeRange: 'Various (Under ATA Carnet)',
        keyRequirements: 'Temporary duty-free import, zero damage, strict return timeline',
        skylinkStandard: 'ATA Carnet handling, reusable flight-cases, priority airport customs return',
      },
      {
        commodity: 'Dual-Use High-Tech Goods (SCOMET)',
        hsCodeRange: 'Various Chapters',
        keyRequirements: 'DGFT SCOMET export authorization, end-user verification audits',
        skylinkStandard: 'DGFT export licensing desk liaison, secure audited transit chains',
      },
      {
        commodity: 'Precious Fine Art & Museum Antiques',
        hsCodeRange: 'HS 9701 - 9706',
        keyRequirements: 'Climate conditioning, shock isolation, armed courier escorts',
        skylinkStandard: 'Custom museum-grade wooden crates, continuous environmental logging',
      },
      {
        commodity: 'Emerging Clean-Tech & Bio-Materials',
        hsCodeRange: 'Various Novel Classifications',
        keyRequirements: 'Advance tariff classification ruling, safe handling SDS formulation',
        skylinkStandard: 'Technical classification dossier drafting, custom containerized transport',
      },
    ],
    ctaTitle: 'Have a Unique Logistics Challenge?',
    ctaDescription:
      'Reach out to our bespoke logistics advisory team to design custom trade corridors, regulatory approvals, and specialized transport plans.',
    seoTitle: 'Bespoke Trade & Specialized Industry Logistics | SkyLink Global Services',
    seoDescription:
      'Custom freight forwarding, SCOMET licensing, ATA Carnet handling, tariff engineering, and bespoke multi-modal transport solutions.',
  },
};
