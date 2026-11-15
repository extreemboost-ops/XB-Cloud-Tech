export interface ProductModule {
  title: string
  desc: string
  features: string[]
  iconName: string
}

export interface WorkflowStep {
  step: string
  title: string
  desc: string
  input: string
  output: string
}

export interface FeatureOutcome {
  feature: string
  operationalShift: string
  businessOutcome: string
}

export interface TechnicalSpecs {
  deployment: string[]
  hardware: string[]
  security: string[]
  database: string
  offlineCapability: string
}

export interface OnboardingPhase {
  phase: string
  title: string
  time: string
  details: string
}

export interface ProductFAQ {
  question: string
  answer: string
}

export interface ProductData {
  id: string
  slug: string
  name: string
  category: string
  industry: string
  scale: string[]
  tagline: string
  heroHeadline: string
  heroSubhead: string
  badge: string
  color: string
  accentBg: string
  targetAudience: string[]
  businessProblems: {
    problem: string
    impact: string
  }[]
  solutionOverview: string
  modules: ProductModule[]
  workflowTitle: string
  workflowSteps: WorkflowStep[]
  featureOutcomes: FeatureOutcome[]
  technicalSpecs: TechnicalSpecs
  onboardingProcess: OnboardingPhase[]
  faqs: ProductFAQ[]
  relatedProducts: string[]
  stats: {
    value: string
    label: string
  }[]
  differentiatorTitle: string
  differentiatorDesc: string
  differentiatorFeatures: string[]
}

export const PRODUCTS_DATA: Record<string, ProductData> = {
  "storex-erp": {
    id: "storex",
    slug: "storex-erp",
    name: "Storex ERP",
    category: "Retail & Multi-Branch POS",
    industry: "Retail & POS",
    scale: ["Single Outlet", "Multi-Branch", "Growing Retail Chains"],
    tagline:
      "High-speed retail checkout, live multi-branch inventory, and supplier ledgers.",
    heroHeadline: "Take Control of Your Store, Stock, and Business Operations.",
    heroSubhead:
      "Manage inventory, suppliers, sales, customer balances, and daily cashier reconciliations through one connected retail management platform engineered for continuous uptime.",
    badge: "Most Popular",
    color: "text-blue-500",
    accentBg: "bg-blue-500/10 border-blue-500/30",
    targetAudience: [
      "Retail apparel, footwear, and boutique stores",
      "Consumer electronics and mobile accessories shops",
      "Departmental stores and general merchandise outlets",
      "Multi-branch retail chains needing synchronized inventory",
      "Wholesale-cum-retail traders with customer credit ledgers",
    ],
    businessProblems: [
      {
        problem: "Blind Stockouts & Inaccurate Stock Counts",
        impact:
          "Cashiers sell items that are out of stock while overstocked items gather dust due to disconnected manual registers and missing minimum-threshold reorder alerts.",
      },
      {
        problem: "Untracked Customer Credit & Disputed Khata",
        impact:
          "Manual paper diaries result in lost payments, disputed balances with regular customers, and untracked outstanding receivables.",
      },
      {
        problem: "Disorganized Supplier Bills & Payables",
        impact:
          "Difficulty tracking which supplier invoices are partially paid, which goods were returned, and actual vendor debt aging.",
      },
      {
        problem: "Cash Register Leaks & Blind End-of-Day Balancing",
        impact:
          "Shift cashiers leave without clear drawer reconciliation, making cash drawer discrepancies and unrecorded discounts difficult to catch.",
      },
    ],
    solutionOverview:
      "Storex ERP unifies point-of-sale scanning, multi-location stock synchronization, automated purchase order generation, customer credit limits, and end-of-day cash drawer balancing into a streamlined, offline-resilient desktop and cloud system.",
    modules: [
      {
        title: "High-Speed Barcode POS & Billing",
        desc: "Engineered for sub-second barcode lookups, split payment tenders, and instant receipt generation.",
        features: [
          "Rapid 1D/2D barcode scanning with keyboard shortcut navigation",
          "Split tenders: Cash, Debit/Credit Card, Bank Transfer, and Credit (Khata)",
          "Customer hold-cart and multi-register queue management",
          "Item return & exchange processing with receipt barcode validation",
          "Configurable thermal receipt printing (58mm, 80mm, and A4 invoice formats)",
        ],
        iconName: "ShoppingBag",
      },
      {
        title: "Multi-Location Inventory & Stock Synchronization",
        desc: "Real-time stock valuation, inter-branch stock transfers, and automated reorder triggers.",
        features: [
          "Batch, size, color, and variant-level SKU organization",
          "Automated minimum-stock reorder alerts and purchase suggestions",
          "Branch-to-branch stock transfer requests with dispatch/receipt verification",
          "Built-in barcode label designer and bulk label generation",
          "Dead-stock identification and inventory aging analytics",
        ],
        iconName: "Layers",
      },
      {
        title: "Supplier Procurement & Goods Received Notes (GRN)",
        desc: "End-to-end procurement workflow from PO generation to vendor ledger payment balancing.",
        features: [
          "Formal Purchase Order (PO) dispatch and vendor quote tracking",
          "Goods Received Note (GRN) verification against supplier invoices",
          "Purchase returns with automated credit note deduction",
          "Supplier payment ledger with outstanding payment aging reports",
          "Historical supplier price variance tracking",
        ],
        iconName: "Truck",
      },
      {
        title: "Customer Credit (Khata) & Relationship Management",
        desc: "Digital customer ledgers with credit limit enforcement and automated statement generation.",
        features: [
          "Individual customer credit ceiling and outstanding balance tracking",
          "Instant Khata ledger lookup during POS checkout with PIN protection",
          "Automated payment receipt generation and SMS ledger notification",
          "Customer purchase history and frequent-buyer reward tiers",
          "Receivables aging reports (Current, 30 days, 60 days, 90+ days)",
        ],
        iconName: "CreditCard",
      },
      {
        title: "Cash Drawer Reconciliation & Shift Z-Reports",
        desc: "Zero-leakage cashier shift management with strict open/close audit trails.",
        features: [
          "Cashier float declaration and mid-shift expense vouchers",
          "Automated End-of-Day Z-Report with cash, card, and credit breakdown",
          "Expected cash vs. physical cash counted discrepancy logging",
          "User role permissions: prevent unauthorized discounts, price edits, or void sales",
          "Manager override authorization for special cancellations",
        ],
        iconName: "ShieldCheck",
      },
      {
        title: "Executive Business Analytics & Tax Reporting",
        desc: "Actionable operational visibility into category margins, top-performing staff, and net profit.",
        features: [
          "Gross margin and net profitability reporting per SKU and category",
          "Hourly peak-sales traffic charts for staffing optimization",
          "Cashier sales productivity and average basket size metrics",
          "Sales tax and VAT-compliant summary export in Excel and PDF",
          "One-click CSV/Excel export for accountants and auditors",
        ],
        iconName: "TrendingUp",
      },
    ],
    workflowTitle: "Daily Storex Retail Transaction Lifecycle",
    workflowSteps: [
      {
        step: "01",
        title: "Item Scan & Cart Assembly",
        desc: "Cashier scans barcode. The system verifies real-time stock availability, applies scheduled promotions, and computes tiered discounts in under 200ms.",
        input: "Barcode / SKU lookup",
        output: "Live subtotal with tax calculation",
      },
      {
        step: "02",
        title: "Tender Selection & Split Payment",
        desc: "Customer selects payment method. System handles split cash/card, checks customer credit limit if Khata is chosen, and approves transaction.",
        input: "Payment amount & tender type",
        output: "Validated payment authorization",
      },
      {
        step: "03",
        title: "Receipt Dispatch & Stock Deduction",
        desc: "ESC/POS thermal printer cuts receipt. Inventory counts update immediately across local and central databases, adjusting reorder levels.",
        input: "Transaction completion trigger",
        output: "Thermal receipt & updated inventory count",
      },
      {
        step: "04",
        title: "Shift Reconciliation & Z-Report",
        desc: "Shift closes. Cashier enters counted cash; system cross-references against recorded sales, flags variances, and generates manager audit reports.",
        input: "Counted drawer total",
        output: "Z-Report with balanced accounting ledger",
      },
    ],
    featureOutcomes: [
      {
        feature: "Barcode Scanner & Instant Cart",
        operationalShift:
          "Replaces manual price memorization and paper receipts with barcode lookup.",
        businessOutcome:
          "Reduces checkout queue wait times by up to 65% during peak store hours.",
      },
      {
        feature: "Automated Reorder Thresholds",
        operationalShift:
          "System alerts managers when fast-moving items reach minimum safety quantities.",
        businessOutcome:
          "Eliminates unexpected stockouts and cuts dead-stock holding costs.",
      },
      {
        feature: "Digital Khata & Credit Limits",
        operationalShift:
          "Automates customer credit tracking with strict balance limits and payment history.",
        businessOutcome:
          "Prevents bad debts and provides clear ledger proof during balance collections.",
      },
      {
        feature: "Cashier Shift Z-Reports",
        operationalShift:
          "Enforces physical drawer count verification at every cashier shift change.",
        businessOutcome:
          "Prevents internal cash discrepancies and untracked petty cash expenses.",
      },
    ],
    technicalSpecs: {
      deployment: [
        "Local Desktop Application (Windows 10/11, POSBox)",
        "Hybrid Cloud Architecture (Local offline checkout + automated cloud sync)",
        "Central Multi-Branch Cloud Server (PostgreSQL / AWS / GCP / On-Premise)",
      ],
      hardware: [
        "Standard USB / Bluetooth 1D & 2D Barcode Scanners",
        "ESC/POS Thermal Receipt Printers (58mm, 80mm with auto-cutter)",
        "Standard RJ11 Cash Drawers (Automated drawer kick on print)",
        "Electronic Customer Display Pole (VFD / LCD)",
      ],
      security: [
        "Role-Based Access Control (Admin, Manager, Cashier, Stock Keeper)",
        "Immutable transaction audit logs and void-sale tracking",
        "Encrypted local database with automatic scheduled cloud backups",
      ],
      database:
        "PostgreSQL / SQLite Local Offline Cache with Bi-directional Sync",
      offlineCapability:
        "100% functional offline billing; syncs automatically when network reconnects.",
    },
    onboardingProcess: [
      {
        phase: "Phase 1",
        title: "Data Migration & Inventory Master",
        time: "Days 1–3",
        details:
          "Clean and import existing item catalogs, supplier records, and customer balances via standardized Excel/CSV templates.",
      },
      {
        phase: "Phase 2",
        title: "Hardware Pairing & Network Setup",
        time: "Days 4–5",
        details:
          "Connect barcode scanners, thermal receipt printers, and cash drawers. Configure local database and cloud replication.",
      },
      {
        phase: "Phase 3",
        title: "Cashier & Manager Staff Training",
        time: "Days 6–7",
        details:
          "Hands-on training sessions covering billing, returns, split tenders, supplier PO entry, and daily shift balancing.",
      },
      {
        phase: "Phase 4",
        title: "Live Go-Live & Dedicated Support",
        time: "Day 8 Onward",
        details:
          "On-site or remote live supervision during opening day, followed by priority technical support and monthly health checks.",
      },
    ],
    faqs: [
      {
        question:
          "Can Storex ERP continue billing if the store loses internet connection?",
        answer:
          "Yes. Storex ERP features an offline-first architecture. Cashiers can continue scanning barcodes, completing transactions, and printing receipts without internet. All data queues locally and synchronizes automatically with central servers once connectivity is restored.",
      },
      {
        question:
          "Can we import our existing inventory and customer balances from Excel?",
        answer:
          "Yes. We provide pre-formatted CSV and Excel templates for bulk item master records, categories, opening stock counts, supplier balances, and customer credit ledgers. Our deployment engineers assist with data validation before launch.",
      },
      {
        question:
          "Does Storex support multiple branches with centralized reporting?",
        answer:
          "Yes. Head office management can monitor sales, gross margins, and inventory counts across all store locations in real time, while branch staff only have access to their designated store's operational data.",
      },
      {
        question: "What hardware do I need to run Storex ERP?",
        answer:
          "Any standard Windows computer or POS terminal (Core i3 or higher with 4GB+ RAM) running Windows 10/11. Storex connects seamlessly with industry-standard USB/Ethernet thermal printers, barcode scanners, and cash drawers.",
      },
      {
        question: "How are cashier privileges and price adjustments secured?",
        answer:
          "Cashier accounts are restricted from modifying item prices, offering arbitrary discounts, or deleting bills without entering a designated Manager PIN. Every override is permanently logged in the audit ledger.",
      },
    ],
    relatedProducts: ["purchoon-erp", "pharmacy-erp", "qistmarket-erp"],
    stats: [
      { value: "0.2s", label: "Barcode Lookup Speed" },
      { value: "100%", label: "Offline POS Resilience" },
      { value: "Zero", label: "Stock Reconciliation Drift" },
      { value: "Multi-Store", label: "Centralized Sync" },
    ],
    differentiatorTitle:
      "Engineered for Rapid Foot-Traffic & Inventory Accuracy",
    differentiatorDesc:
      "Unlike generic retail software that requires constant high-speed internet or complicated multi-step menus, Storex ERP is optimized for extreme cashier speed with keyboard shortcuts, instant barcode recognition, and automated supplier reconciliation.",
    differentiatorFeatures: [
      "Sub-second barcode scan to receipt printing pipeline",
      "Full offline fallback: zero counter stoppage during broadband dropouts",
      "Unified customer Khata ledger with automated SMS balance alerts",
      "Inter-branch stock transfer verification with transit tracking",
    ],
  },

  "purchoon-erp": {
    id: "purchoon",
    slug: "purchoon-erp",
    name: "Purchoon ERP",
    category: "Grocery & Wholesale Weight-Based POS",
    industry: "Grocery & Wholesale",
    scale: ["Kiryana Stores", "Supermarkets", "Grain & Spice Wholesalers"],
    tagline:
      "Weight scale POS, loose-item bori inventory, wholesale pricing tiers, and Udhar ledger.",
    heroHeadline:
      "Built for the Way Grocery and Wholesale Businesses Actually Work.",
    heroSubhead:
      "Manage weight-based sales, loose items, stock, purchases, customer balances, and daily operations with a business system designed around grocery, kiryana, and wholesale workflows.",
    badge: "Specialized Workflow",
    color: "text-emerald-500",
    accentBg: "bg-emerald-500/10 border-emerald-500/30",
    targetAudience: [
      "Kiryana, general store, and grocery merchants",
      "Supermarkets with bulk grain, pulses, and dry fruit counters",
      "Wholesale grain, flour, sugar, and oil dealers (Mandi traders)",
      "Loose-item retailers who sell products by weight rather than barcodes",
      "Businesses managing bulk bori (sacks), bales, and quality grades",
    ],
    businessProblems: [
      {
        problem: "Barcodes Do Not Exist for Loose & Bulk Goods",
        impact:
          "Generic retail software forces staff to create fake barcodes for 100+ loose commodities (sugar, flour, lentils), causing immense counter delays and calculation mistakes.",
      },
      {
        problem: "Customer Requests Items by Rupees Rather Than Grams",
        impact:
          "Shoppers regularly ask for 'Rs. 100 worth of daal' or 'Rs. 50 cumin.' Cashiers waste time doing mental division on calculators, leading to financial shrinkage.",
      },
      {
        problem: "Unmonitored Bulk Sack (Bori) Breaking & Moisture Loss",
        impact:
          "A 50kg bori of rice loses weight through moisture evaporation or repacking, creating phantom inventory differences that standard ERP software cannot handle.",
      },
      {
        problem: "Manual Udhar Registers & Disputed Customer Khata",
        impact:
          "Neighborhood grocery stores rely on hand-written paper khata diaries that get misplaced, resulting in uncollected debts and disputes over customer balances.",
      },
    ],
    solutionOverview:
      "Purchoon ERP replaces mental arithmetic and paper khata with a specialized grocery POS featuring automatic price-to-weight calculation, direct digital scale integration, bulk bori unpack tracking, wholesale tiered pricing, and an audit-proof customer Udhar ledger.",
    modules: [
      {
        title: "Weight Scale POS & Reverse Price-to-Weight Calculator",
        desc: "Built-in reverse pricing logic for customers who purchase by rupee amount or exact weight.",
        features: [
          "Direct RS232 / USB digital weighing scale data integration",
          "Reverse price calculator: Enter Rs. 150 -> system auto-calculates 625 grams of flour",
          "Direct kg and gram sale mode with zero decimal rounding errors",
          "One-touch hotkeys for top 50 loose items (Rice, Pulses, Sugar, Spices, Ghee)",
          "Dual barcode + weight mode: seamlessly mix packaged items with weighed produce",
        ],
        iconName: "Scale",
      },
      {
        title: "Bulk Sack (Bori) & Loose Stock Repacking",
        desc: "Convert bulk supplier sacks into retail shelves with shrinkage and repacking allowances.",
        features: [
          "Record incoming stock in bags/bori (e.g. 50kg, 100kg) and sell in grams/kg",
          "Automated unpack conversion with allowable moisture & wastage shrinkage margin",
          "Grade and quality-based stock tracking (e.g., Basmati Super vs. Kernal)",
          "Real-time loose stock valuation based on Mandi purchase averages",
          "Low-stock alerts when remaining bori count drops below reorder point",
        ],
        iconName: "Package",
      },
      {
        title: "Wholesale Tiers & Customer Group Pricing",
        desc: "Automatically apply the correct pricing tier based on order quantity and buyer profile.",
        features: [
          "Dynamic pricing: Retail (per kg), Semi-Wholesale (10kg+), and Full Sack (Bori)",
          "Customer-specific wholesale rate locking and contract pricing",
          "Minimum purchase quantity enforcement for wholesale rates",
          "Instant margin check during billing to prevent below-cost selling",
          "Bulk wholesale dispatch invoices with delivery vehicle challans",
        ],
        iconName: "TrendingUp",
      },
      {
        title: "Customer Udhar (Credit) Ledger & Khata SMS",
        desc: "Comprehensive digital credit ledger with balance verification receipts and SMS dispatch.",
        features: [
          "Customer credit profile with authorized family members and credit caps",
          "1-click credit checkout with instant printout of previous balance and new balance",
          "Partial payment recording with automated digital receipt via SMS/WhatsApp",
          "Defaulter warning alerts when balance exceeds agreed credit days",
          "Khata statement printout in Urdu/English for balance clarity",
        ],
        iconName: "CreditCard",
      },
      {
        title: "Supplier Mandi Purchases & Expense Tracking",
        desc: "Accurate procurement costing including transport freight, porterage, and commission.",
        features: [
          "Mandi purchase bill entry with transport freight and labor charge allocation",
          "Supplier payment ledgers with post-dated cheque (PDC) tracking",
          "Damaged / infested stock write-off records with reason codes",
          "Daily operational expense entries (Electricity, Shop labor, Packaging material)",
          "Net profit reporting after factoring in all shop operational overheads",
        ],
        iconName: "Truck",
      },
      {
        title: "Delivery Vehicle & Driver Dispatch Routings",
        desc: "Manage delivery routes, van loading sheets, and driver collection handovers.",
        features: [
          "Order packing slips and delivery route sequencing",
          "Vehicle loading gate pass with driver dispatch confirmation",
          "Driver cash and credit collection reconciliation upon return",
          "Van stock tracking for mobile distribution vans",
          "Customer delivery confirmation signatures and status tracking",
        ],
        iconName: "Navigation",
      },
    ],
    workflowTitle: "Purchoon Weight-Based Grocery Transaction Workflow",
    workflowSteps: [
      {
        step: "01",
        title: "Commodity Selection & Unit Mode",
        desc: "Cashier clicks loose item hotkey (e.g. 'Sugar Super Grade'). System prompts for Weight (Kg/g) or Reverse Currency Amount (Rs).",
        input: "Commodity selection",
        output: "Scale pricing table loaded",
      },
      {
        step: "02",
        title: "Scale Sync or Reverse Calculation",
        desc: "Digital scale passes exact 1.450 kg weight, OR cashier types 'Rs. 200'. System computes exact weight to the single gram without rounding loss.",
        input: "1.450 kg or Rs. 200 input",
        output: "Accurate item total verified",
      },
      {
        step: "03",
        title: "Payment / Udhar Settlement",
        desc: "Cashier selects Cash or Customer Udhar. For Udhar, system checks current balance and prints customer ledger statement right on the receipt.",
        input: "Tender or Customer ID",
        output: "Receipt with updated Khata balance",
      },
      {
        step: "04",
        title: "Inventory Master Adjustment",
        desc: "Bulk warehouse inventory reduces by the exact gram amount. System verifies if open bori is empty and triggers replacement sack log.",
        input: "Sale confirmation",
        output: "Live inventory balance updated",
      },
    ],
    featureOutcomes: [
      {
        feature: "Price-to-Weight Reverse Calculator",
        operationalShift:
          "Eliminates manual handheld calculators and rounding estimates at the grocery counter.",
        businessOutcome:
          "Prevents daily calculation leaks that cost grocery owners 3%–5% of gross turnover.",
      },
      {
        feature: "Digital Scale Integration",
        operationalShift:
          "Direct serial scale communication eliminates manual weight keying errors.",
        businessOutcome:
          "Accelerates counter throughput by 40% and ensures fair customer pricing.",
      },
      {
        feature: "Digital Udhar Management",
        operationalShift:
          "Replaces vulnerable paper ledgers with authenticated digital balances and receipts.",
        businessOutcome:
          "Accelerates credit collection recovery and completely removes customer balance disputes.",
      },
      {
        feature: "Bori-to-Loose Unpack Conversion",
        operationalShift:
          "Tracks inventory from 50kg bulk sacks down to 250g retail bags with shrinkage tracking.",
        businessOutcome:
          "Gives grocery owners true stock valuation and flags unauthorized stock shrinkage.",
      },
    ],
    technicalSpecs: {
      deployment: [
        "Windows Desktop POS Station (Optimized for dust/heat retail environments)",
        "Local Database with Automatic Cloud Khata Backup",
        "Optional Android Tablet support for mobile order taking in wholesale aisles",
      ],
      hardware: [
        "RS232 / USB Electronic Weighing Scale (CAS, Mettler, A&D protocols)",
        "58mm / 80mm High-Speed Thermal Receipt Printers",
        "1D/2D Barcode Scanners for packaged FMCG items",
        "Heavy-duty steel cash drawer",
      ],
      security: [
        "Manager PIN protection for price modifications and Udhar ceiling overrides",
        "Full audit trail for backdated stock entries and write-offs",
        "Automated encrypted daily database backup to external drive and cloud",
      ],
      database: "High-performance embedded SQLite / PostgreSQL engine",
      offlineCapability:
        "100% offline capable; zero reliance on internet connectivity for counter sales.",
    },
    onboardingProcess: [
      {
        phase: "Phase 1",
        title: "Loose Item Master & Scale Setup",
        time: "Days 1–2",
        details:
          "Configure commodity list, Mandi measurement units (Kg, Man, Bori), and calibrate digital weighing scale communication.",
      },
      {
        phase: "Phase 2",
        title: "Customer Khata Data Entry",
        time: "Days 3–4",
        details:
          "Digitize existing paper Udhar books, verify opening balances with store owner, and configure SMS alerts.",
      },
      {
        phase: "Phase 3",
        title: "Counter Staff Training",
        time: "Days 5–6",
        details:
          "Train cashiers on quick hotkeys, reverse price-to-weight calculation, mixed cart billing, and shift balancing.",
      },
      {
        phase: "Phase 4",
        title: "Opening Day Supervision",
        time: "Day 7 Onward",
        details:
          "Live support during grocery morning rush, followed by weekly check-ins and ledger reconciliation assistance.",
      },
    ],
    faqs: [
      {
        question: "How does the price-to-weight reverse calculator work?",
        answer:
          "In many grocery markets, customers don't ask for 250 grams; they hand you Rs. 50 or Rs. 100. Instead of doing manual math on a handheld calculator, the cashier simply types the rupee amount, and Purchoon ERP calculates the precise weight in grams based on current unit pricing.",
      },
      {
        question:
          "Can Purchoon ERP connect directly to our electronic weighing scale?",
        answer:
          "Yes. Purchoon ERP supports standard digital weighing scales connected via RS232 serial or USB ports. When an item is placed on the scale, the weight registers instantly in the POS without manual typing.",
      },
      {
        question:
          "Can we track both packaged barcode items and loose grocery items in the same bill?",
        answer:
          "Absolutely. Cashiers can scan a packaged soap barcode with the scanner, then immediately click the 'Sugar' hotkey and weigh 2.5 kg, and add both to the same thermal receipt.",
      },
      {
        question: "How does Purchoon handle customer Udhar (credit)?",
        answer:
          "Every customer has a dedicated digital ledger. During checkout, selecting 'Udhar' verifies credit limits, adds the new amount to their balance, and prints the previous balance, current transaction, and total outstanding balance on the receipt.",
      },
      {
        question:
          "Can wholesale merchants set different rates for bulk purchases?",
        answer:
          "Yes. Purchoon ERP supports multi-tier pricing. You can define a retail rate (e.g. Rs. 200/kg), a semi-wholesale rate for 10kg+ bags (e.g. Rs. 185/kg), and a full sack rate (e.g. Rs. 170/kg), which the system applies automatically based on quantity.",
      },
    ],
    relatedProducts: ["storex-erp", "pharmacy-erp", "industrial-erp"],
    stats: [
      { value: "0.1s", label: "Scale Sync Latency" },
      { value: "100%", label: "Gram-level Precision" },
      { value: "Zero", label: "Paper Khata Loss" },
      { value: "Offline", label: "Uninterrupted POS" },
    ],
    differentiatorTitle:
      "Designed for Loose Commodities & Real Retail Realities",
    differentiatorDesc:
      "Most retail POS systems are built for barcode-scanning apparel shops in malls. Purchoon ERP was engineered specifically for grocery and wholesale markets where commodities are weighed, customers buy in rupees, and credit (Udhar) requires ironclad digital record-keeping.",
    differentiatorFeatures: [
      "Direct digital weighing scale sync with zero decimal lag",
      "Instant price-to-weight reverse calculation hotkey",
      "Bulk bori-to-loose unpack stock conversion with shrinkage factor",
      "Complete customer Udhar khata with balance verification receipts",
    ],
  },

  cambridgedesk: {
    id: "cambridge",
    slug: "cambridgedesk",
    name: "CambridgeDesk",
    category: "School & Academic Management ERP",
    industry: "Education",
    scale: [
      "Private Schools",
      "Cambridge Curriculum Academies",
      "Multi-Campus Networks",
    ],
    tagline:
      "Academic curriculum management, automated fee challans, grading, and parent portal.",
    heroHeadline:
      "Bring Academic Operations, Administration, and School Management Together.",
    heroSubhead:
      "CambridgeDesk helps schools organize academic workflows, student records, assessments, fees, communication, and day-to-day administration through a connected school management platform.",
    badge: "Academic Intelligence",
    color: "text-violet-500",
    accentBg: "bg-violet-500/10 border-violet-500/30",
    targetAudience: [
      "Private primary, secondary, and higher secondary schools",
      "Cambridge curriculum (O/A Level) and international schools",
      "Multi-campus school systems needing unified administration",
      "Colleges and educational institutions managing term exams",
      "School administrators seeking automated fee collection and payroll",
    ],
    businessProblems: [
      {
        problem: "Manual Fee Challan Preparation & Delayed Collections",
        impact:
          "Accountants spend weeks generating printed bank vouchers manually, leading to delayed fees, uncollected late fines, and untracked sibling discounts.",
      },
      {
        problem: "Error-Prone Examination Marksheet Tabulation",
        impact:
          "Teachers compile term grades across multiple spreadsheets, resulting in calculation errors, delayed report cards, and lack of historical student performance visibility.",
      },
      {
        problem: "Fragmented Parent Communication & Untracked Absences",
        impact:
          "Parents are left in the dark about unannounced absences and homework assignments, creating administrative friction and reduced parent trust.",
      },
      {
        problem: "Disconnected Academic Curriculum & Teacher Timetables",
        impact:
          "Timetable clashes, uncoordinated substitute teacher assignments, and incomplete syllabus tracking disrupt daily classroom productivity.",
      },
    ],
    solutionOverview:
      "CambridgeDesk centralizes the entire student academic lifecycle: from digital admissions and automated bank fee challan generation, to curriculum gradebook calculation, biometric attendance, and a mobile-friendly parent communication portal.",
    modules: [
      {
        title: "Student Admissions & Lifecycle Records",
        desc: "Complete demographic, medical, guardian, and historical academic profiles.",
        features: [
          "Online application portal with automated registration and roll number allocation",
          "Digital document repository (Birth certificates, previous school leaving certificates)",
          "Sibling linking for automated fee concessions and family communication",
          "Student disciplinary log, health records, and emergency contact directory",
          "Automated School Leaving Certificate (SLC) and character certificate generation",
        ],
        iconName: "GraduationCap",
      },
      {
        title: "Automated Fee Challan & Accounts Engine",
        desc: "Batch generate bank vouchers, track collections, and enforce automated fine rules.",
        features: [
          "1-click batch generation of 3-copy bank fee challans (Bank, School, Student)",
          "Customizable fee heads: Tuition, Lab, Computer, Transport, Annual Sports, Admission",
          "Automated sibling discount policies and merit-based scholarship concessions",
          "Daily bank scroll reconciliation and real-time defaulter tracking",
          "Automated late fee fines and balance carry-forward to subsequent months",
        ],
        iconName: "CreditCard",
      },
      {
        title: "Academic Curriculum & Examination Engine",
        desc: "Term assessments, weighted grading scales, and automated marksheet generation.",
        features: [
          "Configurable grading systems: Percentage, Letter Grades (A* to U), GPA scales",
          "Weighted exam breakdown: Formative assessments, mid-terms, final exams, projects",
          "Automated printable report cards with teacher remarks and subject rankings",
          "Batch class performance analytics and historical grade progress charts",
          "Syllabus breakdown and lesson plan progress tracking per teacher",
        ],
        iconName: "BookOpen",
      },
      {
        title: "Biometric Attendance & Leave Management",
        desc: "Automated morning attendance logging with instant SMS notifications to guardians.",
        features: [
          "RFID card & biometric fingerprint integration for students and staff",
          "Automated absence SMS notification sent to parents within 30 minutes of school gate close",
          "Teacher daily attendance register with period-by-period attendance tracking",
          "Student leave request portal with administrator approval workflow",
          "Monthly attendance percentage reporting for examination admit card eligibility",
        ],
        iconName: "CheckCircle2",
      },
      {
        title: "Parent & Student Web/Mobile Portal",
        desc: "Real-time visibility into attendance, exam marks, homework assignments, and fee status.",
        features: [
          "Secure parent login with multi-child toggle in a single account",
          "Digital fee challan download and instant payment status updates",
          "Daily homework notices, event calendar, and circular notifications",
          "Direct two-way messaging between parents and school administration",
          "Push notifications for exam dates, parent-teacher meetings, and emergencies",
        ],
        iconName: "Users",
      },
      {
        title: "Staff Management & Payroll Processing",
        desc: "Teacher profiles, timetable scheduling, leave balance, and salary generation.",
        features: [
          "Master timetable generation with automatic clash detection across classes and teachers",
          "Teacher qualification records, class allocation, and subject specialization",
          "Monthly staff payroll calculation with tax deductions, provident fund, and allowances",
          "Substitute teacher allocation module for unexpected teacher leaves",
          "Staff appraisal logs and teacher attendance performance reporting",
        ],
        iconName: "Building2",
      },
    ],
    workflowTitle: "CambridgeDesk Academic & Financial Cycle",
    workflowSteps: [
      {
        step: "01",
        title: "Enrollment & Sibling Fee Mapping",
        desc: "New student is enrolled into Grade 9-O. System assigns unique GR number, links to existing sibling profile, and applies 20% sibling tuition concession.",
        input: "Admission form & parent details",
        output: "Registered student profile & fee structure",
      },
      {
        step: "02",
        title: "Batch Monthly Fee Challan Dispatch",
        desc: "Accounts department executes monthly billing run. System generates 1,200 PDF bank challans with QR codes, uploaded to parent portals.",
        input: "Monthly billing execution",
        output: "Bank vouchers & SMS alert to parents",
      },
      {
        step: "03",
        title: "Daily Attendance & Academic Tracking",
        desc: "Students tap RFID badge at entrance. Gate attendance updates immediately, triggering automated SMS to parents of unexcused absent students.",
        input: "RFID / Biometric scan",
        output: "Class roster attendance & parent alerts",
      },
      {
        step: "04",
        title: "Term Exam Tabulation & Marksheets",
        desc: "Teachers input subject assessment marks. System calculates weighted GPA, verifies minimum pass criteria, and outputs verified report cards.",
        input: "Subject raw test scores",
        output: "Official printed marksheet with teacher remarks",
      },
    ],
    featureOutcomes: [
      {
        feature: "Automated Bank Fee Challan Generation",
        operationalShift:
          "Eliminates weeks of manual paper calculation and voucher writing.",
        businessOutcome:
          "Reduces fee collection delays by 80% and ensures 100% accurate late fine enforcement.",
      },
      {
        feature: "Grading & Marksheet Engine",
        operationalShift:
          "Automates marksheet compilation across complex weighted term tests.",
        businessOutcome:
          "Cuts report card generation time from weeks to hours with zero mathematical errors.",
      },
      {
        feature: "Automated Absence SMS Alerts",
        operationalShift:
          "Dispatches automated notices to guardians immediately after school gates close.",
        businessOutcome:
          "Improves student attendance discipline and builds strong parental confidence.",
      },
      {
        feature: "Master Timetable Clash Detection",
        operationalShift:
          "Algorithms balance teacher availability and classroom capacity automatically.",
        businessOutcome:
          "Prevents period scheduling conflicts and simplifies substitute teacher allocation.",
      },
    ],
    technicalSpecs: {
      deployment: [
        "Cloud-Hosted School ERP (AWS / Google Cloud / Private Cloud)",
        "On-Premise School Server with Local Area Network (LAN) terminal access",
        "Hybrid Setup: Local attendance/cashier workstation + Central cloud portal",
      ],
      hardware: [
        "Biometric Fingerprint / RFID Card Readers (TCP/IP network enabled)",
        "High-Speed Heavy Duty Laser Printers for Batch Challan Printing",
        "SMS Gateway API Integration for Instant Parent Alerts",
      ],
      security: [
        "Strict Role-Based Permissions (Principal, Accountant, Teacher, Parent, Student)",
        "GDPR and student data privacy compliance with encrypted records",
        "Audit logs for all grade adjustments and fee concession overrides",
      ],
      database: "PostgreSQL with enterprise multi-tenant isolation",
      offlineCapability:
        "Local attendance capture and fee counters continue operating during internet outages.",
    },
    onboardingProcess: [
      {
        phase: "Phase 1",
        title: "Academic Structure & Fee Policy Setup",
        time: "Weeks 1–2",
        details:
          "Define classes, sections, grading rubrics (Cambridge O/A Level or Board), fee heads, and sibling concession rules.",
      },
      {
        phase: "Phase 2",
        title: "Student & Staff Master Data Migration",
        time: "Week 3",
        details:
          "Import existing student records, emergency contacts, teacher rosters, and outstanding fee arrears from spreadsheets.",
      },
      {
        phase: "Phase 3",
        title: "Staff & Teacher Training Sessions",
        time: "Week 4",
        details:
          "Dedicated interactive workshops for school accountants, academic coordinators, and teachers on marks entry and attendance.",
      },
      {
        phase: "Phase 4",
        title: "Parent Portal Launch & Live Term Kickoff",
        time: "Week 5 Onward",
        details:
          "Distribute parent login credentials, launch automated fee challans, and provide on-site technical support for first term.",
      },
    ],
    faqs: [
      {
        question:
          "Does CambridgeDesk support Cambridge O-Level and A-Level grading standards?",
        answer:
          "Yes. CambridgeDesk has pre-built grading schemes for Cambridge assessment rubrics (A*, A, B, C, D, E, U) alongside percentage and GPA grading frameworks. Schools can customize grade boundaries according to internal academic policies.",
      },
      {
        question: "How does batch fee challan generation work?",
        answer:
          "Accounts staff can generate 3-part bank challans (Student copy, Bank copy, School copy) for the entire student body with one click. The system automatically computes tuition, lab fees, individual sibling concessions, and previous outstanding arrears.",
      },
      {
        question:
          "Can parents view their children's progress on mobile phones?",
        answer:
          "Yes. CambridgeDesk includes a responsive web and mobile portal where parents can log in securely to view real-time attendance, daily homework, upcoming examination schedules, downloadable report cards, and fee challan vouchers.",
      },
      {
        question:
          "Does the system integrate with school biometric attendance machines?",
        answer:
          "Yes. CambridgeDesk integrates with standard network-enabled RFID card readers and biometric fingerprint devices. Attendance logs sync automatically, and unexcused absence SMS alerts can be dispatched to parents automatically.",
      },
      {
        question:
          "Can multi-campus school chains manage all branches in one system?",
        answer:
          "Yes. Central management can review campus-wide financial collections, student enrollment growth, and academic performance from a single centralized executive dashboard, while individual campus administrators only access their local campus data.",
      },
    ],
    relatedProducts: ["storex-erp", "industrial-erp", "qistmarket-erp"],
    stats: [
      { value: "1-Click", label: "Batch Challan Generation" },
      { value: "100%", label: "Gradebook Accuracy" },
      { value: "<30min", label: "Automated Absence Alerts" },
      { value: "Multi-Campus", label: "Central Administration" },
    ],
    differentiatorTitle:
      "Built Around Real Academic Rigor & Administrative Efficiency",
    differentiatorDesc:
      "Unlike generic CRM tools adapted for schools, CambridgeDesk was designed specifically for academic institutions. It bridges the gap between classroom teaching, examination marksheet tabulation, and administrative fee collection into one coherent system.",
    differentiatorFeatures: [
      "Specialized Cambridge & Board grading schemes with GPA conversion",
      "Batch 3-copy bank fee challan generation with automated late fines",
      "Immediate absence alerts dispatched to parents via SMS gateway",
      "Multi-campus executive reporting with strict departmental permissions",
    ],
  },

  "pharmacy-erp": {
    id: "pharmacy",
    slug: "pharmacy-erp",
    name: "Pharmacy ERP",
    category: "Healthcare & Pharmacy POS",
    industry: "Healthcare",
    scale: [
      "Independent Pharmacies",
      "Hospital Dispensaries",
      "Pharmacy Retail Chains",
    ],
    tagline:
      "Batch expiry tracking, generic salt lookup, distributor billing, and dispensary POS.",
    heroHeadline: "Bring Better Control to Pharmacy Sales and Inventory.",
    heroSubhead:
      "Organize pharmacy sales, inventory, purchasing, and daily operational records through a connected pharmacy management platform with automated batch-expiry quarantine and generic formula substitution.",
    badge: "Healthcare Compliant",
    color: "text-rose-500",
    accentBg: "bg-rose-500/10 border-rose-500/30",
    targetAudience: [
      "Retail community pharmacies and chemist shops",
      "Hospital and clinic outpatient dispensaries",
      "Pharmacy retail chains needing central supplier purchasing",
      "Medicine distributors handling wholesale batch numbers",
      "Healthcare practitioners dispensing pharmaceuticals directly",
    ],
    businessProblems: [
      {
        problem: "Expired Medicine Losses & Regulatory Penalties",
        impact:
          "Expired drugs remain hidden on shelves until discovered by customers or health inspectors, resulting in massive financial write-offs and potential license suspension.",
      },
      {
        problem: "Lost Sales Due to Out-of-Stock Brand Names",
        impact:
          "When a prescribed brand is unavailable, counter staff lose the sale because they cannot quickly identify equivalent generic alternatives with identical active chemical salts.",
      },
      {
        problem:
          "Complex Medicine Packaging Units (Boxes vs. Strips vs. Tablets)",
        impact:
          "Selling individual tablets or strips from a 100-tablet box causes severe inventory discrepancy when systems only track by whole packs.",
      },
      {
        problem:
          "Disorganized Distributor Purchase Invoices & Bonus Quantities",
        impact:
          "Distributors provide complex trade discounts, sales taxes, and '10+1 free' bonus items. Manual tracking leads to uncollected credit notes and overpayments.",
      },
    ],
    solutionOverview:
      "Pharmacy ERP delivers a clinical-grade retail management system with First-Expiry-First-Out (FEFO) dispensing, real-time chemical formula substitution, strip/tablet multi-unit inventory tracking, and automated distributor credit reconciliation.",
    modules: [
      {
        title: "Fast Pharmacy POS & Counter Billing",
        desc: "Sub-second medicine lookup with multi-unit packaging conversion (Pack / Strip / Tablet).",
        features: [
          "Instant search by Trade Name, Generic Chemical Formula, or Barcode",
          "Automated unit conversion: sell by Box, Strip, or individual Tablet with auto-calculated pricing",
          "Doctor prescription recording: attach prescribing physician and patient details",
          "Rapid checkout keyboard shortcuts designed for high-pressure hospital dispensary lines",
          "Return medicine handling with automated expiry date and batch verification",
        ],
        iconName: "HeartPulse",
      },
      {
        title: "Batch Number & Expiry Date Quarantine",
        desc: "Strict FEFO dispensing rules prevent expired drugs from ever reaching the customer.",
        features: [
          "Automatic First-Expiry-First-Out (FEFO) batch recommendation at the POS counter",
          "Color-coded near-expiry alerts (30 days, 60 days, 90 days before expiration)",
          "Automated quarantine bin: lock expired items to prevent accidental sale",
          "1-click Supplier Return Claim generation for medicines nearing expiry date",
          "Batch recall audit report: trace every customer who purchased a specific batch number",
        ],
        iconName: "ShieldCheck",
      },
      {
        title: "Generic Salt & Chemical Formula Substitution",
        desc: "Instantly find matching alternatives when the prescribed medicine is out of stock.",
        features: [
          "Comprehensive chemical salt database (Active Pharmaceutical Ingredient & strength)",
          "1-click alternative medicine finder matching exact composition and dosage",
          "Compare alternative brand prices to provide cost-effective options to patients",
          "Side-by-side availability check across all branches in your pharmacy network",
          "Prevent lost sales while preserving patient safety and doctor compliance",
        ],
        iconName: "Sparkles",
      },
      {
        title: "Distributor Procurement & Bonus Tracking",
        desc: "Accurately record distributor invoices with trade discounts, bonus packs, and sales tax.",
        features: [
          "Distributor purchase invoice entry with Trade Price (TP) and Retail Price (MRP)",
          "Automated 'Buy X Get Y Free' bonus medicine quantity tracking and costing",
          "Supplier payment ledgers with payment due date aging and credit note deduction",
          "Automated purchase order suggestions based on daily sales velocity",
          "Distributor return claims for broken ampoules, damaged cartons, or near-expiry batches",
        ],
        iconName: "Truck",
      },
      {
        title: "Controlled Drugs & Narcotics Register",
        desc: "Maintain strict compliance records for sedatives and restricted medications.",
        features: [
          "Mandatory customer CNIC/ID, patient name, and doctor registration entry for narcotics",
          "Automated digital Dangerous Drugs Register (DDR) compliant with regulatory inspectors",
          "Dispensary balance logs with shift-change handover verification",
          "Automated warnings when dispensing maximum allowed dosage limits",
          "Complete historical audit log: view who dispensed what, when, and to whom",
        ],
        iconName: "Layers",
      },
      {
        title: "Multi-Branch Inventory & Central Purchasing",
        desc: "Monitor medicine stock levels across all pharmacy outlets from central headquarters.",
        features: [
          "Real-time medicine inventory visibility across all chain locations",
          "Inter-branch medicine transfer requests with transit dispatch confirmation",
          "Centralized procurement: negotiate bulk discounts with distributors and distribute to branches",
          "Consolidated profit and loss reporting across individual pharmacy branches",
          "Branch-level staff sales performance and commission tracking",
        ],
        iconName: "Building2",
      },
    ],
    workflowTitle: "Pharmacy ERP Prescription-to-Dispense Lifecycle",
    workflowSteps: [
      {
        step: "01",
        title: "Prescription Lookup & Stock Check",
        desc: "Dispenser types prescribed brand (e.g. 'Augmentin 625mg'). System displays available batches, expiry dates, and shelf rack locations immediately.",
        input: "Brand / Salt keyword",
        output: "Matching medicine list with expiry dates",
      },
      {
        step: "02",
        title: "Generic Salt Alternative Finder",
        desc: "If brand is out of stock, dispenser presses Salt hotkey (Amoxicillin + Clavulanic Acid 625mg) to display all verified equivalent alternative brands in stock.",
        input: "Salt substitution hotkey",
        output: "Available bio-equivalent options",
      },
      {
        step: "03",
        title: "Unit Selection & FEFO Dispense",
        desc: "Customer requests 1 strip (6 tablets). System calculates fractional price from full box price, enforces earliest expiring batch, and registers sale.",
        input: "1 Strip selected (FEFO batch)",
        output: "Accurate sale subtotal",
      },
      {
        step: "04",
        title: "Receipt Print & Regulatory Audit",
        desc: "Receipt prints with batch numbers, expiry dates, and dosage instructions. Inventory deductions register instantly across all package units.",
        input: "Payment tender",
        output: "Thermal receipt with batch/expiry records",
      },
    ],
    featureOutcomes: [
      {
        feature: "FEFO Batch & Expiry Quarantine",
        operationalShift:
          "Automates First-Expiry-First-Out dispensing and blocks sales of expired medicine.",
        businessOutcome:
          "Reduces expired inventory financial write-offs by over 90% and eliminates regulatory compliance fines.",
      },
      {
        feature: "Generic Chemical Formula Lookup",
        operationalShift:
          "Allows counter dispensers to offer equivalent alternatives when a brand is out of stock.",
        businessOutcome:
          "Prevents walkouts and recovers 15%–20% of lost sales at the dispensary counter.",
      },
      {
        feature: "Multi-Unit (Box/Strip/Tablet) Inventory",
        operationalShift:
          "Tracks broken boxes down to the individual tablet without inventory confusion.",
        businessOutcome:
          "Eliminates stock count mismatches and allows flexible patient dispensing.",
      },
      {
        feature: "Distributor Bonus & Discount Tracking",
        operationalShift:
          "Accurately captures 'Buy 10 Get 1 Free' deals and distributor trade prices.",
        businessOutcome:
          "Ensures true gross profit calculation and prevents supplier overpayments.",
      },
    ],
    technicalSpecs: {
      deployment: [
        "Windows Desktop Station (High-speed local database for sub-second counter response)",
        "Hybrid Setup: Offline-capable POS counters + Cloud central synchronization",
        "Multi-Branch Central Server (PostgreSQL on AWS / GCP / Private Cloud)",
      ],
      hardware: [
        "1D/2D High-Speed Barcode Scanners (Supports GS1 Datamatrix medical barcodes)",
        "58mm / 80mm ESC/POS Thermal Receipt Printers",
        "Heavy-duty metal cash drawer with automated kick",
        "Customer-facing bill verification display",
      ],
      security: [
        "Role-Based Access Control (Admin, Pharmacist, Dispenser, Stock Auditor)",
        "Restricted permissions for price modifications, voids, and batch re-allocations",
        "Audit trail for all controlled substances and narcotics sales",
      ],
      database: "PostgreSQL / SQLite with automated local and cloud backups",
      offlineCapability:
        "100% offline capable: continue dispensing and billing without active internet.",
    },
    onboardingProcess: [
      {
        phase: "Phase 1",
        title: "Medicine Master & Salt Database Import",
        time: "Days 1–3",
        details:
          "Pre-load comprehensive database of over 25,000 registered pharmaceuticals with generic chemical salts and manufacturer details.",
      },
      {
        phase: "Phase 2",
        title: "Physical Batch & Expiry Stock Count",
        time: "Days 4–6",
        details:
          "Scan existing physical inventory, record active batch numbers, expiry dates, and shelf rack locations into the system.",
      },
      {
        phase: "Phase 3",
        title: "Dispensary Staff Training",
        time: "Days 7–8",
        details:
          "Train counter dispensers on quick trade search, chemical salt substitution, box-to-strip breakdown, and receipt printing.",
      },
      {
        phase: "Phase 4",
        title: "Go-Live & Distributor PO Integration",
        time: "Day 9 Onward",
        details:
          "Live support during opening days, setup distributor accounts, and activate automated near-expiry quarantine alerts.",
      },
    ],
    faqs: [
      {
        question:
          "How does Pharmacy ERP prevent expired medicines from being sold?",
        answer:
          "Pharmacy ERP enforces strict First-Expiry-First-Out (FEFO) logic. When an item is scanned or searched, the system automatically selects the batch closest to expiration. Furthermore, medicines within 30 days of expiry display prominent visual alerts, and expired items are automatically locked from sale.",
      },
      {
        question:
          "Can we sell a single strip or tablet from a full box without breaking stock counts?",
        answer:
          "Yes. Pharmacy ERP features native multi-tier packaging units. You can define that 1 Box = 10 Strips = 100 Tablets. Selling 1 strip automatically deducts 0.1 of a box and recalculates remaining stock with 100% mathematical precision.",
      },
      {
        question:
          "Does the system help when a customer asks for an out-of-stock medicine brand?",
        answer:
          "Yes. With one keystroke, the counter staff can view all alternative brands in stock that share the exact same active pharmaceutical ingredient (chemical salt), dosage, and strength, allowing you to suggest equivalent therapy and retain the sale.",
      },
      {
        question:
          "Does Pharmacy ERP keep compliance records for narcotics and sedatives?",
        answer:
          "Yes. For controlled substances, the system prompts for mandatory patient name, national ID, and prescribing doctor information, generating an official Dangerous Drugs Register (DDR) report ready for regulatory inspection.",
      },
      {
        question:
          "Can Pharmacy ERP work without an active internet connection?",
        answer:
          "Yes. The local dispensary counter runs completely offline. You can continue scanning barcodes, printing receipts, and searching medicines even during broadband downtime. Records sync to cloud servers once connectivity returns.",
      },
    ],
    relatedProducts: ["storex-erp", "purchoon-erp", "qistmarket-erp"],
    stats: [
      { value: "0.2s", label: "Medicine Search Speed" },
      { value: "FEFO", label: "Automated Batch Selection" },
      { value: "25k+", label: "Pre-Loaded Drug Database" },
      { value: "100%", label: "Zero Expired Drug Sales" },
    ],
    differentiatorTitle: "Engineered for Clinical Safety & Counter Velocity",
    differentiatorDesc:
      "A pharmacy is not a standard retail shop. Errors in dosage, batch handling, or expired medicines carry serious health and legal risks. Pharmacy ERP was built from the ground up for healthcare compliance, chemical salt substitutions, and sub-second counter dispensing.",
    differentiatorFeatures: [
      "Strict First-Expiry-First-Out (FEFO) dispensing enforcement",
      "Instant chemical salt substitution engine for out-of-stock brands",
      "Native box, strip, and tablet unit breakdown calculation",
      "Regulatory-compliant narcotics register and prescription logging",
    ],
  },

  "industrial-erp": {
    id: "industrial",
    slug: "industrial-erp",
    name: "Industrial ERP",
    category: "Manufacturing & Production Management",
    industry: "Manufacturing",
    scale: [
      "Manufacturing Plants",
      "Assembly Workshops",
      "Industrial Processors",
    ],
    tagline:
      "Multi-level Bill of Materials (BOM), work orders, scrap tracking, and shop floor routing.",
    heroHeadline:
      "Connect Industrial Operations Through One Management System.",
    heroSubhead:
      "Bring greater visibility to manufacturing, inventory, procurement, and operational workflows with software designed around industrial and assembly plant requirements.",
    badge: "Plant Floor Ready",
    color: "text-amber-500",
    accentBg: "bg-amber-500/10 border-amber-500/30",
    targetAudience: [
      "Discrete manufacturing plants (Machinery, auto parts, appliances)",
      "Process and chemical manufacturing (Paints, plastics, textiles)",
      "Fabrication workshops and industrial equipment assemblers",
      "Packaging, printing, and corrugated box manufacturers",
      "Plant operations and procurement managers tracking raw materials",
    ],
    businessProblems: [
      {
        problem:
          "Uncoordinated Production Halts Caused by Missing Raw Materials",
        impact:
          "Assembly lines sit idle because a single sub-component was not ordered in time, causing delayed shipments and severe penalty fees.",
      },
      {
        problem: "Unknown True Cost per Manufactured Finished Unit",
        impact:
          "Plant owners estimate product pricing based on rough guesses rather than actual consumption of raw materials, scrap losses, labor hours, and electricity overheads.",
      },
      {
        problem: "Shop Floor Wastage & Unrecorded Scrap Losses",
        impact:
          "Discrepancies between standard raw material allocation and actual factory usage remain undetected, allowing massive material leakage on the plant floor.",
      },
      {
        problem: "Manual Paper Job Cards & Lost Production Tracking",
        impact:
          "Managers have no real-time visibility into which stage a production order is currently in (Cutting, Assembly, Quality Inspection, Packaging).",
      },
    ],
    solutionOverview:
      "Industrial ERP unites production planning, multi-level Bill of Materials (BOM), shop floor work orders, raw material quarantine, and actual cost accounting into one centralized, transparent operations platform.",
    modules: [
      {
        title: "Multi-Level Bill of Materials (BOM) & Recipe Management",
        desc: "Define exact raw materials, sub-assemblies, labor hours, and machine tooling per finished product.",
        features: [
          "Hierarchical parent-child component tree with revision number tracking",
          "Define raw material quantities, scrap tolerance percentages, and unit measures",
          "Associate direct machine work-centers and standard labor cycle times",
          "Automated BOM cost roll-up calculating direct material and operational overhead",
          "Support for alternative raw materials when primary components are unavailable",
        ],
        iconName: "Layers",
      },
      {
        title: "Production Work Orders & Shop Floor Job Cards",
        desc: "Convert customer sales orders into scheduled factory floor job cards and work batches.",
        features: [
          "Automated Work Order generation linked to sales demand and minimum finished stock",
          "Printable shop floor job cards with stage-by-stage traveler barcodes",
          "Track work progress across stages: Cutting -> Machining -> Assembly -> QA -> Packing",
          "Record operator shift output, finished goods produced, and defective units",
          "Real-time Work In Progress (WIP) tracking across all factory work centers",
        ],
        iconName: "Factory",
      },
      {
        title: "Raw Material Inventory & Automated Procurement",
        desc: "Ensure materials are always available before work orders are released to the floor.",
        features: [
          "Material Requirements Planning (MRP): calculate raw material deficits based on scheduled jobs",
          "Warehouse bin and rack location management for raw materials and spares",
          "Quality Inspection (QI) quarantine for incoming raw materials before store release",
          "Automated Purchase Requisitions sent to procurement teams with supplier quotes",
          "Minimum safety stock thresholds with automated vendor reorder notifications",
        ],
        iconName: "Truck",
      },
      {
        title: "Scrap, Wastage & Variance Analysis",
        desc: "Measure standard theoretical consumption against actual shop floor material usage.",
        features: [
          "Record actual raw material issued vs. standard BOM theoretical requirement",
          "Track scrap, offcuts, and production rejects with root cause categorization",
          "Rework order routing: re-issue defective items through secondary production stages",
          "Material yield variance reports identifying operators or shifts with excessive scrap",
          "Scrap inventory sales and recycling credit recovery records",
        ],
        iconName: "AlertTriangle",
      },
      {
        title: "Finished Goods Transfer & Quality Control (QC)",
        desc: "Enforce rigorous quality checkpoints before finished goods are cleared for dispatch.",
        features: [
          "Quality control checkpoint checklists: Dimensional, visual, and operational testing",
          "Batch / serial number allocation for finished manufactured goods",
          "Goods Transfer Note (GTN) from shop floor warehouse to central finished goods store",
          "Certificates of Analysis (COA) generation and customer compliance documentation",
          "Finished goods reservation for pending customer dispatch orders",
        ],
        iconName: "ShieldCheck",
      },
      {
        title: "Actual Cost Accounting & Financial Margin Analysis",
        desc: "Calculate the exact profitability per batch factoring in materials, labor, and energy.",
        features: [
          "Real-time manufacturing cost computation: Direct Material + Direct Labor + Machine Overhead",
          "Comparison of Estimated vs. Actual Batch Production Costs",
          "Machine depreciation and power consumption cost allocation per hour",
          "Gross margin analysis per finished product line and production run",
          "Seamless export to corporate financial ledgers and balance sheets",
        ],
        iconName: "TrendingUp",
      },
    ],
    workflowTitle: "Industrial ERP Production Planning & Execution Lifecycle",
    workflowSteps: [
      {
        step: "01",
        title: "BOM Configuration & Cost Roll-up",
        desc: "Engineering team configures multi-level Bill of Materials for Industrial Gearbox #GB-400 (housing, bearings, shafts, lubricants, labor minutes).",
        input: "Engineering component specs",
        output: "Active BOM with calculated unit cost",
      },
      {
        step: "02",
        title: "Work Order Release & Stock Reservation",
        desc: "Production manager generates Work Order #WO-802 for 50 units. System automatically reserves warehouse raw materials and flags shortages.",
        input: "Sales order demand",
        output: "Job cards & reserved material slips",
      },
      {
        step: "03",
        title: "Shop Floor Traveler & Stage Logging",
        desc: "Machine operators scan job card barcode as parts complete Cutting, Machining, and Assembly. System logs exact operator hours and scrap counts.",
        input: "Barcode scan & operator sign-off",
        output: "Live WIP stage update",
      },
      {
        step: "04",
        title: "QC Inspection & Finished Goods Transfer",
        desc: "Quality team conducts tolerance tests. Approved goods receive serial numbers and transfer to Finished Goods store with finalized cost report.",
        input: "QC sign-off checklist",
        output: "Finished goods stock & batch cost ledger",
      },
    ],
    featureOutcomes: [
      {
        feature: "Multi-Level Bill of Materials (BOM)",
        operationalShift:
          "Standardizes exact material formulas and operational routings per product.",
        businessOutcome:
          "Eliminates assembly line stoppages and establishes 100% accurate product costing.",
      },
      {
        feature: "Material Requirements Planning (MRP)",
        operationalShift:
          "Automates raw material purchase orders based on planned production demand.",
        businessOutcome:
          "Reduces raw material inventory carrying costs by 25% while preventing stockouts.",
      },
      {
        feature: "Shop Floor Barcode Job Cards",
        operationalShift:
          "Replaces manual paper job sheets with barcode-scanned stage tracking.",
        businessOutcome:
          "Gives management real-time Work-in-Progress (WIP) visibility and identifies bottlenecks.",
      },
      {
        feature: "Scrap & Variance Analytics",
        operationalShift:
          "Compares standard BOM consumption against physical materials consumed.",
        businessOutcome:
          "Reduces shop floor material wastage by up to 18% through strict accountability.",
      },
    ],
    technicalSpecs: {
      deployment: [
        "On-Premise Industrial Server (LAN-based shop floor terminals with high reliability)",
        "Private Cloud Deployment (AWS / GCP / Dedicated Linux host)",
        "Rugged Shop Floor Kiosk Support (Touchscreen terminals & barcode stations)",
      ],
      hardware: [
        "Industrial Rugged 1D/2D Barcode Scanners (USB & Wireless Bluetooth)",
        "Barcode Label & Work Order Traveler Printers (Zebra / TSC thermal transfer)",
        "Shop Floor Touchscreen Kiosks for Machine Operator logging",
        "Weighing Bridge / Heavy Platform Scale RS232 interfaces",
      ],
      security: [
        "Strict Role-Based Permissions (Plant Manager, Production Planner, QC Inspector, Storekeeper)",
        "Audit logging for all Bill of Materials revisions and scrap write-offs",
        "Automated daily incremental database snapshots to redundant off-site storage",
      ],
      database:
        "PostgreSQL with enterprise transaction isolation and audit logging",
      offlineCapability:
        "Shop floor terminals continue logging work order progress during network disruptions.",
    },
    onboardingProcess: [
      {
        phase: "Phase 1",
        title: "Engineering BOM & Work-Center Setup",
        time: "Weeks 1–3",
        details:
          "Digitize engineering Bill of Materials, define manufacturing work centers, machine rates, and standard labor operations.",
      },
      {
        phase: "Phase 2",
        title: "Warehouse & Raw Material Mapping",
        time: "Weeks 4–5",
        details:
          "Organize warehouse bin locations, establish minimum safety stocks, and import existing raw material balances.",
      },
      {
        phase: "Phase 3",
        title: "Shop Floor Pilot & Operator Training",
        time: "Weeks 6–7",
        details:
          "Deploy barcode job cards on a single pilot production line; train supervisors, operators, and storekeepers.",
      },
      {
        phase: "Phase 4",
        title: "Full Plant Rollout & Cost Accounting",
        time: "Week 8 Onward",
        details:
          "Expand to all manufacturing lines, activate automated MRP purchase alerts, and link batch costing with finance.",
      },
    ],
    faqs: [
      {
        question:
          "How complex can the Bill of Materials (BOM) be in Industrial ERP?",
        answer:
          "Industrial ERP supports unlimited multi-level sub-assemblies. A finished machine can contain sub-assemblies (e.g., motor drive, electrical control box, steel chassis), each having its own independent sub-BOM with raw materials, machining processes, and labor allocations.",
      },
      {
        question:
          "Can we track scrap, offcuts, and wastage on the factory floor?",
        answer:
          "Yes. Every work order compares standard theoretical material usage against actual material drawn from the store. Any variance or scrap must be recorded with reason codes (e.g. machine breakdown, defective raw material), giving managers clear wastage analytics.",
      },
      {
        question: "How does the software handle raw material shortages?",
        answer:
          "When a Work Order is scheduled, the system checks current warehouse inventory against the BOM. If a deficit exists, the Material Requirements Planning (MRP) module generates an automated purchase requisition for procurement with recommended vendor quotes.",
      },
      {
        question:
          "Can shop floor machine operators use barcode scanners to update work orders?",
        answer:
          "Yes. Job cards are printed with stage barcodes. When an operator starts and finishes an operation (e.g., CNC milling), they scan the barcode to log start time, end time, pieces completed, and rejected units.",
      },
      {
        question:
          "Does Industrial ERP calculate true manufacturing cost per unit?",
        answer:
          "Yes. The cost accounting module combines actual raw material consumed, scrap loss, direct labor hours logged by operators, and machine hourly overhead rates to compute the exact cost per finished unit.",
      },
    ],
    relatedProducts: ["storex-erp", "purchoon-erp", "qistmarket-erp"],
    stats: [
      { value: "Multi-Level", label: "Hierarchical BOM Support" },
      { value: "Real-Time", label: "Shop Floor WIP Visibility" },
      { value: "-18%", label: "Average Scrap Reduction" },
      { value: "MRP-Led", label: "Zero Production Halts" },
    ],
    differentiatorTitle:
      "Built for the Demands of Plant Floors & Complex Assembly",
    differentiatorDesc:
      "Unlike accounting software masquerading as manufacturing software, Industrial ERP was built specifically for physical production environments where raw materials are transformed, machines have cycle times, and scrap must be held accountable.",
    differentiatorFeatures: [
      "Multi-level hierarchical BOMs with scrap tolerance percentages",
      "Shop floor traveler job cards with barcode stage tracking",
      "Automated Material Requirements Planning (MRP) to prevent shortages",
      "Accurate batch cost roll-up incorporating materials, labor, and machine hours",
    ],
  },

  "qistmarket-erp": {
    id: "qistmarket",
    slug: "qistmarket-erp",
    name: "Qistmarket ERP",
    category: "Installment & Hire-Purchase Management",
    industry: "Financial Services",
    scale: [
      "Electronics Retailers",
      "Motorcycle & Auto Leasing",
      "Multi-Branch Installment Networks",
    ],
    tagline:
      "Installment plan generator, recovery officer ledgers, guarantor verification, and credit scoring.",
    heroHeadline:
      "Bring Complex Business Operations Into One Connected Platform.",
    heroSubhead:
      "Coordinate business workflows, users, departments, and installment credit processes through a structured enterprise management platform built for hire-purchase and consumer leasing operations.",
    badge: "Enterprise Multi-Role",
    color: "text-cyan-500",
    accentBg: "bg-cyan-500/10 border-cyan-500/30",
    targetAudience: [
      "Consumer electronics and home appliances installment retailers",
      "Motorcycle, auto, and commercial vehicle leasing businesses",
      "Furniture and household goods hire-purchase merchants",
      "Micro-finance lenders and installment scheme operators",
      "Multi-branch installment businesses managing field recovery officers",
    ],
    businessProblems: [
      {
        problem: "Surging Default Rates & Unverified Customer KYC",
        impact:
          "Sales staff approve installment applications without rigorous identity verification or guarantor background checks, leading to high default rates and untraceable buyers.",
      },
      {
        problem: "Field Recovery Officers Handing Cash Without Audit Trails",
        impact:
          "Recovery agents collect monthly cash from customers' doorsteps with hand-written paper receipts, creating serious risk of cash misappropriation and delayed ledger updates.",
      },
      {
        problem: "Complex Penalty, Profit, and Grace Period Calculations",
        impact:
          "Manually tracking 3-month to 24-month payment schedules, late fine penalties, and advance payments across thousands of active contracts causes bookkeeping chaos.",
      },
      {
        problem: "Lack of Defaulter Aging & Escalation Workflows",
        impact:
          "Delinquent accounts slip through the cracks until they are 90+ days overdue, making recovery and asset repossession nearly impossible.",
      },
    ],
    solutionOverview:
      "Qistmarket ERP is an enterprise hire-purchase platform featuring automated installment plan generation, KYC and guarantor digital profiling, mobile-friendly recovery officer route ledgers, automated SMS receipts, and aging defaulter escalation workflows.",
    modules: [
      {
        title: "Dynamic Installment Plan Generator & Schedule Engine",
        desc: "Configure flexible down payments, monthly tenures, profit markups, and payment schedules.",
        features: [
          "Flexible tenure options (3, 6, 9, 12, 18, 24, 36 months) with custom markup percentages",
          "Automated monthly installment schedule generation with due date calendars",
          "Down payment collection, processing fees, and asset insurance fee allocation",
          "Early payoff settlement calculator with automated markup rebate logic",
          "Custom payment plan structures: monthly, bi-weekly, or seasonal balloon payments",
        ],
        iconName: "Calculator",
      },
      {
        title: "Customer KYC & Biometric / Guarantor Profiling",
        desc: "Rigorous verification framework preventing identity fraud and non-performing contracts.",
        features: [
          "National Identity (CNIC / ID) verification with residential address mapping",
          "Mandatory 2-guarantor profile attachment with utility bill and employment verification",
          "Credit risk rating engine based on customer historical payment performance",
          "Digital contract generator: print legally binding promissory notes and hire agreements",
          "Customer document vault: store digital photos, signature scans, and verification logs",
        ],
        iconName: "ShieldCheck",
      },
      {
        title: "Field Recovery Officer Mobile Routing & Ledger",
        desc: "Empower collection agents with mobile area-wise recovery lists and instant digital receipting.",
        features: [
          "Geographic recovery route assignment: group accounts by neighborhood and recovery zone",
          "Mobile-friendly collection portal: view due installments, customer phone, and address",
          "Instant digital receipt generation sent to customer via SMS/WhatsApp upon cash collection",
          "Real-time cash collection reconciliation during end-of-day officer branch handover",
          "Recovery agent performance metrics: collection percentage against assigned target",
        ],
        iconName: "Navigation",
      },
      {
        title: "Automated Reminders & Late Penalty Management",
        desc: "Automate customer communications and ensure fair, consistent penalty enforcement.",
        features: [
          "Automated SMS/WhatsApp payment due reminders 3 days before scheduled due date",
          "Configurable grace period rules before late payment penalty activation",
          "Automated daily/monthly late fine calculation added to outstanding installment balance",
          "Special penalty waiver approval workflow with designated Manager authorization",
          "Payment confirmation notifications sent instantly to customer and guarantor",
        ],
        iconName: "CreditCard",
      },
      {
        title: "Defaulter Tracking & Legal Escalation Workflow",
        desc: "Proactive aging bucket monitoring (30, 60, 90+ days) and asset repossession tracking.",
        features: [
          "Delinquency aging bucket analysis: 1–30 days, 31–60 days, 61–90 days, 90+ days overdue",
          "Automated escalation triggers: from friendly SMS reminder to field visit to legal notice",
          "Asset repossession workflow: log repossession notice, warehouse intake, and resale valuation",
          "Legal notice generation with automated contract evidence compilation",
          "Blacklist registry sharing across all branches to prevent repeat default",
        ],
        iconName: "AlertTriangle",
      },
      {
        title: "20-Role Enterprise Permission & Governance Model",
        desc: "Strict separation of duties between sales, verification, cashier, recovery, and audit.",
        features: [
          "Distinct roles: Sales Officer, Field Verifier, Credit Approver, Cashier, Recovery Agent, Audit",
          "Dual-authorization requirements for contract approval and credit limit increases",
          "Branch-level financial ledgers consolidated into executive headquarters dashboard",
          "Portfolio at Risk (PAR 30, PAR 60, PAR 90) executive health metrics",
          "Exportable accounting journal entries for balance sheets and external audits",
        ],
        iconName: "Users",
      },
    ],
    workflowTitle: "Qistmarket Installment Contract & Recovery Lifecycle",
    workflowSteps: [
      {
        step: "01",
        title: "Customer Application & KYC Capture",
        desc: "Customer applies for 65-inch Smart TV. Sales officer records customer CNIC, salary proof, and 2 guarantor documents into verification queue.",
        input: "Application details & documents",
        output: "KYC profile ready for verification",
      },
      {
        step: "02",
        title: "Field Verification & Credit Approval",
        desc: "Field verifier conducts physical residence check. Credit manager reviews verification notes, approves 12-month tenure, and generates legal contract.",
        input: "Verification notes & approval",
        output: "Signed hire-purchase agreement",
      },
      {
        step: "03",
        title: "Down Payment & Asset Delivery",
        desc: "Cashier collects 25% down payment. Inventory module reserves and dispatches asset with serial number warranty registration.",
        input: "Down payment tender",
        output: "Asset delivery challan & schedule",
      },
      {
        step: "04",
        title: "Monthly Recovery & Ledger Settlement",
        desc: "Each month, customer pays via branch counter or field recovery agent. System updates ledger, sends SMS receipt, and adjusts aging metrics.",
        input: "Monthly installment tender",
        output: "Receipt & updated contract balance",
      },
    ],
    featureOutcomes: [
      {
        feature: "Automated KYC & Guarantor Profiling",
        operationalShift:
          "Enforces strict identity and residential verification before contract release.",
        businessOutcome:
          "Reduces default rates by up to 55% compared to paper-based installment operations.",
      },
      {
        feature: "Mobile Recovery Officer Routing",
        operationalShift:
          "Provides field agents with digitized route lists and instant SMS receipts.",
        businessOutcome:
          "Eliminates cash leakage and improves monthly field collection rates by 35%.",
      },
      {
        feature: "Automated Payment Reminders",
        operationalShift:
          "Sends scheduled SMS notices before and on the installment due date.",
        businessOutcome:
          "Increases on-time monthly payments and reduces recovery officer dispatch loads.",
      },
      {
        feature: "Defaulter Aging & Escalation Workflow",
        operationalShift:
          "Automatically categorizes overdue contracts into 30/60/90-day recovery buckets.",
        businessOutcome:
          "Ensures timely legal notices or asset repossession before accounts turn completely bad.",
      },
    ],
    technicalSpecs: {
      deployment: [
        "Cloud Enterprise Architecture (Secure multi-branch cloud hosting on AWS / GCP)",
        "Mobile-Responsive Web App for Field Recovery Officers (Android / iOS tablets and phones)",
        "On-Premise Branch Gateway for offline cash collection receipt printing",
      ],
      hardware: [
        "Thermal Bluetooth Mobile Printers for Field Recovery Agents",
        "Document / CNIC Flatbed Scanners for customer identity archival",
        "Biometric Thumbprint Scanners for customer contract authorization",
        "Standard Desktop POS Receipt Printers at branch cashier windows",
      ],
      security: [
        "20-Role Hierarchical Permission Matrix with dual-approval controls",
        "256-bit TLS encrypted data transit and encrypted customer document storage",
        "Full immutable audit logs recording every payment entry, waiver, and role action",
      ],
      database:
        "PostgreSQL Enterprise with multi-branch synchronization and real-time replicas",
      offlineCapability:
        "Mobile recovery officers can capture payments offline; records sync upon reconnection.",
    },
    onboardingProcess: [
      {
        phase: "Phase 1",
        title: "Installment Policy & Markup Matrix Setup",
        time: "Weeks 1–2",
        details:
          "Configure installment tenure models (3 to 36 months), interest/markup formulas, down payment rules, and penalty structures.",
      },
      {
        phase: "Phase 2",
        title: "Active Contract & Balance Data Migration",
        time: "Weeks 3–4",
        details:
          "Import existing active installment contracts, customer balances, payment schedules, and guarantor records from spreadsheets.",
      },
      {
        phase: "Phase 3",
        title: "Role-Based Staff & Field Training",
        time: "Weeks 5–6",
        details:
          "Train sales officers, verification agents, branch cashiers, and field recovery officers on mobile collection workflows.",
      },
      {
        phase: "Phase 4",
        title: "Live Branch Launch & Portfolio Monitoring",
        time: "Week 7 Onward",
        details:
          "Go-live across all branch outlets, activate automated customer SMS gateways, and monitor Portfolio at Risk (PAR) metrics.",
      },
    ],
    faqs: [
      {
        question:
          "How does Qistmarket ERP manage the customer verification and guarantor process?",
        answer:
          "The system requires mandatory customer identity documents, residential utility bills, and 2 verified guarantors before an installment contract can be approved. Verifiers can record physical field visit notes and GPS coordinates directly in the platform.",
      },
      {
        question:
          "Can field recovery officers collect cash and issue receipts at customers' homes?",
        answer:
          "Yes. Recovery officers use a mobile-optimized interface showing their assigned daily customer route. When cash is collected, the officer taps 'Receive Payment,' and the system instantly dispatches an automated SMS/WhatsApp receipt to the customer's phone while updating the branch cash ledger.",
      },
      {
        question:
          "How does the system handle late installment payments and penalties?",
        answer:
          "You can configure custom grace periods (e.g. 5 days). If an installment remains unpaid after the grace period, the system automatically applies the configured daily or monthly late penalty fee and updates the customer's outstanding statement.",
      },
      {
        question:
          "Can customers pay off their installment contract early with a discount?",
        answer:
          "Yes. Qistmarket ERP includes an early payoff calculator that determines remaining principal, deducts unearned future markup, and generates an official early settlement receipt with one click.",
      },
      {
        question:
          "What permissions prevent branch staff from manipulating installment balances?",
        answer:
          "Qistmarket ERP implements a strict 20-role permission model. Cashiers can only record payments; they cannot alter installment schedules or waive penalties without digital authorization from a Credit Manager or Branch Auditor. Every action is permanently recorded in the audit trail.",
      },
    ],
    relatedProducts: ["storex-erp", "purchoon-erp", "cambridgedesk"],
    stats: [
      { value: "3-36 Mo", label: "Dynamic Tenure Schedules" },
      { value: "2-Guarantor", label: "KYC Verification Vault" },
      { value: "Mobile", label: "Field Recovery Routing" },
      { value: "20-Role", label: "Enterprise Security Model" },
    ],
    differentiatorTitle:
      "Engineered Specifically for Installment Risk Management",
    differentiatorDesc:
      "Selling on installments is fundamentally a risk and recovery business. Generic POS or accounting software cannot handle dynamic schedules, field recovery routing, guarantor documentation, or delinquency aging buckets. Qistmarket ERP was built to safeguard your capital.",
    differentiatorFeatures: [
      "Dynamic installment schedule generator with tenure and markup options",
      "Digital KYC and guarantor verification vault with contract printing",
      "Mobile-friendly field recovery routing with instant SMS receipting",
      "Portfolio at Risk (PAR) monitoring and 30/60/90-day defaulter escalation",
    ],
  },
}
