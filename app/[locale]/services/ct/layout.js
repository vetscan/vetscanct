const BASE_URL = 'https://vetscanct.com.ua';

// SEO metadata для страницы КТ-услуг
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  const path = '/services/ct';
  const canonical = locale === 'uk' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

  const translations = {
    uk: {
      title: 'КТ-дослідження - VetScan CT',
      description: 'КТ-дослідження в медичному центрі VetScan CT: точна діагностика, сучасне обладнання та швидкі результати.',
      keywords: 'КТ дослідження, компʼютерна томографія, діагностика, Підгороднє, VetScan CT',
    },
    ru: {
      title: 'КТ-исследования - VetScan CT',
      description: 'КТ-исследования в медицинском центре VetScan CT: точная диагностика, современное оборудование и быстрые результаты.',
      keywords: 'КТ исследования, компьютерная томография, диагностика, Подгородное, VetScan CT',
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

export default function ServicesCtLayout({ children }) {
  return <>{children}</>;
}

