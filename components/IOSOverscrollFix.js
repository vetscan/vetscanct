'use client';

import { useEffect } from 'react';

export default function IOSOverscrollFix() {
  useEffect(() => {
    // Проверяем, что это iOS устройство
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    // Применяем блокировку overscroll только на iOS
    if (!isIOS) {
      return; // На Android и десктопе ничего не делаем
    }

    let startY = 0;
    
    const preventOverscroll = (e) => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      // Если прокрутили до самого низа
      if (scrollTop + clientHeight >= scrollHeight && e.touches[0].clientY < startY) {
        // Прокрутка вниз когда уже внизу - блокируем
        e.preventDefault();
      }
    };

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      preventOverscroll(e);
    };

    // Добавляем слушатели только для iOS
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return null;
}
