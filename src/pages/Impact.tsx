import { motion } from 'framer-motion';
import { Users, BookOpen, Briefcase, Building2, Wrench, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/common/Button';

const stats = [
  { value: '250+', label: 'People trained', icon: <Users className="w-8 h-8 text-gold" />, color: 'gold' },
  { value: '75+', label: 'Students supported', icon: <BookOpen className="w-8 h-8 text-gold" />, color: 'gold' },
  { value: '40+', label: 'Entrepreneurs assisted', icon: <Briefcase className="w-8 h-8 text-navy" />, color: 'navy' },
  { value: '10', label: 'Community projects', icon: <Building2 className="w-8 h-8 text-gold" />, color: 'gold' },
  { value: '15', label: 'Vocational training beneficiaries', icon: <Wrench className="w-8 h-8 text-gold" />, color: 'gold' },
];

export const Impact = () => {
  return (
    <div className="w-full pt-20">
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-gold/20 border border-gold/30 px-6 py-2 rounded-full mb-6"
          >
            <span className="text-gold font-semibold uppercase tracking-widest text-sm">Our Impact</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            What We Have Actually Done
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            We believe in transparency and measurable results. Here is a snapshot of the lives we've touched and the communities we've strengthened so far.
          </motion.p>
        </div>
      </section>

      {/* Stats Dashboard */}
      <section className="py-24 bg-offwhite px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`bg-white p-8 rounded-3xl border border-gray-100 text-center hover:shadow-lg transition-shadow group`}
              >
                <div className={`w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-${stat.color}/10 group-hover:scale-110 transition-transform`}>
                  {stat.icon}
                </div>
                <div className={`text-4xl font-black mb-2 text-${stat.color === 'gold' ? 'gold' : stat.color === 'gold' ? 'gold' : 'navy'}`}>
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-dark/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Story highlight placeholder */}
      <section className="py-24 bg-white px-6">
         <div className="max-w-5xl mx-auto">
           <div className="bg-navy rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
             <Heart className="w-12 h-12 text-gold mx-auto mb-6 relative z-10" />
             <h2 className="text-3xl font-bold mb-6 relative z-10">Real Stories, Real Change</h2>
             <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto mb-10 relative z-10">
               Behind every number is a story of resilience, hard work, and transformation. We are constantly updating our impact stories to share the real-life journeys of our beneficiaries.
             </p>
             <Link to="/contact" className="inline-block relative z-10">
               <Button variant="primary" size="lg">Share Your Success Story</Button>
             </Link>
           </div>
         </div>
      </section>

    </div>
  );
};
