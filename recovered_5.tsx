import React, { useState } from 'react';
import { 
  Cloud, ChevronDown, Menu, ChevronRight, 
  Globe, Terminal, Linkedin, ArrowRight, 
  Search, Calendar, Clock, User, Share2, 
  Twitter, Mail, MessageSquare, Code, Copy, Bookmark
} from 'lucide-react';

// --- Shared Components ---

const Navbar = ({ setPage }: { setPage: (page: string) => void }) => (
  <nav className="bg-dark-base border-b border-neutral-900 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
    <div className="flex items-center gap-8 container-custom w-full max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('blog')}>
            <Cloud className="w-6 h-6 text-secondary" />
            <span className="font-logo text-xl font-bold text-white tracking-tight">XB Cloud Tech</span>
          </div>
          <div className="hidden md:flex items-center gap-1">
            <a href="#" className="px-4 py-2 text-sm font-medium text-neutral-200 hover:text-white transition-colors rounded-md hover:bg-white/5">Products</a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-neutral-200 hover:text-white transition-colors rounded-md hover:bg-white/5">Solutions</a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-neutral-200 hover:text-white transition-colors rounded-md hover:bg-white/5">Pricing</a>
            <button onClick={() => setPage('blog')} className="px-4 py-2 text-sm font-medium text-white transition-colors rounded-md bg-white/10 flex items-center gap-1">
              Resources <ChevronDown className="w-4 h-4" />
            </button>
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
  <footer className="bg-dark-base text-white mt-auto border-t border-neutral-900">
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

const NewsletterBanner = () => (
  <section className="py-20 bg-dark-base relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
    <div className="container-custom relative z-10">
      <div className="bg-primary/10 border border-primary/20 rounded-3xl p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 backdrop-blur-sm">
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Subscribe to our newsletter</h2>
          <p className="text-neutral-300">
            Get the latest cloud engineering tutorials, architecture guides, and platform updates delivered straight to your inbox every two weeks.
          </p>
        </div>
        <div className="w-full lg:w-auto flex-grow max-w-md">
          <div className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Enter your work email" 
              className="flex-grow px-5 py-3.5 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-secondary transition-colors placeholder:text-neutral-400"
            />
            <button className="px-6 py-3.5 bg-primary text-white rounded-xl font-bold text-sm transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-neutral-500 mt-3 text-center lg:text-left">No spam. Unsubscribe at any time.</p>
        </div>
      </div>
    </div>
  </section>
);

// --- Blog Listing Page ---

const BlogPage = ({ setPage }: { setPage: (page: string) => void }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Cloud Tips', 'Security', 'DevOps', 'Company News', 'Tutorials'];

  const posts = [
    {
      id: 1,
      title: 'Architecting for High Availability in 2026',
      excerpt: 'Learn the foundational principles for designing robust, fault-tolerant distributed systems on modern cloud infrastructure.',
      category: 'Cloud Tips',
      author: 'David Chen',
      date: 'Oct 12, 2026',
      readTime: '8 min read',
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Zero-Trust Networking: A Practical Implementation Guide',
      excerpt: 'Moving beyond the perimeter. How to implement zero-trust network policies inside your Kubernetes clusters.',
      category: 'Security',
      author: 'Elena Rodriguez',
      date: 'Oct 05, 2026',
      readTime: '12 min read',
      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 3,
      title: 'Optimizing CI/CD Pipeline Speeds by 40%',
      excerpt: 'Tired of waiting for builds? Here is exactly how our internal engineering team optimized our deployment pipelines.',
      category: 'DevOps',
      author: 'Marcus Johnson',
      date: 'Sep 28, 2026',
      readTime: '6 min read',
      img: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 4,
      title: 'Tutorial: Automating Postgres Backups to Cold Storage',
      excerpt: 'A step-by-step tutorial on writing a cronjob to dump your database and securely transfer it to immutable object storage.',
      category: 'Tutorials',
      author: 'Sarah Jenkins',
      date: 'Sep 15, 2026',
      readTime: '10 min read',
      img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop'
    }
  ];

  const popularPosts = [
    { title: 'The hidden costs of cloud egress fees', date: 'Aug 14, 2026' },
    { title: 'Choosing between Bare Metal and Virtualized Compute', date: 'Jul 22, 2026' },
    { title: 'How to monitor Kubernetes at scale with Prometheus', date: 'Jun 30, 2026' }
  ];

  return (
    <div className="min-h-screen bg-light-base flex flex-col font-sans text-neutral-900 selection:bg-primary/20">
      <Navbar setPage={setPage} />

      {/* Header */}
      <header className="bg-white border-b border-neutral-200 pt-16 pb-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h1 className="text-h1 mb-4 text-neutral-900">Insights & Resources</h1>
              <p className="text-body-lg text-neutral-500 max-w-xl">
                Engineering deep dives, product updates, and tutorials to help you build and scale better software.
              </p>
            </div>
            <div className="w-full md:w-auto relative">
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="w-full md:w-80 pl-12 pr-4 py-3.5 bg-neutral-100 border border-transparent rounded-xl text-neutral-900 focus:outline-none focus:bg-white focus:border-primary transition-all placeholder:text-neutral-500 font-medium"
              />
              <Search className="w-5 h-5 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </header>

      {/* Filter Bar */}
      <div className="bg-light-base sticky top-[73px] z-40">
        <div className="container-custom py-4 overflow-x-auto scroll-container flex gap-2">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                activeFilter === filter 
                  ? 'bg-primary text-white shadow-md shadow-primary/20' 
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="container-custom py-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Featured Post */}
          {activeFilter === 'All' && (
            <div className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer" onClick={() => setPage('blog-detail')}>
              <div className="aspect-[2/1] overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop" alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-3 py-1.5 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-md">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 text-sm text-neutral-500 font-medium mb-4">
                  <span className="text-primary font-bold">Company News</span>
                  <span className="w-1 h-1 rounded-full bg-neutral-300"></span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Oct 18, 2026</span>
                </div>
                <h2 className="text-3xl font-bold text-neutral-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                  Announcing the next generation of XB Compute instances
                </h2>
                <p className="text-body-lg text-neutral-500 mb-8">
                  Today we are thrilled to announce our next generation of compute instances, featuring the latest AMD EPYC processors and a completely re-architected hypervisor layer that improves performance by up to 40%.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-neutral-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" alt="Author" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-neutral-900">Sarah Jenkins</div>
                    <div className="text-xs text-neutral-500">CEO & Founder</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid of Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col cursor-pointer" onClick={() => setPage('blog-detail')}>
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="text-primary text-xs font-bold uppercase tracking-wider">{post.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-6 flex-grow">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-neutral-100 mt-auto">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden">
                        <User className="w-full h-full p-1.5 text-neutral-500" />
                      </div>
                      <span className="font-semibold text-sm text-neutral-900">{post.author}</span>
                    </div>
                    <div className="text-xs font-medium text-neutral-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center pt-8">
            <button className="px-6 py-3 bg-white border border-neutral-200 text-neutral-900 rounded-lg font-semibold text-sm transition-all hover:border-primary hover:text-primary shadow-sm">
              Load More Articles
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm">
            <h4 className="font-bold text-lg text-neutral-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" /> Popular Right Now
            </h4>
            <div className="space-y-6">
              {popularPosts.map((post, idx) => (
                <div key={idx} className="group cursor-pointer" onClick={() => setPage('blog-detail')}>
                  <h5 className="font-semibold text-neutral-800 text-sm mb-2 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h5>
                  <div className="text-xs text-neutral-400 font-medium">{post.date}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-dark-base rounded-2xl border border-neutral-900 p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[40px] pointer-events-none -mt-10 -mr-10"></div>
            <Cloud className="w-8 h-8 text-secondary mb-4" />
            <h4 className="font-bold text-lg mb-2">Build faster on XB Cloud</h4>
            <p className="text-sm text-neutral-400 mb-6">Get $100 in free credits to spin up your first cluster in seconds.</p>
            <button className="w-full px-4 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20">
              Claim Free Credits
            </button>
          </div>

          <div className="bg-white rounded-2xl border border-neutral-200 p-8 shadow-sm">
            <h4 className="font-bold text-lg text-neutral-900 mb-6">Categories</h4>
            <ul className="space-y-3">
              {['Cloud Tips (24)', 'Security (12)', 'DevOps (18)', 'Tutorials (45)', 'Company News (8)'].map((cat, idx) => (
                <li key={idx}>
                  <a href="#" className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors flex items-center justify-between">
                    {cat.split(' (')[0]}
                    <span className="bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded-full text-xs">{cat.split('(')[1].replace(')', '')}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>

      <NewsletterBanner />
      <Footer />
    </div>
  );
};


// --- Blog Post Detail Template ---

const BlogPostDetailPage = ({ setPage }: { setPage: (page: string) => void }) => {
  return (
    <div className="min-h-screen bg-light-base flex flex-col font-sans text-neutral-900 selection:bg-primary/20">
      <Navbar setPage={setPage} />

      {/* Article Header */}
      <header className="bg-white pt-20 pb-12 border-b border-neutral-100">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center text-sm font-medium text-neutral-500 mb-8 space-x-2">
            <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => setPage('home')}>Home</span>
            <ChevronRight className="w-4 h-4" />
            <span className="hover:text-primary transition-colors cursor-pointer" onClick={() => setPage('blog')}>Resources</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-semibold">DevOps</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-8 leading-tight tracking-tight">
            Optimizing CI/CD Pipeline Speeds by 40%
          </h1>
          
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-neutral-200 overflow-hidden border-2 border-white shadow-sm">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop" alt="Marcus Johnson" className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <div className="font-bold text-sm text-neutral-900">Marcus Johnson</div>
                <div className="text-xs text-neutral-500">Head of Infrastructure</div>
              </div>
            </div>
            <div className="w-px h-8 bg-neutral-200"></div>
            <div className="flex items-center gap-4 text-sm font-medium text-neutral-500">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Sep 28, 2026</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 6 min read</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="container-custom max-w-5xl mx-auto -mt-6 z-10 relative">
        <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
          <img src="https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2000&auto=format&fit=crop" alt="Server rack" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Article Body & Sidebar */}
      <section className="py-16">
        <div className="container-custom max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Share Sidebar (Desktop) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-[100px] flex flex-col gap-4">
              <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Share</span>
              <button className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-[#1DA1F2] hover:border-[#1DA1F2] transition-colors shadow-sm">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-[#0A66C2] hover:border-[#0A66C2] transition-colors shadow-sm">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-primary hover:border-primary transition-colors shadow-sm">
                <Copy className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-warning hover:border-warning transition-colors shadow-sm mt-4">
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body Content */}
          <article className="lg:col-span-8 bg-white p-8 md:p-12 rounded-3xl border border-neutral-200 shadow-sm prose prose-lg prose-neutral max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-p:text-neutral-600 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            <p className="text-xl text-neutral-700 font-medium leading-relaxed">
              If your engineering team is merging code 10 times a day, but waiting 25 minutes for CI/CD pipelines to finish running, you are bleeding engineering hours.
            </p>
            <p>
              In this post, we'll walk through exactly how our internal infrastructure team identified bottlenecks in our deployment pipelines and re-architected our Github Actions + Kubernetes flow to reduce average build times from 22 minutes to just under 13 minutes.
            </p>
            
            <h2>The Bottleneck: Docker Build Contexts</h2>
            <p>
              The most significant time-sink we found was in the Docker build step. Our monolithic repository had grown significantly, and the daemon was sending massive build contexts on every commit.
            </p>
            
            <blockquote>
              "Optimization isn't about working faster; it's about removing the friction that stops you from working at all."
            </blockquote>
            
            <p>
              We implemented a two-fold solution using buildkit caching and multi-stage builds.
            </p>

            <h3>1. Multi-stage Builds</h3>
            <p>
              By separating the compilation environment from the runtime environment, we not only reduced the final image size but significantly improved caching layers.
            </p>

            <div className="bg-[#1E2433] rounded-xl overflow-hidden my-8 not-prose shadow-lg">
              <div className="bg-[#111520] px-4 py-2 flex items-center gap-2 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                  <div className="w-3 h-3 rounded-full bg-warning"></div>
                  <div className="w-3 h-3 rounded-full bg-success"></div>
                </div>
                <div className="text-xs text-neutral-400 font-mono ml-2">Dockerfile</div>
              </div>
              <pre className="p-4 text-sm font-mono text-neutral-300 overflow-x-auto leading-relaxed">
                <code className="language-dockerfile">
                  <span className="text-neutral-500"># Stage 1: Build</span><br/>
                  <span className="text-secondary">FROM</span> node:18-alpine <span className="text-secondary">AS</span> builder<br/>
                  <span className="text-secondary">WORKDIR</span> /app<br/>
                  <span className="text-secondary">COPY</span> package*.json ./<br/>
                  <span className="text-secondary">RUN</span> npm ci<br/>
                  <span className="text-secondary">COPY</span> . .<br/>
                  <span className="text-secondary">RUN</span> npm run build<br/>
                  <br/>
                  <span className="text-neutral-500"># Stage 2: Runtime</span><br/>
                  <span className="text-secondary">FROM</span> node:18-alpine<br/>
                  <span className="text-secondary">WORKDIR</span> /app<br/>
                  <span className="text-secondary">COPY</span> --from=builder /app/dist ./dist<br/>
                  <span className="text-secondary">CMD</span> ["node", "dist/main.js"]
                </code>
              </pre>
            </div>

            <h2>Caching Dependencies</h2>
            <p>
              We moved to aggressively caching `node_modules` across Github Action runs. If the `package-lock.json` hash doesn't change, we skip the `npm install` step entirely.
            </p>
            <p>
              This single change shaved 4 minutes off every build that only included source code changes. 
            </p>
            
            <hr className="my-12 border-neutral-200" />
            
            {/* Share (Mobile) */}
            <div className="lg:hidden flex items-center gap-4 mb-8 pt-4">
              <span className="text-sm font-bold text-neutral-900 uppercase">Share:</span>
              <button className="w-10 h-10 rounded-full bg-light-base flex items-center justify-center text-neutral-600"><Twitter className="w-4 h-4" /></button>
              <button className="w-10 h-10 rounded-full bg-light-base flex items-center justify-center text-neutral-600"><Linkedin className="w-4 h-4" /></button>
              <button className="w-10 h-10 rounded-full bg-light-base flex items-center justify-center text-neutral-600"><Copy className="w-4 h-4" /></button>
            </div>

            {/* Author Bio */}
            <div className="bg-light-base rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 border border-neutral-100 not-prose">
              <div className="w-20 h-20 rounded-full bg-neutral-200 overflow-hidden shrink-0">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop" alt="Marcus Johnson" className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <h4 className="text-lg font-bold text-neutral-900 mb-1">Marcus Johnson</h4>
                <div className="text-sm text-primary font-semibold mb-3">Head of Infrastructure</div>
                <p className="text-sm text-neutral-600">
                  Marcus leads the global infrastructure team at XB Cloud Tech. Prior to joining, he spent 8 years scaling distributed databases at major tech companies. He writes about DevOps, observability, and team culture.
                </p>
              </div>
            </div>
            
          </article>
          
          {/* Spacer for grid */}
          <div className="hidden lg:block lg:col-span-3">
             <div className="sticky top-[100px] bg-dark-base rounded-2xl border border-neutral-900 p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-[40px] pointer-events-none -mt-10 -mr-10"></div>
                <Terminal className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-bold text-lg mb-2">Deploy effortlessly</h4>
                <p className="text-sm text-neutral-400 mb-6">Our Kubernetes clusters are optimized out-of-the-box for CI/CD integration.</p>
                <button className="w-full px-4 py-2.5 bg-white text-dark-base rounded-lg font-semibold text-sm transition-all hover:bg-neutral-200 hover:shadow-lg">
                  Explore Compute
                </button>
             </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-12 border-t border-neutral-200 bg-light-base">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="w-6 h-6 text-neutral-400" />
            <h3 className="text-2xl font-bold text-neutral-900">Discussion (2)</h3>
          </div>
          
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm mb-10">
            <textarea 
              rows={3} 
              className="w-full bg-light-base border border-neutral-200 rounded-xl p-4 text-neutral-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none mb-4 font-sans text-sm"
              placeholder="Join the conversation..."
            ></textarea>
            <div className="flex justify-end">
              <button className="px-5 py-2 bg-primary text-white rounded-lg font-semibold text-sm transition-all hover:bg-primary/90">
                Post Comment
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-neutral-100 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xs">A</div>
                <div>
                  <div className="text-sm font-bold text-neutral-900">Alex Rivera</div>
                  <div className="text-xs text-neutral-400">2 days ago</div>
                </div>
              </div>
              <p className="text-sm text-neutral-600">Great writeup. Did you guys consider using Buildah instead of Docker for the CI environment to avoid the daemon overhead completely?</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-neutral-100 shadow-sm ml-12 border-l-2 border-l-primary/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-neutral-200 overflow-hidden shrink-0">
                  <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop" alt="Marcus" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-sm font-bold text-neutral-900">Marcus Johnson <span className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-[10px] ml-1 uppercase">Author</span></div>
                  <div className="text-xs text-neutral-400">1 day ago</div>
                </div>
              </div>
              <p className="text-sm text-neutral-600">Yes! We actually evaluated Buildah and Kaniko. We ended up sticking with Docker Buildx due to better caching integration with our specific Github Actions runner setup, but Kaniko is on our radar for a future iteration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-24 bg-white border-t border-neutral-200">
        <div className="container-custom">
          <h2 className="text-h3 mb-10 text-neutral-900">Keep Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Zero-Trust Networking: A Practical Implementation Guide', cat: 'Security', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop' },
              { title: 'Architecting for High Availability in 2026', cat: 'Cloud Tips', img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop' },
              { title: 'Choosing between Bare Metal and Virtualized Compute', cat: 'Cloud Tips', img: 'https://images.unsplash.com/photo-1620283085068-5aab14e8ac0c?q=80&w=800&auto=format&fit=crop' }
            ].map((post, idx) => (
              <div key={idx} className="group cursor-pointer bg-light-base rounded-2xl border border-neutral-200 hover:border-primary/50 hover:shadow-lg transition-all flex flex-col overflow-hidden" onClick={() => setPage('blog-detail')}>
                <div className="h-48 overflow-hidden relative">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-6">
                  <span className="text-primary text-xs font-bold uppercase tracking-wider block mb-2">{post.cat}</span>
                  <h4 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors leading-tight">{post.title}</h4>
                  <span className="text-sm font-semibold text-neutral-600 flex items-center gap-1 group-hover:text-primary group-hover:gap-2 transition-all">Read article <ArrowRight className="w-4 h-4" /></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};


const App = () => {
  const [currentPage, setCurrentPage] = useState('blog');

  if (currentPage === 'blog') {
    return <BlogPage setPage={setCurrentPage} />;
  }
  
  if (currentPage === 'blog-detail') {
    return <BlogPostDetailPage setPage={setCurrentPage} />;
  }

  // Fallback nav
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">XB Cloud Tech</h1>
      <button onClick={() => setCurrentPage('blog')} className="mt-4 px-4 py-2 bg-primary text-white rounded">Go to Blog</button>
    </div>
  );
};

export default App;
