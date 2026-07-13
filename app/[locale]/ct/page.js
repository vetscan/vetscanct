'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';
import ContactForm from '@/components/ContactForm/ContactForm';
import Image from 'next/image';
import styles from './page.module.css';

export default function CtPage() {
  const { t } = useLanguage();
  const [isIOS, setIsIOS] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleIndicationItems, setVisibleIndicationItems] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);
  const indicationsRef = useRef(null);
  
  // Получаем переведенные данные
  const ctData = t('pages.ct');
  const types = t('pages.ct.types');
  const indications = t('pages.ct.indications');
  const seoData = t('contactForm.ctSeoText');

  useEffect(() => {
    // Определяем iOS устройство
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIOS(iOS);
  }, []);

  // IntersectionObserver для анимации заголовка
  useEffect(() => {
    const titleElement = titleRef.current;
    if (!titleElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsTitleVisible(true);
          } else {
            setIsTitleVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(titleElement);

    return () => {
      if (titleElement) {
        observer.unobserve(titleElement);
      }
    };
  }, []);

  // IntersectionObserver для анимации карточек
  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Показываем все карточки по очереди
            cards.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  if (!prev.includes(index)) {
                    return [...prev, index];
                  }
                  return prev;
                });
              }, index * 150); // Задержка 150мс между карточками
            });
          } else {
            // Сбрасываем анимацию при выходе из viewport
            setVisibleCards([]);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Наблюдаем за первой карточкой
    if (cards[0]) {
      observer.observe(cards[0]);
    }

    return () => {
      cards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [types]);

  // IntersectionObserver для анимации карточек indications
  useEffect(() => {
    const indicationsElement = indicationsRef.current;
    if (!indicationsElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Считаем общее количество карточек (левые + правые)
            const leftCount = indications.leftItems?.length || 0;
            const rightCount = indications.rightItems?.length || 0;
            const totalCount = leftCount + rightCount;

            // Показываем все карточки по очереди
            for (let i = 0; i < totalCount; i++) {
              setTimeout(() => {
                setVisibleIndicationItems((prev) => {
                  if (!prev.includes(i)) {
                    return [...prev, i];
                  }
                  return prev;
                });
              }, i * 200); // Задержка 200мс между карточками (было 100мс)
            }
          } else {
            // Сбрасываем анимацию при выходе из viewport
            setVisibleIndicationItems([]);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(indicationsElement);

    return () => {
      if (indicationsElement) {
        observer.unobserve(indicationsElement);
      }
    };
  }, [indications]);

  return (
    <PageShell 
      title={ctData.title} 
      subtitle={ctData.subtitle} 
      footer={
        <>
          {/* SEO Блок перед формою */}
          <section className={styles.seoSection}>
            <div className={styles.seoContainer}>
              {/* Розгорнутий SEO контент */}
              <div className={styles.seoContent}
        style={{
    maxHeight: isExpanded ? 'none' : '210px',
    overflow: 'hidden'
  }}
>
                {Array.isArray(seoData) && seoData.map((item, index) => {
                  
                  return (
                    <div key={index} className={styles.seoItem}>
                      {item.type === 'p' && <p>{item.text}</p>}
                      {item.type === 'h3' && <h3>{item.text}</h3>}
                      {item.type === 'ul' && (
                        <ul>
                          {item.items.map((li, i) => (
                            <li key={i}>{li}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
              
              <button 
                className={styles.readMoreBtn}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? t('contactForm.readLess') : t('contactForm.readMore')}
              </button>
            </div>
          </section>

          {/* Форма контакту */}
          <ContactForm hideSeo={true} />
        </>
      }
    >
        <div className={styles.content}>
        <h2 
          ref={titleRef}
          className={`${styles.sectionTitle} ${isTitleVisible ? styles.titleVisible : ''}`}
        >
          {ctData.sectionTitle}
        </h2>

        <div className={styles.ctTypes}>
          {Array.isArray(types) && types.map((item, index) => (
            <div 
              className={`${styles.ctType} ${visibleCards.includes(index) ? styles.cardVisible : ''}`}
              key={`${item.title}-${index}`}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <h3 className={styles.ctTypeTitle}>{item.title}</h3>
              <p className={styles.ctTypeDescription}>{item.description}</p>
            </div>
          ))}
        </div>

        <section className={styles.indications} ref={indicationsRef}>
          <h3 className={styles.indicationsTitle}>{indications.title}</h3>
          <div className={styles.indicationsLayout}>
            <ul className={styles.indicationsList}>
              {Array.isArray(indications.leftItems) && indications.leftItems.map((item, index) => (
                <li 
                  className={`${styles.indicationItem} ${visibleIndicationItems.includes(index) ? styles.itemVisible : ''}`}
                  key={`left-${index}`}
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className={styles.indicationsImage}>
              {isIOS ? (
                <Image
                  src="/Cat_2.png"
                  alt={indications.imageAlt}
                  width={352}
                  height={352}
                  quality={80}
                  className={styles.indicationsVideo}
                  priority
                />
              ) : (
                <video
                  className={styles.indicationsVideo}
                  src="/cat_video2.webm"
                  aria-label={indications.imageAlt}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  disablePictureInPicture
                  disableRemotePlayback
                />
              )}
            </div>

            <ul className={styles.indicationsList}>
              {Array.isArray(indications.rightItems) && indications.rightItems.map((item, index) => {
                // Индекс для правых карточек начинается после левых
                const globalIndex = (indications.leftItems?.length || 0) + index;
                return (
                  <li 
                    className={`${styles.indicationItem} ${visibleIndicationItems.includes(globalIndex) ? styles.itemVisible : ''}`}
                    key={`right-${index}`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <p className={styles.conclusion}>{ctData.conclusion}</p>
      </div>
    </PageShell>
  );
}
