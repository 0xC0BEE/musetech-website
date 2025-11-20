import React from 'react';
import { CORE_VALUES, HERO_COPY } from '../constants';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-32 bg-[#0a0a0a] text-white overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute left-0 top-32 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
             <h2 className="text-amber-500 text-sm font-bold tracking-[0.2em] uppercase mb-4">About Musetech</h2>
             <h3 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
               Blending Innovation <br/> with <span className="italic text-gray-400">Purpose.</span>
             </h3>
             <p className="text-gray-400 leading-relaxed text-lg border-l-2 border-amber-500/30 pl-6">
               {HERO_COPY.description}
             </p>
          </div>
          <div className="relative">
             <div className="aspect-square rounded-full overflow-hidden border border-white/10 relative group">
                <img 
                  src="https://picsum.photos/800/800?grayscale" 
                  alt="Team Collaboration" 
                  className="object-cover w-full h-full opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-blue-500/20 mix-blend-overlay" />
             </div>
             {/* Floating Badge */}
             <div className="absolute -bottom-10 -left-10 bg-[#111] border border-white/10 p-8 rounded-2xl shadow-2xl">
                <p className="text-3xl font-bold text-white">3+</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Distinct Brands</p>
             </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif mb-2">Why Choose Musetech?</h3>
            <p className="text-gray-500">Purpose-built for clarity, growth, and long-term impact.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((value, idx) => (
              <div 
                key={idx} 
                className="group p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center mb-6 text-amber-400 group-hover:text-white transition-colors">
                  <value.icon size={20} strokeWidth={1.5} />
                </div>
                <h4 className="text-xl font-serif mb-3 text-white group-hover:text-amber-400 transition-colors">{value.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
