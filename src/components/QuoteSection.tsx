import React from 'react';
import { motion } from 'motion/react';

export const QuoteSection: React.FC = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[100vh] overflow-hidden bg-black">
      <motion.div 
        className="w-full h-full"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <img 
          src="/01.jpg" 
          alt="Oshini &amp; Uthum" 
          className="w-full h-full object-cover grayscale contrast-125 brightness-50 transition-all duration-700 hover:grayscale-0 hover:brightness-90" 
        />
      </motion.div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none z-10">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="font-display text-white text-4xl md:text-6xl lg:text-7xl leading-tight drop-shadow-2xl">
            "A new chapter begins <br /> with you by my side"
          </h2>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end z-10">
        <div className="text-white/40 font-sans text-[9px] tracking-[0.5em] uppercase">Est. 2027</div>
        <div className="text-white/40 font-sans text-[9px] tracking-[0.5em] uppercase">Soulmates</div>
      </div>
    </section>
  );
};
