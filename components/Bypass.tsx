import React from 'react';
import { motion, Variants } from 'framer-motion';
import { BYPASS_DATA, TERMINAL_LOGS } from '../constants';
import { Terminal, Circle } from 'lucide-react';

const MotionDiv = motion.div as any;

export const Bypass: React.FC = () => {
  
  const terminalVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.6,
        delayChildren: 0.3
      }
    }
  };

  const logLineVariants: Variants = {
    hidden: { opacity: 0, x: -20, height: 0 },
    visible: { 
      opacity: 1, 
      x: 0, 
      height: 'auto',
      transition: { 
        type: "spring", 
        stiffness: 120, 
        damping: 12 
      } 
    }
  };

  return (
    <section className="py-24 px-4 bg-slate-950 border-t border-slate-900/50 overflow-hidden relative">
      {/* Background binary rain effect localized */}
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden font-mono text-[10px]">
       </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Coder Terminal */}
          <div className="w-full lg:w-5/12 sticky top-24">
            <MotionDiv 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Khả năng <br />
                <span className="text-emerald-400">Bypass Mạnh Mẽ</span>
              </h2>
              <p className="text-slate-400 leading-relaxed">
                Hệ thống Disabler thông minh tự động nhận diện và vô hiệu hóa các checks của Anti-Cheat mới nhất.
              </p>
            </MotionDiv>

            {/* Terminal Window */}
            <MotionDiv 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden bg-[#0c0c0c] border border-slate-800 shadow-2xl font-mono text-xs md:text-sm ring-1 ring-emerald-500/20"
            >
              {/* Terminal Header */}
              <div className="bg-slate-900/80 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="ml-3 text-slate-500 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider">
                    <Terminal className="w-3 h-3" />
                    <span>root@liquidcore:~</span>
                  </div>
                </div>
                <div className="text-emerald-500/50 text-[10px]">v2.0.4-stable</div>
              </div>

              {/* Terminal Content */}
              <motion.div 
                className="p-4 h-[320px] overflow-y-auto text-emerald-400/90 space-y-1 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent"
                variants={terminalVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {TERMINAL_LOGS.map((log, i) => (
                  <motion.div
                    key={i}
                    variants={logLineVariants}
                    className="break-all flex gap-2 font-medium"
                  >
                    <span className="text-emerald-600 select-none">➜</span>
                    <span>{log}</span>
                  </motion.div>
                ))}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }} 
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="w-2 h-4 bg-emerald-500 inline-block align-middle mt-1"
                />
              </motion.div>
            </MotionDiv>
          </div>

          {/* Right Side: Stats Grid */}
          <div className="w-full lg:w-7/12 grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
            {BYPASS_DATA.map((item, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 rounded-xl bg-slate-900/20 backdrop-blur-sm border border-slate-800/60 hover:border-emerald-500/30 transition-all group relative overflow-hidden"
              >
                 {/* Hover Glow Effect */}
                 <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-slate-950 border border-slate-800/80 ${item.color} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}>
                       <item.icon className={`w-5 h-5`} />
                    </div>
                    <span className="font-bold text-slate-200 text-sm tracking-wide">{item.server}</span>
                  </div>
                  <div className={`px-2 py-0.5 rounded text-[10px] font-bold bg-slate-950 border border-slate-800 ${item.color} shadow-sm`}>
                    {item.status}
                  </div>
                </div>

                {/* Progress Bar Container */}
                <div className="relative w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800/50">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.rate}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 + (index * 0.05) }}
                    className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-emerald-800 to-emerald-400`}
                  />
                </div>
                
                <div className="flex justify-between mt-2.5 font-mono text-[10px] uppercase tracking-wider text-slate-500 relative z-10">
                  <span>Success Rate</span>
                  <span className={item.color}>{item.rate}%</span>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};