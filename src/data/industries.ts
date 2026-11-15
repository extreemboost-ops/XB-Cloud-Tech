export interface IndustrySolutionItem {
  title: string
  desc: string
  details: string[]
}

export interface IndustryWorkflowStep {
  step: string
  title: string
  desc: string
}

export interface IndustryFAQ {
  question: string
  answer: string
}

export interface IndustryData {
  id: string
  slug: string
  name: string
  tagline: string
  heroHeadline: string
  heroSubhead: string
  challenges: {
    challenge: string
    impact: string
  }[]
  solutions: IndustrySolutionItem[]
  mappedProductSlugs: string[]
  workflowSteps: IndustryWorkflowStep[]
  caseHighlights: {
    client: string
    scenario: string
    outcome: string
  }
  faqs: IndustryFAQ[]
  stats: {
    value: string
    label: string
  }[]
}

export const INDUSTRIES_DATA: Record<string, IndustryData> = {
  "retail-wholesale": {
    id: "retail-wholesale",
    slug: "retail-wholesale",
    name: "Retail & Wholesale",
    tagline:
      "Omni-channel stock, point-of-sale, weight scales, and customer ledgers.",
    heroHeadline:
      "Software Engineered for Fast Counters, Multi-Store Sync & True Stock Control.",
    heroSubhead:
      "Whether you operate an apparel boutique chain, a high-velocity supermarket, or a bulk Mandi wholesale trade desk, XB Cloud Tech delivers connected POS and ERP software that eliminates inventory shrinkage and accelerates checkout.",
    challenges: [
      {
        challenge: "Inventory Reconciliation Drift Across Multi-Branch Stores",
        impact:
          "Stores sell out of stock while central warehouses hold excess stock due to delayed manual updates between retail branches.",
      },
      {
        challenge: "Unrecorded Shrinkage in Weight-Based & Loose Commodities",
        impact:
          "Selling loose items (grains, flour, spices) without direct scale integration or moisture tracking causes 3%–5% unrecorded gross shrinkage.",
      },
      {
        challenge: "Untracked Customer Credit (Udhar / Khata) Ledgers",
        impact:
          "Reliance on paper diaries leads to lost receipts, disputed balances with regular customers, and delayed receivable collection.",
      },
    ],
    solutions: [
      {
        title: "Sub-Second Barcode POS & Thermal Billing",
        desc: "High-speed barcode scanning with keyboard shortcuts, split payment tenders, and instant receipt printing.",
        details: [
          "100% offline-capable billing with automatic cloud synchronization",
          "Automated cash drawer kick and shift-end Z-Report reconciliation",
          "Item return & exchange processing with receipt barcode validation",
        ],
      },
      {
        title: "Direct Digital Weight Scale Integration",
        desc: "Eliminate manual calculator division with instant price-to-weight calculation for loose items.",
        details: [
          "Direct RS232 / USB scale integration with zero decimal keying errors",
          "Reverse price-to-weight mode: enter Rs. 100 -> system auto-computes exact grams",
          "Bori (sack) unpack conversion with shrinkage margin tracking",
        ],
      },
      {
        title: "Centralized Multi-Location Stock Visibility",
        desc: "Monitor inventory levels, inter-branch stock transfers, and automated reorder points from central headquarters.",
        details: [
          "Real-time stock valuation and minimum-threshold reorder alerts",
          "Branch-to-branch dispatch notes with transit tracking",
          "Supplier payment ledgers and purchase return management",
        ],
      },
    ],
    mappedProductSlugs: ["storex-erp", "purchoon-erp"],
    workflowSteps: [
      {
        step: "01",
        title: "Item Scan or Scale Weight Sync",
        desc: "Counter operator scans barcode or weighs loose commodity on digital scale with instant price computation.",
      },
      {
        step: "02",
        title: "Split Tender or Digital Khata Settlement",
        desc: "Customer pays via cash, card, or digital Udhar ledger with customer credit limit verification.",
      },
      {
        step: "03",
        title: "Thermal Receipt & Live Stock Deduction",
        desc: "Receipt prints instantly with updated customer Khata balance; warehouse inventory updates across all branches.",
      },
      {
        step: "04",
        title: "Shift Z-Report & Audit Balancing",
        desc: "Drawer opens/closes with strict cash counting verification, preventing cashier shrinkage.",
      },
    ],
    caseHighlights: {
      client: "Al-Madina Departmental Chain (5 Locations)",
      scenario:
        "Managed 18,000 SKUs across 5 stores using disconnected desktop software with frequent inventory mismatches.",
      outcome:
        "Deployed Storex ERP with central cloud sync, reducing stockout incidents by 82% and cutting shift balancing time from 90 mins to 12 mins.",
    },
    faqs: [
      {
        question:
          "Can our checkout counters continue selling if the store internet goes down?",
        answer:
          "Yes. Both Storex ERP and Purchoon ERP are built with offline-first architecture. Cashiers can continue scanning, weighing, billing, and printing receipts without internet. Records queue locally and sync automatically when connection returns.",
      },
      {
        question:
          "Does the system support both packaged goods and weighed commodities on the same invoice?",
        answer:
          "Yes. Cashiers can scan a packaged barcode item, then click a loose item hotkey (e.g. Basmati Rice), weigh it on the scale, and print both on a single thermal receipt.",
      },
    ],
    stats: [
      { value: "0.2s", label: "Barcode Scan Response" },
      { value: "100%", label: "Offline Resilience" },
      { value: "Multi-Store", label: "Central Stock Sync" },
      { value: "Zero", label: "Khata Reconciliation Loss" },
    ],
  },

  education: {
    id: "education",
    slug: "education",
    name: "Education & Academics",
    tagline:
      "Student lifecycle, automated fee challans, Cambridge grading, and parent portal.",
    heroHeadline:
      "Bring Academic Operations, Fee Administration & Parent Trust Together.",
    heroSubhead:
      "From automated 3-copy bank fee challan batch generation to Cambridge/Board marksheet tabulation and biometric attendance SMS alerts, CambridgeDesk powers modern private schools and multi-campus networks.",
    challenges: [
      {
        challenge: "Manual Preparation of Monthly Bank Fee Vouchers",
        impact:
          "Accounts teams spend weeks manually calculating tuition, sibling discounts, and arrears, leading to delayed collections and error disputes.",
      },
      {
        challenge: "Error-Prone Examination Marksheet Tabulation",
        impact:
          "Teachers struggle with messy spreadsheets across weighted assessments, causing delayed report cards and inaccurate student rankings.",
      },
      {
        challenge:
          "Disconnected Parent Communication Regarding Student Absences",
        impact:
          "Parents are not alerted when students miss class, undermining institutional trust and student discipline.",
      },
    ],
    solutions: [
      {
        title: "Batch 3-Copy Bank Challan Generation",
        desc: "Generate monthly fee vouchers for thousands of students with automated sibling concessions and late fine rules.",
        details: [
          "Bank copy, School copy, and Student copy with unique barcode/QR verification",
          "Automated sibling discount policies and scholarship concession rules",
          "Daily bank scroll reconciliation and real-time fee defaulter tracking",
        ],
      },
      {
        title: "Academic Grading & Marksheet Engine",
        desc: "Automated report card compilation supporting Cambridge O/A-Level rubrics and standard GPA scales.",
        details: [
          "Configurable weighted exam schemes (term tests, mid-terms, final exams)",
          "Automated GPA, letter grade, and subject ranking calculations",
          "Custom report card templates with principal and class teacher remarks",
        ],
      },
      {
        title: "Biometric Attendance & Parent Portal",
        desc: "RFID/Biometric gate attendance with automated SMS alerts sent directly to guardians.",
        details: [
          "Instant unexcused absence SMS dispatched within 30 mins of gate closure",
          "Mobile parent portal for fee download, daily homework, and exam timetables",
          "Multi-child linking allowing parents to manage all siblings in one account",
        ],
      },
    ],
    mappedProductSlugs: ["cambridgedesk"],
    workflowSteps: [
      {
        step: "01",
        title: "Student Enrollment & Sibling Fee Mapping",
        desc: "Student is admitted, assigned unique GR number, and linked with siblings for automatic tuition concessions.",
      },
      {
        step: "02",
        title: "Monthly Batch Challan Execution",
        desc: "Accounts department executes billing run, generating printable vouchers and uploading digital copies to parent portals.",
      },
      {
        step: "03",
        title: "Daily Biometric Gate Check & SMS",
        desc: "Student taps RFID badge at school gate; unexcused absences trigger automatic SMS notifications to guardians.",
      },
      {
        step: "04",
        title: "Exam Grading & Marksheet Publishing",
        desc: "Teachers input test scores; system tabulates weighted GPA and outputs official verified report cards.",
      },
    ],
    caseHighlights: {
      client: "Crescent Cambridge Academy (3 Campuses, 2,800 Students)",
      scenario:
        "Struggled with 3-week delays in term report card compilation and paper fee voucher reconciliation across 3 campuses.",
      outcome:
        "Deployed CambridgeDesk, achieving 1-click batch challan generation and same-day electronic report card distribution to parents.",
    },
    faqs: [
      {
        question:
          "Does CambridgeDesk support both Cambridge grading rubrics and local educational boards?",
        answer:
          "Yes. The grading engine supports Cambridge assessment rubrics (A* to U) alongside percentage and GPA systems, with fully customizable grade boundary thresholds.",
      },
    ],
    stats: [
      { value: "1-Click", label: "Batch Challan Run" },
      { value: "100%", label: "Marksheet Accuracy" },
      { value: "<30min", label: "Absence SMS Alerts" },
      { value: "Multi-Campus", label: "Unified Executive Portal" },
    ],
  },

  pharmacy: {
    id: "pharmacy",
    slug: "pharmacy",
    name: "Healthcare & Pharmacy",
    tagline:
      "Batch expiry safety, generic salt substitutions, and clinical dispensary POS.",
    heroHeadline:
      "Clinical Safety & Speed for Modern Dispensaries and Pharmacy Chains.",
    heroSubhead:
      "Prevent expired medicine losses, eliminate counter walkouts with instant generic chemical salt substitutions, and maintain regulatory compliance with Pharmacy ERP.",
    challenges: [
      {
        challenge: "Expired Medicine Losses & Regulatory Penalties",
        impact:
          "Expired drugs remain hidden on dispensary shelves, causing massive financial write-offs and risking severe regulatory license suspension.",
      },
      {
        challenge: "Lost Counter Sales Due to Out-of-Stock Brands",
        impact:
          "Dispensers lose sales when prescribed brand names are out of stock because they cannot instantly lookup equivalent generic alternatives.",
      },
      {
        challenge: "Complex Packaging Breakdown (Box vs. Strip vs. Tablet)",
        impact:
          "Dispensing partial strips or loose tablets creates immense inventory count mismatches in generic retail systems.",
      },
    ],
    solutions: [
      {
        title: "FEFO Batch & Expiry Quarantine Management",
        desc: "Strict First-Expiry-First-Out dispensing logic preventing expired drugs from ever being billed.",
        details: [
          "Color-coded near-expiry alerts (30, 60, 90 days before expiration)",
          "Automated quarantine locking: expired batches cannot be added to bills",
          "1-click supplier return claim generation for near-expiry medicine",
        ],
      },
      {
        title: "Generic Salt & Chemical Formula Substitution",
        desc: "Instantly display in-stock alternative brands sharing the exact active chemical formula.",
        details: [
          "Pre-loaded medical formula database with active ingredient strengths",
          "Side-by-side price comparison of bio-equivalent alternatives",
          "Retain counter sales while strictly preserving patient safety",
        ],
      },
      {
        title: "Multi-Unit Inventory (Box / Strip / Tablet)",
        desc: "Native fractional unit tracking allowing accurate dispensing down to single tablets.",
        details: [
          "Automatic price and inventory fractioning without decimal errors",
          "Distributor purchase entry with bonus pack ('Buy 10 Get 1 Free') tracking",
          "Controlled drugs & narcotics Dangerous Drugs Register (DDR) compliance",
        ],
      },
    ],
    mappedProductSlugs: ["pharmacy-erp"],
    workflowSteps: [
      {
        step: "01",
        title: "Prescription Search by Brand or Salt",
        desc: "Dispenser types brand name; system highlights available batches, expiry dates, and shelf rack locations.",
      },
      {
        step: "02",
        title: "Instant Salt Alternative Matcher",
        desc: "If brand is unavailable, 1 keystroke displays all equivalent in-stock medicines with identical active ingredients.",
      },
      {
        step: "03",
        title: "FEFO Batch Selection & Partial Strip Dispense",
        desc: "System selects earliest expiring batch and automatically calculates fractional strip or tablet price.",
      },
      {
        step: "04",
        title: "Receipt Print with Expiry Records",
        desc: "Thermal receipt prints batch numbers and expiry dates for patient safety and regulatory audit.",
      },
    ],
    caseHighlights: {
      client: "MediCare Pharmacy Network (8 Outlets)",
      scenario:
        "Suffered Rs. 1.2M in annual expired drug write-offs due to lack of batch expiry tracking across branches.",
      outcome:
        "Implemented Pharmacy ERP with automated FEFO dispensing and 60-day supplier return claims, reducing expired medicine waste by 91%.",
    },
    faqs: [
      {
        question: "Does Pharmacy ERP alert staff before medicines expire?",
        answer:
          "Yes. The system provides visual color-coded warnings for medicines expiring in 90, 60, and 30 days, and automatically generates return claim sheets to send back to distributors before the expiry date.",
      },
    ],
    stats: [
      { value: "0.2s", label: "Medicine Search Speed" },
      { value: "FEFO", label: "Automated Batch Selection" },
      { value: "-90%", label: "Expired Waste Reduction" },
      { value: "25k+", label: "Pre-Loaded Pharmaceuticals" },
    ],
  },

  manufacturing: {
    id: "manufacturing",
    slug: "manufacturing",
    name: "Manufacturing & Production",
    tagline:
      "Multi-level BOM, work orders, scrap tracking, and shop floor job cards.",
    heroHeadline:
      "Connect Industrial Operations from Shop Floor Job Cards to Financial Balance Sheets.",
    heroSubhead:
      "Stop assembly halts caused by missing raw materials and gain full visibility over scrap losses, operator productivity, and actual manufacturing unit costs with Industrial ERP.",
    challenges: [
      {
        challenge: "Unplanned Production Halts Due to Material Shortages",
        impact:
          "Assembly lines sit idle because a single raw material component was not ordered in time, causing delayed shipments and customer penalties.",
      },
      {
        challenge: "Hidden Scrap & Material Leakage on the Factory Floor",
        impact:
          "Discrepancies between theoretical material formulas and actual factory consumption remain unmeasured, causing severe financial drain.",
      },
      {
        challenge: "Inaccurate Manufacturing Unit Cost Calculations",
        impact:
          "Pricing products based on rough estimates rather than actual raw materials, machine hours, and direct labor leads to below-cost selling.",
      },
    ],
    solutions: [
      {
        title: "Multi-Level Bill of Materials (BOM) & Recipes",
        desc: "Define hierarchical component trees, scrap tolerances, and standard machine cycle times.",
        details: [
          "Sub-assembly BOM trees with engineering revision controls",
          "Automated BOM cost roll-up combining materials, labor, and machine rates",
          "Material Requirements Planning (MRP) forecasting procurement needs from scheduled jobs",
        ],
      },
      {
        title: "Shop Floor Work Orders & Barcode Job Cards",
        desc: "Track work-in-progress across cutting, machining, assembly, quality control, and packing.",
        details: [
          "Printable traveler job cards with stage-by-stage barcodes",
          "Operator shift output logs recording good units and rejected parts",
          "Real-time Work In Progress (WIP) tracking across plant work centers",
        ],
      },
      {
        title: "Actual Cost Accounting & Scrap Variance",
        desc: "Compare theoretical material requirements against actual drawn materials to spot leakage.",
        details: [
          "Variance analysis identifying operators or machines with excessive scrap",
          "Direct material, labor, and machine electricity overhead allocation",
          "Finished goods transfer notes (GTN) with batch quality clearance",
        ],
      },
    ],
    mappedProductSlugs: ["industrial-erp"],
    workflowSteps: [
      {
        step: "01",
        title: "BOM Configuration & Stock Reservation",
        desc: "Engineering configures multi-level BOM; work order releases and reserves raw materials in warehouse.",
      },
      {
        step: "02",
        title: "Shop Floor Job Card Routing",
        desc: "Operators scan traveler barcodes at each manufacturing stage (Cutting -> Machining -> Assembly -> QC).",
      },
      {
        step: "03",
        title: "Scrap & Wastage Logging",
        desc: "System compares theoretical BOM material usage against actual material drawn, logging variances.",
      },
      {
        step: "04",
        title: "QC Clearance & Finished Goods Costing",
        desc: "Quality inspection approves finished units; batch cost ledger calculates exact final cost per unit.",
      },
    ],
    caseHighlights: {
      client: "Pak-Gearbox Engineering (Industrial Machining)",
      scenario:
        "Suffered frequent machining line halts and 7% unexplained scrap loss using manual paper job sheets.",
      outcome:
        "Deployed Industrial ERP, cutting line material shortages to zero and identifying two CNC machines responsible for 60% of scrap offcuts.",
    },
    faqs: [
      {
        question: "Can shop floor machine operators easily use the system?",
        answer:
          "Yes. Operators use rugged barcode scanners and touchscreen terminals to scan traveler job cards. They simply scan the stage barcode when starting and completing a batch, requiring zero complex computer typing.",
      },
    ],
    stats: [
      { value: "Multi-Level", label: "BOM Tree Hierarchy" },
      { value: "Zero", label: "Material Shortage Halts" },
      { value: "-18%", label: "Average Scrap Reduction" },
      { value: "Exact", label: "Unit Cost Roll-Up" },
    ],
  },

  distribution: {
    id: "distribution",
    slug: "distribution",
    name: "Distribution & Logistics",
    tagline:
      "Multi-warehouse movement, delivery vehicle dispatch, and supplier replenishment.",
    heroHeadline:
      "Complete Visibility Over Stock Movement, Delivery Fleets & Supplier Accounts.",
    heroSubhead:
      "Manage central distribution hubs, regional transit depots, delivery driver collection sheets, and cash-on-delivery reconciliation through connected distribution software.",
    challenges: [
      {
        challenge: "Lost Inventory During Inter-Warehouse Transit",
        impact:
          "Stock dispatched from main warehouses fails to match intake at regional depots, with zero digital audit trail of who authorized transit.",
      },
      {
        challenge: "Unreconciled Driver Cash Collections",
        impact:
          "Delivery drivers collect cash from retail merchants with manual paper receipts, causing days of delayed ledger reconciliation.",
      },
    ],
    solutions: [
      {
        title: "Inter-Warehouse Transfer Verification",
        desc: "Two-step dispatch and receipt confirmation ensuring zero stock vanishes in transit.",
        details: [
          "Transfer orders with gate pass and truck vehicle number logging",
          "Destination intake verification scanning barcodes upon arrival",
          "Automated variance claims for damaged or missing cartons",
        ],
      },
      {
        title: "Delivery Driver Route & Cash Reconciliation",
        desc: "Generate driver load sheets and reconcile daily cash and credit collections upon return.",
        details: [
          "Sequenced delivery route packing sheets for vans and trucks",
          "Driver mobile collection handover with instant SMS confirmation to store owners",
          "Van stock balance tracking for mobile sales representatives",
        ],
      },
    ],
    mappedProductSlugs: ["purchoon-erp", "storex-erp"],
    workflowSteps: [
      {
        step: "01",
        title: "Bulk Order Ingestion & Van Load Sheet",
        desc: "Orders from multiple retail outlets compile into optimized vehicle delivery loading manifests.",
      },
      {
        step: "02",
        title: "Dispatch Gate Pass & Driver Sign-off",
        desc: "Warehouse supervisor and driver verify pallet counts before gate pass issuance.",
      },
      {
        step: "03",
        title: "Drop-off & Digital Payment Receipting",
        desc: "Driver delivers stock, accepts cash or updates store Khata ledger with mobile receipt.",
      },
      {
        step: "04",
        title: "End-of-Day Driver Cash Handover",
        desc: "Branch cashier reconciles driver collections against manifest in under 10 minutes.",
      },
    ],
    caseHighlights: {
      client: "Apex Beverages & Wholesale Distribution",
      scenario:
        "Managed 22 delivery vans across 3 districts with unrecorded cash variances averaging Rs. 150k monthly.",
      outcome:
        "Deployed digital driver dispatch manifests and live collection handovers, eliminating cash discrepancies completely.",
    },
    faqs: [
      {
        question:
          "Can distribution vans track mobile stock when making spot sales?",
        answer:
          "Yes. Van inventory is treated as a mobile warehouse. Drivers can issue spot invoices, deduct van inventory in real time, and reconcile remaining stock at the depot at the end of the day.",
      },
    ],
    stats: [
      { value: "100%", label: "Transit Verification" },
      { value: "Zero", label: "Driver Cash Leaks" },
      { value: "Multi-Van", label: "Fleet Manifest Tracking" },
      { value: "Real-Time", label: "Depot Replenishment" },
    ],
  },

  "financial-services": {
    id: "financial-services",
    slug: "financial-services",
    name: "Installment Commerce & Leasing",
    tagline:
      "Installment scheduling, KYC verification vault, and field recovery routing.",
    heroHeadline:
      "Risk Management & Field Recovery Software for Hire-Purchase Enterprises.",
    heroSubhead:
      "Safeguard your capital with dynamic installment tenure schedules, strict 2-guarantor KYC profiling, mobile field collection routing, and automated delinquency aging workflows with Qistmarket ERP.",
    challenges: [
      {
        challenge:
          "Surging Default Rates Due to Inadequate Customer Verification",
        impact:
          "Customer contracts are approved with unverified identity documents and missing guarantor proof, leading to untraceable defaulters.",
      },
      {
        challenge: "Unmonitored Field Recovery Officers Handing Cash",
        impact:
          "Collection agents collect monthly installments with hand-written paper receipts, creating serious risk of cash misappropriation.",
      },
      {
        challenge: "Lack of Defaulter Escalation & Aging Workflows",
        impact:
          "Overdue accounts remain uncontacted until they reach 90+ days delinquent, making recovery and asset repossession impossible.",
      },
    ],
    solutions: [
      {
        title: "Dynamic Installment Schedule Engine",
        desc: "Configure flexible down payments, tenures (3 to 36 months), and custom markup formulas.",
        details: [
          "Automated monthly due date calendars with grace period rules",
          "Automated late payment penalty calculation and early payoff rebate logic",
          "Legally binding promissory notes and hire-purchase agreement generation",
        ],
      },
      {
        title: "Customer KYC & 2-Guarantor Digital Vault",
        desc: "Prevent fraudulent applications before installment contracts are approved.",
        details: [
          "National ID (CNIC) verification with residential utility bill attachment",
          "Mandatory 2-guarantor employment and financial proof verification",
          "Centralized blacklist sharing across all branch outlets",
        ],
      },
      {
        title: "Mobile Field Recovery Officer Routing",
        desc: "Empower collection agents with digitized customer route lists and instant SMS receipts.",
        details: [
          "Area-wise account assignment grouped by neighborhood and recovery zone",
          "Instant digital receipt dispatched to customer via SMS upon cash receipt",
          "Portfolio at Risk (PAR 30, PAR 60, PAR 90) aging monitoring and legal notice generation",
        ],
      },
    ],
    mappedProductSlugs: ["qistmarket-erp"],
    workflowSteps: [
      {
        step: "01",
        title: "Customer Application & KYC Capture",
        desc: "Applicant documents and 2 guarantor files are scanned into the verification queue.",
      },
      {
        step: "02",
        title: "Field Verification & Credit Approval",
        desc: "Verifier conducts physical address check; Credit Manager approves tenure and prints legal contract.",
      },
      {
        step: "03",
        title: "Down Payment & Asset Delivery",
        desc: "Cashier collects down payment; warehouse dispatches asset with warranty serial number registration.",
      },
      {
        step: "04",
        title: "Monthly Collection & Ledger Update",
        desc: "Customer pays via branch or field agent; system updates ledger, sends SMS receipt, and updates aging metrics.",
      },
    ],
    caseHighlights: {
      client: "Star Electronics & Home Appliances (4 Outlets)",
      scenario:
        "Operated 1,400 active installment accounts with paper files, experiencing a 14% bad-debt default rate.",
      outcome:
        "Deployed Qistmarket ERP with guarantor verification and field recovery routing, reducing defaults to under 4.2% within 9 months.",
    },
    faqs: [
      {
        question: "Can recovery officers collect payments on mobile phones?",
        answer:
          "Yes. Recovery officers use a mobile-friendly portal showing their daily route. When cash is collected, tapping 'Receive Payment' dispatches an instant SMS receipt to the customer and updates the branch ledger.",
      },
    ],
    stats: [
      { value: "3-36 Mo", label: "Dynamic Tenures" },
      { value: "2-Guarantor", label: "KYC Compliance Vault" },
      { value: "-55%", label: "Default Rate Reduction" },
      { value: "20-Role", label: "Enterprise Security Model" },
    ],
  },
}
