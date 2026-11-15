import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  Code2,
  Layers,
  Server,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Calendar,
  Phone,
  ChevronDown,
  Check,
  Sparkles,
  X,
} from "lucide-react"
import { ServiceData } from "../data/services"
import { PRODUCTS_DATA } from "../data/products"
import Breadcrumb from "./ui/Breadcrumb"

interface ServicePageTemplateProps {
  service: ServiceData
}

export default function ServicePageTemplate({
  service,
}: ServicePageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false)
  const [inquirySubmitted, setInquirySubmitted] = useState(false)
  const [inquiryForm, setInquiryForm] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  })
  const navigate = useNavigate()

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setInquirySubmitted(true)
    setTimeout(() => {
      setInquirySubmitted(false)
      setInquiryModalOpen(false)
      setInquiryForm({ name: "", email: "", phone: "", details: "" })
    }, 2500)
  }

  return (
    <div className="min-h-screen bg-light-base">
      {/* ── BREADCRUMB STRIP ────────────────────────────────────────────── */}
      <div className="bg-dark-base border-b border-neutral-900 py-3.5 px-6">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Services", to: "/services" },
              { label: service.title },
            ]}
          />
          <span className="hidden sm:inline-block text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
            {service.category}
          </span>
        </div>
      </div>

      {/* ── SERVICE HERO ────────────────────────────────────────────────── */}
      <section className="bg-dark-base text-white pt-14 pb-20 px-6 border-b border-neutral-900 relative">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-secondary text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> {service.category}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {service.heroHeadline}
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              {service.heroSubhead}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setInquiryModalOpen(true)}
                className="px-6 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-secondary" /> Discuss Your
                Project
              </button>
              <a
                href="#capabilities"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white rounded-xl font-semibold text-sm transition-colors border border-white/10 flex items-center gap-2"
              >
                Explore Capabilities <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
              {service.stats.map((st, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                    {st.value}
                  </div>
                  <div className="text-[11px] text-neutral-400 font-medium uppercase tracking-wider">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TARGET AUDIENCE & OPERATIONAL FRICTION ───────────────────────── */}
      <section className="py-20 px-6 bg-white border-b border-neutral-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Target Audience */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-bold text-primary uppercase tracking-widest">
                Target Organizations
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight leading-tight">
                Who We Engineer This For
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                We build dedicated engineering solutions for organizations whose
                operational complexity cannot be satisfied by generic tools:
              </p>

              <div className="space-y-3 pt-2">
                {service.targetAudience.map((aud, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-neutral-800">
                      {aud}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold text-rose-600 uppercase tracking-widest">
                Operational Friction
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight leading-tight">
                Problems We Solve
              </h2>

              <div className="space-y-4">
                {service.challenges.map((c, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-2"
                  >
                    <div className="flex items-center gap-2 text-rose-600 text-xs font-bold">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>{c.challenge}</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {c.consequence}
                    </p>
                  </div>
                ))}
              </div>

              {/* What We Deliver */}
              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 space-y-3">
                <div className="text-xs font-bold text-primary uppercase tracking-wider">
                  What XB Cloud Tech Delivers
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-800">
                  {service.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE CAPABILITIES ───────────────────────────────────────────── */}
      <section
        id="capabilities"
        className="py-24 px-6 bg-light-base border-b border-neutral-200"
      >
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs text-primary font-bold uppercase tracking-widest">
              Technical Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
              Engineering Pillars of Our {service.title}
            </h2>
            <p className="text-sm md:text-base text-neutral-600">
              Robust architectural foundations built to support high-throughput
              operations with maximum reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-xs hover:shadow-lg hover:border-primary/40 transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 shrink-0">
                  {idx === 0 ? (
                    <Code2 className="w-6 h-6" />
                  ) : idx === 1 ? (
                    <Layers className="w-6 h-6" />
                  ) : (
                    <Server className="w-6 h-6" />
                  )}
                </div>

                <h3 className="text-base font-bold text-neutral-900 mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                  {cap.desc}
                </p>

                <div className="border-t border-neutral-100 pt-4 mt-auto space-y-2">
                  {cap.details.map((det, dIdx) => (
                    <div
                      key={dIdx}
                      className="flex items-start gap-2 text-[11px] text-neutral-700"
                    >
                      <Check className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" />
                      <span>{det}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REAL USE CASES ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white border-b border-neutral-200">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs text-primary font-bold uppercase tracking-widest">
              Deployment Evidence
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
              Real-World Operational Implementations
            </h2>
            <p className="text-sm text-neutral-600">
              Proven problem-solving across production enterprise environments:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.useCases.map((uc, idx) => (
              <div
                key={idx}
                className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200/80 space-y-4"
              >
                <div className="text-xs font-mono font-bold text-primary uppercase tracking-wider">
                  Use Case #{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-neutral-900">
                  {uc.title}
                </h3>
                <div className="space-y-2 text-xs">
                  <div>
                    <span className="font-bold text-neutral-700 block mb-0.5">
                      Operational Context:
                    </span>
                    <span className="text-neutral-600">{uc.clientContext}</span>
                  </div>
                  <div>
                    <span className="font-bold text-neutral-700 block mb-0.5">
                      Engineering Solution:
                    </span>
                    <span className="text-neutral-600">{uc.solution}</span>
                  </div>
                  <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-800 font-semibold">
                    Measurable Impact: {uc.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4-STAGE DELIVERY PROCESS ────────────────────────────────────── */}
      <section className="py-20 px-6 bg-light-base border-b border-neutral-200">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs text-primary font-bold uppercase tracking-widest">
              Delivery Methodology
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
              Predictable, Staged Execution
            </h2>
            <p className="text-sm text-neutral-600">
              Clear timelines, weekly demonstrations, and zero surprises:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.deliveryProcess.map((proc, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-xs relative flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-black font-mono text-primary/30">
                    {proc.step}
                  </span>
                  <span className="text-[11px] font-mono text-neutral-500 font-bold">
                    {proc.duration}
                  </span>
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2">
                  {proc.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {proc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIES ────────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-white border-b border-neutral-200">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs text-primary font-bold uppercase tracking-widest mb-1">
              Production Tech Stack
            </div>
            <h3 className="text-xl font-bold text-neutral-900">
              Technologies Used for {service.title}
            </h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-800 text-xs font-mono font-semibold"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ──────────────────────────────────── */}
      <section className="py-20 px-6 bg-light-base border-b border-neutral-200">
        <div className="max-w-[800px] mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="text-xs text-primary font-bold uppercase tracking-widest">
              Inquiries & Scoping
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
              Frequently Asked Questions About {service.title}
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden transition-all shadow-xs"
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
                    <div className="px-4 pb-4 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CONSULTATION BANNER ───────────────────────────────────── */}
      <section className="py-20 px-6 bg-dark-base text-white text-center">
        <div className="max-w-[800px] mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold">
            Ready to Build?
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Schedule an Architectural Scoping Session
          </h2>
          <p className="text-sm md:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Speak directly with a senior systems engineer to discuss your
            workflows, database requirements, and technical timeline.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setInquiryModalOpen(true)}
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-secondary" /> Request Scoping
              Call
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white rounded-xl font-semibold text-sm transition-colors border border-white/10 flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4" /> General Contact
            </button>
          </div>
        </div>
      </section>

      {/* ── RELATED PRODUCTS ────────────────────────────────────────────── */}
      {service.relatedProducts.length > 0 && (
        <section className="py-16 px-6 bg-white border-t border-neutral-200">
          <div className="max-w-[1200px] mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-neutral-900">
                Ready-to-Deploy Software Built with These Capabilities
              </h3>
              <Link
                to="/products"
                className="text-xs font-bold text-primary hover:text-primary/80 flex items-center gap-1"
              >
                All 6 Products Directory <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.relatedProducts.map((pSlug) => {
                const prod = PRODUCTS_DATA[pSlug]
                if (!prod) return null
                return (
                  <Link
                    key={prod.slug}
                    to={`/products/${prod.slug}`}
                    className="bg-neutral-50 rounded-xl p-5 border border-neutral-200/80 hover:border-primary/40 hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">
                        {prod.category}
                      </div>
                      <div className="font-bold text-neutral-900 text-base group-hover:text-primary transition-colors">
                        {prod.name}
                      </div>
                      <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                        {prod.tagline}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center justify-between text-xs font-semibold text-primary">
                      <span>Explore Platform</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* ── INQUIRY MODAL ───────────────────────────────────────────────── */}
      {inquiryModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-dark-base border border-white/15 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative text-white">
            <button
              onClick={() => setInquiryModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 space-y-1">
              <div className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Project Consultation
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {service.title}
              </h3>
              <p className="text-xs text-neutral-400">
                Share your requirements to schedule a scoping workshop with our
                systems engineers.
              </p>
            </div>

            {inquirySubmitted ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">
                  Inquiry Received
                </h4>
                <p className="text-xs text-neutral-300">
                  Our engineering team will review your requirements and respond
                  within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryForm.name}
                    onChange={(e) =>
                      setInquiryForm({ ...inquiryForm, name: e.target.value })
                    }
                    placeholder="e.g. Farhan Zaidi"
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={inquiryForm.email}
                    onChange={(e) =>
                      setInquiryForm({ ...inquiryForm, email: e.target.value })
                    }
                    placeholder="farhan@enterprise.com"
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={inquiryForm.phone}
                    onChange={(e) =>
                      setInquiryForm({ ...inquiryForm, phone: e.target.value })
                    }
                    placeholder="+92 300 1234567"
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Brief Project Details
                  </label>
                  <textarea
                    rows={3}
                    value={inquiryForm.details}
                    onChange={(e) =>
                      setInquiryForm({
                        ...inquiryForm,
                        details: e.target.value,
                      })
                    }
                    placeholder="Tell us about your operational workflows and project goals..."
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-4 h-4 text-secondary" /> Submit Scoping
                  Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
