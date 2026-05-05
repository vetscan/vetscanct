const BASE_URL = 'https://vetscanct.com.ua';

// SEO metadata для страницы лечения грыж
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  const path = '/services/hernias';
  const canonical = locale === 'uk' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

  const translations = {
    uk: {
      title: 'Лікування гриж хребта - VetScan CT',
      description: 'Лікування гриж хребта в медичному центрі VetScan CT: сучасні малоінвазивні методики та індивідуальні програми відновлення.',
      keywords: 'лікування грижі хребта, міжхребцева грижа, нейрохірургія, Підгороднє, VetScan CT',
    },
    ru: {
      title: 'Лечение грыж позвоночника - VetScan CT',
      description: 'Лечение грыж позвоночника в медицинском центре VetScan CT: современные малоинвазивные методики и индивидуальные программы восстановления.',
      keywords: 'лечение грыжи позвоночника, межпозвоночная грыжа, нейрохирургия, Подгородное, VetScan CT',
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

export default function ServicesHerniasLayout({ children }) {
  return <>{children}</>;
}

