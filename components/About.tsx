import React from 'react';
import { ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#F2E8D8] overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-1/4 h-full bg-slate-50/50 -z-10" />
      <div className="absolute -bottom-24 -right-24 text-[30rem] lg:text-[45rem] font-serif text-slate-200/20 select-none -z-10 pointer-events-none leading-none">
        A
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-5 reveal">
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-2xl border border-slate-100 bg-white">
                <img loading="lazy" decoding="async" 
                  src="/aaronn-avrilleau.png" 
                  alt="Maître Aaronn AVRILLEAU" 
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#112056] p-12 text-white shadow-2xl max-w-[340px]">
                <p className="text-xs uppercase tracking-[0.2em] font-bold opacity-70">Barreau de Montpellier</p>
                <p className="serif text-2xl mt-4 font-bold">Maître Aaronn AVRILLEAU</p>
                <p className="text-[10px] mt-8 opacity-50 uppercase tracking-normal leading-relaxed font-semibold">Inscrit à la Cour d'Appel de Montpellier</p>
              </div>
            </div>

            <div className="mt-12 space-y-10 p-12 bg-white border border-slate-100 shadow-xl">
                <h4 className="text-[#598BB3] uppercase tracking-widest text-sm font-bold border-b-2 border-[#598BB3]/20 pb-8 text-center">Titres Académiques</h4>
                <ul className="space-y-10 text-slate-800 text-lg font-semibold serif leading-relaxed">
                    <li className="flex items-start gap-4"><ChevronRight className="w-5 h-5 text-[#598BB3] mt-1.5 shrink-0" /> CAPA – Certificat d’aptitude à la profession d’avocat</li>
                    <li className="flex items-start gap-4"><ChevronRight className="w-5 h-5 text-[#598BB3] mt-1.5 shrink-0" /> Certificat d’études spécialisées en droit fiscal (DESS)</li>
                    <li className="flex items-start gap-4"><ChevronRight className="w-5 h-5 text-[#598BB3] mt-1.5 shrink-0" /> Magistère et Master DJCE – Diplôme de Juriste Conseil d’Entreprise</li>
                    <li className="flex items-start gap-4"><ChevronRight className="w-5 h-5 text-[#598BB3] mt-1.5 shrink-0" /> Diplôme universitaire de gestion de patrimoine</li>
                </ul>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-10 reveal">
            <span className="text-[#598BB3] uppercase tracking-widest text-base font-bold block underline underline-offset-[14px] decoration-4">PRÉSENTATION DU CABINET</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-[1.1] tracking-tight serif">
                L'Expertise au service de <br />
                <span className="font-light text-slate-400">votre stratégie fiscale.</span>
            </h2>
            
            <div className="space-y-8 text-slate-700 leading-relaxed font-normal text-lg md:text-xl">
                <p className="font-bold text-slate-900 border-l-[12px] border-[#598BB3] pl-10 font-serif text-2xl md:text-4xl my-10 py-6 bg-slate-50">
                    Bien que résidant dans les Pyrénées-Orientales, son cabinet est établi à Montpellier.
                </p>
                <p>
                    Au cours de sa formation, Maître AVRILLEAU a réalisé l’intégralité du prestigieux cursus <span className="text-slate-900 font-bold underline decoration-slate-200">DJCE</span>, complété par une spécialisation en droit fiscal.
                </p>
                <p>
                    Son parcours au sein de cabinets internationaux comme <span className="text-slate-900 font-black uppercase tracking-tight">Fidal</span> et <span className="text-slate-900 font-black uppercase tracking-tight">Deloitte</span>, ainsi qu'au sein du Tribunal Administratif et de l'ordre fiscal, lui confère aujourd'hui une vision globale des enjeux business.
                </p>
                <p>
                    Depuis fin 2025, il met cette rigueur au profit de sa propre clientèle au sein de son cabinet situé à Montpellier, tout en intervenant régulièrement pour ses clients basés dans les Pyrénées-Orientales.
                </p>
                
                <div className="p-14 bg-white border-2 border-slate-100 my-10 space-y-8 shadow-2xl border-l-[16px] border-l-[#112056]">
                    <h4 className="font-bold text-[#112056] uppercase tracking-[0.3em] text-xs">Transmission du savoir</h4>
                    <p className="text-xl md:text-2xl font-serif text-slate-800">
                        Maître AVRILLEAU intervient auprès des futurs experts du <span className="font-bold text-[#598BB3]">magistère DJCE</span> à la faculté de droit de Montpellier.
                    </p>
                </div>
                <div className="flex justify-end pt-8 opacity-60">
                  <div className="text-right">
                    <p className="font-serif text-3xl text-slate-400 italic leading-none">Aaronn Avrilleau</p>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-[#598BB3] font-bold mt-3">Avocat au Barreau</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;