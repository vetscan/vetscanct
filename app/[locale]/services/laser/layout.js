// SEO metadata для страницы лазерного лечения
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;

  const translations = {
    uk: {
      title: 'Лазерне лікування - Neuroscan',
      description: 'Лазерні методи лікування у Neuroscan: сучасні технології, мінімальна травматичність та швидке відновлення пацієнтів.',
      keywords: 'лазерне лікування, лазерна хірургія, малоінвазивне лікування, Підгороднє, Neuroscan',
    },
    ru: {
      title: 'Лазерное лечение - Neuroscan',
      description: 'Лазерные методы лечения в Neuroscan: современные технологии, минимальная травматичность и быстрое восстановление пациентов.',
      keywords: 'лазерное лечение, лазерная хирургия, малоинвазивное лечение, Подгородное, Neuroscan',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://vetscanct.vercel.app/${locale}/services/laser`,
      languages: {
        uk: 'https://vetscanct.vercel.app/uk/services/laser',
        ru: 'https://vetscanct.vercel.app/ru/services/laser',
      },
    },
  };
}

export default function ServicesLaserLayout({ children }) {
  return <>{children}</>;
}

