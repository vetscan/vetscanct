import "./globals.css";
import { Manrope, Montserrat } from "next/font/google";
import IOSOverscrollFix from "@/components/IOSOverscrollFix";

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
  title: "Neuroscan - Центр ендоскопічної нейрохірургії",
  description: "Професійна медична допомога з використанням найсучасніших технологій",
  // Цвет строки браузера (темный, как у сайта)
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0f1729' },
    { media: '(prefers-color-scheme: dark)', color: '#0f1729' }
  ],
  // Мета-теги для iOS
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Neuroscan'
  },
  // Viewport для мобильных
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    viewportFit: 'cover'
  }
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
        <IOSOverscrollFix />
        {children}
      </body>
    </html>
  );
}
