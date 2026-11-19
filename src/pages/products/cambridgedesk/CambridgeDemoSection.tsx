import { useState } from "react"
import { adminCmsStore } from "../../../services/adminCmsStore"
import {
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Building,
  User,
  Phone,
  Mail,
  GraduationCap,
  HelpCircle,
  Send,
} from "lucide-react"

export default function CambridgeDemoSection() {
  const [fullName, setFullName] = useState("")
  const [schoolName, setSchoolName] = useState("")
  const [designation, setDesignation] = useState("Principal / Headmistress")
  const [whatsappNumber, setWhatsappNumber] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [studentCount, setStudentCount] = useState("500 - 1,500 Students")
  const [message, setMessage] = useState("")

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [validationError, setValidationError] = useState<string | null>(null)
  const [preparedDispatch, setPreparedDispatch] = useState<{
    whatsappUrl: string
    mailtoUrl: string
  } | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setValidationError(null)

    if (!fullName.trim()) {
      setValidationError("Please enter your full name.")
      return
    }
    if (!schoolName.trim()) {
      setValidationError("Please enter your school or institution name.")
      return
    }
    if (!whatsappNumber.trim() || whatsappNumber.trim().length < 8) {
      setValidationError(
        "Please enter a valid WhatsApp or phone number (min 8 digits).",
      )
      return
    }
    if (!emailAddress.trim() || !/^\S+@\S+\.\S+$/.test(emailAddress)) {
      setValidationError(
        "Please enter a valid institutional or contact email address.",
      )
      return
    }

    setIsSubmitting(true)

    // Record submission into Admin CMS Inquiries Store
    adminCmsStore.addSubmission(
      "form_cambridge_demo",
      "CambridgeDesk School ERP Demo Request",
      {
        fullName,
        schoolName,
        designation,
        whatsappNumber,
        emailAddress,
        studentCount,
        notes: message || "N/A",
      },
      "/products/cambridgedesk",
    )

    // Construct direct dispatch formats (+1-555-019-2834 / contact@xbcloudtech.com)
    const textContext = `*CambridgeDesk School ERP Demo Request*%0A*Name:* ${encodeURIComponent(
      fullName,
    )}%0A*Institution:* ${encodeURIComponent(schoolName)}%0A*Role:* ${encodeURIComponent(
      designation,
    )}%0A*Students:* ${encodeURIComponent(studentCount)}%0A*WhatsApp:* ${encodeURIComponent(
      whatsappNumber,
    )}%0A*Email:* ${encodeURIComponent(emailAddress)}${
      message ? `%0A*Notes:* ${encodeURIComponent(message)}` : ""
    }`

    const waUrl = `https://wa.me/15550192834?text=${textContext}`
    const mailto = `mailto:contact@xbcloudtech.com?subject=CambridgeDesk School ERP Demo - ${encodeURIComponent(
      schoolName,
    )}&body=Name: ${encodeURIComponent(fullName)}%0ASchool: ${encodeURIComponent(
      schoolName,
    )}%0ADesignation: ${encodeURIComponent(designation)}%0AStudents: ${encodeURIComponent(
      studentCount,
    )}%0APhone: ${encodeURIComponent(whatsappNumber)}%0AEmail: ${encodeURIComponent(
      emailAddress,
    )}%0ANotes: ${encodeURIComponent(message)}`

    setTimeout(() => {
      setIsSubmitting(false)
      setPreparedDispatch({
        whatsappUrl: waUrl,
        mailtoUrl: mailto,
      })
    }, 400)
  }

  return (
    <section
      id="demo-section"
      className="py-20 md:py-28 bg-white border-b border-slate-200 relative overflow-hidden"
    >
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B5FFF]/10 border border-[#0B5FFF]/20 text-[#0B5FFF] text-xs font-semibold">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Campus Demonstration</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0F1E] tracking-tight">
              Ready to Bring Your School Operations{" "}
              <span className="text-[#0B5FFF]">Together?</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Discover how CambridgeDesk can organize your academic and
              administrative workflows through a practical live product
              demonstration.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Form Left / Intro */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0A0F1E] mb-2">
                    Schedule an Academic Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Our academic systems engineers will demonstrate curriculum
                    mapping, 3-copy bank fee challan runs, examination marksheet
                    tabulation, and biometric attendance setup customized for
                    your student body.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>3-copy bank challan layout customization</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Cambridge & Board grading scheme calibration</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Multi-campus tenant data isolation overview</span>
                  </div>
                </div>

                {/* Direct WhatsApp Action */}
                <div className="pt-4 border-t border-slate-200">
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block mb-2">
                    Direct Administrative Channel:
                  </span>
                  <a
                    href="https://wa.me/15550192834?text=Hello%20XB%20Cloud%20Tech%2C%20I%20would%20like%20to%20request%20a%20demo%20of%20CambridgeDesk%20School%20ERP."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp (+1 555-019-2834)</span>
                  </a>
                </div>
              </div>

              {/* Form Right Column */}
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                {preparedDispatch ? (
                  <div className="space-y-5 text-center py-4">
                    <div className="w-12 h-12 bg-blue-50 border border-blue-200 rounded-2xl flex items-center justify-center text-[#0B5FFF] mx-auto">
                      <Send className="w-6 h-6" />
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-lg font-bold text-[#0A0F1E]">
                        Demo Specification Prepared
                      </h4>
                      <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                        To guarantee your institution's inquiry reaches our
                        systems team immediately, choose your preferred direct
                        dispatch method:
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                      <a
                        href={preparedDispatch.whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send via WhatsApp (+1 555-019-2834)</span>
                      </a>

                      <a
                        href={preparedDispatch.mailtoUrl}
                        className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Dispatch via Email</span>
                      </a>
                    </div>

                    <button
                      onClick={() => setPreparedDispatch(null)}
                      className="text-xs text-slate-500 hover:text-slate-800 underline pt-2 cursor-pointer"
                    >
                      Edit details
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {validationError && (
                      <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>{validationError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 block">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Dr. Asif Mehmood"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-[#0B5FFF] focus:ring-2 focus:ring-[#0B5FFF]/20 outline-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 block">
                          School / Institution Name *
                        </label>
                        <div className="relative">
                          <Building className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Bloomfield Cambridge Academy"
                            value={schoolName}
                            onChange={(e) => setSchoolName(e.target.value)}
                            className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-[#0B5FFF] focus:ring-2 focus:ring-[#0B5FFF]/20 outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 block">
                          Your Designation *
                        </label>
                        <select
                          value={designation}
                          onChange={(e) => setDesignation(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-[#0B5FFF] focus:ring-2 focus:ring-[#0B5FFF]/20 outline-none bg-white"
                        >
                          <option value="Principal / Headmistress">
                            Principal / Headmistress
                          </option>
                          <option value="Academic Director / Dean">
                            Academic Director / Dean
                          </option>
                          <option value="School Owner / Trustee">
                            School Owner / Trustee
                          </option>
                          <option value="Administrator / Registrar">
                            Administrator / Registrar
                          </option>
                          <option value="Finance Officer / Accountant">
                            Finance Officer / Accountant
                          </option>
                          <option value="Other">Other Role</option>
                        </select>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 block">
                          Approx. Student Enrollment
                        </label>
                        <select
                          value={studentCount}
                          onChange={(e) => setStudentCount(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-[#0B5FFF] focus:ring-2 focus:ring-[#0B5FFF]/20 outline-none bg-white"
                        >
                          <option value="Under 300 Students">
                            Under 300 Students
                          </option>
                          <option value="300 - 800 Students">
                            300 - 800 Students
                          </option>
                          <option value="800 - 2,000 Students">
                            800 - 2,000 Students
                          </option>
                          <option value="2,000+ Students (Multi-Campus)">
                            2,000+ Students (Multi-Campus)
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 block">
                          WhatsApp / Mobile *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            required
                            placeholder="e.g. +92 321 1234567"
                            value={whatsappNumber}
                            onChange={(e) => setWhatsappNumber(e.target.value)}
                            className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-[#0B5FFF] focus:ring-2 focus:ring-[#0B5FFF]/20 outline-none"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 block">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            required
                            placeholder="e.g. principal@school.edu"
                            value={emailAddress}
                            onChange={(e) => setEmailAddress(e.target.value)}
                            className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-[#0B5FFF] focus:ring-2 focus:ring-[#0B5FFF]/20 outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        Academic / Campus Operational Requirements (Optional)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Mention curriculum wings (O-Level, Matric), bank fee partners, or biometric turnstiles..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-3 rounded-xl border border-slate-300 text-xs text-slate-900 focus:border-[#0B5FFF] focus:ring-2 focus:ring-[#0B5FFF]/20 outline-none resize-none"
                      />
                    </div>

                    {/* Pending integration note */}
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-[11px] text-slate-500 flex items-start gap-2">
                      <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>
                        Notice: Connecting to active demo desk. Submitting
                        formats your institutional parameters for direct
                        WhatsApp / Email dispatch to avoid lost inquiries.
                      </span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#0B5FFF] hover:bg-[#094ccc] text-white font-bold text-sm shadow-md shadow-[#0B5FFF]/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <span>Request School ERP Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
