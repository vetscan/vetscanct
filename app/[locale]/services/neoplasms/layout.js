const BASE_URL = 'https://vetscanct.com.ua';

// SEO metadata для страницы лечения новообразований
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  const path = '/services/neoplasms';
  const canonical = locale === 'uk' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

  const translations = {
    uk: {
      title: 'Діагностика та видалення пухлин у собак та котів | VetScan CT',
      description: 'Професійне видалення новоутворень у тварин у Дніпрі. Хірургічне лікування пухлин, онкологічний супровід та точна діагностика для собак та котів у центрі VetScan CT.',
      keywords: 'видалення пухлин у собак, лікування новоутворень тварин, онкологія для собак, ветеринарний онколог Дніпро, VetScan CT',
    },
    ru: {
      title: 'Диагностика и удаление опухолей у собак и кошек | VetScan CT',
      description: 'Профессиональное удаление новообразований у животных в Днепре. Хирургическое лечение опухолей, онкологическое сопровождение и точная диагностика для собак и кошек в центре VetScan CT.',
      keywords: 'удаление опухолей у собак, лечение новообразований животных, онкология для собак, ветеринарный онколог Днепр, VetScan CT',
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

