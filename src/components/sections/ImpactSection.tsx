import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItemProps {
  endValue: number;
  suffix: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ endValue, suffix, label }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const duration = 2000; // 2 seconds

      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        
        // Easing function
        const percentage = Math.min(progress / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
        
        setCount(Math.floor(easeOutQuart * endValue));

        if (progress < duration) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);
    }
  }, [isInView, endValue]);

  return (
    <div ref={ref} className="text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
      <div className="text-4xl md:text-5xl font-black text-navy mb-2 tracking-tight">
        {count}{suffix}
      </div>
      <div className="text-gold font-semibold uppercase tracking-wider text-sm">
        {label}
      </div>
    </div>
  );
};

export const ImpactSection = () => {
  // Placeholder data that will eventually come from the API
  const stats = [
    { value: 500, suffix: '+', label: 'People Connected' },
    { value: 20, suffix: '+', label: 'Projects' },
    { value: 15, suffix: '+', label: 'Partnerships' },
    { value: 5, suffix: '+', label: 'Communities Reached' },
  ];

  return (
    <section className="py-24 bg-offwhite relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-navy mb-6 leading-tight"
          >
            When We Move Together, <br />
            <span className="text-gold">We Move Further.</span>
          </motion.h2>
          <p className="text-lg text-dark/70">
            Our collective efforts translate into real-world impact. Every connection made is a step towards our shared success.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatItem 
              key={index}
              endValue={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
