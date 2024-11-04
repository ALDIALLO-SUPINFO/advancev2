import React from 'react';

const HeroSection = ({ scrollToSection, pricingRef }) => (
  <div className="pt-24 sm:pt-40 pb-20 text-center px-4">
    <div className="inline-flex flex-col sm:flex-row items-center bg-white/10 px-3 sm:px-5 py-2 rounded-2xl backdrop-blur-sm border border-white/20 mb-8">
      <span className="text-sm font-semibold px-3 py-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-xl mb-2 sm:mb-0 sm:mr-3">
        NOUVEAU
      </span>
      <span className="text-white text-center sm:text-left">AdVance v2 est disponible</span>
    </div>
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight px-2 sm:px-4">
      Révolutionnez votre façon de vendre{' '}
      <span className="relative inline-block">
        <span className="relative z-10 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
          en ligne
        </span>
        <div className="absolute -bottom-2 left-0 right-0 h-3 sm:h-4 bg-gradient-to-r from-pink-500/20 to-blue-500/20 -rotate-2 rounded"/>
      </span>
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
      AdVance est une solution tout-en-un, conçue pour vous aider à vous lancer en
      e-commerce, augmenter vos ventes et booster vos profits.
    </p>
    <button 
      onClick={() => scrollToSection(pricingRef)} 
      className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-lg sm:text-xl text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl mx-4 sm:mx-0"
    >
      Découvrir nos offres
    </button>
  </div>
);

export default HeroSection;