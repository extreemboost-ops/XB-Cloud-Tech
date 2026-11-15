import React, { useState, useEffect } from "react"
import { adminCmsStore } from "../../services/adminCmsStore"
import { useAdminAuth } from "../../context/AdminAuthContext"
import { GlobalFooter } from "../../types/adminCms"
import { Footprints, Save, CheckCircle2 } from "lucide-react"

export const AdminFooterPage: React.FC = () => {
  const { user } = useAdminAuth()
  const [footer, setFooter] = useState<GlobalFooter>(adminCmsStore.getFooter())
  const [feedback, setFeedback] = useState<string | null>(null)

  useEffect(() => {
    return adminCmsStore.subscribe(() => {
      setFooter(adminCmsStore.getFooter())
    })
  }, [])

  const handleSave = () => {
    if (!user) return
    adminCmsStore.updateFooter(footer, user)
    setFeedback("Footer layout updated!")
    setTimeout(() => setFeedback(null), 3000)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Footer Layout
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Manage 4-column footer directory, corporate descriptions, copyright
            notices, and verified contact points.
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
            Save Footer
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Footer Columns */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-6">
          <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
            <Footprints className="w-4 h-4 text-blue-600" />
            4-Column Footer Directory
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {footer.columns.map((col, cIdx) => (
              <div
                key={col.id}
                className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900">
                    Column #{cIdx + 1}
                  </span>
                  <input
                    type="text"
                    value={col.title}
                    onChange={(e) => {
                      const columns = [...footer.columns]
                      columns[cIdx] = {
                        ...columns[cIdx],
                        title: e.target.value,
                      }
                      setFooter({ ...footer, columns })
                    }}
                    className="px-2 py-1 bg-white border border-slate-200 rounded-lg text-xs font-bold"
                  />
                </div>

                <div className="space-y-1.5 pt-1">
                  {col.links.map((link, lIdx) => (
                    <div key={link.id} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={link.label}
                        onChange={(e) => {
                          const columns = [...footer.columns]
                          const links = [...columns[cIdx].links]
                          links[lIdx] = {
                            ...links[lIdx],
                            label: e.target.value,
                          }
                          columns[cIdx] = { ...columns[cIdx], links }
                          setFooter({ ...footer, columns })
                        }}
                        className="w-1/2 px-2 py-1 bg-white border border-slate-200 rounded-lg text-[11px]"
                      />
                      <input
                        type="text"
                        value={link.href}
                        onChange={(e) => {
                          const columns = [...footer.columns]
                          const links = [...columns[cIdx].links]
                          links[lIdx] = { ...links[lIdx], href: e.target.value }
                          columns[cIdx] = { ...columns[cIdx], links }
                          setFooter({ ...footer, columns })
                        }}
                        className="w-1/2 px-2 py-1 bg-white border border-slate-200 rounded-lg text-[11px] font-mono text-slate-500"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company & Legal Info */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-4">
            <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
              Corporate Info & Legal Notice
            </h2>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Company Description
                </label>
                <textarea
                  rows={4}
                  value={footer.companyDescription}
                  onChange={(e) =>
                    setFooter({ ...footer, companyDescription: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Copyright Notice
                </label>
                <input
                  type="text"
                  value={footer.copyrightText}
                  onChange={(e) =>
                    setFooter({ ...footer, copyrightText: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Office Address
                </label>
                <input
                  type="text"
                  value={footer.officeAddress}
                  onChange={(e) =>
                    setFooter({ ...footer, officeAddress: e.target.value })
                  }
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-600"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminFooterPage
