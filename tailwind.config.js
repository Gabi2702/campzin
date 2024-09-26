/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#242424', // cor mais clara
          DEFAULT: '#4299e1', // cor padrão
          dark: '#191919', // cor mais escura
        },
        secondary: {
          light: '#7F06F5',
          DEFAULT: '#ed8936',
          dark: '#7F06F5',
        },
        customGreen: {
          light: '#9ae6b4',
          DEFAULT: '#68d391',
          dark: '#48bb78',
        },
        // Adicione mais cores conforme necessário
      },
    },
  },
  plugins: [],
}
