import React from 'react';
import { motion } from 'framer-motion';
import { KEY_FEATURES } from '../constants';

const MotionDiv = motion.div as any;

export const Features: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-slate-950 relative overflow-hidden">
       {/* Background elements */}
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-[0.02] pointer-events-none"></div>
       <div className="absolute left-[-100px] top-1/4 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

       <div className="max-w-7xl mx-auto relative z-10">
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Tính Năng <span className="text-cyan-400">Vượt Trội</span></h2>
          <p className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto">
            Bộ công cụ mạnh mẽ được tối ưu hóa riêng cho trải nghiệm <span className="text-white">Premium</span>.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {KEY_FEATURES.map((item, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="relative group p-8 rounded-2xl bg-slate-900/20 border border-slate-800/50 backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-500"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500 border border-slate-700/50 group-hover:border-cyan-500/50 shadow-lg">
                  {item.icon && <item.icon className="w-8 h-8 text-slate-400 group-hover:text-cyan-400 transition-colors duration-500" />}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">{item.title}</h3>
                
                <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {item.description}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
       </div>
    </section>
  );
};