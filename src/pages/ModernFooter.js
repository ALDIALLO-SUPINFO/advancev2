import React, { useEffect, useState } from 'react';
import { 
  ShoppingCart, 
  Package, 
  TrendingUp, 
  DollarSign,
  MousePointer2,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Globe,
  ArrowUpRight
} from 'lucide-react';

const FloatingElement = ({ Icon, className }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    setPosition({ x: randomX, y: randomY });
    
    const interval = setInterval(() => {
      setPosition(prev => ({
        x: (prev.x + Math.random() * 2 - 1) % 100,
        y: (prev.y + Math.random() * 2 - 1) % 100
      }));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div 
      className={`absolute transition-all duration-3000 ease-in-out ${className}`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`
      }}
    >
      <Icon strokeWidth={1.5} className="text-white/10" />
    </div>
  );
};

const ModernFooter = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      });
    };

    const legalPages = [
        { title: 'Confidentialité', path: '/privacy' },
        { title: 'Conditions générales', path: '/terms' },
        { title: 'Cookies', path: '/cookies' },
        { title: 'Mentions légales', path: '/legal' }
    ];

    const handleEmailClick = () => {
        window.location.href = "mailto:contact@advance.com";
    };

    return (
        <footer 
            className="relative pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16 overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            {/* Background amélioré avec animations */}
            <div className="absolute inset-0 -z-10">
                {/* Dégradé de base */}
                <div className="absolute inset-0 bg-gradient-to-b from-violet-950/50 to-blue-950"/>
                
                {/* Grille animée */}
                <div 
                    className="absolute inset-0 animate-pulse"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                        transform: `rotate(${mousePosition.x * 5}deg)`
                    }}
                />

                {/* Cercles lumineux animés */}
                <div 
                    className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl"
                    style={{
                        transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
                        transition: 'transform 0.3s ease-out'
                    }}
                />
                <div 
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl"
                    style={{
                        transform: `translate(${-mousePosition.x * 20}px, ${-mousePosition.y * 20}px)`,
                        transition: 'transform 0.3s ease-out'
                    }}
                />

                {/* Éléments flottants e-commerce */}
                <FloatingElement Icon={ShoppingCart} className="animate-bounce" />
                <FloatingElement Icon={Package} className="animate-pulse" />
                <FloatingElement Icon={TrendingUp} className="animate-bounce" />
                <FloatingElement Icon={DollarSign} className="animate-pulse" />
                <FloatingElement Icon={MousePointer2} className="animate-bounce" />
            </div>

            {/* Contenu principal */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-8 lg:gap-12 mb-16 sm:mb-20 md:mb-24">
                    {/* Colonne marque */}
                    <div className="space-y-6 sm:space-y-8">
                        <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                            AdVance
                        </h2>
                        <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                            Propulsez votre e-commerce vers de nouveaux sommets avec notre solution tout-en-un.
                        </p>
                        <div className="flex items-center gap-3 sm:gap-4">
                            {[Linkedin, Instagram].map((Icon, index) => (
                                <a 
                                    key={index}
                                    href="#" 
                                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Liens rapides */}
                    <div className="sm:pl-4">
                        <h3 className="text-lg sm:text-xl text-white font-semibold mb-4 sm:mb-6">Liens rapides</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            {['Produits', 'Solutions', 'Tarifs', 'À propos'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="group flex items-center text-sm sm:text-base text-white/70 hover:text-white transition-colors">
                                        <span>{item}</span>
                                        <ArrowUpRight className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" size={14} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mentions légales */}
                    <div>
                        <h3 className="text-lg sm:text-xl text-white font-semibold mb-4 sm:mb-6">Mentions légales</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            {legalPages.map((page) => (
                                <li key={page.title}>
                                    <a
                                        href={page.path}
                                        className="group flex items-center text-sm sm:text-base text-white/70 hover:text-white transition-colors"
                                    >
                                        <span>{page.title}</span>
                                        <ArrowUpRight className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" size={14} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg sm:text-xl text-white font-semibold mb-4 sm:mb-6">Contact</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            <li>
                                <button
                                    onClick={handleEmailClick}
                                    className="group flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/70 hover:text-white transition-colors"
                                >
                                    <Mail size={18} />
                                    <span>contact@advance.com</span>
                                </button>
                            </li>
                            <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/70">
                                <MapPin size={18} />
                                <span>42 rue de l'Innovation<br/>75001 Paris, France</span>
                            </li>
                            <li className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white/70">
                                <Phone size={18} />
                                <span>+33 O6O6O6O6O6</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section newsletter avec animation au hover */}
                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-xl sm:rounded-2xl -z-10 group-hover:from-pink-500/20 group-hover:to-blue-500/20 transition-all duration-500" />
                    <div className="p-6 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl border border-white/10 backdrop-blur-sm group-hover:border-white/20 transition-all duration-500">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
                            <div className="text-center md:text-left">
                                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                                    Restez informé
                                </h3>
                                <p className="text-sm sm:text-base text-white/70">
                                    Recevez nos dernières actualités et offres spéciales
                                </p>
                            </div>
                            <div className="flex w-full md:w-auto">
                                <input 
                                    type="email"
                                    placeholder="Votre email"
                                    className="flex-1 md:w-64 px-4 py-3 bg-white/10 border border-white/10 rounded-l-xl text-sm sm:text-base text-white placeholder:text-white/50 focus:outline-none focus:border-pink-500"
                                />
                                <button className="px-4 sm:px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white rounded-r-xl text-sm sm:text-base font-medium transition-all whitespace-nowrap">
                                    S'inscrire
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Barre de bas de page */}
                <div className="mt-16 sm:mt-20 md:mt-24 pt-6 sm:pt-8 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-xs sm:text-sm text-white/60 text-center sm:text-left">
                            © 2024 AdVance. Tous droits réservés
                        </p>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-white/60">
                            <Globe size={14} />
                            <span>France</span>
                            <span className="mx-2">|</span>
                            <select className="bg-transparent text-white/60 hover:text-white focus:outline-none cursor-pointer text-xs sm:text-sm">
                                <option value="fr">Français</option>
                                <option value="en">English</option>
                                <option value="es">Español</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ModernFooter;