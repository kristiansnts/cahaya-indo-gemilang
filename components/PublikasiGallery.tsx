'use client';

import { useState } from 'react';

const TABS = ['Semua', 'Kegiatan', 'Produk Alkes'] as const;

const items = [
  {
    image: '/publikasi/produk-alkes/verifikasi-oksigen-sentral.jpeg',
    category: 'Produk Alkes',
    title: 'Verifikasi produk Alkes (Sistem Oksigen Sentral)',
  },
  {
    image: '/publikasi/produk-alkes/review-hiperbarik.jpeg',
    category: 'Produk Alkes',
    title: 'Review ruang pasien terapi oksigen hiperbarik',
  },
  {
    image: '/publikasi/produk-alkes/verifikasi-xray-unit.jpeg',
    category: 'Produk Alkes',
    title: 'Verifikasi produk Alkes (X-ray unit)',
  },
  {
    image: '/publikasi/rakor-limbah-b3-mth-square.jpeg',
    category: 'Kegiatan',
    title: 'Rakor PT CIG Bidang Pengelolaan Limbah B3 Terkontaminasi Radioaktif (di MTH Square - Jakarta, Akhir 2025)',
  },
  {
    image: '/publikasi/konsultasi-perizinan-tenorm-bapeten.jpeg',
    category: 'Kegiatan',
    title: 'PT CIG bersama MasPALA Indonesia konsultasi Perizinan Pengelolaan TENORM (MIR) di BAPETEN',
  },
  {
    image: '/publikasi/kerjasama-maspala-gatot-subroto.jpeg',
    category: 'Kegiatan',
    title: 'Kerjasama PT CIG & MasPALA Indonesia di JL. Gatot Subroto - Jakarta',
  },
  {
    image: '/publikasi/arahan-senior-advisor-dirut.jpeg',
    category: 'Kegiatan',
    title: 'Arahan Senior Advisor kepada Dirut PT CIG',
  },
  {
    image: '/publikasi/rakor-bapeten-cemaran-radioaktif.jpeg',
    category: 'Kegiatan',
    title: 'PT CIG bersama Kepala BAPETEN pada Undangan Rakor Pencegahan & Penanggulangan Cemaran Radioaktif, RUU EBT, termasuk PLTN Terapung di BAPETEN',
  },
  {
    image: '/publikasi/verifikasi-kerjasama-blora-patra.jpeg',
    category: 'Kegiatan',
    title: 'PT CIG bersama MasPALA Indonesia verifikasi kerjasama Bidang Pengelolaan Limbah B3 Terkontaminasi TENORM di PT Blora Patra Energy, Blora - Jateng',
  },
  {
    image: '/publikasi/paparan-kerjasama-pemprov-blora.jpeg',
    category: 'Kegiatan',
    title: 'Paparan MasPALA Indonesia bersama PT CIG dalam rangka memulai Kerjasama dengan Pemprov Kabupaten Blora, Jateng',
  },
  {
    image: '/publikasi/rakor-nhm-pengembangan-ebt.jpeg',
    category: 'Kegiatan',
    title: 'Rakor PT CIG, MasPALA Indonesia & PT NHM tentang Pengembangan EBT, termasuk PLTN',
  },
] as const;

export default function PublikasiGallery() {
  const [active, setActive] = useState<string>('Semua');

  const filtered = active === 'Semua'
    ? items
    : items.filter(item => item.category === active);

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

      {filtered.length > 0 ? (
        <div className="projects-grid fade-up">
          {filtered.map(item => (
            <div key={item.title} className="project-card">
              <div className="project-thumb" style={{ backgroundColor: '#0b1e3d', overflow: 'hidden' }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div className="project-category">{item.category}</div>
              </div>
              <div className="project-body">
                <div className="project-title" style={{ fontSize: 18, marginBottom: 0 }}>{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: 'var(--gray-500)', padding: '48px 0', textAlign: 'center', fontSize: 14 }}>
          Tidak ada dokumentasi untuk kategori ini.
        </p>
      )}
    </>
  );
}
