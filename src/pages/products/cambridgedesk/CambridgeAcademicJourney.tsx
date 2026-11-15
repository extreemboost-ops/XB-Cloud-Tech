import { useState } from "react"
import {
  BarChart3,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react"

interface JourneyStage {
  step: string
  title: string
  subtitle: string
  responsible: string
  description: string
  systemOutcome: string
  metricLabel: string
  metricValue: string
  terminalPreview: React.ReactNode
}

export default function CambridgeAcademicJourney() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0)

  const stages: JourneyStage[] = [
    {
      step: "01",
      title: "Organize Academic Structure",
      subtitle: "Session Calendar & Class Rosters",
      responsible: "Academic Registrar & Section Heads",
      description:
        "Initialize the new academic session, configure 2-term or 3-term calendars, assign class sections, and allocate subject teachers with strict period limits to prevent burnout.",
      systemOutcome:
        "All 1,286 student records mapped into 4 school sections and 46 class sections.",
      metricLabel: "Setup Time",
      metricValue: "1-Day Initialization",
      terminalPreview: (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-400">
            <span>Session Architecture Log</span>
            <span className="text-emerald-400">SESSION 2026-2027</span>
          </div>
          <div className="space-y-1.5 text-slate-300">
            <div className="flex justify-between">
              <span>School Wings Active:</span>
              <span className="text-white font-bold">
                Junior, Middle, O-Level & A-Level
              </span>
            </div>
            <div className="flex justify-between">
              <span>Timetable Clashes:</span>
              <span className="text-emerald-400 font-bold">
                0 Clashes Detected
              </span>
            </div>
            <div className="flex justify-between">
              <span>Class Room Assignments:</span>
              <span className="text-[#00D4FF]">46 Classrooms Calibrated</span>
            </div>
          </div>
          <div className="p-2 bg-emerald-950/60 border border-emerald-800/80 rounded text-emerald-300 text-[11px]">
            Faculty workload matrices verified across all 56 educators.
          </div>
        </div>
      ),
    },
    {
      step: "02",
      title: "Configure Curriculum",
      subtitle: "Syllabus Breakdown & Weekly Targets",
      responsible: "Academic Coordinators & HODs",
      description:
        "Break syllabus requirements into weekly teaching objectives. Attach digital lesson plans, lecture worksheets, and lab practical protocols ahead of instructional delivery.",
      systemOutcome:
        "Weekly teaching roadmap locked with automatic completion audit flags.",
      metricLabel: "Curriculum Health",
      metricValue: "100% Pacing Alignment",
      terminalPreview: (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-400">
            <span>Syllabus Pacing Registry</span>
            <span className="text-[#00D4FF]">WEEK 14 ACTIVE</span>
          </div>
          <div className="space-y-1.5 text-slate-300">
            <div className="flex justify-between">
              <span>Syllabus Units Configured:</span>
              <span className="text-white font-bold">
                18 Core Subjects Mapped
              </span>
            </div>
            <div className="flex justify-between">
              <span>Learning Outcomes Tagged:</span>
              <span className="text-emerald-400 font-bold">
                342 Measurable Competencies
              </span>
            </div>
            <div className="flex justify-between">
              <span>Lesson Plans Submitted:</span>
              <span className="text-[#00D4FF]">
                54 of 54 Teachers On Schedule
              </span>
            </div>
          </div>
          <div className="p-2 bg-slate-800 rounded text-slate-300 text-[11px]">
            Mid-term syllabus coverage milestone target met across all grades.
          </div>
        </div>
      ),
    },
    {
      step: "03",
      title: "Conduct Assessments",
      subtitle: "Formative Quizzes & Periodic Tests",
      responsible: "Subject Teachers & Lab Instructors",
      description:
        "Execute weekly quizzes, homework portfolios, and lab evaluations. Marks enter directly into the continuous assessment gradebook with weighted percentage contributions.",
      systemOutcome:
        "Real-time identification of students requiring targeted academic intervention.",
      metricLabel: "Formative Velocity",
      metricValue: "Real-Time Tracking",
      terminalPreview: (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-400">
            <span>Continuous Gradebook Feed</span>
            <span className="text-emerald-400">WEIGHTED SCORING</span>
          </div>
          <div className="space-y-1.5 text-slate-300">
            <div className="flex justify-between">
              <span>Weekly Quizzes Recorded:</span>
              <span className="text-white font-bold">
                184 Assessment Events
              </span>
            </div>
            <div className="flex justify-between">
              <span>Marks Entry Audit Status:</span>
              <span className="text-emerald-400 font-bold">
                Zero Missing Entries
              </span>
            </div>
            <div className="flex justify-between">
              <span>Parent Notification Feed:</span>
              <span className="text-[#00D4FF]">Pushed to Mobile App</span>
            </div>
          </div>
          <div className="p-2 bg-slate-800 rounded text-slate-300 text-[11px]">
            Continuous assessment marks locked before terminal series opening.
          </div>
        </div>
      ),
    },
    {
      step: "04",
      title: "Manage Examinations",
      subtitle: "Tabulation & Cambridge Grading Rules",
      responsible: "Controller of Examinations",
      description:
        "Conduct terminal exam series. The examination engine aggregates continuous marks and exam papers, applies Cambridge grade thresholds (A*, A, B, C, D, E, U), and locks marks.",
      systemOutcome:
        "Automated, tamper-proof GPA calculation with zero spreadsheet rounding errors.",
      metricLabel: "Audit Security",
      metricValue: "100% Locked Formula",
      terminalPreview: (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-400">
            <span>Examination Tabulation Engine</span>
            <span className="text-emerald-400">STATUS: LOCKED</span>
          </div>
          <div className="space-y-1.5 text-slate-300">
            <div className="flex justify-between">
              <span>Total Candidates Examined:</span>
              <span className="text-white font-bold">1,286 Candidates</span>
            </div>
            <div className="flex justify-between">
              <span>Threshold Standard Applied:</span>
              <span className="text-[#00D4FF]">
                Cambridge O/A-Level Curricular Standard
              </span>
            </div>
            <div className="flex justify-between">
              <span>Grade Moderation Review:</span>
              <span className="text-emerald-400 font-bold">
                Verified by Principal
              </span>
            </div>
          </div>
          <div className="p-2 bg-emerald-950/60 border border-emerald-800/80 rounded text-emerald-300 text-[11px]">
            Official transcript generation ready for student report
            distribution.
          </div>
        </div>
      ),
    },
    {
      step: "05",
      title: "Analyze Student Performance",
      subtitle: "Report Cards & Parent Distribution",
      responsible: "Principal & Academic Administration",
      description:
        "Publish official digital report cards with verification QR codes, teacher qualitative remarks, and cohort percentile ranks. Parents access transcripts directly from the portal.",
      systemOutcome:
        "Transparent, multi-year longitudinal student transcripts ready for graduation.",
      metricLabel: "Reporting Turnaround",
      metricValue: "Instant Batch PDF",
      terminalPreview: (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex justify-between border-b border-slate-800 pb-2 text-slate-400">
            <span>Report Card Dispatch Console</span>
            <span className="text-emerald-400">100% COMPILED</span>
          </div>
          <div className="space-y-1.5 text-slate-300">
            <div className="flex justify-between">
              <span>Batch PDF Output:</span>
              <span className="text-white font-bold">
                1,286 Student Report Cards
              </span>
            </div>
            <div className="flex justify-between">
              <span>Digital Portal Access:</span>
              <span className="text-emerald-400 font-bold">
                Enabled for Guardians
              </span>
            </div>
            <div className="flex justify-between">
              <span>Parent-Teacher Meeting (PTM):</span>
              <span className="text-[#00D4FF]">Schedule Published</span>
            </div>
          </div>
          <div className="p-2 bg-blue-950/60 border border-blue-800/80 rounded text-blue-300 text-[11px]">
            Term 1 successfully closed. Academic history archived into permanent
            registry.
          </div>
        </div>
      ),
    },
  ]

  const activeStage = stages[activeStepIndex]

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B5FFF]/10 border border-[#0B5FFF]/20 text-[#0B5FFF] text-xs font-semibold">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Structured Academic Progression</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0F1E] tracking-tight">
            From Academic Planning to{" "}
            <span className="text-[#0B5FFF]">Student Performance.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Follow the 5-stage progression of how CambridgeDesk connects
            curriculum planning, classroom pacing, terminal examinations, and
            longitudinal student transcripts.
          </p>
        </div>

        {/* 5-Stage Stepper Buttons */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {stages.map((stage, idx) => {
              const isActive = activeStepIndex === idx
              const isPast = activeStepIndex > idx
              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all relative overflow-hidden cursor-pointer ${
                    isActive
                      ? "bg-[#0B5FFF] text-white border-[#0B5FFF] shadow-lg shadow-[#0B5FFF]/20 ring-2 ring-[#0B5FFF]/30"
                      : isPast
                        ? "bg-emerald-50/60 border-emerald-200 text-slate-800 hover:bg-emerald-50"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isActive
                          ? "bg-white/20 text-white"
                          : isPast
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      Stage {stage.step}
                    </span>
                    {isPast && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    )}
                  </div>
                  <div
                    className={`text-sm font-bold leading-tight ${
                      isActive ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {stage.title}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Active Stage Showcase Workspace */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold text-[#0B5FFF] font-mono">
                  {activeStage.step}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0A0F1E]">
                    {activeStage.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-[#0B5FFF]">
                    {activeStage.subtitle}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block mb-1">
                    Designated Stakeholders:
                  </span>
                  <span className="text-sm font-semibold text-slate-800 bg-white border border-slate-200 px-3 py-1 rounded-lg inline-block">
                    {activeStage.responsible}
                  </span>
                </div>

                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block mb-1">
                    System Execution Workflow:
                  </span>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {activeStage.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block">
                      Institutional Outcome:
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5 mt-0.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      {activeStage.systemOutcome}
                    </span>
                  </div>

                  <div className="bg-white border border-slate-200 px-3.5 py-2 rounded-xl text-right">
                    <span className="text-[10px] text-slate-400 block uppercase font-mono">
                      {activeStage.metricLabel}
                    </span>
                    <span className="text-sm font-mono font-bold text-[#0B5FFF]">
                      {activeStage.metricValue}
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() =>
                    setActiveStepIndex((prev) => Math.max(0, prev - 1))
                  }
                  className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-300 text-slate-700 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  Previous Stage
                </button>
                <button
                  disabled={activeStepIndex === stages.length - 1}
                  onClick={() =>
                    setActiveStepIndex((prev) =>
                      Math.min(stages.length - 1, prev + 1),
                    )
                  }
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-[#0B5FFF] text-white hover:bg-[#094ccc] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Screen Snippet */}
            <div className="lg:col-span-5">
              <div className="bg-[#0A0F1E] rounded-2xl border border-slate-800 p-5 shadow-2xl relative overflow-hidden">
                <div className="relative">{activeStage.terminalPreview}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
