// SEO metadata для страницы лечения новообразований
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;

  const translations = {
    uk: {
      title: 'Лікування новоутворень - Neuroscan',
      description: 'Діагностика та лікування новоутворень у Neuroscan: сучасні підходи, хірургічні рішення та медичний супровід.',
      keywords: 'лікування новоутворень, пухлини, онкохірургія, діагностика, Підгороднє, Neuroscan',
    },
    ru: {
      title: 'Лечение новообразований - Neuroscan',
      description: 'Диагностика и лечение новообразований в Neuroscan: современные подходы, хирургические решения и медицинское сопровождение.',
      keywords: 'лечение новообразований, опухоли, онкохирургия, диагностика, Подгородное, Neuroscan',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://vetscanct.vercel.app/${locale}/services/neoplasms`,
      languages: {
        uk: 'https://vetscanct.vercel.app/uk/services/neoplasms',
        ru: 'https://vetscanct.vercel.app/ru/services/neoplasms',
      },
    },
  };
}

export default function ServicesNeoplasmsLayout({ children }) {
  return <>{children}</>;
}

