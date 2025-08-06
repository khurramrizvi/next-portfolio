import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn about Khurram Rizvi's journey from Software Engineer to Product Manager. 7+ years of experience in Flutter, React, NextJS development and product strategy at Enso Group.",
  keywords: [
    "About Khurram Rizvi",
    "Product Manager Experience",
    "Software Engineer Journey",
    "Enso Group",
    "InfoProfile",
    "Flutter Expert",
    "React Developer",
    "Tech Leadership",
    "Product Strategy",
    "Mumbai Tech"
  ],
  openGraph: {
    title: "About Khurram Rizvi | Product Manager & Software Engineer",
    description: "Learn about my journey from Software Engineer to Product Manager. 7+ years of experience in Flutter, React, NextJS development and product strategy.",
    url: "https://krizvi.netlify.app/about",
    images: [
      {
        url: "/og-about.png",
        width: 1200,
        height: 630,
        alt: "About Khurram Rizvi - Product Manager & Software Engineer Journey",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Khurram Rizvi | Product Manager & Software Engineer",
    description: "Learn about my journey from Software Engineer to Product Manager. 7+ years of experience in tech.",
    images: ["/og-about.png"],
  },
  alternates: {
    canonical: "https://krizvi.netlify.app/about",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-normal text-black mb-6">
            About
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A passionate Product Manager and Software Engineer with 7+ years of experience 
            in building thoughtful, user-centered products.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-16 mb-16">
          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-normal text-black mb-6">My Journey</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm Khurram Rizvi, an Indian software engineer turned Product Manager with over 
                seven years of experience in the tech industry. My journey has been focused on 
                creating thoughtful, intuitive interfaces and delivering products that make a real impact.
              </p>
              <p>
                I specialize in software development for mobile and web-based applications with a 
                strong focus on reliability and simplicity. Recently promoted to Product Manager, 
                I now combine my technical expertise with product strategy and user-centered design.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-normal text-black mb-6">Current Focus</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Currently working at <strong>Enso Group</strong> as a Product Manager, where I'm 
                developing some of the world's best software products such as InfoProfile - 
                a new generation social media platform.
              </p>
              <p>
                My role involves bridging the gap between technical implementation and business 
                strategy, ensuring that we build products that not only work well but also 
                solve real user problems effectively.
              </p>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="border-t border-gray-200 pt-16 mb-16">
          <h2 className="text-2xl font-normal text-black mb-8">Professional Experience</h2>
          <div className="space-y-8">
            <div className="border-l-2 border-black pl-6">
              <h3 className="text-lg font-medium text-black">Product Manager</h3>
              <p className="text-gray-600 font-medium">Enso Group • Present</p>
              <p className="text-gray-600 mt-2">
                Leading product development for InfoProfile and other innovative software solutions. 
                Focus on product strategy, user experience, and cross-functional team coordination.
              </p>
            </div>
            
            <div className="border-l-2 border-gray-300 pl-6">
              <h3 className="text-lg font-medium text-black">Software Engineer</h3>
              <p className="text-gray-500 font-medium">Enso Group • Previous Role</p>
              <p className="text-gray-600 mt-2">
                Developed mobile and web applications using Flutter, React, and NextJS. 
                Contributed to building scalable, user-friendly software solutions.
              </p>
            </div>
            
            <div className="border-l-2 border-gray-300 pl-6">
              <h3 className="text-lg font-medium text-black">Lead Developer</h3>
              <p className="text-gray-500 font-medium">Jai Kisan • Previous</p>
              <p className="text-gray-600 mt-2">
                Led the development of mobile apps and various mobile solutions. 
                Managed technical teams and delivered multiple successful projects.
              </p>
            </div>
          </div>
        </div>

        {/* Skills & Technologies */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-2xl font-normal text-black mb-8">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-black mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Flutter</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">React</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">NextJS</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Mobile Development</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Web Development</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Backend Development</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-black mb-4">Product Skills</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Product Strategy</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">User Experience</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Project Delivery</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Team Leadership</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm">Cross-functional Collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}