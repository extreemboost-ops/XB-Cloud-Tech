import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { adminCmsStore } from "../../services/adminCmsStore"
import { useAdminAuth } from "../../context/AdminAuthContext"
import { CMSPage } from "../../types/adminCms"
import {
  FileText,
  Plus,
  Search,
  ExternalLink,
  Edit3,
  Trash2,
  CheckCircle2,
  Clock,
  Layers,
} from "lucide-react"

export const AdminPagesPage: React.FC = () => {
  const { user } = useAdminAuth()
  const [pages, setPages] = useState<CMSPage[]>(adminCmsStore.getPages())
  const [searchQuery, setSearchQuery] = useState("")
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [showCreateModal, setShowCreateModal] = useState(false)

  // New page form state
  const [newTitle, setNewTitle] = useState("")
  const [newSlug, setNewSlug] = useState("")
  const [newRoute, setNewRoute] = useState("")

  useEffect(() => {
    return adminCmsStore.subscribe(() => {
      setPages(adminCmsStore.getPages())
    })
  }, [])

  const filteredPages = pages.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.route.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = filterStatus === "all" || p.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const handleCreatePage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!user || !newTitle.trim()) return

    const formattedRoute = newRoute.startsWith("/") ? newRoute : `/${newRoute}`
    const slug =
      newSlug.trim() || newTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-")

    adminCmsStore.createPage(
      {
        title: newTitle.trim(),
        slug,
        route: formattedRoute,
        status: "draft",
        seo: {
          metaTitle: `${newTitle.trim()} | XB Cloud Tech`,
          metaDescription: `Discover enterprise systems on the ${newTitle.trim()} page at XB Cloud Tech.`,
        },
        sections: [
          {
            id: `sec_${Date.now()}`,
            type: "hero",
            title: `${newTitle} Hero`,
            order: 1,
            visible: true,
            content: {
              badge: "ENTERPRISE SOLUTION",
              headline: `${newTitle}`,
              subheadline:
                "Engineered for high-reliability business operations.",
              primaryCta: "Get Started",
              primaryLink: "/contact",
            },
            styles: { paddingY: "large", containerWidth: "default" },
          },
        ],
      },
      user,
    )

    setShowCreateModal(false)
    setNewTitle("")
    setNewSlug("")
    setNewRoute("")
  }

  const handleDeletePage = (id: string, title: string) => {
    if (!user) return
    if (
      confirm(
        `Are you sure you want to delete page "${title}"? This cannot be undone.`,
      )
    ) {
      adminCmsStore.deletePage(id, user)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Website Pages
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage structure, metadata, sections, and publishing status for all
            website routes.
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/20 transition-all"
        >
          <Plus className="w-4 h-4" />
          Create New Page
        </button>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search pages by title or route (e.g. /about, /pricing)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="flex items-center gap-2">
          {["all", "published", "draft"].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold capitalize transition-colors ${
                filterStatus === st
                  ? "bg-slate-900 text-white"
                  : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Page List Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/75 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                <th className="py-3.5 px-6">Page Name & Route</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Sections</th>
                <th className="py-3.5 px-4">Version</th>
                <th className="py-3.5 px-4">Last Updated</th>
                <th className="py-3.5 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredPages.map((page) => (
                <tr
                  key={page.id}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <FileText className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 block text-sm">
                          {page.title}
                        </span>
                        <code className="text-[11px] text-slate-400 font-mono">
                          {page.route}
                        </code>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        page.status === "published"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {page.status === "published" ? (
                        <CheckCircle2 className="w-3 h-3" />
                      ) : (
                        <Clock className="w-3 h-3" />
                      )}
                      {page.status}
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-medium">
                      <Layers className="w-3 h-3 text-slate-400" />
                      {page.sections.length} sections
                    </span>
                  </td>

                  <td className="py-4 px-4 font-mono text-slate-500 font-medium">
                    v{page.version}
                  </td>

                  <td className="py-4 px-4 text-slate-500">
                    <div>{new Date(page.updatedAt).toLocaleDateString()}</div>
                    <div className="text-[10px] text-slate-400">
                      by {page.updatedBy}
                    </div>
                  </td>

                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        to={`/admin/builder/${page.id}`}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-lg text-xs font-semibold transition-colors"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        Visual Builder
                      </Link>

                      <a
                        href={page.route}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                        title="View Live Page"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>

                      {page.id !== "page_home" && (
                        <button
                          onClick={() => handleDeletePage(page.id, page.title)}
                          className="p-1.5 text-red-400 hover:text-red-700 rounded-lg hover:bg-red-50 transition-colors"
                          title="Delete Page"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Page Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full border border-slate-200 shadow-2xl p-6">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Create New Website Page
            </h3>
            <p className="text-xs text-slate-500 mb-5">
              Add a new page route to the XB Cloud Tech content architecture.
            </p>

            <form onSubmit={handleCreatePage} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Page Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Enterprise Security & Compliance"
                  value={newTitle}
                  onChange={(e) => {
                    setNewTitle(e.target.value)
                    if (!newRoute) {
                      setNewRoute(
                        "/" +
                          e.target.value
                            .toLowerCase()
                            .replace(/[^a-z0-9]+/g, "-"),
                      )
                    }
                  }}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Route Path
                </label>
                <input
                  type="text"
                  required
                  placeholder="/enterprise-security"
                  value={newRoute}
                  onChange={(e) => setNewRoute(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold shadow-md shadow-blue-500/20"
                >
                  Create & Launch Builder
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminPagesPage
