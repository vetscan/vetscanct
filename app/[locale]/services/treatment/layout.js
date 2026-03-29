// SEO metadata для страницы лечения боли в спине
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;

  const translations = {
    uk: {
      title: 'Лікування болю в спині - VetScan CT',
      description: 'Лікування болю в спині в VetScan CT: діагностика причин, індивідуальна терапія та сучасні методи відновлення.',
      keywords: 'лікування болю в спині, хребет, неврологія, реабілітація, Підгороднє, VetScan CT',
    },
    ru: {
      title: 'Лечение боли в спине - VetScan CT',
      description: 'Лечение боли в спине в VetScan CT: диагностика причин, индивидуальная терапия и современные методы восстановления.',
      keywords: 'лечение боли в спине, позвоночник, неврология, реабилитация, Подгородное, VetScan CT',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://vetscanct.com.ua/${locale}/services/treatment`,
      languages: {
        uk: 'https://vetscanct.com.ua/uk/services/treatment',
        ru: 'https://vetscanct.com.ua/ru/services/treatment',
      },
    },
  };
}

export default function ServicesTreatmentLayout({ children }) {
  return <>{children}</>;
}

