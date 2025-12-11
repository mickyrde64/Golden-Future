import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Check, Sparkles, ChevronDown } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    salutation: '',
    title: '',
    firstname: '',
    lastname: '',
    email: '',
    areaCode: '',
    phone: '',
    confirmAreaCode: '',
    confirmPhone: '',
    contactType: '',
    country: '',
    state: '',
    source: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  const inputClasses = "w-full bg-white/5 border border-[#D4AF37]/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-all duration-300";
  const labelClasses = "block text-xs uppercase tracking-widest text-[#D4AF37]/80 mb-2 font-display font-bold";

  return (
    <section id="contact-form" className="relative py-24 px-4 bg-[#050505] border-t border-[#D4AF37]/10">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
           <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs tracking-[0.2em] uppercase border rounded-full border-[#D4AF37]/20 bg-[#D4AF37]/5 text-[#D4AF37]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
              Secure Transmission
           </div>
           <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
             Begin Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FCD34D] to-[#B8860B]">Journey</span>
           </h2>
           <p className="text-gray-400 font-light max-w-xl mx-auto">
             Enter your personal data below to request detailed information about our gold investment opportunities.
           </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-black/40 backdrop-blur-xl border border-[#D4AF37]/10 rounded-2xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          
          <div className="mb-8 pb-4 border-b border-[#D4AF37]/10">
            <h3 className="text-xl font-display text-white mb-1">1. Personal data</h3>
            <p className="text-xs text-gray-500">* Required information</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Salutation & Title */}
            <div>
              <label className={labelClasses}>Salutation*</label>
              <div className="relative">
                <select 
                  name="salutation" 
                  required 
                  value={formState.salutation} 
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none cursor-pointer`}
                >
                  <option value="" className="bg-black text-gray-500">Select...</option>
                  <option value="mr" className="bg-black">Mr.</option>
                  <option value="mrs" className="bg-black">Mrs.</option>
                  <option value="mx" className="bg-black">Mx.</option>
                  <option value="dr" className="bg-black">Dr.</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]/50 pointer-events-none" />
              </div>
            </div>
            
            <div>
              <label className={labelClasses}>Title</label>
              <input 
                type="text" 
                name="title" 
                value={formState.title} 
                onChange={handleChange}
                className={inputClasses} 
              />
            </div>

            {/* Names */}
            <div>
              <label className={labelClasses}>Firstname*</label>
              <input 
                type="text" 
                name="firstname" 
                required 
                placeholder="Max"
                value={formState.firstname} 
                onChange={handleChange}
                className={inputClasses} 
              />
            </div>
            
            <div>
              <label className={labelClasses}>Lastname*</label>
              <input 
                type="text" 
                name="lastname" 
                required 
                placeholder="Mustermann"
                value={formState.lastname} 
                onChange={handleChange}
                className={inputClasses} 
              />
            </div>

            {/* Contact Info */}
            <div className="md:col-span-2">
              <label className={labelClasses}>E-Mail*</label>
              <input 
                type="email" 
                name="email" 
                required 
                value={formState.email} 
                onChange={handleChange}
                className={inputClasses} 
              />
            </div>

            {/* Phone */}
            <div>
               <label className={labelClasses}>Area code*</label>
               <input 
                 type="text" 
                 name="areaCode" 
                 required 
                 value={formState.areaCode} 
                 onChange={handleChange}
                 className={inputClasses} 
               />
            </div>
            <div>
               <label className={labelClasses}>Phone*</label>
               <input 
                 type="tel" 
                 name="phone" 
                 required 
                 value={formState.phone} 
                 onChange={handleChange}
                 className={inputClasses} 
               />
            </div>

            {/* Phone Confirm */}
             <div>
               <label className={labelClasses}>Area code* (Confirm)</label>
               <input 
                 type="text" 
                 name="confirmAreaCode" 
                 required 
                 value={formState.confirmAreaCode} 
                 onChange={handleChange}
                 className={inputClasses} 
               />
            </div>
            <div>
               <label className={labelClasses}>Confirm phone*</label>
               <input 
                 type="tel" 
                 name="confirmPhone" 
                 required 
                 value={formState.confirmPhone} 
                 onChange={handleChange}
                 className={inputClasses} 
               />
            </div>

            {/* Preferences */}
            <div className="md:col-span-2">
              <label className={labelClasses}>Preferred contact type*</label>
              <div className="grid grid-cols-3 gap-4">
                {['WhatsApp', 'Telephone', 'E-mail'].map((type) => (
                  <label key={type} className="relative cursor-pointer group">
                    <input 
                      type="radio" 
                      name="contactType" 
                      value={type}
                      required
                      checked={formState.contactType === type}
                      onChange={handleChange}
                      className="peer sr-only"
                    />
                    <div className="flex items-center justify-center p-3 border border-[#D4AF37]/20 rounded-lg bg-white/5 peer-checked:bg-[#D4AF37]/10 peer-checked:border-[#D4AF37] transition-all duration-300 hover:bg-white/10">
                      <span className="text-sm font-medium text-gray-300 peer-checked:text-[#D4AF37]">{type}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Location */}
            <div>
              <label className={labelClasses}>Country*</label>
              <input 
                type="text" 
                name="country" 
                required 
                value={formState.country} 
                onChange={handleChange}
                className={inputClasses} 
              />
            </div>
            <div>
              <label className={labelClasses}>Federated state*</label>
              <input 
                type="text" 
                name="state" 
                required 
                value={formState.state} 
                onChange={handleChange}
                className={inputClasses} 
              />
            </div>

            {/* Source */}
            <div className="md:col-span-2">
              <label className={labelClasses}>How did you find out about us?*</label>
              <div className="relative">
                <select 
                  name="source" 
                  required 
                  value={formState.source} 
                  onChange={handleChange}
                  className={`${inputClasses} appearance-none cursor-pointer`}
                >
                  <option value="" className="bg-black text-gray-500">Please select...</option>
                  <option value="recommendation" className="bg-black">Recommendation (via a person)</option>
                  <option value="social_media" className="bg-black">Social Media</option>
                  <option value="dtm" className="bg-black">DTM</option>
                  <option value="other" className="bg-black">Other</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#D4AF37]/50 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className={`
                group relative px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-500
                ${status === 'success' 
                  ? 'bg-green-500/10 text-green-500 border border-green-500/50 cursor-default' 
                  : 'bg-[#D4AF37] text-black hover:bg-[#FCD34D] hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]'}
              `}
            >
              <span className="relative flex items-center gap-3">
                {status === 'sending' ? (
                  <Sparkles className="w-5 h-5 animate-spin" />
                ) : status === 'success' ? (
                  <>
                    <Check className="w-5 h-5" />
                    Request Sent
                  </>
                ) : (
                  <>
                    Send Request
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </span>
            </button>
          </div>
          
          {status === 'success' && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mt-6 text-center"
            >
              <p className="text-[#D4AF37] text-sm font-medium">Thank you. Our consultants will contact you shortly.</p>
            </motion.div>
          )}

        </form>
      </div>
    </section>
  );
};

export default ContactForm;