import Link from 'next/link'
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
        <Link href='/' prefetch>
            <HeaderTitle>{ title }</HeaderTitle>
        </Link>
        {
            isLoggedIn ? <HeaderAvatar src={ avatarUrl } /> : (
                <Link href='/login' prefetch>
                    <HeaderLogin>로그인</HeaderLogin>
                </Link>
            )
        }
    </HeaderContainer>
)

export default Header
