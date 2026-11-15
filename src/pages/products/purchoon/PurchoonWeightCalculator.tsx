import { useState } from "react"
import {
  Scale,
  Sparkles,
  Calculator,
  ArrowRightLeft,
  CheckCircle2,
  Info,
  Layers,
} from "lucide-react"

interface Commodity {
  id: string
  name: string
  urduName: string
  category: string
  pricePerKg: number
  unit: string
}

const COMMODITIES: Commodity[] = [
  {
    id: "sugar",
    name: "Sugar (Cheeni)",
    urduName: "چینی",
    category: "Grains & Sweeteners",
    pricePerKg: 200,
    unit: "kg",
  },
  {
    id: "rice",
    name: "Basmati Super Kernal Rice",
    urduName: "چاول باسمتی",
    category: "Grains",
    pricePerKg: 320,
    unit: "kg",
  },
  {
    id: "daal-chana",
    name: "Daal Chana (Gram Pulse)",
    urduName: "دال چنا",
    category: "Pulses",
    pricePerKg: 260,
    unit: "kg",
  },
  {
    id: "flour",
    name: "Chakki Whole Wheat Flour (Atta)",
    urduName: "گندم کا آٹا",
    category: "Flour",
    pricePerKg: 130,
    unit: "kg",
  },
  {
    id: "daal-masoor",
    name: "Daal Masoor (Red Lentils)",
    urduName: "دال مسور",
    category: "Pulses",
    pricePerKg: 340,
    unit: "kg",
  },
  {
    id: "zeera",
    name: "Whole Cumin Seeds (Zeera)",
    urduName: "سفید زیرہ",
    category: "Spices",
    pricePerKg: 1400,
    unit: "kg",
  },
]

type CalcMode = "price-to-weight" | "kg-mode" | "grams-mode" | "weight-to-price"

export default function PurchoonWeightCalculator() {
  const [selectedCommodity, setSelectedCommodity] = useState<Commodity>(
    COMMODITIES[0],
  )
  const [calcMode, setCalcMode] = useState<CalcMode>("price-to-weight")

  // Input states
  const [rupeesInput, setRupeesInput] = useState<number>(100)
  const [kgInput, setKgInput] = useState<number>(1.5)
  const [gramsInput, setGramsInput] = useState<number>(500)

  // Calculations
  const ratePerKg = selectedCommodity.pricePerKg
  const ratePerGram = ratePerKg / 1000

  let calculatedWeightGrams = 0
  let calculatedPayable = 0

  if (calcMode === "price-to-weight") {
    // Customer gives Rs. X -> How many grams do they get?
    calculatedWeightGrams = Math.round((rupeesInput / ratePerKg) * 1000)
    calculatedPayable = rupeesInput
  } else if (calcMode === "kg-mode") {
    // Cashier enters Kg -> How much to pay?
    calculatedWeightGrams = Math.round(kgInput * 1000)
    calculatedPayable = Math.round(kgInput * ratePerKg)
  } else if (calcMode === "grams-mode") {
    // Customer asks for e.g. 750 grams
    calculatedWeightGrams = gramsInput
    calculatedPayable = Math.round((gramsInput / 1000) * ratePerKg)
  } else if (calcMode === "weight-to-price") {
    // Digital scale simulation mode
    calculatedWeightGrams = gramsInput
    calculatedPayable = Math.round((gramsInput / 1000) * ratePerKg)
  }

  const calculatedWeightKg = (calculatedWeightGrams / 1000).toFixed(3)

  return (
    <section
      id="weight-demo"
      className="py-20 md:py-28 bg-white border-b border-slate-200 relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#0B5FFF]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D4FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B5FFF]/10 border border-[#0B5FFF]/20 text-[#0B5FFF] text-xs font-semibold">
            <Scale className="w-3.5 h-3.5" />
            <span>Interactive Operational Feature</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0F1E] tracking-tight">
            Sell by Weight. Calculate by Price.{" "}
            <span className="text-[#0B5FFF]">Stay in Control.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            In real grocery markets, customers don't ask for 250 grams; they
            hand you{" "}
            <span className="font-semibold text-slate-800">
              "Rs. 50 or Rs. 100"
            </span>
            . Purchoon ERP's built-in calculation engine does the math
            instantly, preventing daily mental rounding losses that cost stores
            3% to 5% of gross profits.
          </p>
        </div>

        {/* Interactive Calculator Workspace */}
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl relative">
          {/* Top disclaimer badge */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-6 border-b border-slate-200 mb-8">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-[#0B5FFF] text-white flex items-center justify-center shadow-sm">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0A0F1E]">
                  Purchoon Live POS Calculation Simulator
                </h3>
                <p className="text-xs text-slate-500">
                  Select a commodity and switch modes to test client-side
                  calculation responsiveness.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-[11px] font-medium">
              <Info className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>
                Interactive product demonstration (Client-side simulation)
              </span>
            </div>
          </div>

          {/* Mode Selector Tabs */}
          <div className="space-y-3 mb-8">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              1. Choose Counter Billing Mode
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 bg-slate-200/70 p-1.5 rounded-2xl">
              <button
                onClick={() => setCalcMode("price-to-weight")}
                className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  calcMode === "price-to-weight"
                    ? "bg-[#0B5FFF] text-white shadow-md shadow-[#0B5FFF]/20"
                    : "text-slate-700 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                <ArrowRightLeft className="w-3.5 h-3.5" />
                <span>Price-to-Weight (Reverse)</span>
              </button>

              <button
                onClick={() => setCalcMode("kg-mode")}
                className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  calcMode === "kg-mode"
                    ? "bg-[#0B5FFF] text-white shadow-md shadow-[#0B5FFF]/20"
                    : "text-slate-700 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Kilograms Mode</span>
              </button>

              <button
                onClick={() => setCalcMode("grams-mode")}
                className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  calcMode === "grams-mode"
                    ? "bg-[#0B5FFF] text-white shadow-md shadow-[#0B5FFF]/20"
                    : "text-slate-700 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>Grams Mode</span>
              </button>

              <button
                onClick={() => setCalcMode("weight-to-price")}
                className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  calcMode === "weight-to-price"
                    ? "bg-[#0B5FFF] text-white shadow-md shadow-[#0B5FFF]/20"
                    : "text-slate-700 hover:text-slate-900 hover:bg-white/60"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Scale Sync Auto</span>
              </button>
            </div>
          </div>

          {/* Commodity Selector Grid */}
          <div className="space-y-3 mb-8">
            <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
              2. Select Loose Commodity
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
              {COMMODITIES.map((c) => {
                const isSelected = selectedCommodity.id === c.id
                return (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCommodity(c)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? "bg-white border-[#0B5FFF] ring-2 ring-[#0B5FFF]/20 shadow-md"
                        : "bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white"
                    }`}
                  >
                    <div className="text-[11px] font-bold text-slate-900 line-clamp-1">
                      {c.name}
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      Rs. {c.pricePerKg} / kg
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Input & Output Control Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left: Input Controller */}
            <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  {calcMode === "price-to-weight"
                    ? "Customer Gives Rupees (Rs)"
                    : calcMode === "kg-mode"
                      ? "Weight on Counter (Kilograms)"
                      : "Weight on Counter (Grams)"}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  Rate: Rs. {ratePerKg}/kg (Rs. {ratePerGram.toFixed(2)}/g)
                </span>
              </div>

              {/* Mode-Specific Working Inputs */}
              {calcMode === "price-to-weight" && (
                <div className="space-y-3">
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">
                      Rs.
                    </span>
                    <input
                      type="number"
                      min={10}
                      max={5000}
                      step={10}
                      value={rupeesInput}
                      onChange={(e) =>
                        setRupeesInput(Math.max(1, Number(e.target.value)))
                      }
                      className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:border-[#0B5FFF] focus:ring-2 focus:ring-[#0B5FFF]/20 text-2xl font-bold font-mono text-[#0A0F1E] outline-none"
                    />
                  </div>

                  {/* Quick rupee preset buttons */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[50, 100, 150, 200, 500, 1000].map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setRupeesInput(amt)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border transition-all cursor-pointer ${
                          rupeesInput === amt
                            ? "bg-[#0B5FFF] text-white border-[#0B5FFF]"
                            : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        Rs. {amt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {calcMode === "kg-mode" && (
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="number"
                      min={0.1}
                      max={50}
                      step={0.25}
                      value={kgInput}
                      onChange={(e) =>
                        setKgInput(Math.max(0.01, Number(e.target.value)))
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0B5FFF] focus:ring-2 focus:ring-[#0B5FFF]/20 text-2xl font-bold font-mono text-[#0A0F1E] outline-none"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-sm">
                      Kilograms
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {[0.5, 1, 1.5, 2, 2.5, 5].map((w) => (
                      <button
                        key={w}
                        onClick={() => setKgInput(w)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border transition-all cursor-pointer ${
                          kgInput === w
                            ? "bg-[#0B5FFF] text-white border-[#0B5FFF]"
                            : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {w} kg
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {(calcMode === "grams-mode" ||
                calcMode === "weight-to-price") && (
                <div className="space-y-3">
                  <div className="relative">
                    <input
                      type="number"
                      min={10}
                      max={10000}
                      step={50}
                      value={gramsInput}
                      onChange={(e) =>
                        setGramsInput(Math.max(1, Number(e.target.value)))
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-[#0B5FFF] focus:ring-2 focus:ring-[#0B5FFF]/20 text-2xl font-bold font-mono text-[#0A0F1E] outline-none"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-sm">
                      Grams
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {[100, 250, 500, 750, 1000, 1500].map((g) => (
                      <button
                        key={g}
                        onClick={() => setGramsInput(g)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold border transition-all cursor-pointer ${
                          gramsInput === g
                            ? "bg-[#0B5FFF] text-white border-[#0B5FFF]"
                            : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {g} g
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Calculated Output & Thermal Line Display */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#0A0F1E] to-[#131b34] text-white rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  Calculated Output
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded">
                  Zero Rounding Error
                </span>
              </div>

              {/* Main Numbers Breakdown */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5">
                  <span className="text-[11px] text-slate-400 block mb-1">
                    Calculated Weight
                  </span>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-white">
                    {calculatedWeightKg}{" "}
                    <span className="text-xs font-normal text-slate-400">
                      kg
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#00D4FF]">
                    ({calculatedWeightGrams.toLocaleString()} grams)
                  </span>
                </div>

                <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-3.5">
                  <span className="text-[11px] text-slate-400 block mb-1">
                    Payable Amount
                  </span>
                  <div className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400">
                    Rs. {calculatedPayable.toLocaleString()}
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    Rate: Rs. {ratePerKg}/kg
                  </span>
                </div>
              </div>

              {/* Receipt Preview Line */}
              <div className="bg-black/60 border border-slate-800 rounded-xl p-3 font-mono text-xs space-y-1.5">
                <div className="text-slate-400 text-[10px] uppercase tracking-wider flex justify-between">
                  <span>Thermal Receipt Line Item</span>
                  <span>POS Output</span>
                </div>
                <div className="text-slate-200 flex justify-between font-semibold">
                  <span>{selectedCommodity.name}</span>
                  <span className="text-white">
                    Rs. {calculatedPayable.toFixed(2)}
                  </span>
                </div>
                <div className="text-slate-400 text-[11px] flex justify-between">
                  <span>
                    {calculatedWeightKg} kg ({calculatedWeightGrams}g) @ Rs.{" "}
                    {ratePerKg}/kg
                  </span>
                  <span className="text-emerald-400 font-bold">
                    READY TO PRINT
                  </span>
                </div>
              </div>

              {/* Explanatory benefit callout */}
              <div className="text-slate-400 text-[11px] leading-relaxed pt-1">
                {calcMode === "price-to-weight" ? (
                  <p>
                    <strong className="text-white">
                      Reverse Mode in Action:
                    </strong>{" "}
                    Customer hands Rs. {rupeesInput}. Cashier does not need a
                    calculator. Store clerk scoops exactly{" "}
                    {calculatedWeightGrams} grams on the scale.
                  </p>
                ) : (
                  <p>
                    <strong className="text-white">
                      Weight Mode in Action:
                    </strong>{" "}
                    Counter registers {calculatedWeightKg} kg. System applies
                    price per gram with zero decimal drift.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
