import { Link } from 'react-router-dom';
import { Button } from '../common/Button';

export const RegistrationCTA = () => {
  return (
    <section className="relative py-32 bg-navy overflow-hidden">
      {/* Decorative Gold Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/10 to-transparent pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight">
          Be Part of <span className="text-gold">Something Bigger.</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-white/80 mb-12 text-balance leading-relaxed">
          Connect with people, opportunities, and a community committed to growing and succeeding together.
        </p>
        
        <Link to="/register">
          <Button variant="primary" size="lg" className="px-12 text-lg shadow-xl shadow-emerald/20">
            REGISTER NOW
          </Button>
        </Link>
      </div>
    </section>
  );
};
