import {
  AdminUser,
  ActivityLogItem,
  BlogArticle,
  CMSLandingPage,
  CMSPage,
  CMSProduct,
  DesignTokens,
  FormConfig,
  FormSubmission,
  GlobalFooter,
  GlobalNavigation,
  MediaAsset,
  PublishVersion,
  WebsiteSettings,
} from "../types/adminCms"
import { PRODUCTS_DATA, ProductData } from "../data/products"
import { CAMPAIGNS_DATA, CampaignData } from "../data/campaigns"

const STORAGE_KEY = "xb_cms_master_store_v1"

export interface CMSMasterState {
  users: AdminUser[]
  designTokens: DesignTokens
  settings: WebsiteSettings
  navigation: GlobalNavigation
  footer: GlobalFooter
  pages: CMSPage[]
  products: CMSProduct[]
  landingPages: CMSLandingPage[]
  mediaAssets: MediaAsset[]
  blogArticles: BlogArticle[]
  forms: FormConfig[]
  submissions: FormSubmission[]
  versions: PublishVersion[]
  activityLogs: ActivityLogItem[]
}

const DEFAULT_USERS: AdminUser[] = [
  {
    id: "user_1",
    name: "Bilal Khan",
    email: "superadmin@xbcloudtech.com",
    role: "super_admin",
    createdAt: "2026-01-15T09:00:00Z",
    status: "active",
  },
  {
    id: "user_2",
    name: "Sarah Ahmed",
    email: "admin@xbcloudtech.com",
    role: "admin",
    createdAt: "2026-02-01T10:00:00Z",
    status: "active",
  },
  {
    id: "user_3",
    name: "Tariq Mahmood",
    email: "editor@xbcloudtech.com",
    role: "editor",
    createdAt: "2026-03-10T11:30:00Z",
    status: "active",
  },
  {
    id: "user_4",
    name: "Ayesha Malik",
    email: "marketing@xbcloudtech.com",
    role: "marketing",
    createdAt: "2026-04-05T14:15:00Z",
    status: "active",
  },
  {
    id: "user_5",
    name: "Zubair Ali",
    email: "viewer@xbcloudtech.com",
    role: "viewer",
    createdAt: "2026-05-12T16:45:00Z",
    status: "active",
  },
]

const DEFAULT_DESIGN_TOKENS: DesignTokens = {
  primaryColor: "#0B5FFF",
  primaryHoverColor: "#0848CC",
  accentColor: "#00D4FF",
  darkNavyColor: "#0A0F1E",
  surfaceColor: "#FFFFFF",
  surfaceSecondaryColor: "#F8FAFC",
  textColor: "#0F172A",
  textMutedColor: "#64748B",
  borderRadius: "large",
  fontHeading: "Inter, system-ui, sans-serif",
  fontBody: "Inter, system-ui, sans-serif",
  headerSticky: true,
  enableSmoothScroll: true,
}

const DEFAULT_SETTINGS: WebsiteSettings = {
  companyName: "XB Cloud Tech",
  tagline: "Enterprise Software & Vertical ERP Engineering",
  supportEmail: "support@xbcloudtech.com",
  salesEmail: "contact@xbcloudtech.com",
  phone: "+92 300 0000000",
  whatsappNumber: "+923000000000",
  address: "Commercial Hub, Main Boulevard, Lahore, Pakistan",
  timezone: "Asia/Karachi",
  defaultMetaTitle:
    "XB Cloud Tech | Enterprise Software & Vertical ERP Systems",
  defaultMetaDescription:
    "Pioneering mission-critical enterprise ERP systems, custom SaaS applications, and automated workflows for retail, manufacturing, education, and healthcare.",
  defaultOgImage: "https://xbcloudtech.com/og-default.png",
  googleAnalyticsId: "G-XBCLOUDTECH",
  enableLiveChat: true,
  maintenanceMode: false,
}

const DEFAULT_NAVIGATION: GlobalNavigation = {
  logoUrl: "/favicon.ico",
  companyName: "XB Cloud Tech",
  primaryCta: {
    label: "Schedule Architecture Call",
    href: "/contact",
    visible: true,
  },
  items: [
    {
      id: "nav_products",
      label: "Products",
      href: "/products",
      children: [
        {
          id: "sub_storex",
          label: "Storex ERP",
          href: "/products/storex-erp",
          description: "Retail POS, Multi-store Inventory & Barcode Operations",
        },
        {
          id: "sub_purchoon",
          label: "Purchoon ERP",
          href: "/products/purchoon-erp",
          description: "Loose-Weight Grocery POS, Bori Inventory & Ledgers",
        },
        {
          id: "sub_cambridge",
          label: "CambridgeDesk ERP",
          href: "/products/cambridgedesk",
          description: "School Lifecycle, Automated Fee Challans & LMS",
        },
        {
          id: "sub_pharmacy",
          label: "Pharmacy ERP",
          href: "/products/pharmacy-erp",
          description: "FEFO/Expiry Tracking, Batch Controls & Narcotic Logs",
        },
        {
          id: "sub_industrial",
          label: "Industrial ERP",
          href: "/products/industrial-erp",
          description: "Multi-Level BOM, Work Orders & Shop Floor Tracking",
        },
        {
          id: "sub_qistmarket",
          label: "Qistmarket ERP",
          href: "/products/qistmarket-erp",
          description: "2-Guarantor Installment Ledgers & Recovery Routing",
        },
      ],
    },
    {
      id: "nav_services",
      label: "Services",
      href: "/services",
      children: [
        {
          id: "sub_custom_sw",
          label: "Custom Software Development",
          href: "/services/custom-software-development",
          description: "Bespoke web & mobile enterprise solutions",
        },
        {
          id: "sub_erp_arch",
          label: "Enterprise ERP Architecture",
          href: "/services/enterprise-erp",
          description: "Robust, compliant and scalable core systems",
        },
        {
          id: "sub_saas_dev",
          label: "SaaS Platform Development",
          href: "/services/saas-development",
          description: "Multi-tenant cloud applications",
        },
        {
          id: "sub_ai_int",
          label: "AI & Data Engineering",
          href: "/services/ai-integration",
          description: "Intelligent process automation & predictive models",
        },
      ],
    },
    {
      id: "nav_industries",
      label: "Industries",
      href: "/industries",
      children: [
        {
          id: "sub_ind_retail",
          label: "Retail & Wholesale",
          href: "/industries/retail-wholesale",
        },
        {
          id: "sub_ind_edu",
          label: "Education & Schools",
          href: "/industries/education",
        },
        {
          id: "sub_ind_pharma",
          label: "Healthcare & Pharmacy",
          href: "/industries/pharmacy",
        },
        {
          id: "sub_ind_mfg",
          label: "Industrial Manufacturing",
          href: "/industries/manufacturing",
        },
        {
          id: "sub_ind_dist",
          label: "Distribution & Logistics",
          href: "/industries/distribution",
        },
        {
          id: "sub_ind_fin",
          label: "Installment & Microfinance",
          href: "/industries/financial-services",
        },
      ],
    },
    { id: "nav_pricing", label: "Pricing", href: "/pricing" },
    { id: "nav_portfolio", label: "Portfolio", href: "/portfolio" },
    { id: "nav_blog", label: "Insights", href: "/blog" },
    { id: "nav_about", label: "Company", href: "/about" },
  ],
}

const DEFAULT_FOOTER: GlobalFooter = {
  companyDescription:
    "XB Cloud Tech is a global software engineering powerhouse building mission-critical enterprise ERP systems, specialized vertical SaaS platforms, and automated workflow pipelines.",
  copyrightText: "© 2026 XB Cloud Tech. All rights reserved.",
  contactEmail: "contact@xbcloudtech.com",
  contactPhone: "+92 300 0000000",
  officeAddress: "Commercial Hub, Main Boulevard, Lahore, Pakistan",
  columns: [
    {
      id: "col_products",
      title: "Flagship Products",
      links: [
        {
          id: "link_1",
          label: "Storex Retail ERP",
          href: "/products/storex-erp",
        },
        {
          id: "link_2",
          label: "Purchoon Grocery POS",
          href: "/products/purchoon-erp",
        },
        {
          id: "link_3",
          label: "CambridgeDesk School ERP",
          href: "/products/cambridgedesk",
        },
        {
          id: "link_4",
          label: "Clinical Pharmacy ERP",
          href: "/products/pharmacy-erp",
        },
        {
          id: "link_5",
          label: "Industrial BOM ERP",
          href: "/products/industrial-erp",
        },
        {
          id: "link_6",
          label: "Qistmarket Installments",
          href: "/products/qistmarket-erp",
        },
      ],
    },
    {
      id: "col_services",
      title: "Engineering Services",
      links: [
        {
          id: "link_7",
          label: "Custom Software Development",
          href: "/services/custom-software-development",
        },
        {
          id: "link_8",
          label: "Enterprise ERP Architecture",
          href: "/services/enterprise-erp",
        },
        {
          id: "link_9",
          label: "SaaS Platform Engineering",
          href: "/services/saas-development",
        },
        {
          id: "link_10",
          label: "Business Process Automation",
          href: "/services/business-process-automation",
        },
        {
          id: "link_11",
          label: "Enterprise AI & Automation",
          href: "/services/ai-integration",
        },
        {
          id: "link_12",
          label: "Legacy Core Modernization",
          href: "/services/legacy-modernization",
        },
      ],
    },
    {
      id: "col_company",
      title: "Company & Insights",
      links: [
        { id: "link_13", label: "About XB Cloud Tech", href: "/about" },
        { id: "link_14", label: "Commercial Pricing Plans", href: "/pricing" },
        { id: "link_15", label: "Deployment Case Studies", href: "/portfolio" },
        { id: "link_16", label: "Technical Architecture Blog", href: "/blog" },
        { id: "link_17", label: "Book Architecture Call", href: "/contact" },
      ],
    },
    {
      id: "col_legal",
      title: "Security & Legal",
      links: [
        { id: "link_18", label: "Privacy Policy", href: "/privacy" },
        { id: "link_19", label: "Terms of Service", href: "/terms" },
        { id: "link_20", label: "Data Protection & SLA", href: "/terms" },
        { id: "link_21", label: "Security Architecture", href: "/about" },
      ],
    },
  ],
  socialLinks: [
    { platform: "linkedin", url: "https://linkedin.com/company/xbcloudtech" },
    { platform: "twitter", url: "https://twitter.com/xbcloudtech" },
    { platform: "github", url: "https://github.com/extreemboost-ops" },
    { platform: "facebook", url: "https://facebook.com/xbcloudtech" },
  ],
}

const DEFAULT_MEDIA: MediaAsset[] = [
  {
    id: "med_1",
    name: "Storex POS Terminal",
    url: "/images/products/storex-pos.svg",
    type: "svg",
    sizeBytes: 14200,
    dimensions: { width: 1920, height: 1080 },
    altText: "Storex Retail POS Terminal",
    folder: "products",
    uploadedAt: "2026-11-15T12:00:00Z",
    usedInCount: 3,
  },
  {
    id: "med_2",
    name: "Storex Stock Audit",
    url: "/images/products/storex-stock.svg",
    type: "svg",
    sizeBytes: 15100,
    dimensions: { width: 1600, height: 900 },
    altText: "Storex Stock Multi-Warehouse Audit",
    folder: "products",
    uploadedAt: "2026-11-15T12:00:00Z",
    usedInCount: 2,
  },
  {
    id: "med_3",
    name: "Storex Ledger Audit",
    url: "/images/products/storex-ledger.svg",
    type: "svg",
    sizeBytes: 13900,
    dimensions: { width: 1600, height: 900 },
    altText: "Storex Customer Ledger and Credit Audit",
    folder: "products",
    uploadedAt: "2026-11-15T12:00:00Z",
    usedInCount: 2,
  },
  {
    id: "med_4",
    name: "Storex Analytics",
    url: "/images/products/storex-analytics.svg",
    type: "svg",
    sizeBytes: 16400,
    dimensions: { width: 1200, height: 800 },
    altText: "Storex Multi-Branch Financial Analytics",
    folder: "products",
    uploadedAt: "2026-11-15T12:00:00Z",
    usedInCount: 2,
  },
  {
    id: "med_5",
    name: "Purchoon POS Terminal",
    url: "/images/products/purchoon-pos.svg",
    type: "svg",
    sizeBytes: 14800,
    dimensions: { width: 1920, height: 1080 },
    altText: "Purchoon Loose Weight Grocery POS",
    folder: "products",
    uploadedAt: "2026-11-15T12:00:00Z",
    usedInCount: 4,
  },
  {
    id: "med_6",
    name: "Purchoon Bori Inventory",
    url: "/images/products/purchoon-bori.svg",
    type: "svg",
    sizeBytes: 15300,
    dimensions: { width: 1600, height: 900 },
    altText: "Purchoon Bulk Bori & Sack Inventory",
    folder: "products",
    uploadedAt: "2026-11-15T12:00:00Z",
    usedInCount: 3,
  },
  {
    id: "med_7",
    name: "Purchoon Udhar Ledger",
    url: "/images/products/purchoon-ledger.svg",
    type: "svg",
    sizeBytes: 14100,
    dimensions: { width: 1600, height: 900 },
    altText: "Purchoon Customer Khata & Udhar Ledger",
    folder: "products",
    uploadedAt: "2026-11-15T12:00:00Z",
    usedInCount: 3,
  },
  {
    id: "med_8",
    name: "Purchoon Supplier Receiving",
    url: "/images/products/purchoon-receiving.svg",
    type: "svg",
    sizeBytes: 13700,
    dimensions: { width: 1200, height: 800 },
    altText: "Purchoon Wholesale Vehicle Challan Receiving",
    folder: "products",
    uploadedAt: "2026-11-15T12:00:00Z",
    usedInCount: 2,
  },
  {
    id: "med_9",
    name: "CambridgeDesk Dashboard",
    url: "/images/products/cambridgedesk-hero.svg",
    type: "svg",
    sizeBytes: 16200,
    dimensions: { width: 1920, height: 1080 },
    altText: "CambridgeDesk Unified School Dashboard",
    folder: "products",
    uploadedAt: "2026-11-15T12:00:00Z",
    usedInCount: 4,
  },
  {
    id: "med_10",
    name: "CambridgeDesk Fee Challan",
    url: "/images/products/cambridgedesk-challan.svg",
    type: "svg",
    sizeBytes: 15800,
    dimensions: { width: 1600, height: 900 },
    altText: "CambridgeDesk 3-Part Bank Fee Challan",
    folder: "products",
    uploadedAt: "2026-11-15T12:00:00Z",
    usedInCount: 3,
  },
  {
    id: "med_11",
    name: "CambridgeDesk Exam Report",
    url: "/images/products/cambridgedesk-exam.svg",
    type: "svg",
    sizeBytes: 14900,
    dimensions: { width: 1600, height: 900 },
    altText: "CambridgeDesk Term Exam Report Card",
    folder: "products",
    uploadedAt: "2026-11-15T12:00:00Z",
    usedInCount: 3,
  },
  {
    id: "med_12",
    name: "CambridgeDesk Attendance",
    url: "/images/products/cambridgedesk-attendance.svg",
    type: "svg",
    sizeBytes: 13800,
    dimensions: { width: 1200, height: 800 },
    altText: "CambridgeDesk Biometric RFID Student Attendance",
    folder: "products",
    uploadedAt: "2026-11-15T12:00:00Z",
    usedInCount: 2,
  },
  {
    id: "med_13",
    name: "Pharmacy POS & FEFO",
    url: "/images/products/pharmacy-pos.svg",
    type: "svg",
    sizeBytes: 15500,
    dimensions: { width: 1920, height: 1080 },
    altText: "Pharmacy ERP FEFO Expiry Barcode POS",
    folder: "products",
    uploadedAt: "2026-11-15T12:00:00Z",
    usedInCount: 3,
  },
  {
    id: "med_14",
    name: "Industrial BOM Production",
    url: "/images/products/industrial-bom.svg",
    type: "svg",
    sizeBytes: 16000,
    dimensions: { width: 1920, height: 1080 },
    altText: "Industrial Multi-Level BOM Production Line",
    folder: "products",
    uploadedAt: "2026-11-15T12:00:00Z",
    usedInCount: 3,
  },
  {
    id: "med_15",
    name: "Qistmarket Ledger & KYC",
    url: "/images/products/qistmarket-ledger.svg",
    type: "svg",
    sizeBytes: 15900,
    dimensions: { width: 1920, height: 1080 },
    altText: "Qistmarket Installment Ledger and Defaulter Recovery",
    folder: "products",
    uploadedAt: "2026-11-15T12:00:00Z",
    usedInCount: 3,
  },
]

const DEFAULT_BLOG_ARTICLES: BlogArticle[] = [
  {
    id: "art_1",
    title:
      "Architecting Resilient Multi-Branch ERP Systems for Emerging Markets",
    slug: "architecting-resilient-multi-branch-erp-systems",
    excerpt:
      "How offline-first synchronization, transactional integrity, and edge caching prevent catastrophic data loss in fluctuating connectivity environments.",
    content:
      "In emerging retail and wholesale economies, high-latency internet and power outages represent standard operating conditions rather than edge cases. This architecture paper dissects our event-sourcing SQLite edge replica design deployed across 1,200+ retail lanes.",
    author: { name: "Bilal Khan", role: "Principal Systems Architect" },
    category: "Architecture",
    tags: ["Distributed Systems", "Offline First", "ERP", "PostgreSQL"],
    featuredImage: "/images/products/storex-analytics.svg",
    readTimeMinutes: 7,
    status: "published",
    publishedAt: "2026-10-15T10:00:00Z",
    updatedAt: "2026-11-10T14:30:00Z",
    seo: {
      metaTitle:
        "Architecting Resilient Multi-Branch ERP Systems | XB Cloud Tech",
      metaDescription:
        "Deep dive into offline-first POS synchronization, transactional integrity, and edge caching for retail enterprises.",
    },
  },
  {
    id: "art_2",
    title:
      "Automating 3-Part Bank Challan Generation & Reconciliation at Scale",
    slug: "automating-bank-challan-generation-at-scale",
    excerpt:
      "Eliminating fee fraud, duplicate receipts, and manual teller voucher stamping through dynamic Kuickpay and 1Link virtual IBAN routing.",
    content:
      "School networks processing 50,000+ monthly fee vouchers face enormous reconciliation drag. Discover how CambridgeDesk integrates with national payment switches for sub-second verification.",
    author: { name: "Sarah Ahmed", role: "Fintech Solutions Lead" },
    category: "Fintech",
    tags: ["Banking", "Challan", "Education ERP", "Payment Gateway"],
    featuredImage: "/images/products/cambridgedesk-challan.svg",
    readTimeMinutes: 5,
    status: "published",
    publishedAt: "2026-10-28T09:00:00Z",
    updatedAt: "2026-11-05T11:00:00Z",
    seo: {
      metaTitle: "Automating 3-Part Bank Challan Generation | XB Cloud Tech",
      metaDescription:
        "Eliminating manual fee reconciliation with automated 1Link and virtual IBAN integrations.",
    },
  },
  {
    id: "art_3",
    title:
      "FEFO Drug Inventory: Preventing Expiry Waste in Clinical Pharmacies",
    slug: "fefo-drug-inventory-preventing-expiry-waste",
    excerpt:
      "Batch-specific barcode parsing, thermal stability compliance, and automated DRAP recall logs for multi-chain pharmacies.",
    content:
      "Expired medication losses account for 4.2% of retail pharmacy margins. We examine the exact algorithms used in Pharmacy ERP to enforce First-Expiry-First-Out dispensing at checkout.",
    author: { name: "Dr. Tariq Mahmood", role: "Healthcare ERP Specialist" },
    category: "Healthcare",
    tags: ["Pharmacy", "FEFO", "Compliance", "Inventory Control"],
    featuredImage: "/images/products/pharmacy-pos.svg",
    readTimeMinutes: 6,
    status: "published",
    publishedAt: "2026-11-04T12:00:00Z",
    updatedAt: "2026-11-12T16:00:00Z",
    seo: {
      metaTitle: "FEFO Drug Inventory & Expiry Controls | XB Cloud Tech",
      metaDescription:
        "How clinical pharmacies eliminate stock loss with batch-level FEFO automation and DRAP recall readiness.",
    },
  },
]

const DEFAULT_FORMS: FormConfig[] = [
  {
    id: "form_contact",
    title: "Architecture Consultation Call",
    code: "contact_form",
    submitButtonText: "Schedule Architecture Call",
    successMessage:
      "Your architecture scoping request has been received. A senior solutions architect will contact you within 2 business hours.",
    notifyEmail: "contact@xbcloudtech.com",
    fields: [
      {
        id: "f_name",
        label: "Full Name",
        name: "name",
        type: "text",
        placeholder: "e.g. Tariq Khan",
        required: true,
      },
      {
        id: "f_email",
        label: "Corporate Email",
        name: "email",
        type: "email",
        placeholder: "tariq@enterprise.com",
        required: true,
      },
      {
        id: "f_phone",
        label: "Phone / WhatsApp",
        name: "phone",
        type: "phone",
        placeholder: "+92 300 1234567",
        required: true,
      },
      {
        id: "f_company",
        label: "Company / Institution",
        name: "company",
        type: "text",
        placeholder: "Enterprise Corp",
        required: false,
      },
      {
        id: "f_product",
        label: "Platform of Interest",
        name: "interest",
        type: "select",
        required: true,
        options: [
          "Storex Retail ERP",
          "Purchoon Wholesale ERP",
          "CambridgeDesk School ERP",
          "Clinical Pharmacy ERP",
          "Industrial BOM ERP",
          "Qistmarket Installments",
          "Custom Software Development",
        ],
      },
      {
        id: "f_message",
        label: "Project Scope & Requirements",
        name: "message",
        type: "textarea",
        placeholder: "Describe your current system and deployment goals...",
        required: false,
      },
    ],
  },
  {
    id: "form_demo",
    title: "Product Demo Booking",
    code: "demo_form",
    submitButtonText: "Request Guided Live Demo",
    successMessage:
      "Demo scheduled! Our technical deployment engineer will prepare a customized sandbox environment for your walkthrough.",
    notifyEmail: "sales@xbcloudtech.com",
    fields: [
      {
        id: "d_name",
        label: "Full Name",
        name: "name",
        type: "text",
        placeholder: "Your Name",
        required: true,
      },
      {
        id: "d_phone",
        label: "WhatsApp Number",
        name: "phone",
        type: "phone",
        placeholder: "+92 300 0000000",
        required: true,
      },
      {
        id: "d_business",
        label: "Business / Organization",
        name: "company",
        type: "text",
        placeholder: "Your Business Name",
        required: true,
      },
      {
        id: "d_branches",
        label: "Number of Branches / Lanes",
        name: "branches",
        type: "select",
        required: true,
        options: [
          "1 Single Location",
          "2-5 Branches",
          "6-20 Multi-Branch",
          "20+ Enterprise Fleet",
        ],
      },
    ],
  },
]

const DEFAULT_SUBMISSIONS: FormSubmission[] = [
  {
    id: "subm_1",
    formId: "form_contact",
    formName: "Architecture Consultation Call",
    submittedAt: "2026-11-15T18:24:00Z",
    sourceUrl: "/contact",
    status: "read",
    data: {
      name: "Muhammad Usman",
      email: "usman@metrohyper.com",
      phone: "+92 321 8899770",
      company: "Metro Hypermarkets (4 Branches)",
      interest: "Storex Retail ERP",
      message:
        "Looking to replace legacy desktop POS with Storex ERP across 32 checkout counters.",
    },
  },
  {
    id: "subm_2",
    formId: "form_demo",
    formName: "Product Demo Booking",
    submittedAt: "2026-11-15T21:40:00Z",
    sourceUrl: "/products/purchoon-erp",
    status: "unread",
    data: {
      name: "Haji Abdul Qayyum",
      phone: "+92 300 4455667",
      company: "Qayyum Kiryana & Wholesale Grain Market",
      branches: "1 Single Location",
    },
  },
]

// Helper to convert PRODUCTS_DATA to initial CMSProducts
function seedProductsFromData(): CMSProduct[] {
  return (Object.values(PRODUCTS_DATA) as ProductData[]).map((prod) => {
    return {
      id: `prod_${prod.slug}`,
      slug: prod.slug,
      name: prod.name,
      tagline: prod.tagline,
      category: prod.category,
      description: prod.solutionOverview || prod.tagline,
      badge: prod.badge,
      heroHeadline: prod.heroHeadline,
      heroSubheadline: prod.heroSubhead || "",
      primaryColor: prod.color || "#0B5FFF",
      accentColor: "#00D4FF",
      status: "published" as const,
      updatedAt: "2026-11-15T23:00:00Z",
      updatedBy: "System Seed",
      features: (prod.modules || []).map((m, idx) => ({
        id: `feat_${idx}`,
        title: m.title,
        description: m.desc,
        iconName: m.iconName,
        metrics: m.features?.[0],
      })),
      benefits: (prod.featureOutcomes || []).map((b) => ({
        title: b.feature,
        description: b.businessOutcome,
      })),
      screenshots: (prod.screenshots || []).map((s, idx) => ({
        id: s.id,
        title: s.title,
        caption: s.caption || s.subtitle || "",
        image: s.src,
        recommendedResolution: s.dimensions,
        slotNumber: ((idx % 4) + 1) as 1 | 2 | 3 | 4,
      })),
      faqs: (prod.faqs || []).map((q) => ({
        question: q.question,
        answer: q.answer,
      })),
      primaryCtaText: "Request Guided Demo",
      primaryCtaLink: "/contact",
      secondaryCtaText: "Explore Features",
      secondaryCtaLink: "#features",
      seo: {
        metaTitle: `${prod.name} | Enterprise Management Software`,
        metaDescription: prod.solutionOverview || prod.tagline,
      },
    }
  })
}

// Helper to convert CAMPAIGNS_DATA to initial CMSLandingPages
function seedLandingPagesFromData(): CMSLandingPage[] {
  return (Object.values(CAMPAIGNS_DATA) as CampaignData[]).map((camp) => {
    return {
      id: `lp_${camp.slug}`,
      slug: camp.slug,
      title: camp.name,
      headline: camp.heroHeadline,
      subheadline: camp.heroSubhead,
      productSlug: camp.simulatorType,
      badge: camp.productBadge,
      primaryCtaText: camp.primaryCta,
      primaryCtaAction: "form" as const,
      whatsappNumber: camp.whatsappNumber,
      leadFormHeadline: "Get Instant Pricing & Private Demo Access",
      benefits: camp.benefits,
      proofPoints: [
        { value: "100%", label: "Offline Resilient" },
        { value: "< 2.4s", label: "Checkout Transaction" },
        { value: "24/7", label: "Enterprise SLA" },
      ],
      status: "published" as const,
      updatedAt: "2026-11-15T23:00:00Z",
      updatedBy: "System Seed",
      seo: {
        metaTitle: `${camp.name} | XB Cloud Tech Official Campaign`,
        metaDescription: camp.heroSubhead,
        noIndex: true, // Ad landing pages shouldn't be indexed to avoid duplicate canonicals
      },
    }
  })
}

// Initial Core Website Pages
const DEFAULT_PAGES: CMSPage[] = [
  {
    id: "page_home",
    title: "Corporate Homepage",
    slug: "",
    route: "/",
    status: "published",
    updatedAt: "2026-11-15T22:00:00Z",
    updatedBy: "System Seed",
    publishedAt: "2026-11-15T22:00:00Z",
    version: 1,
    seo: {
      metaTitle: "XB Cloud Tech | Enterprise Software & Vertical ERP Systems",
      metaDescription:
        "Pioneering mission-critical enterprise ERP systems, custom SaaS applications, and automated workflows for retail, manufacturing, education, and healthcare.",
      canonicalUrl: "https://xbcloudtech.com/",
    },
    sections: [
      {
        id: "sec_home_hero",
        type: "hero",
        title: "Hero Section",
        order: 1,
        visible: true,
        content: {
          badge: "MISSION-CRITICAL ENTERPRISE SYSTEMS",
          headline:
            "Enterprise Software & Vertical ERP Systems Built for Heavy Operational Realities.",
          subheadline:
            "XB Cloud Tech engineers specialized ERP platforms, offline-resilient retail POS networks, automated school operating systems, and bespoke multi-tenant SaaS.",
          primaryCta: "Explore Enterprise Products",
          primaryLink: "/products",
          secondaryCta: "Schedule Architecture Call",
          secondaryLink: "/contact",
        },
        styles: { paddingY: "large", containerWidth: "default" },
      },
      {
        id: "sec_home_stats",
        type: "stats_counter",
        title: "Performance Proof Points",
        order: 2,
        visible: true,
        content: {
          stats: [
            { label: "Annual Transactions Tracked", value: "₨ 4.8B+" },
            { label: "Daily Offline POS Uptime", value: "99.98%" },
            { label: "Active Retail & Campus Lanes", value: "1,450+" },
            { label: "Zero-Data-Loss Architecture", value: "100%" },
          ],
        },
        styles: { paddingY: "medium", containerWidth: "default" },
      },
    ],
  },
  {
    id: "page_about",
    title: "About XB Cloud Tech",
    slug: "about",
    route: "/about",
    status: "published",
    updatedAt: "2026-11-15T22:00:00Z",
    updatedBy: "System Seed",
    publishedAt: "2026-11-15T22:00:00Z",
    version: 1,
    seo: {
      metaTitle: "About Us | XB Cloud Tech Engineering",
      metaDescription:
        "Learn about our engineering philosophy, leadership team, and track record in mission-critical business software.",
      canonicalUrl: "https://xbcloudtech.com/about",
    },
    sections: [
      {
        id: "sec_about_hero",
        type: "hero",
        title: "About Company Hero",
        order: 1,
        visible: true,
        content: {
          badge: "ENGINEERING EXCELLENCE",
          headline:
            "Building Robust Software for Operations That Cannot Afford Downtime.",
          subheadline:
            "We are a specialized engineering team dedicated to solving high-stakes enterprise challenges.",
        },
        styles: { paddingY: "large", containerWidth: "default" },
      },
    ],
  },
  {
    id: "page_pricing",
    title: "Commercial Licensing & Pricing",
    slug: "pricing",
    route: "/pricing",
    status: "published",
    updatedAt: "2026-11-15T22:00:00Z",
    updatedBy: "System Seed",
    publishedAt: "2026-11-15T22:00:00Z",
    version: 1,
    seo: {
      metaTitle: "Commercial Pricing & Enterprise Licensing | XB Cloud Tech",
      metaDescription:
        "Transparent licensing tiers for Storex, Purchoon, CambridgeDesk, Pharmacy, and Industrial ERP platforms.",
      canonicalUrl: "https://xbcloudtech.com/pricing",
    },
    sections: [],
  },
  {
    id: "page_contact",
    title: "Contact & Architecture Scoping",
    slug: "contact",
    route: "/contact",
    status: "published",
    updatedAt: "2026-11-15T22:00:00Z",
    updatedBy: "System Seed",
    publishedAt: "2026-11-15T22:00:00Z",
    version: 1,
    seo: {
      metaTitle: "Schedule an Architecture Consultation | XB Cloud Tech",
      metaDescription:
        "Speak directly with our senior ERP architects and enterprise software engineers.",
      canonicalUrl: "https://xbcloudtech.com/contact",
    },
    sections: [],
  },
]

const DEFAULT_ACTIVITY: ActivityLogItem[] = [
  {
    id: "act_1",
    userId: "user_1",
    userName: "Bilal Khan",
    action: "System Bootstrapped",
    entityType: "system",
    entityId: "root",
    entityName: "XB Cloud Tech CMS",
    timestamp: "2026-11-16T00:00:00Z",
    details:
      "Initial CMS database state seeded with canonical product schemas and design system.",
    type: "create",
  },
  {
    id: "act_2",
    userId: "user_1",
    userName: "Bilal Khan",
    action: "Published Version 1",
    entityType: "page",
    entityId: "page_home",
    entityName: "Corporate Homepage",
    timestamp: "2026-11-16T00:05:00Z",
    details: "Initial production publication of home route and SEO metadata.",
    type: "publish",
  },
]

class AdminCMSStore {
  private state: CMSMasterState
  private listeners: Set<() => void> = new Set()

  constructor() {
    this.state = this.loadFromStorage()
  }

  private loadFromStorage(): CMSMasterState {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        // Ensure all required collections exist
        return {
          users: parsed.users || DEFAULT_USERS,
          designTokens: parsed.designTokens || DEFAULT_DESIGN_TOKENS,
          settings: parsed.settings || DEFAULT_SETTINGS,
          navigation: parsed.navigation || DEFAULT_NAVIGATION,
          footer: parsed.footer || DEFAULT_FOOTER,
          pages: parsed.pages || DEFAULT_PAGES,
          products: parsed.products || seedProductsFromData(),
          landingPages: parsed.landingPages || seedLandingPagesFromData(),
          mediaAssets: parsed.mediaAssets || DEFAULT_MEDIA,
          blogArticles: parsed.blogArticles || DEFAULT_BLOG_ARTICLES,
          forms: parsed.forms || DEFAULT_FORMS,
          submissions: parsed.submissions || DEFAULT_SUBMISSIONS,
          versions: parsed.versions || [],
          activityLogs: parsed.activityLogs || DEFAULT_ACTIVITY,
        }
      }
    } catch (e) {
      console.warn(
        "Failed to parse CMS store from localStorage, seeding fresh state:",
        e,
      )
    }

    return {
      users: DEFAULT_USERS,
      designTokens: DEFAULT_DESIGN_TOKENS,
      settings: DEFAULT_SETTINGS,
      navigation: DEFAULT_NAVIGATION,
      footer: DEFAULT_FOOTER,
      pages: DEFAULT_PAGES,
      products: seedProductsFromData(),
      landingPages: seedLandingPagesFromData(),
      mediaAssets: DEFAULT_MEDIA,
      blogArticles: DEFAULT_BLOG_ARTICLES,
      forms: DEFAULT_FORMS,
      submissions: DEFAULT_SUBMISSIONS,
      versions: [],
      activityLogs: DEFAULT_ACTIVITY,
    }
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state))
    } catch (e) {
      console.error("Failed to save CMS state to localStorage:", e)
    }
    this.notify()
  }

  public subscribe(listener: () => void): () => void {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  private notify(): void {
    this.listeners.forEach((fn) => fn())
  }

  public getState(): CMSMasterState {
    return this.state
  }

  // --- ACTIVITY LOGGING ---
  public logActivity(
    user: AdminUser | { name: string id: string },
    action: string,
    entityType: string,
    entityId: string,
    entityName: string,
    details?: string,
    type: ActivityLogItem["type"] = "update",
  ): void {
    const item: ActivityLogItem = {
      id: `act_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      userId: user.id,
      userName: user.name,
      action,
      entityType,
      entityId,
      entityName,
      timestamp: new Date().toISOString(),
      details,
      type,
    }
    this.state.activityLogs.unshift(item)
    // keep last 200 logs
    if (this.state.activityLogs.length > 200) {
      this.state.activityLogs = this.state.activityLogs.slice(0, 200)
    }
    this.saveToStorage()
  }

  // --- VERSIONING & PUBLISHING ---
  public createVersionSnapshot(
    entityType: PublishVersion["entityType"],
    entityId: string,
    entityTitle: string,
    summary: string,
    userName: string,
    snapshotData: any,
  ): PublishVersion {
    const existing = this.state.versions.filter(
      (v) => v.entityType === entityType && v.entityId === entityId,
    )
    const versionNumber = existing.length + 1
    const version: PublishVersion = {
      id: `ver_${Date.now()}`,
      entityType,
      entityId,
      entityTitle,
      versionNumber,
      changeSummary: summary,
      createdBy: userName,
      createdAt: new Date().toISOString(),
      snapshot: JSON.parse(JSON.stringify(snapshotData)),
    }
    this.state.versions.unshift(version)
    this.saveToStorage()
    return version
  }

  // --- USERS & AUTH ---
  public getUsers(): AdminUser[] {
    return this.state.users
  }

  public getUserByEmail(email: string): AdminUser | undefined {
    return this.state.users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase(),
    )
  }

  public updateUser(
    id: string,
    updates: Partial<AdminUser>,
    currentUser: AdminUser,
  ): void {
    this.state.users = this.state.users.map((u) =>
      u.id === id ? { ...u, ...updates } : u,
    )
    this.logActivity(
      currentUser,
      "Updated User Account",
      "user",
      id,
      updates.name || id,
      undefined,
      "update",
    )
    this.saveToStorage()
  }

  public addUser(
    user: Omit<AdminUser, "id" | "createdAt">,
    currentUser: AdminUser,
  ): AdminUser {
    const newUser: AdminUser = {
      ...user,
      id: `user_${Date.now()}`,
      createdAt: new Date().toISOString(),
    }
    this.state.users.push(newUser)
    this.logActivity(
      currentUser,
      "Added User",
      "user",
      newUser.id,
      newUser.name,
      `Assigned role: ${newUser.role}`,
      "create",
    )
    this.saveToStorage()
    return newUser
  }

  public deleteUser(id: string, currentUser: AdminUser): void {
    const target = this.state.users.find((u) => u.id === id)
    if (!target) return
    this.state.users = this.state.users.filter((u) => u.id !== id)
    this.logActivity(
      currentUser,
      "Deleted User",
      "user",
      id,
      target.name,
      undefined,
      "delete",
    )
    this.saveToStorage()
  }

  // --- DESIGN TOKENS ---
  public getDesignTokens(): DesignTokens {
    return this.state.designTokens
  }

  public updateDesignTokens(
    tokens: Partial<DesignTokens>,
    currentUser: AdminUser,
  ): void {
    this.state.designTokens = { ...this.state.designTokens, ...tokens }
    this.logActivity(
      currentUser,
      "Updated Global Design Tokens",
      "design_tokens",
      "global",
      "Theme Tokens",
      undefined,
      "update",
    )
    this.createVersionSnapshot(
      "design_tokens",
      "global",
      "Theme Tokens",
      "Design system token adjustment",
      currentUser.name,
      this.state.designTokens,
    )
    this.saveToStorage()
  }

  // --- WEBSITE SETTINGS ---
  public getSettings(): WebsiteSettings {
    return this.state.settings
  }

  public updateSettings(
    settings: Partial<WebsiteSettings>,
    currentUser: AdminUser,
  ): void {
    this.state.settings = { ...this.state.settings, ...settings }
    this.logActivity(
      currentUser,
      "Updated Website Settings",
      "settings",
      "global",
      "Website Settings",
      undefined,
      "settings",
    )
    this.saveToStorage()
  }

  // --- NAVIGATION & FOOTER ---
  public getNavigation(): GlobalNavigation {
    return this.state.navigation
  }

  public updateNavigation(nav: GlobalNavigation, currentUser: AdminUser): void {
    this.state.navigation = nav
    this.logActivity(
      currentUser,
      "Updated Global Navigation",
      "navigation",
      "global",
      "Header Navigation",
      undefined,
      "update",
    )
    this.createVersionSnapshot(
      "navigation",
      "global",
      "Header Navigation",
      "Header links update",
      currentUser.name,
      nav,
    )
    this.saveToStorage()
  }

  public getFooter(): GlobalFooter {
    return this.state.footer
  }

  public updateFooter(footer: GlobalFooter, currentUser: AdminUser): void {
    this.state.footer = footer
    this.logActivity(
      currentUser,
      "Updated Global Footer",
      "footer",
      "global",
      "Footer Layout",
      undefined,
      "update",
    )
    this.createVersionSnapshot(
      "footer",
      "global",
      "Footer Layout",
      "Footer links and description update",
      currentUser.name,
      footer,
    )
    this.saveToStorage()
  }

  // --- PAGES ---
  public getPages(): CMSPage[] {
    return this.state.pages
  }

  public getPageById(id: string): CMSPage | undefined {
    return this.state.pages.find((p) => p.id === id)
  }

  public updatePage(
    id: string,
    updates: Partial<CMSPage>,
    currentUser: AdminUser,
  ): void {
    this.state.pages = this.state.pages.map((p) =>
      p.id === id
        ? {
            ...p,
            ...updates,
            updatedAt: new Date().toISOString(),
            updatedBy: currentUser.name,
          }
        : p,
    )
    this.logActivity(
      currentUser,
      "Updated Page Content",
      "page",
      id,
      updates.title || id,
      undefined,
      "update",
    )
    this.saveToStorage()
  }

  public publishPage(
    id: string,
    summary: string,
    currentUser: AdminUser,
  ): void {
    const page = this.getPageById(id)
    if (!page) return
    const newVersion = page.version + 1
    this.updatePage(
      id,
      {
        status: "published",
        publishedAt: new Date().toISOString(),
        version: newVersion,
      },
      currentUser,
    )
    this.createVersionSnapshot(
      "page",
      id,
      page.title,
      summary || `Published version ${newVersion}`,
      currentUser.name,
      page,
    )
    this.logActivity(
      currentUser,
      "Published Page to Live Site",
      "page",
      id,
      page.title,
      `Version ${newVersion}`,
      "publish",
    )
  }

  public createPage(
    pageData: Omit<CMSPage, "id" | "updatedAt" | "updatedBy" | "version">,
    currentUser: AdminUser,
  ): CMSPage {
    const newPage: CMSPage = {
      ...pageData,
      id: `page_${Date.now()}`,
      updatedAt: new Date().toISOString(),
      updatedBy: currentUser.name,
      version: 1,
    }
    this.state.pages.push(newPage)
    this.logActivity(
      currentUser,
      "Created New Page",
      "page",
      newPage.id,
      newPage.title,
      undefined,
      "create",
    )
    this.saveToStorage()
    return newPage
  }

  public deletePage(id: string, currentUser: AdminUser): void {
    const page = this.getPageById(id)
    if (!page) return
    this.state.pages = this.state.pages.filter((p) => p.id !== id)
    this.logActivity(
      currentUser,
      "Deleted Page",
      "page",
      id,
      page.title,
      undefined,
      "delete",
    )
    this.saveToStorage()
  }

  // --- PRODUCTS ---
  public getProducts(): CMSProduct[] {
    return this.state.products
  }

  public getProductBySlug(slug: string): CMSProduct | undefined {
    return this.state.products.find((p) => p.slug === slug)
  }

  public updateProduct(
    slug: string,
    updates: Partial<CMSProduct>,
    currentUser: AdminUser,
  ): void {
    this.state.products = this.state.products.map((p) =>
      p.slug === slug
        ? {
            ...p,
            ...updates,
            updatedAt: new Date().toISOString(),
            updatedBy: currentUser.name,
          }
        : p,
    )
    this.logActivity(
      currentUser,
      "Updated Product Configuration",
      "product",
      slug,
      updates.name || slug,
      undefined,
      "update",
    )
    this.saveToStorage()
  }

  public publishProduct(
    slug: string,
    summary: string,
    currentUser: AdminUser,
  ): void {
    const prod = this.getProductBySlug(slug)
    if (!prod) return
    this.updateProduct(slug, { status: "published" }, currentUser)
    this.createVersionSnapshot(
      "product",
      prod.id,
      prod.name,
      summary || "Published product updates",
      currentUser.name,
      prod,
    )
    this.logActivity(
      currentUser,
      "Published Product",
      "product",
      prod.id,
      prod.name,
      summary,
      "publish",
    )
  }

  // --- LANDING PAGES ---
  public getLandingPages(): CMSLandingPage[] {
    return this.state.landingPages
  }

  public getLandingPageBySlug(slug: string): CMSLandingPage | undefined {
    return this.state.landingPages.find((lp) => lp.slug === slug)
  }

  public updateLandingPage(
    slug: string,
    updates: Partial<CMSLandingPage>,
    currentUser: AdminUser,
  ): void {
    this.state.landingPages = this.state.landingPages.map((lp) =>
      lp.slug === slug
        ? {
            ...lp,
            ...updates,
            updatedAt: new Date().toISOString(),
            updatedBy: currentUser.name,
          }
        : lp,
    )
    this.logActivity(
      currentUser,
      "Updated Landing Page",
      "landing_page",
      slug,
      updates.title || slug,
      undefined,
      "update",
    )
    this.saveToStorage()
  }

  public createLandingPage(
    lpData: Omit<CMSLandingPage, "id" | "updatedAt" | "updatedBy">,
    currentUser: AdminUser,
  ): CMSLandingPage {
    const newLp: CMSLandingPage = {
      ...lpData,
      id: `lp_${Date.now()}`,
      updatedAt: new Date().toISOString(),
      updatedBy: currentUser.name,
    }
    this.state.landingPages.push(newLp)
    this.logActivity(
      currentUser,
      "Created Campaign Landing Page",
      "landing_page",
      newLp.id,
      newLp.title,
      undefined,
      "create",
    )
    this.saveToStorage()
    return newLp
  }

  // --- MEDIA ASSETS ---
  public getMediaAssets(): MediaAsset[] {
    return this.state.mediaAssets
  }

  public addMediaAsset(
    asset: Omit<MediaAsset, "id" | "uploadedAt" | "usedInCount">,
    currentUser: AdminUser,
  ): MediaAsset {
    const newAsset: MediaAsset = {
      ...asset,
      id: `med_${Date.now()}`,
      uploadedAt: new Date().toISOString(),
      usedInCount: 0,
    }
    this.state.mediaAssets.unshift(newAsset)
    this.logActivity(
      currentUser,
      "Uploaded Media Asset",
      "media",
      newAsset.id,
      newAsset.name,
      `${newAsset.type} (${(newAsset.sizeBytes / 1024).toFixed(1)} KB)`,
      "create",
    )
    this.saveToStorage()
    return newAsset
  }

  public deleteMediaAsset(id: string, currentUser: AdminUser): boolean {
    const asset = this.state.mediaAssets.find((m) => m.id === id)
    if (!asset) return false
    this.state.mediaAssets = this.state.mediaAssets.filter((m) => m.id !== id)
    this.logActivity(
      currentUser,
      "Deleted Media Asset",
      "media",
      id,
      asset.name,
      undefined,
      "delete",
    )
    this.saveToStorage()
    return true
  }

  // --- BLOG ARTICLES ---
  public getBlogArticles(): BlogArticle[] {
    return this.state.blogArticles
  }

  public getBlogArticleById(id: string): BlogArticle | undefined {
    return this.state.blogArticles.find((a) => a.id === id)
  }

  public updateBlogArticle(
    id: string,
    updates: Partial<BlogArticle>,
    currentUser: AdminUser,
  ): void {
    this.state.blogArticles = this.state.blogArticles.map((a) =>
      a.id === id
        ? {
            ...a,
            ...updates,
            updatedAt: new Date().toISOString(),
          }
        : a,
    )
    this.logActivity(
      currentUser,
      "Updated Blog Post",
      "blog",
      id,
      updates.title || id,
      undefined,
      "update",
    )
    this.saveToStorage()
  }

  public createBlogArticle(
    articleData: Omit<BlogArticle, "id" | "updatedAt" | "publishedAt">,
    currentUser: AdminUser,
  ): BlogArticle {
    const now = new Date().toISOString()
    const newArticle: BlogArticle = {
      ...articleData,
      id: `art_${Date.now()}`,
      publishedAt: now,
      updatedAt: now,
    }
    this.state.blogArticles.unshift(newArticle)
    this.logActivity(
      currentUser,
      "Created Blog Post",
      "blog",
      newArticle.id,
      newArticle.title,
      undefined,
      "create",
    )
    this.saveToStorage()
    return newArticle
  }

  public deleteBlogArticle(id: string, currentUser: AdminUser): void {
    const article = this.getBlogArticleById(id)
    if (!article) return
    this.state.blogArticles = this.state.blogArticles.filter((a) => a.id !== id)
    this.logActivity(
      currentUser,
      "Deleted Blog Post",
      "blog",
      id,
      article.title,
      undefined,
      "delete",
    )
    this.saveToStorage()
  }

  // --- FORMS & SUBMISSIONS ---
  public getForms(): FormConfig[] {
    return this.state.forms
  }

  public updateForm(
    id: string,
    updates: Partial<FormConfig>,
    currentUser: AdminUser,
  ): void {
    this.state.forms = this.state.forms.map((f) =>
      f.id === id ? { ...f, ...updates } : f,
    )
    this.logActivity(
      currentUser,
      "Updated Form Configuration",
      "form",
      id,
      updates.title || id,
      undefined,
      "update",
    )
    this.saveToStorage()
  }

  public getSubmissions(): FormSubmission[] {
    return this.state.submissions
  }

  public addSubmission(
    formId: string,
    formName: string,
    data: Record<string, any>,
    sourceUrl: string,
  ): FormSubmission {
    const sub: FormSubmission = {
      id: `subm_${Date.now()}`,
      formId,
      formName,
      submittedAt: new Date().toISOString(),
      data,
      sourceUrl,
      status: "unread",
    }
    this.state.submissions.unshift(sub)
    this.saveToStorage()
    return sub
  }

  public updateSubmissionStatus(
    id: string,
    status: FormSubmission["status"],
    currentUser: AdminUser,
  ): void {
    this.state.submissions = this.state.submissions.map((s) =>
      s.id === id ? { ...s, status } : s,
    )
    this.logActivity(
      currentUser,
      "Updated Lead Status",
      "submission",
      id,
      `Lead #${id}`,
      `Marked as ${status}`,
      "update",
    )
    this.saveToStorage()
  }

  // --- VERSIONS & ROLLBACK ---
  public getVersions(
    entityType?: PublishVersion["entityType"],
    entityId?: string,
  ): PublishVersion[] {
    let list = this.state.versions
    if (entityType) list = list.filter((v) => v.entityType === entityType)
    if (entityId) list = list.filter((v) => v.entityId === entityId)
    return list
  }

  public rollbackVersion(versionId: string, currentUser: AdminUser): boolean {
    const version = this.state.versions.find((v) => v.id === versionId)
    if (!version) return false

    if (version.entityType === "page") {
      const pageIndex = this.state.pages.findIndex(
        (p) => p.id === version.entityId,
      )
      if (pageIndex !== -1) {
        this.state.pages[pageIndex] = {
          ...version.snapshot,
          updatedAt: new Date().toISOString(),
          updatedBy: `${currentUser.name} (Restored from v${version.versionNumber})`,
        }
      }
    } else if (version.entityType === "product") {
      const prodIndex = this.state.products.findIndex(
        (p) => p.id === version.entityId,
      )
      if (prodIndex !== -1) {
        this.state.products[prodIndex] = {
          ...version.snapshot,
          updatedAt: new Date().toISOString(),
          updatedBy: `${currentUser.name} (Restored from v${version.versionNumber})`,
        }
      }
    } else if (version.entityType === "design_tokens") {
      this.state.designTokens = { ...version.snapshot }
    } else if (version.entityType === "navigation") {
      this.state.navigation = { ...version.snapshot }
    } else if (version.entityType === "footer") {
      this.state.footer = { ...version.snapshot }
    }

    this.logActivity(
      currentUser,
      `Restored Version ${version.versionNumber}`,
      version.entityType,
      version.entityId,
      version.entityTitle,
      `Restored snapshot created on ${version.createdAt}`,
      "publish",
    )

    this.saveToStorage()
    return true
  }

  // --- SYSTEM RESET & EXPORT ---
  public exportStateJson(): string {
    return JSON.stringify(this.state, null, 2)
  }

  public importStateJson(jsonString: string, currentUser: AdminUser): boolean {
    try {
      const parsed = JSON.parse(jsonString)
      if (parsed && parsed.users && parsed.pages) {
        this.state = parsed
        this.logActivity(
          currentUser,
          "Imported Database State JSON",
          "system",
          "root",
          "CMS Database",
          undefined,
          "update",
        )
        this.saveToStorage()
        return true
      }
    } catch (e) {
      console.error("Invalid JSON imported:", e)
    }
    return false
  }

  public resetToFactoryDefaults(currentUser: AdminUser): void {
    localStorage.removeItem(STORAGE_KEY)
    this.state = this.loadFromStorage()
    this.logActivity(
      currentUser,
      "Reset CMS to Seed Defaults",
      "system",
      "root",
      "CMS Database",
      undefined,
      "update",
    )
    this.saveToStorage()
  }
}

export const adminCmsStore = new AdminCMSStore()
