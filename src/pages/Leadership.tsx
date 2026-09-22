import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const boardMembers = [
  { name: 'Prince Engr. Dr. John Theophilus Okosigha', role: 'Founder & Executive Director', bio: 'Engineer, academic, and visionary leader driving the mission of the Hub.' },
  { name: 'Board Member', role: 'Chairman, Board of Trustees', bio: 'Experienced governance professional providing strategic oversight and guidance.' },
  { name: 'Board Member', role: 'Director of Programs', bio: 'Oversees the design and delivery of all empowerment programs.' },
  { name: 'Board Member', role: 'Director of Finance', bio: 'Ensures financial integrity, transparency, and responsible resource management.' },
  { name: 'Board Member', role: 'Director of Partnerships', bio: 'Cultivates relationships with donors, corporations, and development organizations.' },
  { name: 'Board Member', role: 'Legal Adviser', bio: 'Provides legal guidance on governance, contracts, and compliance matters.' },
];

export const Leadership = () => {
  return (
    <div className="w-full pt-20">
      {/* Hero */}
      <section className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-gold" />
            </div>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-6xl font-bold mb-6">
            Leadership Team
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Meet the dedicated individuals who guide our mission and ensure that every decision serves the communities we work with.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-offwhite px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-gold/30 transition-all text-center">
                <div className="w-20 h-20 bg-navy/5 rounded-full flex items-center justify-center text-navy mx-auto mb-6">
                  <Users className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-1">{member.name}</h3>
                <p className="text-gold text-sm font-semibold mb-4">{member.role}</p>
                <p className="text-dark/60 text-sm leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
