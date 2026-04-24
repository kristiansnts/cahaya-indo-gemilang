import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArtikelGrid from '@/components/ArtikelGrid';
import Link from 'next/link';

const featuredArticle = {
  category: 'Regulasi & Kepatuhan',
  title: 'Pemahaman Regulasi BAPETEN tentang Pengelolaan TENORM di Industri Migas Indonesia',
  excerpt: 'Panduan komprehensif mengenai kerangka regulasi BAPETEN yang mengatur pengelolaan Technologically Enhanced Naturally Occurring Radioactive Materials (TENORM) — mencakup persyaratan izin, prosedur survei, dan standar pembuangan yang wajib dipenuhi operator industri migas.',
  author: 'Tim Ahli CIG',
  date: 'Maret 2026',
  readTime: '12 menit baca',
} as const;

export default function ArtikelPublikasi() {
  return (
    <>
      <Navbar />

      <div className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="page-hero-grid"></div>
        <div className="page-hero-line"></div>
        <div className="container page-hero-content">
          <div className="page-eyebrow">Pengetahuan &amp; Wawasan</div>
          <h1 className="page-title">Artikel &amp; <em>Publikasi</em></h1>
          <p className="page-desc">Wawasan teknis, regulasi terkini, dan praktik terbaik di bidang pengelolaan limbah B3, TENORM, dan keselamatan radiasi industri.</p>
        </div>
      </div>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <Link href="/">Beranda</Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            <span>Artikel &amp; Publikasi</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* FEATURED */}
          <div className="fade-up" style={{ marginBottom: 32 }}>
            <div className="section-eyebrow">Artikel Pilihan</div>
            <h2 className="section-heading">Bacaan Terkini</h2>
          </div>
          <div className="featured-article fade-up">
            <div className="featured-article-thumb">
              <div className="featured-article-thumb-grid"></div>
              <div className="featured-label">Artikel Utama</div>
              <svg className="featured-article-icon" viewBox="0 0 80 80" fill="none">
                <rect x="10" y="10" width="60" height="60" rx="4" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.05)"/>
                <line x1="22" y1="28" x2="58" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="22" y1="38" x2="58" y2="38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="22" y1="48" x2="44" y2="48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="featured-article-body">
              <div className="article-category">{featuredArticle.category}</div>
              <div className="article-title">{featuredArticle.title}</div>
              <div className="article-excerpt">{featuredArticle.excerpt}</div>
              <div className="article-meta">
                <span>{featuredArticle.author}</span>
                <div className="article-meta-dot"></div>
                <span>{featuredArticle.date}</span>
                <div className="article-meta-dot"></div>
                <span>{featuredArticle.readTime}</span>
              </div>
              <a href="#" className="article-read-more" style={{ marginTop: 20 }}>
                Baca Selengkapnya
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </div>
          </div>

          <ArtikelGrid />
        </div>
      </section>

      <Footer />
    </>
  );
}
