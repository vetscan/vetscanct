import Link from 'next/link';
import styles from './Prices.module.css';
import content from '@/data/siteContent.json';

export default function Prices() {
  const { prices } = content;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{prices.title}</h2>
        
        <div className={styles.grid}>
          {prices.cards.map(card => (
            <div key={card.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <div className={styles.price}>{card.price}</div>
              </div>
              
              <ul className={styles.servicesList}>
                {card.services.map((service, index) => (
                  <li key={index} className={styles.serviceItem}>
                    {service}
                  </li>
                ))}
              </ul>
              
              <Link href="/prices" className={styles.link}>
                <span className={styles.linkText}>{prices.linkText}</span>
                <div className={styles.arrowCircle}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
