import React from 'react'

import { IProps } from './Button.spec'
import { ButtonContainer } from './Button.style'

const Button = ({ label, onClick }: IProps) => (
  <ButtonContainer onClick={ (e: React.MouseEvent<HTMLElement, MouseEvent>) => onClick(e) }>
    { label }
  </ButtonContainer>
)

export default Button
