import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <span className={styles.badge}>Partner Terpercaya Industri Migas & Minerba</span>
        <h1 className={styles.title}>
          Solusi Pengelolaan <br />
          Limbah B3 & TENORM <br />
          Profesional
        </h1>
        <p className={styles.description}>
          Menghadirkan layanan HSE Terintegrasi Radiasi untuk keamanan lingkungan, kepatuhan regulasi, dan mitigasi risiko industri Anda.
        </p>
        <div className={styles.actions}>
          <Link href="#contact" className="btn btn-primary">
            Ajukan Permintaan Survey
          </Link>
          <Link href="#services" className="btn btn-outline">
            Pelajari Layanan
          </Link>
        </div>
      </div>
    </section>
  );
}
