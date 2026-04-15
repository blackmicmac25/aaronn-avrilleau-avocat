import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const Icons = {
    Mail: () => <Mail className="w-6 h-6" />,
    Phone: () => <Phone className="w-6 h-6" />,
    MapPin: () => <MapPin className="w-6 h-6" />
  };

  return (
    <div className="bg-[#F2E8D8] pt-28 pb-12 md:pt-36 md:pb-16 font-['Montserrat']">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER HARMONISÉ */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8 reveal">
          <div className="max-w-3xl">
            <span className="text-[#598BB3] uppercase tracking-widest text-xs font-bold mb-4 block underline underline-offset-8">CONTACT</span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900 serif uppercase">
              Prendre <span className="text-slate-400 font-light">Rendez-vous.</span>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          <div className="space-y-8 md:space-y-10 reveal">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold text-[#112056] mt-4 serif tracking-tight">Discutons de votre situation.</h2>
            </div>
            
            <div className="space-y-4 text-slate-600 text-base md:text-lg font-light leading-relaxed serif italic">
                <p>
                    Pour toute demande d’assistance juridique ou fiscale, je vous remercie d’utiliser prioritairement le formulaire de contact ci-dessous ou l’adresse électronique du cabinet, en exposant brièvement les motifs de votre sollicitation.
                </p>
                <p>
                    Je m’efforce de répondre aux nouvelles demandes dans un délai de deux jours ouvrables, sauf situation d’urgence particulière.
                </p>
                <p>
                    Mon numéro de téléphone est à utiliser uniquement en cas d’urgence, en précisant les motifs de votre appel.
                </p>
                <p className="text-sm opacity-80 pt-2 border-t border-slate-200">
                    Dans un souci d’efficacité et de gestion rigoureuse des dossiers, les appels provenant de numéros non identifiés ne donnent pas lieu à réponse et ne font l’objet d’aucun rappel en l’absence de message laissé.
                </p>
            </div>

            <div className="space-y-8 md:space-y-10 pt-4 md:pt-8">
              <div className="flex items-start space-x-6 md:space-x-8 group">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-white flex items-center justify-center rounded-sm text-[#598BB3] border border-slate-100 shadow-sm transition-all group-hover:bg-[#598BB3] group-hover:text-white group-hover:-translate-y-1 shrink-0">
                  <Icons.Mail />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2">Email direct <span className="text-[#112056] normal-case tracking-normal">(En priorité)</span></p>
                  <a href="mailto:cabinet@avrilleau-avocat.fr" className="text-lg md:text-2xl font-bold text-slate-900 hover:text-[#598BB3] transition-colors serif border-b border-transparent hover:border-[#598BB3] break-all md:break-normal">cabinet@avrilleau-avocat.fr</a>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 md:space-x-8 group">
                 <div className="w-12 h-12 md:w-14 md:h-14 bg-white flex items-center justify-center rounded-sm text-[#598BB3] border border-slate-100 shadow-sm transition-all group-hover:bg-[#598BB3] group-hover:text-white group-hover:-translate-y-1 shrink-0">
                  <Icons.Phone />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2">Portable <span className="text-[#112056] normal-case tracking-normal">(En cas d'urgence)</span></p>
                  <a href="tel:+33750830928" className="text-lg md:text-2xl font-bold text-slate-900 hover:text-[#598BB3] transition-colors serif">+33 (0)7 50 83 09 28</a>
                </div>
              </div>

              <div className="flex items-start space-x-6 md:space-x-8 group">
                 <div className="w-12 h-12 md:w-14 md:h-14 bg-white flex items-center justify-center rounded-sm text-[#598BB3] border border-slate-100 shadow-sm transition-all group-hover:bg-[#598BB3] group-hover:text-white group-hover:-translate-y-1 shrink-0">
                  <Icons.MapPin />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2">Secteurs d'intervention</p>
                  <p className="text-slate-900 font-bold serif text-base md:text-lg leading-relaxed">
                    Bureaux à Montpellier — <br />
                    Déplacements sur Perpignan & en distanciel
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-16 rounded-sm border border-slate-100 shadow-2xl reveal relative overflow-hidden" style={{ transitionDelay: '0.2s' }}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#598BB3]/5 -mr-16 -mt-16 rounded-full"></div>
            
            {/* Photo above form */}
            <div className="w-full h-48 md:h-64 mb-8 overflow-hidden rounded-sm relative z-10 shadow-sm border border-slate-100 bg-[#F2E8D8] flex items-center justify-center">
               <img src="https://i.ibb.co/rfRqYM6j/211c4b96-7f3a-4c02-9abb-470e2859fced.png" alt="Avocat" className="w-full h-auto object-cover" />
            </div>
            <form className="space-y-6 md:space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2 md:space-y-3">
                  <label className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Nom</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 px-5 py-4 text-sm focus:outline-none focus:border-[#598BB3] transition-colors rounded-sm" placeholder="Votre nom" />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <label className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Prénom</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 px-5 py-4 text-sm focus:outline-none focus:border-[#598BB3] transition-colors rounded-sm" placeholder="Votre prénom" />
                </div>
              </div>
              
              <div className="space-y-2 md:space-y-3">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Email</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-100 px-5 py-4 text-sm focus:outline-none focus:border-[#598BB3] transition-colors rounded-sm" placeholder="votre@email.com" />
              </div>

              <div className="space-y-2 md:space-y-3">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Portable</label>
                <input type="tel" className="w-full bg-slate-50 border border-slate-100 px-5 py-4 text-sm focus:outline-none focus:border-[#598BB3] transition-colors rounded-sm" placeholder="Votre numéro de mobile" />
              </div>

              <div className="space-y-2 md:space-y-3">
                <label className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">Message</label>
                <textarea rows={5} className="w-full bg-slate-50 border border-slate-100 px-5 py-4 text-sm focus:outline-none focus:border-[#598BB3] transition-colors rounded-sm resize-none" placeholder="Précisez brièvement votre besoin..."></textarea>
              </div>

              <button type="button" className="w-full bg-[#112056] text-white font-bold uppercase tracking-[0.3em] text-[9px] md:text-[10px] py-5 md:py-6 hover:bg-[#598BB3] transition-all shadow-xl active:scale-[0.98] rounded-sm">
                Envoyer la demande
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;