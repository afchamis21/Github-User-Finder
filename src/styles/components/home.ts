import { styled } from '..'

export const HomeContainer = styled('div', {
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '$blue700',
  gap: '2rem',
})

export const HomeHeader = styled('header', {
  textAlign: 'center',

  svg: {
    color: '$yellow500',
  },
})
