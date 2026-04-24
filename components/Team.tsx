import styles from './Team.module.css';

export default function Team() {
  const team = [
    { name: 'Abd Ghani Hasan', title: 'Special Advisor for Director', suffix: 'BSc.Eng, MBA' },
    { name: 'Drs. Sudarto Digdose', title: 'Head of Compartement', suffix: 'M.Eng.' },
    { name: 'Firdaus Ronnyco, SE', title: 'General Manager' },
    { name: 'Kelompok Keahlian', title: 'Expert Group' },
  ];

  return (
    <section id="team" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Tim Ahli Kami</h2>
          <p>Profesional berpengalaman di bidang rekayasa nuklir dan lingkungan</p>
        </div>
        <div className="grid grid-4">
          {team.map((member, i) => (
            <div key={i} className={styles.member}>
              <div className={styles.avatar}>
                {member.name === 'Kelompok Keahlian' ? (
                  <span className={styles.groupIcon}>👥</span>
                ) : (
                  <span className={styles.personIcon}>👤</span>
                )}
              </div>
              <h4 className={styles.name}>{member.name}</h4>
              {member.suffix && <span className={styles.suffix}>{member.suffix}</span>}
              <p className={styles.title}>{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
