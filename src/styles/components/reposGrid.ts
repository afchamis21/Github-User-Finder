import { styled } from '..'

export const ReposGridContainer = styled('div', {
  display: 'grid',
  maxWidth: '54rem',
  width: '100%',
  gridTemplateColumns: '100%',

  gridGap: '2rem',

  '@media (min-width: 768px)': {
    gridTemplateColumns: 'calc(50% - 1rem) calc(50% - 1rem)',
  },
})

export const SearchReposInput = styled('input', {
  width: '100%',
  padding: '1rem',
  background: '$blue900',
  border: '1px solid $blue400',
  borderRadius: '6px',
  fontSize: '$sm',

  '&:hover': {
    borderColor: '$yellow500',
    transition: 'all 0.2s',
  },
})

export const RepoCard = styled('div', {
  background: '$blue700',
  borderRadius: 8,
  padding: '2rem 2.5rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  justifyContent: 'space-between',
})

export const RepoCardHeader = styled('header', {
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  borderBottom: '1px solid $blue400',
  textTransform: 'uppercase',
  color: '$yellow500',
  flexWrap: 'wrap',

  nav: {
    display: 'flex',
    gap: '0.5rem',
    flexWrap: 'wrap',

    a: {
      color: '$text',

      textDecoration: 'none',
      position: 'relative',

      '&:before': {
        content: '',
        width: 0,
        height: 2,
        position: 'absolute',
        bottom: 0,
        background: '$text',
        transition: 'all 0.2s',
      },

      '&:hover:before': {
        width: '100%',
      },
    },
  },
})

export const RepoCardFooter = styled('div', {
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  span: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
})
