// SEO metadata для страницы цен
export async function generateMetadata({ params }) {
  const locale = params.locale || 'uk';
  
  const translations = {
    uk: {
      title: 'Вартість послуг - Ціни на КТ та лікування | Neuroscan',
      description: 'Прозорі ціни на медичні послуги в Neuroscan: вартість КТ, консультацій, хірургічного лікування. Доступні ціни, висока якість обслуговування',
      keywords: 'ціни, вартість КТ, ціни на лікування, медичні послуги, Підгороднє, вартість консультації',
    },
    ru: {
      title: 'Стоимость услуг - Цены на КТ и лечение | Neuroscan',
      description: 'Прозрачные цены на медицинские услуги в Neuroscan: стоимость КТ, консультаций, хирургического лечения. Доступные цены, высокое качество обслуживания',
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
      url: `https://vetscanct.vercel.app/${locale}/prices`,
      type: 'website',
    },
    alternates: {
      canonical: `https://vetscanct.vercel.app/${locale}/prices`,
      languages: {
        'uk': 'https://vetscanct.vercel.app/uk/prices',
        'ru': 'https://vetscanct.vercel.app/ru/prices',
      },
    },
  };
}

export default function PricesLayout({ children }) {
  return <>{children}</>;
}
