import { Plus_Jakarta_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const APP_URL = "https://mysalah.vercel.app";

export const metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    default: "My Salah — Islamic Prayer Tracking App",
    template: "%s | My Salah",
  },
  description:
    "Track your five daily prayers, build sacred streaks, earn achievements, and deepen your spiritual practice. Free, private, and offline-first Islamic prayer companion for Android.",
  keywords: [
    "salah tracker",
    "prayer tracker",
    "islamic app",
    "namaz tracker",
    "prayer times",
    "qibla compass",
    "dhikr counter",
    "muslim app",
    "prayer log",
    "islamic prayer companion",
    "99 names of allah",
    "hadith app",
    "quran verse app",
  ],
  authors: [{ name: "My Salah" }],
  creator: "My Salah",
  publisher: "My Salah",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: APP_URL,
  },
  icons: {
    icon: [{ url: "/icon.png", sizes: "1024x1024", type: "image/png" }],
    apple: [{ url: "/icon.png", sizes: "1024x1024", type: "image/png" }],
    shortcut: "/icon.png",
  },
  openGraph: {
    title: "My Salah — Islamic Prayer Tracking App",
    description:
      "Track your five daily prayers, build sacred streaks, earn achievements, and deepen your spiritual practice. Free, private, and offline-first.",
    type: "website",
    url: APP_URL,
    siteName: "My Salah",
    locale: "en_US",
    images: [
      {
        url: "/icon.png",
        width: 1024,
        height: 1024,
        alt: "My Salah — Islamic Prayer Tracking App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "My Salah — Islamic Prayer Tracking App",
    description:
      "Track your five daily prayers, build sacred streaks, earn achievements, and deepen your spiritual practice.",
    images: ["/icon.png"],
  },
  category: "lifestyle",
};

const themeScript = `
(function(){
  try {
    var s = localStorage.getItem('ms-theme');
    var d = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var t = s || (d ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', t);
  } catch(e){}
})();
`;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "My Salah",
  description:
    "Track your five daily prayers, build sacred streaks, earn achievements, and deepen your spiritual practice. Free, private, and offline-first Islamic prayer companion.",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  featureList: [
    "Prayer tracking with five daily prayers",
    "Sacred streaks and milestone achievements",
    "30 gamified achievements across Bronze to Diamond tiers",
    "Deep analytics with letter grades and heatmaps",
    "Daily Quranic verses in English, Urdu, and Arabic",
    "Authenticated daily Hadiths",
    "99 Names of Allah swipeable card deck",
    "Custom Dhikr counter",
    "Real-time Qibla compass with haptic feedback",
    "Nearby mosques finder with navigation",
    "Offline-first, no account required",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
        <meta name="theme-color" content="#808000" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="My Salah" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jakartaSans.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}
