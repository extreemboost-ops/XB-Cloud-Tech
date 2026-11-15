export interface PageSEOMetadata {
  title: string
  description: string
  canonicalUrl: string
  ogType?: "website" | "article" | "product"
  noIndex?: boolean
  keywords?: string[]
  jsonLd?: Record<string, unknown>
}

export const BASE_URL = "https://xbcloudtech.com"

export const DEFAULT_SEO: PageSEOMetadata = {
  title: "XB Cloud Tech | Enterprise Software House & SaaS/ERP Solutions",
  description:
    "XB Cloud Tech engineers industry-specific ERP platforms, high-scale business management software, and custom digital systems that run business operations worldwide.",
  canonicalUrl: BASE_URL,
  ogType: "website",
  keywords: [
    "Enterprise Software",
    "ERP Software",
    "Retail POS",
    "School Management Software",
    "Pharmacy POS",
    "Manufacturing ERP",
    "Installment ERP",
    "Custom Software Development",
  ],
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "XB Cloud Tech",
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      "Enterprise software house and ERP provider engineering industry-specific platforms and custom digital systems.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-019-2834",
      contactType: "customer service",
      availableLanguage: ["English", "Urdu"],
    },
    sameAs: [
      "https://linkedin.com/company/xbcloudtech",
      "https://twitter.com/xbcloudtech",
      "https://github.com/xbcloudtech",
    ],
  },
}

export const SEO_REGISTRY: Record<string, PageSEOMetadata> = {
  // ── CORE CORPORATE ──────────────────────────────────────────────────────────
  "/": DEFAULT_SEO,

  "/about": {
    title: "About Us | Enterprise Software Engineering | XB Cloud Tech",
    description:
      "Learn about XB Cloud Tech's product-led engineering principles, leadership, global development hubs, and mission to engineer reliable software that runs business operations.",
    canonicalUrl: `${BASE_URL}/about`,
    ogType: "website",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About XB Cloud Tech",
      url: `${BASE_URL}/about`,
    },
  },

  "/services": {
    title: "Enterprise Software Engineering Services | XB Cloud Tech",
    description:
      "Explore full-spectrum IT and enterprise engineering capabilities: custom software, enterprise ERP, SaaS platforms, process automation, AI integration, and legacy modernization.",
    canonicalUrl: `${BASE_URL}/services`,
    ogType: "website",
  },

  "/pricing": {
    title: "Transparent Pricing & Software Licensing | XB Cloud Tech",
    description:
      "Review transparent pricing models, dedicated VPS hosting packages, on-premise licensing tiers, and custom software quotation guidelines with zero hidden fees.",
    canonicalUrl: `${BASE_URL}/pricing`,
    ogType: "website",
  },

  "/portfolio": {
    title: "Case Studies & Production Deployments | XB Cloud Tech",
    description:
      "Verified client case studies and measurable production outcomes across retail, healthcare, financial services, and manufacturing software deployments.",
    canonicalUrl: `${BASE_URL}/portfolio`,
    ogType: "website",
  },

  "/blog": {
    title: "Engineering Insights & System Architecture | XB Cloud Tech",
    description:
      "In-depth technical articles, database architecture guides, retail POS engineering tutorials, and cloud infrastructure best practices from our systems engineers.",
    canonicalUrl: `${BASE_URL}/blog`,
    ogType: "website",
  },

  "/contact": {
    title: "Contact Enterprise Sales & Technical Support | XB Cloud Tech",
    description:
      "Schedule a dedicated software demo or discuss your custom enterprise software requirements with senior systems engineers at XB Cloud Tech.",
    canonicalUrl: `${BASE_URL}/contact`,
    ogType: "website",
  },

  "/privacy": {
    title: "Privacy Policy & Data Protection Safeguards | XB Cloud Tech",
    description:
      "Our corporate commitment to data privacy, GDPR compliance, encryption standards, and customer confidentiality.",
    canonicalUrl: `${BASE_URL}/privacy`,
    ogType: "website",
  },

  "/terms": {
    title: "Terms of Service & Software Licensing | XB Cloud Tech",
    description:
      "Terms and conditions governing enterprise software licensing, maintenance agreements, SLAs, and customer responsibilities.",
    canonicalUrl: `${BASE_URL}/terms`,
    ogType: "website",
  },

  // ── PRODUCT DIRECTORY & DEDICATED PRODUCTS ──────────────────────────────────
  "/products": {
    title: "Ready-to-Deploy ERP Platforms Suite | XB Cloud Tech",
    description:
      "Explore our suite of 6 ready-to-deploy ERP platforms: Storex ERP, Purchoon ERP, CambridgeDesk, Pharmacy ERP, Industrial ERP, and Qistmarket ERP.",
    canonicalUrl: `${BASE_URL}/products`,
    ogType: "website",
  },

  "/products/storex-erp": {
    title: "Storex ERP | Retail Management & Multi-Branch POS Software",
    description:
      "Connected retail POS with sub-second barcode scanning, multi-branch stock synchronization, supplier purchase orders, and customer credit (Khata) ledgers.",
    canonicalUrl: `${BASE_URL}/products/storex-erp`,
    ogType: "product",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Storex ERP",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Windows 10, Windows 11, Cloud Web",
      offers: {
        "@type": "Offer",
        price: "Contact for Demo",
        priceCurrency: "USD",
      },
    },
  },

  "/products/purchoon-erp": {
    title: "Purchoon ERP | Grocery & Wholesale Management Software",
    description:
      "Manage grocery and wholesale operations with Purchoon ERP. Simplify weight-based POS, inventory, customer and supplier ledgers, sales, and business records.",
    canonicalUrl: `${BASE_URL}/products/purchoon-erp`,
    ogType: "product",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Purchoon ERP",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Windows 10, Windows 11, Cloud Web",
      offers: {
        "@type": "Offer",
        price: "Contact for Demo",
        priceCurrency: "USD",
      },
    },
  },

  "/products/cambridgedesk": {
    title: "CambridgeDesk | School Management & Academic ERP Platform",
    description:
      "Comprehensive school management system featuring automated 3-copy bank fee challans, Cambridge marksheet grading engine, absence SMS alerts, and parent portals.",
    canonicalUrl: `${BASE_URL}/products/cambridgedesk`,
    ogType: "product",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "CambridgeDesk",
      applicationCategory: "EducationalApplication",
      operatingSystem: "Web Cloud, On-Premise LAN",
      offers: {
        "@type": "Offer",
        price: "Contact for Demo",
        priceCurrency: "USD",
      },
    },
  },

  "/products/pharmacy-erp": {
    title: "Pharmacy ERP | Healthcare & Drug Dispensary Management Software",
    description:
      "Clinical-grade pharmacy POS with First-Expiry-First-Out (FEFO) dispensing, 25k+ chemical salt substitution, box/strip/tablet breakdown, and distributor reconciliation.",
    canonicalUrl: `${BASE_URL}/products/pharmacy-erp`,
    ogType: "product",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Pharmacy ERP",
      applicationCategory: "MedicalBusinessApplication",
      operatingSystem: "Windows 10, Windows 11, Cloud Web",
      offers: {
        "@type": "Offer",
        price: "Contact for Demo",
        priceCurrency: "USD",
      },
    },
  },

  "/products/industrial-erp": {
    title: "Industrial ERP | Manufacturing Management & Production Software",
    description:
      "Plant operations software featuring multi-level Bill of Materials (BOM), shop floor traveler job cards, scrap variance tracking, and actual unit cost accounting.",
    canonicalUrl: `${BASE_URL}/products/industrial-erp`,
    ogType: "product",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Industrial ERP",
      applicationCategory: "ManufacturingBusinessApplication",
      operatingSystem: "Linux Server, Windows Kiosk, Cloud Web",
      offers: {
        "@type": "Offer",
        price: "Contact for Demo",
        priceCurrency: "USD",
      },
    },
  },

  "/products/qistmarket-erp": {
    title: "Qistmarket ERP | Hire-Purchase & Installment Management Platform",
    description:
      "Enterprise consumer leasing software with dynamic installment plan generation, 2-guarantor KYC digital vault, mobile field recovery routing, and aging defaulter tracking.",
    canonicalUrl: `${BASE_URL}/products/qistmarket-erp`,
    ogType: "product",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Qistmarket ERP",
      applicationCategory: "FinancialBusinessApplication",
      operatingSystem: "Cloud Web, Android Mobile Portal",
      offers: {
        "@type": "Offer",
        price: "Contact for Demo",
        priceCurrency: "USD",
      },
    },
  },

  // ── DEDICATED SERVICES ──────────────────────────────────────────────────────
  "/services/custom-software-development": {
    title: "Custom Software Engineering | Bespoke Applications | XB Cloud Tech",
    description:
      "Tailored digital platforms built from scratch around your exact business logic with 100% source code ownership and zero recurring user license fees.",
    canonicalUrl: `${BASE_URL}/services/custom-software-development`,
    ogType: "website",
  },

  "/services/enterprise-erp": {
    title:
      "Enterprise ERP Development | Modular Accounting & SCM | XB Cloud Tech",
    description:
      "Multi-branch, multi-currency ERP systems with double-entry general ledgers, multi-entity consolidation, and audit-ready corporate governance.",
    canonicalUrl: `${BASE_URL}/services/enterprise-erp`,
    ogType: "website",
  },

  "/services/saas-development": {
    title:
      "SaaS Product Development | Cloud Multi-Tenant Platforms | XB Cloud Tech",
    description:
      "Design, build, and scale subscription software platforms with Row-Level Security tenant isolation, automated billing, and developer webhooks.",
    canonicalUrl: `${BASE_URL}/services/saas-development`,
    ogType: "website",
  },

  "/services/business-process-automation": {
    title: "Business Process Automation & Asynchronous Queues | XB Cloud Tech",
    description:
      "Eliminate repetitive manual data entry with resilient message queues, automated document ingestion, and two-way database synchronization.",
    canonicalUrl: `${BASE_URL}/services/business-process-automation`,
    ogType: "website",
  },

  "/services/ai-integration": {
    title: "Practical AI Integration & Intelligent Systems | XB Cloud Tech",
    description:
      "Apply artificial intelligence to suitable business processes with private RAG vector search, automated classification, and human-in-the-loop oversight.",
    canonicalUrl: `${BASE_URL}/services/ai-integration`,
    ogType: "website",
  },

  "/services/api-system-integration": {
    title: "API & Enterprise System Integration Middleware | XB Cloud Tech",
    description:
      "Connect payment gateways, shipping couriers, bank feeds, and legacy databases through secure, idempotent REST/GraphQL integration middleware.",
    canonicalUrl: `${BASE_URL}/services/api-system-integration`,
    ogType: "website",
  },

  "/services/legacy-modernization": {
    title:
      "Legacy System Modernization & Zero-Downtime Migration | XB Cloud Tech",
    description:
      "Upgrade fragile Visual FoxPro, Access, or legacy desktop systems into modern PostgreSQL architectures with zero operational data loss.",
    canonicalUrl: `${BASE_URL}/services/legacy-modernization`,
    ogType: "website",
  },

  // ── DEDICATED INDUSTRY SOLUTIONS ───────────────────────────────────────────
  "/industries": {
    title: "Sector Solutions Architecture | XB Cloud Tech",
    description:
      "Software solutions engineered for operational reality across retail, grocery, education, healthcare, manufacturing, and installment leasing.",
    canonicalUrl: `${BASE_URL}/industries`,
    ogType: "website",
  },

  "/industries/retail-wholesale": {
    title: "Retail & Wholesale Software Solutions | XB Cloud Tech",
    description:
      "Omni-channel stock control, sub-second barcode POS, direct weight scale sync, and customer credit ledgers for retail stores and bulk wholesalers.",
    canonicalUrl: `${BASE_URL}/industries/retail-wholesale`,
    ogType: "website",
  },

  "/industries/education": {
    title: "School & Academic Software Solutions | XB Cloud Tech",
    description:
      "Connected campus lifecycle management, 1-click batch bank fee challans, Cambridge marksheet grading engines, and biometric attendance SMS alerts.",
    canonicalUrl: `${BASE_URL}/industries/education`,
    ogType: "website",
  },

  "/industries/pharmacy": {
    title: "Healthcare & Pharmacy Software Solutions | XB Cloud Tech",
    description:
      "Clinical-grade dispensary POS with FEFO batch expiry quarantine, 25,000+ chemical salt substitutions, and narcotics regulatory registers.",
    canonicalUrl: `${BASE_URL}/industries/pharmacy`,
    ogType: "website",
  },

  "/industries/manufacturing": {
    title: "Industrial & Manufacturing Software Solutions | XB Cloud Tech",
    description:
      "End-to-end production management connecting multi-level BOMs, shop floor traveler job cards, scrap variance ledgers, and actual unit costing.",
    canonicalUrl: `${BASE_URL}/industries/manufacturing`,
    ogType: "website",
  },

  "/industries/distribution": {
    title: "Distribution, Transit & Fleet Software Solutions | XB Cloud Tech",
    description:
      "Multi-depot stock transit verification, delivery vehicle loading manifests, and driver cash collection reconciliation with zero leaks.",
    canonicalUrl: `${BASE_URL}/industries/distribution`,
    ogType: "website",
  },

  "/industries/financial-services": {
    title: "Installment Commerce & Leasing Solutions | XB Cloud Tech",
    description:
      "Risk management and field collection software for hire-purchase retailers, consumer credit firms, and micro-finance lenders.",
    canonicalUrl: `${BASE_URL}/industries/financial-services`,
    ogType: "website",
  },

  // ── PAID CAMPAIGN LANDING PAGES (NOINDEX TO PREVENT CANONICAL CONFUSION) ────
  "/lp/storex-retail": {
    title: "Storex Retail ERP | High-Speed POS & Stock Sync Demo",
    description:
      "Book a Storex ERP demo for your retail store. Sub-second barcode POS, multi-branch stock sync, and offline resilience.",
    canonicalUrl: `${BASE_URL}/products/storex-erp`,
    noIndex: true,
  },

  "/lp/purchoon-wholesale": {
    title: "Purchoon ERP | Weight-Based POS for Grocery & Wholesale Demo",
    description:
      "Book a Purchoon ERP demo for grocery and wholesale operations. Weight scale integration, loose commodities, and Udhar ledger.",
    canonicalUrl: `${BASE_URL}/products/purchoon-erp`,
    noIndex: true,
  },

  "/lp/cambridgedesk-schools": {
    title: "CambridgeDesk | School Management & Academic ERP Demo",
    description:
      "Schedule a CambridgeDesk demo. Batch bank fee challan generation, Cambridge grading marksheets, and parent portal.",
    canonicalUrl: `${BASE_URL}/products/cambridgedesk`,
    noIndex: true,
  },

  "/lp/pharmacy-management": {
    title: "Pharmacy ERP | Clinical Dispensary & Expiry Safety Demo",
    description:
      "Request a Pharmacy ERP demo. FEFO batch expiry quarantine, 25k+ chemical salt substitutions, and multi-unit breakdown.",
    canonicalUrl: `${BASE_URL}/products/pharmacy-erp`,
    noIndex: true,
  },

  "/lp/industrial-erp": {
    title: "Industrial ERP | Manufacturing BOM & Job Card Operations Demo",
    description:
      "Discuss Industrial ERP specifications. Multi-level Bill of Materials (BOM), shop floor work orders, and batch costing.",
    canonicalUrl: `${BASE_URL}/products/industrial-erp`,
    noIndex: true,
  },

  "/lp/custom-enterprise-software": {
    title: "Custom Enterprise Software Engineering Scoping Call",
    description:
      "Schedule an architectural scoping workshop with senior systems engineers. Bespoke business applications with 100% IP ownership.",
    canonicalUrl: `${BASE_URL}/services/custom-software-development`,
    noIndex: true,
  },

  "/lp/custom-erp-development": {
    title: "Custom Enterprise Software Engineering Scoping Call",
    description:
      "Schedule an architectural scoping workshop with senior systems engineers. Bespoke business applications with 100% IP ownership.",
    canonicalUrl: `${BASE_URL}/services/custom-software-development`,
    noIndex: true,
  },
}
