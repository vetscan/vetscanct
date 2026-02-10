import "./globals.css";
import { Manrope, Montserrat } from "next/font/google";

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
        {children}
      </body>
    </html>
  );
}
