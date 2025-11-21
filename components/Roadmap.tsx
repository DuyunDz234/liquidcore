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
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-900/50 -translate-x-1/2"></div>
          
          {/* Left Vertical Line (Mobile) */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-blue-900/50 -translate-x-1/2"></div>

          <div className="space-y-12 md:space-y-24">
            {ROADMAP_DATA.map((item, index) => {
              // Even index = Left side (Desktop), Odd index = Right side (Desktop)
              const isEven = index % 2 === 0;
              const isCompleted = item.status === 'completed';
              const isInProgress = item.status === 'in-progress';
              
              const statusColor = isCompleted ? 'text-blue-400' : isInProgress ? 'text-cyan-400' : 'text-slate-500';
              const borderColor = isCompleted ? 'border-blue-500/30' : isInProgress ? 'border-cyan-500/50' : 'border-slate-800';
              const bgColor = isCompleted ? 'bg-blue-500' : isInProgress ? 'bg-cyan-400' : 'bg-slate-600';
              const glowEffect = isCompleted ? 'shadow-[0_0_30px_rgba(59,130,246,0.15)]' : isInProgress ? 'shadow-[0_0_30px_rgba(6,182,212,0.15)]' : '';

              return (
                <div key={index} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                  
                  {/* Spacer for Desktop to push content to side */}
                  <div className="hidden md:block w-1/2" />

                  {/* Center Node */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <MotionDiv
                       initial={{ scale: 0 }}
                       whileInView={{ scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: 0.2 }}
                       className={`w-12 h-12 rounded-full bg-slate-950 border-4 ${borderColor} flex items-center justify-center shadow-xl relative`}
                    >
                      <div className={`w-3 h-3 rounded-full ${bgColor} shadow-[0_0_10px_currentColor]`}></div>
                      {isInProgress && (
                        <div className="absolute inset-0 rounded-full border border-cyan-500 animate-ping opacity-20"></div>
                      )}
                    </MotionDiv>
                  </div>

                  {/* Content Container */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 relative ${isEven ? 'md:pr-20' : 'md:pl-20'}`}>
                    
                    {/* Connector Line (Desktop) */}
                    <div className={`hidden md:block absolute top-6 h-0.5 bg-blue-900/50 w-20 
                      ${isEven ? 'right-0' : 'left-0'}
                    `}></div>

                    {/* Connector Line (Mobile) */}
                    <div className="md:hidden absolute top-6 left-8 w-12 h-0.5 bg-blue-900/50"></div>

                    <MotionDiv
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`relative p-6 md:p-8 rounded-2xl bg-slate-900/60 backdrop-blur-xl border ${borderColor} ${glowEffect} hover:bg-slate-900/80 transition-all duration-300 group`}
                    >
                       {/* Header */}
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
                             <div className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${bgColor}`}></div>
                             <span>{feat}</span>
                           </li>
                         ))}
                       </ul>
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