const BASE_URL = 'https://vetscanct.com.ua';

// SEO metadata для страницы КТ
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  const path = '/ct';
  const canonical = locale === 'uk' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

  const translations = {
    uk: {
      title: 'КТ тварин у Дніпрі — комп\'ютерна томографія собак та котів',
      description: 'КТ тварин у Дніпрі: комп\'ютерна томографія собак та котів на сучасному ветеринарному томографі. КТ голови, грудної клітки, суглобів, діагностика травм та захворювань у тварин.',
      keywords: 'КТ тварин, комп\'ютерна томографія тварин, Дніпро, КТ собак, КТ котів, ветеринарна діагностика',
    },
    ru: {
      title: 'КТ животных в Днепре — компьютерная томография собак и кошек',
      description: 'КТ животных в Днепре: компьютерная томография собак и кошек на современном ветеринарном томографе. КТ головы, грудной клетки, суставов, диагностика травм и заболеваний у животных.',
      keywords: 'КТ животных, компьютерная томография животных, Днепр, КТ собак, КТ кошек, ветеринарная диагностика',
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
      images: [
        {
          url: '/Cat_2.png',
          width: 800,
          height: 600,
          alt: 'КТ діагностика',
        },
      ],
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

export default function CtLayout({ children }) {
  return <>{children}</>;
}
