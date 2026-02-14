'use client';

import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import AppointmentModal from '@/components/AppointmentModal/AppointmentModal';
import styles from './Hero.module.css';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();
  const videoRef = useRef(null);

  // Принудительный запуск видео на мобильных
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Функция для запуска видео
    const playVideo = () => {
      video.muted = true;
      video.setAttribute('muted', '');
      video.setAttribute('playsinline', '');
      
      const promise = video.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            console.log('✅ Видео запущено успешно');
          })
          .catch((error) => {
            console.log('❌ Ошибка запуска видео:', error);
            // Попробуем еще раз через секунду
            setTimeout(() => {
              video.play().catch(e => console.log('Повторная попытка не удалась:', e));
            }, 1000);
          });
      }
    };

    // Запуск при загрузке
    if (video.readyState >= 3) {
      playVideo();
    } else {
      video.addEventListener('loadeddata', playVideo, { once: true });
    }

    // Запуск при любом взаимодействии пользователя
    const events = ['touchstart', 'touchend', 'click', 'scroll'];
    const handleInteraction = () => {
      playVideo();
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
    };

    events.forEach(event => {
      document.addEventListener(event, handleInteraction, { once: true, passive: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
    };
  }, []);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            {/* Видео фон */}
            <video 
              ref={videoRef}
              className={styles.videoBackground}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              disablePictureInPicture
              disableRemotePlayback
              x-webkit-airplay="deny"
            >
              <source src="/logo_video.mp4" type="video/mp4" />
              Ваш браузер не поддерживает видео.
            </video>

            {/* Контент поверх видео */}
            <div className={styles.contentOverlay}>
              <h1 className={styles.title}>
                {t('hero.title')}
              </h1>
              <div className={styles.subtitle}>
                <p>{t('hero.subtitle1')}</p>
                <p>{t('hero.subtitle2')}</p>
              </div>
              <div className={styles.buttons}>
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
                  {t('hero.appointmentButton')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AppointmentModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
