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
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">High-impact builds with refined product polish.</h2>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group card-glass overflow-hidden rounded-[2rem] border border-white/10 shadow-xl shadow-slate-900/20"
          >
            <div className="h-52 bg-gradient-to-br from-orange-500/15 via-transparent to-amber-400/10 p-6">
              <div className="flex h-full flex-col justify-between rounded-[1.6rem] bg-slate-950/90 p-6 text-white shadow-inner shadow-slate-900/20">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-amber-300">Featured</p>
                  <h3 className="mt-4 text-2xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-sm text-slate-300">{project.description}</p>
              </div>
            </div>
            <div className="space-y-4 p-6">
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
                  className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-white transition hover:bg-amber-500/10"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-white transition hover:bg-amber-500/10"
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
