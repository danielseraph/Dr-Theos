import { motion } from 'framer-motion';
import { Shield, FileText, Lock, Users, AlertTriangle, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const policies = [
  { icon: <Lock />, category: 'Privacy & Data', title: 'Privacy Policy', desc: 'How we collect, use, and protect your personal information.' },
  { icon: <FileText />, category: 'Legal', title: 'Terms of Use', desc: 'The rules and guidelines for using our website and services.' },
  { icon: <Shield />, category: 'Safeguarding', title: 'Child Safeguarding Policy', desc: 'Our commitment to protecting children involved in our programs.' },
  { icon: <Users />, category: 'Safeguarding', title: 'Vulnerable Persons Protection', desc: 'Guidelines for protecting vulnerable adults and community members.' },
  { icon: <AlertTriangle />, category: 'Compliance', title: 'Anti-Fraud & Anti-Corruption', desc: 'Our zero-tolerance policy towards fraud, bribery, and corruption.' },
  { icon: <Eye />, category: 'Compliance', title: 'Whistleblower Policy', desc: 'Secure and confidential procedures for reporting concerns.' },
  { icon: <FileText />, category: 'Governance', title: 'Conflict-of-Interest Policy', desc: 'Rules governing transparency for our board and staff.' },
  { icon: <Users />, category: 'Governance', title: 'Code of Conduct', desc: 'The ethical standards expected of all staff, volunteers, and partners.' },
  { icon: <FileText />, category: 'Operations', title: 'Volunteer Policy', desc: 'Guidelines, rights, and responsibilities for our volunteers.' },
  { icon: <FileText />, category: 'Operations', title: 'Donation & Refund Policy', desc: 'Terms regarding financial contributions and refund eligibility.' },
  { icon: <Eye />, category: 'Operations', title: 'Media & Photography Consent', desc: 'How we obtain and manage consent for media used on our platforms.' },
  { icon: <Shield />, category: 'Legal', title: 'Accessibility Statement', desc: 'Our commitment to making our services accessible to everyone.' },
];

export const Policies = () => {
  return (
    <div className="w-full pt-20">
      
      {/* Hero */}
      <section className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-gold" />
            </div>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold mb-6">
            Policies & Legal Information
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Because we work with vulnerable community members, young people, and students, safeguarding and transparency are at the core of everything we do.
          </motion.p>
        </div>
      </section>

      {/* Policies Grid */}
      <section className="py-24 bg-offwhite px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {policies.map((policy, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-gold/30 transition-all group flex flex-col h-full cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-navy shrink-0 group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                    {policy.icon}
                  </div>
                  <span className="text-xs font-bold text-gold uppercase tracking-wider">{policy.category}</span>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors">{policy.title}</h3>
                <p className="text-dark/70 text-sm leading-relaxed flex-grow">{policy.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-navy text-sm font-bold group-hover:text-gold transition-colors">
                  Read Policy <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Report a Concern CTA */}
      <section className="py-20 bg-white px-6 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-4">Need to report a concern?</h2>
          <p className="text-dark/70 mb-8 max-w-xl mx-auto leading-relaxed">
            We take all reports regarding safeguarding, fraud, or code of conduct violations seriously. You can report concerns confidentially to our compliance team.
          </p>
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy text-white rounded-full font-bold hover:bg-gold transition-colors">
            Contact Compliance Team
          </Link>
        </div>
      </section>

    </div>
  );
};
