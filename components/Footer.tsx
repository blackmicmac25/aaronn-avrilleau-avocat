import React from 'react';
import { MapPin, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-12 pb-6 bg-[#F2E8D8] border-t border-slate-200/50 font-['Montserrat']">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <img loading="lazy" decoding="async" 
                src="https://i.ibb.co/HDtb468b/jpeg-2-Copie.png" 
                alt="Cabinet Aaronn AVRILLEAU" 
                className="h-10 w-auto object-contain"
              />
              <div className="h-10 w-[2px] bg-[#112056]"></div>
              <div className="flex flex-col justify-center">
                <h4 className="text-base font-bold tracking-wide text-[#112056] leading-none uppercase">
                  AVRILLEAU
                </h4>
                <h4 className="text-base font-bold tracking-wide text-[#112056] leading-none uppercase mt-1">
                  AVOCAT
                </h4>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/aaronn-avrilleau" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-all active:scale-95"
                title="LinkedIn"
              >
                <img loading="lazy" decoding="async" 
                  src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" 
                  alt="LinkedIn" 
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h5 className="text-[#598BB3] uppercase tracking-widest text-[10px] font-bold">Navigation</h5>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-600 hover:text-[#598BB3] text-[11px] uppercase tracking-wider font-bold transition-colors">Accueil</Link></li>
              <li><Link to="/quand-solliciter" className="text-slate-600 hover:text-[#598BB3] text-[11px] uppercase tracking-wider font-bold transition-colors">Quand solliciter un avocat</Link></li>
              <li><Link to="/honoraires" className="text-slate-600 hover:text-[#598BB3] text-[11px] uppercase tracking-wider font-bold transition-colors">Honoraires</Link></li>
              <li><Link to="/articles-permanents" className="text-slate-600 hover:text-[#598BB3] text-[11px] uppercase tracking-wider font-bold transition-colors">Publications</Link></li>
              <li><Link to="/contact" className="text-[#112056] hover:text-[#598BB3] text-[11px] uppercase tracking-wider font-bold transition-colors flex items-center gap-2">Contact <span className="text-[#598BB3]">→</span></Link></li>
              <li className="pt-2"><a href="mailto:cabinet@avrilleau-avocat.fr" className="text-slate-500 hover:text-[#598BB3] text-[10px] underline decoration-slate-200 underline-offset-8 transition-colors lowercase tracking-wider">cabinet@avrilleau-avocat.fr</a></li>
              <li><a href="tel:+33750830928" className="text-slate-500 hover:text-[#598BB3] text-[10px] underline decoration-slate-200 underline-offset-8 transition-colors tracking-wider">+33 (0)7 50 83 09 28</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-[#598BB3] uppercase tracking-widest text-[10px] font-bold">Localisation</h5>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-[#598BB3] mt-1 shrink-0" />
                <div className="text-slate-600 text-xs text-justify">
                  <span className="block font-bold text-slate-900">Cabinet domicilié à Montpellier</span>
                  <p>Déplacements à Perpignan et Montpellier</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <Video className="w-5 h-5 text-[#598BB3] mt-1 shrink-0" />
                <p className="text-slate-600 text-xs text-justify">
                  <span className="block font-bold text-slate-900">Visioconférence</span>
                  Accompagnement partout en France
                </p>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-[10px] uppercase tracking-widest font-bold">
          <p>© 2026 Maître Aaronn AVRILLEAU.</p>
          <div className="flex space-x-8">
            <Link to="/mentions-legales" className="hover:text-slate-900 transition-colors">Mentions Légales</Link>
            <Link to="/cookies" className="hover:text-slate-900 transition-colors">Confidentialité & Cookies</Link>
            <Link to="/accessibilite" className="hover:text-slate-900 transition-colors">Accessibilité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;