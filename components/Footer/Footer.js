'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AppointmentModal from '@/components/AppointmentModal/AppointmentModal';
import styles from './Footer.module.css';
import content from '@/data/siteContent.json';

export default function Footer() {
  const { footer } = content;
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Колонка 1 - Логотип и описание */}
            <div className={styles.column}>
              <div className={styles.logoSection}>
                <div className={styles.logoCircle}>
                  <Image 
                    src="/Logo.png" 
                    alt="Logo" 
                    width={60} 
                    height={60}
                    className={styles.logoImage}
                  />
                </div>
                <div className={styles.logoText}>
                  <p className={styles.logoSubtitle}>{footer.logoSubtitle}</p>
                </div>
              </div>
              {footer.descriptionLines.map((line, index) => (
                <p key={`${line}-${index}`} className={styles.description}>
                  {line}
                </p>
              ))}
              <button 
                className={styles.appointmentBtn}
                onClick={() => setIsModalOpen(true)}
              >
                {footer.appointmentButton}
              </button>
            </div>

          {/* Колонка 2 - Контакты */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Контакти</h4>
            <ul className={styles.contactList}>
              {footer.contacts.phones.map((phone) => (
                <li key={phone} className={styles.contactItem}>
                  <svg className={styles.contactIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>{phone}</span>
                </li>
              ))}
              <li className={styles.contactItem}>
                <svg className={styles.contactIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{footer.contacts.address1}</span>
              </li>
             
              <li className={styles.contactItem}>
                <svg className={styles.contactIcon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                <span>{footer.contacts.email}</span>
              </li>
            </ul>
          </div>

          {/* Колонка 3 - Услуги */}
          <div className={styles.column}>
            <button 
              className={styles.servicesToggle}
              onClick={() => setIsServicesOpen(!isServicesOpen)}
              aria-expanded={isServicesOpen}
            >
              <span>Послуги</span>
              <svg 
                className={`${styles.toggleIcon} ${isServicesOpen ? styles.toggleIconOpen : ''}`}
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            <h4 className={styles.columnTitleDesktop}>Послуги</h4>
            <ul className={`${styles.linkList} ${isServicesOpen ? styles.linkListOpen : ''}`}>
              {footer.services.map((service) => (
                <li key={service.href}><Link href={service.href}>{service.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Колонка 4 - Часы работы */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Час роботи</h4>
            <ul className={styles.scheduleList}>
              {footer.schedule.map((item) => (
                <li key={item.day} className={styles.scheduleItem}>
                  <span className={styles.scheduleDay}>{item.day}</span>
                  <span className={styles.scheduleTime}>{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            {footer.copyright}
          </p>
        </div>
      </div>
    </footer>

    <AppointmentModal 
      isOpen={isModalOpen} 
      onClose={() => setIsModalOpen(false)} 
    />
  </>
  );
}
