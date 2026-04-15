import React from 'react';
import { MapPin, Video, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 bg-[#F2E8D8] border-t border-slate-200/50 font-['Montserrat']">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <img 
                src="https://i.ibb.co/HDtb468b/jpeg-2-Copie.png" 
                alt="Cabinet Aaronn AVRILLEAU" 
                className="h-10 w-auto object-contain"
              />
              <h4 className="text-base font-bold tracking-tight text-slate-900">Aaronn <br/><span className="font-light">AVRILLEAU</span></h4>
            </div>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/aaronn-avrilleau" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-all active:scale-95"
                title="LinkedIn"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" 
                  alt="LinkedIn" 
                  className="w-full h-full object-contain"
                />
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h5 className="text-[#598BB3] uppercase tracking-widest text-[10px] font-bold">Menu & Coordonnées</h5>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-slate-900 font-bold text-sm hover:text-[#598BB3] transition-colors flex items-center gap-2">Contact <span className="text-[#598BB3]">→</span></Link></li>
              <li><a href="mailto:cabinet@avrilleau-avocat.fr" className="text-slate-600 hover:text-[#598BB3] text-xs underline decoration-slate-200 underline-offset-8 transition-colors">cabinet@avrilleau-avocat.fr</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h5 className="text-[#598BB3] uppercase tracking-widest text-[10px] font-bold">Localisation & Modalités</h5>
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
        
        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-[10px] uppercase tracking-widest font-bold">
          <p>© 2026 Maître Aaronn AVRILLEAU.</p>
          <div className="flex space-x-8">
            <Link to="/mentions-legales" className="hover:text-slate-900">Mentions Légales</Link>
            <Link to="/cookies" className="hover:text-slate-900">Gestion des Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;