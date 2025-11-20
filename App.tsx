import React, { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { BrandShowcase } from './components/BrandShowcase';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  
  // Add custom CSS for animations that Tailwind doesn't support natively or easily
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes slideUp {
        0% { transform: translateY(100%); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
      @keyframes fadeIn {
        0% { opacity: 0; }
        100% { opacity: 1; }
      }
      .animate-slideUp {
        animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
      .animate-fadeIn {
        animation: fadeIn 1.5s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-amber-500 selection:text-black">
      <Navigation />
      <main>
        <Hero />
        <About />
        <BrandShowcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
