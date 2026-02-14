'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import ukMessages from '@/messages/uk.json';
import ruMessages from '@/messages/ru.json';

const LanguageContext = createContext();

// Объект с переводами
const messagesMap = {
  uk: ukMessages,
  ru: ruMessages
};

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('uk');
  const [messages, setMessages] = useState(ukMessages); // Сразу загружаем украинский

  // Загружаем сохраненный язык при монтировании
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale');
      if (savedLocale && (savedLocale === 'uk' || savedLocale === 'ru')) {
        setLocale(savedLocale);
        setMessages(messagesMap[savedLocale]);
      }
    }
  }, []);

  // Обновляем переводы при изменении языка
  useEffect(() => {
    setMessages(messagesMap[locale]);
    
    // Сохраняем выбранный язык в localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', locale);
    }
  }, [locale]);

  const t = (key) => {
    if (!messages) return key;
    
    const keys = key.split('.');
    let value = messages;
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) return key;
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, messages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage должен использоваться внутри LanguageProvider');
  }
  return context;
}
