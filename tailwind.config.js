/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ecusol': {
          'primario': '#002D62',    
          'secundario': '#F5A623', 
          'acento': '#00AEEF',     
          'gris-oscuro': '#333333',
          'gris-claro': '#F4F7F6',
        }
      }
    },
  },
  plugins: [],
}