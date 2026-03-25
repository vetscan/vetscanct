// SEO metadata для страницы записи на прием
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;

  const translations = {
    uk: {
      title: 'Запис на прийом - Neuroscan',
      description: 'Онлайн-запис на прийом у медичному центрі Neuroscan в Підгородньому. Швидке підтвердження заявки та консультація спеціаліста.',
      keywords: 'запис на прийом, онлайн запис, консультація лікаря, Підгороднє, Neuroscan',
    },
    ru: {
      title: 'Запись на прием - Neuroscan',
      description: 'Онлайн-запись на прием в медицинский центр Neuroscan в Подгородном. Быстрое подтверждение заявки и консультация специалиста.',
      keywords: 'запись на прием, онлайн запись, консультация врача, Подгородное, Neuroscan',
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
      url: `https://vetscanct.vercel.app/${locale}/appointment`,
      type: 'website',
    },
    alternates: {
      canonical: `https://vetscanct.vercel.app/${locale}/appointment`,
      languages: {
        uk: 'https://vetscanct.vercel.app/uk/appointment',
        ru: 'https://vetscanct.vercel.app/ru/appointment',
      },
    },
  };
}

export default function AppointmentLayout({ children }) {
  return <>{children}</>;
}
