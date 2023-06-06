/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': {'max': '414px'},

      'md': {'max': '768px'},

      'lg': {'max': '1024px'},

      'xl': {'max': '1280px'},

      '2xl': {'max': '1536px'},
    },
    extend: {},
  },
  plugins: [],
}
