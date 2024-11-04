import React, { useState } from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Card from '../components/Card';
import Timer from '../components/Timer';

const Dashboard = () => {
  const [currentUser] = useState({
    name: 'John Doe',
    avatar: '/api/placeholder/40/40'
  });

  const cards = [
    {
      type: 'live',
      image: '/api/placeholder/600/400',
      credits: 100,
      title: 'Session Q&A en direct',
      description: 'Rejoignez notre session live pour poser vos questions à nos experts'
    },
    {
      type: 'formation',
      image: '/api/placeholder/600/400',
      credits: 1000,
      title: 'Formation Dropshipping',
      description: 'Apprenez les bases du dropshipping avec notre formation complète'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-900 to-blue-900 text-white">
      <Background />
      <Header user={currentUser} />
      
      <main className="pt-24 px-6 pb-12 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
        <Timer />
      </main>
    </div>
  );
};

export default Dashboard;