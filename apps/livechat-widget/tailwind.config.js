const {
  blue,
  blueDark,
  green,
  greenDark,
  yellow,
  yellowDark,
  slate,
  slateDark,
  red,
  redDark,
  violet,
  violetDark,
} = require('@radix-ui/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.vue', '../../packages/shared/**/*.vue'],
  theme: {
    fontSize: {
      ...defaultTheme.fontSize,
      xxs: '0.625rem',
    },
    colors: {
      transparent: 'transparent',
      white: '#fff',
      white_transparent: 'rgba(255, 255, 255, 0.9)',
      black_transparent: 'rgba(0, 0, 0, 0.9)',
      modal: 'rgba(0, 0, 0, 0.4)',
      current: 'currentColor',
      woot: {
        25: blue.blue2,
        50: blue.blue3,
        75: blue.blue4,
        100: blue.blue5,
        200: blue.blue7,
        300: blue.blue8,
        400: blueDark.blue11,
        500: blueDark.blue10,
        600: blueDark.blue9,
        700: blueDark.blue8,
        800: blueDark.blue6,
        900: blueDark.blue2,
      },
      green: {
        50: greenDark.green12,
        100: green.green6,
        200: green.green7,
        300: green.green8,
        400: greenDark.green10,
        500: greenDark.green9,
        600: green.green10,
        700: green.green11,
        800: greenDark.green7,
        900: greenDark.green6,
      },
      yellow: {
        50: yellow.yellow2,
        100: yellow.yellow3,
        200: yellow.yellow5,
        300: yellowDark.yellow10,
        400: yellowDark.yellow9,
        500: yellowDark.yellow11,
        600: yellow.yellow8,
        700: yellowDark.yellow7,
        800: yellowDark.yellow2,
        900: yellowDark.yellow1,
      },
      slate: {
        25: slate.slate2,
        50: slate.slate3,
        75: slate.slate4,
        100: slate.slate5,
        200: slate.slate7,
        300: slate.slate8,
        400: slateDark.slate11,
        500: slateDark.slate10,
        600: slate.slate11,
        700: slateDark.slate8,
        800: slateDark.slate4,
        900: slateDark.slate1,
      },
      black: {
        50: slate.slate2,
        100: slateDark.slate12,
        200: slate.slate7,
        300: slate.slate8,
        400: slateDark.slate11,
        500: slate.slate9,
        600: slateDark.slate9,
        700: slateDark.slate8,
        800: slateDark.slate7,
        900: slateDark.slate2,
      },
      red: {
        50: redDark.red12,
        100: red.red6,
        200: red.red8,
        300: redDark.red11,
        400: redDark.red10,
        500: red.red9,
        600: red.red10,
        700: red.red11,
        800: redDark.red8,
        900: red.red12,
      },
      violet: {
        50: violet.violet1,
        100: violetDark.violet12,
        200: violet.violet6,
        300: violet.violet8,
        400: violet.violet11,
        500: violet.violet9,
        600: violetDark.violet8,
        700: violetDark.violet7,
        800: violetDark.violet6,
        900: violet.violet12,
      },
      body: slateDark.slate7,
    },
    keyframes: {
      ...defaultTheme.keyframes,
      wiggle: {
        '0%': { transform: 'translateX(0)' },
        '15%': { transform: 'translateX(0.375rem)' },
        '30%': { transform: 'translateX(-0.375rem)' },
        '45%': { transform: 'translateX(0.375rem)' },
        '60%': { transform: 'translateX(-0.375rem)' },
        '75%': { transform: 'translateX(0.375rem)' },
        '90%': { transform: 'translateX(-0.375rem)' },
        '100%': { transform: 'translateX(0)' },
      },
      'loader-pulse': {
        '0%': { opacity: 0.4 },
        '50%': { opacity: 1 },
        '100%': { opacity: 0.4 },
      },
    },
    animation: {
      ...defaultTheme.animation,
      wiggle: 'wiggle 0.5s ease-in-out',
      'loader-pulse': 'loader-pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    },
  },
  plugins: [
    // eslint-disable-next-line
    require('@tailwindcss/typography'),
  ],
};
