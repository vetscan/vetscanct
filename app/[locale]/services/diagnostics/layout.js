// SEO metadata для страницы диагностики
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;

  const translations = {
    uk: {
      title: 'Огляд та діагностика - Neuroscan',
      description: 'Комплексний огляд та діагностика в Neuroscan: первинна консультація, сучасні методи обстеження та план лікування.',
      keywords: 'огляд, діагностика, консультація лікаря, обстеження, Підгороднє, Neuroscan',
    },
    ru: {
      title: 'Осмотр и диагностика - Neuroscan',
      description: 'Комплексный осмотр и диагностика в Neuroscan: первичная консультация, современные методы обследования и план лечения.',
      keywords: 'осмотр, диагностика, консультация врача, обследование, Подгородное, Neuroscan',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://vetscanct.vercel.app/${locale}/services/diagnostics`,
      languages: {
        uk: 'https://vetscanct.vercel.app/uk/services/diagnostics',
        ru: 'https://vetscanct.vercel.app/ru/services/diagnostics',
      },
    },
  };
}

export default function ServicesDiagnosticsLayout({ children }) {
  return <>{children}</>;
}

