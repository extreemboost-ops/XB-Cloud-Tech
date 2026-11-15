import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  ShoppingBag,
  Store,
  GraduationCap,
  HeartPulse,
  Factory,
  CreditCard,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Code2,
  Layers,
  Repeat,
  Cpu,
  Building2,
  Calendar,
  Award,
  Globe,
  Star,
  Play,
  X,
  Check,
} from "lucide-react"
import Badge from "../components/ui/Badge"

// ── 6 CORE SOFTWARE PRODUCTS (Structure design.md Section 7.3 & Section 9) ──
const PRODUCTS = [
  {
    id: "storex",
    slug: "storex-erp",
    name: "Storex ERP",
    category: "Retail & Multi-Branch POS",
    tagline: "Take control of your store, stock, and business operations.",
    desc: "Connected retail platform with real-time inventory synchronization, barcode POS, supplier purchase orders, and multi-store customer ledgers.",
    highlights: [
      "Multi-branch real-time stock sync",
      "Barcode POS with receipt designer",
      "Supplier purchase & return ledgers",
      "Customer credit (Udhar) tracking",
    ],
    badge: "Popular",
    icon: ShoppingBag,
    color: "from-blue-600 to-indigo-600",
    iconColor: "text-blue-500 bg-blue-500/10",
    actionRoute: "/contact?product=storex-erp",
  },
  {
    id: "purchoon",
    slug: "purchoon-erp",
    name: "Purchoon ERP",
    category: "Grocery & Wholesale POS",
    tagline:
      "Built for the way grocery and wholesale businesses actually work.",
    desc: "Engineered specifically for weight-based sales, loose items, bori tracking, rapid checkout calculations, and wholesale tier pricing.",
    highlights: [
      "Weight scale & price-to-weight engine",
      "Loose item & Bori quality tracking",
      "Wholesale bulk & retail rate tiers",
      "Rapid touch/shortcut checkout workflow",
    ],
    badge: "High-Speed",
    icon: Store,
    color: "from-emerald-600 to-teal-600",
    iconColor: "text-emerald-500 bg-emerald-500/10",
    actionRoute: "/contact?product=purchoon-erp",
  },
  {
    id: "cambridgedesk",
    slug: "cambridgedesk",
    name: "CambridgeDesk",
    category: "School & Academic Management",
    tagline:
      "Bring academic operations, administration, and learning together.",
    desc: "Unifies admissions, tuition fee automation, student grading, examination assessments, attendance, and parent communication.",
    highlights: [
      "Fee vouchers, challans & online receipts",
      "Curriculum & marksheet generation",
      "Automated attendance & SMS alerts",
      "Multi-branch campus administration",
    ],
    badge: "Education",
    icon: GraduationCap,
    color: "from-violet-600 to-purple-600",
    iconColor: "text-violet-500 bg-violet-500/10",
    actionRoute: "/contact?product=cambridgedesk",
  },
  {
    id: "pharmacy",
    slug: "pharmacy-erp",
    name: "Pharmacy ERP",
    category: "Healthcare & Drug Dispensary",
    tagline: "Zero-error drug dispensing, expiry alerts, and medical retail.",
    desc: "Complete pharmacy software featuring mandatory batch number tracking, expiry date alarms, formula lookups, and distributor invoices.",
    highlights: [
      "Batch number & expiry date safety locks",
      "Generic salt & alternative drug search",
      "Distributor purchase bill reconciliation",
      "Prescription attachment & doctor logging",
    ],
    badge: "Clinical Grade",
    icon: HeartPulse,
    color: "from-rose-600 to-pink-600",
    iconColor: "text-rose-500 bg-rose-500/10",
    actionRoute: "/contact?product=pharmacy-erp",
  },
  {
    id: "industrial",
    slug: "industrial-erp",
    name: "Industrial ERP",
    category: "Manufacturing & Plants",
    tagline: "Precision production planning, BOMs, and floor control.",
    desc: "Provides full visibility over raw materials, Bill of Materials (BOM), assembly work orders, machine capacity, and finished goods inventory.",
    highlights: [
      "Multi-level Bill of Materials (BOM)",
      "Shop floor job cards & work order routing",
      "WIP (Work In Progress) cost accounting",
      "Machine maintenance & breakdown logs",
    ],
    badge: "Enterprise",
    icon: Factory,
    color: "from-amber-600 to-orange-600",
    iconColor: "text-amber-500 bg-amber-500/10",
    actionRoute: "/contact?product=industrial-erp",
  },
  {
    id: "qistmarket",
    slug: "qistmarket-erp",
    name: "Qistmarket ERP",
    category: "Installment & Hire-Purchase",
    tagline: "Streamline installment plans, recoveries, and customer ledgers.",
    desc: "Tailored for electronics, home appliances, and vehicle installment retailers with automatic penalty calculations and payment schedules.",
    highlights: [
      "Dynamic installment payment plan generator",
      "Monthly recovery agent route ledgers",
      "Guarantor verification & legal contracts",
      "Automated SMS payment reminders & receipts",
    ],
    badge: "Fintech",
    icon: CreditCard,
    color: "from-cyan-600 to-blue-600",
    iconColor: "text-cyan-500 bg-cyan-500/10",
    actionRoute: "/contact?product=qistmarket-erp",
  },
]

// ── BUSINESS CAPABILITIES (Structure design.md Section 7.4) ──
const CAPABILITIES = [
  {
    title: "Custom Software Engineering",
    desc: "Tailored digital platforms built from scratch around your exact business logic and organizational workflows.",
    icon: Code2,
    to: "/services/custom-software-development",
  },
  {
    title: "Enterprise ERP Development",
    desc: "Multi-branch, multi-currency ERP systems with modular accounting, supply chain, and audit-ready governance.",
    icon: Building2,
    to: "/services/enterprise-erp",
  },
  {
    title: "SaaS & Web Applications",
    desc: "Scalable multi-tenant web platforms featuring secure authentication, usage billing, and responsive dashboards.",
    icon: Layers,
    to: "/services/saas-development",
  },
  {
    title: "Business Process Automation",
    desc: "Eliminate repetitive manual bottlenecks with automated pipelines, notifications, and cross-platform integrations.",
    icon: Zap,
    to: "/services/business-process-automation",
  },
  {
    title: "AI & System Integration",
    desc: "Practical AI integration, intelligent document processing, and seamless REST/GraphQL API connections.",
    icon: Cpu,
    to: "/services/ai-integration",
  },
  {
    title: "Legacy Modernization & Cloud",
    desc: "Zero-downtime database upgrades, automated cloud deployment pipelines, and high-availability database replication.",
    icon: Repeat,
    to: "/services/legacy-modernization",
  },
]

// ── INDUSTRY SOLUTIONS (Structure design.md Section 7.5) ──
const INDUSTRIES = [
  {
    name: "Retail & Wholesale",
    desc: "High-speed POS, barcode cataloging, vendor purchase orders, and multi-store inventory.",
    productLink: "Storex & Purchoon ERP",
    to: "/industries/retail-wholesale",
    productTo: "/products/storex-erp",
  },
  {
    name: "Education & Schools",
    desc: "Student admissions, automated tuition challans, Cambridge marksheet grading, and parent portals.",
    productLink: "CambridgeDesk",
    to: "/industries/education",
    productTo: "/products/cambridgedesk",
  },
  {
    name: "Pharmacy & Healthcare",
    desc: "Drug batch tracking, expiration date protection, distributor ledgers, and fast dispensary counters.",
    productLink: "Pharmacy ERP",
    to: "/industries/pharmacy",
    productTo: "/products/pharmacy-erp",
  },
  {
    name: "Manufacturing & Plants",
    desc: "Bill of materials (BOM), work orders, job cards, scrap management, and finished goods logistics.",
    productLink: "Industrial ERP",
    to: "/industries/manufacturing",
    productTo: "/products/industrial-erp",
  },
  {
    name: "Installment & Credit Commerce",
    desc: "Flexible hire-purchase schedules, customer credit ledgers, recovery tracking, and SMS notices.",
    productLink: "Qistmarket ERP",
    to: "/industries/financial-services",
    productTo: "/products/qistmarket-erp",
  },
  {
    name: "Enterprise Supply Chain & Fleet",
    desc: "Centralized warehouse logistics, transit dispatch challans, and real-time operational BI reports.",
    productLink: "Distribution ERP",
    to: "/industries/distribution",
    productTo: "/products/purchoon-erp",
  },
]

// ── WORKFLOW DEMONSTRATION TABS (Structure design.md Section 7.7) ──
const WORKFLOWS = [
  {
    id: "retail",
    title: "Retail Barcode POS",
    product: "Storex ERP",
    steps: [
      {
        step: "01",
        title: "Barcode Scan & Lookup",
        text: "Item scanned with live inventory deduction and batch verification.",
      },
      {
        step: "02",
        title: "Customer & Ledger Identification",
        text: "Instant loyalty or credit (Udhar) balance verification.",
      },
      {
        step: "03",
        title: "One-Click Receipt & Payment",
        text: "Multi-payment method processing with auto-generated receipt.",
      },
    ],
  },
  {
    id: "weight",
    title: "Weight-Based Grocery POS",
    product: "Purchoon ERP",
    steps: [
      {
        step: "01",
        title: "Select Loose Goods",
        text: "Choose rice, flour, pulses, or custom item without needing barcode.",
      },
      {
        step: "02",
        title: "Weight or Price Calculation",
        text: "Auto-computes amount by grams or sets weight based on exact price entered.",
      },
      {
        step: "03",
        title: "Bori Stock Deduction",
        text: "Deducts fractional weight from warehouse sack ledger automatically.",
      },
    ],
  },
  {
    id: "school",
    title: "School Fee Challan & Grading",
    product: "CambridgeDesk",
    steps: [
      {
        step: "01",
        title: "Batch Fee Generation",
        text: "Generates customized fee vouchers across all grade sections in 1 click.",
      },
      {
        step: "02",
        title: "Attendance & SMS Dispatch",
        text: "Daily biometric sync triggers instant absent notices to parents.",
      },
      {
        step: "03",
        title: "Examination Marksheets",
        text: "Curriculum-aligned marksheet compilation with GPA calculations.",
      },
    ],
  },
  {
    id: "manufacturing",
    title: "Production & Work Orders",
    product: "Industrial ERP",
    steps: [
      {
        step: "01",
        title: "BOM Creation",
        text: "Define exact raw material formula, labor hours, and overhead cost breakdown.",
      },
      {
        step: "02",
        title: "Job Card Dispatch",
        text: "Floor supervisors receive barcode-tagged routing slips for machinery stages.",
      },
      {
        step: "03",
        title: "Finished Goods Transfer",
        text: "Finished items certified by QA and released into central warehouse stock.",
      },
    ],
  },
]

export default function HomePage() {
  const navigate = useNavigate()
  const [videoOpen, setVideoOpen] = useState(false)
  const [activeWorkflow, setActiveWorkflow] = useState(0)

  return (
    <div className="bg-light-base font-sans text-neutral-900 selection:bg-primary/20">
      {/* ── SECTION 1 & 2: HERO ────────────────────────────────────────── */}
      <section className="bg-dark-base text-white pt-20 pb-28 relative overflow-hidden">
        {/* Glow lighting effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/15 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,95,255,0.12),transparent_70%)]" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Positioning Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-xs md:text-sm font-semibold text-secondary mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
              Enterprise Software. Engineered for Business.
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
              Technology That{" "}
              <span
                className="text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(90deg,#0B5FFF,#00D4FF)",
                }}
              >
                Runs Businesses.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
              From industry-specific ERP platforms to custom enterprise
              software, XB Cloud Tech engineers digital systems that help
              organizations manage operations, connect workflows, and scale with
              confidence.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => {
                  const el = document.getElementById("products-spotlight")
                  if (el) el.scrollIntoView({ behavior: "smooth" })
                }}
                className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-xl font-bold text-base transition-all hover:bg-primary/90 shadow-xl hover:shadow-primary/30 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => navigate("/contact")}
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-semibold text-base transition-all backdrop-blur-sm active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Discuss Your Project</span>
              </button>
            </div>

            {/* Operational Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 pt-12 border-t border-white/10">
              {[
                { n: "6 Core", l: "Ready ERP Platforms" },
                { n: "99.99%", l: "Target Operational SLA" },
                { n: "Zero", l: "Vendor Lock-in" },
                { n: "Full-Stack", l: "Dedicated Engineering" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-mono">
                    {s.n}
                  </div>
                  <div className="text-xs text-neutral-400 font-medium uppercase tracking-wider">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: PRODUCT PORTFOLIO SPOTLIGHT ───────────────────────── */}
      <section
        id="products-spotlight"
        className="py-24 bg-light-base scroll-mt-20"
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs text-primary font-bold uppercase tracking-widest mb-3 flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Software Products Suite
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
              Ready-to-Deploy ERP Platforms
            </h2>
            <p className="text-neutral-600 text-base md:text-lg leading-relaxed">
              Tested, production-grade business management solutions designed
              for specific industry workflows. Deploy on your private cloud or
              on-premise infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((prod) => {
              const Icon = prod.icon
              return (
                <div
                  key={prod.id}
                  className="bg-white rounded-3xl p-8 border border-neutral-200/90 shadow-sm hover:shadow-xl hover:border-primary/40 transition-all flex flex-col group relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center ${prod.iconColor}`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 uppercase tracking-wider">
                      {prod.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-neutral-900 mb-1 group-hover:text-primary transition-colors">
                    {prod.name}
                  </h3>
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                    {prod.category}
                  </div>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {prod.desc}
                  </p>

                  <div className="border-t border-neutral-100 pt-5 mt-auto mb-8 space-y-2.5">
                    {prod.highlights.map((h, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 text-xs text-neutral-700"
                      >
                        <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => navigate(prod.actionRoute)}
                      className="w-full py-2.5 px-3 bg-primary text-white rounded-xl text-xs font-bold hover:bg-primary/90 transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Calendar className="w-3.5 h-3.5 text-secondary" /> Book
                      Demo
                    </button>
                    <button
                      onClick={() => navigate(`/products/${prod.slug}`)}
                      className="w-full py-2.5 px-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer"
                    >
                      Overview <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: BUSINESS CAPABILITIES ─────────────────────────────── */}
      <section className="py-24 bg-white border-y border-neutral-200/80">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs text-primary font-bold uppercase tracking-widest mb-3">
              Engineering Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
              Enterprise Software Capabilities
            </h2>
            <p className="text-neutral-600 text-base md:text-lg">
              When standard off-the-shelf software doesn't fit your operational
              scale, our engineering team architects bespoke digital systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon
              return (
                <div
                  key={i}
                  onClick={() => navigate(cap.to)}
                  className="p-8 rounded-2xl border border-neutral-200/80 bg-light-base hover:bg-white hover:border-primary/40 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center text-primary mb-6 shadow-xs group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2.5 group-hover:text-primary transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    {cap.desc}
                  </p>
                  <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/services")}
              className="px-8 py-3.5 border border-neutral-300 text-neutral-800 font-bold text-sm rounded-xl hover:border-primary hover:text-primary transition-all cursor-pointer"
            >
              View Full Services Catalogue
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: INDUSTRY SOLUTIONS ───────────────────────────────── */}
      <section className="py-24 bg-light-base">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs text-primary font-bold uppercase tracking-widest mb-3">
              Tailored By Sector
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
              Software Engineered for Your Industry
            </h2>
            <p className="text-neutral-600 text-base md:text-lg">
              Every vertical has unique operational rules, tax mandates, and
              unit calculations. We engineer systems around your reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-neutral-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {ind.desc}
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-neutral-100">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-neutral-500">
                      Platform:
                    </span>
                    <button
                      onClick={() => navigate(ind.productTo)}
                      className="font-bold text-primary hover:underline cursor-pointer"
                    >
                      {ind.productLink}
                    </button>
                  </div>

                  <button
                    onClick={() => navigate(ind.to)}
                    className="w-full py-2 bg-neutral-50 hover:bg-primary hover:text-white text-neutral-800 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer"
                  >
                    Explore Sector Solution <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/industries")}
              className="px-8 py-3.5 border border-neutral-300 text-neutral-800 font-bold text-sm rounded-xl hover:border-primary hover:text-primary transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>View All Sector Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHY XB CLOUD TECH ─────────────────────────────────── */}
      <section className="py-24 bg-dark-base text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs text-secondary font-bold uppercase tracking-widest mb-4">
                The Engineering Standard
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Software that solves real operational bottlenecks
              </h2>
              <p className="text-neutral-300 text-base md:text-lg mb-8 leading-relaxed">
                We combine product-led engineering with deep operational
                knowledge. You get stable, dependable systems without bloated
                costs or rigid vendor restrictions.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: "Product-Led Engineering",
                    desc: "Proven architecture refined across live production deployments in retail, healthcare, and education.",
                  },
                  {
                    title: "Customizable to Your Workflow",
                    desc: "Pre-built ERP modules customized with your exact business rules, receipts, and reporting formats.",
                  },
                  {
                    title: "Transparent Ownership & Portability",
                    desc: "Open databases, standard APIs, and clear licensing. Your operational data always belongs to you.",
                  },
                  {
                    title: "Hands-on Implementation & Support",
                    desc: "Direct access to software engineers who guide data migration, staff training, and deployment.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-base">
                        {item.title}
                      </div>
                      <div className="text-sm text-neutral-400 mt-0.5">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex gap-4">
                <button
                  onClick={() => navigate("/about")}
                  className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm hover:bg-primary/90 transition-all flex items-center gap-2 cursor-pointer"
                >
                  About Our Company <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Credibility Metric Cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Award className="w-7 h-7" />,
                  n: "8+ Years",
                  l: "Engineering Experience",
                },
                {
                  icon: <Building2 className="w-7 h-7" />,
                  n: "500+",
                  l: "Business Deployments",
                },
                {
                  icon: <Globe className="w-7 h-7" />,
                  n: "3 Hubs",
                  l: "Global Delivery Team",
                },
                {
                  icon: <Star className="w-7 h-7" />,
                  n: "99.99%",
                  l: "Production Reliability",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
                >
                  <div className="text-secondary mb-3 flex justify-center">
                    {s.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1 font-mono">
                    {s.n}
                  </div>
                  <div className="text-xs text-neutral-400 font-medium">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: PRODUCT WORKFLOW SHOWCASE ─────────────────────────── */}
      <section className="py-24 bg-white border-b border-neutral-200/80">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs text-primary font-bold uppercase tracking-widest mb-3">
              Operational Showcase
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
              Engineered for Speed on the Front Lines
            </h2>
            <p className="text-neutral-600 text-base md:text-lg">
              Explore how our platforms eliminate errors and accelerate cashier,
              supervisor, and administrator workflows.
            </p>
          </div>

          {/* Workflow Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {WORKFLOWS.map((wf, idx) => (
              <button
                key={wf.id}
                onClick={() => setActiveWorkflow(idx)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                  activeWorkflow === idx
                    ? "bg-neutral-900 text-white shadow-md"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {wf.title}
              </button>
            ))}
          </div>

          {/* Workflow Active Display */}
          <div className="bg-light-base border border-neutral-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-neutral-200">
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  Platform: {WORKFLOWS[activeWorkflow].product}
                </span>
                <h3 className="text-2xl font-bold text-neutral-900 mt-1">
                  {WORKFLOWS[activeWorkflow].title} Workflow
                </h3>
              </div>
              <button
                onClick={() => navigate("/contact")}
                className="hidden sm:inline-flex px-4 py-2 bg-primary text-white rounded-lg text-xs font-bold hover:bg-primary/90 transition-all cursor-pointer"
              >
                Request Live Walkthrough
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {WORKFLOWS[activeWorkflow].steps.map((st, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary font-mono font-bold text-sm flex items-center justify-center mb-4">
                    {st.step}
                  </div>
                  <h4 className="font-bold text-neutral-900 text-base mb-2">
                    {st.title}
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {st.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: ENGINEERING DELIVERY PROCESS ──────────────────────── */}
      <section className="py-24 bg-light-base">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs text-primary font-bold uppercase tracking-widest mb-3">
              How We Deliver
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
              Our 4-Stage Software Lifecycle
            </h2>
            <p className="text-neutral-600 text-base md:text-lg">
              Structured agile delivery that guarantees transparency,
              predictable timelines, and rigorous quality.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                n: "01",
                title: "Discovery & Scope",
                desc: "Requirement workshops, operational gap analysis, technical specification, and timeline agreement.",
              },
              {
                n: "02",
                title: "Architecture & Design",
                desc: "Database schema design, UX wireframes, integration mapping, and modular architecture.",
              },
              {
                n: "03",
                title: "Build & Quality Assurance",
                desc: "Agile development sprints, automated unit testing, security audits, and load verification.",
              },
              {
                n: "04",
                title: "Deployment & Support",
                desc: "Data migration, on-site or remote staff training, zero-downtime cutover, and 24/7 SLA maintenance.",
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-xs relative"
              >
                <div className="text-4xl font-black text-neutral-200 font-mono mb-4">
                  {p.n}
                </div>
                <h4 className="text-lg font-bold text-neutral-900 mb-2">
                  {p.title}
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9 & 10: RECENT CASE OUTCOMES ──────────────────────────── */}
      <section className="py-24 bg-white border-y border-neutral-200/80">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs text-primary font-bold uppercase tracking-widest mb-3">
              Proven Outcomes
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 tracking-tight">
              Built for Scale &amp; High Availability
            </h2>
            <p className="text-neutral-600 text-base md:text-lg">
              Read how organizations leverage XB Cloud Tech platforms to reduce
              overhead and eliminate downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                client: "ShopGlobal Enterprise",
                outcome: "5x Traffic Spike Handled with Zero Downtime",
                desc: "Automated Kubernetes scaling and Storex ERP integration supported peak sales without degraded performance.",
                badge: "Retail",
              },
              {
                client: "MediCore Health Network",
                outcome: "100% HIPAA & Batch Compliance",
                desc: "Centralized patient records and pharmacy batch expiry workflows across 14 hospital dispensaries.",
                badge: "Healthcare",
              },
              {
                client: "FinEdge Capital Platform",
                outcome: "Sub-second Ledger Reconciliation",
                desc: "Custom automated loan recovery engine tracking installment schedules with automated SMS compliance.",
                badge: "Fintech",
              },
            ].map((c, i) => (
              <div
                key={i}
                onClick={() => navigate("/portfolio")}
                className="bg-light-base rounded-2xl p-8 border border-neutral-200 hover:border-primary/40 hover:shadow-lg transition-all cursor-pointer flex flex-col group"
              >
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                  {c.badge}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                  {c.outcome}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6 flex-grow">
                  {c.desc}
                </p>
                <div className="pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-semibold">
                  <span className="text-neutral-500">{c.client}</span>
                  <span className="text-primary flex items-center gap-1 group-hover:gap-1.5 transition-all">
                    Read study <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/portfolio")}
              className="text-primary font-bold text-sm hover:underline flex items-center justify-center gap-1.5 mx-auto cursor-pointer"
            >
              <span>Explore all case studies</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION 11: FINAL CONVERSION CTA ─────────────────────────────── */}
      <section className="py-24 bg-dark-base text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/15 pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <Badge variant="accent" className="mb-6">
            Get Started Today
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Have a Business Challenge to Solve?
          </h2>
          <p className="text-neutral-300 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you need a ready-to-deploy ERP system or a custom software
            solution engineered for your exact workflows, our technical team is
            ready to assist.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/products")}
              className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-base hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Explore Software Products</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-xl font-semibold text-base transition-all backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Discuss a Custom Project</span>
            </button>
          </div>
        </div>
      </section>

      {/* Demo Video Modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-6 backdrop-blur-xs"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="bg-dark-base rounded-2xl overflow-hidden w-full max-w-3xl shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <span className="text-white font-semibold">
                XB Cloud Tech — Enterprise Software Overview
              </span>
              <button
                onClick={() => setVideoOpen(false)}
                className="text-neutral-400 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-video bg-neutral-900 flex items-center justify-center">
              <div className="text-center text-neutral-400 p-8">
                <Play className="w-16 h-16 mx-auto mb-4 text-primary opacity-60" />
                <p className="text-base font-semibold">
                  Interactive Walkthrough Video
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  Product demonstration video will stream here.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
