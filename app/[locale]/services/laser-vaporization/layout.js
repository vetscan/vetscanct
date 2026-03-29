// SEO metadata для страницы лазерной вапоризации
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  
  const translations = {
    uk: {
      title: 'Лазерна вапоризація - VetScan CT',
      description: 'Лазерна вапоризація міжхребцевих гриж у Підгородньому. Сучасний малоінвазивний метод лікування, швидке відновлення, мінімальні ризики',
      keywords: 'лазерна вапоризація, лікування гриж, міжхребцеві грижі, Підгороднє, лазерна хірургія',
    },
    ru: {
      title: 'Лазерная вапоризация - VetScan CT',
      description: 'Лазерная вапоризация межпозвоночных грыж в Подгородном. Современный малоинвазивный метод лечения, быстрое восстановление, минимальные риски',
      keywords: 'лазерная вапоризация, лечение грыж, межпозвоночные грыжи, Подгородное, лазерная хирургия',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://vetscanct.com.ua/${locale}/services/laser-vaporization`,
      languages: {
        'uk': 'https://vetscanct.com.ua/uk/services/laser-vaporization',
        'ru': 'https://vetscanct.com.ua/ru/services/laser-vaporization',
      },
    },
  };
}

export default function LaserVaporizationLayout({ children }) {
  return <>{children}</>;
}
