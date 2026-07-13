'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header/Header';
import Navigation from '@/components/Navigation/Navigation';
import Hero from '@/components/Hero/Hero';
import ServicesSearch from '@/components/ServicesSearch/ServicesSearch';
import OncologyHelp from '@/components/OncologyHelp/OncologyHelp';
import FAQ from '@/components/FAQ/FAQ';
import Prices from '@/components/Prices/Prices';
import Testimonials from '@/components/Testimonials/Testimonials';
import ContactForm from '@/components/ContactForm/ContactForm';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export default function Home() {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const seoData = t('contactForm.seoText');

  return (
    <>
      <Header />
      <Navigation />
      <main>
        <Hero />
        <ServicesSearch />
        <OncologyHelp />
        <FAQ />
        <Prices />
        <Testimonials />
        
        {/* SEO Блок перед формою */}
        <section className={styles.seoSection}>
          <div className={styles.seoContainer}>
            {/* Розгорнутий SEO контент */}
            <div className={styles.seoContent}
    style={{
    maxHeight: isExpanded ? 'none' : '170px',
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

        <ContactForm hideSeo={true} />
      </main>
      <Footer />
    </>
  );
}
