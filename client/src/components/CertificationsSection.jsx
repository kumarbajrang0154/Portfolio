import { motion } from 'framer-motion';

const certifications = [
  { title: 'EF SET English Proficiency', issuer: 'EF English', year: 2024 },
  { title: 'Cyber Security Fundamentals', issuer: 'InfoSec', year: 2024 },
  { title: 'CSS Web Development', issuer: 'HackerEarth', year: 2024 },
  { title: 'Problem Solving & Programming', issuer: 'HackerEarth', year: 2024 },
  { title: 'Hackelrate25', issuer: 'Hackelrate', year: 2025 }
];

const CertificationsSection = () => (
  <section id="certifications" className="px-6 py-24 sm:px-10 lg:px-14">
    <div className="mx-auto max-w-6xl">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Certifications</p>
        <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Professional credentials & verified skills</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {certifications.map((cert) => (
          <motion.div
            key={cert.title}
            whileHover={{ y: -6 }}
            className="card-glass rounded-[2rem] border border-white/10 p-8 shadow-xl shadow-slate-900/20"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-amber-300">{cert.issuer}</p>
            <h3 className="mt-6 text-2xl font-semibold text-white">{cert.title}</h3>
            <p className="mt-4 text-slate-400">{cert.year}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificationsSection;
