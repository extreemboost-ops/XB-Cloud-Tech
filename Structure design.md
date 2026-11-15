import pypandoc, os, textwrap

md = r"""# XB Cloud Tech — Complete Website & Product Landing Page Development Blueprint

**Project:** XB Cloud Tech Corporate Website Upgrade  
**Domain:** https://xbcloudtech.com/  
**Project type:** Upgrade existing React + Vite + TypeScript website  
**Business identity:** Hybrid Enterprise Software Company + SaaS / ERP Product Provider  
**Visual direction:** Premium light corporate  
**Primary objective:** Complete every public-facing website page so the company and its software products look credible, commercially ready, differentiated, and conversion-focused.  
**Current scope:** Website pages, content, UI/UX, product storytelling, landing pages, navigation, responsive behavior, and front-end interactions. CRM/backend lead automation is deliberately outside the current delivery scope unless an existing integration is already available.

---

# 1. Project Vision

XB Cloud Tech must present itself as a serious software and technology company that has two complementary business lines:

1. **Software Products:** Ready-to-deploy ERP, POS, school management, and industry-specific business platforms.
2. **Enterprise Software Engineering:** Custom software, enterprise applications, integrations, automation, and digital transformation projects.

The website must not look like a generic local software-house template. It should communicate product maturity, operational understanding, engineering capability, and a clear route to a product demo or project consultation.

## Core brand positioning

**Brand:** XB Cloud Tech  
**Positioning line:** Enterprise Software. Engineered for Business.  
**Primary headline direction:** Technology That Runs Businesses.  
**Supporting statement:**

> XB Cloud Tech builds business software, industry-specific ERP platforms, and custom digital systems that help organizations manage operations, connect workflows, and grow with confidence.

Use factual, plain-English business language. Avoid exaggerated claims such as “world’s leading,” “#1,” “trusted by thousands,” “100% secure,” or guaranteed ROI unless independently substantiated.

## Business-line hierarchy

### Business Line A — Software Products
- Storex ERP
- Purchoon ERP
- CambridgeDesk
- Pharmacy ERP
- Industrial ERP
- Qistmarket ERP

### Business Line B — Enterprise Software Engineering
- Custom Software Development
- Enterprise ERP Development
- SaaS Application Development
- Web Application Development
- Business Process Automation
- AI Integration
- API & System Integration
- Legacy System Modernization
- Business Intelligence & Reporting
- Software Maintenance & Support

### Business Line C — Industry Solutions
- Retail & Wholesale
- Education
- Pharmacy & Healthcare
- Manufacturing & Industrial Operations
- Distribution & Supply Chain
- Enterprise Business Operations

Do not make the three business lines compete for attention. The homepage should introduce all three, while the Products section and dedicated product pages should receive strong visual prominence.

---

# 2. Scope and Non-Goals

## Included in this development project

- Complete audit of existing public pages and routes.
- Homepage upgrade.
- Company pages: About, Services, Industries, Portfolio / Case Studies, Blog / Insights, Contact.
- Product directory and six dedicated product landing pages.
- Dedicated enterprise service pages.
- Dedicated industry solution pages.
- Google Ads and Meta Ads campaign landing-page templates.
- Page-specific content and conversion strategy.
- Responsive desktop, tablet, and mobile layouts.
- Functional navigation, internal links, accordions, tabs, filters, forms UI, and CTA interactions.
- SEO-ready page content and metadata.
- Reusable components and consistent design system.
- Real product screenshots and approved brand assets.
- Page-level QA and a final content/route inventory.

## Not included for now

Do not expand the project into a new CRM, sales dashboard, customer portal, authentication system, billing system, or backend microservice.

Do not rebuild the website framework without a documented technical reason.

Do not invent client logos, testimonials, certifications, metrics, case-study results, office locations, prices, product features, or integration partnerships.

Do not simulate a successful real lead submission if no real submission endpoint exists. A front-end form can validate and display a clear “integration pending” state in development, but production success must only be shown after a real endpoint confirms receipt.

---

# 3. Mandatory Existing-Project Preservation Rules

The current project is an existing React + Vite + TypeScript application. Its current corporate design system and working pages must be preserved and improved.

Before implementation:

1. Inspect the repository, routes, components, assets, package scripts, and current deployment configuration.
2. Read the existing phase audit and identify what has already been implemented.
3. Reuse working components and content where they are accurate.
4. Do not recreate completed pages from scratch.
5. Do not reintroduce the removed multivendor e-commerce backend or admin panel.
6. Do not change the framework, router, hosting, DNS, or production configuration without a written recommendation and approval.
7. Preserve current route behavior until routing/SEO migration has been separately assessed.
8. Use Git checkpoints before each major phase.
9. Run typecheck, build, and relevant tests after each phase.
10. Update the phase report with files changed, tests run, results, and unresolved items.

The existing audit reports these current pages/features: Home, About, Services, Pricing, Portfolio, Blog, Contact, navigation shell, responsive menu, pricing toggle, currency toggle, portfolio filters, newsletter UI, and contact form UI. Verify these against the actual repository before treating them as complete.

---

# 4. Brand and Visual Design System

## Visual direction

Premium light corporate enterprise design, with confident typography, spacious layouts, restrained motion, polished software imagery, and clear conversion hierarchy.

The visual system should feel credible to business owners, school directors, operations managers, retail/wholesale businesses, manufacturers, and international software buyers.

## Suggested palette

| Token | Color | Usage |
|---|---|---|
| Primary text | `#101827` | Headings and body text |
| Primary background | `#F4F6FA` | Page background |
| Surface | `#FFFFFF` | Cards and content surfaces |
| Brand blue | `#2477D4` | Primary CTA and links |
| Deep navy | `#101827` | Dark feature sections |
| Teal accent | `#22B8A7` | Secondary highlights |
| Secondary text | `#64748B` | Supporting copy |
| Border | `#E2E8F0` | Dividers and card borders |

The existing palette (`#0B5FFF`, `#00D4FF`, `#0A0F1E`) may be retained if it is already consistently implemented. Do not make a disruptive brand change solely to match these suggested values. Reconcile the existing tokens with the proposed palette and document the final decision.

## Typography

- Prefer the existing font if it is readable and consistent.
- Otherwise use Inter or Manrope.
- Use strong but restrained headings.
- Keep paragraph line length readable.
- Avoid tiny text in product feature grids and mobile layouts.

## UI rules

- Use consistent spacing, card radii, shadows, borders, and button sizes.
- Prefer real application screenshots over generic stock imagery.
- Use product mockups only when they accurately represent the real software.
- Avoid random 3D objects, excessive gradients, neon effects, and generic AI-generated “technology” visuals.
- Use subtle hover and entrance animations.
- Respect `prefers-reduced-motion`.
- Keep text contrast accessible.
- Use consistent icons from one icon library already present in the project.
- No decorative element should reduce content clarity or page speed.

## Responsive breakpoints

Use the existing responsive system where possible. Verify at minimum:
- Small mobile: 320–375 px
- Standard mobile: 390–430 px
- Tablet: 768 px
- Laptop: 1024–1366 px
- Desktop: 1440 px and above

No horizontal overflow, clipped CTA, broken menu, unreadable table, or overlapping hero content is acceptable.

---

# 5. Global Website Architecture and Navigation

## Main navigation

Recommended desktop navigation:

- Home
- Products
  - All Products
  - Storex ERP
  - Purchoon ERP
  - CambridgeDesk
  - Pharmacy ERP
  - Industrial ERP
  - Qistmarket ERP
- Solutions
  - By Industry
  - Retail & Wholesale
  - Education
  - Pharmacy
  - Manufacturing
  - Distribution
- Services
- Company
  - About
  - Portfolio / Case Studies
  - Insights
- Contact
- Primary CTA: **Book a Demo** or **Discuss a Project**

The primary CTA should be context-sensitive:
- On product pages: “Book a Demo”
- On custom development pages: “Discuss Your Project”
- On the homepage: “Explore Products” and “Discuss Your Project”

Mobile navigation must support nested menus, keyboard focus, Escape-to-close, accessible labels, and a visible CTA.

## Global footer

Include:
- Short company description.
- Product links.
- Services links.
- Industry links.
- Company links.
- Contact details that have been verified.
- Official WhatsApp link using the confirmed business number.
- Official email only if verified in the repository or provided by the owner.
- Social links only if the actual official profiles are known.
- Privacy Policy.
- Terms and Conditions.
- Copyright year generated dynamically.

Do not display invented addresses, telephone numbers, or social profiles.

---

# 6. Complete Page and Route Inventory

Preserve valuable existing routes where they are already in use. The following is the target information architecture; map it onto the existing route system carefully.

## Corporate pages

| Page | Suggested route | Purpose |
|---|---|---|
| Homepage | `/` | Introduce company, products, services, and conversion paths |
| About | `/about/` | Company story, approach, values, leadership if verified |
| Services | `/services/` | Overview of engineering services |
| Custom Software | `/services/custom-software-development/` | Custom project acquisition |
| Enterprise ERP | `/services/enterprise-erp-development/` | Enterprise ERP opportunities |
| SaaS Development | `/services/saas-development/` | SaaS product development inquiries |
| Web Applications | `/services/web-application-development/` | Web application project inquiries |
| Business Automation | `/services/business-automation/` | Workflow automation inquiries |
| AI Integration | `/services/ai-integration/` | Practical AI implementation inquiries |
| API Integration | `/services/api-system-integration/` | Integration projects |
| Legacy Modernization | `/services/legacy-modernization/` | Modernization projects |
| Industries | `/industries/` | Industry overview |
| Retail & Wholesale | `/industries/retail-wholesale/` | Retail and wholesale solution discovery |
| Education | `/industries/education/` | School technology solution discovery |
| Pharmacy | `/industries/pharmacy/` | Pharmacy software solution discovery |
| Manufacturing | `/industries/manufacturing/` | Industrial software solution discovery |
| Distribution | `/industries/distribution/` | Distribution and stock workflows |
| Portfolio | `/portfolio/` | Verified project work |
| Case Study Detail | `/case-studies/{slug}/` | Detailed project evidence |
| Insights / Blog | `/insights/` or existing `/blog/` | Educational and organic search content |
| Blog Detail | `/insights/{slug}/` | Article reading |
| Contact | `/contact/` | General inquiry |
| Privacy Policy | `/privacy-policy/` | Privacy transparency |
| Terms | `/terms/` | Website terms |
| 404 | Existing not-found route | Helpful recovery navigation |

## Product pages

| Product | Suggested route | Main conversion |
|---|---|---|
| Product directory | `/products/` | Explore products |
| Storex ERP | `/products/storex-erp/` | Book Storex demo |
| Purchoon ERP | `/products/purchoon-erp/` | Book Purchoon demo |
| CambridgeDesk | `/products/cambridgedesk/` | Book school ERP demo |
| Pharmacy ERP | `/products/pharmacy-erp/` | Request pharmacy demo |
| Industrial ERP | `/products/industrial-erp/` | Request industrial consultation |
| Qistmarket ERP | `/products/qistmarket-erp/` | Request enterprise demo |

## Campaign landing pages

Create a reusable campaign landing-page architecture. Use dedicated, descriptive routes or configurable campaign slugs, for example:

- `/lp/storex-retail/`
- `/lp/purchoon-wholesale/`
- `/lp/cambridgedesk-schools/`
- `/lp/pharmacy-management/`
- `/lp/industrial-erp/`
- `/lp/custom-erp-development/`

These pages must be designed for paid traffic, not simply reuse the corporate homepage with a different headline.

---

# 7. Homepage — Full Development Specification

## Primary goal

Within the first screen, a visitor must understand:
1. What XB Cloud Tech does.
2. What types of software it offers.
3. Which business problems it solves.
4. Where to go next.

## Homepage section order

### Section 1 — Header
- Logo and primary navigation.
- Products and Solutions dropdowns.
- Contact link.
- Strong CTA.
- Sticky behavior that does not consume excessive mobile space.

### Section 2 — Hero
Suggested headline:

**Technology That Runs Businesses.**

Supporting copy:

“From industry-specific ERP platforms to custom enterprise applications, XB Cloud Tech engineers software that helps businesses connect operations, improve visibility, and scale with confidence.”

Primary CTA: **Explore Our Products**  
Secondary CTA: **Discuss Your Project**

Hero visual:
- Use a genuine collage of actual product screenshots.
- Show desktop application frames and selected mobile/tablet screens if they exist.
- Do not invent dashboard data or fake product UI.
- The visual should demonstrate that XB Cloud Tech has actual software products.

### Section 3 — Product portfolio spotlight
Show the six products with:
- Product name.
- Category.
- One-sentence outcome.
- 2–4 verified feature highlights.
- “Explore Product” CTA.
- “Book a Demo” CTA where applicable.

### Section 4 — Business capabilities
Present:
- Enterprise Software Engineering.
- ERP & Business Management.
- SaaS Product Development.
- Business Process Automation.
- AI & System Integration.
- Cloud Application Development.

Each card links to a detailed service page.

### Section 5 — Industry solutions
Show Retail & Wholesale, Education, Pharmacy, Manufacturing, Distribution, and Enterprise Operations.

Each card must link to its industry page and relevant product.

### Section 6 — Why XB Cloud Tech
Use real differentiators, such as:
- Product-led engineering experience.
- Industry-specific workflows.
- Customizable business systems.
- Connected operational workflows.
- Implementation and ongoing support, if genuinely offered.

Avoid generic unsupported claims like “best quality,” “number one,” or “guaranteed growth.”

### Section 7 — Product experience / UI showcase
Display real product screenshots with captions describing the specific workflow shown. Examples:
- Storex inventory or supplier workflow.
- Purchoon weight-based checkout.
- CambridgeDesk academic or examination workflow.
- Industrial ERP production workflow, only if a real interface exists.

### Section 8 — Engineering process
Discovery → Requirements → Architecture → Development → Quality Assurance → Deployment → Support.

Explain what the client receives at each stage.

### Section 9 — Portfolio / Case studies
Show verified work only. If detailed public cases are not approved, show product implementation highlights instead of fabricated case studies.

### Section 10 — Insights
Show 3 recent articles with category, title, short summary, date, and “Read Article.”

### Section 11 — Final CTA
Headline: **Have a Business Challenge to Solve?**

Buttons:
- Explore Software Products.
- Discuss a Custom Project.

### Section 12 — Footer
Use the global footer specification.

---

# 8. Product Landing Page Strategy — Mandatory Shared Framework

Each software product page is a standalone sales asset. It must explain the target customer, operational problem, product solution, real capabilities, product experience, implementation expectations, and next action.

Every product page must be visually distinct enough to speak to its industry, while using the same design system and shared page components.

## Shared product-page section sequence

1. Breadcrumbs.
2. Product-specific hero.
3. Clear target-customer statement.
4. Primary CTA and secondary CTA.
5. Real product UI visual.
6. Problem / challenge section.
7. Solution overview.
8. Core modules and capabilities.
9. Feature-to-business-outcome mapping.
10. Product workflow / how it works.
11. Role-based or department-based use cases where verified.
12. Screenshots or product gallery.
13. Reporting and visibility section, if implemented.
14. Security, access and deployment information, only where verified.
15. Implementation and onboarding process.
16. Support and maintenance information.
17. FAQs.
18. Final demo CTA.
19. Related products / industry solutions.

## Product-page content standards

- Never dump 30 features into a single grid.
- Group features into meaningful modules.
- Explain the operational value of each module.
- Distinguish available features from roadmap items.
- Use real screenshots and accurate UI labels.
- Use short paragraphs and descriptive subheadings.
- Use one primary conversion action consistently.
- Repeat the CTA after meaningful decision sections, not after every card.
- Include a product-specific FAQ that addresses buyer objections.
- Provide a visible contact alternative for visitors who are not ready to book a demo.

---

# 9. Product-Specific Landing Page Specifications

## 9.1 Storex ERP

**Positioning:** Retail, inventory, and business management software.

**Target audience:**
- Retail stores.
- General merchants.
- Inventory-based businesses.
- Small and growing distributors, where the workflow fits.

**Hero headline:**
**Take Control of Your Store, Stock, and Business Operations.**

Supporting copy:
“Manage inventory, suppliers, sales, customer balances, and daily business activity through one connected retail management platform.”

Primary CTA: **Book a Storex ERP Demo**  
Secondary CTA: **Explore Features**

### Suggested sections

1. Hero with real Storex dashboard / POS screenshot.
2. Common retail management problems:
   - Unclear stock position.
   - Manual supplier records.
   - Disconnected sales and inventory information.
   - Difficulty tracking customer balances.
3. Storex ERP solution overview.
4. Modules:
   - Inventory and stock management.
   - Supplier management.
   - Customer and supplier ledgers.
   - Sales and purchase workflows.
   - Stock alerts.
   - Reporting.
   - Receipt customization.
   - CSV import/export where implemented.
5. Daily workflow:
   - Record purchase.
   - Update inventory.
   - Process sale.
   - Track balance.
   - Review reports.
6. Real dashboard screenshots.
7. Business benefits without fabricated percentages.
8. Implementation and support.
9. FAQs.
10. Demo CTA.

Do not advertise unimplemented features as available. Verify cloud access, offline behavior, multi-branch functionality, and desktop installation status before describing them.

## 9.2 Purchoon ERP

**Positioning:** Weight-based POS and operational management for grocery, kiryana, and wholesale businesses.

**Target audience:**
- Kiryana and grocery shops.
- Loose-item retailers.
- Wholesale merchants.
- Weight-based sellers.
- Businesses managing bori and quality-related stock.

**Hero headline:**
**Built for the Way Grocery and Wholesale Businesses Actually Work.**

Supporting copy:
“Manage weight-based sales, loose items, stock, purchases, customer balances, and daily operations with a business system designed around grocery and wholesale workflows.”

Primary CTA: **Book a Purchoon ERP Demo**  
Secondary CTA: **See How It Works**

### Critical differentiator: weight-based checkout

Make this one of the most visually prominent parts of the page.

Show the actual workflow:
- Select an item.
- Choose the applicable kg / gram mode.
- Enter weight or sale amount.
- Calculate price or weight.
- Add the item to the checkout.
- Complete the transaction.

Use a real interface recording or accurate screenshot. Never draw a fake calculator that does not match the actual software.

### Suggested modules

- Weight-based POS.
- Price-to-weight calculator.
- Kilogram and gram sales.
- Loose-item management.
- Bori and quality tracking.
- Supplier and customer ledgers.
- Udhar management.
- Purchase and sales records.
- Returns.
- Expenses.
- Vehicle, driver and challan workflows where implemented.
- Inventory and stock reporting.

### Page structure

1. Hero and weight-based POS visual.
2. “Not every product is sold by barcode” problem section.
3. Weight-based checkout demonstration.
4. Loose items and bori management.
5. Supplier, customer and Udhar workflows.
6. Purchase, returns and expense management.
7. Vehicle / delivery workflow if operational.
8. Daily business workflow.
9. Actual product screenshots.
10. FAQs.
11. Demo booking CTA.

The page must communicate that the system is designed for real grocery and wholesale operations, not merely a generic retail POS.

## 9.3 CambridgeDesk

**Positioning:** School management and academic intelligence platform.

**Target audience:**
- Private schools.
- Cambridge curriculum schools.
- School groups.
- Academic administrators.
- Examination and assessment teams.

**Hero headline:**
**Bring Academic Operations, Administration, and School Management Together.**

Supporting copy:
“CambridgeDesk helps schools organize academic workflows, student records, assessments, fees, communication, and day-to-day administration through a connected school management platform.”

Primary CTA: **Book a School ERP Demo**  
Secondary CTA: **Explore Academic Modules**

### Suggested modules

- Student information management.
- Academic curriculum management.
- Examination management.
- MCQ and assessment workflows.
- Marksheets and reports.
- Fee management.
- Attendance.
- Homework and academic workflows.
- Teacher and user management.
- Parent communication.
- Transport.
- Library.
- Accounting, where implemented.
- Cambridge and IBCC-related workflows, with exact functionality verified before publishing.

### Critical differentiator

Show academic curriculum and examination workflows prominently. Explain how administrators and teachers use the system, rather than listing modules without context.

### Page structure

1. Hero with real school ERP dashboard.
2. Challenges in school administration.
3. CambridgeDesk overview.
4. Academic and curriculum management.
5. Examination and assessment engine.
6. Student and teacher workflows.
7. Fees, attendance and administration.
8. Parent communication.
9. Reports and academic visibility.
10. Role-based workflow explanation.
11. Screenshots.
12. School onboarding process.
13. FAQs.
14. Book a demo.

Do not claim official endorsement, certification, or formal affiliation with Cambridge or IBCC unless documentary evidence exists. Describe product functionality precisely.

## 9.4 Pharmacy ERP

**Positioning:** Pharmacy POS and operational management software.

**Target audience:**
- Independent pharmacies.
- Pharmacy chains.
- Pharmacy operators.
- Medicine retailers.

**Hero headline:**
**Bring Better Control to Pharmacy Sales and Inventory.**

Supporting copy:
“Organize pharmacy sales, inventory, purchasing, and daily operational records through a connected pharmacy management platform.”

Primary CTA: **Request a Pharmacy ERP Demo**

Before writing the feature sections, inspect the actual Pharmacy ERP implementation.

Potential feature categories to verify:
- POS and billing.
- Medicine inventory.
- Batch and expiry management.
- Purchase and supplier workflows.
- Returns.
- Stock alerts.
- Reporting.
- User permissions.
- Multi-branch management.

Only show features confirmed in the software. Batch, expiry, regulatory, or prescription claims must be particularly carefully verified.

Page sections:
1. Hero.
2. Pharmacy operational challenges.
3. Product overview.
4. Verified modules.
5. Purchase-to-sale workflow.
6. Inventory visibility.
7. Real screenshots.
8. Implementation and support.
9. FAQs.
10. Demo CTA.

## 9.5 Industrial ERP

**Positioning:** Industrial and manufacturing management software.

**Target audience:**
- Manufacturing companies.
- Industrial operators.
- Factory management.
- Procurement and inventory teams.
- Operations managers.

**Hero headline:**
**Connect Industrial Operations Through One Management System.**

Supporting copy:
“Bring greater visibility to manufacturing, inventory, procurement, and operational workflows with software designed around industrial business requirements.”

Primary CTA: **Discuss Your Industrial ERP Requirements**

Verify actual modules before publishing:
- Production planning.
- Work orders.
- Raw material inventory.
- Procurement.
- Finished goods.
- Quality workflows.
- Warehouse operations.
- Costing.
- Maintenance.
- Reporting.
- Multi-location management.

Do not present this as a fully implemented manufacturing execution system unless the underlying product genuinely supports that level of functionality.

Page sections:
1. Hero with actual industrial interface.
2. Manufacturing challenges.
3. Industrial ERP overview.
4. Production and inventory workflows.
5. Procurement and material management.
6. Operational visibility.
7. Reporting.
8. Screenshots.
9. Customization / implementation process.
10. FAQs.
11. Consultation CTA.

## 9.6 Qistmarket ERP

**Positioning:** Multi-role enterprise management platform.

**Target audience:**
- Businesses with complex operational teams.
- Organizations needing role-based workflows.
- Multi-department operations.
- Companies requiring connected business processes.

**Hero headline:**
**Bring Complex Business Operations Into One Connected Platform.**

Supporting copy:
“Coordinate business workflows, users, departments, and operational processes through a structured enterprise management platform.”

Primary CTA: **Request an Enterprise Demo**

Verify the current 20-role architecture and actual permissions before making role-count claims.

Page sections:
1. Hero.
2. Enterprise operational complexity.
3. Platform overview.
4. Verified role and permission model.
5. Department workflows.
6. Reporting and visibility.
7. Integration architecture if implemented.
8. Screenshots.
9. Implementation process.
10. FAQs.
11. Enterprise demo CTA.

Do not imply that every role or workflow is available in every deployment.

---

# 10. Google Ads and Meta Ads — Dedicated Landing Page Strategy

This is a critical commercial requirement.

The six product pages above are evergreen product pages. Paid advertising requires additional campaign-specific landing pages with tighter messaging, stronger relevance, fewer distractions, and a single primary conversion goal.

Do not send every paid campaign to the homepage.

## Difference between organic product pages and campaign landing pages

| Evergreen product page | Paid campaign landing page |
|---|---|
| Explains the complete product | Focuses on one buyer problem |
| Includes full navigation | May use minimal navigation |
| Broad feature coverage | Only the most relevant features |
| Supports organic search | Supports ad-message relevance |
| Multiple internal links | One primary conversion path |
| Product education | Fast qualification and conversion |

## Campaign landing-page framework

### 1. Minimal campaign header
- Logo.
- Optional phone / WhatsApp contact.
- One CTA.
- Avoid a large navigation menu if it distracts from conversion.

### 2. Above-the-fold conversion block

The first screen must contain:
- Clear, specific headline.
- Buyer-focused subheadline.
- Three to five strongest benefits.
- Real product screenshot or short product demonstration.
- Primary CTA.
- Short inquiry form or visible demo action.
- Trust evidence only if verified.

### 3. Problem recognition
Explain the exact operational issue that caused the buyer to click the advertisement.

### 4. Product solution
Show how the product handles the problem.

### 5. Three to six key capabilities
Prioritize features relevant to the campaign.

### 6. Product proof
- Real screenshots.
- Short workflow demo.
- Genuine product interface.
- Verified implementation details.

### 7. Objection handling
Answer practical concerns:
- Is training available?
- How does implementation work?
- Is the product suitable for my business size?
- Can existing data be imported?
- What support is provided?
- What is the pricing or quotation process?

Only answer what the business can actually deliver.

### 8. Conversion form
Keep the first form short. Collect additional qualification details after initial contact if necessary.

Suggested fields:
- Name.
- Phone / WhatsApp.
- Business name.
- Business type.
- Main requirement.

Email can be optional depending on the audience and follow-up process.

### 9. FAQ
Include four to seven campaign-relevant questions.

### 10. Final CTA
Repeat the same primary conversion action.

## Paid landing-page design rules

- Do not place a large corporate navigation menu above the campaign message.
- Do not put unrelated products on the landing page.
- Keep the headline aligned with the ad's promise.
- Use the exact product name consistently.
- Use one primary CTA label throughout.
- Keep forms visible without excessive scrolling.
- Make mobile layout the primary QA priority.
- Use compressed, responsive images.
- Do not autoplay audio.
- Avoid intrusive popups.
- Do not use fake countdowns, fake scarcity, or false discounts.
- Never fabricate reviews or customer logos.
- Ensure the page loads quickly and is easy to use on lower-end phones.

---

# 11. Campaign-Specific Landing Page Plans

## A. Storex ERP — Retail / Inventory Campaign

**Campaign route:** `/lp/storex-retail/`

Audience:
Retail store owners and inventory-based businesses.

Headline:
**Stop Losing Track of Your Stock and Daily Business Activity.**

Subheadline:
“Manage inventory, suppliers, sales, and business records through one connected retail ERP.”

Above-the-fold bullets:
- Track stock and purchases.
- Organize supplier and customer records.
- Manage daily sales.
- Review business reports.

Primary CTA: **Book a Free Product Demo** only if the demo is genuinely free; otherwise use **Book a Demo**.

Visual:
Actual Storex inventory or sales interface.

Sections:
1. Hero and demo form.
2. Stock management problems.
3. Storex workflow.
4. Key modules.
5. Product screenshots.
6. Implementation and support.
7. FAQs.
8. Final demo form.

Ad-message alignment:
If the ad promotes inventory management, the landing hero must lead with inventory—not generic ERP development.

## B. Purchoon ERP — Wholesale / Grocery Campaign

**Campaign route:** `/lp/purchoon-wholesale/`

Audience:
Grocery stores, kiryana merchants, loose-item retailers, and wholesalers.

Headline:
**Selling Sugar, Rice, Daal, or Loose Items by Weight? Manage It Smarter.**

Subheadline:
“Handle weight-based sales, price-to-weight calculations, loose items, stock, and business records through Purchoon ERP.”

Above-the-fold benefits:
- Kg and gram sales.
- Price-to-weight calculation.
- Loose-item checkout.
- Supplier and customer ledgers.

Primary CTA: **Book a Purchoon ERP Demo**

Visual:
Actual weight-based POS screen.

Sections:
1. Hero.
2. Why generic POS workflows can be insufficient for loose-item businesses.
3. Actual price-to-weight checkout.
4. Kg/gram workflow.
5. Stock and supplier management.
6. Udhar and ledger.
7. Product walkthrough.
8. FAQs.
9. Demo form.

Make the weight-based checkout the main visual proof. It is a stronger differentiator than a generic “all-in-one software” headline.

## C. CambridgeDesk — School ERP Campaign

**Campaign route:** `/lp/cambridgedesk-schools/`

Audience:
School owners, principals, administrators, and academic coordinators.

Headline:
**Bring Your School's Academic and Administrative Workflows Together.**

Subheadline:
“Manage students, curriculum, examinations, fees, attendance, and academic reporting through CambridgeDesk.”

Above-the-fold benefits:
- Academic and curriculum management.
- Examination and assessment workflows.
- Student and fee records.
- School administration.

Primary CTA: **Schedule a School ERP Demo**

Visual:
Actual school dashboard or curriculum/examination interface.

Sections:
1. Hero and demo CTA.
2. School administration challenges.
3. Academic curriculum engine.
4. Examination workflows.
5. Student, fee and attendance management.
6. Reports.
7. Role-based use cases.
8. Implementation.
9. FAQs.
10. Demo form.

## D. Pharmacy ERP Campaign

**Campaign route:** `/lp/pharmacy-management/`

Audience:
Pharmacy owners and operators.

Headline:
**Get Better Visibility Into Your Pharmacy's Daily Operations.**

Subheadline:
“Explore a connected pharmacy management system for sales, inventory, purchasing, and daily records.”

Only mention verified product features.

CTA: **Request a Pharmacy Demo**

## E. Industrial ERP Campaign

**Campaign route:** `/lp/industrial-erp/`

Audience:
Factory owners, manufacturing managers, and operations leaders.

Headline:
**Bring Greater Control to Your Manufacturing Operations.**

Subheadline:
“Explore an industrial management platform designed to organize production, procurement, inventory, and operational workflows.”

CTA: **Discuss Your Industrial Requirements**

This page should qualify prospects rather than force an instant low-information sale.

## F. Custom Enterprise Software Campaign

**Campaign route:** `/lp/custom-enterprise-software/`

Audience:
International businesses, founders, operations leaders, and companies with custom software requirements.

Headline:
**Have a Complex Business Workflow? Let's Engineer the Right Software.**

Subheadline:
“XB Cloud Tech designs and develops custom business applications, ERP systems, and connected digital workflows around real operational requirements.”

Above-the-fold:
- Custom ERP and business applications.
- Workflow automation.
- SaaS development.
- API and system integration.

CTA: **Discuss Your Project**

Short inquiry form:
- Name.
- Business email.
- Company.
- Country.
- Project summary.

Sections:
1. Hero and inquiry.
2. Business problems we solve.
3. Software engineering capabilities.
4. Engagement process.
5. Relevant product / project evidence.
6. Technologies only where actually used.
7. FAQs.
8. Final consultation CTA.

---

# 12. Google Ads and Meta Ads Conversion Design Requirements

The website should be prepared for campaign tracking, but this phase does not need a new CRM backend.

## Google Ads page considerations

- Align landing page headline with keyword and ad group intent.
- Keep each campaign focused on one product or service.
- Use relevant content above the fold.
- Ensure mobile usability.
- Make the primary conversion action clear.
- Avoid misleading pricing or claims.
- Provide meaningful contact and company information.
- Keep the form concise.
- Use dedicated page titles and descriptions.
- Prepare unique campaign URLs and UTM parameters.

## Meta Ads page considerations

- The first screen should visually communicate the product and its use case.
- Use product screenshots, short demo clips, and benefit-led copy.
- Repeat the core message from the ad creative.
- Use mobile-first CTA placement.
- Reduce unnecessary navigation.
- Make the form easy to complete.
- Use a WhatsApp CTA where appropriate and genuinely monitored.

## Campaign URL tracking readiness

Preserve campaign query parameters such as:

- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`
- `gclid`
- `fbclid`

Do not discard these parameters when users navigate to the form or product demo route.

If analytics tools already exist, reuse them. Do not install duplicate analytics libraries.

---

# 13. Services Pages — Full Content Architecture

The Services overview should explain the company's engineering capabilities and link to dedicated detail pages.

Each service page must follow:

1. Service-specific hero.
2. Target audience.
3. Business challenges.
4. What XB Cloud Tech delivers.
5. Relevant capabilities.
6. Typical use cases.
7. Delivery process.
8. Relevant products / examples.
9. FAQs.
10. Consultation CTA.

## Service-specific messaging

### Custom Software Development
Build software around the client's actual workflows, users, and operational requirements.

### Enterprise ERP Development
Connect business departments and operational workflows through structured enterprise applications.

### SaaS Development
Design, develop, and improve subscription-based software platforms.

### Web Application Development
Build responsive business applications for teams, customers, and operational workflows.

### Business Process Automation
Reduce repetitive manual work through structured workflows and integrations.

### AI Integration
Apply AI to suitable business processes with clear human oversight and practical use cases. Avoid claiming that every system is AI-powered.

### API & System Integration
Connect business applications and services through documented integration workflows.

### Legacy System Modernization
Assess existing systems and plan a controlled upgrade or migration.

### Business Intelligence
Present operational data through useful reports and dashboards, where supported.

### Software Maintenance & Support
Explain actual support arrangements, response expectations, and maintenance scope. Do not publish an SLA unless formally defined.

---

# 14. Industry Pages — Full Content Architecture

Every industry page should link the visitor's problem to a relevant product or custom engineering solution.

## Retail & Wholesale
- Inventory visibility.
- Weight-based and unit-based sales.
- Supplier and customer records.
- Purchase and sales workflows.
- Retail / wholesale product links: Storex ERP and Purchoon ERP.

## Education
- Student records.
- Academic management.
- Assessment and examination workflows.
- Fee and attendance management.
- Product link: CambridgeDesk.

## Pharmacy
- Pharmacy sales and inventory requirements.
- Product link: Pharmacy ERP.
- Avoid unsupported medical or regulatory claims.

## Manufacturing
- Production and inventory workflows.
- Procurement and operational management.
- Product link: Industrial ERP.
- Clearly separate current capabilities from custom development opportunities.

## Distribution
- Stock movement.
- Supplier and customer workflows.
- Dispatch and operational records.
- Link to relevant verified ERP capabilities.

## Enterprise Operations
- Multi-role workflows.
- Department coordination.
- Business reporting.
- Product link: Qistmarket ERP where appropriate.

Each page should include:
- Industry-specific headline.
- Operational challenges.
- Solution overview.
- Relevant product or service.
- Actual workflow screenshots.
- FAQs.
- Consultation CTA.

---

# 15. About, Portfolio, Pricing, Blog and Contact Pages

## About page

Required sections:
1. Company introduction.
2. Why XB Cloud Tech exists.
3. Product-led and custom-engineering approach.
4. Industries served.
5. Development philosophy.
6. Verified leadership information, if approved.
7. Company values.
8. CTA.

Avoid fake company timelines, fabricated team sizes, or unsupported years of experience.

## Portfolio page

- Filter by industry or solution type.
- Use genuine products and verified projects.
- Each card needs a clear title, industry, short problem statement, solution summary, and detail link.
- A product demonstration can be shown as a product showcase, not falsely labelled as a client case study.
- Do not invent customer names, logos, metrics, or outcomes.

## Pricing page

The pricing page must be commercially honest.

Recommended structure:
1. Ready-made product pricing — only approved public prices.
2. Product demo / quotation option where prices vary.
3. Custom development — requirements-based quotation.
4. Enterprise projects — consultation and scoped proposal.
5. FAQs covering implementation, onboarding, support, and licensing.

Do not show generic Starter / Business / Enterprise tiers unless they represent genuine purchasable service packages.

The existing monthly/yearly toggle and USD/PKR switcher must be validated. Currency conversion must use a reliable, current rate source if it represents live conversion; otherwise label the values as manually configured display prices.

## Blog / Insights

Create a polished content listing page:
- Category filters.
- Search.
- Featured article.
- Article cards.
- Reading time.
- Publication date.
- Author, if known.
- Related articles.

Blog detail:
- Article title.
- Summary.
- Author and date.
- Table of contents for longer posts.
- Proper heading structure.
- Images with alt text.
- Related products or services.
- Relevant CTA.
- Article structured data where eligible.

Search must actually filter the available article dataset. Do not show a search box that does nothing.

## Contact page

Required:
- Clear headline.
- Separate paths for product demos and custom projects.
- Contact form UI with validation.
- Verified WhatsApp contact.
- Verified email if available.
- Business hours only if confirmed.
- Genuine address only if approved.
- Clear privacy and consent text.
- Loading, validation, success, and error states.

A form must not claim a message was sent unless a real endpoint confirms it. Until backend integration is implemented, clearly mark the submission integration as pending and do not publish a misleading production success state.

---

# 16. Content and Copywriting Standards

All public-facing copy must sound like a professional technology company communicating with business decision-makers.

## Writing style

- Clear, specific, business-focused English.
- Explain outcomes, not just technical jargon.
- Use short paragraphs.
- Avoid exaggerated claims.
- Avoid repetitive AI-style phrases.
- Do not repeat “innovative, seamless, cutting-edge, revolutionize” across every section.
- Use industry-specific vocabulary.
- Keep CTAs direct and action-oriented.

## Feature-to-benefit writing

Weak:
“Advanced inventory management.”

Better:
“Track stock movement, purchases, and available quantities from one inventory workflow.”

Weak:
“Complete school ERP.”

Better:
“Bring student records, academic workflows, examinations, and fee management into one connected school system.”

Weak:
“Powerful business automation.”

Better:
“Connect repetitive operational steps and reduce the need to maintain the same information across disconnected tools.”

## Content source of truth

Create a central product content file or structured content configuration so that:
- Product names remain consistent.
- Features are not duplicated inconsistently.
- Product CTAs use correct routes.
- Available vs planned features are explicit.
- Pricing is controlled centrally.
- Metadata is maintained per page.

Do not hardcode different versions of the same product description in unrelated components.

---

# 17. Real Product Visual and Asset Requirements

Product credibility depends heavily on accurate visuals.

For each product, collect and organize:
- Product logo.
- Login screen if appropriate.
- Main dashboard.
- Core workflow screenshot.
- Reporting screen.
- Mobile/tablet view if supported.
- Short screen recording or demo clip if available.

Recommended asset organization:

```text
public/
  assets/
    brand/
    products/
      storex/
      purchoon/
      cambridgedesk/
      pharmacy-erp/
      industrial-erp/
      qistmarket/
    industries/
    case-studies/
    blog/
    team/
```

Rules:
- Never use a screenshot from another product as if it belongs to the current product.
- Hide customer personal information and sensitive business data.
- Do not show fake numbers as live product data.
- Use consistent image aspect ratios.
- Provide descriptive alt text.
- Compress images and use modern formats where supported.
- Do not generate fake product UI and present it as a working feature.

If actual screenshots are unavailable, use a neutral product visual placeholder labelled internally for replacement. Do not ship obvious placeholder dashboards as genuine software screenshots.

---

# 18. Front-End Functional Requirements

All visible controls must work.

## Navigation
- Every link goes to a real route.
- Dropdowns open and close correctly.
- Mobile drawer works.
- Active route state is visible.
- Keyboard navigation works.
- No `href="#"` dead links.

## Product interactions
- Product cards navigate to the correct product.
- Demo CTA carries the correct product context.
- Product galleries work.
- Tabs and accordions work.
- Related products navigate correctly.

## Portfolio
- Industry filters work.
- Case-study links work.
- Empty filter states are designed.

## Blog
- Category filters work.
- Search works against the available content.
- Article links open the correct detail pages.
- Newsletter UI does not falsely claim an email subscription was persisted.

## Forms
- Required fields validate.
- Email and phone inputs have appropriate validation.
- Error messages are accessible.
- Loading state is visible.
- Duplicate clicks are prevented.
- Server submission is only claimed if the integration exists.
- Form state does not disappear unexpectedly during validation.

## Pricing
- Toggle calculations are correct.
- Currency values are accurate and clearly labelled.
- CTA links work.
- Comparison content matches actual service inclusions.

## Global
- No dead CTA.
- No broken image.
- No console error.
- No placeholder copy in production.
- No accidental e-commerce references.
- No irrelevant admin routes or marketplace components.

---

# 19. SEO and Page Metadata

Create unique metadata for every indexable page.

Each page needs:
- Unique title.
- Unique meta description.
- Correct canonical strategy.
- One clear H1.
- Logical H2 / H3 structure.
- Descriptive image alt text.
- Internal links.
- Open Graph title and image.
- Social sharing description.
- Relevant structured data where appropriate.

## Suggested page-title direction

- XB Cloud Tech | Enterprise Software & ERP Solutions
- Storex ERP | Retail and Inventory Management Software
- Purchoon ERP | Weight-Based POS for Grocery & Wholesale
- CambridgeDesk | School Management & Academic ERP
- Pharmacy ERP | Pharmacy POS and Management Software
- Industrial ERP | Manufacturing Management Software
- Qistmarket ERP | Enterprise Business Management Platform
- Custom Software Development | XB Cloud Tech

These are starting points. Final titles must match page content and avoid keyword stuffing.

## Routing and SEO caution

The current audit identifies `HashRouter`. Before changing it:
1. Verify all current routes.
2. Check how the production host handles direct requests.
3. Review existing indexed URLs.
4. Compare HashRouter, BrowserRouter with SPA fallback, and pre-rendering/SSR options.
5. Recommend the lowest-risk SEO-capable solution.
6. Preserve old valuable URLs with appropriate redirects or route compatibility where possible.

Do not silently change router architecture as part of a page design task.

---

# 20. Performance and Accessibility Requirements

## Performance
- Use responsive images.
- Lazy-load below-the-fold media.
- Avoid oversized hero video.
- Minimize unnecessary animation libraries.
- Split code where useful.
- Avoid loading all product images at full resolution.
- Avoid layout shifts.
- Use sensible font loading.
- Test mobile performance.

Target good Core Web Vitals:
- LCP: 2.5 seconds or less.
- INP: 200 ms or less.
- CLS: 0.1 or less.

These are targets, not guaranteed results. Measure with appropriate tools.

## Accessibility
- Semantic headings.
- Keyboard-operable navigation.
- Visible focus.
- Accessible form labels.
- Correct contrast.
- Descriptive link names.
- Alt text for informative images.
- Reduced motion support.
- Accessible dialogs and accordions.

Aim for WCAG 2.2 AA.

---

# 21. Phased Implementation Plan

Do not execute all phases in one uncontrolled generation. Complete, test, review, and approve each phase before moving forward.

## Phase 0 — Repository and Page Inventory Audit

**Objective:** Establish the actual current state.

Tasks:
- Inspect source code and routes.
- Verify current pages and functionality.
- Inspect existing components and design tokens.
- Identify reused and duplicated sections.
- Review assets and product screenshots.
- Identify missing pages.
- Identify placeholder content.
- Identify route and SEO constraints.

Deliverables:
- `XB_PAGE_INVENTORY.md`
- `XB_COMPONENT_INVENTORY.md`
- `XB_CONTENT_GAP_MATRIX.md`
- `XB_ASSET_INVENTORY.md`
- `XB_PAGE_UPGRADE_PLAN.md`

Mode: Read-only. No source modifications.

## Phase 1 — Design System and Global Shell

**Objective:** Standardize the corporate experience.

Tasks:
- Finalize color and typography tokens.
- Refine global header.
- Refine desktop and mobile navigation.
- Build reusable CTA variants.
- Standardize cards, forms, badges, accordions, breadcrumbs.
- Refine footer.
- Standardize responsive containers and spacing.

Deliverables:
- Updated global design system.
- Updated navigation and footer.
- Reusable component documentation.
- `PHASE_1_REPORT.md`

## Phase 2 — Homepage and Corporate Pages

**Objective:** Complete the company-facing website.

Pages:
- Homepage.
- About.
- Services overview.
- Portfolio.
- Pricing.
- Blog listing.
- Blog detail template.
- Contact.
- Privacy Policy.
- Terms.
- 404.

Tasks:
- Upgrade section order and copy.
- Add relevant internal links.
- Remove unverified claims.
- Make all existing controls functional.
- Complete responsive layouts.
- Add page metadata.

Deliverables:
- All corporate pages complete.
- `PHASE_2_PAGE_QA.md`
- Desktop and mobile screenshots.

## Phase 3 — Product Directory and Product Landing Pages

**Objective:** Make every product a professional commercial offering.

Pages:
- `/products/`
- Storex ERP.
- Purchoon ERP.
- CambridgeDesk.
- Pharmacy ERP.
- Industrial ERP.
- Qistmarket ERP.

Tasks:
- Create shared product page template.
- Create product-specific content.
- Add accurate module groups.
- Add actual product screenshots.
- Add workflow demonstrations.
- Add product FAQs.
- Add product-specific demo CTA.
- Link each product to relevant industry and service pages.

Deliverables:
- Six complete product landing pages.
- Product directory.
- Product content matrix.
- `PHASE_3_PRODUCT_QA.md`

## Phase 4 — Services and Industry Solution Pages

**Objective:** Build strong enterprise acquisition pages.

Pages:
- Services overview.
- Custom Software Development.
- Enterprise ERP Development.
- SaaS Development.
- Web Application Development.
- Business Automation.
- AI Integration.
- API Integration.
- Legacy Modernization.
- Business Intelligence.
- Maintenance & Support.
- Industries overview.
- Retail & Wholesale.
- Education.
- Pharmacy.
- Manufacturing.
- Distribution.
- Enterprise Operations.

Tasks:
- Build reusable service and industry templates.
- Write distinct page copy.
- Connect relevant products.
- Add use cases.
- Add process diagrams where useful.
- Add FAQs and consultation CTAs.

Deliverables:
- Complete services catalogue.
- Complete industry solution catalogue.
- `PHASE_4_PAGE_QA.md`

## Phase 5 — Paid Advertising Landing Pages

**Objective:** Build dedicated, conversion-focused landing pages for Google Ads and Meta Ads.

Pages:
- Storex retail campaign.
- Purchoon grocery/wholesale campaign.
- CambridgeDesk school campaign.
- Pharmacy ERP campaign.
- Industrial ERP campaign.
- Custom enterprise software campaign.

Tasks:
- Create minimal campaign header.
- Create above-the-fold conversion layout.
- Align headline with campaign intent.
- Use product-specific visuals.
- Add concise inquiry forms.
- Add problem/solution sections.
- Add feature proof.
- Add objection-handling FAQs.
- Add final CTA.
- Preserve UTM and click identifiers.
- Test mobile conversion flow.

Deliverables:
- Six campaign landing pages.
- Campaign page component template.
- Campaign-to-product content matrix.
- `PHASE_5_PAID_LANDING_QA.md`

## Phase 6 — Content, SEO and Internal Linking

**Objective:** Make the completed website search-ready.

Tasks:
- Complete unique page metadata.
- Review heading hierarchy.
- Configure sitemap and robots.
- Review canonical URLs.
- Review clean route strategy.
- Add eligible structured data.
- Improve internal linking.
- Create relevant blog categories.
- Review image alt text.
- Remove duplicate or thin content.
- Verify indexability.

Deliverables:
- SEO metadata inventory.
- Internal linking map.
- Technical SEO report.
- `PHASE_6_SEO_QA.md`

## Phase 7 — Full Website Quality Assurance

**Objective:** Verify the whole public website before commercial campaigns.

Tasks:
- Test every route.
- Test every CTA.
- Test all menus.
- Test all forms and their real submission limitations.
- Test all filters, tabs, and accordions.
- Test every product page.
- Test all campaign pages.
- Check responsive layouts.
- Check accessibility.
- Check image performance.
- Check console errors.
- Check build and TypeScript.
- Verify no placeholder content remains.
- Verify all public claims.

Deliverables:
- `XB_COMPLETE_PAGE_REGISTER.md`
- `XB_FINAL_CONTENT_QA.md`
- `XB_FINAL_RESPONSIVE_QA.md`
- `XB_FINAL_FUNCTIONAL_QA.md`
- `XB_FINAL_PRODUCTION_READINESS.md`

---

# 22. Mandatory Phase Execution Prompt

Use this instruction before every phase:

> You are the Principal Frontend Engineer and Enterprise Website UX Architect responsible for upgrading XB Cloud Tech.
>
> First inspect the existing repository and the previous phase report. Identify what already exists and what is missing. Do not recreate completed functionality unnecessarily.
>
> Implement only the current approved phase. Follow the existing application architecture, design system, route conventions, and business content source of truth.
>
> Every page must be complete, responsive, commercially credible, and visually polished. Every visible button, link, filter, form interaction, tab, accordion, and navigation item must work as intended.
>
> Use genuine company and product information. Never invent features, client logos, customer testimonials, prices, statistics, certifications, integrations, or outcomes.
>
> For product and campaign landing pages, use a conversion-first content hierarchy: clear audience, problem, solution, genuine product evidence, relevant features, objection handling, and a strong CTA.
>
> Do not use generic placeholder copy or fake product screenshots in the final public website.
>
> Before finishing, run typecheck, production build, relevant tests, and route-level QA. Inspect modified files and test the actual behavior rather than assuming it works.
>
> Produce a phase report containing completed work, modified files, screenshots, tests, test results, known limitations, and outstanding tasks.
>
> Do not begin the next phase until the current phase has been reviewed and approved.

---

# 23. Final Acceptance Checklist

The website is not complete until all applicable items are verified.

## Company website
- [ ] Homepage communicates the hybrid company identity.
- [ ] About page is complete.
- [ ] Services pages are complete.
- [ ] Industries pages are complete.
- [ ] Portfolio contains genuine work.
- [ ] Pricing reflects real commercial offerings.
- [ ] Blog listing and article pages work.
- [ ] Contact page works.
- [ ] Privacy and Terms pages exist.
- [ ] Footer and navigation are complete.

## Product portfolio
- [ ] Product directory is complete.
- [ ] Storex ERP page is complete.
- [ ] Purchoon ERP page is complete.
- [ ] CambridgeDesk page is complete.
- [ ] Pharmacy ERP page is complete.
- [ ] Industrial ERP page is complete.
- [ ] Qistmarket ERP page is complete.
- [ ] Every product has actual relevant visuals.
- [ ] Every product has accurate feature descriptions.
- [ ] Every product has a clear demo or inquiry CTA.

## Paid advertising
- [ ] Six campaign landing pages are complete.
- [ ] Google Ads message relevance is checked.
- [ ] Meta Ads mobile experience is checked.
- [ ] Hero sections communicate the offer immediately.
- [ ] Forms are short and understandable.
- [ ] Product proof is visible.
- [ ] FAQs handle buyer objections.
- [ ] Campaign parameters are preserved.
- [ ] No fake success state is shown.

## Technical
- [ ] All routes open directly under the supported hosting configuration.
- [ ] No dead links.
- [ ] No broken images.
- [ ] No placeholder content.
- [ ] No unrelated e-commerce code.
- [ ] No console errors.
- [ ] TypeScript passes.
- [ ] Production build passes.
- [ ] Responsive QA passes.
- [ ] Accessibility issues are reviewed.
- [ ] SEO metadata is unique.
- [ ] Existing production integrations are preserved.

---

# 24. Final Delivery Definition

The final delivery must include:

1. A polished corporate website.
2. Complete company pages.
3. Complete products directory.
4. Six individual software product landing pages.
5. Complete services catalogue.
6. Complete industry solutions catalogue.
7. Six dedicated Google Ads / Meta Ads landing pages.
8. Functional navigation and front-end interactions.
9. Accurate product content and real software visuals.
10. Responsive desktop, tablet, and mobile experience.
11. SEO-ready page structure and metadata.
12. Complete route and page inventory.
13. Phase-wise QA reports.
14. A clear list of remaining backend and integration requirements.

**Final principle:**

Build XB Cloud Tech as a company that sells real software and solves real operational problems. Every page should make it easy for a potential customer to understand what is offered, see how it works, trust the presentation, and take the next step.

The current mission is to finish the public-facing website and all product/campaign landing pages. Do not divert development into a new CRM, customer portal, or unrelated backend project until this website scope has been approved.
"""

out = "/mnt/data/XB_Cloud_Tech_Complete_Website_Development_Blueprint.md"
pypandoc.convert_text(md, "md", format="md", outputfile=out, extra_args=["--standalone"])
print(out, os.path.getsize(out))
