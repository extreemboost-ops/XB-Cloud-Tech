import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { adminCmsStore } from "../../services/adminCmsStore"
import { useAdminAuth } from "../../context/AdminAuthContext"
import { CMSPage, PageSection, SectionType } from "../../types/adminCms"
import {
  ArrowLeft,
  Save,
  Send,
  Monitor,
  Tablet,
  Smartphone,
  Trash2,
  Copy,
  ChevronUp,
  ChevronDown,
  Eye,
  EyeOff,
  Settings2,
  Layers,
  Sparkles,
  ExternalLink,
  CheckCircle2,
} from "lucide-react"

export const VisualPageBuilderPage: React.FC = () => {
  const { pageId } = useParams<{ pageId: string }>()
  const { user } = useAdminAuth()

  const [page, setPage] = useState<CMSPage | undefined>(
    adminCmsStore.getPageById(pageId || ""),
  )
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(
    null,
  )
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">(
    "desktop",
  )
  const [activeTab, setActiveTab] = useState<"sections" | "seo">("sections")
  const [inspectorTab, setInspectorTab] = useState<"content" | "styles">(
    "content",
  )
  const [saveFeedback, setSaveFeedback] = useState<string | null>(null)

  useEffect(() => {
    if (pageId) {
      const p = adminCmsStore.getPageById(pageId)
      setPage(p ? { ...p } : undefined)
      if (p && p.sections.length > 0 && !selectedSectionId) {
        setSelectedSectionId(p.sections[0].id)
      }
    }
  }, [pageId])

  if (!page) {
    return (
      <div className="p-12 text-center">
        <h2 className="text-xl font-bold text-slate-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-xs text-slate-500 mb-4">
          The requested page ID could not be loaded.
        </p>
        <Link
          to="/admin/pages"
          className="text-xs font-semibold text-blue-600 hover:underline"
        >
          ← Back to Website Pages
        </Link>
      </div>
    )
  }

  const selectedSection = page.sections.find((s) => s.id === selectedSectionId)

  const handleSaveDraft = () => {
    if (!user) return
    adminCmsStore.updatePage(
      page.id,
      { sections: page.sections, seo: page.seo },
      user,
    )
    setSaveFeedback("Draft saved successfully")
    setTimeout(() => setSaveFeedback(null), 3000)
  }

  const handlePublish = () => {
    if (!user) return
    const summary = prompt(
      "Enter a brief release note for this published version:",
      `Published version ${page.version + 1}`,
    )
    if (summary !== null) {
      adminCmsStore.updatePage(
        page.id,
        { sections: page.sections, seo: page.seo },
        user,
      )
      adminCmsStore.publishPage(page.id, summary, user)
      setPage(adminCmsStore.getPageById(page.id))
      setSaveFeedback("Page published live to public site!")
      setTimeout(() => setSaveFeedback(null), 4000)
    }
  }

  // Section manipulation helpers
  const handleAddSection = (
    type: SectionType,
    title: string,
    defaultContent: Record<string, any>,
  ) => {
    const newSection: PageSection = {
      id: `sec_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
      type,
      title,
      order: page.sections.length + 1,
      visible: true,
      content: defaultContent,
      styles: {
        paddingY: "large",
        containerWidth: "default",
        bgColor: "#FFFFFF",
      },
    }

    const updated = {
      ...page,
      sections: [...page.sections, newSection],
    }
    setPage(updated)
    setSelectedSectionId(newSection.id)
  }

  const handleMoveSection = (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1
    if (targetIndex < 0 || targetIndex >= page.sections.length) return

    const sections = [...page.sections]
    const temp = sections[index]
    sections[index] = sections[targetIndex]
    sections[targetIndex] = temp

    // reindex order
    sections.forEach((s, idx) => {
      s.order = idx + 1
    })

    setPage({ ...page, sections })
  }

  const handleDuplicateSection = (sec: PageSection) => {
    const duplicate: PageSection = {
      ...JSON.parse(JSON.stringify(sec)),
      id: `sec_${Date.now()}`,
      title: `${sec.title} (Copy)`,
      order: page.sections.length + 1,
    }
    setPage({ ...page, sections: [...page.sections, duplicate] })
    setSelectedSectionId(duplicate.id)
  }

  const handleToggleVisibility = (secId: string) => {
    const sections = page.sections.map((s) =>
      s.id === secId ? { ...s, visible: !s.visible } : s,
    )
    setPage({ ...page, sections })
  }

  const handleDeleteSection = (secId: string) => {
    const sections = page.sections.filter((s) => s.id !== secId)
    setPage({ ...page, sections })
    if (selectedSectionId === secId) {
      setSelectedSectionId(sections.length > 0 ? sections[0].id : null)
    }
  }

  const handleUpdateSectionContent = (key: string, value: any) => {
    if (!selectedSectionId) return
    const sections = page.sections.map((s) => {
      if (s.id === selectedSectionId) {
        return {
          ...s,
          content: {
            ...s.content,
            [key]: value,
          },
        }
      }
      return s
    })
    setPage({ ...page, sections })
  }

  const handleUpdateSectionStyle = (key: string, value: any) => {
    if (!selectedSectionId) return
    const sections = page.sections.map((s) => {
      if (s.id === selectedSectionId) {
        return {
          ...s,
          styles: {
            ...s.styles,
            [key]: value,
          },
        }
      }
      return s
    })
    setPage({ ...page, sections })
  }

  return (
    <div className="-m-4 sm:-m-6 lg:-m-8 flex flex-col h-[calc(100vh-4rem)] bg-slate-100 overflow-hidden">
      {/* Top Builder Toolbar */}
      <div className="h-14 bg-white border-b border-slate-200 px-4 flex items-center justify-between z-20 shrink-0">
        <div className="flex items-center gap-3">
          <Link
            to="/admin/pages"
            className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
            title="Return to Pages list"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="h-5 w-px bg-slate-200" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900 text-xs sm:text-sm">
                {page.title}
              </span>
              <span
                className={`text-[9px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
                  page.status === "published"
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-amber-50 text-amber-700 border border-amber-200"
                }`}
              >
                {page.status}
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">
              {page.route}
            </span>
          </div>
        </div>

        {/* Viewport Toggles */}
        <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200">
          <button
            onClick={() => setViewport("desktop")}
            className={`p-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewport === "desktop"
                ? "bg-white text-blue-600 shadow-2xs"
                : "text-slate-500 hover:text-slate-800"
            }`}
            title="Desktop 100% canvas"
          >
            <Monitor className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setViewport("tablet")}
            className={`p-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewport === "tablet"
                ? "bg-white text-blue-600 shadow-2xs"
                : "text-slate-500 hover:text-slate-800"
            }`}
            title="Tablet 768px canvas"
          >
            <Tablet className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setViewport("mobile")}
            className={`p-1.5 rounded-lg text-xs font-semibold transition-all ${
              viewport === "mobile"
                ? "bg-white text-blue-600 shadow-2xs"
                : "text-slate-500 hover:text-slate-800"
            }`}
            title="Mobile 375px canvas"
          >
            <Smartphone className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {saveFeedback && (
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {saveFeedback}
            </span>
          )}

          <a
            href={page.route}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50"
          >
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            Live Preview
          </a>

          <button
            onClick={handleSaveDraft}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold transition-colors"
          >
            <Save className="w-3.5 h-3.5" />
            Save Draft
          </button>

          <button
            onClick={handlePublish}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-xs shadow-blue-500/20 transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            Publish
          </button>
        </div>
      </div>

      {/* 3-Panel Builder Body */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT PANEL: Section & Component Library */}
        <div className="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0">
          <div className="p-3 border-b border-slate-200 flex items-center gap-2">
            <button
              onClick={() => setActiveTab("sections")}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                activeTab === "sections"
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              Sections ({page.sections.length})
            </button>
            <button
              onClick={() => setActiveTab("seo")}
              className={`flex-1 py-1.5 text-xs font-bold rounded-lg transition-colors ${
                activeTab === "seo"
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-500 hover:bg-slate-50"
              }`}
            >
              Page SEO
            </button>
          </div>

          {activeTab === "sections" ? (
            <div className="flex-1 overflow-y-auto p-3 space-y-4 text-xs">
              {/* Active Section Tree */}
              <div>
                <p className="font-bold text-[10px] text-slate-400 uppercase tracking-wider mb-2">
                  Page Outline
                </p>
                <div className="space-y-1">
                  {page.sections.map((sec, idx) => (
                    <div
                      key={sec.id}
                      onClick={() => setSelectedSectionId(sec.id)}
                      className={`group flex items-center justify-between p-2 rounded-xl border transition-all cursor-pointer ${
                        selectedSectionId === sec.id
                          ? "bg-blue-50/70 border-blue-300 text-blue-900 font-semibold shadow-2xs"
                          : "bg-white border-slate-200 hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <span className="text-[10px] font-mono text-slate-400">
                          #{idx + 1}
                        </span>
                        <span className="truncate text-xs">{sec.title}</span>
                      </div>

                      <div className="flex items-center gap-0.5 opacity-80 group-hover:opacity-100">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleMoveSection(idx, "up")
                          }}
                          disabled={idx === 0}
                          className="p-1 hover:text-blue-600 disabled:opacity-20"
                        >
                          <ChevronUp className="w-3 h-3" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleMoveSection(idx, "down")
                          }}
                          disabled={idx === page.sections.length - 1}
                          className="p-1 hover:text-blue-600 disabled:opacity-20"
                        >
                          <ChevronDown className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add New Section Palette */}
              <div className="pt-2 border-t border-slate-100">
                <p className="font-bold text-[10px] text-slate-400 uppercase tracking-wider mb-2">
                  Add New Section
                </p>
                <div className="grid grid-cols-1 gap-1.5">
                  <button
                    onClick={() =>
                      handleAddSection("hero", "Split Hero Section", {
                        badge: "ENTERPRISE ERP",
                        headline:
                          "Accelerate Operations With Modern Cloud Architecture",
                        subheadline:
                          "Engineered for resilience, offline operations, and sub-second checkout throughput.",
                        primaryCta: "Request Guided Demo",
                        primaryLink: "/contact",
                      })
                    }
                    className="p-2 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-xl text-left flex items-center justify-between text-slate-700 hover:text-blue-700 transition-colors"
                  >
                    <span>+ Hero Banner</span>
                    <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                  </button>

                  <button
                    onClick={() =>
                      handleAddSection("feature_grid", "Feature Grid Section", {
                        headline: "Mission-Critical Engineering Pillars",
                        subheadline:
                          "Architected to deliver uncompromising operational reliability.",
                        features: [
                          {
                            title: "Offline-First Replication",
                            desc: "Continuous checkout without internet interruptions.",
                          },
                          {
                            title: "Sub-Second Barcode Processing",
                            desc: "Scan and process transactions in under 200ms.",
                          },
                          {
                            title: "Multi-Branch Master Inventory",
                            desc: "Unified SKU tracking across all physical outlets.",
                          },
                        ],
                      })
                    }
                    className="p-2 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-xl text-left flex items-center justify-between text-slate-700 hover:text-blue-700 transition-colors"
                  >
                    <span>+ Feature Grid</span>
                    <Layers className="w-3.5 h-3.5 text-indigo-500" />
                  </button>

                  <button
                    onClick={() =>
                      handleAddSection(
                        "stats_counter",
                        "Statistics & Proof Points",
                        {
                          stats: [
                            {
                              value: "₨ 5.2B+",
                              label: "Annual Processed Volume",
                            },
                            { value: "99.98%", label: "Daily Pos Lane Uptime" },
                            {
                              value: "1,450+",
                              label: "Retail & Campus Terminals",
                            },
                          ],
                        },
                      )
                    }
                    className="p-2 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-xl text-left flex items-center justify-between text-slate-700 hover:text-blue-700 transition-colors"
                  >
                    <span>+ Metrics & Stats</span>
                    <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                  </button>

                  <button
                    onClick={() =>
                      handleAddSection("cta_banner", "Conversion CTA Banner", {
                        headline: "Ready to Transform Your Core Operations?",
                        subheadline:
                          "Speak directly with our senior ERP deployment architects.",
                        buttonText: "Schedule Architecture Scoping Call",
                        buttonLink: "/contact",
                      })
                    }
                    className="p-2 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-200 rounded-xl text-left flex items-center justify-between text-slate-700 hover:text-blue-700 transition-colors"
                  >
                    <span>+ CTA Banner</span>
                    <Send className="w-3.5 h-3.5 text-cyan-500" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Tab: Page SEO */
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Meta Title
                </label>
                <input
                  type="text"
                  value={page.seo?.metaTitle || ""}
                  onChange={(e) =>
                    setPage({
                      ...page,
                      seo: { ...page.seo, metaTitle: e.target.value },
                    })
                  }
                  className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Meta Description
                </label>
                <textarea
                  rows={4}
                  value={page.seo?.metaDescription || ""}
                  onChange={(e) =>
                    setPage({
                      ...page,
                      seo: { ...page.seo, metaDescription: e.target.value },
                    })
                  }
                  className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Canonical URL
                </label>
                <input
                  type="text"
                  value={page.seo?.canonicalUrl || ""}
                  onChange={(e) =>
                    setPage({
                      ...page,
                      seo: { ...page.seo, canonicalUrl: e.target.value },
                    })
                  }
                  className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono"
                />
              </div>
            </div>
          )}
        </div>

        {/* CENTER PANEL: Live Layout Canvas */}
        <div className="flex-1 overflow-y-auto p-6 flex justify-center items-start">
          <div
            className={`transition-all duration-300 bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden min-h-[500px] ${
              viewport === "desktop"
                ? "w-full max-w-5xl"
                : viewport === "tablet"
                  ? "w-[768px]"
                  : "w-[375px]"
            }`}
          >
            {page.sections.length === 0 ? (
              <div className="p-16 text-center text-slate-400">
                <Layers className="w-12 h-12 mx-auto mb-3 opacity-30" />
                <p className="font-bold text-slate-700">
                  No sections added yet
                </p>
                <p className="text-xs mt-1">
                  Use the left panel to add a hero, feature grid, or conversion
                  banner.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100">
                {page.sections.map((sec) => (
                  <div
                    key={sec.id}
                    onClick={() => setSelectedSectionId(sec.id)}
                    className={`relative group transition-all cursor-pointer ${
                      selectedSectionId === sec.id
                        ? "ring-2 ring-blue-600 ring-offset-2"
                        : "hover:ring-1 hover:ring-blue-300"
                    } ${!sec.visible ? "opacity-40 grayscale" : ""}`}
                    style={{
                      backgroundColor: sec.styles?.bgColor || "#FFFFFF",
                      paddingTop:
                        sec.styles?.paddingY === "large"
                          ? "4rem"
                          : sec.styles?.paddingY === "medium"
                            ? "2.5rem"
                            : "1.5rem",
                      paddingBottom:
                        sec.styles?.paddingY === "large"
                          ? "4rem"
                          : sec.styles?.paddingY === "medium"
                            ? "2.5rem"
                            : "1.5rem",
                    }}
                  >
                    {/* Floating Section Actions */}
                    <div className="absolute top-2 right-2 hidden group-hover:flex items-center gap-1 bg-white/90 backdrop-blur-xs p-1 rounded-lg border border-slate-200 shadow-xs z-10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleToggleVisibility(sec.id)
                        }}
                        className="p-1 text-slate-500 hover:text-slate-800"
                        title="Toggle Section Visibility"
                      >
                        {sec.visible ? (
                          <Eye className="w-3.5 h-3.5" />
                        ) : (
                          <EyeOff className="w-3.5 h-3.5" />
                        )}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDuplicateSection(sec)
                        }}
                        className="p-1 text-slate-500 hover:text-slate-800"
                        title="Duplicate Section"
                      >
                        <Copy className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          handleDeleteSection(sec.id)
                        }}
                        className="p-1 text-red-500 hover:text-red-700"
                        title="Delete Section"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Section Content Rendering */}
                    <div className="max-w-4xl mx-auto px-6">
                      {sec.type === "hero" && (
                        <div className="text-center space-y-4">
                          {sec.content.badge && (
                            <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 font-bold text-[11px] rounded-full uppercase tracking-wider border border-blue-200">
                              {sec.content.badge}
                            </span>
                          )}
                          <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
                            {sec.content.headline}
                          </h1>
                          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
                            {sec.content.subheadline}
                          </p>
                          {sec.content.primaryCta && (
                            <div className="pt-2 flex justify-center gap-3">
                              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20">
                                {sec.content.primaryCta}
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      {sec.type === "feature_grid" && (
                        <div className="space-y-6">
                          <div className="text-center max-w-xl mx-auto">
                            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                              {sec.content.headline || sec.title}
                            </h2>
                            {sec.content.subheadline && (
                              <p className="text-xs text-slate-500 mt-1">
                                {sec.content.subheadline}
                              </p>
                            )}
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {(sec.content.features || []).map(
                              (f: any, fIdx: number) => (
                                <div
                                  key={fIdx}
                                  className="p-4 bg-slate-50 rounded-xl border border-slate-200/80"
                                >
                                  <h3 className="font-bold text-slate-900 text-sm">
                                    {f.title}
                                  </h3>
                                  <p className="text-xs text-slate-500 mt-1">
                                    {f.desc}
                                  </p>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      )}

                      {sec.type === "stats_counter" && (
                        <div className="grid grid-cols-3 gap-6 text-center">
                          {(sec.content.stats || []).map(
                            (st: any, sIdx: number) => (
                              <div
                                key={sIdx}
                                className="p-4 bg-slate-50 rounded-2xl border border-slate-100"
                              >
                                <div className="text-2xl font-black text-blue-600">
                                  {st.value}
                                </div>
                                <div className="text-xs font-semibold text-slate-600 mt-1">
                                  {st.label}
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      )}

                      {sec.type === "cta_banner" && (
                        <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-2xl p-8 text-center space-y-3">
                          <h2 className="text-xl sm:text-2xl font-bold">
                            {sec.content.headline}
                          </h2>
                          <p className="text-slate-300 text-xs max-w-xl mx-auto">
                            {sec.content.subheadline}
                          </p>
                          <div className="pt-2">
                            <span className="inline-block px-5 py-2.5 bg-blue-600 text-white text-xs font-bold rounded-xl shadow-lg">
                              {sec.content.buttonText}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT PANEL: Properties & Style Inspector */}
        <div className="w-80 bg-white border-l border-slate-200 flex flex-col shrink-0">
          <div className="p-3 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Settings2 className="w-4 h-4 text-blue-600" />
              <span className="font-bold text-xs text-slate-900">
                Section Properties
              </span>
            </div>
            {selectedSection && (
              <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-mono">
                {selectedSection.type}
              </span>
            )}
          </div>

          {selectedSection ? (
            <div className="flex-1 overflow-y-auto p-4 space-y-5 text-xs">
              <div className="flex items-center bg-slate-100 p-1 rounded-xl">
                <button
                  onClick={() => setInspectorTab("content")}
                  className={`flex-1 py-1 rounded-lg font-bold text-xs transition-colors ${
                    inspectorTab === "content"
                      ? "bg-white text-blue-600 shadow-2xs"
                      : "text-slate-500"
                  }`}
                >
                  Content
                </button>
                <button
                  onClick={() => setInspectorTab("styles")}
                  className={`flex-1 py-1 rounded-lg font-bold text-xs transition-colors ${
                    inspectorTab === "styles"
                      ? "bg-white text-blue-600 shadow-2xs"
                      : "text-slate-500"
                  }`}
                >
                  Styles
                </button>
              </div>

              {inspectorTab === "content" ? (
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Section Label
                    </label>
                    <input
                      type="text"
                      value={selectedSection.title}
                      onChange={(e) => {
                        const sections = page.sections.map((s) =>
                          s.id === selectedSection.id
                            ? { ...s, title: e.target.value }
                            : s,
                        )
                        setPage({ ...page, sections })
                      }}
                      className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                    />
                  </div>

                  {selectedSection.content.badge !== undefined && (
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Badge Text
                      </label>
                      <input
                        type="text"
                        value={selectedSection.content.badge}
                        onChange={(e) =>
                          handleUpdateSectionContent("badge", e.target.value)
                        }
                        className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                      />
                    </div>
                  )}

                  {selectedSection.content.headline !== undefined && (
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Main Headline
                      </label>
                      <textarea
                        rows={2}
                        value={selectedSection.content.headline}
                        onChange={(e) =>
                          handleUpdateSectionContent("headline", e.target.value)
                        }
                        className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                      />
                    </div>
                  )}

                  {selectedSection.content.subheadline !== undefined && (
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Subheadline / Copy
                      </label>
                      <textarea
                        rows={3}
                        value={selectedSection.content.subheadline}
                        onChange={(e) =>
                          handleUpdateSectionContent(
                            "subheadline",
                            e.target.value,
                          )
                        }
                        className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                      />
                    </div>
                  )}

                  {selectedSection.content.primaryCta !== undefined && (
                    <div>
                      <label className="block font-semibold text-slate-700 mb-1">
                        Primary CTA Button
                      </label>
                      <input
                        type="text"
                        value={selectedSection.content.primaryCta}
                        onChange={(e) =>
                          handleUpdateSectionContent(
                            "primaryCta",
                            e.target.value,
                          )
                        }
                        className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs mb-1.5"
                      />
                      <input
                        type="text"
                        value={selectedSection.content.primaryLink || ""}
                        placeholder="/contact"
                        onChange={(e) =>
                          handleUpdateSectionContent(
                            "primaryLink",
                            e.target.value,
                          )
                        }
                        className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-600"
                      />
                    </div>
                  )}
                </div>
              ) : (
                /* Tab: Styles */
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Padding Vertical
                    </label>
                    <select
                      value={selectedSection.styles?.paddingY || "medium"}
                      onChange={(e) =>
                        handleUpdateSectionStyle("paddingY", e.target.value)
                      }
                      className="w-full px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                    >
                      <option value="none">None (0px)</option>
                      <option value="small">Small (24px)</option>
                      <option value="medium">Medium (40px)</option>
                      <option value="large">Large (64px)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Background Color
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={selectedSection.styles?.bgColor || "#FFFFFF"}
                        onChange={(e) =>
                          handleUpdateSectionStyle("bgColor", e.target.value)
                        }
                        className="w-8 h-8 rounded-lg border border-slate-200 cursor-pointer"
                      />
                      <input
                        type="text"
                        value={selectedSection.styles?.bgColor || "#FFFFFF"}
                        onChange={(e) =>
                          handleUpdateSectionStyle("bgColor", e.target.value)
                        }
                        className="flex-1 px-2.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="p-8 text-center text-slate-400 text-xs">
              Select a section in the canvas or outline to edit its properties.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default VisualPageBuilderPage
