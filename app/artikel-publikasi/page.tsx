import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArtikelGrid from '@/components/ArtikelGrid';
import PublikasiGallery from '@/components/PublikasiGallery';
import PageHero from '@/components/PageHero';

const featuredArticle = {
  category: 'Regulasi & Kepatuhan',
  title: 'Pemahaman Regulasi BAPETEN tentang Pengelolaan TENORM/MIR di Industri Migas Indonesia',
  excerpt: 'Panduan komprehensif mengenai kerangka regulasi BAPETEN yang mengatur pengelolaan Technologically Enhanced Naturally Occurring Radioactive Materials (TENORM/MIR) — mencakup persyaratan izin, prosedur survei, dan standar pembuangan yang wajib dipenuhi operator industri migas.',
  author: 'Tim Ahli CIG',
  date: 'Maret 2026',
  readTime: '12 menit baca',
} as const;

export default function ArtikelPublikasi() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Pengetahuan &amp; Wawasan"
        title={<>Artikel &amp; <em>Publikasi</em></>}
        desc="Wawasan teknis, regulasi terkini, dan praktik terbaik di bidang pengelolaan limbah B3, TENORM/MIR, dan keselamatan radiasi industri."
        breadcrumb="Artikel &amp; Publikasi"
      />

      <section className="section">
        <div className="container">
          {/* FEATURED */}
          <div className="fade-up" style={{ marginBottom: 32 }}>
            <div className="section-eyebrow">Artikel Pilihan</div>
            <h2 className="section-heading">Bacaan Terkini</h2>
          </div>
          <div className="featured-article fade-up">
            <div className="featured-article-thumb" style={{ padding: 0, overflow: 'hidden' }}>
              <img 
                src="/images/artikel-utama-regulasi.png" 
                alt={featuredArticle.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="featured-label">Artikel Utama</div>
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

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="fade-up" style={{ marginBottom: 32 }}>
            <div className="section-eyebrow">Dokumentasi</div>
            <h2 className="section-heading">Kegiatan &amp; Kemitraan</h2>
            <p style={{ color: 'var(--gray-500)', fontSize: 15, lineHeight: 1.7, maxWidth: 560, marginTop: 12 }}>
              Dokumentasi kegiatan, kerjasama, dan verifikasi produk Alkes PT Cahaya Indo Gemilang.
            </p>
          </div>
          <PublikasiGallery />
        </div>
      </section>

      <Footer />
    </>
  );
}
