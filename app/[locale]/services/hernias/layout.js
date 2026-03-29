// SEO metadata для страницы лечения грыж
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;

  const translations = {
    uk: {
      title: 'Лікування гриж хребта - VetScan CT',
      description: 'Лікування гриж хребта в медичному центрі VetScan CT: сучасні малоінвазивні методики та індивідуальні програми відновлення.',
      keywords: 'лікування грижі хребта, міжхребцева грижа, нейрохірургія, Підгороднє, VetScan CT',
    },
    ru: {
      title: 'Лечение грыж позвоночника - VetScan CT',
      description: 'Лечение грыж позвоночника в медицинском центре VetScan CT: современные малоинвазивные методики и индивидуальные программы восстановления.',
      keywords: 'лечение грыжи позвоночника, межпозвоночная грыжа, нейрохирургия, Подгородное, VetScan CT',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://vetscanct.com.ua/${locale}/services/hernias`,
      languages: {
        uk: 'https://vetscanct.com.ua/uk/services/hernias',
        ru: 'https://vetscanct.com.ua/ru/services/hernias',
      },
    },
  };
}

export default function ServicesHerniasLayout({ children }) {
  return <>{children}</>;
}

