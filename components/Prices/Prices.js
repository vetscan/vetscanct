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
                  <img src="/paw.png" alt="paw" className={styles.pawIcon} />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
