'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';
import AppointmentModal from '@/components/AppointmentModal/AppointmentModal';
import styles from './ServicePage.module.css';

/**
 * Универсальный компонент для страниц услуг.
 * @param {string} translationKey - ключ в messages, напр. 'pages.services.spineTreatment'
 * Ожидаемая структура перевода:
 *   { title, subtitle, sectionTitle?, services?: string[], appointmentButton? }
 */
export default function ServicePage({ translationKey }) {
  const { t } = useLanguage();
  const pageData = t(translationKey);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const hasServicesList = Array.isArray(pageData?.services) && pageData.services.length > 0;

  return (
    <>
      <PageShell title={pageData?.title} subtitle={pageData?.subtitle}>
        {hasServicesList && (
          <div className={styles.content}>
            {pageData.sectionTitle && (
              <h2 className={styles.sectionTitle}>{pageData.sectionTitle}</h2>
            )}

            <ul className={styles.servicesList}>
              {pageData.services.map((service, index) => (
                <li key={index} className={styles.serviceItem}>
                  <span className={styles.serviceIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </span>
                  {service}
                </li>
              ))}
            </ul>

            {pageData.appointmentButton && (
              <div className={styles.buttonWrapper}>
                <button
                  className={styles.appointmentBtn}
                  onClick={() => setIsModalOpen(true)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 2v4"/>
                    <path d="M16 2v4"/>
                    <rect width="18" height="18" x="3" y="4" rx="2"/>
                    <path d="M3 10h18"/>
                  </svg>
                  {pageData.appointmentButton}
                </button>
              </div>
            )}
          </div>
        )}
      </PageShell>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
