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
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-slate-600 animate-fade-in animate-delay-100">
                <div className="w-12 h-12 rounded-full overflow-hidden hover-scale soft-shadow">
                  <a href="https://linkedin.com/in/khurramrizvi" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="/assets/profile-photo.jpeg" 
                      alt="Khurram Rizvi - LinkedIn Profile" 
                      className="w-full h-full object-cover object-top hover:opacity-80 transition-opacity"
                    />
                  </a>
                </div>
                <span className="text-lg">Khurram Rizvi</span>
                <a href="https://linkedin.com/in/khurramrizvi" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-700 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              
              <div className="animate-fade-in animate-delay-200">
                <h1 className="text-5xl lg:text-6xl font-medium text-slate-700 leading-tight">
                    Product Manager
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 via-slate-600 to-slate-500 animate-breathe">
                      Mumbai India
                    </span>
                    <span className="text-slate-400 animate-pulse">_</span>
                  </h1>
              </div>
              
              <p className="text-lg text-slate-600 max-w-lg leading-relaxed animate-fade-in animate-delay-300">
                 7+ years of experience in tech, delivering products from concept to launch. 
                 Recently promoted to Product Manager with a strong technical foundation.
               </p>
              
              <div className="flex items-center gap-4 animate-fade-in animate-delay-400">
                <Link 
                  href="/contact" 
                  className="bg-slate-500 text-white px-8 py-4 rounded-2xl font-medium hover:bg-slate-600 transition-all duration-300 hover-lift soft-shadow"
                >
                  RESUME
                </Link>
                <Link 
                  href="/projects" 
                  className="gentle-border text-slate-600 px-8 py-4 rounded-2xl font-medium hover:bg-slate-50 transition-all duration-300 hover-lift"
                >
                  PROJECTS
                </Link>
              </div>
            </div>
            
            {/* Right Content - 3D Character */}
           {/* <ThreeDAvater/> */}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-6 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-medium text-slate-700 mb-8 animate-on-scroll">About Me</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-on-scroll">
              <p className="text-lg text-slate-600 leading-relaxed">
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
            
            <div className="relative animate-on-scroll">
              <div className="w-full h-[500px] bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl overflow-hidden relative hover-scale soft-shadow">
                <img 
                  src="/assets/profile-photo.jpeg" 
                  alt="Khurram Rizvi - Professional Photo" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 soft-shadow gentle-border animate-on-scroll hover-lift">
            <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 animate-float">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-medium text-slate-700 mb-3">Mobile & Web Development</h3>
            <p className="text-slate-600 mb-4">Cross-platform development with Flutter and modern web technologies</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm hover-scale">Flutter</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm hover-scale">Mobile Apps</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm hover-scale">Web Apps</span>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 soft-shadow gentle-border animate-on-scroll hover-lift animate-delay-200">
            <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 animate-float animate-delay-500">
              <span className="text-2xl">⚛️</span>
            </div>
            <h3 className="text-xl font-medium text-slate-700 mb-3">Full-Stack Development</h3>
            <p className="text-slate-600 mb-4">Frontend expertise with React/NextJS and backend development experience</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm hover-scale">React</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm hover-scale">NextJS</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm hover-scale">Backend</span>
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 soft-shadow gentle-border animate-on-scroll hover-lift animate-delay-400">
            <div className="w-12 h-12 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 animate-float animate-delay-600">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-medium text-slate-700 mb-3">Product & Strategy</h3>
            <p className="text-slate-600 mb-4">Product management and strategic thinking</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm hover-scale">Product Strategy</span>
              <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm hover-scale">Leadership</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
