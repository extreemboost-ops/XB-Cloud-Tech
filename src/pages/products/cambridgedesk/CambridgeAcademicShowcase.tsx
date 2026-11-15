import { useState } from "react"
import {
  Calendar,
  Layers,
  BookOpen,
  GraduationCap,
  Target,
  FileCheck,
  Award,
  FileSpreadsheet,
  CheckCircle2,
  ChevronRight,
  Info,
} from "lucide-react"

interface AcademicNode {
  id: string
  step: string
  title: string
  subtitle: string
  icon: typeof Calendar
  description: string
  inSystemRole: string
  deliverables: string[]
  sampleData: React.ReactNode
}

export default function CambridgeAcademicShowcase() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("academic-year")

  const nodes: AcademicNode[] = [
    {
      id: "academic-year",
      step: "01",
      title: "Academic Year",
      subtitle: "Term & Session Calendar Framework",
      icon: Calendar,
      description:
        "Defines the institution's temporal boundary: start/end dates, terms (Term 1, Term 2, Final Term), gazetted holidays, teaching week counts, and examination windows.",
      inSystemRole: "Academic Director & Registrar",
      deliverables: [
        "Configurable 2-term or 3-term academic calendars",
        "Instructional day counters with working day targets",
        "Automated session promotion rules with archive preservation",
      ],
      sampleData: (
        <div className="space-y-2 text-xs font-mono">
          <div className="flex justify-between border-b border-slate-800 pb-1 text-slate-400">
            <span>Session: 2026-2027</span>
            <span className="text-emerald-400">ACTIVE SESSION</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Term 1 (Mid-Year):</span>
            <span className="text-white">Aug 15 - Dec 22 (18 Weeks)</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Term 2 (Final):</span>
            <span className="text-white">Jan 10 - Jun 15 (22 Weeks)</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Instructional Target:</span>
            <span className="text-[#00D4FF]">194 Working Days</span>
          </div>
        </div>
      ),
    },
    {
      id: "school-sections",
      step: "02",
      title: "School Sections",
      subtitle: "Early Years, Primary, Secondary & College",
      icon: Layers,
      description:
        "Partition your school into operational wings (Junior School, Middle School, O-Level Wing, A-Level College) with independent grading policies and vice-principal oversight.",
      inSystemRole: "Section Heads & Vice Principals",
      deliverables: [
        "Independent section-level grade weighting schemes",
        "Dedicated timetable matrices for primary vs secondary wings",
        "Disciplinary and pastoral care escalation channels",
      ],
      sampleData: (
        <div className="space-y-2 text-xs font-mono">
          <div className="flex justify-between border-b border-slate-800 pb-1 text-slate-400">
            <span>Active Campus Wings</span>
            <span className="text-[#00D4FF]">4 SECTIONS</span>
          </div>
          <div className="bg-slate-800/80 p-2 rounded flex justify-between text-slate-200">
            <span>Junior School (Early Years - Grade 5)</span>
            <span className="text-emerald-400 font-bold">480 Students</span>
          </div>
          <div className="bg-slate-800/80 p-2 rounded flex justify-between text-slate-200">
            <span>Middle School (Grade 6 - Grade 8)</span>
            <span className="text-emerald-400 font-bold">360 Students</span>
          </div>
          <div className="bg-slate-800/80 p-2 rounded flex justify-between text-slate-200">
            <span>Senior Cambridge Wing (O/A Levels)</span>
            <span className="text-emerald-400 font-bold">446 Students</span>
          </div>
        </div>
      ),
    },
    {
      id: "classes-grades",
      step: "03",
      title: "Classes & Grades",
      subtitle: "Section Roster & Class Teacher Allocation",
      icon: GraduationCap,
      description:
        "Structure classes (e.g. Grade 9-A, Grade 9-B, O-Level 10-Science) with assigned class teachers, maximum class size caps, and student demographic rolls.",
      inSystemRole: "Registrar & Class Mentors",
      deliverables: [
        "Dynamic student roll lists with photo identification",
        "Class teacher pastoral dashboard and attendance logs",
        "Automated class capacity enforcement to prevent overcrowding",
      ],
      sampleData: (
        <div className="space-y-2 text-xs font-mono">
          <div className="flex justify-between border-b border-slate-800 pb-1 text-slate-400">
            <span>Class: O-Level Grade 10-A</span>
            <span className="text-white">Room: Science Block 204</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Class Teacher:</span>
            <span className="text-white font-bold">Dr. Asif Mehmood</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Enrolled Students:</span>
            <span className="text-emerald-400 font-bold">28 / 30 Capacity</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Average Attendance:</span>
            <span className="text-[#00D4FF]">97.2% This Term</span>
          </div>
        </div>
      ),
    },
    {
      id: "subjects",
      step: "04",
      title: "Subjects",
      subtitle: "Curricular Subjects & Course Codes",
      icon: BookOpen,
      description:
        "Define subjects (Mathematics Syllabus D, Physics 5054, Chemistry 5070, English Language 1123, Pakistan Studies 2059) with credit hours, theory/practical breakdown, and syllabus codes.",
      inSystemRole: "Academic Dean & Heads of Department",
      deliverables: [
        "Theory, practical, and coursework component breakdown",
        "Elective subject bundles and student course selection gates",
        "HOD departmental syllabus review checkpoints",
      ],
      sampleData: (
        <div className="space-y-2 text-xs font-mono">
          <div className="flex justify-between border-b border-slate-800 pb-1 text-slate-400">
            <span>Subject: Physics (Code: 5054)</span>
            <span className="text-[#00D4FF]">O-Level Compulsory</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Component 1 (MCQ Theory):</span>
            <span className="text-white">40 Marks (30% Weight)</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Component 2 (Structured Theory):</span>
            <span className="text-white">80 Marks (50% Weight)</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Component 3 (Practical Alternative):</span>
            <span className="text-white">40 Marks (20% Weight)</span>
          </div>
        </div>
      ),
    },
    {
      id: "curriculum",
      step: "05",
      title: "Curriculum & Units",
      subtitle: "Weekly Syllabus Breakdown & Chapter Units",
      icon: Layers,
      description:
        "Break subjects into structured chapters, learning units, and instructional weeks, ensuring all teachers complete syllabus milestones ahead of terminal assessments.",
      inSystemRole: "Subject Teachers & Coordinators",
      deliverables: [
        "Week-by-week topic pacing calendars",
        "Resource attachment (PDF worksheets, lecture presentations)",
        "Syllabus completion audit dashboards for Principals",
      ],
      sampleData: (
        <div className="space-y-2 text-xs font-mono">
          <div className="flex justify-between border-b border-slate-800 pb-1 text-slate-400">
            <span>Unit 4: Kinematics & Dynamics</span>
            <span className="text-emerald-400">WEEK 14 - ON TRACK</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Core Topic 4.1:</span>
            <span>Speed, Velocity & Acceleration Graphs</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Core Topic 4.2:</span>
            <span>Newton's Laws of Motion & Momentum</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Allocated Teaching Hours:</span>
            <span className="text-[#00D4FF]">
              8 Lecture Periods + 2 Lab Periods
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "learning-outcomes",
      step: "06",
      title: "Learning Outcomes",
      subtitle: "Competency Statements & Bloom's Taxonomy",
      icon: Target,
      description:
        "Tag each unit with measurable learning outcomes (Recall, Understand, Apply, Analyze), allowing teachers to gauge conceptual mastery before terminal examinations.",
      inSystemRole: "Curriculum Specialists & Teachers",
      deliverables: [
        "Competency-based formative assessment alignment",
        "Remedial student tagging for unmastered outcomes",
        "Outcome mastery heatmaps by class and section",
      ],
      sampleData: (
        <div className="space-y-2 text-xs font-mono">
          <div className="flex justify-between border-b border-slate-800 pb-1 text-slate-400">
            <span>Learning Outcome Mastery Target</span>
            <span className="text-amber-400">BLOOM LEVEL: APPLY</span>
          </div>
          <div className="p-2 bg-slate-800/80 rounded text-slate-200 text-[11px]">
            "Students can calculate acceleration from the gradient of a
            speed-time graph with 85%+ accuracy."
          </div>
          <div className="flex justify-between text-slate-300 pt-1">
            <span>Class Mastery Status:</span>
            <span className="text-emerald-400 font-bold">
              24 / 28 Students Mastered (86%)
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "assessments",
      step: "07",
      title: "Assessments & Quizzes",
      subtitle: "Formative Tests, Homework & Term Papers",
      icon: FileCheck,
      description:
        "Schedule continuous formative assessments, weekly quizzes, and assignments that feed into the continuous assessment gradebook with weighted scoring.",
      inSystemRole: "Teachers & Examination Committee",
      deliverables: [
        "Weighted marks calculation (e.g. 20% Formative + 80% Summative)",
        "Digital marks entry portal with deadline locking",
        "Automated parent notification of test scores",
      ],
      sampleData: (
        <div className="space-y-2 text-xs font-mono">
          <div className="flex justify-between border-b border-slate-800 pb-1 text-slate-400">
            <span>Assessment: Quiz #3 (Kinematics)</span>
            <span className="text-emerald-400">MARKS LOCKED</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Total Marks:</span>
            <span>25 Marks (Weight: 5% Term 1)</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Class Average:</span>
            <span className="text-[#00D4FF] font-bold">21.4 / 25 (85.6%)</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Highest Mark:</span>
            <span className="text-emerald-400 font-bold">
              25 / 25 (Hamza Tariq)
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "examination-results",
      step: "08",
      title: "Examination Results",
      subtitle: "Cambridge Thresholds & GPA Tabulation",
      icon: Award,
      description:
        "Process term examinations with standardized grade thresholds (A*, A, B, C, D, E, U) or standard Board GPA scales, automatically calculating percentile ranks.",
      inSystemRole: "Controller of Examinations",
      deliverables: [
        "Configurable grade boundaries and percentile scales",
        "Automated grace marks and moderation audit logs",
        "Batch marksheet compilation with zero spreadsheet formula errors",
      ],
      sampleData: (
        <div className="space-y-2 text-xs font-mono">
          <div className="flex justify-between border-b border-slate-800 pb-1 text-slate-400">
            <span>Mid-Term Examination Series</span>
            <span className="text-emerald-400">TABULATION COMPLETE</span>
          </div>
          <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
            <div className="bg-slate-800 p-1 rounded">
              <span className="block text-slate-400">A* (&gt;90)</span>
              <span className="font-bold text-emerald-400">8 Students</span>
            </div>
            <div className="bg-slate-800 p-1 rounded">
              <span className="block text-slate-400">A (80-89)</span>
              <span className="font-bold text-[#00D4FF]">12 Students</span>
            </div>
            <div className="bg-slate-800 p-1 rounded">
              <span className="block text-slate-400">B (70-79)</span>
              <span className="font-bold text-amber-400">6 Students</span>
            </div>
            <div className="bg-slate-800 p-1 rounded">
              <span className="block text-slate-400">C (60-69)</span>
              <span className="font-bold text-slate-300">2 Students</span>
            </div>
          </div>
          <div className="flex justify-between text-slate-300 pt-1">
            <span>Pass Percentage:</span>
            <span className="text-emerald-400 font-bold">
              100% (28/28 Passed)
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "academic-reports",
      step: "09",
      title: "Academic Reports",
      subtitle: "Comprehensive Report Cards & Transcripts",
      icon: FileSpreadsheet,
      description:
        "Generate multi-page branded student report cards featuring subject-wise grades, teacher remarks, attendance percentages, and historical progress charts.",
      inSystemRole: "Principal & Academic Administration",
      deliverables: [
        "Official 1-click batch PDF report card generation",
        "Teacher qualitative narrative remarks with spellcheck",
        "Parent portal transcript access with tamper-proof verification QR",
      ],
      sampleData: (
        <div className="space-y-2 text-xs font-mono">
          <div className="flex justify-between border-b border-slate-800 pb-1 text-slate-400">
            <span>Student Official Report Card</span>
            <span className="text-emerald-400">READY TO PRINT / PDF</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Student:</span>
            <span className="text-white font-bold">
              Hamza Tariq (Roll #10408)
            </span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Overall Term Position:</span>
            <span className="text-[#00D4FF] font-bold">
              1st in Class (GPA: 4.0 / 4.0)
            </span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Principal's Remark:</span>
            <span className="text-slate-200">
              "Exceptional academic consistency."
            </span>
          </div>
        </div>
      ),
    },
  ]

  const selectedNode = nodes.find((n) => n.id === selectedNodeId) || nodes[0]

  return (
    <section
      id="academic-showcase"
      className="py-20 md:py-28 bg-white border-b border-slate-200"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B5FFF]/10 border border-[#0B5FFF]/20 text-[#0B5FFF] text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0F1E] tracking-tight">
            Academic Management{" "}
            <span className="text-[#0B5FFF]">
              Beyond Traditional School Administration.
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Unlike basic fee-and-attendance systems, CambridgeDesk connects
            academic frameworks, curriculum pacing, assessments, grading
            thresholds, and term report cards into an integrated learning
            ecosystem.
          </p>
        </div>

        {/* 9-Stage Connected Horizontal Pipeline Selector */}
        <div className="mb-10 overflow-x-auto pb-4 scroll-container">
          <div className="flex items-center min-w-[900px] gap-2 p-1.5 bg-slate-100/80 rounded-2xl border border-slate-200">
            {nodes.map((node, idx) => {
              const isSelected = selectedNodeId === node.id
              const Icon = node.icon
              return (
                <div key={node.id} className="flex items-center">
                  <button
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                      isSelected
                        ? "bg-[#0B5FFF] text-white shadow-md shadow-[#0B5FFF]/25"
                        : "text-slate-700 hover:text-slate-900 hover:bg-white"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>
                      {node.step}. {node.title}
                    </span>
                  </button>
                  {idx < nodes.length - 1 && (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 mx-1 shrink-0" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Active Stage Interactive Showcase Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold text-[#0B5FFF] font-mono">
                  {selectedNode.step}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0A0F1E]">
                    {selectedNode.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#0B5FFF]">
                    {selectedNode.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {selectedNode.description}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase font-bold text-slate-500">
                    Primary Responsibility:
                  </span>
                  <span className="text-xs font-bold text-slate-800 bg-white border border-slate-200 px-2.5 py-1 rounded-md">
                    {selectedNode.inSystemRole}
                  </span>
                </div>

                <div className="space-y-2 pt-1">
                  <span className="text-xs uppercase font-bold text-slate-700 block">
                    System Architecture Capabilities:
                  </span>
                  <ul className="space-y-2">
                    {selectedNode.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Screen Simulation */}
            <div className="lg:col-span-5">
              <div className="bg-[#0A0F1E] rounded-2xl border border-slate-800 p-5 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3 text-xs text-slate-400 font-mono">
                  <span>CambridgeDesk • Module View</span>
                  <span className="text-[#00D4FF]">
                    STAGE {selectedNode.step}/09
                  </span>
                </div>
                {selectedNode.sampleData}
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 font-mono inline-flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>
              CambridgeDesk provides specialized curriculum frameworks
              supporting Cambridge O/A-Levels and local boards; this does not
              imply official curriculum-body certification.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
