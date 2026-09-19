import { put, del } from '@vercel/blob';

export async function uploadPublikasiImage(file: File) {
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '-').toLowerCase();
  const pathname = `publikasi/${Date.now()}-${safeName}`;
  const blob = await put(pathname, file, {
    access: 'public',
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });
  return blob.url;
}

export async function deletePublikasiImage(url: string) {
  // Local /publikasi/... seeds are not blob URLs — skip
  if (!url.startsWith('http')) return;
  try {
    await del(url, { token: process.env.BLOB_READ_WRITE_TOKEN });
  } catch {
    // best-effort
  }
}
