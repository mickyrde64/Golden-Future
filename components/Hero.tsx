import React, { useState } from 'react';
import { ArrowRight, Check, Mail, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs tracking-[0.2em] uppercase border rounded-full border-[#D4AF37]/20 bg-[#D4AF37]/5 text-[#D4AF37] backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.1)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse shadow-[0_0_10px_#D4AF37]"></span>
          Accepting Early Access
        </div>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.9] glow-text text-transparent bg-clip-text bg-gradient-to-b from-white via-[#FCD34D] to-[#B8860B]">
          FUTURE PROOF <br className="hidden md:block" />
          <span className="italic font-light opacity-80 text-white">INVESTMENTS</span>
        </h1>
        
        <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-12">
          A weekly transmission on high-value insights and how to grow your wealth with Gold Investments
        </p>

        <form onSubmit={handleSubscribe} className="relative w-full max-w-md mx-auto group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#8B4513]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
          <div className="relative flex items-center p-1.5 bg-white/5 border border-[#D4AF37]/20 rounded-full backdrop-blur-xl transition-colors duration-300 focus-within:border-[#D4AF37]/50 focus-within:bg-black/40">
            <Mail className="w-5 h-5 ml-4 text-gray-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter@your.reality"
              disabled={status === 'success'}
              className="flex-1 px-4 py-3 bg-transparent text-white placeholder-gray-600 focus:outline-none font-light"
            />
            <button
              type="submit"
              disabled={status !== 'idle'}
              className={`
                px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2
                ${status === 'success' 
                  ? 'bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/50' 
                  : 'bg-[#D4AF37] text-black hover:bg-[#FCD34D] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]'}
              `}
            >
              {status === 'loading' ? (
                <Sparkles className="w-5 h-5 animate-spin" />
              ) : status === 'success' ? (
                <>
                  <Check className="w-5 h-5" />
                  <span>Joined</span>
                </>
              ) : (
                <>
                  <span>Join</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
          {status === 'success' && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-full left-0 right-0 mt-4 text-[#D4AF37] text-sm font-medium tracking-wide"
            >
              Welcome to the inner circle.
            </motion.p>
          )}
        </form>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 text-[#D4AF37]">
           {['Global Scale', 'Deep Tech', 'New Minds'].map((item) => (
             <div key={item} className="flex items-center gap-3">
               <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent"></div>
               <span className="font-display tracking-widest text-sm uppercase text-gray-400 group-hover:text-[#D4AF37]">{item}</span>
             </div>
           ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;