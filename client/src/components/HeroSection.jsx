import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const phrases = ['Java Developer', 'Full Stack Developer', 'Problem Solver'];

const HeroSection = ({ onHire }) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

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

  return (
    <section id="hero" className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-14">
      <div className="hero-bg">
        <span className="hero-spot top-[-10%] left-[-5%] h-72 w-72 pulse-animate" />
        <span className="hero-spot secondary right-[-5%] top-16 h-60 w-60 pulse-animate" />
        <span className="floating-shape left-[8%] top-[55%] h-36 w-36" />
        <span className="floating-shape right-[15%] top-[35%] h-24 w-24" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-8">
          <motion.div
            className="inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.4em] text-amber-300 shadow-glow"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            Product-grade SaaS portfolio
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
              Crafting elegant SaaS experiences with premium motion and polished product design.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              I turn portfolio moments into memorable product journeys using motion, glassmorphism, and interface clarity that converts.
            </p>
          </motion.div>

          <motion.div
            className="relative max-w-xl overflow-hidden rounded-full border border-white/10 bg-slate-950/80 px-5 py-4 text-sm text-slate-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-amber-400/10 before:to-transparent before:blur-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">Hiring for product-first web apps?</span>{' '}
            <span className="text-gradient font-semibold">I build interfaces that feel like premium SaaS platforms.</span>
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
              Hire Me
            </button>
            <a
              href="/resume/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/80 px-8 py-4 text-base text-slate-100 transition hover:border-amber-300"
            >
              View Resume
            </a>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              { label: 'Projects', value: '12+' },
              { label: 'Skills', value: '20+' },
              { label: 'Experience', value: '4 yrs' }
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
          whileHover={{ y: -6, rotate: 1 }}
        >
          <div className="hero-spot top-[-5%] right-[-10%] h-52 w-52" />
          <div className="glass-card relative overflow-hidden rounded-[2.5rem] border border-white/10 p-1 shadow-2xl shadow-slate-950/40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,184,80,0.16),_transparent_45%)]" />
            <div className="relative flex min-h-[440px] flex-col items-center justify-between rounded-[2.3rem] bg-slate-950/95 px-8 py-10 text-center">
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-5xl font-black text-slate-950 shadow-xl shadow-orange-500/30">
                B
              </div>
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.36em] text-amber-300">Lead SaaS engineer</p>
                <h2 className="text-3xl font-semibold text-white">Bajrang Chaurasiya</h2>
                <p className="max-w-xs text-sm leading-7 text-slate-300">
                  I deliver premium frontend experiences with strong backend reliability, polished interactions, and modern product thinking.
                </p>
              </div>
              <div className="grid gap-3 w-full sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-4 text-left">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Role</p>
                  <p className="mt-2 text-lg font-semibold text-white">Full Stack</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 px-5 py-4 text-left">
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Focus</p>
                  <p className="mt-2 text-lg font-semibold text-white">SaaS UI/UX</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
