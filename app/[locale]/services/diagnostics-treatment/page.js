'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import PageShell from '@/components/PageShell/PageShell';
import AppointmentModal from '@/components/AppointmentModal/AppointmentModal';
import styles from './page.module.css';

export default function ServicesDiagnosticsTreatmentPage() {
  const { t } = useLanguage();
  const pageData = t('pages.services.diagnosticsTreatment');
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <PageShell title={pageData.title} subtitle={pageData.subtitle}>
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>{pageData.sectionTitle}</h2>
          
          <ul className={styles.servicesList}>
            {pageData.services.map((service, index) => (
              <li key={index} className={styles.serviceItem}>
                {service}
              </li>
            ))}
          </ul>

          <div className={styles.buttonWrapper}>
            <button 
              className={styles.appointmentBtn}
              onClick={() => setIsModalOpen(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              {pageData.appointmentButton}
            </button>
          </div>
        </div>
      </PageShell>

      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
