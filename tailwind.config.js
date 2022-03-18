module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        body: '#E6D5B8',
        header: '#1B1A17',
        cta: '#F0A500',
        btn: '#E45826',
      },
    },
  },
  plugins: [],
};
