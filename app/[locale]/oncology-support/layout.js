// SEO metadata для страницы онкологической поддержки
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;

  const translations = {
    uk: {
      title: 'Онкологічна підтримка - VetScan CT',
      description: 'Допомога при підозрі на онкологію: маршрутизація, консультації та супровід пацієнтів у медичному центрі VetScan CT.',
      keywords: 'онкологічна допомога, онкоскринінг, консультація онкологія, Підгороднє, VetScan CT',
    },
    ru: {
      title: 'Онкологическая поддержка - VetScan CT',
      description: 'Помощь при подозрении на онкологию: маршрутизация, консультации и сопровождение пациентов в медицинском центре VetScan CT.',
      keywords: 'онкологическая помощь, онкоскрининг, консультация онкология, Подгородное, VetScan CT',
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
      url: `https://vetscanct.vercel.app/${locale}/oncology-support`,
      type: 'website',
    },
    alternates: {
      canonical: `https://vetscanct.vercel.app/${locale}/oncology-support`,
      languages: {
        uk: 'https://vetscanct.vercel.app/uk/oncology-support',
        ru: 'https://vetscanct.vercel.app/ru/oncology-support',
      },
    },
  };
}

export default function OncologySupportLayout({ children }) {
  return <>{children}</>;
}

