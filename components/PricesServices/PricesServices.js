import Link from 'next/link';
import styles from './PricesServices.module.css';
import content from '@/data/siteContent.json';

export default function PricesServices() {
  const { pricesServices } = content;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{pricesServices.title}</h2>
        <p className={styles.subtitle}>
          {pricesServices.subtitle}
        </p>
        
        <div className={styles.grid}>
          {pricesServices.services.map(service => (
            <div 
              key={service.id} 
              className={`${styles.card} ${service.featured ? styles.featured : ''}`}
            >
              {service.featured && (
                <div className={styles.badge}>{service.badge}</div>
              )}
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <div className={styles.price}>{service.price}</div>
              <ul className={styles.features}>
                {service.features.map((feature, index) => (
                  <li key={index} className={styles.feature}>
                    <span className={styles.checkmark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={pricesServices.appointmentLink} className={styles.btn}>
                Записатись
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
