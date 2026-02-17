// Layout для локализованных страниц с SEO metadata
export async function generateMetadata({ params }) {
  const locale = params.locale || 'uk';
  
  const translations = {
    uk: {
      title: 'Neuroscan - Центр сучасної діагностики',
      description: 'Професійна медична допомога: КТ, нейрохірургія, лікування травм хребта в м.Підгороднє',
    },
    ru: {
      title: 'Neuroscan - Центр современной диагностики',
      description: 'Профессиональная медицинская помощь: КТ, нейрохирургия, лечение травм позвоночника в г.Подгородное',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: `https://vetscanct.vercel.app/${locale}`,
      languages: {
        'uk': 'https://vetscanct.vercel.app/uk',
        'ru': 'https://vetscanct.vercel.app/ru',
      },
    },
  };
}

export default function LocaleLayout({ children, params }) {
  return <>{children}</>;
}
