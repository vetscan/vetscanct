'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Prices.module.css';

export default function Prices() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);
  
  // Получаем переведенные карточки цен
  const pricesCards = t('prices.cards');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 
          ref={titleRef}
          className={`${styles.title} ${isVisible ? styles.titleVisible : ''}`}
        >
          {t('prices.title')}
        </h2>
        
        <div className={styles.grid}>
          {Array.isArray(pricesCards) && pricesCards.map((card, index) => (
            <div 
              key={index} 
              className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <div className={styles.price}>{card.price}</div>
              </div>
              
              <ul className={styles.servicesList}>
                {card.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className={styles.serviceItem}>
                    {service}
                  </li>
                ))}
              </ul>
              
              <div className={styles.arrowCircle}>
                <img src="/paw.png" alt="paw" className={styles.pawIcon} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
