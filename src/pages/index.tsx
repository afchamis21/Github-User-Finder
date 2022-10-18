import type { NextPage } from 'next'
import Head from 'next/head'
import { GithubLogo } from 'phosphor-react'
import { SearchForm } from '../components/SearchForm'
import { HomeContainer, HomeHeader } from '../styles/components/home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Github User Finder</title>
      </Head>
      <HomeContainer>
        <HomeHeader>
          <GithubLogo size={128} />
          <h1>Github User Finder</h1>
        </HomeHeader>
        <SearchForm />
      </HomeContainer>
    </>
  )
}

export default Home
