import React from 'react';
import { ARCHITECTURE_LAYERS } from '../constants';
import { motion } from 'framer-motion';
import { Database, Layers, Layout, Terminal } from 'lucide-react';

const MotionDiv = motion.div as any;

export const Architecture: React.FC = () => {
  const icons = [Database, Layers, Layout, Terminal];

  return (
    <section className="py-28 px-4 bg-[#050a1f] relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kiến Trúc <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Hệ Thống</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Thiết kế Modular 4 tầng riêng biệt giúp LiquidCore đạt hiệu suất tối đa và khả năng mở rộng không giới hạn.
          </p>
        </div>

        <div className="flex flex-col gap-8 items-center">
          {ARCHITECTURE_LAYERS.map((layer, index) => {
            const Icon = icons[index % icons.length];
            return (
              <React.Fragment key={layer.id}>
                {/* Connector Line */}
                {index > 0 && (
                   <MotionDiv 
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: 40, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="w-0.5 bg-gradient-to-b from-slate-700 to-slate-700/50"
                   />
                )}

                <MotionDiv
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: "spring", stiffness: 50 }}
                  className={`w-full md:w-4/5 lg:w-3/4 relative group`}
                >
                  {/* Glass Panel */}
                  <div className={`p-6 md:p-8 rounded-2xl border backdrop-blur-xl bg-slate-900/40 transition-all duration-300 ${layer.color} hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] relative overflow-hidden`}>
                    
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      {/* Number & Icon */}
                      <div className="flex-shrink-0 relative">
                         <div className="w-16 h-16 rounded-xl bg-slate-950/50 border border-white/10 flex items-center justify-center text-2xl font-bold shadow-inner">
                            <Icon className="w-8 h-8 opacity-80" />
                         </div>
                         <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-xs font-mono">
                            {layer.id}
                         </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-3 tracking-wide text-white">{layer.name}</h3>
                        <div className="flex flex-wrap justify-center md:justify-start gap-3">
                          {layer.features.map((feat, i) => (
                            <span key={i} className="px-3 py-1.5 text-sm font-medium font-mono rounded-lg bg-black/30 border border-white/5 hover:bg-white/5 transition-colors">
                              {feat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </MotionDiv>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};