/* eslint-disable */
// @ts-nocheck
import React, { useState, useRef } from 'react';
import {
  Cloud, Menu, ChevronRight, Globe, Terminal, Briefcase, ArrowRight,
  Shield, Server, Zap, Database, TrendingUp, Code2, Smartphone,
  Brain, Settings, Palette, Bot, Cpu, MonitorSmartphone, Layers,
  CheckCircle2, Star, Users, Award, Lock, BarChart3, Workflow,
  GitBranch, Container, Activity, Eye, Search, FileCode, Wrench,
  Building2, ShoppingCart, LayoutDashboard, AppWindow, Globe2,
  Repeat, MessageSquare, PieChart, CloudUpload, DollarSign,
  AlertTriangle, KeyRound, HardDrive, LineChart,
  Boxes, PenTool, Pen, Tablet, Grid, Lightbulb, GanttChart,
  PhoneCall, X, Play, ChevronLeft, ExternalLink, Quote,
  Clock, CheckCheck, Rocket, Target, HeartHandshake, Milestone
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';

// ── SERVICE CATALOGUE DATA ────────────────────────────────────────────────────
const CATEGORIES = [
  {
    id: 'software', label: 'Custom Software', icon: <Code2 className="w-5 h-5" />, color: 'from-violet-500 to-indigo-600',
    tagline: 'Tailored digital products, end-to-end.',
    description: 'We design, architect and build software that fits your exact business logic — from MVPs to enterprise-grade platforms handling millions of transactions.',
    sub: [
      { name: 'ERP & Business Management Systems', desc: 'Streamline operations, inventory, HR and finance in a single unified platform built around your workflow.', icon: <Building2 className="w-5 h-5" /> },
      { name: 'CRM Systems', desc: 'Custom CRM pipelines, lead tracking, customer portals and sales automation tailored to your team.', icon: <Users className="w-5 h-5" /> },
      { name: 'Custom Web Applications', desc: 'Complex SPA/SSR applications with advanced business logic, real-time features and deep integrations.', icon: <AppWindow className="w-5 h-5" /> },
      { name: 'Enterprise Software', desc: 'High-resilience platforms for large organizations with compliance, SSO, RBAC and audit logging.', icon: <Layers className="w-5 h-5" /> },
      { name: 'SaaS Development', desc: 'Multi-tenant SaaS from architecture through launch — subscriptions, onboarding, usage billing and scale.', icon: <Globe2 className="w-5 h-5" /> },
      { name: 'API & Third-party Integrations', desc: 'REST/GraphQL APIs, webhooks and deep integrations with payment gateways, ERPs, CRMs and more.', icon: <Repeat className="w-5 h-5" /> },
    ],
  },
  {
    id: 'web', label: 'Web Development', icon: <Globe className="w-5 h-5" />, color: 'from-blue-500 to-cyan-500',
    tagline: 'Fast, beautiful websites that convert.',
    description: 'From sleek corporate presences to high-traffic e-commerce platforms — built on modern stacks with performance, SEO and accessibility baked in.',
    sub: [
      { name: 'Corporate Websites', desc: 'High-impact marketing sites with CMS integration, multilingual support and SEO-optimized architecture.', icon: <Building2 className="w-5 h-5" /> },
      { name: 'E-commerce Websites', desc: 'Shopify, WooCommerce, or fully custom storefronts with payment, inventory and logistics integrations.', icon: <ShoppingCart className="w-5 h-5" /> },
      { name: 'Web Portals', desc: 'B2B portals, client dashboards, partner extranets and self-service platforms with role-based access.', icon: <LayoutDashboard className="w-5 h-5" /> },
      { name: 'SaaS Dashboards', desc: 'Data-rich admin panels and analytics dashboards with real-time charts, filters and export capabilities.', icon: <MonitorSmartphone className="w-5 h-5" /> },
      { name: 'Progressive Web Apps', desc: 'Offline-first PWAs that deliver a native-app experience with push notifications and home screen install.', icon: <Zap className="w-5 h-5" /> },
      { name: 'WordPress / CMS Development', desc: 'Custom themes, plugins and headless CMS setups for editorial teams requiring easy content management.', icon: <FileCode className="w-5 h-5" /> },
    ],
  },
  {
    id: 'mobile', label: 'Mobile Apps', icon: <Smartphone className="w-5 h-5" />, color: 'from-emerald-500 to-teal-600',
    tagline: 'Native and cross-platform mobile experiences.',
    description: 'We deliver polished iOS and Android applications with smooth UX, offline support and deep device API integration.',
    sub: [
      { name: 'Android Apps', desc: 'Native Kotlin/Java apps with Material Design, Jetpack Compose and Play Store submission.', icon: <Smartphone className="w-5 h-5" /> },
      { name: 'iOS Apps', desc: 'Native Swift/SwiftUI apps following Apple HIG, App Store optimization and in-app purchase integration.', icon: <Tablet className="w-5 h-5" /> },
      { name: 'Cross-platform Apps', desc: 'React Native or Flutter apps sharing a single codebase across iOS and Android for faster time-to-market.', icon: <Layers className="w-5 h-5" /> },
      { name: 'Business & Enterprise Apps', desc: 'Secure B2E apps with MDM support, SSO, offline mode and integration with enterprise back-end systems.', icon: <Building2 className="w-5 h-5" /> },
      { name: 'App Maintenance', desc: 'OS update compatibility, bug fixing, performance profiling and feature enhancements for existing apps.', icon: <Wrench className="w-5 h-5" /> },
    ],
  },
  {
    id: 'cloud', label: 'Cloud Solutions', icon: <Cloud className="w-5 h-5" />, color: 'from-sky-500 to-blue-600',
    tagline: 'Infrastructure designed for speed and resilience.',
    description: 'Multi-cloud and hybrid cloud strategies, infrastructure-as-code, and managed cloud services across AWS, Azure and Google Cloud.',
    sub: [
      { name: 'Cloud Infrastructure', desc: 'Architecture design, VPC setup, load balancers, autoscaling groups and managed database tiers.', icon: <Server className="w-5 h-5" /> },
      { name: 'Cloud Migration', desc: 'Zero-downtime lift-and-shift or re-architecture migrations from on-premise or competing cloud providers.', icon: <CloudUpload className="w-5 h-5" /> },
      { name: 'AWS / Azure / Google Cloud', desc: 'Certified architects across all three major providers with cost and performance benchmarking.', icon: <Boxes className="w-5 h-5" /> },
      { name: 'Cloud Hosting & VPS', desc: 'Managed compute instances with automated patching, monitoring and 99.99% uptime SLA.', icon: <HardDrive className="w-5 h-5" /> },
      { name: 'Backup & Disaster Recovery', desc: 'Geo-redundant backups, RPO/RTO-backed DR plans and scheduled failover testing.', icon: <Database className="w-5 h-5" /> },
      { name: 'Cloud Cost Optimization', desc: 'FinOps analysis, reserved instance planning, right-sizing and anomaly alerting to cut cloud spend.', icon: <DollarSign className="w-5 h-5" /> },
    ],
  },
  {
    id: 'ai', label: 'AI & Automation', icon: <Brain className="w-5 h-5" />, color: 'from-fuchsia-500 to-purple-600',
    tagline: 'Intelligent systems that work around the clock.',
    description: 'We integrate frontier AI models into your products and automate repetitive workflows — saving thousands of engineering hours every year.',
    sub: [
      { name: 'AI Chatbots', desc: 'LLM-powered chatbots trained on your knowledge base for customer support, sales and internal tools.', icon: <Bot className="w-5 h-5" /> },
      { name: 'AI-powered Business Solutions', desc: 'Document processing, intelligent search, recommendation engines and decision-support systems.', icon: <Lightbulb className="w-5 h-5" /> },
      { name: 'Generative AI Integration', desc: 'GPT-4o, Claude, Gemini, Llama integration with RAG pipelines, fine-tuning and prompt engineering.', icon: <Cpu className="w-5 h-5" /> },
      { name: 'Workflow Automation', desc: 'n8n, Zapier, Make and custom automation to eliminate manual repetitive tasks across your stack.', icon: <Workflow className="w-5 h-5" /> },
      { name: 'AI Agents', desc: 'Autonomous multi-step agents that browse, query databases, write code and execute tasks end-to-end.', icon: <Activity className="w-5 h-5" /> },
      { name: 'Data & Predictive Analytics', desc: 'ML pipelines for demand forecasting, churn prediction, anomaly detection and BI dashboards.', icon: <PieChart className="w-5 h-5" /> },
    ],
  },
  {
    id: 'devops', label: 'DevOps', icon: <GitBranch className="w-5 h-5" />, color: 'from-orange-500 to-red-500',
    tagline: 'Ship faster with bulletproof pipelines.',
    description: 'We design, implement and operate your entire software delivery lifecycle — from source control to production deployment and beyond.',
    sub: [
      { name: 'CI/CD Pipelines', desc: 'GitHub Actions, GitLab CI, Jenkins and ArgoCD pipelines with quality gates, testing and rollback.', icon: <GitBranch className="w-5 h-5" /> },
      { name: 'Docker & Kubernetes', desc: 'Containerization strategy, Helm chart authoring, K8s cluster management and pod autoscaling.', icon: <Container className="w-5 h-5" /> },
      { name: 'Server Deployment', desc: 'Automated server provisioning, configuration management with Ansible/Terraform and zero-downtime deploys.', icon: <Server className="w-5 h-5" /> },
      { name: 'Infrastructure Automation', desc: 'Infrastructure-as-Code using Terraform, Pulumi and CDK for repeatable, version-controlled environments.', icon: <Settings className="w-5 h-5" /> },
      { name: 'Monitoring & Logging', desc: 'Prometheus, Grafana, ELK/Loki stacks, PagerDuty alerts and SLO/SLI dashboards.', icon: <Activity className="w-5 h-5" /> },
      { name: 'Performance Optimization', desc: 'Profiling build times, container startup, DB query latency and CDN cache ratios to cut MTTR.', icon: <TrendingUp className="w-5 h-5" /> },
    ],
  },
  {
    id: 'security', label: 'Cybersecurity', icon: <Shield className="w-5 h-5" />, color: 'from-red-500 to-rose-600',
    tagline: 'Protect every layer of your digital surface.',
    description: 'Comprehensive security services from threat modelling and pen testing to continuous monitoring — aligned with ISO 27001, SOC 2 and GDPR.',
    sub: [
      { name: 'Security Audits', desc: 'End-to-end audits covering code, infrastructure, access controls and third-party integrations.', icon: <Search className="w-5 h-5" /> },
      { name: 'Vulnerability Assessment', desc: 'Automated and manual vulnerability scanning with CVSS scoring and remediation roadmaps.', icon: <AlertTriangle className="w-5 h-5" /> },
      { name: 'Application Security', desc: 'SAST/DAST integration, OWASP Top 10 hardening, secret scanning and dependency auditing.', icon: <FileCode className="w-5 h-5" /> },
      { name: 'Server Security', desc: 'OS hardening, firewall rule auditing, SELinux/AppArmor configuration and intrusion detection.', icon: <Lock className="w-5 h-5" /> },
      { name: 'Data Protection', desc: 'Encryption-at-rest and in-transit, key management, data masking and GDPR-compliant data handling.', icon: <KeyRound className="w-5 h-5" /> },
      { name: 'Security Monitoring', desc: '24/7 SIEM, SOC-as-a-Service, real-time threat feeds and incident response playbooks.', icon: <Eye className="w-5 h-5" /> },
    ],
  },
  {
    id: 'design', label: 'UI/UX Design', icon: <Palette className="w-5 h-5" />, color: 'from-pink-500 to-rose-500',
    tagline: 'Interfaces people love to use.',
    description: 'From early discovery and wireframes to pixel-perfect design systems and interactive prototypes — we craft experiences that convert and retain.',
    sub: [
      { name: 'UI/UX Design', desc: 'User research, information architecture, interaction design and usability testing for web products.', icon: <PenTool className="w-5 h-5" /> },
      { name: 'Web Design', desc: 'Visually distinctive, brand-aligned marketing site designs with responsive layouts and micro-animations.', icon: <Globe className="w-5 h-5" /> },
      { name: 'Mobile App Design', desc: 'iOS and Android UI following platform conventions while expressing a unique, premium brand voice.', icon: <Smartphone className="w-5 h-5" /> },
      { name: 'SaaS Product Design', desc: 'Complex data-heavy dashboards, onboarding flows and settings panels designed for clarity at scale.', icon: <LayoutDashboard className="w-5 h-5" /> },
      { name: 'Design Systems', desc: 'Tokenized component libraries in Figma and code, ensuring consistency across every product surface.', icon: <Grid className="w-5 h-5" /> },
      { name: 'Prototyping', desc: 'High-fidelity interactive Figma prototypes for stakeholder demos, investor decks and user testing.', icon: <Pen className="w-5 h-5" /> },
    ],
  },
  {
    id: 'automation', label: 'Business Automation', icon: <Workflow className="w-5 h-5" />, color: 'from-amber-500 to-yellow-500',
    tagline: 'Automate the repetitive, focus on the meaningful.',
    description: 'We map your business processes and replace manual bottlenecks with smart, reliable automations — saving time, reducing errors and scaling operations.',
    sub: [
      { name: 'Process Automation', desc: 'End-to-end business process automation using RPA tools, custom scripts and low-code platforms.', icon: <GanttChart className="w-5 h-5" /> },
      { name: 'CRM Automation', desc: 'HubSpot, Salesforce and custom CRM workflows — automated lead scoring, follow-ups and reporting.', icon: <Users className="w-5 h-5" /> },
      { name: 'ERP Automation', desc: 'Automated procurement, invoicing, stock alerts and inter-department data sync within ERP systems.', icon: <Building2 className="w-5 h-5" /> },
      { name: 'WhatsApp / API Automation', desc: 'WhatsApp Business API for order confirmations, appointment reminders, OTPs and support bots.', icon: <MessageSquare className="w-5 h-5" /> },
      { name: 'Third-party Integrations', desc: 'Connect your tools — Slack, Jira, Stripe, Shopify, QuickBooks and 100+ more — into seamless workflows.', icon: <Repeat className="w-5 h-5" /> },
      { name: 'Custom Workflow Systems', desc: 'Bespoke approval chains, multi-step task routing and condition-based triggers built to your exact spec.', icon: <Settings className="w-5 h-5" /> },
    ],
  },
  {
    id: 'consulting', label: 'IT Consulting', icon: <Lightbulb className="w-5 h-5" />, color: 'from-teal-500 to-green-600',
    tagline: 'Strategic guidance from senior engineers.',
    description: 'Fractional CTO, architecture review, cloud strategy and hands-on technical support — we embed into your team and help you make the right decisions.',
    sub: [
      { name: 'Technology Consulting', desc: 'Vendor evaluation, technology selection and build-vs-buy analysis for your product roadmap.', icon: <Lightbulb className="w-5 h-5" /> },
      { name: 'Software Architecture', desc: 'System design, microservices vs monolith trade-off analysis, API design and scalability blueprints.', icon: <Layers className="w-5 h-5" /> },
      { name: 'Cloud Consulting', desc: 'Multi-cloud strategy, cloud-native transformation and FinOps governance for large organizations.', icon: <Cloud className="w-5 h-5" /> },
      { name: 'Digital Transformation', desc: 'Roadmap creation, change management support and technology adoption across entire organizations.', icon: <TrendingUp className="w-5 h-5" /> },
      { name: 'Technical Support', desc: '24/7 helpdesk, on-call engineering support and incident management for critical production systems.', icon: <PhoneCall className="w-5 h-5" /> },
      { name: 'Software Maintenance', desc: 'Legacy system upgrades, bug fixing, dependency updates and long-term codebase stewardship.', icon: <Wrench className="w-5 h-5" /> },
    ],
  },
];

// ── DETAIL DATA PER CATEGORY ─────────────────────────────────────────────────
const CATEGORY_DETAIL_DEFAULTS: Record<string, any> = {
  software: {
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1400&auto=format&fit=crop',
    ],
    tech: ['React / Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    metrics: [{ n: '3x', l: 'Faster Delivery' }, { n: '99.9%', l: 'Uptime SLA' }, { n: '40%', l: 'Cost Reduction' }, { n: '500+', l: 'Apps Shipped' }],
    features: [
      { icon: <Rocket className="w-5 h-5" />, title: 'Rapid MVP Development', desc: 'From requirements to live product in as little as 4 weeks using our accelerated delivery framework.' },
      { icon: <Shield className="w-5 h-5" />, title: 'Enterprise-grade Security', desc: 'SOC 2 aligned development practices, code scanning, RBAC and audit logging built in from day one.' },
      { icon: <Repeat className="w-5 h-5" />, title: 'Seamless Integrations', desc: 'We integrate with any third-party system — payment gateways, logistics, CRMs and legacy ERPs.' },
      { icon: <TrendingUp className="w-5 h-5" />, title: 'Built to Scale', desc: 'Architecture designed for 10x traffic spikes with auto-scaling, caching layers and CDN distribution.' },
      { icon: <CheckCheck className="w-5 h-5" />, title: 'QA & Testing', desc: 'Automated unit, integration and end-to-end test suites ensuring every release is production-ready.' },
      { icon: <HeartHandshake className="w-5 h-5" />, title: 'Post-launch Support', desc: 'Dedicated support team with SLA-backed response times and proactive monitoring after go-live.' },
    ],
    steps: [
      { n: '01', title: 'Discovery & Scoping', desc: 'We run structured workshops to map your exact requirements, user journeys and technical constraints.' },
      { n: '02', title: 'Architecture & Design', desc: 'System design blueprints, API schemas, UI wireframes and database modelling — reviewed and signed off before we write a line of code.' },
      { n: '03', title: 'Agile Development', desc: 'Two-week sprints with live demos, continuous integration and full test coverage at every stage.' },
      { n: '04', title: 'Launch & Handover', desc: 'Staged deployment, load testing, staff training, documentation and 90-day warranty support included.' },
    ],
    reviews: [
      { name: 'Tariq Mahmood', role: 'CEO', company: 'RetailEdge', stars: 5, text: 'XB Cloud built our entire ERP from scratch in 3 months. It replaced 4 different tools we were using. The ROI was visible within 60 days.' },
      { name: 'Aisha Farooq', role: 'COO', company: 'LogiPak Industries', stars: 5, text: 'Their development process is incredibly transparent. We had demos every two weeks and the final product exceeded every expectation.' },
      { name: 'David Chen', role: 'CTO', company: 'TechScale', stars: 5, text: 'The codebase they delivered is clean, documented and maintainable. It has been running in production for 2 years with zero major incidents.' },
    ],
  },
  web: {
    images: [
      'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1400&auto=format&fit=crop',
    ],
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Shopify', 'WordPress', 'Vercel'],
    metrics: [{ n: '2s', l: 'Avg Load Time' }, { n: '98', l: 'Lighthouse Score' }, { n: '3x', l: 'More Conversions' }, { n: '200+', l: 'Sites Delivered' }],
    features: [
      { icon: <Zap className="w-5 h-5" />, title: 'Sub-2s Load Times', desc: 'Core Web Vitals optimized with image compression, lazy loading, CDN and pre-rendering built in.' },
      { icon: <Search className="w-5 h-5" />, title: 'SEO-First Architecture', desc: 'Semantic HTML, structured data, meta management and technical SEO baked into every project.' },
      { icon: <Smartphone className="w-5 h-5" />, title: 'Mobile-First Responsive', desc: 'Pixel-perfect on every screen size with fluid layouts and adaptive component behaviour.' },
      { icon: <Shield className="w-5 h-5" />, title: 'Secure & Compliant', desc: 'HTTPS, CSP headers, GDPR-ready cookie consent and regular dependency security audits.' },
      { icon: <Settings className="w-5 h-5" />, title: 'CMS Integration', desc: 'Non-technical teams can update content independently via Sanity, Contentful, Strapi or WordPress.' },
      { icon: <BarChart3 className="w-5 h-5" />, title: 'Analytics & Tracking', desc: 'GA4, Mixpanel, hotjar and conversion tracking set up and tested before launch.' },
    ],
    steps: [
      { n: '01', title: 'Discovery & Sitemap', desc: 'Define goals, target audience, page structure, content strategy and technical requirements.' },
      { n: '02', title: 'Design & Prototype', desc: 'Figma wireframes and high-fidelity designs with interactive prototypes for stakeholder sign-off.' },
      { n: '03', title: 'Build & Test', desc: 'Component-based development with cross-browser and cross-device testing throughout.' },
      { n: '04', title: 'Launch & SEO', desc: 'Staged deployment, Google Search Console setup, performance benchmarking and 60-day post-launch support.' },
    ],
    reviews: [
      { name: 'Sana Mirza', role: 'Marketing Director', company: 'HealthFirst', stars: 5, text: 'Our new site went from 1.2% to 4.8% conversion rate within the first month. Phenomenal work.' },
      { name: 'James Okafor', role: 'Founder', company: 'LegalAid Pro', stars: 5, text: 'The design is stunning and it loads instantly on mobile. We are finally proud to share our website.' },
      { name: 'Lisa Wang', role: 'Head of Growth', company: 'EdTech Hub', stars: 5, text: 'They delivered exactly on time and the site scored 97 on PageSpeed. Our SEO traffic is up 120%.' },
    ],
  },
  mobile: {
    images: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555774698-0d16ef987b14?q=80&w=1400&auto=format&fit=crop',
    ],
    tech: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo'],
    metrics: [{ n: '4.8★', l: 'Avg App Rating' }, { n: '150+', l: 'Apps Launched' }, { n: '1M+', l: 'End Users' }, { n: '6 wks', l: 'MVP Timeline' }],
    features: [
      { icon: <Smartphone className="w-5 h-5" />, title: 'Native Performance', desc: 'Smooth 60fps animations and native platform APIs for camera, GPS, biometrics and push notifications.' },
      { icon: <Shield className="w-5 h-5" />, title: 'App Store Ready', desc: 'Optimized metadata, screenshots, and compliance checks for Play Store and App Store approval.' },
      { icon: <Activity className="w-5 h-5" />, title: 'Offline-first Support', desc: 'Data sync strategies ensuring the app works flawlessly even with intermittent connectivity.' },
      { icon: <Lock className="w-5 h-5" />, title: 'Secure by Default', desc: 'SSL pinning, biometric auth, encrypted local storage and secure token handling.' },
      { icon: <BarChart3 className="w-5 h-5" />, title: 'Analytics Built-in', desc: 'Firebase Analytics, crash reporting and user journey tracking configured before launch.' },
      { icon: <Repeat className="w-5 h-5" />, title: 'OTA Updates', desc: 'Push code updates to users instantly without waiting for app store review cycles.' },
    ],
    steps: [
      { n: '01', title: 'UX Research & Wireframes', desc: 'User personas, journey maps and interactive wireframes before touching any code.' },
      { n: '02', title: 'UI Design', desc: 'Platform-specific high-fidelity Figma designs following iOS HIG and Material Design guidelines.' },
      { n: '03', title: 'Development & QA', desc: 'Sprint-based development with automated testing on real devices via BrowserStack.' },
      { n: '04', title: 'Store Submission & Support', desc: 'Complete submission handling, ASO setup and 90-day warranty post-launch.' },
    ],
    reviews: [
      { name: 'Ali Raza', role: 'Product Manager', company: 'DeliverNow', stars: 5, text: 'Our delivery app handles 5,000 orders a day without a single crash. The team knows mobile development inside out.' },
      { name: 'Priya Kapoor', role: 'CEO', company: 'FitTrack', stars: 5, text: 'The app launched in 6 weeks and has a 4.9 star rating on both stores. Incredible execution.' },
      { name: 'Marcus Flynn', role: 'CTO', company: 'EduLearn', stars: 5, text: 'Cross-platform with native feel — I didn\'t think it was possible until XB Cloud delivered it.' },
    ],
  },
  cloud: {
    images: [
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1400&auto=format&fit=crop',
    ],
    tech: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Ansible'],
    metrics: [{ n: '99.99%', l: 'Uptime SLA' }, { n: '40%', l: 'Cost Saved' }, { n: '0', l: 'Downtime Migrations' }, { n: '38', l: 'Global Regions' }],
    features: [
      { icon: <Server className="w-5 h-5" />, title: 'Multi-cloud Architecture', desc: 'Design and deploy across AWS, Azure and GCP with unified monitoring, cost controls and failover.' },
      { icon: <Shield className="w-5 h-5" />, title: 'Security & Compliance', desc: 'VPC isolation, IAM least-privilege, SOC 2 controls, WAF and DDoS protection configured by default.' },
      { icon: <TrendingUp className="w-5 h-5" />, title: 'Auto-scaling', desc: 'Traffic-driven horizontal scaling from 1 to 1,000 instances without manual intervention.' },
      { icon: <DollarSign className="w-5 h-5" />, title: 'FinOps & Cost Control', desc: 'Reserved instance planning, anomaly alerts and monthly cost review meetings included.' },
      { icon: <Activity className="w-5 h-5" />, title: 'Observability Stack', desc: 'Prometheus, Grafana and distributed tracing giving complete visibility into every request.' },
      { icon: <Database className="w-5 h-5" />, title: 'Managed Databases', desc: 'RDS, Aurora, MongoDB Atlas and Redis clusters — fully managed, backed up and monitored.' },
    ],
    steps: [
      { n: '01', title: 'Infrastructure Audit', desc: 'Review your current state — costs, performance, security gaps and scalability bottlenecks.' },
      { n: '02', title: 'Architecture Blueprint', desc: 'Cloud-native design with IaC blueprints, network diagrams and cost forecasts.' },
      { n: '03', title: 'Migration & Deployment', desc: 'Phased migration with testing at each step — zero downtime guaranteed for critical systems.' },
      { n: '04', title: 'Operations & Optimization', desc: 'Ongoing monitoring, monthly FinOps reviews and 24/7 NOC support included.' },
    ],
    reviews: [
      { name: 'Omar Sheikh', role: 'CTO', company: 'ShopGlobal', stars: 5, text: 'We cut our AWS bill by 43% in 3 months and our site is now 2x faster. XB Cloud knows cloud cost engineering.' },
      { name: 'Elena Torres', role: 'Head of DevOps', company: 'FinancePro', stars: 5, text: 'Our migration from on-premise to AWS was completely seamless. Not a single second of downtime for our trading system.' },
      { name: 'Ben Liu', role: 'VP Engineering', company: 'MediaStream', stars: 5, text: 'They designed an infrastructure that handles 10x traffic peaks during our live events without breaking a sweat.' },
    ],
  },
  ai: {
    images: [
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1400&auto=format&fit=crop',
    ],
    tech: ['OpenAI GPT-4o', 'LangChain', 'Pinecone', 'Python', 'FastAPI', 'RAG'],
    metrics: [{ n: '80%', l: 'Less Manual Work' }, { n: '3x', l: 'Faster Responses' }, { n: '95%', l: 'Accuracy Rate' }, { n: '24/7', l: 'AI Availability' }],
    features: [
      { icon: <Bot className="w-5 h-5" />, title: 'Custom-trained Models', desc: 'Fine-tuned on your proprietary data, terminology and business processes for maximum accuracy.' },
      { icon: <Lock className="w-5 h-5" />, title: 'Data Privacy', desc: 'On-premise or private cloud deployment options — your data never leaves your infrastructure.' },
      { icon: <Repeat className="w-5 h-5" />, title: 'System Integration', desc: 'Plug AI into your existing CRM, ERP, helpdesk or communication tools via robust API connectors.' },
      { icon: <BarChart3 className="w-5 h-5" />, title: 'Analytics Dashboard', desc: 'Real-time metrics on AI usage, accuracy, cost and performance with a custom business dashboard.' },
      { icon: <TrendingUp className="w-5 h-5" />, title: 'Continuous Learning', desc: 'Models retrain automatically from feedback loops, improving accuracy over time without manual intervention.' },
      { icon: <Rocket className="w-5 h-5" />, title: 'Rapid Deployment', desc: 'From proof-of-concept to production AI in as little as 2 weeks using our pre-built AI accelerators.' },
    ],
    steps: [
      { n: '01', title: 'Use Case Discovery', desc: 'We identify the highest-ROI automation opportunities in your business with an AI readiness assessment.' },
      { n: '02', title: 'Data Preparation', desc: 'Data pipeline design, cleaning, embedding generation and vector database setup for RAG systems.' },
      { n: '03', title: 'Model Development', desc: 'Fine-tuning, prompt engineering, tool-use configuration and multi-agent orchestration.' },
      { n: '04', title: 'Integration & Monitoring', desc: 'Production deployment, A/B testing, hallucination monitoring and continuous improvement loops.' },
    ],
    reviews: [
      { name: 'Fatima Al-Zahra', role: 'Head of Operations', company: 'InsureCorp', stars: 5, text: 'Our AI chatbot now handles 70% of support tickets automatically. Customer satisfaction actually went up.' },
      { name: 'Ryan Park', role: 'Founder', company: 'LegalBot', stars: 5, text: 'XB Cloud built an AI that reviews contracts faster than our senior lawyers. It\'s genuinely transformative.' },
      { name: 'Zara Ahmed', role: 'COO', company: 'RetailMax', stars: 5, text: 'The demand forecasting model they built reduced our inventory waste by 35%. ROI was achieved in month one.' },
    ],
  },
  devops: {
    images: [
      'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1629654297299-c8506221ca97?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1400&auto=format&fit=crop',
    ],
    tech: ['GitHub Actions', 'ArgoCD', 'Kubernetes', 'Terraform', 'Prometheus', 'Grafana'],
    metrics: [{ n: '40%', l: 'Faster Builds' }, { n: '99.9%', l: 'Pipeline Uptime' }, { n: '10x', l: 'Deploy Frequency' }, { n: '5min', l: 'MTTR' }],
    features: [
      { icon: <GitBranch className="w-5 h-5" />, title: 'Automated Pipelines', desc: 'Every code commit triggers automated build, test, security scan and deployment with full audit trail.' },
      { icon: <Container className="w-5 h-5" />, title: 'Container Orchestration', desc: 'Production-grade Kubernetes clusters with RBAC, network policies, resource quotas and auto-scaling.' },
      { icon: <Activity className="w-5 h-5" />, title: 'Real-time Observability', desc: 'Full-stack telemetry: logs, metrics and distributed traces in a unified Grafana dashboard.' },
      { icon: <Shield className="w-5 h-5" />, title: 'Security in the Pipeline', desc: 'SAST, secret scanning, dependency auditing and container image vulnerability scans on every build.' },
      { icon: <Rocket className="w-5 h-5" />, title: 'Zero-downtime Deploys', desc: 'Blue-green and canary release strategies with automatic rollback on failure detection.' },
      { icon: <Settings className="w-5 h-5" />, title: 'GitOps Workflow', desc: 'Declarative infrastructure and application configuration managed entirely through Git history.' },
    ],
    steps: [
      { n: '01', title: 'Pipeline Assessment', desc: 'We benchmark your current deployment speed, failure rate and mean time to recovery.' },
      { n: '02', title: 'Architecture Design', desc: 'CI/CD topology, branching strategy, environment promotion and release management design.' },
      { n: '03', title: 'Implementation', desc: 'Pipeline build, containerization, IaC authoring and monitoring stack deployment.' },
      { n: '04', title: 'Handover & Training', desc: 'Full documentation, runbooks and team training so your engineers own the system going forward.' },
    ],
    reviews: [
      { name: 'Marcus Johnson', role: 'Head of Infrastructure', company: 'FinanceFlow', stars: 5, text: 'Deployment time went from 45 minutes to under 6. That single change freed up our entire Thursday afternoon.' },
      { name: 'Sara Kim', role: 'VP Engineering', company: 'DataStream', stars: 5, text: 'Our Kubernetes setup is rock solid. Three months in with zero cluster incidents and autoscaling working perfectly.' },
      { name: 'Tom Walsh', role: 'CTO', company: 'SafePay', stars: 5, text: 'The pipeline they built has full security scanning built in. Our security team was genuinely impressed.' },
    ],
  },
  security: {
    images: [
      'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1400&auto=format&fit=crop',
    ],
    tech: ['Nessus', 'Metasploit', 'Burp Suite', 'Splunk', 'CrowdStrike', 'Wazuh'],
    metrics: [{ n: '0', l: 'Breaches on Watch', desc: '' }, { n: '24/7', l: 'SOC Monitoring' }, { n: '15min', l: 'Incident Response' }, { n: 'ISO 27001', l: 'Aligned' }],
    features: [
      { icon: <Search className="w-5 h-5" />, title: 'Penetration Testing', desc: 'Ethical hacking across web apps, APIs, mobile apps and infrastructure to find exploitable weaknesses before attackers do.' },
      { icon: <Eye className="w-5 h-5" />, title: '24/7 Threat Monitoring', desc: 'SIEM with real-time alert correlation, threat intelligence feeds and human analyst escalation.' },
      { icon: <Lock className="w-5 h-5" />, title: 'Zero-trust Architecture', desc: 'Identity-based access, micro-segmentation and continuous device trust verification across your stack.' },
      { icon: <AlertTriangle className="w-5 h-5" />, title: 'Incident Response', desc: 'Documented IR playbooks, 15-minute SLA on critical alerts and forensic analysis after every incident.' },
      { icon: <FileCode className="w-5 h-5" />, title: 'Code Security Review', desc: 'Manual and automated secure code review with developer-friendly remediation guidance.' },
      { icon: <Shield className="w-5 h-5" />, title: 'Compliance Assistance', desc: 'GDPR, ISO 27001, SOC 2, PCI-DSS gap analysis, evidence collection and audit preparation.' },
    ],
    steps: [
      { n: '01', title: 'Scope & Threat Model', desc: 'Define attack surface, business-critical assets and attacker personas based on your industry.' },
      { n: '02', title: 'Assessment & Testing', desc: 'Automated scans combined with manual penetration testing across every identified attack vector.' },
      { n: '03', title: 'Findings & Remediation', desc: 'Executive report with CVSS-scored findings, a prioritized remediation roadmap and code-level guidance.' },
      { n: '04', title: 'Ongoing Monitoring', desc: 'Continuous vulnerability scanning, 24/7 SIEM and quarterly re-testing to track security posture over time.' },
    ],
    reviews: [
      { name: 'Dr. Hassan Malik', role: 'CISO', company: 'MediTech', stars: 5, text: 'They found a critical SQL injection we had missed for 2 years. Their depth of knowledge is exceptional.' },
      { name: 'Nadia Hussain', role: 'Head of Compliance', company: 'PaySecure', stars: 5, text: 'XB Cloud helped us achieve PCI-DSS compliance in 3 months. Their report was detailed and actionable.' },
      { name: 'Carlos Rivera', role: 'CTO', company: 'LegalVault', stars: 5, text: 'Having 24/7 SOC monitoring has completely changed how our board thinks about cybersecurity risk.' },
    ],
  },
  design: {
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1586717799252-bd134ad00e26?q=80&w=1400&auto=format&fit=crop',
    ],
    tech: ['Figma', 'Adobe XD', 'Framer', 'Storybook', 'Lottie', 'GSAP'],
    metrics: [{ n: '2.8x', l: 'Higher Conversions' }, { n: '40%', l: 'Less Support Tickets' }, { n: '4.9★', l: 'Design Quality' }, { n: '48h', l: 'First Concept' }],
    features: [
      { icon: <Users className="w-5 h-5" />, title: 'User Research', desc: 'Interviews, surveys, heatmaps and usability studies to understand exactly what your users need.' },
      { icon: <PenTool className="w-5 h-5" />, title: 'High-fidelity Design', desc: 'Pixel-perfect Figma designs with real content, not placeholder text — ready for developer handoff.' },
      { icon: <Smartphone className="w-5 h-5" />, title: 'Responsive Design', desc: 'Every design created and tested at mobile, tablet and desktop breakpoints simultaneously.' },
      { icon: <Activity className="w-5 h-5" />, title: 'Motion Design', desc: 'Purposeful micro-interactions and transitions that delight users and communicate state clearly.' },
      { icon: <Grid className="w-5 h-5" />, title: 'Design System', desc: 'A tokenized, documented component library that scales with your product and keeps design consistent.' },
      { icon: <CheckCheck className="w-5 h-5" />, title: 'Accessibility (WCAG)', desc: 'AA accessibility compliance baked into every component — inclusive design for all users.' },
    ],
    steps: [
      { n: '01', title: 'Research & Discovery', desc: 'Competitor analysis, user interviews, persona creation and information architecture mapping.' },
      { n: '02', title: 'Wireframing', desc: 'Low-fidelity wireframes validated with stakeholders and target users before visual design begins.' },
      { n: '03', title: 'Visual Design', desc: 'High-fidelity screens, interactive prototypes and micro-animation specifications in Figma.' },
      { n: '04', title: 'Handoff & Support', desc: 'Developer-ready Figma files, design tokens, style guide and design QA throughout development.' },
    ],
    reviews: [
      { name: 'Layla Nasser', role: 'CEO', company: 'StyleHub', stars: 5, text: 'Our app went from 2.1 to 4.7 stars after the redesign. Users specifically mention how beautiful and easy it is to use.' },
      { name: 'James Okonkwo', role: 'CPO', company: 'HRPlatform', stars: 5, text: 'They delivered a complete design system in 3 weeks. Our engineers are now 50% faster at building new features.' },
      { name: 'Nina Schulz', role: 'Founder', company: 'MindfulAI', stars: 5, text: 'The first prototype blew our investors away in the pitch. We secured funding before writing a single line of code.' },
    ],
  },
  automation: {
    images: [
      'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1400&auto=format&fit=crop',
    ],
    tech: ['n8n', 'Zapier', 'Make', 'Python', 'WhatsApp API', 'Webhooks'],
    metrics: [{ n: '80%', l: 'Tasks Automated' }, { n: '10x', l: 'Faster Processing' }, { n: '0', l: 'Manual Errors' }, { n: '3 wks', l: 'First Automation Live' }],
    features: [
      { icon: <Workflow className="w-5 h-5" />, title: 'Process Mapping', desc: 'We document every step of your current process to identify exactly what to automate for maximum ROI.' },
      { icon: <Repeat className="w-5 h-5" />, title: '100+ Integrations', desc: 'Connect any tool in your stack — from Shopify and QuickBooks to custom in-house systems via API.' },
      { icon: <AlertTriangle className="w-5 h-5" />, title: 'Error Handling', desc: 'Every automation has built-in error handling, retry logic and alerting so nothing silently fails.' },
      { icon: <Eye className="w-5 h-5" />, title: 'Audit Logs', desc: 'Complete history of every automated action for compliance, debugging and business intelligence.' },
      { icon: <TrendingUp className="w-5 h-5" />, title: 'Scalable Design', desc: 'Automations designed to handle 10x volume without re-engineering as your business grows.' },
      { icon: <MessageSquare className="w-5 h-5" />, title: 'WhatsApp Integration', desc: 'Business-grade WhatsApp automation for order updates, reminders, OTPs and AI-powered support bots.' },
    ],
    steps: [
      { n: '01', title: 'Process Audit', desc: 'Map every manual step, calculate time cost and prioritize by automation impact and complexity.' },
      { n: '02', title: 'Automation Design', desc: 'Design the automation logic, edge cases, error flows and integration architecture.' },
      { n: '03', title: 'Build & Test', desc: 'Develop automations with extensive testing on real data before they touch production.' },
      { n: '04', title: 'Monitor & Optimize', desc: 'Ongoing monitoring, performance tuning and iterative improvement based on usage data.' },
    ],
    reviews: [
      { name: 'Ahmad Bilal', role: 'Operations Manager', company: 'QuickShip', stars: 5, text: 'They automated our order processing from 45 manual steps to zero. Our team now handles 5x more orders with the same headcount.' },
      { name: 'Samira Khan', role: 'CEO', company: 'EduReach', stars: 5, text: 'Our WhatsApp automation sends 10,000 reminders a day and our course completion rate went up 60%.' },
      { name: 'David Osei', role: 'CFO', company: 'TradeCo', stars: 5, text: 'Invoice automation alone saves us 40 hours a month. The ROI on this project was under 30 days.' },
    ],
  },
  consulting: {
    images: [
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop',
    ],
    tech: ['Cloud Strategy', 'Architecture Review', 'FinOps', 'Agile', 'ITIL', 'ISO 27001'],
    metrics: [{ n: '8+', l: 'Yrs Experience' }, { n: '500+', l: 'Projects Advised' }, { n: '3x', l: 'ROI on Consulting' }, { n: '48h', l: 'Engagement Start' }],
    features: [
      { icon: <Lightbulb className="w-5 h-5" />, title: 'Fractional CTO', desc: 'Senior technology leadership on a part-time basis — strategy, team guidance and board-level reporting.' },
      { icon: <Layers className="w-5 h-5" />, title: 'Architecture Review', desc: 'Independent assessment of your current system design with concrete, prioritized improvement recommendations.' },
      { icon: <DollarSign className="w-5 h-5" />, title: 'Technology Budgeting', desc: 'Build-vs-buy analysis, vendor negotiation support and multi-year technology investment roadmaps.' },
      { icon: <TrendingUp className="w-5 h-5" />, title: 'Transformation Roadmap', desc: 'Pragmatic digital transformation plans with phased delivery, success metrics and risk mitigation.' },
      { icon: <Users className="w-5 h-5" />, title: 'Team Augmentation', desc: 'Embed our senior engineers into your team for knowledge transfer and accelerated delivery.' },
      { icon: <CheckCheck className="w-5 h-5" />, title: 'Vendor Selection', desc: 'Objective evaluation and recommendation for cloud providers, SaaS tools and technology partners.' },
    ],
    steps: [
      { n: '01', title: 'Initial Assessment', desc: 'A structured two-week audit of your technology stack, processes, team capabilities and strategic goals.' },
      { n: '02', title: 'Strategy & Roadmap', desc: 'A board-ready strategy document with phased delivery plan, resource requirements and ROI projections.' },
      { n: '03', title: 'Guided Execution', desc: 'We work alongside your team during implementation, course-correcting and removing blockers in real time.' },
      { n: '04', title: 'Review & Iterate', desc: 'Quarterly business reviews tracking KPIs against the roadmap and adapting strategy to market changes.' },
    ],
    reviews: [
      { name: 'Ibrahim Qureshi', role: 'CEO', company: 'HealthFirst', stars: 5, text: 'Our fractional CTO from XB Cloud transformed how we think about technology. We avoided a $500k vendor mistake in month one.' },
      { name: 'Anna Bergstrom', role: 'COO', company: 'LogiSmart', stars: 5, text: 'The architecture review identified three critical single points of failure. Fixing them cost $20k. Not fixing them would have cost millions.' },
      { name: 'Michael Tan', role: 'Founder', company: 'FinEdge', stars: 5, text: 'Best consulting engagement we\'ve ever had. Actionable, specific and delivered on time. No fluff whatsoever.' },
    ],
  },
};

// ── SERVICE DETAIL PAGE (inline, no router needed) ────────────────────────────
const ServiceDetailView = ({
  catId, svcIdx, onBack, setPage
}: { catId: string, svcIdx: number, onBack: () => void, setPage: (p: string) => void }) => {
  const cat = CATEGORIES.find(c => c.id === catId)!;
  const svc = cat.sub[svcIdx];
  const detail = CATEGORY_DETAIL_DEFAULTS[catId];
  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="min-h-screen bg-light-base font-sans text-neutral-900 selection:bg-primary/20 flex flex-col">


      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-dark-base text-white pt-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-neutral-400 mb-8">
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setPage('home')}>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="hover:text-white cursor-pointer transition-colors" onClick={onBack}>Services</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary font-semibold">{svc.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Category badge */}
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5 bg-gradient-to-r ${cat.color} text-white`}>
                {cat.icon} {cat.label}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">{svc.name}</h1>
              <p className="text-lg text-neutral-400 mb-8 leading-relaxed">{svc.desc}</p>

              {/* Key metrics */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {detail.metrics.map((m: any, i: number) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-white">{m.n}</div>
                    <div className="text-xs text-neutral-400 font-medium">{m.l}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button onClick={() => setPage('contact')} className="px-6 py-3.5 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
                  Request a Free Quote <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-6 py-3.5 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all flex items-center gap-2">
                  <Play className="w-4 h-4 text-secondary" /> Watch Demo
                </button>
              </div>
            </div>

            {/* Product screenshot in browser frame */}
            <div className="relative">
              <div className="bg-[#1E2433] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                {/* Browser chrome */}
                <div className="bg-[#111520] px-4 py-3 flex items-center gap-3 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <div className="flex-1 bg-white/10 rounded-md px-3 py-1 text-xs text-neutral-400 font-mono">
                    app.xbcloudtech.com/{catId}
                  </div>
                  <ExternalLink className="w-4 h-4 text-neutral-500" />
                </div>
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={detail.images[activeImg]}
                    alt={svc.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
              </div>
              {/* Image switcher thumbnails */}
              <div className="flex gap-2 mt-3 justify-center">
                {detail.images.map((_: string, i: number) => (
                  <button key={i} onClick={() => setActiveImg(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${activeImg === i ? 'bg-primary scale-125' : 'bg-white/30'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────────────────── */}
      <div className="bg-neutral-900 py-4 border-y border-neutral-800">
        <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="text-xs text-neutral-500 font-bold uppercase tracking-widest shrink-0">Tech Stack</span>
          {detail.tech.map((t: string) => (
            <span key={t} className="text-sm font-semibold text-neutral-300">{t}</span>
          ))}
        </div>
      </div>

      {/* ── KEY FEATURES ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs text-primary font-bold uppercase tracking-widest mb-3">What's Included</div>
            <h2 className="text-[36px] font-bold text-neutral-900">Key Features & Capabilities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detail.features.map((f: any, i: number) => (
              <div key={i} className="group bg-light-base rounded-2xl p-7 border border-neutral-100 hover:border-primary/40 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all">
                  {f.icon}
                </div>
                <h3 className="font-bold text-neutral-900 mb-2 text-lg">{f.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT GALLERY ──────────────────────────────────── */}
      <section className="py-24 bg-light-base">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs text-primary font-bold uppercase tracking-widest mb-3">Product Gallery</div>
            <h2 className="text-[36px] font-bold text-neutral-900">See it in Action</h2>
            <p className="text-neutral-500 mt-4">Real screenshots from projects we've delivered for clients in this category.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {detail.images.map((img: string, i: number) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-md border border-neutral-200 aspect-video hover:shadow-xl transition-all group cursor-pointer">
                <img src={img} alt={`Screenshot ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="py-24 bg-dark-base text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <div className="text-xs text-secondary font-bold uppercase tracking-widest mb-3">Our Process</div>
            <h2 className="text-[36px] font-bold">How We Deliver</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {detail.steps.map((s: any, i: number) => (
              <div key={i} className="relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors">
                <div className="text-6xl font-black text-white/5 absolute top-4 right-4 leading-none">{s.n}</div>
                <div className="w-10 h-10 bg-primary/20 border border-primary/40 rounded-xl flex items-center justify-center text-secondary text-sm font-black mb-5">
                  {s.n}
                </div>
                <h4 className="font-bold text-white mb-2">{s.title}</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ──────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs text-primary font-bold uppercase tracking-widest mb-3">Client Reviews</div>
            <h2 className="text-[36px] font-bold text-neutral-900">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {detail.reviews.map((r: any, i: number) => (
              <div key={i} className="bg-light-base rounded-2xl p-8 border border-neutral-100 hover:shadow-lg transition-all relative">
                <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {Array(r.stars).fill(0).map((_: any, j: number) => (
                    <Star key={j} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-neutral-700 text-sm leading-relaxed mb-6 italic">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-200">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-neutral-900">{r.name}</div>
                    <div className="text-xs text-neutral-500">{r.role} · {r.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => setPage('portfolio')} className="text-primary font-semibold hover:underline flex items-center gap-1 mx-auto">
              View all case studies <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary/40 pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to get started with {svc.name}?</h2>
              <p className="text-white/80 text-lg">Get a detailed proposal within 48 hours — no commitment required.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button onClick={() => setPage('contact')} className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-neutral-100 transition-all shadow-xl flex items-center gap-2">
                Request a Proposal <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={onBack} className="px-8 py-4 bg-white/20 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/30 transition-all">
                ← Back to Services
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

// ── MAIN SERVICES LISTING PAGE ────────────────────────────────────────────────
const ServicesPage = () => {
  const navigate = useNavigate();
  const setPage = (p: string) => navigate(p === "home" ? "/" : "/" + p);
  const [active, setActive] = useState('software');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<{ catId: string, svcIdx: number } | null>(null);

  // If a service detail is selected, render the detail view
  if (selectedService) {
    return (
      <ServiceDetailView
        catId={selectedService.catId}
        svcIdx={selectedService.svcIdx}
        onBack={() => setSelectedService(null)}
        setPage={setPage}
      />
    );
  }

  const current = CATEGORIES.find(c => c.id === active)!;

  const scrollTab = (id: string) => {
    setActive(id);
    const el = document.getElementById('tab-' + id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  };

  return (
    <div className="min-h-screen bg-light-base font-sans text-neutral-900 selection:bg-primary/20 flex flex-col">


      {/* ── PAGE HEADER ─────────────────────────────────────── */}
      <header className="bg-dark-base text-white pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex items-center gap-2 text-sm text-neutral-400 mb-8 font-medium">
            <span className="hover:text-white cursor-pointer transition-colors" onClick={() => setPage('home')}>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-secondary font-semibold">Services</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-[52px] md:text-[64px] font-bold leading-[1.05] tracking-tight mb-6">
              Full-Spectrum<br />
              <span className="text-transparent bg-clip-text" style={{backgroundImage:'linear-gradient(90deg,#0B5FFF,#00D4FF)'}}>
                IT Solutions
              </span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed mb-8">
              From custom software and mobile apps to cloud infrastructure, AI automation and cybersecurity — every service your business needs, under one roof.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => setPage('contact')} className="px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center gap-2 shadow-lg shadow-primary/20">
                Get a Free Quote <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => setPage('portfolio')} className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-semibold hover:bg-white/20 transition-all backdrop-blur-sm">
                View Case Studies
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-10 gap-y-4 mt-14 pt-10 border-t border-white/10">
            {[['10+','Service Areas'],['500+','Projects Delivered'],['120+','Team Members'],['38','Countries Served']].map(([n,l]) => (
              <div key={l}>
                <div className="text-2xl font-bold text-white">{n}</div>
                <div className="text-xs text-neutral-400 font-medium uppercase tracking-wider">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ── CATEGORY TABS ───────────────────────────────────── */}
      <div className="bg-white border-b border-neutral-200 sticky top-[65px] z-40 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-3" style={{scrollbarWidth:'none'}}>
            {CATEGORIES.map(cat => (
              <button
                id={'tab-' + cat.id}
                key={cat.id}
                onClick={() => scrollTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                  active === cat.id
                    ? 'bg-primary text-white shadow-md shadow-primary/20'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICE DETAIL PANEL ─────────────────────────────── */}
      <section className="py-20 flex-grow">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-16">
            <div className="flex items-start gap-6">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${current.color} flex items-center justify-center text-white shadow-xl shrink-0`}>
                {current.icon}
              </div>
              <div>
                <div className="text-xs text-primary font-bold uppercase tracking-widest mb-2">
                  Service Category {String(CATEGORIES.findIndex(c=>c.id===active)+1).padStart(2,'0')}
                </div>
                <h2 className="text-[36px] font-bold text-neutral-900 leading-tight">{current.label}</h2>
                <p className="text-secondary font-semibold mt-1">{current.tagline}</p>
              </div>
            </div>
            <div className="max-w-md">
              <p className="text-neutral-600 leading-relaxed">{current.description}</p>
              <button onClick={() => setPage('contact')} className="mt-5 px-5 py-2.5 bg-primary text-white rounded-xl font-semibold text-sm hover:bg-primary/90 transition-all flex items-center gap-2">
                Discuss this service <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {current.sub.map((svc, idx) => (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCard(`${active}-${idx}`)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group bg-white rounded-2xl p-7 border border-neutral-200 hover:border-primary/40 hover:shadow-xl transition-all flex flex-col gap-5"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                  hoveredCard === `${active}-${idx}` ? `bg-gradient-to-br ${current.color} text-white` : 'bg-neutral-100 text-neutral-600'
                }`}>
                  {svc.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors">{svc.name}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{svc.desc}</p>
                </div>
                <div className="mt-auto pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService({ catId: active, svcIdx: idx })}
                    className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all hover:underline"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setPage('contact')}
                    className="text-xs font-bold text-neutral-400 hover:text-primary transition-colors uppercase tracking-wider"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ALL CATEGORIES OVERVIEW ──────────────────────────── */}
      <section className="py-24 bg-white border-t border-neutral-200">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-xs text-primary font-bold uppercase tracking-widest mb-3">Everything We Do</div>
            <h2 className="text-[36px] font-bold text-neutral-900">All 10 Service Areas</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => { scrollTab(cat.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="group flex flex-col items-center gap-3 p-5 bg-light-base rounded-2xl border border-neutral-100 hover:border-primary/40 hover:shadow-lg transition-all text-center"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-md`}>
                  {cat.icon}
                </div>
                <div className="text-sm font-bold text-neutral-800 group-hover:text-primary transition-colors leading-tight">{cat.label}</div>
                <div className="text-xs text-neutral-400">{cat.sub.length} services</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────── */}
      <section className="py-24 bg-dark-base text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <div className="text-xs text-secondary font-bold uppercase tracking-widest mb-3">How We Work</div>
            <h2 className="text-[36px] font-bold">Our Delivery Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { n:'01', icon: <Search className="w-6 h-6" />, title: 'Discovery & Planning', desc: 'Requirement workshops, technical scope, timeline and resource planning.' },
              { n:'02', icon: <Pen className="w-6 h-6" />, title: 'Design & Architecture', desc: 'System design, UI wireframes, technology selection and infrastructure blueprints.' },
              { n:'03', icon: <Code2 className="w-6 h-6" />, title: 'Build & Test', desc: 'Agile sprints, automated testing, code reviews and continuous integration.' },
              { n:'04', icon: <Zap className="w-6 h-6" />, title: 'Deploy & Support', desc: 'Zero-downtime deployment, monitoring, SLA-backed support and iterations.' },
            ].map((step, i) => (
              <div key={i} className="relative bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors">
                <div className="text-5xl font-black text-white/5 absolute top-4 right-4 leading-none">{step.n}</div>
                <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-xl flex items-center justify-center text-secondary mb-5">{step.icon}</div>
                <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                <p className="text-sm text-neutral-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary/50 pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Ready to build something great?</h2>
              <p className="text-white/80 text-lg">Get a detailed proposal within 48 hours — no commitment required.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button onClick={() => navigate('/contact')} className="px-8 py-4 bg-white text-primary rounded-xl font-bold hover:bg-neutral-100 transition-all shadow-xl flex items-center gap-2">
                Request a Proposal <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => navigate('/pricing')} className="px-8 py-4 bg-white/20 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/30 transition-all">
                View Pricing
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
