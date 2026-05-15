/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        matcha: {
          50: '#f0f7f0',
          100: '#dcebdc',
          200: '#bbd8bb',
          300: '#8fc08f',
          400: '#5fa35f',
          500: '#4a8a4a',
          600: '#3d7a3d',
          700: '#326432',
          800: '#2a512a',
          900: '#234323',
          950: '#0f240f',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdf9f3',
          200: '#faf3e6',
          300: '#f5e8d3',
          400: '#edd9b8',
          500: '#e3c89a',
        },
      },
      fontFamily: {
        'self-modern': ['Self Modern', 'serif'],
      },
    },
  },
  plugins: [],
}

