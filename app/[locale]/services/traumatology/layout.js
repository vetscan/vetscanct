// SEO metadata для страницы травматологии
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;

  const translations = {
    uk: {
      title: 'Травматологія - Neuroscan',
      description: 'Травматологія в Neuroscan: лікування переломів, травм суглобів та відновлення опорно-рухового апарату.',
      keywords: 'травматологія, лікування переломів, травми суглобів, ортопедія, Підгороднє, Neuroscan',
    },
    ru: {
      title: 'Травматология - Neuroscan',
      description: 'Травматология в Neuroscan: лечение переломов, травм суставов и восстановление опорно-двигательного аппарата.',
      keywords: 'травматология, лечение переломов, травмы суставов, ортопедия, Подгородное, Neuroscan',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://vetscanct.vercel.app/${locale}/services/traumatology`,
      languages: {
        uk: 'https://vetscanct.vercel.app/uk/services/traumatology',
        ru: 'https://vetscanct.vercel.app/ru/services/traumatology',
      },
    },
  };
}

export default function ServicesTraumatologyLayout({ children }) {
  return <>{children}</>;
}

