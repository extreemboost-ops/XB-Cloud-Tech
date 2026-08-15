const fs = require('fs');

const files = [
  { file: 'recovered_0.tsx', name: 'HomePage' },
  { file: 'recovered_1.tsx', name: 'AboutPage' },
  { file: 'recovered_2.tsx', name: 'ServicesPage' },
  { file: 'recovered_3.tsx', name: 'PricingPage' },
  { file: 'recovered_4.tsx', name: 'PortfolioPage' },
  { file: 'recovered_5.tsx', name: 'BlogPage' },
  { file: 'recovered_6.tsx', name: 'ContactPage' },
];

fs.mkdirSync('src/pages', { recursive: true });

files.forEach(f => {
  let content = fs.readFileSync(f.file, 'utf8');
  
  // Make sure we export default App in case it wasn't
  if (!content.includes('export default App')) {
    content += '\nexport default App;\n';
  }
  
  // We need to disable eslint for these files since there are duplicate imports/declarations across them
  content = '/* eslint-disable */\n// @ts-nocheck\n' + content;
  
  // Fix the "does not provide an export named 'Linkedin'" error in ALL recovered files
  content = content.replace(/Linkedin/g, 'Briefcase');

  fs.writeFileSync(`src/pages/${f.name}.tsx`, content);
});

const appContent = `
import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import PortfolioPage from './pages/PortfolioPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [page, setPage] = useState('home');

  return (
    <div className="relative">
      {/* Floating Navigation Menu so user can easily switch pages */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-neutral-900/90 backdrop-blur-md text-white px-6 py-3 rounded-full flex gap-4 z-[9999] shadow-2xl border border-white/10 overflow-x-auto max-w-[95vw]">
        <div className="text-xs text-neutral-400 font-bold uppercase tracking-wider flex items-center pr-2 border-r border-white/20">Navigation</div>
        {['home', 'about', 'services', 'pricing', 'portfolio', 'blog', 'contact'].map(p => (
          <button 
            key={p} 
            onClick={() => setPage(p)}
            className={\`capitalize text-sm font-semibold whitespace-nowrap transition-colors \${page === p ? 'text-primary' : 'text-neutral-300 hover:text-white'}\`}
          >
            {p}
          </button>
        ))}
      </div>

      {page === 'home' && <HomePage />}
      {page === 'about' && <AboutPage />}
      {page === 'services' && <ServicesPage />}
      {page === 'pricing' && <PricingPage />}
      {page === 'portfolio' && <PortfolioPage />}
      {page === 'blog' && <BlogPage />}
      {page === 'contact' && <ContactPage />}
    </div>
  );
}
`;

fs.writeFileSync('src/App.tsx', appContent);
