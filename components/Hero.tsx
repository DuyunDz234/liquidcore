import React from 'react';
import { ChevronDown, Disc, Zap, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;
const MotionSpan = motion.span as any;

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[#020617]">
      {/* Modern Mesh Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.15),rgba(2,6,23,0)_50%)] z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ 
          y: [-20, 20, -20],
          rotate: [0, 5, -5, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 blur-[100px] rounded-full z-0 pointer-events-none"
      />
      <motion.div 
        animate={{ 
          y: [30, -30, 30],
          rotate: [0, -5, 5, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-3 py-1.5 px-5 rounded-full bg-slate-900/50 border border-slate-700/50 text-slate-300 text-sm font-mono mb-10 backdrop-blur-md group cursor-default"
            whileHover={{ scale: 1.02, borderColor: "rgba(34, 211, 238, 0.4)" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="group-hover:text-cyan-400 transition-colors">Core System v2.0.4 Online</span>
          </motion.div>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 leading-none select-none">
            <span className="inline-block text-white drop-shadow-2xl">
              Liquid
            </span>
            <br className="md:hidden" />
            <MotionSpan 
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 ml-0 md:ml-4 relative"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% auto" }}
            >
              Core
              <motion.span
                 className="absolute inset-0 bg-cyan-400/20 blur-xl"
                 animate={{ opacity: [0, 0.5, 0] }}
                 transition={{ duration: 2, repeat: Infinity }}
              />
            </MotionSpan>
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            The Next-Generation <span className="text-white font-semibold">Private Client Framework</span>.
            <br className="hidden md:block" />
            Engineered for <span className="text-cyan-400 font-mono">max_fps</span> and ultimate security.
          </p>
        </MotionDiv>

        {/* Buttons */}
        <MotionDiv 
          className="flex flex-col md:flex-row justify-center items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "#5865F2", borderColor: "#5865F2", color: "white" }}
            whileTap={{ scale: 0.95 }}
            className="group w-64 py-4 bg-[#5865F2]/10 border border-[#5865F2]/50 text-[#5865F2] font-bold rounded-xl flex items-center justify-center gap-3 transition-all duration-300 backdrop-blur-sm shadow-[0_0_20px_rgba(88,101,242,0.1)] hover:shadow-[0_0_30px_rgba(88,101,242,0.4)]"
          >
            <Disc className="w-6 h-6" />
            <span className="text-lg tracking-wide">Join Discord</span>
          </motion.button>
        </MotionDiv>
      </div>

      {/* Scroll Indicator */}
      <MotionDiv 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs font-mono tracking-[0.2em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </MotionDiv>
    </section>
  );
};