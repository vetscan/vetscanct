import { LanguageProvider } from '@/contexts/LanguageContext';

const BASE_URL = 'https://vetscanct.com.ua';

// Возвращает публичный URL страницы без /uk префикса
function getPublicUrl(locale, path = '') {
  if (locale === 'uk') {
    return `${BASE_URL}${path || '/'}`;
  }
  return `${BASE_URL}/${locale}${path || ''}`;
}

export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;

  const translations = {
    uk: {
      title: 'Ветеринарна КТ та хірургія тварин у Дніпрі',
      description: 'Комп\'ютерна томографія, хірургія, травматологія та онкологія тварин. Сучасна діагностика собак та котів. Запис на обстеження у VetScan CT.',
    },
    ru: {
      title: 'Ветеринарная КТ и хирургия животных в Днепре',
      description: 'Компьютерная томография, хирургия, травматология и онкология животных. Современная диагностика собак и кошек. Запись на обследование в VetScan CT.',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    verification: {
      google: 'I91j-p0-g1USBwQ0E64YzcM79eku4n1JAbzXz1FdTfw',
    },
    alternates: {
      // canonical всегда без /uk
      canonical: getPublicUrl(locale),
      languages: {
        'uk': BASE_URL,
        'ru': `${BASE_URL}/ru`,
        'x-default': BASE_URL,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale = 'uk' } = await params;
  return (
    <LanguageProvider key={locale} initialLocale={locale}>
      {children}
    </LanguageProvider>
  );
}
