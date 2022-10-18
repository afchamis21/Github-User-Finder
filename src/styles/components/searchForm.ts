import { styled } from '..'

export const SearchFormContainer = styled('form', {
  display: 'flex',
  gap: '0.5rem',
  maxWidth: '54rem',
  width: '100%',
})

export const SearchInput = styled('input', {
  flex: 1,
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

export const SearchButton = styled('button', {
  background: '$yellow500',
  border: 0,
  borderRadius: '6px',
  color: '$blue700',
  fontWeight: 'bold',
  fontSize: '$sm',
  padding: '1rem',
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',

  '&:not(:disabled):hover': {
    background: '$yellow300',
    transition: 'all 0.2s',
    cursor: 'pointer',
  },

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },
})
