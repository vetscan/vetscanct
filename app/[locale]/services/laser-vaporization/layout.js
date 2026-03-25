// SEO metadata для страницы лазерной вапоризации
export async function generateMetadata({ params }) {
  const locale = params.locale || 'uk';
  
  const translations = {
    uk: {
      title: 'Лазерна вапоризація - Neuroscan',
      description: 'Лазерна вапоризація міжхребцевих гриж у Підгородньому. Сучасний малоінвазивний метод лікування, швидке відновлення, мінімальні ризики',
      keywords: 'лазерна вапоризація, лікування гриж, міжхребцеві грижі, Підгороднє, лазерна хірургія',
    },
    ru: {
      title: 'Лазерная вапоризация - Neuroscan',
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
      canonical: `https://vetscanct.vercel.app/${locale}/services/laser-vaporization`,
      languages: {
        'uk': 'https://vetscanct.vercel.app/uk/services/laser-vaporization',
        'ru': 'https://vetscanct.vercel.app/ru/services/laser-vaporization',
      },
    },
  };
}

export default function LaserVaporizationLayout({ children }) {
  return <>{children}</>;
}
