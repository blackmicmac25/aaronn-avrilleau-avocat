import React from 'react';

const Methodology: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden relative border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 reveal">
            <div className="relative flex justify-center lg:justify-start">
              <div className="relative group max-w-sm w-full transition-transform duration-700 hover:scale-[1.02]">
                <div className="flex items-center justify-center p-0 md:p-8">
                  <img loading="lazy" decoding="async" 
                    src="https://i.ibb.co/HDtb468b/jpeg-2-Copie.png" 
                    alt="Identité Aaronn AVRILLEAU" 
                    className="w-full h-auto object-contain opacity-90 hover:opacity-100 transition-opacity" 
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-10 reveal">
            <span className="text-[#598BB3] uppercase tracking-widest text-xs font-bold underline underline-offset-8">Méthodologie</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight serif italic text-slate-900">La Sécurité Juridique <br />au cœur de la Performance.</h2>
            <p className="text-slate-500 text-lg leading-relaxed font-light">
              Une stratégie fiscale efficace à <span className="font-semibold text-slate-800">Montpellier</span> ne s'improvise pas. Elle repose sur une méthode rigoureuse.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="p-8 border border-slate-100 bg-white group hover:border-[#598BB3]/50 hover:shadow-2xl transition-all rounded-lg">
                <p className="text-[#598BB3] font-bold text-lg mb-2">Audit</p>
                <p className="text-[11px] text-slate-400 uppercase tracking-widest font-bold">Diagnostic précis.</p>
              </div>
              <div className="p-8 border border-slate-100 bg-white group hover:border-[#598BB3]/50 hover:shadow-2xl transition-all rounded-lg">
                <p className="text-[#598BB3] font-bold text-lg mb-2">Conseil</p>
                <p className="text-[11px] text-slate-400 uppercase tracking-widest font-bold">Optimisation fiscale.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;