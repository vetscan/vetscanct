'use client';

import { useEffect } from 'react';

export default function PreventOverscroll() {
  useEffect(() => {
    // Блокировка overscroll на iOS
    let startY = 0;
    
    const preventOverscroll = (e) => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
      // Если прокрутили до самого верха или низа
      if (scrollTop === 0 && e.touches[0].clientY > startY) {
        // Прокрутка вверх когда уже наверху
        e.preventDefault();
      } else if (scrollTop + clientHeight >= scrollHeight && e.touches[0].clientY < startY) {
        // Прокрутка вниз когда уже внизу
        e.preventDefault();
      }
    };

    const handleTouchStart = (e) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      preventOverscroll(e);
    };

    // Добавляем слушатели
    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return null;
}
