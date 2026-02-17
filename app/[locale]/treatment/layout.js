// SEO metadata для страницы лечения
export async function generateMetadata({ params }) {
  const locale = params.locale || 'uk';
  
  const translations = {
    uk: {
      title: 'Хірургія та Онкохірургія - Neuroscan',
      description: 'Хірургічне лікування та онкохірургія в Підгородньому: досвідчені хірурги, сучасне обладнання, індивідуальний підхід. Лікування пухлин, травм, захворювань хребта',
      keywords: 'хірургія, онкохірургія, лікування пухлин, хірургічне лікування, Підгороднє, нейрохірургія',
    },
    ru: {
      title: 'Хирургия и Онкохирургия - Neuroscan',
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
      url: `https://vetscanct.vercel.app/${locale}/treatment`,
      type: 'website',
    },
    alternates: {
      canonical: `https://vetscanct.vercel.app/${locale}/treatment`,
      languages: {
        'uk': 'https://vetscanct.vercel.app/uk/treatment',
        'ru': 'https://vetscanct.vercel.app/ru/treatment',
      },
    },
  };
}

export default function TreatmentLayout({ children }) {
  return <>{children}</>;
}
