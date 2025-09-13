import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Committees from '@/components/Committees';
import DelegateInfo from '@/components/DelegateInfo';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileCtaBar from '@/components/MobileCtaBar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Committees />
        <DelegateInfo />
        <Contact />
      </main>
      <Footer />
      <MobileCtaBar />
    </div>
  );
};

export default Index;
