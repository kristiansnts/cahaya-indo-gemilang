export default function Services() {
  return (
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
            <div className="service-name">Pengelolaan TENORM/MIR</div>
            <div className="service-desc">Survei radiasi, pemetaan hotspot, dan penanganan limbah radioaktif untuk industri migas dan minerba.</div>
            <ul className="service-list"><li>Survei &amp; Pemetaan Radiasi</li><li>Penanganan NORM/TENORM/MIR</li><li>Dekontaminasi Area</li></ul>
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
  );
}
