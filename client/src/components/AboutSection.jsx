import { motion } from 'framer-motion';
import { SparklesIcon, BoltIcon, EyeIcon } from '@heroicons/react/24/outline';

const cards = [
  {
    title: 'Full Stack Development',
    description: 'Building complete web applications from frontend UI to backend APIs. Experienced in both client-side and server-side development.',
    icon: SparklesIcon,
    color: 'amber'
  },
  {
    title: 'Scalable Architecture',
    description: 'Designing systems that grow with demand. Strong fundamentals in database design, API architecture, and performance optimization.',
    icon: BoltIcon,
    color: 'orange'
  },
  {
    title: 'Problem Solving',
    description: 'Learning through projects and real-world internship experience. Passionate about writing clean, maintainable code and continuous improvement.',
    icon: EyeIcon,
    color: 'emerald'
  }
];

const colorMap = {
  amber: 'from-amber-400 to-orange-500 shadow-orange-500/20',
  orange: 'from-orange-400 to-red-500 shadow-red-500/20',
  emerald: 'from-emerald-400 to-teal-500 shadow-teal-500/20'
};

const AboutSection = () => (
  <section id="about" className="px-6 py-24 sm:px-10 lg:px-14">
    <div className="mx-auto max-w-6xl">
      <motion.div
        className="mb-16 max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.35em] text-amber-300">About Me</p>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">KPRIET CSE Student | Full Stack Developer</h2>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          I'm a Computer Science student at KPRIET (CGPA: 7.9) passionate about building production-ready web applications. Currently interning at Oasis Infobyte, gaining hands-on experience in web development and UI/UX design. I believe in learning through projects and real-world applications.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/50 p-8 shadow-xl shadow-slate-900/20 hover:border-amber-300/20 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* Hover background glow */}
              <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative space-y-6">
                <motion.div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${colorMap[card.color]} text-white shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <Icon className="h-7 w-7" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-300">{card.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default AboutSection;
