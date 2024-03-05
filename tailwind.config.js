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
          100: '#FFFFFF',
          200: '#FFFFFFE6',
          300: '#FFFFFFCC',
          400: '#FFFFFF99',
          500: '#FFFFFF66',
          600: '#FFFFFF33',
          700: '#FFFFFF1A',
          800: '#FFFFFF0D',
          900: '#FFFFFF05',
          white: {
            100: '#ffffff'
          }
        },
        background: {
          moon: "#fff",
          sun: {
            rise: "#FFC950",
            set: "#FF745D",
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
