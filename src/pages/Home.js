import React, { useRef, useState } from 'react';
import ModernFooter from './ModernFooter';

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

const BackgroundPattern = () => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-violet-900 to-blue-900"/>
    <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"/>
    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}/>
    <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}/>
    <div 
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    />
  </div>
);

const LoginModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici votre logique de connexion
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
         onClick={onClose}>
      <div className="relative w-full max-w-md"
           onClick={e => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/80 hover:text-white text-sm flex items-center gap-2 group"
        >
          Retour à l'accueil
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="w-full p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              AdVance
            </h1>
            <p className="mt-3 text-white/80">Connectez-vous à votre compte</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Adresse email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-pink-500 transition-colors"
                placeholder="nom@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white/90 mb-2">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-pink-500 transition-colors"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-white/80">
                <input 
                  type="checkbox"
                  className="w-4 h-4 rounded border-white/20 bg-white/10 text-pink-500 focus:ring-pink-500 focus:ring-offset-0"
                />
                <span className="ml-2">Se souvenir de moi</span>
              </label>
              <button type="button" className="text-white/80 hover:text-white transition-colors">
                Mot de passe oublié ?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
            >
              Se connecter
            </button>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-white/60">
                  Ou continuer avec
                </span>
              </div>
            </div>

            <button
              type="button"
              className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-all border border-white/20 flex items-center justify-center gap-3"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continuer avec Google
            </button>

            <p className="text-center text-white/80">
              Pas encore de compte ?{' '}
              <button type="button" className="text-white hover:text-pink-400 transition-colors font-medium">
                S'inscrire
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default function LandingPage() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const pricingRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAuth = (type) => {
    if (type === 'login') {
      setShowLoginModal(true);
    } else {
      window.location.href = `/${type}`;
    }
  };

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <BackgroundPattern />

      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <span 
                className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent cursor-pointer" 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                AdVance
              </span>
            </div>
            <div className="flex items-center gap-8">
              <button 
                onClick={() => scrollToSection(pricingRef)} 
                className="text-lg text-white/90 hover:text-white font-medium transition-colors"
              >
                Prix
              </button>
              <button 
                onClick={() => scrollToSection(faqRef)}
                className="text-lg text-white/90 hover:text-white font-medium transition-colors"
              >
                FAQ
              </button>
              <button 
                onClick={() => handleAuth('login')}
                className="px-6 py-2.5 text-white border-2 border-white/20 rounded-xl hover:bg-white/10 font-medium transition-all"
              >
                Se connecter
              </button>
              <button 
                onClick={() => handleAuth('signup')}
                className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
              >
                Essai gratuit
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-40 pb-20 text-center px-4">
        <div className="inline-flex items-center bg-white/10 px-5 py-2 rounded-2xl backdrop-blur-sm border border-white/20 mb-8">
          <span className="text-sm font-semibold px-3 py-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-xl mr-3">
            NOUVEAU
          </span>
          <span className="text-white">AdVance v2 est disponible</span>
        </div>
        <h1 className="text-7xl font-bold mb-8 leading-tight">
        Révolutionnez votre façon de vendre{' '}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
            en ligne
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-pink-500/20 to-blue-500/20 -rotate-2 rounded"/>
          </span>
        </h1>
        <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed">
          AdVance est une solution tout-en-un, conçue pour vous aider à vous lancer en
          e-commerce, augmenter vos ventes et booster vos profits.
        </p>
        <button 
          onClick={() => scrollToSection(pricingRef)} 
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-xl text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
        >
          Découvrir nos offres
        </button>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
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
          ].map((feature, i) => (
            <div key={i} className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 text-pink-400 mb-6">
                <CheckIcon />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
              <p className="text-white/80 text-lg leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing Section */}
      <div ref={pricingRef} className="py-20">
        <h2 className="text-5xl font-bold text-center mb-16 text-white">
          Le seul abonnement dont vous aurez besoin
        </h2>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
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
          ].map((plan, i) => (
            <div key={i} 
              className={`p-8 rounded-2xl backdrop-blur-md ${
                i === 1 
                  ? 'bg-gradient-to-b from-white/20 to-white/10 border-2 border-white/30 relative' 
                  : 'bg-white/10 border border-white/20 hover:bg-white/20'
              } transition-all`}
            >
              {i === 1 && (
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
                  i === 1 
                    ? 'bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl' 
                    : 'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                Commencer
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div ref={faqRef} className="py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-white">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Comment fonctionne l'essai gratuit ?",
                a: "L'essai gratuit vous donne accès à toutes les fonctionnalités pendant 14 jours, sans engagement."
              },
              {
                q: "Puis-je changer d'offre à tout moment ?",
                a: "Oui, vous pouvez upgrader ou downgrader votre abonnement à tout moment."
              },
              {
                q: "Comment puis-je annuler mon abonnement ?",
                a: "Vous pouvez annuler votre abonnement depuis votre espace client en quelques clics."
              }
            ].map((faq, i) => (
              <div key={i} className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                <h3 className="text-2xl font-semibold mb-4 text-white">{faq.q}</h3>
                <p className="text-white/80 text-lg leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ModernFooter />

      {/* Footer */}
     {/* Footer */}
{/* <footer className="py-12 border-t border-white/10">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
      <div>
        <h3 className="text-white font-semibold mb-4">AdVance</h3>
        <p className="text-white/60">
          Solution tout-en-un pour votre succès en e-commerce
        </p>
      </div>
      
      <div>
        <h3 className="text-white font-semibold mb-4">Légal</h3>
        <ul className="space-y-2">
          <li>
            <a href="/privacy" className="text-white/60 hover:text-white">
              Politique de confidentialité
            </a>
          </li>
          <li>
            <a href="/terms" className="text-white/60 hover:text-white">
              Conditions générales
            </a>
          </li>
          <li>
            <a href="/cookies" className="text-white/60 hover:text-white">
              Politique des cookies
            </a>
          </li>
          <li>
            <a href="/mentions-legales" className="text-white/60 hover:text-white">
              Mentions légales
            </a>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-4">Contact</h3>
        <ul className="space-y-2">
          <li>
            <a href="mailto:contact@advance.com" className="text-white/60 hover:text-white">
              contact@advance.com
            </a>
          </li>
          <li className="text-white/60">
            42 rue de l'Innovation
          </li>
          <li className="text-white/60">
            75001 Paris, France
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-white font-semibold mb-4">Suivez-nous</h3>
        <div className="flex space-x-4">
          <a href="#" className="text-white/60 hover:text-white">
            Twitter
          </a>
          <a href="#" className="text-white/60 hover:text-white">
            LinkedIn
          </a>
          <a href="#" className="text-white/60 hover:text-white">
            Instagram
          </a>
        </div>
      </div>
    </div>

    <div className="pt-8 border-t border-white/10 text-center text-white/60">
      <p>© 2024 AdVance. Tous droits réservés</p>
    </div>
  </div>
</footer> */}
    </div>
  );
}