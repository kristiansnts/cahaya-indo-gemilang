import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomeContactForm from '@/components/HomeContactForm';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />

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
              <p className="contact-desc">Tim ahli kami siap membantu Anda melakukan survei TENORM/MIR dan pengelolaan limbah B3 sesuai regulasi pemerintah.</p>
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
