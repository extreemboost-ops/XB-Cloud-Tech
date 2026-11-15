import React, { useState, useEffect } from "react"
import { adminCmsStore } from "../../services/adminCmsStore"
import { useAdminAuth } from "../../context/AdminAuthContext"
import { PublishVersion } from "../../types/adminCms"
import { History, RotateCcw, CheckCircle2 } from "lucide-react"

export const AdminVersionsPage: React.FC = () => {
  const { user } = useAdminAuth()
  const [versions, setVersions] = useState<PublishVersion[]>(
    adminCmsStore.getVersions(),
  )
  const [feedback, setFeedback] = useState<string | null>(null)
  const [filterType, setFilterType] = useState<string>("all")

  useEffect(() => {
    return adminCmsStore.subscribe(() => {
      setVersions(adminCmsStore.getVersions())
    })
  }, [])

  const filtered = versions.filter(
    (v) => filterType === "all" || v.entityType === filterType,
  )

  const handleRollback = (ver: PublishVersion) => {
    if (!user) return
    if (
      confirm(
        `Are you sure you want to rollback "${ver.entityTitle}" to Version ${ver.versionNumber} (created on ${new Date(
          ver.createdAt,
        ).toLocaleDateString()})? This will create a fresh release restoring the snapshot.`,
      )
    ) {
      adminCmsStore.rollbackVersion(ver.id, user)
      setFeedback(
        `Successfully rolled back "${ver.entityTitle}" to v${ver.versionNumber}`,
      )
      setTimeout(() => setFeedback(null), 3500)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Publishing & Rollback Center
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Browse published release snapshots across pages, ERP products,
            navigation, and tokens. Restore prior versions safely.
          </p>
        </div>

        {feedback && (
          <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {feedback}
          </span>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {[
          "all",
          "page",
          "product",
          "landing_page",
          "design_tokens",
          "navigation",
          "footer",
        ].map((t) => (
          <button
            key={t}
            onClick={() => setFilterType(t)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize whitespace-nowrap transition-colors ${
              filterType === t
                ? "bg-slate-900 text-white"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {t.replace("_", " ")}
          </button>
        ))}
      </div>

      {/* Versions List */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-16 text-center text-slate-400 text-xs">
            <History className="w-10 h-10 mx-auto mb-2 opacity-30" />
            No version snapshots recorded yet. Versions are created
            automatically when you publish a page, product, or design token
            change.
          </div>
        ) : (
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/75 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                <th className="py-3.5 px-6">Entity & Version</th>
                <th className="py-3.5 px-4">Change Summary</th>
                <th className="py-3.5 px-4">Published By</th>
                <th className="py-3.5 px-4">Snapshot Timestamp</th>
                <th className="py-3.5 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((ver) => (
                <tr
                  key={ver.id}
                  className="hover:bg-slate-50/50 transition-colors"
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 font-bold font-mono text-xs flex items-center justify-center">
                        v{ver.versionNumber}
                      </span>
                      <div>
                        <span className="font-bold text-slate-900 block text-xs">
                          {ver.entityTitle}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono capitalize">
                          {ver.entityType.replace("_", " ")}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="py-4 px-4 text-slate-700 font-medium max-w-sm">
                    {ver.changeSummary}
                  </td>

                  <td className="py-4 px-4 text-slate-600">{ver.createdBy}</td>

                  <td className="py-4 px-4 text-slate-500 font-mono text-[11px]">
                    {new Date(ver.createdAt).toLocaleString()}
                  </td>

                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => handleRollback(ver)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 rounded-lg text-xs font-semibold text-slate-700 transition-colors"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Rollback to this
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default AdminVersionsPage
