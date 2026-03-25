'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentModal from '@/components/AppointmentModal/AppointmentModal';
import styles from './ServicesSearch.module.css';

export default function ServicesSearch() {
  const { t, locale } = useLanguage();
  const services = t('servicesSearch.services');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  // Проверяем что services это массив
  const servicesArray = Array.isArray(services) ? services : [];

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

  // Анимация карточек
  useEffect(() => {
    const cardsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.children;
            Array.from(cards).forEach((card, index) => {
              setTimeout(() => {
                card.classList.add(styles.cardVisible);
              }, index * 100); // Задержка 100мс между карточками
            });
          } else {
            // Сбрасываем анимацию когда уходим из viewport
            const cards = entry.target.children;
            Array.from(cards).forEach((card) => {
              card.classList.remove(styles.cardVisible);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardsRef.current) {
      cardsObserver.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) {
        cardsObserver.unobserve(cardsRef.current);
      }
    };
  }, [servicesArray]);

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
          
          <div ref={cardsRef} className={styles.grid}>
            {servicesArray.map(service => (
              service.modal ? (
                <button
                  key={service.id}
                  className={styles.card}
                  onClick={() => setIsModalOpen(true)}
                >
                  <div className={styles.arrowContainer}>
                    <svg className={styles.pointerArrow} xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 10h18"/>
                      <path d="M16 6l4 4-4 4"/>
                    </svg>
                    <div className={styles.arrow}>
                      <Image src="/paw.png" alt="" width={32} height={32} className={styles.pawIcon} />
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                  </div>
                </button>
              ) : (
                <Link href={`/${locale}${service.link}`} key={service.id} className={styles.card}>
                  <div className={styles.arrowContainer}>
                    <svg className={styles.pointerArrow} xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 10h18"/>
                      <path d="M16 6l4 4-4 4"/>
                    </svg>
                    <div className={styles.arrow}>
                      <Image src="/paw.png" alt="" width={32} height={32} className={styles.pawIcon} />
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                  </div>
                </Link>
              )
            ))}

            {/* Спеціальна карточка "Не знайшли" */}
            <button 
              className={styles.specialCard}
              onClick={() => setIsModalOpen(true)}
            >
              <div className={styles.arrowContainer}>
                <svg className={styles.pointerArrowWhite} xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 10h18"/>
                  <path d="M16 6l4 4-4 4"/>
                </svg>
                <div className={styles.arrow}>
                  <Image src="/paw.png" alt="" width={32} height={32} className={styles.pawIconWhite} />
                </div>
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
