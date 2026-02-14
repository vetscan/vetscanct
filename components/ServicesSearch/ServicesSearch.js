'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import AppointmentModal from '@/components/AppointmentModal/AppointmentModal';
import styles from './ServicesSearch.module.css';
import content from '@/data/siteContent.json';

export default function ServicesSearch() {
  const { servicesSearch } = content;
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // Сбрасываем анимацию когда элемент уходит из viewport
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1, // Запускаем когда 10% элемента видно
      }
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
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 
            ref={titleRef}
            className={`${styles.title} ${isVisible ? styles.titleVisible : ''}`}
          >
            {t('servicesSearch.title')}
          </h2>
          
          <div className={styles.grid}>
            {servicesSearch.services.map(service => (
              <Link href={service.link} key={service.id} className={styles.card}>
                <div className={styles.arrow}>
                  <img src="/paw.png" alt="paw" className={styles.pawIcon} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{t(`servicesSearch.services.${service.id}`)}</h3>
                </div>
              </Link>
            ))}

            {/* Спеціальна карточка "Не знайшли" */}
            <button 
              className={styles.specialCard}
              onClick={() => setIsModalOpen(true)}
            >
              <div className={styles.arrow}>
                <img src="/paw.png" alt="paw" className={styles.pawIconWhite} />
              </div>
              <div className={styles.specialCardContent}>
                <h3 className={styles.specialCardTitle}>{t('servicesSearch.specialCard.title')}</h3>
                <h3 className={styles.specialCardTitleBold}>{t('servicesSearch.specialCard.titleBold')}</h3>
              </div>
            </button>
          </div>
        </div>
      </section>

      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
