import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 10000
});

export const sendContactMessage = (payload) => api.post('/contact', payload);
export const fetchDownloadCount = () => api.get('/resume/count');
export const registerResumeDownload = () => api.post('/resume/download');

export default api;
