import { lazy, Suspense } from "react"
import { Routes, Route, Link, Navigate } from "react-router-dom"
import { useDesignTokens } from "./hooks/useDesignTokens"
import Layout from "./components/Layout"
import SEOHead from "./components/SEOHead"
import XBPageLoader from "./components/ui/XBPageLoader"

// Eager core marketing pages for zero-latency initial paint
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicesPage from "./pages/ServicesPage"
import PricingPage from "./pages/PricingPage"
import PortfolioPage, { PortfolioDetailPage } from "./pages/PortfolioPage"
import BlogPage, { BlogPostDetailPage } from "./pages/BlogPage"
import ContactPage from "./pages/ContactPage"
import PrivacyPage from "./pages/PrivacyPage"
import TermsPage from "./pages/TermsPage"
import ProductDirectoryPage from "./pages/ProductDirectoryPage"
import IndustryOverviewPage from "./pages/IndustryOverviewPage"

// Lazy loaded Product Showcase pages
const StorexPage = lazy(() => import("./pages/products/StorexPage"))
const PurchoonPage = lazy(() => import("./pages/products/PurchoonPage"))
const CambridgeDeskPage = lazy(
  () => import("./pages/products/CambridgeDeskPage"),
)
const PharmacyPage = lazy(() => import("./pages/products/PharmacyPage"))
const IndustrialPage = lazy(() => import("./pages/products/IndustrialPage"))
const QistmarketPage = lazy(() => import("./pages/products/QistmarketPage"))
const ProductDetailPage = lazy(
  () => import("./pages/products/ProductDetailPage"),
)

// Lazy loaded Detail resolvers
const IndustryDetailPage = lazy(
  () => import("./pages/industries/IndustryDetailPage"),
)
const ServiceDetailPage = lazy(
  () => import("./pages/services/ServiceDetailPage"),
)

// Lazy loaded Paid Advertising Campaign Landing Pages
const StorexRetailCampaign = lazy(
  () => import("./pages/campaigns/StorexRetailCampaign"),
)
const PurchoonWholesaleCampaign = lazy(
  () => import("./pages/campaigns/PurchoonWholesaleCampaign"),
)
const CambridgeDeskCampaign = lazy(
  () => import("./pages/campaigns/CambridgeDeskCampaign"),
)
const PharmacyCampaign = lazy(
  () => import("./pages/campaigns/PharmacyCampaign"),
)
const IndustrialCampaign = lazy(
  () => import("./pages/campaigns/IndustrialCampaign"),
)
const CustomEnterpriseCampaign = lazy(
  () => import("./pages/campaigns/CustomEnterpriseCampaign"),
)
const CampaignRouter = lazy(() => import("./pages/campaigns/CampaignRouter"))

// Lazy loaded Master CMS & Visual Administration System
import { AdminAuthProvider } from "./context/AdminAuthContext"
import AdminProtectedRoute from "./components/admin/AdminProtectedRoute"
import AdminLayout from "./components/admin/AdminLayout"

const AdminLoginPage = lazy(() => import("./pages/admin/AdminLoginPage"))
const AdminDashboardPage = lazy(
  () => import("./pages/admin/AdminDashboardPage"),
)
const AdminPagesPage = lazy(() => import("./pages/admin/AdminPagesPage"))
const VisualPageBuilderPage = lazy(
  () => import("./pages/admin/VisualPageBuilderPage"),
)
const AdminProductsPage = lazy(() => import("./pages/admin/AdminProductsPage"))
const AdminLandingPagesPage = lazy(
  () => import("./pages/admin/AdminLandingPagesPage"),
)
const DesignSystemEditorPage = lazy(
  () => import("./pages/admin/DesignSystemEditorPage"),
)
const AdminNavigationPage = lazy(
  () => import("./pages/admin/AdminNavigationPage"),
)
const AdminFooterPage = lazy(() => import("./pages/admin/AdminFooterPage"))
const AdminMediaPage = lazy(() => import("./pages/admin/AdminMediaPage"))
const AdminBlogPage = lazy(() => import("./pages/admin/AdminBlogPage"))
const AdminSeoPage = lazy(() => import("./pages/admin/AdminSeoPage"))
const AdminFormsPage = lazy(() => import("./pages/admin/AdminFormsPage"))
const AdminUsersPage = lazy(() => import("./pages/admin/AdminUsersPage"))
const AdminActivityPage = lazy(() => import("./pages/admin/AdminActivityPage"))
const AdminVersionsPage = lazy(() => import("./pages/admin/AdminVersionsPage"))
const AdminSettingsPage = lazy(() => import("./pages/admin/AdminSettingsPage"))

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
  useDesignTokens()
  return (
    <AdminAuthProvider>
      <SEOHead />
      <Suspense fallback={<XBPageLoader />}>
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
          <Route
            path="/lp/pharmacy-management"
            element={<PharmacyCampaign />}
          />
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

          {/* Dedicated Admin Login */}
          <Route path="/admin/login" element={<AdminLoginPage />} />

          {/* Master Admin Panel & Visual CMS Suite (Protected) */}
          <Route
            path="/admin"
            element={
              <AdminProtectedRoute>
                <AdminLayout />
              </AdminProtectedRoute>
            }
          >
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboardPage />} />
            <Route path="pages" element={<AdminPagesPage />} />
            <Route path="builder/:pageId" element={<VisualPageBuilderPage />} />
            <Route path="products" element={<AdminProductsPage />} />
            <Route path="landing-pages" element={<AdminLandingPagesPage />} />
            <Route path="design-system" element={<DesignSystemEditorPage />} />
            <Route path="navigation" element={<AdminNavigationPage />} />
            <Route path="footer" element={<AdminFooterPage />} />
            <Route path="media" element={<AdminMediaPage />} />
            <Route path="blog" element={<AdminBlogPage />} />
            <Route path="seo" element={<AdminSeoPage />} />
            <Route path="forms" element={<AdminFormsPage />} />
            <Route path="users" element={<AdminUsersPage />} />
            <Route path="activity" element={<AdminActivityPage />} />
            <Route path="versions" element={<AdminVersionsPage />} />
            <Route path="settings" element={<AdminSettingsPage />} />
          </Route>

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
            <Route
              path="products/industrial-erp"
              element={<IndustrialPage />}
            />
            <Route
              path="products/qistmarket-erp"
              element={<QistmarketPage />}
            />
            <Route path="products/:slug" element={<ProductDetailPage />} />

            {/* Phase 4: Services Catalogue & Dedicated Detail Pages */}
            <Route path="services" element={<ServicesPage />} />
            <Route
              path="services/custom-software-development"
              element={
                <ServiceDetailPage slugOverride="custom-software-development" />
              }
            />
            <Route
              path="services/enterprise-erp"
              element={<ServiceDetailPage slugOverride="enterprise-erp" />}
            />
            <Route
              path="services/saas-development"
              element={<ServiceDetailPage slugOverride="saas-development" />}
            />
            <Route
              path="services/business-process-automation"
              element={
                <ServiceDetailPage slugOverride="business-process-automation" />
              }
            />
            <Route
              path="services/ai-integration"
              element={<ServiceDetailPage slugOverride="ai-integration" />}
            />
            <Route
              path="services/api-system-integration"
              element={
                <ServiceDetailPage slugOverride="api-system-integration" />
              }
            />
            <Route
              path="services/legacy-modernization"
              element={
                <ServiceDetailPage slugOverride="legacy-modernization" />
              }
            />
            <Route path="services/:slug" element={<ServiceDetailPage />} />

            {/* Phase 4: Industry Solutions Hub & Dedicated Pages */}
            <Route path="industries" element={<IndustryOverviewPage />} />
            <Route
              path="industries/retail-wholesale"
              element={<IndustryDetailPage slugOverride="retail-wholesale" />}
            />
            <Route
              path="industries/education"
              element={<IndustryDetailPage slugOverride="education" />}
            />
            <Route
              path="industries/pharmacy"
              element={<IndustryDetailPage slugOverride="pharmacy" />}
            />
            <Route
              path="industries/manufacturing"
              element={<IndustryDetailPage slugOverride="manufacturing" />}
            />
            <Route
              path="industries/distribution"
              element={<IndustryDetailPage slugOverride="distribution" />}
            />
            <Route
              path="industries/financial-services"
              element={<IndustryDetailPage slugOverride="financial-services" />}
            />
            <Route path="industries/:slug" element={<IndustryDetailPage />} />

            {/* Legal routes */}
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="privacy-policy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="terms-of-service" element={<TermsPage />} />
          </Route>

          {/* 404 Catch-All */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AdminAuthProvider>
  )
}
