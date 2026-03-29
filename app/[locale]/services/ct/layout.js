// SEO metadata для страницы КТ-услуг
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;

  const translations = {
    uk: {
      title: 'КТ-дослідження - VetScan CT',
      description: 'КТ-дослідження в медичному центрі VetScan CT: точна діагностика, сучасне обладнання та швидкі результати.',
      keywords: 'КТ дослідження, компʼютерна томографія, діагностика, Підгороднє, VetScan CT',
    },
    ru: {
      title: 'КТ-исследования - VetScan CT',
      description: 'КТ-исследования в медицинском центре VetScan CT: точная диагностика, современное оборудование и быстрые результаты.',
      keywords: 'КТ исследования, компьютерная томография, диагностика, Подгородное, VetScan CT',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://vetscanct.vercel.app/${locale}/services/ct`,
      languages: {
        uk: 'https://vetscanct.vercel.app/uk/services/ct',
        ru: 'https://vetscanct.vercel.app/ru/services/ct',
      },
    },
  };
}

export default function ServicesCtLayout({ children }) {
  return <>{children}</>;
}

