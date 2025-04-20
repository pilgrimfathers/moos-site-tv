import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QProcessor from './components/features/QProcessor';
import Design from './components/features/Design';
import Entertainment from './components/features/Entertainment';
import SmartFeatures from './components/features/SmartFeatures';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QProcessor />
      <Design />
      <Entertainment />
      <SmartFeatures />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;