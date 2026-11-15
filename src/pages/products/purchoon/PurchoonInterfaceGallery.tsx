import { useState } from "react"
import {
  Monitor,
  Maximize2,
  X,
  Scale,
  CreditCard,
  Package,
  Truck,
  DollarSign,
} from "lucide-react"
import ProductScreenshotFrame from "../../../components/ProductScreenshotFrame"

interface ScreenItem {
  id: string
  title: string
  category: string
  tag: string
  icon: typeof Monitor
  description: string
  headline?: string
  renderInterface: () => React.ReactNode
}

export default function PurchoonInterfaceGallery() {
  const [selectedScreenId, setSelectedScreenId] = useState<string>("pos")
  const [isZoomOpen, setIsZoomOpen] = useState<boolean>(false)

  const screens: ScreenItem[] = [
    {
      id: "pos",
      title: "Live POS & Weight Scale Terminal",
      category: "Counter Operations",
      tag: "Terminal 01",
      icon: Scale,
      description:
        "High-velocity counter interface featuring serial weight scale sync, dual barcode + weight cart, and instant reverse price-to-weight hotkeys.",
      renderInterface: () => (
        <div className="bg-[#0A0F1E] text-white p-5 rounded-xl font-mono text-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-[#00D4FF] font-bold">
              PURCHOON POS v3.4 • COUNTER A
            </span>
            <span className="text-emerald-400">
              RS232 SCALE: 1.450 kg (STABLE)
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-slate-900 p-2 rounded border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block">
                ITEM SCANNED
              </span>
              <span className="font-bold text-white text-[11px]">
                Basmati Rice
              </span>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block">
                RATE PER KG
              </span>
              <span className="font-bold text-white text-[11px]">
                Rs. 320.00
              </span>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block">
                ITEM TOTAL
              </span>
              <span className="font-bold text-emerald-400 text-[11px]">
                Rs. 464.00
              </span>
            </div>
          </div>

          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1.5 text-[11px]">
            <div className="text-slate-400 uppercase text-[10px]">
              Active Customer Cart (3 Items)
            </div>
            <div className="flex justify-between text-slate-200">
              <span>1x Sugar (Loose 2kg @ Rs. 200)</span>
              <span>Rs. 400.00</span>
            </div>
            <div className="flex justify-between text-slate-200">
              <span>1x Daal Chana (Loose 500g @ Rs. 260)</span>
              <span>Rs. 130.00</span>
            </div>
            <div className="flex justify-between text-[#00D4FF]">
              <span>1x Basmati Rice (1.450kg @ Rs. 320)</span>
              <span>Rs. 464.00</span>
            </div>
            <div className="border-t border-slate-800 pt-2 flex justify-between font-bold text-white text-sm">
              <span>TOTAL CART AMOUNT:</span>
              <span className="text-emerald-400">Rs. 994.00</span>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 rounded text-center">
              [F1] CASH TENDER
            </button>
            <button className="flex-1 bg-[#0B5FFF] hover:bg-blue-600 text-white font-bold py-2 rounded text-center">
              [F2] UDHAR KHATA
            </button>
          </div>
        </div>
      ),
    },
    {
      id: "khata",
      title: "Customer Digital Khata Ledger",
      category: "Credit Management",
      tag: "Party Accounts",
      icon: CreditCard,
      description:
        "Complete customer credit database with CNIC records, credit limit ceilings, running balance verification, and one-click WhatsApp/SMS statement dispatch.",
      renderInterface: () => (
        <div className="bg-[#0A0F1E] text-white p-5 rounded-xl font-mono text-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-white font-bold">
              CUSTOMER LEDGER: HAJI ASLAM (#104)
            </span>
            <span className="text-amber-400">CREDIT LIMIT: Rs. 25,000</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="bg-slate-900 p-2 rounded border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block">
                TOTAL PURCHASES
              </span>
              <span className="font-bold text-white text-[11px]">
                Rs. 42,500
              </span>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block">
                TOTAL PAYMENTS
              </span>
              <span className="font-bold text-emerald-400 text-[11px]">
                Rs. 38,200
              </span>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block">
                CURRENT DUE
              </span>
              <span className="font-bold text-amber-400 text-[11px]">
                Rs. 4,300
              </span>
            </div>
          </div>

          <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800 space-y-1 text-[10px]">
            <div className="text-slate-400 uppercase">
              Recent Ledger Entries
            </div>
            <div className="flex justify-between text-slate-300 py-0.5 border-b border-slate-900">
              <span>08 Nov - Grocery Invoice #1740</span>
              <span className="text-rose-400">+Rs. 2,100</span>
            </div>
            <div className="flex justify-between text-slate-300 py-0.5 border-b border-slate-900">
              <span>10 Nov - Cash Payment via Bank</span>
              <span className="text-emerald-400">-Rs. 2,000</span>
            </div>
            <div className="flex justify-between text-slate-300 py-0.5">
              <span>14 Nov - Today's Weighed Bill #1842</span>
              <span className="text-rose-400">+Rs. 994</span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-1 text-[11px]">
            <span className="text-slate-400">
              Status: Account In Good Standing
            </span>
            <span className="text-[#00D4FF] underline cursor-pointer">
              Print Statement (Urdu)
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "inventory",
      title: "Bulk Bori Inventory & Repacking Hub",
      category: "Warehouse Stock",
      tag: "Sack Conversion",
      icon: Package,
      headline: "Bulk Sack Unpack with Shrinkage Ledgers",
      description:
        "Manage wholesale sacks (bori) in the back warehouse while tracking active loose kilograms in display bins. Automatically records moisture loss and repacking tare deductions.",
      renderInterface: () => (
        <div className="bg-[#0A0F1E] text-white p-5 rounded-xl font-mono text-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-white font-bold">
              WAREHOUSE SACK MASTER INVENTORY
            </span>
            <span className="text-emerald-400">WAREHOUSE A • AISLE 4</span>
          </div>

          <div className="space-y-2 text-[11px]">
            <div className="bg-slate-900 p-2.5 rounded border border-slate-800 flex justify-between items-center">
              <div>
                <span className="text-white font-bold block">
                  Super Basmati Rice (50kg Bori)
                </span>
                <span className="text-[10px] text-slate-400">
                  Landed Cost: Rs. 14,200/sack
                </span>
              </div>
              <div className="text-right">
                <span className="text-[#00D4FF] font-bold block">
                  18 Bori in Stock
                </span>
                <span className="text-[10px] text-slate-400">
                  Loose Bin: 34.5 kg
                </span>
              </div>
            </div>

            <div className="bg-slate-900 p-2.5 rounded border border-slate-800 flex justify-between items-center">
              <div>
                <span className="text-white font-bold block">
                  White Sugar (50kg Sacks)
                </span>
                <span className="text-[10px] text-slate-400">
                  Landed Cost: Rs. 9,400/sack
                </span>
              </div>
              <div className="text-right">
                <span className="text-emerald-400 font-bold block">
                  32 Bori in Stock
                </span>
                <span className="text-[10px] text-slate-400">
                  Loose Bin: 82.0 kg
                </span>
              </div>
            </div>

            <div className="bg-slate-900 p-2.5 rounded border border-slate-800 flex justify-between items-center">
              <div>
                <span className="text-white font-bold block">
                  Daal Chana (40kg Bori)
                </span>
                <span className="text-[10px] text-slate-400">
                  Landed Cost: Rs. 9,800/sack
                </span>
              </div>
              <div className="text-right">
                <span className="text-amber-400 font-bold block">
                  4 Bori [LOW STOCK]
                </span>
                <span className="text-[10px] text-slate-400">
                  Loose Bin: 12.0 kg
                </span>
              </div>
            </div>
          </div>

          <div className="p-2 bg-slate-950 rounded border border-slate-800 text-[10px] text-slate-400 flex justify-between">
            <span>Shrinkage Tolerance: 1.0%</span>
            <span className="text-emerald-400 font-bold">
              Unpack Bori to Bin [F4]
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "supplier",
      title: "Supplier Mandi Purchases & Freight Invoices",
      category: "Procurement",
      tag: "Mandi Accounts",
      icon: Truck,
      headline: "Landed Procurement Costing",
      description:
        "Record incoming Mandi supplies with breakdown of base price, transport vehicle carriage, labour porterage, and commission charges to calculate actual cost per sack.",
      renderInterface: () => (
        <div className="bg-[#0A0F1E] text-white p-5 rounded-xl font-mono text-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-white font-bold">
              MANDI PURCHASE INVOICE #M-891
            </span>
            <span className="text-[#00D4FF]">VEHICLE: LES-4821</span>
          </div>

          <div className="space-y-1.5 text-slate-300 text-[11px]">
            <div className="flex justify-between">
              <span className="text-slate-400">Supplier:</span>
              <span className="text-white font-bold">
                Al-Madina Mandi Commission Agents
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">
                Base Goods Value (20 Sacks):
              </span>
              <span>Rs. 280,000.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">
                Transport Freight / Carriage:
              </span>
              <span className="text-amber-400">+Rs. 3,500.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Labour & Mazdoori:</span>
              <span className="text-amber-400">+Rs. 1,000.00</span>
            </div>
            <div className="border-t border-slate-800 pt-1.5 flex justify-between font-bold text-white">
              <span>FINAL LANDED COST:</span>
              <span className="text-emerald-400">Rs. 284,500.00</span>
            </div>
            <div className="flex justify-between text-slate-400 text-[10px]">
              <span>Effective Cost Per 50kg Sack:</span>
              <span className="text-[#00D4FF] font-bold">
                Rs. 14,225.00 / sack (Rs. 284.5/kg)
              </span>
            </div>
          </div>

          <div className="p-2 bg-blue-950/60 border border-blue-800/80 rounded text-blue-300 text-[10px]">
            Supplier ledger debited. Cost price updated across retail pricing
            tables.
          </div>
        </div>
      ),
    },
    {
      id: "reconciliation",
      title: "Day-End Cashier Drawer Reconciliation",
      category: "Financial Control",
      tag: "Audit Trail",
      icon: DollarSign,
      headline: "Daily Cash Balancing & Expense Closure",
      description:
        "Perform zero-drift cash drawer balancing at the close of every shift. Compare expected cash against actual counted currency to eliminate cashier leakage.",
      renderInterface: () => (
        <div className="bg-[#0A0F1E] text-white p-5 rounded-xl font-mono text-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-800 pb-2 text-slate-400">
            <span className="text-white font-bold">
              SHIFT CASH RECONCILIATION • TERMINAL 01
            </span>
            <span className="text-emerald-400">SHIFT: EVENING CLOSING</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-[10px] text-slate-400 block">
                Opening Cash Float
              </span>
              <span className="font-bold text-white">Rs. 10,000.00</span>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-[10px] text-slate-400 block">
                Cash Sales Collected
              </span>
              <span className="font-bold text-emerald-400">+Rs. 62,450.00</span>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-[10px] text-slate-400 block">
                Khata Udhar Recoveries
              </span>
              <span className="font-bold text-emerald-400">+Rs. 12,500.00</span>
            </div>
            <div className="bg-slate-900 p-2 rounded border border-slate-800">
              <span className="text-[10px] text-slate-400 block">
                Daily Shop Expenses Paid
              </span>
              <span className="font-bold text-rose-400">-Rs. 1,800.00</span>
            </div>
          </div>

          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 space-y-1.5 text-[11px]">
            <div className="flex justify-between">
              <span className="text-slate-400">System Expected Cash:</span>
              <span className="text-white font-bold">Rs. 83,150.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Physical Cash Counted:</span>
              <span className="text-[#00D4FF] font-bold">Rs. 83,150.00</span>
            </div>
            <div className="flex justify-between border-t border-slate-800 pt-1 font-bold text-emerald-400">
              <span>DRAWER BALANCE VARIANCE:</span>
              <span>Rs. 0.00 (PERFECT BALANCE)</span>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const currentScreen =
    screens.find((s) => s.id === selectedScreenId) || screens[0]

  return (
    <section className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B5FFF]/10 border border-[#0B5FFF]/20 text-[#0B5FFF] text-xs font-semibold">
            <Monitor className="w-3.5 h-3.5" />
            <span>Product Interface Gallery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A0F1E] tracking-tight">
            Designed for Real Counter Speed &{" "}
            <span className="text-[#0B5FFF]">Accounting Control.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Explore the core terminal screens that power daily store operations
            — from sub-second weighing to customer credit ledgers.
          </p>
        </div>

        {/* Screen Selector Pills */}
        <div className="flex items-center justify-start lg:justify-center overflow-x-auto pb-4 mb-8 gap-2 scroll-container">
          {screens.map((screen) => {
            const isSelected = selectedScreenId === screen.id
            const Icon = screen.icon
            return (
              <button
                key={screen.id}
                onClick={() => setSelectedScreenId(screen.id)}
                className={`px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? "bg-[#0B5FFF] text-white shadow-md shadow-[#0B5FFF]/20"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/80"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{screen.title}</span>
              </button>
            )
          })}
        </div>

        {/* Dashboard Preview Browser Frame */}
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden relative">
          {/* Browser / Desktop Window Bar */}
          <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 font-mono text-xs text-slate-400 hidden sm:inline-block">
                Purchoon ERP Desktop System • {currentScreen.title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-[#00D4FF] bg-[#00D4FF]/10 border border-[#00D4FF]/30 px-2.5 py-0.5 rounded-full">
                {currentScreen.tag}
              </span>
              <button
                onClick={() => setIsZoomOpen(true)}
                className="text-slate-400 hover:text-white p-1 transition-colors cursor-pointer"
                title="Expand Screen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Screen Content Body */}
          <div className="p-6 sm:p-8">
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-1">
                {currentScreen.title}
              </h3>
              <p className="text-xs text-slate-400">
                {currentScreen.description}
              </p>
            </div>

            <div className="pt-2">{currentScreen.renderInterface()}</div>
          </div>

          {/* Internal TODO Notice clearly marked as illustrative preview */}
          <div className="px-6 py-3 bg-slate-950/80 border-t border-slate-800 text-center text-[10px] text-slate-500 font-mono">
            * Illustrative UI Preview • Based on Purchoon ERP v3.4 Desktop POS
            Specification
            {/* TODO: Replace with live operational hardware lab photography upon physical POS deployment */}
          </div>
        </div>

        {/* Modal Lightbox for Zoom */}
        {isZoomOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="bg-[#0A0F1E] border border-slate-800 rounded-2xl w-full max-w-4xl p-6 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setIsZoomOpen(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-6">
                <span className="text-xs font-mono text-[#00D4FF] uppercase tracking-wider">
                  Full Screen Preview
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {currentScreen.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  {currentScreen.description}
                </p>
              </div>

              <div>{currentScreen.renderInterface()}</div>
            </div>
          </div>
        )}
        {/* ── SCREENSHOT SLOT 04: WHOLESALE BORI & WAREHOUSE ── */}
        <div className="mt-14 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-[#0B5FFF] block">
                Original Product Screenshot • Slot 04
              </span>
              <h3 className="text-xl font-bold text-[#0A0F1E]">
                Purchoon ERP • Wholesale Bori Receiving & Warehouse Stacking
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500">
              Admin Replaceable Slot • 1600 × 900 (16:9)
            </span>
          </div>
          <ProductScreenshotFrame
            slot={{
              id: "purchoon-wholesale",
              slotNumber: "04",
              slotLabel: "Wholesale Bori Receiving & Warehouse",
              title: "50kg Sack Deduction, Driver Challans & Lot Averaging",
              subtitle: "Bulk Grain Intake & Tare Weight Allowance",
              dimensions: "1600 × 900 (16:9)",
              src: "/images/products/purchoon-wholesale.svg",
              altText:
                "Purchoon ERP Wholesale Bori Goods Receiving and Warehouse Stacking",
              caption:
                "Wholesale receiving workflow managing truck weighbridge gross weights, tare sack deductions, and bulk-to-loose stock conversion.",
              category: "Wholesale Operations",
            }}
            variant="section"
          />
        </div>
      </div>
    </section>
  )
}
