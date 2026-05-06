import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import AvailabilityBadge from './AvailabilityBadge';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const phrases = ['Full Stack Developer', 'Web Dev Enthusiast', 'Problem Solver', 'KPRIET Student'];

const HeroSection = ({ onHire }) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const word = phrases[phraseIndex];
    if (charIndex < word.length) {
      const timeout = setTimeout(() => setText(word.slice(0, charIndex + 1)), 70);
      setCharIndex((current) => current + 1);
      return () => clearTimeout(timeout);
    }
    const pause = setTimeout(() => {
      setText('');
      setCharIndex(0);
      setPhraseIndex((index) => (index + 1) % phrases.length);
    }, 1700);
    return () => clearTimeout(pause);
  }, [charIndex, phraseIndex]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section id="hero" className="relative overflow-hidden px-6 py-32 sm:px-10 lg:px-14">
      <div className="hero-bg">
        <span className="hero-spot top-[-10%] left-[-5%] h-72 w-72 pulse-animate" />
        <span className="hero-spot secondary right-[-5%] top-16 h-60 w-60 pulse-animate" />
        <span className="floating-shape left-[8%] top-[55%] h-36 w-36" />
        <span className="floating-shape right-[15%] top-[35%] h-24 w-24" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-8">
          <AvailabilityBadge />

          <motion.div
            className="inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.4em] text-amber-300 shadow-glow"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            🎓 Web Development Intern @ Oasis Infobyte
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
              Computer Science student focused on full stack development and production-ready web experiences.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              Building scalable web applications with Java, JavaScript, and modern frameworks. Passionate about clean code, problem solving, and creating user-first experiences.
            </p>
          </motion.div>

          <motion.div
            className="relative max-w-xl overflow-hidden rounded-full border border-white/10 bg-slate-950/80 px-5 py-4 text-sm text-slate-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-amber-400/10 before:to-transparent before:blur-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">KPRIET B.E CSE (2022–2026) | CGPA 7.9</span>{' '}
            <span className="text-gradient font-semibold">| Internship at Oasis Infobyte</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <button
              onClick={onHire}
              className="rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-glow shadow-amber-400/30 transition hover:scale-[1.01]"
            >
              Get In Touch
            </button>
            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-8 py-4 text-base text-slate-100 transition hover:border-amber-300"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { label: 'Projects', value: '5+' },
              { label: 'Technologies', value: '10+' },
              { label: 'Certifications', value: '5' }
            ].map((item) => (
              <div key={item.label} className="stats-badge px-6 py-5 text-center shadow-xl shadow-slate-950/30">
                <p className="text-4xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.32em] text-slate-400">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onMouseMove={handleMouseMove}
        >
          {/* Animated background glow */}
          <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-r from-amber-400/20 via-transparent to-orange-500/20 blur-3xl" />
          
          {/* Main profile card */}
          <motion.div
            className="relative rounded-[2.5rem] border border-white/15 bg-gradient-to-br from-slate-900/95 via-slate-950/85 to-slate-950/95 p-8 shadow-2xl shadow-slate-950/60 overflow-hidden"
            whileHover={{ y: -8 }}
          >
            {/* Shine effect on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1), transparent 50%)`,
                pointerEvents: 'none'
              }}
            />

            {/* Content */}
            <div className="relative space-y-8 text-center">
              {/* Profile Image with animated glow */}
              <motion.div
                className="relative mx-auto w-40 h-40 rounded-full overflow-hidden"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {/* Animated glow border */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 rounded-full animate-spin opacity-75"
                  style={{ animationDuration: '8s' }}
                />
                
                {/* Inner glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-300 to-orange-400 rounded-full blur opacity-50" />
                
                {/* Profile image placeholder (replace with actual image) */}
                <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-6xl font-black text-slate-950 shadow-xl shadow-orange-500/40">
                  B
                </div>
              </motion.div>

              {/* Title and description */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-xs uppercase tracking-[0.36em] text-amber-300 font-semibold">Full Stack Developer</p>
                <h2 className="text-3xl font-bold text-white">Bajrang Chaurasiya</h2>
                <p className="text-sm leading-6 text-slate-300">
                  KPRIET B.E CSE Student passionate about building scalable web applications with modern technologies.
                </p>
              </motion.div>

              {/* Role indicators */}
              <motion.div
                className="grid grid-cols-2 gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="rounded-2xl border border-amber-400/30 bg-amber-400/5 px-4 py-3 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">Education</p>
                  <p className="mt-1 text-sm font-semibold text-white">KPRIET</p>
                </div>
                <div className="rounded-2xl border border-orange-400/30 bg-orange-400/5 px-4 py-3 backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.3em] text-orange-300/80">Status</p>
                  <p className="mt-1 text-sm font-semibold text-white">Internship</p>
                </div>
              </motion.div>

              {/* Stats bar */}
              <motion.div
                className="border-t border-white/10 pt-6 space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Currently</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="relative inline-block h-2 w-2 rounded-full bg-emerald-500">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping" />
                  </span>
                  <p className="text-sm font-semibold text-emerald-300">Available for remote roles</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
