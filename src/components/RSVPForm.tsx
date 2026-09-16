import React, { useState } from 'react';
import { submitToGoogleSheet } from '../googleSheets';
import { Calendar, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export const RSVPForm: React.FC = () => {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState('');
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRSVP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name');
      return;
    }
    if (!attending) {
      setError('Please let us know if you can attend');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    try {
      const status = attending === 'yes' ? 'Accepts' : 'Declines';
      await submitToGoogleSheet('rsvp', { 
        name, 
        status, 
        guests: attending === 'yes' ? guests : 0,
        message,
        link: window.location.href,
        submittedAt: new Date().toISOString() 
      });
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError('Failed to submit RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp" className="w-full py-12 bg-[#f2e5d2]/50">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div 
          className="flex flex-col items-center space-y-4 text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-tenorsans text-gray-800">RSVP</h2>
          <div className="w-32 h-1 bg-[#877f74] rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl font-tenorsans text-justify">
            We are so excited to gather our favorite people in one place. Please let us know if you’ll be there!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl">
              <img src="/03s.jpg" alt="Wedding RSVP" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-sm border border-[#ecebe7]">
              <div className="flex items-center space-x-3 text-gray-900 mb-3">
                <Heart className="h-6 w-6" strokeWidth={1.5} />
                <span className="font-semibold text-lg font-tenorsans">Save the Date!</span>
              </div>
              <p className="text-gray-700 leading-relaxed text-justify font-sans">
                Your presence will make our wedding day complete. We're so excited to celebrate this special moment with you!
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-[#877f74]/10 p-10 rounded-3xl shadow-xl border border-[#ecebe7]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {submitted ? (
              <div className="text-center py-10">
                <p className="text-4xl font-tenorsans text-gray-800 mb-4">Thank you!</p>
                <p className="text-lg font-tenorsans text-gray-600">Your response has been lovingly recorded.</p>
              </div>
            ) : (
              <form onSubmit={handleRSVP} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 font-tenorsans">Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Eg: Namal Perera" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 font-tenorsans focus:outline-none focus:ring-2 focus:ring-[#877f74] bg-white" 
                      name="name" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 font-tenorsans">Will you attend?</label>
                    <div className="relative">
                      <select 
                        name="attending" 
                        required 
                        value={attending}
                        onChange={(e) => setAttending(e.target.value)}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 font-tenorsans appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-[#877f74] bg-white"
                        disabled={isSubmitting}
                      >
                        <option value="" disabled>Select</option>
                        <option value="yes">Yes, I’ll be there</option>
                        <option value="no">Sorry, I can’t make it</option>
                      </select>
                      <svg className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 font-tenorsans">Number of Guests</label>
                    <input 
                      type="number" 
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 font-tenorsans focus:outline-none focus:ring-2 focus:ring-[#877f74] bg-white" 
                      min="1" 
                      max="10" 
                      name="guests" 
                      value={guests}
                      onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                      disabled={isSubmitting || attending === 'no'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2 font-tenorsans">Message</label>
                  <textarea 
                    name="message" 
                    maxLength={250} 
                    rows={4} 
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 font-tenorsans resize-none focus:outline-none focus:ring-2 focus:ring-[#877f74] bg-white" 
                    placeholder="Leave the couple a beautiful note!"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isSubmitting}
                  ></textarea>
                </div>
                
                {error && <p className="text-red-500 text-sm font-tenorsans text-center">{error}</p>}

                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-[#877f74] hover:bg-[#877f74]/80 text-white rounded-xl py-3 text-lg font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-tenorsans disabled:opacity-50 disabled:scale-100"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send RSVP with Love'}
                  </button>
                </div>
                
                <div>
                  <a 
                    href="https://www.google.com/calendar/render?action=TEMPLATE&text=Oshini+%26+Uthum+Wedding&dates=20270710T093000Z/20270710T153000Z&details=We+are+excited+to+celebrate+with+you!&location=St.+Annes+Church,+Kurana&sf=true&output=xml" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full inline-flex justify-center items-center bg-white hover:bg-white/80 text-black border border-gray-200 rounded-xl py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 font-tenorsans"
                  >
                    <Calendar className="mr-2 h-5 w-5" strokeWidth={1.5} />
                    Add to Google Calendar
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
