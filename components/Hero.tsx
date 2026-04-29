import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/aaronn-avrilleau.jpg",
      title: "Maître Aaronn AVRILLEAU",
      subtitle: "Avocat au Barreau",
      boxTitle: "AVOCAT EN \n DROIT FISCAL",
      boxSubtitle: "Conseil et Contentieux"
    },
    {
      image: "/montpellier.jpg",
      title: "Montpellier",
      subtitle: "Place de la Comédie",
      boxTitle: "CABINET \n DOMICILIÉ",
      boxSubtitle: "À Montpellier"
    },
    {
      image: "/perpignan.jpg",
      title: "Intervention sur Perpignan",
      subtitle: "",
      boxTitle: "INTERVENTION \n RÉGULIÈRE",
      boxSubtitle: "Sur Perpignan"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-12 md:pt-36 md:pb-20 overflow-hidden bg-[#F2E8D8]">
      <div className="absolute top-0 right-0 w-full h-full bg-[#F2E8D8] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Responsive grid: flex column on mobile (ordered), 12-col grid on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center gap-8">

          {/* BLOCK 1 (mobile order 1): Name, subtitle, badges */}
          <div className="lg:col-span-5 lg:row-start-1 order-1 space-y-4 text-left flex flex-col items-start pt-10 lg:pt-0">
            <h1 className="reveal flex flex-col items-start leading-[1.1] mb-2">
              <span className="brand-gradient serif text-2xl md:text-3xl lg:text-4xl font-bold mb-1">Maître Aaronn</span>
              <span className="brand-gradient text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tighter">AVRILLEAU</span>
            </h1>

            <div className="reveal space-y-4">
              <p className="text-[#598BB3] text-sm md:text-base font-bold uppercase tracking-widest border-l-[4px] md:border-l-[6px] border-[#598BB3] pl-4">
                Avocat en droit fiscal inscrit à la Cour d'appel de Montpellier
              </p>
            </div>

            <div className="reveal flex flex-row flex-wrap gap-3 items-center">
              <span className="inline-block px-4 py-1.5 border-2 border-[#112056] text-[#112056] font-bold text-[9px] md:text-[10px] tracking-[0.2em] uppercase rounded-sm bg-white/50">
                Cabinet domicilié à Montpellier
              </span>
              <span className="inline-block px-4 py-1.5 border-2 border-[#B6834A] text-[#B6834A] font-bold text-[9px] md:text-[10px] tracking-[0.2em] uppercase rounded-sm bg-white/50">
                Intervention sur Perpignan
              </span>
            </div>

            {/* Description + CTA: hidden on mobile (shown in block 3), visible on desktop */}
            <div className="hidden lg:block space-y-6 w-full">
              <div className="text-slate-700 text-sm md:text-[15px] space-y-4 font-normal leading-relaxed text-justify pr-4">
                <p>Originaire des Pyrénées-Orientales, Maître Aaronn AVRILLEAU a grandi dans les Albères avant de réaliser son parcours universitaire à Montpellier.</p>
                <p>Titulaire du <strong className="font-bold">DJCE – Diplôme de juriste conseil d'entreprise</strong>, formation exigeante et reconnue en droit des affaires, il est également titulaire du certificat d'études spécialisées en droit fiscal.</p>
                <p>Après plusieurs expériences professionnelles, notamment au sein des cabinets Fidal et Deloitte, ainsi qu'à la chambre fiscale du tribunal administratif de Montpellier, il a choisi de mettre cette expertise au service de sa clientèle personnelle à partir de 2026.</p>
                <p>Il accompagne principalement les dirigeants de TPE et de PME dans leurs problématiques juridiques et fiscales en intervenant principalement sur Montpellier et Perpignan.</p>
              </div>
              <div className="reveal flex flex-col sm:flex-row gap-4 md:gap-6 pt-2 w-full justify-start">
                <Link to="/contact" className="px-8 py-4 md:px-10 md:py-5 bg-[#112056] text-white font-bold rounded-sm hover:bg-[#598BB3] transition-all text-center uppercase tracking-[0.2em] md:tracking-[0.3em] text-[10px] shadow-xl active:scale-95">
                  Prendre rendez-vous
                </Link>
              </div>
            </div>
          </div>

          {/* BLOCK 2 (mobile order 2): Slideshow — visible on all screen sizes */}
          <div className="lg:col-span-7 lg:row-start-1 order-2 flex justify-center lg:justify-end items-center">
            <div className="relative reveal aspect-[4/5] w-full max-w-sm lg:max-w-lg group/diapo">
              <div className="w-full h-full bg-white overflow-hidden rounded-sm shadow-2xl border border-slate-200/50 group relative">
                {slides.map((slide, index) => (
                  <div 
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  >
                    <img 
                      src={slide.image} 
                      alt={`Slide ${index + 1}`} 
                      fetchPriority={index === 0 ? "high" : "auto"}
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className={`w-full h-full object-cover transition-transform duration-[5s] ease-linear ${index === currentSlide ? 'scale-110' : 'scale-100'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#112056]/80 via-transparent to-transparent pointer-events-none opacity-50"></div>
                  </div>
                ))}

                {/* Pagination Dots */}
                <div className="absolute bottom-8 right-8 z-20 flex gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-500 ${i === currentSlide ? 'bg-white w-6' : 'bg-white/40'}`}
                      aria-label={`Aller à la diapositive ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Dynamic Box */}
              <div className="absolute -bottom-8 left-8 bg-[#112056] p-5 lg:p-8 text-white shadow-2xl w-[75%] text-center transition-transform duration-700 group-hover/diapo:-translate-y-2 z-20">
                <p className="serif text-lg lg:text-2xl font-bold leading-tight text-white mb-2 tracking-tight whitespace-pre-line">
                  {slides[currentSlide].boxTitle}
                </p>
                <p className="text-[10px] lg:text-[12px] uppercase tracking-[0.2em] font-bold text-[#598BB3]">
                  {slides[currentSlide].boxSubtitle}
                </p>
              </div>
            </div>
          </div>

          {/* BLOCK 3 (mobile order 3): Description + CTA — mobile only */}
          <div className="lg:hidden order-3 mt-10 space-y-6">
            <div className="text-slate-700 text-sm space-y-4 font-normal leading-relaxed text-justify">
              <p>Originaire des Pyrénées-Orientales, Maître Aaronn AVRILLEAU a grandi dans les Albères avant de réaliser son parcours universitaire à Montpellier.</p>
              <p>Titulaire du <strong className="font-bold">DJCE – Diplôme de juriste conseil d'entreprise</strong>, formation exigeante et reconnue en droit des affaires, il est également titulaire du certificat d'études spécialisées en droit fiscal.</p>
              <p>Après plusieurs expériences professionnelles, notamment au sein des cabinets Fidal et Deloitte, ainsi qu'à la chambre fiscale du tribunal administratif de Montpellier, il a choisi de mettre cette expertise au service de sa clientèle personnelle à partir de 2026.</p>
              <p>Il accompagne principalement les dirigeants de TPE et de PME dans leurs problématiques juridiques et fiscales en intervenant principalement sur Montpellier et Perpignan.</p>
            </div>
            <Link to="/contact" className="inline-block w-full text-center px-8 py-4 bg-[#112056] text-white font-bold rounded-sm hover:bg-[#598BB3] transition-all uppercase tracking-[0.2em] text-[10px] shadow-xl active:scale-95">
              Prendre rendez-vous
            </Link>
          </div>

        </div>{/* end grid */}

        {/* Academic Titles Table */}
        <div className="mt-20 md:mt-32 reveal">
          <div className="bg-white p-8 md:p-12 border border-slate-200/50 shadow-xl rounded-sm group hover:shadow-2xl transition-all duration-700">
            <h4 className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-[#598BB3] mb-8 md:mb-10 border-b-2 border-[#598BB3]/10 pb-6 group-hover:border-[#598BB3]/30 transition-colors">
              Diplômes &amp; Certifications
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 text-slate-800 font-serif text-base md:text-lg leading-relaxed">
              <div className="space-y-6">
                <div className="flex items-start gap-4 group/item">
                  <ChevronRight className="w-5 h-5 text-[#598BB3] mt-1 shrink-0 transition-transform duration-500 group-hover/item:scale-125" />
                  <span className="group-hover/item:text-[#598BB3] transition-colors font-semibold">CAPA – Certificat d'aptitude à la profession d'avocat</span>
                </div>
                <div className="flex items-start gap-4 group/item">
                  <ChevronRight className="w-5 h-5 text-[#598BB3] mt-1 shrink-0 transition-transform duration-500 group-hover/item:scale-125" />
                  <span className="group-hover/item:text-[#598BB3] transition-colors font-semibold">Certificat d'études spécialisées en droit fiscal</span>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group/item">
                  <ChevronRight className="w-5 h-5 text-[#598BB3] mt-1 shrink-0 transition-transform duration-500 group-hover/item:scale-125" />
                  <span className="group-hover/item:text-[#598BB3] transition-colors font-semibold">Magistère et Master DJCE – Diplôme de Juriste Conseil d'Entreprise</span>
                </div>
                <div className="flex items-start gap-4 group/item">
                  <ChevronRight className="w-5 h-5 text-[#598BB3] mt-1 shrink-0 transition-transform duration-500 group-hover/item:scale-125" />
                  <span className="group-hover/item:text-[#598BB3] transition-colors font-semibold">Diplôme universitaire de gestion de patrimoine</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>{/* end max-w-7xl */}
    </section>
  );
};

export default Hero;