import { useState, useEffect } from "react"
import {
  Scale,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Receipt,
  Play,
  RotateCcw,
} from "lucide-react"
import ProductScreenshotFrame, {
  ScreenshotSlot,
} from "../../../components/ProductScreenshotFrame"

export default function PurchoonHero() {
  // Mode toggle: Screenshot vs Live Simulation
  const [heroMode, setHeroMode] = useState<"screenshot" | "simulator">(
    "screenshot",
  )

  const heroSlot: ScreenshotSlot = {
    id: "purchoon-hero",
    slotNumber: "01",
    slotLabel: "Hero Master Screenshot",
    title: "Purchoon ERP • Counter POS with RS232 Serial Scale Sync",
    subtitle: "Grocery & Wholesale Point-of-Sale Terminal",
    dimensions: "1920 × 1080 (16:9 Full HD)",
    src: "/images/products/purchoon-hero.svg",
    altText: "Purchoon ERP Counter POS with RS232 Serial Scale Sync",
    caption:
      "Original interface capture of Purchoon ERP counter terminal featuring real-time serial scale reading, dual loose + barcode cart, and reverse calculation.",
    category: "Counter Operations",
  }

  // Animated simulation state
  const [animStep, setAnimStep] = useState<number>(0)
  const [isPlaying, setIsPlaying] = useState<boolean>(true)

  // Simulation steps:
  // 0: Idle counter
  // 1: Weighing item (Scale reading 1.750 kg)
  // 2: Price calculated (1.750 kg x Rs. 320 = Rs. 560)
  // 3: Customer Udhar ledger updated & Receipt printed
  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => {
      setAnimStep((prev) => (prev + 1) % 4)
    }, 2800)
    return () => clearInterval(timer)
  }, [isPlaying])

  const scrollToDemo = () => {
    document
      .getElementById("demo-section")
      ?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToCalculator = () => {
    document
      .getElementById("weight-demo")
      ?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F6FF] via-[#F8FAFC] to-white pt-28 pb-20 md:pt-36 md:pb-28 border-b border-slate-200">
      {/* Decorative background grid and ambient light */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(#0B5FFF 0.75px, transparent 0.75px), radial-gradient(#00D4FF 0.75px, #F8FAFC 0.75px)`,
          backgroundSize: "32px 32px",
          backgroundPosition: "0 0, 16px 16px",
        }}
      />
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#0B5FFF]/10 to-[#00D4FF]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: SaaS Value Proposition */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0B5FFF]/20 shadow-sm text-xs font-semibold text-[#0B5FFF]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0B5FFF]"></span>
              </span>
              <span>Smart Retail & Wholesale Management System</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A0F1E] leading-[1.12]">
              Run Your Grocery & Wholesale Business With{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B5FFF] to-[#00D4FF]">
                Complete Control.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Purchoon ERP connects your sales counter, digital weight scales,
              bulk sack inventory, Mandi purchasing, customer Udhar ledgers,
              supplier payments, and business records into one structured
              enterprise system built for grocery reality.
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
                onClick={scrollToCalculator}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0A0F1E] border border-slate-300 font-semibold shadow-sm hover:border-slate-400 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Scale className="w-4 h-4 text-[#0B5FFF]" />
                <span>Explore Weight POS Demo</span>
              </button>
            </div>

            {/* Trust Statement & Micro Badges */}
            <div className="pt-6 border-t border-slate-200/80">
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-3">
                Built for modern grocery retailers and wholesale businesses
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-left">
                <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-white/80 border border-slate-200 rounded-lg px-2.5 py-1.5 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>100% Offline POS</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-white/80 border border-slate-200 rounded-lg px-2.5 py-1.5 shadow-2xs">
                  <Scale className="w-3.5 h-3.5 text-[#0B5FFF] shrink-0" />
                  <span>Serial Scale Sync</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-white/80 border border-slate-200 rounded-lg px-2.5 py-1.5 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#00D4FF] shrink-0" />
                  <span>Reverse Rupee Calc</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-white/80 border border-slate-200 rounded-lg px-2.5 py-1.5 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Digital Udhar Khata</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Original Screenshot Placeholder by Admin (Slot 01) */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative card glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0B5FFF]/20 via-[#00D4FF]/20 to-[#0B5FFF]/10 rounded-2xl blur-xl opacity-75" />

              <ProductScreenshotFrame
                slot={heroSlot}
                productSlug="purchoon-erp"
                slotNumber={1}
                variant="hero"
                fallbackUI={
                  <div className="p-4 sm:p-5 space-y-4">
                    {/* Top Status Bar: Cashier & Quick Stats */}
                    <div className="grid grid-cols-3 gap-2.5 text-center">
                      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-2.5">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                          Cash in Drawer
                        </span>
                        <span className="text-sm font-bold text-white font-mono">
                          Rs. 48,250
                        </span>
                      </div>
                      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-2.5">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                          Today's Sales
                        </span>
                        <span className="text-sm font-bold text-[#00D4FF] font-mono">
                          Rs. 132,600
                        </span>
                      </div>
                      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-2.5">
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                          Open Udhar Balance
                        </span>
                        <span className="text-sm font-bold text-amber-400 font-mono">
                          Rs. 89,400
                        </span>
                      </div>
                    </div>

                    {/* Active Weighed Transaction Box */}
                    <div className="bg-gradient-to-br from-slate-900 via-slate-900/95 to-[#0B5FFF]/15 border border-slate-700/80 rounded-xl p-4 space-y-3 relative overflow-hidden">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-[#0B5FFF]/20 border border-[#0B5FFF]/40 flex items-center justify-center text-[#00D4FF]">
                            <Scale className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-white flex items-center gap-2">
                              <span>Basmati Super Kernal Rice</span>
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                                Loose Commodity
                              </span>
                            </div>
                            <span className="text-xs text-slate-400">
                              Rate: Rs. 320 / kg (Bori Lot: #PK-2026-B)
                            </span>
                          </div>
                        </div>

                        {/* Live Scale Weight Dial */}
                        <div className="text-right">
                          <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                            Scale Weight
                          </div>
                          <div className="text-xl sm:text-2xl font-mono font-bold text-emerald-400">
                            {animStep === 0 && "0.000 kg"}
                            {animStep === 1 && "1.750 kg"}
                            {animStep === 2 && "1.750 kg"}
                            {animStep === 3 && "1.750 kg"}
                          </div>
                        </div>
                      </div>

                      {/* Step-by-step progress pill */}
                      <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-400 font-mono text-[11px]">
                            Calculation:
                          </span>
                          <span className="text-white font-mono font-semibold">
                            {animStep === 0 && "Awaiting scale input..."}
                            {animStep >= 1 && "1,750 grams × Rs. 320/kg = "}
                            {animStep >= 2 && (
                              <span className="text-[#00D4FF] font-bold">
                                Rs. 560.00
                              </span>
                            )}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          {animStep === 0 && "Step 1/4: Place on scale"}
                          {animStep === 1 && "Step 2/4: Scale synced"}
                          {animStep === 2 && "Step 3/4: Price locked"}
                          {animStep === 3 && "Step 4/4: Receipt printed"}
                        </span>
                      </div>
                    </div>

                    {/* Customer Udhar & Receipt Preview Card */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Customer Ledger Snapshot */}
                      <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-3 space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-300">
                            Customer Khata (#104)
                          </span>
                          <span className="text-[10px] text-slate-400">
                            Verified
                          </span>
                        </div>
                        <div className="text-xs font-bold text-white">
                          Haji Aslam Grocers
                        </div>
                        <div className="space-y-1 font-mono text-[11px] text-slate-400">
                          <div className="flex justify-between">
                            <span>Previous Balance:</span>
                            <span className="text-slate-200">Rs. 1,450</span>
                          </div>
                          <div className="flex justify-between">
                            <span>This Sale:</span>
                            <span className="text-[#00D4FF]">
                              +{animStep >= 2 ? "Rs. 560" : "Rs. 0"}
                            </span>
                          </div>
                          <div className="flex justify-between border-t border-slate-800 pt-1 font-bold">
                            <span className="text-slate-300">New Balance:</span>
                            <span className="text-amber-400">
                              {animStep >= 3 ? "Rs. 2,010" : "Rs. 1,450"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Receipt Output Simulation */}
                      <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-3 space-y-1.5 font-mono text-[11px]">
                        <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-1">
                          <span className="flex items-center gap-1">
                            <Receipt className="w-3 h-3 text-[#00D4FF]" />
                            Receipt #1842
                          </span>
                          <span>
                            {new Date().toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                        <div className="text-slate-300 text-[10px] space-y-0.5">
                          <div className="flex justify-between">
                            <span>1x Sugar (Loose 1kg)</span>
                            <span>Rs. 200</span>
                          </div>
                          <div className="flex justify-between">
                            <span>1x Dal Chana (500g)</span>
                            <span>Rs. 130</span>
                          </div>
                          {animStep >= 2 && (
                            <div className="flex justify-between text-[#00D4FF] font-semibold">
                              <span>1x Basmati Rice (1.75kg)</span>
                              <span>Rs. 560</span>
                            </div>
                          )}
                        </div>
                        <div className="border-t border-dashed border-slate-700 pt-1 flex justify-between font-bold text-white text-xs">
                          <span>TOTAL PAYABLE:</span>
                          <span className="text-emerald-400">
                            {animStep >= 2 ? "Rs. 890.00" : "Rs. 330.00"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Controls Bar */}
                    <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-[10px] font-mono text-slate-400">
                      <span className="text-[#00D4FF]">
                        Scale: RS232 CONNECTED
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer"
                      >
                        {isPlaying ? (
                          <RotateCcw className="w-3 h-3" />
                        ) : (
                          <Play className="w-3 h-3 text-emerald-400" />
                        )}
                        <span>
                          {isPlaying ? "Pause Simulation" : "Play Simulation"}
                        </span>
                      </button>
                    </div>
                  </div>
                }
                interactiveToggle={{
                  activeMode: heroMode,
                  onToggle: setHeroMode,
                  simulatorLabel: "Live POS Simulation",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
