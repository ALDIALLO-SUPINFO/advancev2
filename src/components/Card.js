import React from 'react';

const Card = ({ type, image, credits, title, description }) => (
  <div className="relative group">
    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
    <div className="relative bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all">
      <div className="aspect-video relative overflow-hidden">
        {type === 'live' && (
          <span className="absolute top-3 left-3 inline-flex items-center px-3 py-1 rounded-full bg-red-500 text-white text-sm font-medium z-10">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            LIVE
          </span>
        )}
        <span className="absolute top-3 right-3 inline-flex items-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium z-10">
          +{credits} crédits
        </span>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/70 text-sm">{description}</p>
        <button className="mt-4 w-full bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-4 py-2 rounded-xl transition-all shadow-lg hover:shadow-xl text-sm font-medium">
          En savoir plus
        </button>
      </div>
    </div>
  </div>
);

export default Card;