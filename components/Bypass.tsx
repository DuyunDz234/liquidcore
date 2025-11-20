import React from 'react';
import { motion } from 'framer-motion';
import { BYPASS_DATA } from '../constants';
import { ShieldCheck, AlertTriangle, CheckCircle } from 'lucide-react';

const MotionDiv = motion.div as any;

export const Bypass: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-[#020617] relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-[0.1] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-xs tracking-widest uppercase">
            Security Clearance: Level 5
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Anti-Cheat <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Capabilities</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Dữ liệu thời gian thực về khả năng bypass của hệ thống trên các nền tảng bảo mật hàng đầu.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 px-4">
          {BYPASS_DATA.map((item, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative perspective-1000"
            >
              {/* Card Container */}
              <div className="relative h-[280px] rounded-2xl overflow-hidden bg-slate-900/80 border border-slate-800 transition-all duration-500 group-hover:border-opacity-0">
                
                {/* Holographic Border/Glow on Hover */}
                <div className={`absolute -inset-[2px] bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 rounded-2xl -z-10`}></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 z-0`}></div>

                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none z-0"></div>

                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} shadow-lg`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xl text-white tracking-wide">{item.server}</h3>
                        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Target ID: {index + 8040}</span>
                      </div>
                    </div>
                    <ShieldCheck className={`w-6 h-6 ${index === 0 ? 'text-red-500' : 'text-emerald-500'} opacity-50`} />
                  </div>

                  {/* Middle: Stats */}
                  <div className="space-y-4">
                     <div className="flex justify-between items-end text-sm">
                        <span className="text-slate-400 font-mono">BYPASS RATE</span>
                        <span className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>{item.rate}%</span>
                     </div>
                     {/* Progress Bar */}
                     <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.rate}%` }}
                          transition={{ duration: 1.5, ease: "circOut", delay: 0.5 + (index * 0.1) }}
                          className={`h-full bg-gradient-to-r ${item.color} shadow-[0_0_10px_currentColor]`}
                        />
                     </div>
                  </div>

                  {/* Footer: Status Stamp */}
                  <div className="flex items-center justify-between border-t border-slate-800/50 pt-4 mt-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${item.rate >= 95 ? 'bg-green-500 animate-pulse' : 'bg-yellow-500'}`}></div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${item.rate >= 95 ? 'text-green-400' : 'text-yellow-400'}`}>
                        {item.status}
                      </span>
                    </div>
                    {item.rate >= 98 && (
                      <div className="border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 rounded text-[10px] text-emerald-400 font-mono uppercase">
                        Verified
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};