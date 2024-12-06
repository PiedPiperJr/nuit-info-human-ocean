/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'wave': 'wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite',
        'wave-slow': 'wave 11s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite',
        'swim-1': 'swim 25s linear infinite',
        'swim-2': 'swim 30s linear infinite',
        'swim-3': 'swim 35s linear infinite',
        'swim-4': 'swim 28s linear infinite',
        'swim-5': 'swim 32s linear infinite',
        'swim-6': 'swim 27s linear infinite',
        'swim-7': 'swim 33s linear infinite',
        'swim-8': 'swim 29s linear infinite',
        'swim-9': 'swim 31s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        swim: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
