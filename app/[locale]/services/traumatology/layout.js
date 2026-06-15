const BASE_URL = 'https://vetscanct.com.ua';

// SEO metadata для страницы травматологии
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  const path = '/services/traumatology';
  const canonical = locale === 'uk' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

  const translations = {
    uk: {
      title: 'Травматологія тварин у Дніпрі — лікування переломів собак та котів',
      description: 'Травматологія тварин у Дніпрі у ветеринарній клініці Vetscan CT. Лікування переломів у собак та котів, остеосинтез, металоостеосинтез, операції при травмах хребта, суглобів та щелепи.',
      keywords: 'травматологія тварин, лікування переломів, травми суглобів, ортопедія, Дніпро, VetScan CT',
    },
    ru: {
      title: 'Травматология животных в Днепре — лечение переломов собак и кошек',
      description: 'Травматология животных в Днепре ветеринарной клинике Vetscan CT. Лечение переломов у собак и кошек, остеосинтез, металлоостеосинтез, операции при травмах позвоночника, суставов и челюсти.',
      keywords: 'травматология животных, лечение переломов, травмы суставов, ортопедия, Днепр, VetScan CT',
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

export default function ServicesTraumatologyLayout({ children }) {
  return <>{children}</>;
}

