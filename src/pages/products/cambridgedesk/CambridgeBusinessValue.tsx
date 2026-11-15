import {
  ShieldCheck,
  GraduationCap,
  Clock,
  CreditCard,
  Building2,
  FileCheck,
  CheckCircle2,
  TrendingUp,
} from "lucide-react"

export default function CambridgeBusinessValue() {
  const values = [
    {
      icon: CreditCard,
      title: "Automated Fee Reconciliation",
      subtitle: "3-Copy Bank Challan Engine",
      description:
        "Replaces manual handwritten voucher preparation. Accountants generate batch 3-copy deposit slips with dynamic barcodes and import daily bank clearance statements in minutes.",
      tag: "Immediate Cash Velocity",
    },
    {
      icon: GraduationCap,
      title: "Eliminate Gradebook Spreadsheet Errors",
      subtitle: "Component Marks & GPA Tabulation",
      description:
        "Teachers enter marks directly into locked subject portals. CambridgeDesk aggregates theory, practicals, and quizzes using verified grade boundaries (A*–U) without formula drift.",
      tag: "Examination Security",
    },
    {
      icon: Clock,
      title: "30-Minute Absence Parent Notifications",
      subtitle: "Biometric Turnstile Synchronization",
      description:
        "Gate turnstiles synchronize morning arrivals in real time. Unannounced absentees trigger automated SMS alerts to parents by 08:30 AM, elevating campus safety.",
      tag: "Parent Trust & Safety",
    },
    {
      icon: FileCheck,
      title: "Curricular Syllabus Accountability",
      subtitle: "Week-by-Week Pacing Calendars",
      description:
        "Academic coordinators audit teaching progress across all grades. Automated flags highlight incomplete syllabus topics weeks before terminal examination papers are set.",
      tag: "Academic Consistency",
    },
    {
      icon: Building2,
      title: "Multi-Branch Executive Transparency",
      subtitle: "Centralized Leadership Dashboards",
      description:
        "Directors and trustees monitor campus capacity, fee collections, teacher attendance, and academic averages across all branches from a single unified management console.",
      tag: "Governance Control",
    },
    {
      icon: ShieldCheck,
      title: "Permanent Longitudinal Records",
      subtitle: "Digital Student Archives",
      description:
        "Academic transcripts, disciplinary logs, health records, and sibling profiles remain securely archived across years, ready for instant transfer certificates (TC) or college transcripts.",
      tag: "Zero Record Loss",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B5FFF]/10 border border-[#0B5FFF]/20 text-[#0B5FFF] text-xs font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Institutional Impact</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0F1E] tracking-tight">
            Less Administrative Complexity.{" "}
            <span className="text-[#0B5FFF]">More Academic Visibility.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            CambridgeDesk bridges the historic gap between academic educators
            and administrative finance teams, turning disjointed school
            operations into an integrated workflow.
          </p>
        </div>

        {/* Value Grid (Editorial Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((v, idx) => {
            const Icon = v.icon
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 hover:border-[#0B5FFF]/40 rounded-2xl p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#0B5FFF]/10 border border-[#0B5FFF]/20 flex items-center justify-center text-[#0B5FFF] group-hover:bg-[#0B5FFF] group-hover:text-white transition-colors duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {v.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0A0F1E] mb-1 group-hover:text-[#0B5FFF] transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#0B5FFF] uppercase tracking-wide">
                      {v.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {v.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified Operational Workflow</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Verified Technical Performance Bar */}
        <div className="mt-14 bg-[#0A0F1E] text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00D4FF] font-mono mb-1">
                1-Click
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Batch 3-Copy Challans
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Bank, School & Student Slips
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono mb-1">
                100%
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Gradebook Accuracy
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Locked Marksheet Formulas
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mb-1">
                &lt;30m
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Absence Alert Turnaround
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Automated Parent SMS Gateway
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono mb-1">
                Multi-Branch
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Central Administration
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Executive Leadership Oversight
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
