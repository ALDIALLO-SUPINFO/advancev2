import React from 'react';

const FAQSection = ({ faqRef }) => {
  const faqs = [
    {
      question: "Comment fonctionne l'essai gratuit ?",
      answer: "L'essai gratuit vous donne accès à toutes les fonctionnalités pendant 14 jours, sans engagement."
    },
    {
      question: "Puis-je changer d'offre à tout moment ?",
      answer: "Oui, vous pouvez upgrader ou downgrader votre abonnement à tout moment."
    },
    {
      question: "Comment puis-je annuler mon abonnement ?",
      answer: "Vous pouvez annuler votre abonnement depuis votre espace client en quelques clics."
    },
    {
      question: "Y a-t-il un support technique ?",
      answer: "Oui, notre équipe de support est disponible 7j/7 pour vous aider dans votre réussite."
    },
    {
      question: "Les mises à jour sont-elles incluses ?",
      answer: "Toutes les mises à jour et nouvelles fonctionnalités sont automatiquement incluses dans votre abonnement."
    },
    {
      question: "Puis-je utiliser AdVance sur plusieurs boutiques ?",
      answer: "Cela dépend de votre forfait. Les plans Premium et Business permettent la gestion de plusieurs boutiques."
    }
  ];

  return (
    <div ref={faqRef} className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Questions fréquentes
          </h2>
          <p className="text-white/80 text-lg">
            Tout ce que vous devez savoir pour bien démarrer
          </p>
        </div>
        
        <div className="grid gap-6">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className="p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {faq.question}
                  </h3>
                  <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
                <div className="text-pink-400 flex-shrink-0">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action en bas des FAQs */}
        <div className="mt-12 text-center">
          <p className="text-white/80 text-lg mb-6">
            Vous ne trouvez pas la réponse que vous cherchez ?
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl">
            Contactez-nous
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;