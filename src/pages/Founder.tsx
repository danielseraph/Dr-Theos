import { motion } from 'framer-motion';
import { Award, GraduationCap, Briefcase, Heart, Lightbulb, Users, Handshake, MessageSquare } from 'lucide-react';

export const Founder = () => {
  return (
    <div className="w-full pt-20">
      {/* Hero Section */}
      <section className="bg-navy text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight"
            >
              Prince Engr. Dr. John Theophilus Okosigha
            </motion.h1>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block bg-gold/20 border border-gold/30 px-6 py-2 rounded-full mb-6"
            >
              <span className="text-gold font-semibold uppercase tracking-wider">
                Founder, President/CEO & Chairman
              </span>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/80 leading-relaxed"
            >
              A visionary leader dedicated to transforming lives and strengthening communities through empowerment, education, and innovation.
            </motion.p>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="w-64 h-64 md:w-80 md:h-80 shrink-0"
          >
            <div className="w-full h-full rounded-full border-4 border-white/10 overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 bg-gold/20 mix-blend-overlay"></div>
              {/* Replace with actual founder image later */}
              <img src="/Dr Theo.jpeg" alt="Prince Engr. Dr. John Theophilus Okosigha" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Biography & Background */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6 flex items-center gap-3">
                <Award className="w-8 h-8 text-gold" /> Professional Biography
              </h2>
              <p className="text-lg text-dark/70 leading-relaxed">
                Prince Engr. Dr. John Theophilus Okosigha is a distinguished engineer, philanthropist, and visionary leader with a proven track record of driving impactful change. Through his multifaceted career, he has successfully blended technical expertise with a profound dedication to social upliftment, establishing himself as a pillar of community development and transformative leadership.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-offwhite p-8 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-gold" /> Educational Background
                </h3>
                <ul className="space-y-4 text-dark/70">
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0"></div>
                    <span>Ph.D. in Engineering Management and Sustainable Development</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0"></div>
                    <span>Master's Degree in Advanced Engineering</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0"></div>
                    <span>Bachelor of Engineering with Honors</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0"></div>
                    <span>Numerous executive leadership and philanthropic certifications</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-offwhite p-8 rounded-3xl border border-gray-100">
                <h3 className="text-xl font-bold text-navy mb-4 flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-navy" /> Professional Experience
                </h3>
                <ul className="space-y-4 text-dark/70">
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0"></div>
                    <span>Decades of executive leadership in engineering and infrastructure</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0"></div>
                    <span>Pioneered large-scale community development projects</span>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-2 h-2 bg-gold rounded-full mt-2 shrink-0"></div>
                    <span>Board member and advisor to numerous international organizations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="bg-navy text-white p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gold/20 rounded-full blur-xl"></div>
              <Heart className="w-10 h-10 text-gold mb-6" />
              <h3 className="text-xl font-bold mb-4">Why I Founded the Hub</h3>
              <p className="text-white/80 leading-relaxed text-sm">
                "I witnessed firsthand the immense potential trapped by systemic barriers. I founded Dr. Theo's Empowerment Hub because I believe that when you give people the right tools, resources, and mentorship, they don't just change their own lives—they transform their entire communities."
              </p>
            </div>
            
            <div className="bg-gold text-white p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
              <Lightbulb className="w-10 h-10 text-white mb-6" />
              <h3 className="text-xl font-bold mb-4">My Vision</h3>
              <p className="text-white/90 leading-relaxed text-sm">
                "To see a world where circumstances of birth do not dictate the trajectory of one's future. A world built on equitable access to opportunity, education, and sustainable growth."
              </p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Philosophy & Messages */}
      <section className="py-24 bg-offwhite px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <Users className="w-12 h-12 text-navy mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Community-Development Philosophy</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-dark/80 italic leading-relaxed">
              "True development is not about charity; it is about capacity building. It requires a holistic approach that empowers the mind, equips the hands, and uplifts the spirit of the community."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-gold/30 transition-colors">
              <MessageSquare className="w-8 h-8 text-gold mb-6" />
              <h3 className="text-xl font-bold text-navy mb-4">A Message to Beneficiaries</h3>
              <p className="text-dark/70 leading-relaxed text-sm">
                "Your dreams are valid, and your potential is limitless. The Hub is here not to hand you success, but to hand you the tools to forge it yourself. Embrace the opportunities, work hard, and remember that your success is the seed for your community's prosperity."
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-gold/30 transition-colors">
              <Handshake className="w-8 h-8 text-gold mb-6" />
              <h3 className="text-xl font-bold text-navy mb-4">A Message to Donors & Partners</h3>
              <p className="text-dark/70 leading-relaxed text-sm">
                "Your support is the catalyst for generational change. By partnering with us, you are not just funding programs—you are investing in human capital, fostering innovation, and building a sustainable future. Together, our impact is immeasurable."
              </p>
            </div>

            <div className="bg-navy p-8 rounded-3xl shadow-lg border border-navy text-white">
              <Heart className="w-8 h-8 text-gold mb-6" />
              <h3 className="text-xl font-bold mb-4">Founder's Final Word</h3>
              <p className="text-white/80 leading-relaxed text-sm mb-6">
                "Empowerment is a collective journey. I invite you all—dreamers, builders, supporters, and leaders—to join hands with us. Let us work together, grow together, and win together."
              </p>
              <div className="pt-6 border-t border-white/20">
                <img src="/logo.jpg" alt="Signature" className="h-8 opacity-50 grayscale contrast-200" />
                <p className="text-xs text-white/50 mt-2 font-medium tracking-wider uppercase">Prince Engr. Dr. J.T. Okosigha</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
