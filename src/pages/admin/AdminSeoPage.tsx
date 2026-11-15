import React, { useState, useEffect } from "react"
import { adminCmsStore } from "../../services/adminCmsStore"
import { useAdminAuth } from "../../context/AdminAuthContext"
import { WebsiteSettings, CMSPage } from "../../types/adminCms"
import {
  CheckCircle2,
  Save,
  Globe,
  FileCheck,
  ExternalLink,
} from "lucide-react"

export const AdminSeoPage: React.FC = () => {
  const { user } = useAdminAuth()
  const [settings, setSettings] = useState<WebsiteSettings>(
    adminCmsStore.getSettings(),
  )
  const [pages, setPages] = useState<CMSPage[]>(adminCmsStore.getPages())
  const [selectedPageId, setSelectedPageId] = useState<string>(
    pages[0]?.id || "",
  )
  const [feedback, setFeedback] = useState<string | null>(null)

  useEffect(() => {
    return adminCmsStore.subscribe(() => {
      setSettings(adminCmsStore.getSettings())
      setPages(adminCmsStore.getPages())
    })
  }, [])

  const activePage = pages.find((p) => p.id === selectedPageId) || pages[0]

  const handleSaveGlobal = () => {
    if (!user) return
    adminCmsStore.updateSettings(settings, user)
    setFeedback("Global SEO settings updated!")
    setTimeout(() => setFeedback(null), 3000)
  }

  const handleUpdatePageSeo = (
    field: "metaTitle" | "metaDescription" | "canonicalUrl",
    value: string,
  ) => {
    if (!user || !activePage) return
    const updatedSeo = {
      ...activePage.seo,
      [field]: value,
    }
    adminCmsStore.updatePage(activePage.id, { seo: updatedSeo }, user)
    setFeedback(`Updated SEO for ${activePage.title}`)
    setTimeout(() => setFeedback(null), 2500)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            SEO Control Center
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage global OpenGraph metadata, search engine crawl indexing,
            sitemaps, and route-specific tags.
          </p>
        </div>
        <div className="flex items-center gap-3">
          {feedback && (
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {feedback}
            </span>
          )}
          <button
            onClick={handleSaveGlobal}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/20"
          >
            <Save className="w-4 h-4" />
            Save Global SEO
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Global SEO Settings */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
          <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Globe className="w-4 h-4 text-blue-600" />
            Default Global Fallback Tags
          </h2>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Default Meta Title
              </label>
              <input
                type="text"
                value={settings.defaultMetaTitle}
                onChange={(e) =>
                  setSettings({ ...settings, defaultMetaTitle: e.target.value })
                }
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
              />
              <span className="text-[10px] text-slate-400 mt-0.5 block">
                {settings.defaultMetaTitle.length} characters (Recommended:
                50-60)
              </span>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Default Meta Description
              </label>
              <textarea
                rows={3}
                value={settings.defaultMetaDescription}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    defaultMetaDescription: e.target.value,
                  })
                }
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
              />
              <span className="text-[10px] text-slate-400 mt-0.5 block">
                {settings.defaultMetaDescription.length} characters
                (Recommended: 140-160)
              </span>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Default Open Graph Image
              </label>
              <input
                type="text"
                value={settings.defaultOgImage}
                onChange={(e) =>
                  setSettings({ ...settings, defaultOgImage: e.target.value })
                }
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-slate-600"
              />
            </div>
          </div>
        </div>

        {/* Route-Level SEO Auditor */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h2 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-600" />
              Per-Route SEO Health & Customization
            </h2>
            <select
              value={activePage.id}
              onChange={(e) => setSelectedPageId(e.target.value)}
              className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
            >
              {pages.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title} ({p.route})
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-4 text-xs">
            <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl flex items-center justify-between">
              <div>
                <span className="font-bold text-blue-900 block">
                  {activePage.title}
                </span>
                <span className="font-mono text-blue-600 text-[11px]">
                  {activePage.route}
                </span>
              </div>
              <a
                href={activePage.route}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 hover:underline"
              >
                <span>Live Route</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Page Meta Title
              </label>
              <input
                type="text"
                value={activePage.seo?.metaTitle || ""}
                onChange={(e) =>
                  handleUpdatePageSeo("metaTitle", e.target.value)
                }
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Page Meta Description
              </label>
              <textarea
                rows={3}
                value={activePage.seo?.metaDescription || ""}
                onChange={(e) =>
                  handleUpdatePageSeo("metaDescription", e.target.value)
                }
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Canonical URL
              </label>
              <input
                type="text"
                value={activePage.seo?.canonicalUrl || ""}
                onChange={(e) =>
                  handleUpdatePageSeo("canonicalUrl", e.target.value)
                }
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-slate-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSeoPage
