import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className="section">
      <div className={`container grid grid-2 ${styles.aboutContainer}`}>
        <div className={styles.imageWrapper}>
          <div className={styles.mainImage}>
            <Image 
              src="/images/director.png" 
              alt="Muhammad Rifli - Direktur Utama" 
              width={500} 
              height={600}
              className={styles.img}
            />
          </div>
          <div className={styles.overlayCard}>
            <div className={styles.cardInfo}>
              <span className={styles.dipimpin}>Dipimpin Oleh</span>
              <h4 className={styles.name}>Muhammad Rifli</h4>
              <span className={styles.title}>Direktur Utama</span>
            </div>
          </div>
        </div>
        <div className={styles.textContent}>
          <span className={styles.sub}>TENTANG KAMI</span>
          <h2 className={styles.heading}>Mencegah & Memitigasi Risiko Lingkungan Industri</h2>
          <p>
            PT Cahaya Indo Gemilang bergerak di bidang pengelolaan limbah B3 dan kini mengembangkan unit khusus <strong>Kompartemen Pengelola HSE Terintegrasi Radiasi</strong>.
          </p>
          <p>
            Kami merespons kebutuhan keselamatan di sektor industri migas dan minerba dengan solusi yang mencegah dampak limbah Berbahaya dan Beracun serta Terkontaminasi Radioaktif (TENORM).
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>📡</div>
              <div>
                <h5>Teknologi Radiasi</h5>
                <p>Monitoring & Mitigasi Modern</p>
              </div>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🌿</div>
              <div>
                <h5>Berwawasan Lingkungan</h5>
                <p>Solusi Berkelanjutan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
