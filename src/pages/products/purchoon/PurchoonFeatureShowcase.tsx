import { useState } from "react"
import {
  Scale,
  Package,
  Users,
  CreditCard,
  RotateCcw,
  Truck,
  CheckCircle2,
} from "lucide-react"
import ProductScreenshotFrame from "../../../components/ProductScreenshotFrame"

interface FeatureTab {
  id: string
  title: string
  shortLabel: string
  badge: string
  icon: typeof Scale
  headline: string
  description: string
  bullets: string[]
  visualComponent: React.ReactNode
}

export default function PurchoonFeatureShowcase() {
  const [activeTab, setActiveTab] = useState<string>("pos")

  const tabs: FeatureTab[] = [
    {
      id: "pos",
      title: "Smart POS & Checkout",
      shortLabel: "1. Smart POS",
      badge: "Counter Velocity",
      icon: Scale,
      headline:
        "Sub-Second Grocery Counter Billing for Both Barcode & Weighed Goods",
      description:
        "Designed to eliminate long queues during morning and evening rush hours. Cashiers can scan packaged FMCG products while simultaneously weighing fresh produce and calculating loose bulk items on the same thermal bill.",
      bullets: [
        "Direct RS232/USB serial digital scale input: zero manual weight typing",
        "Top 50 loose item hotkeys (Rice, Sugar, Lentils, Spices, Ghee)",
        "Reverse price calculator: enter cash amount to auto-compute grams",
        "Split payment settlement: part cash, part customer Udhar khata",
        "100% offline desktop operation: counter never halts during broadband outages",
      ],
      visualComponent: (
        <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-4 font-mono text-xs shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              POS ACTIVE • REGISTER 01
            </span>
            <span>Mode: Weight + Barcode</span>
          </div>

          <div className="space-y-2">
            <div className="bg-slate-800/80 p-2.5 rounded-lg flex justify-between items-center border border-slate-700">
              <div>
                <div className="font-bold text-white text-[11px]">
                  Sugar Super White (Loose)
                </div>
                <div className="text-[10px] text-slate-400">
                  Scale Read: 2.500 kg @ Rs. 200/kg
                </div>
              </div>
              <span className="font-bold text-emerald-400">Rs. 500.00</span>
            </div>

            <div className="bg-slate-800/80 p-2.5 rounded-lg flex justify-between items-center border border-slate-700">
              <div>
                <div className="font-bold text-white text-[11px]">
                  Olper's Milk 1000ml (Barcode: 896400...)
                </div>
                <div className="text-[10px] text-slate-400">
                  2 Units @ Rs. 290
                </div>
              </div>
              <span className="font-bold text-emerald-400">Rs. 580.00</span>
            </div>

            <div className="bg-slate-800/80 p-2.5 rounded-lg flex justify-between items-center border border-slate-700">
              <div>
                <div className="font-bold text-white text-[11px]">
                  Zeera White (Reverse Calc Rs. 100)
                </div>
                <div className="text-[10px] text-slate-400">
                  Calculated: 71.4 grams @ Rs. 1,400/kg
                </div>
              </div>
              <span className="font-bold text-emerald-400">Rs. 100.00</span>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-3 flex justify-between items-center text-sm font-bold">
            <span className="text-slate-300">TOTAL PAYABLE:</span>
            <span className="text-[#00D4FF] text-base">Rs. 1,180.00</span>
          </div>
        </div>
      ),
    },
    {
      id: "inventory",
      title: "Inventory & Stock Control",
      shortLabel: "2. Inventory",
      badge: "Stock Accuracy",
      icon: Package,
      headline: "Track from 50kg Mandi Sacks Down to 250g Retail Packets",
      description:
        "Solve the classic grocery problem: purchasing bulk bori in sacks and selling in grams. Purchoon ERP manages the unpack conversion ledger with moisture loss and shrinkage allowances.",
      bullets: [
        "Bulk sack (Bori) to loose inventory unpack conversion",
        "Configurable shrinkage & moisture evaporation margins",
        "Batch and quality grading (Super Basmati vs Kernal vs Broken Rice)",
        "Automated low-stock alerts when remaining sacks reach reorder point",
        "Mandi purchase price averaging for true inventory valuation",
      ],
      visualComponent: (
        <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-4 text-xs shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
            <span className="font-bold text-white">Bulk Sack Unpack Flow</span>
            <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800">
              Shrinkage Tracking Active
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="text-[10px] text-slate-400 uppercase block mb-1">
                Warehouse Sacks
              </span>
              <div className="text-xl font-bold font-mono text-white">
                18 Bori
              </div>
              <span className="text-[10px] text-slate-400">
                50kg Sacks (900 kg)
              </span>
            </div>
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700">
              <span className="text-[10px] text-slate-400 uppercase block mb-1">
                Loose Store Bin
              </span>
              <div className="text-xl font-bold font-mono text-emerald-400">
                34.5 kg
              </div>
              <span className="text-[10px] text-slate-400">
                Active Loose Stock
              </span>
            </div>
          </div>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Last Unpack Action:</span>
              <span className="font-mono text-slate-200">
                1x 50kg Bori Opened
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">Moisture Loss Allowance:</span>
              <span className="font-mono text-rose-400">-0.500 kg (1.0%)</span>
            </div>
            <div className="flex items-center justify-between text-[11px] font-bold border-t border-slate-800 pt-1.5">
              <span className="text-white">Transferred to Loose Bin:</span>
              <span className="font-mono text-emerald-400">+49.500 kg</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "customers",
      title: "Customer & Supplier Management",
      shortLabel: "3. Parties",
      badge: "Accountability",
      icon: Users,
      headline:
        "Centralized Records for Retail Buyers, Wholesale Clients & Mandi Suppliers",
      description:
        "Manage your entire network of business relationships in one place. Enforce credit caps for neighborhood households, set wholesale rates for commercial buyers, and track payments to Mandi commission agents.",
      bullets: [
        "Comprehensive party profiles with CNIC, contact, and authorized buyers",
        "Customer-specific wholesale rate locking and contract pricing",
        "Supplier purchase accounts with delivery challan verification",
        "Post-dated cheque (PDC) recording and bank deposit alerts",
        "Instant transaction history search across months or years",
      ],
      visualComponent: (
        <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-3.5 text-xs shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
            <span className="font-bold text-white">Party Relationship Map</span>
            <span className="text-[10px] font-mono text-[#00D4FF]">
              Connected Accounts
            </span>
          </div>

          <div className="space-y-2.5">
            {/* Customer card */}
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 space-y-1">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white text-[11px]">
                  Muhammad Usman (Retail Udhar #108)
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-emerald-950 text-emerald-400 rounded">
                  Credit OK
                </span>
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>Credit Limit: Rs. 15,000</span>
                <span className="text-amber-400">Current Bal: Rs. 4,200</span>
              </div>
            </div>

            {/* Supplier card */}
            <div className="bg-slate-800/80 p-3 rounded-xl border border-slate-700 space-y-1">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white text-[11px]">
                  Al-Madina Mandi Commission Agents
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 bg-blue-950 text-blue-400 rounded">
                  Supplier
                </span>
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>Last Supply: 20 Bori Rice</span>
                <span className="text-slate-200">Payable: Rs. 160,000</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "udhar",
      title: "Udhar & Ledger Management",
      shortLabel: "4. Udhar Khata",
      badge: "Credit Protection",
      icon: CreditCard,
      headline:
        "Replace Misplaced Paper Khata Diaries With an Audit-Proof Digital Ledger",
      description:
        "Every credit transaction is validated against customer credit limits. Previous balance, current bill, and new balance are printed directly on the customer's receipt, completely eliminating disputes over outstanding amounts.",
      bullets: [
        "1-click credit (Udhar) checkout during counter billing",
        "Automated printed balance disclosure on every customer receipt",
        "WhatsApp / SMS balance reminder dispatch with 1 click",
        "Defaulter warning alerts when balance exceeds authorized days",
        "Khata ledger statement printing in clean Urdu and English formats",
      ],
      visualComponent: (
        <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-3 font-mono text-xs shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-slate-400">
            <span className="font-bold text-white">
              Digital Khata Ledger Statement
            </span>
            <span className="text-amber-400 text-[10px]">
              Active Ledger #104
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-[10px]">
              <thead className="text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="text-left py-1">Date</th>
                  <th className="text-left py-1">Description</th>
                  <th className="text-right py-1">Debit</th>
                  <th className="text-right py-1">Credit</th>
                  <th className="text-right py-1">Balance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="py-1 text-slate-400">10 Nov</td>
                  <td className="py-1">Weekly Grocery (Bill #1680)</td>
                  <td className="py-1 text-right text-rose-400">+2,450</td>
                  <td className="py-1 text-right">-</td>
                  <td className="py-1 text-right font-bold text-white">
                    2,450
                  </td>
                </tr>
                <tr>
                  <td className="py-1 text-slate-400">12 Nov</td>
                  <td className="py-1">Cash Payment Received</td>
                  <td className="py-1 text-right">-</td>
                  <td className="py-1 text-right text-emerald-400">-1,000</td>
                  <td className="py-1 text-right font-bold text-white">
                    1,450
                  </td>
                </tr>
                <tr className="bg-slate-800/40">
                  <td className="py-1 text-slate-400">Today</td>
                  <td className="py-1 text-[#00D4FF]">Weighed Rice + Sugar</td>
                  <td className="py-1 text-right text-rose-400">+560</td>
                  <td className="py-1 text-right">-</td>
                  <td className="py-1 text-right font-bold text-amber-400">
                    2,010
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-950/60 border border-emerald-800/80 p-2.5 rounded-lg flex items-center justify-between text-[11px] text-emerald-300">
            <span>Customer WhatsApp Receipt:</span>
            <span className="font-bold underline cursor-pointer">
              Sent via SMS/WA
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "returns",
      title: "Returns & Expenses",
      shortLabel: "5. Expenses",
      badge: "Margin Visibility",
      icon: RotateCcw,
      headline:
        "Controlled Sales Returns and Accurate Daily Store Overhead Costing",
      description:
        "Factor in every operational cost — from shop electricity, packing bags, and employee wages to transport carriage — so you know your true net business profit at the end of each day.",
      bullets: [
        "Sales returns workflow: restock item or mark as damaged/expired",
        "Automatic reverse ledger adjustment on returned credit purchases",
        "Expense category classification (Rent, Utilities, Packaging, Labor)",
        "Damaged commodity write-off ledger with mandatory manager reason code",
        "Comprehensive P&L reporting showing true profit after overheads",
      ],
      visualComponent: (
        <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-3.5 text-xs shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="font-bold text-white">
              Daily Overhead Allocation
            </span>
            <span className="text-slate-400 font-mono text-[10px]">
              Today's Shift
            </span>
          </div>

          <div className="space-y-2 font-mono text-[11px]">
            <div className="flex justify-between bg-slate-800/60 p-2 rounded border border-slate-700/60">
              <span className="text-slate-300">Gross Counter Sales:</span>
              <span className="text-emerald-400 font-bold">+Rs. 132,600</span>
            </div>
            <div className="flex justify-between bg-slate-800/60 p-2 rounded border border-slate-700/60">
              <span className="text-slate-300">
                Mandi Purchase Cost of Goods:
              </span>
              <span className="text-rose-400 font-bold">-Rs. 104,200</span>
            </div>
            <div className="flex justify-between bg-slate-800/60 p-2 rounded border border-slate-700/60">
              <span className="text-slate-300">
                Daily Store Overheads (Labor/Carriage):
              </span>
              <span className="text-rose-400 font-bold">-Rs. 4,800</span>
            </div>
            <div className="flex justify-between bg-slate-950 p-2.5 rounded-lg border border-emerald-800/80 font-bold text-sm">
              <span className="text-white">NET STORE PROFIT:</span>
              <span className="text-[#00D4FF]">+Rs. 23,600</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "wholesale",
      title: "Wholesale & Bori Management",
      shortLabel: "6. Wholesale Bori",
      badge: "Mandi Trade",
      icon: Truck,
      headline:
        "Multi-Tier Wholesale Pricing, Vehicle Gate Passes & Mandi Invoices",
      description:
        "Seamlessly switch between retail and wholesale operations. Enforce volume tier discounts (1kg, 10kg, 50kg sack) and generate delivery vehicle manifests with driver cash reconciliation.",
      bullets: [
        "Automated tier pricing: Retail (1kg), Semi-wholesale (10kg+), Full bori (50kg)",
        "Minimum order quantity (MOQ) enforcement for wholesale discounts",
        "Vehicle gate pass and delivery driver dispatch loading manifests",
        "Driver collection sign-off: verify cash and credit collected upon return",
        "Margin floor alerts preventing cashiers from discounting below cost",
      ],
      visualComponent: (
        <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 space-y-3 font-mono text-xs shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="font-bold text-white">
              Wholesale Tier Rate Structure
            </span>
            <span className="text-[10px] text-emerald-400">
              Automated by Quantity
            </span>
          </div>

          <div className="space-y-2 text-[11px]">
            <div className="bg-slate-800/70 p-2.5 rounded-lg border border-slate-700 flex justify-between items-center">
              <div>
                <span className="font-bold text-white block">
                  Retail Tier (1kg – 9kg)
                </span>
                <span className="text-[10px] text-slate-400">
                  Counter customer rate
                </span>
              </div>
              <span className="font-bold text-white">Rs. 200 / kg</span>
            </div>

            <div className="bg-slate-800/70 p-2.5 rounded-lg border border-slate-700 flex justify-between items-center">
              <div>
                <span className="font-bold text-white block">
                  Semi-Wholesale (10kg – 49kg)
                </span>
                <span className="text-[10px] text-slate-400">
                  Commercial kitchen rate
                </span>
              </div>
              <span className="font-bold text-emerald-400">
                Rs. 185 / kg (-7.5%)
              </span>
            </div>

            <div className="bg-slate-800/70 p-2.5 rounded-lg border border-slate-700 flex justify-between items-center">
              <div>
                <span className="font-bold text-white block">
                  Full Bori Tier (50kg+ Sacks)
                </span>
                <span className="text-[10px] text-slate-400">
                  Wholesale sub-dealer rate
                </span>
              </div>
              <span className="font-bold text-[#00D4FF]">
                Rs. 170 / kg (-15%)
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0]

  return (
    <section
      id="features-section"
      className="py-20 md:py-28 bg-[#F8FAFC] border-b border-slate-200"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B5FFF]/10 border border-[#0B5FFF]/20 text-[#0B5FFF] text-xs font-semibold">
            <Package className="w-3.5 h-3.5" />
            <span>Operational Capabilities Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0F1E] tracking-tight">
            Engineered Around the Real Daily Work of{" "}
            <span className="text-[#0B5FFF]">Grocery & Wholesale.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Every feature in Purchoon ERP addresses a specific friction point
            that grocery owners, Mandi dealers, and counter cashiers face every
            morning.
          </p>
        </div>

        {/* Horizontal Tab Navigation Bar */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-10 gap-2 scroll-container">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? "bg-[#0B5FFF] text-white shadow-md shadow-[#0B5FFF]/25"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    isActive ? "text-white" : "text-[#0B5FFF]"
                  }`}
                />
                <span>{tab.shortLabel}</span>
              </button>
            )
          })}
        </div>

        {/* Active Feature Interactive Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold">
                <span>{currentTab.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A0F1E] leading-snug">
                {currentTab.headline}
              </h3>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {currentTab.description}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-800 block">
                  Verified In-System Capabilities:
                </span>
                <ul className="space-y-2.5">
                  {currentTab.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Visual Component */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-tr from-[#0B5FFF]/15 to-[#00D4FF]/15 rounded-3xl blur-lg opacity-70" />
                <div className="relative">{currentTab.visualComponent}</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── SCREENSHOT SLOT 02: LOOSE-ITEM CALCULATOR TERMINAL ── */}
        <div className="mt-14 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#0B5FFF] block">
                Original Product Screenshot • Slot 02
              </span>
              <h3 className="text-xl font-bold text-[#0A0F1E]">
                Purchoon ERP • Loose-Item Calculator & Fast Billing Terminal
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500">
              Admin Replaceable Slot • 1600 × 900 (16:9)
            </span>
          </div>
          <ProductScreenshotFrame
            slot={{
              id: "purchoon-pos",
              slotNumber: "02",
              slotLabel: "Loose-Item Calculator Terminal",
              title: "Gram / Kg Precision Billing & Hybrid Cart Engine",
              subtitle: "Reverse Price-to-Weight & Fast Commodity Entry",
              dimensions: "1600 × 900 (16:9)",
              src: "/images/products/purchoon-pos.svg",
              altText:
                "Purchoon ERP Loose-Item Calculator and Fast Billing Terminal",
              caption:
                "High-speed billing interface supporting gram-level calculation, barcode item scanning, and instant customer ticket compilation.",
              category: "POS & Billing",
            }}
            variant="section"
          />
        </div>
      </div>
    </section>
  )
}
