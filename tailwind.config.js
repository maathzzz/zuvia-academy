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
      'sm': {'min': '414px'},

      'md': {'min': '768px'},

      'lg': {'min': '1024px'},

      'xl': {'min': '1280px'},

      '2xl': {'min': '1536px'},
    },
    extend: {},
  },
  plugins: [],
}
