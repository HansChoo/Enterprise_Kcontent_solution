import React from 'react';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import WhyUs from './components/WhyUs';
import Comparison from './components/Comparison';
import Solutions from './components/Solutions';
import Workflow from './components/Workflow';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-blue-500 selection:text-white">
      <main>
        <Hero />
        <ClientLogos />
        <WhyUs />
        <Comparison />
        <Solutions />
        <Workflow />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;