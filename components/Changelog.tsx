import React from 'react';
import { motion } from 'framer-motion';
import { CHANGELOG_DATA } from '../constants';
import { FileCode, GitCommit } from 'lucide-react';

const MotionDiv = motion.div as any;

export const Changelog: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-950 border-t border-slate-900/50">
       <div className="max-w-4xl mx-auto">
          <MotionDiv 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-center mb-16"
          >
             <h2 className="text-3xl font-bold text-white mb-4">Nhật Ký <span className="text-cyan-400">Cập Nhật</span></h2>
             <p className="text-slate-400">Theo dõi quá trình phát triển liên tục của dự án.</p>
          </MotionDiv>

          <div className="space-y-8">
             {CHANGELOG_DATA?.map((log, index) => (
                <MotionDiv
                   key={index}
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: index * 0.1 }}
                   className="relative pl-8 md:pl-12 border-l border-slate-800"
                >
                   {/* Node */}
                   <div className={`absolute left-[-6px] top-0 w-3 h-3 rounded-full border-2 border-slate-950 ${
                      log.type === 'Major' ? 'bg-cyan-500' : 'bg-slate-600'
                   }`}></div>

                   <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">{log.version}</h3>
                      <span className="text-sm text-slate-500 font-mono">{log.date}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded uppercase font-bold w-fit ${
                         log.type === 'Major' ? 'bg-cyan-500/20 text-cyan-400' : 
                         log.type === 'Patch' ? 'bg-slate-700/50 text-slate-400' :
                         'bg-blue-500/20 text-blue-400'
                      }`}>
                         {log.type} Update
                      </span>
                   </div>

                   <ul className="space-y-2">
                      {log.changes?.map((change, i) => (
                         <li key={i} className="text-slate-400 flex items-start gap-2 text-sm">
                            <GitCommit className="w-4 h-4 mt-0.5 text-slate-600" />
                            <span>{change}</span>
                         </li>
                      ))}
                   </ul>
                </MotionDiv>
             ))}
          </div>
       </div>
    </section>
  );
};