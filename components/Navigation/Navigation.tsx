import React from 'react'
import { Menu, Wrap } from './Navigation.style'

import Link from 'next/link'

const Navigation = () => (
  <Wrap>
    <Link href='/' prefetch>
      <Menu>About</Menu>
    </Link>
    <Link href='/event' prefetch>
      <Menu>Event</Menu>
    </Link>
    <Link href='/place' prefetch>
      <Menu>Place</Menu>
    </Link>
    <Link href='/people' prefetch>
      <Menu>People</Menu>
    </Link>
  </Wrap>
)

export default Navigation
