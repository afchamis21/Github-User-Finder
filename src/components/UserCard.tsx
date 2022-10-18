import Image from 'next/image'
import { ArrowSquareOut, Users, Buildings, AppWindow } from 'phosphor-react'
import {
  ImageContainer,
  UserCardContainer,
  UserInfoContainer,
  UserInfoFooter,
  UserInfoHeader,
  UserInfoLinks,
} from '../styles/components/userCard'

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

interface UserCardProps {
  userInfo: UserInfo
  username: string
}

export function UserCard({ userInfo }: UserCardProps) {
  return (
    <UserCardContainer>
      <ImageContainer>
        <Image src={userInfo.avatarUrl} alt="" width={148} height={148} />
      </ImageContainer>
      <UserInfoContainer>
        <UserInfoHeader>
          <h2>{userInfo.name}</h2>
          <UserInfoLinks>
            <a href={userInfo.htmlUrl} target="blank">
              GITHUB <ArrowSquareOut size={16} />
            </a>
            {userInfo.blog && (
              <a href={userInfo.blog} target="blank">
                WEBSITE <ArrowSquareOut size={16} />
              </a>
            )}
          </UserInfoLinks>
        </UserInfoHeader>
        <p>{userInfo.bio}</p>
        <UserInfoFooter>
          <span>
            <Users weight="fill" size={16} /> {userInfo.followers}
          </span>
          <span>
            <Users size={16} /> {userInfo.following}
          </span>
          <span>
            <Buildings size={16} weight="fill" />{' '}
            {userInfo.company ?? 'Not employed'}
          </span>
          <span>
            <AppWindow size={16} weight="fill" />
            {userInfo.reposAmount} repos
          </span>
        </UserInfoFooter>
      </UserInfoContainer>
    </UserCardContainer>
  )
}
