import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '../components/common/Button';

const openPositions = [
  { title: 'Program Coordinator (Vocational Training)', type: 'Full-time', location: 'Calabar, Nigeria', dept: 'Programs' },
  { title: 'Community Outreach Officer', type: 'Full-time', location: 'Calabar, Nigeria', dept: 'Programs' },
  { title: 'Digital Marketing Specialist', type: 'Part-time', location: 'Remote / Hybrid', dept: 'Communications' },
];

const opportunities = [
  {
    title: 'Internships',
    desc: 'Kickstart your career with hands-on experience in NGO management, field operations, or digital communications. Designed for recent graduates and current students.',
    linkText: 'View Internships'
  },
  {
    title: 'Fellowships',
    desc: 'Intensive 6-month programs for emerging leaders passionate about community development and policy. Includes stipends and direct mentorship.',
    linkText: 'Explore Fellowships'
  },
  {
    title: 'Volunteer Positions',
    desc: 'Give back to your community by sharing your time and skills. We offer roles in mentoring, event organization, and technical support.',
    linkText: 'Become a Volunteer',
    link: '/volunteer'
  }
];

export const Careers = () => {
  return (
    <div className="w-full pt-20">
      
      {/* Hero */}
      <section className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold mb-6">
            Careers & Opportunities
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Join a passionate team dedicated to empowering individuals and transforming communities. Discover how you can make a lasting impact.
          </motion.p>
        </div>
      </section>

      {/* Current Vacancies */}
      <section className="py-24 bg-offwhite px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">Current Vacancies</h2>
            <p className="text-dark/60 text-lg">We are looking for dedicated professionals to join our growing team.</p>
          </div>

          <div className="space-y-4">
            {openPositions.map((job, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gold/30 transition-all flex flex-col md:flex-row md:items-center justify-between group">
                <div className="mb-6 md:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold bg-gold/10 text-gold px-3 py-1 rounded-full uppercase tracking-wider">{job.dept}</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-dark/60">
                    <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4" /> {job.type}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4" /> {job.location}</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full md:w-auto">Apply Now</Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl border border-gray-100 text-center">
            <h4 className="text-lg font-bold text-navy mb-2">Application Instructions</h4>
            <p className="text-dark/70 text-sm max-w-2xl mx-auto mb-6">
              To apply for any open role, please send your CV and a tailored cover letter to <a href="mailto:careers@drtheoshub.org" className="text-gold hover:underline">careers@drtheoshub.org</a> with the job title in the subject line.
            </p>
          </div>
        </div>
      </section>

      {/* Other Opportunities */}
      <section className="py-24 bg-white px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-navy mb-4">More Ways to Get Involved</h2>
            <p className="text-dark/60 text-lg">Beyond full-time employment, we offer various pathways to engage with our mission.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {opportunities.map((opp, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-offwhite p-8 rounded-2xl border border-gray-100 flex flex-col h-full hover:border-gold/30 transition-colors">
                <h3 className="text-xl font-bold text-navy mb-4">{opp.title}</h3>
                <p className="text-dark/70 text-sm leading-relaxed mb-8 flex-grow">{opp.desc}</p>
                <a href={opp.link || "#"} className="inline-flex items-center gap-2 text-gold font-bold hover:gap-3 transition-all text-sm uppercase tracking-wider">
                  {opp.linkText} <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
