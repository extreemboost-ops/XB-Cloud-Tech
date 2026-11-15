import { useState } from "react"
import { CheckCircle2, ShieldCheck, ChevronRight } from "lucide-react"

interface JourneyStage {
  step: string
  title: string
  subtitle: string
  role: string
  action: string
  outcome: string
  metricLabel: string
  metricValue: string
  previewContent: React.ReactNode
}

export default function PurchoonWorkflowJourney() {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0)

  const stages: JourneyStage[] = [
    {
      step: "01",
      title: "Receive Goods",
      subtitle: "Mandi Bulk Purchase & Gate Verification",
      role: "Procurement / Warehouse In-Charge",
      action:
        "Record incoming delivery vehicle number, count of 50kg/100kg burlap sacks (bori), gross weight, freight transport charges, and supplier credit invoice.",
      outcome: "Raw sack inventory created with accurate landed cost per sack.",
      metricLabel: "Cost Accuracy",
      metricValue: "100% Landed Costing",
      previewContent: (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
            <span>Mandi Gate Pass Entry</span>
            <span className="text-emerald-400">STATUS: VERIFIED</span>
          </div>
          <div className="space-y-1.5 text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-400">Supplier:</span>
              <span className="text-white font-bold">
                Al-Madina Mandi Commission Agents
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Commodity:</span>
              <span>Basmati Super Kernal (Grade A)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Received Quantity:</span>
              <span className="text-[#00D4FF] font-bold">
                20 Sacks (1,000 kg Gross)
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Carriage / Porterage:</span>
              <span>Rs. 2,000 added to landed lot cost</span>
            </div>
          </div>
          <div className="p-2 bg-emerald-950/60 border border-emerald-800/80 rounded text-emerald-300 text-[11px]">
            Inventory Lot #PK-2026-B created and locked in warehouse.
          </div>
        </div>
      ),
    },
    {
      step: "02",
      title: "Manage Inventory",
      subtitle: "Bori Unpack to Loose Store Shelves",
      role: "Store Manager",
      action:
        "Open a 50kg bulk sack to replenish the loose grain bin on the retail sales counter. Purchoon automatically applies the configured 1.0% moisture and packaging shrinkage deduction.",
      outcome:
        "Stock automatically converted from sack count to retail gram inventory.",
      metricLabel: "Shrinkage Control",
      metricValue: "0% Phantom Drift",
      previewContent: (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
            <span>Bori Unpack Conversion Log</span>
            <span className="text-amber-400">UNPACK APPLIED</span>
          </div>
          <div className="space-y-1.5 text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-400">Source Sack:</span>
              <span>1x 50kg Bori (Lot #PK-2026-B)</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Shrinkage Factor:</span>
              <span className="text-rose-400">
                -0.500 kg (Moisture loss allowance)
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Transferred to Loose Bin:</span>
              <span className="text-emerald-400 font-bold">
                +49.500 kg Active Retail
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Warehouse Sacks Left:</span>
              <span className="text-white font-bold">19 Bori Remaining</span>
            </div>
          </div>
          <div className="p-2 bg-slate-800 rounded text-slate-300 text-[11px]">
            Retail counter scale hotkey is now live with updated 49.5 kg stock.
          </div>
        </div>
      ),
    },
    {
      step: "03",
      title: "Process Customer Orders",
      subtitle: "Digital Scale Sync & Reverse Rupee Calculation",
      role: "Counter Cashier",
      action:
        "Customer requests Rs. 200 worth of rice. Cashier taps the hotkey and enters '200'. System prompts for 625 grams. Scale passes exact grams via RS232 with zero keying errors.",
      outcome: "Item added to bill in 0.3 seconds with exact decimal accuracy.",
      metricLabel: "Checkout Velocity",
      metricValue: "<12s Per Customer",
      previewContent: (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
            <span>Counter POS Calculation</span>
            <span className="text-emerald-400">RS232 CONNECTED</span>
          </div>
          <div className="space-y-1.5 text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-400">Requested Amount:</span>
              <span className="text-white font-bold">Rs. 200.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Unit Commodity Price:</span>
              <span>Rs. 320.00 / kg</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Computed Scale Target:</span>
              <span className="text-[#00D4FF] font-bold">625 grams</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Digital Scale Reading:</span>
              <span className="text-emerald-400 font-bold">
                0.625 kg (Verified)
              </span>
            </div>
          </div>
          <div className="p-2 bg-slate-800 rounded text-slate-300 text-[11px]">
            No mental division required. Zero cash register variance.
          </div>
        </div>
      ),
    },
    {
      step: "04",
      title: "Record Payments & Udhar",
      subtitle: "Split Tender & Digital Khata Statement",
      role: "Cashier & Store Owner",
      action:
        "Customer pays Rs. 50 cash and charges Rs. 150 to their neighborhood Khata. Purchoon checks credit limit, writes to customer ledger, and prints updated balance on the thermal receipt.",
      outcome:
        "Dispute-free credit management with immediate balance disclosure.",
      metricLabel: "Khata Recovery",
      metricValue: "100% Traceability",
      previewContent: (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
            <span>Payment & Khata Settlement</span>
            <span className="text-[#00D4FF]">DUAL SETTLEMENT</span>
          </div>
          <div className="space-y-1.5 text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-400">Total Bill Amount:</span>
              <span className="text-white font-bold">Rs. 200.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Cash Received:</span>
              <span className="text-emerald-400 font-bold">
                Rs. 50.00 (In Drawer)
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">
                Udhar Debited (Khata #108):
              </span>
              <span className="text-amber-400 font-bold">
                Rs. 150.00 (To Ledger)
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">
                Customer New Total Balance:
              </span>
              <span className="text-amber-300">
                Rs. 4,350.00 (Printed on slip)
              </span>
            </div>
          </div>
          <div className="p-2 bg-emerald-950/60 border border-emerald-800/80 rounded text-emerald-300 text-[11px]">
            Receipt printed. Automated WhatsApp balance notification ready.
          </div>
        </div>
      ),
    },
    {
      step: "05",
      title: "Review Business Performance",
      subtitle: "Day-End Cashier Reconciliation & Net Profit",
      role: "Business Owner / Auditor",
      action:
        "At closing, cashier counts drawer cash against system records. Purchoon generates day-end reports separating cash collections, credit sales, Mandi payments, and net profit.",
      outcome:
        "Complete financial transparency with automated encrypted cloud backup.",
      metricLabel: "Financial Audit",
      metricValue: "Zero Cash Leakage",
      previewContent: (
        <div className="space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-2">
            <span>Shift Balancing & Day-End Close</span>
            <span className="text-emerald-400">DRAWER BALANCED</span>
          </div>
          <div className="space-y-1.5 text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-400">Opening Cash Float:</span>
              <span>Rs. 10,000.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Total Cash Collected:</span>
              <span className="text-emerald-400 font-bold">+Rs. 38,250.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Expected in Drawer:</span>
              <span className="text-white font-bold">Rs. 48,250.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Actual Counted Cash:</span>
              <span className="text-[#00D4FF] font-bold">
                Rs. 48,250.00 (Diff: Rs. 0)
              </span>
            </div>
          </div>
          <div className="p-2 bg-blue-950/60 border border-blue-800/80 rounded text-blue-300 text-[11px]">
            Daily database backup successfully written to external drive.
          </div>
        </div>
      ),
    },
  ]

  const activeStage = stages[activeStageIndex]

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>End-to-End Operational Lifecycle</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0F1E] tracking-tight">
            From Incoming Stock to{" "}
            <span className="text-[#0B5FFF]">Successful Sale.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Follow the 5 connected stages of how Purchoon ERP orchestrates
            physical goods, counter sales, credit ledgers, and cash
            reconciliation every day.
          </p>
        </div>

        {/* Progress Timeline Stepper (Horizontal on Desktop, Scrollable on Mobile) */}
        <div className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {stages.map((stage, idx) => {
              const isActive = activeStageIndex === idx
              const isPast = activeStageIndex > idx
              return (
                <button
                  key={stage.step}
                  onClick={() => setActiveStageIndex(idx)}
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

        {/* Active Stage Visual Showcase Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Stage Details */}
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
                    Store Role In Charge:
                  </span>
                  <span className="text-sm font-semibold text-slate-800 bg-white border border-slate-200 px-3 py-1 rounded-lg inline-block">
                    {activeStage.role}
                  </span>
                </div>

                <div>
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block mb-1">
                    What Happens in the System:
                  </span>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {activeStage.action}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block">
                      Operational Outcome:
                    </span>
                    <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5 mt-0.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      {activeStage.outcome}
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

              {/* Navigation buttons between stages */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  disabled={activeStageIndex === 0}
                  onClick={() =>
                    setActiveStageIndex((prev) => Math.max(0, prev - 1))
                  }
                  className="px-4 py-2 rounded-xl text-xs font-semibold border border-slate-300 text-slate-700 hover:bg-white disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  Previous Stage
                </button>
                <button
                  disabled={activeStageIndex === stages.length - 1}
                  onClick={() =>
                    setActiveStageIndex((prev) =>
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

            {/* Right Stage Screen Preview */}
            <div className="lg:col-span-5">
              <div className="bg-[#0A0F1E] rounded-2xl border border-slate-800 p-5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#0B5FFF]/15 rounded-full blur-2xl pointer-events-none" />
                <div className="relative">{activeStage.previewContent}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
