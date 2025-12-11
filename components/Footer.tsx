import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK } from '../constants';

const MotionDiv = motion.div as any;

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 px-4">
      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">LiquidCore</h2>
            <p className="text-slate-500 text-sm">Nâng tầm trải nghiệm Minecraft Client.</p>
          </div>
          
          <div className="flex gap-6 flex-wrap justify-center md:justify-end">
            {TECH_STACK.map((tech, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors"
              >
                <tech.icon className="w-5 h-5" />
                <span className="text-xs font-mono">{tech.name}</span>
              </MotionDiv>
            ))}
          </div>
        </div>
        
        <div className="text-center border-t border-slate-900 pt-8">
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} LiquidCore Project. Not affiliated with Mojang AB.
          </p>
        </div>
      </MotionDiv>
    </footer>
  );
};
