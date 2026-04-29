import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-8 animate-in slide-in-from-bottom-full duration-700">
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md border border-slate-100 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] p-6 md:p-8 rounded-sm flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <div className="flex-grow space-y-2 text-center md:text-left">
          <h4 className="text-[#112056] font-bold serif text-lg">Respect de votre vie privée</h4>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Ce site utilise des cookies pour améliorer votre expérience. En continuant votre navigation, vous acceptez notre <Link to="/cookies" className="text-[#598BB3] underline font-medium">politique de confidentialité</Link>.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
          <button 
            onClick={handleDecline}
            className="px-6 py-3 text-[#112056] font-bold uppercase tracking-widest text-[10px] border border-slate-200 hover:bg-slate-50 transition-colors rounded-sm"
          >
            Continuer sans accepter
          </button>
          <button 
            onClick={handleAccept}
            className="px-8 py-3 bg-[#112056] text-white font-bold uppercase tracking-widest text-[10px] hover:bg-[#598BB3] transition-all shadow-lg rounded-sm"
          >
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
