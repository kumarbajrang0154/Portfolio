import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';
import resumeRoutes from './routes/resumeRoutes.js';
import { getDownloadCount, registerResumeDownload } from './controllers/resumeController.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors({ origin: true }));
app.use(express.json());
app.use('/api/contact', contactRoutes);
app.use('/api/resume', resumeRoutes);
app.get('/api/resume-download-count', getDownloadCount);
app.post('/api/resume-download', registerResumeDownload);

app.get('/api/health', (req, res) => res.json({ status: 'ok', timestamp: Date.now() }));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message || 'Server error' });
});

if (MONGO_URI) {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log('MongoDB connected');
      app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((error) => {
      console.error('MongoDB connection failed:', error.message);
      process.exit(1);
    });
} else {
  console.warn('MONGO_URI is not configured. Server will start without database connection.');
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}
