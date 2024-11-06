// src/pages/PinterestCampaigns.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Plus, Loader, AlertCircle } from 'lucide-react';

const PinterestCampaigns = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [campaigns, setCampaigns] = useState([]);
  const [pinterestAccount, setPinterestAccount] = useState(null);

  useEffect(() => {
    checkPinterestConnection();
  }, []);

  const checkPinterestConnection = async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('pinterest_token');
      
      if (!token) {
        navigate('/pinterest/auth');
        return;
      }

      // Vérifier la connexion Pinterest
      const response = await fetch('https://advancev2.onrender.com/api/pinterest/account', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Erreur de connexion Pinterest');
      }

      const data = await response.json();
      setPinterestAccount(data);
      await fetchCampaigns();

    } catch (error) {
      console.error('Erreur:', error);
      setError(error.message);
      // Si l'erreur est liée à l'authentification, rediriger vers la page d'auth
      if (error.message.includes('authentification') || error.message.includes('connexion')) {
        navigate('/pinterest/auth');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCampaigns = async () => {
    try {
      const response = await fetch('https://advancev2.onrender.com/api/pinterest/campaigns', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('pinterest_token')}`
        }
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des campagnes');
      }

      const data = await response.json();
      setCampaigns(data.campaigns || []);

    } catch (error) {
      console.error('Erreur:', error);
      setError(error.message);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black pt-20 pb-10 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-pink-500 animate-spin mx-auto mb-4" />
          <p className="text-white/60">Chargement de vos campagnes Pinterest...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black pt-20 pb-10 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 max-w-md w-full text-center">
          <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Erreur</h2>
          <p className="text-white/60 mb-4">{error}</p>
          <button
            onClick={() => navigate('/pinterest/auth')}
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-xl transition-colors"
          >
            Reconnecter Pinterest
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* En-tête */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">
              Campagnes Pinterest
            </h1>
            {pinterestAccount && (
              <p className="text-white/60">
                Compte : {pinterestAccount.username}
              </p>
            )}
          </div>
          <button
            onClick={() => navigate('/pinterest/campaigns/new')}
            className="flex items-center space-x-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-xl transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Nouvelle campagne</span>
          </button>
        </div>

        {/* État initial - Aucune campagne */}
        {campaigns.length === 0 ? (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center">
            <div className="max-w-md mx-auto">
              <h2 className="text-xl font-semibold text-white mb-4">
                Commencez votre première campagne Pinterest
              </h2>
              <p className="text-white/60 mb-6">
                Créez votre première campagne publicitaire et atteignez des millions d'utilisateurs sur Pinterest.
              </p>
              <button
                onClick={() => navigate('/pinterest/campaigns/new')}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl transition-colors flex items-center justify-center space-x-2 w-full"
              >
                <Plus className="w-5 h-5" />
                <span>Créer une campagne</span>
              </button>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Ciblage précis",
                  description: "Touchez votre audience idéale avec des options de ciblage avancées"
                },
                {
                  title: "Suivi en temps réel",
                  description: "Suivez les performances de vos campagnes en direct"
                },
                {
                  title: "Optimisation automatique",
                  description: "Notre IA optimise vos campagnes pour de meilleurs résultats"
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 bg-white/5 rounded-xl">
                  <h3 className="text-white font-medium mb-2">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          // Liste des campagnes (à implémenter)
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
            {/* Votre liste de campagnes ici */}
          </div>
        )}
      </div>
    </div>
  );
};

export default PinterestCampaigns;