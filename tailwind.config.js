/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss'
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'microphone-bg': "url('src/assets/imagenesyotrosrecursos/as-icon-parte-below-hero/fondo-niebla-dinamica-realista.jpg')",
        'monalisa-bg': "url('src/assets/imagenesyotrosrecursos/as-icon-parte-below-hero/background-monalisa-as-icon.jpg')",
        'cat-bg': "url('src/assets/imagenesyotrosrecursos/as-icon-parte-below-hero/background-park-cat-as-icon.jpg')"
      },

      fontSize: {
        '3xl': '2.1rem',
        '3.5xl': '2.18rem',
        '4.5xl': '2.7rem'
      }
    },


  },
  variants: {
    extend: {
      clipPath: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.clip-circle': {
          'clip-path': 'circle(20.8% at 50% 50%)',
        },
        '.clip-circle-full': {
          'clip-path': 'circle(70.7% at 50% 50%)',
        },
        '.clip-inset-small-care': {
          'clip-path': 'inset(0 0 50% 0)',
        },
        '.clip-inset-full-care': {
          'clip-path': 'inset(0 0 0 0)',
        },
      })
      const newUtilities = {
        ".scrollbar-thin": {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(31 29 29) white"
        },
        ".scrollbar-webkit": {
          "&::-webkit-scrollbar": {
            width: "5px",
            height: "8px",
            background: "#aaa"
          },
          "&::-webkit-scrollbar-track": {
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgb(31 41 55)",
            borderRadius: "10px",
            border: "1px solid white"
          },
        },
        ".scrollbar-hide-buttons": {
          "&::-webkit-scrollbar-button": {
            display: 'none'
          }
        }
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }
  ],
};
