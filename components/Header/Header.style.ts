import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 0 16px;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 99;
`

export const HeaderHamburgerMenu = styled.img`
  min-width: 26px;
  max-height: 26px;
  cursor: pointer;
`

export const HeaderTitle = styled.h1`
  font-family: BMJUAOTF;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
`

export const HeaderAvatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`

export const HeaderLogin = styled.a`
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
`
