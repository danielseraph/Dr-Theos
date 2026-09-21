import { motion } from 'framer-motion';
import { Shield, FileText, Scale, Eye, Users, FileCheck, Landmark, Lock } from 'lucide-react';

export const Transparency = () => {
  return (
    <div className="w-full pt-20">
      
      {/* Hero */}
      <section className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Transparency & Accountability
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Trust is the foundation of our work. We are committed to absolute transparency in how we operate, govern, and utilize our resources.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-16 h-16 text-gold mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-navy mb-6">Our Commitment</h2>
          <p className="text-lg text-dark/70 leading-relaxed">
            As a registered non-profit organization, we hold ourselves to the highest standards of financial integrity and ethical governance. We recognize that our donors, beneficiaries, and partners place their trust in us, and we honor that trust through open reporting, rigorous auditing, and strict policy adherence.
          </p>
        </div>
      </section>

      {/* Financial Transparency */}
      <section className="py-24 bg-offwhite px-6" id="financial">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Landmark className="w-10 h-10 text-gold" />
            <h2 className="text-3xl md:text-4xl font-bold text-navy">Financial Transparency</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <FileText className="w-8 h-8 text-gold mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Annual Reports</h3>
              <p className="text-dark/70 text-sm mb-4">Comprehensive yearly audits detailing income, operational costs, and program disbursements.</p>
              <button className="text-gold font-bold text-sm hover:underline">Download 2025 Report</button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <Eye className="w-8 h-8 text-gold mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Income & Expenditure</h3>
              <p className="text-dark/70 text-sm mb-4">Quarterly breakdowns of donations received and major expenditures across all operational areas.</p>
              <button className="text-gold font-bold text-sm hover:underline">View Q1 2026 Summary</button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <FileCheck className="w-8 h-8 text-gold mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">Donor-Funded Projects</h3>
              <p className="text-dark/70 text-sm mb-4">Specific expenditure tracking for ring-fenced grants and major donor contributions.</p>
              <button className="text-gold font-bold text-sm hover:underline">View Project Ledger</button>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Program Accountability */}
      <section className="py-24 bg-white px-6" id="governance">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div>
            <div className="flex items-center gap-4 mb-8">
              <Scale className="w-10 h-10 text-navy" />
              <h2 className="text-3xl font-bold text-navy">Governance</h2>
            </div>
            <p className="text-dark/70 mb-8 leading-relaxed">
              Our Board of Trustees provides independent oversight, ensuring strategic alignment with our founding constitution.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 bg-offwhite p-4 rounded-xl border border-gray-100">
                <Users className="w-6 h-6 text-navy shrink-0" />
                <div>
                  <h4 className="font-bold text-navy text-sm mb-1">Independent Board Structure</h4>
                  <p className="text-xs text-dark/70">A diverse board of experts overseeing executive management.</p>
                </div>
              </li>
              <li className="flex items-start gap-3 bg-offwhite p-4 rounded-xl border border-gray-100">
                <FileText className="w-6 h-6 text-navy shrink-0" />
                <div>
                  <h4 className="font-bold text-navy text-sm mb-1">Constitution & Bylaws</h4>
                  <p className="text-xs text-dark/70">Publicly available governing documents guiding our operations.</p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8">
              <Eye className="w-10 h-10 text-gold" />
              <h2 className="text-3xl font-bold text-navy">Program Accountability</h2>
            </div>
            <p className="text-dark/70 mb-8 leading-relaxed">
              We track, measure, and publish the real-world outcomes of our initiatives to ensure we are delivering genuine impact.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="font-medium text-dark/80">Public beneficiary numbers and demographic data</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="font-medium text-dark/80">Transparent selection procedures for all grants</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="font-medium text-dark/80">Routine project outcome evaluations and audits</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="font-medium text-dark/80">Dedicated reporting for institutional donors</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* Policies */}
      <section className="py-24 bg-navy text-white px-6" id="policies">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Lock className="w-10 h-10 text-gold" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Organizational Policies</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-gold mb-3">Conflict-of-Interest Policy</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Strict guidelines ensuring all board members, staff, and volunteers declare financial or personal interests to prevent unethical decision-making.
              </p>
              <button className="text-xs uppercase tracking-widest font-bold text-white hover:text-gold transition-colors">Read Policy →</button>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-gold mb-3">Code of Conduct</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Our ethical framework mandating respect, integrity, and anti-discrimination practices across all levels of the organization.
              </p>
              <button className="text-xs uppercase tracking-widest font-bold text-white hover:text-gold transition-colors">Read Policy →</button>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-gold mb-3">Safeguarding Policy</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Comprehensive protocols designed to protect children, vulnerable adults, and beneficiaries from any form of abuse or exploitation.
              </p>
              <button className="text-xs uppercase tracking-widest font-bold text-white hover:text-gold transition-colors">Read Policy →</button>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <h3 className="text-xl font-bold text-gold mb-3">Privacy Policy</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Data protection guidelines outlining how we securely collect, use, and store the personal information of our applicants and donors.
              </p>
              <button className="text-xs uppercase tracking-widest font-bold text-white hover:text-gold transition-colors">Read Policy →</button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
