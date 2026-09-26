import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const boardMembers = [
  { name: 'Prince Engr. Dr. John Theophilus Okosigha', role: 'Founder, President/CEO, & Chairman', bio: `Prince Engr. Dr. John Theophilus Okosigha, widely known as “Dr. Theo,” is a distinguished engineer, academic, technology professional, entrepreneur, and humanitarian with extensive international and professional experience.

He holds a BSc in Naval Architecture and Marine Engineering, a Master of Engineering Technology, and a PhD in Technology Management. His professional experience spans engineering, customer service, technical support, quality assurance, supervision, mentoring, and executive virtual assistance, including supporting clients and customers across the United States, Canada, Puerto Rico, and Mexico.

Born and raised in Opume Community, Ogbia L.G.A., Bayelsa State, Nigeria, Dr. Theo is deeply committed to empowering individuals and strengthening communities. His passion for helping others is also deeply personal, inspired by the love, sacrifices, values, and unwavering support of his late mother, Queen Isekpar Theophilus Okosigha, as well as his beloved wife, Queen Merjerie Sorongon-Okosigha, whose love, encouragement, and support continue to inspire him.

His wife, Queen Merjerie, serves as the Co-Founder and Executive Director of Dr. Theo’s Empowerment Hub, working alongside him in advancing the organization’s vision of creating opportunities and making a meaningful difference in the lives of others. Dr. Theo deeply values her as both his life partner and his partner in service, and together they are committed to building a culture of love, support, empowerment, accountability, and shared growth.

This shared vision led to the establishment of Dr. Theo’s Empowerment Hub, an initiative focused on education, skills development, mentorship, entrepreneurship, and economic empowerment for underprivileged individuals, children, women, youth, and entrepreneurs.

For Dr. Theo, empowerment is more than providing assistance—it is about building people, creating opportunities, developing capacity, and helping individuals become capable of helping themselves and others. Through the Empowerment Hub, he and his wife seek to extend the love, support, and values that have shaped their own lives to individuals and communities in need.`, image: '/theo4.jpeg' },
  { name: 'Queen Merjerie Sorongon-Okosigha', role: 'Co-founder & Deputy Executive Director', bio: 'With a background in healthcare and dental education, Merjerie works as an orthodontic treatment coordinator, where she has built her career around guiding, supporting, and connecting with people. Her passion for helping others extends beyond healthcare, having led donation drives and community efforts in the past. She brings that same compassion and commitment to creating meaningful opportunities and helping individuals access the support and resources they need to move forward.', image: '/theo3.jpeg' },
  { name: 'Engr. Dr. Balalaemi Gabriel Seiyaboh', role: 'Vice-Chairman & Secretary', bio: 'Dr. Seiyaboh Gabriel Balalaemi believes that lasting community transformation begins with education, innovation, and opportunity. Combining an extensive academic background in engineering and technology management with years of practical experience in digital operations, Gabriel leverages modern technology to create real-world social impact.​Driven by a deep commitment to giving back, his philanthropic efforts focus on youth empowerment, digital literacy, and educational equity. Gabriel actively supports initiatives that provide young learners and aspiring professionals with the mentorship and tools necessary to achieve academic excellence and build resilient futures. For Gabriel, philanthropy is about creating sustainable ladders of opportunity—ensuring the next generation has the foundation to lead, innovate, and uplift their own communities.', image: '/gabriel.jpeg' },
  { name: 'Comr. Prince Nayam James', role: 'Director of Finance & Programs', bio: 'As an accomplished Nigerian leader, youth advocate, and entrepreneur from Bayelsa State, he brings a strong track record in public administration and student governance. His leadership includes serving as President of the Opume Students, National Provost of the Ogbia Brotherhood Youth Council, and Special Adviser on Student Affairs to the Ogbia Local Government Council Chairman. As the Founder and CEO of Prince Nayam Ventures, he remains dedicated to community development and empowerment.', image: '/prince.jpeg' },
  { name: 'Mr. Austin A. Elelegi', role: 'Director of Operations', bio: 'I am a professional with experience in Security and Safety Management, Operations, Marketing, and various areas of Civil Engineering. My professional journey has given me the opportunity to develop strong skills in leadership, coordination, risk management, teamwork, communication, problem-solving, and effective execution', image: '/austin.jpeg' },
  { name: 'Sai\'d Umar', role: 'Legal Adviser', bio: 'SA’ID JOBLAZE-UMAR is a Law graduate of the prestigious Faculty of Law, Niger Delta University.Beyond his legal studies, Sa’id has developed experience and interests spanning advocacy, grassroots development, public affairs, entrepreneurship, and youth engagement. He is particularly committed to initiatives that promote access to justice, empower young people, and contribute meaningfully to community development.As Legal Adviser to the Foundation, he provides legal guidance and supports the Foundation in ensuring that its programmes, activities, partnerships, and operations are aligned with applicable laws and principles of good governance.', image: '/joblaze.jpeg' },
  { name: 'Maratein Collins Mondebo', role: 'PRO/Publicity', bio: 'Business Administration & Management graduate | Professional Social Media Manager | Content Creator & Video Editor. Passionate about music, meaningful connections, and helping brands grow through creative storytelling.', image: '/maratein.jpg' },
  { name: 'Daniel George Agidi', role: 'Web Developer & Digital Systems Administrator', bio: 'Maintains the organization\'s digital infrastructure, website, and technical systems for seamless online operations.', image: '/daniel.png' },
];

const MemberCard = ({ member, i }: { member: any, i: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
      className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:border-gold/30 transition-all text-center flex flex-col">
      <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gold/20 shadow-md shrink-0">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-bold text-navy mb-1">{member.name}</h3>
      <p className="text-gold text-sm font-semibold mb-4">{member.role}</p>
      
      <div className="text-left flex flex-col">
        <p className={`text-dark/80 text-sm leading-relaxed whitespace-pre-wrap ${!isExpanded && member.bio.length > 180 ? 'line-clamp-5' : ''}`}>
          {member.bio}
        </p>
        {member.bio.length > 180 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gold font-semibold text-sm mt-3 hover:text-navy transition-colors self-start"
          >
            {isExpanded ? 'See Less' : 'See More...'}
          </button>
        )}
      </div>
    </motion.div>
  );
};

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {boardMembers.map((member, i) => (
              <MemberCard key={i} member={member} i={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
