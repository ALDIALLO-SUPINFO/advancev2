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

const PricingCard = ({ plan, index, handleAuth }) => (
  <div 
    className={`p-8 rounded-2xl backdrop-blur-md ${
      index === 1 
        ? 'bg-gradient-to-b from-white/20 to-white/10 border-2 border-white/30 relative' 
        : 'bg-white/10 border border-white/20 hover:bg-white/20'
    } transition-all`}
  >
    {index === 1 && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-1.5 rounded-xl text-sm font-medium">
        Plus populaire
      </div>
    )}
    <h3 className="text-2xl font-bold mb-4 text-white">{plan.name}</h3>
    <p className="text-5xl font-bold mb-8 text-white">
      {plan.price}
      <span className="text-lg text-white/60">/mois</span>
    </p>
    <ul className="space-y-4 mb-8">
      {plan.features.map((feature, j) => (
        <li key={j} className="flex items-center gap-3">
          <div className="w-5 h-5 text-pink-400">
            <CheckIcon />
          </div>
          <span className="text-white/90">{feature}</span>
        </li>
      ))}
    </ul>
    <button 
      onClick={() => handleAuth('signup')}
      className={`w-full py-4 rounded-xl transition-all text-lg font-medium ${
        index === 1 
          ? 'bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl' 
          : 'bg-white/10 hover:bg-white/20 text-white'
      }`}
    >
      Commencer
    </button>
  </div>
);

const PricingSection = ({ pricingRef, handleAuth }) => {
  const plans = [
    {
      name: "Starter",
      price: "19€",
      features: ["Recherche de produits", "Analyses basiques", "Support email"]
    },
    {
      name: "Premium",
      price: "49€",
      features: ["Tout Starter +", "Analyses avancées", "Support prioritaire"]
    },
    {
      name: "Business",
      price: "99€",
      features: ["Tout Premium +", "API accès", "Support dédié"]
    }
  ];

  return (
    <div ref={pricingRef} className="py-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 text-white">
        Dominez le marché pendant que les autres hésitent
      </h2>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <PricingCard key={i} plan={plan} index={i} handleAuth={handleAuth} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;