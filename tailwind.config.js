/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        // We will rely heavily on the default 'zinc' palette usually, 
        // but defining specific semantic colors helps.
        surface: '#ffffff',
        border: '#e4e4e7', // zinc-200
      }
    },
  },
  plugins: [],
}
