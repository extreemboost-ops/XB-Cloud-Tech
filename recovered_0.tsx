import React from 'react';
import { 
  Cloud, 
  ChevronDown, 
  Menu, 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  Shield, 
  Zap,
  Terminal,
  Globe
} from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-[#E5E7EB] p-8 md:p-12 font-sans text-neutral-900">
      {/* Figma-style Canvas Container */}
      <div className="max-w-[1400px] mx-auto bg-light-base rounded-3xl shadow-2xl overflow-hidden border border-neutral-200">
        
        {/* Style Guide Header */}
        <div className="bg-dark-base text-white p-12 md:p-16 border-b-4 border-primary">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/20">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <h1 className="font-logo text-4xl font-bold tracking-tight">XB Cloud Tech</h1>
          </div>
          <h2 className="text-h2 text-neutral-200 mb-4">Design System & Style Guide</h2>
          <p className="text-body-lg text-neutral-500 max-w-2xl">
            A comprehensive component library and design language for the modern cloud infrastructure platform. Strict Bootstrap-inspired grid with a premium SaaS aesthetic.
          </p>
        </div>

        <div className="p-12 md:p-16 space-y-24">
          
          {/* 1. LOGO LOCKUP */}
          <section>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-neutral-200">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">01</div>
              <h3 className="text-h3">Logo & Branding</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-12 bg-white rounded-2xl border border-neutral-200 flex flex-col items-center justify-center gap-6 shadow-sm">
                <span className="text-caption text-neutral-500">Light Background</span>
                <div className="flex items-center gap-3">
                  <Cloud className="w-8 h-8 text-primary" />
                  <span className="font-logo text-3xl font-bold text-neutral-900">XB Cloud Tech</span>
                </div>
              </div>
              <div className="p-12 bg-dark-base rounded-2xl border border-neutral-900 flex flex-col items-center justify-center gap-6 shadow-sm">
                <span className="text-caption text-neutral-500">Dark Background</span>
                <div className="flex items-center gap-3">
                  <Cloud className="w-8 h-8 text-secondary" />
                  <span className="font-logo text-3xl font-bold text-white">XB Cloud Tech</span>
                </div>
              </div>
            </div>
          </section>

          {/* 2. TYPOGRAPHY */}
          <section>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-neutral-200">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">02</div>
              <h3 className="text-h3">Typography</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-8 bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
                <div className="grid grid-cols-4 gap-4 items-baseline border-b border-neutral-100 pb-4">
                  <span className="text-caption text-neutral-500 col-span-1">H1 - 64px Bold</span>
                  <h1 className="text-h1 col-span-3 text-neutral-900">Cloud Infrastructure</h1>
                </div>
                <div className="grid grid-cols-4 gap-4 items-baseline border-b border-neutral-100 pb-4">
                  <span className="text-caption text-neutral-500 col-span-1">H2 - 44px Bold</span>
                  <h2 className="text-h2 col-span-3 text-neutral-900">Built for Scale</h2>
                </div>
                <div className="grid grid-cols-4 gap-4 items-baseline border-b border-neutral-100 pb-4">
                  <span className="text-caption text-neutral-500 col-span-1">H3 - 32px Semibold</span>
                  <h3 className="text-h3 col-span-3 text-neutral-900">Deploy Globally</h3>
                </div>
                <div className="grid grid-cols-4 gap-4 items-baseline border-b border-neutral-100 pb-4">
                  <span className="text-caption text-neutral-500 col-span-1">H4 - 22px Semibold</span>
                  <h4 className="text-h4 col-span-3 text-neutral-900">Security First Approach</h4>
                </div>
                <div className="grid grid-cols-4 gap-4 items-baseline border-b border-neutral-100 pb-4">
                  <span className="text-caption text-neutral-500 col-span-1">Body Large - 18px</span>
                  <p className="text-body-lg col-span-3 text-neutral-500">Global network of data centers providing ultra-low latency.</p>
                </div>
                <div className="grid grid-cols-4 gap-4 items-baseline border-b border-neutral-100 pb-4">
                  <span className="text-caption text-neutral-500 col-span-1">Body - 16px</span>
                  <p className="text-body col-span-3 text-neutral-500">Manage your entire cloud infrastructure from a single unified dashboard built for modern engineering teams.</p>
                </div>
                <div className="grid grid-cols-4 gap-4 items-baseline border-b border-neutral-100 pb-4">
                  <span className="text-caption text-neutral-500 col-span-1">Caption - 14px</span>
                  <span className="text-caption col-span-3 text-primary">View Documentation</span>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-6">
                <div className="bg-dark-base p-8 rounded-2xl text-white">
                  <h4 className="font-logo text-2xl mb-2">Comfortaa</h4>
                  <p className="text-caption text-neutral-500 mb-6">Logo / Brand Wordmark</p>
                  <div className="text-4xl font-logo font-bold break-all">Aa Bb Cc<br/>123</div>
                </div>
                <div className="bg-white p-8 rounded-2xl border border-neutral-200">
                  <h4 className="font-sans text-2xl font-bold mb-2">Proxima Nova</h4>
                  <p className="text-caption text-neutral-500 mb-6">Headings & Body Text</p>
                  <div className="text-4xl font-sans font-bold break-all">Aa Bb Cc<br/>123</div>
                </div>
                <div className="bg-[#1E2433] p-8 rounded-2xl text-white">
                  <h4 className="font-mono text-2xl mb-2">JetBrains Mono</h4>
                  <p className="text-caption text-neutral-500 mb-6">Code & Tech Accents</p>
                  <div className="text-4xl font-mono break-all">Aa Bb Cc<br/>123</div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. COLORS */}
          <section>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-neutral-200">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">03</div>
              <h3 className="text-h3">Color Palette</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              <ColorSwatch name="Primary" hex="#0B5FFF" colorClass="bg-primary" />
              <ColorSwatch name="Secondary" hex="#00D4FF" colorClass="bg-secondary" />
              <ColorSwatch name="Dark Base" hex="#0A0F1E" colorClass="bg-dark-base" textClass="text-white" />
              <ColorSwatch name="Light Base" hex="#F7F9FC" colorClass="bg-light-base" textClass="text-neutral-900" border />
              <ColorSwatch name="Neutral 900" hex="#1E2433" colorClass="bg-neutral-900" />
              <ColorSwatch name="Neutral 500" hex="#6B7280" colorClass="bg-neutral-500" />
              <ColorSwatch name="Neutral 200" hex="#E5E7EB" colorClass="bg-neutral-200" textClass="text-neutral-900" border />
              
              <div className="col-span-2 md:col-span-4 lg:col-span-7 mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                <ColorSwatch name="Success" hex="#10B981" colorClass="bg-success" />
                <ColorSwatch name="Warning" hex="#F59E0B" colorClass="bg-warning" />
                <div className="col-span-2 rounded-xl h-24 bg-gradient-to-r from-primary to-secondary p-4 flex flex-col justify-end text-white shadow-sm">
                  <span className="font-semibold text-sm">Brand Gradient</span>
                  <span className="text-xs font-mono opacity-80">to-r from-primary to-secondary</span>
                </div>
              </div>
            </div>
          </section>

          {/* 4. BUTTONS & CONTROLS */}
          <section>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-neutral-200">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">04</div>
              <h3 className="text-h3">Buttons & Badges</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm space-y-8">
                <h4 className="text-caption text-neutral-500">Button States</h4>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <span className="w-24 text-sm text-neutral-500">Primary</span>
                    <button className="px-5 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95 flex items-center gap-2">
                      Get Started
                    </button>
                    <button className="px-5 py-2.5 bg-primary/90 text-white rounded-lg font-semibold text-sm shadow-lg shadow-primary/20 flex items-center gap-2 opacity-80">
                      Hover / Active
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <span className="w-24 text-sm text-neutral-500">Outline</span>
                    <button className="px-5 py-2.5 bg-transparent border border-neutral-200 text-neutral-900 rounded-lg font-semibold text-sm transition-all hover:border-primary hover:text-primary hover:bg-primary/5 active:scale-95 flex items-center gap-2">
                      View Pricing
                    </button>
                    <button className="px-5 py-2.5 bg-primary/5 border border-primary text-primary rounded-lg font-semibold text-sm flex items-center gap-2">
                      Hover / Active
                    </button>
                  </div>

                  <div className="flex items-center gap-6">
                    <span className="w-24 text-sm text-neutral-500">Ghost</span>
                    <button className="px-5 py-2.5 bg-transparent text-neutral-500 rounded-lg font-semibold text-sm transition-all hover:text-primary hover:bg-primary/5 active:scale-95 flex items-center gap-2">
                      Documentation <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="px-5 py-2.5 bg-primary/5 text-primary rounded-lg font-semibold text-sm flex items-center gap-2">
                      Hover / Active <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm space-y-8">
                <h4 className="text-caption text-neutral-500">Badges & Pills</h4>
                <div className="flex flex-wrap gap-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
                    New Feature
                  </span>
                  <span className="px-3 py-1 rounded-full bg-success/10 text-success text-xs font-semibold uppercase tracking-wider">
                    Operational
                  </span>
                  <span className="px-3 py-1 rounded-full bg-warning/10 text-warning text-xs font-semibold uppercase tracking-wider">
                    Maintenance
                  </span>
                  <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-500 text-xs font-semibold uppercase tracking-wider">
                    Draft
                  </span>
                </div>
                
                <h4 className="text-caption text-neutral-500 pt-4 border-t border-neutral-100">Form Elements</h4>
                <div className="space-y-4 max-w-sm">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-900 mb-1.5">Work Email</label>
                    <input 
                      type="email" 
                      placeholder="hello@company.com" 
                      className="w-full px-4 py-2.5 bg-light-base border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder:text-neutral-500 font-sans"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-900 mb-1.5">Region Select</label>
                    <div className="relative">
                      <select className="w-full px-4 py-2.5 bg-light-base border border-neutral-200 rounded-lg text-neutral-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none font-sans">
                        <option>US-East (N. Virginia)</option>
                        <option>EU-West (Ireland)</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-neutral-500 absolute right-4 top-3.5 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. COMPONENTS */}
          <section>
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-neutral-200">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">05</div>
              <h3 className="text-h3">Sample Components</h3>
            </div>

            <div className="space-y-12">
              
              {/* Navbar Sample */}
              <div>
                <h4 className="text-caption text-neutral-500 mb-4">A. Sticky Dark Navbar</h4>
                <nav className="bg-dark-base border-b border-neutral-900 px-6 py-4 flex items-center justify-between rounded-t-2xl shadow-xl sticky top-0 z-50">
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
                </nav>
                <div className="h-4 bg-gradient-to-r from-primary to-secondary rounded-b-2xl opacity-80" />
              </div>

              {/* Cards Sample */}
              <div>
                <h4 className="text-caption text-neutral-500 mb-4">B. Card System (Service, Pricing, Feature)</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Service Card */}
                  <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all cursor-pointer group flex flex-col h-full">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                      <Server className="w-6 h-6" />
                    </div>
                    <h3 className="text-h4 text-neutral-900 mb-2">Compute Instances</h3>
                    <p className="text-body text-neutral-500 mb-6 flex-grow">
                      Scalable virtual machines with dedicated vCPUs and NVMe SSDs. Provision in seconds globally.
                    </p>
                    <div className="flex items-center text-sm font-semibold text-primary gap-1 group-hover:gap-2 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Pricing Card */}
                  <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm relative flex flex-col h-full overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-bl-full -mr-16 -mt-16" />
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider self-start mb-6">
                      Pro Tier
                    </span>
                    <h3 className="text-h4 text-neutral-900 mb-2">Production</h3>
                    <div className="flex items-baseline gap-1 mb-6">
                      <span className="text-4xl font-bold text-neutral-900">$99</span>
                      <span className="text-neutral-500 font-medium">/mo</span>
                    </div>
                    <ul className="space-y-3 mb-8 flex-grow">
                      <li className="flex items-start gap-2 text-sm text-neutral-500">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        8 vCPUs, 32GB RAM
                      </li>
                      <li className="flex items-start gap-2 text-sm text-neutral-500">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        1TB NVMe Storage
                      </li>
                      <li className="flex items-start gap-2 text-sm text-neutral-500">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        Advanced DDoS Protection
                      </li>
                    </ul>
                    <button className="w-full px-5 py-2.5 bg-neutral-900 text-white rounded-lg font-semibold text-sm transition-all hover:bg-neutral-800">
                      Deploy Now
                    </button>
                  </div>

                  {/* Dark Feature Card */}
                  <div className="bg-dark-base rounded-xl p-6 border border-neutral-900 shadow-lg relative flex flex-col h-full overflow-hidden text-white">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-secondary mb-6 backdrop-blur-sm">
                        <Shield className="w-6 h-6" />
                      </div>
                      <h3 className="text-h4 mb-2">Enterprise Security</h3>
                      <p className="text-body text-neutral-400 mb-6 flex-grow">
                        Military-grade encryption at rest and in transit. Built-in compliance for SOC2 and HIPAA.
                      </p>
                      <div className="pt-4 border-t border-white/10">
                        <code className="font-mono text-sm text-secondary block bg-black/30 p-2 rounded">
                          $ xb-cli enable-shield
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Sample */}
              <div>
                <h4 className="text-caption text-neutral-500 mb-4">C. Modern Footer</h4>
                <footer className="bg-dark-base text-white rounded-xl overflow-hidden shadow-sm">
                  <div className="px-8 py-12 lg:px-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    <div className="col-span-2 lg:col-span-2 space-y-6">
                      <div className="flex items-center gap-2">
                        <Cloud className="w-6 h-6 text-secondary" />
                        <span className="font-logo text-xl font-bold text-white tracking-tight">XB Cloud Tech</span>
                      </div>
                      <p className="text-sm text-neutral-400 max-w-sm">
                        Building the foundation for the next generation of digital experiences. High-performance cloud infrastructure for modern teams.
                      </p>
                      <div className="flex items-center gap-4 text-neutral-400">
                        <Globe className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                        <Terminal className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                        <Zap className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold mb-4">Products</h5>
                      <ul className="space-y-3 text-sm text-neutral-400">
                        <li><a href="#" className="hover:text-white transition-colors">Compute</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Storage</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Networking</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Kubernetes</a></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold mb-4">Developers</h5>
                      <ul className="space-y-3 text-sm text-neutral-400">
                        <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">CLI Tool</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold mb-4">Company</h5>
                      <ul className="space-y-3 text-sm text-neutral-400">
                        <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="px-8 py-6 lg:px-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-500 bg-black/20">
                    <p>© 2026 XB Cloud Tech. All rights reserved.</p>
                    <div className="flex gap-6">
                      <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                      <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                  </div>
                </footer>
              </div>
              
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

// Helper component for Color Swatches
const ColorSwatch = ({ name, hex, colorClass, textClass = 'text-white', border = false }: { name: string, hex: string, colorClass: string, textClass?: string, border?: boolean }) => (
  <div className={`rounded-xl h-24 ${colorClass} ${border ? 'border border-neutral-200' : ''} p-4 flex flex-col justify-end ${textClass} shadow-sm`}>
    <span className="font-semibold text-sm">{name}</span>
    <span className="text-xs font-mono opacity-80">{hex}</span>
  </div>
);

export default App;
