import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";

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
    url: "https://krizvi.netlify.app",
    siteName: "Khurram Rizvi Portfolio",
    title: "Khurram Rizvi | Product Manager & Software Engineer",
    description: "Product Manager and Software Engineer with 7+ years of experience in Flutter, React, NextJS, and product delivery. Bridging technology and business to create impactful products.",
    images: [
      {
        url: "/og-home.svg",
        width: 1200,
        height: 630,
        alt: "Khurram Rizvi - Product Manager & Software Engineer Portfolio",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khurram Rizvi | Product Manager & Software Engineer",
    description: "Product Manager and Software Engineer with 7+ years of experience in Flutter, React, NextJS, and product delivery.",
    images: ["/og-home.svg"],
    creator: "@khurramrizvi",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://krizvi.netlify.app",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/fonts/outfit.css" />
      </head>
      <body
        className="antialiased min-h-screen"
      >
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
