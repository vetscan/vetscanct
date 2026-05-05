const BASE_URL = 'https://vetscanct.com.ua';

// SEO metadata для страницы лечения травм и грыж
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  const path = '/services/hernias-treatment';
  const canonical = locale === 'uk' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

  const translations = {
    uk: {
      title: 'Лікування травм та гриж - VetScan CT',
      description: 'Комплексне лікування травм та гриж у VetScan CT: діагностика, консервативна терапія та сучасні хірургічні підходи.',
      keywords: 'лікування травм, лікування гриж, хребет, нейрохірургія, Підгороднє, VetScan CT',
    },
    ru: {
      title: 'Лечение травм и грыж - VetScan CT',
      description: 'Комплексное лечение травм и грыж в VetScan CT: диагностика, консервативная терапия и современные хирургические подходы.',
      keywords: 'лечение травм, лечение грыж, позвоночник, нейрохирургия, Подгородное, VetScan CT',
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

export default function ServicesHerniasTreatmentLayout({ children }) {
  return <>{children}</>;
}

