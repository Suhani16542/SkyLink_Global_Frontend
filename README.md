# SkyLink Global Services - Frontend

Scalable, SEO-first Next.js frontend architecture for **SkyLink Global Services** — a B2B EXIM Consultancy, Global Logistics, and Trade Compliance company.

---

## 🚀 Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Code Quality:** ESLint
* **Path Alias:** `@/*` mapped to `./src/*`

---

## 📁 Project Structure

```text
SkyLink_Global_Frontend/
├── public/
│   ├── images/
│   ├── icons/
│   └── logos/
├── src/
│   ├── app/
│   │   ├── (public)/
│   │   │   ├── layout.tsx
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── services/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── industries/
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   ├── request-consultation/
│   │   │   │   └── page.tsx
│   │   │   └── blog/
│   │   │       ├── page.tsx
│   │   │       └── [slug]/
│   │   │           └── page.tsx
│   │   ├── admin/
│   │   │   ├── layout.tsx (noindex, nofollow)
│   │   │   ├── login/
│   │   │   │   └── page.tsx
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx
│   │   │   ├── leads/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   ├── customers/
│   │   │   │   └── page.tsx
│   │   │   ├── quotations/
│   │   │   │   └── page.tsx
│   │   │   ├── shipments/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/
│   │   │   │       └── page.tsx
│   │   │   ├── documents/
│   │   │   │   └── page.tsx
│   │   │   ├── services/
│   │   │   │   └── page.tsx
│   │   │   └── settings/
│   │   │       └── page.tsx
│   │   ├── api/
│   │   │   └── health/
│   │   │       └── route.ts
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   └── robots.ts
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── public/
│   │   ├── admin/
│   │   ├── layout/
│   │   ├── forms/
│   │   └── seo/
│   │       ├── JsonLd.tsx
│   │       ├── OrganizationSchema.tsx
│   │       ├── LocalBusinessSchema.tsx
│   │       ├── ServiceSchema.tsx
│   │       ├── BreadcrumbSchema.tsx
│   │       └── ArticleSchema.tsx
│   │
│   ├── data/
│   │   ├── services.ts
│   │   ├── industries.ts
│   │   └── blog.ts
│   │
│   ├── lib/
│   │   ├── seo/
│   │   │   ├── metadata.ts
│   │   │   ├── schema.ts
│   │   │   └── constants.ts
│   │   ├── api/
│   │   │   ├── client.ts
│   │   │   └── endpoints.ts
│   │   └── utils/
│   │       ├── cn.ts
│   │       └── formatters.ts
│   │
│   ├── types/
│   │   ├── service.ts
│   │   ├── industry.ts
│   │   ├── blog.ts
│   │   ├── admin.ts
│   │   ├── seo.ts
│   │   └── index.ts
│   │
│   ├── hooks/
│   │   └── index.ts
│   │
│   └── config/
│       ├── site.ts
│       └── env.ts
│
├── .env.local
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## 🚦 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env.local` if not already present:

```bash
cp .env.example .env.local
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
```

---

## 🔍 SEO & Crawl Architecture

* **Dynamic Metadata:** Standardized via `src/lib/seo/metadata.ts` with title templates, OpenGraph, Twitter/X cards, and canonical URLs.
* **JSON-LD Schemas:** Modular components in `src/components/seo/` supporting `Organization`, `LocalBusiness`, `Service`, `BreadcrumbList`, and `Article` schemas.
* **Sitemap:** Dynamic generator at `src/app/sitemap.ts` (`/sitemap.xml`).
* **Robots.txt:** Configured via `src/app/robots.ts` (`/robots.txt`) with `/admin/` and `/api/` disallowed.
* **Admin Route Protection:** All `/admin/*` routes have `robots: { index: false, follow: false }` metadata.

---

## 🛡️ Production & Scalability Features

1. **Server Components by Default:** High performance, zero unnecessary client-side JavaScript.
2. **Prepared API Layer:** Typed API client (`src/lib/api/client.ts`) and centralized endpoint map (`src/lib/api/endpoints.ts`).
3. **Domain Types:** Strongly typed models for Services, Industries, Blog, Leads, Quotations, and Shipments.
