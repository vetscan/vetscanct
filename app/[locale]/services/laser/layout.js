const BASE_URL = 'https://vetscanct.com.ua';

// SEO metadata для страницы лазерного лечения
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  const path = '/services/laser';
  const canonical = locale === 'uk' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

  const translations = {
    uk: {
      title: 'Лазерне лікування - VetScan CT',
      description: 'Лазерні методи лікування у VetScan CT: сучасні технології, мінімальна травматичність та швидке відновлення пацієнтів.',
      keywords: 'лазерне лікування, лазерна хірургія, малоінвазивне лікування, Підгороднє, VetScan CT',
    },
    ru: {
      title: 'Лазерное лечение - VetScan CT',
      description: 'Лазерные методы лечения в VetScan CT: современные технологии, минимальная травматичность и быстрое восстановление пациентов.',
      keywords: 'лазерное лечение, лазерная хирургия, малоинвазивное лечение, Подгородное, VetScan CT',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical,
      languages: {
        'uk': `${BASE_URL}${path}`,
        'ru': `${BASE_URL}/ru${path}`,
        'x-default': `${BASE_URL}${path}`,
      },
    },
  };
}

export default function ServicesLaserLayout({ children }) {
  return <>{children}</>;
}

