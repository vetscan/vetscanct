const BASE_URL = 'https://vetscanct.com.ua';

// SEO metadata для страницы травматологии
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  const path = '/services/traumatology';
  const canonical = locale === 'uk' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

  const translations = {
    uk: {
      title: 'Травматологія тварин у Дніпрі — ветеринарний травматолог | Лікування переломів собак та котів',
      description: 'Травматологія тварин у ветеринарній клініці: лікування переломів у собак та котів, остеосинтез, металоостеосинтез, операції при травмах хребта, суглобів та щелепи. Досвідчений ветеринар ортопед та сучасна хірургія переломів тварин.',
      keywords: 'травматологія тварин, лікування переломів, травми суглобів, ортопедія, Дніпро, VetScan CT',
    },
    ru: {
      title: 'Травматология животных в Днепре — ветеринарный травматолог | Лечение переломов собак и кошек',
      description: 'Травматология животных в ветеринарной клинике: лечение переломов у собак и кошек, остеосинтез, металлоостеосинтез, операции при травмах позвоночника, суставов и челюсти. Опытный ветеринар ортопед и современная хирургия переломов животных.',
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

