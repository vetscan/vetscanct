// SEO metadata для страницы травматологии
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;

  const translations = {
    uk: {
      title: 'Травматологія - VetScan CT',
      description: 'Травматологія в VetScan CT: лікування переломів, травм суглобів та відновлення опорно-рухового апарату.',
      keywords: 'травматологія, лікування переломів, травми суглобів, ортопедія, Підгороднє, VetScan CT',
    },
    ru: {
      title: 'Травматология - VetScan CT',
      description: 'Травматология в VetScan CT: лечение переломов, травм суставов и восстановление опорно-двигательного аппарата.',
      keywords: 'травматология, лечение переломов, травмы суставов, ортопедия, Подгородное, VetScan CT',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://vetscanct.com.ua/${locale}/services/traumatology`,
      languages: {
        uk: 'https://vetscanct.com.ua/uk/services/traumatology',
        ru: 'https://vetscanct.com.ua/ru/services/traumatology',
      },
    },
  };
}

export default function ServicesTraumatologyLayout({ children }) {
  return <>{children}</>;
}

