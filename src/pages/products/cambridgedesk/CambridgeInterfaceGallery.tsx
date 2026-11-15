import { useState } from "react"
import {
  Monitor,
  Maximize2,
  X,
  CreditCard,
  Clock,
  BookOpen,
  GraduationCap,
  BarChart3,
} from "lucide-react"

interface ScreenItem {
  id: string
  title: string
  category: string
  tag: string
  icon: typeof Monitor
  description: string
  renderInterface: () => React.ReactNode
}

export default function CambridgeInterfaceGallery() {
  const [selectedScreenId, setSelectedScreenId] = useState<string>("dashboard")
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false)

  const screens: ScreenItem[] = [
    {
      id: "dashboard",
      title: "Academic & Executive Dashboard",
      category: "Institutional Overview",
      tag: "Session 2026-2027",
      icon: BarChart3,
      description:
        "Centralized executive intelligence showing real-time campus attendance, fee clearance velocity, teacher substitution alerts, and curriculum syllabus pacing.",
      renderInterface: () => (
        <div className="bg-[#0A0F1E] text-white p-5 rounded-xl font-mono text-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-[#00D4FF] font-bold">
              CAMBRIDGEDESK ACADEMIC DESK
            </span>
            <span className="text-emerald-400">CAMPUS WIDE ACTIVE</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block">
                TOTAL STUDENTS
              </span>
              <span className="font-bold text-white text-sm">1,286 Active</span>
            </div>
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block">
                ATTENDANCE
              </span>
              <span className="font-bold text-emerald-400 text-sm">
                96.4% Today
              </span>
            </div>
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block">
                CHALLAN REVENUE
              </span>
              <span className="font-bold text-[#00D4FF] text-sm">
                91.2% Cleared
              </span>
            </div>
          </div>

          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1.5 text-[11px]">
            <div className="flex justify-between text-slate-300">
              <span>Junior School Attendance:</span>
              <span className="text-emerald-400">
                97.8% (469 / 480 Present)
              </span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Middle School Attendance:</span>
              <span className="text-emerald-400">
                96.1% (346 / 360 Present)
              </span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Senior Cambridge Wing:</span>
              <span className="text-emerald-400">
                95.3% (425 / 446 Present)
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "challans",
      title: "3-Copy Bank Fee Challan Batch Generator",
      category: "Finance & Accounts",
      tag: "Voucher Engine",
      icon: CreditCard,
      description:
        "Standardized 3-copy deposit vouchers (Bank Copy, School Copy, Student Copy) featuring student barcodes, sibling concessions, late fine thresholds, and direct bank reconciliations.",
      renderInterface: () => (
        <div className="bg-[#0A0F1E] text-white p-5 rounded-xl font-mono text-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-white font-bold">
              MONTHLY TUITION CHALLAN BATCH
            </span>
            <span className="text-emerald-400">1,286 VOUCHERS COMPILED</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-[10px] text-center">
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-slate-400 block">PART 1: BANK COPY</span>
              <span className="text-[#00D4FF] font-bold">Teller Slip</span>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-slate-400 block">PART 2: SCHOOL COPY</span>
              <span className="text-white font-bold">Audit Archive</span>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-slate-400 block">PART 3: STUDENT COPY</span>
              <span className="text-emerald-400 font-bold">Parent Receipt</span>
            </div>
          </div>

          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1.5 text-[11px]">
            <div className="flex justify-between text-slate-300">
              <span>Tuition Fee Rate:</span>
              <span>Rs. 18,500.00</span>
            </div>
            <div className="flex justify-between text-emerald-400">
              <span>Sibling Discount (20% Sibling Policy):</span>
              <span>-Rs. 3,700.00</span>
            </div>
            <div className="border-t border-slate-800 pt-1 flex justify-between font-bold text-white">
              <span>NET PAYABLE VOUCHER TOTAL:</span>
              <span className="text-emerald-400">Rs. 14,800.00</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "marksheet",
      title: "Cambridge Marksheet & GPA Engine",
      category: "Examinations",
      tag: "Grading Scheme",
      icon: GraduationCap,
      description:
        "Component-based examination grading applying Cambridge thresholds (A*, A, B, C, D, E, U) or standard Board GPA scales with locked formula audits.",
      renderInterface: () => (
        <div className="bg-[#0A0F1E] text-white p-5 rounded-xl font-mono text-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-white font-bold">
              CANDIDATE RESULT TRANSCRIPT
            </span>
            <span className="text-emerald-400">STATUS: APPROVED</span>
          </div>

          <div className="space-y-1.5 text-[11px] text-slate-300">
            <div className="flex justify-between">
              <span>Candidate:</span>
              <span className="text-white font-bold">
                Hamza Tariq (O-Level 10-A)
              </span>
            </div>
            <div className="flex justify-between">
              <span>Mathematics (Syllabus D 4024):</span>
              <span className="text-emerald-400 font-bold">
                94% (Grade: A* | GPA: 4.0)
              </span>
            </div>
            <div className="flex justify-between">
              <span>Physics (5054):</span>
              <span className="text-emerald-400 font-bold">
                88% (Grade: A | GPA: 3.7)
              </span>
            </div>
            <div className="flex justify-between">
              <span>Chemistry (5070):</span>
              <span className="text-emerald-400 font-bold">
                91% (Grade: A* | GPA: 4.0)
              </span>
            </div>
            <div className="border-t border-slate-800 pt-1.5 flex justify-between font-bold text-white">
              <span>OVERALL TERM GPA:</span>
              <span className="text-[#00D4FF]">3.88 / 4.0 (1st in Class)</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "attendance-ui",
      title: "Biometric Attendance & Absence SMS Log",
      category: "Student Safety",
      tag: "GSM Gateway",
      icon: Clock,
      description:
        "Direct turnstile biometric gate logs synchronizing daily attendance and triggering immediate automated parent absence notifications.",
      renderInterface: () => (
        <div className="bg-[#0A0F1E] text-white p-5 rounded-xl font-mono text-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-white font-bold">GATE SWIPE & SMS LOGS</span>
            <span className="text-[#00D4FF]">LIVE TURNSTILE</span>
          </div>

          <div className="space-y-2 text-[11px]">
            <div className="bg-slate-900 p-2 rounded border border-slate-800 flex justify-between">
              <span>08:02 AM - Card #8942 (Grade 10-A)</span>
              <span className="text-emerald-400">Swipe In: On Time</span>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800 flex justify-between">
              <span>08:18 AM - Card #8943 (Grade 10-A)</span>
              <span className="text-amber-400">Swipe In: Late Entry (+3m)</span>
            </div>
            <div className="bg-rose-950/60 p-2 rounded border border-rose-800/80 flex justify-between text-rose-300">
              <span>08:30 AM - Card #8944 (Absentee Flagged)</span>
              <span className="font-bold">SMS Sent to Parent</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "curriculum-ui",
      title: "Class Curriculum & Topic Pacing Planner",
      category: "Academic Planning",
      tag: "Pacing Calendar",
      icon: BookOpen,
      description:
        "Week-by-week topic pacing planner ensuring subject teachers complete syllabus milestones with attached lecture notes and formative assessment dates.",
      renderInterface: () => (
        <div className="bg-[#0A0F1E] text-white p-5 rounded-xl font-mono text-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-white font-bold">
              CURRICULUM PACING: O-LEVEL PHYSICS
            </span>
            <span className="text-emerald-400">WEEK 14 PROGRESS: 88%</span>
          </div>

          <div className="space-y-1.5 text-[11px] text-slate-300">
            <div className="flex justify-between">
              <span>Active Unit:</span>
              <span className="text-white font-bold">
                Unit 4: Kinematics & Dynamics
              </span>
            </div>
            <div className="flex justify-between">
              <span>Instructional Periods:</span>
              <span>8 Lectures + 2 Practical Lab Sessions</span>
            </div>
            <div className="flex justify-between">
              <span>Formative Quiz Alignment:</span>
              <span className="text-[#00D4FF]">
                Quiz #3 Scheduled for Thursday
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const currentScreen =
    screens.find((s) => s.id === selectedScreenId) || screens[0]

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B5FFF]/10 border border-[#0B5FFF]/20 text-[#0B5FFF] text-xs font-semibold">
            <Monitor className="w-3.5 h-3.5" />
            <span>Product Interface Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0F1E] tracking-tight">
            Designed for Academic Rigor &{" "}
            <span className="text-[#0B5FFF]">Campus Clarity.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Explore the core terminal screens that power daily academic
            administration, examination calculations, and fee collection
            workflows.
          </p>
        </div>

        {/* Screen Selector Pills */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-8 gap-2 scroll-container">
          {screens.map((screen) => {
            const isSelected = selectedScreenId === screen.id
            const Icon = screen.icon
            return (
              <button
                key={screen.id}
                onClick={() => setSelectedScreenId(screen.id)}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? "bg-[#0B5FFF] text-white shadow-md shadow-[#0B5FFF]/20"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{screen.title}</span>
              </button>
            )
          })}
        </div>

        {/* Dashboard Preview Browser Frame */}
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden relative">
          {/* Title Bar */}
          <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 font-mono text-xs text-slate-400 hidden sm:inline-block">
                CambridgeDesk Academic ERP • {currentScreen.title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-[#00D4FF] bg-[#00D4FF]/10 border border-[#00D4FF]/30 px-2.5 py-0.5 rounded-full">
                {currentScreen.tag}
              </span>
              <button
                onClick={() => setIsZoomOpen(true)}
                className="text-slate-400 hover:text-white p-1 transition-colors cursor-pointer"
                title="Expand Screen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Screen Content Body */}
          <div className="p-6 sm:p-8">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-1">
                {currentScreen.title}
              </h3>
              <p className="text-xs text-slate-400">
                {currentScreen.description}
              </p>
            </div>

            <div className="pt-2">{currentScreen.renderInterface()}</div>
          </div>

          {/* Internal TODO Notice clearly marked as illustrative preview */}
          <div className="px-6 py-3 bg-slate-950/80 border-t border-slate-800 text-center text-[10px] text-slate-500 font-mono">
            * Illustrative UI Preview • Based on CambridgeDesk Academic ERP
            Specification
            {/* TODO: Replace with live campus deployment screenshots upon completion of on-site photography */}
          </div>
        </div>

        {/* Modal Lightbox for Zoom */}
        {isZoomOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-[#0A0F1E] border border-slate-800 rounded-2xl w-full max-w-4xl p-6 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setIsZoomOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wider">
                  Full Screen Preview
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {currentScreen.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  {currentScreen.description}
                </p>
              </div>

              <div>{currentScreen.renderInterface()}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
