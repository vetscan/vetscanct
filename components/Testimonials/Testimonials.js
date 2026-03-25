'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Testimonials.module.css';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [maxHeight, setMaxHeight] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const autoPlayRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const { t } = useLanguage();
  
  // Получаем переведенные отзывы
  const testimonialsItems = t('testimonials.items');

  // Анимация заголовка при скролле
  useEffect(() => {
    const titleElement = titleRef.current;
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

    if (titleElement) {
      observer.observe(titleElement);
    }

    return () => {
      if (titleElement) {
        observer.unobserve(titleElement);
      }
    };
  }, []);

  // Определяем количество видимых слайдов в зависимости от ширины экрана
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth <= 550) {
        setSlidesPerView(1); // 1 карточка на очень маленьких экранах
      } else if (window.innerWidth <= 768) {
        setSlidesPerView(2); // 2 карточки на мобильных
      } else if (window.innerWidth <= 1024) {
        setSlidesPerView(2); // 2 карточки на планшетах
      } else {
        setSlidesPerView(3); // 3 карточки на десктопе
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);

  // Вычисляем максимальную высоту карточек
  useEffect(() => {
    const calculateMaxHeight = () => {
      if (cardsRef.current.length > 0) {
        // Сбрасываем высоту для правильного измерения
        cardsRef.current.forEach(card => {
          if (card) card.style.height = 'auto';
        });
        
        // Небольшая задержка для корректного измерения
        setTimeout(() => {
          // Находим максимальную высоту
          const heights = cardsRef.current
            .filter(card => card !== null)
            .map(card => card.offsetHeight);
          const max = Math.max(...heights);
          setMaxHeight(max);
        }, 50);
      }
    };

    // Задержка для корректного измерения после рендера
    setTimeout(calculateMaxHeight, 100);
    
    window.addEventListener('resize', calculateMaxHeight);
    return () => window.removeEventListener('resize', calculateMaxHeight);
  }, [testimonialsItems, slidesPerView]); // Добавил slidesPerView в зависимости

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
    if (!Array.isArray(testimonialsItems) || testimonialsItems.length === 0) return;
    
    if (currentIndex === testimonialsItems.length * 2) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonialsItems.length);
      }, 500);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 550);
    } else if (currentIndex === testimonialsItems.length - 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonialsItems.length * 2 - 1);
      }, 500);
      setTimeout(() => {
        setIsTransitioning(true);
      }, 550);
    }
  }, [currentIndex, testimonialsItems]);

  // Дублируем отзывы для бесшовной прокрутки (с проверкой на массив)
  const extendedTestimonials = Array.isArray(testimonialsItems) 
    ? [...testimonialsItems, ...testimonialsItems, ...testimonialsItems]
    : [];

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
        <h2 
          ref={titleRef}
          className={`${styles.title} ${isVisible ? styles.titleVisible : ''}`}
        >
          {t('testimonials.title')}
        </h2>
        
        <div className={styles.carouselWrapper}>
          <div className={styles.carousel}>
            <div 
              className={styles.carouselTrack}
              style={{ 
                transform: `translateX(calc(-${currentIndex * 100 / slidesPerView}% - ${currentIndex * (slidesPerView === 3 ? 0.5 : slidesPerView === 2 ? 0.5 : 0)}rem))`,
                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
              }}
            >
              {extendedTestimonials.map((testimonial, index) => (
                <div key={index} className={styles.slide}>
                  <div 
                    ref={el => cardsRef.current[index] = el}
                    className={styles.card}
                    style={{ height: maxHeight ? `${maxHeight}px` : 'auto' }}
                  >
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
          {testimonialsItems.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === (currentIndex % testimonialsItems.length) ? styles.indicatorActive : ''}`}
              onClick={() => {
                setIsAutoPlaying(false);
                setCurrentIndex(testimonialsItems.length + index);
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
