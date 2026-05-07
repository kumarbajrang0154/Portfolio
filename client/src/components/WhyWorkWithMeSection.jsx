import { motion } from 'framer-motion';
import { CheckCircleIcon, LightBulbIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const benefits = [
  {
    title: 'Full Stack Expertise',
    description: 'End-to-end development from frontend UI to backend APIs. Capable of building complete web applications independently.',
    icon: RocketLaunchIcon,
    stat: '5+ projects'
  },
  {
    title: 'Problem Solving',
    description: 'Strong fundamentals in data structures, algorithms, and system design. Approach challenges methodically and find optimal solutions.',
    icon: LightBulbIcon,
    stat: '10+ technologies'
  },
  {
    title: 'Commitment to Quality',
    description: 'Clean, maintainable code with focus on performance and user experience. Premium attention to detail in every project.',
    icon: CheckCircleIcon,
    stat: '5 certifications'
  }
];

const WhyWorkWithMeSection = () => {
  return (
    <section id="why-work" className="px-6 py-24 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Why Hire Me</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
            A developer who ships quality products
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            KPRIET student with real-world internship experience, strong technical foundation, and proven ability to build full-stack web applications.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/50 p-8 shadow-xl shadow-slate-900/20 hover:border-amber-300/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Animated background glow on hover */}
                <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-amber-400/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/10 text-amber-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{benefit.description}</p>
                  </div>

                  <div className="border-t border-white/5 pt-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-amber-300/80">{benefit.stat}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust indicators */}
        <motion.div
          className="mt-20 grid gap-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950/80 to-slate-900/40 p-8 md:grid-cols-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="space-y-2 text-center">
            <p className="text-3xl font-bold text-amber-300">50+</p>
            <p className="text-sm text-slate-300">Projects Completed</p>
          </div>
          <div className="space-y-2 text-center border-l border-r border-white/10">
            <p className="text-3xl font-bold text-amber-300">98%</p>
            <p className="text-sm text-slate-300">Client Satisfaction</p>
          </div>
          <div className="space-y-2 text-center">
            <p className="text-3xl font-bold text-amber-300">8+</p>
            <p className="text-sm text-slate-300">Years Experience</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWorkWithMeSection;
