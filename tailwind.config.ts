import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      tablet: '768px',
      desktop: '992px',
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
        'text-secondary': 'var(--color-text-secondary)',
      },
      maxWidth: {
        container: '1024px',
      },
      spacing: {
        header: '90px',
        'container-x': '2rem',
        'section-y': '5rem',
        'section-y-sm': '2.5rem',
        'btn-x': '30px',
        'btn-y': '10px',
      },
      minHeight: {
        btn: '50px',
      },
    },
  },
  plugins: [],
};

export default config;
