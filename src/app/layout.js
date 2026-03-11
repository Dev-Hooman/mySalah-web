import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "mySalah — Islamic Prayer Tracking App",
  description:
    "Track your five daily prayers, build sacred streaks, earn achievements, and deepen your spiritual practice. Free, private, and offline-first.",
  keywords:
    "salah tracker, prayer tracker, islamic app, namaz tracker, prayer times, qibla compass, dhikr counter",
  openGraph: {
    title: "mySalah — Islamic Prayer Tracking App",
    description:
      "Track your five daily prayers, build sacred streaks, earn achievements, and deepen your spiritual practice. Free, private, and offline-first.",
    type: "website",
    siteName: "mySalah",
  },
  twitter: {
    card: "summary_large_image",
    title: "mySalah — Islamic Prayer Tracking App",
    description:
      "Track your five daily prayers, build sacred streaks, earn achievements, and deepen your spiritual practice.",
  },
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
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#808000" />
      </head>
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
