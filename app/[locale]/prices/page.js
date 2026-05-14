'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';
import PricesServices from '@/components/PricesServices/PricesServices';
import ContactForm from '@/components/ContactForm/ContactForm';
import styles from './page.module.css';

export default function PricesPage() {
  const { t } = useLanguage();
  const pricesData = t('pages.prices');
  const [isExpanded, setIsExpanded] = useState(false);
  const seoData = t('contactForm.pricesSeoText');

  return (
    <PageShell 
      title={pricesData.title} 
      subtitle={pricesData.subtitle} 
      footer={
        <>
          {/* SEO Блок перед формою */}
          <section className={styles.seoSection}>
            <div className={styles.seoContainer}>
              {/* Розгорнутий SEO контент */}
              <div className={styles.seoContent}>
                {Array.isArray(seoData) && seoData.map((item, index) => {
                  if (!isExpanded && index >= 2) return null;
                  
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
      <PricesServices />
    </PageShell>
  );
}
