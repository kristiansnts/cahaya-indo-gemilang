import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import styles from './page.module.css';

export default function ProyekPortofolio() {
  const projects = [
    {
      category: 'MIGAS & ENERGI',
      title: 'PROJECT TENORM',
      color: '#1a365d', // Navy Blue
      description: 'Layanan pembersihan dan pengelolaan NORM/TENORM pada fasilitas produksi hulu migas.'
    },
    {
      category: 'MANUFAKTUR',
      title: 'PROJECT B3',
      color: '#103822', // Dark Green
      description: 'Pengelolaan limbah B3 industri secara komprehensif mulai dari pemilahan hingga pembuangan akhir.'
    },
    {
      category: 'TRAINING & K3',
      title: 'PROJECT TRAINING',
      color: '#2d3748', // Dark Grey
      description: 'Pelatihan keselamatan kerja dan proteksi radiasi bagi personel industri di seluruh Indonesia.'
    }
  ];

  return (
    <main>
      <Navbar />
      <PageHero 
        title="Proyek & Portofolio" 
        subtitle="Rekam jejak pengalaman kami dalam memberikan solusi pengelolaan limbah dan keselamatan radiasi bagi industri nasional"
      />
      
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.categoryBadge}>STUDI KASUS TERPILIH</span>
            <h2 className={styles.sectionTitle}>Solusi Nyata Untuk Tantangan Industri</h2>
          </div>
          
          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={styles.projectCard} 
                style={{ backgroundColor: project.color }}
              >
                <div className={styles.cardContent}>
                  <span className={styles.cardCategory}>{project.category}</span>
                  <h3 className={styles.cardTitle}>{project.title}</h3>
                  <p className={styles.cardDescription}>{project.description}</p>
                  <a href="#" className={styles.cardLink}>Baca Selengkapnya →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.altBg}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.categoryBadge}>DOKUMENTASI KEGIATAN</span>
            <h2 className={styles.sectionTitle}>Galeri Lapangan</h2>
          </div>
          
          <div className={styles.mosaicGrid}>
            <div className={`${styles.mosaicItem} ${styles.green}`}></div>
            <div className={`${styles.mosaicItem} ${styles.orange}`}></div>
            <div className={`${styles.mosaicItem} ${styles.blue}`}></div>
            <div className={`${styles.mosaicItem} ${styles.darkGrey}`}></div>
            <div className={`${styles.mosaicItem} ${styles.blue}`}></div>
            <div className={`${styles.mosaicItem} ${styles.green}`}></div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.categoryBadge}>APA KATA KLIEN KAMI</span>
            <h2 className={styles.sectionTitle}>Testimoni Klien</h2>
          </div>
          
          <div className={styles.testimonialGrid}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={styles.testimonialCard}>
                <p className={styles.testimonialText}>
                  "RRAD Jaya Abadi memberikan layanan yang sangat profesional dalam pengelolaan limbah di lokasi kami. Kepatuhan terhadap regulasi sangat dijaga."
                </p>
                <div className={styles.testimonialAuthor}>
                  <strong>Manager HSE</strong>
                  <span>Perusahaan Migas Nasional</span>
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
