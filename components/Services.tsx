import styles from './Services.module.css';

export default function Services() {
  const services = [
    {
      title: 'Pengelolaan Limbah B3',
      description: 'Layanan komprehensif untuk identifikasi, pengumpulan, dan pengolahan limbah B3 industri sesuai regulasi KLH.',
      icon: '🗑️',
      color: '#27ae60'
    },
    {
      title: 'Pengelolaan TENORM',
      description: 'Survei radiasi, pemetaan hotspot, dan penanganan limbah radioaktif untuk industri migas dan minerba.',
      icon: '☢️',
      color: '#e67e22',
      badge: 'UNGGULAN'
    },
    {
      title: 'Konsultansi K3L/HSE',
      description: 'Penyusunan dokumen HSE, risk assessment, dan audit keselamatan kerja terintegrasi.',
      icon: '📋',
      color: '#2980b9'
    },
    {
      title: 'Pengembangan Teknologi',
      description: 'Penyediaan sistem monitoring paparan radiasi dan teknologi pengolahan limbah berkelanjutan.',
      icon: '⚙️',
      color: '#1b3d2f'
    }
  ];

  return (
    <section id="services" className={`section ${styles.servicesSection}`}>
      <div className="container">
        <div className="section-title">
          <span className={styles.sub}>LAYANAN KAMI</span>
          <h2>Solusi Terintegrasi Untuk Industri</h2>
          <p>Layanan Komprehensif mulai dari identifikasi, transportasi, hingga konsultasi K3L</p>
        </div>
        <div className="grid grid-4">
          {services.map((service, i) => (
            <div key={i} className={styles.card} style={{'--border-color': service.color} as any}>
              {service.badge && <span className={styles.badge}>{service.badge}</span>}
              <div className={styles.iconWrapper} style={{background: `${service.color}10`}}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <ul className={styles.list}>
                <li>Identifikasi & Pengolahan</li>
                <li>Transportasi Aman</li>
                <li>Kepatuhan Regulasi</li>
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.more}>
          <a href="#" className={styles.moreLink}>Lihat Detail Layanan Kami →</a>
        </div>
      </div>
    </section>
  );
}
