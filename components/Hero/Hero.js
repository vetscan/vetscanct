import styles from './Hero.module.css';
import content from '@/data/siteContent.json';

export default function Hero() {
  const { hero } = content;

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {hero.title}
          </h1>
          <div className={styles.subtitle}>
            {hero.subtitleLines.map((line, index) => (
              <p key={`${line}-${index}`}>{line}</p>
            ))}
          </div>
          <div className={styles.buttons}>
            <button className={styles.appointmentBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              {hero.appointmentButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
