// SEO metadata для страницы лечения травм и грыж
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;

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
      canonical: `https://vetscanct.com.ua/${locale}/services/hernias-treatment`,
      languages: {
        uk: 'https://vetscanct.com.ua/uk/services/hernias-treatment',
        ru: 'https://vetscanct.com.ua/ru/services/hernias-treatment',
      },
    },
  };
}

export default function ServicesHerniasTreatmentLayout({ children }) {
  return <>{children}</>;
}

