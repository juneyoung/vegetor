import React from 'react'

import { IProps } from './InputText.spec'
import { InputText, InputTextCheck, InputTextContainer } from './InputText.style'

const InputTextComponent = ({ onChange }: IProps) => (
  <InputTextContainer>
    <InputText onChange={ (e: React.FormEvent) => onChange(e)} />
    <InputTextCheck src='/static/ic-check-primary.svg' />
  </InputTextContainer>
)

export default InputTextComponent
