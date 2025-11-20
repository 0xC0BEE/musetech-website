import React from 'react';
import { CONTACT_DETAILS } from '../constants';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="relative py-32 bg-[#050505] text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Contact Info Side */}
          <div className="lg:w-1/3">
            <h2 className="text-5xl font-serif mb-4 text-amber-500">Ready to grow?</h2>
            <p className="text-xl text-gray-400 mb-12">Book a consultation for tailored UAE solutions.</p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Location</h4>
                  <p className="text-lg font-serif">{CONTACT_DETAILS.address}</p>
                  <p className="text-sm text-gray-500">Musetech Solutions FZCO</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Email</h4>
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="text-lg font-serif hover:text-amber-400 transition-colors">{CONTACT_DETAILS.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Phone</h4>
                  <p className="text-lg font-serif">{CONTACT_DETAILS.phonePrimary}</p>
                  <p className="text-sm text-gray-500">{CONTACT_DETAILS.phoneSecondary}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors peer"
                    placeholder=" "
                  />
                  <label htmlFor="name" className="absolute left-0 top-4 text-gray-500 transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-amber-500 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs">Name</label>
                </div>
                <div className="relative group">
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors peer"
                    placeholder=" "
                  />
                  <label htmlFor="email" className="absolute left-0 top-4 text-gray-500 transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-amber-500 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs">Email Address</label>
                </div>
              </div>

              <div className="relative group">
                <select 
                  id="interest" 
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors peer appearance-none"
                >
                  <option className="bg-black text-gray-400">Select Interest</option>
                  <option className="bg-black">Creative Muse Marketing</option>
                  <option className="bg-black">Auralis Crystals</option>
                  <option className="bg-black">TapCard Digital Cards</option>
                  <option className="bg-black">General Inquiry</option>
                </select>
                <label htmlFor="interest" className="absolute left-0 -top-2 text-xs text-amber-500">I'm interested in...</label>
              </div>

              <div className="relative group">
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-amber-500 transition-colors peer resize-none"
                  placeholder=" "
                ></textarea>
                <label htmlFor="message" className="absolute left-0 top-4 text-gray-500 transition-all duration-300 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-amber-500 peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs">Tell us about your project</label>
              </div>

              <button type="button" className="flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all duration-300">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
