import Link from 'next/link';

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-accent" />
        <div className="hero-line" />
        <div className="container">
          <div className="hero-content fade-up visible">
            <div className="hero-eyebrow">Partner Terpercaya Industri Migas &amp; Minerba</div>
            <h1 className="hero-title">Solusi Pengelolaan<br /><em>Limbah B3 &amp; TENORM/MIR</em><br />Profesional</h1>
            <p className="hero-desc">Menghadirkan layanan HSE Terintegrasi Radiasi untuk kepatuhan regulasi lingkungan dan ketenaganukliran, serta mitigasi risiko industri Anda.</p>
            <div className="hero-actions">
              <Link href="/hubungi-kami" className="btn-primary">Ajukan Permintaan Survey</Link>
              <Link href="/layanan" className="btn-outline">Pelajari Layanan</Link>
            </div>
          </div>
        </div>
        <div className="hero-badges">
          <div className="hero-badge-item">
            <svg className="hero-badge-icon" viewBox="0 0 36 36" fill="none"><path d="M18 3L5 9v10c0 8.25 5.55 15.96 13 18 7.45-2.04 13-9.75 13-18V9L18 3z" stroke="#c5973a" strokeWidth="1.5" fill="rgba(197,151,58,0.08)"/><path d="M13 18l3.5 3.5L23 15" stroke="#c5973a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <div className="hero-badge-text"><strong>Izin KLH</strong><span>Kementerian Lingkungan Hidup</span></div>
          </div>
          <div className="hero-badge-item">
            <svg className="hero-badge-icon" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="13" stroke="#c5973a" strokeWidth="1.5" fill="rgba(197,151,58,0.08)"/><circle cx="18" cy="18" r="4" fill="#c5973a" fillOpacity="0.3"/><line x1="18" y1="14" x2="18" y2="5" stroke="#c5973a" strokeWidth="1.5" strokeLinecap="round"/><line x1="22" y1="21" x2="29" y2="27" stroke="#c5973a" strokeWidth="1.5" strokeLinecap="round"/><line x1="14" y1="21" x2="7" y2="27" stroke="#c5973a" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <div className="hero-badge-text"><strong>Lisensi BAPETEN</strong><span>Pengawas Tenaga Nuklir</span></div>
          </div>
          <div className="hero-badge-item">
            <svg className="hero-badge-icon" viewBox="0 0 36 36" fill="none"><rect x="6" y="6" width="24" height="24" rx="2" stroke="#c5973a" strokeWidth="1.5" fill="rgba(197,151,58,0.08)"/><path d="M12 18h12M18 12v12" stroke="#c5973a" strokeWidth="1.5" strokeLinecap="round"/></svg>
            <div className="hero-badge-text"><strong>SKK Migas</strong><span>Satuan Kerja Khusus</span></div>
          </div>
        </div>
        <div className="hero-photo-credit">
          Photo by <a href="https://unsplash.com/@jkoblitz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Julia Koblitz</a> on <a href="https://unsplash.com/photos/RlOAwXt2fEA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>
        </div>
      </section>
      <div className="trust-bar">
        <div className="container">
          <div className="trust-bar-inner">
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 40 40" fill="none"><path d="M20 4L7 10v11c0 9.2 5.55 17.8 13 20 7.45-2.2 13-10.8 13-20V10L20 4z" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.08)"/><path d="M14 20l4.5 4.5L26 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div><div className="trust-label">Patuh Regulasi</div><div className="trust-detail">KLH &amp; BAPETEN</div></div>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 40 40" fill="none"><rect x="8" y="8" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.08)"/><path d="M15 20h10M15 15h10M15 25h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <div><div className="trust-label">Standar Safety</div><div className="trust-detail">ISO &amp; HSE Migas</div></div>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.08)"/><path d="M8 34c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <div><div className="trust-label">Tenaga Ahli</div><div className="trust-detail">Sertifikasi Nasional</div></div>
            </div>
            <div className="trust-item">
              <svg className="trust-icon" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="13" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.08)"/><path d="M20 12v9l5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <div><div className="trust-label">Respon Cepat</div><div className="trust-detail">Layanan 24/7</div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
