import React, { useState, useEffect } from "react"
import { adminCmsStore } from "../../services/adminCmsStore"
import { useAdminAuth } from "../../context/AdminAuthContext"
import { FormSubmission } from "../../types/adminCms"
import {
  Search,
  Download,
  Mail,
  Phone,
  Building,
  CheckCircle2,
} from "lucide-react"

export const AdminFormsPage: React.FC = () => {
  const { user } = useAdminAuth()
  const [submissions, setSubmissions] = useState<FormSubmission[]>(
    adminCmsStore.getSubmissions(),
  )
  const [selectedSubm, setSelectedSubm] = useState<FormSubmission | null>(
    submissions[0] || null,
  )
  const [filterStatus, setFilterStatus] = useState<string>("all")
  const [search, setSearch] = useState("")
  const [feedback, setFeedback] = useState<string | null>(null)

  useEffect(() => {
    return adminCmsStore.subscribe(() => {
      const fresh = adminCmsStore.getSubmissions()
      setSubmissions(fresh)
      if (!selectedSubm && fresh.length > 0) {
        setSelectedSubm(fresh[0])
      }
    })
  }, [selectedSubm])

  const filtered = submissions.filter((s) => {
    const matchesStatus = filterStatus === "all" || s.status === filterStatus
    const name = s.data.name || ""
    const email = s.data.email || ""
    const comp = s.data.company || ""
    const matchesSearch =
      name.toLowerCase().includes(search.toLowerCase()) ||
      email.toLowerCase().includes(search.toLowerCase()) ||
      comp.toLowerCase().includes(search.toLowerCase())
    return matchesStatus && matchesSearch
  })

  const handleStatusChange = (
    id: string,
    newStatus: FormSubmission["status"],
  ) => {
    if (!user) return
    adminCmsStore.updateSubmissionStatus(id, newStatus, user)
    if (selectedSubm && selectedSubm.id === id) {
      setSelectedSubm({ ...selectedSubm, status: newStatus })
    }
    setFeedback(`Lead status marked as ${newStatus}`)
    setTimeout(() => setFeedback(null), 2500)
  }

  const handleExportCsv = () => {
    const headers = [
      "ID",
      "Date",
      "Form",
      "Name",
      "Email",
      "Phone",
      "Company",
      "Source URL",
      "Status",
    ]
    const rows = submissions.map((s) => [
      s.id,
      new Date(s.submittedAt).toLocaleDateString(),
      `"${s.formName}"`,
      `"${s.data.name || ""}"`,
      `"${s.data.email || ""}"`,
      `"${s.data.phone || ""}"`,
      `"${s.data.company || ""}"`,
      s.sourceUrl,
      s.status,
    ])

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n")
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute(
      "download",
      `xb_leads_export_${new Date().toISOString().slice(0, 10)}.csv`,
    )
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Leads & Form Inquiries
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Review incoming architecture consultation requests, demo bookings,
            and commercial contact submissions.
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
            onClick={handleExportCsv}
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 shadow-2xs"
          >
            <Download className="w-4 h-4 text-slate-500" />
            Export Leads CSV
          </button>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search leads by prospect name, email, or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="flex items-center gap-2">
          {["all", "unread", "read", "contacted"].map((st) => (
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

      {/* Inbox Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Submissions List */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs space-y-2 max-h-[640px] overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="p-12 text-center text-slate-400 text-xs">
              No matching lead submissions found.
            </div>
          ) : (
            filtered.map((sub) => (
              <div
                key={sub.id}
                onClick={() => setSelectedSubm(sub)}
                className={`p-4 rounded-xl cursor-pointer transition-all border ${
                  selectedSubm?.id === sub.id
                    ? "bg-blue-50/70 border-blue-300 shadow-2xs"
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-slate-900 text-xs">
                    {sub.data.name || "Anonymous Lead"}
                  </span>
                  <span
                    className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                      sub.status === "unread"
                        ? "bg-amber-100 text-amber-800"
                        : sub.status === "contacted"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {sub.status}
                  </span>
                </div>

                <p className="text-xs text-slate-600 font-medium truncate mb-1">
                  {sub.data.company || sub.formName}
                </p>

                <div className="flex items-center justify-between text-[10px] text-slate-400">
                  <span>{sub.formName}</span>
                  <span>{new Date(sub.submittedAt).toLocaleDateString()}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Column: Lead Detail Card */}
        <div className="lg:col-span-6">
          {selectedSubm ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-2xs space-y-6">
              <div className="flex items-start justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider block">
                    {selectedSubm.formName}
                  </span>
                  <h2 className="text-lg font-bold text-slate-900 mt-0.5">
                    {selectedSubm.data.name || "Anonymous Prospect"}
                  </h2>
                  <span className="text-xs text-slate-400">
                    Received on{" "}
                    {new Date(selectedSubm.submittedAt).toLocaleString()}
                  </span>
                </div>

                <select
                  value={selectedSubm.status}
                  onChange={(e) =>
                    handleStatusChange(selectedSubm.id, e.target.value as any)
                  }
                  className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700"
                >
                  <option value="unread">Unread</option>
                  <option value="read">Read</option>
                  <option value="contacted">Contacted</option>
                  <option value="archived">Archived</option>
                </select>
              </div>

              {/* Contact Data Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {selectedSubm.data.email && (
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[10px] text-slate-400 font-semibold uppercase block mb-1">
                      Email
                    </span>
                    <a
                      href={`mailto:${selectedSubm.data.email}`}
                      className="font-bold text-blue-600 hover:underline flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{selectedSubm.data.email}</span>
                    </a>
                  </div>
                )}

                {selectedSubm.data.phone && (
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[10px] text-slate-400 font-semibold uppercase block mb-1">
                      Phone / WhatsApp
                    </span>
                    <a
                      href={`tel:${selectedSubm.data.phone}`}
                      className="font-bold text-emerald-600 hover:underline flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{selectedSubm.data.phone}</span>
                    </a>
                  </div>
                )}

                {selectedSubm.data.company && (
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <span className="text-[10px] text-slate-400 font-semibold uppercase block mb-1">
                      Company / Institution
                    </span>
                    <span className="font-bold text-slate-800 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-slate-400" />
                      <span>{selectedSubm.data.company}</span>
                    </span>
                  </div>
                )}

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] text-slate-400 font-semibold uppercase block mb-1">
                    Source Route
                  </span>
                  <span className="font-mono text-slate-600 text-[11px]">
                    {selectedSubm.sourceUrl}
                  </span>
                </div>
              </div>

              {/* Message Scope */}
              {selectedSubm.data.message && (
                <div>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase block mb-1">
                    Scope & Requirements Note
                  </span>
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed whitespace-pre-wrap">
                    {selectedSubm.data.message}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="p-16 text-center text-slate-400 bg-white rounded-2xl border border-slate-200">
              Select an inquiry from the left to view complete prospect details.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminFormsPage
