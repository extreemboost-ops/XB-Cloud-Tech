import { useState, useEffect } from "react"
import { useSearchParams, Link } from "react-router-dom"
import { adminCmsStore } from "../services/adminCmsStore"
import {
  Cloud,
  CheckCircle2,
  AlertTriangle,
  MessageCircle,
  Calendar,
  Check,
  ChevronDown,
  Sparkles,
  Lock,
} from "lucide-react"
import { CampaignData } from "../data/campaigns"
import ProductPageTemplate from "./ProductPageTemplate"
import { PRODUCTS_DATA } from "../data/products"

interface CampaignLandingTemplateProps {
  campaign: CampaignData
}

export default function CampaignLandingTemplate({
  campaign,
}: CampaignLandingTemplateProps) {
  const [searchParams] = useSearchParams()
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Lead form state with preserved UTM parameters
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
    businessType: "",
    requirement: "",
    // UTM parameters preserved from URL query string
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    gclid: "",
    fbclid: "",
  })

  // Capture UTM parameters on initial load
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      utm_source: searchParams.get("utm_source") || "",
      utm_medium: searchParams.get("utm_medium") || "",
      utm_campaign: searchParams.get("utm_campaign") || "",
      utm_content: searchParams.get("utm_content") || "",
      utm_term: searchParams.get("utm_term") || "",
      gclid: searchParams.get("gclid") || "",
      fbclid: searchParams.get("fbclid") || "",
    }))
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    adminCmsStore.addSubmission(
      `form_lp_${campaign.slug}`,
      `Paid Ad Campaign Lead (${campaign.name})`,
      {
        campaignSlug: campaign.slug,
        name: formData.name,
        phone: formData.phone,
        businessName: formData.businessName,
        businessType: formData.businessType,
        requirement: formData.requirement,
        utm_source: formData.utm_source,
        utm_medium: formData.utm_medium,
        utm_campaign: formData.utm_campaign,
        utm_content: formData.utm_content,
        utm_term: formData.utm_term,
        gclid: formData.gclid,
        fbclid: formData.fbclid,
      },
      `/lp/${campaign.slug}`,
    )
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData((prev) => ({
        ...prev,
        name: "",
        phone: "",
        businessName: "",
        businessType: "",
        requirement: "",
      }))
    }, 4000)
  }

  // Pre-fill WhatsApp message link
  const whatsappUrl = `https://wa.me/${campaign.whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    campaign.whatsappPreFill,
  )}`

  // Mapped product for simulator rendering
  const mappedProductSlug =
    campaign.simulatorType === "storex"
      ? "storex-erp"
      : campaign.simulatorType === "purchoon"
        ? "purchoon-erp"
        : campaign.simulatorType === "cambridge"
          ? "cambridgedesk"
          : campaign.simulatorType === "pharmacy"
            ? "pharmacy-erp"
            : campaign.simulatorType === "industrial"
              ? "industrial-erp"
              : "storex-erp"

  const mappedProduct = PRODUCTS_DATA[mappedProductSlug]

  return (
    <div className="min-h-screen bg-light-base font-sans text-neutral-900 selection:bg-primary/20">
      {/* ── 1. MINIMAL CAMPAIGN HEADER ───────────────────────────────────── */}
      <header className="bg-dark-base border-b border-neutral-900 py-3.5 px-6 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-secondary">
              <Cloud className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-logo text-lg font-bold text-white tracking-tight leading-none">
                XB Cloud Tech
              </span>
              <span className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider mt-0.5">
                {campaign.productBadge}
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold hover:bg-emerald-500/25 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Direct</span>
            </a>

            <a
              href="#inquiry-form"
              className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-secondary" />
              <span>{campaign.primaryCta}</span>
            </a>
          </div>
        </div>
      </header>

      {/* ── 2. ABOVE-THE-FOLD CONVERSION HERO & LEAD FORM ─────────────────── */}
      <section className="bg-dark-base text-white pt-12 pb-16 px-6 border-b border-neutral-900 relative">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: High-Impact Copy & Bullets */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-secondary text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" /> {campaign.targetAudience}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1]">
                {campaign.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
                {campaign.heroSubhead}
              </p>

              {/* Benefits Checklist */}
              <div className="space-y-3 pt-2">
                {campaign.benefits.map((ben, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-neutral-200">
                      {ben}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-4 text-xs text-neutral-400 font-mono">
                <span className="flex items-center gap-1 text-emerald-400">
                  <Check className="w-4 h-4" /> 100% Offline Resilience
                </span>
                <span>•</span>
                <span>Zero Per-Seat License Fees</span>
                <span>•</span>
                <span>Fast Onboarding</span>
              </div>
            </div>

            {/* Right Column: Lead Capture Form */}
            <div id="inquiry-form" className="lg:col-span-5 scroll-mt-24">
              <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative text-white">
                <div className="mb-5 space-y-1">
                  <div className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Request a Guided
                    Walkthrough
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {campaign.primaryCta}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    See how the software handles your specific items and daily
                    workflow in 20 minutes.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="py-8 px-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                    <h4 className="text-lg font-bold text-white">
                      Demo Request Confirmed!
                    </h4>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      Thank you,{" "}
                      <span className="font-bold text-white">
                        {formData.name || "Customer"}
                      </span>
                      . Our systems engineer will contact you at{" "}
                      <span className="font-bold text-white">
                        {formData.phone}
                      </span>{" "}
                      within 2 business hours.
                    </p>
                    <div className="text-[11px] text-neutral-400 font-mono pt-2 border-t border-emerald-500/20">
                      Attribution parameters captured & logged.
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Asad Siddiqui"
                        className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+92 300 1234567"
                        className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-primary"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1">
                          Business / Store Name
                        </label>
                        <input
                          type="text"
                          value={formData.businessName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              businessName: e.target.value,
                            })
                          }
                          placeholder="e.g. Metro Mart"
                          className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-neutral-300 mb-1">
                          Store / Business Type
                        </label>
                        <input
                          type="text"
                          value={formData.businessType}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              businessType: e.target.value,
                            })
                          }
                          placeholder="e.g. Retail / Wholesale"
                          className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1">
                        Main Requirement / Operational Challenge
                      </label>
                      <input
                        type="text"
                        value={formData.requirement}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            requirement: e.target.value,
                          })
                        }
                        placeholder="e.g. Barcode POS, multi-branch sync, scale sync..."
                        className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-primary"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5 mt-2"
                    >
                      <Calendar className="w-4 h-4 text-secondary" /> Confirm My
                      Demo Walkthrough
                    </button>

                    <div className="flex items-center justify-between text-[11px] text-neutral-500 pt-2">
                      <span className="flex items-center gap-1">
                        <Lock className="w-3 h-3" /> 100% Confidential
                      </span>
                      <span>No Spam Guarantee</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. OPERATIONAL PROOF / SIMULATOR SHOWCASE ─────────────────────── */}
      <section className="py-16 bg-neutral-950 text-white px-6 border-b border-neutral-900">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs text-primary font-bold uppercase tracking-widest mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Product Interface Proof
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                Experience the Genuine {campaign.name} Interface
              </h2>
            </div>
            <p className="text-xs text-neutral-400 max-w-md">
              We never show fabricated mockups. Interact with the live simulator
              below to experience actual inputs, calculations, and operational
              outputs.
            </p>
          </div>

          {/* Render the simulator from ProductPageTemplate */}
          {mappedProduct && (
            <div className="pt-2">
              {/* Simulator is accessible through ProductPageTemplate's internal components */}
              <ProductPageTemplate product={mappedProduct} />
            </div>
          )}
        </div>
      </section>

      {/* ── 4. PROBLEM RECOGNITION SECTION ───────────────────────────────── */}
      <section className="py-20 px-6 bg-white border-b border-neutral-200">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-bold text-rose-600 uppercase tracking-widest">
              Operational Friction
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
              {campaign.problemSection.title}
            </h2>
            <p className="text-sm text-neutral-600">
              {campaign.problemSection.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {campaign.problemSection.problems.map((prob, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-rose-600 text-xs font-bold mb-2">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>{prob.problem}</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {prob.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SOLUTION CAPABILITIES ─────────────────────────────────────── */}
      <section className="py-20 px-6 bg-light-base border-b border-neutral-200">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-bold text-primary uppercase tracking-widest">
              Engineered Solution
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
              {campaign.solutionSection.title}
            </h2>
            <p className="text-sm text-neutral-600">
              {campaign.solutionSection.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campaign.solutionSection.features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. OBJECTION HANDLING & FAQS ─────────────────────────────────── */}
      <section className="py-20 px-6 bg-white border-b border-neutral-200">
        <div className="max-w-[800px] mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="text-xs text-primary font-bold uppercase tracking-widest">
              Common Questions
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
              Answers to Real Buyer Objections
            </h2>
          </div>

          <div className="space-y-3">
            {campaign.objectionFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="bg-neutral-50 rounded-xl border border-neutral-200/80 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-bold text-neutral-900 text-sm flex items-center justify-between gap-4 cursor-pointer hover:text-primary transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-neutral-600 leading-relaxed border-t border-neutral-200/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 7. FINAL HIGH-CONVERTING CTA BANNER ───────────────────────────── */}
      <section className="py-20 px-6 bg-dark-base text-white text-center">
        <div className="max-w-[800px] mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold">
            Take Action Today
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Stop Relying on Broken Registers & Manual Books
          </h2>
          <p className="text-sm md:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Schedule your live 20-minute demonstration today, or speak directly
            with an implementation specialist via WhatsApp.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#inquiry-form"
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-secondary" />{" "}
              {campaign.primaryCta}
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm transition-all shadow-lg flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Fast Chat
            </a>
          </div>
        </div>
      </section>

      {/* ── 8. MINIMAL CAMPAIGN FOOTER ───────────────────────────────────── */}
      <footer className="bg-neutral-950 text-neutral-400 py-8 px-6 border-t border-neutral-900 text-xs">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Cloud className="w-4 h-4 text-primary" />
            <span className="font-semibold text-white">XB Cloud Tech</span>
            <span>• Enterprise Software House &amp; ERP Platforms</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <span>
              &copy; {new Date().getFullYear()} XB Cloud Tech. All rights
              reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}
