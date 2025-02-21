import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google';
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import "@mantine/core/styles.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Toaster } from "@/components/ui/sonner"

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
          <Navbar />
          <noscript>
            <iframe src={`https://www.googletagmanager.com/ns.html?id=${GA_TRACKING_ID}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
          </noscript>
          <SmoothScroll />
          {children}
          <Toaster />
          <Footer />
          {/* MLH Banner */}
          <a
            id="mlh-trust-badge"
            style={{
              display: 'block',
              maxWidth: '100px',
              minWidth: '60px',
              position: 'fixed',
              right: '50px',
              top: 0,
              width: '10%',
              zIndex: 10000
            }}
            href="https://mlh.io/apac?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=gray"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-white.svg"
              alt="Major League Hacking 2025 Hackathon Season"
              style={{ width: '100%' }}
            />
          </a>
        </MantineProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}