// SEO metadata для страницы лечения
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  
  const translations = {
    uk: {
      title: 'Хірургія та Онкохірургія - VetScan CT',
      description: 'Хірургічне лікування та онкохірургія в Підгородньому: досвідчені хірурги, сучасне обладнання, індивідуальний підхід. Лікування пухлин, травм, захворювань хребта',
      keywords: 'хірургія, онкохірургія, лікування пухлин, хірургічне лікування, Підгороднє, нейрохірургія',
    },
    ru: {
      title: 'Хирургия и Онкохирургия - VetScan CT',
      description: 'Хирургическое лечение и онкохирургия в Подгородном: опытные хирурги, современное оборудование, индивидуальный подход. Лечение опухолей, травм, заболеваний позвоночника',
      keywords: 'хирургия, онкохирургия, лечение опухолей, хирургическое лечение, Подгородное, нейрохирургия',
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
      url: `https://vetscanct.com.ua/${locale}/treatment`,
      type: 'website',
    },
    alternates: {
      canonical: `https://vetscanct.com.ua/${locale}/treatment`,
      languages: {
        'uk': 'https://vetscanct.com.ua/uk/treatment',
        'ru': 'https://vetscanct.com.ua/ru/treatment',
      },
    },
  };
}

export default function TreatmentLayout({ children }) {
  return <>{children}</>;
}
