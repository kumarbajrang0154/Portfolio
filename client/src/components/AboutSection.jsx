import { motion } from 'framer-motion';
import { SparklesIcon, BoltIcon, EyeIcon } from '@heroicons/react/24/outline';

const cards = [
  {
    title: 'Product Mindset',
    description: 'I build experiences that feel intuitive, fast, and designed for business value.',
    icon: SparklesIcon
  },
  {
    title: 'Technical Depth',
    description: 'Back-end tracking, notifications, and fast render layers for performance-first web apps.',
    icon: BoltIcon
  },
  {
    title: 'Human Goals',
    description: 'Solutions created to delight users and help teams scale with confidence.',
    icon: EyeIcon
  }
];

const AboutSection = () => (
  <section id="about" className="px-6 py-24 sm:px-10 lg:px-14">
    <div className="mx-auto max-w-6xl">
      <motion.div
        className="mb-10 max-w-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.35em] text-amber-300">About</p>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Design-led thinking with execution focus.</h2>
        <p className="mt-5 text-lg leading-8 text-slate-300">
          I bring products to life with a polished frontend, reliable backend APIs, and thoughtful motion. Every section is designed to feel like a premium SaaS dashboard, not a static brochure.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        {cards.map((card) => (
          <motion.div
            key={card.title}
            className="card-glass rounded-[2rem] border border-white/10 p-8 shadow-xl shadow-slate-900/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-400/10 text-amber-300">
              <card.icon className="h-7 w-7" />
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-white">{card.title}</h3>
            <p className="mt-4 leading-7 text-slate-300">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
