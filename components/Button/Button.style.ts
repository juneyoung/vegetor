import styled from 'styled-components'

export const Wrapper = styled.button`
  width: 201px;
  height: 50px;
  background-color: #60c600;
  border-radius: 4px;
  color: #ffffff;
  font-size: 14px;
  &:hover {
    background-color: rgba(96, 198, 0, 0.8);
  }
  &:active {
    opacity: 0.6;
  }
  &:disabled {
    background-color: #a8a8a8;
  }
`
