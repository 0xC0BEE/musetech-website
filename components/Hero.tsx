import React, { useEffect, useRef } from 'react';
import { TAGLINE, HERO_COPY } from '../constants';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow motion effect
    }
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black">
      
      {/* Abstract Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Large gradient orbs simulating the 3 brands mixing */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-blue-600/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-amber-500/20 blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-emerald-500/10 blur-[100px] animate-pulse delay-700" />
        
        {/* Mesh Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20">
        {/* Animated Tagline */}
        <div className="overflow-hidden mb-6">
           <p className="text-amber-400 uppercase tracking-[0.3em] text-xs md:text-sm font-bold animate-slideUp">
            {TAGLINE}
           </p>
        </div>

        {/* Main Headlines - Split for visual impact */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[0.9] mb-8 opacity-0 animate-fadeIn delay-300">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
            Technology.
          </span>
          <span className="block italic text-white/90 pr-12">
            Wellness.
          </span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-orange-400 to-amber-600">
            Identity.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl leading-relaxed mb-12 opacity-0 animate-fadeIn delay-700">
          {HERO_COPY.subheadline} <br />
          <span className="text-sm mt-4 block text-gray-500 max-w-lg mx-auto">
            Proudly Canadian-owned. Established in Dubai. Creating sustainable digital ecosystems.
          </span>
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 opacity-0 animate-fadeIn delay-1000">
           <a href="#brands" className="px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-wider hover:scale-105 hover:bg-amber-400 hover:text-white transition-all duration-300">
             Explore Our Brands
           </a>
           <a href="#contact" className="px-8 py-4 border border-white/20 text-white rounded-full font-bold uppercase tracking-wider hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
             Start a Project
           </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};
