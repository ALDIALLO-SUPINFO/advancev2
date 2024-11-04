import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

const EmailVerification = ({ email, onResendEmail }) => {
  const [isResending, setIsResending] = useState(false);
  const [resendStatus, setResendStatus] = useState(null);

  const handleResendEmail = async () => {
    setIsResending(true);
    setResendStatus(null);
    
    try {
      await onResendEmail();
      setResendStatus('success');
    } catch (error) {
      setResendStatus('error');
    } finally {
      setIsResending(false);
    }
    
    // Reset status after 3 seconds
    setTimeout(() => setResendStatus(null), 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header avec icône */}
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-gradient-to-br from-pink-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Vérifiez votre email
          </h2>
          <p className="text-white/70 text-sm sm:text-base">
            Nous avons envoyé un lien de confirmation à
          </p>
          <p className="text-white font-medium mt-1">
            {email}
          </p>
        </div>

        {/* Carte d'instructions */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 space-y-6 border border-white/20">
          <div className="space-y-4">
            <p className="text-white/80 text-sm leading-relaxed">
              Pour activer votre compte, veuillez :
            </p>
            <ol className="list-decimal list-inside space-y-3 text-white/80 text-sm">
              <li>Ouvrir l'email que nous venons de vous envoyer</li>
              <li>Cliquer sur le bouton "Confirmer mon email"</li>
              <li>Vous serez redirigé vers la page de connexion</li>
            </ol>
          </div>

          {/* Message de statut */}
          {resendStatus && (
            <div className={`flex items-center gap-2 text-sm p-3 rounded-xl ${
              resendStatus === 'success' 
                ? 'bg-green-500/10 text-green-400'
                : 'bg-red-500/10 text-red-400'
            }`}>
              {resendStatus === 'success' ? (
                <CheckCircle className="h-4 w-4 flex-shrink-0" />
              ) : (
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
              )}
              <span>
                {resendStatus === 'success' 
                  ? 'Email envoyé avec succès !'
                  : "Erreur lors de l'envoi. Réessayez."}
              </span>
            </div>
          )}

          {/* Bouton de renvoi */}
          <div className="pt-2">
            <button
              onClick={handleResendEmail}
              disabled={isResending}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isResending ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <Mail className="h-4 w-4" />
              )}
              {isResending ? "Envoi en cours..." : "Renvoyer l'email"}
            </button>
          </div>
        </div>

        {/* Footer avec liens utiles */}
        <div className="text-center space-y-4">
          <p className="text-white/60 text-sm">
            Vous n'avez pas reçu l'email ? Vérifiez vos spams.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <button onClick={() => window.location.href = '/support'} className="text-white/80 hover:text-white transition-colors">
              Besoin d'aide ?
            </button>
            <button onClick={() => window.location.href = '/contact'} className="text-white/80 hover:text-white transition-colors">
              Contacter le support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailVerification;