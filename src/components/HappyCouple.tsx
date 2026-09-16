import React from 'react';
import { motion } from 'motion/react';
import { Crown, Heart } from 'lucide-react';

export const HappyCouple: React.FC = () => {
  return (
    <section className="w-full py-24 bg-[#f2e5d2]/50">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          className="flex flex-col items-center space-y-4 text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-tenorsans text-gray-800">Two Hearts in Love</h2>
          <div className="w-32 h-1 bg-[#877f74] rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl font-tenorsans">What began as a moment became our forever</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center max-w-6xl mx-auto">
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-96 h-96 rounded-full overflow-hidden border-8 border-[#f2e5d2] shadow-2xl">
                <img src="/05.jpg" alt="Happy Couple" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-4 right-6 bg-[#f2e5d2] p-3 rounded-full shadow-lg">
                <Crown className="h-6 w-6 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="text-center space-y-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-tenorsans text-[#716156]">Oshini</h3>
            <p className="text-lg text-gray-600 font-tenorsans">The Bride</p>
            <p className="text-gray-600 font-tenorsans">Daughter of Mr &amp; Mrs Benito Fernando</p>
          </motion.div>

          <motion.div 
            className="text-center space-y-2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-tenorsans text-[#6b6f5e]">Uthum</h3>
            <p className="text-lg text-gray-600 font-tenorsans">The Groom</p>
            <p className="text-gray-600 font-tenorsans">Son of Mr &amp; Mrs Derrick Fernando</p>
          </motion.div>

        </div>
      </div>
      
      <div className="mt-16 text-center container px-4 md:px-6 mx-auto">
        <motion.div 
          className="bg-[#877f74]/10 p-8 rounded-3xl shadow-lg max-w-2xl mx-auto border border-[#B69559]/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Heart className="h-12 w-12 text-gray-900 mx-auto mb-4" strokeWidth={1.5} />
          <h3 className="text-4xl font-tenorsans text-gray-800 mb-4">Our Hearts Are Full</h3>
          <p className="text-gray-600 leading-relaxed italic text-justify mb-8 font-tenorsans">
            "Our wedding day would not be complete without the people who have been part of our journey. Thank you for celebrating this beautiful beginning with us and for surrounding us with your love and blessings. We cannot wait to create memories that we’ll cherish for a lifetime."
          </p>
          <div className="flex flex-col items-center justify-center space-y-2">
            <span className="text-md italic text-gray-600 tracking-wide font-tenorsans">
              With love always,<br/>
              Oshini &amp; Uthum 🤍
            </span>
          </div>
        </motion.div>
      </div>

    </section>
  );
};
