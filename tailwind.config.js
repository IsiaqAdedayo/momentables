module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      blur: {
        xxl: '72px',
      },
      colors:{
        'grayish': '#6e6e6e',
        'lightGray': '#585858d8'
      },
      backgroundImage: theme => ({
        'bgm': "url('/mobile.svg')",
        'bgw': "url('/wave.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
