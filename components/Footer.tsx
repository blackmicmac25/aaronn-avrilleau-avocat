import React from 'react';
import { MapPin, Car, Video, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const institutionLogos = [
    "https://i.ibb.co/BH0QSsH6/barreau-mtp-transparent.png",
    "https://i.ibb.co/HLTqbb23/djce-poppins.png",
    "https://i.ibb.co/xS8DwfcK/edacs.png",
    "https://i.ibb.co/Qvq0vdrv/Logo-Couleur-fac-de-droit-montpellier.png"
  ];

  return (
    <footer id="contact" className="py-24 bg-[#F2E8D8] border-t border-slate-200/50 font-['Montserrat']">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <img 
                src="https://i.ibb.co/HDtb468b/jpeg-2-Copie.png" 
                alt="Cabinet Aaronn AVRILLEAU" 
                className="h-10 w-auto object-contain"
              />
              <h4 className="text-base font-bold tracking-tight text-slate-900">Aaronn <br/><span className="font-light">AVRILLEAU</span></h4>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
                Avocat en droit fiscal et droit des sociétés. Accompagnement stratégique sur-mesure pour les dirigeants d'entreprises.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/aaronn-avrilleau" target="_blank" className="w-10 h-10 bg-white text-[#112056] border border-slate-200 rounded-full flex items-center justify-center hover:bg-[#112056] hover:text-white transition-all shadow-sm active:scale-95">
                <Linkedin className="w-5 h-5" fill="currentColor" />
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h5 className="text-[#598BB3] uppercase tracking-widest text-[10px] font-bold">Coordonnées</h5>
            <ul className="space-y-4">
              <li><a href="mailto:cabinet@avrilleau-avocat.fr" className="text-slate-600 hover:text-[#598BB3] text-xs underline decoration-slate-200 underline-offset-8 transition-colors">cabinet@avrilleau-avocat.fr</a></li>
              <li><a href="tel:+33750830928" className="text-slate-900 hover:text-[#598BB3] font-bold text-base transition-colors">+33 (0)7 50 83 09 28</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-[#598BB3] uppercase tracking-widest text-[10px] font-bold">Localisation</h5>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-[#598BB3] mt-1 shrink-0" />
                <p className="text-slate-600 text-xs">
                  <span className="block font-bold text-slate-900">Cabinet Montpellier</span>
                  Cabinet principal (Hérault)
                </p>
              </li>
              <li className="flex items-start space-x-4">
                <Car className="w-5 h-5 text-[#598BB3] mt-1 shrink-0" />
                <p className="text-slate-600 text-xs">
                  <span className="block font-bold text-slate-900">Déplacements sur Perpignan</span>
                  Interventions régulières
                </p>
              </li>
              <li className="flex items-start space-x-4">
                <Video className="w-5 h-5 text-[#598BB3] mt-1 shrink-0" />
                <p className="text-slate-600 text-xs">
                  <span className="block font-bold text-slate-900">Rendez-vous distanciel</span>
                  Visioconférence
                </p>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-[#598BB3] uppercase tracking-widest text-[10px] font-bold">Partenaires & Titres</h5>
            <div className="grid grid-cols-2 gap-6">
              {institutionLogos.map((logo, i) => {
                const isEdacs = logo.includes('edacs');
                return (
                  <div key={i} className="flex items-center justify-center">
                    <img 
                      src={logo} 
                      alt="Logo Partenaire" 
                      className={`${isEdacs ? 'max-h-16 scale-110' : 'max-h-12'} w-auto object-contain transition-transform hover:scale-105`} 
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="mt-24 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-[10px] uppercase tracking-widest font-bold">
          <p>© 2026 Maître Aaronn AVRILLEAU.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-slate-900">Mentions Légales</a>
            <a href="#" className="hover:text-slate-900">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;