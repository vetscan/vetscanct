// SEO metadata для страницы лечения новообразований
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;

  const translations = {
    uk: {
      title: 'Лікування новоутворень - VetScan CT',
      description: 'Діагностика та лікування новоутворень у VetScan CT: сучасні підходи, хірургічні рішення та медичний супровід.',
      keywords: 'лікування новоутворень, пухлини, онкохірургія, діагностика, Підгороднє, VetScan CT',
    },
    ru: {
      title: 'Лечение новообразований - VetScan CT',
      description: 'Диагностика и лечение новообразований в VetScan CT: современные подходы, хирургические решения и медицинское сопровождение.',
      keywords: 'лечение новообразований, опухоли, онкохирургия, диагностика, Подгородное, VetScan CT',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://vetscanct.com.ua/${locale}/services/neoplasms`,
      languages: {
        uk: 'https://vetscanct.com.ua/uk/services/neoplasms',
        ru: 'https://vetscanct.com.ua/ru/services/neoplasms',
      },
    },
  };
}

export default function ServicesNeoplasmsLayout({ children }) {
  return <>{children}</>;
}

