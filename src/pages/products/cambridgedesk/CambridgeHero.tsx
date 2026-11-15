import { useState, useEffect } from "react"
import {
  GraduationCap,
  BookOpen,
  Users,
  Building2,
  ArrowRight,
  FileText,
  Play,
  RotateCcw,
  BarChart3,
} from "lucide-react"

export default function CambridgeHero() {
  const [animStep, setAnimStep] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)

  // Simulation sequence:
  // 0: Academic overview
  // 1: Attendance & Biometric Gate Sync
  // 2: Examination Performance & Gradebook
  // 3: 3-Copy Bank Challan Batch Generation
  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setAnimStep((prev) => (prev + 1) % 4)
    }, 3000)
    return () => clearInterval(interval)
  }, [isPlaying])

  const scrollToDemo = () => {
    document
      .getElementById("demo-section")
      ?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToShowcase = () => {
    document
      .getElementById("academic-showcase")
      ?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F6FF] via-[#F8FAFC] to-white pt-28 pb-20 md:pt-36 md:pb-28 border-b border-slate-200">
      {/* Background ambient lighting and academic pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-35"
        style={{
          backgroundImage: `radial-gradient(#0B5FFF 0.75px, transparent 0.75px), radial-gradient(#00D4FF 0.75px, #F8FAFC 0.75px)`,
          backgroundSize: "32px 32px",
          backgroundPosition: "0 0, 16px 16px",
        }}
      />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[750px] h-[360px] bg-gradient-to-tr from-[#0B5FFF]/12 to-[#00D4FF]/12 blur-[110px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Academic ERP Positioning */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0B5FFF]/20 shadow-sm text-xs font-semibold text-[#0B5FFF]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0B5FFF]"></span>
              </span>
              <span>Intelligent School Management & Academic ERP</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A0F1E] leading-[1.12]">
              One Connected Platform for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5FFF] to-[#00D4FF]">
                Smarter School Management.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Bring academic planning, curriculum management, examinations,
              student records, fees, attendance, and school operations together
              in one intelligent platform engineered for modern educational
              institutions.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={scrollToDemo}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#0B5FFF] hover:bg-[#094ccc] text-white font-semibold shadow-lg shadow-[#0B5FFF]/25 hover:shadow-xl hover:shadow-[#0B5FFF]/35 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book a Live Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={scrollToShowcase}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0A0F1E] border border-slate-300 font-semibold shadow-sm hover:border-slate-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-[#0B5FFF]" />
                <span>Explore Platform</span>
              </button>
            </div>

            {/* Capability Labels Bar */}
            <div className="pt-6 border-t border-slate-200/80">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left">
                <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-white/80 border border-slate-200 rounded-lg px-2.5 py-1.5 shadow-2xs">
                  <GraduationCap className="w-3.5 h-3.5 text-[#0B5FFF] shrink-0" />
                  <span>Academic Management</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-white/80 border border-slate-200 rounded-lg px-2.5 py-1.5 shadow-2xs">
                  <BookOpen className="w-3.5 h-3.5 text-[#00D4FF] shrink-0" />
                  <span>Curriculum & Assessment</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-white/80 border border-slate-200 rounded-lg px-2.5 py-1.5 shadow-2xs">
                  <Users className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Student Administration</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-white/80 border border-slate-200 rounded-lg px-2.5 py-1.5 shadow-2xs">
                  <Building2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span>School Operations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Animated School ERP Dashboard Composition */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative card glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0B5FFF]/20 via-[#00D4FF]/20 to-[#0B5FFF]/10 rounded-2xl blur-xl opacity-75" />

              {/* Main Window Frame */}
              <div className="relative bg-[#0A0F1E] text-white rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
                {/* Title Bar */}
                <div className="px-4 py-3 bg-[#0d1428] border-b border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="ml-2 font-mono text-[11px] text-slate-300 font-semibold flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-[#00D4FF]" />
                      CambridgeDesk v4.2 • Session 2026-2027 [Main Campus]
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/60 font-mono text-[10px]">
                      ACADEMIC TERM 1
                    </span>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-1 hover:text-white transition-colors cursor-pointer"
                      title={isPlaying ? "Pause simulation" : "Play simulation"}
                    >
                      {isPlaying ? (
                        <RotateCcw className="w-3.5 h-3.5" />
                      ) : (
                        <Play className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Dashboard Body */}
                <div className="p-4 sm:p-5 space-y-4">
                  {/* Top Stats Strip */}
                  <div className="grid grid-cols-3 gap-2.5 text-center">
                    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-2.5">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                        Enrolled Students
                      </span>
                      <span className="text-sm font-bold text-white font-mono">
                        1,286 Active
                      </span>
                    </div>
                    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-2.5">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                        Today's Attendance
                      </span>
                      <span className="text-sm font-bold text-emerald-400 font-mono">
                        96.4% Present
                      </span>
                    </div>
                    <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-2.5">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                        Bank Fee Clearance
                      </span>
                      <span className="text-sm font-bold text-[#00D4FF] font-mono">
                        91.2% Paid
                      </span>
                    </div>
                  </div>

                  {/* Dynamic Interactive Stage Card */}
                  <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-[#0B5FFF]/15 border border-slate-700/80 rounded-xl p-4 space-y-3 relative overflow-hidden">
                    {/* Header of Active Step */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#0B5FFF]/20 border border-[#0B5FFF]/40 flex items-center justify-center text-[#00D4FF]">
                          {animStep === 0 && <BarChart3 className="w-4 h-4" />}
                          {animStep === 1 && <Users className="w-4 h-4" />}
                          {animStep === 2 && (
                            <GraduationCap className="w-4 h-4" />
                          )}
                          {animStep === 3 && <FileText className="w-4 h-4" />}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white">
                            {animStep === 0 &&
                              "Academic Term 1 Executive Health"}
                            {animStep === 1 &&
                              "Biometric Gate Sync & Attendance SMS"}
                            {animStep === 2 &&
                              "Examination Marksheet & Cambridge GPA"}
                            {animStep === 3 &&
                              "3-Copy Automated Bank Fee Challans"}
                          </div>
                          <span className="text-xs text-slate-400 font-mono">
                            {animStep === 0 &&
                              "Active Class: Grade 9, 10, O-Level & A-Level"}
                            {animStep === 1 &&
                              "Live GSM Gateway: 42 Absence SMS Dispatched"}
                            {animStep === 2 &&
                              "Grading Scheme: A*, A, B, C, D, E, U Thresholds"}
                            {animStep === 3 &&
                              "Verified Copies: Bank, School & Student Copy"}
                          </span>
                        </div>
                      </div>

                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-[#00D4FF] border border-blue-800">
                        {`Step ${animStep + 1} / 4`}
                      </span>
                    </div>

                    {/* Step Visual Body */}
                    <div className="bg-slate-950/80 rounded-lg p-3 border border-slate-800 text-[11px] font-mono">
                      {animStep === 0 && (
                        <div className="space-y-1.5 text-slate-300">
                          <div className="flex justify-between">
                            <span>Syllabus Coverage:</span>
                            <span className="text-emerald-400 font-bold">
                              Week 14 (88% Target Met)
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Timetable Clashes:</span>
                            <span className="text-emerald-400 font-bold">
                              0 Clashes Detected
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Next Term Exam:</span>
                            <span className="text-[#00D4FF]">
                              Mid-Term Series in 12 Days
                            </span>
                          </div>
                        </div>
                      )}

                      {animStep === 1 && (
                        <div className="space-y-1.5 text-slate-300">
                          <div className="flex justify-between">
                            <span>Turnstile Gate Check:</span>
                            <span className="text-emerald-400">
                              1,240 Swipes Logged (07:45 - 08:15)
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Unannounced Absentees:</span>
                            <span className="text-amber-400 font-bold">
                              46 Students Flagged
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Parent Absence Alert:</span>
                            <span className="text-emerald-400 font-bold">
                              SMS Sent at 08:30 AM
                            </span>
                          </div>
                        </div>
                      )}

                      {animStep === 2 && (
                        <div className="space-y-1.5 text-slate-300">
                          <div className="flex justify-between">
                            <span>Candidate Marksheet:</span>
                            <span className="text-white font-bold">
                              Hamza Tariq (O-Level Section A)
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Mathematics (Syllabus D):</span>
                            <span className="text-emerald-400 font-bold">
                              92 / 100 (Grade: A*)
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Physics (5054):</span>
                            <span className="text-emerald-400 font-bold">
                              86 / 100 (Grade: A)
                            </span>
                          </div>
                        </div>
                      )}

                      {animStep === 3 && (
                        <div className="space-y-1.5 text-slate-300">
                          <div className="flex justify-between">
                            <span>Batch Challan Run:</span>
                            <span className="text-white">
                              December 2026 Tuition Cycle
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Total Vouchers Generated:</span>
                            <span className="text-[#00D4FF] font-bold">
                              1,286 PDF Slips with Barcode
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>Bank Integration:</span>
                            <span className="text-emerald-400 font-bold">
                              Direct API / Bank Deposit Format
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Verification Label */}
                  <div className="text-center pt-1">
                    <span className="text-[10px] text-slate-500 font-mono">
                      * Illustrative EdTech UI Preview • Based on CambridgeDesk
                      Academic ERP Specification
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
