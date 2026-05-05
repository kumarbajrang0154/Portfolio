import fs from 'fs';
import path from 'path';

const storePath = path.resolve(path.dirname(new URL(import.meta.url).pathname), 'dev-store.json');

const ensureStore = async () => {
  try {
    await fs.promises.access(storePath, fs.constants.R_OK | fs.constants.W_OK);
  } catch {
    const initial = { messages: [], downloadCount: 0 };
    await fs.promises.writeFile(storePath, JSON.stringify(initial, null, 2), 'utf-8');
  }
};

const readStore = async () => {
  await ensureStore();
  const payload = await fs.promises.readFile(storePath, 'utf-8');
  return JSON.parse(payload);
};

const writeStore = async (data) => {
  await fs.promises.writeFile(storePath, JSON.stringify(data, null, 2), 'utf-8');
};

export const saveContactFallback = async (contact) => {
  const store = await readStore();
  store.messages.push({ ...contact, createdAt: new Date().toISOString() });
  await writeStore(store);
  return store;
};

export const getDownloadCountFallback = async () => {
  const store = await readStore();
  return store.downloadCount ?? 0;
};

export const incrementDownloadCountFallback = async () => {
  const store = await readStore();
  store.downloadCount = (store.downloadCount ?? 0) + 1;
  await writeStore(store);
  return store.downloadCount;
};
