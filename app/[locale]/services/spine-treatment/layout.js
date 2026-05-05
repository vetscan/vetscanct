const BASE_URL = 'https://vetscanct.com.ua';

// SEO metadata для страницы лечения позвоночника
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  const path = '/services/spine-treatment';
  const canonical = locale === 'uk' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

  const translations = {
    uk: {
      title: 'Лікування хребта та кінцівок - VetScan CT',
      description: 'Комплексне лікування травм хребта та кінцівок у Підгородньому. Сучасні методи, досвідчені фахівці, індивідуальний підхід до кожного пацієнта',
      keywords: 'лікування хребта, лікування кінцівок, травми хребта, Підгороднє, нейрохірургія, ортопедія',
    },
    ru: {
      title: 'Лечение позвоночника и конечностей - VetScan CT',
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
      canonical,
      languages: {
        'uk': `${BASE_URL}${path}`,
        'ru': `${BASE_URL}/ru${path}`,
        'x-default': `${BASE_URL}${path}`,
      },
    },
  };
}

export default function SpineTreatmentLayout({ children }) {
  return <>{children}</>;
}
