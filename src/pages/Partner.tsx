import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '../components/common/Button';
import {
  Handshake, Building2, Globe, GraduationCap, Landmark,
  HeartHandshake, Layers, CheckCircle2, ArrowRight, Mail, Phone
} from 'lucide-react';

const partnerTypes = [
  { icon: <Building2 className="w-6 h-6" />, label: 'Corporations & Large Businesses' },
  { icon: <Layers className="w-6 h-6" />, label: 'Small & Medium Enterprises' },
  { icon: <HeartHandshake className="w-6 h-6" />, label: 'NGOs & Non-Profits' },
  { icon: <Landmark className="w-6 h-6" />, label: 'Foundations & Philanthropies' },
  { icon: <GraduationCap className="w-6 h-6" />, label: 'Universities & Research Institutions' },
  { icon: <Globe className="w-6 h-6" />, label: 'International Development Organizations' },
  { icon: <Building2 className="w-6 h-6" />, label: 'Government Agencies' },
  { icon: <Handshake className="w-6 h-6" />, label: 'Community & Faith Organizations' },
];

const partnershipOptions = [
  {
    title: 'Corporate Sponsorship',
    badge: 'High Impact',
    desc: 'Align your brand with a credible, impactful cause. Corporate sponsors receive recognition across our platforms, events, and publications, while directly funding programs that change lives.',
    examples: ['Program naming rights', 'Brand placement at events', 'CSR reporting benefits', 'Employee engagement opportunities'],
  },
  {
    title: 'Program Partnership',
    badge: 'Strategic',
    desc: 'Co-design and co-fund a specific program — from scholarships to vocational training. Program partners have full visibility into outcomes and dedicated reporting.',
    examples: ['Joint program design', 'Outcome-based reporting', 'Beneficiary access', 'Joint branding'],
  },
  {
    title: 'Skills & Training Partnership',
    badge: 'Technical',
    desc: 'Training institutions and professional bodies can provide curriculum, certified training, and qualified instructors to elevate the quality of our vocational and skills programs.',
    examples: ['Curriculum development', 'Certified instructors', 'Training equipment', 'Industry placement'],
  },
  {
    title: 'Scholarship Partnership',
    badge: 'Education',
    desc: 'Fund named scholarships for outstanding but underprivileged students. Scholarship partners can participate in beneficiary selection and receive regular academic progress updates.',
    examples: ['Named scholarships', 'Beneficiary selection input', 'Academic progress reports', 'Graduation invitations'],
  },
  {
    title: 'Community Development Partnership',
    badge: 'Infrastructure',
    desc: 'Partner with us to fund and deliver community infrastructure — clean water, local markets, agricultural initiatives, and youth centres — in underserved areas.',
    examples: ['Borehole & water projects', 'Community centres', 'Agricultural support', 'Local market development'],
  },
  {
    title: 'Equipment Donation',
    badge: 'In-Kind',
    desc: 'Donate computers, sewing machines, tools, furniture, or other equipment that directly supports our training programmes and community projects.',
    examples: ['Laptops & computers', 'Vocational tools & machines', 'Office equipment', 'Educational materials'],
  },
  {
    title: 'Professional Services',
    badge: 'Pro-Bono',
    desc: 'Law firms, accountants, IT companies, architects, healthcare providers, and other professionals can donate their expertise in service of our mission.',
    examples: ['Legal & compliance support', 'Financial auditing', 'Technology infrastructure', 'Healthcare outreach'],
  },
];

const badgeColor: Record<string, string> = {
  'High Impact': 'bg-gold/20 text-gold',
  'Strategic': 'bg-navy/10 text-navy',
  'Technical': 'bg-gold/10 text-gold',
  'Education': 'bg-navy/10 text-navy',
  'Infrastructure': 'bg-gold/20 text-gold',
  'In-Kind': 'bg-navy/10 text-navy',
  'Pro-Bono': 'bg-gold/10 text-gold',
};

export const Partner = () => {
  const [form, setForm] = useState({
    orgName: '', contactName: '', email: '', phone: '', orgType: '', partnershipType: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full pt-20">

      {/* Hero */}
      <section className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-gold/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 px-5 py-2 rounded-full mb-6">
            <Handshake className="w-4 h-4 text-gold" />
            <span className="text-gold font-semibold uppercase tracking-widest text-sm">Collaborate With Us</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6">
            Partner With Us
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Together, we can achieve what no single organization can accomplish alone. We welcome partnerships with businesses, foundations, governments, universities, and international organizations committed to transformative change.
          </motion.p>
        </div>
      </section>

      {/* Who Can Partner */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Who Can Partner With Us?</h2>
            <p className="text-dark/60 text-lg max-w-2xl mx-auto">We welcome partnerships from a wide range of organizations — what matters most is a shared commitment to empowerment and positive impact.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {partnerTypes.map((pt, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 bg-offwhite hover:border-gold/40 hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-3 group-hover:bg-gold/20 transition-colors">
                  {pt.icon}
                </div>
                <span className="font-semibold text-navy text-sm leading-snug">{pt.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="py-24 bg-offwhite px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Partnership Options</h2>
            <p className="text-dark/60 text-lg max-w-2xl mx-auto">Choose the model that best aligns with your organization's values, resources, and goals. Custom packages are always welcome.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipOptions.map((opt, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: (i % 2) * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-gold/30 transition-all">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-navy">{opt.title}</h3>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${badgeColor[opt.badge]}`}>{opt.badge}</span>
                </div>
                <p className="text-dark/70 text-sm leading-relaxed mb-5">{opt.desc}</p>
                <ul className="space-y-2">
                  {opt.examples.map((ex, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-dark/60">
                      <CheckCircle2 className="w-4 h-4 text-gold shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote / CTA Banner */}
      <section className="py-20 bg-navy text-white px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <Handshake className="w-16 h-16 text-gold mx-auto mb-6 opacity-80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">"No partnership is too small. Every collaboration creates impact."</h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Whether you are a multinational corporation or a local community organization, we are ready to design a partnership that works for you and delivers lasting results for those we serve.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/60">
            <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold" /> partnerships@drtheoshub.org</span>
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> +234 000 000 0000</span>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-24 bg-offwhite px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">Send a Partnership Enquiry</h2>
            <p className="text-dark/60 text-lg">Tell us about your organization and how you'd like to collaborate. We will be in touch within 5 working days.</p>
          </div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-xl">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-3">Enquiry Received!</h3>
              <p className="text-dark/70 mb-8 leading-relaxed">Thank you for your interest in partnering with us. Our partnerships team will review your message and get back to you shortly.</p>
              <Button variant="secondary" size="lg" onClick={() => setSubmitted(false)}>Send Another Enquiry</Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Organization Name *</label>
                  <input name="orgName" required value={form.orgName} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold outline-none text-sm"
                    placeholder="Your organization" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Contact Person *</label>
                  <input name="contactName" required value={form.contactName} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold outline-none text-sm"
                    placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Email Address *</label>
                  <input name="email" type="email" required value={form.email} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold outline-none text-sm"
                    placeholder="contact@organization.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold outline-none text-sm"
                    placeholder="+1 or +234..." />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Organization Type *</label>
                  <select name="orgType" required value={form.orgType} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold outline-none text-sm bg-white">
                    <option value="">Select type</option>
                    {partnerTypes.map(p => <option key={p.label} value={p.label}>{p.label}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Partnership Type *</label>
                  <select name="partnershipType" required value={form.partnershipType} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold outline-none text-sm bg-white">
                    <option value="">Select partnership type</option>
                    {partnershipOptions.map(p => <option key={p.title} value={p.title}>{p.title}</option>)}
                    <option value="Custom">Custom / Not sure yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-2">Message / Proposal *</label>
                <textarea name="message" required value={form.message} onChange={handleChange} rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold outline-none text-sm resize-none"
                  placeholder="Tell us about your organization, what you hope to achieve through this partnership, and any specific ideas you have..." />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto px-10">
                Send Enquiry <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};
