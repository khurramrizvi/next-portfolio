/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Vercel Geist Design System Colors
        background: {
          DEFAULT: 'var(--geist-background-primary)',
          secondary: 'var(--geist-background-secondary)',
        },
        foreground: 'var(--geist-foreground)',
        
        // Geist color scale (1-10)
        geist: {
          1: 'var(--geist-color-1)',
          2: 'var(--geist-color-2)',
          3: 'var(--geist-color-3)',
          4: 'var(--geist-color-4)',
          5: 'var(--geist-color-5)',
          6: 'var(--geist-color-6)',
          7: 'var(--geist-color-7)',
          8: 'var(--geist-color-8)',
          9: 'var(--geist-color-9)',
          10: 'var(--geist-color-10)',
        },
        
        // Semantic color mappings
        border: {
          DEFAULT: 'var(--geist-color-4)',
          hover: 'var(--geist-color-5)',
          active: 'var(--geist-color-6)',
        },
        
        text: {
          primary: 'var(--geist-color-10)',
          secondary: 'var(--geist-color-9)',
        },
        
        surface: {
          DEFAULT: 'var(--geist-color-1)',
          hover: 'var(--geist-color-2)',
          active: 'var(--geist-color-3)',
        },
      },
      fontFamily: {
        'sans': ['Samsung Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
        'mono': ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in-up': 'slideInUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'breathe': 'breathe 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
    },
  },
  plugins: [],
}