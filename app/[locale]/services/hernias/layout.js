// SEO metadata для страницы лечения грыж
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;

  const translations = {
    uk: {
      title: 'Лікування гриж хребта - Neuroscan',
      description: 'Лікування гриж хребта в медичному центрі Neuroscan: сучасні малоінвазивні методики та індивідуальні програми відновлення.',
      keywords: 'лікування грижі хребта, міжхребцева грижа, нейрохірургія, Підгороднє, Neuroscan',
    },
    ru: {
      title: 'Лечение грыж позвоночника - Neuroscan',
      description: 'Лечение грыж позвоночника в медицинском центре Neuroscan: современные малоинвазивные методики и индивидуальные программы восстановления.',
      keywords: 'лечение грыжи позвоночника, межпозвоночная грыжа, нейрохирургия, Подгородное, Neuroscan',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://vetscanct.vercel.app/${locale}/services/hernias`,
      languages: {
        uk: 'https://vetscanct.vercel.app/uk/services/hernias',
        ru: 'https://vetscanct.vercel.app/ru/services/hernias',
      },
    },
  };
}

export default function ServicesHerniasLayout({ children }) {
  return <>{children}</>;
}

