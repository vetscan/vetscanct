// SEO metadata для страницы диагностики
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;

  const translations = {
    uk: {
      title: 'Огляд та діагностика - VetScan CT',
      description: 'Комплексний огляд та діагностика в VetScan CT: первинна консультація, сучасні методи обстеження та план лікування.',
      keywords: 'огляд, діагностика, консультація лікаря, обстеження, Підгороднє, VetScan CT',
    },
    ru: {
      title: 'Осмотр и диагностика - VetScan CT',
      description: 'Комплексный осмотр и диагностика в VetScan CT: первичная консультация, современные методы обследования и план лечения.',
      keywords: 'осмотр, диагностика, консультация врача, обследование, Подгородное, VetScan CT',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://vetscanct.com.ua/${locale}/services/diagnostics`,
      languages: {
        uk: 'https://vetscanct.com.ua/uk/services/diagnostics',
        ru: 'https://vetscanct.com.ua/ru/services/diagnostics',
      },
    },
  };
}

export default function ServicesDiagnosticsLayout({ children }) {
  return <>{children}</>;
}

