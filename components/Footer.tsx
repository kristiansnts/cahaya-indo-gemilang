import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={`grid grid-3 ${styles.footerGrid}`}>
          <div className={styles.brand}>
            <h3 className={styles.logo}>Cahaya Indo Gemilang</h3>
            <p className={styles.bio}>
              Solusi HSE Terintegrasi Radiasi untuk industri Migas & Minerba. Berkomitmen pada keselamatan kerja dan kelestarian lingkungan.
            </p>
          </div>
          
          <div className={styles.links}>
            <h4>Navigasi</h4>
            <ul>
              <li><Link href="/">Beranda</Link></li>
              <li><Link href="/#about">Tentang Kami</Link></li>
              <li><Link href="/#services">Layanan</Link></li>
              <li><Link href="/proyek-portofolio">Proyek & Portofolio</Link></li>
              <li><Link href="/artikel-publikasi">Artikel & Publikasi</Link></li>
            </ul>
          </div>
          
          <div className={styles.legal}>
            <h4>Legalitas</h4>
            <div className={styles.badges}>
              <span className={styles.legalBadge}>KLH</span>
              <span className={styles.legalBadge}>BAPETEN</span>
              <span className={styles.legalBadge}>SKK Migas</span>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>© 2026 Cahaya Indo Gemilang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
