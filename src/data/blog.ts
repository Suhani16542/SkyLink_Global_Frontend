import type { BlogPost } from '@/types';

export interface EnrichedBlogPost extends BlogPost {
  readingTime: string;
  tableOfContents?: Array<{ id: string; title: string }>;
}

export const blogPostsData: EnrichedBlogPost[] = [
  {
    id: 'post-1',
    title: 'Navigating Global Trade Compliance in 2026: Key Regulatory Updates & Risk Mitigation',
    slug: 'navigating-global-trade-compliance-2026',
    readingTime: '6 min read',
    excerpt:
      'A comprehensive guide to recent international customs reforms, electronic trade documentation, HS code classification audits, and strategies to prevent costly port delays.',
    content: `<h2>The Evolving Landscape of Cross-Border Trade Compliance</h2>
<p>International trade in 2026 demands unprecedented precision in regulatory compliance and electronic documentation. As customs administrations globally implement automated risk-management algorithms and faceless assessment frameworks, even minor clerical discrepancies in shipping bills or bills of entry can trigger automated hold flags, physical examination mandates, and severe financial penalties.</p>

<h3>1. Meticulous Harmonized System (HS) Code Classification</h3>
<p>Classification under the Harmonized Commodity Description and Coding System is no longer a routine clerical task. Customs authorities are aggressively scrutinizing 8-digit and 10-digit tariff codes using artificial intelligence to detect misclassification designed to evade higher basic customs duties or capture unauthorized export remissions.</p>
<p>Enterprises must apply the General Rules of Interpretation (GRI), evaluate Section and Chapter notes rigorously, and maintain documented technical justifications for all product classifications.</p>

<h3>2. FTA Certificate of Origin & Rules of Origin Compliance</h3>
<p>With bilateral Free Trade Agreements (FTAs) expanding across global corridors (including CEPA and ECTA frameworks), claiming preferential tariff duty rates requires strict compliance with Value Addition and Change in Tariff Heading (CTH/CTSH) criteria. Customs CAROTAR regulations empower inspecting officers to demand detailed cost-breakdowns directly from importers if origin declarations lack substantiated manufacturing audit trails.</p>

<h3>3. Resolving ICEGATE & e-BRC Reconciliation Bottlenecks</h3>
<p>For exporters, statutory cash flow depends heavily on timely incentive disbursements under RoDTEP, RoSCTL, and GST refunds. Systemic errors such as SB005 (invoice mismatch), SB006 (port code mismatch), or untracked bank realization certificates (e-BRC) cause millions in working capital to remain blocked in government portals.</p>

<h3>4. The Value of Authorized Economic Operator (AEO) Status</h3>
<p>Achieving AEO certification remains the gold standard for high-volume cross-border operators. Key advantages include:</p>
<ul>
  <li>Direct Port Delivery (DPD) privileges minimizing port demurrage</li>
  <li>Significantly reduced physical inspection percentages</li>
  <li>Deferred duty payment privileges and bank guarantee waivers</li>
  <li>Enhanced credibility with international maritime carriers and border authorities</li>
</ul>

<h2>Key Takeaways for Exporters & Importers</h2>
<p>Proactive compliance is far less costly than retroactive defense. Partnering with a dedicated EXIM consultancy ensures your business operates on robust statutory foundations, maximizes allowable government incentives, and maintains seamless cargo throughput across international boundaries.</p>`,
    tableOfContents: [
      { id: 'landscape', title: 'The Evolving Landscape' },
      { id: 'hs-classification', title: '1. Meticulous HS Code Classification' },
      { id: 'rules-of-origin', title: '2. FTA Certificate & Rules of Origin' },
      { id: 'icegate-ebrc', title: '3. Resolving ICEGATE & e-BRC Bottlenecks' },
      { id: 'aeo-status', title: '4. The Value of AEO Status' },
      { id: 'takeaway', title: 'Key Takeaway for Exporters' },
    ],
    author: {
      name: 'Trade Compliance Advisory Board',
      role: 'Senior EXIM Counsel',
    },
    publishedAt: '2026-01-20T10:00:00.000Z',
    category: 'Trade Compliance',
    tags: ['EXIM', 'Customs', 'Regulations', 'Compliance', 'AEO', 'ICEGATE'],
    keywords: [
      'Global Trade Compliance',
      'Customs Brokerage',
      'HS Code Classification',
      'AEO Certification',
      'ICEGATE Clearance',
      'RoDTEP Incentive Scheme',
      'Rules of Origin',
    ],
    seoTitle: 'Global Trade Compliance Guide 2026 | SkyLink Insights',
    seoDescription:
      'Learn key regulatory updates in international trade compliance, customs brokerage, HS code classification, and export incentive optimization.',
  },
  {
    id: 'post-2',
    title: 'Optimizing Cold Chain Integrity for Life Sciences: GDP Compliance & IoT Telemetry',
    slug: 'optimizing-cold-chain-pharmaceutical-shipments',
    readingTime: '7 min read',
    excerpt:
      'Best practices for managing temperature-sensitive pharmaceutical shipments across multimodal air and ocean transport, from active packaging to real-time excursion management.',
    content: `<h2>Protecting Life-Saving Cargo in Global Transit</h2>
<p>Pharmaceutical products, biological APIs, vaccines, and diagnostic reagents represent the most sensitive cargo in international logistics. A single thermal excursion during port transshipment or customs inspection can render multi-million-dollar consignments useless and breach stringent Good Distribution Practice (GDP) mandates.</p>

<h3>1. Validated Active vs. Passive Packaging</h3>
<p>Choosing the appropriate thermal barrier is fundamental to cargo preservation:</p>
<ul>
  <li><strong>Active Systems:</strong> Refrigerated containers (Reefers) and motorized aircraft containers with internal compressor units capable of precise thermal regulation across extreme ambient conditions (-25°C to +25°C).</li>
  <li><strong>Passive Systems:</strong> Vacuum Insulated Panels (VIP), Phase Change Materials (PCM), and calibrated dry-ice packaging engineered for autonomous temperature retention up to 120-168 hours of transit time.</li>
</ul>

<h3>2. Real-Time IoT Telemetry & Sensor Deployment</h3>
<p>Traditional post-shipment USB data loggers only reveal temperature violations after the cargo has arrived and suffered irreversible damage. Modern cold chain architecture requires cellular and satellite-connected IoT sensors that broadcast:</p>
<ul>
  <li>Real-time internal and ambient temperatures</li>
  <li>Relative humidity percentages</li>
  <li>GPS geofencing & route deviation alerts</li>
  <li>Light exposure sensors indicating unauthorized opening of container doors</li>
</ul>

<h3>3. Air Cargo & Ramp Handling Protocols</h3>
<p>Over 80% of thermal excursions occur during the ground handling phase at transit airport tarmacs. Establishing certified cool-dolly transfers, priority ramp loading, and temperature-controlled storage at airport perishables cargo centers (PCC) is essential for pharmaceutical integrity.</p>

<h3>4. Contingency Planning at Customs Checkpoints</h3>
<p>Customs delays pose a severe threat to cold chain shipments. Implementing pre-arrival documentation filing, ADC liaison, and priority green-channel clearance ensures containers are never left idling without electrical power or auxiliary generator sets (gensets).</p>

<h2>Conclusion</h2>
<p>End-to-end cold chain integrity is not an accident—it is the result of disciplined process engineering, validated equipment, and 24/7 proactive monitoring by specialized trade logistics professionals.</p>`,
    tableOfContents: [
      { id: 'protecting-cargo', title: 'Protecting Life-Saving Cargo' },
      { id: 'packaging-systems', title: '1. Active vs. Passive Packaging' },
      { id: 'iot-telemetry', title: '2. Real-Time IoT Telemetry' },
      { id: 'airport-ramp', title: '3. Air Cargo & Ramp Handling' },
      { id: 'customs-contingency', title: '4. Customs Checkpoint Contingencies' },
      { id: 'conclusion', title: 'Conclusion' },
    ],
    author: {
      name: 'Cold Chain Engineering Team',
      role: 'Pharma Logistics Specialist',
    },
    publishedAt: '2026-02-14T09:30:00.000Z',
    category: 'Cold Chain Logistics',
    tags: ['Cold Chain', 'Pharma', 'Logistics', 'GDP Compliance', 'IoT', 'Air Cargo'],
    keywords: [
      'Pharmaceutical Logistics',
      'Cold Chain Solutions',
      'Temperature Controlled Cargo',
      'IoT Sensor Telemetry',
      'GDP Compliance',
      'Active Reefer Containers',
      'Vaccine Transportation',
    ],
    seoTitle: 'Pharmaceutical Cold Chain Logistics Guide | SkyLink Insights',
    seoDescription:
      'Discover operational strategies for ensuring temperature integrity in international pharmaceutical and perishable freight forwarding.',
  },
  {
    id: 'post-3',
    title: 'How Direct Manufacturer-Carrier Contracting Reduces Export Logistics Costs by 20%',
    slug: 'reducing-export-logistics-costs-direct-carrier-contracting',
    readingTime: '5 min read',
    excerpt:
      'Understanding the hidden broker markups in international freight forwarding and how B2B volume aggregation delivers significant bottom-line savings.',
    content: `<h2>The Traditional Freight Forwarding Friction</h2>
<p>In traditional international trade, an exporter rarely deals with the actual vessel operator or airline. Instead, bookings pass through a complex chain of local agents, non-vessel operating common carriers (NVOCCs), and multi-tier forwarders, each adding significant markups, documentation charges, and origin/destination fees.</p>

<h3>1. Transparency in Ocean & Air Freight Tariffs</h3>
<p>By aggregating multi-client volumes and contracting directly with premier ocean shipping lines and scheduled air cargo operators, modern B2B trade facilitators eliminate unnecessary broker margins while securing preferential bunker adjustment factors (BAF) and demurrage free-days.</p>

<h3>2. Mitigating Hidden Destination & DTHC Charges</h3>
<p>Exporters frequently experience friction with overseas buyers due to unexpected Destination Terminal Handling Charges (DTHC), delivery order (DO) release fees, or exorbitant detention rates imposed by unregulated local receiving agents. Transparent all-in contracting fixes these rates upfront.</p>

<h3>3. Strategic Port & Inland Container Depot (ICD) Routing</h3>
<p>Selecting the optimal loading port and inland rail corridor can save up to $300-$500 per TEU in domestic haulage alone. Conducting comprehensive origin-to-port multimodal route surveys ensures container movement is both cost-optimized and transit-reliable.</p>

<h2>Summary</h2>
<p>Transforming logistics from a cost center into a strategic competitive advantage requires transparency, direct carrier connectivity, and professional trade rate negotiation.</p>`,
    tableOfContents: [
      { id: 'friction', title: 'Traditional Freight Friction' },
      { id: 'transparency', title: '1. Transparency in Tariffs' },
      { id: 'destination-charges', title: '2. Mitigating Hidden DTHC Charges' },
      { id: 'routing', title: '3. Strategic Port & ICD Routing' },
      { id: 'summary', title: 'Summary' },
    ],
    author: {
      name: 'Freight Procurement Division',
      role: 'Maritime Logistics Analyst',
    },
    publishedAt: '2026-02-22T11:00:00.000Z',
    category: 'Freight Logistics',
    tags: ['Ocean Freight', 'Air Freight', 'Cost Optimization', 'Supply Chain', 'Shipping'],
    keywords: [
      'Freight Cost Reduction',
      'Ocean Freight Rates',
      'Carrier Contracting',
      'B2B Logistics Optimization',
      'Container Routing',
      'DTHC Optimization',
    ],
    seoTitle: 'Reducing Export Logistics Costs | Freight Strategy Guide',
    seoDescription:
      'Strategies for exporters to lower international freight forwarding expenses through volume aggregation and direct shipping line negotiation.',
  },
];

export function mapBackendBlogToEnriched(b: any): EnrichedBlogPost {
  if (!b) return blogPostsData[0];

  const authorName =
    typeof b.author === 'object' && b.author?.name
      ? b.author.name
      : typeof b.author === 'string'
      ? b.author
      : b.authorName || 'Skylink Team';

  const authorRole =
    typeof b.author === 'object' && b.author?.role
      ? b.author.role
      : 'EXIM & Logistics Specialist';

  const rawExcerpt = b.shortDescription || b.excerpt || '';
  const cleanExcerpt =
    rawExcerpt ||
    (typeof b.content === 'string'
      ? b.content.replace(/<[^>]+>/g, ' ').trim().slice(0, 160) + '...'
      : '');

  // Extract clean string slug
  const rawSlug =
    typeof b.slug === 'string'
      ? b.slug
      : typeof b.slug === 'object' && b.slug?.current
      ? b.slug.current
      : typeof b.slug === 'object' && b.slug?._id
      ? b.slug._id
      : b.slug || b._id || b.id || '';
  const cleanSlug = typeof rawSlug === 'string' && rawSlug.trim().length > 0 ? rawSlug.trim() : String(b._id || b.id || 'article');

  // Extract clean string image URL
  const rawImage =
    b.featuredImage ||
    (b as any).image ||
    (b as any).coverImage ||
    (Array.isArray(b.images) && b.images.length > 0
      ? typeof b.images[0] === 'string'
        ? b.images[0]
        : b.images[0]?.url || b.images[0]?.secure_url
      : undefined);
  const cleanFeaturedImage =
    typeof rawImage === 'string' && rawImage.trim().length > 0
      ? rawImage.trim()
      : typeof rawImage === 'object' && rawImage?.url
      ? String(rawImage.url)
      : typeof rawImage === 'object' && rawImage?.secure_url
      ? String(rawImage.secure_url)
      : undefined;

  const cleanKeywords = Array.isArray(b.keywords)
    ? b.keywords
        .map((k: any) =>
          typeof k === 'string'
            ? k.trim()
            : typeof k === 'object' && k?.name
            ? k.name
            : String(k)
        )
        .filter(Boolean)
    : typeof b.keywords === 'string'
    ? b.keywords.split(',').map((k: string) => k.trim()).filter(Boolean)
    : [];

  return {
    id: String(b._id || b.id || cleanSlug),
    title: b.title || 'Untitled Skylink Article',
    slug: cleanSlug,
    excerpt: cleanExcerpt,
    content: typeof b.content === 'string' ? b.content : '',
    featuredImage: cleanFeaturedImage,
    author: {
      name: authorName,
      role: authorRole,
      avatar: typeof b.author === 'object' && typeof b.author?.avatar === 'string' ? b.author.avatar : undefined,
    },
    publishedAt: b.publishedAt || b.createdAt || new Date().toISOString(),
    category: b.category || 'EXIM Consultancy',
    tags: Array.isArray(b.tags)
      ? b.tags
          .map((t: any) =>
            typeof t === 'string'
              ? t.trim()
              : typeof t === 'object' && t?.name
              ? t.name
              : String(t)
          )
          .filter(Boolean)
      : typeof b.tags === 'string'
      ? b.tags.split(',').map((t: string) => t.trim()).filter(Boolean)
      : [],
    keywords: cleanKeywords,
    readingTime: b.estimatedReadTime || b.readingTime || '5 min read',
    images: b.images,
    seoTitle: b.title ? `${b.title} | SkyLink Insights` : undefined,
    seoDescription: cleanExcerpt,
  };
}

export async function getAllBlogPosts(): Promise<EnrichedBlogPost[]> {
  try {
    const { getPublicBlogs } = await import('@/lib/api/blogs');
    const res = await getPublicBlogs();
    if (res.success && res.data) {
      const list = Array.isArray(res.data) ? res.data : (res.data as any).blogs;
      if (Array.isArray(list) && list.length > 0) {
        return list.map(mapBackendBlogToEnriched);
      }
    }
  } catch {}
  return blogPostsData;
}

export async function getBlogPostBySlug(slug: string): Promise<EnrichedBlogPost | undefined> {
  const cleanSlug = typeof slug === 'string' ? slug.trim() : String(slug || '');
  if (!cleanSlug || cleanSlug === '[object Object]') return undefined;

  try {
    const { getPublicBlogBySlug } = await import('@/lib/api/blogs');
    const res = await getPublicBlogBySlug(cleanSlug);
    if (res.success && res.data) {
      return mapBackendBlogToEnriched(res.data);
    }
  } catch {}
  return blogPostsData.find((post) => post.slug === cleanSlug);
}
