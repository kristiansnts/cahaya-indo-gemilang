import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import styles from './page.module.css';

export default function ArtikelPublikasi() {
  const documents = [
    {
      type: 'PERATURAN PEMERINTAH',
      title: 'PP No. 52 Tahun 2022',
      description: 'Tentang Keselamatan dan Keamanan Pertambangan Bahan Galian Nuklir.',
      category: 'Regulasi'
    },
    {
      type: 'PERATURAN PEMERINTAH',
      title: 'PP No. 22 Tahun 2021',
      description: 'Tentang Penyelenggaraan Perlindungan dan Pengelolaan Lingkungan Hidup.',
      category: 'Lingkungan'
    }
  ];

  const articles = [
    {
      title: 'Mengenal Grafena Oksida',
      excerpt: 'Inovasi material masa depan untuk pengelolaan limbah industri yang lebih efisien.',
      date: '24 Apr 2024',
      color: '#103822'
    },
    {
      title: 'SPEED 2024',
      excerpt: 'Partisipasi RRAD Jaya Abadi dalam pameran teknologi energi terbarukan.',
      date: '15 Mar 2024',
      color: '#ff8c00'
    },
    {
      title: 'Kajian Regulasi TENORM',
      excerpt: 'Update terbaru mengenai regulasi pengelolaan TENORM di industri migas Indonesia.',
      date: '02 Feb 2024',
      color: '#1a365d'
    }
  ];

  return (
    <main>
      <Navbar />
      <PageHero 
        title="Artikel & Publikasi" 
        subtitle="Pusat informasi regulasi, edukasi TENORM, dan inovasi pengelolaan limbah B3"
      />
      
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.headerLeft}>
              <span className={styles.categoryBadge}>PUSTAKA DIGITAL</span>
              <h2 className={styles.sectionTitle}>Regulasi & Dokumen Teknis</h2>
            </div>
            <div className={styles.headerRight}>
              <button className={styles.downloadAllBtn}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Tersedia untuk Diunduh
              </button>
            </div>
          </div>
          
          <div className={styles.documentGrid}>
            {documents.map((doc, index) => (
              <div key={index} className={styles.documentCard}>
                <div className={styles.docIcon}>
                  <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 0H2C0.89 0 0 0.89 0 2V28C0 29.11 0.89 30 2 30H22C23.11 30 24 29.11 24 28V10L14 0Z" fill="#E53E3E"/>
                    <path d="M14 0V10H24L14 0Z" fill="#C53030"/>
                    <path d="M18 18H6V20H18V18Z" fill="white"/>
                    <path d="M18 22H6V24H18V22Z" fill="white"/>
                    <path d="M12 14H6V16H12V14Z" fill="white"/>
                  </svg>
                </div>
                <div className={styles.docInfo}>
                  <span className={styles.docType}>{doc.type}</span>
                  <h3 className={styles.docTitle}>{doc.title}</h3>
                  <p className={styles.docDesc}>{doc.description}</p>
                </div>
                <a href="#" className={styles.downloadLink}>Unduh PDF</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.altBg}`}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.categoryBadge}>WAWASAN INDUSTRI</span>
            <h2 className={styles.sectionTitle}>Edukasi & Berita Terbaru</h2>
          </div>
          
          <div className={styles.articleGrid}>
            {articles.map((article, index) => (
              <div key={index} className={styles.articleCard}>
                <div className={styles.articleImage} style={{ backgroundColor: article.color }}>
                  <div className={styles.articleOverlay}>
                    <span>{article.date}</span>
                  </div>
                </div>
                <div className={styles.articleContent}>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.articleExcerpt}>{article.excerpt}</p>
                  <a href="#" className={styles.readMore}>Selengkapnya →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
