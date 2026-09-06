import type { Config } from 'tailwindcss';
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#B8860B', light: '#F5E6A3', pale: '#FFFBEB' },
        green: { DEFAULT: '#1B4332', mid: '#2D6A4F', light: '#D8F3DC' },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
