// @ts-check - enable TS check for js file
import { defineConfig } from "windicss/helpers";

export default defineConfig({
  theme: {
    extend: {
      colors: {
        "blackBg": "#181818",
        white: "#ffffff",
        "teal-bright": "#2AC2A9",
        "teal-light": "#E3F7F4",
        "red-bright": "#FC3A52",
        "red-mild": "#E43714",
        gradient: "#F7E3E3",
        "yellow-golden": "#F9B248",
      },
      fontFamily: {
        sans: ["Inter", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        '3xl': '3px 4px 0 0 rgba(0, 0, 0, 0.3)',
      }
    },
  },
  shortcuts: {
    'btn': ''
  }
});
