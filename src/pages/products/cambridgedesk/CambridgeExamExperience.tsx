import { useState } from "react"
import { Award, CheckCircle2, Info } from "lucide-react"

interface SubjectScore {
  subject: string
  code: string
  maxMarks: number
  obtained: number
  percentage: number
  grade: string
  gpa: number
}

const SAMPLE_STUDENT_MARKS: SubjectScore[] = [
  {
    subject: "Mathematics (Syllabus D)",
    code: "4024",
    maxMarks: 100,
    obtained: 94,
    percentage: 94,
    grade: "A*",
    gpa: 4.0,
  },
  {
    subject: "Physics",
    code: "5054",
    maxMarks: 100,
    obtained: 88,
    percentage: 88,
    grade: "A",
    gpa: 3.7,
  },
  {
    subject: "Chemistry",
    code: "5070",
    maxMarks: 100,
    obtained: 91,
    percentage: 91,
    grade: "A*",
    gpa: 4.0,
  },
  {
    subject: "Computer Science",
    code: "2210",
    maxMarks: 100,
    obtained: 86,
    percentage: 86,
    grade: "A",
    gpa: 3.7,
  },
  {
    subject: "English Language",
    code: "1123",
    maxMarks: 100,
    obtained: 82,
    percentage: 82,
    grade: "B",
    gpa: 3.0,
  },
]

export default function CambridgeExamExperience() {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(3)

  const workflowSteps = [
    { step: "01", label: "Assessment Setup" },
    { step: "02", label: "Candidate Seating" },
    { step: "03", label: "Marks Entry" },
    { step: "04", label: "Result Processing" },
    { step: "05", label: "Report Card Dispatch" },
  ]

  // Calculate totals
  const totalMax = SAMPLE_STUDENT_MARKS.reduce(
    (acc, curr) => acc + curr.maxMarks,
    0,
  )
  const totalObtained = SAMPLE_STUDENT_MARKS.reduce(
    (acc, curr) => acc + curr.obtained,
    0,
  )
  const overallPercentage = ((totalObtained / totalMax) * 100).toFixed(1)
  const averageGpa = (
    SAMPLE_STUDENT_MARKS.reduce((acc, curr) => acc + curr.gpa, 0) /
    SAMPLE_STUDENT_MARKS.length
  ).toFixed(2)

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            <span>Integrated Examination Engine</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0F1E] tracking-tight">
            Examinations, Assessments & Academic Performance —{" "}
            <span className="text-[#0B5FFF]">Connected.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Eliminate error-prone spreadsheets. CambridgeDesk compiles subject
            components, applies Cambridge grade boundaries or standard Board GPA
            scales, and prints verified multi-subject transcripts in one click.
          </p>
        </div>

        {/* Examination Workflow Stepper */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {workflowSteps.map((wf, idx) => {
              const isActive = activeWorkflowStep === idx
              const isPast = activeWorkflowStep > idx
              return (
                <button
                  key={wf.step}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#0B5FFF] text-white border-[#0B5FFF] shadow-md shadow-[#0B5FFF]/20 ring-2 ring-[#0B5FFF]/20"
                      : isPast
                        ? "bg-emerald-50 text-slate-800 border-emerald-200"
                        : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                    <span>Step {wf.step}</span>
                    {isPast && (
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    )}
                  </div>
                  <div className="text-xs font-bold leading-tight">
                    {wf.label}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Tabulated Marksheet Simulation Card */}
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl space-y-6">
          {/* Header Strip */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-200 pb-5">
            <div>
              <span className="text-xs uppercase font-mono font-bold text-[#0B5FFF] tracking-wider">
                Official Candidate Transcript Simulation
              </span>
              <h3 className="text-xl font-extrabold text-[#0A0F1E]">
                Hamza Tariq • Candidate #PK-408 (O-Level 10-A)
              </h3>
              <p className="text-xs text-slate-500">
                Examination Series: Mid-Term Examination 2026-2027 • Grading
                Scheme: Cambridge O-Level Standard
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-emerald-100 border border-emerald-200 text-emerald-800 rounded-lg text-xs font-bold font-mono">
                Overall GPA: {averageGpa} / 4.0
              </span>
            </div>
          </div>

          {/* Marksheet Data Table */}
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-slate-100/80 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3 px-4">Subject</th>
                    <th className="py-3 px-4">Code</th>
                    <th className="py-3 px-4 text-center">Max</th>
                    <th className="py-3 px-4 text-center">Obtained</th>
                    <th className="py-3 px-4 text-center">Percentage</th>
                    <th className="py-3 px-4 text-center">Grade</th>
                    <th className="py-3 px-4 text-center">GPA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {SAMPLE_STUDENT_MARKS.map((item, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/80 transition-colors"
                    >
                      <td className="py-3 px-4 font-bold text-slate-900">
                        {item.subject}
                      </td>
                      <td className="py-3 px-4 text-slate-500">{item.code}</td>
                      <td className="py-3 px-4 text-center text-slate-500">
                        {item.maxMarks}
                      </td>
                      <td className="py-3 px-4 text-center font-bold text-slate-900">
                        {item.obtained}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {item.percentage}%
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`px-2 py-0.5 rounded font-bold text-xs ${
                            item.grade === "A*"
                              ? "bg-purple-100 text-purple-800"
                              : item.grade === "A"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {item.grade}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center font-bold text-slate-700">
                        {item.gpa.toFixed(1)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-slate-50 border-t border-slate-200 font-bold text-xs text-slate-900">
                  <tr>
                    <td colSpan={2} className="py-3 px-4">
                      TOTAL SUMMARY:
                    </td>
                    <td className="py-3 px-4 text-center text-slate-600">
                      {totalMax}
                    </td>
                    <td className="py-3 px-4 text-center text-emerald-600">
                      {totalObtained}
                    </td>
                    <td className="py-3 px-4 text-center text-[#0B5FFF]">
                      {overallPercentage}%
                    </td>
                    <td className="py-3 px-4 text-center text-purple-700">
                      PASS (A)
                    </td>
                    <td className="py-3 px-4 text-center text-emerald-700">
                      {averageGpa}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Bottom Analytics & Verification */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl text-center">
              <span className="text-[10px] text-slate-400 uppercase font-mono block">
                Class Position
              </span>
              <span className="text-xl font-bold font-mono text-[#0B5FFF]">
                1st of 28
              </span>
            </div>
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl text-center">
              <span className="text-[10px] text-slate-400 uppercase font-mono block">
                Class Mean Average
              </span>
              <span className="text-xl font-bold font-mono text-slate-800">
                76.4%
              </span>
            </div>
            <div className="p-3.5 bg-white border border-slate-200 rounded-xl text-center">
              <span className="text-[10px] text-slate-400 uppercase font-mono block">
                Standard Deviation
              </span>
              <span className="text-xl font-bold font-mono text-emerald-600">
                6.8% (Tight)
              </span>
            </div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500 font-mono inline-flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>
              Illustrative transcript simulation. CambridgeDesk supports
              arbitrary custom grade boundaries, percentage GPA scales, and
              qualitative teacher remarks.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
