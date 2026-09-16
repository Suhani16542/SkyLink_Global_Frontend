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
    seoTitle: 'Automotive & Auto Components Logistics',
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
    seoTitle: 'Heavy Engineering & Project Cargo Logistics',
    seoDescription:
      'Over-Dimensional Cargo (ODC) shipping, breakbulk vessel chartering, EPCG zero-duty clearance, and turnkey factory relocation logistics.',
  },

  'electronics-electrical': {
    id: 'electronics-electrical',
    title: 'Electronics & High-Tech Electrical',
    badge: 'High-Tech & Semi-Conductor',
    heroTitle: 'Secure, Climate-Controlled High-Tech Electronics Logistics',
    heroDescription:
      'Anti-static ESD-controlled packaging, high-security bonded air corridors, semiconductor logistics, and rapid BIS / WPC / EPR statutory clearance for high tech logistics and electronics supply chain solutions.',
    telemetryProtocol: 'ESD & Cleanroom Level 2 Protocol Active',
    heroImage:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'High tech logistics and electronics supply chain cleanroom microchip packaging | SkyLink Global',
    metrics: [
      { label: 'Security Track Record', value: '100% Zero-Loss', subtext: 'Armed escort & geofenced telematics' },
      { label: 'BIS Statutory Clearance', value: 'Fast-Tracked', subtext: 'Direct Bureau of Indian Standards liaison' },
      { label: 'Cleanroom Conditioning', value: 'Class 10k', subtext: 'Static-free moisture barrier protection' },
    ],
    capabilitiesBadge: 'High-Tech Integrity',
    capabilitiesTitle: 'High-Value Electronics Handling Standards',
    capabilitiesSubtitle:
      'Engineered security, electrostatic shielding, and electronics logistics services for high-value sensitive hardware.',
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
      'How SkyLink delivers electronics supply chain management to protect delicate shipments against transit micro-fractures, moisture, and regulatory impoundment.',
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
      'Consult our high tech logistics specialists for electronics supply chain solutions, anti-static packaging, TAPA-certified transit security, and fast-track BIS compliance.',
    seoTitle: 'High Tech Logistics & Electronics Supply Chain Solutions',
    seoDescription:
      'SkyLink Global provides high tech logistics, electronics supply chain solutions and semiconductor logistics for secure, climate-controlled global shipments.',
  },

  'textiles-apparel': {
    id: 'textiles-apparel',
    title: 'Textiles, Apparel & Garments',
    badge: 'Fashion & Global Apparel EXIM',
    heroTitle: 'Global Textile Logistics & Garment Export Shipping Solutions',
    heroDescription:
      'Specialized apparel export logistics with wrinkle-free Garment-on-Hanger (GOH) containerization, high-velocity fashion logistics solutions, and dedicated air charters to global retail hubs with optimized RoSCTL compliance.',
    telemetryProtocol: 'GOH & RoSCTL Fast-Track Active',
    heroImage:
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt:
      'Textile logistics and apparel export logistics warehouse with garment-on-hanger racks | SkyLink Global',
    metrics: [
      { label: 'Air Transit to EU/US', value: '48 - 72 Hrs', subtext: 'Dedicated apparel air cargo allocations' },
      { label: 'RoSCTL & Drawback', value: '100% Audit', subtext: 'Maximizing export duty incentives' },
      { label: 'GOH Container Capacity', value: '15,000+ pcs', subtext: 'Custom string and bar configurations' },
    ],
    capabilitiesBadge: 'Retail Velocity',
    capabilitiesTitle: 'Comprehensive Fashion Logistics Services & Supply Chain Capabilities',
    capabilitiesSubtitle:
      'Speed-to-shelf fashion retail logistics and garment logistics models engineered to keep apparel brands ahead of seasonal consumer demand.',
    capabilities: [
      {
        title: 'Garment-on-Hanger (GOH) & Apparel Logistics',
        badge: 'Store-Ready Delivery',
        description:
          'Converted ocean and air containers fitted with multi-tier bar and string systems, delivering store-ready apparel logistics without creasing or folding.',
        highlights: ['Single & double tier bar configurations', 'Zero creasing / store ready', 'Anti-mildew moisture liners'],
        iconName: 'Shirt',
      },
      {
        title: 'Fast-Fashion Logistics & Peak Charters',
        badge: 'Time-Critical Air',
        description:
          'Guaranteed space allocations and dedicated air charters supporting time-sensitive fashion logistics during Autumn/Winter and Spring/Summer retail launch windows.',
        highlights: ['Direct-to-store hub routing', 'Priority tarmac boarding', 'Real-time carton-level tracking'],
        iconName: 'Clock',
      },
      {
        title: 'Textile Freight Forwarding & RoSCTL Advisory',
        badge: 'Export Incentive Desk',
        description:
          'Seamless textile freight forwarding backed by expert management of Rebate of State and Central Taxes and Levies (RoSCTL), duty drawback filings, and export incentive compliance.',
        highlights: ['Automated EDI drawback claim reconciliation', 'Advance Authorization closure audits', 'Zero tax leakage'],
        iconName: 'ShieldCheck',
      },
    ],
    challengesBadge: 'Textile Risk Governance',
    challengesTitle: 'Overcoming Textile & Garment Logistics Challenges',
    challengesSubtitle:
      'How SkyLink provides resilient fashion logistics solutions to prevent ocean transit mold, missed retail launch windows, and customs clearance bottlenecks.',
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
    ctaTitle: 'Optimize Your Textile & Garment Export Shipping Today',
    ctaDescription:
      'Connect with our textile logistics specialists for advanced apparel logistics, Garment-on-Hanger container bookings, fashion retail logistics, and export incentive optimization.',
    seoTitle: 'Textile Logistics, Apparel & Fashion Logistics Solutions',
    seoDescription:
      'SkyLink Global delivers expert textile logistics, apparel logistics, fashion logistics services, textile freight forwarding, and garment export shipping.',
  },

  'food-beverages': {
    id: 'food-beverages',
    title: 'Food & Beverages',
    badge: 'FMCG & Consumables EXIM',
    heroTitle: 'FSSAI-Compliant Food Logistics & Cold-Chain Transportation',
    heroDescription:
      'Multi-temperature refrigerated food transportation, rapid FSSAI lab sampling liaison, and freshness preservation protocols for packaged foods, confectionery, dairy products, beverages, and food supply chain management and logistics.',
    telemetryProtocol: 'FSSAI & HACCP Cold Protocol Active',
    heroImage:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Food logistics and refrigerated food transportation in climate controlled warehouse | SkyLink Global',
    metrics: [
      { label: 'FSSAI Release Speed', value: '48 Hours', subtext: 'Prioritized NABL laboratory testing' },
      { label: 'Temperature Range', value: '-25°C to +18°C', subtext: 'Multi-zone reefer container fleet' },
      { label: 'Shelf-Life Safeguard', value: 'Zero Spoilage', subtext: 'Pre-tripped reefers and continuous monitoring' },
    ],
    capabilitiesBadge: 'Freshness Assurance',
    capabilitiesTitle: 'Food Cold Chain Logistics & Storage Capabilities',
    capabilitiesSubtitle:
      'HACCP-aligned food logistics services preserving flavor profile, nutritional integrity, and regulatory compliance.',
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
    challengesTitle: 'Preventing Spoilage in Food Cold Chain Logistics',
    challengesSubtitle:
      'How SkyLink food freight forwarders solve customs sampling delays, temperature spikes, and strict labeling rejections.',
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
    complianceTitle: 'Handled Consumables & Refrigerated Food Transportation Standards',
    complianceSubtitle: 'Strict food and beverage logistics adherence to international food safety and food grade packaging standards.',
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
    ctaTitle: 'Protect Your Food & Beverage Supply Chain Today',
    ctaDescription:
      'Connect with our food logistics companies desk for refrigerated food transportation, FSSAI clearance, and frozen food logistics solutions.',
    seoTitle: 'Food Logistics & Cold Chain Transportation Services',
    seoDescription:
      'SkyLink Global delivers reliable food logistics, food cold chain logistics, and refrigerated transportation services for global food and beverage exporters.',
  },

  'agriculture-agro': {
    id: 'agriculture-agro',
    title: 'Agriculture & Agro Commodities',
    badge: 'Bulk Agro & Perishables EXIM',
    heroTitle: 'Global Agricultural Logistics & Bulk Commodity Shipping Solutions',
    heroDescription:
      'Reliable agricultural logistics and agricultural commodity logistics, offering bulk grain vessel charters, containerized pulse and spice export handling, and seamless APEDA and phytosanitary trade compliance.',
    telemetryProtocol: 'APEDA & Phytosanitary Protocol Active',
    heroImage:
      'https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt:
      'Agricultural logistics and bulk agricultural cargo shipping for global grain exports | SkyLink Global',
    metrics: [
      { label: 'Bulk Vessel Charters', value: '50k+ MT', subtext: 'Handysize and Supramax chartering' },
      { label: 'Phyto Certificate Turnaround', value: 'Same Day', subtext: 'Direct plant quarantine liaison' },
      { label: 'Container Cleanliness', value: 'Food-Grade', subtext: 'Fumigated and silica-lined containers' },
    ],
    capabilitiesBadge: 'Commodity Flow',
    capabilitiesTitle: 'Agri Export Logistics & Agricultural Freight Forwarding Capabilities',
    capabilitiesSubtitle:
      'High-tonnage bulk agricultural cargo handling, multimodal rail transport, and agriculture supply chain logistics for export markets.',
    capabilities: [
      {
        title: 'Bulk & Breakbulk Agricultural Cargo Shipping',
        badge: 'Vessel Charter Desk',
        description:
          'Full and part-cargo chartering for bulk agricultural cargo, including wheat, rice, corn, sugar, and soy meal with high-speed port grab discharge.',
        highlights: ['Supramax / Panamax chartering', 'Laytime & demurrage management', 'Stevedoring & draft surveys'],
        iconName: 'Sprout',
      },
      {
        title: 'Containerized Agri Commodity Shipping & Liners',
        badge: 'Food-Grade Containers',
        description:
          'Specialized containerized agri commodity shipping utilizing heavy-duty dry liner bags and moisture-absorbing blankets for rice, spices, and coffee.',
        highlights: ['Bulk dry liner installation', 'Kraft paper container lining', 'Pre-stuffing container odor wash'],
        iconName: 'Layers',
      },
      {
        title: 'Agricultural Export Shipping & APEDA Compliance',
        badge: 'Statutory Liaison',
        description:
          'End-to-end agricultural export shipping support with phytosanitary inspection liaison, fumigation certificates, and APEDA clearance.',
        highlights: ['Certified pest management', 'Export inspection council compliance', 'Non-GMO traceability audits'],
        iconName: 'ShieldCheck',
      },
    ],
    challengesBadge: 'Agro Risk Governance',
    challengesTitle: 'Overcoming Agricultural Commodity Logistics Challenges',
    challengesSubtitle:
      'How SkyLink ranks among trusted agriculture logistics companies to prevent insect infestation, condensation decay, and export quarantine delays.',
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
    ctaTitle: 'Optimize Your Agricultural Export Shipping Today',
    ctaDescription:
      'Partner with our agricultural logistics specialists for reliable agricultural cargo shipping, vessel charters, containerized freight, and end-to-end agriculture supply chain logistics.',
    seoTitle: 'Agricultural Logistics & Cargo Shipping',
    seoDescription:
      'SkyLink Global provides agricultural logistics and agricultural freight forwarding, delivering expert agricultural cargo shipping and agri export logistics.',
  },

  'chemicals-petrochemicals': {
    id: 'chemicals-petrochemicals',
    title: 'Chemicals & Petrochemicals',
    badge: 'Hazmat & Process Chemicals EXIM',
    heroTitle: 'Certified Chemical Logistics & Dangerous Goods Transportation',
    heroDescription:
      'IMO-compliant hazmat logistics, dedicated ISO tank logistics fleets for bulk liquid chemical transportation, and dangerous goods shipping for chemical producers worldwide.',
    telemetryProtocol: 'IMDG Class 1-9 & ISO Tank Fleet Active',
    heroImage:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Chemical logistics and dangerous goods ISO tank container transportation | SkyLink Global',
    metrics: [
      { label: 'DGR Certified Team', value: 'IATA & IMO', subtext: 'Fully certified Dangerous Goods handlers' },
      { label: 'ISO Tank Fleet', value: 'Dedicated', subtext: 'T11/T14 baffle and heated tank containers' },
      { label: 'Safety Compliance', value: 'Zero Incident', subtext: 'Rigorous emergency response protocols' },
    ],
    capabilitiesBadge: 'Hazmat Precision',
    capabilitiesTitle: 'Chemical Logistics Services & Containment Standards',
    capabilitiesSubtitle:
      'Rigorous adherence to hazardous goods logistics codes, IMDG compliance, and bulk liquid chemical transportation safety.',
    capabilities: [
      {
        title: 'Dedicated ISO Tank Operations',
        badge: 'ISO Tank Logistics',
        description:
          'Modern fleet of T11, T14, and steam-heated ISO tank containers for high-purity liquid chemicals, acids, solvents, and specialty resins.',
        highlights: ['Steam heating & electrical trace heating', 'Periodic 2.5 & 5 year hydro-testing', 'Depot cleaning validation certificates'],
        iconName: 'FlaskConical',
      },
      {
        title: 'Hazmat IMO Classes 2, 3, 4, 5, 6, 8 & 9',
        badge: 'Dangerous Goods Shipping',
        description:
          'Expert packaging, UN-spec labeling, segregation checking, and carrier dangerous goods approvals for flammable, toxic, and corrosive cargoes.',
        highlights: ['Dangerous Goods Declaration (DGD) issuance', 'IMDG segregation table audit', 'Port emergency response filing'],
        iconName: 'ShieldCheck',
      },
      {
        title: 'Regulatory & Toxic Substance Liaison',
        badge: 'Hazardous Goods Logistics',
        description:
          'Customs clearance under Petroleum and Explosives Safety Organization (PESO), Chemical Weapons Convention (CWC), and REACH guidelines.',
        highlights: ['PESO license documentation', 'Material Safety Data Sheet (MSDS) validation', 'Bonded chemical warehouse storage'],
        iconName: 'CheckCircle2',
      },
    ],
    challengesBadge: 'Chemical Risk Governance',
    challengesTitle: 'Preventing Hazmat Leaks & Ensuring Dangerous Goods Logistics Compliance',
    challengesSubtitle:
      'How SkyLink chemical transportation services guarantee environmental containment, stowage compatibility, and smooth port acceptance.',
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
    complianceTitle: 'Handled Commodities & Chemical Transportation Standards',
    complianceSubtitle: 'Strict chemical logistics and safety standards applied to hazardous, non-hazardous, and petrochemical products.',
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
    ctaTitle: 'Safely Streamline Your Chemical Supply Chain Logistics',
    ctaDescription:
      'Consult our chemical logistics companies desk for ISO tank logistics, dangerous goods shipping approvals, and expedited port customs clearance.',
    seoTitle: 'Chemical Logistics & Dangerous Goods Transportation',
    seoDescription:
      'SkyLink Global delivers certified chemical logistics, dangerous goods transportation, and ISO tank logistics for hazardous and specialty chemical exporters.',
  },

  'retail-consumer-goods': {
    id: 'retail-consumer-goods',
    title: 'Retail & Fast-Moving Consumer Goods',
    badge: 'FMCG & Retail Logistics',
    heroTitle: 'Global Retail Logistics & High-Velocity FMCG Fulfillment Solutions',
    heroDescription:
      'End-to-end retail logistics and consumer goods logistics, providing LCL/FCL buyer consolidation, cross-dock labeling, bonded warehousing, and retail supply chain logistics for global chains.',
    telemetryProtocol: 'EDI & Carton-Level Barcode Tracking Active',
    heroImage:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt:
      'Retail logistics and FMCG supply chain warehouse with palletized consumer goods | SkyLink Global',
    metrics: [
      { label: 'Consolidation Hubs', value: 'Global', subtext: 'Key ports across Asia, Europe, and Middle East' },
      { label: 'Order Picking Accuracy', value: '99.9%', subtext: 'Automated barcode scanner validation' },
      { label: 'Port-to-DC Velocity', value: '24 - 48 Hrs', subtext: 'Rapid de-stuffing and cross-dock dispatch' },
    ],
    capabilitiesBadge: 'Omnichannel Precision',
    capabilitiesTitle: 'Retail Logistics Services & FMCG Supply Chain Capabilities',
    capabilitiesSubtitle:
      'Agile retail supply chain logistics and 3PL retail logistics architectures built to minimize inventory dwell and prevent stockouts.',
    capabilities: [
      {
        title: 'Multi-Vendor Buyer’s Consolidation & FMCG Logistics',
        badge: 'Cost Optimization',
        description:
          'Gathering shipments from multiple factories into optimized full-container loads (FCL), streamlining FMCG logistics and lowering ocean freight costs.',
        highlights: ['PO management & factory tracking', 'Volumetric container stuffing optimization', 'Single consolidated shipping invoice'],
        iconName: 'ShoppingBag',
      },
      {
        title: 'Cross-Docking & Retail Fulfillment Services',
        badge: 'Zero Storage Dwell',
        description:
          'High-velocity cross-docking and retail fulfillment services providing container de-stuffing, barcoding, security ticketing, and store-ready kitting.',
        highlights: ['Price stickering & retail labeling', 'Security tagging & shrink wrapping', 'Automated sortation by retail zone'],
        iconName: 'Layers',
      },
      {
        title: 'Bonded Warehouse & 3PL Retail Logistics Distribution',
        badge: 'Duty Deferment',
        description:
          'Duty-deferred bonded storage and specialized 3PL retail logistics enabling seamless replenishment and partial customs clearance upon store dispatch.',
        highlights: ['Cash flow duty deferral', 'Customs bonded re-packaging', 'Partial dispatch customs clearances'],
        iconName: 'ShieldCheck',
      },
    ],
    challengesBadge: 'Retail Risk Governance',
    challengesTitle: 'Overcoming Retail Supply Chain Logistics Challenges',
    challengesSubtitle:
      'How SkyLink leads among retail logistics companies and fmcg logistics companies to resolve supplier delays, barcode errors, and seasonal surges.',
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
    ctaTitle: 'Elevate Your Retail Logistics & FMCG Supply Chain Today',
    ctaDescription:
      'Partner with our retail logistics specialists for comprehensive consumer goods logistics, multi-vendor buyer consolidation, cross-docking, and retail fulfillment services.',
    seoTitle: 'Retail Logistics & FMCG Supply Chain Solutions',
    seoDescription:
      'SkyLink Global delivers end-to-end retail logistics and FMCG logistics, offering retail fulfillment services and consumer goods logistics worldwide.',
  },

  'construction-infrastructure': {
    id: 'construction-infrastructure',
    title: 'Construction & Infrastructure',
    badge: 'Civil & Infrastructure EXIM',
    heroTitle: 'Construction Equipment Logistics & Heavy Haul Transportation',
    heroDescription:
      'End-to-end construction equipment logistics, heavy haul transportation, and breakbulk shipping for structural steel, heavy machinery hauling, and oversized equipment transportation for EPC infrastructure projects.',
    telemetryProtocol: 'ODC Civil Route Clearance Protocol Active',
    heroImage:
      'https://images.unsplash.com/photo-1541888946425-d0fbb186156a?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Construction equipment logistics and heavy haul transportation for civil infrastructure projects | SkyLink Global',
    metrics: [
      { label: 'Single Piece Load', value: 'Up to 350 MT', subtext: 'Hydraulic low-bed multi-axles' },
      { label: 'Jobsite Direct Delivery', value: '100% Direct', subtext: 'Zero intermediate transshipment' },
      { label: 'Project Import Status', value: 'Section 9801', subtext: 'Unified project customs registration' },
    ],
    capabilitiesBadge: 'Infrastructure Scale',
    capabilitiesTitle: 'Project Cargo Logistics & Construction Logistics Management',
    capabilitiesSubtitle:
      'Coordinating breakbulk vessel charters, specialized heavy transport, and heavy haul trucking directly into active project sites.',
    capabilities: [
      {
        title: 'Breakbulk Logistics & Heavy Flat-Rack Fleet',
        badge: 'Oversized Equipment Transportation',
        description:
          'Movement of crawler cranes, excavators, piling rigs, and tunnel boring components via breakbulk carriers and specialized flat racks for heavy equipment shipping.',
        highlights: ['40ft high-payload flat racks', 'Heavy-duty maritime lashing certified', 'On-dock direct discharge to trailer'],
        iconName: 'HardHat',
      },
      {
        title: 'Project Cargo Transportation & Section 9801',
        badge: 'Project Cargo Logistics',
        description:
          'Managing Project Import Scheme registration under Chapter 9801 for heavy haul freight, concessional tariffs, and unified customs clearance.',
        highlights: ['Ministry project recommendation liaison', 'Single tariff assessment across 100+ items', 'Final plant reconciliation bonds'],
        iconName: 'ShieldCheck',
      },
      {
        title: 'Last-Mile Heavy Haul Logistics Coordination',
        badge: 'Equipment Transport Services',
        description:
          'Navigating specialized heavy transport routes and access ways to deliver oversized cargo transportation directly into jobsite crane reach.',
        highlights: ['Mobile crane offloading coordination', 'Steel plate temporary roadway placement', 'Site safety supervisor supervision'],
        iconName: 'Clock',
      },
    ],
    challengesBadge: 'Infrastructure Risk Governance',
    challengesTitle: 'Overcoming Heavy Equipment Logistics & Transit Obstacles',
    challengesSubtitle:
      'How SkyLink construction logistics companies prevent project delay penalties, transport gridlocks, and heavy equipment transport damage.',
    challengesAndSolutions: [
      {
        challenge:
          'Construction contractors facing liquidated damages when critical heavy machinery hauling or bridge girders arrive late.',
        solution:
          'Dedicated project cargo freight forwarders monitoring critical-path machinery with priority vessel berths and multi-axle heavy haul transport.',
      },
      {
        challenge:
          'Road transit permits rejected by highway authorities due to over dimensional freight and extreme axle loads.',
        solution:
          'Deployment of hydraulic multi-axle trailers distributing weight for specialized heavy transport, fully compliant with highway regulations.',
      },
      {
        challenge:
          'Corrosion and damage to structural steel during breakbulk shipping and un-sheeted port storage.',
        solution:
          'Industrial VCI protection, waterproof tarpaulin encasement, and elevated dunnage for break bulk cargo.',
      },
    ],
    complianceBadge: 'Construction Materials',
    complianceTitle: 'Handled Heavy Equipment & Infrastructure Categories',
    complianceSubtitle: 'Certified international heavy equipment shipping and heavy haul transportation services for earthmoving and civil machinery.',
    commodities: [
      {
        commodity: 'Earthmoving & Piling Machinery (Excavators, Cranes)',
        hsCodeRange: 'HS 8426 - 8430',
        keyRequirements: 'Ro-Ro or flat-rack stowage, boom dismantling, heavy equipment transport permits',
        skylinkStandard: 'Certified wire rope lashing, escort pilot cars, heavy haul trucking permissions',
      },
      {
        commodity: 'Structural Steel, Rebar & Bridge Girders',
        hsCodeRange: 'HS 7214 / 7308',
        keyRequirements: 'Breakbulk carriers bundling, anti-rust coating, break bulk vessel heavy shore handling',
        skylinkStandard: 'Spreader beam tandem crane lifts, anti-slip dunnage, mill test certificate audit',
      },
      {
        commodity: 'Tunnel Boring Machines (TBMs) & Components',
        hsCodeRange: 'HS 8430 50',
        keyRequirements: 'Extreme dimensions, oversized cargo transportation, precision bearing preservation',
        skylinkStandard: 'Multi-axle hydraulic pullers, specialized heavy transport modular trailers, turnkey rigging',
      },
      {
        commodity: 'Pre-Cast Concrete Elements & Pipe Culverts',
        hsCodeRange: 'HS 6810',
        keyRequirements: 'Vibration-free transit, oversize load shipping, crack prevention',
        skylinkStandard: 'Padded timber chocking, heavy haul freight protection, direct offload to trench',
      },
    ],
    ctaTitle: 'Safely Mobilize Your Construction Equipment Logistics',
    ctaDescription:
      'Connect with our project cargo freight forwarders for hydraulic trailer planning, breakbulk shipping quotes, and heavy equipment transportation services.',
    seoTitle: 'Construction Equipment Logistics & Heavy Haul Transportation',
    seoDescription:
      'SkyLink Global offers construction equipment logistics, heavy haul transportation, breakbulk shipping, and oversized cargo delivery for infrastructure projects.',
  },

  'renewable-energy': {
    id: 'renewable-energy',
    title: 'Renewable Energy & Clean Tech',
    badge: 'Solar, Wind & Clean Energy EXIM',
    heroTitle: 'Turnkey Renewable Energy Logistics & Clean Power Infrastructure',
    heroDescription:
      'End-to-end renewable energy logistics delivering specialized wind turbine transportation, high-cube solar panel logistics, and concessional ALMM / BCD customs duty optimization.',
    telemetryProtocol: 'Clean Energy Fast-Track Protocol Active',
    heroImage:
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt:
      'Renewable energy logistics for solar panel logistics and wind turbine transportation | SkyLink Global',
    metrics: [
      { label: 'Solar Capacity Moved', value: '2.5+ GW', subtext: 'Modules and inverters handled' },
      { label: 'Wind Blade Length', value: 'Up to 85m', subtext: 'Specialized steerable blade trailers' },
      { label: 'ALMM / BCD Clearance', value: 'Zero-Hold', subtext: 'Approved List of Module Manufacturers audit' },
    ],
    capabilitiesBadge: 'Clean Energy Execution',
    capabilitiesTitle: 'Renewable Energy Project Logistics & Supply Chain Capabilities',
    capabilitiesSubtitle:
      'Specialized solar logistics and wind energy logistics engineered to meet the heavy-haul requirements of utility-scale clean energy parks.',
    capabilities: [
      {
        title: 'High-Volume Solar Panel Logistics & PV Modules',
        badge: 'Massive Container Flows',
        description:
          'Dedicated solar panel logistics managing thousands of 40ft High-Cube containers per project with prioritized terminal discharge and secure staging.',
        highlights: ['Vertical pallet vibration mitigation', 'Off-dock dedicated staging yard', 'Synchronized multi-truck site convoys'],
        iconName: 'Sun',
      },
      {
        title: 'Wind Turbine Logistics & Heavy Transportation',
        badge: 'Extreme ODC Haulage',
        description:
          'Comprehensive wind turbine logistics and wind turbine transportation for 70m–85m blades, nacelles, and tower sections using steerable multi-axle trailers.',
        highlights: ['Extendable triple-telescopic trailers', 'Hydraulic blade lifters for tight mountain bends', 'Complete civil route clearance'],
        iconName: 'Layers',
      },
      {
        title: 'ALMM, BCD & Concessional Customs Advisory',
        badge: 'Regulatory Mastery',
        description:
          'Navigating Basic Customs Duty (BCD) exemptions, ALMM certification verification, and MNRE project import concessions for renewable installations.',
        highlights: ['MNRE project certificate liaison', 'Advance BCD duty optimization', 'Bonded warehouse project staging'],
        iconName: 'ShieldCheck',
      },
    ],
    challengesBadge: 'Renewable Risk Governance',
    challengesTitle: 'Overcoming Solar & Wind Farm Logistics Challenges',
    challengesSubtitle:
      'How SkyLink deploys advanced solar energy logistics and offshore wind logistics expertise to eliminate cell micro-cracks, route hurdles, and customs holds.',
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
    ctaTitle: 'Power Your Renewable Energy Logistics Projects Today',
    ctaDescription:
      'Consult our renewable energy project logistics specialists for high-volume solar logistics, wind turbine transportation, route surveys, and BCD duty optimization.',
    seoTitle: 'Renewable Energy Logistics & Solar Freight',
    seoDescription:
      'SkyLink Global delivers renewable energy logistics, solar panel logistics, and wind turbine transportation for large-scale renewable energy project logistics.',
  },

  'mining-metals': {
    id: 'mining-metals',
    title: 'Mining & Metals',
    badge: 'Bulk Minerals & Heavy Metals EXIM',
    heroTitle: 'Bulk Cargo Shipping & Specialized Steel Coil Freight',
    heroDescription:
      'End-to-end bulk cargo shipping and dry bulk cargo transportation for raw mineral ores, break bulk cargo handling, and secure steel coil shipping with specialized coil-well containerization.',
    telemetryProtocol: 'Steel Coil Lashing & Bulk Draft Survey Active',
    heroImage:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'Bulk cargo shipping and specialized steel coil freight handling | SkyLink Global',
    metrics: [
      { label: 'Bulk Mineral Tonnage', value: '1.2M+ MT', subtext: 'Annual dry bulk freight handled' },
      { label: 'Steel Coil Safety', value: 'Zero-Shift', subtext: 'Certified timber chocking and coil wells' },
      { label: 'Port Turnaround Time', value: '< 24 Hours', subtext: 'Mechanized conveyor and grab offloading' },
    ],
    capabilitiesBadge: 'Heavy Metal Flow',
    capabilitiesTitle: 'Bulk Cargo Shipping & Metals Handling Capabilities',
    capabilitiesSubtitle:
      'High-tonnage dry bulk shipping, break bulk freight, and engineered steel coil shipping solutions designed for mineral and heavy metal exporters.',
    capabilities: [
      {
        title: 'Charter Vessel Bulk Dry Freight',
        badge: 'Dry Bulk Cargo',
        description:
          'Chartering Handysize, Supramax, and Panamax vessels for dry bulk cargo including iron ore, bauxite, and mineral sands with reliable laycan execution.',
        highlights: ['IMSBC code liquefaction test audit', 'Draft survey weight certification', 'Stevedoring & grab operations'],
        iconName: 'Pickaxe',
      },
      {
        title: 'Steel Coil Shipping & Specialized Containerization',
        badge: 'Break Bulk Freight',
        description:
          'Engineered steel coil shipping and break bulk cargo handling for high-density metal coils up to 28 MT per coil with certified timber saddles and chain lashing.',
        highlights: ['Engineered floor weight dispersion', 'Certified steel chain lashing', 'Moisture-absorbent barrier wraps'],
        iconName: 'Layers',
      },
      {
        title: 'Port Handling & Heavy Stockyard Staging',
        badge: 'Break Bulk Cargo Handling',
        description:
          'Dedicated port stockpile yards, front-end loaders, tipper fleets, and mechanized conveyor belts for break bulk shipping and bulk cargo transportation.',
        highlights: ['Mechanized barge transfer', 'Customs bonded open yard storage', 'Moisture and contamination barriers'],
        iconName: 'HardHat',
      },
    ],
    challengesBadge: 'Mining & Metals Risk Governance',
    challengesTitle: 'Preventing Cargo Shifts & Break Bulk Freight Risks',
    challengesSubtitle:
      'How SkyLink bulk cargo shipping companies prevent container floor collapse, moisture rust on steel coil shipping, and mineral liquefaction.',
    challengesAndSolutions: [
      {
        challenge:
          'Single heavy steel coils puncturing container flooring or shifting during maritime transport without proper steel coil shipping cradles.',
        solution:
          'Engineered weight-distribution timber skids spreading load over primary cross-members, secured with ratchet-tensioned steel chains for break bulk cargo.',
      },
      {
        challenge:
          'Cargo liquefaction of dry bulk cargo (nickel ore, bauxite) during ocean voyages destabilizing vessel stability.',
        solution:
          'Mandatory pre-loading Transportable Moisture Limit (TML) and Flow Moisture Point (FMP) laboratory testing for bulk cargo transportation under the IMSBC code.',
      },
      {
        challenge:
          'White rust and surface oxidation on galvanized steel coils during long ocean voyages and break bulk cargo handling.',
        solution:
          'Application of specialized VCI anti-corrosion barrier film, heavy desiccants, and container inner condensation drain liners for break bulk shipping.',
      },
    ],
    complianceBadge: 'Metals & Minerals',
    complianceTitle: 'Handled Metal & Mineral Commodities',
    complianceSubtitle: 'Certified bulk cargo transportation and break bulk freight standards for prime metals, industrial alloys, and bulk minerals.',
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
    ctaTitle: 'Safely Mobilize Your Bulk Cargo Shipping & Steel Freight',
    ctaDescription:
      'Connect with our bulk cargo shipping companies desk for dry bulk shipping charter rates, break bulk freight quotes, and steel coil shipping allocations.',
    seoTitle: 'Bulk Cargo Shipping & Steel Coil Freight Services',
    seoDescription:
      'SkyLink Global provides bulk cargo shipping, dry bulk transportation, break bulk freight, mineral cargo handling, and specialized steel coil shipping solutions.',
  },

  ecommerce: {
    id: 'ecommerce',
    title: 'E-commerce & Cross-Border Retail',
    badge: 'Cross-Border Digital Trade EXIM',
    heroTitle: 'E-commerce Logistics Services & Cross-Border Shipping',
    heroDescription:
      'End-to-end ecommerce logistics services and international ecommerce shipping featuring CSB-V automated express courier clearance, global ecommerce logistics hubs, and reliable cross border shipping services for brands worldwide.',
    telemetryProtocol: 'CSB-V Automated EDI API Active',
    heroImage:
      'https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt: 'E-commerce logistics services and international parcel shipping fulfillment center | SkyLink Global',
    metrics: [
      { label: 'Global Courier Transit', value: '3 - 5 Days', subtext: 'Express door-to-door air network' },
      { label: 'CSB-V Processing', value: '< 2 Hours', subtext: 'Automated EDI customs parcel clearance' },
      { label: 'Duty Drawback on Returns', value: 'Automated', subtext: 'Simplified reverse logistics workflows' },
    ],
    capabilitiesBadge: 'Digital Speed',
    capabilitiesTitle: 'Global E-commerce Logistics Services & Fulfillment Capabilities',
    capabilitiesSubtitle:
      'API-integrated shipping services for ecommerce and cross border shipping services built for high-growth digital brands.',
    capabilities: [
      {
        title: 'CSB-V Express Customs Automation & Courier Routing',
        badge: 'International Parcel Shipping',
        description:
          'Direct API-integration with customs EDI systems for automated CSB-V generation and expedited international parcel shipping for retail orders up to ₹10,00,000.',
        highlights: ['Instant GST invoice integration', 'Automated eBRC certificate generation', 'Full eligibility for export incentives'],
        iconName: 'ShoppingCart',
      },
      {
        title: 'Global Ecommerce Logistics & Bonded Hubs',
        badge: 'Ecommerce Fulfillment Services',
        description:
          'Staging inventory in bonded ecommerce fulfillment centers in the US, Europe, UAE, and Southeast Asia for same-day ecommerce fulfillment and last-mile dispatch.',
        highlights: ['Amazon FBA prep & labeling', 'Multi-channel inventory synchronization', 'Section 321 US de-minimis duty-free clearance'],
        iconName: 'Layers',
      },
      {
        title: 'Hassle-Free Cross-Border Returns (RTO)',
        badge: 'Shipping Services for Ecommerce',
        description:
          'Seamless reverse logistics and e commerce logistics workflows enabling returned overseas customer orders to re-enter without paying double import duties.',
        highlights: ['Automated identity matching of re-imported goods', 'Condition inspection & re-stocking', 'Zero double-taxation on returns'],
        iconName: 'ShieldCheck',
      },
    ],
    challengesBadge: 'E-commerce Risk Governance',
    challengesTitle: 'Overcoming Cross Border Shipping Services Obstacles',
    challengesSubtitle:
      'How SkyLink ecommerce logistics company eliminates shipping bottlenecks, parcel customs seizures, and e commerce logistics return friction.',
    challengesAndSolutions: [
      {
        challenge:
          'Individual consumer parcels held up at international customs due to missing HS codes or non-compliant shipping services for ecommerce.',
        solution:
          'AI-powered automated HS code classification and invoice validation at checkout, ensuring fast customs clearance for ecommerce fulfillment.',
      },
      {
        challenge:
          'Exorbitant air courier charges eating entire profit margins on direct-to-consumer international ecommerce shipping orders.',
        solution:
          'Direct line-haul consolidation: bulk shipping parcels via commercial airfreight with local postal injection for cost-effective international parcel shipping.',
      },
      {
        challenge:
          'Returned customer goods (RTO) trapped in customs facing punitive import duties as if they were brand-new foreign imports.',
        solution:
          'Automated re-import customs filing linking the original CSB-V export tracking number, securing complete duty exemption on verified returns.',
      },
    ],
    complianceBadge: 'E-commerce Shipments',
    complianceTitle: 'Handled E-commerce Categories & Compliance',
    complianceSubtitle: 'Global ecommerce logistics frameworks and specialized shipping services for ecommerce across D2C and marketplace channels.',
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
    ctaTitle: 'Partner With a Trusted Ecommerce Logistics Company',
    ctaDescription:
      'Connect with our cross-border team for international ecommerce shipping rates, CSB-V automated customs integration, and scalable ecommerce fulfillment services.',
    seoTitle: 'E-commerce Logistics Services & Cross-Border Shipping',
    seoDescription:
      'SkyLink Global provides ecommerce logistics services, international shipping, cross-border parcel delivery, and global order fulfillment solutions for brands.',
  },

  'industrial-equipment': {
    id: 'industrial-equipment',
    title: 'Industrial Equipment & Machinery',
    badge: 'Industrial Machinery & Spares EXIM',
    heroTitle: 'Global Industrial Equipment Logistics & Heavy Machinery Shipping',
    heroDescription:
      'Specialized industrial equipment transportation and machinery shipping, offering 24/7 emergency plant spare parts couriers, precision rigging, and MOOWR duty-deferred customs compliance.',
    telemetryProtocol: 'MOOWR & Precision Rigging Active',
    heroImage:
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt:
      'Industrial equipment logistics and heavy machinery transportation in modern manufacturing plant | SkyLink Global',
    metrics: [
      { label: 'Emergency Spares Dispatch', value: '< 4 Hours', subtext: 'Immediate tarmac onboarding' },
      { label: 'MOOWR Duty Deferral', value: '100% Deferral', subtext: 'Zero upfront customs duty on imported machinery' },
      { label: 'Calibration Maintenance', value: 'Zero Shock', subtext: 'Air-ride suspension equipped fleet' },
    ],
    capabilitiesBadge: 'Industrial Continuity',
    capabilitiesTitle: 'Machinery Transport Services & Heavy Equipment Shipping Capabilities',
    capabilitiesSubtitle:
      'Precision machinery transport and heavy equipment transport engineered for delicate CNC systems, robotic tooling, and critical plant spares.',
    capabilities: [
      {
        title: 'Precision Industrial Equipment Transportation',
        badge: 'Calibrated Equipment',
        description:
          'Specialized industrial equipment transportation for laser cutters, robotic cells, and CNC milling tools with air-ride vibration dampening.',
        highlights: ['Air-ride suspension transport', 'Vibration telemetry logging', 'Cleanroom uncrating and positioning'],
        iconName: 'Wrench',
      },
      {
        title: 'Heavy Machinery Shipping & Urgent Spares',
        badge: 'Mission-Critical Speed',
        description:
          'Expedited heavy machinery shipping and next-flight-out couriers for replacement turbine assemblies, hydraulic pumps, and plant controllers.',
        highlights: ['Hand-carry on-board couriers (OBC)', 'Dedicated next-flight-out (NFO) booking', 'Tarmac priority customs clearance'],
        iconName: 'Clock',
      },
      {
        title: 'MOOWR Scheme & Heavy Machinery Transportation Advisory',
        badge: 'Customs Duty Deferment',
        description:
          'Comprehensive MOOWR duty deferral implementation paired with international heavy machinery shipping services to eliminate upfront capital import tariffs.',
        highlights: ['MOOWR license application & bond filing', 'Customs bonded warehouse demarcation', 'Duty exemption on exported production'],
        iconName: 'ShieldCheck',
      },
    ],
    challengesBadge: 'Machinery Risk Governance',
    challengesTitle: 'Overcoming Industrial Equipment Logistics Challenges',
    challengesSubtitle:
      'How SkyLink delivers heavy machinery transportation and heavy equipment shipping solutions that eliminate transit shock, calibration drift, and customs holds.',
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
    ctaTitle: 'Secure Your Industrial Equipment Logistics & Machinery Transport Today',
    ctaDescription:
      'Partner with our industrial equipment logistics specialists for precision machinery shipping, heavy equipment transport, and MOOWR customs duty deferral.',
    seoTitle: 'Industrial Equipment Logistics & Machinery Shipping',
    seoDescription:
      'SkyLink Global delivers expert industrial equipment logistics, heavy machinery transportation, and international heavy machinery shipping services worldwide.',
  },

  other: {
    id: 'other',
    title: 'Other Specialized Industries & Bespoke Trade',
    badge: 'Custom Logistics & Niche Verticals',
    heroTitle: 'Bespoke Custom Logistics & Specialized Shipping Services',
    heroDescription:
      'Delivering custom logistics solutions and multimodal freight forwarding tailored for non-standard commodities, backed by dedicated trade liaison and customs and logistics expertise.',
    telemetryProtocol: 'Bespoke Trade Protocol Active',
    heroImage:
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop',
    heroImageAlt:
      'Custom logistics and multimodal freight forwarding at global container terminal | SkyLink Global',
    metrics: [
      { label: 'Custom Trade Protocols', value: '100% Tailored', subtext: 'Customized SOPs for non-standard commodities' },
      { label: 'HS Classification Accuracy', value: 'Guaranteed', subtext: 'In-house customs legal team validation' },
      { label: 'Global Corridor Reach', value: '150+ Countries', subtext: 'Comprehensive partner agency network' },
    ],
    capabilitiesBadge: 'Bespoke Architecture',
    capabilitiesTitle: 'Specialized Logistics Services & Custom Trade Capabilities',
    capabilitiesSubtitle:
      'Comprehensive logistics and customs services designed to solve cross-border challenges for oversized, highly regulated, or uncommon commercial goods.',
    capabilities: [
      {
        title: 'Oversized Cargo Logistics & Route Engineering',
        badge: 'Non-Standard Cargo',
        description:
          'Engineering tailored oversized cargo logistics combining air, sea, rail, and road transport for shipments with unique dimensions and handling demands.',
        highlights: ['Hybrid Sea-Air corridor routing', 'Customized container modifications', 'Dedicated transit insurance underwriting'],
        iconName: 'Sparkles',
      },
      {
        title: 'Tariff Engineering & Customs Advisory Services',
        badge: 'Legal Customs Defense',
        description:
          'In-depth customs advisory services and technical classification analysis to optimize HS codes, statutory documentation, and duty concessions.',
        highlights: ['Advance Ruling applications with customs authorities', 'Exemption notification optimization', 'Anti-dumping duty mitigation'],
        iconName: 'ShieldCheck',
      },
      {
        title: 'International Customs & Logistics Regulatory Liaison',
        badge: 'Government Desk',
        description:
          'Dedicated international customs & logistics liaison managing specialized approvals with DGFT, Legal Metrology, and dual-use SCOMET licensing bodies.',
        highlights: ['SCOMET dual-use license processing', 'Legal Metrology packaged commodity compliance', 'Carnet temporary import clearance'],
        iconName: 'CheckCircle2',
      },
    ],
    challengesBadge: 'Bespoke Risk Governance',
    challengesTitle: 'Overcoming Complex Customs and Logistics Hurdles',
    challengesSubtitle:
      'How SkyLink provides custom logistics solutions to establish secure transport corridors for unique commodities that standard freight forwarders decline.',
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
    ctaTitle: 'Need Tailored Custom Logistics for Your Specialized Cargo?',
    ctaDescription:
      'Connect with our custom logistics team for tailored multimodal freight forwarding, specialized shipping services, and expert customs advisory services.',
    seoTitle: 'Custom Logistics & Specialized Logistics Services',
    seoDescription:
      'SkyLink Global delivers tailored custom logistics and multimodal freight forwarding, specialized shipping services, and expert customs advisory solutions.',
  },
};
