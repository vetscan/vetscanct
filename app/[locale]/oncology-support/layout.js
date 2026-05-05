const BASE_URL = 'https://vetscanct.com.ua';

// SEO metadata для страницы онкологической поддержки
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  const path = '/oncology-support';
  const canonical = locale === 'uk' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

  const translations = {
    uk: {
      title: 'Онкологічна підтримка - VetScan CT',
      description: 'Допомога при підозрі на онкологію: маршрутизація, консультації та супровід пацієнтів у медичному центрі VetScan CT.',
      keywords: 'онкологічна допомога, онкоскринінг, консультація онкологія, Підгороднє, VetScan CT',
    },
    ru: {
      title: 'Онкологическая поддержка - VetScan CT',
      description: 'Помощь при подозрении на онкологию: маршрутизация, консультации и сопровождение пациентов в медицинском центре VetScan CT.',
      keywords: 'онкологическая помощь, онкоскрининг, консультация онкология, Подгородное, VetScan CT',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    openGraph: {
      title: t.title,
      description: t.description,
      url: canonical,
      type: 'website',
    },
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

export default function OncologySupportLayout({ children }) {
  return <>{children}</>;
}

