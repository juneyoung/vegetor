import React from 'react'
import styled from 'styled-components'

import Button from '../components/Button'
import Card from '../components/Card'

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  align-content: flex-end;
`

const IndexPage = () => (
  <Container>
    <Button>버튼</Button>
    <Card date="2019-07-30" title="테스트" subscription="테스테스트테스트테스트테스트스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트테스트" />
  </Container>
)

export default IndexPage