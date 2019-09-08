import styled from 'styled-components'

export const Wrap = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  cursor: pointer;
  align-items: flex-start;
`

export const Host = styled.a`
  font-size: 1.4rem;
  text-decoration: none;
`

export const HostIcon = styled.i``

export const HostText = styled.span`
  font-family: "Righteous", sans-serif;
  margin-left: 8px;
`

export const Title = styled.h1`
  font-family: "Righteous", sans-serif;
  font-size: 2.8rem;
  margin-top: 0;
`

export const User = styled.div`
  font-family: "Righteous", sans-serif;
  font-size: 1.4rem;
`

export const UserIcon = styled.i`
  ${User}:hover & {
    transform: rotate(180deg);
  }
`

export const UserText = styled.span`
  margin-left: 8px;
  font-family: "Righteous", sans-serif;
`
