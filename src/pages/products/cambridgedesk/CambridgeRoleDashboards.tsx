import { useState } from "react"
import { Shield, CheckCircle2, Lock } from "lucide-react"

interface RoleProfile {
  id: string
  roleTitle: string
  targetUser: string
  focusArea: string
  primaryMetrics: { label: string, value: string }[]
  keyResponsibilities: string[]
  dashboardSnippet: React.ReactNode
}

export default function CambridgeRoleDashboards() {
  const [selectedRoleId, setSelectedRoleId] = useState<string>("director")

  const roles: RoleProfile[] = [
    {
      id: "director",
      roleTitle: "School Owner / Director",
      targetUser: "Executive Leadership & Board of Governors",
      focusArea: "Campus Capacity, Financial Health & Multi-Branch Governance",
      primaryMetrics: [
        { label: "Total Enrolled", value: "1,286 (94% Cap)" },
        { label: "Fee Collection", value: "91.2% Cleared" },
        { label: "Faculty Retention", value: "96.4%" },
        { label: "Operating Surplus", value: "+Rs. 8.0M" },
      ],
      keyResponsibilities: [
        "Executive oversight across multiple campus branches and wings",
        "Financial monitoring: tuition fee income vs campus expenditures",
        "Staff salary payroll approval and infrastructure capital budgets",
      ],
      dashboardSnippet: (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-[#00D4FF] font-bold">
              DIRECTOR EXECUTIVE DESK
            </span>
            <span className="text-emerald-400">CAMPUS WIDE</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-slate-400 text-[10px] block">
                Current Term Fee Inflow
              </span>
              <span className="text-emerald-400 text-sm font-bold font-mono">
                Rs. 21.6M
              </span>
            </div>
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-slate-400 text-[10px] block">
                Uncollected Receivables
              </span>
              <span className="text-amber-400 text-sm font-bold font-mono">
                Rs. 2.1M
              </span>
            </div>
          </div>
          <div className="p-2.5 bg-slate-950 rounded border border-slate-800 text-[11px] text-slate-300">
            Branch 1 (Main Campus): 96% Capacity • Branch 2 (Junior Campus): 92%
            Capacity
          </div>
        </div>
      ),
    },
    {
      id: "principal",
      roleTitle: "School Principal",
      targetUser: "Institutional Heads & Headmistresses",
      focusArea: "Daily Operations, Student Discipline & Faculty Pacing",
      primaryMetrics: [
        { label: "Daily Attendance", value: "96.4% Present" },
        { label: "Teacher Present", value: "54 / 56 On Duty" },
        { label: "Substitute Classes", value: "2 Reassigned" },
        { label: "Syllabus Coverage", value: "88% On Target" },
      ],
      keyResponsibilities: [
        "Daily morning gate attendance review and unauthorized absence monitoring",
        "Immediate timetable substitution for absent faculty members",
        "Student disciplinary escalation logs and parent meeting resolutions",
      ],
      dashboardSnippet: (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-white font-bold">
              PRINCIPAL MORNING BRIEFING
            </span>
            <span className="text-emerald-400">SESSION: 08:30 AM</span>
          </div>
          <div className="space-y-1.5 text-slate-300 text-[11px]">
            <div className="flex justify-between bg-slate-900 p-2 rounded border border-slate-800">
              <span>Teacher Substitution:</span>
              <span className="text-emerald-400">
                Grade 8 English covered by Ms. Saima
              </span>
            </div>
            <div className="flex justify-between bg-slate-900 p-2 rounded border border-slate-800">
              <span>Disciplinary Incident:</span>
              <span className="text-amber-400">
                Grade 9 Mobile Confiscation Logged
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "coordinator",
      roleTitle: "Academic Coordinator",
      targetUser: "Section Heads & Curriculum Directors",
      focusArea:
        "Syllabus Completion, Weekly Lesson Pacing & Class Observation",
      primaryMetrics: [
        { label: "Syllabus Status", value: "Week 14 Active" },
        { label: "Lesson Plans", value: "52 / 52 Approved" },
        { label: "Pending Tests", value: "4 Scheduled" },
        { label: "Class Observations", value: "8 Completed" },
      ],
      keyResponsibilities: [
        "Audit weekly teaching syllabus milestones against term calendar targets",
        "Approve weekly teacher lesson plans, worksheets, and digital presentations",
        "Coordinate formative assessment dates to avoid student test clustering",
      ],
      dashboardSnippet: (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-[#00D4FF] font-bold">
              CURRICULUM PACING AUDIT
            </span>
            <span className="text-white">WEEK 14 OF 18</span>
          </div>
          <div className="space-y-1 text-slate-300 text-[11px]">
            <div className="flex justify-between">
              <span>O-Level Mathematics:</span>
              <span className="text-emerald-400">
                Unit 3 Complete (On Schedule)
              </span>
            </div>
            <div className="flex justify-between">
              <span>O-Level Physics:</span>
              <span className="text-emerald-400">
                Unit 4 Active (On Schedule)
              </span>
            </div>
            <div className="flex justify-between">
              <span>Grade 8 Chemistry:</span>
              <span className="text-amber-400">1 Lecture Behind Target</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "controller",
      roleTitle: "Examination Controller",
      targetUser: "Examination Committee & Tabulation Officers",
      focusArea: "Marksheet Compilation, Moderation & Report Card Printing",
      primaryMetrics: [
        { label: "Exams Scheduled", value: "Mid-Term Series" },
        { label: "Marks Submitted", value: "98% Recorded" },
        { label: "Grace Moderation", value: "Audit Locked" },
        { label: "Transcripts Ready", value: "1,286 Compiled" },
      ],
      keyResponsibilities: [
        "Configure examination seating arrangements and roll number slips",
        "Enforce marks entry deadlines and lock marks entry portals to prevent tampering",
        "Execute automated grade threshold calculations (A* to U) and generate report cards",
      ],
      dashboardSnippet: (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-white font-bold">
              EXAMINATION TABULATION CONSOLE
            </span>
            <span className="text-emerald-400">SECURITY: LOCKED</span>
          </div>
          <div className="bg-slate-900 p-2.5 rounded border border-slate-800 text-[11px] space-y-1">
            <div className="flex justify-between">
              <span>Subject Marks Locked:</span>
              <span className="text-emerald-400 font-bold">
                28 / 28 Sections Completed
              </span>
            </div>
            <div className="flex justify-between">
              <span>GPA Gradebook Compilation:</span>
              <span className="text-[#00D4FF] font-bold">
                Zero Formula Drift Detected
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "teacher",
      roleTitle: "Subject Teacher",
      targetUser: "Classroom Educators & Lab Instructors",
      focusArea: "Attendance, Assignment Marking & Student Remarks",
      primaryMetrics: [
        { label: "My Classes", value: "4 Sections" },
        { label: "Students", value: "112 Total" },
        { label: "Homework Marked", value: "94% Returned" },
        { label: "Pending Marks", value: "0 Tests" },
      ],
      keyResponsibilities: [
        "Record period attendance in under 60 seconds from any browser or tablet",
        "Post daily homework assignments with document attachments and due dates",
        "Enter test scores with qualitative academic remarks for report cards",
      ],
      dashboardSnippet: (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-emerald-400 font-bold">
              TEACHER DESK: DR. ASIF MEHMOOD
            </span>
            <span className="text-slate-400">PHYSICS 5054</span>
          </div>
          <div className="space-y-1 text-slate-300 text-[11px]">
            <div className="flex justify-between">
              <span>Next Period (10:15 AM):</span>
              <span className="text-white font-bold">
                Grade 10-A (Science Lab 2)
              </span>
            </div>
            <div className="flex justify-between">
              <span>Active Homework:</span>
              <span>Kinematics Worksheet #4 (Due Friday)</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "accountant",
      roleTitle: "School Accountant",
      targetUser: "Bursars, Cashiers & Finance Officers",
      focusArea:
        "Fee Challan Batches, Bank File Imports & Ledger Reconciliations",
      primaryMetrics: [
        { label: "Batch Challans", value: "1,286 Generated" },
        { label: "Cleared at Bank", value: "1,172 Paid" },
        { label: "Defaulter Notices", value: "48 Dispatched" },
        { label: "Bank Reconciliation", value: "100% Balanced" },
      ],
      keyResponsibilities: [
        "Generate 3-copy bank fee challan vouchers with dynamic student barcodes",
        "Import daily bank clearance statement files to automatically mark vouchers as paid",
        "Manage sibling concessions, staff fee discounts, and partial payment plans",
      ],
      dashboardSnippet: (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-[#00D4FF] font-bold">
              ACCOUNTS & BURSAR CONSOLE
            </span>
            <span className="text-emerald-400">BANK INTEGRATED</span>
          </div>
          <div className="space-y-1 text-slate-300 text-[11px]">
            <div className="flex justify-between">
              <span>Monthly Batch Status:</span>
              <span className="text-emerald-400 font-bold">
                December Tuition Challans Dispatched
              </span>
            </div>
            <div className="flex justify-between">
              <span>Direct Bank Clearance Feed:</span>
              <span>112 Vouchers Reconciled Today</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "admin",
      roleTitle: "Campus Administrator",
      targetUser: "Front Desk, Transport & Admissions Staff",
      focusArea: "New Inquiries, Student Transport Rosters & ID Cards",
      primaryMetrics: [
        { label: "New Admissions", value: "64 Inquiries" },
        { label: "Transport Vans", value: "8 Routes Active" },
        { label: "Library Books Out", value: "148 Checked Out" },
        { label: "RFID Cards Issued", value: "100% Complete" },
      ],
      keyResponsibilities: [
        "Admissions registration: inquiry tracking, admission tests, and enrollment files",
        "Vehicle transport routing and student pickup/drop allocation",
        "Student ID card generation with photos, barcodes, and emergency blood group info",
      ],
      dashboardSnippet: (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-white font-bold">CAMPUS ADMIN DESK</span>
            <span className="text-emerald-400">ADMISSIONS OPEN</span>
          </div>
          <div className="space-y-1 text-slate-300 text-[11px]">
            <div className="flex justify-between">
              <span>New Admission Applications:</span>
              <span className="text-[#00D4FF] font-bold">
                64 Online Inquiries for Next Term
              </span>
            </div>
            <div className="flex justify-between">
              <span>Van Fleet Safety Status:</span>
              <span className="text-emerald-400">
                All 8 Vehicles Fitness Verified
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const activeRole = roles.find((r) => r.id === selectedRoleId) || roles[0]

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B5FFF]/10 border border-[#0B5FFF]/20 text-[#0B5FFF] text-xs font-semibold">
            <Shield className="w-3.5 h-3.5" />
            <span>Role-Based Access Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0F1E] tracking-tight">
            Every School Role.{" "}
            <span className="text-[#0B5FFF]">
              A Clearer View of What Matters.
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            School staff should not be overwhelmed by screens they do not need.
            CambridgeDesk delivers dedicated, role-tailored dashboard views with
            strict security permissions.
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-10 gap-2 scroll-container">
          {roles.map((r) => {
            const isSelected = selectedRoleId === r.id
            return (
              <button
                key={r.id}
                onClick={() => setSelectedRoleId(r.id)}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#0B5FFF] text-white shadow-md shadow-[#0B5FFF]/25"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {r.roleTitle}
              </button>
            )
          })}
        </div>

        {/* Selected Role Dashboard Workspace */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Role Info */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs uppercase font-mono font-bold text-[#0B5FFF] tracking-wider block mb-1">
                  Target Designation: {activeRole.targetUser}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0F1E]">
                  {activeRole.roleTitle}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                  {activeRole.focusArea}
                </p>
              </div>

              {/* Role Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {activeRole.primaryMetrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center"
                  >
                    <span className="text-[10px] text-slate-500 block uppercase font-mono truncate">
                      {m.label}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#0A0F1E] font-mono">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-2.5 pt-2">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-700 block">
                  Designated Responsibilities in CambridgeDesk:
                </span>
                <ul className="space-y-2">
                  {activeRole.keyResponsibilities.map((resp, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Screen Snippet */}
            <div className="lg:col-span-5">
              <div className="bg-[#0A0F1E] text-white rounded-2xl border border-slate-800 p-5 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3 text-xs text-slate-400 font-mono">
                  <span>Role View Simulator</span>
                  <span className="text-[#00D4FF] uppercase flex items-center gap-1">
                    <Lock className="w-3 h-3" /> RBAC Protected
                  </span>
                </div>
                {activeRole.dashboardSnippet}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
