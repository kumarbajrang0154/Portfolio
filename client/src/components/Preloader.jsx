import { motion } from 'framer-motion';

const Preloader = () => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-[#020713]"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-xl shadow-orange-500/30"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1.8, ease: 'linear' }}
    >
      <div className="h-12 w-12 rounded-full bg-white" />
    </motion.div>
  </motion.div>
);

export default Preloader;
