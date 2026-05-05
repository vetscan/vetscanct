const BASE_URL = 'https://vetscanct.com.ua';

// SEO metadata для страницы диагностики и лечения
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  const path = '/services/diagnostics-treatment';
  const canonical = locale === 'uk' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

  const translations = {
    uk: {
      title: 'Діагностика та швидке лікування - VetScan CT',
      description: 'Комплексна діагностика та швидке лікування в Підгородньому. Сучасне обладнання, професійні лікарі, ефективні методи лікування',
      keywords: 'діагностика, швидке лікування, медична діагностика, Підгороднє, обстеження',
    },
    ru: {
      title: 'Диагностика и быстрое лечение - VetScan CT',
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
      canonical,
      languages: {
        'uk': `${BASE_URL}${path}`,
        'ru': `${BASE_URL}/ru${path}`,
        'x-default': `${BASE_URL}${path}`,
      },
    },
  };
}

export default function DiagnosticsTreatmentLayout({ children }) {
  return <>{children}</>;
}
