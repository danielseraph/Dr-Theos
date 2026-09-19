import { motion } from 'framer-motion';
import { Button } from '../common/Button';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-navy overflow-hidden pt-20">
      {/* Background Pattern/Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      
      {/* Abstract decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-emerald/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            WORKING <span className="text-emerald">TOGETHER.</span><br />
            GROWING <span className="text-emerald">TOGETHER.</span><br />
            WINNING <span className="text-gold">TOGETHER.</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-2xl text-white/80 mb-10 text-balance leading-relaxed max-w-2xl mx-auto"
          >
            Building stronger connections, creating opportunities, and achieving meaningful progress together.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Button variant="primary" size="lg" className="w-full sm:w-auto font-bold tracking-wide">
              REGISTER NOW
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto font-bold tracking-wide">
              LEARN MORE
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
