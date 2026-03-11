import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#f7f4ef',
        foreground: '#151515',
        muted: '#5f5d58',
        line: '#dcd7cf',
        accent: '#766756'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'ui-serif', 'Georgia', 'serif']
      },
      boxShadow: {
        soft: '0 20px 60px rgba(26, 24, 20, 0.06)'
      }
    }
  },
  plugins: []
};

export default config;
