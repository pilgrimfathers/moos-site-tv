import React from 'react';
import Header from '../components/Header';
import Hero from '../components/television/Hero';
import QProcessor from '../components/television/features/QProcessor';
import Design from '../components/television/features/Design';
import Entertainment from '../components/television/features/Entertainment';
import Footer from '../components/Footer';

const TelevisionPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <QProcessor />
      <Design />
      <Entertainment />
      <Footer />
    </div>
  );
};

export default TelevisionPage; 