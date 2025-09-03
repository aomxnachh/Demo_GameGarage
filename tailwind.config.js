/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'gamegarage-dark': '#1c1c1c',
        'gamegarage-black': '#121212',
        'gamegarage-yellow': '#FFC107',
        'gamegarage-orange': '#FF9800',
        'gamegarage-gray': '#2c2c2c',
        'gamegarage-light-gray': '#3a3a3a',
        'gamegarage-border': '#444444',
      },
      fontFamily: {
        pixel: ['Jersey 10', 'monospace'],
        title: ['Jersey 10', 'monospace'],
      },
      borderWidth: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
      },
      animation: {
        'pixel-flicker': 'pixel-flicker 5s infinite',
      },
      keyframes: {
        'pixel-flicker': {
          '0%': { opacity: '1' },
          '2%': { opacity: '0.8' },
          '4%': { opacity: '1' },
          '50%': { opacity: '1' },
          '52%': { opacity: '0.8' },
          '54%': { opacity: '1' },
          '100%': { opacity: '1' },
        }
      },
    },
  },
  plugins: [],
}
