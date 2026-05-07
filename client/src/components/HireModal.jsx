import { motion } from 'framer-motion';

const HireModal = ({ open, onClose, downloadCount, onDownload }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 px-4 py-8 backdrop-blur-xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.92 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 shadow-2xl shadow-black/40"
      >
        <div className="flex flex-col gap-6 p-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Hire Request</p>
            <h2 className="text-4xl font-semibold text-white">Access my full resume and track the interest.</h2>
            <p className="text-slate-300">
              View the polished resume preview, download it for hiring teams, and keep a real-time count of portfolio engagement.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => window.open('client/src/assets/resume.pdf', '_blank')}
                className="rounded-full border border-white/10 bg-slate-900/80 px-5 py-3 text-sm text-white transition hover:border-amber-300"
              >
                View Resume
              </button>
              <button
                onClick={onDownload}
                className="rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-glow shadow-amber-500/30 transition hover:opacity-95"
              >
                Download Resume
              </button>
            </div>
            <p className="text-sm text-slate-400">Resume downloads: <span className="font-semibold text-white">{downloadCount}</span></p>
          </div>
          <div className="relative h-72 w-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-900/90 p-4 shadow-inner shadow-slate-900/30 lg:w-[420px]">
            <div className="absolute inset-x-4 top-4 h-6 rounded-full bg-slate-800/80" />
            <div className="mt-10 h-[calc(100%-56px)] overflow-hidden rounded-[1.3rem] border border-white/10 bg-black/80">
              <object
                data="client/src/assets/resume.pdf"
                type="application/pdf"
                className="h-full w-full"
              >
                <div className="flex h-full items-center justify-center bg-slate-950 text-slate-400">
                  Preview unavailable. Please download resume.
                </div>
              </object>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-8 py-4 text-right">
          <button
            onClick={onClose}
            className="rounded-full border border-white/10 px-5 py-2 text-sm text-slate-300 transition hover:border-amber-300"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default HireModal;
