import React from 'react';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Philosophy } from './components/Philosophy';
import { Features } from './components/Features';
import { Architecture } from './components/Architecture';
import { Comparison } from './components/Comparison';
import { Bypass } from './components/Bypass';
import { Roadmap } from './components/Roadmap';
import { Footer } from './components/Footer';
import { FAQ } from './components/FAQ';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen selection:bg-cyan-500/30 selection:text-cyan-100">
      <main>
        <Hero />
        <Stats />
        <Philosophy />
        <Features />
        <Architecture />
        <Bypass />
        <Comparison />
        <Roadmap />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;