import { CheckCircle2, XCircle } from "lucide-react"

export default function PurchoonComparison() {
  const comparisonRows = [
    {
      workflow: "Loose-Item Sales by Rupee Amount",
      manualApproach:
        "Cashier performs mental division or uses a pocket calculator to compute grams for 'Rs. 100 worth of sugar'. Leads to rounding mistakes and counter shrinkage.",
      purchoonApproach:
        "Cashier enters the cash amount. Built-in reverse pricing algorithm calculates precise grams instantly and prompts scale balance.",
    },
    {
      workflow: "Counter Weighing Scale Input",
      manualApproach:
        "Staff looks at digital scale screen, then manually types numbers into POS. Prone to typos, customer disputes, and slow counter pace.",
      purchoonApproach:
        "Direct RS232 / USB scale connection feeds stable weight in 0.1s. Zero typing required for weighed items.",
    },
    {
      workflow: "Bulk Sacks (Bori) to Retail Sales",
      manualApproach:
        "Bulk bags of grain are opened without system tracking. Moisture evaporation and repacking losses go unmonitored.",
      purchoonApproach:
        "Structured Bori Unpack workflow deducts sacks from warehouse and adds exact kilograms to retail bins with configurable shrinkage allowance.",
    },
    {
      workflow: "Customer Credit (Udhar Khata)",
      manualApproach:
        "Recorded in handwritten paper notebooks. Diarized entries get misplaced, coffee-stained, or disputed by customers during month-end.",
      purchoonApproach:
        "Every credit purchase updates digital customer ledger. Receipt automatically prints previous balance, current purchase, and new total balance.",
    },
    {
      workflow: "Wholesale vs Retail Pricing",
      manualApproach:
        "Cashier must memorize bulk discount rules for restaurants and sub-dealers, often giving unauthorized discounts or selling below cost.",
      purchoonApproach:
        "Automatic quantity tiers: Retail (1kg), Semi-wholesale (10kg+), Full bori (50kg). Enforces minimum margins automatically.",
    },
    {
      workflow: "Mandi Landed Cost Allocation",
      manualApproach:
        "Transport freight, Mazdoori (labor), and Mandi commissions are tracked separately, obscuring true purchase cost per sack.",
      purchoonApproach:
        "Carriage and commission charges are distributed across incoming inventory lots to establish true landed unit cost before pricing.",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200/80 text-slate-800 text-xs font-semibold">
            <span>Workflow Transformation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0F1E] tracking-tight">
            Built Around the Real Work of{" "}
            <span className="text-[#0B5FFF]">
              Grocery & Wholesale Businesses.
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            See how Purchoon ERP standardizes the workflows that have
            traditionally relied on fragile memory, handheld calculators, and
            misplaced paper notebooks.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-lg">
          {/* Header Row (Desktop) */}
          <div className="hidden lg:grid grid-cols-12 bg-slate-100/90 border-b border-slate-200 px-8 py-4 text-xs font-bold uppercase tracking-wider text-slate-700">
            <div className="col-span-4">Operational Workflow</div>
            <div className="col-span-4 text-rose-700 flex items-center gap-1.5">
              <XCircle className="w-4 h-4 text-rose-500" />
              <span>Conventional / Manual Practice</span>
            </div>
            <div className="col-span-4 text-[#0B5FFF] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Purchoon ERP System Workflow</span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-slate-200">
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="p-6 lg:px-8 lg:py-6 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-start hover:bg-slate-50/60 transition-colors"
              >
                {/* Workflow Title */}
                <div className="lg:col-span-4">
                  <span className="text-xs uppercase font-mono text-[#0B5FFF] font-semibold lg:hidden block mb-1">
                    Workflow #{idx + 1}
                  </span>
                  <h4 className="text-base font-bold text-[#0A0F1E]">
                    {row.workflow}
                  </h4>
                </div>

                {/* Manual Practice */}
                <div className="lg:col-span-4 bg-rose-50/50 lg:bg-transparent p-4 lg:p-0 rounded-xl border border-rose-100 lg:border-none">
                  <span className="text-xs font-bold uppercase text-rose-700 lg:hidden flex items-center gap-1 mb-2">
                    <XCircle className="w-3.5 h-3.5" /> Manual Practice
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {row.manualApproach}
                  </p>
                </div>

                {/* Purchoon Approach */}
                <div className="lg:col-span-4 bg-blue-50/40 lg:bg-transparent p-4 lg:p-0 rounded-xl border border-blue-100 lg:border-none">
                  <span className="text-xs font-bold uppercase text-[#0B5FFF] lg:hidden flex items-center gap-1 mb-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />{" "}
                    Purchoon ERP Workflow
                  </span>
                  <p className="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed">
                    {row.purchoonApproach}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
