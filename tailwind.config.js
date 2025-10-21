/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        border: 'var(--border)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        'gruvbox-red': 'var(--gruvbox-red)',
        'gruvbox-green': 'var(--gruvbox-green)',
        'gruvbox-yellow': 'var(--gruvbox-yellow)',
        'gruvbox-blue': 'var(--gruvbox-blue)',
        'gruvbox-purple': 'var(--gruvbox-purple)',
        'gruvbox-aqua': 'var(--gruvbox-aqua)',
        'gruvbox-orange': 'var(--gruvbox-orange)',
        'gruvbox-gray': 'var(--gruvbox-gray)',
      },
      fontFamily: {
        sans: ['Figtree', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(216, 157, 33, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(216, 157, 33, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
