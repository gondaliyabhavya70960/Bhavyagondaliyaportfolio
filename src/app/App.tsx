import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Network } from './components/Network';
import { Experience } from './components/Experience';
import { Tools } from './components/Tools';
import { Skills } from './components/Skills';
import { FeaturedWork } from './components/FeaturedWork';
import { OldWork } from './components/OldWork';
import { Contact } from './components/Contact';
import { Socials } from './components/Socials';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F1F5F9] font-['Inter'] selection:bg-[#3B82F6] selection:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Network />
        <Experience />
        <Tools />
        <Skills />
        <FeaturedWork />
        <OldWork />
        <Contact />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
