// SEO metadata для страницы лечения позвоночника
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  
  const translations = {
    uk: {
      title: 'Лікування хребта та кінцівок - Neuroscan',
      description: 'Комплексне лікування травм хребта та кінцівок у Підгородньому. Сучасні методи, досвідчені фахівці, індивідуальний підхід до кожного пацієнта',
      keywords: 'лікування хребта, лікування кінцівок, травми хребта, Підгороднє, нейрохірургія, ортопедія',
    },
    ru: {
      title: 'Лечение позвоночника и конечностей - Neuroscan',
      description: 'Комплексное лечение травм позвоночника и конечностей в Подгородном. Современные методы, опытные специалисты, индивидуальный подход к каждому пациенту',
      keywords: 'лечение позвоночника, лечение конечностей, травмы позвоночника, Подгородное, нейрохирургия, ортопедия',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://vetscanct.vercel.app/${locale}/services/spine-treatment`,
      languages: {
        'uk': 'https://vetscanct.vercel.app/uk/services/spine-treatment',
        'ru': 'https://vetscanct.vercel.app/ru/services/spine-treatment',
      },
    },
  };
}

export default function SpineTreatmentLayout({ children }) {
  return <>{children}</>;
}
