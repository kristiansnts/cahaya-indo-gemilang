import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import SurveyForm from '@/components/SurveyForm';
import Link from 'next/link';

const contactItems = [
  {
    label: 'Kantor Pusat',
    lines: ['Infiniti Office, Menara Cakrawala Lt 12, Unit 05A', 'Jl. M.H. Thamrin No.9, Kebon Sirih', 'Kecamatan Menteng, Jakarta Pusat 10340'],
    href: undefined as string | undefined,
  },
  {
    label: 'Hotline Layanan 24/7',
    lines: ['08139869311'],
    href: 'tel:08139869311',
  },
  {
    label: 'WhatsApp',
    lines: ['08139869311'],
    href: 'https://wa.me/628139869311',
  },
  {
    label: 'Email',
    lines: ['cahayaindogemilang88@gmail.com'],
    href: 'mailto:cahayaindogemilang88@gmail.com',
  },
];

const officeHours = [
  { day: 'Senin – Jumat', time: '08.00 – 17.00 WIB', badge: false },
  { day: 'Sabtu', time: '08.00 – 13.00 WIB', badge: false },
  { day: 'Darurat / Emergency', time: null as string | null, badge: true },
];

const whyItems = [
  { label: 'Berlisensi Resmi', desc: 'Izin KLH, BAPETEN, dan SKK Migas yang sah dan terverifikasi.' },
  { label: 'Tim Ahli Bersertifikasi', desc: 'Insinyur dan spesialis nuklir dengan sertifikasi nasional.' },
  { label: 'Respons 24/7', desc: 'Hotline darurat tersedia sepanjang waktu untuk situasi kritis.' },
  { label: 'Dokumentasi Lengkap', desc: 'Laporan dan dokumen kepatuhan yang terstruktur dan akurat.' },
];

export default function HubungiKami() {
  return (
    <>
      <Navbar />

      <PageHero
        eyebrow="Kami Siap Membantu"
        title={<>Hubungi <em>Kami</em></>}
        desc="Konsultasikan kebutuhan pengelolaan limbah B3 dan TENORM/MIR Anda dengan tim ahli kami. Respons dalam 1x24 jam kerja."
        breadcrumb="Hubungi Kami"
      />

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            {/* INFO */}
            <div className="fade-up">
              <div className="section-eyebrow">Informasi Kontak</div>
              <h2 className="contact-info-heading">Mari Berdiskusi tentang Kebutuhan Anda</h2>
              <p className="contact-info-desc">Tim ahli kami siap memberikan konsultasi teknis dan proposal layanan yang tepat sesuai dengan kebutuhan industri Anda.</p>

              <div className="contact-items">
                {contactItems.map((item, idx) => (
                  <div key={item.label} className="contact-item">
                    <div className="contact-item-icon-wrap">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        {idx === 0 && <><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></>}
                        {idx === 1 && <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z"/>}
                        {idx === 2 && <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>}
                        {idx === 3 && <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></>}
                      </svg>
                    </div>
                    <div>
                      <div className="contact-item-label">{item.label}</div>
                      <div className="contact-item-value">
                        {item.href ? (
                          <a href={item.href}>{item.lines[0]}</a>
                        ) : (
                          item.lines.map((line, i) => (
                            <span key={i}>{line}{i < item.lines.length - 1 && <br/>}</span>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="office-hours">
                <div className="office-hours-title">Jam Operasional</div>
                {officeHours.map((row) => (
                  <div key={row.day} className="hours-row">
                    <span className="hours-day">{row.day}</span>
                    {row.badge ? (
                      <span><span className="hours-badge">24/7</span></span>
                    ) : (
                      <span className="hours-time">{row.time}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="map-embed">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.590014449401!2d106.8236974!3d-6.185584800000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5f2a2b7c0b1%3A0x460c029eefb0ae91!2sInfiniti%20Office%20-%20Sarinah%20Thamrin!5e0!3m2!1sen!2sid!4v1777012458444!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi PT Cahaya Indo Gemilang"
                />
              </div>
            </div>

            {/* FORM */}
            <div className="fade-up">
              <SurveyForm />
            </div>
          </div>

          {/* WHY CHOOSE US */}
          <div className="fade-up" style={{ textAlign: 'center', maxWidth: 480, margin: '80px auto 0' }}>
            <div className="section-eyebrow" style={{ justifyContent: 'center' }}>Mengapa Kami</div>
            <h2 className="section-heading">Alasan Memilih CIG</h2>
          </div>
          <div className="why-grid fade-up">
            {whyItems.map((item, idx) => (
              <div key={item.label} className="why-item">
                <svg className="why-icon" viewBox="0 0 40 40" fill="none">
                  {idx === 0 && <><path d="M20 4L6 10v11c0 9.2 5.55 17.8 14 20 8.45-2.2 14-10.8 14-20V10L20 4z" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.08)"/><path d="M13 20l5 5 9-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></>}
                  {idx === 1 && <><circle cx="20" cy="14" r="7" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.08)"/><path d="M8 36c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>}
                  {idx === 2 && <><circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.08)"/><path d="M20 11v10l5 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></>}
                  {idx === 3 && <><rect x="8" y="8" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" fill="rgba(197,151,58,0.08)"/><path d="M14 20h12M14 15h12M14 25h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></>}
                </svg>
                <div className="why-label">{item.label}</div>
                <div className="why-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
