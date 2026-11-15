export interface ServiceCapability {
  title: string
  desc: string
  details: string[]
}

export interface ServiceUseCase {
  title: string
  clientContext: string
  solution: string
  impact: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceData {
  id: string
  slug: string
  title: string
  category: string
  tagline: string
  heroHeadline: string
  heroSubhead: string
  targetAudience: string[]
  challenges: {
    challenge: string
    consequence: string
  }[]
  deliverables: string[]
  capabilities: ServiceCapability[]
  useCases: ServiceUseCase[]
  deliveryProcess: {
    step: string
    title: string
    duration: string
    description: string
  }[]
  technologies: string[]
  faqs: ServiceFAQ[]
  relatedProducts: string[]
  stats: {
    value: string
    label: string
  }[]
}

export const SERVICES_DATA: Record<string, ServiceData> = {
  "custom-software-development": {
    id: "custom-software",
    slug: "custom-software-development",
    title: "Custom Software Engineering",
    category: "Bespoke Applications",
    tagline:
      "Tailored digital platforms built from scratch around your exact business logic.",
    heroHeadline:
      "Have a Complex Business Workflow? Let's Engineer the Right Software.",
    heroSubhead:
      "XB Cloud Tech designs and develops bespoke business applications, enterprise portals, and connected operational systems engineered around your actual organizational workflows with zero vendor lock-in.",
    targetAudience: [
      "Enterprises with proprietary business logic that off-the-shelf software cannot satisfy",
      "Fast-growing companies outgrowing disconnected Excel sheets and disparate legacy tools",
      "Organizations needing secure, private on-premise or dedicated private cloud deployments",
      "Companies seeking unified software connecting web, desktop, and mobile operational teams",
    ],
    challenges: [
      {
        challenge: "Off-the-Shelf Software Rigidity",
        consequence:
          "Pre-packaged SaaS forces your organization to change its operational processes to fit arbitrary vendor constraints, limiting competitive advantages.",
      },
      {
        challenge: "Fragmented Data Silos & Disconnected Tools",
        consequence:
          "Departments operate across 5+ disconnected tools, resulting in duplicated manual data entry, human error, and total absence of unified real-time reporting.",
      },
      {
        challenge: "Uncontrolled Per-User Subscription Inflation",
        consequence:
          "SaaS subscription fees grow exponentially as your workforce scales, transferring core operational knowledge and data control to external third parties.",
      },
    ],
    deliverables: [
      "Custom Full-Stack Architecture (Frontend, Microservices / Monolith, Resilient DB)",
      "Role-Based Access Control (RBAC) with granular departmental permission matrices",
      "Real-Time Business Dashboards & Automated Transactional Report Generators",
      "Complete Source Code Ownership, Architecture Blueprint, and Technical Documentation",
    ],
    capabilities: [
      {
        title: "Domain-Driven System Architecture",
        desc: "We analyze your exact domain language, transaction lifecycles, and operational constraints before writing production code.",
        details: [
          "Requirements specification & operational entity-relationship modeling",
          "Decoupled service architecture for high transactional concurrency",
          "Automated audit trails and immutable event logging",
        ],
      },
      {
        title: "High-Performance Web & Desktop Portals",
        desc: "Lightning-fast user interfaces engineered for speed, low-latency data entry, and keyboard accessibility.",
        details: [
          "React, TypeScript, and modern desktop runtimes (Tauri / Electron)",
          "Offline-first local caching for zero network-latency interruptions",
          "High-density transactional grids with virtualized scrolling",
        ],
      },
      {
        title: "Enterprise Relational Database Design",
        desc: "Robust schema architecture optimized for high-concurrency read/write operations and strict data consistency.",
        details: [
          "PostgreSQL & high-availability database cluster configurations",
          "Zero-data-loss backup strategies and point-in-time disaster recovery",
          "Automated database migrations and schema change governance",
        ],
      },
    ],
    useCases: [
      {
        title: "Automated Supply Chain & Multi-Warehouse Dispatch",
        clientContext:
          "Regional FMCG distributor managing 4 warehouses with manual paper dispatch manifests.",
        solution:
          "Engineered a centralized multi-warehouse dispatch portal with automated order routing and driver delivery tracking.",
        impact:
          "Reduced order fulfillment time by 48% and eliminated inventory count reconciliation discrepancies.",
      },
      {
        title: "Custom Legal & Contract Management Engine",
        clientContext:
          "Corporate legal consultancy managing thousands of active regulatory filings.",
        solution:
          "Built a customized document lifecycle platform with automated expiry alarms and role-based document access.",
        impact:
          "Zero missed compliance deadlines across 12 consecutive operational quarters.",
      },
    ],
    deliveryProcess: [
      {
        step: "01",
        title: "Operational Discovery & Technical Scope",
        duration: "Weeks 1–2",
        description:
          "Deep-dive workshops with stakeholders, mapping current workflows, identifying friction, and establishing measurable project outcomes.",
      },
      {
        step: "02",
        title: "System Architecture & UI/UX Design",
        duration: "Weeks 3–4",
        description:
          "Interactive wireframes, relational database schemas, API contracts, and security architecture specifications.",
      },
      {
        step: "03",
        title: "Agile Development & Automated QA",
        duration: "Weeks 5–10",
        description:
          "Bi-weekly sprint demos, automated unit and integration test coverage, and strict code review gates.",
      },
      {
        step: "04",
        title: "Staged Deployment & Hands-On Training",
        duration: "Weeks 11–12",
        description:
          "Data migration from legacy systems, staff training workshops, parallel run verification, and production go-live.",
      },
    ],
    technologies: [
      "TypeScript",
      "React",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS / GCP",
    ],
    faqs: [
      {
        question:
          "Who owns the intellectual property (IP) and source code of the custom software?",
        answer:
          "You do. Upon project completion and final milestone settlement, 100% of the source code, repository commits, documentation, and database schemas are transferred to your organization with full intellectual property rights.",
      },
      {
        question:
          "Can custom software be hosted on our private servers rather than public clouds?",
        answer:
          "Yes. We support on-premise physical servers, private bare-metal hosting, or dedicated private cloud accounts (AWS, Google Cloud, Azure). We configure containerized environments that operate completely within your network perimeter.",
      },
      {
        question:
          "How do you handle scope changes during the development process?",
        answer:
          "We operate using structured agile methodology with defined sprint backlogs. If operational requirements evolve during development, we review the impact on timelines and budgets collaboratively through formal change requests before implementing new features.",
      },
      {
        question: "What post-launch support is included after deployment?",
        answer:
          "Every custom software project includes a mandatory 60-day warranty period covering bug fixes, performance tuning, and operational stabilization, with optional ongoing SLA maintenance packages thereafter.",
      },
    ],
    relatedProducts: ["storex-erp", "industrial-erp", "qistmarket-erp"],
    stats: [
      { value: "100%", label: "IP & Code Ownership" },
      { value: "Zero", label: "Per-User License Fees" },
      { value: "Private", label: "On-Prem / Cloud Hosting" },
      { value: "Agile", label: "Bi-Weekly Sprint Demos" },
    ],
  },

  "enterprise-erp": {
    id: "enterprise-erp",
    slug: "enterprise-erp",
    title: "Enterprise ERP Development",
    category: "Enterprise Systems",
    tagline:
      "Multi-branch, multi-currency ERP platforms with modular accounting and governance.",
    heroHeadline:
      "Connect Departments and Operations Into One Structured Platform.",
    heroSubhead:
      "We architect enterprise resource planning systems that bring finance, inventory, human resources, supply chain, and procurement into an integrated, audit-ready operational core.",
    targetAudience: [
      "Mid-market to large enterprises seeking an alternative to rigid tier-1 legacy systems (SAP/Oracle)",
      "Multi-entity conglomerates requiring consolidated financial reporting and inter-company transactions",
      "Manufacturers and distributors needing tight integration between shop floor and balance sheet",
    ],
    challenges: [
      {
        challenge: "Prohibitive Customization Costs of Tier-1 ERPs",
        consequence:
          "Legacy ERP vendors charge millions for minor workflow adjustments and lock organizations into complex proprietary consultancy ecosystems.",
      },
      {
        challenge: "Delayed Executive Decision-Making",
        consequence:
          "Compiling financial and operational reports across multiple branches takes weeks, leaving leadership with stale retroactive data.",
      },
      {
        challenge: "Inadequate Role-Based Governance",
        consequence:
          "Uncontrolled access permissions create severe fraud vulnerability and make regulatory compliance audits painful.",
      },
    ],
    deliverables: [
      "Multi-Entity Chart of Accounts & General Ledger Engine",
      "Real-Time Multi-Location Inventory & Transit Reconciliation",
      "Automated Procurement, Vendor RFQs, and Three-Way PO Matching",
      "Granular Multi-Level Approval Hierarchies and Immutable Audit Logs",
    ],
    capabilities: [
      {
        title: "Modular Financial & Cost Accounting",
        desc: "Double-entry bookkeeping engine with automated journal entries, cost centers, and balance sheets.",
        details: [
          "Configurable multi-currency support with daily exchange rate sync",
          "Automated bank statement reconciliation and ledger matching",
          "Profit & Loss (P&L) statements generated per department, project, or branch",
        ],
      },
      {
        title: "Enterprise Supply Chain & Sourcing",
        desc: "Connect purchase requisitions directly to warehouse stock levels and vendor contracts.",
        details: [
          "Three-way matching: Purchase Order, Goods Receipt Note (GRN), and Vendor Invoice",
          "Vendor rate card comparisons and historical quality scoring",
          "Inter-company stock transfers and billing reconciliation",
        ],
      },
      {
        title: "Governance, Risk & Compliance (GRC)",
        desc: "Built-in controls ensuring strict adherence to corporate governance and external audit standards.",
        details: [
          "Separation of duties (SoD) enforcement across all financial approvals",
          "Time-stamped audit trails recording every record edit, approval, and void",
          "Automated financial year-end closing and tax audit reporting",
        ],
      },
    ],
    useCases: [
      {
        title: "Multi-Brand Automobile Dealership Network",
        clientContext:
          "12 regional showroom locations managing vehicle stock, service center parts, and customer financing.",
        solution:
          "Deployed a centralized ERP connecting parts inventory, service job cards, and customer financing ledgers.",
        impact:
          "Unified vehicle parts turnover visibility, reducing slow-moving inventory by 32%.",
      },
    ],
    deliveryProcess: [
      {
        step: "01",
        title: "Financial & Operational Charting",
        duration: "Weeks 1–3",
        description:
          "Mapping Chart of Accounts, departmental cost centers, and approval hierarchies.",
      },
      {
        step: "02",
        title: "Core Ledger & Inventory Prototype",
        duration: "Weeks 4–8",
        description:
          "Deploying double-entry accounting engine and inventory movement verification.",
      },
      {
        step: "03",
        title: "Departmental Module Staging",
        duration: "Weeks 9–14",
        description:
          "Integrating Procurement, HR/Payroll, and Sales workflows with core ledgers.",
      },
      {
        step: "04",
        title: "Parallel Run & Full Go-Live",
        duration: "Weeks 15–18",
        description:
          "Running parallel with legacy system for one monthly financial closing cycle before complete cutover.",
      },
    ],
    technologies: [
      "PostgreSQL",
      "Go / Node.js",
      "React",
      "Kafka / RabbitMQ",
      "Docker",
      "Linux Enterprise",
    ],
    faqs: [
      {
        question:
          "How does your custom ERP compare in cost to SAP or Microsoft Dynamics?",
        answer:
          "Custom ERP development from XB Cloud Tech typically requires an upfront development investment comparable to 1–2 years of tier-1 licensing fees, but carries zero ongoing user license penalties thereafter, delivering drastic long-term savings.",
      },
      {
        question:
          "Can existing financial history be migrated into the new ERP?",
        answer:
          "Yes. We migrate historical Chart of Accounts, trial balances, open vendor payables, and customer balances. Detailed historical journals can either be imported or archived in a searchable legacy warehouse.",
      },
    ],
    relatedProducts: ["industrial-erp", "storex-erp", "qistmarket-erp"],
    stats: [
      { value: "Zero", label: "Recurring User Seat Fees" },
      { value: "Double-Entry", label: "Audit-Grade Accounting" },
      { value: "Multi-Branch", label: "Consolidated Ledgers" },
      { value: "100%", label: "Customizable Workflow" },
    ],
  },

  "saas-development": {
    id: "saas-development",
    slug: "saas-development",
    title: "SaaS Product Development",
    category: "Cloud Software",
    tagline:
      "Scalable multi-tenant web platforms featuring secure authentication and billing.",
    heroHeadline: "Turn Your Domain Knowledge Into a Scalable SaaS Platform.",
    heroSubhead:
      "We design, build, and scale subscription software products engineered for high tenant isolation, automated onboarding, usage billing, and seamless multi-device responsiveness.",
    targetAudience: [
      "Industry experts and software founders launching new vertical SaaS products",
      "Traditional enterprise software firms modernizing legacy desktop products to cloud SaaS",
      "Corporates packaging internal software tools into commercial commercial-grade products",
    ],
    challenges: [
      {
        challenge: "Tenant Data Leaks & Weak Isolation",
        consequence:
          "Improper multi-tenant database design risks catastrophic data bleed between customer accounts, causing severe regulatory and reputation failure.",
      },
      {
        challenge: "Complex Subscription & Metered Billing",
        consequence:
          "Struggling to manage prorations, tiered usage meters, failed credit card retries, and customer tier upgrades leads to lost revenue.",
      },
      {
        challenge: "Slow User Onboarding & High Churn",
        consequence:
          "Overly complex initial setup workflows cause newly registered trials to drop off before experiencing core product value.",
      },
    ],
    deliverables: [
      "Bulletproof Multi-Tenant Architecture (Row-Level Security or Schema-per-Tenant)",
      "Automated Stripe / Regional Payment Gateway Integration with Subscription Tiers",
      "Self-Serve Customer Onboarding, Team Invitations, and Role Management",
      "Executive SaaS Health Dashboard (MRR, Churn, Active Users, API Latency)",
    ],
    capabilities: [
      {
        title: "Multi-Tenant Cloud Architecture",
        desc: "Proven multi-tenant partitioning strategies guaranteeing zero cross-tenant data access.",
        details: [
          "PostgreSQL Row-Level Security (RLS) and isolated tenant connection pools",
          "Subdomain or custom domain routing (tenant.yourdomain.com)",
          "Data export and tenant backup on demand",
        ],
      },
      {
        title: "Automated Billing & Tier Enforcement",
        desc: "Seamless subscription lifecycles, automated invoice generation, and feature gating.",
        details: [
          "Monthly, yearly, and metered usage billing with automated tax calculation",
          "Automated dunning management for failed payments and grace period handling",
          "Feature entitlement flags: control access to premium modules dynamically",
        ],
      },
      {
        title: "Developer APIs & Webhook Infrastructure",
        desc: "Enable your SaaS customers to integrate your product into their own external tools.",
        details: [
          "RESTful and GraphQL public API design with API key rate limiting",
          "Outbound webhook dispatch engine with automated retry and signature verification",
          "Interactive Swagger / OpenAPI developer documentation",
        ],
      },
    ],
    useCases: [
      {
        title: "B2B Medical Practice Scheduling SaaS",
        clientContext:
          "Medical group converting internal clinic appointment system into commercial SaaS.",
        solution:
          "Engineered multi-tenant clinic management SaaS with SMS appointment reminders and online booking.",
        impact:
          "Onboarded 85 active clinics across the first 6 months of public release.",
      },
    ],
    deliveryProcess: [
      {
        step: "01",
        title: "MVP Scoping & Monetization Model",
        duration: "Weeks 1–2",
        description:
          "Defining core value proposition, subscription pricing tiers, and minimal viable feature set.",
      },
      {
        step: "02",
        title: "Multi-Tenant Scaffold & Auth",
        duration: "Weeks 3–5",
        description:
          "Tenant isolation, authentication, invitation flows, and subscription billing foundation.",
      },
      {
        step: "03",
        title: "Core Domain Modules Build",
        duration: "Weeks 6–10",
        description:
          "Building primary workflow features, interactive dashboards, and user permissions.",
      },
      {
        step: "04",
        title: "Beta Launch & Load Testing",
        duration: "Weeks 11–12",
        description:
          "Stress testing database queries, beta user testing, and public marketing launch.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js / Go",
      "PostgreSQL",
      "Stripe API",
      "AWS / Cloudflare",
    ],
    faqs: [
      {
        question:
          "How do you ensure one tenant cannot see another tenant's data?",
        answer:
          "We enforce strict isolation at the database level using PostgreSQL Row-Level Security (RLS) and cryptographic tenant ID verification in every query middleware. Data access without an authenticated tenant token is architecturally impossible.",
      },
    ],
    relatedProducts: ["cambridgedesk", "storex-erp", "pharmacy-erp"],
    stats: [
      { value: "100%", label: "Multi-Tenant Isolation" },
      { value: "Automated", label: "Stripe & Subscriptions" },
      { value: "<200ms", label: "Average API Response" },
      { value: "Scale-Ready", label: "Cloud Native Engine" },
    ],
  },

  "business-process-automation": {
    id: "automation",
    slug: "business-process-automation",
    title: "Business Process Automation",
    category: "Workflow Automation",
    tagline:
      "Eliminate repetitive manual bottlenecks with automated pipelines and notifications.",
    heroHeadline: "Stop Burning Engineering & Staff Hours on Repetitive Work.",
    heroSubhead:
      "We design automated digital workflows, asynchronous task queues, and data synchronization bridges that eliminate manual copy-pasting, reduce data entry errors, and accelerate operational turnaround.",
    targetAudience: [
      "Companies drowning in manual spreadsheet updates between disparate software tools",
      "Customer operations teams handling repetitive order verification or document processing",
      "Financial departments spending days reconciling vendor invoices against bank statements",
    ],
    challenges: [
      {
        challenge: "Human Bottlenecks in Repetitive Data Entry",
        consequence:
          "Valuable knowledge workers spend 30%–40% of their working hours copying data between portals, introducing high error rates and slowing fulfillment.",
      },
      {
        challenge: "Lack of Asynchronous Failure Handling",
        consequence:
          "Fragile Zapier or manual webhook scripts fail silently when downstream services go down, resulting in lost customer orders.",
      },
    ],
    deliverables: [
      "Resilient Message Queue Architecture (BullMQ / RabbitMQ / Temporal)",
      "Automated Document Processing, PDF Parsing, and OCR Ingestion",
      "Two-Way System Synchronization with Automated Conflict Resolution",
      "Operational Health Dashboards with Instant Failure Notification Alarms",
    ],
    capabilities: [
      {
        title: "Event-Driven Asynchronous Pipelines",
        desc: "Decouple mission-critical workflows with durable queues that never lose an operational event.",
        details: [
          "Automatic retry with exponential backoff on third-party API downtime",
          "Dead-letter queue (DLQ) inspection and manual replay capabilities",
          "Real-time processing handling thousands of events per minute",
        ],
      },
      {
        title: "Intelligent Document Extraction",
        desc: "Convert incoming PDF invoices, POs, and paper manifests into structured database records.",
        details: [
          "Automated OCR extraction with confidence score thresholds",
          "Human-in-the-loop review queues for low-confidence documents",
          "Direct integration into financial ledgers and ERP systems",
        ],
      },
    ],
    useCases: [
      {
        title: "Automated Bank Scroll & Challan Reconciliation",
        clientContext:
          "Educational trust collecting fees from 8,000 students across 3 commercial banks.",
        solution:
          "Engineered automated parser reading daily bank CSV/TXT scrolls and updating student ledgers.",
        impact:
          "Reduced monthly reconciliation time from 5 days to 8 minutes with 100% mathematical accuracy.",
      },
    ],
    deliveryProcess: [
      {
        step: "01",
        title: "Process Audit & Bottleneck Mapping",
        duration: "Week 1",
        description:
          "Shadowing operational teams to identify repetitive tasks, handoffs, and error patterns.",
      },
      {
        step: "02",
        title: "Pipeline Prototyping",
        duration: "Weeks 2–3",
        description:
          "Building event-driven queue with failure recovery and test data ingestion.",
      },
      {
        step: "03",
        title: "Production Integration & Monitoring",
        duration: "Weeks 4–5",
        description:
          "Live connection to production endpoints, Slack/WhatsApp alert integration, and go-live.",
      },
    ],
    technologies: [
      "Node.js",
      "Python",
      "BullMQ / Redis",
      "RabbitMQ",
      "PostgreSQL",
      "Docker",
    ],
    faqs: [
      {
        question:
          "What happens if a third-party API goes down during an automated workflow?",
        answer:
          "Our pipelines use persistent message queues with exponential backoff retries. If an external service is unavailable, the message waits safely in the queue and retries once service is restored without losing any customer transaction data.",
      },
    ],
    relatedProducts: ["purchoon-erp", "cambridgedesk", "storex-erp"],
    stats: [
      { value: "90%", label: "Manual Effort Reduction" },
      { value: "100%", label: "Queue Durability" },
      { value: "Zero", label: "Lost Transaction Events" },
      { value: "<1s", label: "Trigger-to-Action Latency" },
    ],
  },

  "ai-integration": {
    id: "ai-integration",
    slug: "ai-integration",
    title: "AI Integration & Practical Automation",
    category: "Intelligent Systems",
    tagline:
      "Apply AI to suitable business processes with clear human oversight.",
    heroHeadline:
      "Practical Artificial Intelligence. Engineered for Real Business Processes.",
    heroSubhead:
      "We integrate modern LLMs, predictive algorithms, and computer vision into existing enterprise software where they deliver concrete ROI — with rigorous human oversight and zero hallucination risk.",
    targetAudience: [
      "Companies wanting to automate customer inquiry triage, classification, and drafting",
      "Enterprises needing private document intelligence across thousands of internal contracts and policies",
      "Operational teams seeking demand forecasting and anomaly detection in transaction feeds",
    ],
    challenges: [
      {
        challenge: "AI Hallucinations in Critical Business Workflows",
        consequence:
          "Deploying raw consumer chatbots without strict prompt grounding or validation leads to inaccurate customer advice and financial liability.",
      },
      {
        challenge: "Data Privacy & Proprietary Leakage",
        consequence:
          "Sending sensitive customer or financial data to public consumer AI APIs violates data privacy regulations and risks proprietary leaks.",
      },
    ],
    deliverables: [
      "Private Retrieval-Augmented Generation (RAG) Engines with Vector Databases",
      "Automated Customer Inquiry Routing, Classification, and Draft Generation",
      "Strict Human-in-the-Loop Approval Workflows for All Outbound Actions",
      "Dedicated Enterprise Privacy Gateways (Self-Hosted LLMs or Azure OpenAI Private Tenants)",
    ],
    capabilities: [
      {
        title: "Enterprise Knowledge Base RAG",
        desc: "Empower staff to search and summarize vast libraries of technical manuals, contracts, and regulations.",
        details: [
          "Chunking and embedding pipelines using pgvector / Qdrant",
          "Source citation enforcement: every AI answer links directly to verified source documents",
          "Role-based access filtering: users only retrieve answers from documents they are authorized to view",
        ],
      },
      {
        title: "Operational Anomaly & Fraud Detection",
        desc: "Detect suspicious transaction patterns, inventory count anomalies, and unauthorized discount behavior.",
        details: [
          "Statistical outlier detection on live cashier and warehouse feeds",
          "Automated flagging of irregular inventory write-offs or split billing",
          "Configurable risk scoring thresholds with real-time manager alerts",
        ],
      },
    ],
    useCases: [
      {
        title: "Automated Pharmaceutical Chemical Salt Assistant",
        clientContext:
          "Retail pharmacy network needing instant generic medicine alternative matching.",
        solution:
          "Integrated medical entity recognition and salt matching engine into the POS counter.",
        impact:
          "Allowed pharmacy dispensers to identify bio-equivalent alternatives in under 200ms.",
      },
    ],
    deliveryProcess: [
      {
        step: "01",
        title: "Feasibility & ROI Assessment",
        duration: "Week 1",
        description:
          "Evaluating whether AI is the correct technical solution or if deterministic code is better suited.",
      },
      {
        step: "02",
        title: "Private Data Ingestion & Grounding",
        duration: "Weeks 2–3",
        description:
          "Vectorizing documents, establishing evaluation benchmarks, and tuning system prompts.",
      },
      {
        step: "03",
        title: "Human-in-the-Loop Integration",
        duration: "Weeks 4–6",
        description:
          "Embedding AI assistance into existing software with review and override controls.",
      },
    ],
    technologies: [
      "Python",
      "FastAPI",
      "pgvector",
      "LangChain / LlamaIndex",
      "Claude / OpenAI Private",
      "Docker",
    ],
    faqs: [
      {
        question:
          "Will our proprietary business data be used to train public AI models?",
        answer:
          "Never. We only use enterprise zero-data-retention APIs or self-hosted open-weights models (such as Llama 3) running in your private infrastructure. Your data remains strictly within your enterprise security boundary.",
      },
    ],
    relatedProducts: ["pharmacy-erp", "storex-erp", "cambridgedesk"],
    stats: [
      { value: "Zero", label: "Data Retention on Public APIs" },
      { value: "100%", label: "Source-Cited Answers" },
      { value: "Human-led", label: "Approval Controls" },
      { value: "Practical", label: "Proven ROI Focus" },
    ],
  },

  "api-system-integration": {
    id: "api-integration",
    slug: "api-system-integration",
    title: "API & System Integration",
    category: "Integration Architecture",
    tagline:
      "Connect business applications and services through documented integration workflows.",
    heroHeadline: "Break Down Silos. Unify Your Disconnected Software Tools.",
    heroSubhead:
      "We build robust, secure API bridges and middleware that connect your payment gateways, CRM systems, e-commerce storefronts, and legacy ERP databases into one real-time data ecosystem.",
    targetAudience: [
      "Companies integrating external payment gateways, courier delivery APIs, and bank feeds",
      "Enterprises connecting third-party SaaS tools to proprietary on-premise databases",
      "Businesses replacing fragile point-to-point scripts with a managed enterprise integration layer",
    ],
    challenges: [
      {
        challenge: "Brittle Point-to-Point Script Spaghetti",
        consequence:
          "Ad-hoc integration scripts fail without alerts when third-party APIs change, corrupting database records and requiring emergency firefighting.",
      },
    ],
    deliverables: [
      "Secure REST / GraphQL Middleware with Schema Validation",
      "Bank & Payment Gateway Integrations (Stripe, JazzCash, EasyPaisa, PayPal, Raast)",
      "Automated Courier & Shipping API Dispatch (TCS, Leopard, DHL, FedEx)",
      "Comprehensive OpenAPI / Swagger Documentation and Sandbox Test Suites",
    ],
    capabilities: [
      {
        title: "Payment & Financial Gateway Bridges",
        desc: "Secure transaction processing with cryptographic signature verification and webhook idempotency.",
        details: [
          "Idempotency keys preventing accidental double-charges",
          "Automated ledger updates upon successful webhook settlement",
        ],
      },
      {
        title: "Logistics & Fleet Tracking Webhooks",
        desc: "Synchronize orders with external shipping carriers in real time.",
        details: [
          "Automated booking, consignment note (CN) generation, and barcode printing",
          "Live shipment tracking webhooks updating order status automatically",
        ],
      },
    ],
    useCases: [
      {
        title: "Courier & Cash-on-Delivery (COD) Reconciliation",
        clientContext:
          "Retail brand managing 15,000 monthly shipments across 3 courier partners.",
        solution:
          "Engineered unified shipping gateway that books orders and reconciles COD payments against bank deposits.",
        impact:
          "Eliminated uncollected courier COD balances, recovering Rs. 1.8M in untracked disbursements.",
      },
    ],
    deliveryProcess: [
      {
        step: "01",
        title: "Endpoint & Security Audit",
        duration: "Week 1",
        description:
          "Reviewing third-party API documentation, authentication keys, and rate limits.",
      },
      {
        step: "02",
        title: "Middleware & Queue Engineering",
        duration: "Weeks 2–3",
        description:
          "Building idempotent webhook handlers and schema-validated transformation layers.",
      },
      {
        step: "03",
        title: "Sandbox Testing & Production Release",
        duration: "Weeks 4–5",
        description:
          "Simulating failure modes, load testing throughput, and establishing monitor alerts.",
      },
    ],
    technologies: [
      "Node.js / Express",
      "Go",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Postman / Swagger",
    ],
    faqs: [
      {
        question:
          "How do you prevent duplicate charges if a payment gateway sends a webhook twice?",
        answer:
          "All our webhook ingestion handlers enforce cryptographic idempotency keys. If the same transaction ID is received multiple times, the system recognizes the duplicate and acknowledges the request without re-executing the payment logic.",
      },
    ],
    relatedProducts: ["storex-erp", "purchoon-erp", "qistmarket-erp"],
    stats: [
      { value: "100%", label: "Idempotent Webhooks" },
      { value: "Multi-API", label: "Unified Middleware" },
      { value: "Real-Time", label: "Bi-Directional Sync" },
      { value: "Secure", label: "TLS / HMAC Authentication" },
    ],
  },

  "legacy-modernization": {
    id: "legacy-modernization",
    slug: "legacy-modernization",
    title: "Legacy System Modernization",
    category: "System Migration",
    tagline:
      "Assess existing systems and execute a controlled, zero-downtime upgrade or migration.",
    heroHeadline:
      "Upgrade Legacy Infrastructure Without Halting Daily Operations.",
    heroSubhead:
      "We modernize fragile desktop applications, outdated FoxPro / Access databases, and monolithic systems into fast, secure web and cloud architectures with zero operational data loss.",
    targetAudience: [
      "Businesses running critical operations on legacy software (Visual Basic, FoxPro, Access, Delphi)",
      "Companies whose original software developer is no longer available to maintain the system",
      "Organizations facing hardware incompatibility with modern operating systems (Windows 11)",
    ],
    challenges: [
      {
        challenge: "Fragile Databases Vulnerable to Complete Data Loss",
        consequence:
          "Legacy desktop databases corrupt easily during sudden power cuts, lacking modern ACID transaction guarantees or automated cloud replication.",
      },
      {
        challenge: "Inability to Access Data Remotely or on Mobile",
        consequence:
          "Old software is trapped on a single physical machine in an office, forcing management to be physically present to review operational reports.",
      },
    ],
    deliverables: [
      "Thorough Reverse Engineering & Database Schema Extraction",
      "Staged Strangler-Fig Migration Plan ensuring continuous daily business operations",
      "Complete Data Sanitization, Transformation, and Migration into Modern PostgreSQL",
      "Modern Web/Desktop User Interface preserving familiar operator keyboard shortcuts",
    ],
    capabilities: [
      {
        title: "Reverse Engineering & Data Extraction",
        desc: "Extract locked legacy business rules and historical data records safely.",
        details: [
          "Parsing legacy DBF, MDB, and binary data tables without data loss",
          "Documenting implicit operational logic that was never formally written down",
        ],
      },
      {
        title: "Zero-Downtime Strangler Migration",
        desc: "Migrate functionality incrementally rather than attempting risky 'big-bang' cutovers.",
        details: [
          "Run legacy and modern systems in parallel with real-time bi-directional data sync",
          "Switch users module-by-module (e.g. Inventory first, then Sales, then Accounting)",
        ],
      },
    ],
    useCases: [
      {
        title: "Visual FoxPro to Web ERP Migration",
        clientContext:
          "Wholesale grain merchant using a 1998 Visual FoxPro system on an aging Windows 7 PC.",
        solution:
          "Extracted 20 years of customer khata ledgers, rebuilt system in React + PostgreSQL, and enabled multi-branch access.",
        impact:
          "Zero minutes of operational downtime during migration; enabled remote management from smartphone.",
      },
    ],
    deliveryProcess: [
      {
        step: "01",
        title: "Legacy Code & Data Audit",
        duration: "Weeks 1–2",
        description:
          "Inspecting data integrity, identifying schema anomalies, and extracting hidden business calculations.",
      },
      {
        step: "02",
        title: "Schema Re-Engineering & Migration Scripts",
        duration: "Weeks 3–4",
        description:
          "Transforming legacy flat files into normalized relational PostgreSQL schemas with integrity checks.",
      },
      {
        step: "03",
        title: "Modern UI Build & Familiar Shortcuts",
        duration: "Weeks 5–8",
        description:
          "Replicating familiar keyboard-driven counter workflows in a modern high-speed interface.",
      },
      {
        step: "04",
        title: "Parallel Run & Final Cutover",
        duration: "Weeks 9–10",
        description:
          "Validating closing ledger balances across both systems before formally retiring legacy hardware.",
      },
    ],
    technologies: [
      "PostgreSQL",
      "Python Data Scripts",
      "React",
      "TypeScript",
      "Node.js",
      "Docker",
    ],
    faqs: [
      {
        question:
          "Can our counter operators keep using the fast keyboard shortcuts they have used for years?",
        answer:
          "Yes! We specifically preserve high-velocity keyboard shortcuts (Enter to tab, F-keys for billing, hotkeys for item selection) so your experienced counter staff can work just as fast without having to learn a slow mouse-driven interface.",
      },
    ],
    relatedProducts: ["storex-erp", "purchoon-erp", "industrial-erp"],
    stats: [
      { value: "Zero", label: "Data Loss Guarantee" },
      { value: "Parallel", label: "Zero-Downtime Migration" },
      { value: "Modern", label: "PostgreSQL ACID Core" },
      { value: "Preserved", label: "Keyboard Speed Hotkeys" },
    ],
  },
}
