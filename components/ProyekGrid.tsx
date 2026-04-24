'use client';

import { useState } from 'react';

const TABS = ['Semua', 'TENORM/MIR', 'Limbah B3', 'Konsultansi HSE', 'Teknologi'] as const;

const projects = [
  {
    image: '/images/proyek/radiasi-pipa.png',
    category: 'TENORM/MIR',
    client: 'Perusahaan Migas — Riau',
    title: 'Pemetaan Hotspot Radiasi Jaringan Pipa',
    desc: 'Survei menyeluruh jaringan pipa produksi sepanjang 45 km untuk identifikasi titik akumulasi TENORM/MIR dan rekomendasi penanganan.',
    meta: { location: 'Provinsi Riau', duration: '4 Bulan', status: 'Selesai' },
  },
  {
    image: '/images/proyek/limbah-tambang.png',
    category: 'Limbah B3',
    client: 'Industri Pertambangan — Kalimantan',
    title: 'Sistem Pengelolaan Limbah B3 Tambang Batubara',
    desc: 'Perancangan dan implementasi sistem manajemen limbah B3 terpadu untuk operasi tambang batubara skala besar, mencakup identifikasi, penyimpanan, dan transportasi.',
    meta: { location: 'Kalimantan Selatan', duration: '6 Bulan', status: 'Selesai' },
  },
  {
    image: '/images/proyek/hse-jakarta.png',
    category: 'Konsultansi HSE',
    client: 'Perusahaan EPC — Jakarta',
    title: 'Penyusunan HSE Plan & Risk Assessment',
    desc: 'Penyusunan dokumen HSE Plan komprehensif dan HIRADC untuk proyek konstruksi fasilitas pemrosesan gas alam.',
    meta: { location: 'Jakarta', duration: '3 Bulan', status: 'Selesai' },
  },
  {
    image: '/images/proyek/dekontaminasi-migas.png',
    category: 'TENORM/MIR',
    client: 'Operator Migas — Sumatera Selatan',
    title: 'Dekontaminasi Peralatan Produksi Migas',
    desc: 'Program dekontaminasi menyeluruh peralatan produksi yang terkontaminasi TENORM/MIR, termasuk pengelolaan dan pembuangan limbah radioaktif sesuai regulasi.',
    meta: { location: 'Sumatera Selatan', duration: '5 Bulan', status: 'Selesai' },
  },
  {
    image: '/images/proyek/audit-limbah.png',
    category: 'Limbah B3',
    client: 'Industri Kimia — Jawa Barat',
    title: 'Audit & Optimasi Sistem Limbah B3 Pabrik',
    desc: 'Audit menyeluruh sistem pengelolaan limbah B3 pabrik kimia dan penyusunan rekomendasi perbaikan untuk memenuhi standar KLH terbaru.',
    meta: { location: 'Jawa Barat', duration: '2 Bulan', status: 'Selesai' },
  },
  {
    image: '/images/proyek/monitoring-radiasi.png',
    category: 'Teknologi',
    client: 'Fasilitas Produksi — Papua',
    title: 'Implementasi Sistem Monitoring Radiasi Real-Time',
    desc: 'Instalasi dan konfigurasi sistem monitoring paparan radiasi terintegrasi dengan dashboard digital untuk pemantauan 24 jam di fasilitas produksi.',
    meta: { location: 'Papua Barat', duration: '3 Bulan', status: 'Selesai' },
  },
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
            <div className="project-thumb" style={{ backgroundColor: '#0b1e3d', overflow: 'hidden' }}>
              <img 
                src={project.image} 
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="project-category">{project.category}</div>
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
