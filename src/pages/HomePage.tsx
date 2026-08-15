/* eslint-disable */
// @ts-nocheck
import React, { useState } from 'react';
import {
  Cloud, ChevronDown, Menu, ChevronRight, Globe, Terminal,
  Briefcase, ArrowRight, Shield, Server, Zap, Database,
  CheckCircle2, Star, Users, TrendingUp, Award, Play, X
} from 'lucide-react';

const HomePage = ({ setPage }: { setPage: (page: string) => void }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-light-base font-sans text-neutral-900 selection:bg-primary/20">

      {/* ── NAVBAR ──────────────────────────────── */}
      <nav className="bg-dark-base border-b border-neutral-900 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
              <Cloud className="w-6 h-6 text-secondary" />
              <span className="font-logo text-xl font-bold text-white tracking-tight">XB Cloud Tech</span>
            </div>
            <div className="hidden md:flex items-center gap-1">
              {[
                { label: 'Services', page: 'services' },
                { label: 'Pricing', page: 'pricing' },
                { label: 'Case Studies', page: 'portfolio' },
                { label: 'About', page: 'about' },
                { label: 'Blog', page: 'blog' },
              ].map(item => (
                <button key={item.page} onClick={() => setPage(item.page)}
                  className="px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors rounded-md hover:bg-white/5">
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setPage('contact')} className="hidden md:block text-sm font-medium text-neutral-300 hover:text-white transition-colors">Contact Sales</button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg font-semibold text-sm transition-all hover:bg-primary/90 shadow-md">
              Get Started Free
            </button>
            <button className="md:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden max-w-[1200px] mx-auto pt-4 pb-2 flex flex-col gap-2 border-t border-white/10 mt-4">
            {['services','pricing','portfolio','about','blog','contact'].map(p => (
              <button key={p} onClick={() => { setPage(p); setMobileOpen(false); }}
                className="text-left capitalize px-3 py-2 text-neutral-300 hover:text-white text-sm font-medium rounded-md hover:bg-white/5 transition-colors">
                {p}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ────────────────────────────────── */}
      <section className="bg-dark-base text-white pt-24 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(11,95,255,0.15),transparent_60%)]" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-semibold text-secondary mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
              99.99% Uptime SLA — Trusted by 500+ Businesses
            </div>
            <h1 className="text-[56px] md:text-[72px] font-bold leading-[1.08] tracking-tight mb-8">
              Cloud Infrastructure<br />
              <span className="text-transparent bg-clip-text" style={{backgroundImage:'linear-gradient(90deg,#0B5FFF,#00D4FF)'}}>Built for Scale</span>
            </h1>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Enterprise-grade cloud hosting, DevOps automation, and IT security solutions — all under one roof. Deliver faster, scale smarter, stay protected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button onClick={() => setPage('pricing')} className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-base transition-all hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30 active:scale-95 flex items-center gap-2">
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </button>
              <button onClick={() => setVideoOpen(true)} className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold text-base transition-all hover:bg-white/20 backdrop-blur-sm flex items-center gap-2">
                <Play className="w-5 h-5 text-secondary" /> Watch Demo
              </button>
            </div>
            <div className="flex items-center justify-center gap-8 mt-14 pt-14 border-t border-white/10">
              {[{ n: '500+', l: 'Businesses Served' }, { n: '99.99%', l: 'Uptime SLA' }, { n: '24/7', l: 'Expert Support' }, { n: '3x', l: 'Faster Deployment' }].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">{s.n}</div>
                  <div className="text-xs text-neutral-400 font-medium uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoOpen && (
        <div className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-6" onClick={() => setVideoOpen(false)}>
          <div className="bg-dark-base rounded-2xl overflow-hidden w-full max-w-3xl shadow-2xl" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <span className="text-white font-semibold">XB Cloud Tech — Product Demo</span>
              <button onClick={() => setVideoOpen(false)} className="text-neutral-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <div className="aspect-video bg-neutral-900 flex items-center justify-center">
              <div className="text-center text-neutral-500">
                <Play className="w-16 h-16 mx-auto mb-4 text-primary opacity-50" />
                <p className="text-sm">Demo video would load here</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── TRUST LOGOS ─────────────────────────── */}
      <section className="bg-white py-12 border-b border-neutral-100">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-neutral-400 mb-8">Trusted by forward-thinking companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-50 grayscale">
            {['ShopGlobal', 'MediTech', 'EduPlatform', 'FinanceFlow', 'RetailMax', 'TechCorp'].map(logo => (
              <div key={logo} className="text-xl font-bold text-neutral-600 tracking-tight">{logo}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────── */}
      <section className="py-28 bg-light-base">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs text-primary font-bold uppercase tracking-widest mb-4">What We Offer</div>
            <h2 className="text-[40px] font-bold text-neutral-900 mb-4 leading-tight">Everything you need to run in the cloud</h2>
            <p className="text-neutral-500 text-lg">From bare-metal compute to managed Kubernetes, security audits to 24/7 NOC support — we've got every layer covered.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Server className="w-7 h-7" />, title: 'Cloud Hosting & Compute', desc: 'Scalable VPS, dedicated servers, and bare-metal instances with NVMe SSDs and 40 Gbps networking.', tag: 'Most Popular' },
              { icon: <Shield className="w-7 h-7" />, title: 'Cybersecurity & Compliance', desc: 'WAF, DDoS mitigation, penetration testing, and SOC 2 compliance assistance for regulated industries.', tag: null },
              { icon: <Zap className="w-7 h-7" />, title: 'DevOps & CI/CD Automation', desc: 'Pipeline design, Kubernetes orchestration, infrastructure-as-code, and 24/7 pipeline monitoring.', tag: null },
              { icon: <Database className="w-7 h-7" />, title: 'Backup & Disaster Recovery', desc: 'Automated daily backups, geo-redundant storage, and RTO/RPO-backed recovery guarantees.', tag: null },
              { icon: <Globe className="w-7 h-7" />, title: 'Managed IT Support', desc: 'Dedicated account engineers, 15-min critical response SLA, and proactive infrastructure monitoring.', tag: null },
              { icon: <TrendingUp className="w-7 h-7" />, title: 'Cloud Migration', desc: 'Zero-downtime lift-and-shift migrations from AWS, Azure, on-premise, or any legacy environment.', tag: null },
            ].map((svc, i) => (
              <div key={i} onClick={() => setPage('services')} className="group bg-white rounded-2xl p-8 border border-neutral-200 hover:border-primary/40 hover:shadow-xl transition-all cursor-pointer relative overflow-hidden">
                {svc.tag && <div className="absolute top-4 right-4 px-2.5 py-1 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full">{svc.tag}</div>}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  {svc.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3">{svc.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-4">{svc.desc}</p>
                <span className="text-sm font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight className="w-4 h-4" /></span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => setPage('services')} className="px-6 py-3 border border-neutral-300 text-neutral-700 font-semibold rounded-xl hover:border-primary hover:text-primary transition-colors">
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* ── WHY XB CLOUD ────────────────────────── */}
      <section className="py-28 bg-dark-base text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs text-secondary font-bold uppercase tracking-widest mb-4">Why XB Cloud Tech</div>
              <h2 className="text-[40px] font-bold leading-tight mb-6">Infrastructure that works as hard as you do</h2>
              <p className="text-neutral-400 text-lg mb-10">We're not just a hosting company. We're an extension of your engineering team — available 24/7 to design, deploy, and defend your infrastructure.</p>
              <div className="space-y-5">
                {[
                  { title: 'Dedicated Cloud Engineers', desc: 'Every account gets a named engineer who understands your stack.' },
                  { title: 'No Vendor Lock-in', desc: 'Open standards, portable workloads. Move freely, anytime.' },
                  { title: 'Transparent Pricing', desc: 'No hidden egress fees. What you see is what you pay.' },
                  { title: 'Global Anycast Network', desc: '12 data center regions with automatic failover.' },
                ].map((f, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{f.title}</div>
                      <div className="text-sm text-neutral-400">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={() => setPage('about')} className="mt-10 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all flex items-center gap-2">
                About Our Team <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Award className="w-8 h-8" />, n: '8+', l: 'Years in Business' },
                { icon: <Users className="w-8 h-8" />, n: '120+', l: 'Team Members' },
                { icon: <Globe className="w-8 h-8" />, n: '38', l: 'Countries Served' },
                { icon: <Star className="w-8 h-8" />, n: '4.9/5', l: 'Customer Rating' },
              ].map((s, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
                  <div className="text-primary mb-3">{s.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">{s.n}</div>
                  <div className="text-xs text-neutral-400 font-medium">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING TEASER ──────────────────────── */}
      <section className="py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs text-primary font-bold uppercase tracking-widest mb-4">Simple Pricing</div>
            <h2 className="text-[40px] font-bold text-neutral-900 mb-4 leading-tight">Transparent plans for every stage</h2>
            <p className="text-neutral-500 text-lg">No surprise bills. No hidden fees. Scale up or down anytime.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Starter', price: '$49', desc: 'Perfect for startups and small teams.', features: ['2 vCPU / 4GB RAM', '100 GB SSD Storage', '3 TB Bandwidth', 'Email Support', 'Daily Backups'], cta: 'Start Free Trial', highlight: false },
              { name: 'Business', price: '$149', desc: 'For growing teams with serious workloads.', features: ['8 vCPU / 16GB RAM', '500 GB NVMe SSD', '10 TB Bandwidth', 'Priority 24/7 Support', 'Managed Kubernetes', 'DDoS Protection'], cta: 'Start Free Trial', highlight: true },
              { name: 'Enterprise', price: 'Custom', desc: 'Bespoke solutions for large organizations.', features: ['Unlimited Compute', 'Dedicated Hardware', 'Custom SLA', 'Dedicated Engineer', 'Compliance Assistance', 'Private Network'], cta: 'Contact Sales', highlight: false },
            ].map((plan, i) => (
              <div key={i} onClick={() => setPage(plan.cta === 'Contact Sales' ? 'contact' : 'pricing')}
                className={`rounded-2xl p-8 border cursor-pointer transition-all relative overflow-hidden ${plan.highlight ? 'bg-primary border-primary text-white shadow-2xl shadow-primary/20 scale-105' : 'bg-light-base border-neutral-200 hover:border-primary/50 hover:shadow-lg'}`}>
                {plan.highlight && <div className="absolute top-4 right-4 px-2.5 py-1 bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">Most Popular</div>}
                <h3 className={`text-lg font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-neutral-900'}`}>{plan.name}</h3>
                <p className={`text-sm mb-4 ${plan.highlight ? 'text-white/70' : 'text-neutral-500'}`}>{plan.desc}</p>
                <div className={`text-4xl font-bold mb-1 ${plan.highlight ? 'text-white' : 'text-neutral-900'}`}>{plan.price}<span className="text-base font-normal opacity-60">{plan.price !== 'Custom' ? '/mo' : ''}</span></div>
                <div className={`h-px my-6 ${plan.highlight ? 'bg-white/20' : 'bg-neutral-200'}`} />
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className={`flex items-center gap-2 text-sm font-medium ${plan.highlight ? 'text-white/90' : 'text-neutral-700'}`}>
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${plan.highlight ? 'text-white' : 'text-success'}`} /> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all ${plan.highlight ? 'bg-white text-primary hover:bg-neutral-100' : 'bg-primary text-white hover:bg-primary/90'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => setPage('pricing')} className="text-primary font-semibold hover:underline">View full pricing & add-ons →</button>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────── */}
      <section className="py-28 bg-light-base">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs text-primary font-bold uppercase tracking-widest mb-4">Client Stories</div>
            <h2 className="text-[40px] font-bold text-neutral-900 leading-tight">Businesses that run on XB Cloud</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { quote: "We moved 80% of our infrastructure to XB Cloud in 72 hours with zero downtime. Their migration team is exceptional.", name: "James Park", title: "CTO, ShopGlobal", stars: 5 },
              { quote: "The 15-minute SLA response time isn't marketing — it's real. Every single critical incident has been resolved on time.", name: "Dr. Amina Hassan", title: "Head of IT, MediTech", stars: 5 },
              { quote: "XB Cloud's DevOps team cut our deployment time from 45 minutes to under 6. That's a business-changing improvement.", name: "Marcus Li", title: "VP Engineering, FinanceFlow", stars: 5 },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm hover:shadow-md transition-all">
                <div className="flex gap-0.5 mb-4">
                  {Array(t.stars).fill(0).map((_, j) => <Star key={j} className="w-4 h-4 fill-warning text-warning" />)}
                </div>
                <blockquote className="text-neutral-700 text-sm leading-relaxed mb-6">"{t.quote}"</blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{t.name[0]}</div>
                  <div>
                    <div className="font-bold text-sm text-neutral-900">{t.name}</div>
                    <div className="text-xs text-neutral-500">{t.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button onClick={() => setPage('portfolio')} className="text-primary font-semibold hover:underline">Read full case studies →</button>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────── */}
      <section className="py-24 bg-dark-base relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/10 pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
          <h2 className="text-[40px] font-bold text-white mb-6 leading-tight">Ready to modernize your infrastructure?</h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">Join 500+ companies who trust XB Cloud Tech to keep their business online, secure, and growing.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setPage('pricing')} className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-base hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center gap-2 mx-auto sm:mx-0">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => setPage('contact')} className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold text-base hover:bg-white/20 transition-all backdrop-blur-sm mx-auto sm:mx-0">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────── */}
      <footer className="bg-dark-base border-t border-neutral-900 text-white">
        <div className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <Cloud className="w-6 h-6 text-secondary" />
              <span className="font-logo text-xl font-bold text-white tracking-tight">XB Cloud Tech</span>
            </div>
            <p className="text-sm text-neutral-400 max-w-xs">Enterprise cloud infrastructure & IT solutions. Powering businesses at any scale since 2018.</p>
            <div className="flex gap-3">
              {['Twitter', 'LinkedIn', 'GitHub'].map(s => (
                <a key={s} href="#" className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-xs font-bold text-neutral-400 hover:bg-primary hover:text-white transition-colors">{s[0]}</a>
              ))}
            </div>
          </div>
          {[
            { title: 'Services', links: ['Cloud Hosting', 'Cybersecurity', 'DevOps', 'Backup & Recovery', 'Managed IT'] },
            { title: 'Company', links: ['About Us', 'Careers', 'Blog', 'Case Studies', 'Contact'] },
            { title: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'SLA', 'GDPR'] },
          ].map(col => (
            <div key={col.title}>
              <h5 className="font-semibold text-sm text-white mb-5">{col.title}</h5>
              <ul className="space-y-3">
                {col.links.map(link => <li key={link}><a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">{link}</a></li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-neutral-500">
            <p>© 2026 XB Cloud Tech, Inc. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success"></span>
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
