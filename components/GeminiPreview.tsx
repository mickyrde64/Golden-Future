import React, { useState, useEffect } from 'react';
import { generateDailyInsight } from '../services/geminiService';
import { LoadingState } from '../types';
import { motion, AnimatePresence } from 'framer-motion';

const GeminiPreview: React.FC = () => {
  const [insight, setInsight] = useState<{ content: string; topic: string } | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  useEffect(() => {
    const fetchData = async () => {
      setStatus(LoadingState.LOADING);
      try {
        const result = await generateDailyInsight();
        setInsight(result);
        setStatus(LoadingState.SUCCESS);
      } catch (error) {
        console.error(error);
        setStatus(LoadingState.ERROR);
      }
    };
    
    fetchData();
  }, []);

  return (
    <section className="relative py-24 px-4 border-t border-[#D4AF37]/10 bg-[#050505]">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="relative min-h-[200px] w-full bg-black/80 border border-[#D4AF37]/20 rounded-2xl overflow-hidden backdrop-blur-sm p-8 group transition-colors hover:border-[#D4AF37]/40 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          {/* Decorative UI elements */}
          <div className="absolute top-0 left-0 p-4 flex gap-2 opacity-50 grayscale">
            <div className="w-2 h-2 rounded-full bg-red-500/20 border border-red-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
            <div className="w-2 h-2 rounded-full bg-green-500/20 border border-green-500/50"></div>
          </div>
          
          <div className="mt-8 flex flex-col items-center justify-center text-center h-full">
            <AnimatePresence mode="wait">
              {status === LoadingState.IDLE && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-gray-600 font-mono text-sm"
                >
                  [Initializing Uplink...]
                </motion.div>
              )}

              {status === LoadingState.LOADING && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="w-12 h-12 border-t-2 border-r-2 border-[#D4AF37] rounded-full animate-spin"></div>
                  <span className="text-xs font-mono text-[#D4AF37] animate-pulse">SYNTHESIZING...</span>
                </motion.div>
              )}
              
               {status === LoadingState.ERROR && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-red-400 font-mono text-sm"
                >
                  [Connection Interrupted. Verify API Key Configuration]
                </motion.div>
              )}

              {status === LoadingState.SUCCESS && insight && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="max-w-2xl"
                >
                   <span className="inline-block px-3 py-1 mb-6 text-[10px] uppercase tracking-[0.2em] bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 rounded-full shadow-[0_0_10px_rgba(212,175,55,0.1)]">
                     {insight.topic}
                   </span>
                   <p className="text-2xl md:text-3xl font-display font-light leading-relaxed text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FCD34D] to-[#D4AF37]">
                     "{insight.content}"
                   </p>
                   <div className="mt-8 flex items-center justify-center gap-2">
                     <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]/50"></div>
                     <span className="text-xs text-[#D4AF37]/60 font-mono">END TRANSMISSION</span>
                     <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]/50"></div>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeminiPreview;