import {
  ReposGridContainer,
  RepoCard,
  RepoCardHeader,
  RepoCardFooter,
  SearchReposInput,
} from '../styles/components/reposGrid'
import { Translate, Star, Eye, ArrowSquareOut } from 'phosphor-react'
import { useState } from 'react'

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

interface ReposGridProps {
  repos: Repo[]
}

export function ReposGrid({ repos }: ReposGridProps) {
  const [searchText, setSearchText] = useState('')
  const filteredRepos = repos.filter((repo) =>
    repo.name.toUpperCase().includes(searchText.toUpperCase()),
  )
  return (
    <>
      <SearchReposInput
        type="text"
        placeholder="Search for a repository name"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value)
        }}
      />
      <ReposGridContainer>
        {filteredRepos.map((repo) => {
          return (
            <RepoCard key={repo.id}>
              <RepoCardHeader>
                <h4>{repo.name.replaceAll('_', ' ').replaceAll('-', ' ')}</h4>
                <nav>
                  <a href={repo.htmlUrl}>
                    GITHUB <ArrowSquareOut size={16} />
                  </a>
                  {repo.homepage && (
                    <a href={repo.homepage} target="_blank" rel="noreferrer">
                      WEBSITE <ArrowSquareOut size={16} />
                    </a>
                  )}
                </nav>
              </RepoCardHeader>
              <p>{repo.description ?? 'No description'}</p>
              <RepoCardFooter>
                <span>
                  <Star size={16} weight="fill" /> {repo.starCount}
                </span>
                <span>
                  <Eye size={16} /> {repo.watcherCount}
                </span>
                <span>
                  <Translate size={16} /> {repo.language ?? 'N/A'}
                </span>
              </RepoCardFooter>
            </RepoCard>
          )
        })}
      </ReposGridContainer>
    </>
  )
}
