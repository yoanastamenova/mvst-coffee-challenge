/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#1C1C1C',
          secondary: '#2A2A2A',
        },
        accent: {
          primary: '#C9995B',
          hover: '#D4A574',
        },
        badge: {
          popular: '#5BA4A4',
          category: '#3A3A3A',
        },
        text: {
          primary: '#FFFFFF',
          secondary: 'rgba(255, 255, 255, 0.6)',
        },
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        'section-title': ['28px', { lineHeight: '1.3' }],
        'product-name': ['18px', { lineHeight: '1.4' }],
        'product-subtitle': ['14px', { lineHeight: '1.5' }],
      },
      spacing: {
        'card': '24px',
        'section': '64px',
      },
      borderRadius: {
        'card': '16px',
        'badge': '20px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
