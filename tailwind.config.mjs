/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pitch: '#0a0a0a',
        surface: '#141414',
        'surface-2': '#1e1e1e',
        border: '#252525',
        accent: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
          dark: '#1d4ed8',
        },
        muted: '#6b7280',
      },
    },
  },
  plugins: [],
};
