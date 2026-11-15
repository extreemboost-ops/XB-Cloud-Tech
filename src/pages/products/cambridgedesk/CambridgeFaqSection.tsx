import { useState } from "react"
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function CambridgeFaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const faqs = [
    {
      q: "What is CambridgeDesk School Management ERP?",
      a: "CambridgeDesk is an integrated educational management platform that connects school academics, curriculum planning, examination grading, student records, fee collection, and daily operations into one unified system.",
    },
    {
      q: "Which types of schools can use CambridgeDesk?",
      a: "CambridgeDesk is designed for private primary, secondary, and higher secondary schools, Cambridge curriculum (O/A-Level) academies, colleges, and multi-campus school networks requiring centralized administration.",
    },
    {
      q: "Does it support academic curriculum management?",
      a: "Yes. CambridgeDesk includes a dedicated curricular engine that maps academic years, subjects, learning objectives, weekly topic pacing schedules, and assessment milestones for seamless syllabus completion.",
    },
    {
      q: "How does examination and assessment management work?",
      a: "Teachers enter continuous assessment and exam marks into secured portals. The system applies Cambridge grade thresholds (A*, A, B, C, D, E, U) or standard Board GPA scales, automatically tabulates rank percentiles, and generates printed report cards.",
    },
    {
      q: "Can schools manage student attendance?",
      a: "Yes. It supports manual period attendance as well as direct integration with biometric turnstiles and RFID card readers, automatically dispatching absence notification SMS alerts to guardians.",
    },
    {
      q: "Does it include fee management?",
      a: "Yes. CambridgeDesk features automated batch generation of standardized 3-copy bank deposit slips (Bank Copy, School Copy, Student Copy) with dynamic student barcodes, late surcharges, and sibling concessions.",
    },
    {
      q: "Can different school staff use different dashboards?",
      a: "Yes. Strict Role-Based Access Control (RBAC) provides tailored dashboards for School Directors, Principals, Academic Coordinators, Examination Controllers, Teachers, and Accountants.",
    },
    {
      q: "Does it support parent communication?",
      a: "Yes. The platform includes a direct GSM SMS gateway for absence notifications, holiday alerts, and digital circulars, alongside a student portal for homework and grades.",
    },
    {
      q: "Can CambridgeDesk be customized for our school's specific policies?",
      a: "Yes. Grade boundaries, fee structures, academic terms, and report card branding can be configured to match your school's exact operational and academic requirements.",
    },
    {
      q: "How can a school request a live demonstration?",
      a: "You can request a demonstration by filling out the consultation form below, or by contacting our enterprise engineering team directly via WhatsApp at +1 (555) 019-2834.",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-semibold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Questions & Answers</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0F1E] tracking-tight">
              Frequently Asked Questions
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Clear, factual answers regarding CambridgeDesk ERP capabilities,
              academic curriculum structures, and campus deployment.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                    className="w-full px-6 py-4.5 text-left font-bold text-sm sm:text-base text-[#0A0F1E] flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#0B5FFF]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Cross Links to Other ERPs */}
          <div className="mt-14 p-6 bg-white border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold text-slate-500 block">
                Looking for other industry systems?
              </span>
              <p className="text-sm font-semibold text-slate-800">
                Explore Purchoon Grocery POS or Storex Retail ERP
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/products/purchoon-erp"
                className="text-xs font-bold text-[#0B5FFF] hover:underline flex items-center gap-1"
              >
                Purchoon ERP <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <span className="text-slate-300">•</span>
              <Link
                to="/products"
                className="text-xs font-bold text-slate-700 hover:underline"
              >
                All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
