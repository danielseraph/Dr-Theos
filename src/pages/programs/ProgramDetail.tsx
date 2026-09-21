import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircle2, ChevronRight, MapPin, ArrowLeft, ArrowRight,
  Users, ClipboardList, UserCheck, Award, Layers
} from 'lucide-react';
import { getProgramById, programs } from '../../data/programs';

const colorMap = {
  gold: {
    text: 'text-gold',
    bg: 'bg-gold',
    bgLight: 'bg-gold/5',
    border: 'border-gold/20',
    badge: 'bg-gold/20 text-gold border border-gold/30',
    stat: 'bg-gold text-navy',
    pill: 'bg-gold/10 text-gold',
    iconBg: 'bg-gold/10',
  },
  navy: {
    text: 'text-navy',
    bg: 'bg-navy',
    bgLight: 'bg-navy/5',
    border: 'border-navy/20',
    badge: 'bg-navy/10 text-navy border border-navy/20',
    stat: 'bg-navy text-white',
    pill: 'bg-navy/10 text-navy',
    iconBg: 'bg-navy/10',
  },
};

export const ProgramDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const program = getProgramById(id ?? '');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!program) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center pt-24 pb-12 text-center px-6">
        <h2 className="text-3xl font-bold text-navy mb-4">Program Not Found</h2>
        <p className="text-dark/60 mb-8">The program you're looking for doesn't exist or may have moved.</p>
        <Link to="/programs" className="bg-gold text-white font-bold px-6 py-3 rounded-xl">Back to Programs</Link>
      </div>
    );
  }

  const c = colorMap[program.color];
  const currentIdx = programs.findIndex((p) => p.id === program.id);
  const prevProgram = currentIdx > 0 ? programs[currentIdx - 1] : null;
  const nextProgram = currentIdx < programs.length - 1 ? programs[currentIdx + 1] : null;

  return (
    <div className="w-full pt-20">

      {/* Hero */}
      <section className="bg-navy text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <Link to="/programs" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to All Programs
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-start gap-8"
          >
            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 ${c.bgLight} border ${c.border}`}>
              <span className={c.text}>{program.icon}</span>
            </div>
            <div>
              <div className={`inline-block text-xs font-bold uppercase tracking-widest mb-3 px-3 py-1 rounded-full ${c.badge}`}>
                Dr. Theo's Empowerment Hub
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-3 text-white leading-tight">{program.title}</h1>
              <p className={`text-lg font-semibold ${c.text} mb-4`}>{program.subtitle}</p>
              <p className="text-white/70 text-lg italic">"{program.heroTagline}"</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {program.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`text-2xl md:text-3xl font-black mb-1 ${c.text}`}>{stat.value}</div>
              <div className="text-xs font-semibold text-dark/60 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-4">About This Programme</h2>
          <p className="text-lg text-dark/70 leading-relaxed max-w-3xl">{program.description}</p>
        </div>
      </section>

      {/* Sub-programs (if any) */}
      {program.subPrograms && program.subPrograms.length > 0 && (
        <section className={`py-16 px-6 ${c.bgLight}`}>
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-10">
              <Layers className={`w-6 h-6 ${c.text}`} />
              <h2 className="text-2xl font-bold text-navy">Programme Streams</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {program.subPrograms.map((sub, i) => (
                <div key={i} className={`bg-white border ${c.border} p-6 rounded-2xl hover:shadow-md transition-all group`}>
                  <div className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    {sub.icon}
                  </div>
                  <h3 className="font-bold text-navy mb-2">{sub.name}</h3>
                  <p className="text-dark/60 text-sm leading-relaxed">{sub.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* What We Offer */}
      <section className="py-16 px-6 bg-offwhite">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <Award className={`w-6 h-6 ${c.text}`} />
            <h2 className="text-2xl font-bold text-navy">What Support Is Offered</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {program.what.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 flex gap-4 hover:shadow-md transition-all">
                <div className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center shrink-0`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-navy mb-2">{item.label}</h3>
                  <p className="text-dark/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Qualifies */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <Users className={`w-6 h-6 ${c.text}`} />
            <h2 className="text-2xl font-bold text-navy">Who This Programme Serves</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {program.who.map((item, i) => (
              <div key={i} className={`flex items-start gap-3 p-4 rounded-xl ${c.bgLight} border ${c.border}`}>
                <CheckCircle2 className={`w-5 h-5 ${c.text} shrink-0 mt-0.5`} />
                <span className="text-dark/80 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 px-6 bg-offwhite">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <ClipboardList className={`w-6 h-6 ${c.text}`} />
            <h2 className="text-2xl font-bold text-navy">Eligibility Requirements</h2>
          </div>
          <ul className="space-y-4">
            {program.eligibility.map((item, i) => (
              <li key={i} className="flex items-start gap-4 bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                <div className={`w-8 h-8 rounded-full ${c.bg} text-white flex items-center justify-center font-bold text-sm shrink-0`}>{i + 1}</div>
                <span className="text-dark/80 font-medium leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 px-6 bg-navy text-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <ChevronRight className={`w-6 h-6 ${c.text}`} />
            <h2 className="text-2xl font-bold text-white">How to Apply</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {program.applicationSteps.map((step, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className={`w-10 h-10 rounded-full ${c.bg} text-white flex items-center justify-center font-black text-lg mb-4 shrink-0`}>{i + 1}</div>
                <h3 className="font-bold text-white mb-2">{step.step}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact">
              <button className={`${c.bg} hover:opacity-90 text-white font-bold px-10 py-4 rounded-xl transition-opacity text-lg`}>
                Apply Now / Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <UserCheck className={`w-6 h-6 ${c.text}`} />
            <h2 className="text-2xl font-bold text-navy">Selection Process</h2>
          </div>
          <ul className="space-y-4">
            {program.selectionProcess.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className={`w-5 h-5 ${c.text} shrink-0 mt-1`} />
                <span className="text-dark/70 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Locations */}
      <section className={`py-16 px-6 ${c.bgLight}`}>
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <MapPin className={`w-6 h-6 ${c.text}`} />
            <h2 className="text-2xl font-bold text-navy">Locations & Delivery</h2>
          </div>
          <div className="flex flex-wrap gap-4">
            {program.locations.map((loc, i) => (
              <span key={i} className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm ${c.pill} border ${c.border}`}>
                <MapPin className="w-4 h-4" /> {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      <section className="py-12 px-6 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          {prevProgram ? (
            <button
              onClick={() => navigate(`/programs/${prevProgram.id}`)}
              className="flex items-center gap-3 group text-left"
            >
              <ArrowLeft className="w-5 h-5 text-dark/40 group-hover:text-gold transition-colors" />
              <div>
                <div className="text-xs text-dark/40 uppercase tracking-wider mb-1">Previous</div>
                <div className="font-bold text-navy group-hover:text-gold transition-colors">{prevProgram.title}</div>
              </div>
            </button>
          ) : <div />}

          <Link to="/programs" className="text-sm font-semibold text-dark/50 hover:text-gold transition-colors uppercase tracking-widest">
            All Programs
          </Link>

          {nextProgram ? (
            <button
              onClick={() => navigate(`/programs/${nextProgram.id}`)}
              className="flex items-center gap-3 group text-right"
            >
              <div>
                <div className="text-xs text-dark/40 uppercase tracking-wider mb-1">Next</div>
                <div className="font-bold text-navy group-hover:text-gold transition-colors">{nextProgram.title}</div>
              </div>
              <ArrowRight className="w-5 h-5 text-dark/40 group-hover:text-gold transition-colors" />
            </button>
          ) : <div />}
        </div>
      </section>

    </div>
  );
};
