import React, { useState } from 'react';
import { BRANDS } from '../constants';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const BrandShowcase: React.FC = () => {
  const [activeBrand, setActiveBrand] = useState(BRANDS[0].id);

  return (
    <section id="brands" className="relative py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-5xl md:text-7xl font-serif text-center mb-4">Our Brands</h2>
        <p className="text-center text-gray-500 uppercase tracking-widest text-sm">One Vision. Three Strengths.</p>
      </div>

      {/* Brand Navigation Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-16 max-w-4xl mx-auto px-4">
        {BRANDS.map((brand) => (
          <button
            key={brand.id}
            onClick={() => setActiveBrand(brand.id)}
            className={`px-6 py-3 rounded-full text-sm uppercase tracking-wider transition-all duration-300 border ${
              activeBrand === brand.id 
                ? 'bg-white text-black border-white scale-105 font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                : 'bg-transparent text-gray-500 border-white/10 hover:border-white/40'
            }`}
          >
            {brand.name.split('|')[0]}
          </button>
        ))}
      </div>

      {/* Dynamic Brand Content Area */}
      <div className="relative min-h-[80vh] w-full overflow-hidden">
        {BRANDS.map((brand) => (
          <div
            key={brand.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
              activeBrand === brand.id 
                ? 'opacity-100 translate-x-0 z-10 scale-100' 
                : 'opacity-0 translate-x-10 z-0 scale-95 pointer-events-none'
            }`}
          >
            {/* Background Gradient specific to brand */}
            <div className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-10 mix-blend-screen`} />
            
            <div className="max-w-7xl mx-auto px-6 h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24 py-12">
              
              {/* Text Content */}
              <div className="flex-1 relative z-10 order-2 lg:order-1">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 ${brand.textColor}`}>
                  <brand.icon size={16} />
                  <span className="text-xs uppercase tracking-wider font-bold">{brand.tagline}</span>
                </div>
                
                <h3 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                  {brand.name}
                </h3>
                
                <p className="text-lg text-gray-300 mb-10 leading-relaxed border-l border-white/20 pl-6">
                  {brand.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {brand.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-gray-400">
                      <CheckCircle2 size={16} className="text-white/50" />
                      {feature}
                    </div>
                  ))}
                </div>

                <button className="group flex items-center gap-4 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-wider hover:gap-6 transition-all duration-300">
                  {brand.ctaText}
                  <ArrowRight size={18} />
                </button>
              </div>

              {/* Visual Content */}
              <div className="flex-1 h-[400px] lg:h-[600px] w-full relative order-1 lg:order-2">
                 {/* Decorative Elements based on brand */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-[80%] h-[80%] rounded-full bg-gradient-to-tr ${brand.color} blur-[80px] opacity-40 animate-pulse`} />
                 </div>
                 
                 <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    <img 
                      src={brand.imagePlaceholder} 
                      alt={brand.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                 </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
