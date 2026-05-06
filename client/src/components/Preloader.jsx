import { motion } from 'framer-motion';

const Preloader = () => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-[#020813]"
    initial={{ opacity: 1 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
  >
    {/* Background glow */}
    <div className="absolute inset-0">
      <motion.div
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-amber-400/30 to-orange-500/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
      />
    </div>

    {/* Main loader */}
    <div className="relative flex h-32 w-32 items-center justify-center">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-0 rounded-full border border-transparent border-t-amber-400 border-r-orange-500"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
      />

      {/* Middle pulsing ring */}
      <motion.div
        className="absolute inset-4 rounded-full border border-amber-400/30"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      />

      {/* Inner glowing core */}
      <motion.div
        className="relative h-16 w-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-xl shadow-orange-500/50"
        animate={{ scale: [1, 1.05, 1], opacity: [1, 0.8, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
      >
        {/* Inner shine effect */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/40 to-transparent" />
      </motion.div>
    </div>

    {/* Loading text */}
    <motion.div
      className="absolute bottom-32 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Loading portfolio</p>
      <motion.div
        className="mt-3 flex justify-center gap-1"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span className="h-2 w-2 rounded-full bg-amber-300" />
        <span className="h-2 w-2 rounded-full bg-amber-300" />
        <span className="h-2 w-2 rounded-full bg-amber-300" />
      </motion.div>
    </motion.div>
  </motion.div>
);

export default Preloader;
