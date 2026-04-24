'use client';

import { useState } from 'react';
import Link from 'next/link';

const TABS = ['Semua', 'TENORM/MIR', 'Limbah B3', 'HSE', 'Regulasi', 'Teknologi', 'Studi Kasus'] as const;

const articleCards = [
  {
    image: '/images/artikel/survei-radiasi.png',
    tag: 'TENORM/MIR',
    category: 'Keselamatan Radiasi',
    title: 'Metode Survei Radiasi Lapangan untuk Operator Migas',
    excerpt: 'Teknik dan prosedur standar untuk melakukan survei radiasi di lingkungan industri migas, termasuk pemilihan instrumen dan interpretasi data lapangan.',
    date: 'Februari 2026',
  },
  {
    image: '/images/artikel/klasifikasi-limbah.png',
    tag: 'Limbah B3',
    category: 'Pengelolaan Limbah',
    title: 'Klasifikasi Limbah B3 Industri: Panduan Identifikasi dan Penanganan',
    excerpt: 'Panduan praktis identifikasi kategori limbah B3 sesuai PP 101/2014 dan prosedur penanganan yang benar untuk setiap jenis limbah industri.',
    date: 'Januari 2026',
  },
  {
    image: '/images/artikel/hiradc-migas.png',
    tag: 'HSE',
    category: 'K3L & HSE',
    title: 'Penyusunan HIRADC yang Efektif untuk Proyek Konstruksi Fasilitas Migas',
    excerpt: 'Langkah-langkah sistematis penyusunan dokumen Hazard Identification, Risk Assessment and Determining Control (HIRADC) yang memenuhi standar regulasi nasional.',
    date: 'Desember 2025',
  },
  {
    image: '/images/artikel/peraturan-klh.png',
    tag: 'Regulasi',
    category: 'Regulasi',
    title: 'Update Peraturan KLH 2025: Implikasi bagi Pengelola Limbah B3 Industri',
    excerpt: 'Ringkasan perubahan regulasi pengelolaan limbah B3 terbaru dari Kementerian Lingkungan Hidup dan langkah adaptasi yang perlu diambil perusahaan.',
    date: 'November 2025',
  },
  {
    image: '/images/artikel/monitoring-digital.png',
    tag: 'Teknologi',
    category: 'Inovasi Teknologi',
    title: 'Sistem Monitoring Radiasi Digital: Tren dan Implementasi di Industri',
    excerpt: 'Perkembangan teknologi sistem monitoring radiasi berbasis IoT dan bagaimana integrasi dengan sistem manajemen keselamatan industri modern.',
    date: 'Oktober 2025',
  },
  {
    image: '/images/artikel/dekontaminasi-berhasil.png',
    tag: 'Studi Kasus',
    category: 'Studi Kasus',
    title: 'Studi Kasus: Dekontaminasi Berhasil di Fasilitas Produksi Migas Kalimantan',
    excerpt: 'Dokumentasi proses and hasil program dekontaminasi TENORM/MIR komprehensif yang berhasil memulihkan fasilitas produksi ke standar operasi normal.',
    date: 'September 2025',
  },
];

const categories = [
  { name: 'Keselamatan Radiasi', count: 1 },
  { name: 'Pengelolaan Limbah', count: 1 },
  { name: 'K3L & HSE', count: 1 },
  { name: 'Regulasi', count: 1 },
  { name: 'Inovasi Teknologi', count: 1 },
  { name: 'Studi Kasus', count: 1 },
];

const popularTags = ['TENORM/MIR', 'Limbah B3', 'HSE', 'Regulasi', 'Teknologi', 'Studi Kasus'];

export default function ArtikelGrid() {
  const [active, setActive] = useState<string>('Semua');

  const filtered = active === 'Semua'
    ? articleCards
    : articleCards.filter(a => a.tag === active || a.category === active);

  function select(value: string) {
    setActive(prev => prev === value ? 'Semua' : value);
  }

  return (
    <div className="content-layout fade-up">
      <div>
        <div className="section-eyebrow">Semua Artikel</div>
        <h2 className="section-heading" style={{ marginBottom: 40 }}>Publikasi Kami</h2>

        <div className="filter-tabs" style={{ marginBottom: 40 }}>
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
          <div className="articles-grid">
            {filtered.map(article => (
              <div key={article.title} className="article-card">
                <div className="article-card-thumb" style={{ padding: 0, overflow: 'hidden' }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div className="article-tag">{article.tag}</div>
                </div>
                <div className="article-card-body">
                  <div className="article-card-cat">{article.category}</div>
                  <div className="article-card-title">{article.title}</div>
                  <div className="article-card-excerpt">{article.excerpt}</div>
                  <div className="article-card-footer">
                    <span className="article-card-date">{article.date}</span>
                    <a href="#" className="article-link">Baca →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: 'var(--gray-500)', padding: '48px 0', textAlign: 'center', fontSize: 14 }}>
            Tidak ada artikel untuk kategori ini.
          </p>
        )}
      </div>

      <aside className="sidebar">
        <div className="sidebar-block">
          <div className="sidebar-title">Kategori</div>
          <ul className="sidebar-cats">
            {categories.map(({ name, count }) => (
              <li key={name}>
                <a
                  href="#"
                  onClick={e => { e.preventDefault(); select(name); }}
                  style={active === name ? { color: 'var(--gold)', fontWeight: 600 } : undefined}
                >
                  {name} <span>{count}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="sidebar-block">
          <div className="sidebar-title">Topik Populer</div>
          <div className="sidebar-tags">
            {popularTags.map(tag => (
              <span
                key={tag}
                className="sidebar-tag"
                style={{
                  cursor: 'pointer',
                  ...(active === tag ? { borderColor: 'var(--gold)', color: 'var(--gold)' } : {}),
                }}
                onClick={() => select(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="sidebar-block" style={{ background: 'var(--navy)' }}>
          <div className="sidebar-title" style={{ color: 'var(--gold-light)' }}>Konsultasi Gratis</div>
          <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65, marginBottom: 20 }}>
            Butuh panduan teknis untuk kebutuhan spesifik Anda? Tim ahli kami siap membantu.
          </p>
          <Link href="/hubungi-kami" className="btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
            Hubungi Kami
          </Link>
        </div>
      </aside>
    </div>
  );
}
