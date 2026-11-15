import { useState } from "react"
import {
  Server,
  Cpu,
  Shield,
  HardDrive,
  ChevronDown,
  CheckCircle2,
  Scale,
  ArrowRight,
} from "lucide-react"
import { Link } from "react-router-dom"

export default function PurchoonTechSpecs() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: "How does the price-to-weight reverse calculator work?",
      a: "In many grocery markets, customers don't ask for 250 grams; they hand you Rs. 50 or Rs. 100. Instead of doing manual math on a handheld calculator, the cashier simply types the rupee amount, and Purchoon ERP calculates the precise weight in grams based on current unit pricing.",
    },
    {
      q: "Can Purchoon ERP connect directly to our electronic weighing scale?",
      a: "Yes. Purchoon ERP supports standard digital weighing scales connected via RS232 serial or USB ports. When an item is placed on the scale, the weight registers instantly in the POS without manual typing.",
    },
    {
      q: "Can we track both packaged barcode items and loose grocery items in the same bill?",
      a: "Absolutely. Cashiers can scan a packaged soap barcode with the scanner, then immediately click the 'Sugar' hotkey and weigh 2.5 kg, and add both to the same thermal receipt.",
    },
    {
      q: "How does Purchoon handle customer Udhar (credit)?",
      a: "Every customer has a dedicated digital ledger. During checkout, selecting 'Udhar' verifies credit limits, adds the new amount to their balance, and prints the previous balance, current transaction, and total outstanding balance on the receipt.",
    },
    {
      q: "Can wholesale merchants set different rates for bulk purchases?",
      a: "Yes. Purchoon ERP supports multi-tier pricing. You can define a retail rate (e.g. Rs. 200/kg), a semi-wholesale rate for 10kg+ bags (e.g. Rs. 185/kg), and a full sack rate (e.g. Rs. 170/kg), which the system applies automatically based on quantity.",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="container-custom">
        {/* Technical Architecture Matrix */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-semibold">
              <Server className="w-3.5 h-3.5" />
              <span>System Specifications</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0F1E] tracking-tight">
              Hardware Compatibility &{" "}
              <span className="text-[#0B5FFF]">Technical Architecture.</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Engineered to run reliably in hot, dusty retail store environments
              on affordable, durable counter hardware.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Deployment */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B5FFF] flex items-center justify-center font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0A0F1E]">
                Deployment Station
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Windows 10 / 11 Desktop Station</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Low-spec dual core CPU compatible</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Optional Android tablet support for aisles</span>
                </li>
              </ul>
            </div>

            {/* Scale & Peripheral Hardware */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0A0F1E]">
                Hardware Support
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>RS232 / USB Digital Weighing Scales</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>58mm & 80mm ESC/POS Thermal Printers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>1D/2D Barcode Scanners & Cash Drawers</span>
                </li>
              </ul>
            </div>

            {/* Offline Resilience */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#00D4FF] flex items-center justify-center font-bold">
                <HardDrive className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0A0F1E]">
                Offline Database
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>100% Offline Local SQLite / PostgreSQL</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Zero internet requirement for counter billing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Encrypted cloud backup when connected</span>
                </li>
              </ul>
            </div>

            {/* Security & Audit */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#0A0F1E]">
                Security & Controls
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Manager PIN for price & Udhar overrides</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Audit log for stock write-offs & edits</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Daily automated backup to USB drive</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-3 mb-10">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0F1E]">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-slate-600">
              Clear, factual answers regarding Purchoon ERP implementation and
              counter workflows.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
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

          {/* Cross Links to other ERPs */}
          <div className="mt-14 p-6 bg-white border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold text-slate-500 block">
                Looking for other industry platforms?
              </span>
              <p className="text-sm font-semibold text-slate-800">
                Explore Storex Retail POS or Industrial Manufacturing ERP
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/products/storex-erp"
                className="text-xs font-bold text-[#0B5FFF] hover:underline flex items-center gap-1"
              >
                Storex Retail POS <ArrowRight className="w-3.5 h-3.5" />
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
