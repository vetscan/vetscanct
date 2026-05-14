const BASE_URL = 'https://vetscanct.com.ua';

// SEO metadata для страницы цен
export async function generateMetadata({ params }) {
  const { locale = 'uk' } = await params;
  const path = '/prices';
  // uk — без префикса, ru — с /ru
  const canonical = locale === 'uk' ? `${BASE_URL}${path}` : `${BASE_URL}/${locale}${path}`;

  const translations = {
    uk: {
      title: 'Ціни на ветеринарні послуги та КТ у Дніпрі | VetScan CT',
      description: 'Актуальна вартість ветеринарних послуг у центрі VetScan CT. Ціна на КТ тваринам, операції, лікування травм та переломів у собак та котів. Прозорий прайс на діагностику та лікування.',
      keywords: 'ціни, вартість, КТ тваринам ціна, ветеринарні послуги ціна, Дніпро, Підгороднє',
    },
    ru: {
      title: 'Цены на ветеринарные услуги и КТ в Днепре | VetScan CT',
      description: 'Актуальная стоимость ветеринарных услуг в центре VetScan CT. Цена на КТ животным, операции, лечение травм и переломов у собак и кошек. Прозрачный прайс на диагностику и лечение.',
      keywords: 'цены, стоимость, КТ животным цена, ветеринарные услуги цена, Днепр, Подгородное',
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

export default function PricesLayout({ children }) {
  return <>{children}</>;
}
