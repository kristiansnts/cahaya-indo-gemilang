'use client';

import { useState } from 'react';
import Link from 'next/link';

const TABS = ['Semua', 'TENORM/MIR', 'Limbah B3', 'HSE', 'Regulasi', 'Teknologi', 'Studi Kasus'] as const;

const articleCards = [
  {
    iconIdx: 0,
    tag: 'TENORM/MIR',
    category: 'Keselamatan Radiasi',
    title: 'Metode Survei Radiasi Lapangan untuk Operator Migas',
    excerpt: 'Teknik dan prosedur standar untuk melakukan survei radiasi di lingkungan industri migas, termasuk pemilihan instrumen dan interpretasi data lapangan.',
    date: 'Februari 2026',
  },
  {
    iconIdx: 1,
    tag: 'Limbah B3',
    category: 'Pengelolaan Limbah',
    title: 'Klasifikasi Limbah B3 Industri: Panduan Identifikasi dan Penanganan',
    excerpt: 'Panduan praktis identifikasi kategori limbah B3 sesuai PP 101/2014 dan prosedur penanganan yang benar untuk setiap jenis limbah industri.',
    date: 'Januari 2026',
  },
  {
    iconIdx: 2,
    tag: 'HSE',
    category: 'K3L & HSE',
    title: 'Penyusunan HIRADC yang Efektif untuk Proyek Konstruksi Fasilitas Migas',
    excerpt: 'Langkah-langkah sistematis penyusunan dokumen Hazard Identification, Risk Assessment and Determining Control (HIRADC) yang memenuhi standar regulasi nasional.',
    date: 'Desember 2025',
  },
  {
    iconIdx: 3,
    tag: 'Regulasi',
    category: 'Regulasi',
    title: 'Update Peraturan KLH 2025: Implikasi bagi Pengelola Limbah B3 Industri',
    excerpt: 'Ringkasan perubahan regulasi pengelolaan limbah B3 terbaru dari Kementerian Lingkungan Hidup dan langkah adaptasi yang perlu diambil perusahaan.',
    date: 'November 2025',
  },
  {
    iconIdx: 4,
    tag: 'Teknologi',
    category: 'Inovasi Teknologi',
    title: 'Sistem Monitoring Radiasi Digital: Tren dan Implementasi di Industri',
    excerpt: 'Perkembangan teknologi sistem monitoring radiasi berbasis IoT dan bagaimana integrasi dengan sistem manajemen keselamatan industri modern.',
    date: 'Oktober 2025',
  },
  {
    iconIdx: 5,
    tag: 'Studi Kasus',
    category: 'Studi Kasus',
    title: 'Studi Kasus: Dekontaminasi Berhasil di Fasilitas Produksi Migas Kalimantan',
    excerpt: 'Dokumentasi proses dan hasil program dekontaminasi TENORM/MIR komprehensif yang berhasil memulihkan fasilitas produksi ke standar operasi normal.',
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

const icons = [
  <svg key="0" className="article-card-icon" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.05)"/><circle cx="20" cy="20" r="4" fill="rgba(197,151,58,0.25)"/><line x1="20" y1="6" x2="20" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="24" y1="23" x2="32.1" y2="27.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="16" y1="23" x2="7.9" y2="27.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key="1" className="article-card-icon" viewBox="0 0 40 40" fill="none"><path d="M14 8h12l4 8H10l4-8z" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.08)"/><path d="M8 16h24l-3 18H11L8 16z" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.05)"/><line x1="17" y1="22" x2="17" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="23" y1="22" x2="23" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key="2" className="article-card-icon" viewBox="0 0 40 40" fill="none"><path d="M20 4L6 10v11c0 9.2 5.55 17.8 14 20 8.45-2.2 14-10.8 14-20V10L20 4z" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.05)"/><path d="M13 20l5 5 9-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="3" className="article-card-icon" viewBox="0 0 40 40" fill="none"><rect x="8" y="6" width="24" height="28" rx="2" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.05)"/><line x1="13" y1="16" x2="27" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="13" y1="22" x2="27" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="13" y1="28" x2="20" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  <svg key="4" className="article-card-icon" viewBox="0 0 40 40" fill="none"><rect x="6" y="8" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.05)"/><line x1="14" y1="28" x2="14" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="26" y1="28" x2="26" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="10" y1="34" x2="30" y2="34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="20" cy="18" r="5" stroke="currentColor" strokeWidth="1.5"/></svg>,
  <svg key="5" className="article-card-icon" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.05)"/><path d="M12 26c1.5-6 4.5-10.5 8-13 3.5 2.5 6.5 7 8 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="9" y1="20" x2="31" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
];

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
                <div className="article-card-thumb">
                  <div className="article-card-thumb-grid"></div>
                  <div className="article-tag">{article.tag}</div>
                  {icons[article.iconIdx]}
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
