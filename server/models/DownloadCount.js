import mongoose from 'mongoose';

const downloadCountSchema = new mongoose.Schema({
  count: { type: Number, default: 0 }
});

export default mongoose.model('DownloadCounter', downloadCountSchema);
