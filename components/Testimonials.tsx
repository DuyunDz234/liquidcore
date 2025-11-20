import React from 'react';
import { motion } from 'framer-motion';
import { Quote, User } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../constants';

const MotionDiv = motion.div as any;

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#030817] relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Được Tin Dùng Bởi <span className="text-cyan-400">Top Players</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Gia nhập hàng ngàn người chơi đang thống trị các server PvP mỗi ngày.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="p-8 rounded-2xl bg-slate-900/30 backdrop-blur-md border border-slate-800 relative group hover:bg-slate-900/50 transition-all duration-300"
            >
              <div className="absolute -top-4 -left-4 p-3 bg-slate-950 rounded-xl border border-slate-800 text-cyan-500 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Quote className="w-6 h-6 fill-current" />
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed italic relative z-10">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg">
                   <User className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{item.name}</h4>
                  <span className="text-xs text-cyan-400 uppercase font-bold tracking-wider">{item.role}</span>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};