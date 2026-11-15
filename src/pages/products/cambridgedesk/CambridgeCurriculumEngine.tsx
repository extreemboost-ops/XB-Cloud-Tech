import { useState } from "react"
import { BookOpen, CheckCircle2, ChevronRight, Info } from "lucide-react"

interface CurricularSample {
  id: string
  name: string
  code: string
  grade: string
  level: string
  topicsCount: number
  objectivesCount: number
  assessmentsCount: number
  sampleTopic: {
    unit: string
    title: string
    hours: number
    learningObjectives: string[]
    alignedAssessment: string
    examWeight: string
  }
}

const SAMPLE_SUBJECTS: CurricularSample[] = [
  {
    id: "maths",
    name: "Mathematics (Syllabus D)",
    code: "4024",
    grade: "O-Level (Grade 10)",
    level: "Secondary Cambridge Wing",
    topicsCount: 16,
    objectivesCount: 68,
    assessmentsCount: 8,
    sampleTopic: {
      unit: "Unit 3",
      title: "Algebraic Manipulation & Quadratic Equations",
      hours: 14,
      learningObjectives: [
        "Factorize quadratic expressions using grouping and difference of two squares.",
        "Solve quadratic equations using the quadratic formula with accuracy to 2 decimal places.",
        "Formulate and solve algebraic word problems involving rates and physical dimensions.",
      ],
      alignedAssessment: "Mid-Term Paper 1 (MCQ) & Paper 2 (Structured)",
      examWeight: "15% of Final Paper",
    },
  },
  {
    id: "physics",
    name: "Physics",
    code: "5054",
    grade: "O-Level (Grade 9)",
    level: "Secondary Cambridge Wing",
    topicsCount: 18,
    objectivesCount: 74,
    assessmentsCount: 10,
    sampleTopic: {
      unit: "Unit 4",
      title: "Kinematics, Dynamics & Momentum",
      hours: 12,
      learningObjectives: [
        "Distinguish between scalar and vector physical quantities with real examples.",
        "Calculate acceleration from the gradient of a speed-time graph.",
        "Apply Newton's Second Law (F = ma) to solve multi-stage vehicle motion.",
      ],
      alignedAssessment: "Terminal Theory Paper 2 & Alternative to Practical",
      examWeight: "18% of Final Paper",
    },
  },
  {
    id: "cs",
    name: "Computer Science",
    code: "2210",
    grade: "Grade 11 / Pre-A Level",
    level: "Senior Secondary",
    topicsCount: 12,
    objectivesCount: 52,
    assessmentsCount: 6,
    sampleTopic: {
      unit: "Unit 2",
      title: "Data Representation & Binary Hexadecimal Systems",
      hours: 10,
      learningObjectives: [
        "Convert between denary, binary, and hexadecimal numbering systems.",
        "Explain representation of ASCII text, bitmap graphics, and sound sampling.",
        "Perform two's complement binary addition and detect overflow errors.",
      ],
      alignedAssessment: "Paper 1 (Computer Systems Theory) Assessment",
      examWeight: "20% of Paper 1",
    },
  },
  {
    id: "english",
    name: "English Language",
    code: "1123",
    grade: "Grade 8 / Middle School",
    level: "Middle School Wing",
    topicsCount: 14,
    objectivesCount: 48,
    assessmentsCount: 8,
    sampleTopic: {
      unit: "Unit 2",
      title: "Directed Writing & Formal Correspondence",
      hours: 8,
      learningObjectives: [
        "Identify audience, tone, and formal structure in editorial journalism.",
        "Synthesize multiple factual viewpoints into a persuasive structured argument.",
        "Apply precise punctuation, varied sentence syntax, and formal sign-offs.",
      ],
      alignedAssessment: "Continuous Assessment Writing Portfolio #2",
      examWeight: "25% of Term 1 Mark",
    },
  },
]

export default function CambridgeCurriculumEngine() {
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>("maths")

  const currentSubject =
    SAMPLE_SUBJECTS.find((s) => s.id === selectedSubjectId) ||
    SAMPLE_SUBJECTS[0]

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/30 text-[#0B5FFF] text-xs font-semibold">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curricular Engine</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0F1E] tracking-tight">
            Structure Learning. Organize Curriculum.{" "}
            <span className="text-[#0B5FFF]">Track Academic Progress.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Eliminate disorganized syllabus spreadsheets. CambridgeDesk empowers
            academic coordinators to map syllabus objectives, weekly pacing, and
            assessment checkpoints in one connected hierarchy.
          </p>
        </div>

        {/* Academic Hierarchy Breadcrumb Bar */}
        <div className="max-w-4xl mx-auto mb-10 p-4 bg-white border border-slate-200 rounded-2xl shadow-xs">
          <div className="text-xs uppercase font-mono font-bold text-slate-500 mb-2">
            System Academic Hierarchy Architecture:
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700">
            <span className="px-2.5 py-1 bg-slate-100 rounded-md">
              Session 2026-2027
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="px-2.5 py-1 bg-slate-100 rounded-md">
              {currentSubject.grade}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="px-2.5 py-1 bg-[#0B5FFF]/10 text-[#0B5FFF] font-bold rounded-md">
              {currentSubject.name} ({currentSubject.code})
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="px-2.5 py-1 bg-slate-100 rounded-md">
              {currentSubject.sampleTopic.unit}
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="px-2.5 py-1 bg-emerald-50 text-emerald-800 rounded-md">
              Learning Outcomes
            </span>
          </div>
        </div>

        {/* Interactive Subject Switcher */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {SAMPLE_SUBJECTS.map((sub) => {
            const isSelected = selectedSubjectId === sub.id
            return (
              <button
                key={sub.id}
                onClick={() => setSelectedSubjectId(sub.id)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#0B5FFF] text-white border-[#0B5FFF] shadow-md shadow-[#0B5FFF]/20 ring-2 ring-[#0B5FFF]/20"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <div className="text-xs font-bold truncate">{sub.name}</div>
                <div
                  className={`text-[10px] font-mono mt-0.5 ${
                    isSelected ? "text-blue-100" : "text-slate-500"
                  }`}
                >
                  Code: {sub.code} • {sub.grade}
                </div>
              </button>
            )
          })}
        </div>

        {/* Selected Curricular Breakdown Workspace */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Breakdown Overview */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase font-mono tracking-wider font-semibold text-[#0B5FFF]">
                  {currentSubject.level}
                </span>
                <h3 className="text-2xl font-extrabold text-[#0A0F1E]">
                  {currentSubject.name} ({currentSubject.code})
                </h3>
                <p className="text-xs text-slate-500">
                  Curricular Blueprint for {currentSubject.grade}
                </p>
              </div>

              {/* Metrics Strip */}
              <div className="grid grid-cols-3 gap-2.5 text-center">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                  <span className="text-[10px] text-slate-500 block uppercase font-mono">
                    Planned Topics
                  </span>
                  <span className="text-lg font-bold text-[#0A0F1E] font-mono">
                    {currentSubject.topicsCount} Units
                  </span>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                  <span className="text-[10px] text-slate-500 block uppercase font-mono">
                    Target Outcomes
                  </span>
                  <span className="text-lg font-bold text-[#0B5FFF] font-mono">
                    {currentSubject.objectivesCount} Objectives
                  </span>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                  <span className="text-[10px] text-slate-500 block uppercase font-mono">
                    Assessments
                  </span>
                  <span className="text-lg font-bold text-emerald-600 font-mono">
                    {currentSubject.assessmentsCount} Tests
                  </span>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span>Syllabus Pacing Status:</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    On Schedule (Week 14)
                  </span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[88%]" />
                </div>
                <div className="text-[11px] text-slate-500 flex justify-between">
                  <span>Target: 85% by Term Break</span>
                  <span className="font-bold text-slate-700">
                    Actual: 88% Complete
                  </span>
                </div>
              </div>
            </div>

            {/* Right Topic Details & Learning Objectives */}
            <div className="lg:col-span-6 bg-[#0A0F1E] text-white rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                <span className="text-[#00D4FF] font-bold">
                  {currentSubject.sampleTopic.unit}:{" "}
                  {currentSubject.sampleTopic.title}
                </span>
                <span className="text-[10px] text-slate-400">
                  {currentSubject.sampleTopic.hours} Teaching Hours
                </span>
              </div>

              {/* Learning Objectives List */}
              <div className="space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-slate-400 block">
                  Mandatory Learning Objectives:
                </span>
                <ul className="space-y-2 text-slate-300 text-[11px]">
                  {currentSubject.sampleTopic.learningObjectives.map(
                    (obj, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{obj}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Aligned Assessment & Exam Weight */}
              <div className="pt-3 border-t border-slate-800 space-y-1.5 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-slate-400">Aligned Evaluation:</span>
                  <span className="text-white font-bold">
                    {currentSubject.sampleTopic.alignedAssessment}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Examination Weightage:</span>
                  <span className="text-[#00D4FF] font-bold">
                    {currentSubject.sampleTopic.examWeight}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 font-mono inline-flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>
              Illustrative product preview. CambridgeDesk enables schools to
              configure their own curriculum, topic sequences, and learning
              outcomes in client-side settings.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
