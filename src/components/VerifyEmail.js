import React from 'react';
import VerifyEmailToken from '../components/VerifyEmailToken';

const VerifyEmail = () => {
  // Récupérer le token depuis l'URL
  const queryParams = new URLSearchParams(window.location.search);
  const token = queryParams.get('token');

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Lien invalide
          </h2>
          <p className="text-white/70 mb-6">
            Le lien de vérification est invalide ou a expiré.
          </p>
          <button
            onClick={() => window.location.href = '/signup'}
            className="px-6 py-2 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white rounded-xl transition-all text-sm font-medium"
          >
            Retour à l'inscription
          </button>
        </div>
      </div>
    );
  }

  return <VerifyEmailToken token={token} />;
};

export default VerifyEmail;