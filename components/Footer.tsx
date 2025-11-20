import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { COMPANY_NAME } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-600 flex items-center justify-center">
                <span className="text-white font-serif font-bold text-2xl">M</span>
            </div>
            <div>
                <h3 className="font-bold tracking-wide text-xl">{COMPANY_NAME}</h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest">Technology • Wellness • Identity</p>
            </div>
          </div>

          <div className="flex gap-6">
             <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Facebook size={18} />
             </a>
             <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Instagram size={18} />
             </a>
             <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Linkedin size={18} />
             </a>
             <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <Twitter size={18} />
             </a>
          </div>
        </div>

        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 uppercase tracking-wider gap-4">
          <p>&copy; 2025 Musetech Solutions FZCO. All rights reserved.</p>
          <p>Designed & Developed by iGrowth Media</p>
        </div>
      </div>
    </footer>
  );
};
