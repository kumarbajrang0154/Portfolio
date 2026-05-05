import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactSection = ({ onSubmit, toast }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('pending');
    const success = await onSubmit(form);
    setStatus(success ? 'success' : 'error');
    if (success) {
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="px-6 py-24 sm:px-10 lg:px-14">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Let’s build something exceptional together.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Send a message and I’ll respond with next steps to get your project launched with production-ready polish.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="card-glass rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-slate-900/20"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <label className="space-y-2 text-sm text-slate-300">
              <span>Name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-amber-300"
                placeholder="Your full name"
                required
              />
            </label>
            <label className="space-y-2 text-sm text-slate-300">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-amber-300"
                placeholder="you@example.com"
                required
              />
            </label>
          </div>
          <label className="mt-6 space-y-2 text-sm text-slate-300">
            <span>Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="6"
              className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none transition focus:border-amber-300"
              placeholder="Tell me about your project."
              required
            />
          </label>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={status === 'pending'}
              className="rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow shadow-amber-500/20 transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === 'pending' ? 'Sending...' : 'Send Message'}
            </button>
            <p className="text-sm text-slate-400">Fast response, fully tracked and production-ready.</p>
          </div>
          {toast && (
            <p className="mt-6 rounded-3xl border border-amber-300/20 bg-amber-400/10 px-5 py-4 text-sm text-amber-200">
              {toast}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
