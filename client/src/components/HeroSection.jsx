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
      const timeout = setTimeout(() => setText(word.slice(0, charIndex + 1)), 80);
      setCharIndex((current) => current + 1);
      return () => clearTimeout(timeout);
    }
    const pause = setTimeout(() => {
      setText('');
      setCharIndex(0);
      setPhraseIndex((index) => (index + 1) % phrases.length);
    }, 1800);
    return () => clearTimeout(pause);
  }, [charIndex, phraseIndex]);

  return (
    <section id="hero" className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,184,80,0.16),_transparent_25%),radial-gradient(circle_at_30%_80%,_rgba(255,255,255,0.08),_transparent_20%)]" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-14 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl space-y-8">
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.24em] text-amber-300 shadow-glow"
          >
            Premium SaaS portfolio experience
          </motion.div>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-semibold tracking-[0.02em] text-white sm:text-6xl"
          >
            Build digital products with impact and polish.
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl text-lg leading-8 text-slate-300"
          >
            I create elegant, high-performance applications with the product mindset of a SaaS platform. Smart interactions, reliable backend tracking, and polished motion make every user flow feel premium.
          </motion.p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              onClick={onHire}
              className="rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow shadow-amber-400/30 transition hover:opacity-95"
            >
              Hire Me
            </button>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 px-6 py-3 text-sm text-slate-100 transition hover:border-amber-300"
            >
              Talk to Me
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Projects', value: '12+' },
              { label: 'Skills', value: '10+' },
              { label: 'Experience', value: '4 yrs' }
            ].map((item) => (
              <div key={item.label} className="card-glass rounded-3xl border border-white/10 p-5 shadow-xl shadow-slate-900/20">
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.26em] text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="group relative mx-auto flex w-full max-w-sm flex-col items-center justify-center"
        >
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-amber-400/20 via-transparent to-orange-500/20 blur-3xl opacity-80 transition duration-700 group-hover:scale-105" />
          <div className="relative z-10 flex h-[360px] w-[360px] items-center justify-center rounded-[2.5rem] border border-white/10 bg-slate-950/90 shadow-glow backdrop-blur-xl">
            <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,_rgba(255,184,80,0.2),_transparent_45%)]" />
            <div className="relative flex h-[280px] w-[280px] flex-col items-center justify-center rounded-[2rem] border border-white/5 bg-gradient-to-b from-slate-900 to-slate-800/90 p-6 shadow-2xl shadow-slate-900/40">
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-4xl font-bold text-slate-950 shadow-xl shadow-orange-500/30">
                J
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Hello, I'm</p>
                <p className="mt-2 text-2xl font-semibold text-white">Bajrang</p>
                <p className="mt-4 text-sm text-slate-400">{text}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
