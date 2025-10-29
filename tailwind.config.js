/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'rubik-regular': ['Rubik_400Regular'],
        'rubik-medium': ['Rubik_500Medium'],
        'rubik-semibold': ['Rubik_600SemiBold'],
        'rubik-bold': ['Rubik_700Bold'],
      },
    },
  },
  plugins: [],
};
