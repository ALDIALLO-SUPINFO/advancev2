import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navigation = ({ 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  scrollToSection,
  pricingRef,
  faqRef 
}) => {
  const navigate = useNavigate();

  const handleAuth = (type) => {
    if (type === 'login') {
      navigate('/login');
    } else if (type === 'signup') {
      navigate('/signup');
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-4 sm:h-20">
          <div className="flex items-center w-full sm:w-auto justify-between">
            <span 
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent cursor-pointer" 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
            >
              AdVance
            </span>
            <button 
              className="sm:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16m-16 6h16" />
              </svg>
            </button>
          </div>
          <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row items-center gap-4 sm:gap-8 w-full sm:w-auto mt-4 sm:mt-0`}>
            <button 
              onClick={() => scrollToSection(pricingRef)} 
              className="text-lg text-white/90 hover:text-white font-medium transition-colors w-full sm:w-auto py-2 sm:py-0"
            >
              Prix
            </button>
            <button 
              onClick={() => scrollToSection(faqRef)}
              className="text-lg text-white/90 hover:text-white font-medium transition-colors w-full sm:w-auto py-2 sm:py-0"
            >
              FAQ
            </button>
            <button 
              onClick={() => handleAuth('login')}
              className="w-full sm:w-auto px-6 py-2.5 text-white border-2 border-white/20 rounded-xl hover:bg-white/10 font-medium transition-all"
            >
              Se connecter
            </button>
            <button 
              onClick={() => handleAuth('signup')}
              className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
            >
              Essai gratuit
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;