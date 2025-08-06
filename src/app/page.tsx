import ThreeDAvater from '@/components/3dAvatar';
import Link from 'next/link';
import ScrollAnimations from '@/components/ScrollAnimations';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Khurram Rizvi's portfolio. Product Manager and Software Engineer with 7+ years of experience in Flutter, React, NextJS, and product delivery. Explore my journey from developer to product leader.",
  keywords: [
    "Khurram Rizvi",
    "Product Manager Mumbai",
    "Software Engineer India",
    "Flutter Developer",
    "React Developer",
    "Portfolio",
    "Tech Leadership",
    "Product Strategy"
  ],
  openGraph: {
    title: "Khurram Rizvi | Product Manager & Software Engineer",
    description: "Welcome to my portfolio. Product Manager and Software Engineer with 7+ years of experience in Flutter, React, NextJS, and product delivery.",
    url: "https://krizvi.netlify.app",
    images: [
      {
        url: "/og-home.svg",
        width: 1200,
        height: 630,
        alt: "Khurram Rizvi Portfolio - Product Manager & Software Engineer",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khurram Rizvi | Product Manager & Software Engineer",
    description: "Welcome to my portfolio. Product Manager and Software Engineer with 7+ years of experience.",
    images: ["/og-home.svg"],
  },
  alternates: {
    canonical: "https://krizvi.netlify.app",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent">
      <ScrollAnimations />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h1 className="text-6xl lg:text-7xl font-normal text-black leading-tight tracking-tight">
                Product Manager
              </h1>
              <p className="text-xl text-gray-600 mt-4 max-w-2xl">
                7+ years of experience in tech, delivering products from concept to launch. 
                Recently promoted to Product Manager with a strong technical foundation.
              </p>
            </div>
            
            <div className="flex items-center gap-4 animate-fade-in animate-delay-200">
              <Link 
                href="/contact" 
                className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
              >
                Resume
              </Link>
              <Link 
                href="/projects" 
                className="border border-gray-300 text-black px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
              >
                Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <h2 className="text-4xl font-normal text-black animate-on-scroll">About</h2>
            
            <div className="space-y-6 animate-on-scroll">
              <p className="text-lg text-gray-600 leading-relaxed">
                 With 7+ years in the tech industry, I've evolved from a passionate 
                 developer to a Product Manager who understands both the technical 
                 and business sides of product development.
               </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                My technical journey spans Flutter development for mobile & web, 
                React/NextJS for modern web applications, and backend development. 
                I've successfully delivered multiple projects from conception to launch.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                 Recently promoted to Product Manager, I leverage my technical background 
                 to bridge the gap between engineering teams and business objectives, 
                 ensuring products are both technically sound and market-ready.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 border-t border-gray-200">
        <div className="space-y-12">
          <h2 className="text-4xl font-normal text-black animate-on-scroll">Skills</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 animate-on-scroll hover:border-gray-300 transition-colors">
              <h3 className="text-lg font-medium text-black mb-3">Mobile & Web Development</h3>
              <p className="text-gray-600 mb-4 text-sm">Cross-platform development with Flutter and modern web technologies</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Flutter</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Mobile Apps</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Web Apps</span>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 animate-on-scroll hover:border-gray-300 transition-colors animate-delay-200">
              <h3 className="text-lg font-medium text-black mb-3">Full-Stack Development</h3>
              <p className="text-gray-600 mb-4 text-sm">Frontend expertise with React/NextJS and backend development experience</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">NextJS</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Backend</span>
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 animate-on-scroll hover:border-gray-300 transition-colors animate-delay-400">
              <h3 className="text-lg font-medium text-black mb-3">Product & Strategy</h3>
              <p className="text-gray-600 mb-4 text-sm">Product management and strategic thinking</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Product Strategy</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
