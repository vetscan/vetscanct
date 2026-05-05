const BASE_URL = 'https://vetscanct.com.ua';

// SEO metadata для страницы КТ
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  const path = '/ct';
  const canonical = locale === 'uk' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

  const translations = {
    uk: {
      title: 'Комп\'ютерна томографія (КТ) - VetScan CT',
      description: 'Комп\'ютерна томографія в Підгородньому: сучасне обладнання, швидка діагностика, професійні лікарі. КТ хребта, суглобів, внутрішніх органів',
      keywords: 'КТ, комп\'ютерна томографія, діагностика, Підгороднє, КТ хребта, КТ суглобів, медичний центр',
    },
    ru: {
      title: 'Компьютерная томография (КТ) - VetScan CT',
      description: 'Компьютерная томография в Подгородном: современное оборудование, быстрая диагностика, профессиональные врачи. КТ позвоночника, суставов, внутренних органов',
      keywords: 'КТ, компьютерная томография, диагностика, Подгородное, КТ позвоночника, КТ суставов, медицинский центр',
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
      images: [
        {
          url: '/Cat_2.png',
          width: 800,
          height: 600,
          alt: 'КТ діагностика',
        },
      ],
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

export default function CtLayout({ children }) {
  return <>{children}</>;
}
