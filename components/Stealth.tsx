import React from 'react';
import { motion } from 'framer-motion';
import { STEALTH_FEATURES } from '../constants';
import { Lock, EyeOff } from 'lucide-react';

const MotionDiv = motion.div as any;

export const Stealth: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#020617] relative overflow-hidden">
       {/* Consistent Background Layer */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
       
       {/* Ambient Glow */}
       <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>
       
       <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-10">
             <MotionDiv 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="md:w-1/2"
             >
                <div className="flex items-center gap-3 text-cyan-500 mb-4">
                   <EyeOff className="w-6 h-6" />
                   <span className="font-mono uppercase tracking-widest text-sm">Anti-Trace Layer</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                   Bảo Mật <span className="text-cyan-500">Tuyệt Đối</span>
                </h2>
                <p className="text-slate-400 leading-relaxed text-lg">
                   LiquidCore không chỉ bypass anti-cheat máy chủ, mà còn tự bảo vệ chính nó trước các công cụ quét (Screen Share tools) và kỹ thuật dịch ngược (Reverse Engineering).
                </p>
             </MotionDiv>

             {/* Visual Graphic */}
             <MotionDiv
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="md:w-1/2 flex justify-center"
             >
                <div className="relative w-64 h-64">
                   {/* Background Glow for the Graphic */}
                   <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>
                   
                   <div className="absolute inset-0 border-2 border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                   <div className="absolute inset-4 border-2 border-cyan-500/40 rounded-full animate-[spin_7s_linear_infinite_reverse]"></div>
                   <div className="absolute inset-8 border-2 border-cyan-500/60 rounded-full animate-[spin_5s_linear_infinite]"></div>
                   <div className="absolute inset-0 flex items-center justify-center">
                      <Lock className="w-16 h-16 text-cyan-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                   </div>
                </div>
             </MotionDiv>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {STEALTH_FEATURES?.map((item, index) => (
                <MotionDiv
                   key={index}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="p-6 rounded-xl bg-slate-900/30 border border-slate-800/50 backdrop-blur-md hover:border-cyan-500/30 transition-colors group"
                >
                   <div className="p-3 w-fit rounded-lg bg-slate-800/50 mb-4 group-hover:bg-cyan-500/10 transition-colors">
                     <item.icon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                   </div>
                   <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                   <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">{item.description}</p>
                </MotionDiv>
             ))}
          </div>
       </div>
    </section>
  );
};