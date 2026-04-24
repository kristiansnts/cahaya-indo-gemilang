import styles from './PageHero.module.css';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

export default function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </section>
  );
}
