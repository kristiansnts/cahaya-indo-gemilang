import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const missionVision: Array<{ number: string; title: string; body: string; dark?: boolean }> = [
  {
    number: '01',
    title: 'Visi Kami',
    body: 'Menjadi perusahaan pengelola limbah B3 dan TENORM terpercaya dan terdepan di Indonesia yang berwawasan lingkungan, berteknologi tinggi, serta menjadi mitra strategis industri migas dan minerba nasional.',
  },
  {
    number: '02',
    title: 'Misi Kami',
    body: 'Menghadirkan solusi pengelolaan limbah B3 dan TENORM yang aman, patuh regulasi, dan berkelanjutan; membangun kapasitas SDM ahli di bidang radiasi dan lingkungan; serta mendukung industri Indonesia menuju operasi yang bertanggung jawab.',
    dark: true,
  },
];

const values = [
  {
    title: 'Integritas',
    desc: 'Kami beroperasi dengan standar etika tertinggi, transparansi penuh, dan komitmen tak tergoyahkan terhadap kepatuhan regulasi KLH dan BAPETEN.',
  },
  {
    title: 'Keahlian Teknis',
    desc: 'Tim kami terdiri dari insinyur, fisikawan nuklir, dan spesialis K3L bersertifikasi yang terus memperbarui kompetensi sesuai perkembangan teknologi terkini.',
  },
  {
    title: 'Tanggung Jawab Lingkungan',
    desc: 'Setiap keputusan bisnis kami mempertimbangkan dampak jangka panjang terhadap ekosistem dan kesehatan masyarakat sekitar wilayah operasi.',
  },
] as const;

const timeline = [
  {
    year: 'Pendirian',
    event: 'PT Cahaya Indo Gemilang Berdiri',
    desc: 'Perusahaan didirikan dengan fokus awal pada jasa pengelolaan limbah B3 industri di wilayah Jakarta dan sekitarnya.',
  },
  {
    year: 'Pengembangan',
    event: 'Pembentukan Unit TENORM',
    desc: 'Merespons kebutuhan industri migas, kami membentuk kompartemen khusus pengelolaan TENORM dengan dukungan tenaga ahli nuklir bersertifikasi BAPETEN.',
  },
  {
    year: 'Ekspansi',
    event: 'Kemitraan Strategis Industri',
    desc: 'Memperluas jangkauan layanan ke sektor minerba dan menjalin kemitraan dengan perusahaan-perusahaan SKK Migas terkemuka.',
  },
  {
    year: 'Kini',
    event: 'Solusi HSE Terintegrasi Nasional',
    desc: 'Beroperasi sebagai mitra HSE terpercaya bagi industri migas dan minerba Indonesia, dengan tim ahli dan infrastruktur teknologi terdepan.',
  },
] as const;

const leaders: Array<{ name: string; suffix?: string; role: string }> = [
  { name: 'Abd Ghani Hasan', suffix: 'BSc.Eng, MBA', role: 'Special Advisor for Director' },
  { name: 'Drs. Sudarto Digdose', suffix: 'M.Eng.', role: 'Head of Compartement' },
  { name: 'Firdaus Ronnyco, SE', role: 'General Manager' },
];

export default function TentangKami() {
  return (
    <>
      <Navbar />

      <div className="page-hero">
        <div className="page-hero-bg"></div>
        <div className="page-hero-grid"></div>
        <div className="page-hero-line"></div>
        <div className="container page-hero-content">
          <div className="page-eyebrow">PT Cahaya Indo Gemilang</div>
          <h1 className="page-title">Tentang <em>Kami</em></h1>
          <p className="page-desc">Perusahaan terdepan dalam pengelolaan limbah B3 dan HSE Terintegrasi Radiasi untuk industri Migas &amp; Minerba Indonesia.</p>
        </div>
      </div>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumb-inner">
            <Link href="/">Beranda</Link>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
            <span>Tentang Kami</span>
          </div>
        </div>
      </div>

      {/* INTRO */}
      <section className="section">
        <div className="container">
          <div className="about-intro">
            <div className="about-img-stack fade-up">
              <div className="about-img-main">
                <div className="about-silhouette"></div>
              </div>
              <div className="about-accent-bar"></div>
              <div className="about-director-card">
                <div className="about-director-label">Dipimpin Oleh</div>
                <div className="about-director-name">Muhammad Rifli</div>
                <div className="about-director-title">Direktur Utama</div>
              </div>
            </div>
            <div className="about-text fade-up">
              <div className="section-eyebrow">Profil Perusahaan</div>
              <h2 className="section-heading">Mencegah &amp; Memitigasi Risiko Lingkungan Industri</h2>
              <div className="gold-line"></div>
              <p>PT Cahaya Indo Gemilang adalah perusahaan yang bergerak di bidang <strong>pengelolaan limbah Bahan Berbahaya dan Beracun (B3)</strong> serta pengembangan unit khusus Kompartemen Pengelola HSE Terintegrasi Radiasi.</p>
              <p>Didirikan dengan komitmen penuh terhadap keselamatan kerja dan kelestarian lingkungan, kami hadir untuk merespons kebutuhan sektor industri migas dan minerba akan solusi penanganan <strong>TENORM (Naturally Occurring Radioactive Materials)</strong> yang profesional dan sesuai regulasi.</p>
              <p>Dengan tim ahli bersertifikasi nasional dan jaringan mitra strategis, PT Cahaya Indo Gemilang memberikan layanan komprehensif — mulai dari survei awal, identifikasi risiko, hingga pengelolaan akhir limbah berbahaya.</p>
              <div style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
                <Link href="/hubungi-kami" className="btn-primary">Konsultasi Gratis</Link>
                <Link href="/layanan" className="btn-outline-navy">Lihat Layanan</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION VISION */}
      <section style={{ background: 'var(--gray-50)', padding: '80px 0' }}>
        <div className="container">
          <div className="fade-up" style={{ textAlign: 'center', maxWidth: 520, margin: '0 auto 8px' }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Misi &amp; Visi</div>
            <h2 className="section-heading">Fondasi Kerja Kami</h2>
          </div>
          <div className="mv-grid fade-up">
            {missionVision.map(item => (
              <div key={item.number} className={`mv-card${item.dark ? ' dark' : ''}`}>
                <div className="mv-num" style={item.dark ? { color: 'rgba(197,151,58,0.2)' } : undefined}>{item.number}</div>
                <div className="mv-title">{item.title}</div>
                <div className="mv-body">{item.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="section">
        <div className="container">
          <div className="fade-up">
            <div className="section-eyebrow">Nilai Perusahaan</div>
            <h2 className="section-heading">Prinsip Yang Memandu Kami</h2>
          </div>
          <div className="values-grid">
            {values.map((value, idx) => (
              <div key={value.title} className="value-card fade-up">
                <svg className="value-icon" viewBox="0 0 44 44" fill="none">
                  {idx === 0 && (
                    <>
                      <path d="M22 4L6 11v12c0 10.5 6.8 20.3 16 23 9.2-2.7 16-12.5 16-23V11L22 4z" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.08)"/>
                      <path d="M15 22l5 5 9-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </>
                  )}
                  {idx === 1 && (
                    <>
                      <circle cx="22" cy="22" r="16" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.08)"/>
                      <circle cx="22" cy="22" r="5" fill="rgba(197,151,58,0.3)"/>
                      <line x1="22" y1="6" x2="22" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="27" y1="25" x2="36.7" y2="31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="17" y1="25" x2="7.3" y2="31" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </>
                  )}
                  {idx === 2 && (
                    <>
                      <path d="M22 6C12.6 6 5 13.6 5 23s7.6 17 17 17 17-7.6 17-17S31.4 6 22 6z" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.08)"/>
                      <path d="M15 28c1.2-5 3.7-8.5 7-11 3.3 2.5 5.8 6 7 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M16 17c0 3.3 2.7 6 6 6s6-2.7 6-6" stroke="currentColor" strokeWidth="1.5"/>
                    </>
                  )}
                </svg>
                <div className="value-title">{value.title}</div>
                <div className="value-desc">{value.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ background: 'var(--navy)', padding: '80px 0' }}>
        <div className="container">
          <div className="fade-up" style={{ maxWidth: 520, marginBottom: 56 }}>
            <div className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>Perjalanan Kami</div>
            <h2 className="section-heading" style={{ color: 'var(--white)' }}>Sejarah &amp; Tonggak Penting</h2>
          </div>
          <div className="timeline fade-up">
            {timeline.map((item, idx) => (
              <div key={item.year} className="timeline-item" style={idx === timeline.length - 1 ? { marginBottom: 0 } : undefined}>
                <div className="timeline-dot"></div>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-event" style={{ color: 'var(--white)' }}>{item.event}</div>
                <div className="timeline-desc" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORG CHART */}
      <section className="section" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div className="fade-up" style={{ textAlign: 'center', maxWidth: 540, margin: '0 auto 48px' }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Struktur Organisasi</div>
            <h2 className="section-heading">Manajemen &amp; Tim</h2>
            <p style={{ color: 'var(--gray-600)', fontSize: 14.5 }}>Dipimpin oleh jajaran direksi berpengalaman dan didukung tim manajerial yang kompeten di bidangnya.</p>
          </div>
          <div className="org-wrap fade-up">
            <p className="org-scroll-hint">← Geser untuk melihat selengkapnya →</p>
            <div className="org-chart">

              {/* Level 1: Two directors */}
              <div className="org-directors">
                <div className="org-node org-director-node">
                  <div className="org-node-role">Direktur Utama</div>
                  <div className="org-node-name">Firdaus Ronnyco I.S, SE</div>
                </div>
                <div className="org-node org-director-node">
                  <div className="org-node-role">Direktur Operasional</div>
                  <div className="org-node-name">Arthur Soritua Siregar, S.Psi</div>
                </div>
              </div>

              {/* 2-to-1 connector */}
              <div className="org-2to1" />

              {/* Level 2: GM */}
              <div className="org-node org-gm-node">
                <div className="org-node-role">General Manager</div>
                <div className="org-node-name">Sadbudiono</div>
              </div>

              {/* Vertical line to branch */}
              <div className="org-v-line" />

              {/* Level 3: Three managers with branch connector */}
              <div className="org-branch">
                <div className="org-branch-item">
                  <div className="org-node org-mgr-node">
                    <div className="org-node-role">Manager Teknis Lingkungan</div>
                    <div className="org-node-name tbd">Ditetapkan kemudian</div>
                  </div>
                </div>

                <div className="org-branch-item">
                  <div className="org-node org-mgr-node">
                    <div className="org-node-role">Manager Keselamatan Radiasi</div>
                    <div className="org-node-name tbd">Ditetapkan kemudian</div>
                  </div>
                  <div className="org-v-line" style={{ height: 24 }} />
                  <div className="org-node org-experts-node">
                    <div className="org-node-role">Tenaga Ahli</div>
                    <ol className="org-experts-list">
                      <li>Ahli Pengelolaan Limbah B3</li>
                      <li>Ahli Teknik Lingkungan</li>
                      <li>Ahli Keselamatan Radiasi</li>
                      <li>Ahli Ketenaganukliran</li>
                      <li>Tenaga Teknis Pengelolaan Limbah</li>
                    </ol>
                  </div>
                </div>

                <div className="org-branch-item">
                  <div className="org-node org-mgr-node">
                    <div className="org-node-role">Manager Keuangan</div>
                    <div className="org-node-name tbd">Ditetapkan kemudian</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="container">
          <div className="fade-up" style={{ textAlign: 'center', maxWidth: 480, margin: '0 auto' }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Tim Ahli</div>
            <h2 className="section-heading">Profesional Berpengalaman</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Para pemimpin kami membawa keahlian teknis dan pengalaman industri yang mendalam.</p>
          </div>
          <div className="team-grid fade-up">
            {leaders.map(member => (
              <div key={member.name} className="team-card">
                <div className="team-avatar"><div className="team-sil"></div><div className="team-gold-bar"></div></div>
                <div className="team-info">
                  <div className="team-name">{member.name}</div>
                  {member.suffix && <div className="team-suffix">{member.suffix}</div>}
                  <div className="team-role">{member.role}</div>
                </div>
              </div>
            ))}
            <div className="team-card" style={{ background: 'var(--gray-50)', borderStyle: 'dashed' }}>
              <div className="team-avatar" style={{ background: 'var(--gray-100)' }}>
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" style={{ opacity: 0.2, marginBottom: 8 }}>
                  <circle cx="20" cy="18" r="8" stroke="#374151" strokeWidth="1.5"/>
                  <circle cx="36" cy="18" r="8" stroke="#374151" strokeWidth="1.5"/>
                  <path d="M4 44c0-8.84 7.16-16 16-16h16c8.84 0 16 7.16 16 16" stroke="#374151" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <div className="team-gold-bar" style={{ background: 'var(--gray-300)' }}></div>
              </div>
              <div className="team-info">
                <div className="team-name" style={{ color: 'var(--gray-700)' }}>Kelompok Keahlian</div>
                <div className="team-role">Expert Group — Tim Spesialis</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
