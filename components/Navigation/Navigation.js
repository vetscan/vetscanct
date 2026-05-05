'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import AppointmentModal from '@/components/AppointmentModal/AppointmentModal';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const { t, locale } = useLanguage();
  const navigationItems = t('navigation.items');

  useEffect(() => {
    // window.location.pathname — реальный URL в браузере, не зависит от rewrite
    const path = window.location.pathname;
    const isHome = path === '/' || path === '/ru' || path === '/ru/';
    console.log('Navigation: pathname =', path, ', isHomePage =', isHome);
    setIsHomePage(isHome);
  }, []);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.navItems}>
            {Array.isArray(navigationItems) && navigationItems.map((item) => {
              // Скрываем кнопку "Главная" на десктопе только на главной странице
              console.log('Navigation item:', item.key, ', isHomePage:', isHomePage);
              if (item.key === 'home' && isHomePage) {
                console.log('Hiding home button');
                return null;
              }

              return (
                <Link key={item.href} href={locale === 'uk' ? (item.href || '/') : `/${locale}${item.href}`} className={styles.navItem}>
                  {t(`navigation.${item.key}`)}
                </Link>
              );
            })}
          </div>

          <button
            className={styles.appointmentBtn}
            onClick={() => setIsModalOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            <div>
              <div className={styles.appointmentTitle}>{t('navigation.appointment')}</div>
            </div>
          </button>
        </div>
      </nav>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
