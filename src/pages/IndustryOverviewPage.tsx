import { Link, useNavigate } from "react-router-dom"
import {
  Sparkles,
  ArrowRight,
  ShoppingCart,
  BookOpen,
  HeartPulse,
  Factory,
  Truck,
  CreditCard,
  CheckCircle2,
  Phone,
  Layers,
} from "lucide-react"
import Breadcrumb from "../components/ui/Breadcrumb"
import { INDUSTRIES_DATA } from "../data/industries"
import { PRODUCTS_DATA } from "../data/products"

const ICON_MAP: Record<string, React.ElementType> = {
  "retail-wholesale": ShoppingCart,
  education: BookOpen,
  pharmacy: HeartPulse,
  manufacturing: Factory,
  distribution: Truck,
  "financial-services": CreditCard,
}

export default function IndustryOverviewPage() {
  const industries = Object.values(INDUSTRIES_DATA)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-light-base">
      {/* ── BREADCRUMB STRIP ────────────────────────────────────────────── */}
      <div className="bg-dark-base border-b border-neutral-900 py-3.5 px-6">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <Breadcrumb
            items={[{ label: "Home", to: "/" }, { label: "Industries" }]}
          />
          <span className="hidden sm:inline-block text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
            6 Industry Verticals
          </span>
        </div>
      </div>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="bg-dark-base text-white pt-14 pb-20 px-6 border-b border-neutral-900 relative">
        <div className="max-w-[1200px] mx-auto text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-secondary text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Sector Solutions Architecture
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Industry Solutions Engineered for Operational Reality
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Software built around how businesses actually operate. We bridge the
            gap between front-line operations, warehouse stock, and corporate
            financial ledgers.
          </p>
        </div>
      </section>

      {/* ── INDUSTRIES GRID ─────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => {
              const Icon = ICON_MAP[ind.slug] || Layers
              return (
                <div
                  key={ind.id}
                  className="bg-white rounded-3xl p-8 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h2 className="text-2xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                      {ind.name}
                    </h2>
                    <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                      {ind.tagline}
                    </p>

                    <div className="space-y-2 border-t border-neutral-100 pt-5 mb-6">
                      <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
                        Key Capabilities:
                      </div>
                      {ind.solutions.slice(0, 3).map((sol, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-start gap-2 text-xs text-neutral-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span>{sol.title}</span>
                        </div>
                      ))}
                    </div>

                    {ind.mappedProductSlugs.length > 0 && (
                      <div className="border-t border-neutral-100 pt-4 mb-6">
                        <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
                          Ready ERP Software:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {ind.mappedProductSlugs.map((slug) => {
                            const p = PRODUCTS_DATA[slug]
                            if (!p) return null
                            return (
                              <span
                                key={slug}
                                className="px-2.5 py-1 rounded-lg bg-neutral-100 text-neutral-700 text-[10px] font-semibold"
                              >
                                {p.name}
                              </span>
                            )
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  <Link
                    to={`/industries/${ind.slug}`}
                    className="w-full py-3 bg-neutral-100 hover:bg-primary hover:text-white text-neutral-800 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 mt-auto"
                  >
                    Explore Sector Solutions{" "}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CONSULTATION BANNER ─────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-dark-base text-white text-center border-t border-neutral-900">
        <div className="max-w-[800px] mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold">
            Don't See Your Specific Sector?
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            We Engineer Custom Software for Any Operational Model
          </h2>
          <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
            Our systems architects build customized ERP workflows, inventory
            trackers, and management platforms for specialized business domains.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-xs transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4" /> Discuss Custom Architecture
            </button>
            <Link
              to="/products"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white rounded-xl font-semibold text-xs transition-colors border border-white/10 flex items-center gap-2"
            >
              Browse 6 ERP Products <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
