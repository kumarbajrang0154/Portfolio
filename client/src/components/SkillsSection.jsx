import { motion } from 'framer-motion';
import { FaJava, FaReact, FaNodeJs, FaDatabase, FaPython, FaGitAlt } from 'react-icons/fa';
import { SiMysql, SiMongodb, SiJavascript } from 'react-icons/si';

const skillCategories = [
  {
    category: 'Languages',
    skills: [
      { name: 'Java', level: 90, icon: FaJava, description: 'Backend & OOP' },
      { name: 'Python', level: 85, icon: FaPython, description: 'ML & Data' },
      { name: 'JavaScript', level: 88, icon: SiJavascript, description: 'Frontend & Full Stack' }
    ]
  },
  {
    category: 'Web Development',
    skills: [
      { name: 'React', level: 92, icon: FaReact, description: 'Frontend UI' },
      { name: 'Node.js', level: 88, icon: FaNodeJs, description: 'Backend APIs' },
      { name: 'MongoDB', level: 84, icon: SiMongodb, description: 'NoSQL DB' }
    ]
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL', level: 86, icon: SiMysql, description: 'Relational DB' },
      { name: 'REST APIs', level: 89, icon: FaDatabase, description: 'API Design' },
      { name: 'Git/GitHub', level: 90, icon: FaGitAlt, description: 'Version Control' }
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="px-6 py-24 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Technical Stack</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Languages, Technologies & Tools</h2>
          </div>
          <p className="max-w-xl text-slate-400">
            Building full-stack applications with modern technologies and problem-solving mindset.
          </p>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h3 className="mb-6 text-2xl font-bold text-amber-300 uppercase tracking-[0.2em]">
                {category.category}
              </h3>
              <div className="grid gap-6 lg:grid-cols-3">
                {category.skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
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
                        <div className="flex items-center gap-4">
                          <motion.div
                            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-orange-500/20"
                            whileHover={{ scale: 1.1, rotate: 10 }}
                          >
                            <Icon className="h-7 w-7" />
                          </motion.div>
                          <div>
                            <h4 className="text-xl font-bold text-white">{skill.name}</h4>
                            <p className="text-xs uppercase tracking-[0.25em] text-slate-400 mt-0.5">{skill.description}</p>
                          </div>
                        </div>

                        {/* Proficiency bar */}
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="uppercase tracking-[0.25em] text-slate-400">Proficiency</span>
                            <motion.span
                              className="font-bold text-amber-300"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 0.3 + index * 0.1 }}
                            >
                              {skill.level}%
                            </motion.span>
                          </div>
                          <div className="relative h-2.5 overflow-hidden rounded-full bg-white/10 border border-white/5">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 shadow-lg shadow-orange-500/50"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.2 + index * 0.08, duration: 1, ease: 'easeOut' }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 rounded-[2rem] border border-white/10 bg-gradient-to-r from-amber-400/5 to-orange-500/5 p-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <p className="text-slate-300">These technologies power all my projects. Check out how I've applied them below.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
