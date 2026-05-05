const BASE_URL = 'https://vetscanct.com.ua';

// SEO metadata для страницы записи на прием
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  const path = '/appointment';
  const canonical = locale === 'uk' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

  const translations = {
    uk: {
      title: 'Запис на прийом - VetScan CT',
      description: 'Онлайн-запис на прийом у медичному центрі VetScan CT в Підгородньому. Швидке підтвердження заявки та консультація спеціаліста.',
      keywords: 'запис на прийом, онлайн запис, консультація лікаря, Підгороднє, VetScan CT',
    },
    ru: {
      title: 'Запись на прием - VetScan CT',
      description: 'Онлайн-запись на прием в медицинский центр VetScan CT в Подгородном. Быстрое подтверждение заявки и консультация специалиста.',
      keywords: 'запись на прием, онлайн запись, консультация врача, Подгородное, VetScan CT',
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

export default function AppointmentLayout({ children }) {
  return <>{children}</>;
}
