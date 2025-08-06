'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navigation = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-xl border-b border-slate-200/30 z-50 soft-shadow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <Link href="/" className="group flex items-center gap-3 transition-all duration-300 cursor-pointer">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-600 rounded-3xl flex items-center justify-center soft-shadow group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white text-lg font-medium">K</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center text-xs animate-pulse">
                👋
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-medium text-slate-700 tracking-tight">Khurram</span>
              <span className="text-xs text-slate-500 font-medium tracking-wide">PRODUCT MANAGER</span>
            </div>
          </Link>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium tracking-wide transition-all duration-300 hover:text-slate-700 group cursor-pointer ${
                  pathname === item.href
                    ? 'text-slate-700'
                    : 'text-slate-500'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-slate-400 to-slate-600 transition-all duration-300 ${
                  pathname === item.href
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            
            {/* Social Icons */}
            <div className="hidden lg:flex items-center space-x-3 ml-6 lg:ml-8 pl-6 lg:pl-8 border-l border-slate-200/50">
              <a 
                href="https://github.com/khurramrizvi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-9 h-9 bg-slate-50 hover:bg-slate-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 soft-shadow cursor-pointer"
              >
                <svg className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/khurramrizvi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group w-9 h-9 bg-slate-50 hover:bg-slate-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 soft-shadow cursor-pointer"
              >
                <svg className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-2xl bg-slate-100/50 text-slate-600 hover:bg-slate-200/50 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200/30 bg-white/80 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-2xl text-base font-medium transition-all duration-300 cursor-pointer ${
                     pathname === item.href
                       ? 'bg-slate-100/50 text-slate-700 border-l-4 border-slate-500'
                       : 'text-slate-500 hover:bg-slate-50/50 hover:text-slate-600'
                   }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Social Icons */}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-200/30">
                <a 
                  href="https://github.com/khurramrizvi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-10 h-10 bg-slate-50 hover:bg-slate-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 soft-shadow cursor-pointer"
                >
                  <svg className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/khurramrizvi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group w-10 h-10 bg-slate-50 hover:bg-slate-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 soft-shadow cursor-pointer"
                >
                  <svg className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;