'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './AppointmentModal.module.css';
import content from '@/data/siteContent.json';

export default function AppointmentModal({ isOpen, onClose }) {
  const { appointmentModal } = content;
  const [mounted, setMounted] = useState(false);

  // Проверяем, что компонент смонтирован на клиенте
  useEffect(() => {
    setMounted(true);
  }, []);

  // Закрытие по Escape и блокировка скролла
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Блокируем скролл безопасным способом
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !mounted) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Форма отправлена');
    onClose();
  };

  const modalContent = (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Закрити">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>

        <h2 className={styles.title}>{appointmentModal.title}</h2>
        <p className={styles.subtitle}>
          {appointmentModal.subtitle}
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>
              {appointmentModal.fields.name.label}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              placeholder={appointmentModal.fields.name.placeholder}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="phone" className={styles.label}>
              {appointmentModal.fields.phone.label}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className={styles.input}
              placeholder={appointmentModal.fields.phone.placeholder}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="reason" className={styles.label}>
              {appointmentModal.fields.reason.label}
            </label>
            <textarea
              id="reason"
              name="reason"
              className={styles.textarea}
              placeholder={appointmentModal.fields.reason.placeholder}
              rows="4"
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            {appointmentModal.submit}
          </button>
        </form>
      </div>
    </div>
  );

  // Рендерим модалку через портал в body
  return createPortal(modalContent, document.body);
}
