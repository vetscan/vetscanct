// SEO metadata для страницы цен
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  
  const translations = {
    uk: {
      title: 'Вартість послуг - Ціни на КТ та лікування | VetScan CT',
      description: 'Прозорі ціни на медичні послуги в VetScan CT: вартість КТ, консультацій, хірургічного лікування. Доступні ціни, висока якість обслуговування',
      keywords: 'ціни, вартість КТ, ціни на лікування, медичні послуги, Підгороднє, вартість консультації',
    },
    ru: {
      title: 'Стоимость услуг - Цены на КТ и лечение | VetScan CT',
      description: 'Прозрачные цены на медицинские услуги в VetScan CT: стоимость КТ, консультаций, хирургического лечения. Доступные цены, высокое качество обслуживания',
      keywords: 'цены, стоимость КТ, цены на лечение, медицинские услуги, Подгородное, стоимость консультации',
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
      url: `https://vetscanct.com.ua/${locale}/prices`,
      type: 'website',
    },
    alternates: {
      canonical: `https://vetscanct.com.ua/${locale}/prices`,
      languages: {
        'uk': 'https://vetscanct.com.ua/uk/prices',
        'ru': 'https://vetscanct.com.ua/ru/prices',
      },
    },
  };
}

export default function PricesLayout({ children }) {
  return <>{children}</>;
}
