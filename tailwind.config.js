/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        'custom-top': '100px', // Custom value for the top
        'custom-bottom': '100px', // Custom value for the bottom
      },
      textShadow: {
        default: '4px 4px 8px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-textshadow')],
}

