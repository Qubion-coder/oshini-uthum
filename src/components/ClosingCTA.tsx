import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, List } from 'lucide-react';

export const ClosingCTA: React.FC = () => {
  const scrollToRSVP = () => {
    document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToDetails = () => {
    document.getElementById('details')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="w-full h-full py-32 relative overflow-hidden">
      <div className="absolute inset-0">
        <img src="/03s.jpg" alt="Romantic sunset" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#877f74] via-[#877f74]/70 to-[#877f74] text-[#877f74]/80"></div>
      </div>
      
      <div className="relative z-10 container px-4 md:px-6 mx-auto text-center">
        <motion.div 
          className="max-w-4xl mx-auto text-white space-y-8 font-tenorsans"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center justify-center space-x-4 mb-8 font-tenorsans">
            <Heart className="h-8 w-8 text-[#faf9f6]" strokeWidth={1.5} />
            <Sparkles className="h-6 w-6 text-[#faf9f6]" strokeWidth={1.5} />
            <Heart className="h-8 w-8 text-[#faf9f6]" strokeWidth={1.5} />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-tenorsans leading-tight">
            We Can't Wait to Celebrate with You!
          </h2>
          
          <p className="text-2xl leading-relaxed opacity-90 font-tenorsans">
            Thank you for being part of our love story. Your presence will make our wedding day absolutely perfect.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <button 
              onClick={scrollToRSVP}
              className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 bg-white text-[#877f74] hover:bg-[#fbf4ef] rounded-full px-12 py-6 text-xl font-medium shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              <Heart className="mr-3 h-6 w-6" strokeWidth={1.5} />
              RSVP with Love
            </button>
            <button 
              onClick={scrollToDetails}
              className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 border-2 border-white text-white hover:bg-white/20 rounded-full px-12 py-6 text-xl font-medium backdrop-blur-sm"
            >
              <List className="mr-3 h-6 w-6" strokeWidth={1.5} />
              Wedding Details
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
