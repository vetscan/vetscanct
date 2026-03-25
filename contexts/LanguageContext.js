'use client';

import { createContext, useContext, useMemo, useState, useEffect } from 'react';
import ukMessages from '@/messages/uk.json';
import ruMessages from '@/messages/ru.json';

const LanguageContext = createContext();

const messagesMap = {
  uk: ukMessages,
  ru: ruMessages,
};

function normalizeLocale(locale) {
  return locale === 'ru' ? 'ru' : 'uk';
}

export function LanguageProvider({ children, initialLocale = 'uk' }) {
  const [locale, setLocale] = useState(() => normalizeLocale(initialLocale));

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', locale);
    }
  }, [locale]);

  const messages = useMemo(() => messagesMap[locale] || ukMessages, [locale]);

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
