import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Scroll, Sparkles, Heart, Music2, Utensils, Car } from 'lucide-react';

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

        <div className="grid gap-12 lg:grid-cols-1 max-w-7xl mx-auto px-4">
          <motion.div 
            className="relative p-8 md:p-10 rounded-t-[500px] border-[6px] border-[#877f74]/30 shadow-xl flex flex-col items-center text-center min-h-[850px] overflow-hidden bg-[#F9F6F0]"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 z-0">
              <img src="/Mobile.jpg" alt="" className="w-full h-full object-cover opacity-20 mix-blend-multiply" />
            </div>
            
            <div className="relative z-10 w-full flex flex-col items-center mt-16">
              <h3 className="text-2xl md:text-2xl font-tenorsans tracking-[0.2em] uppercase text-[#877f74] mb-4">Mass &amp; Reception</h3>
              <div className="w-16 h-[1px] bg-[#877f74] mb-10"></div>
            </div>

            <div className="relative z-10 space-y-8 text-[#877f74] font-tenorsans flex-grow w-full flex flex-col items-center">
              <div className="mb-4">
                <div className="relative w-40 h-48 mb-4">
                  <div className="absolute inset-0 bg-[#877f74]/5 border border-[#877f74]/10 rounded-t-full rotate-[4deg]"></div>
                  <div className="absolute inset-0 bg-white shadow-lg border-4 border-white rounded-t-full flex flex-col overflow-hidden">
                    <div className="flex-grow bg-[#877f74]/5 flex items-center justify-center">
                      <img src="https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlaSrRQfX5069zH15D2YMEOqnufSTqxQb-d0uVtjHAnYiWjnHxt8yY53pUf35JNCMbSSxSt7TzAm2u9LIUko5FxettTAtgfn9NoXoSreXq3P36qNF75SwpHzPqdTfFIQeENo6GC=s1360-w1360-h1020-rw" alt="Wedding Venue" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-10 flex items-center justify-center bg-white">
                      <span className="text-[#877f74] text-sm">The Celebration</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-1">
                  <p className="text-[10px] tracking-[0.3em] uppercase opacity-60">Saturday</p>
                  <p className="text-xl font-semibold tracking-widest">10th July 2027</p>
                </div>
                <p className="text-md tracking-wider border-y border-[#877f74]/20 py-2 inline-block px-4">3.00 PM Onwards</p>
                
                <div className="flex flex-col items-center space-y-3 pt-2">
                  <MapPin className="h-5 w-5 text-[#877f74]" />
                  <div>
                    <p className="text-lg font-medium">St. Annes Church, Kurana</p>
                    <p className="text-sm leading-relaxed max-w-[250px] opacity-80 mx-auto mb-2">Mass</p>
                    
                    <p className="text-lg font-medium">Grandeeza, Negombo</p>
                    <p className="text-sm leading-relaxed max-w-[250px] opacity-80 mx-auto">Reception</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-10 pb-10 w-full flex flex-col items-center">
              <a 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-3 rounded-full text-[11px] font-tenorsans transition-all hover:-translate-y-1 shadow-md uppercase tracking-widest bg-[#877f74] text-[#F9F6F0]" 
                href="https://maps.app.goo.gl/wHJqrkE1BhR9wPScA"
              >
                <MapPin className="h-3.5 w-3.5" />
                <span>View Location</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-tenorsans text-gray-800 mb-4">Moments of the Day</h3>
            <div className="w-24 h-1 bg-[#bf9b6d] rounded-full mx-auto"></div>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#6b6f5e]"></div>
            
            <div className="space-y-16">
              
              <motion.div 
                className="relative flex flex-col md:flex-row items-center md:flex-row"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="z-10 w-16 h-16 rounded-full bg-[#877f74] border-4 border-white flex items-center justify-center text-white shadow-lg md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  <Scroll className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pr-8 md:text-right text-center md:text-inherit">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-2xl font-bold text-gray-800 mb-2 font-tenorsans">3.00 PM</div>
                    <h4 className="text-xl font-tenorsans text-gray-700 mb-2">Nuptial Mass</h4>
                    <p className="text-gray-600 font-tenorsans">St. Annes Church, Kurana</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="relative flex flex-col md:flex-row items-center md:flex-row-reverse"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="z-10 w-16 h-16 rounded-full bg-[#877f74] border-4 border-white flex items-center justify-center text-white shadow-lg md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  <Sparkles className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 md:text-left text-center md:text-inherit">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-2xl font-bold text-gray-800 mb-2 font-tenorsans">7.00 PM</div>
                    <h4 className="text-xl font-tenorsans text-gray-700 mb-2">Reception</h4>
                    <p className="text-gray-600 font-tenorsans">Grandeeza, Negombo</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="relative flex flex-col md:flex-row items-center md:flex-row"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="z-10 w-16 h-16 rounded-full bg-[#877f74] border-4 border-white flex items-center justify-center text-white shadow-lg md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  <Heart className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pr-8 md:text-right text-center md:text-inherit">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-2xl font-bold text-gray-800 mb-2 font-tenorsans">7.45 PM</div>
                    <h4 className="text-xl font-tenorsans text-gray-700 mb-2">Formalities</h4>
                    <p className="text-gray-600 font-tenorsans">Toasts &amp; Speeches</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="relative flex flex-col md:flex-row items-center md:flex-row-reverse"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="z-10 w-16 h-16 rounded-full bg-[#877f74] border-4 border-white flex items-center justify-center text-white shadow-lg md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  <Music2 className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 md:text-left text-center md:text-inherit">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-2xl font-bold text-gray-800 mb-2 font-tenorsans">8.15 PM</div>
                    <h4 className="text-xl font-tenorsans text-gray-700 mb-2">First Dance</h4>
                    <p className="text-gray-600 font-tenorsans">Dance Floor Opens</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="relative flex flex-col md:flex-row items-center md:flex-row"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="z-10 w-16 h-16 rounded-full bg-[#877f74] border-4 border-white flex items-center justify-center text-white shadow-lg md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  <Utensils className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pr-8 md:text-right text-center md:text-inherit">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-2xl font-bold text-gray-800 mb-2 font-tenorsans">8.30 PM</div>
                    <h4 className="text-xl font-tenorsans text-gray-700 mb-2">Dinner</h4>
                    <p className="text-gray-600 font-tenorsans"></p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="relative flex flex-col md:flex-row items-center md:flex-row-reverse"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="z-10 w-16 h-16 rounded-full bg-[#877f74] border-4 border-white flex items-center justify-center text-white shadow-lg md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  <Car className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8 md:text-left text-center md:text-inherit">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <div className="text-2xl font-bold text-gray-800 mb-2 font-tenorsans">12.00 AM</div>
                    <h4 className="text-xl font-tenorsans text-gray-700 mb-2">Going Away</h4>
                    <p className="text-gray-600 font-tenorsans"></p>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
