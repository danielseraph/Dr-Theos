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

const objectivesList = [
  "To empower youths, women, students and other vulnerable or underserved members of society through education, vocational training and skills development.",
  "To provide scholarships, educational assistance, learning materials and other forms of educational support to deserving individuals.",
  "To support entrepreneurship and small-business development through training, mentorship, business support, equipment, grants, partnerships and other lawful empowerment initiatives.",
  "To promote self-development, leadership, creativity, innovation, financial responsibility and personal growth.",
  "To organize vocational and professional training programs in areas including tailoring, beauty services, technology, entrepreneurship, crafts, business management and other relevant skills.",
  "To support individuals in developing sustainable sources of income and improving their economic independence.",
  "To promote community development, volunteerism, social responsibility and initiatives that improve the welfare of communities.",
  "To establish partnerships with governmental organizations, non-governmental organizations, educational institutions, businesses, foundations, philanthropists and international development organizations.",
  "To provide mentorship, career guidance and capacity-building opportunities for young people and other beneficiaries.",
  "To undertake charitable, humanitarian and community-development projects where such activities are consistent with the objectives of the Organization.",
  "To promote equality of opportunity, dignity, responsible citizenship and peaceful community development.",
  "To conduct research, seminars, workshops, conferences and public-awareness programs relevant to the mission of the Organization.",
  "To mobilize lawful donations, grants, sponsorships and other resources for the advancement of the Organization's objectives.",
  "To establish lawful programs and partnerships outside Nigeria where permitted by the laws of the relevant jurisdiction.",
  "To undertake any other lawful activity incidental or conducive to the attainment of the foregoing objectives."
];

export const Mission = () => {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold mb-6">
            Mission, Vision & Objectives
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            The foundation of everything we do — our purpose, our vision for the future, and the values that guide us.
          </motion.p>
        </div>
      </section>

      {/* Mission, Vision & Objectives */}
      <section className="py-24 bg-offwhite px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-navy text-white p-10 rounded-3xl">
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-gold/20 border border-gold/30">
                <span className="text-gold text-xs font-bold tracking-widest uppercase">Our Mission</span>
              </div>
              <p className="text-xl leading-relaxed text-white/90">
                To intentionally invest in people by providing practical opportunities, training, mentorship, educational support, entrepreneurship assistance and community-development initiatives that enable individuals and communities to become more self-reliant and productive.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-gold p-10 rounded-3xl">
              <div className="inline-block px-3 py-1 mb-6 rounded-full bg-navy/20 border border-navy/30">
                <span className="text-navy text-xs font-bold tracking-widest uppercase">Our Vision</span>
              </div>
              <p className="text-xl leading-relaxed text-navy font-medium">
                To build empowered individuals and communities by creating opportunities for education, skills development, entrepreneurship, economic empowerment, mentorship, social development and sustainable growth.
              </p>
            </motion.div>
          </div>

          {/* Objectives */}
          <div className="mb-24 bg-white p-10 md:p-14 rounded-3xl border border-gray-100 shadow-sm">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-navy mb-4">Aims & Objectives</h2>
              <p className="text-dark/60 text-lg">The objectives of the Organization shall include:</p>
            </div>
            <div className="columns-1 md:columns-2 gap-12 text-dark/80">
              <ol className="list-decimal list-inside md:list-outside md:ml-4 space-y-5">
                {objectivesList.map((obj, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: i * 0.05 }}
                    className="leading-relaxed pl-2 break-inside-avoid"
                  >
                    {obj}
                  </motion.li>
                ))}
              </ol>
            </div>
          </div>

          {/* Values */}
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-navy mb-4">Our Core Values</h2>
            <p className="text-dark/60 text-lg max-w-xl mx-auto">These principles are not just words on a page - they are the standards we hold ourselves to every single day.</p>
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
