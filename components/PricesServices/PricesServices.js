'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './PricesServices.module.css';

export default function PricesServices() {
  const { t, locale } = useLanguage();
  const pricesData = t('pricesServices');
  const services = t('pricesServices.services');

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{pricesData.title}</h2>
        <p className={styles.subtitle}>
          {pricesData.subtitle}
        </p>
        
        <div className={styles.grid}>
          {Array.isArray(services) && services.map((service, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${service.featured ? styles.featured : ''}`}
            >
              {service.featured && service.badge && (
                <div className={styles.badge}>{service.badge}</div>
              )}
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <div className={styles.price}>{service.price}</div>
              <ul className={styles.features}>
                {Array.isArray(service.features) && service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className={styles.feature}>
                    <span className={styles.checkmark}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={`/${locale}/appointment`} className={styles.btn}>
                {pricesData.appointmentButton}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
