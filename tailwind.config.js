/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'regular': ['Rubik_400Regular'],
        'medium': ['Rubik_500Medium'],
        'semibold': ['Rubik_600SemiBold'],
      },
    },
  },
  plugins: [],
};
