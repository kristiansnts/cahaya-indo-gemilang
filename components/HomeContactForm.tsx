'use client';

import { useState } from 'react';

export default function HomeContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="form-box" style={{ textAlign: 'center', padding: '60px 44px' }}>
        <div style={{ width: 56, height: 56, background: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M5 14l7 7L23 8" stroke="#0b1e3d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 600, color: 'var(--white)', marginBottom: 10 }}>Permintaan Terkirim!</div>
        <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>Tim ahli kami akan menghubungi Anda dalam 1×24 jam kerja.</div>
      </div>
    );
  }

  return (
    <div className="form-box">
      <div className="form-title">Formulir Permintaan Survey</div>
      <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
        <div className="form-row">
          <div className="form-field">
            <label>Nama *</label>
            <input type="text" placeholder="Nama Anda" required />
          </div>
          <div className="form-field">
            <label>Perusahaan *</label>
            <input type="text" placeholder="Nama PT" required />
          </div>
        </div>
        <div className="form-row">
          <div className="form-field">
            <label>Email *</label>
            <input type="email" placeholder="email@perusahaan.com" required />
          </div>
          <div className="form-field">
            <label>WhatsApp *</label>
            <input type="text" placeholder="08xxxxxxxxxx" required />
          </div>
        </div>
        <div className="form-field">
          <label>Layanan yang Dibutuhkan *</label>
          <select required>
            <option value="" disabled>Pilih layanan...</option>
            <option>Pengelolaan Limbah B3</option>
            <option>Pengelolaan TENORM</option>
            <option>Konsultansi K3L/HSE</option>
            <option>Pengembangan Teknologi</option>
          </select>
        </div>
        <div className="form-field">
          <label>Detail Kebutuhan *</label>
          <textarea placeholder="Tulis detail kebutuhan Anda..." required />
        </div>
        <button type="submit" className="btn-submit">Kirim Permintaan</button>
      </form>
    </div>
  );
}
