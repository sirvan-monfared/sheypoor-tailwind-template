/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['IRANSans']
      },
      fontSize: {
        'xxs': '10px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
