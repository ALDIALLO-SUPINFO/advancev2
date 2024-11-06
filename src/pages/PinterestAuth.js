// src/pages/PinterestAuth.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  AlertCircle,
  Loader
} from 'lucide-react';

const PinterestAuth = () => {
  const navigate = useNavigate();
  const [authStatus, setAuthStatus] = useState('idle'); // idle, loading, success, error
  const [error, setError] = useState(null);

  // Vérifier si déjà connecté à Pinterest
  useEffect(() => {
    const checkPinterestAuth = async () => {
      try {
        const token = localStorage.getItem('pinterest_token');
        if (token) {
          const response = await fetch('/api/pinterest/verify-token', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          if (response.ok) {
            navigate('/campaigns/pinterest');
          }
        }
      } catch (error) {
        console.error('Erreur de vérification du token:', error);
      }
    };

    checkPinterestAuth();
  }, [navigate]);

  const handlePinterestLogin = async () => {
    try {
      setAuthStatus('loading');
      setError(null);

      // Configuration OAuth Pinterest
      const PINTEREST_CLIENT_ID = process.env.REACT_APP_PINTEREST_CLIENT_ID;
      const REDIRECT_URI = `${window.location.origin}/pinterest/callback`;
      const SCOPE = 'ads:read,ads:write';
      const STATE = Math.random().toString(36).substring(7);

      // Sauvegarder l'état pour la vérification
      localStorage.setItem('pinterest_auth_state', STATE);

      // Construire l'URL d'autorisation Pinterest
      const authUrl = `https://www.pinterest.com/oauth/authorize?client_id=${PINTEREST_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}&state=${STATE}`;

      // Rediriger vers Pinterest pour l'authentification
      window.location.href = authUrl;

    } catch (error) {
      setAuthStatus('error');
      setError(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black pt-20 pb-10">
      <div className="max-w-2xl mx-auto px-4">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-white mb-4">
            Connectez votre compte Pinterest
          </h1>
          <p className="text-white/60">
            Gérez vos campagnes publicitaires Pinterest en toute simplicité
          </p>
        </div>

        {/* Carte principale */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
          {/* Messages d'état */}
          {authStatus === 'success' && (
            <div className="flex items-center space-x-3 p-4 bg-green-500/20 rounded-xl mb-6">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <p className="text-green-400">Connexion réussie! Redirection en cours...</p>
            </div>
          )}

          {authStatus === 'error' && (
            <div className="flex items-center space-x-3 p-4 bg-red-500/20 rounded-xl mb-6">
              <AlertCircle className="w-6 h-6 text-red-400" />
              <p className="text-red-400">{error || "Une erreur s'est produite"}</p>
            </div>
          )}

          {/* Logo Pinterest et titre */}
          <div className="flex items-center space-x-4 mb-8">
            <svg className="w-12 h-12 text-pink-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0a12 12 0 0 0-4.373 23.178c-.01-.937-.002-2.062.235-3.082l1.732-7.324s-.43-.86-.43-2.13c0-1.996 1.159-3.485 2.604-3.485 1.226 0 1.819.918 1.819 2.021 0 1.23-.786 3.076-1.187 4.785-.335 1.423.712 2.583 2.121 2.583 2.547 0 4.506-2.68 4.506-6.557 0-3.425-2.459-5.806-5.95-5.806-4.061 0-6.447 3.034-6.447 6.177 0 1.221.474 2.531 1.065 3.242.118.142.135.267.101.411l-.4 1.622c-.062.262-.207.317-.48.192-1.787-.827-2.908-3.418-2.908-5.502 0-4.509 3.276-8.646 9.433-8.646 4.957 0 8.793 3.538 8.793 8.27 0 4.934-3.119 8.916-7.454 8.916-1.456 0-2.826-.757-3.291-1.647l-.895 3.415c-.324 1.247-1.206 2.809-1.792 3.762A12 12 0 1 0 12 0z"/>
            </svg>
            <div>
              <h2 className="text-xl font-semibold text-white">Pinterest Ads</h2>
              <p className="text-white/60">Connectez-vous pour gérer vos campagnes</p>
            </div>
          </div>

          {/* Liste des fonctionnalités */}
          <div className="space-y-4 mb-8">
            <h3 className="text-white font-medium">Avec Pinterest Ads, vous pourrez :</h3>
            <ul className="space-y-3">
              {[
                'Créer et gérer vos campagnes publicitaires',
                'Suivre les performances en temps réel',
                'Optimiser vos budgets automatiquement',
                'Analyser les statistiques détaillées',
                'Gérer plusieurs comptes Pinterest'
              ].map((feature, index) => (
                <li key={index} className="flex items-center space-x-3 text-white/80">
                  <ArrowRight className="w-4 h-4 text-pink-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bouton de connexion */}
          <button
            onClick={handlePinterestLogin}
            disabled={authStatus === 'loading'}
            className={`w-full py-3 px-4 rounded-xl font-medium flex items-center justify-center space-x-2 transition-colors
              ${authStatus === 'loading' 
                ? 'bg-pink-500/50 cursor-not-allowed' 
                : 'bg-pink-500 hover:bg-pink-600'}`}
          >
            {authStatus === 'loading' ? (
              <>
                <Loader className="w-5 h-5 text-white animate-spin" />
                <span className="text-white">Connexion en cours...</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0a12 12 0 0 0-4.373 23.178c-.01-.937-.002-2.062.235-3.082l1.732-7.324s-.43-.86-.43-2.13c0-1.996 1.159-3.485 2.604-3.485 1.226 0 1.819.918 1.819 2.021 0 1.23-.786 3.076-1.187 4.785-.335 1.423.712 2.583 2.121 2.583 2.547 0 4.506-2.68 4.506-6.557 0-3.425-2.459-5.806-5.95-5.806-4.061 0-6.447 3.034-6.447 6.177 0 1.221.474 2.531 1.065 3.242.118.142.135.267.101.411l-.4 1.622c-.062.262-.207.317-.48.192-1.787-.827-2.908-3.418-2.908-5.502 0-4.509 3.276-8.646 9.433-8.646 4.957 0 8.793 3.538 8.793 8.27 0 4.934-3.119 8.916-7.454 8.916-1.456 0-2.826-.757-3.291-1.647l-.895 3.415c-.324 1.247-1.206 2.809-1.792 3.762A12 12 0 1 0 12 0z"/>
                </svg>
                <span className="text-white">Se connecter avec Pinterest</span>
              </>
            )}
          </button>

          {/* Note de confidentialité */}
          <p className="text-white/40 text-sm text-center mt-6">
            En vous connectant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PinterestAuth;