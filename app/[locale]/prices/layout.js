const BASE_URL = 'https://vetscanct.com.ua';

// SEO metadata для страницы цен
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  const path = '/prices';
  const canonical = locale === 'uk' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

  const translations = {
    uk: {
      title: 'Ціни на КТ тварин та ветеринарні послуги у Дніпрі — запис онлайн та справедлива вартість',
      description: 'Актуальні ціни ветклініки: КТ тварин, операції собакам та котам, остеосинтез, видалення пухлин, лікування та діагностика. Дізнайтеся вартість КТ собаці та іншим тваринам онлайн.',
      keywords: 'ціни ветеринарні послуги, вартість КТ тварин, ціни на операції, травматологія, Підгороднє, Дніпро',
    },
    ru: {
      title: 'Цены на КТ животных и ветеринарные услуги в Днепре — запись онлайн и справедливая стоимость',
      description: 'Актуальные цены ветклиники: КТ животных, операции собакам и кошкам, остеосинтез, удаление опухолей, лечение и диагностика. Узнайте стоимость КТ собаке и другим животным онлайн.',
      keywords: 'цены ветеринарные услуги, стоимость КТ животных, цены на операции, травматология, Подгородное, Днепр',
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

export default function PricesLayout({ children }) {
  return <>{children}</>;
}
