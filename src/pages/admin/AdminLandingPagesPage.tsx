import React, { useState, useEffect } from "react"
import { adminCmsStore } from "../../services/adminCmsStore"
import { useAdminAuth } from "../../context/AdminAuthContext"
import { CMSLandingPage } from "../../types/adminCms"
import {
  Compass,
  ExternalLink,
  Save,
  CheckCircle2,
  Sparkles,
  MessageCircle,
} from "lucide-react"

export const AdminLandingPagesPage: React.FC = () => {
  const { user } = useAdminAuth()
  const [landingPages, setLandingPages] = useState<CMSLandingPage[]>(
    adminCmsStore.getLandingPages(),
  )
  const [selectedSlug, setSelectedSlug] = useState<string>(
    landingPages[0]?.slug || "storex-retail",
  )
  const [feedback, setFeedback] = useState<string | null>(null)

  useEffect(() => {
    return adminCmsStore.subscribe(() => {
      setLandingPages(adminCmsStore.getLandingPages())
    })
  }, [])

  const activeLp =
    landingPages.find((lp) => lp.slug === selectedSlug) || landingPages[0]

  const handleUpdate = (updates: Partial<CMSLandingPage>) => {
    if (!user || !activeLp) return
    adminCmsStore.updateLandingPage(activeLp.slug, updates, user)
  }

  const handleSavePublish = () => {
    if (!user || !activeLp) return
    adminCmsStore.updateLandingPage(
      activeLp.slug,
      { status: "published" },
      user,
    )
    adminCmsStore.createVersionSnapshot(
      "landing_page",
      activeLp.id,
      activeLp.title,
      "Published landing page funnel updates",
      user.name,
      activeLp,
    )
    setFeedback(`Published updates for ${activeLp.title}!`)
    setTimeout(() => setFeedback(null), 3000)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Campaign Landing Pages
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage distraction-free paid advertising funnels, conversion copy,
            and WhatsApp CTAs for `/lp/*` routes.
          </p>
        </div>

        <div className="flex items-center gap-3">
          {feedback && (
            <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {feedback}
            </span>
          )}
          <a
            href={`/lp/${activeLp.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            View Live Campaign Funnel
          </a>
          <button
            onClick={handleSavePublish}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/20 transition-all"
          >
            <Save className="w-4 h-4" />
            Publish Campaign Changes
          </button>
        </div>
      </div>

      {/* Campaign Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-200">
        {landingPages.map((lp) => (
          <button
            key={lp.slug}
            onClick={() => setSelectedSlug(lp.slug)}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 ${
              selectedSlug === lp.slug
                ? "bg-cyan-600 text-white shadow-sm shadow-cyan-500/20"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>{lp.title}</span>
          </button>
        ))}
      </div>

      {/* Campaign Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
            <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-600" />
              Above-the-Fold Conversion Copy
            </h2>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Campaign Headline
                </label>
                <input
                  type="text"
                  value={activeLp.headline}
                  onChange={(e) => handleUpdate({ headline: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-bold text-sm"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Supporting Subheadline
                </label>
                <textarea
                  rows={3}
                  value={activeLp.subheadline}
                  onChange={(e) =>
                    handleUpdate({ subheadline: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Primary CTA Button Text
                  </label>
                  <input
                    type="text"
                    value={activeLp.primaryCtaText}
                    onChange={(e) =>
                      handleUpdate({ primaryCtaText: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Lead Form Headline
                  </label>
                  <input
                    type="text"
                    value={activeLp.leadFormHeadline}
                    onChange={(e) =>
                      handleUpdate({ leadFormHeadline: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  WhatsApp Conversion Routing
                </label>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    value={activeLp.whatsappNumber || "+923000000000"}
                    onChange={(e) =>
                      handleUpdate({ whatsappNumber: e.target.value })
                    }
                    placeholder="+923000000000"
                    className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
            <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Verified Value Propositions ({activeLp.benefits.length})
            </h2>

            <div className="space-y-2 text-xs">
              {activeLp.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={benefit}
                    onChange={(e) => {
                      const updated = [...activeLp.benefits]
                      updated[idx] = e.target.value
                      handleUpdate({ benefits: updated })
                    }}
                    className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Campaign Proof Points */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
            <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
              Performance Proof Points
            </h2>

            <div className="space-y-3 text-xs">
              {activeLp.proofPoints.map((pt, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2"
                >
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase">
                      Metric Value
                    </label>
                    <input
                      type="text"
                      value={pt.value}
                      onChange={(e) => {
                        const updated = [...activeLp.proofPoints]
                        updated[idx] = {
                          ...updated[idx],
                          value: e.target.value,
                        }
                        handleUpdate({ proofPoints: updated })
                      }}
                      className="w-full px-2.5 py-1 bg-white border border-slate-200 rounded-lg font-bold text-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase">
                      Metric Label
                    </label>
                    <input
                      type="text"
                      value={pt.label}
                      onChange={(e) => {
                        const updated = [...activeLp.proofPoints]
                        updated[idx] = {
                          ...updated[idx],
                          label: e.target.value,
                        }
                        handleUpdate({ proofPoints: updated })
                      }}
                      className="w-full px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-slate-600"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLandingPagesPage
