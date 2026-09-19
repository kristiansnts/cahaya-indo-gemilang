'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

type Item = {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  createdAt: string;
};

export default function AdminPublikasiClient({ initialItems }: { initialItems: Item[] }) {
  const router = useRouter();
  const [items, setItems] = useState(initialItems);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Kegiatan');
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.replace('/admin/login');
    router.refresh();
  }

  async function onUpload(e: FormEvent) {
    e.preventDefault();
    if (!file) {
      setError('Pilih file gambar');
      return;
    }
    setBusy(true);
    setError('');
    try {
      const form = new FormData();
      form.set('title', title);
      form.set('category', category);
      form.set('file', file);
      const res = await fetch('/api/admin/publikasi', { method: 'POST', body: form });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || 'Upload gagal');
        return;
      }
      setItems((prev) => [data.item, ...prev]);
      setTitle('');
      setFile(null);
      (e.target as HTMLFormElement).reset();
      setCategory('Kegiatan');
      router.refresh();
    } catch {
      setError('Tidak dapat terhubung ke server');
    } finally {
      setBusy(false);
    }
  }

  async function onDelete(id: string) {
    if (!confirm('Hapus dokumentasi ini?')) return;
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/publikasi?id=${encodeURIComponent(id)}`, {
        method: 'DELETE',
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || 'Gagal menghapus');
        return;
      }
      setItems((prev) => prev.filter((i) => i.id !== id));
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="admin-shell">
      <div className="admin-header">
        <div>
          <div className="section-eyebrow">Admin</div>
          <h1 className="section-heading" style={{ marginBottom: 0 }}>Publikasi</h1>
        </div>
        <button type="button" className="btn-secondary" onClick={logout}>
          Keluar
        </button>
      </div>

      <form className="admin-card" onSubmit={onUpload} style={{ marginBottom: 32 }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--navy)', marginBottom: 16 }}>
          Upload baru
        </h2>
        {error ? <p style={{ color: '#b42318', fontSize: 13, marginBottom: 12 }}>{error}</p> : null}
        <label className="admin-label">
          Judul
          <input
            className="admin-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label className="admin-label">
          Kategori
          <select
            className="admin-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Kegiatan">Kegiatan</option>
            <option value="Produk Alkes">Produk Alkes</option>
          </select>
        </label>
        <label className="admin-label">
          Gambar
          <input
            className="admin-input"
            type="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            required
          />
        </label>
        <button className="btn-primary" type="submit" disabled={busy}>
          {busy ? 'Menyimpan…' : 'Upload & Simpan'}
        </button>
      </form>

      <div className="admin-card">
        <h2 style={{ fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--navy)', marginBottom: 16 }}>
          Daftar ({items.length})
        </h2>
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Preview</th>
                <th>Judul</th>
                <th>Kategori</th>
                <th>Tanggal</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.imageUrl} alt="" className="admin-thumb" />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.category}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>
                    {new Date(item.createdAt).toLocaleDateString('id-ID', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="admin-danger"
                      disabled={busy}
                      onClick={() => onDelete(item.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
              {items.length === 0 ? (
                <tr>
                  <td colSpan={5} style={{ textAlign: 'center', color: 'var(--gray-500)' }}>
                    Belum ada data
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
