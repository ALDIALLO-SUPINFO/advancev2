import React from 'react';

const CheckIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="24" 
    height="24" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const FeatureCard = ({ title, description }) => (
  <div className="p-6 sm:p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
    <div className="w-10 sm:w-12 h-10 sm:h-12 text-pink-400 mb-4 sm:mb-6">
      <CheckIcon />
    </div>
    <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">{title}</h3>
    <p className="text-base sm:text-lg text-white/80 leading-relaxed">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      title: "Recherche intelligente",
      description: "Trouvez les produits tendances rapidement grâce à notre IA"
    },
    {
      title: "Analyse avancée",
      description: "Obtenez des insights détaillés sur vos performances"
    },
    {
      title: "Import facile",
      description: "Importez des produits en un clic dans votre boutique"
    }
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, i) => (
          <FeatureCard key={i} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;