'use client';

import { useEffect } from 'react';
import styles from './Toast.module.css';

/**
 * Компонент всплывающего уведомления (Toast)
 * @param {string} message - Текст сообщения
 * @param {string} type - Тип уведомления: 'success' или 'error'
 * @param {function} onClose - Callback для закрытия
 * @param {number} duration - Длительность показа в мс (по умолчанию 3000)
 */
export default function Toast({ message, type = 'success', onClose, duration = 3000 }) {
  // Автоматическое закрытие через duration мс
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.icon}>
        {type === 'success' ? (
          // Иконка галочки для успеха
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        ) : (
          // Иконка крестика для ошибки
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="15" y1="9" x2="9" y2="15"></line>
            <line x1="9" y1="9" x2="15" y2="15"></line>
          </svg>
        )}
      </div>
      <p className={styles.message}>{message}</p>
      <button className={styles.closeButton} onClick={onClose} aria-label="Закрыть">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
}
