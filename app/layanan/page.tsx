import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const services: Array<{
  number: string;
  name: string;
  tag: string;
  desc: string;
  badge?: string;
  items: string[];
}> = [
  {
    number: '01',
    name: 'Pengelolaan Limbah B3',
    tag: 'Waste Management',
    desc: 'Layanan komprehensif untuk identifikasi, pengumpulan, penyimpanan sementara, pengangkutan, dan pengolahan limbah Bahan Berbahaya dan Beracun (B3) industri sesuai regulasi Kementerian Lingkungan Hidup.',
    items: [
      'Identifikasi & Karakterisasi Limbah',
      'Penyimpanan Sementara Aman',
      'Transportasi & Manifes Limbah',
      'Pengolahan & Pemusnahan',
      'Dokumentasi Kepatuhan KLH',
      'Pelaporan Berkala',
    ],
  },
  {
    number: '02',
    name: 'Pengelolaan TENORM/MIR',
    tag: 'Radiation Safety',
    badge: 'Unggulan',
    desc: 'Survei radiasi lapangan, pemetaan hotspot radioaktif, dan penanganan limbah TENORM/MIR (Technologically Enhanced Naturally Occurring Radioactive Materials) untuk industri migas dan minerba sesuai izin BAPETEN.',
    items: [
      'Survei Radiasi Lapangan',
      'Pemetaan & Hotspot Mapping',
      'Pengambilan Sampel NORM/TENORM/MIR',
      'Analisis Laboratorium',
      'Dekontaminasi Area & Peralatan',
      'Pengelolaan Akhir Limbah Radioaktif',
    ],
  },
  {
    number: '03',
    name: 'Konsultansi K3L/HSE',
    tag: 'HSE Consulting',
    desc: 'Penyusunan dokumen HSE terintegrasi, identifikasi bahaya dan penilaian risiko (HIRADC), serta audit keselamatan kerja yang komprehensif untuk memastikan kepatuhan dan perlindungan tenaga kerja.',
    items: [
      'Penyusunan Dokumen HSE Plan',
      'HIRADC & Risk Assessment',
      'Audit Keselamatan Kerja',
      'Pelatihan & Simulasi K3',
      'Investigasi Kecelakaan',
      'Laporan Kepatuhan Regulasi',
    ],
  },
  {
    number: '04',
    name: 'Pengembangan Teknologi',
    tag: 'Technology Solutions',
    desc: 'Penyediaan dan implementasi sistem monitoring paparan radiasi real-time, serta pengembangan teknologi pengolahan limbah berkelanjutan yang disesuaikan dengan kebutuhan spesifik fasilitas industri.',
    items: [
      'Sistem Monitoring Radiasi',
      'Perangkat Detektor Portabel',
      'Dashboard Pemantauan Real-Time',
      'Kalibrasi Instrumen',
      'Teknologi Pengolahan Inovatif',
      'Integrasi Sistem SCADA/DCS',
    ],
  },
];

const processSteps = [
  { label: 'Konsultasi Awal', desc: 'Diskusi kebutuhan dan ruang lingkup pekerjaan' },
  { label: 'Survei Lapangan', desc: 'Inspeksi lokasi dan pengambilan data awal' },
  { label: 'Perencanaan', desc: 'Penyusunan rencana kerja dan anggaran' },
  { label: 'Pelaksanaan', desc: 'Implementasi layanan sesuai standar K3L' },
  { label: 'Pelaporan', desc: 'Dokumentasi lengkap dan laporan kepatuhan' },
] as const;

const complianceBadges = [
  ['KLH', 'Kementerian Lingkungan Hidup'],
  ['BAPETEN', 'Pengawas Tenaga Nuklir'],
  ['SKK Migas', 'Satuan Kerja Khusus'],
  ['ISO HSE', 'Standar Keselamatan Kerja'],
] as const;

export default function Layanan() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Apa yang Kami Tawarkan"
        title={<>Layanan <em>Profesional</em></>}
        desc="Solusi terintegrasi untuk pengelolaan limbah B3, TENORM/MIR, konsultansi HSE, dan pengembangan teknologi industri."
        breadcrumb="Layanan"
      />

      {/* SERVICES LIST */}
      <section className="section">
        <div className="container">
          <div className="fade-up" style={{ marginBottom: 48 }}>
            <div className="section-eyebrow">Layanan Kami</div>
            <h2 className="section-heading">Solusi Terintegrasi Untuk Industri</h2>
            <p className="section-sub">Setiap layanan dirancang untuk memenuhi kebutuhan spesifik industri migas dan minerba dengan standar keselamatan tertinggi.</p>
          </div>
          <div className="services-overview fade-up">
            {services.map(service => (
              <div key={service.number} className="service-row">
                <div className="service-num-col"><span>{service.number}</span></div>
                <div className="service-label-col">
                  {service.badge && <div className="svc-badge">{service.badge}</div>}
                  <div className="svc-name">{service.name}</div>
                  <div className="svc-tag">{service.tag}</div>
                </div>
                <div className="service-detail-col">
                  <p className="svc-desc">{service.desc}</p>
                  <ul className="svc-list">
                    {service.items.map(item => <li key={item}>{item}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: 'var(--gray-50)', padding: '80px 0' }}>
        <div className="container">
          <div className="fade-up" style={{ textAlign: 'center', maxWidth: 500, margin: '0 auto 0' }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Cara Kerja Kami</div>
            <h2 className="section-heading">Proses Layanan</h2>
          </div>
          <div className="process-grid fade-up">
            {processSteps.map((step, idx) => (
              <div key={step.label} className="process-step">
                <div className="process-circle">
                  {idx === 0 && (
                    <svg className="process-icon" viewBox="0 0 28 28" fill="none"><rect x="4" y="4" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M9 14h10M14 9v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  )}
                  {idx === 1 && (
                    <svg className="process-icon" viewBox="0 0 28 28" fill="none"><path d="M14 4L4 9v7c0 6.07 4.27 11.74 10 13 5.73-1.26 10-6.93 10-13V9L14 4z" stroke="currentColor" strokeWidth="1.5"/><path d="M10 14l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  )}
                  {idx === 2 && (
                    <svg className="process-icon" viewBox="0 0 28 28" fill="none"><rect x="4" y="4" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M9 10h10M9 14h10M9 18h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  )}
                  {idx === 3 && (
                    <svg className="process-icon" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5"/><path d="M14 8v7l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  )}
                  {idx === 4 && (
                    <svg className="process-icon" viewBox="0 0 28 28" fill="none"><path d="M4 14l7 7L24 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  )}
                </div>
                <div className="process-label">{step.label}</div>
                <div className="process-desc">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE + CTA */}
      <section className="section">
        <div className="container fade-up">
          <div className="compliance-row">
            <div className="compliance-text">
              <h3>Beroperasi Sesuai Regulasi Nasional</h3>
              <p>Semua layanan kami dijalankan berdasarkan izin dan sertifikasi resmi dari lembaga pengawas terkait.</p>
            </div>
            <div className="compliance-badges">
              {complianceBadges.map(([name, desc]) => (
                <div key={name} className="comp-badge"><div className="comp-badge-name">{name}</div><div className="comp-badge-desc">{desc}</div></div>
              ))}
            </div>
          </div>
          <div className="cta-band">
            <div>
              <h3>Siap Memulai Proyek Anda?</h3>
              <p>Tim ahli kami siap memberikan konsultasi gratis dan proposal layanan yang sesuai dengan kebutuhan Anda.</p>
            </div>
            <Link href="/hubungi-kami" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>Ajukan Permintaan Survey</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
