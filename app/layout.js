import "./globals.css";
import { Manrope, Montserrat } from "next/font/google";
import IOSOverscrollFix from "@/components/IOSOverscrollFix";
import StructuredData from "@/components/StructuredData/StructuredData";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://vetscanct.vercel.app'),
  title: {
    default: 'Neuroscan - Центр сучасної діагностики | КТ та нейрохірургія',
    template: '%s | Neuroscan'
  },
  description: 'Центр сучасної діагностики Neuroscan: комп\'ютерна томографія (КТ), нейрохірургія, лікування травм хребта. Професійна медична допомога в м.Підгороднє',
  keywords: ['КТ', 'комп\'ютерна томографія', 'нейрохірургія', 'лікування травм', 'діагностика', 'Підгороднє', 'Neuroscan', 'медичний центр'],
  authors: [{ name: 'Neuroscan Medical Center' }],
  creator: 'Neuroscan',
  publisher: 'Neuroscan',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    alternateLocale: ['ru_RU'],
    url: 'https://vetscanct.vercel.app',
    siteName: 'Neuroscan',
    title: 'Neuroscan - Центр сучасної діагностики',
    description: 'Професійна медична допомога: КТ, нейрохірургія, лікування травм',
    images: [
      {
        url: '/Logo.png',
        width: 1200,
        height: 630,
        alt: 'Neuroscan Medical Center',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neuroscan - Центр сучасної діагностики',
    description: 'Професійна медична допомога: КТ, нейрохірургія, лікування травм',
    images: ['/Logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Добавь сюда коды верификации Google Search Console и других сервисов
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Neuroscan'
  },
  alternates: {
    canonical: 'https://vetscanct.vercel.app',
    languages: {
      'uk': 'https://vetscanct.vercel.app/uk',
      'ru': 'https://vetscanct.vercel.app/ru',
    },
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0f1729' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1729' }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                var pathParts = window.location.pathname.split('/').filter(Boolean);
                var localeFromPath = pathParts[0];
                if (localeFromPath === 'uk' || localeFromPath === 'ru') {
                  document.documentElement.lang = localeFromPath;
                }
                var stored = localStorage.getItem('theme');
                document.documentElement.dataset.theme = 'light';
                document.documentElement.style.colorScheme = 'light';
                if (stored === 'dark') {
                  setTimeout(function () {
                    document.documentElement.dataset.theme = 'dark';
                    document.documentElement.style.colorScheme = 'dark';
                  }, 200);
                }
              } catch (e) {}
            })();
          `,
          }}
        />
      </head>
      <body className={`${manrope.variable} ${montserrat.variable}`}>
        <StructuredData />
        <IOSOverscrollFix />
        {children}
      </body>
    </html>
  );
}
