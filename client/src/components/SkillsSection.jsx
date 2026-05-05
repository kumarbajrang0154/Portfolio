import { motion } from 'framer-motion';
import { FaJava, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';

const skills = [
  { name: 'Java', level: 90, icon: FaJava },
  { name: 'React', level: 92, icon: FaReact },
  { name: 'Node.js', level: 88, icon: FaNodeJs },
  { name: 'MongoDB', level: 84, icon: FaDatabase }
];

const SkillsSection = () => (
  <section id="skills" className="px-6 py-24 sm:px-10 lg:px-14">
    <div className="mx-auto max-w-6xl">
      <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Skills</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Core technologies powering the experience.</h2>
        </div>
        <p className="max-w-xl text-slate-400">
          Clean architecture and polished interactions powered by modern React, Tailwind, and server-driven state.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className="card-glass rounded-[2rem] border border-white/10 p-7 shadow-xl shadow-slate-900/20"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900 text-amber-300">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                  <p className="text-sm text-slate-400">Proficiency</p>
                </div>
              </div>

              <div className="mt-6 rounded-full bg-white/5 p-1">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="mt-4 text-sm text-slate-400">{skill.level}% ready for production workflows.</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SkillsSection;
