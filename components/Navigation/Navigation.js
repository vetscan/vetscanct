'use client';

import { useState } from 'react';
import Link from 'next/link';
import AppointmentModal from '@/components/AppointmentModal/AppointmentModal';
import styles from './Navigation.module.css';
import content from '@/data/siteContent.json';

export default function Navigation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { navigation } = content;

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          {navigation.items.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navItem}>
              {item.label}
            </Link>
          ))}

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
              <div className={styles.appointmentTitle}>{navigation.appointmentTitle}</div>
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
