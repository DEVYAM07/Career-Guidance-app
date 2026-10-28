/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#14123b",
          darker: "#0d0b27",
          card: "#1e1b4b",
          cardHover: "#26225e",
          yellow: "#ffd21f",
          green: "#2ce6a6",
          pink: "#ff9acb",
          hotpink: "#ff3d8b",
          periwinkle: "#a0b2ff",
          textMuted: "#a29dc5",
          textLight: "#dedbf7",
        }
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neo': '3px 3px 0px 0px rgba(0,0,0,0.3)',
        'neo-lg': '4px 4px 0px 0px rgba(0,0,0,0.35)',
        'glow-pink': '0 0 25px -4px rgba(255, 61, 139, 0.4)',
        'glow-yellow': '0 0 25px -4px rgba(255, 210, 31, 0.4)',
      }
    },
  },
  plugins: [],
}

