import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { STATS_DATA } from '../constants';

const MotionDiv = motion.div as any;

const Counter = ({ value, prefix = '', suffix = '' }: { value: number, prefix?: string, suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-20px" });
    
    return (
        <span ref={ref} className="font-bold text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-cyan-100 to-blue-600">
            {prefix}
            {isInView ? (
                <CountUp end={value} duration={2} />
            ) : (
                0
            )}
            {suffix}
        </span>
    );
};

const CountUp = ({ end, duration }: { end: number, duration: number }) => {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            
            // Easing function (easeOutExpo)
            const easeOut = (x: number): number => {
                return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
            }

            setCount(Math.floor(easeOut(progress) * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return <>{count}</>;
};


export const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950 border-b border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS_DATA.map((stat, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex flex-col items-center gap-2"
            >
              <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <span className="text-sm md:text-base text-slate-400 font-medium uppercase tracking-wider">
                {stat.label}
              </span>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};