import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          900: '#070A12',
          950: '#05070D',
        },
      },
    },
  },
  plugins: [],
} satisfies Config

