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
      title: 'VetScan CT - Центр сучасної діагностики',
      description: 'Професійна медична допомога: КТ, нейрохірургія, лікування травм хребта в м.Підгороднє',
    },
    ru: {
      title: 'VetScan CT - Центр современной диагностики',
      description: 'Профессиональная медицинская помощь: КТ, нейрохирургия, лечение травм позвоночника в г.Подгородное',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
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
