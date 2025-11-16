/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nueva paleta de colores basada en el logo
        'ecusol': {
          'primario': '#002D62',    // Azul oscuro del logo
          'secundario': '#F5A623', // Naranja del logo
          'acento': '#00AEEF',      // Azul claro del logo
          'gris-oscuro': '#333333',
          'gris-claro': '#F4F7F6',
        }
      }
    },
  },
  plugins: [],
}