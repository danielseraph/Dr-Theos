import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, MapPin, CheckCircle2 } from 'lucide-react';
import { programs } from '../../data/programs';
import { Button } from '../../components/common/Button';

const colorMap = {
  gold:    { text: 'text-gold',    bg: 'bg-gold',    bgLight: 'bg-gold/5',    border: 'border-gold/20',    hover: 'hover:border-gold/40 hover:shadow-gold/10' },
  navy:    { text: 'text-navy',    bg: 'bg-navy',    bgLight: 'bg-navy/5',    border: 'border-navy/20',    hover: 'hover:border-navy/40 hover:shadow-navy/10' },
};

export const ProgramsIndex = () => {
  return (
    <div className="w-full pt-20">

      {/* Hero */}
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
            <span className="text-gold font-semibold uppercase tracking-widest text-sm">What We Do</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Programs & Initiatives
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Every programme we run is designed with one goal in mind: creating sustainable, transformative change in the lives of individuals and communities. Explore all our programmes below.
          </motion.p>
        </div>
      </section>

      {/* Quick stats banner */}
      <section className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '9', label: 'Active Programmes' },
            { value: '3,000+', label: 'Lives Impacted' },
            { value: '20+', label: 'Communities Served' },
            { value: '100%', label: 'Community-Led' },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-black text-gold mb-1">{s.value}</div>
              <div className="text-xs font-semibold text-dark/60 uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 px-6 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, i) => {
              const c = colorMap[program.color];
              return (
                <motion.div
                  key={program.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                  className={`bg-white border ${c.border} rounded-3xl overflow-hidden group hover:shadow-xl ${c.hover} transition-all duration-300`}
                >
                  {/* Card Header */}
                  <div className={`${c.bgLight} p-8 border-b ${c.border}`}>
                    <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform`}>
                      <span className={c.text}>{program.icon}</span>
                    </div>
                    <h2 className="text-xl font-bold text-navy mb-2">{program.title}</h2>
                    <p className={`text-sm font-semibold ${c.text}`}>{program.subtitle}</p>
                  </div>

                  {/* Card Body */}
                  <div className="p-8">
                    <p className="text-dark/60 text-sm leading-relaxed mb-6 line-clamp-3">
                      {program.description}
                    </p>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {program.stats.slice(0, 2).map((stat, j) => (
                        <div key={j} className={`${c.bgLight} border ${c.border} rounded-xl p-3 text-center`}>
                          <div className={`font-black text-lg ${c.text}`}>{stat.value}</div>
                          <div className="text-xs text-dark/50 font-medium">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Who it serves */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-xs font-bold text-dark/40 uppercase tracking-wider mb-3">
                        <Users className="w-3 h-3" /> Who It Serves
                      </div>
                      <ul className="space-y-1">
                        {program.who.slice(0, 3).map((w, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-dark/60">
                            <CheckCircle2 className={`w-3.5 h-3.5 ${c.text} shrink-0 mt-0.5`} />
                            <span>{w}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Locations */}
                    <div className="flex items-start gap-2 text-xs text-dark/50 mb-8">
                      <MapPin className={`w-3.5 h-3.5 ${c.text} shrink-0 mt-0.5`} />
                      <span>{program.locations[0]}{program.locations.length > 1 ? ` +${program.locations.length - 1} more` : ''}</span>
                    </div>

                    <Link to={`/programs/${program.id}`}>
                      <button className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${c.bg} text-white hover:opacity-90`}>
                        View Full Programme <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 px-6 bg-gold text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:20px_20px]" />
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Involved?</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Whether you want to apply for a programme, donate, volunteer, or partner with us — we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button variant="white" size="lg" className="flex items-center gap-2">
                Apply Now <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/donate">
              <Button variant="whiteOutline" size="lg">
                Support Our Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
