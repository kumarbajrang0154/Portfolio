import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Preloader from './components/Preloader.jsx';
import ScrollProgressBar from './components/ScrollProgressBar.jsx';
import CursorGlow from './components/CursorGlow.jsx';
import { fetchDownloadCount, registerResumeDownload, sendContactMessage } from './api.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [resumeCount, setResumeCount] = useState(0);
  const [toast, setToast] = useState('');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    fetchDownloadCount()
      .then((response) => setResumeCount(response.data.count || 0))
      .catch(() => setResumeCount(0));
    const id = window.setTimeout(() => setIsLoading(false), 1300);
    return () => window.clearTimeout(id);
  }, []);

  const handleContactSubmit = async (values) => {
    try {
      await sendContactMessage(values);
      setToast('Message sent successfully. I will reply soon.');
      return true;
    } catch (error) {
      setToast('Something went wrong. Please try again.');
      return false;
    }
  };

  const handleResumeDownload = async () => {
    try {
      await registerResumeDownload();
      setResumeCount((prev) => prev + 1);
      window.open('/resume/resume.pdf', '_blank');
    } catch (error) {
      setToast('Could not register download.');
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-brand-900 text-slate-100 overflow-x-hidden">
        <ScrollProgressBar />
        <CursorGlow />
        <AnimatePresence>{isLoading && <Preloader />}</AnimatePresence>
        <Navbar
          onHire={() => setModalOpen(true)}
          theme={theme}
          onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
        />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                resumeCount={resumeCount}
                handleResumeDownload={handleResumeDownload}
                handleContactSubmit={handleContactSubmit}
                toast={toast}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
