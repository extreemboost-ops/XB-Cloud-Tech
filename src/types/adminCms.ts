// XB Cloud Tech — Master CMS & Administration Type Definitions
// Defines robust schemas for pages, sections, products, landing pages, design tokens,
// media, blog, forms, versions, users, and audit activity logs.

export type UserRole = "super_admin" | "admin" | "editor" | "marketing" | "viewer"

export interface AdminUser {
  id: string
  name: string
  email: string
  role: UserRole
  avatar?: string
  lastLogin?: string
  createdAt: string
  status: "active" | "suspended"
}

export interface RolePermissions {
  manageUsers: boolean
  manageDesignTokens: boolean
  publishContent: boolean
  manageProducts: boolean
  managePages: boolean
  manageLandingPages: boolean
  manageBlog: boolean
  manageMedia: boolean
  manageNavigation: boolean
  manageSEO: boolean
  viewSubmissions: boolean
  manageSettings: boolean
}

export const ROLE_PERMISSIONS: Record<UserRole, RolePermissions> = {
  super_admin: {
    manageUsers: true,
    manageDesignTokens: true,
    publishContent: true,
    manageProducts: true,
    managePages: true,
    manageLandingPages: true,
    manageBlog: true,
    manageMedia: true,
    manageNavigation: true,
    manageSEO: true,
    viewSubmissions: true,
    manageSettings: true,
  },
  admin: {
    manageUsers: false,
    manageDesignTokens: true,
    publishContent: true,
    manageProducts: true,
    managePages: true,
    manageLandingPages: true,
    manageBlog: true,
    manageMedia: true,
    manageNavigation: true,
    manageSEO: true,
    viewSubmissions: true,
    manageSettings: true,
  },
  editor: {
    manageUsers: false,
    manageDesignTokens: false,
    publishContent: false,
    manageProducts: true,
    managePages: true,
    manageLandingPages: false,
    manageBlog: true,
    manageMedia: true,
    manageNavigation: false,
    manageSEO: true,
    viewSubmissions: false,
    manageSettings: false,
  },
  marketing: {
    manageUsers: false,
    manageDesignTokens: false,
    publishContent: false,
    manageProducts: false,
    managePages: false,
    manageLandingPages: true,
    manageBlog: true,
    manageMedia: true,
    manageNavigation: false,
    manageSEO: true,
    viewSubmissions: true,
    manageSettings: false,
  },
  viewer: {
    manageUsers: false,
    manageDesignTokens: false,
    publishContent: false,
    manageProducts: false,
    managePages: false,
    manageLandingPages: false,
    manageBlog: false,
    manageMedia: false,
    manageNavigation: false,
    manageSEO: false,
    viewSubmissions: false,
    manageSettings: false,
  },
}

export type ContentStatus = "draft" | "published" | "scheduled" | "archived"

export interface PageSEO {
  metaTitle: string
  metaDescription: string
  canonicalUrl?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  noIndex?: boolean
  keywords?: string[]
}

export type SectionType = "hero" | "feature_grid" | "stats_counter" | "product_showcase" | "interactive_demo" | "benefits_list" | "pricing_cards" | "testimonials" | "cta_banner" | "faq_accordion" | "media_gallery" | "contact_form" | "rich_text"

export interface SectionStyles {
  bgColor?: string
  textColor?: string
  paddingY?: "none" | "small" | "medium" | "large" | "xlarge"
  containerWidth?: "narrow" | "default" | "wide" | "full"
  hasBorderBottom?: boolean
}

export interface PageSection {
  id: string
  type: SectionType
  title: string
  order: number
  visible: boolean
  content: Record<string, any>
  styles: SectionStyles
}

export interface CMSPage {
  id: string
  title: string
  slug: string
  route: string
  status: ContentStatus
  updatedAt: string
  updatedBy: string
  publishedAt?: string
  version: number
  sections: PageSection[]
  seo: PageSEO
}

export interface CMSProductScreenshot {
  id: string
  title: string
  caption: string
  image: string
  recommendedResolution: string
  slotNumber: 1 | 2 | 3 | 4
}

export interface CMSProductFeature {
  id: string
  title: string
  description: string
  iconName: string
  metrics?: string
}

export interface CMSProduct {
  id: string
  slug: string
  name: string
  tagline: string
  category: string
  description: string
  badge?: string
  heroHeadline: string
  heroSubheadline: string
  primaryColor: string
  accentColor: string
  status: ContentStatus
  updatedAt: string
  updatedBy: string
  features: CMSProductFeature[]
  benefits: { title: string description: string }[]
  screenshots: CMSProductScreenshot[]
  faqs: { question: string answer: string }[]
  primaryCtaText: string
  primaryCtaLink: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
  seo: PageSEO
}

export interface CMSLandingPage {
  id: string
  slug: string
  title: string
  headline: string
  subheadline: string
  productSlug?: string
  badge?: string
  primaryCtaText: string
  primaryCtaAction: "form" | "whatsapp" | "url"
  whatsappNumber?: string
  leadFormHeadline: string
  benefits: string[]
  proofPoints: { value: string label: string }[]
  status: ContentStatus
  updatedAt: string
  updatedBy: string
  seo: PageSEO
}

export interface DesignTokens {
  primaryColor: string
  primaryHoverColor: string
  accentColor: string
  darkNavyColor: string
  surfaceColor: string
  surfaceSecondaryColor: string
  textColor: string
  textMutedColor: string
  borderRadius: "none" | "small" | "medium" | "large" | "full"
  fontHeading: string
  fontBody: string
  headerSticky: boolean
  enableSmoothScroll: boolean
}

export interface NavItem {
  id: string
  label: string
  href: string
  badge?: string
  target?: "_self" | "_blank"
  children?: {
    id: string
    label: string
    href: string
    description?: string
    badge?: string
  }[]
}

export interface GlobalNavigation {
  logoUrl: string
  companyName: string
  primaryCta: {
    label: string
    href: string
    visible: boolean
  }
  items: NavItem[]
}

export interface FooterColumn {
  id: string
  title: string
  links: {
    id: string
    label: string
    href: string
    isExternal?: boolean
  }[]
}

export interface GlobalFooter {
  companyDescription: string
  copyrightText: string
  contactEmail: string
  contactPhone: string
  officeAddress: string
  columns: FooterColumn[]
  socialLinks: {
    platform: "linkedin" | "twitter" | "github" | "facebook" | "youtube"
    url: string
  }[]
}

export interface MediaAsset {
  id: string
  name: string
  url: string
  type: "image" | "video" | "svg" | "document"
  sizeBytes: number
  dimensions?: { width: number height: number }
  altText: string
  folder: string
  uploadedAt: string
  usedInCount: number
}

export interface BlogArticle {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string // Sanitized markdown or HTML
  author: {
    name: string
    role: string
    avatar?: string
  }
  category: string
  tags: string[]
  featuredImage: string
  readTimeMinutes: number
  status: ContentStatus
  publishedAt: string
  updatedAt: string
  seo: PageSEO
}

export interface FormField {
  id: string
  label: string
  name: string
  type: "text" | "email" | "phone" | "textarea" | "select" | "checkbox"
  placeholder?: string
  required: boolean
  options?: string[] // for select
}

export interface FormConfig {
  id: string
  title: string
  code: string
  submitButtonText: string
  successMessage: string
  notifyEmail?: string
  fields: FormField[]
}

export interface FormSubmission {
  id: string
  formId: string
  formName: string
  submittedAt: string
  data: Record<string, any>
  sourceUrl: string
  status: "unread" | "read" | "contacted" | "archived"
  notes?: string
}

export interface PublishVersion {
  id: string
  entityType: "page" | "product" | "landing_page" | "navigation" | "footer" | "design_tokens"
  entityId: string
  entityTitle: string
  versionNumber: number
  changeSummary: string
  createdBy: string
  createdAt: string
  snapshot: any
}

export interface ActivityLogItem {
  id: string
  userId: string
  userName: string
  action: string
  entityType: string
  entityId: string
  entityName: string
  timestamp: string
  details?: string
  type: "create" | "update" | "delete" | "publish" | "auth" | "settings"
}

export interface WebsiteSettings {
  companyName: string
  tagline: string
  supportEmail: string
  salesEmail: string
  phone: string
  whatsappNumber: string
  address: string
  timezone: string
  defaultMetaTitle: string
  defaultMetaDescription: string
  defaultOgImage: string
  googleAnalyticsId?: string
  metaPixelId?: string
  enableLiveChat: boolean
  maintenanceMode: boolean
}
