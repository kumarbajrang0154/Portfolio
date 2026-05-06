import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon, PlayIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    title: 'Plant Disease Detection',
    description: 'AI/ML-based plant disease detection system using image classification. Built with CNN and data augmentation for accurate disease identification.',
    tech: ['Python', 'TensorFlow', 'CNN', 'Image Processing'],
    live: '#',
    code: '#',
    metrics: [
      { label: 'Accuracy', value: '92%' },
      { label: 'Classes', value: '38' },
      { label: 'Model', value: 'CNN' }
    ],
    result: 'AI-Powered Disease Detection',
    resultColor: 'emerald'
  },
  {
    title: 'TravelPro',
    description: 'Responsive travel planning application with destination search, itinerary management, and premium UI/UX. Built with modern web technologies.',
    tech: ['React', 'MongoDB', 'Express', 'Node.js'],
    live: '#',
    code: '#',
    metrics: [
      { label: 'Pages', value: '12+' },
      { label: 'Responsive', value: 'Yes' },
      { label: 'Performance', value: '95' }
    ],
    result: 'Travel Planning App',
    resultColor: 'blue'
  },
  {
    title: 'Smart Attendance System',
    description: 'Dashboard UI for attendance visualization and management. Features real-time analytics, attendance tracking, and scalable architecture.',
    tech: ['React', 'MySQL', 'Node.js', 'Charts.js'],
    live: '#',
    code: '#',
    metrics: [
      { label: 'Features', value: '10+' },
      { label: 'Database', value: 'MySQL' },
      { label: 'Analytics', value: 'Real-time' }
    ],
    result: 'Attendance Dashboard',
    resultColor: 'amber'
  }
];

const colorMap = {
  emerald: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-300',
  blue: 'border-blue-400/30 bg-blue-400/10 text-blue-300',
  amber: 'border-amber-400/30 bg-amber-400/10 text-amber-300'
};

const ProjectsSection = () => (
  <section id="projects" className="px-6 py-24 sm:px-10 lg:px-14">
    <div className="mx-auto max-w-6xl">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Featured Work</p>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
          Premium products that drive real results
        </h2>
        <p className="mt-4 max-w-2xl text-slate-400">
          Each project is a case study in premium execution. Real metrics, real impact, real success stories.
        </p>
      </motion.div>

      <div className="grid gap-8 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/50 shadow-xl shadow-slate-900/20 hover:border-amber-300/20 transition-all duration-300"
          >
            {/* Hover background glow */}
            <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Project preview area */}
            <div className="relative h-72 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-950 group-hover:scale-105 transition-transform duration-300">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,184,80,0.15),_transparent_50%)] group-hover:opacity-100 opacity-50 transition-opacity" />
              
              {/* Video preview placeholder with play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-md transition-all group-hover:border-white/60 group-hover:bg-white/20"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <PlayIcon className="h-6 w-6 text-white ml-0.5" />
                </motion.button>
              </div>

              {/* Badge */}
              <div className="absolute inset-x-4 top-4 flex items-center justify-between">
                <span className="rounded-full bg-slate-950/70 px-3 py-1 text-xs uppercase tracking-[0.3em] text-amber-300">
                  Case Study
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-200">
                  Live
                </span>
              </div>
            </div>

            <div className="relative space-y-5 p-6">
              {/* Title and description */}
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 leading-6">{project.description}</p>
              </div>

              {/* Result badge */}
              <div className={`inline-block rounded-full border px-4 py-2 text-xs font-semibold ${colorMap[project.resultColor]}`}>
                {project.result}
              </div>

              {/* Metrics grid */}
              <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="text-center">
                    <p className="text-sm font-bold text-amber-300">{metric.value}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-400">{metric.label}</p>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300 hover:border-amber-300/20 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <motion.a
                  href={project.live}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-white transition-all hover:border-amber-300 hover:bg-amber-300/10 group-hover:border-amber-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Live Demo
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href={project.code}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-900/80 px-4 py-3 text-sm font-semibold text-white transition-all hover:border-amber-300 hover:bg-amber-300/10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  GitHub
                  <ArrowTopRightOnSquareIcon className="h-4 w-4" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        className="mt-16 rounded-[2rem] border border-white/10 bg-gradient-to-r from-amber-400/10 to-orange-500/10 p-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold text-white">Ready to see more?</h3>
        <p className="mt-3 text-slate-300">
          Check out my portfolio for 10+ additional case studies showcasing real-world impact.
        </p>
        <motion.a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-3 font-semibold text-slate-950 shadow-glow hover:shadow-lg transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start a Project
          <ArrowTopRightOnSquareIcon className="h-5 w-5" />
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
