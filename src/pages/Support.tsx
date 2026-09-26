import { motion } from 'framer-motion';
import { Heart, Users, BookOpen, Briefcase, Activity, GraduationCap, Gift } from 'lucide-react';

const memorialItems = [
  { category: "Anniversary Direct Support", details: "13 people received ₦10,000 each and 1 person received ₦15,000.", amount: "₦145,000", icon: <Users className="w-6 h-6" /> }
];

const birthdayItems = [
  { category: "Fashion Designing (Ongoing)", details: "Sponsored 3 ladies and 3 men in fashion designing (factory training).", amount: "₦660,000", icon: <Heart className="w-6 h-6" /> },
  { category: "Nail Tech Training (Ongoing)", details: "Sponsored 5 ladies in nail tech cosmetics and beauty training.", amount: "₦335,000", icon: <Heart className="w-6 h-6" /> },
  { category: "Transport Support", details: "Supported the beneficiaries for the nail tech & tailoring with transport fares.", amount: "₦135,000", icon: <Users className="w-6 h-6" /> },
  { category: "Tailoring Framing", details: "Sponsored 1 individual in tailoring framing.", amount: "₦120,000", icon: <Briefcase className="w-6 h-6" /> },
  { category: "Student Support", details: "Supported 3 students with ₦50,000 each, and 1 additional student with ₦30,000.", amount: "₦180,000", icon: <GraduationCap className="w-6 h-6" /> },
];

const otherItems = [
  { category: "Business Support", details: "Grants given to members: 3 people received ₦100,000 each and 4 people received ₦50,000 each.", amount: "₦500,000", icon: <Briefcase className="w-6 h-6" /> },
  { category: "Medical Support", details: "Supported a sick woman with medical funds.", amount: "₦150,000", icon: <Activity className="w-6 h-6" /> },
  { category: "General Support", details: "Supported 3 people with targeted financial assistance.", amount: "₦440,000", icon: <Users className="w-6 h-6" /> },
  { category: "Child Education", details: "Supported a child with a 2-year school fees payment.", amount: "₦108,000", icon: <BookOpen className="w-6 h-6" /> },
  { category: "Data Allowance", details: "Supported 4 members with ₦5,000 each for internet data.", amount: "₦20,000", icon: <Users className="w-6 h-6" /> },
];

export const Support = () => {
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
            <span className="text-gold font-semibold uppercase tracking-widest text-sm">Community Impact</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight"
          >
            Recent Support Initiatives
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            A massive empowerment drive to uplift members of the community across education, business, and vocational training, held in honor of two deeply personal milestones.
          </motion.p>
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-16 bg-gold/10 px-6 border-b border-gold/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-4">Total Impact Summary</h2>
              <p className="text-lg text-dark/80 mb-6 leading-relaxed">
                These recent initiatives successfully reached <strong>56 individuals</strong>, providing targeted financial, educational, and vocational support where it was needed most. 
              </p>
              <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gold/30 inline-flex">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-navy font-bold text-xl">
                  56
                </div>
                <div>
                  <div className="font-bold text-navy text-lg">Total Beneficiaries</div>
                  <div className="text-sm text-dark/60">Empowered across all initiatives</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-gold" /> Ongoing Training (11 People)
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-gold shrink-0"></div>
                  <p className="text-dark/80"><strong>6 Individuals</strong> currently in Fashion Designing (Tailoring) training.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-gold shrink-0"></div>
                  <p className="text-dark/80"><strong>5 Individuals</strong> currently in Cosmetics and Beauty (Nail Tech) training.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Breakdown List - Memorial Support */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 border-b border-gray-100 pb-8 flex items-center gap-4">
            <div className="w-14 h-14 bg-navy/5 rounded-2xl flex items-center justify-center">
              <Heart className="w-7 h-7 text-navy" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy">One-Year Memorial Support Initiative</h2>
              <p className="text-lg text-dark/70 mt-1">In loving memory of Queen Isekpar Theophilus Okosigha</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memorialItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-offwhite p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-gold/40 hover:shadow-md transition-all flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-navy mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{item.category}</h3>
                <p className="text-dark/70 text-sm mb-6 flex-grow">{item.details}</p>
                <div className="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-xs font-bold text-dark/40 uppercase tracking-wider">Amount Allocated</span>
                  <span className="text-lg font-black text-gold">{item.amount}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Breakdown List - Birthday Support */}
      <section className="py-20 bg-offwhite px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 border-b border-gray-200 pb-8 flex items-center gap-4">
            <div className="w-14 h-14 bg-gold/10 rounded-2xl flex items-center justify-center">
              <Gift className="w-7 h-7 text-gold" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy">Queen Merjerie Sorongon-Okosigha Birthday Support</h2>
              <p className="text-lg text-dark/70 mt-1">Celebrating life through educational and vocational empowerment.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {birthdayItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-gold/40 hover:shadow-md transition-all flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-navy/5 rounded-xl flex items-center justify-center text-navy mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{item.category}</h3>
                <p className="text-dark/70 text-sm mb-6 flex-grow">{item.details}</p>
                <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between items-center">
                  <span className="text-xs font-bold text-dark/40 uppercase tracking-wider">Amount Allocated</span>
                  <span className="text-lg font-black text-gold">{item.amount}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Breakdown List - Community Welfare & Other Support */}
      <section className="py-20 bg-white px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 border-b border-gray-100 pb-8 flex items-center gap-4">
            <div className="w-14 h-14 bg-navy/5 rounded-2xl flex items-center justify-center">
              <Users className="w-7 h-7 text-navy" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-navy">Community Welfare & Additional Support</h2>
              <p className="text-lg text-dark/70 mt-1">Broad-based initiatives to support businesses, families, and everyday well-being.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherItems.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-offwhite p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-gold/40 hover:shadow-md transition-all flex flex-col h-full"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-navy mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">{item.category}</h3>
                <p className="text-dark/70 text-sm mb-6 flex-grow">{item.details}</p>
                <div className="mt-auto pt-4 border-t border-gray-200 flex justify-between items-center">
                  <span className="text-xs font-bold text-dark/40 uppercase tracking-wider">Amount Allocated</span>
                  <span className="text-lg font-black text-gold">{item.amount}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
