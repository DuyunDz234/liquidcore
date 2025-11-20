import React from 'react';
import { ChevronDown, Download, Disc, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;
const MotionSpan = motion.span as any;

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#020617]">
      {/* Coder Background Effects */}
      <div className="absolute inset-0 opacity-10 font-mono text-[10px] leading-3 text-emerald-500 overflow-hidden pointer-events-none whitespace-nowrap select-none z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: '100vh', opacity: [0, 1, 0] }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute top-0"
            style={{ left: `${Math.random() * 100}%` }}
          >
            {Array(50).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('\n')}
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 z-0 pointer-events-none"></div>
      
      {/* Animated Glow Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full z-0 pointer-events-none"
      />
      
      <motion.div 
        animate={{ 
          x: [-20, 20, -20],
          y: [-20, 20, -20],
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-cyan-950/30 border border-cyan-500/30 text-cyan-400 text-sm font-mono mb-8 backdrop-blur-md"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-4 h-4" />
            <span className="animate-pulse">System Ready: v2.0.4 [STABLE]</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-500">
              Liquid
            </span>
            <MotionSpan 
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 relative inline-block"
              animate={{ textShadow: ["0 0 20px rgba(34,211,238,0.5)", "0 0 10px rgba(34,211,238,0.2)", "0 0 20px rgba(34,211,238,0.5)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Core
            </MotionSpan>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Trải nghiệm Minecraft Client <span className="text-white font-semibold">Private</span> tốt nhất.
            <br className="hidden md:block" />
            Tối ưu hóa FPS cực đại. Bảo mật tuyệt đối. Giao diện đẳng cấp.
          </p>
        </MotionDiv>

        <MotionDiv 
          className="flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6,182,212,0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl flex items-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 blur-md"></div>
            <Download className="w-6 h-6" />
            <span className="text-lg">Tải Ngay v2.0</span>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(88, 101, 242, 0.2)", borderColor: "#5865F2" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-slate-900/50 backdrop-blur-sm border border-slate-700 text-slate-200 font-semibold rounded-xl flex items-center gap-3 transition-all"
          >
            <Disc className="w-6 h-6 text-[#5865F2]" />
            <span className="text-lg">Join Discord</span>
          </motion.button>
        </MotionDiv>
      </div>

      <MotionDiv 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-600"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-10 h-10" />
      </MotionDiv>
    </section>
  );
};