import { motion, AnimatePresence } from 'framer-motion';

interface PageLoaderProps {
  visible: boolean;
}

export const PageLoader = ({ visible }: PageLoaderProps) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="page-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-navy/95 backdrop-blur-sm"
        >
          {/* Rotating logo */}
          <div className="relative flex items-center justify-center">
            {/* Outer spinning ring */}
            <motion.div
              className="absolute w-32 h-32 rounded-full border-4 border-transparent border-t-gold border-r-gold/40"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
            />
            {/* Inner spinning ring (opposite direction, slower) */}
            <motion.div
              className="absolute w-24 h-24 rounded-full border-4 border-transparent border-b-gold/60 border-l-gold/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            {/* Logo in center */}
            <motion.img
              src="/logo.jpg"
              alt="Loading..."
              className="w-16 h-16 rounded-xl object-cover shadow-2xl"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>

          {/* Loading text */}
          <motion.p
            className="mt-8 text-white/60 text-sm font-medium tracking-widest uppercase"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            Loading...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
