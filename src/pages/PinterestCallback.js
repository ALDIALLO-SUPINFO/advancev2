// src/pages/PinterestCallback.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Loader, AlertCircle } from 'lucide-react';

const PinterestCallback = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const code = searchParams.get('code');
        const state = searchParams.get('state');
        
        // Vérifier le state pour la sécurité
        const savedState = localStorage.getItem('pinterest_auth_state');
        if (state !== savedState) {
          throw new Error('État de sécurité invalide');
        }

        // Nettoyer le state stocké
        localStorage.removeItem('pinterest_auth_state');

        if (!code) {
          throw new Error("Code d'autorisation manquant");
        }

        // Échanger le code contre un token
        const response = await fetch('/api/pinterest/auth/callback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ code }),
        });

        if (!response.ok) {
          throw new Error('Échec de l\'échange du code');
        }

        const data = await response.json();
        
        // Sauvegarder le token
        localStorage.setItem('pinterest_token', data.access_token);
        localStorage.setItem('pinterest_user', JSON.stringify(data.user));
        
        setStatus('success');
        
        // Redirection après un court délai
        setTimeout(() => {
          navigate('/campaigns/pinterest');
        }, 2000);

      } catch (error) {
        console.error('Erreur lors du callback Pinterest:', error);
        setError(error.message);
        setStatus('error');

        // Redirection vers la page d'authentification en cas d'erreur
        setTimeout(() => {
          navigate('/pinterest/auth');
        }, 3000);
      }
    };

    handleCallback();
  }, [navigate, searchParams]);

  if (status === 'error') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-md w-full">
          <div className="flex items-center space-x-3 text-red-400">
            <AlertCircle className="w-6 h-6" />
            <h2 className="text-xl font-semibold">Erreur de connexion</h2>
          </div>
          <p className="text-white/60 mt-4">{error}</p>
          <p className="text-white/40 mt-2">Redirection vers la page de connexion...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-md w-full text-center">
        <Loader className="w-8 h-8 text-pink-500 animate-spin mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-white mb-2">
          {status === 'success' ? 'Connexion réussie!' : 'Connexion en cours...'}
        </h2>
        <p className="text-white/60">
          {status === 'success' 
            ? 'Redirection vers votre tableau de bord...'
            : 'Veuillez patienter pendant que nous sécurisons votre connexion.'}
        </p>
      </div>
    </div>
  );
};

export default PinterestCallback;