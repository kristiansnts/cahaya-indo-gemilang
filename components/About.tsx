import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-wrapper fade-up">
            <div className="about-img-placeholder">
              <Image
                src="/images/image-1.jpg"
                alt="Tim lapangan PT Cahaya Indo Gemilang"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>
            <div className="about-stripe" />
            <div className="about-card">
              <div className="about-card-label">Dipimpin Oleh</div>
              <div className="about-card-name">Firdaus Ronnyco I.S</div>
              <div className="about-card-title">Direktur Utama</div>
            </div>
          </div>
          <div className="fade-up">
            <div className="section-eyebrow">Tentang Kami</div>
            <h2 className="section-heading">Mencegah &amp; Memitigasi Risiko Lingkungan Industri</h2>
            <p className="about-body">PT Cahaya Indo Gemilang bergerak di bidang pengelolaan limbah B3 dan kini mengembangkan unit khusus <strong>Kompartemen Pengelola HSE Terintegrasi Radiasi</strong>.</p>
            <p className="about-body">Kami merespons kebutuhan keselamatan di sektor industri migas dan minerba dengan solusi yang mencegah dampak limbah Berbahaya dan Beracun serta Terkontaminasi Radioaktif (TENORM/MIR).</p>
            <div className="about-features">
              <div className="about-feature">
                <svg className="about-feature-icon" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="13" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.08)"/><circle cx="18" cy="18" r="3" fill="currentColor" fillOpacity="0.4"/><line x1="18" y1="15" x2="18" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="21" y1="20" x2="30" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="15" y1="20" x2="6" y2="26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                <div><h5>Teknologi Radiasi</h5><p>Monitoring &amp; Mitigasi Modern</p></div>
              </div>
              <div className="about-feature">
                <svg className="about-feature-icon" viewBox="0 0 36 36" fill="none"><path d="M18 4C10.268 4 4 10.268 4 18s6.268 14 14 14 14-6.268 14-14S25.732 4 18 4z" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.08)"/><path d="M12 22c1-4 3-7 6-9 3 2 5 5 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M14 14c0 2.21 1.79 4 4 4s4-1.79 4-4" stroke="currentColor" strokeWidth="1.5"/></svg>
                <div><h5>Berwawasan Lingkungan</h5><p>Solusi Berkelanjutan</p></div>
              </div>
            </div>
            <Link href="/tentang-kami" className="btn-outline" style={{ display: 'inline-block', marginTop: 32 }}>Selengkapnya →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
