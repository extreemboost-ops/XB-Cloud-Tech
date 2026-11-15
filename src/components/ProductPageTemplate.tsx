import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  ShoppingBag,
  Store,
  GraduationCap,
  HeartPulse,
  Factory,
  CreditCard,
  Layers,
  Truck,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Users,
  Building2,
  Sparkles,
  Calendar,
  ArrowRight,
  Check,
  ChevronDown,
  AlertTriangle,
  Scale,
  Package,
  Navigation,
  Calculator,
  BookOpen,
  Phone,
  Server,
  HardDrive,
  Lock,
  RefreshCw,
  X,
} from "lucide-react"
import { PRODUCTS_DATA, ProductData } from "../data/products"
import Breadcrumb from "./ui/Breadcrumb"

// Helper to resolve icon by string name
const ICON_MAP: Record<string, React.ElementType> = {
  ShoppingBag,
  Store,
  GraduationCap,
  HeartPulse,
  Factory,
  CreditCard,
  Layers,
  Truck,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Users,
  Building2,
  Scale,
  Package,
  Navigation,
  Calculator,
  BookOpen,
  AlertTriangle,
}

// ── PRODUCT SIMULATORS ────────────────────────────────────────────────────────

// 1. Storex POS Simulator
function StorexSimulator() {
  const [items, setItems] = useState([
    {
      name: "Oxford Slim-Fit Shirt (M)",
      sku: "SH-8841",
      price: 2400,
      qty: 1,
      barcode: "8964001284",
    },
    {
      name: "Denim Chino Trousers (32)",
      sku: "TR-5520",
      price: 3200,
      qty: 1,
      barcode: "8964009923",
    },
  ])
  const [tender, setTender] = useState<"cash" | "card" | "khata">("cash")
  const [receiptGenerated, setReceiptGenerated] = useState(false)

  const subtotal = items.reduce((acc, curr) => acc + curr.price * curr.qty, 0)
  const tax = Math.round(subtotal * 0.05)
  const total = subtotal + tax

  const addItem = () => {
    setItems([
      ...items,
      {
        name: "Casual Leather Belt (Black)",
        sku: "AC-1029",
        price: 950,
        qty: 1,
        barcode: "8964007712",
      },
    ])
  }

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-white font-sans shadow-2xl">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono uppercase text-emerald-400 font-bold tracking-wider">
            Storex Retail POS Terminal #01 — Operational Simulator
          </span>
        </div>
        <span className="text-xs text-neutral-400 font-mono">
          Cashier: Ahmed R. (Shift #4)
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Cart & Scanning */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value="SCANNER READY: [8964007712] Casual Leather Belt (Black)"
              className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-4 py-2.5 text-xs font-mono text-secondary focus:outline-none"
            />
            <button
              onClick={addItem}
              className="px-4 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-xl text-xs font-bold shrink-0 transition-colors cursor-pointer"
            >
              + Scan Item
            </button>
          </div>

          <div className="border border-neutral-800 rounded-xl overflow-hidden">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-neutral-950 text-neutral-400 border-b border-neutral-800">
                <tr>
                  <th className="p-3">SKU & Item Description</th>
                  <th className="p-3 text-right">Price</th>
                  <th className="p-3 text-center">Qty</th>
                  <th className="p-3 text-right">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800">
                {items.map((it, idx) => (
                  <tr key={idx} className="hover:bg-neutral-800/50">
                    <td className="p-3">
                      <div className="font-semibold text-neutral-200">
                        {it.name}
                      </div>
                      <div className="text-[10px] text-neutral-400">
                        Barcode: {it.barcode}
                      </div>
                    </td>
                    <td className="p-3 text-right text-neutral-300">
                      Rs. {it.price.toLocaleString()}
                    </td>
                    <td className="p-3 text-center text-primary font-bold">
                      {it.qty}
                    </td>
                    <td className="p-3 text-right text-white font-bold">
                      Rs. {(it.price * it.qty).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-between text-xs text-neutral-400 pt-2">
            <span>Items: {items.length} units</span>
            <span>Tax (5% GST): Rs. {tax.toLocaleString()}</span>
            <span className="text-sm font-bold text-white font-mono">
              Grand Total: Rs. {total.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Right: Tender & Thermal Output */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-3">
              Payment Tender
            </div>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {(["cash", "card", "khata"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTender(t)}
                  className={`py-2 px-2 rounded-lg text-xs font-semibold capitalize border transition-all cursor-pointer ${
                    tender === t
                      ? "bg-primary text-white border-primary shadow-xs"
                      : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white"
                  }`}
                >
                  {t === "khata" ? "Khata Ledger" : t}
                </button>
              ))}
            </div>

            {tender === "khata" && (
              <div className="p-2.5 bg-blue-500/10 border border-blue-500/30 rounded-lg text-[11px] text-blue-300 mb-3 space-y-1">
                <div className="font-bold">
                  Customer: Tariq Mahmood (#C-892)
                </div>
                <div>Current Balance: Rs. 4,200 | Credit Limit: Rs. 15,000</div>
                <div className="text-emerald-400">✓ Credit Approved</div>
              </div>
            )}

            <button
              onClick={() => setReceiptGenerated(true)}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" /> Print Thermal Receipt (F12)
            </button>
          </div>

          {receiptGenerated && (
            <div className="mt-4 p-3 bg-white text-neutral-900 rounded-lg font-mono text-[10px] space-y-1 border border-neutral-300 animate-in fade-in duration-200">
              <div className="text-center font-bold border-b border-dashed border-neutral-400 pb-1">
                STOREX RETAIL POS
              </div>
              <div className="flex justify-between text-[9px] text-neutral-600">
                <span>Date: 15-Nov-2026</span>
                <span>Bill #ST-9041</span>
              </div>
              <div className="border-b border-dashed border-neutral-400 py-1">
                {items.map((it, i) => (
                  <div key={i} className="flex justify-between">
                    <span className="truncate max-w-[120px]">{it.name}</span>
                    <span>Rs. {it.price * it.qty}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between font-bold pt-1">
                <span>TOTAL PAID ({tender.toUpperCase()})</span>
                <span>Rs. {total}</span>
              </div>
              <div className="text-center text-[9px] text-neutral-500 pt-1 border-t border-dashed border-neutral-300">
                Stock auto-deducted • Synchronized
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// 2. Purchoon Grocery Weight Simulator
function PurchoonSimulator() {
  const [mode, setMode] = useState<"weight" | "reverse">("weight")
  const [weightKg, setWeightKg] = useState("1.450")
  const [reverseRupees, setReverseRupees] = useState("150")
  const [selectedCommodity, setSelectedCommodity] = useState({
    name: "Daal Chana (Pulses)",
    pricePerKg: 280,
    unit: "Kg",
  })

  // Calculations
  const calculatedPrice = Math.round(
    parseFloat(weightKg || "0") * selectedCommodity.pricePerKg,
  )
  const calculatedWeightGrams = Math.round(
    (parseFloat(reverseRupees || "0") / selectedCommodity.pricePerKg) * 1000,
  )

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-white font-sans shadow-2xl">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono uppercase text-emerald-400 font-bold tracking-wider">
            Purchoon Weight Scale POS Engine — Scale Sync Active
          </span>
        </div>
        <span className="text-xs text-neutral-400 font-mono">
          Serial Port COM3 (CAS Scale Protocol)
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: Commodity Hotkeys */}
        <div className="space-y-3">
          <div className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
            Loose Commodity Hotkeys
          </div>
          <div className="grid grid-cols-1 gap-2">
            {[
              { name: "Daal Chana (Pulses)", pricePerKg: 280, unit: "Kg" },
              { name: "Super Basmati Rice", pricePerKg: 340, unit: "Kg" },
              { name: "Refined White Sugar", pricePerKg: 155, unit: "Kg" },
              { name: "Whole Wheat Flour (Atta)", pricePerKg: 120, unit: "Kg" },
            ].map((c) => (
              <button
                key={c.name}
                onClick={() => setSelectedCommodity(c)}
                className={`p-3 rounded-xl text-left border transition-all cursor-pointer flex items-center justify-between ${
                  selectedCommodity.name === c.name
                    ? "bg-emerald-500/20 border-emerald-500 text-white"
                    : "bg-neutral-950 border-neutral-800 text-neutral-300 hover:border-neutral-700"
                }`}
              >
                <div>
                  <div className="text-xs font-bold">{c.name}</div>
                  <div className="text-[10px] text-neutral-400">
                    Rate: Rs. {c.pricePerKg} / {c.unit}
                  </div>
                </div>
                <Package className="w-4 h-4 text-emerald-400" />
              </button>
            ))}
          </div>
        </div>

        {/* Column 2: Weight or Reverse Mode */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-neutral-300 uppercase tracking-wider">
              Calculation Mode
            </span>
            <div className="flex rounded-lg bg-neutral-950 p-1 border border-neutral-800">
              <button
                onClick={() => setMode("weight")}
                className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                  mode === "weight"
                    ? "bg-emerald-600 text-white"
                    : "text-neutral-400"
                }`}
              >
                By Weight (Kg)
              </button>
              <button
                onClick={() => setMode("reverse")}
                className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                  mode === "reverse"
                    ? "bg-emerald-600 text-white"
                    : "text-neutral-400"
                }`}
              >
                Reverse (Rs.)
              </button>
            </div>
          </div>

          {mode === "weight" ? (
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 space-y-3">
              <label className="text-xs text-neutral-400 block font-mono">
                Electronic Scale Input (Kg)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="0.05"
                  value={weightKg}
                  onChange={(e) => setWeightKg(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-2.5 font-mono text-xl text-emerald-400 font-bold focus:outline-none"
                />
                <span className="text-sm font-mono text-neutral-400 font-bold">
                  KG
                </span>
              </div>
              <div className="p-3 bg-neutral-900 rounded-lg text-xs space-y-1 font-mono">
                <div className="text-neutral-400">
                  Commodity: {selectedCommodity.name}
                </div>
                <div className="text-neutral-400">
                  Rate: Rs. {selectedCommodity.pricePerKg} / kg
                </div>
                <div className="text-lg font-bold text-white pt-1 border-t border-neutral-800">
                  Total: Rs. {calculatedPrice}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 space-y-3">
              <label className="text-xs text-neutral-400 block font-mono">
                Customer Cash Tender (Rs.)
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  step="10"
                  value={reverseRupees}
                  onChange={(e) => setReverseRupees(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-2.5 font-mono text-xl text-emerald-400 font-bold focus:outline-none"
                />
                <span className="text-sm font-mono text-neutral-400 font-bold">
                  PKR
                </span>
              </div>
              <div className="p-3 bg-neutral-900 rounded-lg text-xs space-y-1 font-mono">
                <div className="text-neutral-400">
                  Commodity: {selectedCommodity.name}
                </div>
                <div className="text-neutral-400">
                  Rate: Rs. {selectedCommodity.pricePerKg} / kg
                </div>
                <div className="text-lg font-bold text-emerald-400 pt-1 border-t border-neutral-800">
                  Dispense: {calculatedWeightGrams} Grams
                </div>
                <div className="text-[10px] text-neutral-500">
                  = {(calculatedWeightGrams / 1000).toFixed(3)} kg exact weight
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Column 3: Udhar & Bori Ledger */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
              Customer Udhar (Khata)
            </div>
            <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-xs space-y-1 font-mono mb-4">
              <div className="font-bold text-white">
                Khata #G-104: Haji Usman
              </div>
              <div className="text-neutral-400">Phone: 0300-5551928</div>
              <div className="text-rose-400">Previous Udhar: Rs. 3,850</div>
              <div className="text-emerald-400">
                Credit Allowed: Up to Rs. 20,000
              </div>
            </div>

            <div className="text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
              Warehouse Bori Balance
            </div>
            <div className="text-[11px] font-mono text-neutral-400 space-y-1">
              <div>• Sealed Bori: 14 Sacks (50kg each)</div>
              <div>• Current Open Bori: 32.45 kg remaining</div>
              <div className="text-emerald-400">
                • Shrinkage tolerance: 0.5% applied
              </div>
            </div>
          </div>

          <button className="w-full mt-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5">
            <CheckCircle2 className="w-4 h-4" /> Add Item to Customer Ticket
          </button>
        </div>
      </div>
    </div>
  )
}

// 3. CambridgeDesk Simulator
function CambridgeDeskSimulator() {
  const [tab, setTab] = useState<"challan" | "marksheet" | "sms">("challan")

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-white font-sans shadow-2xl">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-violet-400" />
          <span className="text-xs font-mono uppercase text-violet-400 font-bold tracking-wider">
            CambridgeDesk Academic & Financial Controller
          </span>
        </div>
        <div className="flex rounded-lg bg-neutral-950 p-1 border border-neutral-800">
          {(["challan", "marksheet", "sms"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-3 py-1 rounded text-xs font-bold capitalize transition-all cursor-pointer ${
                tab === t
                  ? "bg-violet-600 text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {t === "challan"
                ? "Bank Challan"
                : t === "marksheet"
                  ? "Marksheet GPA"
                  : "Parent SMS"}
            </button>
          ))}
        </div>
      </div>

      {tab === "challan" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-3 font-mono text-xs">
            <div className="text-neutral-300 font-bold text-sm">
              Automated 3-Copy Bank Challan Generator
            </div>
            <p className="text-neutral-400 leading-relaxed font-sans text-xs">
              System compiles tuition, lab fees, and automatically detects
              sibling concessions from student master records before producing
              printable barcode vouchers.
            </p>
            <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-3 space-y-1.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-neutral-400">Student Name:</span>
                <span className="text-white font-bold">
                  Ayla Zafar (Gr. 10-A)
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">GR Number:</span>
                <span className="text-neutral-300">CD-2024-0491</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Base Tuition Fee:</span>
                <span className="text-neutral-300">Rs. 18,500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">
                  Sibling Concession (20%):
                </span>
                <span className="text-emerald-400">- Rs. 3,700</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Science & Lab Charges:</span>
                <span className="text-neutral-300">Rs. 2,000</span>
              </div>
              <div className="flex justify-between pt-1.5 border-t border-neutral-800 text-sm font-bold text-violet-400">
                <span>Net Payable:</span>
                <span>Rs. 16,800</span>
              </div>
            </div>
          </div>

          <div className="bg-white text-neutral-900 rounded-xl p-4 font-mono text-[10px] border border-neutral-300 shadow-md">
            <div className="text-center font-bold text-xs border-b border-neutral-400 pb-1">
              ALLIED CAMBRIDGE GRAMMAR SCHOOL
            </div>
            <div className="text-center text-[9px] text-neutral-500 mb-2">
              BANK CHALLAN — STUDENT COPY (HBL A/C 0921-9941-01)
            </div>
            <div className="grid grid-cols-2 gap-1 text-[9px] mb-2">
              <div>Challan #: CD-NOV-8812</div>
              <div>Issue Date: 01-Nov-2026</div>
              <div>Due Date: 10-Nov-2026</div>
              <div>Late Fine: Rs. 500</div>
            </div>
            <div className="border-t border-b border-neutral-300 py-1 space-y-0.5">
              <div className="flex justify-between">
                <span>Tuition Fee</span>
                <span>18,500</span>
              </div>
              <div className="flex justify-between text-emerald-700">
                <span>Sibling Concession</span>
                <span>-3,700</span>
              </div>
              <div className="flex justify-between">
                <span>Science Lab</span>
                <span>2,000</span>
              </div>
            </div>
            <div className="flex justify-between font-bold text-xs pt-1.5">
              <span>TOTAL (WITHIN DUE DATE)</span>
              <span>Rs. 16,800</span>
            </div>
            <div className="mt-2 pt-2 border-t border-dashed border-neutral-300 text-center text-[8px] text-neutral-500">
              ||| ||||||| ||||||| |||||| |||||||||||||| (QR / Barcode Verified)
            </div>
          </div>
        </div>
      )}

      {tab === "marksheet" && (
        <div className="space-y-4 font-mono text-xs">
          <div className="flex items-center justify-between text-neutral-300">
            <span>
              Examination: Mid-Term Assessments 2026 (Grade 10 Cambridge)
            </span>
            <span className="text-emerald-400 font-bold">
              GPA: 3.84 / 4.00 (Grade: A*)
            </span>
          </div>
          <div className="border border-neutral-800 rounded-xl overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-950 text-neutral-400 border-b border-neutral-800">
                <tr>
                  <th className="p-3">Subject</th>
                  <th className="p-3 text-center">Max</th>
                  <th className="p-3 text-center">Obtained</th>
                  <th className="p-3 text-center">%</th>
                  <th className="p-3 text-center">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-800">
                {[
                  {
                    s: "English Language (1123)",
                    max: 100,
                    obt: 91,
                    pct: "91%",
                    g: "A*",
                  },
                  {
                    s: "Mathematics Syllabus D (4024)",
                    max: 100,
                    obt: 96,
                    pct: "96%",
                    g: "A*",
                  },
                  {
                    s: "Physics (5054)",
                    max: 100,
                    obt: 84,
                    pct: "84%",
                    g: "A",
                  },
                  {
                    s: "Chemistry (5070)",
                    max: 100,
                    obt: 88,
                    pct: "88%",
                    g: "A",
                  },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-neutral-800/40">
                    <td className="p-3 font-semibold text-neutral-200">
                      {row.s}
                    </td>
                    <td className="p-3 text-center text-neutral-400">
                      {row.max}
                    </td>
                    <td className="p-3 text-center font-bold text-white">
                      {row.obt}
                    </td>
                    <td className="p-3 text-center text-neutral-300">
                      {row.pct}
                    </td>
                    <td className="p-3 text-center font-bold text-violet-400">
                      {row.g}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === "sms" && (
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 max-w-lg mx-auto space-y-3">
          <div className="flex items-center justify-between text-xs text-neutral-400">
            <span>Automated Gateway: Telenor/Jazz Bulk SMS</span>
            <span className="text-emerald-400 font-bold">
              Delivered (08:34 AM)
            </span>
          </div>
          <div className="p-4 bg-neutral-900 rounded-xl border border-neutral-700 text-xs text-neutral-200 font-mono leading-relaxed">
            "Dear Parent, your child Ayla Zafar (Gr 10-A) is marked UNEXCUSED
            ABSENT today (15-Nov-2026). If this is an emergency, kindly contact
            School Admin at 021-3991823."
          </div>
          <div className="text-[11px] text-neutral-500 text-center font-sans">
            Dispatched automatically 30 minutes after gate attendance lock.
          </div>
        </div>
      )}
    </div>
  )
}

// 4. Pharmacy Simulator
function PharmacySimulator() {
  const [search, setSearch] = useState("Augmentin 625mg")

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-white font-sans shadow-2xl">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <HeartPulse className="w-4 h-4 text-rose-500" />
          <span className="text-xs font-mono uppercase text-rose-400 font-bold tracking-wider">
            Pharmacy ERP FEFO Counter & Chemical Salt Matcher
          </span>
        </div>
        <span className="text-xs text-neutral-400 font-mono">
          Dispensary DB: 26,410 Drug Formulations
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Search & FEFO Batch */}
        <div className="space-y-4">
          <div>
            <label className="text-xs text-neutral-400 block font-mono mb-1">
              Medicine Search (Brand Name / Generic Salt / Barcode)
            </label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-neutral-950 border border-neutral-700 rounded-xl p-2.5 font-mono text-xs text-rose-400 font-bold focus:outline-none"
            />
          </div>

          <div className="border border-neutral-800 rounded-xl p-4 bg-neutral-950 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white text-sm">
                Augmentin 625mg Tablets
              </span>
              <span className="px-2 py-0.5 bg-rose-500/20 text-rose-400 text-[10px] rounded font-bold">
                GSK Pharma
              </span>
            </div>
            <div className="text-[11px] text-neutral-400">
              Active Salt: Amoxicillin (500mg) + Clavulanic Acid (125mg)
            </div>

            <div className="space-y-2 pt-2 border-t border-neutral-800">
              <div className="text-[10px] text-neutral-400 uppercase tracking-wider font-bold">
                Available Batches (FEFO Dispensing Sequence)
              </div>
              <div className="p-2.5 bg-neutral-900 border border-emerald-500/40 rounded-lg flex items-center justify-between">
                <div>
                  <div className="text-emerald-400 font-bold">
                    Batch #AUG-2490 (Dispense First)
                  </div>
                  <div className="text-[10px] text-neutral-400">
                    Expiry: Oct 2027 • Rack #B-12
                  </div>
                </div>
                <span className="text-xs text-white font-bold">
                  8 Boxes (80 Strips)
                </span>
              </div>

              <div className="p-2.5 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-between opacity-60">
                <div>
                  <div className="text-neutral-300">Batch #AUG-3108</div>
                  <div className="text-[10px] text-neutral-400">
                    Expiry: Jun 2028 • Rack #B-12
                  </div>
                </div>
                <span className="text-xs text-neutral-400">15 Boxes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Salt Substitution Engine */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 space-y-3 font-mono text-xs">
          <div className="flex items-center justify-between">
            <span className="font-bold text-white">
              Generic Salt Substitution Matrix
            </span>
            <span className="text-emerald-400 text-[10px] font-bold">
              4 Verified In-Stock
            </span>
          </div>
          <p className="text-[11px] text-neutral-400 font-sans">
            If prescribed brand is stockout, dispenser can immediately provide
            equivalent salt therapy at customer-approved price tiers:
          </p>

          <div className="space-y-2">
            {[
              {
                brand: "Curam 625mg (Novartis)",
                price: "Rs. 380 / strip",
                status: "In Stock (12 pk)",
              },
              {
                brand: "Klavox 625mg (Bosch)",
                price: "Rs. 320 / strip",
                status: "In Stock (8 pk)",
              },
              {
                brand: "Co-Amoxiclav 625mg (Getz)",
                price: "Rs. 295 / strip",
                status: "In Stock (20 pk)",
              },
            ].map((alt, idx) => (
              <div
                key={idx}
                className="p-2.5 bg-neutral-900 rounded-lg border border-neutral-800 flex items-center justify-between hover:border-neutral-700 transition-colors"
              >
                <div>
                  <div className="font-bold text-neutral-200">{alt.brand}</div>
                  <div className="text-[10px] text-emerald-400">
                    {alt.status}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold">{alt.price}</div>
                  <button className="text-[10px] text-primary hover:text-secondary font-bold cursor-pointer">
                    Select Alt →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-2.5 bg-rose-500/10 border border-rose-500/30 rounded-lg text-[10px] text-rose-300 font-sans">
            Controlled Drugs Note: Narcotics Register DDR requires customer CNIC
            and physician registration.
          </div>
        </div>
      </div>
    </div>
  )
}

// 5. Industrial ERP Simulator
function IndustrialSimulator() {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-white font-sans shadow-2xl">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <Factory className="w-4 h-4 text-amber-500" />
          <span className="text-xs font-mono uppercase text-amber-400 font-bold tracking-wider">
            Industrial ERP Shop Floor Work Order & Multi-Level BOM
          </span>
        </div>
        <span className="text-xs text-neutral-400 font-mono">
          Work Order: #WO-2026-904
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 font-mono text-xs">
        {/* BOM Structure */}
        <div className="space-y-3">
          <div className="font-bold text-neutral-300 uppercase tracking-wider">
            Finished Product BOM
          </div>
          <div className="p-3 bg-neutral-950 border border-neutral-800 rounded-xl space-y-2">
            <div className="font-bold text-amber-400">
              Assembly: Industrial Gearbox #GB-400
            </div>
            <div className="text-[11px] text-neutral-400 pl-3 border-l-2 border-neutral-700 space-y-1">
              <div>├─ Cast Iron Casing (#RM-102) — 1 Unit</div>
              <div>├─ High-Carbon Steel Shaft (#RM-204) — 2 Units</div>
              <div>├─ Taper Roller Bearings (#SUB-09) — 4 Units</div>
              <div>├─ Helical Gear Set (#SUB-14) — 1 Set</div>
              <div>└─ Synthetic Gear Lubricant (#RM-801) — 2.5L</div>
            </div>
            <div className="pt-2 border-t border-neutral-800 text-[10px] text-emerald-400">
              BOM Cost Roll-Up: Rs. 42,500 / unit
            </div>
          </div>
        </div>

        {/* Shop Floor Stages */}
        <div className="space-y-3">
          <div className="font-bold text-neutral-300 uppercase tracking-wider">
            Shop Floor Routing Traveler
          </div>
          <div className="space-y-2">
            {[
              {
                stage: "1. CNC Machining",
                status: "Completed (Shift 1)",
                time: "45 mins",
                state: "text-emerald-400 border-emerald-500/40",
              },
              {
                stage: "2. Gear Heat Treatment",
                status: "In Progress (Oven 3)",
                time: "120 mins",
                state: "text-amber-400 border-amber-500/40",
              },
              {
                stage: "3. Sub-Assembly Line",
                status: "Queued (Bay 4)",
                time: "60 mins",
                state: "text-neutral-400 border-neutral-800",
              },
              {
                stage: "4. Quality Inspection",
                status: "Pending Clearance",
                time: "20 mins",
                state: "text-neutral-500 border-neutral-800",
              },
            ].map((st, i) => (
              <div
                key={i}
                className={`p-2.5 bg-neutral-950 border rounded-lg ${st.state}`}
              >
                <div className="flex justify-between font-bold">
                  <span>{st.stage}</span>
                  <span className="text-[10px]">{st.time}</span>
                </div>
                <div className="text-[10px] text-neutral-400">{st.status}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scrap & Cost Summary */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="font-bold text-neutral-300 uppercase tracking-wider">
              Scrap & Variance Ledger
            </div>
            <div className="space-y-2 text-[11px]">
              <div className="flex justify-between">
                <span className="text-neutral-400">Theoretical BOM Metal:</span>
                <span className="text-white">125.0 kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Actual Drawn Material:</span>
                <span className="text-white">128.5 kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">
                  Offcut Scrap Recovered:
                </span>
                <span className="text-amber-400">3.2 kg (Scrap Bin)</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-neutral-800 font-bold">
                <span className="text-neutral-300">Wastage Variance:</span>
                <span className="text-emerald-400">
                  +0.24% (Within 0.5% SLA)
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-neutral-900 rounded-lg border border-neutral-800 text-[10px] text-neutral-400">
            Work Order Batch: 50 Finished Units • Scheduled Dispatch:
            20-Nov-2026
          </div>
        </div>
      </div>
    </div>
  )
}

// 6. Qistmarket Simulator
function QistmarketSimulator() {
  const [assetPrice, setAssetPrice] = useState(120000)
  const [downPaymentPct, setDownPaymentPct] = useState(25)
  const [tenureMonths, setTenureMonths] = useState(12)

  const downPaymentAmount = Math.round((assetPrice * downPaymentPct) / 100)
  const financedAmount = assetPrice - downPaymentAmount
  const markupRate =
    tenureMonths === 6 ? 0.15 : tenureMonths === 12 ? 0.25 : 0.35
  const totalMarkup = Math.round(financedAmount * markupRate)
  const totalPayable = financedAmount + totalMarkup
  const monthlyInstallment = Math.round(totalPayable / tenureMonths)

  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-white font-sans shadow-2xl">
      <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <CreditCard className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider">
            Qistmarket Hire-Purchase & Installment Plan Generator
          </span>
        </div>
        <span className="text-xs text-neutral-400 font-mono">
          Contract Specimen: CN-8910
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-xs">
        {/* Sliders */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-neutral-300 mb-1">
              <span>Appliance / Asset Price:</span>
              <span className="font-bold text-white">
                Rs. {assetPrice.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={30000}
              max={300000}
              step={5000}
              value={assetPrice}
              onChange={(e) => setAssetPrice(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-neutral-300 mb-1">
              <span>Down Payment Percentage:</span>
              <span className="font-bold text-cyan-400">
                {downPaymentPct}% (Rs. {downPaymentAmount.toLocaleString()})
              </span>
            </div>
            <input
              type="range"
              min={15}
              max={50}
              step={5}
              value={downPaymentPct}
              onChange={(e) => setDownPaymentPct(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>

          <div>
            <span className="text-neutral-300 block mb-2">
              Installment Tenure:
            </span>
            <div className="grid grid-cols-3 gap-2">
              {[6, 12, 18].map((m) => (
                <button
                  key={m}
                  onClick={() => setTenureMonths(m)}
                  className={`py-2 rounded-lg font-bold border transition-all cursor-pointer ${
                    tenureMonths === m
                      ? "bg-cyan-500/20 border-cyan-400 text-white"
                      : "bg-neutral-950 border-neutral-800 text-neutral-400"
                  }`}
                >
                  {m} Months
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 bg-neutral-950 border border-neutral-800 rounded-xl space-y-1 text-[11px]">
            <div className="flex justify-between">
              <span className="text-neutral-400">Financed Principal:</span>
              <span>Rs. {financedAmount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-neutral-400">
                Markup ({Math.round(markupRate * 100)}%):
              </span>
              <span className="text-cyan-400">
                + Rs. {totalMarkup.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between pt-1 border-t border-neutral-800 font-bold text-white">
              <span>Monthly Payment:</span>
              <span className="text-emerald-400 text-sm">
                Rs. {monthlyInstallment.toLocaleString()} / mo
              </span>
            </div>
          </div>
        </div>

        {/* KYC & Recovery Ledger */}
        <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="font-bold text-neutral-300 uppercase tracking-wider">
              KYC & 2-Guarantor Compliance Checklist
            </div>
            <div className="space-y-2 text-[11px]">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Primary Applicant CNIC & Biometric Verified</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Guarantor #1: Residential Utility Bill Attached</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Guarantor #2: Employment & Salary Slip Approved</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-400">
                <Navigation className="w-4 h-4 shrink-0" />
                <span>
                  Recovery Route: Sector F-10, Area Officer #04 Assigned
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-neutral-800 text-[10px] text-neutral-400 space-y-1">
            <div>• Automated SMS Due Reminder: 3 Days Prior</div>
            <div>• Field Officer Mobile Receipt with Instant Client SMS</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── MASTER PRODUCT PAGE TEMPLATE ──────────────────────────────────────────────

interface ProductPageTemplateProps {
  product: ProductData
}

export default function ProductPageTemplate({
  product,
}: ProductPageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [demoModalOpen, setDemoModalOpen] = useState(false)
  const [demoSubmitted, setDemoSubmitted] = useState(false)
  const [demoForm, setDemoForm] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
  })
  const navigate = useNavigate()

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setDemoSubmitted(true)
    setTimeout(() => {
      setDemoSubmitted(false)
      setDemoModalOpen(false)
      setDemoForm({ name: "", email: "", phone: "", organization: "" })
    }, 2500)
  }

  // Choose the interactive simulator matching the product
  const renderSimulator = () => {
    switch (product.slug) {
      case "storex-erp":
        return <StorexSimulator />
      case "purchoon-erp":
        return <PurchoonSimulator />
      case "cambridgedesk":
        return <CambridgeDeskSimulator />
      case "pharmacy-erp":
        return <PharmacySimulator />
      case "industrial-erp":
        return <IndustrialSimulator />
      case "qistmarket-erp":
        return <QistmarketSimulator />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-light-base">
      {/* ── SECTION 1: BREADCRUMBS & TOP NAV STRIP ────────────────────────── */}
      <div className="bg-dark-base border-b border-neutral-900 py-3.5 px-6">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Products", to: "/products" },
              { label: product.name },
            ]}
          />
          <span className="hidden sm:inline-block text-[11px] font-mono text-neutral-400 uppercase tracking-wider">
            {product.category}
          </span>
        </div>
      </div>

      {/* ── SECTION 2: HERO & PRIMARY VALUE PROPOSITION ────────────────────── */}
      <section className="bg-dark-base text-white pt-14 pb-20 px-6 border-b border-neutral-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-primary/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border ${product.accentBg} ${product.color}`}
              >
                {product.category}
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-neutral-300">
                {product.badge}
              </span>
              <span className="text-xs font-mono text-neutral-400">
                Scale: {product.scale.join(" • ")}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              {product.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed">
              {product.heroSubhead}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setDemoModalOpen(true)}
                className="px-6 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-primary/20 flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-secondary" /> Book a{" "}
                {product.name} Demo
              </button>
              <a
                href="#modules"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white rounded-xl font-semibold text-sm transition-colors border border-white/10 flex items-center gap-2"
              >
                Explore Modules <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Operational Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/10">
              {product.stats.map((st, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-white">
                    {st.value}
                  </div>
                  <div className="text-[11px] text-neutral-400 font-medium uppercase tracking-wider">
                    {st.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: OPERATIONAL SIMULATOR SHOWCASE ───────────────────────── */}
      <section className="py-16 bg-neutral-950 px-6 border-b border-neutral-900">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="text-xs text-primary font-bold uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Interactive Workflow
                Simulation
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                {product.workflowTitle}
              </h2>
            </div>
            <p className="text-xs text-neutral-400 max-w-md">
              Interact with the live simulator below to experience actual
              inputs, calculations, and operational outputs produced by{" "}
              {product.name}.
            </p>
          </div>

          {renderSimulator()}
        </div>
      </section>

      {/* ── SECTION 4: TARGET AUDIENCE & OPERATIONAL FRICTION ───────────────── */}
      <section className="py-20 px-6 bg-white border-b border-neutral-200">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Target Audience */}
            <div className="lg:col-span-5 space-y-6">
              <div className="text-xs font-bold text-primary uppercase tracking-widest">
                Target Operations
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight leading-tight">
                Engineered Specifically for Your Business Model
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Generic retail and accounting software fails because it ignores
                industry-specific nuances. {product.name} is built from real
                operational audits:
              </p>

              <div className="space-y-3 pt-2">
                {product.targetAudience.map((aud, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-neutral-50 border border-neutral-200/80"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-neutral-800">
                      {aud}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Problems Solved */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-bold text-rose-600 uppercase tracking-widest">
                Operational Inefficiencies Eliminated
              </div>
              <h2 className="text-3xl font-bold text-neutral-900 tracking-tight leading-tight">
                Why Standard Business Software Breaks Down
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {product.businessProblems.map((prob, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-2"
                  >
                    <div className="flex items-center gap-2 text-rose-600 text-xs font-bold">
                      <AlertTriangle className="w-4 h-4 shrink-0" />
                      <span>{prob.problem}</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {prob.impact}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
                <div className="text-xs font-bold text-primary uppercase tracking-wider">
                  The {product.name} Solution
                </div>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  {product.solutionOverview}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CORE MODULES & CAPABILITIES ─────────────────────────── */}
      <section
        id="modules"
        className="py-24 px-6 bg-light-base border-b border-neutral-200"
      >
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs text-primary font-bold uppercase tracking-widest">
              Functional Architecture
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight">
              Six Enterprise Modules. One Cohesive System.
            </h2>
            <p className="text-sm md:text-base text-neutral-600">
              Never a disconnected bundle of 30 isolated features.{" "}
              {product.name} organizes your operations into dedicated functional
              domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.modules.map((mod, idx) => {
              const Icon = ICON_MAP[mod.iconName] || Layers
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-xs hover:shadow-lg hover:border-primary/40 transition-all flex flex-col"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-neutral-600 leading-relaxed mb-6">
                    {mod.desc}
                  </p>

                  <div className="border-t border-neutral-100 pt-4 mt-auto space-y-2">
                    {mod.features.map((feat, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2 text-[11px] text-neutral-700"
                      >
                        <Check className="w-3.5 h-3.5 text-success shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: FEATURE-TO-BUSINESS-OUTCOME MAPPING ──────────────────── */}
      <section className="py-20 px-6 bg-white border-b border-neutral-200">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs text-primary font-bold uppercase tracking-widest">
              Measurable ROI
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
              Feature-to-Business-Outcome Mapping
            </h2>
            <p className="text-sm text-neutral-600">
              Software is only as good as the operational efficiency it unlocks.
              See how specific system capabilities translate directly into
              business results:
            </p>
          </div>

          <div className="border border-neutral-200 rounded-2xl overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-neutral-50 text-neutral-600 border-b border-neutral-200 font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-4">Platform Capability</th>
                  <th className="p-4">Operational Shift</th>
                  <th className="p-4">Commercial Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {product.featureOutcomes.map((fo, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50/50">
                    <td className="p-4 font-bold text-neutral-900 whitespace-nowrap">
                      {fo.feature}
                    </td>
                    <td className="p-4 text-neutral-600">
                      {fo.operationalShift}
                    </td>
                    <td className="p-4 font-semibold text-primary">
                      {fo.businessOutcome}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: STEP-BY-STEP LIFECYCLE WORKFLOW ───────────────────────── */}
      <section className="py-20 px-6 bg-light-base border-b border-neutral-200">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs text-primary font-bold uppercase tracking-widest">
              System Execution
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
              The 4-Step Operational Flow
            </h2>
            <p className="text-sm text-neutral-600">
              How data transitions seamlessly through {product.name} from
              customer interaction to executive reporting:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.workflowSteps.map((ws, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-xs relative flex flex-col"
              >
                <div className="text-3xl font-black font-mono text-primary/30 mb-3">
                  {ws.step}
                </div>
                <h3 className="text-base font-bold text-neutral-900 mb-2">
                  {ws.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  {ws.desc}
                </p>

                <div className="border-t border-neutral-100 pt-3 mt-auto space-y-1 text-[11px] font-mono">
                  <div className="text-neutral-500">
                    <span className="text-neutral-400">In:</span> {ws.input}
                  </div>
                  <div className="text-primary font-semibold">
                    <span className="text-neutral-400">Out:</span> {ws.output}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: TECHNICAL SPECS & DEPLOYMENT ARCHITECTURE ───────────── */}
      <section className="py-20 px-6 bg-dark-base text-white border-b border-neutral-900">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs text-secondary font-bold uppercase tracking-widest">
              Infrastructure & Architecture
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Deployment, Hardware & Security Specs
            </h2>
            <p className="text-sm text-neutral-400">
              Enterprise reliability verified for both local on-premise
              installations and scalable cloud environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
              <Server className="w-6 h-6 text-primary" />
              <h4 className="text-sm font-bold text-white">Deployment Modes</h4>
              <ul className="text-xs text-neutral-400 space-y-1.5">
                {product.technicalSpecs.deployment.map((d, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
              <HardDrive className="w-6 h-6 text-secondary" />
              <h4 className="text-sm font-bold text-white">
                Hardware Compatibility
              </h4>
              <ul className="text-xs text-neutral-400 space-y-1.5">
                {product.technicalSpecs.hardware.map((h, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
              <Lock className="w-6 h-6 text-emerald-400" />
              <h4 className="text-sm font-bold text-white">Security & Audit</h4>
              <ul className="text-xs text-neutral-400 space-y-1.5">
                {product.technicalSpecs.security.map((s, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <Check className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 space-y-3">
              <RefreshCw className="w-6 h-6 text-amber-400" />
              <h4 className="text-sm font-bold text-white">
                Offline & Database
              </h4>
              <div className="text-xs text-neutral-400 space-y-2">
                <div>
                  <span className="text-neutral-300 font-bold block">
                    Engine:
                  </span>
                  {product.technicalSpecs.database}
                </div>
                <div>
                  <span className="text-neutral-300 font-bold block">
                    Offline Resilience:
                  </span>
                  {product.technicalSpecs.offlineCapability}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: 4-STAGE ONBOARDING & IMPLEMENTATION ──────────────────── */}
      <section className="py-20 px-6 bg-white border-b border-neutral-200">
        <div className="max-w-[1200px] mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs text-primary font-bold uppercase tracking-widest">
              Implementation Pathway
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
              From Discovery to Go-Live in Days, Not Months
            </h2>
            <p className="text-sm text-neutral-600">
              Our engineering team handles data migration, hardware pairing, and
              hands-on staff training.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.onboardingProcess.map((ob, idx) => (
              <div
                key={idx}
                className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200/80 space-y-3 relative"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-primary px-2.5 py-1 rounded bg-primary/10">
                    {ob.phase}
                  </span>
                  <span className="text-xs font-mono text-neutral-500 font-medium">
                    {ob.time}
                  </span>
                </div>
                <h3 className="text-base font-bold text-neutral-900">
                  {ob.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {ob.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 10: FREQUENTLY ASKED QUESTIONS ─────────────────────────── */}
      <section className="py-20 px-6 bg-light-base border-b border-neutral-200">
        <div className="max-w-[800px] mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="text-xs text-primary font-bold uppercase tracking-widest">
              Buyer Questions
            </div>
            <h2 className="text-3xl font-bold text-neutral-900 tracking-tight">
              Frequently Asked Questions About {product.name}
            </h2>
          </div>

          <div className="space-y-3">
            {product.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-neutral-200/80 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left font-bold text-neutral-900 text-sm flex items-center justify-between gap-4 cursor-pointer hover:text-primary transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 11: FINAL CONVERSION BANNER ─────────────────────────────── */}
      <section className="py-20 px-6 bg-dark-base text-white text-center">
        <div className="max-w-[900px] mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-secondary font-bold">
            Ready to Upgrade Your Operations?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Schedule a Live Walkthrough of {product.name}
          </h2>
          <p className="text-sm md:text-base text-neutral-300 max-w-xl mx-auto leading-relaxed">
            See how {product.name} handles your specific transactions, inventory
            items, and ledgers in a 20-minute tailored demonstration.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              onClick={() => setDemoModalOpen(true)}
              className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-secondary" /> Book a Dedicated
              Demo
            </button>
            <button
              onClick={() => navigate(`/contact?product=${product.slug}`)}
              className="px-8 py-4 bg-white/10 hover:bg-white/15 text-white rounded-xl font-semibold text-sm transition-colors border border-white/10 flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-4 h-4" /> Discuss Custom Specs
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION 12: RELATED PRODUCTS NAVIGATION ────────────────────────── */}
      <section className="py-16 px-6 bg-light-base border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-neutral-900">
              Complementary Software Solutions
            </h3>
            <Link
              to="/products"
              className="text-xs font-bold text-primary hover:text-primary/80 flex items-center gap-1"
            >
              All 6 Products Directory <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.relatedProducts.map((relSlug) => {
              const rel = PRODUCTS_DATA[relSlug]
              if (!rel) return null
              return (
                <Link
                  key={rel.slug}
                  to={`/products/${rel.slug}`}
                  className="bg-white rounded-xl p-5 border border-neutral-200/80 hover:border-primary/40 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="text-[10px] font-bold text-primary uppercase tracking-wider mb-1">
                      {rel.category}
                    </div>
                    <div className="font-bold text-neutral-900 text-base group-hover:text-primary transition-colors">
                      {rel.name}
                    </div>
                    <p className="text-xs text-neutral-500 mt-1 line-clamp-2">
                      {rel.tagline}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-primary">
                    <span>Explore Platform</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── DEMO MODAL ────────────────────────────────────────────────────── */}
      {demoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-dark-base border border-white/15 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative text-white">
            <button
              onClick={() => setDemoModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6 space-y-1">
              <div className="text-xs font-bold text-secondary uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Book a Product Walkthrough
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {product.name} Demo
              </h3>
              <p className="text-xs text-neutral-400">
                Experience the live platform tailored for your operational
                requirements.
              </p>
            </div>

            {demoSubmitted ? (
              <div className="p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">
                  Demo Request Received
                </h4>
                <p className="text-xs text-neutral-300">
                  Our product implementation specialist will reach out within 2
                  business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleDemoSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={demoForm.name}
                    onChange={(e) =>
                      setDemoForm({ ...demoForm, name: e.target.value })
                    }
                    placeholder="e.g. Asad Siddiqui"
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={demoForm.email}
                    onChange={(e) =>
                      setDemoForm({ ...demoForm, email: e.target.value })
                    }
                    placeholder="name@company.com"
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={demoForm.phone}
                    onChange={(e) =>
                      setDemoForm({ ...demoForm, phone: e.target.value })
                    }
                    placeholder="+92 300 1234567"
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-300 mb-1">
                    Company / Organization Name
                  </label>
                  <input
                    type="text"
                    value={demoForm.organization}
                    onChange={(e) =>
                      setDemoForm({ ...demoForm, organization: e.target.value })
                    }
                    placeholder="e.g. Crescent Retail Group"
                    className="w-full bg-neutral-900 border border-neutral-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-primary"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-xs transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Calendar className="w-4 h-4 text-secondary" /> Confirm Demo
                  Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
