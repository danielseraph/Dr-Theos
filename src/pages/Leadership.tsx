import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const boardMembers = [
  { name: 'Prince Engr. Dr. John Theophilus Okosigha', role: 'Founder, President/CEO, & Chairman', bio: 'Engineer, academic, technology professional, and visionary leader driving the mission of the Hub.', image: '/theo4.jpeg' },
  { name: 'Engr. Dr. Balalaemi Gabriel Seiyaboh', role: 'Vice-Chairman & Secretary', bio: 'Provides strategic support to the Chairman and ensures effective governance and administrative coordination.', image: 'https://ui-avatars.com/api/?name=Balalaemi+Gabriel+Seiyaboh&background=0f2027&color=d4af37&size=200' },
  { name: 'Comr. Prince Nayam James', role: 'Director of Finance & Programs', bio: 'As an accomplished Nigerian leader, youth advocate, and entrepreneur from Bayelsa State, he brings a strong track record in public administration and student governance. His leadership includes serving as President of the Opume Students, National Provost of the Ogbia Brotherhood Youth Council, and Special Adviser on Student Affairs to the Ogbia Local Government Council Chairman. As the Founder and CEO of Prince Nayam Ventures, he remains dedicated to community development and empowerment.', image: '/prince.jpeg' },
  { name: 'Mr. Austin A. Elelegi', role: 'Director of Operations', bio: 'I am a professional with experience in Security and Safety Management, Operations, Marketing, and various areas of Civil Engineering. My professional journey has given me the opportunity to develop strong skills in leadership, coordination, risk management, teamwork, communication, problem-solving, and effective execution', image: '/austin.jpeg' },
  { name: 'Sai\'d Umar', role: 'Legal Adviser', bio: 'Provides expert legal counsel on governance, partnerships, contracts, and regulatory compliance.', image: 'https://ui-avatars.com/api/?name=Said+Umar&background=0f2027&color=d4af37&size=200' },
  { name: 'Maratein Collins Mondebo', role: 'PRO/Publicity', bio: 'Business Administration & Management graduate | Professional Social Media Manager | Content Creator & Video Editor. Passionate about music, meaningful connections, and helping brands grow through creative storytelling.', image: '/maratein.jpg' },
  { name: 'Daniel George Agidi', role: 'Web Developer & Digital Systems Administrator', bio: 'Maintains the organization\'s digital infrastructure, website, and technical systems for seamless online operations.', image: '/daniel.png' },
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
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gold/20 shadow-md">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
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
