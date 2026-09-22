import { motion } from 'framer-motion';
import { FileText, BarChart3, Users, ClipboardCheck } from 'lucide-react';

const financialData = [
  { label: 'Total Income Received', value: '₦12,450,000', year: '2025' },
  { label: 'Program Expenditure', value: '₦8,920,000', year: '2025' },
  { label: 'Administrative Costs', value: '₦1,230,000', year: '2025' },
  { label: 'Community Projects', value: '₦2,300,000', year: '2025' },
];

const programStats = [
  { label: 'Beneficiaries Supported', value: '500+' },
  { label: 'Scholarships Awarded', value: '85' },
  { label: 'Vocational Graduates', value: '210' },
  { label: 'Community Projects', value: '12' },
];

export const Transparency = () => {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
              <BarChart3 className="w-8 h-8 text-gold" />
            </div>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold mb-6">
            Transparency & Accountability
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            We believe accountability builds trust. Here you will find an open record of our finances, governance, and program outcomes.
          </motion.p>
        </div>
      </section>

      {/* Financial Summary */}
      <section className="py-24 bg-offwhite px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center text-gold">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-navy">Financial Summary (2025)</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {financialData.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center">
                <p className="text-3xl font-bold text-navy mb-2">{item.value}</p>
                <p className="text-dark/60 text-sm">{item.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-5 h-5 text-gold" />
              <h3 className="text-xl font-bold text-navy">Annual Reports</h3>
            </div>
            <div className="space-y-3">
              {['2025 Annual Report', '2024 Annual Report', '2023 Annual Report'].map((report, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-offwhite rounded-xl border border-gray-100">
                  <span className="font-medium text-navy">{report}</span>
                  <button className="text-gold font-bold text-sm hover:underline">Download PDF</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Accountability */}
      <section className="py-24 bg-white px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center text-gold">
              <Users className="w-5 h-5" />
            </div>
            <h2 className="text-2xl font-bold text-navy">Program Accountability</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {programStats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-offwhite p-8 rounded-2xl border border-gray-100 text-center">
                <p className="text-4xl font-bold text-gold mb-2">{stat.value}</p>
                <p className="text-dark/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Governance */}
          <div className="bg-offwhite p-8 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardCheck className="w-5 h-5 text-gold" />
              <h3 className="text-xl font-bold text-navy">Governance & Policies</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['Conflict-of-Interest Policy', 'Safeguarding Policy', 'Anti-Fraud Policy', 'Whistleblower Policy', 'Code of Conduct', 'Volunteer Policy'].map((policy, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
                  <span className="font-medium text-navy text-sm">{policy}</span>
                  <a href="/policies" className="text-gold font-bold text-sm hover:underline">View</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
