// SEO metadata для страницы лечения боли в спине
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;

  const translations = {
    uk: {
      title: 'Лікування болю в спині - Neuroscan',
      description: 'Лікування болю в спині в Neuroscan: діагностика причин, індивідуальна терапія та сучасні методи відновлення.',
      keywords: 'лікування болю в спині, хребет, неврологія, реабілітація, Підгороднє, Neuroscan',
    },
    ru: {
      title: 'Лечение боли в спине - Neuroscan',
      description: 'Лечение боли в спине в Neuroscan: диагностика причин, индивидуальная терапия и современные методы восстановления.',
      keywords: 'лечение боли в спине, позвоночник, неврология, реабилитация, Подгородное, Neuroscan',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://vetscanct.vercel.app/${locale}/services/treatment`,
      languages: {
        uk: 'https://vetscanct.vercel.app/uk/services/treatment',
        ru: 'https://vetscanct.vercel.app/ru/services/treatment',
      },
    },
  };
}

export default function ServicesTreatmentLayout({ children }) {
  return <>{children}</>;
}

