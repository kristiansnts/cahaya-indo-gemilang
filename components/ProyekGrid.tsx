'use client';

import { useState } from 'react';

const TABS = ['Semua', 'TENORM', 'Limbah B3', 'Konsultansi HSE', 'Teknologi'] as const;

const projects = [
  {
    iconIdx: 0,
    category: 'TENORM',
    client: 'Perusahaan Migas — Riau',
    title: 'Pemetaan Hotspot Radiasi Jaringan Pipa',
    desc: 'Survei menyeluruh jaringan pipa produksi sepanjang 45 km untuk identifikasi titik akumulasi TENORM dan rekomendasi penanganan.',
    meta: { location: 'Provinsi Riau', duration: '4 Bulan', status: 'Selesai' },
  },
  {
    iconIdx: 1,
    category: 'Limbah B3',
    client: 'Industri Pertambangan — Kalimantan',
    title: 'Sistem Pengelolaan Limbah B3 Tambang Batubara',
    desc: 'Perancangan dan implementasi sistem manajemen limbah B3 terpadu untuk operasi tambang batubara skala besar, mencakup identifikasi, penyimpanan, dan transportasi.',
    meta: { location: 'Kalimantan Selatan', duration: '6 Bulan', status: 'Selesai' },
  },
  {
    iconIdx: 2,
    category: 'Konsultansi HSE',
    client: 'Perusahaan EPC — Jakarta',
    title: 'Penyusunan HSE Plan & Risk Assessment',
    desc: 'Penyusunan dokumen HSE Plan komprehensif dan HIRADC untuk proyek konstruksi fasilitas pemrosesan gas alam.',
    meta: { location: 'Jakarta', duration: '3 Bulan', status: 'Selesai' },
  },
  {
    iconIdx: 3,
    category: 'TENORM',
    client: 'Operator Migas — Sumatera Selatan',
    title: 'Dekontaminasi Peralatan Produksi Migas',
    desc: 'Program dekontaminasi menyeluruh peralatan produksi yang terkontaminasi TENORM, termasuk pengelolaan dan pembuangan limbah radioaktif sesuai regulasi.',
    meta: { location: 'Sumatera Selatan', duration: '5 Bulan', status: 'Selesai' },
  },
  {
    iconIdx: 4,
    category: 'Limbah B3',
    client: 'Industri Kimia — Jawa Barat',
    title: 'Audit & Optimasi Sistem Limbah B3 Pabrik',
    desc: 'Audit menyeluruh sistem pengelolaan limbah B3 pabrik kimia dan penyusunan rekomendasi perbaikan untuk memenuhi standar KLH terbaru.',
    meta: { location: 'Jawa Barat', duration: '2 Bulan', status: 'Selesai' },
  },
  {
    iconIdx: 5,
    category: 'Teknologi',
    client: 'Fasilitas Produksi — Papua',
    title: 'Implementasi Sistem Monitoring Radiasi Real-Time',
    desc: 'Instalasi dan konfigurasi sistem monitoring paparan radiasi terintegrasi dengan dashboard digital untuk pemantauan 24 jam di fasilitas produksi.',
    meta: { location: 'Papua Barat', duration: '3 Bulan', status: 'Selesai' },
  },
];

const icons = [
  <svg key="0" className="project-thumb-icon" viewBox="0 0 56 56" fill="none"><circle cx="28" cy="28" r="22" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.05)"/><circle cx="28" cy="28" r="7" fill="rgba(197,151,58,0.2)"/><line x1="28" y1="6" x2="28" y2="21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="34.5" y1="31.5" x2="47.8" y2="39.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="21.5" y1="31.5" x2="8.2" y2="39.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key="1" className="project-thumb-icon" viewBox="0 0 56 56" fill="none"><path d="M20 12h16l5 10H15l5-10z" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.1)"/><path d="M13 22h30l-4 22H17L13 22z" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.05)"/><line x1="24" y1="28" x2="24" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="32" y1="28" x2="32" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key="2" className="project-thumb-icon" viewBox="0 0 56 56" fill="none"><rect x="12" y="10" width="32" height="36" rx="2" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.05)"/><line x1="20" y1="22" x2="36" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="20" y1="30" x2="36" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="20" y1="38" x2="28" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key="3" className="project-thumb-icon" viewBox="0 0 56 56" fill="none"><path d="M28 8L8 18v14c0 13.25 8.55 25.63 20 28 11.45-2.37 20-14.75 20-28V18L28 8z" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.05)"/><path d="M20 28l6 6 10-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="4" className="project-thumb-icon" viewBox="0 0 56 56" fill="none"><rect x="10" y="24" width="12" height="22" rx="1" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.05)"/><rect x="26" y="16" width="12" height="30" rx="1" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.07)"/><rect x="42" y="10" width="4" height="36" rx="1" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.1)"/><line x1="7" y1="46" x2="49" y2="46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key="5" className="project-thumb-icon" viewBox="0 0 56 56" fill="none"><rect x="8" y="8" width="40" height="30" rx="2" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.05)"/><line x1="20" y1="38" x2="20" y2="48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="36" y1="38" x2="36" y2="48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="14" y1="48" x2="42" y2="48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="28" cy="23" r="6" stroke="currentColor" strokeWidth="1.5"/></svg>,
];

export default function ProyekGrid() {
  const [active, setActive] = useState<string>('Semua');

  const filtered = active === 'Semua'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <>
      <div className="filter-tabs fade-up">
        {TABS.map(tab => (
          <div
            key={tab}
            className={`filter-tab${active === tab ? ' active' : ''}`}
            onClick={() => setActive(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="projects-grid fade-up">
        {filtered.map(project => (
          <div key={project.title} className="project-card">
            <div className="project-thumb">
              <div className="project-thumb-pattern"></div>
              <div className="project-category">{project.category}</div>
              {icons[project.iconIdx]}
            </div>
            <div className="project-body">
              <div className="project-client">{project.client}</div>
              <div className="project-title">{project.title}</div>
              <div className="project-desc">{project.desc}</div>
              <div className="project-meta">
                <div className="project-meta-item"><strong>Lokasi</strong>{project.meta.location}</div>
                <div className="project-meta-item"><strong>Durasi</strong>{project.meta.duration}</div>
                <div className="project-meta-item"><strong>Status</strong>{project.meta.status}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
