import { motion } from 'framer-motion';

const projects = [
  {
    title: 'SaaS Metrics Dashboard',
    description: 'A responsive analytics dashboard with dynamic charts, filters, and premium UI interactions.',
    tech: ['React', 'Tailwind', 'Node.js'],
    live: '#',
    code: '#'
  },
  {
    title: 'Team Collaboration Hub',
    description: 'A real-time team workspace experience with chat, notifications, and smart content cards.',
    tech: ['Java', 'MongoDB', 'Express'],
    live: '#',
    code: '#'
  },
  {
    title: 'Growth Landing Experience',
    description: 'Landing page with conversion-first interactions, smooth transitions, and polished microcopy.',
    tech: ['React', 'Framer Motion', 'Vite'],
    live: '#',
    code: '#'
  }
];

const ProjectsSection = () => (
  <section id="projects" className="px-6 py-24 sm:px-10 lg:px-14">
    <div className="mx-auto max-w-6xl">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Projects</p>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Projects designed for scale and conversion.</h2>
        <p className="mt-4 max-w-2xl text-slate-400">
          Each case is framed with product intent, smooth motion, and an interface palette that feels premium.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -10, scale: 1.02 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            className="group card-glass overflow-hidden rounded-[2rem] border border-white/10 shadow-xl shadow-slate-950/20"
          >
            <div className="relative h-60 overflow-hidden bg-slate-900">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,184,80,0.2),_transparent_40%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_60%)]" />
              <div className="absolute inset-x-6 top-6 flex items-center justify-between text-white">
                <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.3em] text-amber-300">Preview</span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-200">UI</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              </div>
            </div>
            <div className="space-y-4 p-6">
              <p className="text-slate-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tool) => (
                  <span key={tool} className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-200">
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={project.live}
                  className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-white transition hover:bg-amber-500/15"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  className="rounded-full border border-white/10 bg-slate-900/80 px-4 py-2 text-sm text-white transition hover:bg-amber-500/15"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
