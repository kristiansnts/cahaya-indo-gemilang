'use client';

import { FormEvent, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get('next') || '/admin/publikasi';

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || 'Login gagal');
        return;
      }
      router.replace(next);
      router.refresh();
    } catch {
      setError('Tidak dapat terhubung ke server');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="admin-card" style={{ maxWidth: 400, margin: '0 auto' }}>
      <h1 style={{ fontFamily: 'var(--serif)', fontSize: 28, color: 'var(--navy)', marginBottom: 8 }}>
        Admin Login
      </h1>
      <p style={{ color: 'var(--gray-500)', fontSize: 14, marginBottom: 24 }}>
        Masuk untuk mengelola dokumentasi publikasi.
      </p>

      {error ? (
        <p style={{ color: '#b42318', fontSize: 13, marginBottom: 16 }}>{error}</p>
      ) : null}

      <label className="admin-label">
        Username
        <input
          className="admin-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          required
        />
      </label>
      <label className="admin-label">
        Password
        <input
          className="admin-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
      </label>
      <button className="btn-primary" type="submit" disabled={loading} style={{ width: '100%', marginTop: 8 }}>
        {loading ? 'Masuk…' : 'Masuk'}
      </button>
    </form>
  );
}
