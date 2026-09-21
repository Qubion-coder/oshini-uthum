import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Scroll, Sparkles } from 'lucide-react';

export const HomecomingDetails: React.FC = () => {
  return (
    <section id="details" className="w-full py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center mb-20">
          <h2 className="text-4xl font-tenorsans text-gray-800">Ceremony &amp; Reception</h2>
          <div className="w-32 h-1 bg-[#877f74] rounded-full"></div>
          <div className="flex items-center justify-center gap-3 max-w-3xl">
            <span className="text-[#877f74] text-2xl opacity-40">✦</span>
            <p className="text-xl text-gray-600 font-tenorsans">All the details to help you celebrate this beautiful day with us</p>
            <span className="text-[#877f74] text-2xl opacity-40">✦</span>
          </div>
        </div>

        {/* Mass & Reception - Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-tenorsans tracking-[0.2em] uppercase text-[#877f74] mb-4">Mass &amp; Reception</h3>
          <div className="w-16 h-[1px] bg-[#877f74] mx-auto mb-4"></div>
          <div className="space-y-1">
            <p className="text-[10px] tracking-[0.3em] uppercase opacity-60 text-[#877f74] font-tenorsans">Saturday</p>
            <p className="text-xl font-semibold tracking-widest text-[#877f74] font-tenorsans">10th July 2027</p>
          </div>
        </div>

        {/* Two-column: Church (left) & Reception (right) */}
        <div className="grid grid-cols-2 gap-3 md:gap-12 max-w-5xl mx-auto px-2 md:px-4">
          
          {/* LEFT — Church / Mass */}
          <motion.div 
            className="relative flex flex-col items-center text-center overflow-hidden bg-[#F9F6F0] rounded-3xl border border-[#877f74]/20 shadow-lg"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            {/* Church Image */}
            <div className="w-full aspect-[4/3] overflow-hidden relative">
              <img 
                src="/chur.png" 
                alt="Eternal Vows Chapel" 
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F9F6F0] via-transparent to-transparent" />
            </div>

            {/* Church Details */}
            <div className="p-3 md:p-8 flex flex-col items-center flex-grow">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#877f74]/10 flex items-center justify-center mb-2 md:mb-4">
                <Scroll className="h-4 w-4 md:h-5 md:w-5 text-[#877f74]" />
              </div>
              <p className="text-[8px] md:text-[10px] tracking-[0.3em] uppercase opacity-60 text-[#877f74] font-tenorsans mb-1">ETERNAL VOWS CHAPEL</p>
              <h4 className="text-sm md:text-lg font-tenorsans font-medium text-[#877f74] mb-1">St. Anne's Church - Kurana</h4>
              <p className="text-xs md:text-md tracking-wider text-[#877f74]/70 font-tenorsans border-y border-[#877f74]/15 py-1 md:py-2 px-2 md:px-4 my-2 md:my-3">3:30 PM</p>
              
              <div className="mt-auto pt-2 md:pt-4">
                <a 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1 md:space-x-2 px-3 md:px-6 py-2 md:py-2.5 rounded-full text-[8px] md:text-[10px] font-tenorsans transition-all hover:-translate-y-1 shadow-md uppercase tracking-widest bg-[#877f74] text-[#F9F6F0]" 
                  href="https://maps.app.goo.gl/3PYwwf7r7UbDyC4h8"
                >
                  <MapPin className="h-3 w-3" />
                  <span>View Location</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Grandeeza / Reception */}
          <motion.div 
            className="relative flex flex-col items-center text-center overflow-hidden bg-[#F9F6F0] rounded-3xl border border-[#877f74]/20 shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
          >
            {/* Grandeeza Image */}
            <div className="w-full aspect-[4/3] overflow-hidden relative">
              <img 
                src="/Screenshot 2026-09-22 030029.png" 
                alt="Grandeeza, Negombo" 
                className="w-full h-full object-cover transition-transform duration-[2s] ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F9F6F0] via-transparent to-transparent" />
            </div>

            {/* Reception Details */}
            <div className="p-3 md:p-8 flex flex-col items-center flex-grow">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#877f74]/10 flex items-center justify-center mb-2 md:mb-4">
                <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-[#877f74]" />
              </div>
              <p className="text-[8px] md:text-[10px] tracking-[0.3em] uppercase opacity-60 text-[#877f74] font-tenorsans mb-1">Reception</p>
              <h4 className="text-sm md:text-lg font-tenorsans font-medium text-[#877f74] mb-1">Grandeeza, Negombo</h4>
              <p className="text-xs md:text-md tracking-wider text-[#877f74]/70 font-tenorsans border-y border-[#877f74]/15 py-1 md:py-2 px-2 md:px-4 my-2 md:my-3">7.00 PM</p>
              
              <div className="mt-auto pt-2 md:pt-4">
                <a 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1 md:space-x-2 px-3 md:px-6 py-2 md:py-2.5 rounded-full text-[8px] md:text-[10px] font-tenorsans transition-all hover:-translate-y-1 shadow-md uppercase tracking-widest bg-[#877f74] text-[#F9F6F0]" 
                  href="https://maps.app.goo.gl/wUmvSaPqbnZMEwAJ9"
                >
                  <MapPin className="h-3 w-3" />
                  <span>View Location</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

        <div className="mt-24 max-w-md md:max-w-xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-16">
            <h3 className="text-3xl md:text-4xl font-tenorsans text-[#2c3746] italic flex items-center gap-4">
              <span className="text-4xl">💍</span> Moments of the Day
            </h3>
          </div>
          
          <div className="relative ml-16 md:ml-24 border-l border-[#c4a984]/50 space-y-12 pb-8">
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -left-[110px] md:-left-[140px] -top-12 w-28 h-28 md:w-36 md:h-36 mix-blend-multiply pointer-events-none">
                <img src="/floral-decor.jpg" className="w-full h-full object-contain" alt="Floral decor" />
              </div>
              <div className="absolute -left-[28px] top-0 bg-white p-1 rounded-full">
                <img src="/icon_church_1790026715083.jpg" alt="Church" className="w-12 h-12 object-contain mix-blend-multiply" />
              </div>
              <div className="pl-12 md:pl-16">
                <p className="text-[#2c3746] font-tenorsans text-lg tracking-wide">3:30 PM</p>
                <h4 className="text-[#2c3746] font-tenorsans text-2xl mt-0.5">Nuptial Mass</h4>
                <p className="text-gray-500 font-tenorsans text-sm mt-1">St. Anne's Church - Kurana</p>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute -left-[28px] top-0 bg-white p-1 rounded-full">
                <img src="/icon_champagne_1790026728513.jpg" alt="Reception" className="w-12 h-12 object-contain mix-blend-multiply" />
              </div>
              <div className="pl-12 md:pl-16">
                <p className="text-[#2c3746] font-tenorsans text-lg tracking-wide">7:00 PM</p>
                <h4 className="text-[#2c3746] font-tenorsans text-2xl mt-0.5">Reception</h4>
                <p className="text-gray-500 font-tenorsans text-sm mt-1">Grandeeza, Negombo</p>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute -left-[100px] md:-left-[120px] -top-8 w-24 h-24 md:w-32 md:h-32 mix-blend-multiply pointer-events-none -rotate-12">
                <img src="/floral-decor.jpg" className="w-full h-full object-contain" alt="Floral decor" />
              </div>
              <div className="absolute -left-[28px] top-0 bg-white p-1 rounded-full">
                <img src="/icon_microphone_1790026738193.jpg" alt="Formalities" className="w-12 h-12 object-contain mix-blend-multiply" />
              </div>
              <div className="pl-12 md:pl-16">
                <p className="text-[#2c3746] font-tenorsans text-lg tracking-wide">7:45 PM</p>
                <h4 className="text-[#2c3746] font-tenorsans text-2xl mt-0.5">Formalities</h4>
                <p className="text-gray-500 font-tenorsans text-sm mt-1">Toasts &amp; Speeches</p>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute -left-[28px] top-0 bg-white p-1 rounded-full">
                <img src="/icon_dance_1790026749511.jpg" alt="First Dance" className="w-12 h-12 object-contain mix-blend-multiply" />
              </div>
              <div className="pl-12 md:pl-16">
                <p className="text-[#2c3746] font-tenorsans text-lg tracking-wide">8:15 PM</p>
                <h4 className="text-[#2c3746] font-tenorsans text-2xl mt-0.5">First Dance</h4>
                <p className="text-gray-500 font-tenorsans text-sm mt-1">Dance Floor Opens</p>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="absolute -left-[100px] md:-left-[130px] -top-12 w-24 h-24 md:w-36 md:h-36 mix-blend-multiply pointer-events-none rotate-45">
                <img src="/floral-decor.jpg" className="w-full h-full object-contain" alt="Floral decor" />
              </div>
              <div className="absolute -left-[28px] top-0 bg-white p-1 rounded-full">
                <img src="/icon_dinner_1790026758740.jpg" alt="Dinner" className="w-12 h-12 object-contain mix-blend-multiply" />
              </div>
              <div className="pl-12 md:pl-16">
                <p className="text-[#2c3746] font-tenorsans text-lg tracking-wide">8:30 PM</p>
                <h4 className="text-[#2c3746] font-tenorsans text-2xl mt-0.5">Dinner</h4>
                <p className="text-gray-500 font-tenorsans text-sm mt-1 opacity-0">.</p>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="absolute -left-[28px] top-0 bg-white p-1 rounded-full">
                <img src="/icon_car_1790026772046.jpg" alt="Going Away" className="w-12 h-12 object-contain mix-blend-multiply" />
              </div>
              <div className="pl-12 md:pl-16">
                <p className="text-[#2c3746] font-tenorsans text-lg tracking-wide">12:00 AM</p>
                <h4 className="text-[#2c3746] font-tenorsans text-2xl mt-0.5">Going Away</h4>
                <p className="text-gray-500 font-tenorsans text-sm mt-1 opacity-0">.</p>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
