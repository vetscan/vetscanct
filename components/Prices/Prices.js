'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './Prices.module.css';
import content from '@/data/siteContent.json';

export default function Prices() {
  const { prices } = content;
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

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
          {prices.title}
        </h2>
        
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
