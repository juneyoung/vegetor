import React from 'react'
import { NextPage } from 'next'
import styled from 'styled-components'

import TopInfoRow from '../components/TopInfoRow'
import ContentBox from '../components/ContentBox'
import Location from '../components/Location'

interface IProps {
  id: number;
}

const Wrap = styled.div`
  height: 100%;
`

const EventPage: NextPage<IProps> = () => {
  return (
    <Wrap>
      <TopInfoRow />
      <ContentBox />
      <Location />
    </Wrap>
  )
}

// ViewPage.getInitialProps = async ({ req }: any) => {

//   return req.query.id
// }

export default EventPage