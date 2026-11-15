import { GraduationCap, Globe, Building, Layers } from "lucide-react"

export default function CambridgeUseCases() {
  const useCases = [
    {
      title: "Cambridge Curriculum Academies",
      level: "O/A-Level Senior Wings",
      icon: GraduationCap,
      challenge:
        "Managing component weightages across theory, MCQs, and practical alternatives while standardizing grade boundaries (A*–U) without manual Excel formula errors.",
      solution:
        "Automated Cambridge grading scheme calculations, course code mapping (4024, 5054, etc.), candidate roll number slip printing, and GPA conversion.",
      keyModules: [
        "Examination Engine",
        "Curriculum Pacing",
        "Candidate Transcripts",
      ],
    },
    {
      title: "Multi-Campus School Networks",
      level: "Centralized Head Offices",
      icon: Building,
      challenge:
        "Head offices lack visibility into fee collections, faculty absenteeism, and student attrition across multiple branches and city campuses.",
      solution:
        "Centralized Director dashboard with tenant-isolated branch databases, consolidated tuition revenue reporting, and standardized academic policies.",
      keyModules: [
        "Executive Multi-Branch Desk",
        "Centralized Fee Clearing",
        "Role Permissions",
      ],
    },
    {
      title: "Private Primary & Secondary Schools",
      level: "Pre-K to Matriculation / Middle",
      icon: Layers,
      challenge:
        "Manual handwriting of 3-copy bank fee challans every month wastes weeks of staff time, while unannounced absences cause parental friction.",
      solution:
        "1-click batch generation of 3-copy bank vouchers with dynamic student barcodes and automated biometric turnstile absence SMS alerts.",
      keyModules: [
        "3-Copy Fee Challans",
        "Biometric Gate Sync",
        "Parent SMS Alerts",
      ],
    },
    {
      title: "International & Bilingual Institutions",
      level: "K-12 Educational Institutions",
      icon: Globe,
      challenge:
        "Coordinating diverse elective course combinations, flexible semester credit systems, and multi-language report card generation for multinational parent bodies.",
      solution:
        "Flexible course bundle mapping, dual English/Urdu student transcripts, and multi-term academic calendar scheduling with working day targets.",
      keyModules: [
        "Subject Electives",
        "Bilingual Transcripts",
        "Flexible Terms",
      ],
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold">
            <span>Institutional Profiles</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0F1E] tracking-tight">
            Designed for the Way{" "}
            <span className="text-[#0B5FFF]">Modern Schools Operate.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Whether running an elite Cambridge O/A-Level academy, a multi-campus
            school group, or a growing private institution, CambridgeDesk adapts
            to your exact academic structure.
          </p>
        </div>

        {/* Use Cases 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((uc, idx) => {
            const Icon = uc.icon
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 hover:border-[#0B5FFF]/40 rounded-3xl p-8 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#0B5FFF] group-hover:bg-[#0B5FFF] group-hover:text-white transition-colors duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-slate-500 bg-white border border-slate-200 px-3 py-1 rounded-full">
                      {uc.level}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0A0F1E] group-hover:text-[#0B5FFF] transition-colors">
                      {uc.title}
                    </h3>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-3 pt-1 text-xs sm:text-sm">
                    <div className="p-3.5 bg-rose-50/60 border border-rose-100 rounded-xl">
                      <span className="font-bold text-rose-800 block text-xs mb-1 uppercase tracking-wide">
                        Operational Friction:
                      </span>
                      <p className="text-slate-600 leading-relaxed">
                        {uc.challenge}
                      </p>
                    </div>

                    <div className="p-3.5 bg-blue-50/60 border border-blue-100 rounded-xl">
                      <span className="font-bold text-[#0B5FFF] block text-xs mb-1 uppercase tracking-wide">
                        CambridgeDesk Solution:
                      </span>
                      <p className="text-slate-700 leading-relaxed font-medium">
                        {uc.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Modules Pills */}
                <div className="pt-6 mt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-2">
                  <span className="text-[11px] font-mono text-slate-400 mr-1">
                    Modules:
                  </span>
                  {uc.keyModules.map((m, mIdx) => (
                    <span
                      key={mIdx}
                      className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 rounded-md text-[11px] font-semibold"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
