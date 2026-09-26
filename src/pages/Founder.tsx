import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Heart, ArrowRight } from 'lucide-react';

const achievements = [
  { icon: <Award className="w-6 h-6" />, title: 'Engineer & Doctorate', desc: 'A seasoned professional with expertise in engineering and academic distinction.' },
  { icon: <BookOpen className="w-6 h-6" />, title: 'Educator & Mentor', desc: 'Dedicated to nurturing the next generation of leaders through education and guidance.' },
  { icon: <Heart className="w-6 h-6" />, title: 'Community Champion', desc: 'Committed to empowering vulnerable individuals and communities across Bayelsa State.' },
];

export const Founder = () => {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-3 py-1 mb-6 rounded-full bg-gold/20 border border-gold/30">
            <span className="text-gold text-xs font-bold tracking-widest uppercase">Meet the Founder</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-bold mb-6">
            Prince Engr. Dr. John Theophilus Okosigha
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Founder & Executive Director, Dr. Theo's Empowerment Hub
          </motion.p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 bg-offwhite px-6">
        <div className="max-w-6xl mx-auto">
          <div className="block">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="float-none lg:float-left lg:w-[40%] lg:mr-10 mb-8 mt-2 relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-gold/20 rounded-3xl" />
                <img
                  src="/Dr Theo.jpeg"
                  alt="Prince Engr. Dr. John Theophilus Okosigha"
                  className="relative z-10 w-full rounded-3xl object-cover shadow-2xl"
                />
              </div>
            
              <h2 className="text-3xl font-bold text-navy mb-6">A Life Dedicated to Service</h2>
              <div className="space-y-6 text-dark/80 leading-relaxed text-lg">
                <p>
                  <strong>Prince Engr. Dr. John Theophilus Okosigha</strong>, widely known as <strong>"Dr. Theo,"</strong> is a distinguished engineer, academic, technology professional, entrepreneur, and humanitarian with extensive international and professional experience.
                </p>
                <p>
                  He holds a <strong>BSc in Naval Architecture and Marine Engineering</strong>, a <strong>Master of Engineering Technology</strong>, and a <strong>PhD in Technology Management</strong>. His professional experience spans engineering, customer service, technical support, quality assurance, supervision, mentoring, and executive virtual assistance, including supporting clients and customers across the United States, Canada, Puerto Rico, and Mexico.
                </p>
                <p>
                  Born and raised in Opume Community, Ogbia L.G.A., Bayelsa State, Nigeria, Dr. Theo is deeply committed to empowering individuals and strengthening communities. His passion for helping others is also deeply personal, inspired by the love, sacrifices, values, and unwavering support of his late mother, <strong>Queen Isekpar Theophilus Okosigha</strong>, as well as his beloved wife, <strong>Queen Merjerie Sorongon-Okosigha</strong>, whose love, encouragement, and support continue to inspire him.
                </p>
                <p>
                  His wife, Queen Merjerie, serves as the Co-Founder and Executive Director of Dr. Theo's Empowerment Hub, working alongside him in advancing the organization's vision of creating opportunities and making a meaningful difference in the lives of others. Dr. Theo deeply values her as both his life partner and his partner in service, and together they are committed to building a culture of love, support, empowerment, accountability, and shared growth.
                </p>
                <p>
                  This shared vision led to the establishment of <strong>Dr. Theo's Empowerment Hub</strong>, an initiative focused on education, skills development, mentorship, entrepreneurship, and economic empowerment for underprivileged individuals, children, women, youth, and entrepreneurs.
                </p>
                <p>
                  For Dr. Theo, empowerment is more than providing assistance—it is about building people, creating opportunities, developing capacity, and helping individuals become capable of helping themselves and others. Through the Empowerment Hub, he and his wife seek to extend the love, support, and values that have shaped their own lives to individuals and communities in need.
                </p>

                <div className="clear-both pt-8"></div><div className="mt-12 p-8 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-40 h-40 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden border-4 border-gold/20 shadow-md">
                    <img src="/mama.jpg" alt="Queen Isekpar Theophilus Okosigha" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-navy mb-3">A Legacy of Love & Inspiration</h3>
                    <p className="text-dark/80 leading-relaxed text-base">
                      The profound dedication to service and community empowerment that drives the Hub is deeply inspired by the life, values, and enduring legacy of Dr. Theo's beloved mother, Queen Isekpar Theophilus Okosigha. Her spirit of generosity, resilience, and unwavering belief in lifting others up remain the guiding light behind every initiative the Empowerment Hub undertakes.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Vision & Leadership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-offwhite p-8 rounded-3xl border border-gray-100 text-center">
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{item.title}</h3>
                <p className="text-dark/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-4">Learn about our Leadership Team</h2>
          <p className="text-white/70 mb-8">Meet the dedicated individuals who work alongside Dr. Theo to drive our mission forward.</p>
          <Link to="/about/leadership" className="inline-flex items-center gap-2 px-8 py-4 bg-gold text-navy rounded-full font-bold hover:bg-gold/90 transition-colors">
            Meet the Team <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

