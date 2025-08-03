import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "Khurram Rizvi | Product Manager & Software Engineer",
  description: "Product Manager and Software Engineer with 7+ years of experience in Flutter, React, NextJS, and product delivery. Currently at Enso Group.",
  openGraph: {
    title: "Khurram Rizvi | Product Manager & Software Engineer",
    description: "Product Manager and Software Engineer with 7+ years of experience in Flutter, React, NextJS, and product delivery. Currently at Enso Group.",
    type: "website",
    url: "https://krizvi.netlify.app",
    images: [
      {
        url: "/assets/profile-photo.jpeg",
        width: 1200,
        height: 630,
        alt: "Khurram Rizvi - Product Manager & Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khurram Rizvi | Product Manager & Software Engineer",
    description: "Product Manager and Software Engineer with 7+ years of experience in Flutter, React, NextJS, and product delivery. Currently at Enso Group.",
    images: ["/assets/profile-photo.jpeg"],
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
        className="antialiased bg-gradient-to-br from-amber-50 via-stone-50 to-green-50 min-h-screen"
      >
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
