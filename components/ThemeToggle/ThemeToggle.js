'use client';

import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

const THEME_KEY = 'theme';

function applyTheme(theme) {
  if (typeof document === 'undefined') return;
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';
  const stored = window.localStorage.getItem(THEME_KEY);
  if (stored === 'light' || stored === 'dark') return stored;
  return 'dark';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const setAndStore = (nextTheme) => {
    setTheme(nextTheme);
    applyTheme(nextTheme);
    try {
      window.localStorage.setItem(THEME_KEY, nextTheme);
    } catch {
      // ignore
    }
  };

  return (
    <div className={styles.toggle} role="group" aria-label="Перемикач теми">
      <button
        type="button"
        className={`${styles.button} ${theme === 'light' ? styles.active : ''}`}
        onClick={() => setAndStore('light')}
        aria-pressed={theme === 'light'}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 4.5V3m0 18v-1.5M5.6 5.6 4.5 4.5m15 15-1.1-1.1M4.5 12H3m18 0h-1.5M5.6 18.4l-1.1 1.1m15-15 1.1-1.1M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z" />
        </svg>
      </button>
      <button
        type="button"
        className={`${styles.button} ${theme === 'dark' ? styles.active : ''}`}
        onClick={() => setAndStore('dark')}
        aria-pressed={theme === 'dark'}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3a8.5 8.5 0 1 0 11.5 11.5Z" />
        </svg>
      </button>
    </div>
  );
}
