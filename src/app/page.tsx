import ThreeDAvater from '@/components/3dAvatar';
import Link from 'next/link';
import ScrollAnimations from '@/components/ScrollAnimations';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-green-50">
      <ScrollAnimations />
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="flex items-center gap-3 text-gray-600 animate-fade-in animate-delay-100">
                <div className="w-12 h-12 rounded-full overflow-hidden hover-scale">
                  <a href="https://linkedin.com/in/khurramrizvi" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="/assets/profile-photo.jpeg" 
                      alt="Khurram Rizvi - LinkedIn Profile" 
                      className="w-full h-full object-cover object-top hover:opacity-80 transition-opacity"
                    />
                  </a>
                </div>
                <span className="text-lg">Khurram Rizvi</span>
                <a href="https://linkedin.com/in/khurramrizvi" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-900 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              
              <div className="animate-fade-in animate-delay-200">
                <h1 className="text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
                    Product Manager
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-red-600 animate-float">
                      Mumbai India
                    </span>
                    <span className="text-red-500 animate-pulse">_</span>
                  </h1>
              </div>
              
              <p className="text-lg text-gray-600 max-w-lg leading-relaxed animate-fade-in animate-delay-300">
                 7+ years of experience in tech, delivering products from concept to launch. 
                 Recently promoted to Product Manager with a strong technical foundation.
               </p>
              
              <div className="flex items-center gap-4 animate-fade-in animate-delay-400">
                <Link 
                  href="/contact" 
                  className="bg-green-700 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-800 transition-colors hover-lift hover-glow"
                >
                  RESUME
                </Link>
                <Link 
                  href="/projects" 
                  className="border border-green-300 text-green-700 px-8 py-4 rounded-xl font-semibold hover:bg-green-50 transition-colors hover-lift"
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
      <section className="py-20 px-6 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-semibold text-gray-900 mb-8 animate-on-scroll">About Me</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
            
            <div className="relative animate-on-scroll">
              <div className="w-full h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden relative hover-scale">
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
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 animate-on-scroll hover-lift">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6 animate-float">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile & Web Development</h3>
            <p className="text-gray-600 mb-4">Cross-platform development with Flutter and modern web technologies</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm hover-scale">Flutter</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm hover-scale">Mobile Apps</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm hover-scale">Web Apps</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 animate-on-scroll hover-lift animate-delay-200">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6 animate-float animate-delay-500">
              <span className="text-2xl">⚛️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Full-Stack Development</h3>
            <p className="text-gray-600 mb-4">Frontend expertise with React/NextJS and backend development experience</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm hover-scale">React</span>
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm hover-scale">NextJS</span>
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm hover-scale">Backend</span>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 animate-on-scroll hover-lift animate-delay-400">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6 animate-float animate-delay-600">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Product & Strategy</h3>
            <p className="text-gray-600 mb-4">Product management and strategic thinking</p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm hover-scale">Product Strategy</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm hover-scale">Leadership</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
