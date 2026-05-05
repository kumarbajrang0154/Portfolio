export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 60px rgba(255, 186, 84, 0.22)'
      },
      colors: {
        brand: {
          900: '#050816',
          800: '#0b1223',
          700: '#111b34',
          accent: '#ffb84d'
        }
      }
    }
  },
  plugins: []
};
