const BASE_URL = 'https://vetscanct.com.ua';

// SEO metadata для страницы лечения
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  const path = '/treatment';
  const canonical = locale === 'uk' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

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
