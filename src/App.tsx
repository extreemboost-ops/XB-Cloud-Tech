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

  const navigate = (p: string) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {page === 'home'      && <HomePage      setPage={navigate} />}
      {page === 'about'     && <AboutPage     setPage={navigate} />}
      {page === 'services'  && <ServicesPage  setPage={navigate} />}
      {page === 'pricing'   && <PricingPage   setPage={navigate} />}
      {page === 'portfolio' && <PortfolioPage setPage={navigate} />}
      {page === 'blog'      && <BlogPage      setPage={navigate} />}
      {page === 'contact'   && <ContactPage   setPage={navigate} />}
    </div>
  );
}
