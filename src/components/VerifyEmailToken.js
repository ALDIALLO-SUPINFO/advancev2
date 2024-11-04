import React, { useEffect, useState } from 'react';
import { CheckCircle, XCircle, Loader } from 'lucide-react';

const VerifyEmailToken = ({ token }) => {
  const [status, setStatus] = useState('loading'); // loading, success, error
  const [message, setMessage] = useState('');

  useEffect(() => {
    verifyToken();
  }, [token]);

  const verifyToken = async () => {
    try {
      // Simulation d'appel API - À remplacer par votre véritable appel
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simuler une réponse API
      const response = { status: 'success' };
      
      if (response.status === 'success') {
        setStatus('success');
        setMessage('Votre email a été vérifié avec succès !');
        
        // Redirection après 3 secondes
        setTimeout(() => {
          window.location.href = '/login';
        }, 3000);
      } else {
        throw new Error('Token invalide');
      }
    } catch (error) {
      setStatus('error');
      setMessage("Le lien de vérification est invalide ou a expiré. Veuillez réessayer.");
    }
  };

  const statusConfig = {
    loading: {
      icon: Loader,
      title: "Vérification en cours",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    success: {
      icon: CheckCircle,
      title: "Email vérifié !",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    error: {
      icon: XCircle,
      title: "Échec de la vérification",
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20"
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className={`${config.bgColor} backdrop-blur-md rounded-2xl p-8 border ${config.borderColor}`}>
          <div className="text-center">
            <div className="mx-auto w-16 h-16 flex items-center justify-center mb-6">
              <Icon 
                className={`h-16 w-16 ${config.color} ${status === 'loading' ? 'animate-spin' : ''}`}
              />
            </div>
            
            <h2 className={`text-2xl font-bold mb-4 ${config.color}`}>
              {config.title}
            </h2>
            
            <p className="text-white/80 text-base">
              {message}
            </p>

            {status === 'error' && (
              <div className="mt-6">
                <button
                  onClick={() => window.location.href = '/signup'}
                  className="px-6 py-2 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white rounded-xl transition-all text-sm font-medium"
                >
                  Retour à l'inscription
                </button>
              </div>
            )}

            {status === 'success' && (
              <div className="mt-6">
                <p className="text-white/60 text-sm">
                  Redirection vers la page de connexion dans quelques secondes...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailToken;