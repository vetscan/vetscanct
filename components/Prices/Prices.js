'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Prices.module.css';

export default function Prices() {
  const { t, locale } = useLanguage();
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
          }
          // Убираем сброс при выходе из viewport
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
          {Array.isArray(pricesCards) && pricesCards.map((card, index) => {
            const CardWrapper = card.link ? Link : 'div';
            const cardProps = card.link ? { href: `/${locale}${card.link}` } : {};
            
            return (
              <CardWrapper
                key={index}
                {...cardProps}
                className={`${styles.card} ${isVisible ? styles.cardVisible : ''} ${card.link ? styles.cardClickable : ''}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <div className={styles.price}>{card.price}</div>
                </div>
                
                <ul className={styles.servicesList}>
                  {card.services.map((service, serviceIndex) => {
                    const isLastService = serviceIndex === card.services.length - 1 && 
                                        (service.includes('Та інші послуги') || 
                                         service.includes('И другие услуги'));
                    
                    return (
                      <li 
                        key={serviceIndex} 
                        className={`${styles.serviceItem} ${isLastService ? styles.serviceItemHighlight : ''}`}
                      >
                        {service}
                      </li>
                    );
                  })}
                </ul>
                
                <div className={styles.arrowContainer}>
                  <svg className={styles.pointerArrow} xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 10h18"/>
                    <path d="M16 6l4 4-4 4"/>
                  </svg>
                  <div className={styles.arrowCircle}>
                    <Image src="/paw.png" alt="" width={40} height={40} className={styles.pawIcon} />
                  </div>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
