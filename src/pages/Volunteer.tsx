import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '../components/common/Button';
import {
  Heart, Users, Clock, MapPin, CheckCircle2, ArrowRight,
  BookOpen, Megaphone, Wrench, Camera, Laptop, HandHeart, UserCheck, ClipboardList
} from 'lucide-react';

const roles = [
  {
    icon: <UserCheck className="w-7 h-7" />,
    title: 'Mentors',
    desc: 'Guide and inspire beneficiaries through 1-on-1 mentorship sessions, helping them navigate education, career, or business challenges.',
    commitment: '2–4 hrs/week',
    mode: 'In-person or Remote',
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    title: 'Teachers & Trainers',
    desc: 'Deliver vocational skills, academic support, or professional development workshops to our program participants.',
    commitment: '3–6 hrs/week',
    mode: 'In-person',
  },
  {
    icon: <ClipboardList className="w-7 h-7" />,
    title: 'Administrative Volunteers',
    desc: 'Support the Hub\'s day-to-day operations through data entry, record keeping, scheduling, and correspondence.',
    commitment: '5–10 hrs/week',
    mode: 'In-person or Remote',
  },
  {
    icon: <HandHeart className="w-7 h-7" />,
    title: 'Community Volunteers',
    desc: 'Participate in outreach drives, community events, and grassroots awareness campaigns across our operational areas.',
    commitment: 'Flexible',
    mode: 'In-person',
  },
  {
    icon: <Megaphone className="w-7 h-7" />,
    title: 'Fundraising Volunteers',
    desc: 'Help plan and execute fundraising events, donor engagement campaigns, and grant research initiatives.',
    commitment: '3–5 hrs/week',
    mode: 'Remote or In-person',
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'Event Volunteers',
    desc: 'Support the coordination of our graduation ceremonies, empowerment summits, and community programs.',
    commitment: 'Event-based',
    mode: 'In-person',
  },
  {
    icon: <Laptop className="w-7 h-7" />,
    title: 'Professional & Technical Volunteers',
    desc: 'Donate your expertise in law, finance, IT, healthcare, engineering, or other fields to directly support our beneficiaries and operations.',
    commitment: 'Flexible',
    mode: 'Remote or In-person',
  },
  {
    icon: <Camera className="w-7 h-7" />,
    title: 'Media & Communications Volunteers',
    desc: 'Create content, manage social media, take photographs, produce videos, or write stories that share the impact of our work.',
    commitment: '2–4 hrs/week',
    mode: 'Remote or In-person',
  },
];

const whyVolunteer = [
  { title: 'Create Real Impact', desc: 'Your time and skills directly change lives in communities that need it most.' },
  { title: 'Grow Professionally', desc: 'Gain practical leadership, coaching, and community-development experience.' },
  { title: 'Join a Passionate Team', desc: 'Work alongside like-minded individuals united by a shared vision of empowerment.' },
  { title: 'Receive Recognition', desc: 'All volunteers receive official certificates and references upon request.' },
  { title: 'Flexible Commitment', desc: 'We work around your schedule — weekends, evenings, or remote roles available.' },
  { title: 'Build Your Network', desc: 'Connect with professionals, community leaders, and partner organizations.' },
];

export const Volunteer = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', location: '', role: '', experience: '', availability: '', motivation: ''
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
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-gold/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gold/20 border border-gold/30 px-5 py-2 rounded-full mb-6">
            <Heart className="w-4 h-4 text-gold" />
            <span className="text-gold font-semibold uppercase tracking-widest text-sm">Give Your Time</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6">
            Become a Volunteer
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            You don't have to give money to make a difference. Your time, skills, and passion can transform lives. Join our growing family of dedicated volunteers.
          </motion.p>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-24 bg-offwhite px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Why Volunteer With Us?</h2>
            <p className="text-dark/60 text-lg max-w-2xl mx-auto">Volunteering at Dr. Theo's Empowerment Hub is more than just giving back — it's a personal and professional journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyVolunteer.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gold/30 transition-all">
                <CheckCircle2 className="w-6 h-6 text-gold mb-4" />
                <h3 className="font-bold text-navy text-lg mb-2">{item.title}</h3>
                <p className="text-dark/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Roles */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-navy mb-4">Available Volunteer Roles</h2>
            <p className="text-dark/60 text-lg max-w-2xl mx-auto">No matter your background or schedule, there's a role that fits you.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: (i % 2) * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl border border-gray-100 bg-offwhite hover:border-gold/40 hover:shadow-md transition-all group">
                <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center text-gold shrink-0 group-hover:bg-gold/20 transition-colors">
                  {role.icon}
                </div>
                <div>
                  <h3 className="font-bold text-navy text-lg mb-1">{role.title}</h3>
                  <p className="text-dark/60 text-sm leading-relaxed mb-3">{role.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-navy/5 text-navy px-3 py-1 rounded-full">
                      <Clock className="w-3 h-3" /> {role.commitment}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-gold/10 text-gold px-3 py-1 rounded-full">
                      <MapPin className="w-3 h-3" /> {role.mode}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Info */}
      <section className="py-24 bg-navy text-white px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div>
            <Wrench className="w-10 h-10 text-gold mb-4" />
            <h3 className="text-2xl font-bold mb-4">Eligibility</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Minimum age: 18 years (16+ for supervised roles)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Genuine passion for community empowerment</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Relevant skills or willingness to learn</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Ability to meet agreed time commitments</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Must agree to our Code of Conduct & Safeguarding Policy</li>
            </ul>
          </div>
          <div>
            <Clock className="w-10 h-10 text-gold mb-4" />
            <h3 className="text-2xl font-bold mb-4">Time Commitment</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Minimum 3-month initial commitment</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Flexible hours — weekday, evening & weekend slots</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Remote roles available for diaspora volunteers</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Event-based one-time roles also welcome</li>
            </ul>
          </div>
          <div>
            <MapPin className="w-10 h-10 text-gold mb-4" />
            <h3 className="text-2xl font-bold mb-4">Locations</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Cross River State, Nigeria (Headquarters)</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Surrounding communities and outreach areas</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" /> United States — remote coordination roles</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Fully remote roles open to global applicants</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-offwhite px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">Apply to Volunteer</h2>
            <p className="text-dark/60 text-lg">Complete the form below and our team will be in touch within 5 working days.</p>
          </div>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-xl">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-gold" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-3">Thank You for Volunteering!</h3>
              <p className="text-dark/70 mb-8 leading-relaxed">We have received your application. Our volunteer coordinator will review it and reach out to you within 5 working days.</p>
              <Button variant="secondary" size="lg" onClick={() => setSubmitted(false)}>Submit Another Application</Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Full Name *</label>
                  <input name="name" required value={form.name} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold outline-none text-sm"
                    placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Email Address *</label>
                  <input name="email" type="email" required value={form.email} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold outline-none text-sm"
                    placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Phone Number</label>
                  <input name="phone" value={form.phone} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold outline-none text-sm"
                    placeholder="+234..." />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy mb-2">Location / City *</label>
                  <input name="location" required value={form.location} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold outline-none text-sm"
                    placeholder="City, Country" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-2">Preferred Role *</label>
                <select name="role" required value={form.role} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold outline-none text-sm bg-white">
                  <option value="">Select a role</option>
                  {roles.map(r => <option key={r.title} value={r.title}>{r.title}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-2">Availability *</label>
                <select name="availability" required value={form.availability} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold outline-none text-sm bg-white">
                  <option value="">Select your availability</option>
                  <option>Weekdays (daytime)</option>
                  <option>Weekday evenings</option>
                  <option>Weekends</option>
                  <option>Fully remote / flexible</option>
                  <option>Event-based only</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-2">Relevant Skills & Experience</label>
                <textarea name="experience" value={form.experience} onChange={handleChange} rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold outline-none text-sm resize-none"
                  placeholder="Describe your relevant background, qualifications, or experience..." />
              </div>

              <div>
                <label className="block text-sm font-bold text-navy mb-2">Why Do You Want to Volunteer With Us? *</label>
                <textarea name="motivation" required value={form.motivation} onChange={handleChange} rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold outline-none text-sm resize-none"
                  placeholder="Tell us what motivates you to join our team..." />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full md:w-auto px-10">
                Submit Application <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
};
