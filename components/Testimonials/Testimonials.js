'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Testimonials.module.css';
import content from '@/data/siteContent.json';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const autoPlayRef = useRef(null);
  const { testimonials } = content;

  // Дублируем отзывы для бесшовной прокрутки
  const extendedTestimonials = [...testimonials.items, ...testimonials.items, ...testimonials.items];

  // Автоматическая прокрутка влево (по одной карточке)
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 4000); // Каждые 4 секунды
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  // Бесшовный переход
  useEffect(() => {
    if (currentIndex === testimonials.items.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonials.items.length);
      }, 500);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 550);
    } else if (currentIndex === testimonials.items.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonials.items.length * 2 - 1);
      }, 500);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 550);
    }
  }, [currentIndex, testimonials.items.length]);

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
        <h2 className={styles.title}>{testimonials.title}</h2>
        
        <div className={styles.carouselWrapper}>
          <div className={styles.carousel}>
            <div 
              className={styles.carouselTrack}
              style={{ 
                transform: `translateX(calc(-${currentIndex * 100 / 3}% - ${currentIndex * 0.5}rem))`,
                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div key={`${testimonial.id}-${index}`} className={styles.slide}>
                  <div className={styles.card}>
                    <div className={styles.header}>
                      <h3 className={styles.name}>{testimonial.name}</h3>
                      <div className={styles.rating}>
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FFA500" stroke="#FFA500" strokeWidth="1">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className={styles.text}>{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className={`${styles.navButton} ${styles.navButtonLeft}`}
            onClick={goToPrevious}
            aria-label="Попередній відгук"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>

          <button 
            className={`${styles.navButton} ${styles.navButtonRight}`}
            onClick={goToNext}
            aria-label="Наступний відгук"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>

        {/* Индикаторы */}
        <div className={styles.indicators}>
          {testimonials.items.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === (currentIndex % testimonials.items.length) ? styles.indicatorActive : ''}`}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(testimonials.items.length + index);
                setTimeout(() => setIsAutoPlaying(true), 5000);
              }}
              aria-label={`Перейти до відгуку ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
