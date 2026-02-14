'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './OncologyHelp.module.css';
import content from '@/data/siteContent.json';

export default function OncologyHelp() {
  const { oncologyHelp } = content;
  const { t } = useLanguage();
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
          {t('oncologyHelp.title')}
        </h2>
        
        <div className={styles.description}>
          <p>
            {t('oncologyHelp.description')}
          </p>
        </div>
      </div>
    </section>
  );
}
