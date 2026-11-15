import React, { useState, useEffect } from "react"
import { adminCmsStore } from "../../services/adminCmsStore"
import { useAdminAuth } from "../../context/AdminAuthContext"
import { DesignTokens } from "../../types/adminCms"
import {
  Palette,
  CheckCircle2,
  RotateCcw,
  Save,
  Sparkles,
  Layout,
} from "lucide-react"

export const DesignSystemEditorPage: React.FC = () => {
  const { user } = useAdminAuth()
  const [tokens, setTokens] = useState<DesignTokens>(
    adminCmsStore.getDesignTokens(),
  )
  const [feedback, setFeedback] = useState<string | null>(null)

  useEffect(() => {
    return adminCmsStore.subscribe(() => {
      setTokens(adminCmsStore.getDesignTokens())
    })
  }, [])

  const handleSave = () => {
    if (!user) return
    adminCmsStore.updateDesignTokens(tokens, user)
    setFeedback("Design tokens updated and published to design system!")
    setTimeout(() => setFeedback(null), 3000)
  }

  const handleResetDefaults = () => {
    if (!user) return
    if (
      confirm("Reset design tokens to default XB Cloud Tech corporate palette?")
    ) {
      const defaultTokens: DesignTokens = {
        primaryColor: "#0B5FFF",
        primaryHoverColor: "#0848CC",
        accentColor: "#00D4FF",
        darkNavyColor: "#0A0F1E",
        surfaceColor: "#FFFFFF",
        surfaceSecondaryColor: "#F8FAFC",
        textColor: "#0F172A",
        textMutedColor: "#64748B",
        borderRadius: "large",
        fontHeading: "Inter, system-ui, sans-serif",
        fontBody: "Inter, system-ui, sans-serif",
        headerSticky: true,
        enableSmoothScroll: true,
      }
      setTokens(defaultTokens)
      adminCmsStore.updateDesignTokens(defaultTokens, user)
      setFeedback("Tokens restored to default specifications")
      setTimeout(() => setFeedback(null), 3000)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Design System & Tokens
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Control the visual branding, color tokens, typography scales, and
            component radii across all pages.
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
            onClick={handleResetDefaults}
            className="inline-flex items-center gap-1.5 px-3 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Defaults
          </button>
          <button
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/20 transition-all"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Token Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Brand Palette */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-5">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Palette className="w-4 h-4 text-blue-600" />
              <h2 className="text-sm font-bold text-slate-900">
                Brand Color Palette
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">
                  Primary Blue (Core Brand)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={tokens.primaryColor}
                    onChange={(e) =>
                      setTokens({ ...tokens, primaryColor: e.target.value })
                    }
                    className="w-10 h-10 rounded-xl border border-slate-200 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={tokens.primaryColor}
                    onChange={(e) =>
                      setTokens({ ...tokens, primaryColor: e.target.value })
                    }
                    className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-slate-800 uppercase"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">
                  Primary Hover / Darker
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={tokens.primaryHoverColor}
                    onChange={(e) =>
                      setTokens({
                        ...tokens,
                        primaryHoverColor: e.target.value,
                      })
                    }
                    className="w-10 h-10 rounded-xl border border-slate-200 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={tokens.primaryHoverColor}
                    onChange={(e) =>
                      setTokens({
                        ...tokens,
                        primaryHoverColor: e.target.value,
                      })
                    }
                    className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-slate-800 uppercase"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">
                  Accent Cyan
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={tokens.accentColor}
                    onChange={(e) =>
                      setTokens({ ...tokens, accentColor: e.target.value })
                    }
                    className="w-10 h-10 rounded-xl border border-slate-200 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={tokens.accentColor}
                    onChange={(e) =>
                      setTokens({ ...tokens, accentColor: e.target.value })
                    }
                    className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-slate-800 uppercase"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">
                  Dark Navy (Contrast & Shell)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={tokens.darkNavyColor}
                    onChange={(e) =>
                      setTokens({ ...tokens, darkNavyColor: e.target.value })
                    }
                    className="w-10 h-10 rounded-xl border border-slate-200 cursor-pointer"
                  />
                  <input
                    type="text"
                    value={tokens.darkNavyColor}
                    onChange={(e) =>
                      setTokens({ ...tokens, darkNavyColor: e.target.value })
                    }
                    className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono text-slate-800 uppercase"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Component Geometries & Radii */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-5">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Layout className="w-4 h-4 text-purple-600" />
              <h2 className="text-sm font-bold text-slate-900">
                Component Radius & Geometry
              </h2>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-2">
                  Border Radius Preset
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {(["none", "small", "medium", "large", "full"] as const).map(
                    (r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() =>
                          setTokens({ ...tokens, borderRadius: r })
                        }
                        className={`p-3 rounded-xl border text-center font-bold capitalize transition-all ${
                          tokens.borderRadius === r
                            ? "border-blue-600 bg-blue-50 text-blue-700 shadow-2xs"
                            : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {r}
                      </button>
                    ),
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <label className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer">
                  <input
                    type="checkbox"
                    checked={tokens.headerSticky}
                    onChange={(e) =>
                      setTokens({ ...tokens, headerSticky: e.target.checked })
                    }
                    className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
                  />
                  <div>
                    <span className="font-bold text-slate-900 block">
                      Sticky Header
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Keep header visible while scrolling
                    </span>
                  </div>
                </label>

                <label className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl cursor-pointer">
                  <input
                    type="checkbox"
                    checked={tokens.enableSmoothScroll}
                    onChange={(e) =>
                      setTokens({
                        ...tokens,
                        enableSmoothScroll: e.target.checked,
                      })
                    }
                    className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
                  />
                  <div>
                    <span className="font-bold text-slate-900 block">
                      Smooth Scrolling
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Fluid section anchor navigation
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Interactive Preview */}
        <div className="lg:col-span-5">
          <div className="sticky top-20 bg-white rounded-2xl border border-slate-200 p-6 shadow-md space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <h3 className="text-sm font-bold text-slate-900">
                  Live Component Simulation
                </h3>
              </div>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                Preview
              </span>
            </div>

            <div className="space-y-4">
              {/* Sample Card */}
              <div
                className="p-5 border border-slate-200 shadow-sm transition-all"
                style={{
                  borderRadius:
                    tokens.borderRadius === "none"
                      ? "0px"
                      : tokens.borderRadius === "small"
                        ? "6px"
                        : tokens.borderRadius === "medium"
                          ? "12px"
                          : tokens.borderRadius === "large"
                            ? "20px"
                            : "9999px",
                  backgroundColor: tokens.surfaceColor,
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider"
                    style={{
                      backgroundColor: `${tokens.accentColor}25`,
                      color: tokens.primaryColor,
                      borderRadius:
                        tokens.borderRadius === "full" ? "9999px" : "6px",
                    }}
                  >
                    Enterprise Product
                  </span>
                  <span className="text-xs text-slate-400">Offline-First</span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1">
                  Storex POS Platform
                </h4>
                <p className="text-xs text-slate-500 mb-4">
                  Multi-branch retail inventory with sub-second barcode scans.
                </p>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    style={{
                      backgroundColor: tokens.primaryColor,
                      borderRadius:
                        tokens.borderRadius === "none"
                          ? "0px"
                          : tokens.borderRadius === "small"
                            ? "6px"
                            : tokens.borderRadius === "medium"
                              ? "10px"
                              : tokens.borderRadius === "large"
                                ? "14px"
                                : "9999px",
                    }}
                    className="px-4 py-2 text-white font-bold text-xs shadow-md transition-all hover:opacity-90"
                  >
                    Explore Features
                  </button>
                  <button
                    type="button"
                    style={{
                      borderColor: tokens.primaryColor,
                      color: tokens.primaryColor,
                      borderRadius:
                        tokens.borderRadius === "none"
                          ? "0px"
                          : tokens.borderRadius === "small"
                            ? "6px"
                            : tokens.borderRadius === "medium"
                              ? "10px"
                              : tokens.borderRadius === "large"
                                ? "14px"
                                : "9999px",
                    }}
                    className="px-3.5 py-2 border font-bold text-xs hover:bg-slate-50 transition-colors"
                  >
                    Book Demo
                  </button>
                </div>
              </div>

              {/* Sample Dark Contrast Banner */}
              <div
                className="p-5 text-white shadow-lg space-y-2"
                style={{
                  backgroundColor: tokens.darkNavyColor,
                  borderRadius:
                    tokens.borderRadius === "none"
                      ? "0px"
                      : tokens.borderRadius === "small"
                        ? "6px"
                        : tokens.borderRadius === "medium"
                          ? "12px"
                          : tokens.borderRadius === "large"
                            ? "20px"
                            : "32px",
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full animate-ping"
                    style={{ backgroundColor: tokens.accentColor }}
                  />
                  <span
                    className="text-[10px] font-bold uppercase tracking-wider"
                    style={{ color: tokens.accentColor }}
                  >
                    Dark Theme Shell
                  </span>
                </div>
                <h5 className="font-black text-sm">
                  Real-Time Operational Resilience
                </h5>
                <p className="text-slate-400 text-xs">
                  Zero data loss architecture guaranteed across all active
                  lanes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DesignSystemEditorPage
