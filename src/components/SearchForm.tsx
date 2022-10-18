import { useRouter } from 'next/router'
import { MagnifyingGlass } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import {
  SearchButton,
  SearchFormContainer,
  SearchInput,
} from '../styles/components/searchForm'

export function SearchForm() {
  const [inputText, setInputText] = useState('')

  const router = useRouter()

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    router.push(`/search/${inputText}`)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        name="username"
        placeholder="Search for a github username"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <SearchButton type="submit" disabled={inputText.length === 0}>
        Search <MagnifyingGlass size={16} weight="bold" />
      </SearchButton>
    </SearchFormContainer>
  )
}
