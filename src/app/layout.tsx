import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "@mantine/core/styles.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import LenisScroll from "@/components/LenisScroll";
import { Toaster } from "@/components/ui/sonner"

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const GA_TRACKING_ID = "G-JGBFMMS45Y"; // Your Google Analytics Measurement ID

export const metadata = {
  metadataBase: new URL("https://www.devshouse.in"),
  title: `DevsHouse'25`,
  description: "Hack it. Build it. Own it.",
  openGraph: {
    title: `DevsHouse'25`,
    description: "Hack it. Build it. Own it.",
    url: "https://www.devshouse.in",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "DevsHouse | A community of developers",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <ColorSchemeScript />
        {/* Google Analytics Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
      </head>
      <body
        className={`antialiased ${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <MantineProvider>
          <LenisScroll />
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
          </noscript>
          {children}
          <Toaster />
        </MantineProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}