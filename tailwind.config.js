/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "768px",
    },
    extend: {
      colors: {
        typography: {
          100: '#C1BBD1',
          200: '#C1BBD1E6',
          300: '#C1BBD1CC',
          400: '#C1BBD199',
          500: '#C1BBD166',
          600: '#C1BBD133',
          700: '#C1BBD11A',
          800: '#C1BBD10D',
          900: '#C1BBD105',
          white: {
            100: '#D3D3D4',
            200: '#D3D3D4E6',
            300: '#D3D3D4CC',
            400: '#D3D3D499',
            500: '#D3D3D466',
            600: '#D3D3D433',
            700: '#D3D3D41A',
            800: '#D3D3D40D',
            900: '#D3D3D405',
          }
        },
        background: {
          moon: "#F9EEE3",
          night: {
            light: "#2E2A3B",
            dark: "#211F2C",
          }
        }
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(107.65deg, #D9A7F1 0.35%, #7AAAF6 48.28%, #63C3BE 96.21%)'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
