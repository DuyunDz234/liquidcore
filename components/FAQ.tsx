import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const MotionDiv = motion.div as any;

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-cyan-500/10 blur-[100px] -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-slate-900/50 rounded-full border border-slate-800">
              <HelpCircle className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Câu Hỏi Thường Gặp</h2>
          <p className="text-slate-400">Giải đáp chi tiết về LiquidCore Client Framework</p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-slate-900/80 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.1)]' 
                  : 'bg-slate-900/30 border-slate-800 hover:border-slate-700'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <span className={`font-semibold text-lg transition-colors ${openIndex === index ? 'text-cyan-400' : 'text-slate-200'}`}>
                  {item.question}
                </span>
                <div className={`p-1 rounded-full transition-colors ${openIndex === index ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-800 text-slate-500'}`}>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <MotionDiv
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-transparent">
                      {item.answer}
                    </div>
                  </MotionDiv>
                )}
              </AnimatePresence>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};