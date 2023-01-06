/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      background: 'rgb(var(--color-background) / <alpha-value>)',
      altbackground: 'rgb(var(--color-altbackground) / <alpha-value>)',
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      primarytext: 'rgb(var(--color-primarytext) / <alpha-value>)',
      secondarytext: 'rgb(var(--color-secondarytext) / <alpha-value>)',
      highlighttext: 'rgb(var(--color-highlighttext) / <alpha-value>)',
    },
    extend: {},
  },
  plugins: [],
}
