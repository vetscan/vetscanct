// SEO metadata для страницы контактов
export async function generateMetadata({ params }) {
  const locale = params.locale || 'uk';
  
  const translations = {
    uk: {
      title: 'Контакти - Як нас знайти | Neuroscan Підгороднє',
      description: 'Контакти медичного центру Neuroscan: адреса, телефони, графік роботи. м.Підгороднє, вул.Шосейна 164В. Телефон: +380 96 800 54 45',
      keywords: 'контакти, адреса, телефон, Підгороднє, медичний центр, як знайти, графік роботи',
    },
    ru: {
      title: 'Контакты - Как нас найти | Neuroscan Подгородное',
      description: 'Контакты медицинского центра Neuroscan: адрес, телефоны, график работы. г.Подгородное, ул.Шоссейная 164В. Телефон: +380 96 800 54 45',
      keywords: 'контакты, адрес, телефон, Подгородное, медицинский центр, как найти, график работы',
    },
  };

  const t = translations[locale] || translations.uk;

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    openGraph: {
      title: t.title,
      description: t.description,
      url: `https://vetscanct.vercel.app/${locale}/contacts`,
      type: 'website',
    },
    alternates: {
      canonical: `https://vetscanct.vercel.app/${locale}/contacts`,
      languages: {
        'uk': 'https://vetscanct.vercel.app/uk/contacts',
        'ru': 'https://vetscanct.vercel.app/ru/contacts',
      },
    },
  };
}

export default function ContactsLayout({ children }) {
  return <>{children}</>;
}
