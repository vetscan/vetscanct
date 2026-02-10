import Link from 'next/link';
import styles from './OncologyHelp.module.css';
import content from '@/data/siteContent.json';

export default function OncologyHelp() {
  const { oncologyHelp } = content;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{oncologyHelp.title}</h2>
        
        <div className={styles.description}>
          <p>
            {oncologyHelp.description}
          </p>
        </div>

        <div className={styles.grid}>
          {oncologyHelp.cards.map(card => (
            <Link href={card.link} key={card.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <div className={styles.arrow}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </div>
              <p className={styles.cardDescription}>{card.description}</p>
            </Link>
          ))}

          {/* Червона карточка */}
          <Link href={oncologyHelp.specialCard.link} className={styles.specialCard}>
            <div className={styles.specialCardHeader}>
              <div>
                <h3 className={styles.specialCardTitle}>{oncologyHelp.specialCard.title}</h3>
                <p className={styles.specialCardSubtitle}>{oncologyHelp.specialCard.subtitle}</p>
              </div>
              <div className={styles.arrowWhite}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
