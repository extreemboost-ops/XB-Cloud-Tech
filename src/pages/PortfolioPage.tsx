/* eslint-disable */

// @ts-nocheck

import React, { useState } from "react"

import { useNavigate } from "react-router-dom"

import {
  Cloud,
  ChevronDown,
  Menu,
  ChevronRight,
  Globe,
  Terminal,
  Briefcase,
  ArrowRight,
  Quote,
  TrendingUp,
  DollarSign,
  Clock,
  Users,
  CheckCircle2,
  Building2,
  Stethoscope,
  ShoppingCart,
  GraduationCap,
} from "lucide-react"

const CTABanner = () => (
  <section className="py-24 bg-primary relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
    <div className="container-custom relative z-10 text-center text-white">
      <h2 className="text-h2 mb-6 max-w-2xl mx-auto">
        Ready to be our next success story?
      </h2>
      <p className="text-body-lg text-white/80 mb-10 max-w-xl mx-auto">
        Join industry leaders who have transformed their infrastructure and
        reduced costs with XB Cloud Tech.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto px-8 py-3.5 bg-dark-base text-white rounded-lg font-semibold text-base transition-all hover:bg-black hover:shadow-lg hover:shadow-black/20 active:scale-95 flex items-center justify-center gap-2">
          Start Building Free
        </button>
        <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-white text-white rounded-lg font-semibold text-base transition-all hover:bg-white/10 active:scale-95 flex items-center justify-center gap-2">
          Contact Engineering
        </button>
      </div>
    </div>
  </section>
)

// --- Case Studies Page ---

const PortfolioPage = () => {
  const navigate = useNavigate()

  const setPage = (p: string) => navigate(p === "home" ? "/" : "/" + p)

  const [activeFilter, setActiveFilter] = useState("All")

  const filters = ["All", "E-commerce", "Healthcare", "Finance", "Education"]

  const caseStudies = [
    {
      id: 1,

      client: "MediCore Health",

      industry: "Healthcare",

      logoIcon: <Stethoscope className="w-6 h-6" />,

      result: "100% HIPAA Compliance achieved with 0 data breaches",

      desc: "Migrating legacy on-prem patient databases to our zero-trust private cloud environment.",

      img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&auto=format&fit=crop",
    },

    {
      id: 2,

      client: "ShopGlobal",

      industry: "E-commerce",

      logoIcon: <ShoppingCart className="w-6 h-6" />,

      result: "Handled 5x Black Friday traffic surge effortlessly",

      desc: "How automated Kubernetes scaling allowed this retailer to survive their biggest traffic spike without downtime.",

      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
    },

    {
      id: 3,

      client: "FinEdge Capital",

      industry: "Finance",

      logoIcon: <Building2 className="w-6 h-6" />,

      result: "Reduced trading latency by 45 milliseconds",

      desc: "Deploying high-frequency trading algorithms on our ultra-low latency NVMe bare metal instances.",

      img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop",
    },

    {
      id: 4,

      client: "LearnSphere",

      industry: "Education",

      logoIcon: <GraduationCap className="w-6 h-6" />,

      result: "Cut monthly infrastructure costs by 40%",

      desc: "Re-architecting a monolithic video streaming platform into microservices using managed containers.",

      img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800&auto=format&fit=crop",
    },
  ]

  const filteredStudies =
    activeFilter === "All"
      ? caseStudies
      : caseStudies.filter((s) => s.industry === activeFilter)

  return (
    <div className="bg-light-base flex flex-col font-sans text-neutral-900">
      {/* Header */}
      <header className="bg-dark-base text-white pt-20 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-base to-primary/10 opacity-30"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-h1 mb-6">Success Stories</h1>
          <p className="text-body-lg text-neutral-400 mb-0 max-w-2xl mx-auto">
            Discover how leading organizations are leveraging our infrastructure
            to scale faster, optimize costs, and secure their data.
          </p>
        </div>
      </header>

      {/* Featured Spotlight */}
      <section className="bg-dark-base text-white pb-24 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 md:p-14 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="flex items-center gap-3 mb-8">
                <div className="px-3 py-1 rounded-full bg-primary/20 text-secondary text-xs font-semibold uppercase tracking-wider">
                  Featured Story
                </div>
                <div className="px-3 py-1 rounded-full border border-white/10 text-neutral-300 text-xs font-semibold uppercase tracking-wider">
                  SaaS Platform
                </div>
              </div>

              <h2 className="text-h2 text-white mb-6 leading-tight">
                DataStack scaled to 1M daily users while cutting cloud costs by
                60%.
              </h2>

              <div className="grid grid-cols-2 gap-6 mb-10 border-y border-white/10 py-6">
                <div>
                  <div className="text-3xl font-bold text-secondary mb-1">
                    60%
                  </div>
                  <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                    Cost Reduction
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-success mb-1">
                    99.999%
                  </div>
                  <div className="text-xs text-neutral-400 font-semibold uppercase tracking-wider">
                    Uptime Achieved
                  </div>
                </div>
              </div>

              <blockquote className="text-lg text-neutral-300 italic mb-8 relative">
                <Quote className="absolute -top-4 -left-6 w-10 h-10 text-white/10 rotate-180" />
                "Moving our primary workloads to XB Cloud Tech was the best
                engineering decision we made this year. The performance is
                unparalleled, and we don't have to worry about exorbitant egress
                fees."
              </blockquote>

              <div>
                <button
                  onClick={() => setPage("portfolio/detail")}
                  className="px-6 py-3 bg-white text-dark-base rounded-lg font-bold text-sm transition-all hover:bg-neutral-200 flex items-center gap-2"
                >
                  Read the full story <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="hidden lg:block relative bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="bg-white border-b border-neutral-200 sticky top-[73px] z-40 shadow-sm">
        <div className="container-custom py-4 overflow-x-auto scroll-container flex gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                activeFilter === filter
                  ? "bg-neutral-900 text-white shadow-md"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Case Study Grid */}
      <section className="py-20 bg-light-base">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-2xl border border-neutral-200 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all group overflow-hidden flex flex-col cursor-pointer"
                onClick={() => setPage("portfolio/detail")}
              >
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-dark-base/20 group-hover:bg-transparent transition-colors z-10"></div>
                  <img
                    src={study.img}
                    alt={study.client}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-sm">
                    <span className="text-primary">{study.logoIcon}</span>
                    <span className="font-bold text-neutral-900 text-sm">
                      {study.client}
                    </span>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-xs font-semibold uppercase tracking-wider">
                      {study.industry}
                    </span>
                  </div>
                  <h3 className="text-h3 text-neutral-900 mb-3">
                    {study.result}
                  </h3>
                  <p className="text-body text-neutral-500 mb-8 flex-grow">
                    {study.desc}
                  </p>

                  <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all gap-1 mt-auto">
                    Read case study <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Wall */}
      <section className="py-24 bg-white border-y border-neutral-200">
        <div className="container-custom text-center">
          <h3 className="text-caption text-neutral-400 mb-12">
            TRUSTED BY INNOVATIVE TEAMS WORLDWIDE
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Logo placeholders using Lucide icons combined with text to look like company logos */}
            {[
              { icon: <Cloud className="w-8 h-8" />, name: "SkyNet" },

              { icon: <Globe className="w-8 h-8" />, name: "GlobalTech" },

              { icon: <Zap className="w-8 h-8" />, name: "BoltApp" },

              { icon: <Database className="w-8 h-8" />, name: "DataCore" },

              { icon: <Terminal className="w-8 h-8" />, name: "DevLogic" },

              { icon: <Shield className="w-8 h-8" />, name: "SecureGrid" },

              { icon: <Building2 className="w-8 h-8" />, name: "CityBank" },

              { icon: <ShoppingCart className="w-8 h-8" />, name: "RetailPro" },

              { icon: <Stethoscope className="w-8 h-8" />, name: "MedSys" },

              { icon: <GraduationCap className="w-8 h-8" />, name: "EduSpace" },

              { icon: <Server className="w-8 h-8" />, name: "HostGen" },

              { icon: <Layers className="w-8 h-8" />, name: "StackFlow" },
            ].map((logo, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer"
              >
                {logo.icon}
                <span className="font-bold text-lg tracking-tight">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}

// --- Case Study Detail Template ---

export const PortfolioDetailPage = () => {
  const navigate = useNavigate()

  const setPage = (p: string) => navigate(p === "home" ? "/" : "/" + p)

  return (
    <div className="bg-light-base flex flex-col font-sans text-neutral-900 selection:bg-primary/20">
      {/* Hero */}
      <header className="bg-dark-base text-white pt-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-dark-base to-dark-base z-0"></div>

        <div className="container-custom relative z-10">
          <div className="flex items-center text-sm font-medium text-neutral-400 mb-12 space-x-2">
            <span
              className="hover:text-white transition-colors cursor-pointer"
              onClick={() => setPage("home")}
            >
              Home
            </span>
            <ChevronRight className="w-4 h-4" />
            <span
              className="hover:text-white transition-colors cursor-pointer"
              onClick={() => setPage("portfolio")}
            >
              Success Stories
            </span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">ShopGlobal</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-lg">
                  <ShoppingCart className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">ShopGlobal</h2>
                  <div className="text-sm text-neutral-400 font-medium">
                    Global E-commerce Retailer
                  </div>
                </div>
              </div>

              <h1 className="text-h1 mb-6">
                Handling a 5x Black Friday traffic surge with zero downtime.
              </h1>
              <p className="text-body-lg text-neutral-400 mb-8">
                How migrating to managed Kubernetes on XB Cloud Tech enabled
                ShopGlobal to automatically scale their infrastructure to meet
                unprecedented holiday demand.
              </p>

              <div className="flex flex-wrap gap-6 border-t border-white/10 pt-6">
                <div>
                  <div className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mb-1">
                    Industry
                  </div>
                  <div className="font-medium">Retail & E-commerce</div>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mb-1">
                    Project Duration
                  </div>
                  <div className="font-medium">3 Months</div>
                </div>
                <div>
                  <div className="text-xs text-neutral-500 font-semibold uppercase tracking-wider mb-1">
                    Services Used
                  </div>
                  <div className="font-medium text-secondary">
                    Managed Kubernetes, Edge CDN
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop"
                alt="E-commerce Dashboard"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Key Metrics Strip */}
      <section className="bg-white border-b border-neutral-200 py-12 relative z-20 shadow-sm">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-neutral-100 text-center">
            <div className="px-4">
              <div className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-2">
                100%
              </div>
              <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                Uptime Maintained
              </div>
            </div>
            <div className="px-4">
              <div className="text-4xl lg:text-5xl font-bold text-success mb-2">
                5x
              </div>
              <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                Traffic Surge Handled
              </div>
            </div>
            <div className="px-4">
              <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                40%
              </div>
              <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                Reduction in Cloud Spend
              </div>
            </div>
            <div className="px-4">
              <div className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-2">
                2 min
              </div>
              <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">
                Auto-scaling latency
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content: Challenge / Solution / Results */}
      <section className="py-24 bg-light-base">
        <div className="container-custom max-w-4xl mx-auto space-y-20">
          {/* Challenge */}
          <div className="bg-white p-10 md:p-14 rounded-3xl border border-neutral-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-warning"></div>
            <h3 className="text-h2 mb-6">The Challenge</h3>
            <div className="prose prose-lg text-neutral-600 space-y-6">
              <p>
                As a rapidly growing global retailer, ShopGlobal experienced
                massive seasonal traffic spikes, particularly during the Black
                Friday/Cyber Monday (BFCM) weekend. Their previous
                infrastructure, hosted on a legacy monolithic architecture,
                required manual capacity provisioning months in advance.
              </p>
              <p>
                If they provisioned too much, they wasted hundreds of thousands
                of dollars on idle compute. If they provisioned too little, the
                site would crash—as it did the previous year, costing an
                estimated $2.4M in lost revenue in just 45 minutes of downtime.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="bg-white p-10 md:p-14 rounded-3xl border border-neutral-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            <h3 className="text-h2 mb-6">The Solution</h3>
            <div className="prose prose-lg text-neutral-600 space-y-6">
              <p>
                ShopGlobal's engineering team partnered with XB Cloud Tech to
                modernize their stack. We migrated their monolithic application
                to a microservices architecture running on our{" "}
                <strong>Managed Kubernetes (K8s)</strong> platform.
              </p>
              <ul className="space-y-4 my-8 pl-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <span>
                    <strong>Horizontal Pod Autoscaling (HPA):</strong>{" "}
                    Configured to automatically spin up new pods within seconds
                    based on CPU utilization and incoming HTTP requests.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <span>
                    <strong>Global Edge CDN:</strong> Implemented across 32 Edge
                    locations to cache static assets, dramatically reducing the
                    load on the origin servers.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary mt-1 shrink-0" />
                  <span>
                    <strong>Managed PostgreSQL:</strong> Utilized
                    high-availability read-replicas to handle the massive surge
                    in database read queries for product catalogs.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-dark-base text-white p-10 md:p-14 rounded-3xl relative overflow-hidden shadow-2xl">
            <Quote className="absolute top-8 left-8 w-24 h-24 text-white/5 rotate-180" />
            <div className="relative z-10">
              <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-10">
                "We watched the live traffic analytics hit 5x our normal peak on
                Black Friday. The Kubernetes clusters auto-scaled beautifully in
                real-time. Our engineers didn't have to touch a thing—they just
                watched the dashboard and drank coffee."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-neutral-800 overflow-hidden border-2 border-white/20">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
                    alt="CTO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-lg">Marcus Chen</div>
                  <div className="text-secondary font-medium text-sm">
                    Chief Technology Officer, ShopGlobal
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white p-10 md:p-14 rounded-3xl border border-neutral-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-success"></div>
            <h3 className="text-h2 mb-6">The Results</h3>
            <div className="prose prose-lg text-neutral-600 space-y-6">
              <p>
                The Black Friday weekend was the most successful in company
                history. Despite experiencing a sustained 5x surge in traffic
                over 72 hours, the application maintained 100% uptime with
                sub-second page load speeds globally.
              </p>
              <p>
                Because the infrastructure scaled back down automatically after
                the weekend, ShopGlobal achieved a 40% reduction in their
                overall monthly cloud spend compared to their previous legacy
                setup.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-24 bg-white border-t border-neutral-200">
        <div className="container-custom">
          <h2 className="text-h3 mb-10 text-neutral-900">
            More Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                client: "MediCore Health",
                industry: "Healthcare",
                desc: "100% HIPAA Compliance achieved with 0 data breaches.",
              },

              {
                client: "FinEdge Capital",
                industry: "Finance",
                desc: "Reduced trading latency by 45 milliseconds globally.",
              },

              {
                client: "LearnSphere",
                industry: "Education",
                desc: "Cut monthly infrastructure costs by 40% via microservices.",
              },
            ].map((study, idx) => (
              <div
                key={idx}
                className="group cursor-pointer bg-light-base rounded-2xl p-8 border border-neutral-200 hover:border-primary/50 hover:shadow-lg transition-all flex flex-col"
                onClick={() => setPage("portfolio/detail")}
              >
                <div className="mb-4">
                  <span className="px-3 py-1 rounded-full bg-white border border-neutral-200 text-neutral-600 text-xs font-semibold uppercase tracking-wider">
                    {study.industry}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-neutral-900 mb-3">
                  {study.client}
                </h4>
                <p className="text-sm text-neutral-500 mb-6 flex-grow">
                  {study.desc}
                </p>
                <span className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read story <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  )
}

export default PortfolioPage
