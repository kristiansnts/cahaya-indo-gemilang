import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="PT Cahaya Indo Gemilang"
              width={80}
              height={40}
              className={styles.logoImage}
              priority
            />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li><Link href="/">Home</Link></li>
             <li><Link href="/about">Tentang Kami</Link></li>
            <li><Link href="/layanan">Layanan</Link></li>
            <li><Link href="/proyek-portofolio">Proyek & Portofolio</Link></li>
            <li><Link href="/artikel-publikasi">Artikel & Publikasi</Link></li>
          </ul>
        </nav>
        <div className={styles.navCta}>
          <Link href="#contact" className="btn btn-primary">Kontak Kami</Link>
        </div>
      </div>
    </header>
  );
}
