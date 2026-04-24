import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-name">Cahaya Indo Gemilang</div>
            <div className="footer-brand-sub">HSE Terintegrasi Radiasi</div>
            <p className="footer-brand-bio">Solusi pengelolaan limbah B3 dan TENORM/MIR untuk industri Migas &amp; Minerba. Berkomitmen pada keselamatan kerja dan kelestarian lingkungan Indonesia.</p>
          </div>
          <div className="footer-col">
            <h4>Navigasi</h4>
            <ul>
              <li><Link href="/">Beranda</Link></li>
              <li><Link href="/tentang-kami">Tentang Kami</Link></li>
              <li><Link href="/layanan">Layanan</Link></li>
              <li><Link href="/proyek-portofolio">Proyek &amp; Portofolio</Link></li>
              <li><Link href="/artikel-publikasi">Artikel &amp; Publikasi</Link></li>
              <li><Link href="/hubungi-kami">Hubungi Kami</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Layanan</h4>
            <ul>
              <li><Link href="/layanan">Pengelolaan Limbah B3</Link></li>
              <li><Link href="/layanan">Pengelolaan TENORM/MIR</Link></li>
              <li><Link href="/layanan">Konsultansi K3L/HSE</Link></li>
              <li><Link href="/layanan">Pengembangan Teknologi</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legalitas</h4>
            <div className="footer-cert-badges">
              <span className="footer-cert">KLH</span>
              <span className="footer-cert">BAPETEN</span>
              <span className="footer-cert">SKK Migas</span>
              <span className="footer-cert">ISO HSE</span>
            </div>
            <p className="footer-cert-desc">Beroperasi sesuai standar regulasi nasional di bidang lingkungan hidup dan keselamatan radiasi.</p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 PT Cahaya Indo Gemilang. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
