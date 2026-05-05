import mongoose from 'mongoose';
import DownloadCounter from '../models/DownloadCount.js';
import { getDownloadCountFallback, incrementDownloadCountFallback } from '../fallbackStore.js';

const hasDbConnection = () => mongoose.connection.readyState === 1;

export const getDownloadCount = async (req, res, next) => {
  try {
    if (hasDbConnection()) {
      const record = await DownloadCounter.findOne();
      return res.json({ count: record?.count ?? 0 });
    }
    const count = await getDownloadCountFallback();
    res.json({ count });
  } catch (error) {
    next(error);
  }
};

export const registerResumeDownload = async (req, res, next) => {
  try {
    if (hasDbConnection()) {
      const record = await DownloadCounter.findOneAndUpdate(
        {},
        { $inc: { count: 1 } },
        { new: true, upsert: true }
      );
      return res.json({ success: true, count: record.count });
    }
    const count = await incrementDownloadCountFallback();
    res.json({ success: true, count });
  } catch (error) {
    next(error);
  }
};
