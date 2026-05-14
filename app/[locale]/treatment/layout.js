const BASE_URL = 'https://vetscanct.com.ua';

// SEO metadata для страницы лечения
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  const path = '/treatment';
  const canonical = locale === 'uk' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

  const translations = {
    uk: {
      title: 'Ветеринарна хірургія та онкохірургія тварин у Дніпрі | VetScan CT',
      description: 'Професійна ветеринарна хірургія для собак та котів у Дніпрі. Хірургічне лікування травм, переломів, пухлин та захворювань хребта у тварин у центрі VetScan CT.',
      keywords: 'ветеринарна хірургія Дніпро, операції для собак, онкохірургія тварин, хірургічне лікування переломів тварин, VetScan CT',
    },
    ru: {
      title: 'Ветеринарная хирургия и онкохирургия животных в Днепре | VetScan CT',
      description: 'Профессиональная ветеринарная хирургия для собак и кошек в Днепре. Хирургическое лечение травм, переломов, опухолей и заболеваний позвоночника у животных в центре VetScan CT.',
      keywords: 'ветеринарная хирургия Днепр, операции для собак, онкохирургия животных, хирургическое лечение переломов животных, VetScan CT',
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

export default function TreatmentLayout({ children }) {
  return <>{children}</>;
}
