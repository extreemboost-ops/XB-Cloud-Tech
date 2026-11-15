import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { adminCmsStore, CMSMasterState } from "../../services/adminCmsStore"
import { useAdminAuth } from "../../context/AdminAuthContext"
import {
  FileText,
  Boxes,
  Compass,
  Inbox,
  Image,
  Palette,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  PlusCircle,
  Database,
  Download,
} from "lucide-react"

export const AdminDashboardPage: React.FC = () => {
  const { user } = useAdminAuth()
  const [state, setState] = useState<CMSMasterState>(adminCmsStore.getState())

  useEffect(() => {
    return adminCmsStore.subscribe(() => {
      setState(adminCmsStore.getState())
    })
  }, [])

  const totalPages = state.pages.length
  const publishedPages = state.pages.filter(
    (p) => p.status === "published",
  ).length
  const totalProducts = state.products.length
  const totalLandingPages = state.landingPages.length
  const unreadSubmissions = state.submissions.filter(
    (s) => s.status === "unread",
  ).length
  const totalMedia = state.mediaAssets.length

  const handleExportBackup = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(adminCmsStore.exportStateJson())
    const downloadAnchor = document.createElement("a")
    downloadAnchor.setAttribute("href", dataStr)
    downloadAnchor.setAttribute(
      "download",
      `xb_cms_backup_${new Date().toISOString().slice(0, 10)}.json`,
    )
    document.body.appendChild(downloadAnchor)
    downloadAnchor.click()
    downloadAnchor.remove()
  }

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold backdrop-blur-md border border-blue-400/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live Production Content Architecture
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">
              Welcome back, {user?.name || "Administrator"}
            </h1>
            <p className="text-slate-300 text-sm max-w-xl">
              XB Cloud Tech visual administration control panel. Update ERP
              product specifications, landing page campaigns, media slots, and
              design system tokens in real time.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/admin/pages"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 transition-all"
            >
              <PlusCircle className="w-4 h-4" />
              Manage Pages
            </Link>
            <button
              onClick={handleExportBackup}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/10 backdrop-blur-md transition-all"
            >
              <Download className="w-4 h-4" />
              Export CMS JSON
            </button>
          </div>
        </div>
      </div>

      {/* KPI Real Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Website Pages
            </span>
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900">{totalPages}</div>
          <div className="mt-1 flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{publishedPages} Published live</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              ERP Products
            </span>
            <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Boxes className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900">
            {totalProducts}
          </div>
          <div className="mt-1 text-xs text-slate-500 font-medium">
            Storex, Purchoon, Cambridge & more
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Campaign Pages
            </span>
            <div className="w-8 h-8 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center">
              <Compass className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900">
            {totalLandingPages}
          </div>
          <div className="mt-1 text-xs text-cyan-600 font-medium">
            High-converting paid ad funnels
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-slate-300 transition-all">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Leads & Inquiries
            </span>
            <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Inbox className="w-4 h-4" />
            </div>
          </div>
          <div className="text-2xl font-black text-slate-900">
            {state.submissions.length}
          </div>
          <div className="mt-1 flex items-center gap-1 text-xs text-amber-600 font-semibold">
            {unreadSubmissions > 0
              ? `${unreadSubmissions} unread inquiries`
              : "All leads reviewed"}
          </div>
        </div>
      </div>

      {/* Quick Launchpad & Live Previews */}
      <div>
        <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
          Quick Action Launchpad
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            to="/admin/products"
            className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all flex items-start justify-between"
          >
            <div className="space-y-1">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Boxes className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors">
                ERP Product Catalog
              </h3>
              <p className="text-xs text-slate-500">
                Update headlines, 4-slot screenshots, and feature modules.
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
          </Link>

          <Link
            to="/admin/landing-pages"
            className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all flex items-start justify-between"
          >
            <div className="space-y-1">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-cyan-600 transition-colors">
                Campaign Landing Pages
              </h3>
              <p className="text-xs text-slate-500">
                Tailor distraction-free paid advertising funnels and CTAs.
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-600 transition-colors" />
          </Link>

          <Link
            to="/admin/design-system"
            className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all flex items-start justify-between"
          >
            <div className="space-y-1">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-purple-600 transition-colors">
                Design System & Tokens
              </h3>
              <p className="text-xs text-slate-500">
                Configure primary colors, border radii, and brand palettes.
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-purple-600 transition-colors" />
          </Link>

          <Link
            to="/admin/media"
            className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all flex items-start justify-between"
          >
            <div className="space-y-1">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Image className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-emerald-600 transition-colors">
                Media & Screenshot Library
              </h3>
              <p className="text-xs text-slate-500">
                Manage {totalMedia} enterprise product mockups and UI captures.
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
          </Link>

          <Link
            to="/admin/forms"
            className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all flex items-start justify-between"
          >
            <div className="space-y-1">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Inbox className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-amber-600 transition-colors">
                Inquiries & Form Submissions
              </h3>
              <p className="text-xs text-slate-500">
                Review demo bookings, consultation inquiries, and contact leads.
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition-colors" />
          </Link>

          <Link
            to="/admin/versions"
            className="group p-5 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all flex items-start justify-between"
          >
            <div className="space-y-1">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm group-hover:text-slate-900 transition-colors">
                Publishing & Version History
              </h3>
              <p className="text-xs text-slate-500">
                Inspect deployment snapshots and rollback to prior versions.
              </p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
          </Link>
        </div>
      </div>

      {/* Grid: Recent Activity & Recent Form Submissions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Audit Activity */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <h3 className="font-bold text-slate-900 text-sm">
                Recent Audit Activity
              </h3>
            </div>
            <Link
              to="/admin/activity"
              className="text-xs font-semibold text-blue-600 hover:underline"
            >
              View All Logs
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {state.activityLogs.slice(0, 5).map((log) => (
              <div
                key={log.id}
                className="py-3 flex items-start justify-between gap-4"
              >
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-slate-900">
                    {log.action}{" "}
                    <span className="font-normal text-slate-500">on</span>{" "}
                    {log.entityName}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    By{" "}
                    <span className="font-medium text-slate-700">
                      {log.userName}
                    </span>
                    {log.details && ` • ${log.details}`}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-slate-400 shrink-0 mt-0.5">
                  <Clock className="w-3 h-3" />
                  <span>
                    {new Date(log.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Form Inquiries */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Inbox className="w-5 h-5 text-amber-600" />
              <h3 className="font-bold text-slate-900 text-sm">
                Recent Incoming Leads
              </h3>
            </div>
            <Link
              to="/admin/forms"
              className="text-xs font-semibold text-blue-600 hover:underline"
            >
              Manage Leads
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {state.submissions.slice(0, 4).map((sub) => (
              <div
                key={sub.id}
                className="py-3 flex items-start justify-between gap-4"
              >
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900">
                      {sub.data.name || "Anonymous Prospect"}
                    </span>
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
                        sub.status === "unread"
                          ? "bg-amber-100 text-amber-800"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {sub.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 truncate max-w-sm">
                    {sub.data.company || sub.data.phone || sub.formName}
                  </p>
                </div>
                <div className="text-[10px] text-slate-400 shrink-0">
                  {new Date(sub.submittedAt).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboardPage
