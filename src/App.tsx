import { Routes, Route, Link, Navigate } from "react-router-dom"
import Layout from "./components/Layout"
import SEOHead from "./components/SEOHead"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicesPage from "./pages/ServicesPage"
import PricingPage from "./pages/PricingPage"
import PortfolioPage, { PortfolioDetailPage } from "./pages/PortfolioPage"
import BlogPage, { BlogPostDetailPage } from "./pages/BlogPage"
import ContactPage from "./pages/ContactPage"
import PrivacyPage from "./pages/PrivacyPage"
import TermsPage from "./pages/TermsPage"

// Phase 3: Product Pages
import ProductDirectoryPage from "./pages/ProductDirectoryPage"
import StorexPage from "./pages/products/StorexPage"
import PurchoonPage from "./pages/products/PurchoonPage"
import CambridgeDeskPage from "./pages/products/CambridgeDeskPage"
import PharmacyPage from "./pages/products/PharmacyPage"
import IndustrialPage from "./pages/products/IndustrialPage"
import QistmarketPage from "./pages/products/QistmarketPage"
import ProductDetailPage from "./pages/products/ProductDetailPage"

// Phase 4: Services Catalogue & Industry Solutions
import IndustryOverviewPage from "./pages/IndustryOverviewPage"
import IndustryDetailPage from "./pages/industries/IndustryDetailPage"
import ServiceDetailPage from "./pages/services/ServiceDetailPage"

// Phase 5: Paid Advertising Campaign Landing Pages
import StorexRetailCampaign from "./pages/campaigns/StorexRetailCampaign"
import PurchoonWholesaleCampaign from "./pages/campaigns/PurchoonWholesaleCampaign"
import CambridgeDeskCampaign from "./pages/campaigns/CambridgeDeskCampaign"
import PharmacyCampaign from "./pages/campaigns/PharmacyCampaign"
import IndustrialCampaign from "./pages/campaigns/IndustrialCampaign"
import CustomEnterpriseCampaign from "./pages/campaigns/CustomEnterpriseCampaign"
import CampaignRouter from "./pages/campaigns/CampaignRouter"

function NotFound() {
  return (
    <div className="min-h-screen bg-dark-base flex flex-col items-center justify-center text-white text-center px-6">
      <div className="text-8xl font-black text-primary/30 mb-4">404</div>
      <h1 className="text-3xl font-bold mb-3">Page Not Found</h1>
      <p className="text-neutral-400 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved. Explore our
        core enterprise ERP systems, industry solutions, and software
        engineering services.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          to="/"
          className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all shadow-md"
        >
          Back to Home
        </Link>
        <Link
          to="/products"
          className="px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/10"
        >
          Browse Products
        </Link>
        <Link
          to="/industries"
          className="px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-all border border-white/10"
        >
          Industry Solutions
        </Link>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <SEOHead />
      <Routes>
        {/* Phase 5: Paid Advertising Campaign Landing Pages (Minimal distraction-free shell) */}
        <Route path="/lp/storex-retail" element={<StorexRetailCampaign />} />
        <Route
          path="/lp/purchoon-wholesale"
          element={<PurchoonWholesaleCampaign />}
        />
        <Route
          path="/lp/cambridgedesk-schools"
          element={<CambridgeDeskCampaign />}
        />
        <Route path="/lp/pharmacy-management" element={<PharmacyCampaign />} />
        <Route path="/lp/industrial-erp" element={<IndustrialCampaign />} />
        <Route
          path="/lp/custom-enterprise-software"
          element={<CustomEnterpriseCampaign />}
        />
        <Route
          path="/lp/custom-erp-development"
          element={<CustomEnterpriseCampaign />}
        />
        <Route path="/lp/:slug" element={<CampaignRouter />} />

        {/* XB Cloud Tech public site with Global Header & Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="portfolio/:id" element={<PortfolioDetailPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostDetailPage />} />
          <Route path="contact" element={<ContactPage />} />

          {/* Phase 3: Product Directory & Landing Pages */}
          <Route path="products" element={<ProductDirectoryPage />} />
          <Route path="products/storex-erp" element={<StorexPage />} />
          <Route path="products/purchoon-erp" element={<PurchoonPage />} />
          <Route
            path="products/cambridgedesk"
            element={<CambridgeDeskPage />}
          />
          <Route path="products/pharmacy-erp" element={<PharmacyPage />} />
          <Route path="products/industrial-erp" element={<IndustrialPage />} />
          <Route path="products/qistmarket-erp" element={<QistmarketPage />} />
          <Route path="products/:slug" element={<ProductDetailPage />} />

          {/* Phase 4: Services Catalogue & Dedicated Detail Pages */}
          <Route path="services" element={<ServicesPage />} />
          <Route
            path="services/custom-software-development"
            element={<ServiceDetailPage />}
          />
          <Route
            path="services/enterprise-erp"
            element={<ServiceDetailPage />}
          />
          <Route
            path="services/saas-development"
            element={<ServiceDetailPage />}
          />
          <Route
            path="services/business-process-automation"
            element={<ServiceDetailPage />}
          />
          <Route
            path="services/ai-integration"
            element={<ServiceDetailPage />}
          />
          <Route
            path="services/api-system-integration"
            element={<ServiceDetailPage />}
          />
          <Route
            path="services/legacy-modernization"
            element={<ServiceDetailPage />}
          />
          <Route path="services/:slug" element={<ServiceDetailPage />} />

          {/* Phase 4: Industry Solutions Hub & Dedicated Pages */}
          <Route path="industries" element={<IndustryOverviewPage />} />
          <Route
            path="industries/retail-wholesale"
            element={<IndustryDetailPage />}
          />
          <Route path="industries/education" element={<IndustryDetailPage />} />
          <Route path="industries/pharmacy" element={<IndustryDetailPage />} />
          <Route
            path="industries/manufacturing"
            element={<IndustryDetailPage />}
          />
          <Route
            path="industries/distribution"
            element={<IndustryDetailPage />}
          />
          <Route
            path="industries/financial-services"
            element={<IndustryDetailPage />}
          />
          <Route path="industries/:slug" element={<IndustryDetailPage />} />

          {/* Legal routes */}
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="privacy-policy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="terms-of-service" element={<TermsPage />} />
        </Route>

        {/* Redirect legacy /admin to home */}
        <Route path="/admin/*" element={<Navigate to="/" replace />} />

        {/* 404 Catch-All */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}
