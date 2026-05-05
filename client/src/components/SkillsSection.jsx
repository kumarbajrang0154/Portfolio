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
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Modern stack, polished execution.</h2>
        </div>
        <p className="max-w-xl text-slate-400">
          Skill cards that highlight capability and confidence with accelerated motion and soft branding.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              className="glass-card rounded-[2rem] p-7 shadow-xl shadow-slate-950/20"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg shadow-orange-500/20">
                  <Icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{skill.name}</h3>
                  <p className="text-sm text-slate-400">Trusted in fast SaaS product builds.</p>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex items-center justify-between text-sm text-slate-400">
                  <span>Proficiency</span>
                  <span className="font-semibold text-white">{skill.level}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default SkillsSection;
