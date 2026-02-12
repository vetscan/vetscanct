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
                  <img src="/paw.png" alt="paw" className={styles.pawIcon} />
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
                <img src="/paw.png" alt="paw" className={styles.pawIconWhite} />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
