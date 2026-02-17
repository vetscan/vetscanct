// SEO metadata для страницы консультации
export async function generateMetadata({ params }) {
  const locale = params.locale || 'uk';
  
  const translations = {
    uk: {
      title: 'Консультація лікаря - Neuroscan',
      description: 'Професійна консультація досвідчених лікарів у Підгородньому. Індивідуальний підхід, детальна діагностика, рекомендації щодо лікування',
      keywords: 'консультація лікаря, медична консультація, Підгороднє, прийом лікаря, діагностика',
    },
    ru: {
      title: 'Консультация врача - Neuroscan',
      description: 'Профессиональная консультация опытных врачей в Подгородном. Индивидуальный подход, детальная диагностика, рекомендации по лечению',
      keywords: 'консультация врача, медицинская консультация, Подгородное, прием врача, диагностика',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://vetscanct.vercel.app/${locale}/services/consultation`,
      languages: {
        'uk': 'https://vetscanct.vercel.app/uk/services/consultation',
        'ru': 'https://vetscanct.vercel.app/ru/services/consultation',
      },
    },
  };
}

export default function ConsultationLayout({ children }) {
  return <>{children}</>;
}
