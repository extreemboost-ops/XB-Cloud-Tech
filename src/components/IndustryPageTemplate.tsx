import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  Sparkles,
  Calendar,
  ArrowRight,
  AlertTriangle,
  CheckCircle2,
  Check,
  ChevronDown,
  Phone,
  X,
  Layers,
  ShoppingBag,
  Store,
  GraduationCap,
  HeartPulse,
  Factory,
  CreditCard,
} from "lucide-react"
import { IndustryData } from "../data/industries"
import { PRODUCTS_DATA } from "../data/products"
import Breadcrumb from "./ui/Breadcrumb"

const ICON_MAP: Record<string, React.ElementType> = {
  "storex-erp": ShoppingBag,
  "purchoon-erp": Store,
  cambridgedesk: GraduationCap,
  "pharmacy-erp": HeartPulse,
  "industrial-erp": Factory,
  "qistmarket-erp": CreditCard,
}

interface IndustryPageTemplateProps {
  industry: IndustryData
}

export default function IndustryPageTemplate({
  industry,
}: IndustryPageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [demoProduct, setDemoProduct] = useState<string | null>(null)
  const [demoSubmitted, setDemoSubmitted] = useState(false)
  const [demoForm, setDemoForm] = useState({
    name: "",
    email: "",
    phone: "",
    org: "",
  })
  const navigate = useNavigate()

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setDemoSubmitted(true)
    setTimeout(() => {
      setDemoSubmitted(false)
      setDemoProduct(null)
      setDemoForm({ name: "", email: "", phone: "", org: "" })
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
              { label: "Industries", to: "/industries" },
              { label: industry.name },
            ]}
          />
          <span className="hidden sm:inline-block text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
            Sector Solutions
          </span>
        </div>
      </div>

      {/* ── INDUSTRY HERO ───────────────────────────────────────────────── */}
      <section className="bg-dark-base text-white pt-14 pb-20 px-6 border-b border-neutral-900 relative">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-secondary text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Industry Solution
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              {industry.heroHeadline}
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              {industry.heroSubhead}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#solutions"
                className="px-6 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2"
              >
                Explore Solutions <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => navigate("/contact")}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white rounded-xl font-semibold text-sm transition-colors border border-white/10 flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4" /> Speak with Specialist
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
              {industry.stats.map((st, i) => (
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

      {/* ── OPERATIONAL CHALLENGES IN THIS INDUSTRY ─────────────────────── */}
      <section className="py-20 px-6 bg-white border-b border-neutral-200">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs font-bold text-rose-600 uppercase tracking-widest">
              Industry Bottlenecks
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight leading-tight">
              Why Generic Software Fails in {industry.name}
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Standard commercial accounting tools lack the domain nuances
              required by {industry.name.toLowerCase()} operations:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.challenges.map((ch, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-rose-600 text-xs font-bold">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>{ch.challenge}</span>
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {ch.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY-SPECIFIC CAPABILITIES ──────────────────────────────── */}
      <section
        id="solutions"
        className="py-24 px-6 bg-light-base border-b border-neutral-200"
      >
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="text-xs text-primary font-bold uppercase tracking-widest">
              Engineered Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
              Software Solutions Built for {industry.name}
            </h2>
            <p className="text-sm md:text-base text-neutral-600">
              Purpose-built operational workflows that match how your teams,
              staff, and counters actually operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industry.solutions.map((sol, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-xs hover:shadow-lg hover:border-primary/40 transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 shrink-0">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2">
                  {sol.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                  {sol.desc}
                </p>

                <div className="border-t border-neutral-100 pt-4 mt-auto space-y-2">
                  {sol.details.map((det, dIdx) => (
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

      {/* ── MAPPED XB CLOUD TECH READY PRODUCTS ─────────────────────────── */}
      <section className="py-20 px-6 bg-white border-b border-neutral-200">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs text-primary font-bold uppercase tracking-widest mb-1">
                Verified Software Platforms
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
                Recommended ERP Platforms for {industry.name}
              </h2>
            </div>
            <Link
              to="/products"
              className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
            >
              All 6 Software Products Directory{" "}
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industry.mappedProductSlugs.map((slug) => {
              const prod = PRODUCTS_DATA[slug]
              if (!prod) return null
              const Icon = ICON_MAP[slug] || Layers
              return (
                <div
                  key={prod.slug}
                  className="bg-neutral-50 rounded-3xl p-8 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border ${prod.accentBg}`}
                      >
                        <Icon className={`w-6 h-6 ${prod.color}`} />
                      </div>
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white text-neutral-700 uppercase tracking-wider border border-neutral-200">
                        {prod.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-neutral-900 mb-1">
                      {prod.name}
                    </h3>
                    <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                      {prod.category}
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                      {prod.tagline}
                    </p>

                    <div className="space-y-2 border-t border-neutral-200/80 pt-4 mb-6">
                      {prod.modules.slice(0, 3).map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="flex items-start gap-2 text-xs text-neutral-700"
                        >
                          <Check className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" />
                          <span>{m.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-4 border-t border-neutral-200/80">
                    <button
                      onClick={() => setDemoProduct(prod.name)}
                      className="w-full py-2.5 px-3 bg-primary text-white rounded-xl text-xs font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-secondary" /> Book
                      Demo
                    </button>
                    <Link
                      to={`/products/${prod.slug}`}
                      className="w-full py-2.5 px-3 bg-white hover:bg-neutral-100 text-neutral-800 rounded-xl text-xs font-semibold transition-all border border-neutral-300 flex items-center justify-center gap-1"
                    >
                      View Platform <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 4-STEP OPERATIONAL FLOW ─────────────────────────────────────── */}
      <section className="py-20 px-6 bg-light-base border-b border-neutral-200">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs text-primary font-bold uppercase tracking-widest">
              Operational Sequence
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
              How Operations Flow in {industry.name}
            </h2>
            <p className="text-sm text-neutral-600">
              Connected data path from front-line operator transactions to
              administrative accounting:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.workflowSteps.map((ws, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-black font-mono text-primary/30 mb-2">
                    {ws.step}
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">
                    {ws.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">
                    {ws.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY HIGHLIGHT ────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white border-b border-neutral-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 border border-neutral-800 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold">
                Verified Production Case Study
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {industry.caseHighlights.client}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                <span className="text-white font-semibold">Challenge:</span>{" "}
                {industry.caseHighlights.scenario}
              </p>
              <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-xs sm:text-sm text-emerald-300 font-semibold">
                Outcome: {industry.caseHighlights.outcome}
              </div>
            </div>

            <button
              onClick={() => navigate("/contact")}
              className="px-6 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-xl text-xs font-bold transition-all shadow-md shrink-0 cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-secondary" /> Request Industry
              Case Audit
            </button>
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ──────────────────────────────────── */}
      <section className="py-20 px-6 bg-light-base border-b border-neutral-200">
        <div className="max-w-[800px] mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="text-xs text-primary font-bold uppercase tracking-widest">
              Industry Inquiries
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
              Frequently Asked Questions for {industry.name}
            </h2>
          </div>

          <div className="space-y-3">
            {industry.faqs.map((faq, idx) => {
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
            Industry Transformation
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Modernize Your {industry.name} Operations
          </h2>
          <p className="text-sm md:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Speak directly with an enterprise software engineer who understands
            your sector's specific workflows and compliance requirements.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-secondary" /> Schedule Sector
              Consultation
            </button>
            <Link
              to="/industries"
              className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white rounded-xl font-semibold text-sm transition-colors border border-white/10 flex items-center gap-2"
            >
              View All Industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── DEMO MODAL ──────────────────────────────────────────────────── */}
      {demoProduct && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-dark-base border border-white/15 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative text-white">
            <button
              onClick={() => setDemoProduct(null)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 space-y-1">
              <div className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Book a Product Walkthrough
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {demoProduct} Demo
              </h3>
              <p className="text-xs text-neutral-400">
                Experience the live platform tailored for your operational
                requirements.
              </p>
            </div>

            {demoSubmitted ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">
                  Demo Request Received
                </h4>
                <p className="text-xs text-neutral-300">
                  Our product implementation specialist will reach out within 2
                  business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={demoForm.name}
                    onChange={(e) =>
                      setDemoForm({ ...demoForm, name: e.target.value })
                    }
                    placeholder="e.g. Tariq Mahmood"
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
                    value={demoForm.email}
                    onChange={(e) =>
                      setDemoForm({ ...demoForm, email: e.target.value })
                    }
                    placeholder="tariq@company.com"
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
                    value={demoForm.phone}
                    onChange={(e) =>
                      setDemoForm({ ...demoForm, phone: e.target.value })
                    }
                    placeholder="+92 300 9876543"
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={demoForm.org}
                    onChange={(e) =>
                      setDemoForm({ ...demoForm, org: e.target.value })
                    }
                    placeholder="e.g. Metro Retail Corp"
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-4 h-4 text-secondary" /> Confirm Demo
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
