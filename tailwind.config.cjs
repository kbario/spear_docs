/** @type {import('tailwindcss').Config} */
const starlightPlugin = require('@astrojs/starlight-tailwind');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: colors.sky,
        gray: colors.zinc,
      }
    }
  },
  plugins: [
    starlightPlugin(),
  ],
}
