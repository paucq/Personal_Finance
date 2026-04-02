/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        app: {
          bg: '#f4f7f5',
          surface: '#ffffff',
          text: '#1d2a24',
          muted: '#5d6e66',
          border: '#d7e0db',
          primary: '#1e7a4d',
          primaryStrong: '#155f3b',
          positive: '#2e9d5b',
          negative: '#c63d2f',
          warning: '#d08700',
          info: '#2b6cb0',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      boxShadow: {
        card: '0 6px 20px rgba(17, 34, 25, 0.08)',
        pop: '0 18px 40px rgba(17, 34, 25, 0.16)',
      },
    },
  },
  plugins: [],
};
