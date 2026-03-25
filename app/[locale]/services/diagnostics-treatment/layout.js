// SEO metadata для страницы диагностики и лечения
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  
  const translations = {
    uk: {
      title: 'Діагностика та швидке лікування - Neuroscan',
      description: 'Комплексна діагностика та швидке лікування в Підгородньому. Сучасне обладнання, професійні лікарі, ефективні методи лікування',
      keywords: 'діагностика, швидке лікування, медична діагностика, Підгороднє, обстеження',
    },
    ru: {
      title: 'Диагностика и быстрое лечение - Neuroscan',
      description: 'Комплексная диагностика и быстрое лечение в Подгородном. Современное оборудование, профессиональные врачи, эффективные методы лечения',
      keywords: 'диагностика, быстрое лечение, медицинская диагностика, Подгородное, обследование',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://vetscanct.vercel.app/${locale}/services/diagnostics-treatment`,
      languages: {
        'uk': 'https://vetscanct.vercel.app/uk/services/diagnostics-treatment',
        'ru': 'https://vetscanct.vercel.app/ru/services/diagnostics-treatment',
      },
    },
  };
}

export default function DiagnosticsTreatmentLayout({ children }) {
  return <>{children}</>;
}
