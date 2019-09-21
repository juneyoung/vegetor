import React from 'react'

import { IProps } from './Header.spec'
import {
  HeaderAvatar,
  HeaderContainer,
  HeaderHamburgerMenu,
  HeaderLogin,
  HeaderTitle,
} from './Header.style'

const Header = ({ title, isLoggedIn, avatarUrl }: IProps) => (
    <HeaderContainer>
        <HeaderHamburgerMenu src='/static/ic-drawer.svg' />
        <a href='/'>
            <HeaderTitle>{ title }</HeaderTitle>
        </a>
        {
            isLoggedIn ? <HeaderAvatar src={ avatarUrl } /> : <HeaderLogin href='/login'>로그인</HeaderLogin>

        }
    </HeaderContainer>
)

export default Header
