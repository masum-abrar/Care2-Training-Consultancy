/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // colors: {
    //   'primary': '#007BFF', // Blue
    //   'secondary': '#f4f4f4', //Light gray
    //   'acent': '#28a745' //green
    // },
    extend: {}
  },
  plugins: [require('daisyui')]
}
