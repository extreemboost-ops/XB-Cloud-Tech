import { useState, useEffect, useRef } from "react"
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom"
import { adminCmsStore } from "../services/adminCmsStore"
import {
  Cloud,
  ChevronDown,
  Menu,
  X,
  ShoppingBag,
  Store,
  GraduationCap,
  HeartPulse,
  Factory,
  CreditCard,
  ShoppingCart,
  BookOpen,
  ShieldCheck,
  Cpu,
  Truck,
  ArrowRight,
  Sparkles,
  Calendar,
  CheckCircle2,
} from "lucide-react"

export const PRODUCTS_NAV = [
  {
    name: "Storex ERP",
    tagline: "Retail & Multi-branch POS",
    desc: "Inventory control, barcode scanning, purchase orders & multi-store sync.",
    badge: "Popular",
    to: "/products/storex-erp",
    icon: ShoppingBag,
    color: "text-blue-500 bg-blue-500/10",
  },
  {
    name: "Purchoon ERP",
    tagline: "Grocery & Supermarket POS",
    desc: "Weight scale integration, wholesale rate tiers & rapid-scan checkout.",
    badge: "Fast",
    to: "/products/purchoon-erp",
    icon: Store,
    color: "text-emerald-500 bg-emerald-500/10",
  },
  {
    name: "CambridgeDesk",
    tagline: "School & College Management",
    desc: "Admissions, fee automation, student grading, attendance & parent portal.",
    badge: "Education",
    to: "/products/cambridgedesk",
    icon: GraduationCap,
    color: "text-violet-500 bg-violet-500/10",
  },
  {
    name: "Pharmacy ERP",
    tagline: "Healthcare & Drug Dispensary",
    desc: "Batch numbers, expiry date alerts, supplier management & drug formulas.",
    badge: "Medical",
    to: "/products/pharmacy-erp",
    icon: HeartPulse,
    color: "text-rose-500 bg-rose-500/10",
  },
  {
    name: "Industrial ERP",
    tagline: "Manufacturing & Plants",
    desc: "Bill of Materials (BOM), shop floor work orders, inventory & cost tracking.",
    badge: "Industry",
    to: "/products/industrial-erp",
    icon: Factory,
    color: "text-amber-500 bg-amber-500/10",
  },
  {
    name: "Qistmarket ERP",
    tagline: "Installment & Hire-Purchase",
    desc: "Installment scheduling, monthly recovery ledger & customer credit scoring.",
    badge: "Fintech",
    to: "/products/qistmarket-erp",
    icon: CreditCard,
    color: "text-cyan-500 bg-cyan-500/10",
  },
]

export const SOLUTIONS_NAV = [
  {
    name: "Retail & Wholesale",
    desc: "Omni-channel stock, point-of-sale & vendor supply chain workflows.",
    to: "/industries/retail-wholesale",
    icon: ShoppingCart,
  },
  {
    name: "Education & Academics",
    desc: "Campus lifecycle, fee automation & academic reporting pipelines.",
    to: "/industries/education",
    icon: BookOpen,
  },
  {
    name: "Healthcare & Pharmacy",
    desc: "Drug dispensary, clinical workflows & audit-ready traceability.",
    to: "/industries/pharmacy",
    icon: ShieldCheck,
  },
  {
    name: "Manufacturing & Plants",
    desc: "Production schedules, machine utilization & batch cost accounting.",
    to: "/industries/manufacturing",
    icon: Cpu,
  },
  {
    name: "Distribution & Logistics",
    desc: "Multi-warehouse movement, dispatch tracking & supplier replenishment.",
    to: "/industries/distribution",
    icon: Truck,
  },
  {
    name: "Installment & Leasing",
    desc: "Hire-purchase risk management, guarantor KYC & field recovery.",
    to: "/industries/financial-services",
    icon: CreditCard,
  },
]

export const COMPANY_NAV = [
  {
    name: "About Us",
    desc: "Our engineering principles, story & global presence",
    to: "/about",
  },
  {
    name: "Case Studies",
    desc: "Real production deployments & customer outcomes",
    to: "/portfolio",
  },
  {
    name: "Pricing & Licensing",
    desc: "Transparent plans, dedicated VPS & support tiers",
    to: "/pricing",
  },
  {
    name: "Engineering Insights",
    desc: "Architecture tutorials, cloud guides & tech updates",
    to: "/blog",
  },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] =
    useState<"products" | "solutions" | "company" | null>(null)
  const [mobileSection, setMobileSection] =
    useState<"products" | "solutions" | "company" | null>(null)
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const [demoProduct, setDemoProduct] = useState("Storex ERP")
  const [demoFormSubmitted, setDemoFormSubmitted] = useState(false)
  const [demoFormData, setDemoFormData] = useState({
    name: "",
    email: "",
    phone: "",
    note: "",
  })

  const navRef = useRef<HTMLElement>(null)
  const location = useLocation()
  const navigate = useNavigate()

  // Close menus on route change
  useEffect(() => {
    setActiveDropdown(null)
    setMobileOpen(false)
  }, [location.pathname])

  // Close dropdown on click outside or Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null)
        setMobileOpen(false)
        setDemoModalOpen(false)
      }
    }
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("click", handleClickOutside)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("click", handleClickOutside)
    }
  }, [])

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    adminCmsStore.addSubmission(
      "form_header_demo",
      `Book a Demo (${demoProduct})`,
      {
        product: demoProduct,
        name: demoFormData.name,
        email: demoFormData.email,
        phone: demoFormData.phone,
        note: demoFormData.note,
      },
      location.pathname,
    )
    setDemoFormSubmitted(true)
    setTimeout(() => {
      setDemoFormSubmitted(false)
      setDemoModalOpen(false)
      setDemoFormData({ name: "", email: "", phone: "", note: "" })
    }, 2500)
  }

  const openDemoWithProduct = (prodName: string) => {
    setDemoProduct(prodName)
    setActiveDropdown(null)
    setMobileOpen(false)
    setDemoModalOpen(true)
  }

  return (
    <>
      <nav
        ref={navRef}
        aria-label="Global Navigation"
        className="bg-dark-base border-b border-neutral-900 px-6 py-4 sticky top-0 z-50 transition-all"
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-8">
            <NavLink
              to="/"
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-secondary group-hover:bg-primary group-hover:text-white transition-all shadow-xs">
                <Cloud className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="font-logo text-xl font-bold text-white tracking-tight leading-none">
                  XB Cloud Tech
                </span>
                <span className="text-[10px] text-neutral-400 font-semibold tracking-wider uppercase mt-1">
                  Enterprise Software
                </span>
              </div>
            </NavLink>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                Home
              </NavLink>

              {/* Products Dropdown Trigger */}
              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveDropdown(
                      activeDropdown === "products" ? null : "products",
                    )
                  }}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                    activeDropdown === "products"
                      ? "text-white bg-white/10"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`}
                  aria-expanded={activeDropdown === "products"}
                >
                  <span>Products</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === "products"
                        ? "rotate-180 text-secondary"
                        : "opacity-60"
                    }`}
                  />
                </button>

                {/* Products Mega Dropdown */}
                {activeDropdown === "products" && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-full left-0 mt-3 w-[660px] bg-dark-base border border-white/15 rounded-2xl shadow-2xl p-6 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                      <div>
                        <div className="text-xs uppercase tracking-wider font-bold text-secondary flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5" /> Software Products
                          Suite
                        </div>
                        <p className="text-xs text-neutral-400 mt-0.5">
                          Ready-to-deploy enterprise ERP &amp; business
                          management platforms.
                        </p>
                      </div>
                      <Link
                        to="/products"
                        onClick={() => setActiveDropdown(null)}
                        className="text-xs font-semibold text-primary hover:text-secondary transition-colors flex items-center gap-1"
                      >
                        All Products Directory{" "}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {PRODUCTS_NAV.map((p) => {
                        const Icon = p.icon
                        return (
                          <div
                            key={p.name}
                            onClick={() => {
                              setActiveDropdown(null)
                              navigate(p.to)
                            }}
                            className="group p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all cursor-pointer flex items-start gap-3 text-left relative"
                          >
                            <div
                              className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${p.color}`}
                            >
                              <Icon className="w-5 h-5" />
                            </div>
                            <div className="flex-grow min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-white group-hover:text-secondary transition-colors">
                                  {p.name}
                                </span>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-neutral-300 font-semibold uppercase tracking-wider">
                                  {p.badge}
                                </span>
                              </div>
                              <p className="text-xs text-neutral-400 line-clamp-2 mt-1 leading-snug">
                                {p.desc}
                              </p>
                            </div>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                openDemoWithProduct(p.name)
                              }}
                              className="opacity-0 group-hover:opacity-100 text-[10px] text-secondary hover:underline font-bold self-end shrink-0"
                            >
                              Demo
                            </button>
                          </div>
                        )
                      })}
                    </div>

                    <div className="mt-4 pt-4 border-t border-white/10 bg-white/5 -mx-6 -mb-6 p-4 px-6 rounded-b-2xl flex items-center justify-between">
                      <span className="text-xs text-neutral-300">
                        Need bespoke customizations for your enterprise?
                      </span>
                      <button
                        onClick={() => {
                          setActiveDropdown(null)
                          navigate("/contact")
                        }}
                        className="text-xs font-bold text-white bg-primary hover:bg-primary/90 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        Discuss Custom ERP{" "}
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveDropdown(
                      activeDropdown === "solutions" ? null : "solutions",
                    )
                  }}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                    activeDropdown === "solutions"
                      ? "text-white bg-white/10"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`}
                  aria-expanded={activeDropdown === "solutions"}
                >
                  <span>Solutions</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === "solutions"
                        ? "rotate-180 text-secondary"
                        : "opacity-60"
                    }`}
                  />
                </button>

                {activeDropdown === "solutions" && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-full left-0 mt-3 w-88 bg-dark-base border border-white/15 rounded-2xl shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    <div className="flex items-center justify-between px-3 py-1 mb-2 border-b border-white/10 pb-2">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-neutral-400">
                        Sector Solutions
                      </span>
                      <Link
                        to="/industries"
                        onClick={() => setActiveDropdown(null)}
                        className="text-xs font-semibold text-primary hover:text-secondary flex items-center gap-1"
                      >
                        All Industries →
                      </Link>
                    </div>
                    <div className="space-y-1">
                      {SOLUTIONS_NAV.map((s) => {
                        const Icon = s.icon
                        return (
                          <Link
                            key={s.name}
                            to={s.to}
                            onClick={() => setActiveDropdown(null)}
                            className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all text-left"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/15 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-white group-hover:text-secondary transition-colors">
                                {s.name}
                              </div>
                              <p className="text-xs text-neutral-400 line-clamp-1 mt-0.5">
                                {s.desc}
                              </p>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>

              {/* Direct Services link */}
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                Services
              </NavLink>

              {/* Company Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveDropdown(
                      activeDropdown === "company" ? null : "company",
                    )
                  }}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
                    activeDropdown === "company"
                      ? "text-white bg-white/10"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`}
                  aria-expanded={activeDropdown === "company"}
                >
                  <span>Company</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      activeDropdown === "company"
                        ? "rotate-180 text-secondary"
                        : "opacity-60"
                    }`}
                  />
                </button>

                {activeDropdown === "company" && (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-full left-0 mt-3 w-72 bg-dark-base border border-white/15 rounded-2xl shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  >
                    <div className="space-y-1">
                      {COMPANY_NAV.map((c) => (
                        <Link
                          key={c.name}
                          to={c.to}
                          onClick={() => setActiveDropdown(null)}
                          className="group block p-2.5 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all text-left"
                        >
                          <div className="text-sm font-semibold text-white group-hover:text-secondary transition-colors">
                            {c.name}
                          </div>
                          <p className="text-xs text-neutral-400 mt-0.5 line-clamp-1">
                            {c.desc}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Contact Link */}
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3.5 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-white bg-white/10"
                      : "text-neutral-300 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Right CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => openDemoWithProduct("Storex ERP")}
              className="px-4 py-2 bg-primary text-white rounded-xl font-semibold text-sm transition-all hover:bg-primary/90 shadow-md hover:shadow-lg hover:shadow-primary/25 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-secondary" />
              <span>Book a Demo</span>
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="hidden sm:inline-flex px-4 py-2 bg-white/10 hover:bg-white/15 border border-white/15 text-white rounded-xl font-semibold text-sm transition-all active:scale-95 cursor-pointer"
            >
              Discuss Project
            </button>

            {/* Mobile Hamburger Button */}
            <button
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden max-w-[1200px] mx-auto pt-4 pb-6 border-t border-white/10 mt-4 flex flex-col gap-2 animate-in fade-in duration-200">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2.5 text-sm font-semibold text-neutral-200 hover:text-white hover:bg-white/5 rounded-lg"
            >
              Home
            </Link>

            {/* Mobile Products Section */}
            <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
              <button
                onClick={() =>
                  setMobileSection(
                    mobileSection === "products" ? null : "products",
                  )
                }
                className="w-full px-4 py-3 flex items-center justify-between text-sm font-semibold text-white cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-secondary" /> Products
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileSection === "products"
                      ? "rotate-180 text-secondary"
                      : "opacity-60"
                  }`}
                />
              </button>
              {mobileSection === "products" && (
                <div className="px-4 pb-3 space-y-2 border-t border-white/10 pt-2">
                  <Link
                    to="/products"
                    onClick={() => setMobileOpen(false)}
                    className="block text-xs font-bold text-secondary hover:underline pb-1 border-b border-white/10"
                  >
                    View All 6 Products Directory →
                  </Link>
                  {PRODUCTS_NAV.map((p) => (
                    <div
                      key={p.name}
                      onClick={() => {
                        setMobileOpen(false)
                        navigate(p.to)
                      }}
                      className="p-2 rounded-lg hover:bg-white/10 cursor-pointer flex items-center justify-between"
                    >
                      <div>
                        <div className="text-sm font-bold text-white">
                          {p.name}
                        </div>
                        <div className="text-xs text-neutral-400">
                          {p.tagline}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          openDemoWithProduct(p.name)
                        }}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-primary/20 text-secondary font-semibold"
                      >
                        Demo
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Solutions Section */}
            <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
              <button
                onClick={() =>
                  setMobileSection(
                    mobileSection === "solutions" ? null : "solutions",
                  )
                }
                className="w-full px-4 py-3 flex items-center justify-between text-sm font-semibold text-white cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-primary" /> Solutions
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileSection === "solutions"
                      ? "rotate-180 text-secondary"
                      : "opacity-60"
                  }`}
                />
              </button>
              {mobileSection === "solutions" && (
                <div className="px-4 pb-3 space-y-1.5 border-t border-white/10 pt-2">
                  <Link
                    to="/industries"
                    onClick={() => setMobileOpen(false)}
                    className="block text-xs font-bold text-secondary hover:underline pb-1 border-b border-white/10 mb-1"
                  >
                    View All 6 Sector Solutions →
                  </Link>
                  {SOLUTIONS_NAV.map((s) => (
                    <Link
                      key={s.name}
                      to={s.to}
                      onClick={() => setMobileOpen(false)}
                      className="block p-2 text-sm text-neutral-300 hover:text-white rounded-lg"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/services"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2.5 text-sm font-semibold text-neutral-200 hover:text-white hover:bg-white/5 rounded-lg"
            >
              Services
            </Link>

            {/* Mobile Company Section */}
            <div className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
              <button
                onClick={() =>
                  setMobileSection(
                    mobileSection === "company" ? null : "company",
                  )
                }
                className="w-full px-4 py-3 flex items-center justify-between text-sm font-semibold text-white cursor-pointer"
              >
                <span>Company</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    mobileSection === "company"
                      ? "rotate-180 text-secondary"
                      : "opacity-60"
                  }`}
                />
              </button>
              {mobileSection === "company" && (
                <div className="px-4 pb-3 space-y-1.5 border-t border-white/10 pt-2">
                  {COMPANY_NAV.map((c) => (
                    <Link
                      key={c.name}
                      to={c.to}
                      onClick={() => setMobileOpen(false)}
                      className="block p-2 text-sm text-neutral-300 hover:text-white rounded-lg"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="px-4 py-2.5 text-sm font-semibold text-neutral-200 hover:text-white hover:bg-white/5 rounded-lg"
            >
              Contact
            </Link>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => openDemoWithProduct("Storex ERP")}
                className="w-full py-3 bg-primary text-white rounded-xl font-bold text-sm shadow-md hover:bg-primary/90 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" /> Book a Product Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Book a Demo Modal */}
      {demoModalOpen && (
        <div
          className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setDemoModalOpen(false)}
        >
          <div
            className="bg-dark-base border border-white/20 rounded-3xl w-full max-w-lg shadow-2xl p-6 md:p-8 text-white relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setDemoModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {demoFormSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-success/20 border border-success/40 text-success flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold">Demo Request Received!</h3>
                <p className="text-sm text-neutral-300 max-w-sm mx-auto">
                  Our solution architect for <strong>{demoProduct}</strong> will
                  reach out within 2 hours to confirm your scheduled
                  walkthrough.
                </p>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2.5 text-secondary text-xs uppercase tracking-wider font-bold mb-2">
                  <Calendar className="w-4 h-4" /> Schedule Live Walkthrough
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Book a Demo with an Engineer
                </h3>
                <p className="text-sm text-neutral-400 mb-6">
                  Select your product and let our technical team showcase the
                  exact operational workflows for your industry.
                </p>

                <form onSubmit={handleDemoSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Select Software Product
                    </label>
                    <select
                      value={demoProduct}
                      onChange={(e) => setDemoProduct(e.target.value)}
                      className="w-full px-4 py-2.5 bg-white/10 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-secondary"
                    >
                      {PRODUCTS_NAV.map((p) => (
                        <option
                          key={p.name}
                          value={p.name}
                          className="bg-neutral-900 text-white"
                        >
                          {p.name} — {p.tagline}
                        </option>
                      ))}
                      <option
                        value="Custom Software Development"
                        className="bg-neutral-900 text-white"
                      >
                        Custom Enterprise Software / ERP Consultation
                      </option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={demoFormData.name}
                        onChange={(e) =>
                          setDemoFormData({
                            ...demoFormData,
                            name: e.target.value,
                          })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 bg-white/10 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-secondary placeholder:text-neutral-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={demoFormData.email}
                        onChange={(e) =>
                          setDemoFormData({
                            ...demoFormData,
                            email: e.target.value,
                          })
                        }
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 bg-white/10 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-secondary placeholder:text-neutral-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={demoFormData.phone}
                      onChange={(e) =>
                        setDemoFormData({
                          ...demoFormData,
                          phone: e.target.value,
                        })
                      }
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-2.5 bg-white/10 border border-white/15 rounded-xl text-white text-sm focus:outline-none focus:border-secondary placeholder:text-neutral-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-primary text-white font-bold rounded-xl text-sm hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 mt-2 cursor-pointer"
                  >
                    Confirm Demo Booking
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
