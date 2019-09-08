import React from 'react'
import { IProps } from './Button.spec'
import { Wrapper } from './Button.style'

const Button = ({ children }: IProps) => <Wrapper>{ children }</Wrapper>

export default Button
