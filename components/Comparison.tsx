import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldCheck } from 'lucide-react';

const MotionDiv = motion.div as any;
const MotionTr = motion.tr as any;

export const Comparison: React.FC = () => {
  const features = [
    { name: "Hiệu năng (FPS)", core: "Cực Đại (200%+)", lb: "Tiêu chuẩn" },
    { name: "Bảo mật (Closed Source)", core: true, lb: false },
    { name: "Giao diện Modern UI", core: true, lb: false },
    { name: "Hỗ trợ Script Kotlin", core: true, lb: "Hạn chế" },
    { name: "Cập nhật tự động", core: true, lb: false },
  ];

  return (
    <section className="py-24 px-4 bg-slate-950 border-y border-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Tại Sao Chọn <span className="text-cyan-400">LiquidCore</span>?
          </h2>
          <p className="text-center text-slate-400 mb-16">So sánh sự khác biệt giữa bản gốc và phiên bản nâng cấp</p>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30 backdrop-blur-md shadow-2xl"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/80">
                <th className="p-6 text-slate-300 font-medium w-1/3">Tính Năng</th>
                <th className="p-6 text-cyan-400 font-bold text-center w-1/3 bg-cyan-950/10 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500"></div>
                  LiquidCore (Premium)
                </th>
                <th className="p-6 text-slate-500 font-medium text-center w-1/3">LiquidBounce (Legacy)</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feat, idx) => (
                <MotionTr
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="border-b border-slate-800/50 hover:bg-white/5 transition-colors group"
                >
                  <td className="p-6 text-slate-200 font-medium group-hover:text-white transition-colors">
                    {feat.name}
                    {feat.name.includes("Bảo mật") && <ShieldCheck className="inline ml-2 w-4 h-4 text-emerald-500" />}
                  </td>
                  <td className="p-6 text-center bg-cyan-950/5 border-l border-r border-slate-800/50">
                    <div className="flex justify-center items-center font-bold text-cyan-300">
                      {feat.core === true ? <Check className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" /> : feat.core}
                    </div>
                  </td>
                  <td className="p-6 text-center text-slate-500 bg-slate-900/20">
                    <div className="flex justify-center items-center">
                      {feat.lb === false ? <X className="w-6 h-6 text-slate-600" /> : feat.lb}
                    </div>
                  </td>
                </MotionTr>
              ))}
            </tbody>
          </table>
        </MotionDiv>
      </div>
    </section>
  );
};