/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}"
  ],
  theme: {
    extend: {
      colors: {
        "gotham-dark": "#0a0a0a",
        "gotham-light": "#e0e0e0",
        "gotham-accent": "#ffcc00",
      },
    },
  },
  plugins: [],
};
