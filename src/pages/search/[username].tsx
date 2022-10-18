/* eslint-disable camelcase */
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { GithubLogo, CaretLeft } from 'phosphor-react'
import { useEffect } from 'react'
import { ReposGrid } from '../../components/ReposGrid'
import { SearchForm } from '../../components/SearchForm'
import { UserCard } from '../../components/UserCard'
import { api } from '../../libs/axios'
import {
  SearchPageContainer,
  SearchPageHeader,
} from '../../styles/components/searchPage'
import { formatHomepageLink } from '../../utils/formatHomepageLink'

interface Repo {
  id: number
  name: string
  description: string
  htmlUrl: string
  homepage: string
  language: string
  starCount: number
  watcherCount: number
}

interface UserInfo {
  htmlUrl: string
  avatarUrl: string
  company: string
  blog: string
  name: string
  bio: string
  reposAmount: number
  followers: number
  following: number
}

interface UserProps {
  username: string
  userInfo: UserInfo
  repos: Repo[]
  shouldRedirect?: boolean
}

export default function User({
  username,
  userInfo,
  repos,
  shouldRedirect,
}: UserProps) {
  const router = useRouter()
  useEffect(() => {
    if (shouldRedirect) {
      router.push('/404')
    }
  }, [])
  return (
    <>
      <Head>
        <title>{username}</title>
      </Head>
      <SearchPageHeader>
        <h1>
          <GithubLogo weight="fill" size={48} /> Github User Finder
        </h1>
        <Link href="/">
          <CaretLeft size={48} weight="bold" />
        </Link>
      </SearchPageHeader>
      <SearchPageContainer>
        <SearchForm />
        <UserCard userInfo={userInfo} username={username} />
        <ReposGrid repos={repos} />
      </SearchPageContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps<
  any,
  { username: string }
> = async ({ params }) => {
  const username = params?.username
  try {
    const {
      data: {
        avatar_url,
        html_url,
        repos_url,
        company,
        blog,
        bio,
        name,
        public_repos,
        followers,
        following,
      },
    } = await api.get(`https://api.github.com/users/${username}`)
    const userInfo: UserInfo = {
      avatarUrl: avatar_url,
      htmlUrl: html_url,
      name,
      bio,
      blog,
      company,
      followers,
      following,
      reposAmount: public_repos,
    }

    const { data } = await api.get(repos_url)
    const repos: Repo[] = data.map((repo: any) => {
      const formattedHomepage = formatHomepageLink(repo.homepage)
      return {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        htmlUrl: repo.html_url,
        homepage: formattedHomepage,
        language: repo.language,
        starCount: repo.stargazers_count,
        watcherCount: repo.watchers_count,
      }
    })

    return {
      props: {
        username,
        userInfo,
        repos,
      },
    }
  } catch (error) {
    return {
      props: {
        shouldRedirect: true,
      },
    }
  }
}
