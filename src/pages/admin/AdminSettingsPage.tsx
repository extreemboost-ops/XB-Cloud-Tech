import React, { useState, useEffect } from "react"
import { adminCmsStore } from "../../services/adminCmsStore"
import { useAdminAuth } from "../../context/AdminAuthContext"
import { WebsiteSettings } from "../../types/adminCms"
import {
  Settings,
  Save,
  CheckCircle2,
  Database,
  Download,
  AlertTriangle,
  RotateCcw,
} from "lucide-react"

export const AdminSettingsPage: React.FC = () => {
  const { user } = useAdminAuth()
  const [settings, setSettings] = useState<WebsiteSettings>(
    adminCmsStore.getSettings(),
  )
  const [feedback, setFeedback] = useState<string | null>(null)

  useEffect(() => {
    return adminCmsStore.subscribe(() => {
      setSettings(adminCmsStore.getSettings())
    })
  }, [])

  const handleSave = () => {
    if (!user) return
    adminCmsStore.updateSettings(settings, user)
    setFeedback("Website configuration settings updated!")
    setTimeout(() => setFeedback(null), 3000)
  }

  const handleExportBackup = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(adminCmsStore.exportStateJson())
    const downloadAnchor = document.createElement("a")
    downloadAnchor.setAttribute("href", dataStr)
    downloadAnchor.setAttribute(
      "download",
      `xb_cms_master_backup_${new Date().toISOString().slice(0, 10)}.json`,
    )
    document.body.appendChild(downloadAnchor)
    downloadAnchor.click()
    downloadAnchor.remove()
  }

  const handleFactoryReset = () => {
    if (!user) return
    if (
      confirm(
        "WARNING: This will reset all pages, products, landing pages, and tokens back to the initial codebase seeds. Are you sure?",
      )
    ) {
      adminCmsStore.resetToFactoryDefaults(user)
      setFeedback("System reset to clean factory defaults")
      setTimeout(() => setFeedback(null), 3500)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Website Settings & Integrations
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Configure verified contact channels, analytics tracking IDs,
            corporate metadata, and database backups.
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
            onClick={handleSave}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-500/20"
          >
            <Save className="w-4 h-4" />
            Save Settings
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Organization & Contact Info */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
            <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Settings className="w-4 h-4 text-blue-600" />
              Corporate Identity & Verified Contact Channels
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Company Legal Name
                </label>
                <input
                  type="text"
                  value={settings.companyName}
                  onChange={(e) =>
                    setSettings({ ...settings, companyName: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Tagline
                </label>
                <input
                  type="text"
                  value={settings.tagline}
                  onChange={(e) =>
                    setSettings({ ...settings, tagline: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  General Inquiries Email
                </label>
                <input
                  type="email"
                  value={settings.salesEmail}
                  onChange={(e) =>
                    setSettings({ ...settings, salesEmail: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Technical Support Email
                </label>
                <input
                  type="email"
                  value={settings.supportEmail}
                  onChange={(e) =>
                    setSettings({ ...settings, supportEmail: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Direct Phone
                </label>
                <input
                  type="text"
                  value={settings.phone}
                  onChange={(e) =>
                    setSettings({ ...settings, phone: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  WhatsApp Routing Number
                </label>
                <input
                  type="text"
                  value={settings.whatsappNumber}
                  onChange={(e) =>
                    setSettings({ ...settings, whatsappNumber: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-semibold text-slate-700 mb-1">
                  Physical Head Office Address
                </label>
                <input
                  type="text"
                  value={settings.address}
                  onChange={(e) =>
                    setSettings({ ...settings, address: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Third-Party Analytics */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
            <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
              Analytics & Conversion Tracking
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Google Analytics Measurement ID
                </label>
                <input
                  type="text"
                  placeholder="G-XXXXXXXXXX"
                  value={settings.googleAnalyticsId || ""}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      googleAnalyticsId: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Meta Pixel ID (Optional)
                </label>
                <input
                  type="text"
                  placeholder="123456789012345"
                  value={settings.metaPixelId || ""}
                  onChange={(e) =>
                    setSettings({ ...settings, metaPixelId: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Database Backup & Maintenance */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
            <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Database className="w-4 h-4 text-purple-600" />
              CMS Database Backup & Reset
            </h2>

            <p className="text-xs text-slate-500">
              Export the entire state of pages, products, landing pages, design
              tokens, navigation, media records, and audit logs into a portable
              JSON backup.
            </p>

            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleExportBackup}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold shadow-xs"
              >
                <Download className="w-4 h-4" />
                Export Complete Database Backup
              </button>

              <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 space-y-2">
                <div className="flex items-center gap-1.5 text-amber-800 text-xs font-bold">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Restore Factory Defaults</span>
                </div>
                <p className="text-[11px] text-amber-700 leading-relaxed">
                  Resetting replaces browser CMS storage with initial repository
                  seed state.
                </p>
                <button
                  type="button"
                  onClick={handleFactoryReset}
                  className="w-full mt-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white border border-amber-300 text-amber-800 hover:bg-amber-100/50 rounded-lg text-xs font-bold transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset to Factory Seed State
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminSettingsPage
