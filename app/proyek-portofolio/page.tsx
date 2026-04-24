import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProyekGrid from '@/components/ProyekGrid';
import PageHero from '@/components/PageHero';
import Link from 'next/link';

const featuredProject = {
  client: 'Industri Migas — Kalimantan Timur',
  title: 'Survei & Pengelolaan TENORM/MIR Fasilitas Produksi Minyak Bumi',
  desc: 'Program komprehensif survei radiasi lapangan, pemetaan hotspot TENORM/MIR, dan implementasi sistem pengelolaan limbah radioaktif di fasilitas produksi migas berskala besar.',
  stats: [
    { value: '12', label: 'Titik Survei' },
    { value: '100%', label: 'Kepatuhan BAPETEN' },
    { value: '8 Bln', label: 'Durasi Proyek' },
  ],
} as const;


export default function ProyekPortofolio() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Rekam Jejak Kami"
        title={<>Proyek &amp; <em>Portofolio</em></>}
        desc="Dokumentasi proyek-proyek pengelolaan limbah B3 dan TENORM/MIR yang telah berhasil kami selesaikan bersama mitra industri terkemuka."
        breadcrumb="Proyek &amp; Portofolio"
      />

      <section className="section">
        <div className="container">
          {/* FEATURED */}
          <div className="fade-up" style={{ marginBottom: 64 }}>
            <div className="section-eyebrow">Proyek Unggulan</div>
            <h2 className="section-heading">Studi Kasus Terpilih</h2>
          </div>
          <div className="featured-project fade-up">
            <div className="featured-visual" style={{ padding: 0, overflow: 'hidden' }}>
              <img 
                src="/images/proyek/utama-kaltim.png" 
                alt={featuredProject.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="featured-badge">Proyek Unggulan</div>
            </div>
            <div className="featured-body">
              <div className="featured-client">{featuredProject.client}</div>
              <div className="featured-title">{featuredProject.title}</div>
              <div className="featured-desc">{featuredProject.desc}</div>
              <div className="featured-stats">
                {featuredProject.stats.map(stat => (
                  <div key={stat.label}>
                    <div className="featured-stat-val">{stat.value}</div>
                    <div className="featured-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FILTER + GRID */}
          <div className="fade-up">
            <div className="section-eyebrow">Semua Proyek</div>
            <h2 className="section-heading" style={{ marginBottom: 32 }}>Rekam Jejak Lengkap</h2>
          </div>
          <ProyekGrid />

          <div className="cta-band fade-up">
            <div>
              <h3>Proyek Anda Berikutnya?</h3>
              <p>Konsultasikan kebutuhan pengelolaan limbah dan HSE Anda dengan tim ahli kami.</p>
            </div>
            <Link href="/hubungi-kami" className="btn-primary">Diskusikan Proyek Anda</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
