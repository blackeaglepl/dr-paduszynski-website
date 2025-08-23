/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: [
    // Klasy używane dynamicznie przez lekki system animacji (AOS-like)
    'opacity-0',
    'opacity-100',
    'translate-y-6',
    'translate-y-0',
    '-translate-y-6',
    'translate-x-6',
    'translate-x-0',
    '-translate-x-6',
    'scale-95',
    'scale-100',
    'blur-sm',
    'blur-0',
    'transition-all',
    'duration-700',
    'duration-500',
    'duration-1000',
    'ease-out',
    'will-change-transform',
    'will-change-opacity',
    // Klasy dla menu hamburger
    'hamburger-button',
    'hamburger-line',
    'mobile-menu',
    'mobile-menu-backdrop',
    'mobile-menu-panel',
    'mobile-nav-link',
    'menu-open',
    'show',
    'active',
    'md:hidden',
    'fixed',
    'inset-0',
    'z-50',
    'translate-x-full',
    'translate-x-0',
  ],
  theme: {
    extend: {
      colors: {
        'medical-primary': '#4ECDC4', // Zieleń główna
        'medical-light': '#A8E6CF', // Zieleń jasna
        'medical-bg': '#E8F8F5', // Zieleń tło
        'medical-white': '#FFFFFF', // Tło główne
        'medical-cream': '#FFFAF5', // Elementy wypukłe
        'medical-text': '#243648', // Tekst główny
        'medical-text-light': '#7F8C8D', // Tekst pomocniczy
      },
      fontFamily: {
        heading: ['Quicksand', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        // Mobile
        'h1-mobile': ['28px', { lineHeight: '1.2' }],
        'h2-mobile': ['24px', { lineHeight: '1.2' }],
        'h3-mobile': ['20px', { lineHeight: '1.2' }],
        'body-mobile': ['16px', { lineHeight: '1.6' }],
        'small-mobile': ['14px', { lineHeight: '1.5' }],
        // Desktop
        'h1-desktop': ['42px', { lineHeight: '1.2' }],
        'h2-desktop': ['32px', { lineHeight: '1.2' }],
        'h3-desktop': ['24px', { lineHeight: '1.2' }],
        'body-desktop': ['18px', { lineHeight: '1.6' }],
        'small-desktop': ['16px', { lineHeight: '1.5' }],
      },
      borderRadius: {
        // Upewnijmy się, że duże promienie są dostępne niezależnie od wersji Tailwinda
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3.5rem',
      },
      typography: {
        'medical': {
          css: {
            '--tw-prose-body': '#243648',
            '--tw-prose-headings': '#243648',
            '--tw-prose-lead': '#7F8C8D',
            '--tw-prose-links': '#4ECDC4',
            '--tw-prose-bold': '#243648',
            '--tw-prose-counters': '#4ECDC4',
            '--tw-prose-bullets': '#4ECDC4',
            '--tw-prose-hr': '#E8F8F5',
            '--tw-prose-quotes': '#7F8C8D',
            '--tw-prose-quote-borders': '#4ECDC4',
            '--tw-prose-captions': '#7F8C8D',
            '--tw-prose-code': '#243648',
            '--tw-prose-pre-code': '#243648',
            '--tw-prose-pre-bg': '#E8F8F5',
            '--tw-prose-th-borders': '#E8F8F5',
            '--tw-prose-td-borders': '#E8F8F5',
            
            // Typography
            fontSize: '18px',
            lineHeight: '1.7',
            maxWidth: 'none',
            
            // Headings
            h1: {
              fontSize: '2.25rem',
              fontWeight: '700',
              fontFamily: 'Quicksand, sans-serif',
              color: '#243648',
              marginTop: '0',
              marginBottom: '1.5rem',
            },
            h2: {
              fontSize: '1.875rem',
              fontWeight: '600',
              fontFamily: 'Quicksand, sans-serif',
              color: '#243648',
              marginTop: '2.5rem',
              marginBottom: '1.25rem',
            },
            h3: {
              fontSize: '1.5rem',
              fontWeight: '600',
              fontFamily: 'Quicksand, sans-serif',
              color: '#243648',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h4: {
              fontSize: '1.25rem',
              fontWeight: '600',
              fontFamily: 'Quicksand, sans-serif',
              color: '#243648',
              marginTop: '1.5rem',
              marginBottom: '0.75rem',
            },
            
            // Paragraphs
            p: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
              fontSize: '18px',
              lineHeight: '1.7',
            },
            
            // Links
            a: {
              color: '#4ECDC4',
              textDecoration: 'underline',
              fontWeight: '500',
              '&:hover': {
                color: '#A8E6CF',
              },
            },
            
            // Lists
            ul: {
              marginTop: '1.25rem',
              marginBottom: '1.25rem',
            },
            li: {
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
            },
            'li::marker': {
              color: '#4ECDC4',
            },
            
            // Quotes
            blockquote: {
              fontStyle: 'italic',
              borderLeftColor: '#4ECDC4',
              borderLeftWidth: '4px',
              paddingLeft: '1.5rem',
              marginTop: '2rem',
              marginBottom: '2rem',
              fontSize: '1.125rem',
              color: '#7F8C8D',
              backgroundColor: '#E8F8F5',
              padding: '1.5rem',
              borderRadius: '0.5rem',
            },
            
            // Code
            code: {
              backgroundColor: '#E8F8F5',
              padding: '0.25rem 0.375rem',
              borderRadius: '0.25rem',
              fontSize: '0.875rem',
              fontWeight: '500',
            },
            
            pre: {
              backgroundColor: '#E8F8F5',
              padding: '1.5rem',
              borderRadius: '0.5rem',
              overflow: 'auto',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            
            // Tables
            table: {
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            
            // Images
            img: {
              borderRadius: '0.5rem',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            
            // Strong/Bold
            strong: {
              fontWeight: '600',
              color: '#243648',
            },
            
            // Emphasis
            em: {
              fontStyle: 'italic',
              color: '#7F8C8D',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
