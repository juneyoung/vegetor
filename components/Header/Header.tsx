import React from 'react'
import {
  Host,
  HostIcon,
  HostText,
  Title,
  User,
  UserIcon,
  UserText,
  Wrap
} from './Header.style'

import NextLink from 'next/link'

const Header: React.FC = () => (
  <Wrap>
    <Host>
      <HostIcon className='fas fa-calendar-check' />
      <HostText>Host a Event</HostText>
    </Host>
    <NextLink href='/' prefetch>
      <Title>Vegetor</Title>
    </NextLink>
    <User>
      <UserIcon className='fas fa-leaf' />
      <UserText>Login</UserText>
    </User>
  </Wrap>
)

export default Header
