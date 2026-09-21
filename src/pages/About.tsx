import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Shield, CheckCircle2, MapPin, Building, Calendar, Globe, Compass, Activity, Flag } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export const About = () => {
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
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Establishing our identity, defining our purpose, and sharing the story that drives our commitment to empowering communities.
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 bg-white px-6" id="who-we-are">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Who We Are</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-offwhite p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <Building className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-bold text-navy mb-2">Organization</h3>
              <p className="text-dark/70 text-sm font-medium">Dr. Theo's Empowerment Hub</p>
            </div>
            <div className="bg-offwhite p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <Shield className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-bold text-navy mb-2">Legal Status</h3>
              <p className="text-dark/70 text-sm font-medium">Registered NGO / Non-Profit</p>
            </div>
            <div className="bg-offwhite p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <Calendar className="w-10 h-10 text-navy mb-4" />
              <h3 className="font-bold text-navy mb-2">Established</h3>
              <p className="text-dark/70 text-sm font-medium">Founded 2026</p>
            </div>
            <div className="bg-offwhite p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <MapPin className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-bold text-navy mb-2">Headquarters</h3>
              <p className="text-dark/70 text-sm font-medium">Global Central Hub</p>
            </div>
            <div className="bg-offwhite p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <Globe className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-bold text-navy mb-2">Areas of Operation</h3>
              <p className="text-dark/70 text-sm font-medium">Local & International</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-offwhite px-6" id="our-story">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-gold mb-8 rounded-full"></div>
              
              <div className="space-y-6 text-lg text-dark/70 leading-relaxed">
                <div>
                  <h4 className="font-bold text-navy text-xl mb-2 flex items-center gap-2"><Target className="w-5 h-5 text-gold" /> The Problem We Identified</h4>
                  <p>In many communities, immense potential remains untapped due to a lack of resources, mentorship, and structured support systems. People with brilliant ideas and strong drive often face insurmountable systemic barriers.</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy text-xl mb-2 flex items-center gap-2"><Lightbulb className="w-5 h-5 text-gold" /> What Inspired Us</h4>
                  <p>Witnessing the resilience of individuals striving for better futures inspired the creation of Dr. Theo's Empowerment Hub. We realized that by providing the right tools, knowledge, and community backing, we could turn aspirations into tangible realities.</p>
                </div>
                <div>
                  <h4 className="font-bold text-navy text-xl mb-2 flex items-center gap-2"><Activity className="w-5 h-5 text-gold" /> Our Evolution</h4>
                  <p>What began as a localized initiative has rapidly evolved into a comprehensive hub. Today, we stand as a beacon of growth, connecting thousands of individuals to programs that foster true empowerment.</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img src="/our story.jpeg" alt="Our Story Team" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl max-w-sm hidden md:block border border-gray-100">
                <p className="text-navy font-bold text-xl mb-2">"Empowerment is not given, it is cultivated together."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-navy text-white px-6" id="mission-vision">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <div className="bg-white/5 p-10 md:p-14 rounded-3xl backdrop-blur-sm border border-white/10 relative overflow-hidden group">
              <Compass className="w-16 h-16 text-gold mb-6 group-hover:scale-110 transition-transform" />
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-white/80 leading-relaxed">
                To build a brighter future by providing the resources, education, and support necessary for individuals and communities to thrive, innovate, and achieve meaningful progress.
              </p>
            </div>
            <div className="bg-white/5 p-10 md:p-14 rounded-3xl backdrop-blur-sm border border-white/10 relative overflow-hidden group">
              <Flag className="w-16 h-16 text-gold mb-6 group-hover:scale-110 transition-transform" />
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl text-white/80 leading-relaxed">
                A world where every individual, regardless of their background, has equitable access to opportunities that enable them to unlock their full potential and uplift their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values & Philosophy */}
      <section className="py-24 bg-white px-6" id="core-values">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Core Values & Philosophy</h2>
            <div className="w-20 h-1 bg-gold mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-dark/70 max-w-2xl mx-auto">
              Our philosophy is rooted in the belief that collective empowerment is the most sustainable way to drive change. We approach every challenge with these fundamental values:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Integrity', desc: 'Operating with unwavering transparency, honesty, and accountability in everything we do.' },
              { title: 'Inclusivity', desc: 'Creating safe, welcoming spaces that celebrate diversity and ensure equitable access for all.' },
              { title: 'Innovation', desc: 'Continuously seeking creative, forward-thinking solutions to address complex community challenges.' },
              { title: 'Collaboration', desc: 'Believing that we go further together through strong partnerships and shared knowledge.' },
              { title: 'Resilience', desc: 'Fostering the strength to overcome adversity and building long-lasting sustainable progress.' },
              { title: 'Empathy', desc: 'Approaching our work with deep understanding, compassion, and respect for individual journeys.' },
            ].map((value, i) => (
              <div key={i} className="flex gap-4 items-start p-6 rounded-2xl hover:bg-offwhite transition-colors border border-transparent hover:border-gray-100">
                <CheckCircle2 className="w-8 h-8 text-gold shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">{value.title}</h3>
                  <p className="text-dark/70 leading-relaxed">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach & Milestones */}
      <section className="py-24 bg-offwhite px-6" id="approach-history">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Approach */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Our Approach</h2>
              <div className="w-20 h-1 bg-gold mb-8 rounded-full"></div>
              <div className="space-y-6">
                <p className="text-lg text-dark/70 leading-relaxed">
                  We employ a holistic, community-centric approach. Rather than applying one-size-fits-all solutions, we listen to the specific needs of the demographics we serve.
                </p>
                <ul className="space-y-4">
                  {[
                    'Needs Assessment & Local Engagement',
                    'Strategic Program Development',
                    'Resource Mobilization & Mentorship',
                    'Continuous Impact Evaluation'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center font-bold">{idx + 1}</div>
                      <span className="font-semibold text-navy">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* History & Milestones */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">History & Milestones</h2>
              <div className="w-20 h-1 bg-gold mb-8 rounded-full"></div>
              <div className="relative border-l-2 border-gold/20 ml-4 space-y-8 pb-4">
                <div className="relative pl-8">
                  <div className="absolute w-4 h-4 bg-gold rounded-full -left-[9px] top-1"></div>
                  <h3 className="font-bold text-navy text-xl">The Foundation</h3>
                  <span className="text-sm font-semibold text-gold mb-2 inline-block">Phase 1</span>
                  <p className="text-dark/70">Initial conceptualization, registration of the NGO, and launch of our foundational community outreach programs.</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute w-4 h-4 bg-gold rounded-full -left-[9px] top-1"></div>
                  <h3 className="font-bold text-navy text-xl">Program Expansion</h3>
                  <span className="text-sm font-semibold text-gold mb-2 inline-block">Phase 2</span>
                  <p className="text-dark/70">Introduction of Vocational Training, Youth Mentorship, and the first scholarship grants to underserved individuals.</p>
                </div>
                <div className="relative pl-8">
                  <div className="absolute w-4 h-4 bg-navy rounded-full -left-[9px] top-1"></div>
                  <h3 className="font-bold text-navy text-xl">Global Reach & Innovation</h3>
                  <span className="text-sm font-semibold text-navy mb-2 inline-block">Phase 3 (Current)</span>
                  <p className="text-dark/70">Scaling our digital platform, launching the Entrepreneurship Hub, and forming strategic international partnerships.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
