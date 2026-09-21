import { motion } from 'framer-motion';
import { useState } from 'react';
import { Shield, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../components/common/Button';

export const ApplicationPortal = () => {
  const [selectedProgram, setSelectedProgram] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="w-full pt-20">
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Apply for Support
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Take the first step towards transforming your future. Complete the application below to apply for one of our empowerment programmes.
          </motion.p>
        </div>
      </section>

      {/* Transparency & Selection Criteria */}
      <section className="py-12 bg-offwhite px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-8 items-start">
            <div className="w-16 h-16 rounded-2xl bg-gold/10 text-gold flex items-center justify-center shrink-0">
              <Shield className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy mb-3">Our Selection Criteria & Transparency</h3>
              <p className="text-dark/70 leading-relaxed mb-4">
                Applications are evaluated strictly according to the published eligibility requirements of each specific program. We believe in fair, unbiased access to opportunity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-dark/70">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span>Merit and verifiable financial need are the primary drivers of our selection.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-dark/70">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span>Where a program uses random selection among qualified applicants (due to high demand), the process and methodology will be fully disclosed.</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-dark/70">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span>All applicants will receive notification of their application status, regardless of the outcome.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-4xl mx-auto">
          
          {formStatus === 'success' ? (
            <div className="bg-gold/10 border border-gold/20 p-12 rounded-3xl text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-navy mb-4">Application Submitted!</h3>
              <p className="text-lg text-dark/70 mb-8">
                Thank you for applying. Our team will review your application according to our selection criteria and contact you soon.
              </p>
              <Button 
                onClick={() => setFormStatus('idle')}
                variant="secondary"
                size="lg"
              >
                Submit Another Application
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl">
              <div className="mb-8 border-b border-gray-100 pb-8">
                <h3 className="text-2xl font-bold text-navy flex items-center gap-2 mb-2">
                  <FileText className="w-6 h-6 text-gold" /> Program Selection
                </h3>
                <p className="text-dark/60 text-sm mb-6">Select the specific program you are applying for.</p>
                
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Program Requested *</label>
                  <select 
                    required
                    value={selectedProgram}
                    onChange={(e) => setSelectedProgram(e.target.value)}
                    className="w-full p-4 rounded-xl border border-gray-200 bg-offwhite focus:bg-white focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                  >
                    <option value="" disabled>-- Please select a program --</option>
                    <option value="scholarship">Scholarships & Education Support</option>
                    <option value="vocational">Vocational Training</option>
                    <option value="business">Business Support & Funding</option>
                    <option value="entrepreneurship">Entrepreneurship Program</option>
                    <option value="community">Community Assistance</option>
                    <option value="other">Other / General Support</option>
                  </select>
                </div>
              </div>

              <div className="mb-8 border-b border-gray-100 pb-8">
                <h3 className="text-2xl font-bold text-navy mb-6">Personal Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Full Name *</label>
                    <input type="text" required className="w-full p-4 rounded-xl border border-gray-200 bg-offwhite focus:bg-white focus:border-gold outline-none" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Age *</label>
                    <input type="number" required min="10" max="100" className="w-full p-4 rounded-xl border border-gray-200 bg-offwhite focus:bg-white focus:border-gold outline-none" placeholder="e.g. 25" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Gender</label>
                    <select className="w-full p-4 rounded-xl border border-gray-200 bg-offwhite focus:bg-white focus:border-gold outline-none">
                      <option value="">-- Select --</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="prefer-not-to-say">Prefer not to say</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Location / Address *</label>
                    <input type="text" required className="w-full p-4 rounded-xl border border-gray-200 bg-offwhite focus:bg-white focus:border-gold outline-none" placeholder="City, Region" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Phone Number *</label>
                    <input type="tel" required className="w-full p-4 rounded-xl border border-gray-200 bg-offwhite focus:bg-white focus:border-gold outline-none" placeholder="+123 456 7890" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Email Address</label>
                    <input type="email" className="w-full p-4 rounded-xl border border-gray-200 bg-offwhite focus:bg-white focus:border-gold outline-none" placeholder="john@example.com" />
                  </div>
                </div>
              </div>

              <div className="mb-8 border-b border-gray-100 pb-8">
                <h3 className="text-2xl font-bold text-navy mb-6">Background & Experience</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Highest Level of Education</label>
                    <select className="w-full p-4 rounded-xl border border-gray-200 bg-offwhite focus:bg-white focus:border-gold outline-none">
                      <option value="">-- Select --</option>
                      <option value="none">No formal education</option>
                      <option value="primary">Primary School</option>
                      <option value="secondary">Secondary / High School</option>
                      <option value="diploma">Diploma / Vocational</option>
                      <option value="degree">Bachelor's Degree or higher</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">Current Occupation</label>
                    <input type="text" className="w-full p-4 rounded-xl border border-gray-200 bg-offwhite focus:bg-white focus:border-gold outline-none" placeholder="Student, Unemployed, Trader, etc." />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-bold text-navy mb-2">Relevant Experience or Skills</label>
                  <textarea rows={3} className="w-full p-4 rounded-xl border border-gray-200 bg-offwhite focus:bg-white focus:border-gold outline-none resize-none" placeholder="Briefly describe any skills or experience relevant to this application..."></textarea>
                </div>

                {(selectedProgram === 'business' || selectedProgram === 'entrepreneurship') && (
                  <div className="mb-6 p-6 bg-gold/5 border border-gold/20 rounded-2xl">
                    <label className="block text-sm font-bold text-navy mb-2">Business Information (For Entrepreneurs)</label>
                    <textarea rows={3} className="w-full p-4 rounded-xl border border-gold/30 bg-white focus:border-gold outline-none resize-none" placeholder="Describe your business idea or current business operations..."></textarea>
                  </div>
                )}
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-navy mb-6">Statement of Purpose</h3>
                
                <div className="mb-6">
                  <label className="block text-sm font-bold text-navy mb-2">Reason for Application *</label>
                  <p className="text-xs text-dark/50 mb-2">Explain why you need this support and how it will impact your life or community.</p>
                  <textarea required rows={5} className="w-full p-4 rounded-xl border border-gray-200 bg-offwhite focus:bg-white focus:border-gold outline-none resize-none" placeholder="I am applying because..."></textarea>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-bold text-navy mb-2">Supporting Documents (Optional)</label>
                  <p className="text-xs text-dark/50 mb-2">Upload any genuinely necessary documents (e.g. ID, transcripts, business plan). Max 5MB total.</p>
                  <input type="file" multiple className="w-full p-4 rounded-xl border border-dashed border-gray-300 bg-offwhite" />
                </div>
              </div>

              <div className="flex items-center gap-3 mb-8">
                <input type="checkbox" id="terms" required className="w-5 h-5 text-gold rounded border-gray-300 focus:ring-gold" />
                <label htmlFor="terms" className="text-sm text-dark/70">
                  I declare that all information provided is true and accurate. I understand the published selection criteria.
                </label>
              </div>

              <Button 
                type="submit" 
                variant="primary"
                size="lg"
                disabled={formStatus === 'submitting'}
                className="w-full md:w-auto px-10"
              >
                {formStatus === 'submitting' ? 'Submitting...' : 'Submit Application'} 
                {formStatus !== 'submitting' && <ArrowRight className="w-5 h-5 ml-2" />}
              </Button>
            </form>
          )}

        </div>
      </section>

    </div>
  );
};
