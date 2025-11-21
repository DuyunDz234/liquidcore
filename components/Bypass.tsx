import React from 'react';
import { motion } from 'framer-motion';
import { BYPASS_DATA } from '../constants';
import { Shield } from 'lucide-react';

const MotionDiv = motion.div as any;

export const Bypass: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-[#020617] relative overflow-hidden">
      
      {/* Background Grid giống Hero */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.4] pointer-events-none"></div>

      {/* Mesh Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute top-2/3 right-1/4 w-[700px] h-[700px] bg-purple-600/10 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <MotionDiv 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-block mb-4 px-5 py-1.5 rounded-full bg-slate-900/40 border border-slate-700/40 text-slate-300 font-mono text-xs tracking-widest backdrop-blur-md">
            Anti-Cheat Intel Report v2.0
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            <span className="text-cyan-400">Khả Năng Bypass</span> Hệ Thống
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg mt-4">
            Báo cáo phân tích theo thời gian thực về tỉ lệ vượt qua Anti-Cheat tại các server hàng đầu.
          </p>
        </MotionDiv>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {BYPASS_DATA.map((item, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-8 rounded-2xl bg-slate-900/30 border border-slate-800/40 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/30"
            >
              {/* Hover gradient nhẹ giống Features */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/30 group-hover:border-cyan-400/40 transition-all">
                      <item.icon className={`w-7 h-7 text-cyan-400`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.server}</h3>
                      <p className="text-xs text-slate-500 font-mono tracking-wider">
                        Target ID: {index + 8901}
                      </p>
                    </div>
                  </div>

                  <Shield className="w-6 h-6 text-cyan-400 opacity-40" />
                </div>

                {/* Bypass Rate */}
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">BYPASS RATE</span>
                    <span className="text-2xl font-bold text-cyan-300">{item.rate}%</span>
                  </div>

                  {/* Progress */}
                  <div className="w-full h-2 bg-slate-800/60 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.rate}%` }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                    />
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-center justify-between border-t border-slate-700/40 pt-4">
                  <div className="flex items-center gap-2">
                    <span 
                      className={`w-2 h-2 rounded-full ${
                        item.rate >= 95 ? "bg-green-400" : "bg-yellow-400"
                      }`}
                    ></span>

                    <span 
                      className={`text-xs uppercase font-bold tracking-wide ${
                        item.rate >= 95 ? "text-green-300" : "text-yellow-300"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {item.rate >= 98 && (
                    <span className="px-2 py-0.5 text-[10px] rounded bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono uppercase">
                      Verified
                    </span>
                  )}
                </div>

              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};
