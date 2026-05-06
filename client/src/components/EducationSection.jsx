import { motion } from 'framer-motion';
import { AcademicCapIcon, StarIcon } from '@heroicons/react/24/outline';

const education = [
  {
    degree: 'B.E Computer Science and Engineering',
    institution: 'KPR Institute of Engineering and Technology',
    period: '2022 – 2026',
    cgpa: '7.9',
    description: 'Full-time undergraduate program with focus on software development, data structures, algorithms, and system design.',
    highlights: [
      'Strong foundation in core CS concepts and problem solving',
      'Active participation in coding clubs and technical events',
      'Completed multiple projects using modern web technologies',
      'Internship experience during academic tenure'
    ],
    color: 'amber'
  }
];

const EducationSection = () => (
  <section id="education" className="px-6 py-24 sm:px-10 lg:px-14">
    <div className="mx-auto max-w-6xl">
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Education</p>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Academic Foundation & Learning</h2>
      </motion.div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/50 p-8 shadow-xl shadow-slate-900/20 hover:border-amber-300/20 transition-all duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            {/* Hover background glow */}
            <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative space-y-6">
              <div className="flex items-start justify-between gap-6">
                <div className="flex items-start gap-5">
                  <motion.div
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-orange-500/20 flex-shrink-0"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <AcademicCapIcon className="h-7 w-7" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                    <p className="text-amber-300 font-semibold mt-1">{edu.institution}</p>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <StarIcon className="h-5 w-5 text-amber-300" />
                    <span className="text-sm font-bold text-amber-300">{edu.cgpa} CGPA</span>
                  </div>
                  <span className="text-xs text-slate-400 font-medium">{edu.period}</span>
                </div>
              </div>

              <p className="text-slate-300 leading-7">{edu.description}</p>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-amber-300 mb-4 font-semibold">Academic Highlights</p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {edu.highlights.map((highlight, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-start gap-3 text-slate-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                    >
                      <span className="mt-1 flex h-2 w-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex-shrink-0" />
                      <span className="text-sm leading-6">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
