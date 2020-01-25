import React, { FunctionComponent } from 'react'
import styled from 'styled-components';

interface IProps {
  label: string;
  onClick (e: React.MouseEvent<HTMLElement, MouseEvent>): void;
}

const Container = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: 0 none;
  background-color: #1bcd92;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.57;
  text-align: center;
  color: #ffffff;
  &:hover {
    background-color: rgba(27, 205, 146, .9);
  }
`

const Button: FunctionComponent<IProps> = ({ label, onClick }) => (
  <Container onClick={ (e: React.MouseEvent<HTMLElement, MouseEvent>) => onClick(e) }>
    { label }
  </Container>
)

export default Button
