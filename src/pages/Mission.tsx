import { motion } from 'framer-motion';
import { Eye, Target, Gem } from 'lucide-react';

const values = [
  { icon: <Eye className="w-7 h-7" />, title: 'Transparency', desc: 'We operate with openness and accountability in all our activities, finances, and decisions.' },
  { icon: <Target className="w-7 h-7" />, title: 'Impact', desc: 'Every program we run is designed to create measurable, lasting change in the lives of our beneficiaries.' },
  { icon: <Gem className="w-7 h-7" />, title: 'Dignity', desc: 'We treat every individual with respect, recognizing their inherent worth and potential.' },
  { icon: <Eye className="w-7 h-7" />, title: 'Inclusivity', desc: 'Our programs are designed to be accessible to all, regardless of gender, background, or location.' },
  { icon: <Target className="w-7 h-7" />, title: 'Sustainability', desc: 'We build communities and capacities that can thrive independently over the long term.' },
  { icon: <Gem className="w-7 h-7" />, title: 'Integrity', desc: 'We uphold the highest ethical standards and hold ourselves accountable to those we serve.' },
];

export const Mission = () => {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold mb-6">
            Our Mission & Vision
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            The foundation of everything we do — our purpose, our vision for the future, and the values that guide us.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-offwhite px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-navy text-white p-10 rounded-3xl">
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-gold/20 border border-gold/30">
                <span className="text-gold text-xs font-bold tracking-widest uppercase">Our Mission</span>
              </div>
              <p className="text-xl leading-relaxed text-white/90">
                To empower underprivileged individuals, youth, women, and aspiring entrepreneurs in Cross River State and beyond through education, vocational training, economic support, and community development initiatives that create lasting, sustainable change.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-gold p-10 rounded-3xl">
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-navy/20 border border-navy/30">
                <span className="text-navy text-xs font-bold tracking-widest uppercase">Our Vision</span>
              </div>
              <p className="text-xl leading-relaxed text-navy font-medium">
                A community where every individual, regardless of their circumstances, has access to the tools, knowledge, and opportunities needed to live a dignified, self-sufficient, and fulfilling life.
              </p>
            </motion.div>
          </div>

          {/* Values */}
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Core Values</h2>
            <p className="text-dark/60 text-lg max-w-xl mx-auto">These principles are not just words on a page — they are the standards we hold ourselves to every single day.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-gold/30 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-5">
                  {val.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{val.title}</h3>
                <p className="text-dark/60 text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
