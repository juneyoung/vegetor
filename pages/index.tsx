import React from 'react'
import styled from 'styled-components'

import Card from '../components/Card/Card'

import { NextPage } from 'next'

const Container = styled.section`
`

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 24px;
`

const IndexPage: NextPage = () => (
  <Container>
    <CardList>
      <Card
        date='2019-07-30'
        title='테스트'
        subscription='내용이 들어갈 자리'
      />
    </CardList>
  </Container>
)

export default IndexPage
