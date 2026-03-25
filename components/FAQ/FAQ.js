'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);
  const { t } = useLanguage();
  const faqItems = t('faq.items');

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

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 
          ref={titleRef}
          className={`${styles.title} ${isVisible ? styles.titleVisible : ''}`}
        >
          {t('faq.title')}
        </h2>
        
        <div className={styles.faqList}>
          {faqItems.map((faqItem, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${isVisible ? styles.faqItemVisible : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <button 
                className={styles.question}
                onClick={() => toggleFAQ(index)}
              >
                <span className={styles.questionText}>{faqItem.question}</span>
                <span className={`${styles.icon} ${openIndex === index ? styles.iconOpen : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div className={styles.answer}>
                  {faqItem.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
