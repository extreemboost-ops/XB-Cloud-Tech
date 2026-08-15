import React, { useState } from 'react';
import { 
  Cloud, ChevronDown, Menu, ChevronRight, 
  Server, Shield, Zap, Globe, Terminal, Linkedin, 
  ArrowRight, CheckCircle2, Lock, Cpu, Database, 
  LifeBuoy, RefreshCw, Plus, Minus, Layers, X, Info
} from 'lucide-react';

// --- Shared Components ---

const Navbar = ({ setPage }: { setPage: (page: string) => void }) => (
  <nav className="bg-dark-base border-b border-neutral-900 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
    <div className="flex items-center gap-8 container-custom w-full max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('pricing')}>
            <Cloud className="w-6 h-6 text-secondary" />
            <span className="font-logo text-xl font-bold text-white tracking-tight">XB Cloud Tech</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <a href="#" className="px-4 py-2 text-sm font-medium text-neutral-200 hover:text-white transition-colors rounded-md hover:bg-white/5">Products</a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-neutral-200 hover:text-white transition-colors rounded-md hover:bg-white/5">Solutions</a>
            <button onClick={() => setPage('pricing')} className="px-4 py-2 text-sm font-medium text-white transition-colors rounded-md bg-white/10">Pricing</button>
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
  <footer className="bg-dark-base text-white mt-auto">
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

// --- Pricing Page ---

const PricingPage = ({ setPage }: { setPage: (page: string) => void }) => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [currency, setCurrency] = useState<'USD' | 'PKR'>('USD');
  const [activeFAQ, setActiveFAQ] = useState<number | null>(0);

  // Conversion rates (example)
  const exchangeRate = 280; // 1 USD = 280 PKR

  const tiers = [
    {
      name: 'Starter',
      desc: 'Perfect for small projects, blogs, and testing environments.',
      priceUSD: { monthly: 15, annual: 150 },
      features: [
        { name: '2 vCPUs', inc: true },
        { name: '4GB RAM', inc: true },
        { name: '50GB NVMe Storage', inc: true },
        { name: '1TB Bandwidth', inc: true },
        { name: 'Standard Support', inc: true },
        { name: 'Automated Backups', inc: false },
        { name: 'DDoS Protection', inc: false }
      ],
      popular: false
    },
    {
      name: 'Business',
      desc: 'Ideal for production web apps, databases, and scaling teams.',
      priceUSD: { monthly: 49, annual: 490 },
      features: [
        { name: '8 vCPUs (Dedicated)', inc: true },
        { name: '16GB RAM', inc: true },
        { name: '200GB NVMe Storage', inc: true },
        { name: '5TB Bandwidth', inc: true },
        { name: 'Priority Support', inc: true },
        { name: 'Automated Backups', inc: true },
        { name: 'DDoS Protection', inc: true }
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      desc: 'For high-traffic platforms requiring extreme performance.',
      priceUSD: { monthly: 199, annual: 1990 },
      features: [
        { name: '32 vCPUs (Dedicated)', inc: true },
        { name: '64GB RAM', inc: true },
        { name: '1TB NVMe Storage', inc: true },
        { name: 'Unlimited Bandwidth', inc: true },
        { name: '24/7 Dedicated Support', inc: true },
        { name: 'Automated Backups', inc: true },
        { name: 'Advanced DDoS & WAF', inc: true }
      ],
      popular: false
    }
  ];

  const getPrice = (tier: typeof tiers[0]) => {
    const amountUSD = isAnnual ? tier.priceUSD.annual : tier.priceUSD.monthly;
    if (currency === 'PKR') {
      return (amountUSD * exchangeRate).toLocaleString();
    }
    return amountUSD;
  };

  const getPeriod = () => isAnnual ? '/yr' : '/mo';
  const getSymbol = () => currency === 'USD' ? '$' : 'Rs ';

  const faqs = [
    { q: "Can I change my plan later?", a: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be prorated for the remaining time on your current billing cycle." },
    { q: "How does the annual discount work?", a: "By choosing annual billing, you pay for 10 months upfront and get 2 months entirely free. It's automatically applied when you select the 'Yearly' billing toggle." },
    { q: "Are there any hidden egress or bandwidth fees?", a: "No hidden fees. If you exceed your plan's bandwidth allocation, we charge a flat, transparent rate of $0.01 per GB globally." },
    { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and wire transfers for Enterprise annual contracts." },
    { q: "Can I pay in PKR locally?", a: "Yes! We support local bank transfers and local card payments in Pakistani Rupees without additional conversion charges." }
  ];

  const tableFeatures = [
    { category: 'Compute & Performance' },
    { name: 'vCPUs', tiers: ['2 Shared', '8 Dedicated', '32 Dedicated'] },
    { name: 'Memory (RAM)', tiers: ['4 GB', '16 GB', '64 GB'] },
    { name: 'NVMe SSD Storage', tiers: ['50 GB', '200 GB', '1 TB'] },
    { name: 'Uptime SLA', tiers: ['99.9%', '99.99%', '99.999%'] },
    { category: 'Networking' },
    { name: 'Bandwidth', tiers: ['1 TB', '5 TB', 'Unlimited'] },
    { name: 'Global Edge CDN', tiers: [false, true, true] },
    { name: 'VPC & Private IP', tiers: [true, true, true] },
    { name: 'Load Balancers', tiers: ['Optional Add-on', '1 Included', 'Unlimited'] },
    { category: 'Security & Backups' },
    { name: 'Automated Backups', tiers: ['Add-on ($5/mo)', 'Included (Daily)', 'Included (Hourly)'] },
    { name: 'Network DDoS Protection', tiers: [false, true, true] },
    { name: 'Web Application Firewall', tiers: [false, false, true] },
    { name: 'Custom IAM Roles', tiers: [false, true, true] },
    { category: 'Support & Services' },
    { name: 'Technical Support', tiers: ['Email Only (24h)', 'Priority (4h SLA)', 'Dedicated Slack (15m SLA)'] },
    { name: 'Architecture Reviews', tiers: [false, false, 'Quarterly'] },
    { name: 'Migration Assistance', tiers: [false, 'Basic', 'White-glove'] },
  ];

  return (
    <div className="min-h-screen bg-light-base flex flex-col font-sans text-neutral-900 selection:bg-primary/20">
      <Navbar setPage={setPage} />

      {/* Header & Controls */}
      <header className="bg-dark-base text-white pt-20 pb-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-30 mix-blend-overlay"></div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-h1 mb-6">Simple, Transparent Pricing</h1>
          <p className="text-body-lg text-neutral-400 mb-10 max-w-2xl mx-auto">
            No hidden egress fees, no complex calculators. Predictable pricing designed to scale alongside your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {/* Billing Toggle */}
            <div className="flex items-center gap-3 bg-white/10 p-1.5 rounded-xl border border-white/10">
              <button 
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${!isAnnual ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-300 hover:text-white'}`}
              >
                Monthly
              </button>
              <button 
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 ${isAnnual ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-300 hover:text-white'}`}
              >
                Yearly
                <span className={`px-2 py-0.5 rounded text-xs ${isAnnual ? 'bg-success/20 text-success' : 'bg-success/30 text-success-light'}`}>Save 20%</span>
              </button>
            </div>

            {/* Currency Switcher */}
            <div className="flex items-center gap-2 bg-white/10 p-1.5 rounded-xl border border-white/10">
              <button 
                onClick={() => setCurrency('USD')}
                className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${currency === 'USD' ? 'bg-primary text-white shadow-sm' : 'text-neutral-300 hover:text-white'}`}
              >
                USD
              </button>
              <button 
                onClick={() => setCurrency('PKR')}
                className={`px-4 py-2.5 rounded-lg text-sm font-bold transition-all ${currency === 'PKR' ? 'bg-primary text-white shadow-sm' : 'text-neutral-300 hover:text-white'}`}
              >
                PKR
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Pricing Cards */}
      <section className="-mt-32 relative z-20 pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {tiers.map((tier, idx) => (
              <div 
                key={idx} 
                className={`rounded-2xl flex flex-col relative transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-white border-2 border-primary shadow-2xl md:-translate-y-4' 
                    : 'bg-white border border-neutral-200 shadow-md'
                }`}
              >
                {tier.popular && (
                  <div className="absolute top-0 inset-x-0 flex justify-center -mt-3.5">
                    <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8 border-b border-neutral-100">
                  <h3 className="text-h3 mb-2">{tier.name}</h3>
                  <p className="text-sm text-neutral-500 h-10 mb-6">{tier.desc}</p>
                  
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-semibold text-neutral-500">{getSymbol()}</span>
                    <span className="text-5xl font-bold text-neutral-900 tracking-tight">{getPrice(tier)}</span>
                    <span className="text-neutral-500 font-medium">{getPeriod()}</span>
                  </div>
                  {isAnnual && (
                    <div className="mt-2 text-sm font-medium text-success">
                      Billed annually ({getSymbol()}{(currency === 'USD' ? tier.priceUSD.annual : tier.priceUSD.annual * exchangeRate).toLocaleString()})
                    </div>
                  )}
                </div>

                <div className="p-8 flex-grow flex flex-col">
                  <ul className="space-y-4 mb-8 flex-grow">
                    {tier.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        {feat.inc ? (
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-neutral-300 shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm font-medium ${feat.inc ? 'text-neutral-700' : 'text-neutral-400'}`}>
                          {feat.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full px-5 py-3.5 rounded-lg font-semibold text-base transition-all flex items-center justify-center gap-2 ${
                    tier.popular 
                      ? 'bg-primary text-white hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20' 
                      : 'bg-neutral-100 text-neutral-900 hover:bg-neutral-200'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-white border-y border-neutral-200">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-h2 mb-4">Optional Add-ons</h2>
            <p className="text-body text-neutral-500">Customize your plan with additional resources.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Database className="w-6 h-6"/>, title: "Extra NVMe Storage", price: "$0.10 / GB", desc: "Attach high-speed block storage volumes instantly." },
              { icon: <Globe className="w-6 h-6"/>, title: "Dedicated IP", price: "$5 / mo", desc: "Reserved static IPv4 addresses for your instances." },
              { icon: <RefreshCw className="w-6 h-6"/>, title: "Automated Backups", price: "+20% of instance", desc: "Daily snapshots with 7-day automated retention." },
              { icon: <LifeBuoy className="w-6 h-6"/>, title: "Premium Support", price: "$99 / mo", desc: "Guaranteed 4-hour response time and architecture reviews." }
            ].map((addon, idx) => (
              <div key={idx} className="bg-light-base rounded-xl p-6 border border-neutral-200 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary mb-4 shadow-sm">
                  {addon.icon}
                </div>
                <h4 className="font-bold text-neutral-900 mb-1">{addon.title}</h4>
                <div className="text-primary font-semibold text-sm mb-3">{addon.price}</div>
                <p className="text-sm text-neutral-500">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Feature Comparison Table */}
      <section className="py-24 bg-light-base">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-h2 mb-4">Compare all features</h2>
            <p className="text-body text-neutral-500">A detailed breakdown of everything included in our plans.</p>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead className="bg-white sticky top-0 z-10 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                  <tr>
                    <th className="p-4 md:p-6 w-1/3"></th>
                    <th className="p-4 md:p-6 text-center w-2/9 border-b-2 border-transparent">
                      <div className="font-bold text-neutral-900 text-lg">Starter</div>
                    </th>
                    <th className="p-4 md:p-6 text-center w-2/9 border-b-2 border-primary bg-primary/5">
                      <div className="font-bold text-primary text-lg">Business</div>
                    </th>
                    <th className="p-4 md:p-6 text-center w-2/9 border-b-2 border-transparent">
                      <div className="font-bold text-neutral-900 text-lg">Enterprise</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {tableFeatures.map((row, idx) => {
                    if (row.category) {
                      return (
                        <tr key={idx} className="bg-neutral-50/80 border-y border-neutral-200">
                          <td colSpan={4} className="p-4 font-bold text-neutral-900 uppercase tracking-wider text-xs">
                            {row.category}
                          </td>
                        </tr>
                      );
                    }
                    
                    return (
                      <tr key={idx} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                        <td className="p-4 font-medium text-neutral-700 flex items-center gap-2">
                          {row.name}
                          <Info className="w-3.5 h-3.5 text-neutral-400 cursor-help" />
                        </td>
                        {row.tiers?.map((val, tIdx) => (
                          <td key={tIdx} className={`p-4 text-center ${tIdx === 1 ? 'bg-primary/[0.02]' : ''}`}>
                            {typeof val === 'boolean' ? (
                              val ? <CheckCircle2 className="w-5 h-5 text-primary mx-auto" /> : <Minus className="w-5 h-5 text-neutral-300 mx-auto" />
                            ) : (
                              <span className="font-medium text-neutral-600">{val}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-white border-t border-neutral-200">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-h2 mb-4">Pricing & Billing FAQs</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-light-base border border-neutral-200 rounded-xl overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none hover:bg-neutral-100 transition-colors"
                >
                  <span className="font-semibold text-neutral-900 pr-8">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${activeFAQ === idx ? 'bg-primary/10 text-primary' : 'bg-white border border-neutral-200 text-neutral-500'}`}>
                    {activeFAQ === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeFAQ === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 pt-0 text-neutral-600 text-sm leading-relaxed border-t border-neutral-200 mt-2 pt-4 bg-white">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="py-24 bg-dark-base relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-dark-base/80 to-transparent"></div>
        <div className="container-custom relative z-10">
          <div className="bg-primary/10 border border-primary/20 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm">
            <div className="text-center md:text-left">
              <h2 className="text-h2 text-white mb-4">Need a custom plan?</h2>
              <p className="text-body-lg text-neutral-300 max-w-xl">
                For massive scale, specific compliance requirements, or custom SLAs, our enterprise architects can build a solution tailored to your exact needs.
              </p>
            </div>
            <button className="whitespace-nowrap px-8 py-4 bg-white text-primary rounded-xl font-bold text-base transition-all hover:bg-neutral-100 hover:shadow-xl hover:shadow-white/10 active:scale-95 flex items-center gap-2">
              Contact Sales <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('pricing');

  if (currentPage === 'pricing') {
    return <PricingPage setPage={setCurrentPage} />;
  }
  
  // Minimal fallback for preview
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">XB Cloud Tech</h1>
      <button onClick={() => setCurrentPage('pricing')} className="mt-4 px-4 py-2 bg-primary text-white rounded">Go to Pricing</button>
    </div>
  );
};

export default App;
