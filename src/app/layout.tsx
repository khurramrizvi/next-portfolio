import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";
import ThemeScript from "../components/ThemeScript";

export const metadata: Metadata = {
  title: {
    default: "Khurram Rizvi | Product Manager & Software Engineer",
    template: "%s | Khurram Rizvi"
  },
  description: "Product Manager and Software Engineer with 7+ years of experience in Flutter, React, NextJS, and product delivery. Bridging technology and business to create impactful products.",
  keywords: [
    "Product Manager",
    "Software Engineer",
    "Flutter Developer",
    "React Developer",
    "NextJS",
    "Mobile Development",
    "Web Development",
    "Product Strategy",
    "Tech Leadership",
    "Mumbai",
    "India",
    "Portfolio"
  ],
  authors: [{ name: "Khurram Rizvi" }],
  creator: "Khurram Rizvi",
  publisher: "Khurram Rizvi",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khurramrizvipm.netlify.app",
    siteName: "Khurram Rizvi Portfolio",
    title: "Khurram Rizvi | Product Manager & Software Engineer",
    description: "Product Manager and Software Engineer with 7+ years of experience in Flutter, React, NextJS, and product delivery. Bridging technology and business to create impactful products.",
    images: [
      {
        url: "https://khurramrizvipm.netlify.app/og-home.png",
        width: 1200,
        height: 630,
        alt: "Khurram Rizvi - Product Manager & Software Engineer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khurram Rizvi | Product Manager & Software Engineer",
    description: "Product Manager and Software Engineer with 7+ years of experience in Flutter, React, NextJS, and product delivery.",
    images: ["https://khurramrizvipm.netlify.app/og-home.png"],
    creator: "@khurramrizvi",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://khurramrizvipm.netlify.app",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <ThemeScript />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link href="https://fonts.cdnfonts.com/css/samsung-sans-4" rel="stylesheet" />
      </head>
      <body
        className="antialiased min-h-screen transition-colors duration-200"
        style={{ fontFamily: "'Samsung Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
      >
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
