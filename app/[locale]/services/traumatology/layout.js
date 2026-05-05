const BASE_URL = 'https://vetscanct.com.ua';

// SEO metadata для страницы травматологии
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  const path = '/services/traumatology';
  const canonical = locale === 'uk' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

  const translations = {
    uk: {
      title: 'Травматологія - VetScan CT',
      description: 'Травматологія в VetScan CT: лікування переломів, травм суглобів та відновлення опорно-рухового апарату.',
      keywords: 'травматологія, лікування переломів, травми суглобів, ортопедія, Підгороднє, VetScan CT',
    },
    ru: {
      title: 'Травматология - VetScan CT',
      description: 'Травматология в VetScan CT: лечение переломов, травм суставов и восстановление опорно-двигательного аппарата.',
      keywords: 'травматология, лечение переломов, травмы суставов, ортопедия, Подгородное, VetScan CT',
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

export default function ServicesTraumatologyLayout({ children }) {
  return <>{children}</>;
}

