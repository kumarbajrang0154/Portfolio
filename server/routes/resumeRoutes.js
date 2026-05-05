import express from 'express';
import { getDownloadCount, registerResumeDownload } from '../controllers/resumeController.js';

const router = express.Router();
router.get('/count', getDownloadCount);
router.post('/download', registerResumeDownload);
export default router;
