// SEO metadata для страницы вертебропластики
export async function generateMetadata({ params }) {
  const locale = params.locale || 'uk';
  
  const translations = {
    uk: {
      title: 'Вертебропластика - Neuroscan',
      description: 'Вертебропластика в Підгородньому: малоінвазивна процедура для лікування компресійних переломів хребта. Сучасне обладнання, досвідчені хірурги',
      keywords: 'вертебропластика, лікування переломів хребта, малоінвазивна хірургія, Підгороднє, компресійні переломи',
    },
    ru: {
      title: 'Вертебропластика - Neuroscan',
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
      canonical: `https://vetscanct.vercel.app/${locale}/services/vertebroplasty`,
      languages: {
        'uk': 'https://vetscanct.vercel.app/uk/services/vertebroplasty',
        'ru': 'https://vetscanct.vercel.app/ru/services/vertebroplasty',
      },
    },
  };
}

export default function VertebroplastyLayout({ children }) {
  return <>{children}</>;
}
