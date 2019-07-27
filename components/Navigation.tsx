import React from "react"
import Link from "next/link"
import styled from "styled-components"

const Wrap = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 48px 0;
`

const Menu = styled.a`
  font-family: "Righteous", sans-serif;
  font-size: 1.8rem;
  cursor: pointer;
  &:hover {
    border-bottom: 1rem solid #fff200;
  }
`

const Navigation = () => (
  <Wrap>
    <Link href="/" prefetch>
      <Menu>About</Menu>
    </Link>
    <Link href="/event" prefetch>
      <Menu>Event</Menu>
    </Link>
    <Link href="/place" prefetch>
      <Menu>Place</Menu>
    </Link>
    <Link href="/people" prefetch>
      <Menu>People</Menu>
    </Link>
  </Wrap>
)

export default Navigation
