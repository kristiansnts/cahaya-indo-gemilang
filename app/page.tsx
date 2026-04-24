import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeContactForm from '@/components/HomeContactForm';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid" />
        <div className="hero-accent" />
        <div className="hero-line" />
        <div className="container">
          <div className="hero-content fade-up visible">
            <div className="hero-eyebrow">Partner Terpercaya Industri Migas &amp; Minerba</div>
            <h1 className="hero-title">Solusi Pengelolaan<br /><em>Limbah B3 &amp; TENORM</em><br />Profesional</h1>
            <p className="hero-desc">Menghadirkan layanan HSE Terintegrasi Radiasi untuk keamanan lingkungan, kepatuhan regulasi, dan mitigasi risiko industri Anda.</p>
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

      {/* ABOUT */}
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
              <p className="about-body">Kami merespons kebutuhan keselamatan di sektor industri migas dan minerba dengan solusi yang mencegah dampak limbah Berbahaya dan Beracun serta Terkontaminasi Radioaktif (TENORM).</p>
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
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services-section section">
        <div className="container">
          <div className="services-header fade-up">
            <div className="section-eyebrow">Layanan Kami</div>
            <div className="services-title">Solusi Terintegrasi Untuk Industri</div>
            <div className="services-sub">Layanan komprehensif mulai dari identifikasi, transportasi, hingga konsultasi K3L</div>
          </div>
          <div className="services-grid fade-up">
            <div className="service-card">
              <div className="service-num">01</div>
              <svg className="service-icon-wrap" viewBox="0 0 48 48" fill="none"><path d="M16 8h16l4 8H12l4-8z" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.1)"/><path d="M10 16h28l-3 22H13L10 16z" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.05)"/><line x1="20" y1="22" x2="20" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="28" y1="22" x2="28" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <div className="service-name">Pengelolaan Limbah B3</div>
              <div className="service-desc">Layanan komprehensif untuk identifikasi, pengumpulan, dan pengolahan limbah B3 industri sesuai regulasi KLH.</div>
              <ul className="service-list"><li>Identifikasi &amp; Pengolahan</li><li>Transportasi Aman</li><li>Kepatuhan Regulasi</li></ul>
            </div>
            <div className="service-card">
              <div className="service-badge">Unggulan</div>
              <div className="service-num">02</div>
              <svg className="service-icon-wrap" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.05)"/><circle cx="24" cy="24" r="5" fill="rgba(197,151,58,0.3)"/><line x1="24" y1="8" x2="24" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="29" y1="27" x2="38.6" y2="32.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="19" y1="27" x2="9.4" y2="32.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <div className="service-name">Pengelolaan TENORM</div>
              <div className="service-desc">Survei radiasi, pemetaan hotspot, dan penanganan limbah radioaktif untuk industri migas dan minerba.</div>
              <ul className="service-list"><li>Survei &amp; Pemetaan Radiasi</li><li>Penanganan NORM/TENORM</li><li>Dekontaminasi Area</li></ul>
            </div>
            <div className="service-card">
              <div className="service-num">03</div>
              <svg className="service-icon-wrap" viewBox="0 0 48 48" fill="none"><rect x="10" y="8" width="28" height="32" rx="2" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.05)"/><line x1="17" y1="18" x2="31" y2="18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="17" y1="24" x2="31" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><line x1="17" y1="30" x2="25" y2="30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <div className="service-name">Konsultansi K3L/HSE</div>
              <div className="service-desc">Penyusunan dokumen HSE, risk assessment, dan audit keselamatan kerja terintegrasi.</div>
              <ul className="service-list"><li>Penyusunan Dokumen HSE</li><li>Risk Assessment</li><li>Audit Keselamatan Kerja</li></ul>
            </div>
            <div className="service-card">
              <div className="service-num">04</div>
              <svg className="service-icon-wrap" viewBox="0 0 48 48" fill="none"><rect x="8" y="20" width="10" height="20" rx="1" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.05)"/><rect x="22" y="12" width="10" height="28" rx="1" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.07)"/><rect x="36" y="8" width="4" height="32" rx="1" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.1)"/><line x1="6" y1="40" x2="44" y2="40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
              <div className="service-name">Pengembangan Teknologi</div>
              <div className="service-desc">Penyediaan sistem monitoring paparan radiasi dan teknologi pengolahan limbah berkelanjutan.</div>
              <ul className="service-list"><li>Sistem Monitoring Radiasi</li><li>Teknologi Pengolahan</li><li>Inovasi Berkelanjutan</li></ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <div className="compliance-section">
        <div className="container">
          <div className="compliance-inner fade-up">
            <div className="compliance-label">
              <h4>Legalitas &amp; Sertifikasi</h4>
              <p>Beroperasi sesuai standar regulasi nasional</p>
            </div>
            <div className="compliance-divider" />
            <div className="compliance-badges">
              {[['KLH','Kementerian Lingkungan Hidup'],['BAPETEN','Pengawas Tenaga Nuklir'],['SKK Migas','Satuan Kerja Khusus'],['ISO HSE','Standar Keselamatan Kerja']].map(([name, desc]) => (
                <div key={name} className="comp-badge">
                  <div className="comp-badge-name">{name}</div>
                  <div className="comp-badge-desc">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <section id="contact" className="contact-section section">
        <div className="container">
          <div className="contact-grid">
            <div className="fade-up">
              <div className="section-eyebrow">Hubungi Kami</div>
              <h2 className="contact-heading">Konsultasikan Kebutuhan Limbah Industri Anda</h2>
              <p className="contact-desc">Tim ahli kami siap membantu Anda melakukan survei TENORM dan pengelolaan limbah B3 sesuai regulasi pemerintah.</p>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-item-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg></div>
                  <div><h5>Kantor Pusat</h5><p>Infiniti Office, Menara Cakrawala Lt 12, Unit 05A, Jl. M.H. Thamrin No.9, Menteng, Jakarta Pusat 10340</p></div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/></svg></div>
                  <div><h5>Hotline Layanan</h5><p>08139869311</p></div>
                </div>
                <div className="contact-item">
                  <div className="contact-item-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
                  <div><h5>Email</h5><p>cahayaindogemilang88@gmail.com</p></div>
                </div>
              </div>
            </div>
            <div className="fade-up">
              <HomeContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
