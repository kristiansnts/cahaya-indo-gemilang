'use client';

import { useState } from 'react';

export default function SurveyForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="form-box-full" style={{ textAlign: 'center', padding: '60px 52px' }}>
        <div style={{ width: 56, height: 56, background: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M5 14l7 7L23 8" stroke="#0b1e3d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <div style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 600, color: 'var(--white)', marginBottom: 10 }}>Permintaan Terkirim!</div>
        <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>Tim ahli kami akan menghubungi Anda dalam 1×24 jam kerja melalui WhatsApp atau email yang Anda daftarkan.</div>
      </div>
    );
  }

  return (
    <div className="form-box-full">
      <div className="form-box-title">Formulir Permintaan Survey</div>
      <div className="form-box-sub">Isi formulir berikut dan tim kami akan menghubungi Anda dalam 1×24 jam kerja.</div>
      <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
        <div className="form-step-label">Informasi Pemohon</div>
        <div className="form-grid-2" style={{ marginTop: 14 }}>
          <div className="form-field">
            <label>Nama Lengkap *</label>
            <input type="text" placeholder="Nama Anda" required />
          </div>
          <div className="form-field">
            <label>Jabatan</label>
            <input type="text" placeholder="Manager HSE, dll." />
          </div>
        </div>
        <div className="form-grid-2" style={{ marginTop: 14 }}>
          <div className="form-field">
            <label>Nama Perusahaan *</label>
            <input type="text" placeholder="PT. ..." required />
          </div>
          <div className="form-field">
            <label>Sektor Industri *</label>
            <select required defaultValue="">
              <option value="" disabled>Pilih sektor...</option>
              <option>Minyak &amp; Gas (Migas)</option>
              <option>Pertambangan (Minerba)</option>
              <option>Industri Kimia</option>
              <option>Konstruksi</option>
              <option>Lainnya</option>
            </select>
          </div>
        </div>
        <div className="form-divider" />
        <div className="form-step-label">Informasi Kontak</div>
        <div className="form-grid-2" style={{ marginTop: 14 }}>
          <div className="form-field">
            <label>Email *</label>
            <input type="email" placeholder="email@perusahaan.com" required />
          </div>
          <div className="form-field">
            <label>Nomor WhatsApp *</label>
            <input type="tel" placeholder="08xxxxxxxxxx" required />
          </div>
        </div>
        <div className="form-divider" />
        <div className="form-step-label">Detail Kebutuhan</div>
        <div className="form-field" style={{ marginTop: 14 }}>
          <label>Layanan yang Dibutuhkan *</label>
          <select required defaultValue="">
            <option value="" disabled>Pilih layanan...</option>
            <option>Pengelolaan Limbah B3</option>
            <option>Survei &amp; Pengelolaan TENORM/MIR</option>
            <option>Konsultansi K3L/HSE</option>
            <option>Sistem Monitoring Radiasi</option>
            <option>Audit HSE</option>
            <option>Lainnya</option>
          </select>
        </div>
        <div className="form-field" style={{ marginTop: 14 }}>
          <label>Lokasi Proyek</label>
          <input type="text" placeholder="Provinsi / Kabupaten / Kota" />
        </div>
        <div className="form-field" style={{ marginTop: 14 }}>
          <label>Detail Kebutuhan *</label>
          <textarea placeholder="Deskripsikan kebutuhan Anda secara singkat..." required />
        </div>
        <button type="submit" className="form-submit">Kirim Permintaan Survey</button>
        <div className="form-note">Data Anda aman dan hanya digunakan untuk keperluan konsultasi.</div>
      </form>
    </div>
  );
}
