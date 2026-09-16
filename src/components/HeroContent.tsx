import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Menu } from 'lucide-react';

export const HeroContent: React.FC = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const prefix = searchParams.get('prefix');
  const name = searchParams.get('name');

  const guestNameString = (prefix || name) 
    ? `${prefix ? prefix + ' ' : ''}${name || ''}`.trim() 
    : '';

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section aria-label="Hero" className="relative w-full h-[100dvh] flex flex-col justify-center items-center overflow-hidden">
      
      <div className="absolute inset-0">
        <picture>
          <source media="(min-width: 1024px)" srcSet="/hero_bg.png" />
          <source media="(min-width: 640px)" srcSet="/hero_bg.png" />
          <img src="/hero_bg.png" alt="Couple" className="w-full h-full object-cover opacity-60" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-b from-[#877f74]/10 via-[#877f74]/50 to-[#877f74]/50"></div>
      </div>

      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-4 z-20">
        <div className="relative z-20 flex flex-col md:flex-row md:items-center md:justify-center">
          <div className="hidden md:flex justify-center w-full space-x-6 text-sm font-tenorsans text-white drop-shadow-md">
            <button onClick={() => scrollTo('details')} className="hover:text-[#f2e5d2] transition-colors">Details</button>
            <button onClick={() => scrollTo('rsvp')} className="hover:text-[#f2e5d2] transition-colors">RSVP</button>
          </div>
          <div className="flex justify-end md:hidden w-full text-white mt-2">
            <button>
              <Menu className="h-6 w-6 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full h-full flex flex-col justify-between items-center px-4 py-24 md:py-32">
        
        <div className="flex flex-col items-center gap-6 text-center mt-auto">
          {guestNameString && (
            <motion.div 
              className="flex flex-col items-center justify-center mb-6 bg-white/10 px-8 py-4 rounded-2xl backdrop-blur-sm border border-white/30"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-2 font-tenorsans text-white drop-shadow-md text-center">
                We cordially invite
              </p>
              <p className="font-serif text-2xl sm:text-3xl text-white whitespace-nowrap text-center drop-shadow-lg">
                {guestNameString}
              </p>
            </motion.div>
          )}

          <motion.div 
            className="inline-flex items-center space-x-2 p-4 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="text-sm tracking-[0.3em] uppercase font-tenorsans text-white">We're Getting Married!</span>
          </motion.div>
          
          <motion.h1 
            className="text-6xl md:text-8xl text-white drop-shadow-lg leading-tight" 
            style={{ fontFamily: "'Lavishly Yours', cursive" }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          >
            <span className="block">Oshini</span>
            <span className="block text-4xl md:text-5xl my-2">&amp;</span>
            <span className="block">Uthum</span>
          </motion.h1>
        </div>

        <motion.div 
          className="flex flex-col items-center gap-4 text-center mb-16 md:mb-20 mt-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <p className="text-lg md:text-2xl font-tenorsans text-white tracking-widest drop-shadow-md uppercase">
            Saturday, July 10, 2027
          </p>
          <div className="w-12 h-[1px] bg-white/40"></div>
        </motion.div>

      </div>

      <motion.div 
        className="absolute bottom-10 inset-x-0 z-10 flex justify-center cursor-pointer animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex flex-col items-center text-center">
          <p className="text-sm md:text-base font-tenorsans text-white mb-1 drop-shadow-sm">Swipe up for more</p>
          <ChevronDown className="h-8 w-8 text-white drop-shadow-sm" />
        </div>
      </motion.div>
      
    </section>
  );
};
