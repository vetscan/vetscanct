'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import ThemeToggle from '@/components/ThemeToggle/ThemeToggle';

export default function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLanguageSelect = (newLocale) => {
    setLocale(newLocale);
    setIsLanguageOpen(false);
  };

  const languageOptions = t('header.languageOptions');
  const selectedLanguage = languageOptions.find(opt => opt.value === locale) || languageOptions[0];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Логотип */}
        <Link href="/" className={styles.logo}>
          <div className={styles.logoImage}>
            <Image 
              src="/Logo.png" 
              alt={t('header.logoAlt')} 
              width={120} 
              height={120}
              className={styles.logoImg}
            />
          </div>
          <div className={styles.logoText}>
            <p className={styles.logoSubtitle}>{t('header.logoSubtitle')}</p>
          </div>
        </Link>

        {/* Адреса (десктоп) */}
        <div className={styles.address}>
          <svg className={styles.addressIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <div>
            <p className={styles.addressLine1}>{t('header.address.line1')}</p>
            <p className={styles.addressLine2}>{t('header.address.line2')}</p>
          </div>
        </div>

        {/* Мова (десктоп) - кастомний дропдаун */}
        <div className={styles.language}>
          <svg className={styles.languageIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
            <path d="M2 12h20"></path>
          </svg>
          <div className={styles.languageDropdown}>
            <button 
              className={styles.languageButton}
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              {selectedLanguage.label}
              <svg 
                className={`${styles.languageArrow} ${isLanguageOpen ? styles.languageArrowOpen : ''}`}
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            {isLanguageOpen && (
              <div className={styles.languageMenu}>
                {languageOptions.map((option) => (
                  <button
                    key={option.value}
                    className={`${styles.languageOption} ${locale === option.value ? styles.languageOptionActive : ''}`}
                    onClick={() => handleLanguageSelect(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={styles.themeToggle}>
          <ThemeToggle />
        </div>

        {/* Телефон (десктоп) */}
        <div className={styles.phone}>
          <svg className={styles.phoneIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path>
            <path d="M21 16v2a4 4 0 0 1-4 4h-5"></path>
          </svg>
          <div>
            <p className={styles.phoneLabel}>{t('header.phone.label')}</p>
            <div className={styles.phoneNumber}>
              <div className={styles.phoneStatus}></div>
              <a href={`tel:${t('header.phone.tel')}`}>{t('header.phone.number')}</a>
            </div>
            <div className={styles.phoneNumber}>
              <div className={styles.phoneStatus}></div>
              <a href={`tel:${t('header.phone.tel2')}`}>{t('header.phone.number2')}</a>
            </div>
          </div>
        </div>

        {/* Мобільне меню кнопка */}
        <button 
          className={styles.mobileMenu}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12h16"></path>
              <path d="M4 18h16"></path>
              <path d="M4 6h16"></path>
            </svg>
          )}
        </button>
      </div>

      {/* Мобільне меню панель */}
      {isMobileMenuOpen && (
        <div className={styles.mobileMenuPanel}>
          <div className={styles.mobileMenuContent}>
            {t('navigation.items').map((item) => (
              <Link 
                key={item.href} 
                href={`/${locale}${item.href}`}
                className={styles.mobileNavLink}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(`navigation.${item.key}`)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
