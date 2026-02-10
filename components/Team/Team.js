'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Team.module.css';
import content from '@/data/siteContent.json';

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const autoPlayRef = useRef(null);
  const { team } = content;
  const doctors = team.doctors;

  // Дублируем карточки для бесшовной прокрутки
  const extendedDoctors = [...doctors, ...doctors, ...doctors];

  // Автоматическая прокрутка влево (по одной карточке)
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 3000); // Каждые 3 секунды
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Бесшовный переход (когда доходим до конца, мгновенно возвращаемся к началу)
  useEffect(() => {
    if (currentIndex === doctors.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(doctors.length);
      }, 500);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 550);
    } else if (currentIndex === doctors.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(doctors.length * 2 - 1);
      }, 500);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 550);
    }
  }, [currentIndex, doctors.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => prevIndex - 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{team.title}</h2>
        
        <div className={styles.carouselWrapper}>
          <button 
            className={`${styles.navButton} ${styles.navButtonLeft}`}
            onClick={goToPrevious}
            aria-label="Попередній лікар"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>

          <div className={styles.carousel}>
            <div 
              className={styles.carouselTrack}
              style={{ 
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
              }}
            >
              {extendedDoctors.map((doctor, index) => (
                <div key={`${doctor.id}-${index}`} className={styles.slide}>
                  <div className={styles.card}>
                    <div className={styles.imageWrapper}>
                      <div className={styles.imagePlaceholder}>
                        {team.placeholderEmoji}
                      </div>
                      <div className={styles.badges}>
                        {doctor.badges.map((badge, badgeIndex) => (
                          <span key={badgeIndex} className={styles.badge}>
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className={styles.info}>
                      <h3 className={styles.name}>{doctor.name}</h3>
                      <p className={styles.position}>{doctor.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className={`${styles.navButton} ${styles.navButtonRight}`}
            onClick={goToNext}
            aria-label="Наступний лікар"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Индикаторы */}
        <div className={styles.indicators}>
          {doctors.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === (currentIndex % doctors.length) ? styles.indicatorActive : ''}`}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(doctors.length + index);
                setTimeout(() => setIsAutoPlaying(true), 5000);
              }}
              aria-label={`Перейти до лікаря ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
