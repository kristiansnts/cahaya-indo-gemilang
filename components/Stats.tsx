import styles from './Stats.module.css';

export default function Stats() {
  const stats = [
    { label: 'Patuh Regulasi', detail: 'KLH & BAPETEN', icon: '✓' },
    { label: 'Standar Safety', detail: 'ISO & HSE Migas', icon: '🛡️' },
    { label: 'Tenaga Ahli', detail: 'Sertifikasi Nasional', icon: '👥' },
    { label: 'Respon Cepat', detail: 'Layanan 24/7', icon: '🕒' },
  ];

  return (
    <div className={styles.statsBar}>
      <div className={`container ${styles.grid}`}>
        {stats.map((stat, i) => (
          <div key={i} className={styles.statItem}>
            <div className={styles.icon}>{stat.icon}</div>
            <div className={styles.text}>
              <div className={styles.label}>{stat.label}</div>
              <div className={styles.detail}>{stat.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
