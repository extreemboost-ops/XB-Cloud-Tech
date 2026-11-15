import {
  ShieldCheck,
  Scale,
  CreditCard,
  Package,
  Clock,
  FileSpreadsheet,
  CheckCircle2,
  TrendingUp,
} from "lucide-react"

export default function PurchoonBenefits() {
  const benefits = [
    {
      icon: Scale,
      title: "Zero Mental Rounding Errors",
      subtitle: "Reverse Price-to-Weight Engine",
      description:
        "When customers purchase loose commodities by rupee amount (e.g. 'Rs. 100 worth of daal'), cashiers no longer perform manual division on pocket calculators. The system calculates exact grams instantly, stopping daily shrinkage.",
      tag: "Immediate Financial Safeguard",
    },
    {
      icon: Package,
      title: "Accurate Bulk-to-Loose Conversion",
      subtitle: "Bori Unpack & Shrinkage Tracking",
      description:
        "Standard POS systems lose track when 50kg wholesale bags are opened for retail display. Purchoon accounts for moisture evaporation and packaging tare weight, giving store owners true warehouse inventory valuation.",
      tag: "True Stock Visibility",
    },
    {
      icon: CreditCard,
      title: "Eliminate Paper Khata Disputes",
      subtitle: "Authenticated Customer Ledgers",
      description:
        "Paper credit notebooks get spilled on, misplaced, or disputed by customers. Purchoon prints the verified previous balance, current transaction, and new total balance directly onto every thermal receipt.",
      tag: "Audit-Ready Receivables",
    },
    {
      icon: Clock,
      title: "Accelerate Rush-Hour Counter Throughput",
      subtitle: "Direct RS232 Weighing Scale Sync",
      description:
        "Items placed on the counter scale register their weight in the POS in 0.1 seconds without typing. Average customer checkout drops from 45 seconds to under 12 seconds.",
      tag: "Queue Elimination",
    },
    {
      icon: FileSpreadsheet,
      title: "True Landed Cost Accounting",
      subtitle: "Mandi Carriage & Commission Ledgers",
      description:
        "Factoring freight, vehicle carriage, and commission charges directly into incoming grain sack lots ensures you always know your actual margin before offering wholesale discounts.",
      tag: "Accurate Profit Margins",
    },
    {
      icon: ShieldCheck,
      title: "100% Counter Offline Autonomy",
      subtitle: "Local Database Resilience",
      description:
        "No reliance on internet connectivity for sales counters. The cash register, scale sync, thermal printer, and cash drawer continue operating at full speed even during local broadband dropouts.",
      tag: "Zero Downtime Guarantee",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B5FFF]/10 border border-[#0B5FFF]/20 text-[#0B5FFF] text-xs font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Measurable Operational Value</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0F1E] tracking-tight">
            More Control.{" "}
            <span className="text-[#0B5FFF]">Fewer Manual Calculations.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Purchoon ERP replaces guesswork, memory-based pricing, and paper
            notebooks with verified operational discipline built for grocery and
            wholesale reality.
          </p>
        </div>

        {/* Benefits Grid (Editorial Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((b, idx) => {
            const Icon = b.icon
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 hover:border-[#0B5FFF]/40 rounded-2xl p-7 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#0B5FFF]/10 border border-[#0B5FFF]/20 flex items-center justify-center text-[#0B5FFF] group-hover:bg-[#0B5FFF] group-hover:text-white transition-colors duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      {b.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#0A0F1E] mb-1 group-hover:text-[#0B5FFF] transition-colors">
                      {b.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#0B5FFF] uppercase tracking-wide">
                      {b.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified Operational Workflow</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Operational Performance Bar */}
        <div className="mt-14 bg-[#0A0F1E] text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00D4FF] font-mono mb-1">
                0.1s
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Scale Sync Response
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Direct RS232 Serial Port
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono mb-1">
                100%
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Gram-Level Accuracy
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Zero Decimal Drift
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono mb-1">
                Zero
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Paper Khata Loss
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Authenticated Ledger Receipts
              </div>
            </div>

            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono mb-1">
                Offline
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                Counter Resilience
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                No Broadband Dependency
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
