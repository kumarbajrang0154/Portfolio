import { motion } from 'framer-motion';

const Preloader = () => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-[#020813]"
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-slate-900/90 shadow-[0_0_80px_rgba(255,184,80,0.18)]">
      <motion.div
        className="absolute inset-0 rounded-full border border-amber-400/20"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'linear' }}
      />
      <motion.div
        className="relative h-16 w-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-xl shadow-orange-500/30"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
      />
    </div>
  </motion.div>
);

export default Preloader;
