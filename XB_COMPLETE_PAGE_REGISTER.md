# 📑 XB Cloud Tech — Master Page & Route Register

**Project:** XB Cloud Tech Corporate Platform (`https://xbcloudtech.com/`)  
**Specification:** `Structure design.md` (Sections 18, 21 & Phase 7)  
**Date:** November 15, 2026  
**Status:** **VERIFIED & COMPLETE**  

---

## 1. Complete Website Route Inventory

This register documents every public route, template, component, role, indexing status, canonical target, and navigation entry point across the XB Cloud Tech platform.

| # | Route Path | Component Name | Layout Shell | Page Role | Canonical Target | Indexing Directive | Nav Entry Point |
| :-: | :--- | :--- | :--- | :--- | :--- | :-: | :--- |
| **1** | `/` | `HomePage` | Global Layout | Corporate Home & Positioning | `https://xbcloudtech.com/` | `index, follow` | Header Logo, Nav "Home" |
| **2** | `/about` | `AboutPage` | Global Layout | Company History, Team & Methodology | `https://xbcloudtech.com/about` | `index, follow` | Header "Company" > About |
| **3** | `/services` | `ServicesPage` | Global Layout | Engineering Services Overview | `https://xbcloudtech.com/services` | `index, follow` | Header "Services" Mega-menu |
| **4** | `/industries` | `IndustryOverviewPage` | Global Layout | Industry Verticals Directory | `https://xbcloudtech.com/industries` | `index, follow` | Header "Industries" Mega-menu |
| **5** | `/products` | `ProductDirectoryPage` | Global Layout | ERP Software Directory & Filter | `https://xbcloudtech.com/products` | `index, follow` | Header "Products" Mega-menu |
| **6** | `/pricing` | `PricingPage` | Global Layout | Commercial Licensing & Hosting Plans | `https://xbcloudtech.com/pricing` | `index, follow` | Header "Company" > Pricing |
| **7** | `/portfolio` | `PortfolioPage` | Global Layout | Production Case Studies & Deployments | `https://xbcloudtech.com/portfolio` | `index, follow` | Header "Company" > Portfolio |
| **8** | `/portfolio/:id` | `PortfolioDetailPage` | Global Layout | Detailed Case Study Breakdown | Dynamic by ID | `index, follow` | Portfolio Grid Cards |
| **9** | `/blog` | `BlogPage` | Global Layout | Technical Articles & Architecture | `https://xbcloudtech.com/blog` | `index, follow` | Header "Resources" > Blog |
| **10** | `/blog/:slug` | `BlogPostDetailPage` | Global Layout | Technical Deep-Dive Article | Dynamic by Slug | `index, follow` | Blog Listing Cards |
| **11** | `/contact` | `ContactPage` | Global Layout | Architecture Call & Lead Gen | `https://xbcloudtech.com/contact` | `index, follow` | Header Primary CTA Button |
| **12** | `/privacy` | `PrivacyPage` | Global Layout | Privacy Policy & Data Compliance | `https://xbcloudtech.com/privacy` | `index, follow` | Global Footer, Ad Footers |
| **13** | `/privacy-policy` | `PrivacyPage` | Global Layout | Alias route for privacy compliance | `https://xbcloudtech.com/privacy` | `index, follow` | URL Alias |
| **14** | `/terms` | `TermsPage` | Global Layout | Terms of Service & Software License | `https://xbcloudtech.com/terms` | `index, follow` | Global Footer, Ad Footers |
| **15** | `/terms-of-service`| `TermsPage` | Global Layout | Alias route for legal compliance | `https://xbcloudtech.com/terms` | `index, follow` | URL Alias |
| **16** | `/products/storex-erp` | `StorexPage` | Global Layout | Storex Retail POS & Stock Platform | `https://xbcloudtech.com/products/storex-erp` | `index, follow` | Mega-menu, Directory, Home |
| **17** | `/products/purchoon-erp` | `PurchoonPage` | Global Layout | Purchoon Weight-Based Grocery POS | `https://xbcloudtech.com/products/purchoon-erp` | `index, follow` | Mega-menu, Directory, Home |
| **18** | `/products/cambridgedesk` | `CambridgeDeskPage` | Global Layout | CambridgeDesk School ERP Platform | `https://xbcloudtech.com/products/cambridgedesk` | `index, follow` | Mega-menu, Directory, Home |
| **19** | `/products/pharmacy-erp` | `PharmacyPage` | Global Layout | Clinical Pharmacy & Drug Dispensary | `https://xbcloudtech.com/products/pharmacy-erp` | `index, follow` | Mega-menu, Directory, Home |
| **20** | `/products/industrial-erp` | `IndustrialPage` | Global Layout | Industrial Manufacturing BOM ERP | `https://xbcloudtech.com/products/industrial-erp` | `index, follow` | Mega-menu, Directory, Home |
| **21** | `/products/qistmarket-erp` | `QistmarketPage` | Global Layout | Qistmarket Installment ERP | `https://xbcloudtech.com/products/qistmarket-erp` | `index, follow` | Mega-menu, Directory, Home |
| **22** | `/products/:slug` | `ProductDetailPage` | Global Layout | Dynamic ERP Product Route Resolver | Dynamic by Slug | `index, follow` | Programmatic fallback |
| **23** | `/services/custom-software-development` | `ServiceDetailPage` | Global Layout | Bespoke Software Engineering | `https://xbcloudtech.com/services/custom-software-development` | `index, follow` | Services Mega-menu |
| **24** | `/services/enterprise-erp` | `ServiceDetailPage` | Global Layout | Enterprise ERP Architecture | `https://xbcloudtech.com/services/enterprise-erp` | `index, follow` | Services Mega-menu |
| **25** | `/services/saas-development` | `ServiceDetailPage` | Global Layout | Multi-Tenant SaaS Development | `https://xbcloudtech.com/services/saas-development` | `index, follow` | Services Mega-menu |
| **26** | `/services/business-process-automation` | `ServiceDetailPage` | Global Layout | Process Automation & Queues | `https://xbcloudtech.com/services/business-process-automation` | `index, follow` | Services Mega-menu |
| **27** | `/services/ai-integration` | `ServiceDetailPage` | Global Layout | Enterprise Practical AI & RAG | `https://xbcloudtech.com/services/ai-integration` | `index, follow` | Services Mega-menu |
| **28** | `/services/api-system-integration` | `ServiceDetailPage` | Global Layout | API & Legacy Middleware | `https://xbcloudtech.com/services/api-system-integration` | `index, follow` | Services Mega-menu |
| **29** | `/services/legacy-modernization` | `ServiceDetailPage` | Global Layout | Legacy DB Modernization | `https://xbcloudtech.com/services/legacy-modernization` | `index, follow` | Services Mega-menu |
| **30** | `/services/:slug` | `ServiceDetailPage` | Global Layout | Dynamic Service Route Resolver | Dynamic by Slug | `index, follow` | Programmatic fallback |
| **31** | `/industries/retail-wholesale` | `IndustryDetailPage` | Global Layout | Retail & Bulk Wholesale Solutions | `https://xbcloudtech.com/industries/retail-wholesale` | `index, follow` | Industries Mega-menu |
| **32** | `/industries/education` | `IndustryDetailPage` | Global Layout | School & Campus Lifecycle Solutions | `https://xbcloudtech.com/industries/education` | `index, follow` | Industries Mega-menu |
| **33** | `/industries/pharmacy` | `IndustryDetailPage` | Global Layout | Pharmacy & Clinical Dispensing | `https://xbcloudtech.com/industries/pharmacy` | `index, follow` | Industries Mega-menu |
| **34** | `/industries/manufacturing` | `IndustryDetailPage` | Global Layout | Manufacturing & Shop Floor Solutions | `https://xbcloudtech.com/industries/manufacturing` | `index, follow` | Industries Mega-menu |
| **35** | `/industries/distribution` | `IndustryDetailPage` | Global Layout | Distribution & Fleet Logistics | `https://xbcloudtech.com/industries/distribution` | `index, follow` | Industries Mega-menu |
| **36** | `/industries/financial-services` | `IndustryDetailPage` | Global Layout | Installment Finance & Credit Risk | `https://xbcloudtech.com/industries/financial-services` | `index, follow` | Industries Mega-menu |
| **37** | `/industries/:slug` | `IndustryDetailPage` | Global Layout | Dynamic Industry Route Resolver | Dynamic by Slug | `index, follow` | Programmatic fallback |
| **38** | `/lp/storex-retail` | `StorexRetailCampaign` | Campaign Shell | Paid Ad Landing: Retail POS | `https://xbcloudtech.com/products/storex-erp` | `noindex, nofollow` | Google/Meta Ad Traffic |
| **39** | `/lp/purchoon-wholesale` | `PurchoonWholesaleCampaign` | Campaign Shell | Paid Ad Landing: Grocery & Weight POS | `https://xbcloudtech.com/products/purchoon-erp` | `noindex, nofollow` | Google/Meta Ad Traffic |
| **40** | `/lp/cambridgedesk-schools` | `CambridgeDeskCampaign` | Campaign Shell | Paid Ad Landing: School ERP & Fees | `https://xbcloudtech.com/products/cambridgedesk` | `noindex, nofollow` | Google/Meta Ad Traffic |
| **41** | `/lp/pharmacy-management` | `PharmacyCampaign` | Campaign Shell | Paid Ad Landing: Pharmacy FEFO POS | `https://xbcloudtech.com/products/pharmacy-erp` | `noindex, nofollow` | Google/Meta Ad Traffic |
| **42** | `/lp/industrial-erp` | `IndustrialCampaign` | Campaign Shell | Paid Ad Landing: Industrial BOM ERP | `https://xbcloudtech.com/products/industrial-erp` | `noindex, nofollow` | Google/Meta Ad Traffic |
| **43** | `/lp/custom-enterprise-software` | `CustomEnterpriseCampaign` | Campaign Shell | Paid Ad Landing: Bespoke Software | `https://xbcloudtech.com/services/custom-software-development` | `noindex, nofollow` | Google/Meta Ad Traffic |
| **44** | `/lp/custom-erp-development` | `CustomEnterpriseCampaign` | Campaign Shell | Paid Ad Landing: ERP Ad Keywords | `https://xbcloudtech.com/services/custom-software-development` | `noindex, nofollow` | Google/Meta Ad Traffic |
| **45** | `/lp/:slug` | `CampaignRouter` | Campaign Shell | Dynamic Campaign Fallback Resolver | `https://xbcloudtech.com/` | `noindex, nofollow` | Fallback ad links |
| **46** | `/admin/*` | Redirect | None | Legacy Redirect to Homepage (`/`) | `https://xbcloudtech.com/` | `noindex, nofollow` | Legacy redirect |
| **47** | `*` (Catch-All) | `NotFound` | Global Layout | 404 Error State with Helpful Links | None | `noindex, nofollow` | Unmatched URLs |

---

## 2. Navigation Hierarchy & User Journeys

### Journey 1: Enterprise Client Looking for Custom Engineering
`Home` ➔ `Services Mega-menu` ➔ `/services/custom-software-development` ➔ Review Architecture & Methodology ➔ `CTA: Schedule Architecture Scoping Call` ➔ `/contact`

### Journey 2: Retailer Looking for Multi-Store POS
`Home` ➔ `Products Mega-menu` ➔ `/products/storex-erp` ➔ Test Interactive POS Simulator ➔ Review Hardware Compatibility & Database Specs ➔ `CTA: Request Live Storex Demo` ➔ In-page or Modal Lead Capture

### Journey 3: School Owner Looking for Automated Fee Challans
`Home` ➔ `Industries Mega-menu` ➔ `/industries/education` ➔ Review School Workflow Diagram ➔ Click Recommended Platform (`/products/cambridgedesk`) ➔ Test Bank Challan Generator ➔ `CTA: Schedule Academic Demo`

### Journey 4: Paid Search Visitor (Google Ads: "Retail POS Software")
Ad Click with UTM Params (`?utm_source=google&utm_campaign=pos_retail&gclid=xyz`) ➔ Distraction-Free Landing Page (`/lp/storex-retail`) ➔ Immediate Headline Relevance ➔ Above-the-fold Lead Form (Captures UTMs silently) ➔ Quick WhatsApp Chat Option ➔ Zero Navigation Leaks
