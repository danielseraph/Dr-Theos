import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Building, Shield, User } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const trustees = [
  {
    name: "Prince Engr. Dr. John Theophilus Okosigha",
    position: "Chairman",
    bio: "Visionary founder and chairman with decades of executive leadership and philanthropic experience.",
    background: "Ph.D. Engineering Management, Executive Leadership",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop"
  },
  {
    name: "Dr. Sarah Mensah",
    position: "Vice Chairman",
    bio: "Renowned academic and social worker dedicated to educational reform and women's empowerment.",
    background: "Ph.D. Sociology, 20+ years in NGO management",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop"
  },
  {
    name: "Mr. David Ocheni",
    position: "Secretary",
    bio: "Expert in corporate governance and international development law.",
    background: "LL.M. International Law, Corporate Governance Expert",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop"
  },
  {
    name: "Mrs. Elena Rodriguez",
    position: "Treasurer",
    bio: "Strategic financial planner ensuring transparency and fiscal responsibility across all Hub initiatives.",
    background: "CPA, MBA in Finance",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=500&auto=format&fit=crop"
  },
  {
    name: "Prof. Michael Chang",
    position: "Trustee",
    bio: "Global health and community development specialist driving our outreach strategies.",
    background: "Professor of Public Health, Research Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop"
  }
];

const management = [
  { role: "Founder, President & CEO", name: "Prince Engr. Dr. John Theophilus Okosigha" },
  { role: "Executive Director", name: "To be appointed" },
  { role: "Program Director", name: "To be appointed" },
  { role: "Director of Finance & Administration", name: "To be appointed" },
  { role: "Head of Communications", name: "To be appointed" },
];

export const Leadership = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="w-full pt-20">
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Leadership & Governance
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Meet the dedicated individuals guiding our mission and ensuring transparency, accountability, and strategic growth.
          </motion.p>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Shield className="w-12 h-12 text-gold mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Board of Trustees</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-dark/70 max-w-2xl mx-auto">
              Our Board of Trustees provides critical oversight, strategic direction, and ensures that all activities align with our core values and legal obligations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustees.map((trustee, i) => (
              <div key={i} className="bg-offwhite rounded-3xl overflow-hidden border border-gray-100 group hover:shadow-lg transition-all">
                <div className="aspect-square w-full relative overflow-hidden bg-gray-200">
                  <img 
                    src={trustee.image} 
                    alt={trustee.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-gold text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                    {trustee.position}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-navy mb-1">{trustee.name}</h3>
                  <p className="text-sm text-gold font-semibold mb-4">{trustee.background}</p>
                  <p className="text-dark/70 leading-relaxed text-sm">
                    {trustee.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Management */}
      <section className="py-24 bg-navy text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Users className="w-12 h-12 text-gold mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Executive Management</h2>
              <div className="w-20 h-1 bg-gold mb-8 rounded-full"></div>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Our Executive Management team handles the day-to-day operations, program implementation, and financial administration of Dr. Theo's Empowerment Hub. They are the driving force turning our vision into reality.
              </p>
              
              <div className="space-y-4">
                {management.map((exec, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-between backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <div>
                      <h4 className="font-bold text-gold">{exec.role}</h4>
                      <p className="text-white/70 text-sm">{exec.name}</p>
                    </div>
                    <User className="w-5 h-5 text-white/30" />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
              <div className="text-center relative z-10">
                <Building className="w-16 h-16 text-white/20 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white/50 mb-2">Executive Office</h3>
                <p className="text-white/40">Headquarters</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance & Organizational Chart */}
      <section className="py-24 bg-offwhite px-6" id="governance">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Governance Structure</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-dark/70 max-w-3xl mx-auto">
              We maintain a rigorous, transparent organizational structure to ensure compliance, foster efficient decision-making, and maximize our impact in the community.
            </p>
          </div>

          <div className="bg-white p-8 md:p-16 rounded-3xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
            {/* Visual representation of an org chart */}
            <div className="flex flex-col items-center">
              
              {/* Level 1 */}
              <div className="bg-navy text-white px-8 py-4 rounded-xl font-bold shadow-lg w-64 text-center z-10 relative">
                Board of Trustees
              </div>
              
              {/* Line */}
              <div className="w-1 h-12 bg-gray-300"></div>
              
              {/* Level 2 */}
              <div className="bg-gold text-white px-8 py-4 rounded-xl font-bold shadow-lg w-64 text-center z-10 relative">
                President & CEO
              </div>

              {/* Line & Branches */}
              <div className="w-1 h-12 bg-gray-300"></div>
              <div className="w-full max-w-2xl border-t-4 border-gray-300 relative">
                <div className="absolute top-0 left-0 w-1 h-8 bg-gray-300"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-gray-300"></div>
                <div className="absolute top-0 right-0 w-1 h-8 bg-gray-300"></div>
              </div>

              {/* Level 3 */}
              <div className="w-full max-w-[42rem] flex justify-between mt-8 relative">
                <div className="bg-white border-2 border-gold text-navy px-4 py-3 rounded-xl font-bold shadow-sm w-48 text-center text-sm">
                  Executive Director
                </div>
                <div className="bg-white border-2 border-gold text-navy px-4 py-3 rounded-xl font-bold shadow-sm w-48 text-center text-sm">
                  Program Director
                </div>
                <div className="bg-white border-2 border-gold text-navy px-4 py-3 rounded-xl font-bold shadow-sm w-48 text-center text-sm">
                  Finance & Admin
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
