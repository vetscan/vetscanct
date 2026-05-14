const BASE_URL = 'https://vetscanct.com.ua';

// SEO metadata для страницы контактов
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  const path = '/contacts';
  // uk — без префикса, ru — с /ru
  const canonical = locale === 'uk' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

  const translations = {
    uk: {
      title: 'Контакти ветеринарної клініки у Підгородному | VetScan CT',
      description: 'Контакти ветеринарної клініки VetScan CT у Підгородному (Дніпрі). КТ тваринам, ветеринарна діагностика, консультації хірурга, онколога та травматолога для тварин. Зручний запис на прийом та КТ.',
      keywords: 'контакти, адреса, телефон, Підгороднє, ветеринарна клініка, КТ тварин, Дніпро',
    },
    ru: {
      title: 'Контакты ветеринарной клиники в Подгородном | VetScan CT',
      description: 'Контакты ветеринарной клиники VetScan CT в Подгородном (Днепре). КТ животным, ветеринарная диагностика, консультации хирурга, онколога и травматолога для животных. Удобная запись на прием и КТ.',
      keywords: 'контакты, адрес, телефон, Подгородное, ветеринарная клиника, КТ животных, Днепр',
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
