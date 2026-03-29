import { LanguageProvider } from '@/contexts/LanguageContext';

// Layout для локализованных страниц с SEO metadata
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
      canonical: `https://vetscanct.com.ua/${locale}`,
      languages: {
        'uk': 'https://vetscanct.com.ua/uk',
        'ru': 'https://vetscanct.com.ua/ru',
      },
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale = 'uk' } = await params;
  return <LanguageProvider key={locale} initialLocale={locale}>{children}</LanguageProvider>;
}
