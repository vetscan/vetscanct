// Динамический sitemap для Next.js
export default function sitemap() {
  const baseUrl = 'https://vetscanct.vercel.app';
  
  // Основные страницы на обоих языках
  const routes = [
    '',
    '/ct',
    '/treatment',
    '/prices',
    '/contacts',
    '/appointment',
    '/oncology-support',
    '/services/consultation',
    '/services/ct',
    '/services/diagnostics',
    '/services/diagnostics-treatment',
    '/services/hernias',
    '/services/hernias-treatment',
    '/services/laser',
    '/services/laser-vaporization',
    '/services/neoplasms',
    '/services/professor-consultation',
    '/services/spine-treatment',
    '/services/traumatology',
    '/services/treatment',
    '/services/vertebroplasty',
  ];

  const locales = ['uk', 'ru'];
  
  const urls = [];
  
  // Добавляем все страницы для каждой локали
  locales.forEach(locale => {
    routes.forEach(route => {
      urls.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1.0 : 0.8,
      });
    });
  });

  return urls;
}
