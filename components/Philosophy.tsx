import React from 'react';
import { motion } from 'framer-motion';
import { PHILOSOPHY_ITEMS } from '../constants';

const MotionDiv = motion.div as any;

export const Philosophy: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-950 relative">
       <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Triết Lý Thiết Kế</h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400">Định hình lại cách bạn trải nghiệm client mod</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PHILOSOPHY_ITEMS.map((item, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 transition-colors group"
            >
              {item.icon && (
                <div className="w-12 h-12 rounded-lg bg-cyan-950/50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
              )}
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </MotionDiv>
          ))}
        </div>
       </div>
    </section>
  );
};