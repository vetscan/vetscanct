const BASE_URL = 'https://vetscanct.com.ua';

// SEO metadata для страницы лечения новообразований
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  const path = '/services/neoplasms';
  const canonical = locale === 'uk' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

  const translations = {
    uk: {
      title: 'Лікування новоутворень - VetScan CT',
      description: 'Діагностика та лікування новоутворень у VetScan CT: сучасні підходи, хірургічні рішення та медичний супровід.',
      keywords: 'лікування новоутворень, пухлини, онкохірургія, діагностика, Підгороднє, VetScan CT',
    },
    ru: {
      title: 'Лечение новообразований - VetScan CT',
      description: 'Диагностика и лечение новообразований в VetScan CT: современные подходы, хирургические решения и медицинское сопровождение.',
      keywords: 'лечение новообразований, опухоли, онкохирургия, диагностика, Подгородное, VetScan CT',
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

export default function ServicesNeoplasmsLayout({ children }) {
  return <>{children}</>;
}

