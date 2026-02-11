'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './AppointmentModal.module.css';

export default function AppointmentModal({ isOpen, onClose }) {
  // Блокируем скролл при открытии модалки
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Закрытие при клике на overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        {/* Кнопка закрытия */}
        <button className={styles.closeButton} onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>

        {/* Заголовок */}
        <h2 className={styles.title}>Записатися на прийом</h2>
        <p className={styles.subtitle}>
          Залиште форму нижче і ми зв'яжемося з вами для підтвердження запису
        </p>

        {/* Форма */}
        <form className={styles.form}>
          <div className={styles.field}>
            <label className={styles.label}>
              Прізвище та ім'я <span className={styles.required}>*</span>
            </label>
            <input 
              type="text" 
              className={styles.input}
              placeholder="Введіть прізвище та ім'я"
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>
              Номер телефону <span className={styles.required}>*</span>
            </label>
            <input 
              type="tel" 
              className={styles.input}
              placeholder="Введіть номер телефону"
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>
              Причина візиту <span className={styles.required}>*</span>
            </label>
            <textarea 
              className={styles.textarea}
              placeholder="Я хочу записатися на КТ і дізнатися більше інформації. Будь ласка, зв'яжіться зі мною, коли буде зручно."
              rows={4}
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );

  // Рендерим через Portal в body
  return createPortal(modalContent, document.body);
}
