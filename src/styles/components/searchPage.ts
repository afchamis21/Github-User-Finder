import { styled } from '..'

export const SearchPageContainer = styled('div', {
  maxWidth: '54rem',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '1rem',

  gap: '2rem',
})

export const SearchPageHeader = styled('header', {
  maxWidth: '54rem',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '3rem 0',

  'svg:hover': {
    color: '$yellow500',
    transition: 'all 0.2s',
    cursor: 'pointer',
  },

  h1: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    svg: {
      color: '$yellow500',
    },
  },
})
