import { motion } from 'framer-motion';

const AvailabilityBadge = () => {
  return (
    <motion.div
      className="availability-badge inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="relative flex h-2 w-2">
        <span className="status-online absolute inline-flex h-full w-full rounded-full bg-emerald-500" />
        <span className="status-online relative inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
      </div>
      <span className="text-xs font-semibold text-emerald-300">Available for hire</span>
    </motion.div>
  );
};

export default AvailabilityBadge;
