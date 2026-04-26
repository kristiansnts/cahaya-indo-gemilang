import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Image from 'next/image';
import styles from './page.module.css';

export default function AboutPage() {
  const missions = [
    'Menyediakan solusi pengelolaan limbah yang aman dan berkelanjutan.',
    'Mengintegrasikan standar keselamatan radiasi dalam setiap layanan.',
    'Mendukung industri migas, minerba, dan energi dalam mitigasi risiko Radiasi/TENORM/MIR.',
    'Membangun SDM ahli melalui kolaborasi profesional dan lembaga nasional.'
  ];

  const experts = [
    {
      title: 'Rekayasa Nuklir',
      desc: 'Karakterisasi radiasi & proteksi berbasis sains.',
      icon: '⚛️'
    },
    {
      title: 'AMDAL & Lingkungan',
      desc: 'Pemantauan dampak limbah secara menyeluruh.',
      icon: '🌿'
    },
    {
      title: 'Regulasi & Inspeksi',
      desc: 'Keselamatan radiasi berbasis kepatuhan mutlak.',
      icon: '📋'
    },
    {
      title: 'Akademisi Ahli',
      desc: 'Dukungan dari bidang Teknik, MIPA, & Manajemen.',
      icon: '🎓'
    }
  ];

  return (
    <main>
      <Navbar />
      <PageHero
        eyebrow="PT Cahaya Indo Gemilang"
        title="Tentang Kami"
        desc="Mengenal lebih dekat komitmen PT RRAD Jaya Abadi dalam menjaga keselamatan lingkungan dan radiasi"
        breadcrumb="Tentang Kami"
      />

      {/* Profil Perusahaan */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.profilContent}>
            <div className={styles.textBlock}>
              <span className={styles.categoryBadge}>PROFIL PERUSAHAAN</span>
              <h2 className={styles.sectionTitle}>Mitra Strategis Pengelolaan Limbah Nasional</h2>
              <p>
                PT RRAD Jaya Abadi adalah perusahaan yang bergerak di bidang pengelolaan limbah B3 dan kini mengembangkan unit khusus berupa <strong>Pengelola HSE Terintegrasi Radiasi</strong>.
              </p>
              <p>
                Kami fokus mencegah, memantau, dan memitigasi dampak Limbah B3 Terkontaminasi Radioaktif/TENORM/MIR. Ini adalah bentuk respons kami terhadap meningkatnya kebutuhan keselamatan lingkungan, pekerja, serta masyarakat di sektor industri migas, minerba, dan sektor industri lainnya.
              </p>
            </div>
            <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <Image 
                src="/images/logo.png" 
                alt="Logo RRAD" 
                width={400} 
                height={200}
                style={{ objectFit: 'contain', padding: '40px', background: '#f8fafc', width: '100%', height: 'auto' }}
              />
            </div>
          </div>

          <div className={styles.visionMissionGrid}>
            <div className={styles.visionCard}>
              <h3>Visi Perusahaan</h3>
              <p>
                Menjadi perusahaan nasional terkemuka dalam pengelolaan HSE terintegrasi radiasi yang profesional, aman, patuh terhadap regulasi, serta berwawasan lingkungan.
              </p>
            </div>
            <div>
              <h3 className={styles.expertTitle} style={{ fontSize: '1.5rem', marginBottom: '25px' }}>Misi Perusahaan</h3>
              <ul className={styles.missionList}>
                {missions.map((mission, i) => (
                  <li key={i} className={styles.missionItem}>
                    <span className={styles.missionIcon}>✓</span>
                    {mission}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className={`${styles.section} ${styles.altBg}`}>
        <div className="container">
          <div className={styles.quoteSection}>
            <p className={styles.quoteText}>
              "Kami tidak hanya bekerja, tetapi memastikan kepatuhan mutlak terhadap regulasi KLH, BAPETEN, ESDM, dan SKK Migas demi keselamatan bersama."
            </p>
            <div className={styles.quoteAuthor}>
              <strong>Firdaus Ronnyco I.S</strong>
              <span>Direktur Utama</span>
            </div>
          </div>
        </div>
      </section>

      {/* Struktur & Tim Ahli */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className={styles.categoryBadge}>TIM TEKNIS</span>
            <h2 className={styles.sectionTitle}>Kelompok Keahlian (Expert Group)</h2>
            <p className={styles.expertDesc} style={{ fontSize: '1.1rem', marginTop: '20px' }}>
              Didukung oleh kolaborasi profesional dan akademisi yang kompeten. Kami menjamin setiap langkah mitigasi didasari oleh sains dan regulasi terkini.
            </p>
          </div>

          <div className={styles.expertGrid}>
            {experts.map((expert, i) => (
              <div key={i} className={styles.expertCard}>
                <div className={styles.expertIcon}>{expert.icon}</div>
                <h4 className={styles.expertTitle}>{expert.title}</h4>
                <p className={styles.expertDesc}>{expert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
