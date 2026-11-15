import React, { useState, useEffect } from "react"
import { adminCmsStore } from "../../services/adminCmsStore"
import { ActivityLogItem } from "../../types/adminCms"
import { Search, Clock } from "lucide-react"

export const AdminActivityPage: React.FC = () => {
  const [logs, setLogs] = useState<ActivityLogItem[]>(
    adminCmsStore.getState().activityLogs,
  )
  const [filterType, setFilterType] = useState<string>("all")
  const [search, setSearch] = useState("")

  useEffect(() => {
    return adminCmsStore.subscribe(() => {
      setLogs(adminCmsStore.getState().activityLogs)
    })
  }, [])

  const filteredLogs = logs.filter((log) => {
    const matchesType = filterType === "all" || log.type === filterType
    const matchesSearch =
      log.action.toLowerCase().includes(search.toLowerCase()) ||
      log.userName.toLowerCase().includes(search.toLowerCase()) ||
      log.entityName.toLowerCase().includes(search.toLowerCase()) ||
      (log.details && log.details.toLowerCase().includes(search.toLowerCase()))
    return matchesType && matchesSearch
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-black text-slate-900 tracking-tight">
          Audit Activity Log
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          Immutable event log of administrative logins, content updates, version
          releases, and schema modifications.
        </p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search activity by user, action, or entity..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {["all", "publish", "update", "create", "auth", "settings"].map(
            (t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold capitalize whitespace-nowrap transition-colors ${
                  filterType === t
                    ? "bg-slate-900 text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                {t}
              </button>
            ),
          )}
        </div>
      </div>

      {/* Log Feed Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50/75 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <th className="py-3.5 px-6">Timestamp</th>
              <th className="py-3.5 px-4">Administrator</th>
              <th className="py-3.5 px-4">Action & Type</th>
              <th className="py-3.5 px-4">Target Entity</th>
              <th className="py-3.5 px-6">Context & Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredLogs.map((log) => (
              <tr
                key={log.id}
                className="hover:bg-slate-50/50 transition-colors"
              >
                <td className="py-4 px-6 font-mono text-slate-500 whitespace-nowrap">
                  <div className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>
                      {new Date(log.timestamp).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {new Date(log.timestamp).toLocaleDateString()}
                  </div>
                </td>

                <td className="py-4 px-4 font-semibold text-slate-900">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-slate-100 text-slate-600 font-bold text-[10px] flex items-center justify-center">
                      {log.userName.charAt(0)}
                    </div>
                    <span>{log.userName}</span>
                  </div>
                </td>

                <td className="py-4 px-4">
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      log.type === "publish"
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : log.type === "create"
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : log.type === "auth"
                            ? "bg-purple-50 text-purple-700 border border-purple-200"
                            : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {log.type}
                  </span>
                  <span className="block text-xs font-semibold text-slate-900 mt-1">
                    {log.action}
                  </span>
                </td>

                <td className="py-4 px-4">
                  <span className="font-bold text-slate-800">
                    {log.entityName}
                  </span>
                  <span className="block text-[10px] text-slate-400 font-mono capitalize">
                    {log.entityType}
                  </span>
                </td>

                <td className="py-4 px-6 text-slate-500 max-w-xs truncate">
                  {log.details || "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminActivityPage
