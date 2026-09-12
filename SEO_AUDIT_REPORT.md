# Comprehensive Technical SEO Audit Report
**Project:** SkyLink Global Services Frontend (`skylinkglobal.in`)  
**Audit Date:** September 12, 2026  
**Auditor:** Technical SEO Engineering & Architecture Review  
**Status:** Pre-implementation Audit — No code modifications executed  

---

## Executive Summary & High-Impact Findings

| Category | Status | Health Score | Critical Action Required |
| :--- | :--- | :--- | :--- |
| **Framework & Engine** | Next.js 16.3.3 (App Router), React 19.2.8, TypeScript 5 | 🟢 Optimal | Modern App Router setup with dynamic SSG & SSR capabilities |
| **Metadata & Title Tags** | Global metadata constructor with partial registry adoption | 🟡 Moderate | 3 public pages missing direct metadata; 1 hardcoded domain bug |
| **Meta Descriptions** | Configured in central registry (`pageSeo.ts`) | 🟢 Good | High-quality B2B descriptions; 3 client pages lack direct exports |
| **Keyword Strategy** | Set on Home page only; empty on all inner pages | 🔴 Needs Attention | Sub-pages default to 8 generic EXIM keywords |
| **Sitemap (`sitemap.ts`)** | Dynamic Next.js route generated via code | 🔴 Critical Issue | Contains 12 phantom/dead routes leading to 404 crawl errors |
| **Robots (`robots.ts`)** | Dynamic route disallowing `/admin/` and `/api/` | 🟢 Optimal | Clean and correctly formatted |
| **Canonical URLs** | Automated via `getCanonicalUrl()` helper | 🔴 Bug Found | `/industries/[slug]` has hardcoded `https://skylink.com` canonical |
| **Structured Data (JSON-LD)** | Organization, LocalBusiness, WebSite, Service, Article | 🟡 Moderate | Missing FAQSchema, BreadcrumbList on static pages, IndustrySchema |
| **Analytics & GTM** | GA4 / GTM scripts | 🔴 Missing | Zero GA4 or GTM tracking tags implemented in frontend |
| **Search Console** | GSC Verification Meta Tag | 🟡 Inactive | Supported via env var `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (currently empty) |
| **Performance & CWV** | Asset weights, video backgrounds, client components | 🟡 Moderate | 5 autoplay MP4 hero videos preloading; heavy client boundaries |

---

## 1. Framework and Next.js Version

* **Framework:** Next.js `16.3.3` (App Router architecture)
* **Runtime Core:** React `19.2.8`, React DOM `19.2.8`
* **Language:** TypeScript `^5` (`strict: true`)
* **Styling:** Tailwind CSS `^4` with `@tailwindcss/postcss`
* **Icons:** `lucide-react` `^1.38.0`
* **Rendering Strategy:** Hybrid Static Site Generation (SSG) with `generateStaticParams`, Server Components, and client-side interactive widgets.

---

## 2. Complete List of All Website Routes/Pages

The application contains **48 total route pages** across public, admin, and API domains.

### 2.1 Public Pages (32 Routes)
1. `/` (`src/app/page.tsx`) — Commercial Homepage
2. `/about` (`src/app/(public)/about/page.tsx`) — Corporate About SkyLink
3. `/about/overview` (`src/app/(public)/about/overview/page.tsx`) — Corporate Governance & Leadership
4. `/services` (`src/app/(public)/services/page.tsx`) — Service Directory Portfolio
5. `/services/logistics-shipping` (`src/app/(public)/services/logistics-shipping/page.tsx`) — Dedicated Service Page
6. `/services/warehousing-solutions` (`src/app/(public)/services/warehousing-solutions/page.tsx`) — Dedicated Service Page
7. `/services/warehousing-distribution` (`src/app/(public)/services/warehousing-distribution/page.tsx`) — Dedicated Service Page
8. `/services/cold-chain-solutions` (`src/app/(public)/services/cold-chain-solutions/page.tsx`) — Dedicated Service Page
9. `/services/tax-gst-compliance` (`src/app/(public)/services/tax-gst-compliance/page.tsx`) — Dedicated Service Page
10. `/services/tax-gst-advisory` (`src/app/(public)/services/tax-gst-advisory/page.tsx`) — Dedicated Service Page
11. `/services/documentation-liaison` (`src/app/(public)/services/documentation-liaison/page.tsx`) — Dedicated Service Page
12. `/services/risk-management` (`src/app/(public)/services/risk-management/page.tsx`) — Dedicated Service Page
13. `/services/trade-risk-management` (`src/app/(public)/services/trade-risk-management/page.tsx`) — Dedicated Service Page
14. `/services/[slug]` (`src/app/(public)/services/[slug]/page.tsx`) — Dynamic Catch-all Service Resolver
15. `/industries` (`src/app/(public)/industries/page.tsx`) — Industry Solutions Directory
16. `/industries/pharma` (`src/app/(public)/industries/pharma/page.tsx`) — Specialized Pharma & Cold Chain
17. `/industries/seafoods` (`src/app/(public)/industries/seafoods/page.tsx`) — Marine & Aquaculture Exports
18. `/industries/specialty-chemicals-agro-fertilizers-perishables` (`src/app/(public)/industries/specialty-chemicals-agro-fertilizers-perishables/page.tsx`) — Hazchem & Agro Commodities
19. `/industries/[slug]` (`src/app/(public)/industries/[slug]/page.tsx`) — Dynamic Resolver for 14 Sub-sectors (`automotive`, `engineering-manufacturing`, `electronics-electrical`, `textiles-apparel`, `food-beverages`, `agriculture-agro`, `chemicals-petrochemicals`, `retail-consumer-goods`, `construction-infrastructure`, `renewable-energy`, `mining-metals`, `ecommerce-cross-border`, `machinery-heavy-equipment`, `defense-aerospace`)
20. `/why-choose-us/skylink-advantage` (`src/app/(public)/why-choose-us/skylink-advantage/page.tsx`) — Value Proposition
21. `/why-choose-us/traditional-vs-skylink` (`src/app/(public)/why-choose-us/traditional-vs-skylink/page.tsx`) — Comparative EXIM Model
22. `/sustainability/aeo-green` (`src/app/(public)/sustainability/aeo-green/page.tsx`) — AEO Accreditation Advisory
23. `/sustainability/eco-route` (`src/app/(public)/sustainability/eco-route/page.tsx`) — Green Corridor Optimization
24. `/collaborate/freight-forwarders` (`src/app/(public)/collaborate/freight-forwarders/page.tsx`) — Agent Partner Program
25. `/collaborate/enquiry` (`src/app/(public)/collaborate/enquiry/page.tsx`) — Forwarder Rate Submission Portal
26. `/contact` (`src/app/(public)/contact/page.tsx`) — Contact & Desk Locator
27. `/request-consultation` (`src/app/(public)/request-consultation/page.tsx`) — B2B Consultation Form
28. `/blog` (`src/app/(public)/blog/page.tsx`) — Primary Blog Feed
29. `/blog/[slug]` (`src/app/(public)/blog/[slug]/page.tsx`) — Dynamic Blog Detail Article
30. `/news/blogs` (`src/app/(public)/news/blogs/page.tsx`) — Secondary Thought Leadership Grid
31. `/news/articles` (`src/app/(public)/news/articles/page.tsx`) — Technical Regulatory Briefs
32. `/brand` (`src/app/(public)/brand/page.tsx`) — Brand Assets & Motion Guidelines

### 2.2 Admin & Operations Pages (16 Routes — Correctly Non-Indexed)
`/admin/login`, `/admin/dashboard`, `/admin/leads`, `/admin/leads/[id]`, `/admin/customers`, `/admin/quotations`, `/admin/shipments`, `/admin/shipments/[id]`, `/admin/documents`, `/admin/services`, `/admin/blogs`, `/admin/blogs/[id]`, `/admin/blogs/create`, `/admin/blog/create`, `/admin/create-blog`, `/admin/settings`.

### 2.3 API Endpoints (1 Route)
`/api/health` (`src/app/api/health/route.ts`)

---

## 3. Existing Metadata and Title Tags

### 3.1 Global Metadata Architecture
* Configured in `src/app/layout.tsx` using `constructMetadata()` from `src/lib/seo/metadata.ts`.
* **Title Template:** `%s | SkyLink Global Services` (defined in `SEO_DEFAULTS.titleTemplate`).
* **Default Title:** `SkyLink Global Services | B2B EXIM Consultancy & Global Logistics`
* **Metadata Base:** Initialized with `new URL(env.siteUrl)` (defaults to `http://localhost:3000` if `NEXT_PUBLIC_SITE_URL` is omitted).

### 3.2 Route-by-Route Title Breakdown

| Route | Configured Meta Title in Code | Title Status |
| :--- | :--- | :--- |
| `/` | `SkyLink Global \| B2B Logistics Company & Freight Forwarding Provider` | 🟢 Validated |
| `/about` | *(No explicit metadata export in client component)* → Defaults to Root Default | 🔴 Inherits global fallback |
| `/about/overview` | *(No explicit metadata export in client component)* → Defaults to Root Default | 🔴 Inherits global fallback |
| `/why-choose-us/skylink-advantage` | `The SkyLink Advantage \| Integrated EXIM & Logistics Excellence` | 🟢 Validated |
| `/why-choose-us/traditional-vs-skylink` | `Traditional Logistics vs SkyLink Global Services \| Comparative Analysis` | 🟢 Validated |
| `/services` | `EXIM & Global Logistics Services Portfolio \| SkyLink Global Services` | 🟢 Validated |
| `/services/logistics-shipping` | `Logistics & Shipping: Freight Negotiation, Route Optimization & Insurance` | 🟢 Validated |
| `/services/warehousing-solutions` | `Warehousing Solutions for Exporters \| Bonded & Non-Bonded Storage` | 🟢 Validated |
| `/services/warehousing-distribution` | `Warehousing & Distribution Services \| SkyLink Global Services` | 🟢 Validated |
| `/services/cold-chain-solutions` | `Cold Chain Logistics & Temperature-Controlled Freight \| SkyLink Global` | 🟢 Validated |
| `/services/tax-gst-compliance` | `Export Tax, GST Compliance & Refund Advisory \| SkyLink Global Services` | 🟢 Validated |
| `/services/tax-gst-advisory` | `Trade Tax & GST Advisory Solutions \| SkyLink Global Services` | 🟢 Validated |
| `/services/documentation-liaison` | `Documentation & Regulatory Liaison: ICEGATE, Shipping Bills & CoO` | 🟢 Validated |
| `/services/risk-management` | `Trade Risk Management: Regulatory, Financial & Geopolitical Protection` | 🟢 Validated |
| `/services/trade-risk-management` | `Global Trade Risk Management & Cargo Security \| SkyLink Global Services` | 🟢 Validated |
| `/services/[slug]` | Dynamic: `${service.title} \| SkyLink Global Services` | 🟢 Validated |
| `/industries` | `Industry Solutions \| Specialized EXIM & Logistics Support` | 🟢 Validated |
| `/industries/pharma` | `Pharmaceutical EXIM & Cold Chain Logistics \| SkyLink Global Services` | 🟢 Validated |
| `/industries/seafoods` | `Seafood & Marine Products Export Logistics \| SkyLink Global Services` | 🟢 Validated |
| `/industries/specialty-chemicals-agro-fertilizers-perishables` | `Specialty Chemicals, Agro-Fertilizers & Perishables Logistics \| SkyLink Global` | 🟢 Validated |
| `/industries/[slug]` | Dynamic from `otherIndustriesDetailData[slug].seoTitle` | 🟢 Validated |
| `/sustainability/aeo-green` | `AEO Green Channel Accreditation & Compliance \| SkyLink Global Services` | 🟢 Validated |
| `/sustainability/eco-route` | `Eco-Route & Sustainable Green Logistics \| SkyLink Global Services` | 🟢 Validated |
| `/collaborate/freight-forwarders` | `Partner with Us \| Freight Forwarders & Carrier Collaboration` | 🟢 Validated |
| `/collaborate/enquiry` | *(No metadata export)* → Inherits global fallback | 🔴 Inherits global fallback |
| `/contact` | `Contact SkyLink Global Services \| B2B Trade & Logistics Advisory` | 🟢 Validated |
| `/request-consultation` | `Request an EXIM Consultation & Freight Quote \| SkyLink Global Services` | 🟢 Validated |
| `/blog` | `Trade Insights & EXIM Knowledge Base \| SkyLink Global Services` | 🟢 Validated |
| `/blog/[slug]` | Dynamic: `${post.title}` | 🟢 Validated |
| `/news/blogs` | `Global Trade Insights & EXIM Blogs \| SkyLink Global Services` | 🟢 Validated |
| `/news/articles` | `Trade Intelligence & Industry Articles \| SkyLink Global Services` | 🟢 Validated |
| `/brand` | `Brand Identity & Assets \| SkyLink Global Services` | 🟢 Validated |

---

## 4. Existing Meta Descriptions

### 4.1 Global Default Description
`Comprehensive B2B EXIM consultancy, international freight forwarding, customs clearance, and global trade compliance solutions.` (124 characters)

### 4.2 Page Meta Descriptions Audit

| Page | Description Snippet | Length | Assessment |
| :--- | :--- | :--- | :--- |
| **Home (`/`)** | SkyLink Global is a premier B2B logistics company and freight forwarding provider. End-to-end logistics services, international supply chain management, cargo transportation, customs clearance, and warehousing. | 212 chars | 🟡 Slightly long (Ideal: 140–160 chars) |
| **Services (`/services`)** | Explore SkyLink Global comprehensive services: international freight forwarding, customs brokerage, bonded warehousing, cold-chain solutions, and trade compliance. | 170 chars | 🟢 Strong commercial intent |
| **Logistics & Shipping** | End-to-end logistics and shipping management: carrier rate negotiation, multimodal route optimization, container consolidations, Incoterms advisory, and marine insurance. | 175 chars | 🟢 Keyword-dense |
| **Tax & GST Compliance** | Comprehensive tax and GST advisory for exporters: LUT filings, IGST refund processing, ITC refunds, and inverted duty structure audits. | 136 chars | 🟢 Crisp & targeted |
| **Documentation & Liaison** | End-to-end export documentation support: customs invoices, shipping bills, Certificate of Origin (CoO), ICEGATE filings, AD Code registrations, and agency liaison. | 166 chars | 🟢 Clear value proposition |
| **Pharma Industry** | GDP-compliant cold chain logistics, temperature-controlled air & ocean freight, and expedited customs clearance for pharmaceutical exports. | 140 chars | 🟢 Perfect length |
| **Seafood Industry** | Ultra-low temperature reefer container management, MPEDA documentation, EIA health certification, and rapid green-channel customs clearance for seafood exports. | 162 chars | 🟢 Excellent industry terms |
| **AEO Green Channel** | Accelerate customs clearances, reduce bank guarantees, and achieve Tier 1/2/3 Authorized Economic Operator (AEO) status with our accreditation advisory. | 152 chars | 🟢 High authority |
| **Freight Forwarders** | Join the SkyLink Global partner network: co-load opportunities, regulatory agency support in India, and nationwide logistics infrastructure. | 141 chars | 🟢 Compelling B2B CTA |
| **About (`/about`)** | *(Page misses export; defined in `pageSeo.ts`)*: Discover SkyLink Global Services: our vision, mission, DGFT and customs regulatory expertise, and our global logistics coordination network. | 167 chars | 🔴 Not active due to client component |

---

## 5. Existing Headings (H1, H2, H3) Breakdown

### 5.1 Homepage (`/`)
* **H1 (Dynamic Carousel):** 
  * Initial SSR H1: `Global Logistics Company & Freight Forwarding.` (Inside `HeroSection.tsx`)
  * Slide 2 H1: `Logistics Services Built Around Your Business.`
  * Slide 3 H1: `Strategic Warehousing & 3PL Logistics.`
  * Slide 4 H1: `Premier Shipping Company & Cargo Transportation.`
* **H2 Headings:**
  * `Ready to optimize your supply chain management and logistics?`
  * `Operating at the Center of Global Commerce` (`StatsCounterSection`)
  * `How SkyLink Connects Global Trade` (`GlobalTradeFlow`)
  * `Why Leading Enterprises Rely On SkyLink` (`WhySkyLinkBento`)
  * `End-to-End EXIM & Logistics Commercial Practices` (`ServicesBentoGrid`)
  * `Specialized Cold Chain & High-Consequence Cargo` (`IndustriesMosaic`)
  * `Strategic Trade Infrastructure & Institutional Pillars` (`StrategicPartnerSection`)
  * `Connecting Enterprises Across The Trade Value Chain` (`BuiltToBridgeSection`)
  * `Risk Points Across The Global Supply Chain` (`LogisticsRiskJourney`)
  * `Active Global Trade Routes & Maritime Corridors` (`GlobalRouteMap`)
  * `The 6-Stage EXIM Governance Workflow` (`HowItWorksTimeline`)
* **H3 Headings:**
  * Service item cards, Industry sector cards, Timeline stages, Risk matrix points.
* **Heading Audit Rating:** 🟢 Clean hierarchy with single semantic H1 on initial render.

### 5.2 Dedicated Service Pages (e.g. `/services/logistics-shipping`)
* **H1:** Split-title rendering `Logistics & Shipping: Freight Negotiation, Cost Optimization, Route Analytics, Consolidations & Marine Insurance` (Rendered via `ServiceDetailView.tsx`)
* **H2 Headings:**
  * `Core Service Modules & Execution Protocols`
  * `Ready to streamline your global trade operations?`
* **H3 Headings:**
  * Sub-module titles: `Freight Negotiation & Rate Benchmarking`, `Freight Cost Optimization & Tariff Advisory`, `Route Optimization & Corridor Analytics`, `Consolidations & Space Allocations`, `Incoterms & Contract Advisory`, `Marine Cargo Insurance & Risk Protection`.

### 5.3 Industry Detail Pages (`/industries/[slug]`)
* **H1:** Dynamic hero title (e.g., `Automotive & Heavy Mobility Logistics Engineering`)
* **H2:** CTA section heading
* **H3:** Capability cards (`Capability Specifications`, `Validated SOP Guaranteed`)

### 5.4 About Pages (`/about` & `/about/overview`)
* **H1:** `Institutional Leadership in Cross-Border Trade & Logistics`
* **H2 Headings:**
  * `Vision & Mission`, `What Drives Us`, `Our Expertise Across Global Trade`, `From Trade Planning to Final Delivery`, `One Partner. Multiple Trade & Logistics Needs.`, `Ready to Simplify Your Global Trade Journey?`
* **H3 Headings:** Core value points & leadership pillars.

---

## 6. Keywords and SEO Content Strategy

### 6.1 Central Keyword Registry (`src/config/pageSeo.ts`)
* **Home Page Keyword Focus:**
  * **Primary Keyword:** `logistics company`
  * **Secondary Keywords:** `logistics services`, `logistics provider`, `freight forwarding`, `shipping company`, `supply chain management and logistics`, `3pl logistics`, `cargo freight forwarders`, `cargo transportation`, `international logistics`, `warehousing`.
* **Sub-Pages Keyword Status:**
  * Currently, **all other 25+ entries** in `pageSeoRegistry` have `primaryKeyword: ''` and empty `secondaryKeywords: []`.
  * As a fallback, `src/lib/seo/metadata.ts` populates these pages with the 8 generic defaults from `SEO_DEFAULTS.keywords` (`EXIM Consultancy`, `Global Logistics`, `Trade Compliance`, `Customs Clearance`, `Freight Forwarding`, `Supply Chain Solutions`, `Export Import Advisory`, `International Trade Logistics`).

---

## 7. Sitemap Configuration (`sitemap.xml`)

* **Implementation:** Next.js dynamic sitemap generator (`src/app/sitemap.ts`).
* **URL:** `https://skylinkglobal.in/sitemap.xml` (or `http://localhost:3000/sitemap.xml` based on `env.siteUrl`).
* **Generation Engine:** Dynamically queries `getAllServices()`, `getAllIndustries()`, `getOtherIndustries()`, and `getAllBlogPosts()`.

### ⚠️ Critical Finding: Dead & Phantom Routes in Sitemap
The current `staticRoutes` array in `sitemap.ts` includes **12 phantom URLs** that do NOT exist in the application file structure:
1. `/quote` (File does not exist — Real route is `/request-consultation`)
2. `/track` (File does not exist)
3. `/terms-of-service` (File does not exist)
4. `/privacy-policy` (File does not exist)
5. `/cookie-policy` (File does not exist)
6. `/security` (File does not exist)
7. `/compliance` (File does not exist)
8. `/careers` (File does not exist)
9. `/faq` (File does not exist)
10. `/glossary` (File does not exist)
11. `/sustainability/carbon-offset` (File does not exist)
12. `/sustainability/green-supply-chain` (File does not exist)

*Impact:* Googlebot and Bingbot crawling `sitemap.xml` will encounter 12 hard 404 responses, wasting crawl budget and triggering indexing quality penalties.

---

## 8. Robots Configuration (`robots.txt`)

* **Implementation:** `src/app/robots.ts`
* **Rules Defined:**
  ```typescript
  userAgent: '*',
  allow: '/',
  disallow: ['/admin/', '/admin', '/api/'],
  sitemap: `${baseUrl}/sitemap.xml`,
  ```
* **Assessment:** 🟢 100% compliant with Google Search Central specifications. Correctly blocks sensitive admin operational paths and internal API routes while exposing public corridors.

---

## 9. Canonical URLs

* **Implementation:** Generated dynamically using `getCanonicalUrl(path)` inside `src/lib/seo/metadata.ts`.
* **Normalization Logic:** Strips trailing slashes and prepends `env.siteUrl`.

### ⚠️ Critical Bug Discovered in `/industries/[slug]`
In `src/app/(public)/industries/[slug]/page.tsx` (lines 82 & 87), the canonical and openGraph URLs are hardcoded as:
```typescript
alternates: {
  canonical: `https://skylink.com/industries/${slug}`,  // ❌ HARDCODED WRONG DOMAIN (skylink.com)
},
openGraph: {
  url: `https://skylink.com/industries/${slug}`,        // ❌ HARDCODED WRONG DOMAIN
}
```
*Impact:* Canonical signals for all 14 sector sub-pages point to a 3rd party domain (`skylink.com`), signaling search engines to de-index `skylinkglobal.in` pages in favor of the external site!

---

## 10. Open Graph & Twitter Card Metadata

* **Global Defaults:**
  * `og:siteName`: `SkyLink Global Services`
  * `og:locale`: `en_US`
  * `og:image`: `1200x630px` fallback to `${env.siteUrl}/images/og-image.jpg`
  * `twitter:card`: `summary_large_image`
  * `twitter:title` & `twitter:description` derived from page metadata.
* **Article Type Metadata:**
  * Dynamic blog posts (`/blog/[slug]`) properly set `type: 'article'`, `publishedTime`, and `authors`.
* **Identified Gap:** Missing OpenGraph image dimension tags on certain dynamic pages where image is directly passed as string without explicit `width`/`height` overrides.

---

## 11. JSON-LD & Structured Data Markup

### 11.1 Schemas Implemented & Deployed
1. **`WebSiteSchema`** (`src/components/seo/WebSiteSchema.tsx`)
   * Rendered globally in `src/app/layout.tsx`.
   * Declares `@type: 'WebSite'`, site name, alternate name, and publisher organization.
2. **`OrganizationSchema`** (`src/components/seo/OrganizationSchema.tsx`)
   * Rendered on Home page (`src/app/page.tsx`).
   * Declares `@type: 'Organization'`, name, logo (`/logos/logo.png`), email, phone, address, and `sameAs` social links.
3. **`LocalBusinessSchema` / `ProfessionalService`** (`src/components/seo/LocalBusinessSchema.tsx`)
   * Rendered on Home page (`src/app/page.tsx`).
   * Declares `@type: 'ProfessionalService'`, priceRange (`$$`), address, phone, and contact details.
4. **`ServiceSchema`** (`src/components/seo/ServiceSchema.tsx`)
   * Rendered on static and dynamic service detail pages.
   * Declares `@type: 'Service'`, service name, description, and provider organization.
5. **`ArticleSchema`** (`src/components/seo/ArticleSchema.tsx`)
   * Rendered on dynamic blog article pages (`/blog/[slug]`).
   * Declares `@type: 'Article'`, headline, datePublished, author, publisher, and mainEntityOfPage.
6. **`BreadcrumbSchema`** (`src/components/seo/BreadcrumbSchema.tsx`)
   * Embedded inside `src/components/ui/Breadcrumbs.tsx`.
   * Automatically outputs Schema.org `BreadcrumbList` whenever breadcrumbs are rendered.

### 11.2 Structured Data Gaps
* **`IndustrySchema`** (`generateIndustrySchema` in `schema.ts`) is coded but **never imported or rendered** on any industry page.
* **`FAQSchema`** is completely missing on pages containing FAQ accordions (e.g. Services, Freight Forwarder Collaboration).
* Organization address in schema contains un-geocoded placeholder: `International Trade Tower, Corporate Logistics Hub, India`.

---

## 12. Image Alt Text Audit

* **`next/image` Adoption:** High adoption across hero, banners, service cards, and blog posts.
* **Alt Text Audit Sample:**
  * Home Hero Fallbacks: `Global Logistics Company & Freight Forwarding.` (🟢 Informative)
  * Home CTA Vessel: `Global shipping company vessel navigating international trade routes` (🟢 Descriptive)
  * Freight Collaboration: `Global freight forwarding and multimodal logistics operations with cargo ships, containers, trucks, and port handling` (🟢 Excellent)
  * Blog Cards: Alt attributes use `{post.title}` (🟢 Clean)
* **Alt Gaps:**
  * Decorative background SVGs and abstract background glows lack `aria-hidden="true"` in a few UI components.

---

## 13. Internal Linking & Navigation Structure

* **Header Navigation (`Header.tsx`):**
  * Multi-tiered desktop mega menus and responsive mobile drawer.
  * Comprehensive links to Core Services, 14 Specialized Industries, Sustainability Portals, About, and Contact.
* **Footer Navigation (`Footer.tsx`):**
  * Contains direct links to 6 core services, corporate pages, and client portal.
  * **Gap:** All 5 Sector links in the footer currently point to the root `/industries` hub rather than specific deep URLs (`/industries/pharma`, `/industries/seafoods`, etc.).
* **In-Content Cross Linking:**
  * `ServiceDetailView.tsx` features a "Related Commercial Practices" grid linking across complementary services.
  * `BlogDetailView.tsx` features "Related Insights" and "Recent Insights" widgets.
  * All public sub-pages include clickable breadcrumbs linking back to parent directories.

---

## 14. Google Analytics (GA4) & Google Tag Manager (GTM)

* **Current Status:** 🔴 **NOT INSTALLED**
* **Findings:**
  * Grep scan for `gtag`, `GoogleAnalytics`, `GTM-`, `googletagmanager` returned **0 instances** in the codebase.
  * No `@next/third-parties/google` or custom script tags exist in `src/app/layout.tsx`.
  * No tracking events for consultation requests, quotation forms, or WhatsApp clicks are currently captured.

---

## 15. Google Search Console Verification

* **Current Status:** 🟡 **STANDBY / UNCONFIGURED**
* **Implementation:** `src/lib/seo/metadata.ts` includes conditional verification tag:
  ```typescript
  if (env.googleSiteVerification) {
    metadata.verification = { google: env.googleSiteVerification };
  }
  ```
* **Env Variable:** Bound to `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in `src/config/env.ts`.
* **Status:** `.env.example` has `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=` (blank). Without the key in the deployment environment, no verification meta tag is output.

---

## 16. Page Speed, Image Sizes & JavaScript Footprint

* **Video Streaming in Hero (`HeroSection.tsx`):**
  * The Hero section mounts **4 simultaneous HTML5 video elements** with both local files (`/videos/video1-shipping.mp4`) and CDN fallbacks.
  * While `preload="auto"` delivers smooth transitions, it initiates concurrent multi-megabyte media downloads on initial page load, impacting First Contentful Paint (FCP) and Largest Contentful Paint (LCP) on mobile networks.
* **Client Boundaries:**
  * `src/app/(public)/about/page.tsx` is designated `'use client'` across the entire 800-line file due to an active step tab state. This prevents Next.js from extracting server-side metadata and increases client JS bundle size.
* **Image Optimizations:**
  * `next.config.ts` includes remote domains (`images.unsplash.com`, `res.cloudinary.com`) with `qualities: [75, 100]`.
  * Most images properly utilize `sizes` attributes for responsive viewport scaling.

---

## 17. Noindex & Indexing Risk Analysis

* **Admin Protection:** 🟢 Cleanly guarded. `src/app/admin/layout.tsx` applies `noIndex: true`, generating `robots: { index: false, follow: false }`.
* **404 Not Found Page:** 🟢 Correctly designated `noIndex: true` in `src/app/not-found.tsx`.
* **Environment Default Risk:**
  * `env.ts` defaults `siteUrl` to `http://localhost:3000` if `NEXT_PUBLIC_SITE_URL` is omitted.
  * In production deployments without proper environment variables, canonical and sitemap URLs will generate `localhost:3000` links.

---

## 18. Blog SEO Architecture

* **Listing Hubs:** `/blog` (primary) and `/news/blogs` (secondary thought leadership view).
* **Article Pages:** Dynamic route `/blog/[slug]/page.tsx` utilizing `generateStaticParams()` and `generateMetadata()`.
* **Structured Data:** Full `ArticleSchema` integrated with headline, publication date, author name, and publisher info.
* **Data Sources:** Hybrid support via `src/data/blog.ts` (static backup) and `src/lib/api/blogs.ts` (backend API endpoint).
* **Areas for Improvement:** Author bio Schema (`Person` with profile URL), dateModified timestamps, and canonical consolidation between `/blog` and `/news/blogs`.

---

## 19. Contact & Business Entity Information

* **Central Registry:** `siteConfig.contact` in `src/config/site.ts`:
  * **Brand Name:** SkyLink Global Services
  * **Email:** `connect@skylinkglobal.in`
  * **Telephone:** `+91-9512114113`
  * **WhatsApp:** `+919512114113`
  * **Support Hours:** `Mon - Sat: 9:00 AM - 7:00 PM IST`
  * **Address:** `International Trade Tower, Corporate Logistics Hub, India`
  * **Social Accounts:** LinkedIn (`company/skylink-global-services`), Twitter/X (`@skylink_global`).
* **Note:** Address should be enriched with precise street, city, state, and postal code for optimal Google Maps / Local SEO rankings.

---

## 20. Existing SEO-Related Files & Components Inventory

```
src/
├── app/
│   ├── layout.tsx                    # Root layout with WebSiteSchema & global constructMetadata
│   ├── robots.ts                     # Dynamic robots.txt route
│   ├── sitemap.ts                    # Dynamic sitemap.xml generator
│   └── (public)/...                  # 32 Public App Router page endpoints
├── components/
│   ├── seo/
│   │   ├── index.ts                  # Central component exports
│   │   ├── JsonLd.tsx                # Base JSON-LD script injector
│   │   ├── WebSiteSchema.tsx         # Schema.org WebSite
│   │   ├── OrganizationSchema.tsx    # Schema.org Organization
│   │   ├── LocalBusinessSchema.tsx   # Schema.org ProfessionalService
│   │   ├── ServiceSchema.tsx         # Schema.org Service
│   │   ├── ArticleSchema.tsx         # Schema.org Article
│   │   └── BreadcrumbSchema.tsx      # Schema.org BreadcrumbList
│   └── ui/Breadcrumbs.tsx            # Visual breadcrumbs with embedded schema
├── config/
│   ├── site.ts                       # Business & contact constants
│   ├── env.ts                        # Site URL & verification env bindings
│   └── pageSeo.ts                    # Per-route SEO meta & keyword registry
└── lib/
    └── seo/
        ├── constants.ts              # Global defaults & title templates
        ├── metadata.ts               # constructMetadata & getPageMetadata helpers
        └── schema.ts                 # Pure JSON-LD object generators
```

---

## Synthesis: SEO Deficiencies & Actionable Roadmap

### 1. Missing Items
* [ ] **Google Analytics 4 (GA4) & Google Tag Manager (GTM):** Tracking scripts absent from root layout.
* [ ] **Google Search Console Verification Key:** Environment variable not set in `.env.local` / production.
* [ ] **FAQ Schema Markup:** Absent on Service & Partnership pages containing FAQs.
* [ ] **Specific Keywords on Inner Pages:** 25+ page registry entries currently lack targeted keywords.
* [ ] **Legal / Policy Pages:** Privacy policy, terms of service, and cookie policy pages referenced in sitemap do not exist.

### 2. Incorrect / Buggy Items
* [x] **Hardcoded External Domain:** `src/app/(public)/industries/[slug]/page.tsx` hardcodes canonical to `https://skylink.com/` instead of `env.siteUrl`. *(FIXED: Refactored to centralized constructMetadata helper resolving to env.siteUrl / skylinkglobal.in)*
* [x] **Sitemap 404s:** `sitemap.ts` emits 12 non-existent static URLs. *(FIXED: Removed 12 non-existent static routes; validated 43 clean active URLs)*
* [x] **Missing Metadata on Client Pages:** `/about`, `/about/overview`, and `/collaborate/enquiry` lack metadata exports due to client component boundaries. *(FIXED: Refactored pages to Server Components with getPageMetadata while preserving interactive client views in AboutView, AboutOverviewView, CollaborationEnquiryView)*
* [x] **Footer Industry Links:** All 5 sector links point to generic `/industries` instead of deep URLs. *(FIXED: Updated to link directly to /industries/pharma, /industries/seafoods, /industries/specialty-chemicals-agro-fertilizers-perishables, /industries/automotive, /industries/retail-consumer-goods)*

### 3. Preserved Architecture (High-Value Foundations to Maintain)
* ✅ Clean centralized `pageSeoRegistry` pattern in `src/config/pageSeo.ts`.
* ✅ Dynamic robots and sitemap generation using Next.js Metadata API.
* ✅ Solid Schema.org structured data component library (`JsonLd`, `WebSiteSchema`, `ServiceSchema`, `ArticleSchema`).
* ✅ Full OpenGraph and Twitter card integration in `constructMetadata()`.
* ✅ Server-side dynamic metadata for all `[slug]` routes.

---
*Report updated following full SEO architecture and link equity fixes.*
