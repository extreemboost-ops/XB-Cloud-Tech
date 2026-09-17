import React from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ServicesPage from "./pages/ServicesPage"
import PricingPage from "./pages/PricingPage"
import PortfolioPage, { PortfolioDetailPage } from "./pages/PortfolioPage"
import BlogPage, { BlogPostDetailPage } from "./pages/BlogPage"
import ContactPage from "./pages/ContactPage"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="portfolio-detail" element={<PortfolioDetailPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog-detail" element={<BlogPostDetailPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
