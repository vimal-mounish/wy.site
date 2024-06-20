/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#009fdd",
          "secondary": "#0080c1",
          "accent": "#24d300",
          "neutral": "#2d2c1b",
          "base-100": "#e9ffff",
          "info": "#00edff",
          "success": "#00b789",
          "warning": "#ffa64e",
          "error": "#e3526e",
        },
      },
    ],
  },
}
