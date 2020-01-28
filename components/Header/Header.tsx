import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

interface IProps {
    type: string;
    title: string;
    isLoggedIn: boolean;
    avatarUrl: string;
}

const Container = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 0 16px;
  background-color: rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  positon: fixed;
  top: 0;
  z-index: 99;
`

const HamburgerMenu = styled.img`
  min-width: 26px;
  max-height: 26px;
  cursor: pointer;
`

const Title = styled.h1`
  font-family: BMJUAOTF;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
`

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`

const Link = styled.a`
  font-size: 14px;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
`

const Header: FunctionComponent<IProps> = ({ title, isLoggedIn, avatarUrl }) => (
    <Container>
        <HamburgerMenu src='/static/ic-drawer.svg' />
        <a href='/'>
            <Title>{ title }</Title>
        </a>
        {
            isLoggedIn ? <Avatar src={ avatarUrl } /> : <Link href='/login'>로그인</Link>
        }
    </Container>
)

export default Header
