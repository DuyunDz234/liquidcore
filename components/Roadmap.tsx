import React from 'react';
import { motion } from 'framer-motion';
import { ROADMAP_DATA } from '../constants';
import { CheckCircle2, Circle, Clock, Rocket, ChevronRight } from 'lucide-react';

const MotionDiv = motion.div as any;

export const Roadmap: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,0.05),transparent_70%)] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lộ Trình <span className="text-cyan-400">Phát Triển</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Tầm nhìn chiến lược và các cột mốc quan trọng của dự án LiquidCore.
          </p>
        </MotionDiv>

        <div className="relative">
          {/* Central Vertical Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 via-slate-700 to-transparent -translate-x-1/2 hidden md:block"></div>
          
          {/* Left Vertical Line (Mobile) */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 via-slate-700 to-transparent md:hidden"></div>

          <div className="space-y-12 md:space-y-24">
            {ROADMAP_DATA.map((item, index) => {
              const isLeft = index % 2 === 0; // Left side on desktop
              const StatusIcon = item.status === 'completed' ? CheckCircle2 : item.status === 'in-progress' ? Rocket : Circle;
              const statusColor = item.status === 'completed' ? 'text-emerald-400' : item.status === 'in-progress' ? 'text-cyan-400' : 'text-slate-500';
              const borderColor = item.status === 'completed' ? 'border-emerald-500/30' : item.status === 'in-progress' ? 'border-cyan-500/50' : 'border-slate-800';
              const glowColor = item.status === 'completed' ? 'shadow-[0_0_30px_rgba(16,185,129,0.1)]' : item.status === 'in-progress' ? 'shadow-[0_0_30px_rgba(6,182,212,0.15)]' : '';

              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-start ${isLeft ? '' : 'md:flex-row-reverse'}`}>
                  
                  {/* Desktop Spacer for alignment */}
                  <div className="hidden md:block w-1/2" />

                  {/* Center Node */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-0 z-20">
                    <MotionDiv
                       initial={{ scale: 0 }}
                       whileInView={{ scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: index * 0.1 }}
                       className={`w-12 h-12 rounded-full bg-slate-950 border-4 ${borderColor} flex items-center justify-center shadow-xl relative`}
                    >
                      {/* Inner Dot */}
                      <div className={`w-3 h-3 rounded-full ${statusColor.replace('text-', 'bg-')} shadow-[0_0_10px_currentColor]`}></div>
                      
                      {/* Pulse Effect for In-Progress */}
                      {item.status === 'in-progress' && (
                        <div className="absolute inset-0 rounded-full border border-cyan-500 animate-ping opacity-20"></div>
                      )}
                    </MotionDiv>
                  </div>

                  {/* Content Card Container */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isLeft ? 'md:pr-16' : 'md:pl-16'} relative`}>
                    
                    {/* Connector Line (Horizontal) */}
                    <div className={`absolute top-6 h-0.5 bg-slate-700/50 hidden md:block 
                      ${isLeft ? 'right-0 w-16' : 'left-0 w-16'}
                    `}></div>

                    {/* Mobile Connector */}
                    <div className="absolute top-6 left-6 w-14 h-0.5 bg-slate-700/50 md:hidden"></div>

                    <MotionDiv
                      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`relative p-6 md:p-8 rounded-2xl bg-slate-900/60 backdrop-blur-xl border ${borderColor} ${glowColor} hover:bg-slate-900/80 transition-all duration-300 group`}
                    >
                       {/* Phase Badge */}
                       <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border ${borderColor} bg-slate-950/50 ${statusColor}`}>
                            {item.phase}
                          </span>
                          <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-slate-950/30 px-2 py-1 rounded">
                            <Clock className="w-3 h-3" /> {item.date}
                          </span>
                       </div>

                       <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors">
                         {item.title}
                       </h3>

                       <ul className="space-y-3">
                         {item.items.map((feat, i) => (
                           <li key={i} className="flex items-start gap-3 text-sm md:text-base text-slate-300 group-hover:text-slate-200 transition-colors">
                             <div className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${statusColor.replace('text-', 'bg-')}`}></div>
                             <span>{feat}</span>
                           </li>
                         ))}
                       </ul>

                       {/* Chevron Decor */}
                       <div className={`absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-x-1`}>
                          <ChevronRight className={`w-5 h-5 ${statusColor}`} />
                       </div>
                    </MotionDiv>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};