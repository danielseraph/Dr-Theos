import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  GraduationCap, BookOpen, Users, Lightbulb, HandHeart,
  Wrench, Scissors, Sparkles, Laptop, Hammer,
  Briefcase, TrendingUp, Store, LineChart,
  Droplets, Building2, Wheat, ShoppingBasket, Zap,
  Heart, Baby, UserCheck, Coins,
  CheckCircle2, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const missionAreas = [
  {
    id: 'education',
    color: 'gold',
    bgColor: 'bg-gold/5',
    borderColor: 'border-gold/20',
    accentColor: 'bg-gold',
    textColor: 'text-gold',
    icon: <GraduationCap className="w-10 h-10 text-gold" />,
    title: 'Education',
    tagline: 'Unlocking potential through knowledge and opportunity',
    description:
      'We believe education is the most powerful tool for breaking cycles of poverty. Our education initiatives remove financial and social barriers so that every learner regardless of background has a genuine opportunity to succeed.',
    items: [
      { icon: <BookOpen className="w-5 h-5 text-gold" />, label: 'Scholarships', desc: 'Funding academic journeys for deserving students who lack resources.' },
      { icon: <HandHeart className="w-5 h-5 text-gold" />, label: 'Student Support', desc: 'Holistic welfare assistance including counseling and pastoral care.' },
      { icon: <BookOpen className="w-5 h-5 text-gold" />, label: 'Educational Materials', desc: 'Providing textbooks, stationery, and digital resources to schools in need.' },
      { icon: <Users className="w-5 h-5 text-gold" />, label: 'Mentorship', desc: 'Pairing students with experienced professionals for guidance and inspiration.' },
      { icon: <Lightbulb className="w-5 h-5 text-gold" />, label: 'Academic Assistance', desc: 'Tutoring programs, after-school support, and remedial learning centres.' },
    ],
  },
  {
    id: 'skills',
    color: 'gold',
    bgColor: 'bg-gold/5',
    borderColor: 'border-gold/20',
    accentColor: 'bg-gold',
    textColor: 'text-gold',
    icon: <Wrench className="w-10 h-10 text-gold" />,
    title: 'Skills Development',
    tagline: 'Building capable hands for a self-reliant future',
    description:
      'Practical, market-relevant skills create economic independence. Our vocational and technical training programmes equip individuals with the competencies they need to earn a dignified livelihood and contribute to local economies.',
    items: [
      { icon: <Wrench className="w-5 h-5 text-gold" />, label: 'Vocational Training', desc: 'Structured programmes in carpentry, electrical work, plumbing, and more.' },
      { icon: <Scissors className="w-5 h-5 text-gold" />, label: 'Tailoring & Fashion', desc: 'Intensive training in garment construction, design, and small-scale production.' },
      { icon: <Sparkles className="w-5 h-5 text-gold" />, label: 'Beauty & Nail Technician Training', desc: 'Professional cosmetology courses enabling entrepreneurial independence.' },
      { icon: <Hammer className="w-5 h-5 text-gold" />, label: 'Technical Skills', desc: 'Hands-on engineering and fabrication training for the modern workforce.' },
      { icon: <Laptop className="w-5 h-5 text-gold" />, label: 'Digital Skills', desc: 'Computer literacy, coding, graphic design, and digital marketing for the digital economy.' },
    ],
  },
  {
    id: 'entrepreneurship',
    color: 'navy',
    bgColor: 'bg-navy/5',
    borderColor: 'border-navy/20',
    accentColor: 'bg-navy',
    textColor: 'text-navy',
    icon: <Briefcase className="w-10 h-10 text-navy" />,
    title: 'Entrepreneurship',
    tagline: 'Fuelling innovation and building economic champions',
    description:
      'Ideas without resources rarely take flight. Our entrepreneurship pillar provides the training, mentorship, and start-up support that transforms creative ideas into viable businesses, creating jobs and economic vitality within communities.',
    items: [
      { icon: <Store className="w-5 h-5 text-navy" />, label: 'Small-Business Support', desc: 'Seed funding, micro-loans, and incubation space for early-stage businesses.' },
      { icon: <TrendingUp className="w-5 h-5 text-navy" />, label: 'Business Training', desc: 'Workshops on financial management, marketing, and sustainable operations.' },
      { icon: <Lightbulb className="w-5 h-5 text-navy" />, label: 'Entrepreneurship Education', desc: 'Structured curricula on ideation, market research, and business planning.' },
      { icon: <Users className="w-5 h-5 text-navy" />, label: 'Mentorship', desc: 'Connecting aspiring entrepreneurs with established business leaders.' },
      { icon: <LineChart className="w-5 h-5 text-navy" />, label: 'Business-Development Assistance', desc: 'Ongoing advisory, market-linkage, and growth-strategy support.' },
    ],
  },
  {
    id: 'community',
    color: 'gold',
    bgColor: 'bg-gold/5',
    borderColor: 'border-gold/20',
    accentColor: 'bg-gold',
    textColor: 'text-gold',
    icon: <Building2 className="w-10 h-10 text-gold" />,
    title: 'Community Development',
    tagline: 'Building resilient, thriving communities from the ground up',
    description:
      'Sustainable development requires investment in the foundations of community life. We partner with local leaders and institutions to deliver infrastructure, agricultural, and environmental projects that create lasting improvements in quality of life.',
    items: [
      { icon: <Droplets className="w-5 h-5 text-gold" />, label: 'Water Projects', desc: 'Borehole drilling, water purification systems, and WASH initiatives.' },
      { icon: <Building2 className="w-5 h-5 text-gold" />, label: 'Community Infrastructure', desc: 'Construction and rehabilitation of community centres, schools, and roads.' },
      { icon: <Wheat className="w-5 h-5 text-gold" />, label: 'Agricultural Initiatives', desc: 'Modern farming techniques, cooperative farming, and food-security programmes.' },
      { icon: <ShoppingBasket className="w-5 h-5 text-gold" />, label: 'Local Markets', desc: 'Empowering traders through market-development and supply-chain connectivity.' },
      { icon: <Zap className="w-5 h-5 text-gold" />, label: 'Youth Development', desc: 'Recreation centres, leadership programmes, and sports initiatives for the youth.' },
    ],
  },
  {
    id: 'social',
    color: 'gold',
    bgColor: 'bg-gold/5',
    borderColor: 'border-gold/20',
    accentColor: 'bg-gold',
    textColor: 'text-gold',
    icon: <Heart className="w-10 h-10 text-gold" />,
    title: 'Social Empowerment',
    tagline: 'Ensuring nobody is left behind',
    description:
      'We are deeply committed to the most marginalised members of our communities. Our social empowerment programmes deliver targeted support to vulnerable individuals, women, children, and youth — fostering dignity, safety, and economic inclusion for all.',
    items: [
      { icon: <HandHeart className="w-5 h-5 text-gold" />, label: 'Support for Vulnerable Individuals', desc: 'Emergency relief, psychosocial support, and long-term rehabilitation programmes.' },
      { icon: <Baby className="w-5 h-5 text-gold" />, label: 'Support for Children', desc: 'Child welfare, nutrition, and educational support for at-risk children.' },
      { icon: <Sparkles className="w-5 h-5 text-gold" />, label: 'Women Empowerment', desc: 'Leadership development, gender-based-violence prevention, and economic independence for women.' },
      { icon: <UserCheck className="w-5 h-5 text-gold" />, label: 'Youth Empowerment', desc: 'Mentorship, civic engagement, and skills training to build the next generation of leaders.' },
      { icon: <Coins className="w-5 h-5 text-gold" />, label: 'Economic Inclusion', desc: 'Financial literacy, savings groups, and access to credit for underserved populations.' },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export const Mission = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="w-full pt-20">

      {/* Page Hero */}
      <section className="bg-navy text-white py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-gold/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block bg-gold/20 border border-gold/30 px-6 py-2 rounded-full mb-6"
          >
            <span className="text-gold font-semibold uppercase tracking-widest text-sm">What We Are Trying To Accomplish</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Our Mission
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Dr. Theo's Empowerment Hub exists to dismantle barriers and create sustainable pathways to opportunity. We work across five interconnected pillars — each targeting a critical dimension of human flourishing.
          </motion.p>
        </div>
      </section>

      {/* Quick Navigation Pills */}
      <section className="bg-white border-b border-gray-100 sticky top-[72px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-3 overflow-x-auto">
          {missionAreas.map((area) => (
            <a
              key={area.id}
              href={`#${area.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(area.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold border transition-all hover:shadow-md ${
                area.color === 'gold'
                  ? 'border-gold/30 text-gold hover:bg-gold hover:text-white'
                  : area.color === 'navy'
                  ? 'border-navy/30 text-navy hover:bg-navy hover:text-white'
                  : 'border-gold/30 text-gold hover:bg-gold hover:text-white'
              }`}
            >
              {area.title}
            </a>
          ))}
        </div>
      </section>

      {/* Mission Areas */}
      {missionAreas.map((area, areaIdx) => (
        <section
          key={area.id}
          id={area.id}
          className={`py-24 px-6 ${areaIdx % 2 === 0 ? 'bg-white' : 'bg-offwhite'}`}
        >
          <div className="max-w-7xl mx-auto">

            {/* Section Header */}
            <div className={`flex flex-col md:flex-row md:items-center gap-8 mb-16 pb-12 border-b ${area.borderColor}`}>
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 ${area.bgColor} border ${area.borderColor}`}>
                {area.icon}
              </div>
              <div className="flex-1">
                <div className={`inline-block text-xs font-bold uppercase tracking-widest mb-2 ${area.textColor}`}>
                  Mission Area {areaIdx + 1} of {missionAreas.length}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy mb-3">{area.title}</h2>
                <p className={`text-lg font-semibold ${area.textColor} mb-3`}>{area.tagline}</p>
                <p className="text-dark/70 leading-relaxed max-w-3xl">{area.description}</p>
              </div>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {area.items.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={fadeUp}
                  className={`${area.bgColor} border ${area.borderColor} p-6 rounded-2xl hover:shadow-lg transition-all group`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-navy text-base mb-2">{item.label}</h3>
                  <p className="text-dark/60 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
      ))}

      {/* Mission Summary CTA */}
      <section className="py-24 px-6 bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold/20 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Five Pillars. One Purpose.</h2>
          <p className="text-xl text-white/80 leading-relaxed mb-12 max-w-3xl mx-auto">
            Together, our five mission areas form a comprehensive ecosystem of support — from the classroom to the community, from personal growth to economic independence.
          </p>

          {/* 5-pillar summary row */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {missionAreas.map((area) => (
              <div key={area.id} className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center text-center">
                <CheckCircle2 className="w-6 h-6 text-gold mb-2" />
                <span className="text-sm font-bold text-white">{area.title}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/programs">
              <button className="bg-gold hover:bg-gold/90 text-white font-bold px-8 py-4 rounded-xl transition-colors flex items-center gap-2">
                Explore Our Programs <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/donate">
              <button className="border-2 border-white/30 hover:border-white text-white font-bold px-8 py-4 rounded-xl transition-colors">
                Support Our Mission
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
