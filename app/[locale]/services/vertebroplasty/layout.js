// SEO metadata для страницы вертебропластики
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  
  const translations = {
    uk: {
      title: 'Вертебропластика - VetScan CT',
      description: 'Вертебропластика в Підгородньому: малоінвазивна процедура для лікування компресійних переломів хребта. Сучасне обладнання, досвідчені хірурги',
      keywords: 'вертебропластика, лікування переломів хребта, малоінвазивна хірургія, Підгороднє, компресійні переломи',
    },
    ru: {
      title: 'Вертебропластика - VetScan CT',
      description: 'Вертебропластика в Подгородном: малоинвазивная процедура для лечения компрессионных переломов позвоночника. Современное оборудование, опытные хирурги',
      keywords: 'вертебропластика, лечение переломов позвоночника, малоинвазивная хирургия, Подгородное, компрессионные переломы',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `https://vetscanct.com.ua/${locale}/services/vertebroplasty`,
      languages: {
        'uk': 'https://vetscanct.com.ua/uk/services/vertebroplasty',
        'ru': 'https://vetscanct.com.ua/ru/services/vertebroplasty',
      },
    },
  };
}

export default function VertebroplastyLayout({ children }) {
  return <>{children}</>;
}
