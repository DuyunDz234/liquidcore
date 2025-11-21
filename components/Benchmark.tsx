import React from 'react';
import { motion } from 'framer-motion';
import { BENCHMARK_DATA } from '../constants';
import { Activity, Zap, Gauge, Cpu, Layers } from 'lucide-react';

const MotionDiv = motion.div as any;

export const Benchmark: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-[#020617] relative border-y border-blue-900/20 overflow-hidden">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
      
      {/* Blue Glow Orbs */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-[-10%] w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Side: Content */}
          <MotionDiv 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-5/12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 font-mono text-xs tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <Gauge className="w-4 h-4" /> Benchmark Results
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              Sức Mạnh <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-white filter drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                Tuyệt Đối
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              LiquidCore không chỉ là một client, mà là một con quái vật về hiệu năng. Với kiến trúc 
              <span className="text-blue-400 font-bold mx-1">Zero-Overhead Rendering</span>, 
              chúng tôi đẩy FPS của bạn lên giới hạn phần cứng.
            </p>

            {/* Mini Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 rounded-xl bg-blue-950/30 border border-blue-800/50 backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-2 text-blue-400">
                     <Activity className="w-5 h-5" />
                     <span className="text-xs font-bold uppercase tracking-wider">Max FPS</span>
                  </div>
                  <div className="text-3xl font-bold text-white">380<span className="text-sm text-slate-500 ml-1">fps</span></div>
               </div>
               <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/50 backdrop-blur-md">
                  <div className="flex items-center gap-3 mb-2 text-cyan-400">
                     <Zap className="w-5 h-5" />
                     <span className="text-xs font-bold uppercase tracking-wider">Latency</span>
                  </div>
                  <div className="text-3xl font-bold text-white">8<span className="text-sm text-slate-500 ml-1">ms</span></div>
               </div>
            </div>
          </MotionDiv>
          
          {/* Right Side: Chart Visualization */}
          <MotionDiv 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="lg:w-7/12 w-full"
          >
             <div className="relative p-8 rounded-3xl bg-slate-900/60 border border-blue-800/30 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.3)] overflow-hidden">
                {/* HUD Overlay Elements */}
                <div className="absolute top-4 right-4 flex gap-2">
                   <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                   <div className="w-2 h-2 bg-blue-500/50 rounded-full"></div>
                   <div className="w-2 h-2 bg-blue-500/20 rounded-full"></div>
                </div>
                
                <div className="space-y-8 relative z-10">
                   {BENCHMARK_DATA?.map((item, index) => {
                      const isWinner = index === BENCHMARK_DATA.length - 1;
                      return (
                        <div key={index} className="relative">
                           <div className="flex justify-between items-end mb-2">
                              <span className={`text-sm font-bold uppercase tracking-wider ${isWinner ? 'text-cyan-300' : 'text-slate-400'}`}>
                                 {item.name}
                              </span>
                              <div className="flex items-baseline gap-1">
                                 <span className={`text-xl font-mono font-bold ${isWinner ? 'text-white' : 'text-slate-500'}`}>
                                    <CountUp end={item.fps} duration={2} delay={index * 0.2} />
                                 </span>
                                 <span className="text-xs text-slate-600 font-bold">FPS</span>
                              </div>
                           </div>
                           
                           {/* Bar Container */}
                           <div className="h-12 bg-slate-950/80 rounded-lg p-1.5 border border-slate-800/50 relative overflow-hidden">
                              {/* Grid Background in Bar */}
                              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_100%]"></div>
                              
                              <motion.div 
                                 initial={{ width: 0 }}
                                 whileInView={{ width: `${(item.fps / 400) * 100}%` }}
                                 viewport={{ once: true }}
                                 transition={{ duration: 1.5, ease: "circOut", delay: index * 0.2 }}
                                 className={`h-full rounded-md relative flex items-center justify-end px-3 min-w-[60px] ${item.color}`}
                              >
                                  {isWinner && (
                                     <motion.div 
                                        className="absolute inset-0 bg-white/20"
                                        animate={{ opacity: [0, 0.5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                     />
                                  )}
                                  {isWinner && (
                                     <Layers className="w-5 h-5 text-blue-900 animate-pulse" />
                                  )}
                              </motion.div>
                           </div>
                        </div>
                      );
                   })}
                </div>
             </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

const CountUp = ({ end, duration, delay }: { end: number, duration: number, delay: number }) => {
    const [count, setCount] = React.useState(0);
    const [startAnim, setStartAnim] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => setStartAnim(true), delay * 1000);
        return () => clearTimeout(timer);
    }, [delay]);

    React.useEffect(() => {
        if (!startAnim) return;
        
        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            const easeOut = (x: number): number => x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
            setCount(Math.floor(easeOut(progress) * end));
            if (progress < 1) animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, startAnim]);

    return <>{count}</>;
};