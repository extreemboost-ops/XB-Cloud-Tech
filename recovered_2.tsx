import React, { useState } from 'react';
import { 
  Cloud, ChevronDown, Menu, ChevronRight, 
  Server, Shield, Zap, Globe, Terminal, Linkedin, 
  ArrowRight, CheckCircle2, Lock, Cpu, Database, 
  LifeBuoy, RefreshCw, Plus, Minus, Layers
} from 'lucide-react';

// --- Shared Components ---

const Navbar = ({ setPage }: { setPage: (page: string) => void }) => (
  <nav className="bg-dark-base border-b border-neutral-900 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
    <div className="flex items-center gap-8 container-custom w-full max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('services')}>
            <Cloud className="w-6 h-6 text-secondary" />
            <span className="font-logo text-xl font-bold text-white tracking-tight">XB Cloud Tech</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <button onClick={() => setPage('services')} className="px-4 py-2 text-sm font-medium text-white transition-colors rounded-md bg-white/10 flex items-center gap-1">
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <a href="#" className="px-4 py-2 text-sm font-medium text-neutral-200 hover:text-white transition-colors rounded-md hover:bg-white/5">Solutions</a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-neutral-200 hover:text-white transition-colors rounded-md hover:bg-white/5">Pricing</a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-neutral-200 hover:text-white transition-colors rounded-md hover:bg-white/5">Company</a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-neutral-200 hover:text-white transition-colors rounded-md hover:bg-white/5">Docs</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hidden md:block text-sm font-medium text-neutral-200 hover:text-white transition-colors">Sign In</a>
          <button className="px-4 py-2 bg-primary text-white rounded-lg font-semibold text-sm transition-all hover:bg-primary/90 flex items-center gap-2">
            Console
          </button>
          <button className="md:hidden text-white p-2">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-dark-base text-white">
    <div className="container-custom py-16 lg:py-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
      <div className="col-span-2 lg:col-span-2 space-y-6">
        <div className="flex items-center gap-2">
          <Cloud className="w-6 h-6 text-secondary" />
          <span className="font-logo text-xl font-bold text-white tracking-tight">XB Cloud Tech</span>
        </div>
        <p className="text-sm text-neutral-400 max-w-sm">
          Building the foundation for the next generation of digital experiences. High-performance cloud infrastructure for modern teams.
        </p>
        <div className="flex items-center gap-4 text-neutral-400">
          <a href="#" className="hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><Terminal className="w-5 h-5" /></a>
          <a href="#" className="hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>
      <div>
        <h5 className="font-semibold mb-6">Products</h5>
        <ul className="space-y-4 text-sm text-neutral-400">
          <li><a href="#" className="hover:text-white transition-colors">Compute</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Storage</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Networking</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Kubernetes</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold mb-6">Developers</h5>
        <ul className="space-y-4 text-sm text-neutral-400">
          <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
          <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
          <li><a href="#" className="hover:text-white transition-colors">CLI Tool</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-semibold mb-6">Company</h5>
        <ul className="space-y-4 text-sm text-neutral-400">
          <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/10 bg-black/20">
      <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <p>© 2026 XB Cloud Tech. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const CTABanner = () => (
  <section className="py-24 bg-white relative overflow-hidden border-t border-neutral-100">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
    <div className="container-custom relative z-10 text-center">
      <h2 className="text-h2 mb-6 max-w-2xl mx-auto">Ready to scale your infrastructure?</h2>
      <p className="text-body-lg text-neutral-500 mb-10 max-w-xl mx-auto">
        Join hundreds of businesses who trust XB Cloud Tech. Start building today with $100 in free credits for new accounts.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white rounded-lg font-semibold text-base transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95 flex items-center justify-center gap-2">
          Create Free Account
        </button>
        <button className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-neutral-200 text-neutral-900 rounded-lg font-semibold text-base transition-all hover:border-primary hover:text-primary hover:bg-primary/5 active:scale-95 flex items-center justify-center gap-2">
          Contact Sales
        </button>
      </div>
    </div>
  </section>
);

// --- Pages ---

const ServicesListingPage = ({ setPage }: { setPage: (page: string) => void }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [activeFAQ, setActiveFAQ] = useState<number | null>(0);

  const tabs = ['All', 'Cloud Hosting', 'Security', 'DevOps', 'Support', 'Backup & Recovery'];
  
  const services = [
    {
      id: 'cloud-hosting',
      title: 'High-Performance Cloud Hosting',
      category: 'Cloud Hosting',
      icon: <Server className="w-6 h-6" />,
      desc: 'Deploy resilient, scalable virtual machines globally in seconds. Our bare-metal and virtualized compute options ensure you have the exact power you need.',
      features: ['NVMe SSD Storage', 'Dedicated vCPUs', 'Auto-scaling groups', 'Global edge network'],
      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'enterprise-security',
      title: 'Enterprise-Grade Security',
      category: 'Security',
      icon: <Lock className="w-6 h-6" />,
      desc: 'Protect your infrastructure with military-grade encryption, advanced DDoS mitigation, and continuous threat monitoring built directly into the network layer.',
      features: ['Zero-trust architecture', 'Automated threat response', 'SOC2 & HIPAA Compliant', 'Identity & Access Management'],
      img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'devops',
      title: 'Managed Kubernetes & DevOps',
      category: 'DevOps',
      icon: <Layers className="w-6 h-6" />,
      desc: 'Streamline your deployment pipelines with fully managed Kubernetes clusters, automated CI/CD integration, and comprehensive observability.',
      features: ['One-click K8s deployment', 'Prometheus & Grafana built-in', 'GitOps ready', 'Container registry'],
      img: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'database',
      title: 'Managed Cloud Databases',
      category: 'Cloud Hosting',
      icon: <Database className="w-6 h-6" />,
      desc: 'Worry-free database hosting for PostgreSQL, MySQL, and Redis. We handle the backups, replication, and scaling so you can focus on your app.',
      features: ['Automated daily backups', 'High-availability clustering', 'Point-in-time recovery', 'Query performance insights'],
      img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'backup',
      title: 'Automated Backup & Disaster Recovery',
      category: 'Backup & Recovery',
      icon: <RefreshCw className="w-6 h-6" />,
      desc: 'Ensure business continuity with automated, geographically distributed backups and lightning-fast restoration protocols.',
      features: ['Cross-region replication', 'Immutable storage options', 'Custom retention policies', '15-minute RPO guarantees'],
      img: 'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?q=80&w=1000&auto=format&fit=crop'
    },
    {
      id: 'support',
      title: '24/7 Priority Engineering Support',
      category: 'Support',
      icon: <LifeBuoy className="w-6 h-6" />,
      desc: 'Skip the generic helpdesk. Connect directly with cloud engineers who understand your stack and can resolve complex infrastructure issues immediately.',
      features: ['15-minute response SLA', 'Dedicated technical account manager', 'Architecture reviews', 'Slack integration'],
      img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  const filteredServices = activeTab === 'All' ? services : services.filter(s => s.category === activeTab);

  const faqs = [
    { q: "What is your uptime guarantee?", a: "We provide an industry-leading 99.99% uptime SLA across all our core compute, storage, and networking services, backed by service credits." },
    { q: "Can I migrate from another cloud provider easily?", a: "Yes. We offer free migration assistance for enterprise customers, and our standard CLI tools make it easy to import existing virtual machine images and database dumps." },
    { q: "How does your pricing compare to legacy cloud providers?", a: "On average, XB Cloud Tech is 30-40% more cost-effective than legacy providers due to transparent pricing, lack of egress fees, and included standard features like basic DDoS protection." },
    { q: "Do you offer compliance certifications?", a: "Absolutely. Our data centers and services are audited regularly and comply with SOC2 Type II, ISO 27001, HIPAA, and GDPR standards." },
    { q: "How do managed databases handle scaling?", a: "You can seamlessly scale your database vertically (more CPU/RAM) with zero downtime, or set up horizontal read-replicas across different regions with a single click." },
    { q: "Is technical support included?", a: "Basic support is included for all accounts. We also offer Premium and Enterprise support tiers for businesses requiring guaranteed 15-minute response times and dedicated Slack channels." }
  ];

  return (
    <div className="min-h-screen bg-light-base flex flex-col">
      <Navbar setPage={setPage} />

      {/* Header */}
      <header className="bg-dark-base text-white pt-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50"></div>
        <div className="container-custom relative z-10 text-center">
          <div className="flex items-center justify-center text-sm font-medium text-neutral-400 mb-8 space-x-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 w-max mx-auto">
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => setPage('home')}>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Services</span>
          </div>
          <h1 className="text-h1 mb-6">Our Cloud & IT Services</h1>
          <p className="text-body-lg text-neutral-400 max-w-2xl mx-auto">
            From highly scalable compute to zero-trust security and managed Kubernetes, discover the tools you need to build the future.
          </p>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-white border-b border-neutral-200 sticky top-[73px] z-40 shadow-sm">
        <div className="container-custom py-4 overflow-x-auto scroll-container flex gap-2">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                activeTab === tab 
                  ? 'bg-primary text-white shadow-md shadow-primary/20' 
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Service Blocks */}
      <section className="py-20 bg-light-base">
        <div className="container-custom space-y-24">
          {filteredServices.map((service, idx) => (
            <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`${idx % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  {service.icon}
                </div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-neutral-200 text-neutral-700 text-xs font-semibold uppercase tracking-wider">
                    {service.category}
                  </span>
                </div>
                <h2 className="text-h2 mb-4">{service.title}</h2>
                <p className="text-body-lg text-neutral-500 mb-8">{service.desc}</p>
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-neutral-700 font-medium">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4">
                  <button onClick={() => setPage('service-detail')} className="px-6 py-3 bg-primary text-white rounded-lg font-semibold text-sm transition-all hover:bg-primary/90 flex items-center gap-2 shadow-lg shadow-primary/20">
                    Explore Service <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="px-6 py-3 bg-transparent border border-neutral-200 text-neutral-900 rounded-lg font-semibold text-sm transition-all hover:border-primary hover:text-primary hover:bg-primary/5">
                    Get Quote
                  </button>
                </div>
              </div>
              <div className={`relative ${idx % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-neutral-200 relative group">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white border-t border-neutral-200">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-h2 mb-4">Compare Support Tiers</h2>
            <p className="text-body text-neutral-500">Choose the right level of support and infrastructure management for your team's needs.</p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-neutral-50">
                  <th className="p-4 md:p-6 text-sm font-bold text-neutral-900 border-b border-neutral-200 w-1/3">Features</th>
                  <th className="p-4 md:p-6 text-sm font-bold text-neutral-900 border-b border-neutral-200 w-2/9 text-center">Standard<br/><span className="text-neutral-500 font-normal mt-1 block">Included</span></th>
                  <th className="p-4 md:p-6 text-sm font-bold text-primary border-b border-neutral-200 w-2/9 text-center">Professional<br/><span className="text-neutral-500 font-normal mt-1 block">Starts $29/mo</span></th>
                  <th className="p-4 md:p-6 text-sm font-bold text-neutral-900 border-b border-neutral-200 w-2/9 text-center">Enterprise<br/><span className="text-neutral-500 font-normal mt-1 block">Custom Pricing</span></th>
                </tr>
              </thead>
              <tbody className="text-sm font-medium text-neutral-700">
                <tr className="border-b border-neutral-100 hover:bg-neutral-50/50 transition-colors">
                  <td className="p-4 md:p-6">Support Channels</td>
                  <td className="p-4 md:p-6 text-center text-neutral-500">Email, Tickets</td>
                  <td className="p-4 md:p-6 text-center font-bold text-neutral-900">Email, Chat, Phone</td>
                  <td className="p-4 md:p-6 text-center font-bold text-primary">Dedicated Slack Channel</td>
                </tr>
                <tr className="border-b border-neutral-100 bg-neutral-50/30 hover:bg-neutral-50/80 transition-colors">
                  <td className="p-4 md:p-6">Response Time SLA</td>
                  <td className="p-4 md:p-6 text-center text-neutral-500">24 hours</td>
                  <td className="p-4 md:p-6 text-center font-bold text-neutral-900">1 hour</td>
                  <td className="p-4 md:p-6 text-center font-bold text-primary">15 minutes</td>
                </tr>
                <tr className="border-b border-neutral-100 hover:bg-neutral-50/50 transition-colors">
                  <td className="p-4 md:p-6">Architecture Reviews</td>
                  <td className="p-4 md:p-6 text-center text-neutral-400"><Minus className="w-5 h-5 mx-auto" /></td>
                  <td className="p-4 md:p-6 text-center text-neutral-500">Quarterly</td>
                  <td className="p-4 md:p-6 text-center font-bold text-neutral-900">Monthly</td>
                </tr>
                <tr className="border-b border-neutral-100 bg-neutral-50/30 hover:bg-neutral-50/80 transition-colors">
                  <td className="p-4 md:p-6">Dedicated Account Manager</td>
                  <td className="p-4 md:p-6 text-center text-neutral-400"><Minus className="w-5 h-5 mx-auto" /></td>
                  <td className="p-4 md:p-6 text-center text-neutral-400"><Minus className="w-5 h-5 mx-auto" /></td>
                  <td className="p-4 md:p-6 text-center text-success"><CheckCircle2 className="w-5 h-5 mx-auto" /></td>
                </tr>
                <tr className="hover:bg-neutral-50/50 transition-colors">
                  <td className="p-4 md:p-6">Custom Contract / Invoicing</td>
                  <td className="p-4 md:p-6 text-center text-neutral-400"><Minus className="w-5 h-5 mx-auto" /></td>
                  <td className="p-4 md:p-6 text-center text-neutral-400"><Minus className="w-5 h-5 mx-auto" /></td>
                  <td className="p-4 md:p-6 text-center text-success"><CheckCircle2 className="w-5 h-5 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-light-base">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-4">Frequently Asked Questions</h2>
            <p className="text-body text-neutral-500">Everything you need to know about our services and billing.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300">
                <button 
                  onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                >
                  <span className="font-semibold text-neutral-900 pr-8">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${activeFAQ === idx ? 'bg-primary/10 text-primary' : 'bg-neutral-100 text-neutral-500'}`}>
                    {activeFAQ === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFAQ === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 pt-0 text-neutral-500 text-sm leading-relaxed border-t border-neutral-100 mt-2 pt-4">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
};


const ServiceDetailPage = ({ setPage }: { setPage: (page: string) => void }) => {
  return (
    <div className="min-h-screen bg-light-base flex flex-col">
      <Navbar setPage={setPage} />

      {/* Hero */}
      <header className="bg-dark-base text-white pt-16 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark-base via-dark-base/90 to-transparent"></div>
        
        <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center text-sm font-medium text-neutral-400 mb-8 space-x-2">
              <span className="hover:text-white transition-colors cursor-pointer" onClick={() => setPage('home')}>Home</span>
              <ChevronRight className="w-4 h-4" />
              <span className="hover:text-white transition-colors cursor-pointer" onClick={() => setPage('services')}>Services</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">Cloud Hosting</span>
            </div>
            
            <div className="w-16 h-16 bg-primary/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-primary mb-6 border border-primary/30">
              <Server className="w-8 h-8 text-secondary" />
            </div>
            <h1 className="text-h1 mb-6">High-Performance Cloud Hosting</h1>
            <p className="text-body-lg text-neutral-400 mb-8 max-w-xl">
              Deploy highly available, scalable virtual machines globally in under 60 seconds. Powered by dedicated vCPUs, NVMe storage, and a 400Gbps redundant network.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white rounded-lg font-semibold text-base transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-2">
                Deploy Now
              </button>
              <button className="w-full sm:w-auto px-8 py-3.5 bg-white/10 text-white border border-white/20 rounded-lg font-semibold text-base transition-all hover:bg-white/20 flex items-center justify-center gap-2">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Key Benefits */}
      <section className="py-20 -mt-16 relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-neutral-100">
              <Zap className="w-8 h-8 text-secondary mb-4" />
              <h4 className="text-lg font-bold text-neutral-900 mb-2">Lightning Fast</h4>
              <p className="text-sm text-neutral-500">100% NVMe local storage ensuring exceptional read/write speeds for intensive applications.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-neutral-100">
              <Globe className="w-8 h-8 text-primary mb-4" />
              <h4 className="text-lg font-bold text-neutral-900 mb-2">Global Network</h4>
              <p className="text-sm text-neutral-500">Deploy instances across 32 availability zones for ultra-low latency worldwide.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-neutral-100">
              <Shield className="w-8 h-8 text-success mb-4" />
              <h4 className="text-lg font-bold text-neutral-900 mb-2">Built-in DDoS</h4>
              <p className="text-sm text-neutral-500">Always-on network layer protection against volumetric attacks included at no extra cost.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-neutral-100">
              <Cpu className="w-8 h-8 text-warning mb-4" />
              <h4 className="text-lg font-bold text-neutral-900 mb-2">Dedicated Power</h4>
              <p className="text-sm text-neutral-500">No noisy neighbors. Get guaranteed computing power with dedicated CPU options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white border-y border-neutral-200">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-caption text-primary mb-4 block">Deployment Flow</span>
            <h2 className="text-h2 mb-4">How it works</h2>
            <p className="text-body text-neutral-500">Go from sign up to deployed infrastructure in minutes, not days.</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-neutral-200 -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {[
                { step: "01", title: "Select Region", desc: "Choose from 32 global data centers to place your app near your users." },
                { step: "02", title: "Choose Plan", desc: "Select the compute, memory, and storage configuration you need." },
                { step: "03", title: "Add Services", desc: "Attach block storage, load balancers, or private networking." },
                { step: "04", title: "Deploy", desc: "Click deploy. Your instance will be ready and accessible in seconds." }
              ].map((item, i) => (
                <div key={i} className="bg-light-base md:bg-transparent p-6 md:p-0 rounded-xl border border-neutral-200 md:border-none flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-primary/20 flex items-center justify-center font-bold text-xl text-primary mb-6 shadow-sm">
                    {item.step}
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900 mb-2 bg-white px-2">{item.title}</h4>
                  <p className="text-sm text-neutral-500 bg-white px-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Snippet */}
      <section className="py-24 bg-light-base">
        <div className="container-custom max-w-5xl">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div>
              <h2 className="text-h2 mb-2">Transparent Pricing</h2>
              <p className="text-body text-neutral-500">Pay only for what you use, billed by the hour.</p>
            </div>
            <button className="px-6 py-3 bg-transparent border border-neutral-300 text-neutral-900 rounded-lg font-semibold text-sm transition-all hover:border-primary hover:text-primary bg-white shadow-sm">
              View Full Pricing
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Standard */}
            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm flex flex-col">
              <h3 className="text-h4 text-neutral-900 mb-2">Standard Droplet</h3>
              <p className="text-sm text-neutral-500 mb-6">For blogs, web apps, and testing.</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-neutral-900">$5</span>
                <span className="text-neutral-500 font-medium">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> 1 vCPU
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> 1 GB RAM
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> 25 GB NVMe SSD
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> 1000 GB Transfer
                </li>
              </ul>
            </div>
            {/* Pro */}
            <div className="bg-dark-base text-white rounded-2xl p-8 border border-primary shadow-xl flex flex-col relative transform md:-translate-y-4">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-bl-lg rounded-tr-xl">Most Popular</div>
              <h3 className="text-h4 mb-2">General Purpose</h3>
              <p className="text-sm text-neutral-400 mb-6">For production applications and DBs.</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-white">$60</span>
                <span className="text-neutral-400 font-medium">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-2 text-sm text-neutral-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" /> 4 vCPUs (Dedicated)
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" /> 16 GB RAM
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" /> 100 GB NVMe SSD
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-200 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" /> 5000 GB Transfer
                </li>
              </ul>
              <button className="w-full px-5 py-3 bg-primary text-white rounded-lg font-semibold text-sm transition-all hover:bg-primary/90">
                Deploy General Purpose
              </button>
            </div>
            {/* CPU Optimized */}
            <div className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm flex flex-col">
              <h3 className="text-h4 text-neutral-900 mb-2">CPU-Optimized</h3>
              <p className="text-sm text-neutral-500 mb-6">For CI/CD, video encoding, & analytics.</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-neutral-900">$120</span>
                <span className="text-neutral-500 font-medium">/mo</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> 8 vCPUs (Dedicated)
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> 16 GB RAM
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> 150 GB NVMe SSD
                </li>
                <li className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" /> 6000 GB Transfer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-white border-t border-neutral-200">
        <div className="container-custom">
          <h2 className="text-h3 mb-8 text-neutral-900">Explore Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group cursor-pointer bg-light-base rounded-2xl p-6 border border-neutral-200 hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="text-h4 mb-2">Managed Databases</h4>
              <p className="text-sm text-neutral-500 mb-4">Pair your compute instances with highly available, managed PostgreSQL or MySQL.</p>
              <span className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight className="w-4 h-4" /></span>
            </div>
            
            <div className="group cursor-pointer bg-light-base rounded-2xl p-6 border border-neutral-200 hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="text-h4 mb-2">Cloud Firewalls</h4>
              <p className="text-sm text-neutral-500 mb-4">Secure your infrastructure by dropping unwanted traffic at the network layer.</p>
              <span className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight className="w-4 h-4" /></span>
            </div>

            <div className="group cursor-pointer bg-light-base rounded-2xl p-6 border border-neutral-200 hover:border-primary/50 hover:shadow-lg transition-all">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-primary mb-4 shadow-sm group-hover:scale-110 transition-transform">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h4 className="text-h4 mb-2">Automated Backups</h4>
              <p className="text-sm text-neutral-500 mb-4">Enable daily automated system-level backups for your instances with one click.</p>
              <span className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight className="w-4 h-4" /></span>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </div>
  );
};


const App = () => {
  const [currentPage, setCurrentPage] = useState('services');

  // Simple router
  if (currentPage === 'service-detail') {
    return <ServiceDetailPage setPage={setCurrentPage} />;
  }

  // Default
  return <ServicesListingPage setPage={setCurrentPage} />;
};

export default App;
