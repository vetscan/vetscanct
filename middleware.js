import { NextResponse } from 'next/server';

const LOCALES = ['uk', 'ru'];
const DEFAULT_LOCALE = 'uk';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Пропускаем статику, API и служебные пути Next.js
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    /\.(.*)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  const hasLocalePrefix = LOCALES.includes(firstSegment);

  // /uk/... → 301 редирект на /... (убираем /uk из адресной строки)
  if (firstSegment === DEFAULT_LOCALE) {
    const newPathname = '/' + segments.slice(1).join('/');
    const url = request.nextUrl.clone();
    url.pathname = newPathname || '/';
    return NextResponse.redirect(url, { status: 301 });
  }

  // /ru/... → rewrite на /ru/... (URL остаётся, Next.js рендерит app/[locale]/ru/...)
  // Уже имеет префикс локали — ничего не делаем, Next.js сам найдёт маршрут
  if (hasLocalePrefix) {
    return NextResponse.next();
  }

  // /contacts, /prices, / и т.д. → rewrite на /uk/... внутри Next.js
  // URL в браузере остаётся чистым, но Next.js рендерит app/[locale] с locale=uk
  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === '/' ? '' : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)).*)',
  ],
};
