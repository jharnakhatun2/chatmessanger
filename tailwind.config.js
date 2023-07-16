/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
<<<<<<< HEAD
        "2xl": "1728px",
=======
        '2xl': '1400px',
>>>>>>> 7aa4696ddf2e23ba33b04d75b14a3670be073e50
      },
    },
    extend: {
      fontFamily: {
<<<<<<< HEAD
        ibm: "var(--IBM)",
        inter: "var(--Inter)",
=======
        ibm: 'var(--IBM)',
        inter: 'var(--Inter)',
>>>>>>> 7aa4696ddf2e23ba33b04d75b14a3670be073e50
      },
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
      },
    },
  },
  plugins: [require('tailwindcss-debug-screens')],
};
