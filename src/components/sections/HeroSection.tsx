import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';
import { useEffect, useState } from 'react';

const heroImages = [
  '/hero1.jpeg',
  '/hero 2.jpeg',
  '/hero 3.jpeg',
  '/hero 4.jpeg',
  '/hero 6.jpeg',
];

const SLIDE_DURATION = 5000; // ms each image is shown

export const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [zooming, setZooming] = useState<'in' | 'out'>('in');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % heroImages.length);
      // Alternate zoom direction each slide
      setZooming(prev => (prev === 'in' ? 'out' : 'in'));
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.div
            key={current}
            className="absolute inset-0 will-change-transform"
            initial={{ opacity: 0, scale: zooming === 'in' ? 1.1 : 0.95 }}
            animate={{ opacity: 1, scale: zooming === 'in' ? 1.0 : 1.05 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: { duration: 1.2, ease: 'easeInOut' }, scale: { duration: SLIDE_DURATION / 1000, ease: 'linear' } }}
          >
            <img
              src={heroImages[current]}
              alt=""
              className="w-full h-full object-cover"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-navy/70" />
        {/* Subtle grid pattern on top */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-500 rounded-full ${
              i === current
                ? 'w-8 h-2 bg-gold'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl mx-auto"
        >
          {/* NGO Logo & Organization Name */}
          <div className="flex flex-col items-center justify-center mb-4">
            <img
              src="/logo.jpg"
              alt="Dr. Theo's Empowerment Hub"
              className="h-24 w-auto object-contain rounded-xl shadow-lg mb-6 border-2 border-white/10"
            />
            <h2 className="text-xl md:text-2xl text-gold font-semibold uppercase tracking-widest mb-4">
              Dr. Theo's Empowerment Hub
            </h2>
          </div>

          <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
            Empowering people.{' '}
            <span className="text-gold">Supporting dreams.</span>{' '}
            Transforming lives.{' '}
            <span className="text-gold">Strengthening Communities.</span>{' '}
            Creating opportunities.
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-lg md:text-2xl text-white/80 mb-10 text-balance leading-relaxed max-w-3xl mx-auto"
          >
            We are dedicated to building a brighter future by providing the resources, education, and support necessary for individuals and communities to thrive and achieve meaningful progress.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link to="/register">
              <Button variant="whiteOutline" size="lg" className="font-bold tracking-wide w-full sm:w-auto px-8">
                JOIN US
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
