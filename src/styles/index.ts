import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',

      text: '#f5f3f4',

      blue900: '#000814',
      blue700: '#001d3d',
      blue400: '#003566',

      yellow500: '#ffc300',
      yellow300: '#ffd60a',
    },

    fontSizes: {
      sm: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
})
