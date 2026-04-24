import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import styles from './page.module.css';

export default function Layanan() {
  const b3Features = [
    'Identifikasi & Karakterisasi Limbah Industri',
    'Transportasi & Penyimpanan Sementara (TPS)',
    'Penyusunan Sistem Manajemen Lingkungan'
  ];

  const tenormServices = [
    {
      title: 'Survei & Mapping',
      desc: 'Pemetaan Hotspot radiasi area kerja secara akurat.'
    },
    {
      title: 'Sampling',
      desc: 'Karakterisasi laboratorium TENORM untuk analisis mendalam.'
    },
    {
      title: 'SOP Khusus',
      desc: 'Penyusunan prosedur keselamatan migas yang komprehensif.'
    },
    {
      title: 'Pembinaan',
      desc: 'Pelatihan keselamatan radiasi untuk SDM perusahaan.'
    }
  ];

  const hseFeatures = [
    'Risk assessment & risk mitigation.',
    'Penyusunan dokumen K3LL berbasis regulasi BAPETEN, KLH, ESDM.',
    'Evaluasi keselamatan sumber radiasi.'
  ];

  const trainingServices = [
    {
      title: 'Sertifikasi PPR',
      desc: 'Program pelatihan untuk Petugas Proteksi Radiasi sesuai standar BAPETEN.'
    },
    {
      title: 'Safety Culture',
      desc: 'In-house training untuk membangun budaya keselamatan kerja.'
    },
    {
      title: 'Teknologi & Riset',
      desc: 'Pengembangan sistem monitoring dan kajian pengolahan limbah terkini.'
    }
  ];

  return (
    <main>
      <Navbar />
      <PageHero 
        title="Layanan Kami" 
        subtitle="Solusi komprehensif pengelolaan limbah B3, mitigasi TENORM, dan konsultansi keselamatan radiasi"
      />
      
      {/* Pengelolaan Limbah B3 */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.categoryBadge}>SOLUSI INDUSTRI</span>
            <h2 className={styles.sectionTitle}>Pengelolaan Limbah B3</h2>
            <p className={styles.serviceCardDesc} style={{ fontSize: '1.1rem', marginTop: '15px' }}>
              Kami menyediakan layanan menyeluruh untuk identifikasi, pengelolaan, dan pemrosesan limbah Bahan Berbahaya dan Beracun (B3) industri. Proses kami menjamin keamanan lingkungan dan kepatuhan penuh terhadap regulasi KLH.
            </p>
          </div>
          
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h3 className={styles.serviceCardTitle}>Cakupan Layanan B3</h3>
              <ul className={styles.featureList}>
                {b3Features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 className={styles.serviceCardTitle}>Keamanan & Kepatuhan</h3>
              <p className={styles.serviceCardDesc}>
                Setiap proses yang kami jalankan didasarkan pada standar operasional prosedur yang ketat untuk memastikan tidak ada dampak negatif terhadap ekosistem sekitar dan kesehatan pekerja.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TENORM Section */}
      <section className={`${styles.section} ${styles.altBg}`}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.categoryBadge}>KEAHLIAN KHUSUS</span>
            <h2 className={styles.sectionTitle}>Pengelolaan Limbah TENORM</h2>
            <p className={styles.serviceCardDesc} style={{ marginTop: '20px' }}>
              Solusi khusus untuk Technologically Enhanced Naturally Occurring Radioactive Material. Kami membantu industri migas dan minerba dalam survei, pemetaan, dan mitigasi risiko radiasi.
            </p>
          </div>
          
          <div className={styles.tenormGrid}>
            {tenormServices.map((service, i) => (
              <div key={i} className={styles.tenormSubCard}>
                <h4 className={styles.tenormSubTitle}>{service.title}</h4>
                <p className={styles.tenormSubDesc}>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HSE & Training Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
              </div>
              <h3 className={styles.serviceCardTitle}>Konsultansi K3L / HSE</h3>
              <p className={styles.serviceCardDesc}>
                Kami membantu perusahaan Anda memenuhi standar kepatuhan regulasi BAPETEN, KLH, dan ESDM melalui kajian teknis mendalam.
              </p>
              <ul className={styles.featureList}>
                {hseFeatures.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <svg className={styles.checkIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.serviceCard}>
              <div className={styles.iconWrapper}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10v6M6 4h12l2 6H4l2-6zM4 10h16v11H4V10z"></path></svg>
              </div>
              <h3 className={styles.serviceCardTitle}>Pelatihan & Sertifikasi</h3>
              <p className={styles.serviceCardDesc}>
                Membangun SDM kompeten dan budaya keselamatan yang kuat di lingkungan kerja berisiko tinggi.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '10px' }}>
                {trainingServices.map((service, i) => (
                  <div key={i}>
                    <h5 style={{ margin: '0 0 5px 0', fontSize: '1rem', color: '#1a202c' }}>{service.title}</h5>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#718096' }}>{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className={styles.ctaSection}>
            <div className="container">
              <h2 className={styles.ctaTitle}>Butuh Proposal Penawaran Lengkap?</h2>
              <p className={styles.ctaDesc}>
                Konsultasikan kebutuhan pengelolaan limbah dan keselamatan radiasi perusahaan Anda dengan tim ahli kami.
              </p>
              <a href="http://wa.me/6287890760055" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                Hubungi Tim Ahli Kami
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
