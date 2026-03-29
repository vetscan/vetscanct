// SEO metadata для страницы консультации профессора
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  
  const translations = {
    uk: {
      title: 'Консультація професора - VetScan CT',
      description: 'Консультація досвідченого професора-нейрохірурга в Підгородньому. Експертна думка, складні випадки, другий погляд на діагноз',
      keywords: 'консультація професора, професор нейрохірург, експертна консультація, Підгороднє, складні випадки',
    },
    ru: {
      title: 'Консультация профессора - VetScan CT',
      description: 'Консультация опытного профессора-нейрохирурга в Подгородном. Экспертное мнение, сложные случаи, второй взгляд на диагноз',
      keywords: 'консультация профессора, профессор нейрохирург, экспертная консультация, Подгородное, сложные случаи',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://vetscanct.com.ua/${locale}/services/professor-consultation`,
      languages: {
        'uk': 'https://vetscanct.com.ua/uk/services/professor-consultation',
        'ru': 'https://vetscanct.com.ua/ru/services/professor-consultation',
      },
    },
  };
}

export default function ProfessorConsultationLayout({ children }) {
  return <>{children}</>;
}
