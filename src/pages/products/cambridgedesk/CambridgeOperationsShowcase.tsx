import { useState } from "react"
import {
  Users,
  Clock,
  CreditCard,
  BookOpen,
  MessageSquare,
  Bus,
  Library,
  Shield,
  FileSpreadsheet,
  CheckCircle2,
  Building2,
} from "lucide-react"
import ProductScreenshotFrame from "../../../components/ProductScreenshotFrame"

interface OperationsModule {
  id: string
  title: string
  shortLabel: string
  badge: string
  icon: typeof Users
  benefit: string
  headline: string
  bullets: string[]
  sampleUI: React.ReactNode
}

export default function CambridgeOperationsShowcase() {
  const [activeModuleId, setActiveModuleId] = useState<string>("fee")

  const modules: OperationsModule[] = [
    {
      id: "fee",
      title: "Fee & Finance Management",
      shortLabel: "1. Fee Challans",
      badge: "Financial Engine",
      icon: CreditCard,
      benefit: "Reduces fee reconciliation cycle from weeks to minutes.",
      headline: "1-Click Batch Generation of 3-Copy Bank Fee Challans",
      bullets: [
        "Official 3-copy bank deposit slip layout: Bank Copy, School Copy, Student Copy",
        "Automated late fee fine calculation after due date threshold",
        "Automated sibling discount concessions and scholarship fee waivers",
        "Direct bank deposit file import (1LINK, standard Pakistani & international bank formats)",
        "Defaulter escalation reports and automated parent reminder SMS",
      ],
      sampleUI: (
        <div className="bg-[#0A0F1E] text-white p-5 rounded-2xl border border-slate-800 space-y-4 font-mono text-xs shadow-xl">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-[#00D4FF] font-bold">
              3-COPY BANK FEE CHALLAN RUN
            </span>
            <span className="text-emerald-400">BARCODE VERIFIED</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-slate-400 block font-bold">BANK COPY</span>
              <span className="text-white">Retained at Branch</span>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-slate-400 block font-bold">
                SCHOOL COPY
              </span>
              <span className="text-white">Accounts Audit</span>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-slate-400 block font-bold">
                STUDENT COPY
              </span>
              <span className="text-emerald-400">Parent Record</span>
            </div>
          </div>

          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1.5 text-[11px]">
            <div className="flex justify-between text-slate-300">
              <span>Tuition Fee (December 2026):</span>
              <span>Rs. 18,500</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>Science & Computer Lab Charges:</span>
              <span>Rs. 2,000</span>
            </div>
            <div className="flex justify-between text-emerald-400">
              <span>Sibling Concession (20%):</span>
              <span>-Rs. 3,700</span>
            </div>
            <div className="border-t border-slate-800 pt-1.5 flex justify-between font-bold text-white">
              <span>NET PAYABLE BEFORE DUE DATE:</span>
              <span className="text-[#00D4FF]">Rs. 16,800.00</span>
            </div>
            <div className="flex justify-between text-rose-400 text-[10px]">
              <span>Late Surcharge (After 15 Dec):</span>
              <span>+Rs. 1,000.00</span>
            </div>
          </div>

          <div className="p-2 bg-emerald-950/60 border border-emerald-800/80 rounded text-emerald-300 text-[10px] text-center">
            Ready to print batch for 1,286 students with dynamic barcode.
          </div>
        </div>
      ),
    },
    {
      id: "attendance",
      title: "Attendance Management",
      shortLabel: "2. Attendance",
      badge: "Biometric Integration",
      icon: Clock,
      benefit:
        "Notifies parents of unannounced absences within 30 minutes of school start.",
      headline:
        "Biometric Turnstile Gate Synchronization & Instant SMS Gateway",
      bullets: [
        "Direct API integration with RFID card readers and biometric turnstiles",
        "Automated parent SMS absence dispatch triggered at cutoff time (e.g. 08:30 AM)",
        "Subject-wise class attendance logging for middle and senior schools",
        "Medical leave and official school event exemption logging",
        "Terminal attendance percentage calculation for exam eligibility validation",
      ],
      sampleUI: (
        <div className="bg-[#0A0F1E] text-white p-5 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs shadow-xl">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-white font-bold">BIOMETRIC GATE MONITOR</span>
            <span className="text-emerald-400">08:30 AM CUTOFF LOGGED</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-center text-[11px]">
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-slate-400 text-[10px] block">
                Present Students
              </span>
              <span className="text-emerald-400 text-lg font-bold">
                1,240 / 1,286
              </span>
            </div>
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
              <span className="text-slate-400 text-[10px] block">
                Absentees Flagged
              </span>
              <span className="text-rose-400 text-lg font-bold">
                46 Absentees
              </span>
            </div>
          </div>

          <div className="bg-slate-950 p-2.5 rounded border border-slate-800 text-[10px] space-y-1">
            <div className="text-slate-400 uppercase">
              Sample Automated SMS Dispatch
            </div>
            <div className="text-slate-200 bg-slate-900 p-2 rounded border border-slate-700/80">
              "Dear Guardian, Student Hamza Tariq (O-Level 10-A) is marked
              absent today (15 Nov). If this is in error, contact the School
              Front Desk at 021-3456789."
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "students",
      title: "Student Information Management",
      shortLabel: "3. Students",
      badge: "Core Registry",
      icon: Users,
      benefit:
        "Maintains complete longitudinal student records from nursery to graduation.",
      headline:
        "Comprehensive Student Profiles, Family Linking & Enrollment Records",
      bullets: [
        "Demographic, emergency contact, and medical allergy records",
        "Sibling family linking for automatic fee concession policies",
        "Previous school leaving certificates and digital birth registration storage",
        "Disciplinary warnings, certificates of merit, and extracurricular logs",
        "Seamless session promotion and student transfer certificates (TC)",
      ],
      sampleUI: (
        <div className="bg-[#0A0F1E] text-white p-5 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs shadow-xl">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-white font-bold">
              STUDENT MASTER RECORD #10408
            </span>
            <span className="text-emerald-400">ENROLLED (ACTIVE)</span>
          </div>

          <div className="space-y-1.5 text-slate-300 text-[11px]">
            <div className="flex justify-between">
              <span className="text-slate-400">Student Name:</span>
              <span className="text-white font-bold">Hamza Tariq</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Class & Section:</span>
              <span>O-Level Grade 10-A</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Linked Sibling:</span>
              <span className="text-[#00D4FF]">
                Ayesha Tariq (Grade 6-B, #11204)
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Medical Notes:</span>
              <span className="text-amber-400">
                Asthma Inhaler in First Aid
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "homework",
      title: "Homework & Academic Activities",
      shortLabel: "4. Homework",
      badge: "Classroom Pacing",
      icon: BookOpen,
      benefit:
        "Ensures transparent daily learning tasks for students and parents.",
      headline:
        "Daily Assignment Dispatch, Submission Deadlines & Teacher Feedback",
      bullets: [
        "Teacher assignment posting with PDF/document attachment support",
        "Daily homework summary feed pushed to parent portal & mobile app",
        "Submission deadline tracking with missing homework alerts",
        "Extracurricular club activities and inter-house competition rosters",
      ],
      sampleUI: (
        <div className="bg-[#0A0F1E] text-white p-5 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs shadow-xl">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-white font-bold">
              HOMEWORK DIARY: GRADE 10-A
            </span>
            <span className="text-[#00D4FF]">TODAY'S POSTINGS</span>
          </div>

          <div className="space-y-2 text-[11px]">
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800 flex justify-between">
              <div>
                <span className="font-bold text-white block">Physics 5054</span>
                <span className="text-slate-400">
                  Complete Numerical Problems 4.1 to 4.5
                </span>
              </div>
              <span className="text-amber-400 font-bold">Due Tomorrow</span>
            </div>
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800 flex justify-between">
              <div>
                <span className="font-bold text-white block">
                  Mathematics 4024
                </span>
                <span className="text-slate-400">
                  Past Paper 2 (Oct/Nov 2024 Series)
                </span>
              </div>
              <span className="text-amber-400 font-bold">Due Friday</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "parent",
      title: "Parent & School Communication",
      shortLabel: "5. Parent Comms",
      badge: "Direct Engagement",
      icon: MessageSquare,
      benefit: "Builds parental trust with transparent academic visibility.",
      headline: "Targeted SMS Broadcasts, Digital Circulars & Parent Portal",
      bullets: [
        "Targeted messaging: Broadcast to entire school, specific wings, or single classes",
        "Digital circulars and parent-teacher meeting (PTM) appointment slots",
        "Immediate emergency weather and holiday announcements via SMS",
        "Parent inquiry logging with administrative resolution tracking",
      ],
      sampleUI: (
        <div className="bg-[#0A0F1E] text-white p-5 rounded-2xl border border-slate-800 space-y-3 font-mono text-xs shadow-xl">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-white font-bold">
              GSM SMS BROADCAST ENGINE
            </span>
            <span className="text-emerald-400">GATEWAY CONNECTED</span>
          </div>
          <div className="bg-slate-900 p-2.5 rounded border border-slate-800 text-[11px] space-y-1">
            <span className="text-slate-400 block text-[10px]">
              Active Circular Broadcast
            </span>
            <div className="text-slate-200">
              "Mid-Term Parent-Teacher Meeting (PTM) is scheduled for Saturday,
              20 December. Book your teacher slot via the Parent Portal."
            </div>
            <div className="text-emerald-400 text-[10px] pt-1 flex justify-between">
              <span>Recipients: 1,286 Parents</span>
              <span className="font-bold">Delivered (100%)</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "transport",
      title: "Transport Management",
      shortLabel: "6. Transport",
      badge: "Fleet Logistics",
      icon: Bus,
      benefit: "Safeguards student transit with structured route rosters.",
      headline: "School Van Roster, Route Sequences & Driver Contact Records",
      bullets: [
        "Vehicle fleet records (Bus/Van registration, fitness certificates, road tax)",
        "Student route assignment with designated pickup and drop stops",
        "Driver and conductor credentials with emergency mobile contacts",
        "Monthly transport fee billing synchronized directly with fee challans",
      ],
      sampleUI: (
        <div className="bg-[#0A0F1E] text-white p-5 rounded-2xl border border-slate-800 space-y-2 text-xs font-mono shadow-xl">
          <div className="flex justify-between items-center border-b border-slate-800 pb-1 text-slate-400">
            <span>ROUTE 04 (GULSHAN - NORTH NAZIMABAD)</span>
            <span className="text-[#00D4FF]">VAN 14 SEATS</span>
          </div>
          <div className="space-y-1 text-[11px] text-slate-300">
            <div className="flex justify-between">
              <span>Driver:</span>
              <span className="text-white font-bold">
                Muhammad Rafiq (0321-9876543)
              </span>
            </div>
            <div className="flex justify-between">
              <span>Registered Students:</span>
              <span className="text-emerald-400 font-bold">
                14 / 14 (Full Capacity)
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "library",
      title: "Library Management",
      shortLabel: "7. Library",
      badge: "Resource Catalog",
      icon: Library,
      benefit: "Automates book lending and inventory loss recovery.",
      headline: "ISBN Book Catalog, Barcode Checkout & Overdue Fine Ledgers",
      bullets: [
        "Barcode book checkout and return with automated borrower due dates",
        "Accession number catalog with Dewey decimal classification",
        "Automated overdue fine calculation debited to student accounts",
        "Lost book replacement fee logging and inventory audit trail",
      ],
      sampleUI: (
        <div className="bg-[#0A0F1E] text-white p-5 rounded-2xl border border-slate-800 space-y-2 text-xs font-mono shadow-xl">
          <div className="flex justify-between border-b border-slate-800 pb-1 text-slate-400">
            <span>LIBRARY CIRCULATION DESK</span>
            <span className="text-emerald-400">SCANNER ACTIVE</span>
          </div>
          <div className="space-y-1 text-[11px] text-slate-300">
            <div className="flex justify-between">
              <span>Issued Book:</span>
              <span className="text-white">
                A Brief History of Time (Stephen Hawking)
              </span>
            </div>
            <div className="flex justify-between">
              <span>Borrower:</span>
              <span>Hamza Tariq (O-Level 10-A)</span>
            </div>
            <div className="flex justify-between text-amber-400">
              <span>Due Return Date:</span>
              <span>22 November 2026</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "staff",
      title: "User & Staff Management",
      shortLabel: "8. Staff & Roles",
      badge: "Governance",
      icon: Shield,
      benefit:
        "Enforces strict role-based access across academic and financial workflows.",
      headline: "Granular Role-Based Access Control (RBAC) & Teacher Workloads",
      bullets: [
        "Independent permissions for Directors, Principals, Accountants, and Teachers",
        "Teachers can only view and enter marks for their assigned classes",
        "Accountants have fee ledger access without ability to modify academic transcripts",
        "Staff attendance, leave approvals, and monthly salary payroll integration",
      ],
      sampleUI: (
        <div className="bg-[#0A0F1E] text-white p-5 rounded-2xl border border-slate-800 space-y-2 text-xs font-mono shadow-xl">
          <div className="flex justify-between border-b border-slate-800 pb-1 text-slate-400">
            <span>SECURITY PERMISSION MATRIX</span>
            <span className="text-emerald-400">STRICT RBAC</span>
          </div>
          <div className="space-y-1 text-[10px] text-slate-300">
            <div className="flex justify-between p-1 bg-slate-900 rounded">
              <span>Principal:</span>
              <span className="text-emerald-400">
                Full Academic & Admin Approval
              </span>
            </div>
            <div className="flex justify-between p-1 bg-slate-900 rounded">
              <span>Subject Teacher:</span>
              <span className="text-[#00D4FF]">
                Marks Entry for Assigned Classes Only
              </span>
            </div>
            <div className="flex justify-between p-1 bg-slate-900 rounded">
              <span>Accountant:</span>
              <span className="text-amber-400">
                Challan & Ledger Access (No Grade Edit)
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "accounting",
      title: "Accounting & Administration",
      shortLabel: "9. General Ledger",
      badge: "Audit Ready",
      icon: FileSpreadsheet,
      benefit:
        "Reconciles tuition income against operational campus expenditures.",
      headline:
        "Double-Entry Chart of Accounts, Campus Payroll & Financial Reports",
      bullets: [
        "School-specific Chart of Accounts (Fee Income, Teacher Salaries, Utilities, Lab Upgrades)",
        "Daily bank reconciliation comparing bank clearance files with cash receipts",
        "Profit & Loss statement by campus branch or school section",
        "Audit-ready general ledger logs compliant with corporate standards",
      ],
      sampleUI: (
        <div className="bg-[#0A0F1E] text-white p-5 rounded-2xl border border-slate-800 space-y-2 text-xs font-mono shadow-xl">
          <div className="flex justify-between border-b border-slate-800 pb-1 text-slate-400">
            <span>CAMPUS GENERAL LEDGER</span>
            <span className="text-emerald-400">DOUBLE ENTRY</span>
          </div>
          <div className="space-y-1 text-[11px] text-slate-300">
            <div className="flex justify-between">
              <span>Tuition Fee Receipts (Month):</span>
              <span className="text-emerald-400 font-bold">
                +Rs. 21,600,000
              </span>
            </div>
            <div className="flex justify-between">
              <span>Teacher Faculty Payroll:</span>
              <span className="text-rose-400 font-bold">-Rs. 11,200,000</span>
            </div>
            <div className="flex justify-between">
              <span>Campus Utilities & Maintenance:</span>
              <span className="text-rose-400 font-bold">-Rs. 2,400,000</span>
            </div>
            <div className="border-t border-slate-800 pt-1 flex justify-between font-bold text-white">
              <span>NET OPERATING SURPLUS:</span>
              <span className="text-[#00D4FF]">+Rs. 8,000,000</span>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const currentModule =
    modules.find((m) => m.id === activeModuleId) || modules[0]

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B5FFF]/10 border border-[#0B5FFF]/20 text-[#0B5FFF] text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            <span>Complete School Operations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0F1E] tracking-tight">
            Every Operational Workflow.{" "}
            <span className="text-[#0B5FFF]">Under One Connected Roof.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From automated 3-copy bank fee challans to biometric attendance and
            library book circulation, explore the 9 operational modules running
            daily campus administration.
          </p>
        </div>

        {/* Modular Navigation Pills */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-10 gap-2 scroll-container">
          {modules.map((m) => {
            const isSelected = activeModuleId === m.id
            const Icon = m.icon
            return (
              <button
                key={m.id}
                onClick={() => setActiveModuleId(m.id)}
                className={`px-3.5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? "bg-[#0B5FFF] text-white shadow-md shadow-[#0B5FFF]/25"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isSelected ? "text-white" : "text-[#0B5FFF]"
                  }`}
                />
                <span>{m.shortLabel}</span>
              </button>
            )
          })}
        </div>

        {/* Selected Module Detail Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-white border border-slate-200 text-xs font-bold text-slate-800 rounded-full shadow-2xs">
                  {currentModule.badge}
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  {currentModule.benefit}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0F1E] leading-snug">
                {currentModule.headline}
              </h3>

              <div className="space-y-2.5 pt-2">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-700 block">
                  Core In-System Capabilities:
                </span>
                <ul className="space-y-2">
                  {currentModule.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Screen Component */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-tr from-[#0B5FFF]/15 to-[#00D4FF]/15 rounded-3xl blur-lg opacity-70" />
                <div className="relative">{currentModule.sampleUI}</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── SCREENSHOT SLOT 03: 3-COPY BANK FEE CHALLAN SYSTEM ── */}
        <div className="mt-14 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#0B5FFF] block">
                Original Product Screenshot • Slot 03
              </span>
              <h3 className="text-xl font-bold text-[#0A0F1E]">
                CambridgeDesk • 3-Copy Automated Bank Fee Challan System
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500">
              Admin Replaceable Slot • 1600 × 900 (16:9)
            </span>
          </div>
          <ProductScreenshotFrame
            slot={{
              id: "cambridge-challan",
              slotNumber: "03",
              slotLabel: "Fee Challan & Banking System",
              title: "3-Copy Automated Bank Fee Challan Generation",
              subtitle: "Bank Copy, School Copy, Student Copy & Barcodes",
              dimensions: "1600 × 900 (16:9)",
              src: "/images/products/cambridge-challan.svg",
              altText:
                "CambridgeDesk 3-Copy Automated Bank Fee Challan Generator",
              caption:
                "Batch fee voucher generation with automatic sibling concessions, late payment fines, and direct bank reconciliation integration.",
              category: "Fee & Finance",
            }}
            variant="section"
          />
        </div>
      </div>
    </section>
  )
}
