'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import AppointmentModal from '@/components/AppointmentModal/AppointmentModal';
import styles from './ContactForm.module.css';
import content from '@/data/siteContent.json';

export default function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();
  const { contactForm } = content;

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.title}>{t('contactForm.title')}</h2>
          
          <div className={styles.content}>
            {/* Блок с телефоном */}
            <div className={styles.block}>
              <p className={styles.label}>
                {t('contactForm.phoneLabel')}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrow}>
                  <path d="m7 7 10 10"></path>
                  <path d="M17 7v10H7"></path>
                </svg>
              </p>
              <a href={`tel:${contactForm.phoneTel}`} className={styles.phone}>
                <span className={styles.dot}>•</span>
                {contactForm.phoneNumber}
              </a>
              <a href={`tel:${contactForm.phoneTel2}`} className={styles.phone}>
                <span className={styles.dot}>•</span>
                {contactForm.phoneNumber2}
              </a>
            </div>

            {/* Блок с онлайн записью */}
            <div className={styles.block}>
              <p className={styles.label}>
                {t('contactForm.onlineLabel')}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.arrow}>
                  <path d="m7 7 10 10"></path>
                  <path d="M17 7v10H7"></path>
                </svg>
              </p>
              <button 
                className={styles.button}
                onClick={() => setIsModalOpen(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                {t('contactForm.appointmentButton')}
              </button>
            </div>
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
