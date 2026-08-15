/* eslint-disable */
// @ts-nocheck
import React from 'react';
import { 
  Cloud, 
  ChevronDown, 
  Menu, 
  ChevronRight,
  Shield, 
  Zap,
  Globe,
  Users,
  Target,
  Heart,
  Lightbulb,
  Briefcase,
  Server,
  ArrowRight,
  Terminal
} from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-light-base font-sans text-neutral-900 selection:bg-primary/20">
      
      {/* 1. Navbar */}
      <nav className="bg-dark-base border-b border-neutral-900 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-8 container-custom w-full max-w-[1200px] mx-auto">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 cursor-pointer">
                <Cloud className="w-6 h-6 text-secondary" />
                <span className="font-logo text-xl font-bold text-white tracking-tight">XB Cloud Tech</span>
              </div>
              <div className="hidden md:flex items-center gap-1">
                <a href="#" className="px-4 py-2 text-sm font-medium text-neutral-200 hover:text-white transition-colors flex items-center gap-1 rounded-md hover:bg-white/5">
                  Products <ChevronDown className="w-4 h-4" />
                </a>
                <a href="#" className="px-4 py-2 text-sm font-medium text-neutral-200 hover:text-white transition-colors rounded-md hover:bg-white/5">Solutions</a>
                <a href="#" className="px-4 py-2 text-sm font-medium text-neutral-200 hover:text-white transition-colors rounded-md hover:bg-white/5">Pricing</a>
                <a href="#" className="px-4 py-2 text-sm font-medium text-white transition-colors rounded-md bg-white/10">Company</a>
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

      {/* 2. Page Header */}
      <header className="bg-dark-base text-white pt-16 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-base opacity-90"></div>
        
        <div className="container-custom relative z-10 flex flex-col items-center text-center">
          <div className="flex items-center text-sm font-medium text-neutral-400 mb-8 space-x-2 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">About Us</span>
          </div>
          
          <h1 className="text-h1 mb-6 max-w-4xl mx-auto">
            Powering Businesses with Reliable Cloud Infrastructure
          </h1>
          <p className="text-body-lg text-neutral-400 max-w-2xl mx-auto">
            We are building the backbone of the modern internet. Our mission is to democratize high-performance cloud infrastructure, making it accessible, secure, and scalable for engineering teams worldwide.
          </p>
        </div>
      </header>

      {/* 3. Our Story */}
      <section className="py-24 bg-white relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-caption text-primary">Our Story</span>
              <h2 className="text-h2 text-neutral-900">Built by engineers, for engineers.</h2>
              <p className="text-body text-neutral-500">
                Founded in 2018, XB Cloud Tech began with a simple observation: cloud infrastructure had become overly complex, painfully expensive, and increasingly difficult to manage.
              </p>
              <p className="text-body text-neutral-500">
                Our founders, a team of distributed systems engineers, set out to build the cloud provider they always wished existed. One that prioritized developer experience, transparent pricing, and uncompromising performance without the vendor lock-in of legacy providers.
              </p>
              <p className="text-body text-neutral-500">
                Today, we serve thousands of businesses—from nimble startups to global enterprises—providing them with the resilient infrastructure they need to scale their products effortlessly.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop" 
                  alt="Server Room" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg border border-neutral-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-neutral-900">12 Global Regions</div>
                    <div className="text-sm text-neutral-500 font-medium">99.99% Uptime SLA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="py-16 bg-light-base">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-10 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-h3 mb-4">Our Mission</h3>
              <p className="text-body text-neutral-500">
                To simplify cloud infrastructure, empowering developers and businesses to build, deploy, and scale their applications with unmatched speed, reliability, and security.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-10 border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                <Lightbulb className="w-7 h-7" />
              </div>
              <h3 className="text-h3 mb-4">Our Vision</h3>
              <p className="text-body text-neutral-500">
                To become the global standard for frictionless cloud computing, where infrastructure effortlessly adapts to innovation, making complex global deployments as simple as pushing code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="py-24 bg-white border-y border-neutral-200">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-caption text-primary mb-4 block">Core Principles</span>
            <h2 className="text-h2 mb-4">The Values That Drive Us</h2>
            <p className="text-body text-neutral-500">
              Our culture is built on these foundational pillars. They guide every product we launch and every customer interaction we have.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-8 rounded-2xl border border-neutral-100 bg-light-base/50 hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary mb-6 shadow-sm border border-neutral-100 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-h4 mb-3">Reliability First</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">
                When you build on us, you trust us with your business. We engineer for maximum resilience, ensuring your services stay online when it matters most.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-neutral-100 bg-light-base/50 hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-secondary mb-6 shadow-sm border border-neutral-100 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-h4 mb-3">Continuous Innovation</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">
                We never stop pushing boundaries. We obsess over milliseconds and relentlessly optimize our stack to bring you the best performance in the industry.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-neutral-100 bg-light-base/50 hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-neutral-900 mb-6 shadow-sm border border-neutral-100 group-hover:scale-110 transition-transform">
                <Server className="w-6 h-6" />
              </div>
              <h4 className="text-h4 mb-3">Uncompromising Security</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Security is not an add-on; it is built into the bedrock of our platform. We operate with a zero-trust architecture to keep your data secure globally.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-neutral-100 bg-light-base/50 hover:border-primary/20 hover:bg-white hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-success mb-6 shadow-sm border border-neutral-100 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6" />
              </div>
              <h4 className="text-h4 mb-3">Customer-First</h4>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Your success is our success. We provide transparent pricing, clear documentation, and world-class engineering support to help you scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Timeline / Milestones */}
      <section className="py-24 bg-light-base">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-caption text-primary mb-4 block">Our Journey</span>
            <h2 className="text-h2 mb-4">Milestones & Growth</h2>
          </div>

          <div className="max-w-3xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 -translate-x-1/2"></div>
            
            <div className="space-y-12 relative">
              {/* Milestone 1 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group">
                <div className="hidden md:block w-5/12 text-right">
                  <div className="text-2xl font-bold text-neutral-900">2018</div>
                  <div className="text-sm text-primary font-semibold uppercase tracking-wider">The Beginning</div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary -translate-x-1/2 mt-1.5 md:mt-0 shadow-[0_0_0_4px_rgba(11,95,255,0.1)] group-hover:scale-125 transition-transform z-10"></div>
                <div className="pl-12 md:pl-0 w-full md:w-5/12 text-left">
                  <div className="md:hidden mb-1">
                    <span className="text-xl font-bold text-neutral-900 mr-2">2018</span>
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider">The Beginning</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm relative">
                    {/* Arrow for desktop */}
                    <div className="hidden md:block absolute top-1/2 right-full w-4 h-4 bg-white border-l border-b border-neutral-200 -translate-y-1/2 translate-x-2.5 rotate-45"></div>
                    <h4 className="text-h4 mb-2">Company Founded</h4>
                    <p className="text-sm text-neutral-500">XB Cloud Tech is incorporated in San Francisco with a seed round of $2M to build the MVP of our compute platform.</p>
                  </div>
                </div>
              </div>

              {/* Milestone 2 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group">
                <div className="pl-12 md:pl-0 w-full md:w-5/12 text-left md:text-right md:order-1">
                  <div className="md:hidden mb-1">
                    <span className="text-xl font-bold text-neutral-900 mr-2">2020</span>
                    <span className="text-xs text-secondary font-semibold uppercase tracking-wider">Traction</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm relative">
                    {/* Arrow for desktop */}
                    <div className="hidden md:block absolute top-1/2 left-full w-4 h-4 bg-white border-l border-b border-neutral-200 -translate-y-1/2 -translate-x-2.5 -rotate-[135deg]"></div>
                    <h4 className="text-h4 mb-2">First 10,000 Clusters</h4>
                    <p className="text-sm text-neutral-500">We hit a major milestone of 10k active Kubernetes clusters running globally and expanded to European regions.</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-secondary -translate-x-1/2 mt-1.5 md:mt-0 shadow-[0_0_0_4px_rgba(0,212,255,0.1)] group-hover:scale-125 transition-transform z-10 md:order-2"></div>
                <div className="hidden md:block w-5/12 text-left md:order-3">
                  <div className="text-2xl font-bold text-neutral-900">2020</div>
                  <div className="text-sm text-secondary font-semibold uppercase tracking-wider">Traction</div>
                </div>
              </div>

              {/* Milestone 3 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group">
                <div className="hidden md:block w-5/12 text-right">
                  <div className="text-2xl font-bold text-neutral-900">2023</div>
                  <div className="text-sm text-success font-semibold uppercase tracking-wider">Scaling Up</div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-success -translate-x-1/2 mt-1.5 md:mt-0 shadow-[0_0_0_4px_rgba(16,185,129,0.1)] group-hover:scale-125 transition-transform z-10"></div>
                <div className="pl-12 md:pl-0 w-full md:w-5/12 text-left">
                  <div className="md:hidden mb-1">
                    <span className="text-xl font-bold text-neutral-900 mr-2">2023</span>
                    <span className="text-xs text-success font-semibold uppercase tracking-wider">Scaling Up</span>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm relative">
                    <div className="hidden md:block absolute top-1/2 right-full w-4 h-4 bg-white border-l border-b border-neutral-200 -translate-y-1/2 translate-x-2.5 rotate-45"></div>
                    <h4 className="text-h4 mb-2">Series C & Edge Network</h4>
                    <p className="text-sm text-neutral-500">Secured $150M Series C funding and launched our global Edge Compute network across 45 locations.</p>
                  </div>
                </div>
              </div>

              {/* Milestone 4 */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 group">
                <div className="pl-12 md:pl-0 w-full md:w-5/12 text-left md:text-right md:order-1">
                  <div className="md:hidden mb-1">
                    <span className="text-xl font-bold text-neutral-900 mr-2">Today</span>
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider">The Future</span>
                  </div>
                  <div className="bg-dark-base text-white p-6 rounded-xl border border-neutral-800 shadow-lg relative">
                    <div className="hidden md:block absolute top-1/2 left-full w-4 h-4 bg-dark-base border-r border-t border-neutral-800 -translate-y-1/2 -translate-x-2.5 rotate-45"></div>
                    <h4 className="text-h4 mb-2">Enterprise Ready</h4>
                    <p className="text-sm text-neutral-400">Serving Fortune 500 companies with dedicated AI infrastructure, achieving carbon-neutral operations globally.</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full bg-primary border-4 border-white -translate-x-1/2 mt-1 md:mt-0 shadow-[0_0_0_4px_rgba(11,95,255,0.3)] group-hover:scale-125 transition-transform z-10 md:order-2"></div>
                <div className="hidden md:block w-5/12 text-left md:order-3">
                  <div className="text-2xl font-bold text-primary">Today</div>
                  <div className="text-sm text-neutral-500 font-semibold uppercase tracking-wider">The Future</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. Leadership Team */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-caption text-primary mb-4 block">Leadership</span>
            <h2 className="text-h2 mb-4">Meet the Team</h2>
            <p className="text-body text-neutral-500">
              Guided by veterans of the cloud computing industry, our leadership team is dedicated to building the most reliable infrastructure on the market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Chief Executive Officer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop" },
              { name: "David Chen", role: "Chief Technology Officer", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop" },
              { name: "Elena Rodriguez", role: "VP of Engineering", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop" },
              { name: "Marcus Johnson", role: "Head of Infrastructure", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop" }
            ].map((leader, idx) => (
              <div key={idx} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-base/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors">
                      <Briefcase className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <h4 className="text-lg font-bold text-neutral-900">{leader.name}</h4>
                <p className="text-sm font-medium text-neutral-500">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Stats Strip */}
      <section className="bg-dark-base relative overflow-hidden py-20 border-y border-neutral-900">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            <div className="text-center px-4">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-mono">2018</div>
              <div className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Year Founded</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-mono">450+</div>
              <div className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Global Team</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-mono">32</div>
              <div className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Regions Served</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-mono">99.99%</div>
              <div className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA Banner */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-h2 mb-6 max-w-2xl mx-auto">Join hundreds of businesses who trust XB Cloud Tech</h2>
          <p className="text-body-lg text-neutral-500 mb-10 max-w-xl mx-auto">
            Scale your infrastructure with confidence. Start building today with $100 in free credits for new accounts.
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

      {/* 10. Footer */}
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
              <a href="#" className="hover:text-white transition-colors"><Briefcase className="w-5 h-5" /></a>
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

    </div>
  );
};

export default App;
