/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ¡CRÍTICO! Esto le dice a Tailwind que escanee tus componentes React.
  ],
  theme: {
    extend: {
      // Tus configuraciones de colores, sombras, animaciones personalizadas
      colors: {
        'fluorescent-pink': '#FF69B4',
        'light-pink': '#FFD1DC',
        'soft-pink': '#FFB6C1',
        'fluorescent-green': '#00FF00',
      },
      boxShadow: {
        'fluorescent': '0 4px 15px rgba(0, 255, 0, 0.2)',
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 0.15 },
          '50%': { opacity: 0.3 },
        }
      }
    },
  },
  plugins: [],
}