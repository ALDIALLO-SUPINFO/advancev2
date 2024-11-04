import React from 'react';

const Timer = () => (
  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 p-[2px]">
          <img 
            src="/api/placeholder/50/50" 
            alt="Challenge E-com"
            className="w-full h-full rounded-full border-2 border-black object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-white">
            Challenge E-com 100% GRATUIT sur 3 jours
          </h2>
          <p className="text-white/70">
            Apprends à atteindre les 1000€ par jour avec Jonathan Ecom
          </p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="px-6 py-3 bg-white/10 rounded-xl border border-white/20 font-mono text-2xl text-white">
          03:16:47:25
        </div>
        <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white rounded-xl transition-all shadow-lg hover:shadow-xl font-medium">
          👉 Je m'inscris
        </button>
      </div>
    </div>
  </div>
);

export default Timer;