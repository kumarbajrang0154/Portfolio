import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection.jsx';
import AboutSection from '../components/AboutSection.jsx';
import SkillsSection from '../components/SkillsSection.jsx';
import ProjectsSection from '../components/ProjectsSection.jsx';
import ExperienceSection from '../components/ExperienceSection.jsx';
import EducationSection from '../components/EducationSection.jsx';
import CertificationsSection from '../components/CertificationsSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import HireModal from '../components/HireModal.jsx';

const Home = ({ modalOpen, setModalOpen, resumeCount, handleResumeDownload, handleContactSubmit, toast }) => (
  <main className="relative">
    <HeroSection onHire={() => setModalOpen(true)} />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <ExperienceSection />
    <EducationSection />
    <CertificationsSection />
    <ContactSection onSubmit={handleContactSubmit} toast={toast} />
    <HireModal
      open={modalOpen}
      onClose={() => setModalOpen(false)}
      downloadCount={resumeCount}
      onDownload={handleResumeDownload}
    />
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="border-t border-slate-800 bg-black/30 backdrop-blur-xl py-8 text-center text-sm text-slate-400"
    >
      Built with modern technologies and premium design — Full Stack Developer | KPRIET B.E CSE
    </motion.footer>
  </main>
);

export default Home;
