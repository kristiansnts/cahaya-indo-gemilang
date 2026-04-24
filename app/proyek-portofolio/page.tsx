import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProyekGrid from '@/components/ProyekGrid';
import Link from 'next/link';

const featuredProject = {
  client: 'Industri Migas — Kalimantan Timur',
  title: 'Survei & Pengelolaan TENORM Fasilitas Produksi Minyak Bumi',
  desc: 'Program komprehensif survei radiasi lapangan, pemetaan hotspot TENORM, dan implementasi sistem pengelolaan limbah radioaktif di fasilitas produksi migas berskala besar.',
  stats: [
    { value: '12', label: 'Titik Survei' },
    { value: '100%', label: 'Kepatuhan BAPETEN' },
    { value: '8 Bln', label: 'Durasi Proyek' },
  ],
} as const;


export default function ProyekPortofolio() {
  return (
    <>
      <Navbar />

      <div className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="page-hero-grid"></div>
        <div className="page-hero-line"></div>
        <div className="container page-hero-content">
          <div className="page-eyebrow">Rekam Jejak Kami</div>
          <h1 className="page-title">Proyek &amp; <em>Portofolio</em></h1>
          <p className="page-desc">Dokumentasi proyek-proyek pengelolaan limbah B3 dan TENORM yang telah berhasil kami selesaikan bersama mitra industri terkemuka.</p>
        </div>
      </div>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <Link href="/">Beranda</Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            <span>Proyek &amp; Portofolio</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* FEATURED */}
          <div className="fade-up" style={{ marginBottom: 64 }}>
            <div className="section-eyebrow">Proyek Unggulan</div>
            <h2 className="section-heading">Studi Kasus Terpilih</h2>
          </div>
          <div className="featured-project fade-up">
            <div className="featured-visual">
              <div className="featured-visual-grid"></div>
              <div className="featured-badge">Proyek Unggulan</div>
              <svg className="featured-icon" viewBox="0 0 96 96" fill="none">
                <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.05)"/>
                <circle cx="48" cy="48" r="12" fill="rgba(197,151,58,0.2)"/>
                <line x1="48" y1="8" x2="48" y2="36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="59" y1="55" x2="82" y2="69" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="37" y1="55" x2="14" y2="69" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="featured-body">
              <div className="featured-client">{featuredProject.client}</div>
              <div className="featured-title">{featuredProject.title}</div>
              <div className="featured-desc">{featuredProject.desc}</div>
              <div className="featured-stats">
                {featuredProject.stats.map(stat => (
                  <div key={stat.label}>
                    <div className="featured-stat-val">{stat.value}</div>
                    <div className="featured-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FILTER + GRID */}
          <div className="fade-up">
            <div className="section-eyebrow">Semua Proyek</div>
            <h2 className="section-heading" style={{ marginBottom: 32 }}>Rekam Jejak Lengkap</h2>
          </div>
          <ProyekGrid />

          <div className="cta-band fade-up">
            <div>
              <h3>Proyek Anda Berikutnya?</h3>
              <p>Konsultasikan kebutuhan pengelolaan limbah dan HSE Anda dengan tim ahli kami.</p>
            </div>
            <Link href="/hubungi-kami" className="btn-primary">Diskusikan Proyek Anda</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
