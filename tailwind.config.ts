import type { Config } from 'tailwindcss';
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        balda: {
          blue: '#1E53A4',
          'blue-dark': '#133568',
          'blue-deep': '#0D2244',
          'blue-light': '#EBF2FC',
          'blue-sky': '#D6E6FA',
          gold: '#FDCE07',
          'gold-dark': '#D4AA00',
          'gold-light': '#FFF8D6',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
