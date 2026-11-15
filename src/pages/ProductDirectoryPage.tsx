import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  ShoppingBag,
  Store,
  GraduationCap,
  HeartPulse,
  Factory,
  CreditCard,
  Sparkles,
  Calendar,
  ArrowRight,
  Check,
  Search,
  Filter,
  CheckCircle2,
  Server,
  Layers,
  X,
  Phone,
} from "lucide-react"
import Breadcrumb from "../components/ui/Breadcrumb"
import { PRODUCTS_DATA } from "../data/products"

const ICON_MAP: Record<string, React.ElementType> = {
  "storex-erp": ShoppingBag,
  "purchoon-erp": Store,
  cambridgedesk: GraduationCap,
  "pharmacy-erp": HeartPulse,
  "industrial-erp": Factory,
  "qistmarket-erp": CreditCard,
}

export default function ProductDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All")
  const [selectedScale, setSelectedScale] = useState<string>("All")
  const [demoProduct, setDemoProduct] = useState<string | null>(null)
  const [demoSubmitted, setDemoSubmitted] = useState(false)
  const [demoForm, setDemoForm] = useState({
    name: "",
    email: "",
    phone: "",
    org: "",
  })
  const navigate = useNavigate()

  const productsList = Object.values(PRODUCTS_DATA)

  // Filter products based on search query, industry, and scale
  const filteredProducts = productsList.filter((prod) => {
    const matchesSearch =
      searchQuery === "" ||
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.targetAudience.some((a) =>
        a.toLowerCase().includes(searchQuery.toLowerCase()),
      ) ||
      prod.modules.some((m) =>
        m.title.toLowerCase().includes(searchQuery.toLowerCase()),
      )

    const matchesIndustry =
      selectedIndustry === "All" || prod.industry === selectedIndustry
    const matchesScale =
      selectedScale === "All" ||
      prod.scale.some((s) => s.includes(selectedScale))

    return matchesSearch && matchesIndustry && matchesScale
  })

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
            items={[{ label: "Home", to: "/" }, { label: "Products" }]}
          />
          <span className="hidden sm:inline-block text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
            6 Commercial ERP Platforms
          </span>
        </div>
      </div>

      {/* ── DIRECTORY HERO ──────────────────────────────────────────────── */}
      <section className="bg-dark-base text-white pt-14 pb-20 px-6 border-b border-neutral-900 relative">
        <div className="max-w-[1200px] mx-auto text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-secondary text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Software Products Catalogue
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Ready-to-Deploy ERP Platforms
          </h1>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
            Tested, production-grade business management systems built around
            industry-specific operational workflows. Deploy on your private
            cloud or on-premise infrastructure with zero vendor lock-in.
          </p>
        </div>
      </section>

      {/* ── SEARCH & FILTER CONTROLS ────────────────────────────────────── */}
      <section className="py-8 px-6 bg-white border-b border-neutral-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-[1200px] mx-auto space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-grow max-w-md">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by name, feature, or workflow..."
                className="w-full bg-neutral-50 border border-neutral-300 rounded-xl pl-10 pr-4 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-primary focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Industry Filter Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs font-semibold text-neutral-500 flex items-center gap-1 mr-1">
                <Filter className="w-3 h-3" /> Industry:
              </span>
              {[
                "All",
                "Retail & POS",
                "Grocery & Wholesale",
                "Education",
                "Healthcare",
                "Manufacturing",
                "Financial Services",
              ].map((ind) => (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedIndustry === ind
                      ? "bg-primary text-white shadow-xs"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS GRID ───────────────────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-[1200px] mx-auto space-y-10">
          <div className="flex items-center justify-between text-xs text-neutral-500 font-medium">
            <span>
              Showing {filteredProducts.length} of {productsList.length}{" "}
              software platforms
            </span>
            {selectedIndustry !== "All" && (
              <button
                onClick={() => setSelectedIndustry("All")}
                className="text-primary font-bold hover:underline cursor-pointer"
              >
                Clear filter
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => {
              const Icon = ICON_MAP[prod.slug] || Layers
              return (
                <div
                  key={prod.id}
                  className="bg-white rounded-3xl p-8 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all flex flex-col group relative"
                >
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${prod.accentBg}`}
                    >
                      <Icon className={`w-7 h-7 ${prod.color}`} />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 uppercase tracking-wider">
                      {prod.badge}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-neutral-900 mb-1 group-hover:text-primary transition-colors">
                    {prod.name}
                  </h2>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                    {prod.category}
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                    {prod.tagline}
                  </p>

                  {/* Highlights */}
                  <div className="border-t border-neutral-100 pt-5 mt-auto mb-6 space-y-2.5">
                    {prod.modules.slice(0, 4).map((mod, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-neutral-700"
                      >
                        <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        <span>{mod.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deployment Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6 text-[10px] font-mono text-neutral-500">
                    <span className="px-2 py-0.5 rounded bg-neutral-100 flex items-center gap-1">
                      <Server className="w-3 h-3 text-neutral-400" /> Cloud /
                      On-Prem
                    </span>
                    <span className="px-2 py-0.5 rounded bg-neutral-100">
                      Offline Ready
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-neutral-100">
                    <button
                      onClick={() => {
                        setDemoProduct(prod.name)
                      }}
                      className="w-full py-2.5 px-3 bg-primary text-white rounded-xl text-xs font-bold hover:bg-primary/90 transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-secondary" /> Book
                      Demo
                    </button>
                    <Link
                      to={`/products/${prod.slug}`}
                      className="w-full py-2.5 px-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1 text-center"
                    >
                      Explore <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border border-neutral-200 space-y-4">
              <Search className="w-10 h-10 text-neutral-400 mx-auto" />
              <h3 className="text-lg font-bold text-neutral-900">
                No matching software platforms found
              </h3>
              <p className="text-xs text-neutral-600 max-w-sm mx-auto">
                Try clearing your search query or industry filter to browse our
                full product portfolio.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("")
                  setSelectedIndustry("All")
                  setSelectedScale("All")
                }}
                className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── COMPARISON MATRIX / DECISION GUIDE ───────────────────────────── */}
      <section className="py-20 px-6 bg-white border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs text-primary font-bold uppercase tracking-widest">
              Platform Selection Guide
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
              Which XB Cloud Tech Platform Fits Your Operation?
            </h2>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Compare primary operational workflows, inventory models, and core
              differentiators across our ERP portfolio:
            </p>
          </div>

          <div className="border border-neutral-200 rounded-2xl overflow-x-auto shadow-xs">
            <table className="w-full text-left text-xs min-w-[700px]">
              <thead className="bg-neutral-50 text-neutral-600 border-b border-neutral-200 font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-4">Platform</th>
                  <th className="p-4">Target Sector</th>
                  <th className="p-4">Primary Differentiator</th>
                  <th className="p-4">Inventory Model</th>
                  <th className="p-4">Offline POS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {productsList.map((p) => (
                  <tr key={p.id} className="hover:bg-neutral-50/50">
                    <td className="p-4">
                      <Link
                        to={`/products/${p.slug}`}
                        className="font-bold text-primary hover:underline text-sm block"
                      >
                        {p.name}
                      </Link>
                      <span className="text-[10px] text-neutral-500">
                        {p.category}
                      </span>
                    </td>
                    <td className="p-4 text-neutral-700">{p.industry}</td>
                    <td className="p-4 text-neutral-700">
                      {p.differentiatorTitle}
                    </td>
                    <td className="p-4 text-neutral-600 font-mono text-[11px]">
                      {p.slug === "purchoon-erp"
                        ? "Weight (Kg/g) & Bori Sacks"
                        : p.slug === "pharmacy-erp"
                          ? "FEFO Batch & Expiry Quarantine"
                          : p.slug === "industrial-erp"
                            ? "Multi-Level BOM & WIP Job Cards"
                            : p.slug === "qistmarket-erp"
                              ? "Asset Serial & Hire-Purchase"
                              : p.slug === "cambridgedesk"
                                ? "Academic Records & Vouchers"
                                : "Barcode SKU & Variant Tracking"}
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 text-emerald-600 font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" /> 100% Resilient
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CUSTOM SOFTWARE & BESPOKE INTEGRATION BANNER ─────────────────── */}
      <section className="py-20 px-6 bg-dark-base text-white text-center border-t border-neutral-900">
        <div className="max-w-[800px] mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold">
            Need Bespoke Architecture?
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            Have a Unique Enterprise Business Logic?
          </h2>
          <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
            In addition to our ready-to-deploy platforms, XB Cloud Tech
            engineers custom ERP modules, proprietary APIs, and connected
            operational systems tailored to your specific organizational
            structure.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-xs transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4" /> Discuss Custom Software
            </button>
            <Link
              to="/services"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white rounded-xl font-semibold text-xs transition-colors border border-white/10 flex items-center gap-2"
            >
              View All Services <ArrowRight className="w-4 h-4" />
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
