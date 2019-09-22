import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  display: flex;
  box-sizing: border-box;
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
  align-self: stretch;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  cursor: pointer;
`

export const HeaderAvatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`

export const HeaderLogin = styled.a`
  align-self: stretch;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
`
