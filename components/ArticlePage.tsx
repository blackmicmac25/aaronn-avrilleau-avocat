import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';

const articlesData: Record<string, { 
  title: string; 
  date: string; 
  category: string;
  image: string; 
  content: React.ReactNode 
}> = {
  "controle-fiscal": {
    title: "Présentation du contrôle et contentieux fiscal ?",
    date: "Article de fond",
    category: "Défense & Procédure",
    image: "https://images.pexels.com/photos/3760809/pexels-photo-3760809.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content: (
      <>
        <p className="lead text-xl md:text-2xl font-serif text-slate-800 italic mb-10 border-l-4 border-[#598BB3] pl-6">
          Le contrôle fiscal est souvent vécu comme une épreuve anxiogène pour le contribuable, qu'il soit particulier ou dirigeant d'entreprise. Pourtant, c'est une procédure encadrée par des règles strictes qui protègent vos droits.
        </p>
        
        <h3 className="text-2xl md:text-3xl font-bold text-[#112056] mt-12 mb-6 uppercase tracking-widest text-sm">1. Les différentes formes de contrôle</h3>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          L'administration fiscale dispose de plusieurs outils pour vérifier votre situation. Cela va du simple <strong>contrôle sur pièces</strong> (effectué depuis les bureaux de l'administration) à la <strong>vérification de comptabilité</strong> pour les entreprises, ou l'<strong>ESFP</strong> (Examen contradictoire de la Situation Fiscale Personnelle) pour les particuliers.
        </p>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          Chacune de ces procédures répond à un formalisme précis (envoi d'un avis de vérification, charte du contribuable) dont le non-respect peut entraîner la nullité de la procédure.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-[#112056] mt-12 mb-6 uppercase tracking-widest text-sm">2. Le rôle de l'avocat fiscaliste</h3>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          L'intervention de l'avocat ne doit pas être vue comme un aveu de culpabilité, mais comme un rééquilibrage du rapport de force. Notre rôle est de :
        </p>
        <ul className="list-disc pl-6 space-y-4 mb-8 text-slate-700 text-lg marker:text-[#598BB3]">
          <li>Vérifier la régularité formelle de la procédure engagée.</li>
          <li>Servir d'interlocuteur unique pour éviter les maladresses de communication.</li>
          <li>Négocier les pénalités et, si nécessaire, contester les redressements.</li>
        </ul>

        <h3 className="text-2xl md:text-3xl font-bold text-[#112056] mt-12 mb-6 uppercase tracking-widest text-sm">3. La phase contentieuse</h3>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          Si le dialogue avec le vérificateur n'aboutit pas, le contentieux s'ouvre. Il commence par une réclamation contentieuse préalable et peut se poursuivre devant le Tribunal Administratif. C'est ici que l'expertise technique du cabinet prend tout son sens pour défendre vos intérêts.
        </p>
      </>
    )
  },
  "holding": {
    title: "Quand est-ce que la mise en place d'une société holding présente un intérêt ?",
    date: "Stratégie d'Entreprise",
    category: "Structuration",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    content: (
      <>
        <p className="lead text-xl md:text-2xl font-serif text-slate-800 italic mb-10 border-l-4 border-[#598BB3] pl-6">
          La société holding est souvent présentée comme le "Graal" de l'optimisation fiscale et patrimoniale. Si ses avantages sont indéniables, sa mise en place doit répondre à des objectifs précis pour être efficace.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-[#112056] mt-12 mb-6 uppercase tracking-widest text-sm">1. L'effet de levier fiscal pour le réinvestissement</h3>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          C'est l'atout majeur. Lorsqu'une société d'exploitation verse des dividendes à une personne physique, ceux-ci sont taxés à la "Flat Tax" (30%). Lorsqu'ils remontent à une holding (sous régime mère-fille), ils sont quasiment exonérés d'impôt (taxation sur une quote-part de 5% uniquement).
        </p>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          <strong>Résultat :</strong> La holding dispose de beaucoup plus de trésorerie pour réinvestir dans de nouveaux projets (immobilier, rachat de concurrents).
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-[#112056] mt-12 mb-6 uppercase tracking-widest text-sm">2. L'effet de levier financier (LBO)</h3>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          Pour acquérir une société cible, la holding peut emprunter. Le remboursement de l'emprunt sera assuré par les dividendes remontés de la société cible. De plus, grâce à l'intégration fiscale, les intérêts d'emprunt peuvent parfois être déduits.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-[#112056] mt-12 mb-6 uppercase tracking-widest text-sm">3. Organisation patrimoniale</h3>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          La holding facilite la transmission. Il est souvent plus simple de transmettre des parts de holding à ses enfants (via un pacte Dutreil par exemple) que des parts de plusieurs sociétés d'exploitation distinctes.
        </p>
      </>
    )
  },
  "transmission": {
    title: "L'importance d'anticiper la transmission de son patrimoine !",
    date: "Gestion de Patrimoine",
    category: "Ingénierie Patrimoniale",
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2000&auto=format&fit=crop",
    content: (
      <>
        <p className="lead text-xl md:text-2xl font-serif text-slate-800 italic mb-10 border-l-4 border-[#598BB3] pl-6">
          On ne possède pas un patrimoine, on en est le gardien pour les générations futures. En matière fiscale, l'absence d'anticipation est souvent synonyme de lourdes pertes lors de la succession.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-[#112056] mt-12 mb-6 uppercase tracking-widest text-sm">1. Le coût de l'inaction</h3>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          En France, les droits de succession peuvent atteindre 45% en ligne directe et 60% pour des tiers ou parents éloignés. Sans préparation, vos héritiers peuvent être contraints de vendre les biens (ou l'entreprise) simplement pour payer l'impôt.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-[#112056] mt-12 mb-6 uppercase tracking-widest text-sm">2. Le démembrement de propriété</h3>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          Donner la nue-propriété d'un bien tout en conservant l'usufruit (la jouissance) est une technique classique mais redoutable. Les droits de donation sont calculés sur une valeur réduite du bien. Au décès, l'usufruit s'éteint et l'héritier récupère la pleine propriété sans droits supplémentaires.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-[#112056] mt-12 mb-6 uppercase tracking-widest text-sm">3. Le Pacte Dutreil pour les entreprises</h3>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          Pour les dirigeants, c'est le dispositif roi. Il permet, sous conditions d'engagement de conservation des titres, une exonération de 75% de la valeur de l'entreprise pour le calcul des droits de mutation. Une économie d'impôt souvent vitale pour la pérennité de la société.
        </p>
      </>
    )
  },
  "reseaux-sociaux": {
    title: "Une demande d'ami sur vos réseaux ? Attention cela peut être l'administration fiscale !",
    date: "Actualité Fiscale",
    category: "Contrôle Fiscal",
    image: "https://images.pexels.com/photos/5426409/pexels-photo-5426409.jpeg?auto=compress&cs=tinysrgb&w=1600",
    content: (
      <>
        <p className="lead text-xl md:text-2xl font-serif text-slate-800 italic mb-10 border-l-4 border-[#598BB3] pl-6">
          L'administration fiscale est entrée dans l'ère du Big Data. Vos publications sur Instagram, Facebook ou LinkedIn peuvent désormais être utilisées contre vous.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-[#112056] mt-12 mb-6 uppercase tracking-widest text-sm">1. La fin de la vie privée fiscale ?</h3>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          Depuis la loi de finances pour 2020, l'administration fiscale est autorisée à collecter et analyser les données rendues publiques par les utilisateurs des réseaux sociaux. C'est ce qu'on appelle le "Data Mining".
        </p>

        <h3 className="text-2xl md:text-3xl font-bold text-[#112056] mt-12 mb-6 uppercase tracking-widest text-sm">2. Que cherchent-ils ?</h3>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          L'objectif est de déceler des incohérences entre le train de vie affiché et les revenus déclarés.
        </p>
        <ul className="list-disc pl-6 space-y-4 mb-8 text-slate-700 text-lg marker:text-[#598BB3]">
          <li>Une photo de vacances aux Bahamas alors que vous déclarez un revenu modeste ?</li>
          <li>Une annonce de vente de voiture de luxe non déclarée ?</li>
          <li>Une fausse domiciliation à l'étranger alors que vous postez tous les jours depuis la France ?</li>
        </ul>

        <h3 className="text-2xl md:text-3xl font-bold text-[#112056] mt-12 mb-6 uppercase tracking-widest text-sm">3. Comment se protéger ?</h3>
        <p className="mb-6 text-slate-700 leading-relaxed text-lg">
          La première règle est la prudence numérique. Verrouillez vos profils en mode "privé". Soyez conscient que tout ce qui est public est susceptible d'être analysé par les algorithmes de Bercy. En cas de contrôle basé sur ces éléments, l'assistance d'un avocat est cruciale pour vérifier la légalité de la collecte de preuve.
        </p>
      </>
    )
  }
};

const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!slug || !articlesData[slug]) {
    return <Navigate to="/actualites" replace />;
  }

  const article = articlesData[slug];

  return (
    <div className="bg-white min-h-screen pt-20 pb-20">
        {/* HERO IMAGE */}
        <div className="h-[50vh] md:h-[60vh] relative overflow-hidden">
            <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover attachment-fixed"
            />
            <div className="absolute inset-0 bg-[#112056]/60"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-24 max-w-7xl mx-auto">
                <span className="inline-block px-4 py-2 bg-[#598BB3] text-white text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
                    {article.category}
                </span>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white serif leading-tight max-w-4xl">
                    {article.title}
                </h1>
            </div>
        </div>

        {/* CONTENT */}
        <article className="max-w-4xl mx-auto px-6 py-12 md:py-16">
            <div className="prose prose-lg md:prose-xl prose-slate max-w-none font-light leading-loose text-justify">
                {article.content}
            </div>

            {/* AUTHOR BOX */}
            <div className="mt-20 p-8 md:p-12 bg-[#F2E8D8] border-l-4 border-[#112056] flex flex-col md:flex-row items-center gap-8">
                <div className="shrink-0">
                    <img 
                        src="https://www.barreau-montpellier.com/upload/photo-annuaire/5059.png?1764686842" 
                        alt="Aaronn AVRILLEAU" 
                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                </div>
                <div>
                    <p className="text-[#598BB3] font-bold uppercase tracking-widest text-xs mb-2">Auteur</p>
                    <h4 className="text-2xl font-bold serif text-slate-900 mb-2">Maître Aaronn AVRILLEAU</h4>
                    <p className="text-slate-600 text-base mb-4">Avocat au Barreau de Montpellier — Expert en Droit Fiscal</p>
                    <Link to="/contact" className="text-[#112056] font-bold uppercase tracking-widest text-[10px] border-b border-[#112056] hover:text-[#598BB3] hover:border-[#598BB3] transition-all">
                        Prendre rendez-vous
                    </Link>
                </div>
            </div>

            {/* NAVIGATION */}
            <div className="mt-12 text-center">
                <Link to="/actualites" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#598BB3] transition-colors font-medium uppercase tracking-widest text-xs">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    Retour aux publications
                </Link>
            </div>
        </article>
    </div>
  );
};

export default ArticlePage;