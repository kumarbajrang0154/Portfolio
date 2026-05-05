import { motion } from 'framer-motion';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' }
];

const Navbar = ({ onHire, theme, onToggleTheme }) => {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="sticky top-0 z-50 mx-auto w-full border-b border-white/10 bg-black/40 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm text-slate-300 md:px-10">
        <a href="#hero" className="font-semibold tracking-[0.3em] text-amber-300">
          SAAS PORTFOLIO
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-amber-300"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={onToggleTheme}
            className="rounded-full border border-white/10 bg-slate-900/80 p-2 text-slate-100 transition hover:border-amber-300"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </button>
          <button
            onClick={onHire}
            className="rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-2 font-semibold text-slate-950 shadow-glow shadow-amber-400/20 transition hover:opacity-95"
          >
            Hire Me
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
