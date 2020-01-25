import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface IProps {
    onChange (e: React.FormEvent): void;
}

const Container = styled.div`
  width: 328px;
  height: 40px;
  background-color: #ffffff;
  display: flex;
  box-sizing: border-box;
  box-shadow: inset 0 -1px 0 0 rgba(164, 164, 164, 0.5);
  font-size: 14px;
`

const InputText = styled.input`
  width: 90%;
  height: 100%;
  box-sizing: border-box;
`

const InputTextCheck = styled.img`
  width: 10%;
  height: 100%;
  align-self: stretch;
  display: flex;
  align-items: center;
`


const InputTextComponent: FunctionComponent<IProps> = ({ onChange }) => (
  <Container>
    <InputText onChange={ (e: React.FormEvent) => onChange(e)} />
    <InputTextCheck src='/static/ic-check-primary.svg' />
  </Container>
)

export default InputTextComponent
