import { Routes, Route, Link, Navigate } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicesPage from "./pages/ServicesPage"
import PricingPage from "./pages/PricingPage"
import PortfolioPage, { PortfolioDetailPage } from "./pages/PortfolioPage"
import BlogPage, { BlogPostDetailPage } from "./pages/BlogPage"
import ContactPage from "./pages/ContactPage"

function NotFound() {
  return (
    <div className="min-h-screen bg-dark-base flex flex-col items-center justify-center text-white text-center px-6">
      <div className="text-8xl font-black text-primary/30 mb-4">404</div>
      <h1 className="text-3xl font-bold mb-3">Page Not Found</h1>
      <p className="text-neutral-400 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      {/* XB Cloud Tech public site */}
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="portfolio/:id" element={<PortfolioDetailPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostDetailPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>

      {/* Redirect legacy /admin to home */}
      <Route path="/admin/*" element={<Navigate to="/" replace />} />

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
