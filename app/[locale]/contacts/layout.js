const BASE_URL = 'https://vetscanct.com.ua';

// SEO metadata для страницы контактов
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  const path = '/contacts';
  // uk — без префикса, ru — с /ru
  const canonical = locale === 'uk' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

  const translations = {
    uk: {
      title: 'Контакти - Як нас знайти | VetScan CT Підгороднє',
      description: 'Контакти медичного центру VetScan CT: адреса, телефони, графік роботи. м.Підгороднє, вул.Шосейна 164В. Телефон: +380 96 800 54 45',
      keywords: 'контакти, адреса, телефон, Підгороднє, медичний центр, як знайти, графік роботи',
    },
    ru: {
      title: 'Контакты - Как нас найти | VetScan CT Подгородное',
      description: 'Контакты медицинского центра VetScan CT: адрес, телефоны, график работы. г.Подгородное, ул.Шоссейная 164В. Телефон: +380 96 800 54 45',
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
      url: canonical,
      type: 'website',
    },
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

export default function ContactsLayout({ children }) {
  return <>{children}</>;
}
