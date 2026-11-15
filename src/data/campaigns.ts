export interface CampaignProblem {
  problem: string
  impact: string
}

export interface CampaignFeature {
  title: string
  desc: string
}

export interface CampaignFAQ {
  question: string
  answer: string
}

export interface CampaignData {
  id: string
  slug: string
  name: string
  targetAudience: string
  heroHeadline: string
  heroSubhead: string
  primaryCta: string
  benefits: string[]
  productBadge: string
  color: string
  simulatorType: "storex" | "purchoon" | "cambridge" | "pharmacy" | "industrial" | "custom"
  problemSection: {
    title: string
    desc: string
    problems: CampaignProblem[]
  }
  solutionSection: {
    title: string
    desc: string
    features: CampaignFeature[]
  }
  objectionFaqs: CampaignFAQ[]
  whatsappNumber: string
  whatsappPreFill: string
}

export const CAMPAIGNS_DATA: Record<string, CampaignData> = {
  "storex-retail": {
    id: "storex-retail",
    slug: "storex-retail",
    name: "Storex Retail ERP",
    targetAudience:
      "Retail store owners, multi-branch merchants, and inventory managers",
    heroHeadline:
      "Stop Losing Track of Your Stock, Daily Sales, and Cashier Cash.",
    heroSubhead:
      "Manage real-time inventory, sub-second barcode checkout, customer credit (Khata), and supplier bills through one connected retail ERP built for continuous counter uptime.",
    primaryCta: "Book a Storex Demo",
    benefits: [
      "Sub-second barcode scanning with keyboard shortcuts",
      "Real-time multi-branch stock sync with zero reconciliation drift",
      "Digital customer Khata ledger with automated balance tracking",
      "100% offline-ready: keep billing even when the internet drops",
      "Shift Z-Reports preventing end-of-day cashier drawer leakage",
    ],
    productBadge: "High-Speed Retail POS",
    color: "text-blue-500",
    simulatorType: "storex",
    problemSection: {
      title: "Why Generic Retail Software Costs You Money Every Day",
      desc: "Manual paper registers and clunky desktop tools cause continuous counter friction:",
      problems: [
        {
          problem: "Blind Stockouts on Fast-Moving Items",
          impact:
            "Cashiers promise items that are out of stock while overstocked items gather dust without automatic reorder alerts.",
        },
        {
          problem: "Counter Lines Backing Up During Peak Hours",
          impact:
            "Slow search interfaces and frequent mouse clicks cause long customer queues and walkouts.",
        },
        {
          problem: "Disputed Customer Khata (Credit) Balances",
          impact:
            "Hand-written diaries get lost or disputed, causing delayed debt collections and lost revenue.",
        },
      ],
    },
    solutionSection: {
      title: "Storex ERP Fixes Every Friction Point",
      desc: "Engineered from real retail store floor audits:",
      features: [
        {
          title: "Sub-Second Barcode Scanning",
          desc: "Scan barcodes rapidly with split payment options (Cash, Card, Khata) and automatic thermal receipt cutting.",
        },
        {
          title: "Automated Reorder Thresholds",
          desc: "System alerts managers the moment stock reaches minimum safety counts, preventing sudden stockouts.",
        },
        {
          title: "Digital Customer Khata with SMS Receipts",
          desc: "Enforce individual credit caps, track customer debt aging, and print ledger statements on demand.",
        },
        {
          title: "Zero-Leakage Shift Z-Reports",
          desc: "Enforce physical cash drawer count entry at every cashier change, highlighting variances instantly.",
        },
      ],
    },
    objectionFaqs: [
      {
        question: "Can we continue billing if the internet disconnects?",
        answer:
          "Yes. Storex ERP is offline-resilient. You can continue scanning barcodes, printing receipts, and ringing up sales without internet. Everything synchronizes automatically once connection returns.",
      },
      {
        question: "Can we import our existing inventory from Excel?",
        answer:
          "Yes. We provide pre-formatted CSV/Excel templates. Our deployment engineers validate and import your item catalog, categories, supplier records, and opening balances before launch.",
      },
      {
        question: "What hardware is required?",
        answer:
          "Any standard PC or POS terminal running Windows 10/11. Storex connects seamlessly with industry-standard USB/Ethernet thermal receipt printers (58mm/80mm), barcode scanners, and cash drawers.",
      },
      {
        question: "Is staff training included?",
        answer:
          "Yes. We provide hands-on training sessions for cashiers and store managers, covering billing, returns, supplier GRNs, and shift reconciliations.",
      },
    ],
    whatsappNumber: "+15550192834",
    whatsappPreFill:
      "Hi, I am interested in Storex ERP for my retail store. Can you share a quick demo?",
  },

  "purchoon-wholesale": {
    id: "purchoon-wholesale",
    slug: "purchoon-wholesale",
    name: "Purchoon Grocery ERP",
    targetAudience:
      "Grocery stores, kiryana merchants, loose-item retailers, and bulk wholesalers",
    heroHeadline:
      "Selling Sugar, Rice, Daal, or Loose Items by Weight? Manage It Smarter.",
    heroSubhead:
      "Handle weight-based sales, automatic price-to-weight reverse calculations, loose commodity bori (sacks), and customer Udhar through software built specifically for grocery operations.",
    primaryCta: "Book a Purchoon Demo",
    benefits: [
      "Direct digital electronic weighing scale sync (RS232/USB)",
      "Instant reverse calculation: type Rs. 100 -> computes exact grams",
      "Bulk bori (sack) unpack tracking with moisture & shrinkage allowance",
      "Digital customer Udhar (credit) ledger with balance verification receipts",
      "Dual-mode POS: effortlessly mix packaged barcode FMCG with weighed produce",
    ],
    productBadge: "Weight-Based POS Engine",
    color: "text-emerald-500",
    simulatorType: "purchoon",
    problemSection: {
      title: "Why Standard Barcode POS Fails for Grocery & Wholesale",
      desc: "Loose commodities do not follow apparel barcode rules:",
      problems: [
        {
          problem: "Barcodes Do Not Exist for Loose Grains & Spices",
          impact:
            "Staff waste time typing fake barcodes or doing mental division on calculators, leading to cash leaks.",
        },
        {
          problem: "Customers Buy by Rupee Amount Rather Than Grams",
          impact:
            "When a shopper asks for 'Rs. 50 worth of daal', manual division creates rounding errors and counter delays.",
        },
        {
          problem: "Unmonitored Bulk Sack (Bori) Shrinkage",
          impact:
            "Unpacking 50kg bags into loose bins loses weight through moisture and handling, creating untracked losses.",
        },
      ],
    },
    solutionSection: {
      title: "Engineered for Loose Commodities & Fast Counters",
      desc: "Purchoon ERP bridges scale hardware with digital ledger accounts:",
      features: [
        {
          title: "Direct Weighing Scale Sync",
          desc: "Place items on the scale and the exact weight registers in the bill instantly without manual typing.",
        },
        {
          title: "Reverse Price-to-Weight Calculator",
          desc: "Type the customer's cash budget, and the system computes the exact gram amount to dispense in 1 click.",
        },
        {
          title: "Digital Udhar Khata Ledger",
          desc: "Replace lost paper diaries with authenticated digital balances, printed balance receipts, and SMS alerts.",
        },
        {
          title: "Wholesale Tier Pricing",
          desc: "Automatically apply retail, semi-wholesale (10kg+), or full sack rates depending on order volume.",
        },
      ],
    },
    objectionFaqs: [
      {
        question: "Can Purchoon ERP connect to my existing electronic scale?",
        answer:
          "Yes. Purchoon ERP supports standard digital weighing scales connected via serial RS232 or USB ports (CAS, Mettler, A&D protocols).",
      },
      {
        question:
          "Can we bill both packaged FMCG items and loose commodities together?",
        answer:
          "Yes. Cashiers can scan a packaged soap barcode, then immediately tap a loose item hotkey (e.g. Sugar), weigh 1.5kg, and print both on the same thermal receipt.",
      },
      {
        question: "How does the system handle paper Udhar books?",
        answer:
          "We help you migrate existing customer balances from your paper khata into digital customer profiles during onboarding.",
      },
    ],
    whatsappNumber: "+15550192834",
    whatsappPreFill:
      "Hi, I run a grocery/wholesale business and need Purchoon ERP with weight scale integration.",
  },

  "cambridgedesk-schools": {
    id: "cambridgedesk-schools",
    slug: "cambridgedesk-schools",
    name: "CambridgeDesk School ERP",
    targetAudience:
      "Private school owners, principals, academic administrators, and coordinators",
    heroHeadline:
      "Bring Your School's Academic, Fee & Parent Communication Together.",
    heroSubhead:
      "Manage student admissions, 1-click batch bank fee challan generation, Cambridge marksheet grading, and automated morning absence SMS alerts through one unified platform.",
    primaryCta: "Schedule a School Demo",
    benefits: [
      "1-Click batch 3-copy bank fee challan generation (Student, Bank, School)",
      "Automated sibling discount policies and scholarship concession rules",
      "Cambridge assessment rubrics (A* to U) and standard GPA grading engines",
      "Gate RFID attendance with automated unexcused absence SMS to parents",
      "Mobile-friendly parent portal for downloadable report cards and vouchers",
    ],
    productBadge: "Academic ERP",
    color: "text-violet-500",
    simulatorType: "cambridge",
    problemSection: {
      title: "Administrative Headaches That Drain School Resources",
      desc: "Manual paperwork slows down academic terms and damages parent relationships:",
      problems: [
        {
          problem: "Weeks Spent Preparing Monthly Bank Fee Vouchers",
          impact:
            "Accountants spend hundreds of manual hours handwriting challans and reconciling bank scrolls.",
        },
        {
          problem: "Error-Prone Term Examination Marksheets",
          impact:
            "Teachers calculate weighted assessments across multiple spreadsheets, leading to mistakes and delayed report cards.",
        },
        {
          problem: "Untracked Student Absences Causing Parent Friction",
          impact:
            "Guardians are not alerted when students miss class, leading to discipline breakdowns and administrative blame.",
        },
      ],
    },
    solutionSection: {
      title: "Streamlined Administration Across Campuses",
      desc: "CambridgeDesk automates the repetitive tasks so educators can focus on teaching:",
      features: [
        {
          title: "Batch Bank Fee Challan Generation",
          desc: "Generate 3-part bank vouchers with barcodes for the entire school in under 60 seconds.",
        },
        {
          title: "Automated Grading & Report Cards",
          desc: "Input test scores and let the system compute weighted GPAs, rankings, and printable marksheets.",
        },
        {
          title: "Instant Absence Alerts via SMS",
          desc: "Gate attendance syncs with your SMS gateway, notifying parents within 30 minutes of school gate lock.",
        },
        {
          title: "Multi-Campus Central Management",
          desc: "Executive dashboard monitoring fee collections and enrollment growth across all branch campuses.",
        },
      ],
    },
    objectionFaqs: [
      {
        question:
          "Can we customize our school's fee structure and sibling concessions?",
        answer:
          "Yes. CambridgeDesk allows you to define custom fee heads (Tuition, Lab, Transport, Sports) and automatically applies percentage sibling discounts.",
      },
      {
        question: "Does CambridgeDesk support Cambridge O/A-Level grading?",
        answer:
          "Yes. Pre-configured grading rubrics support Cambridge standards (A* through U) alongside percentage and GPA systems.",
      },
      {
        question: "How do parents access student records?",
        answer:
          "Parents receive private login credentials to a responsive web portal where they can view attendance, report cards, and fee vouchers.",
      },
    ],
    whatsappNumber: "+15550192834",
    whatsappPreFill:
      "Hello, I am interested in CambridgeDesk ERP for our school administration.",
  },

  "pharmacy-management": {
    id: "pharmacy-management",
    slug: "pharmacy-management",
    name: "Pharmacy ERP",
    targetAudience:
      "Pharmacy owners, chemist retail operators, and hospital dispensary managers",
    heroHeadline:
      "Get Total Control Over Pharmacy Sales, Expirations, and Batch Safety.",
    heroSubhead:
      "Eliminate expired drug losses with FEFO batch dispensing, recover lost sales with instant generic chemical salt substitutions, and manage distributor purchase invoices seamlessly.",
    primaryCta: "Request a Pharmacy Demo",
    benefits: [
      "First-Expiry-First-Out (FEFO) dispensing: locks expired drugs from checkout",
      "Color-coded 30/60/90-day near-expiry alerts with 1-click supplier return claims",
      "Instant chemical salt alternative matcher when prescribed brands are out of stock",
      "Multi-unit breakdown: sell by full Box, partial Strip, or individual Tablet",
      "Narcotics & controlled substances register compliant with health authorities",
    ],
    productBadge: "Clinical Grade POS",
    color: "text-rose-500",
    simulatorType: "pharmacy",
    problemSection: {
      title: "Costly Operational Traps in Medicine Retail",
      desc: "Operating a pharmacy without batch and expiry automation carries high risk:",
      problems: [
        {
          problem: "Expired Medicine Write-Offs & Licensing Fines",
          impact:
            "Expired drugs hidden on shelves cause thousands in losses and risk regulatory license suspension.",
        },
        {
          problem: "Lost Sales When Prescribed Brands Are Out of Stock",
          impact:
            "Customers walk out because counter dispensers cannot quickly identify equivalent generic alternatives.",
        },
        {
          problem: "Box-to-Strip Inventory Discrepancy",
          impact:
            "Selling broken strips from full boxes leads to chaotic inventory counts in standard retail software.",
        },
      ],
    },
    solutionSection: {
      title: "Built for Medicine Counters & Clinical Compliance",
      desc: "Pharmacy ERP protects your profit margins and patient safety:",
      features: [
        {
          title: "FEFO Batch Auto-Selection",
          desc: "System recommends the batch closest to expiration first, preventing aging stock from sitting on shelves.",
        },
        {
          title: "Generic Salt Substitution",
          desc: "Lookup alternative brands sharing identical active pharmaceutical ingredients and strength in under 200ms.",
        },
        {
          title: "Fractional Packaging Engine",
          desc: "Native math for Box -> Strip -> Tablet units with automatic fractional pricing.",
        },
        {
          title: "Distributor Purchase Reconciliation",
          desc: "Capture trade prices, distributor bonus items (10+1 free), and sales tax deductions accurately.",
        },
      ],
    },
    objectionFaqs: [
      {
        question: "Does Pharmacy ERP include a pre-loaded medicine database?",
        answer:
          "Yes. It includes over 25,000 pre-loaded registered pharmaceutical formulations with generic chemical salts and manufacturer details.",
      },
      {
        question: "Can it run offline during internet outages?",
        answer:
          "Yes. The local dispensary station runs 100% offline, allowing fast counter billing with zero downtime.",
      },
    ],
    whatsappNumber: "+15550192834",
    whatsappPreFill:
      "Hi, I would like to schedule a demonstration of Pharmacy ERP for our medical store.",
  },

  "industrial-erp": {
    id: "industrial-erp",
    slug: "industrial-erp",
    name: "Industrial ERP",
    targetAudience:
      "Manufacturing plant owners, operations heads, and production supervisors",
    heroHeadline:
      "Bring Greater Visibility to Your Manufacturing and Shop Floor Operations.",
    heroSubhead:
      "Connect engineering multi-level Bill of Materials (BOM), shop floor traveler job cards, scrap variance tracking, and actual batch unit cost accounting into one centralized platform.",
    primaryCta: "Discuss Industrial Specs",
    benefits: [
      "Multi-level hierarchical BOMs with scrap tolerance percentages",
      "Shop floor traveler job cards with stage-by-stage barcode tracking",
      "Material Requirements Planning (MRP) forecasting raw material needs",
      "Actual batch cost accounting: Direct Material + Labor + Machine Overhead",
      "Work-in-Progress (WIP) tracking across all factory work centers",
    ],
    productBadge: "Plant Operations ERP",
    color: "text-amber-500",
    simulatorType: "industrial",
    problemSection: {
      title: "Costly Disconnects on the Factory Floor",
      desc: "Manual paper job sheets create bottlenecks in production:",
      problems: [
        {
          problem: "Production Halts Due to Missing Raw Materials",
          impact:
            "Lines sit idle because a single sub-component was not ordered in time, causing delivery penalties.",
        },
        {
          problem: "Unmonitored Scrap & Shop Floor Wastage",
          impact:
            "Differences between standard BOM consumption and actual usage go undetected, leaking raw materials.",
        },
        {
          problem: "Unknown True Cost per Manufactured Unit",
          impact:
            "Pricing finished products on rough estimates rather than actual material, machine hours, and labor.",
        },
      ],
    },
    solutionSection: {
      title: "From Raw Material Stores to Finished Goods Warehouse",
      desc: "Industrial ERP gives plant managers real-time execution control:",
      features: [
        {
          title: "Multi-Level BOM Engineering",
          desc: "Define hierarchical sub-assemblies, machine cycle times, and scrap tolerances per product line.",
        },
        {
          title: "Barcode Job Card Routing",
          desc: "Operators scan barcodes as batches complete Cutting, Machining, Assembly, and Quality Clearance.",
        },
        {
          title: "Scrap & Wastage Variance Tracking",
          desc: "Compare theoretical BOM requirements against actual material issued, identifying excessive scrap.",
        },
        {
          title: "Accurate Batch Cost Roll-Up",
          desc: "Calculate exact cost per unit incorporating materials, operator hours, and machine electricity.",
        },
      ],
    },
    objectionFaqs: [
      {
        question:
          "Can our factory operators use barcode scanners to update work orders?",
        answer:
          "Yes. Job cards are printed with traveler barcodes. Operators simply scan to start and finish operations on touchscreen kiosks.",
      },
      {
        question: "Can Industrial ERP be hosted on an internal factory server?",
        answer:
          "Yes. We support local on-premise industrial servers operating within your plant LAN with redundant off-site backups.",
      },
    ],
    whatsappNumber: "+15550192834",
    whatsappPreFill:
      "Hello, I am interested in discussing Industrial ERP for our manufacturing plant.",
  },

  "custom-enterprise-software": {
    id: "custom-enterprise-software",
    slug: "custom-enterprise-software",
    name: "Custom Software Engineering",
    targetAudience:
      "Business founders, CTOs, enterprise operations leaders, and corporate directors",
    heroHeadline:
      "Have a Complex Business Workflow? Let's Engineer the Right Software.",
    heroSubhead:
      "XB Cloud Tech designs and develops bespoke business applications, enterprise ERP platforms, and connected digital workflows tailored to your exact operational requirements with full source code ownership.",
    primaryCta: "Discuss Your Project",
    benefits: [
      "100% intellectual property & source code ownership upon delivery",
      "Zero per-seat recurring user license fees: scale your workforce freely",
      "Private on-premise or dedicated private cloud deployment (AWS/GCP/Linux)",
      "Domain-driven architecture tailored to your unique business logic",
      "Bi-weekly agile sprint demos with transparent technical delivery",
    ],
    productBadge: "Bespoke Engineering",
    color: "text-primary",
    simulatorType: "custom",
    problemSection: {
      title: "Why Off-the-Shelf Software Limits Growing Enterprises",
      desc: "Pre-packaged SaaS forces your business to adapt to someone else's constraints:",
      problems: [
        {
          problem: "Rigid Workflows Forcing Manual Workarounds",
          impact:
            "Staff spend hours managing external spreadsheets because off-the-shelf software cannot handle unique company rules.",
        },
        {
          problem: "Exponentially Growing Per-User Subscription Bills",
          impact:
            "SaaS costs skyrocket as team headcounts expand, while operational data remains locked in proprietary silos.",
        },
        {
          problem: "Data Privacy & Compliance Restrictions",
          impact:
            "Many enterprises cannot legally host sensitive financial or customer data on shared third-party public clouds.",
        },
      ],
    },
    solutionSection: {
      title: "Custom Software Built for Your Competitive Advantage",
      desc: "We build enterprise systems that fit your organizational reality:",
      features: [
        {
          title: "Domain-Driven System Design",
          desc: "We map your actual departmental handoffs, transaction rules, and approval hierarchies into custom code.",
        },
        {
          title: "Double-Entry Financial Ledgers",
          desc: "Audit-ready internal accounting, automated journal entries, and custom profit-and-loss reports.",
        },
        {
          title: "Private Enterprise Hosting",
          desc: "Deploy on your private servers with containerized Docker architecture, encrypted backups, and high availability.",
        },
        {
          title: "Integration with Hardware & APIs",
          desc: "Direct integration with thermal printers, barcode scanners, payment gateways, and banking APIs.",
        },
      ],
    },
    objectionFaqs: [
      {
        question: "Who owns the source code upon completion?",
        answer:
          "You own 100% of the intellectual property, source code repositories, database schemas, and documentation with zero licensing claims.",
      },
      {
        question: "How do you scope timelines and development costs?",
        answer:
          "We conduct an architectural discovery workshop to define technical specifications, providing a detailed proposal with fixed milestone deliverables.",
      },
      {
        question: "What post-launch warranty and support is provided?",
        answer:
          "Every custom development project includes a 60-day stabilization warranty covering bug fixes and performance tuning, followed by optional SLA maintenance.",
      },
    ],
    whatsappNumber: "+15550192834",
    whatsappPreFill:
      "Hi, I have a custom enterprise software project and would like to schedule an engineering scoping call.",
  },
}
