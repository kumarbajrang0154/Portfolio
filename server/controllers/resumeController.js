import DownloadCounter from '../models/DownloadCount.js';

export const getDownloadCount = async (req, res, next) => {
  try {
    const record = await DownloadCounter.findOne();
    res.json({ count: record?.count ?? 0 });
  } catch (error) {
    next(error);
  }
};

export const registerResumeDownload = async (req, res, next) => {
  try {
    const record = await DownloadCounter.findOneAndUpdate(
      {},
      { $inc: { count: 1 } },
      { new: true, upsert: true }
    );
    res.json({ success: true, count: record.count });
  } catch (error) {
    next(error);
  }
};
