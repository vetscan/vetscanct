'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { sendToTelegram } from '@/app/actions/telegram';
import styles from './AppointmentModal.module.css';

export default function AppointmentModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  
  // Состояние формы
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    reason: ''
  });
  
  // Состояние загрузки
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Обработчик изменения полей
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Отправляем данные в Telegram через Server Action
      const result = await sendToTelegram(formData);
      
      if (result.success) {
        // Успешная отправка
        alert(t('appointmentModal.successMessage') || 'Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.');
        
        // Очищаем форму
        setFormData({ name: '', phone: '', reason: '' });
        
        // Закрываем модалку
        onClose();
      } else {
        // Ошибка отправки
        alert(t('appointmentModal.errorMessage') || 'Ошибка отправки. Попробуйте позже или позвоните нам.');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert(t('appointmentModal.errorMessage') || 'Ошибка отправки. Попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
        <h2 className={styles.title}>{t('appointmentModal.title')}</h2>
        <p className={styles.subtitle}>
          {t('appointmentModal.subtitle')}
        </p>

        {/* Форма */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label}>
              {t('appointmentModal.fields.name.label')} <span className={styles.required}>*</span>
            </label>
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              placeholder={t('appointmentModal.fields.name.placeholder')}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>
              {t('appointmentModal.fields.phone.label')} <span className={styles.required}>*</span>
            </label>
            <input 
              type="tel" 
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              placeholder={t('appointmentModal.fields.phone.placeholder')}
              required
              disabled={isSubmitting}
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label}>
              {t('appointmentModal.fields.reason.label')} <span className={styles.required}>*</span>
            </label>
            <textarea 
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className={styles.textarea}
              placeholder={t('appointmentModal.fields.reason.placeholder')}
              rows={4}
              required
              disabled={isSubmitting}
            />
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting 
              ? (t('appointmentModal.sendingButton') || 'Отправка...') 
              : t('appointmentModal.submitButton')
            }
          </button>
        </form>
      </div>
    </div>
  );

  // Рендерим через Portal в body
  return createPortal(modalContent, document.body);
}
