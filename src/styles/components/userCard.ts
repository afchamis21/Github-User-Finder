import { styled } from '..'

export const UserCardContainer = styled('div', {
  maxWidth: '54rem',
  width: '100%',
  background: '$blue700',
  borderRadius: 8,
  padding: '2rem 2.5rem',
  display: 'flex',
  gap: '2rem',

  flexDirection: 'column',
  textAlign: 'justify',
  justifyContent: 'space-between',

  '@media (min-width: 768px)': {
    flexDirection: 'row',
  },
})

export const ImageContainer = styled('div', {
  width: '9.25rem',
  height: '9.25rem',
  borderRadius: 6,
  overflow: 'hidden',
  flexShrink: 0,
})

export const UserInfoContainer = styled('div', {
  width: '100%',
  display: 'flex',
  gap: '2rem',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const UserInfoHeader = styled('header', {
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
})

export const UserInfoLinks = styled('div', {
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',

  a: {
    color: '$yellow500',
    textDecoration: 'none',
    position: 'relative',

    '&:before': {
      content: '',
      width: 0,
      height: 2,
      position: 'absolute',
      bottom: 0,
      background: '$yellow500',
      transition: 'all 0.2s',
    },

    '&:hover:before': {
      width: '100%',
    },
  },
})

export const UserInfoFooter = styled('footer', {
  display: 'flex',
  gap: '2rem',
  flexWrap: 'wrap',
  span: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',

    svg: {
      color: '$yellow500',
    },
  },
})
