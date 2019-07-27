import React from "react"
import NextLink from "next/link"
import styled from "styled-components"

const Wrap = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  cursor: pointer;
  align-items: flex-start;
`

const Host = styled.a`
  font-size: 1.4rem;
  text-decoration: none;
`

const HostIcon = styled.i``

const HostText = styled.span`
  font-family: "Righteous", sans-serif;
  margin-left: 8px;
`

const Title = styled.h1`
  font-family: "Righteous", sans-serif;
  font-size: 2.8rem;
  margin-top: 0;
`

const User = styled.div`
  font-family: "Righteous", sans-serif;
  font-size: 1.4rem;
`

const UserIcon = styled.i`
  ${User}:hover & {
    transform: rotate(180deg);
  }
`

const UserText = styled.span`
  margin-left: 8px;
  font-family: "Righteous", sans-serif;
`

const Header: React.FC = () => (
  <Wrap>
    <Host>
      <HostIcon className="fas fa-calendar-check" />
      <HostText>Host a Event</HostText>
    </Host>
    <NextLink href="/" prefetch>
      <Title>Vegetor</Title>
    </NextLink>
    <User>
      <UserIcon className="fas fa-leaf" />
      <UserText>
        Login
      </UserText>
    </User>
  </Wrap>
)

export default Header
