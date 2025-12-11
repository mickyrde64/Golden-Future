import React, { useEffect, useState } from 'react';
import { Github, Twitter, Disc, CheckCircle2, ArrowRight, ArrowDown } from 'lucide-react';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tableData = [
    { label: "Fee (one-time)", basic: "-", loyalty: "-", premium: "33.33 % premium advantage" },
    { label: "Discounts (monthly)", basic: "2 %", loyalty: "2 %", premium: "4 %" },
    { label: "Discounts (total)", basic: "72 %", loyalty: "72 %", premium: "144 %" },
    { label: "Additional bonus", basic: "-", loyalty: "36 % loyalty discount", premium: "200 % premium advantage" },
    { label: "Duration", basic: "3 years", loyalty: "3 years", premium: "3 years" },
    { label: "Cancelable", basic: "Yes", loyalty: "No", premium: "Yes (loss of premium advantage)" },
    { label: "Delivery after", basic: "3 years", loyalty: "3 years", premium: "3 years" },
  ];

  const handleInquire = () => {
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#000000] text-white selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#D4AF37]/10 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[10s]"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#8B4513]/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-[#D4AF37]/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            {/* Gold Bar Icon */}
            <div className="relative w-10 h-4 bg-gradient-to-br from-[#FCD34D] via-[#D4AF37] to-[#B8860B] rounded-[2px] shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:scale-110 transition-transform duration-300 border border-white/20">
                <div className="absolute inset-0 bg-white/30 skew-x-[-20deg] w-2 h-full ml-2 opacity-50"></div>
            </div>
            <span className="font-display font-bold tracking-tight text-lg hidden sm:block text-white group-hover:text-[#D4AF37] transition-colors">The Future is Golden</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm font-medium text-gray-400">
            <button className="text-[#D4AF37] border border-[#D4AF37]/30 px-5 py-2 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all duration-300 text-xs uppercase tracking-widest font-bold shadow-[0_0_10px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        <Hero />
        
        {/* Investment Plans Section */}
        <section className="py-20 md:py-32 px-4 border-t border-[#D4AF37]/10 bg-gradient-to-b from-transparent to-[#111111]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Customer Basic 2 %", 
                subtitle: "Always remain flexible.",
                features: ["2% discount per month", "Cancel anytime*", "Delivery after 36 months"]
              },
              { 
                title: "Customer Basic 2 % + loyalty", 
                subtitle: "Enjoy additional discounts.",
                features: ["2% discount per month", "+ 36% discount at the end of the term", "Delivery after 36 months"]
              },
              { 
                title: "Sales Premium", 
                subtitle: "Build up a gold deposit automatically.",
                features: ["4% discount per month", "automatic gold repurchase", "delivery after 36 months"]
              }
            ].map((plan, i) => (
              <div key={i} className="group relative p-8 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-2 shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] flex flex-col">
                {/* Gold Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FCD34D] via-[#D4AF37] to-[#B8860B] transition-all duration-500"></div>
                
                {/* Texture Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>

                <div className="relative z-10 h-full flex flex-col text-[#2A1801]">
                   <div className="w-12 h-12 rounded-full bg-[#2A1801]/10 flex items-center justify-center mb-6 border border-[#2A1801]/20 backdrop-blur-sm">
                      <div className="w-6 h-6 rounded-sm bg-gradient-to-br from-[#2A1801] to-[#5D4037]"></div>
                   </div>
                   
                   <h3 className="text-2xl font-display font-bold mb-2 tracking-tight">{plan.title}</h3>
                   <p className="font-medium text-[#2A1801]/80 mb-8 italic">{plan.subtitle}</p>
                   
                   <div className="space-y-4 mb-8">
                     {plan.features.map((feature, idx) => (
                       <div key={idx} className="flex items-start gap-3 border-t border-[#2A1801]/10 pt-3">
                         <CheckCircle2 className="w-5 h-5 shrink-0 text-[#2A1801]/70" />
                         <span className="text-sm font-semibold leading-relaxed">{feature}</span>
                       </div>
                     ))}
                   </div>

                   <div className="mt-auto pt-4 border-t border-[#2A1801]/20">
                      <a href="#comparison" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#2A1801] hover:text-[#5D4037] transition-colors group/link">
                        Learn More 
                        <ArrowDown className="w-4 h-4 transition-transform group-hover/link:translate-y-1" />
                      </a>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison Table Section */}
        <section id="comparison" className="py-24 px-4 bg-black relative border-t border-[#D4AF37]/10">
           <div className="max-w-7xl mx-auto">
              <div className="mb-16 text-center">
                 <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-[#FCD34D] to-[#B8860B]">
                    The different products
                 </h2>
                 <p className="text-xl text-gray-400 font-light">in comparison</p>
              </div>

              <div className="overflow-x-auto rounded-xl border border-[#D4AF37]/20 bg-white/5 backdrop-blur-sm shadow-[0_0_30px_rgba(212,175,55,0.05)]">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-[#D4AF37]/10">
                      <th className="p-6 text-[#D4AF37] font-display uppercase tracking-widest text-xs font-bold border-b border-[#D4AF37]/20 w-1/4">Facts</th>
                      <th className="p-6 text-white font-display font-bold border-b border-[#D4AF37]/20 w-1/4">Customer Basic 2 %</th>
                      <th className="p-6 text-white font-display font-bold border-b border-[#D4AF37]/20 w-1/4">Customer Basic 2 %<br/>+ loyalty discount</th>
                      <th className="p-6 text-[#FCD34D] font-display font-bold border-b border-[#D4AF37]/20 w-1/4 relative overflow-hidden">
                        <span className="relative z-10">Sales Premium</span>
                        <div className="absolute inset-0 bg-[#D4AF37]/10 z-0"></div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((row, index) => (
                      <tr key={index} className="hover:bg-white/5 transition-colors border-b border-[#D4AF37]/10">
                        <td className="p-6 font-medium text-gray-300">{row.label}</td>
                        <td className="p-6 text-gray-400">{row.basic}</td>
                        <td className="p-6 text-gray-400">{row.loyalty}</td>
                        <td className="p-6 text-[#FCD34D] font-medium bg-[#D4AF37]/5">{row.premium}</td>
                      </tr>
                    ))}
                    {/* Inquire Now Buttons Row */}
                    <tr className="bg-white/5">
                      <td className="p-6"></td>
                      <td className="p-6">
                        <button onClick={handleInquire} className="w-full py-3 px-4 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 rounded uppercase tracking-widest text-xs font-bold">
                          Inquire Now
                        </button>
                      </td>
                      <td className="p-6">
                        <button onClick={handleInquire} className="w-full py-3 px-4 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 rounded uppercase tracking-widest text-xs font-bold">
                          Inquire Now
                        </button>
                      </td>
                      <td className="p-6 bg-[#D4AF37]/5">
                        <button onClick={handleInquire} className="w-full py-3 px-4 bg-[#D4AF37] text-black hover:bg-[#FCD34D] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all duration-300 rounded uppercase tracking-widest text-xs font-bold">
                          Inquire Now
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
           </div>
        </section>

        <ContactForm />
        
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 border-t border-[#D4AF37]/10 bg-[#000000]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-gray-600 text-sm font-light">
            © 2024 The Future is Golden. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-500 hover:text-[#D4AF37] transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-[#D4AF37] transition-colors"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-gray-500 hover:text-[#D4AF37] transition-colors"><Disc className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;