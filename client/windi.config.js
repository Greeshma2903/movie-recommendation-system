// @ts-check - enable TS check for js file
import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      colors: {
        "black-bg": "#181818",
        "white": "#ffffff",
        "teal-bright": "#2AC2A9",
        "teal-light": "#E3F7F4",
        "red-bright": "#FC3A52",
        "red-mild": "#E43714",
        "gradient": "rgba(255, 99, 71, 0.2);",
        "yellow-golden": "#F9B248",
      },
      fontFamily: {
        sans: ["Inter", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        '3xl': '3px 4px 0 0 rgba(0, 0, 0, 0.3)',
      },
      gridTemplateColumns: {
        'fit': 'repeat(auto-fit, minmax(13rem, 1fr))',
      }
    },
  },
  shortcuts: {
    'btn-custom': 'py-2 px-5 font-extrabold font-sans rounded-full flex items-center justify-center transition-shadow ease-out',
    'img-card-size': 'w-44 h-64'
  }
});
