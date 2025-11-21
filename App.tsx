import React from 'react';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Philosophy } from './components/Philosophy';
import { Features } from './components/Features';
import { Benchmark } from './components/Benchmark';
import { Architecture } from './components/Architecture';
import { Bypass } from './components/Bypass';
import { Stealth } from './components/Stealth';
import { Comparison } from './components/Comparison';
import { Roadmap } from './components/Roadmap';
import { Changelog } from './components/Changelog';
import { Footer } from './components/Footer';
import { FAQ } from './components/FAQ';

const App: React.FC = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen selection:bg-cyan-500/30 selection:text-cyan-100 font-sans">
      <main>
        <Hero />
        <Stats />
        <Philosophy />
        <Features />
        <Benchmark />
        <Architecture />
        <Bypass />
        <Stealth />
        <Comparison />
        <Roadmap />
        <Changelog />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;