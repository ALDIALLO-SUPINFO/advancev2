// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  CircleUserRound, 
  ChevronDown, 
  ChevronRight, 
  MessageCircle,
  Share2,
  Settings,
  BarChart3,
  Bell,
  LogOut
} from 'lucide-react';

// Composant Badge
const NewBadge = () => (
  <span className="ml-2 px-2 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-400">
    NEW
  </span>
);

// Composant Menu de Campagnes
const CampaignMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavigate = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  const platforms = [
    {
      id: 'pinterest',
      name: 'Pinterest Ads',
      description: 'Gérer vos campagnes Pinterest',
      icon: (
        <svg className="w-5 h-5 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0a12 12 0 0 0-4.373 23.178c-.01-.937-.002-2.062.235-3.082l1.732-7.324s-.43-.86-.43-2.13c0-1.996 1.159-3.485 2.604-3.485 1.226 0 1.819.918 1.819 2.021 0 1.23-.786 3.076-1.187 4.785-.335 1.423.712 2.583 2.121 2.583 2.547 0 4.506-2.68 4.506-6.557 0-3.425-2.459-5.806-5.95-5.806-4.061 0-6.447 3.034-6.447 6.177 0 1.221.474 2.531 1.065 3.242.118.142.135.267.101.411l-.4 1.622c-.062.262-.207.317-.48.192-1.787-.827-2.908-3.418-2.908-5.502 0-4.509 3.276-8.646 9.433-8.646 4.957 0 8.793 3.538 8.793 8.27 0 4.934-3.119 8.916-7.454 8.916-1.456 0-2.826-.757-3.291-1.647l-.895 3.415c-.324 1.247-1.206 2.809-1.792 3.762A12 12 0 1 0 12 0z"/>
        </svg>
      ),
      status: 'active',
      path: '/pinterest/auth'
    },
    {
      id: 'facebook',
      name: 'Facebook Ads',
      description: 'Bientôt disponible',
      icon: (
        <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      status: 'coming',
      path: '/campaigns/facebook'
    },
    {
      id: 'tiktok',
      name: 'TikTok Ads',
      description: 'Bientôt disponible',
      icon: (
        <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      status: 'coming',
      path: '/campaigns/tiktok'
    }
  ];

  return (
    <div className="relative group" ref={menuRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-white/80 hover:text-white transition-colors flex items-center"
      >
        Campagnes
        <ChevronDown className="w-4 h-4 ml-1" />
      </button>

      <div className={`absolute left-0 mt-2 w-72 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg py-2 transition-all duration-200 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <div className="px-4 py-2 border-b border-white/10">
          <h3 className="text-white text-sm font-semibold">Plateformes publicitaires</h3>
        </div>

        <div className="p-2 space-y-1">
          {platforms.map((platform) => (
            <button 
              key={platform.id}
              onClick={() => handleNavigate(platform.path)}
              className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              {platform.icon}
              <div className="flex-1 text-left">
                <p className="text-white font-medium">{platform.name}</p>
                <p className="text-white/60 text-sm">{platform.description}</p>
              </div>
              <span className={`px-2 py-1 text-xs rounded-full ${
                platform.status === 'active' 
                  ? 'bg-green-500/20 text-green-400'
                  : 'bg-yellow-500/20 text-yellow-400'
              }`}>
                {platform.status === 'active' ? 'Actif' : 'Bientôt'}
              </span>
            </button>
          ))}
        </div>

        <div className="px-4 py-2 mt-2 border-t border-white/10">
          <button 
            onClick={() => handleNavigate('/campaigns/dashboard')}
            className="w-full text-white/80 hover:text-white text-sm flex items-center justify-between"
          >
            <span>Voir toutes les campagnes</span>
            <BarChart3 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Composant Menu Profil
const ProfileMenu = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      localStorage.removeItem('token');
      localStorage.removeItem('pinterest_token');
      navigate('/login');
    } catch (error) {
      console.error('Erreur lors de la déconnexion:', error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <CircleUserRound className="w-6 h-6 text-white/80" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 shadow-lg py-2">
          <div className="px-4 py-2 border-b border-white/10">
            <p className="text-white font-medium">{user?.name || 'Utilisateur'}</p>
            <p className="text-white/60 text-sm">{user?.email || 'email@example.com'}</p>
          </div>

          <div className="py-1">
            <Link to="/profile" className="flex items-center px-4 py-2 text-white/80 hover:bg-white/10">
              <Settings className="w-4 h-4 mr-2" />
              Paramètres
            </Link>
            <Link to="/help" className="flex items-center px-4 py-2 text-white/80 hover:bg-white/10">
              <MessageCircle className="w-4 h-4 mr-2" />
              Aide
            </Link>
            <button onClick={handleLogout} className="w-full flex items-center px-4 py-2 text-red-400 hover:bg-white/10">
              <LogOut className="w-4 h-4 mr-2" />
              Déconnexion
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Composant Header principal
const Header = ({ user }) => {
  const navigate = useNavigate();

  return (
    <header className="fixed w-full top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo et navigation principale */}
          <div className="flex items-center space-x-8">
            <Link to="/dashboard" className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              AdVance
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <CampaignMenu />
              <Link to="/boutiques" className="text-white/80 hover:text-white transition-colors">
                Boutiques
              </Link>
              <Link to="/produits" className="text-white/80 hover:text-white transition-colors flex items-center">
                Produits
                <NewBadge />
              </Link>
              <div className="relative group">
                <button className="text-white/80 hover:text-white transition-colors flex items-center">
                  Magic Search
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
              </div>
              <Link to="/success-radar" className="text-white/80 hover:text-white transition-colors">
                Success Radar
              </Link>
            </nav>
          </div>

          {/* Actions utilisateur */}
          <div className="flex items-center space-x-6">
            <Link to="/academy" className="flex items-center px-4 py-2 bg-white/10 text-white rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm">
              <span className="mr-2">🎓</span>
              Academy
            </Link>
            
            <button className="px-3 py-2 border border-white/20 rounded-xl flex items-center space-x-2 hover:bg-white/10 transition-colors">
              <span>🇫🇷</span>
              <span className="hidden sm:inline text-white/80">Français</span>
            </button>

            <Link to="/mes-listes" className="text-white/80 hover:text-white transition-colors">
              Mes listes
            </Link>

            <ProfileMenu user={user} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;